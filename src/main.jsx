import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import imageData from './images';
import './style.css';

function App() {
  const [images] = useState(imageData);
  const [pieces, setPieces] = useState([]);
  const [dragged, setDragged] = useState(null);

  function startDrag(event, image, id = null) {
    event.dataTransfer.setData('text/plain', image.src);
    setDragged({ ...image, id: id });
  }

  function dropImage(event) {
    event.preventDefault();
    if (!dragged) return;

    const canvas = event.currentTarget;
    const box = canvas.getBoundingClientRect();

    let x = event.clientX - box.left - canvas.clientLeft - dragged.width / 2;
    let y = event.clientY - box.top - canvas.clientTop - dragged.height / 2;
    x = Math.max(0, Math.min(x, canvas.clientWidth - dragged.width));
    y = Math.max(0, Math.min(y, canvas.clientHeight - dragged.height));

    const newPiece = { ...dragged, x: x, y: y };

    if (dragged.id === null) {
      setPieces([...pieces, { ...newPiece, id: Date.now() }]);
    } else {
      setPieces(pieces.map(piece => piece.id === dragged.id ? newPiece : piece));
    }
    setDragged(null);
  }

  return (
    <main>
      <h1>Face Archive</h1>

      <div className={`canvas ${dragged ? 'dragging' : ''}`}
        onDragOver={event => event.preventDefault()}
        onDrop={dropImage}>
        <img src={images[0].src} alt="Blank face" className="center-face"
          draggable onDragStart={event => startDrag(event, images[0])}
          onDragEnd={() => setDragged(null)} />
        {pieces.map(piece => (
          <img key={piece.id} src={piece.src} alt="Archive piece"
            className="canvas-piece" draggable
            onDragStart={event => startDrag(event, piece, piece.id)}
            onDragEnd={() => setDragged(null)}
            style={{
              width: piece.width,
              height: piece.height,
              left: `clamp(0px, ${piece.x}px, calc(100% - ${piece.width}px))`,
              top: `clamp(0px, ${piece.y}px, calc(100% - ${piece.height}px))`,
              zIndex: piece.isFace ? 1 : 2
            }} />
        ))}
      </div>

      <button onClick={() => setPieces([])}>Reset</button>

      <div className="belt">
        <div className={`belt-track ${dragged ? 'paused' : ''}`}>
          {[...images, ...images].map((image, index) => (
            <div className="plate" key={index}>
              <img src={image.src} alt="Archive piece"
                className={image.isFace ? 'face-thumb' : ''} draggable
                onDragStart={event => startDrag(event, image)}
                onDragEnd={() => setDragged(null)} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
