function choose_random (elements) {
  var randomnumber = Math.floor(Math.random() * (elements.length - 1));
  return elements[randomnumber];
}
