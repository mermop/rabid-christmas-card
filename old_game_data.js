var npcs = {
  josh: {
    name: "Josh Forde",
    lines:{
      encounter: [
        "Josh sees you coming from the corner of his eye and his expression of intense focus turns into a wide grin. He stands up from his chair to face you. \"It's great of you to visit!\" he exclaims. He looks like he wants a HUG."
      ],
      greet: [
        "Josh smiles widely at you.",
      ],
      hug: [
        "You hug Josh. He embraces you like a sibling and pats you on the back. \"I'm just so pleased to see you,\" he says.",
      ],
    }
  },
  rob: {
    name: "Rob Ramsay",
    lines:{
      encounter: [
        "Rob looks up from his computer and sees you. He raises one eyebrow, smiles, and nods knowingly. He removes his headphones, which are pumping house music, to greet you."
      ],
      greet: [
        "Rob leans in conspiratorially. \"Do you know anything about chemistry?\" he asks.",
      ],
      hug: [
        "You hug Rob. A solid embrace.",
      ],
    }
  },
  breccan: {
    name: "Breccan McLeod",
    lines:{
      encounter: [
        "Breccan sees you coming, smiles, and swivels his chair around to greet you. You meet his eyes and he smiles. \"Greetings,\" he says." 
      ],
      greet: [
        "Breccan smiles at you. \"How have you been?\" he asks. As you answer, he nods, and asks follow-up questions. You get the feeling he's really glad you visited.",
      ],
      hug: [
        "As you hug Breccan you note to yourself how nice his suit feels.",
      ],
    }
  },
  merrin: {
    name: "Merrin Macleod",
    lines:{
      encounter: [
        "Merrin is staring intently at the computer nestled in the chaos atop her desk. She hears your approach and turns to face you; her face lights up when she sees it's you. She waves." 
      ],
      greet: [
        "Merrin grins and waves at you.",
      ],
      hug: [
        "You hug Merrin. \"Thank you so much for visiting,\" she says.",
      ],
    }
  },
  eoin: {
    name: "Eoin Kelly",
    lines:{
      encounter: [
        "" 
      ],
      greet: [
        "",
      ],
      hug: [
        "",
      ],
    }
  },
  matt: {
    name: "Mathew Hartley",
    lines:{
      encounter: [
        "" 
      ],
      greet: [
        "",
      ],
      hug: [
        "",
      ],
    }
  },
  lachlan: {
    name: "Lachlan Priest",
    lines:{
      encounter: [
        "" 
      ],
      greet: [
        "",
      ],
      hug: [
        "",
      ],
    }
  },
  megan: {
    name: "Megan Bowra-Dean",
    lines:{
      encounter: [
        "" 
      ],
      greet: [
        "",
      ],
      hug: [
        "",
      ],
    }
  },
}

var locations = {
  outside: {
    name:"Outside Enspiral",
    description:"You are outside Enspiral Space.",
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
    Go("north", "enspiral_space"),
    Go("south", "stairs"),
    Go("west", "toilets")
    ]
  },
  toilets: {
    name:"Toilets",
    description:"These are toilets. I don't know what you expected. You don't really need to go anyway. You are just standing around awkwardly. It is weird.",
    commands:[
    Go("east", "entrance")
    ]
  },
  enspiral_space: {
    name:"Inside Enspiral Space",
    description:"You have entered Enspiral Space.",
    commands:[
    Go("east", "desks"),
    Go("south", "entrance"),
    Go("west", "boardroom")
    ]
  },
  desks: {
    name:"First desks",
    description:"You can see some HIPPIES. To your NORTH is RABID.",
    commands:[
    Go("north", "rabid"),
    Go("west", "enspiral_space")
    ]
  },
  rabid: {
    name:"Rabid land",
    description:"The den of iniquity.",
    commands:[
    Go("south", "desks")
    ]
  }
}