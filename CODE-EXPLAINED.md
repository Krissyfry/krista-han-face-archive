# Explain the project in class

## A short presentation
“My archive is made from my classmates' faces. I separated them into pieces and put them on a moving sushi belt. Players can combine the pieces freely inside a canvas. There is no correct answer. I want to explore how familiar features can become an unfamiliar face.”

## The three state variables

- images: the pictures available on the belt.
- pieces: all the copies the player has placed on the canvas, with their positions.
- dragged: the picture the player is holding right now.

The large blank face in the middle is the first image in the same list. It stays as a starting point; dragging it makes another copy.

useState is React's memory. Calling a setter such as setPieces changes that memory and automatically updates the screen.

## What happens during a drag?

1. onDragStart calls startDrag and remembers the image.
2. onDragOver calls preventDefault to let the canvas accept a drop.
3. onDrop calls dropImage.
4. getBoundingClientRect tells us where the canvas starts on the screen.
5. We subtract the canvas position from the mouse position to get x and y inside it.
6. Math.min and Math.max keep the whole picture inside the edges.
7. A picture taken from the belt gets a new id and is added to the pieces array.
8. A picture already on the canvas keeps its id. map finds that copy and changes its position.
9. setPieces makes React show the new arrangement.

There is no maximum number of copies. An id distinguishes two copies of the same picture.

## What does .map() do?
It turns each item in an array into something on the page. We use it once to display placed pictures and once to display belt pictures. key helps React recognize each element.

## Why the three dots?
The spread syntax (...) copies an array or object. We create a new version rather than changing React's old state directly. [...pieces, newPiece] means “keep the existing pictures, then add this one.”

## How does the animation work?
CSS @keyframes moves the belt from translateX(0) to translateX(-50%). The picture list appears twice, so the second copy is in place when the animation restarts. linear keeps the speed constant and infinite repeats it. Hovering or dragging pauses it.

## Why can the pictures not escape?
The drop function clamps their positions to the available canvas space. CSS clamp also keeps them inside if the window gets narrower. overflow: hidden is a final visual boundary.

## Why do blank faces stay behind?
The center face is at the back. Faces placed on the canvas are at layer 1; the smaller features are at layer 2, so they appear on top.

## Why are there many image files?
The face photos were cut into separate PNG files before the app was written. The React code points to each file directly from images.js.

## What does Reset do?
The button runs `setPieces([])`. That empties the list of pieces on the canvas. The large starting face stays because it is a separate image.

## What is the font?
The page uses a retro terminal font, with a built-in monospace fallback if the online font is unavailable.

## Course topics used
useState, importing data, .map(), event handlers, arrays and objects, and basic CSS. HTML drag/drop events and CSS @keyframes are the extra concepts used to implement the interaction.
