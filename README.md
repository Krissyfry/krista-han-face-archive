# Face Archive

Assignment 3: Interactive Archive — a simple React photo collage.

## Design
Users rearrange photographic fragments freely inside a bordered canvas. A moving sushi belt supplies 30 facial features and 10 blank faces from classmates' portraits. Any image can be copied more than once. There is no correct arrangement: combining familiar pieces creates a new, unfamiliar face. This explores how remembering individual features differs from remembering a whole person.

The interface has one workspace, a large face in the center, an animated belt and a Reset button. There are no levels, scores, feature names or on-screen instructions.

## Run in VS Code
Open this folder, then run:

npm install
npm run dev

Open the local address printed in the terminal.

## Assignment requirements
- At least 5 images: 40 image entries from 10 classmates.
- Rearrangement: drag copies from the belt, then move them around the canvas. Reset removes the placed copies.
- React state: useState stores the images, placed copies and current dragged image. Updating state redraws the page.
- Styling: the canvas has a visible border, highlights during a drag, and contains every image. Pictures use a grab cursor. The belt pauses while dragging or hovering.

## Main files
- src/main.jsx — the React page and drag/drop functions.
- src/images.js — a plain list of image addresses and display sizes.
- src/style.css — basic styling and a CSS animation.
- public/archive — the image files.

## GitHub Pages
The project includes a GitHub Actions workflow.
1. Push this folder's contents to a GitHub repository on the main branch.
2. In repository Settings → Pages, choose GitHub Actions as the source.
3. Open Actions → Publish to GitHub Pages and run the workflow if it has not already run.
4. Submit the repository URL and the Pages URL shown by the successful deployment.

The relative base path in vite.config.js lets images work under a GitHub repository URL.

## Asset preparation
The source photographs were prepared as separate PNG files: eyes, noses, mouths and blank faces. This preparation is separate from the React app; the app simply displays image addresses from images.js.
