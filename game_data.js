function Go(dir, destination) {
  return dir;
}


var locations = {
  outside: {
    name:"Outside Enspiral",
    description:"You are outside Enspiral Space.",
    directions: {
      north: "stairs",
      south: "road",
      west: "bar",
      east: "pandoro"
    },
    commands:[
      Go("left", "stairs")
    ]
  },
  stairs: {
    name:"Enspiral stairs",
    description:"The stairs smell faintly of cleaning supplies.",
    commands:[
    Go("up", "entrance"),
    Go("down", "outside")
    ]
  },
  entrance: {
    name:"Enspiral entrance",
    description:"The sound of the coffee grinder doesn't quite drown out the excited scheming taking place in the kitchen. There are bikes here.",
    commands:[
    Go("south", "stairs"),
    ]
  },
}


