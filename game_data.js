var locations = {
  outside: {
    name:"Outside Enspiral",
    description:"You stand on Allen Street, outside the building that holds Enspiral Space. A sign reading FOOT LAW sways in the characteristic Wellington wind. ",
    directions: {
      north: "stairs",
      south: "nope",
      west: "nope",
      east: "nope"
    },
    corpses: []
  },
  stairs: {
    name:"Enspiral stairwell",
    description:"You are in the stairwell of 22 Allen Street. The lift appears to be permanently slightly ajar, not quite open enough for you to enter. The stairs smell faintly of cleaning supplies. ",
    directions: {
      north: "entrance",
      south: "outside",
      west: "nope",
      east: "nope"
    },
    corpses: []
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
    objects: ["bike"],
    corpses: []
  },
  toilets: {
    name:"Toilets",
    description:"These are toilets. I don't know what you expected. You don't really need to go anyway. You are just standing around awkwardly. It is weird. ",
    directions: {
      north: "nope",
      south: "nope",
      west: "nope",
      east: "entrance"
    },
    corpses: []
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
    objects: ["grinder", "teapot"],
    corpses: []
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
    npcs: ["breccan"],
    corpses: []
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
    objects: ["boxcutter"],
    corpses: []
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
    objects: ["remote"],
    corpses: []
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
    objects: ["ukulele", "hotsauce"],
    corpses: []
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
    objects: ["bottle", "nerfgun"],
    corpses: []
  }
};


var objects = {
  christmas_card: {
    name: "a Christmas card from Rabid",
    on_look: "The Christmas card reads: 'Merry Christmas from Rabid. We are on holidays from December 20 until January 6.' There is an excellent picture in it, but you feel like you can't describe it until you finish the game. "
  },
  bike: {
    name: "a bike",
    on_look: "The bike is yellow. ",
    to_kill: "You tear apart the metal frame of the bike and stab every part into your victim. ",
    kill_fail: "You throw the bike at your victim. It misses. You sheepishly pick it back up. "
  },
  cat: {
    name: "a cat",
    on_look: "The cat is adorable. ",
    to_kill: "You shove the cat into your victim's mouth. The cat eviscerates their throat before both cat and human suffocate. ",
    kill_fail: "Nobody is intimidated by you brandishing this adorable cat."
  },
  nerfgun: {
    name: "a nerf gun",
    on_look: "The nerf gun is bright and cheerful. ",
    to_kill: "You shoot a nerf bullet at your victim. They are puzzled. You seize upon the opportunity to force the brightly coloured plastic weaponry into their brain through their nasal cavity. ",
    kill_fail: "You shoot a nerf bullet at your victim. They are puzzled. So are you. "
  },
  bottle: {
    name: "an empty bottle of wine",
    on_look: "Once this was a cheap bottle of red. Now it is a cheap bottle of nothing.",
    to_kill: "You smash the bottle on your victim's head and stab the jagged edges into their throat. ",
    kill_fail: "You try to ply your victim with alcohol to lower their defences but the bottle is empty. That is a key part of the description. "
  },
  teapot: {
    name: "a teapot",
    on_look: "This is a teapot. It holds tea. ",
    to_kill: "You pour scalding hot tea onto your hapless victim, and smash the teapot over their head. You use the porcelain to slit their throat. ",
    kill_fail: "You foolishly assume that the tea has been poisoned and pour a cup for your victim. It has not been poisoned. It is delicious tea. "
  },
  grinder: {
    name: "a coffee grinder",
    on_look: "The coffee grinder happily grinds coffee. ",
    to_kill: "You grind your victim's beans. Interpret that how you wish. They die of blood loss. ",
    kill_fail: "You grind beans for your victim. They are too coarse for their Aeropress. You cackle victoriously. "
  },
  remote: {
    name: "an air conditioning remote",
    on_look: "A remote control for the air conditioning system. ",
    to_kill: "You point the remote at your victim and press the power button. They immediately collapse in a heap. It turns out they were an android operating on the same frequency as the air conditioning system. ",
    kill_fail: "You point the remote at your victim and press the power button. The air conditioning turns on. The hippies curse you. "
  },
  ukulele: {
    name: "a blue ukulele",
    on_look: "A blue ukulele with black strings. It is out of tune. ",
    to_kill: "You force the ukulele down your victim's throat. ",
    kill_fail: "You play some out of tune songs on the ukulele. It is painful, but not fatal. "
  },
  hotsauce: {
    name: "Josh's famous hot sauce",
    on_look: "A bottle of Josh Forde's famous hot sauce.",
    to_kill: "You shriek, smash the bottle, and stab the victim repeatedly in their eyes. Spicy blood lines the floor. ",
    kill_fail: "You make your victim drink some hot sauce. 'It's pretty good,' they say. Foiled! "
  },
  boxcutter: {
    name: "a box cutter",
    on_look: "A sharp knife for cutting boxes. ",
    to_kill: "You slice a hole in your victim's skull and shove the box cutter inside their head. ",
    kill_fail: "You hand the box cutter to your victim. They hand it back. Foiled! "
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
      ],
      death: [
        "The hippies lie prone on the floor. You try to count them but they are too many. Look, they were weird, and they were android drones controlled by some hippie mastermind, but they were kind. It was unnecessary to kill them. "
      ],
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
      death: [
        "Blood from Josh's corpse slowly pools on the wooden floor. His once-joyful face grins no more. Why did you do it? "
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
      death: [
        "Rob seems smaller now that he is devoid of the mischievous character that once brought laughter and joy to the world. The injuries you so needlessly inflicted mar his body. You can stop now. You have done enough damage. "
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
      death: [
        "Breccan's long legs are sprawled at unnatural angles, his lovely suit ripped and stained by your barbarism. You have destroyed something beautiful. You can't take that back now. "
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
      death: [
        "Merrin's ginger hair is matted red with blood, her face twisted in horror. She created this game and you turned it against her. You are a monster. "
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
      death: [
        "Eoin's mangled corpse lies still on the ground. What is wrong with you? What did this sweet, gentle Irishman ever do to you? "
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
      death: [
        "Music is still playing in Matt's headphones, a little way from his bloody corpse. The tinny sound of guitar wafts up to your ears. You don't deserve to hear this while Matt can't. It's just wrong. You are cruel and undeserving. "
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
      death: [
        "Lachlan is unrecognisable in death, his characteristic energy stolen by a thoughtless, cruel murderer. Stolen by you. "
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
      death: [
        "Megan's face is mercifully obscured by her fine blonde hair. You can't see the expression belying the terror she felt in her last moments. It didn't have to be this way. "
      ],
    }
  },
};

// Transitive: requires a subject and an object - [verb] [noun] with [noun]; [verb] [noun] to [noun]
// Intransitive: requires one object only - [verb] [noun]
// Alone: can be used alone - [verb]

var verbs = {
  look: {
    aliases: ["look", "l", "look at"],
    funct: Look,
    alone: true,
    transitive: false,
    intransitive: true
  },
  help: {
    aliases: ["help", "h"],
    funct: "Help",
    alone: true,
    transitive: false,
    intransitive: false
  },
  inventory: {
    aliases: ["inventory", "i"],
    funct: "Inventory",
    alone: true,
    transitive: false,
    intransitive: false
  },
  go: {
    aliases: ["go", "walk"],
    funct: "Go",
    alone: false,
    transitive: false,
    intransitive: true
  },
  hug: {
    aliases: ["hug", "embrace"],
    funct: "Hug",
    alone: false,
    transitive: false,
    intransitive: true
  },
  take: {
    aliases: ["take", "pick up", "get", "steal"],
    funct: "Take",
    alone: false,
    transitive: false,
    intransitive: true
  },
  kill: {
    aliases: ["kill", "attack", "murder"],
    funct: "Kill",
    alone: false,
    transitive: true,
    intransitive: false
  },
  greet: {
    aliases: ["greet", "talk to"],
    funct: "Greet",
    alone: false,
    transitive: false,
    intransitive: true
  },
  ride: {
    aliases: ["ride"],
    funct: "Ride",
    alone: false,
    transitive: true,
    intransitive: false
  },
  use: {
    aliases: ["use"],
    funct: "Use",
    alone: false,
    transitive: true,
    intransitive: true
  }
}

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

