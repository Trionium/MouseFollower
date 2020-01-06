function pos(e) {
  // Get x and y positions
  let x = e.clientX;
  let y = e.clientY;
  let position = "X: " + x + " Y: " + y;
  let element = document.querySelector('#circle');
  let compStyle = window.getComputedStyle(element);
  // Get height and width of circle  to center it
  let h = compStyle.getPropertyValue('height');
  let w = compStyle.getPropertyValue('width');
  // Write positions to screen
  document.getElementById("position").innerHTML = position;
  // Set top and left positions of circle
  element.style.top = (y - parseInt(h)/2) + "px";
  element.style.left = (x - parseInt(w)/2) + "px";
}
