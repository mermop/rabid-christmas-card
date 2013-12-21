var locations = {
  outside: {
    name:"Outside Enspiral",
    description:"You stand on Allen Street, outside the building that holds Enspiral Space. A sign reading FOOT LAW sways in the characteristic Wellington wind. ",
    directions: {
      north: "stairs",
      south: "nope",
      west: "nope",
      east: "nope"
    }
  },
  stairs: {
    name:"Enspiral stairwell",
    description:"You are in the stairwell of 22 Allen Street. The lift appears to be permanently slightly ajar, not quite open enough for you to enter. The stairs smell faintly of cleaning supplies. ",
    directions: {
      north: "entrance",
      south: "outside",
      west: "nope",
      east: "nope"
    }
  },
  entrance: {
    name:"Enspiral entrance",
    description:"You are in the entranceway of Enspiral Space. The sound of the coffee grinder doesn't quite drown out the excited scheming taking place in the kitchen. ",
    directions: {
      north: "enspiral_space",
      south: "stairs",
      west: "toilets",
      east: "kitchen"
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
  kitchen: {
    name:"Kitchen",
    description:"You are in the kitchen of Enspiral Space. The scent of freshly ground coffee mingles with the smell of halloumi someone is cooking on the grill. ",
    directions: {
      north: "nope",
      south: "nope",
      west: "entrance",
      east: "nope"
    },
    npcs: ["rob", "matt"],
    objects: ["coffee grinder", "teapot"]
  },
  enspiral_space: {
    name:"Inside Enspiral Space",
    description:"You have entered Enspiral Space. The walls are covered with posters promoting various events organised by schemers within the office. ",
    directions: {
      north: "desks",
      south: "entrance",
      west: "boardroom",
      east: "backspace"
    },
    npcs: ["breccan"]
  },
  backspace: {
    name:"The back space",
    description:"You are in the back space, also known as the server room and, according to the chalk sign on the door, the 'Magical Room of Magicalness'. Servers hum. Ceiling-high shelves are piled up with stuff. ",
    directions: {
      north: "nope",
      south: "nope",
      west: "enspiral_space",
      east: "nope"
    },
    npcs: ["merrin"],
    objects: ["xylophone", "box cutter"]
  },
  boardroom: {
    name:"Board Room",
    description:"You are in the Enspiral Space boardroom. A diagram on the whiteboard attempts to explain some kind of social enterprise; you can't make out exactly what the excited sprawl says, but it includes the phrases 'boat', 'synergy', and, concerningly, 'world domination'. ",
    directions: {
      north: "nope",
      south: "nope",
      west: "nope",
      east: "enspiral_space"
    },
    npcs: ["eoin"],
    objects: ["remote"]
  },
  desks: {
    name:"First desks",
    description:"You stand between two rows of long white desks which reach up to the windows. There is an industrious murmur emanating from the Enspiralites on either side. ",
    directions: {
      north: "rabid",
      south: "enspiral_space",
      west: "nope",
      east: "nope"
    },
    npcs: ["josh", "hippies"],
    objects: ["ukulele", "hot sauce"]
  },
  rabid: {
    name:"Rabid land",
    description:"You stand in the natural habitat of the Rabidier. The walls are somewhat chaotically decorated with postcards, system architecture diagrams, and star charts. ",
    directions: {
      north: "nope",
      south: "desks",
      west: "nope",
      east: "nope"
    },
    npcs: ["megan", "lachlan"],
    objects: ["bottle", "nerf gun", "copy of The Art of Computer Programming"]
  }
};


var objects = {
  christmas_card: {
    name: "a Christmas card from Rabid",
    on_look: "The Christmas card reads: 'Merry Christmas from Rabid. We are on holidays from December 20 until January 6.' There is an excellent picture in it, but you feel like you can't describe it until you finish the game. "
  },
  bike: {
    name: "a bike",
    on_look: "The bike is yellow. "
  },
  cat: {
    name: "a cat",
    on_look: "The cat is adorable. "
  }
};

var npcs = {
  hippies: {
    name: "The Hippies",
    hugged: true,
    lines: {
      encounter: [
      "The hippies have hidden the air conditioning remote control. They look smug. "
      ],
      greet: [
      "The hippies, as one, bleat hello."
      ],
      hug: [
      "You attempt to hug the homogenous mass of hippies, but they are too many and too far apart for your arms to encompass."
      ]
    }
  },
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


var images = {
  success_christmas_tree:  
      "<pre>"+
      "" +"\n"+
      "                ---------------------------------------------------" +"\n"+ 
      "                         SEASONS GREETINGS FROM RABID" +"\n"+
      "                ---------------------------------------------------" +"\n"+ 
      "" +"\n"+
      "                   May a rabbit, a bird, and a mouse with ladder" +"\n"+
      "                   decorate your tree." +"\n"+
      "" +"\n"+
      "" +"\n"+
      "                                         .\\/.                           *" +"\n"+
      "         +                     +        >><><<" +"\n"+
      "                                         '/\\'     *" +"\n"+
      "                                        /`x.`\\                  +" +"\n"+
      "                 *                     /;<> @ \\      ,    \\|" +"\n"+
      "                            *         /& `';;;_\\     \\'-,_/|" +"\n"+
      "                                     |./ * O (_)|     '-./ )-,_            *" +"\n"+
      "                                     \\ o .--. ! /       ( )`-._\\" +"\n"+
      "             +                      .;`-'(_) '-`'.     ,;v  " +"\n"+
      "                                   /_`;;,   x <>* \\ ,,;'            +" +"\n"+
      "                                  /(_)  `';;;;,,_,;\\`" +"\n"+
      "                           +      |   !/ ^ &  `(_) |" +"\n"+
      "              __   _              \\^ @/`\\ . !/`\\  O/      +" +"\n"+
      "             /  `\\/ `\\           .'`-' + '--' _ '-`'.                    +" +"\n"+
      "             |/`\\ \\| |          /;;<> !_  o  (_) + . \\" +"\n"+
      "         *       \\ \\_|         /  `';;(_)   .      _x ;  \\   (()" +"\n"+
      "                 /   `\\_      | _' &   `';;;, O ^ (_),;\\-'@_<\"/  _, *" +"\n"+
      "                 |   ^  y,-._ |(_) / ' *    `'';;;;'`  |\\_.\\` \\ (" +"\n"+
      "                 )   _=_/,-;_)\\   /`\\<>  /``\\ @  /`\\ ! / \\ _`) \\_) " +"\n"+
      "        .  '  .-'   --..' /  .'`-' x '--' .  '--'_. '-`'. \\,(__/  " +"\n"+
      "            .'      .___.'  /;;;,,   O . _ +    (_) .  * \\ \\' \\      '" +"\n"+
      "       .   /   '-.  /      /!  `';;;;,, (_)   ^    & <>,;;\\ \\-'\\ '       ." +"\n"+
      "         _|       \\/\\   ' |  @   (_)''';;;;,, o  ,,;;;''` x| \\.-\\" +"\n"+
      "        {_}       |_/ .   | *   o    ' _   `';;;'` O   (_) | .\\_.\\   '      ." +"\n"+
      "          \\   ,_./ \\__    |  _ + .  ^ (_) .o    _'  . +    |   \\  \\" +"\n"+
      "       '   `.  \\__\\___)   \\ (_)  __  &    __.  (_) __ !  @ /    \\- \\   '" +"\n"+
      "         .   \\____)        '._.'`  `'._.;;;;;;._.'`  `'._.' .    \\" +"\n"+
      "                     '  jgs.      '        .       '  .            '" +"\n"+
      "            '   .            .         .        '          '" +"\n"+
      "" +"\n"+
      "</pre>"+
      "<!-- Image courtesy of http://www.geocities.com/spunk1111/xmas.htm -->"
};

