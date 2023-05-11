function createSVG(text, textColor, shape, shapeColor) {
  let shapeMarkup;

  // Generate shape based on shape parameter
  if (shape === "Circle") {
    shapeMarkup =
      '<circle cx="50%" cy="50%" r="50%" fill="' + shapeColor + '" />';
  } else if (shape === "Triangle") {
    shapeMarkup =
      '<polygon points="50%,0 0,100% 100%,100%" fill="' + shapeColor + '" />';
  } else {
    shapeMarkup =
      '<rect width="100%" height="100%" fill="' + shapeColor + '" />';
  }

  // Define the SVG markup as a string
  const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        ${shapeMarkup}
        <text x="50%" y="50%" text-anchor="middle" font-size="100" fill="${textColor}">${text}</text>
      </svg>
    `;

  // Return the SVG markup as a Buffer
  return Buffer.from(svgMarkup);
}

// Export the createSVG function
module.exports = { createSVG };
