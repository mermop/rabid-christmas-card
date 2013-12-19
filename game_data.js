var locations = {
  outside: {
    name:"Outside Enspiral",
    description:"You are outside Enspiral Space.",
    directions: {
      north: "stairs",
      south: "road",
      west: "bar",
      east: "pandoro"
    }
  },
  stairs: {
    name:"Enspiral stairs",
    description:"The stairs smell faintly of cleaning supplies.",
    directions: {
      north: "stairs",
      south: "road",
      west: "bar",
      east: "pandoro"
    }
  },
  entrance: {
    name:"Enspiral entrance",
    description:"The sound of the coffee grinder doesn't quite drown out the excited scheming taking place in the kitchen. There are bikes here.",
    directions: {
      north: "stairs",
      south: "road",
      west: "bar",
      east: "pandoro"
    }
  }
}


var objects = {
  christmas_card: {
    name: "A Christmas card from Rabid",
    on_look: "The Christmas card reads: 'Merry Christmas from Rabid. We are on holidays from December 20 until January 6.' There is an excellent picture in it, but you feel like you can't describe it until you finish the game."
  },
  bike: {
    name: "A bike",
    on_look: "The bike is yellow."
  }
}