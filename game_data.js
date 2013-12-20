var locations = {
  outside: {
    name:"Outside Enspiral",
    description:"You are outside Enspiral Space. ",
    directions: {
      north: "stairs",
      south: "nope",
      west: "nope",
      east: "nope"
    }
  },
  stairs: {
    name:"Enspiral stairs",
    description:"The stairs smell faintly of cleaning supplies. ",
    directions: {
      north: "entrance",
      south: "outside",
      west: "nope",
      east: "nope"
    }
  },
  entrance: {
    name:"Enspiral entrance",
    description:"The sound of the coffee grinder doesn't quite drown out the excited scheming taking place in the kitchen. ",
    directions: {
      north: "enspiral_space",
      south: "stairs",
      west: "toilets",
      east: "nope"
    },
    objects: ["bike"]
  },
  toilets: {
    name:"Toilets",
    description:"These are toilets. I don't know what you expected. You don't really need to go anyway. You are just standing around awkwardly. It is weird. ",
    directions: {
      north: "nope",
      south: "nope",
      west: "nope",
      east: "entrance"
    }
  },
  enspiral_space: {
    name:"Inside Enspiral Space",
    description:"You have entered Enspiral Space. ",
    directions: {
      north: "desks",
      south: "entrance",
      west: "nope",
      east: "nope"
    }
  },
  desks: {
    name:"First desks",
    description:"You can see some hippies. To your north is Rabid. ",
    directions: {
      north: "rabid",
      south: "enspiral_space",
      west: "nope",
      east: "nope"
    },
    npcs: ["josh"]
  },
  rabid: {
    name:"Rabid land",
    description:"The den of iniquity. ",
    directions: {
      north: "nope",
      south: "desks",
      west: "nope",
      east: "nope"
    },
    npcs: ["rob", "megan", "breccan", "merrin", "lachlan", "matt", "eoin"]
  }
};


var objects = {
  christmas_card: {
    name: "A Christmas card from Rabid",
    on_look: "The Christmas card reads: 'Merry Christmas from Rabid. We are on holidays from December 20 until January 6.' There is an excellent picture in it, but you feel like you can't describe it until you finish the game. "
  },
  bike: {
    name: "A bike",
    on_look: "The bike is yellow. "
  }
};

var npcs = {
  josh: {
    name: "Josh Forde",
    lines:{
      encounter: [
        "Josh is absorbed in a video of Mr Krabs from Spongebob explaining his fiscal passions. Josh sees you coming from the corner of his eye and his expression of intense focus turns into a wide grin. He stands up from his chair to face you. \"It's great of you to visit!\" he exclaims. He looks like he wants a HUG. "
      ],
      greet: [
        "Josh smiles widely at you. ",
      ],
      hug: [
        "You hug Josh. He embraces you like a sibling and pats you on the back. \"I'm just so pleased to see you,\" he says. ",
      ],
    }
  },
  rob: {
    name: "Rob Ramsay",
    lines:{
      encounter: [
        "Rob looks up from his computer and sees you. He raises one eyebrow, smiles, and nods knowingly. He removes his headphones, which are pumping house music, to greet you. "
      ],
      greet: [
        "Rob leans in conspiratorially. \"Do you know anything about chemistry?\" he asks. ",
      ],
      hug: [
        "You hug Rob. A solid embrace, but now you can't find your wallet. ",
      ],
    }
  },
  breccan: {
    name: "Breccan McLeod",
    lines:{
      encounter: [
        "Breccan sees you coming, smiles, and swivels his chair around to greet you. You meet his eyes and he smiles. \"Greetings,\" he says. "
      ],
      greet: [
        "Breccan smiles at you. \"How have you been?\" he asks. As you answer, he nods, and asks follow-up questions. You get the feeling he's really glad you visited. ",
      ],
      hug: [
        "As you hug Breccan you note to yourself how nice his suit feels. ",
      ],
    }
  },
  merrin: {
    name: "Merrin Macleod",
    lines:{
      encounter: [
        "Merrin is staring intently at the computer nestled in the chaos atop her desk. She hears your approach and turns to face you; her face lights up when she sees it's you. She waves. "
      ],
      greet: [
        "Merrin grins and waves at you. ",
      ],
      hug: [
        "You hug Merrin. \"Thank you so much for visiting,\" she says. ",
      ],
    }
  },
  eoin: {
    name: "Eoin Kelly",
    lines:{
      encounter: [
        "Eoin, that burly and joyous Irish gentleman, is neatly writing notes on a piece of A4 paper. "
      ],
      greet: [
        "'Hallo,' says Eoin in a rich Irish baritone. ",
      ],
      hug: [
        "You hug Eoin. You feel yourself mentally describing it as a 'bear hug'. His sonorous baritone chuckle echoes across the room. ",
      ],
    }
  },
  matt: {
    name: "Matt Hartley",
    lines:{
      encounter: [
        "Matt has his headphones on and is deep in thought, enthralled by the inner workings of Ruby on Rails and the Two Door Cinema Club album being routed into his ears. "
      ],
      greet: [
        "You greet Matt and he takes a second to disconnect himself from his current thoughts, but when he does his eyes light up and he smiles. 'Hey, it's good to see you!' he exclaims. ",
      ],
      hug: [
        "You hug Matt. He rubs your back appreciatively. ",
      ],
    }
  },
  lachlan: {
    name: "Lachlan Priest",
    lines:{
      encounter: [
        "Lachlan taps his feet as he speeds through the codebase. "
      ],
      greet: [
        "'Lachlan,' you say. He continues coding, absorbed in his task. 'Lachlan,' you repeat louder. He turns his head and grins. 'Hiiiiiiii!!!' he cries. He looks like he wants a hug. ",
      ],
      hug: [
        "He bounds over to you and gives an energetic embrace. You feel safe in the arms of such an experienced hugger. ",
      ],
    }
  },
  megan: {
    name: "Megan Bowra-Dean",
    lines:{
      encounter: [
        "Megan is chuckling to herself, quietly amused by some database queries. 'Hehehe. Those noobs,' she gently chides. "
      ],
      greet: [
        "Momentary confusion subsides into a smile. 'I wasn't expecting you!' she delightedly cries. ",
      ],
      hug: [
        "You note the floral scent emanating from Megan's long, beautiful hair as she embraces you. ",
      ],
    }
  },
};
