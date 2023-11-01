/*
 * All data gathered from a modified version of polarstoat/stardew-crop-data
 */

// Crop List
var crops = {
  "amaranth": {
    "name": "Amaranth",
    "url": "http://stardewvalleywiki.com/Amaranth",
    "img": "amaranth.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 150,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "grape": {
    "name": "Grape",
    "url": "http://stardewvalleywiki.com/Grape",
    "img": "grape.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 80,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "hops": {
    "name": "Hops",
    "url": "http://stardewvalleywiki.com/Hops",
    "img": "hops.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 1
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 25,
      "keg": 300,
      "jarType": "Pickles",
      "kegType": "Pale Ale"
    }
  },
  "pineapple": {
    "name": "Pineapple",
    "url": "http://stardewvalleywiki.com/Pineapple",
    "img": "pineapple.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "Island Trader",
      "specialUrl": "http://stardewvalleywiki.com/Island_Trader"
    },
    "growth": {
      "initial": 14,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 300,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "sweetgemberry": {
    "name": "Sweet Gem Berry",
    "url": "http://stardewvalleywiki.com/Sweet_Gem_Berry",
    "img": "sweetgemberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 24,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 3000
    }
  },
  "tealeaves": {
    "name": "Tea Leaves",
    "url": "http://stardewvalleywiki.com/Tea_Leaves",
    "img": "tealeaves.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 20,
      "regrow": 1
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50,
      "keg": 100,
      "jarType": "Pickles",
      "kegType": "Tea"
    }
  },
  "fairyrose": {
    "name": "Fairy Rose",
    "url": "http://stardewvalleywiki.com/Fairy_Rose",
    "img": "fairyrose.png",
    "seeds": {
      "pierre": 200,
      "joja": 250,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    }
  },
  "tulip": {
    "name": "Tulip",
    "url": "http://stardewvalleywiki.com/Tulip",
    "img": "tulip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    }
  },
  "bluejazz": {
    "name": "Blue Jazz",
    "url": "http://stardewvalleywiki.com/Blue_Jazz",
    "img": "bluejazz.png",
    "seeds": {
      "pierre": 30,
      "joja": 37,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    }
  },
  "sunflower": {
    "name": "Sunflower",
    "url": "http://stardewvalleywiki.com/Sunflower",
    "img": "sunflower.png",
    "seeds": {
      "pierre": 200,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    }
  },
  "coffeebean": {
    "name": "Coffee Bean",
    "url": "http://stardewvalleywiki.com/Coffee_Bean",
    "img": "coffeebean.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 10,
      "regrow": 2
    },
    "produce": {
      "extra": 3,
      "extraPerc": 1,
      "price": 15,
      "keg": 150 / 5,
      "kegType": "Coffee"
    }
  },
  "poppy": {
    "name": "Poppy",
    "url": "http://stardewvalleywiki.com/Poppy",
    "img": "poppy.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    }
  },
  "summerspangle": {
    "name": "Summer Spangle",
    "url": "http://stardewvalleywiki.com/Summer_Spangle",
    "img": "summerspangle.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    }
  },
  "parsnip": {
    "name": "Parsnip",
    "url": "http://stardewvalleywiki.com/Parsnip",
    "img": "parsnip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "greenbean": {
    "name": "Green Bean",
    "url": "http://stardewvalleywiki.com/Green_Bean",
    "img": "greenbean.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 40,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cauliflower": {
    "name": "Cauliflower",
    "url": "http://stardewvalleywiki.com/Cauliflower",
    "img": "cauliflower.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 175,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "potato": {
    "name": "Potato",
    "url": "http://stardewvalleywiki.com/Potato",
    "img": "potato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 80,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "garlic": {
    "name": "Garlic",
    "url": "http://stardewvalleywiki.com/Garlic",
    "img": "garlic.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "taroroot": {
    "name": "Taro Root",
    "url": "http://stardewvalleywiki.com/Taro_Root",
    "img": "taroroot.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 24,
      "specialLoc": "Island Trader",
      "specialUrl": "http://stardewvalleywiki.com/Island_Trader"
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "kale": {
    "name": "Kale",
    "url": "http://stardewvalleywiki.com/Kale",
    "img": "kale.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 110,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "unmilledrice" : {
    "name": "Unmilled Rice",
    "url": "http://stardewvalleywiki.com/Unmilled_Rice",
    "img": "unmilledrice.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.11,
      "price": 30,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "rhubarb": {
    "name": "Rhubarb",
    "url": "http://stardewvalleywiki.com/Rhubarb",
    "img": "rhubarb.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 220,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "melon": {
    "name": "Melon",
    "url": "http://stardewvalleywiki.com/Melon",
    "img": "melon.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 250,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "tomato": {
    "name": "Tomato",
    "url": "http://stardewvalleywiki.com/Tomato",
    "img": "tomato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.05,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "blueberry": {
    "name": "Blueberry",
    "url": "http://stardewvalleywiki.com/Blueberry",
    "img": "blueberry.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "extra": 2,
      "extraPerc": 1,
      "price": 50,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "hotpepper": {
    "name": "Hot Pepper",
    "url": "http://stardewvalleywiki.com/Hot_Pepper",
    "img": "hotpepper.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.03,
      "price": 40,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "wheat": {
    "name": "Wheat",
    "url": "http://stardewvalleywiki.com/Wheat",
    "img": "wheat.png",
    "seeds": {
      "pierre": 10,
      "joja": 12,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "keg": 200,
      "jarType": "Pickles",
      "kegType": "Beer"
    }
  },
  "radish": {
    "name": "Radish",
    "url": "http://stardewvalleywiki.com/Radish",
    "img": "radish.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "redcabbage": {
    "name": "Red Cabbage",
    "url": "http://stardewvalleywiki.com/Red_Cabbage",
    "img": "redcabbage.png",
    "seeds": {
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 260,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "starfruit": {
    "name": "Starfruit",
    "url": "http://stardewvalleywiki.com/Starfruit",
    "img": "starfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 750,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "corn": {
    "name": "Corn",
    "url": "http://stardewvalleywiki.com/Corn",
    "img": "corn.png",
    "seeds": {
      "pierre": 150,
      "joja": 187,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 50,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "eggplant": {
    "name": "Eggplant",
    "url": "http://stardewvalleywiki.com/Eggplant",
    "img": "eggplant.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.002,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "artichoke": {
    "name": "Artichoke",
    "url": "http://stardewvalleywiki.com/Artichoke",
    "img": "artichoke.png",
    "seeds": {
      "pierre": 30,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 160,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "pumpkin": {
    "name": "Pumpkin",
    "url": "http://stardewvalleywiki.com/Pumpkin",
    "img": "pumpkin.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 320,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "bokchoy": {
    "name": "Bok Choy",
    "url": "http://stardewvalleywiki.com/Bok_Choy",
    "img": "bokchoy.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "yam": {
    "name": "Yam",
    "url": "http://stardewvalleywiki.com/Yam",
    "img": "yam.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 160,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cranberries": {
    "name": "Cranberries",
    "url": "http://stardewvalleywiki.com/Cranberries",
    "img": "cranberries.png",
    "seeds": {
      "pierre": 240,
      "joja": 300,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 75,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "beet": {
    "name": "Beet",
    "url": "http://stardewvalleywiki.com/Beet",
    "img": "beet.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "ancientfruit": {
    "name": "Ancient Fruit",
    "url": "http://stardewvalleywiki.com/Ancient_Fruit",
    "img": "ancientfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 450,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 28,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 550,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "cactusfruit": {
    "name": "Cactus Fruit",
    "url": "http://stardewvalleywiki.com/Cactus_Fruit",
    "img": "cactusfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 150,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 12,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 75,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "strawberry": {
    "name": "Strawberry",
    "url": "http://stardewvalleywiki.com/Strawberry",
    "img": "strawberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Egg Festival",
      "specialUrl": "http://stardewvalleywiki.com/Egg_Festival"
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.02,
      "price": 120,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "springseeds": {
    "name": "Spring Seeds",
    "url": "http://stardewvalleywiki.com/Spring_Seeds",
    "img": "springseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Wild Horseradish + Daffodil + Leek + Dandelion) / 4
      "price": (50 + 30 + 60 + 40) / 4
    },
    "isWildseed": true
  },
  "summerseeds": {
    "name": "Summer Seeds",
    "url": "http://stardewvalleywiki.com/Summer_Seeds",
    "img": "summerseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Spice Berry + Grape + Sweet Pea) / 3
      "price": (80 + 80 + 50) / 3,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
  "fallseeds": {
    "name": "Fall Seeds",
    "url": "http://stardewvalleywiki.com/Fall_Seeds",
    "img": "fallseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Blackberry + Common Mushroom + Hazelnut + Wild Plum) / 4
      "price": (20 + 40 + 90 + 80) / 4,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
  "winterseeds": {
    "name": "Winter Seeds",
    "url": "http://stardewvalleywiki.com/Winter_Seeds",
    "img": "winterseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Crocus + Crystal Fruit + Snow Yam + Winter Root) / 4
      "price": (60 + 150 + 100 + 70) / 4,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
  "paleberry": {
    "name": "Pale Berry",
    "url": "https://www.nexusmods.com/stardewvalley/mods/6626",
    "img": "paleberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 110,
      "specialLoc": "Umuwi Vendor",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/6626"
    },
    "growth": {
      "initial": 9,
      "regrow": 6
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.3,
      "price": 100,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "eggroot": {
    "name": "Eggroot",
    "url": "https://www.nexusmods.com/stardewvalley/mods/6626",
    "img": "eggroot.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 180,
      "specialLoc": "Umuwi Vendor",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/6626"
    },
    "growth": {
      "initial": 14,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 255,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "sourpotato": {
    "name": "Sour Potato",
    "url": "https://www.nexusmods.com/stardewvalley/mods/6626",
    "img": "sourpotato.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 70,
      "specialLoc": "Umuwi Vendor",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/6626"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.6,
      "price": 70,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "thornpepper": {
    "name": "Thorn Pepper",
    "url": "https://www.nexusmods.com/stardewvalley/mods/6626",
    "img": "thornpepper.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Umuwi Vendor",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/6626"
    },
    "growth": {
      "initial": 10,
      "regrow": 6
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.5,
      "price": 50,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "ghostcabbage": {
    "name": "Ghost Cabbage",
    "url": "https://www.nexusmods.com/stardewvalley/mods/6626",
    "img": "ghostcabbage.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Umuwi Vendor",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/6626"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.3,
      "price": 200,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "asparagus": {
    "name": "Asparagus",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "asparagus.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 45,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "basil": {
    "name": "Basil",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "basil.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 7,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 12,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "bellpepper": {
    "name": "Bell Pepper",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "bellpepper.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 67,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "broccoli": {
    "name": "Broccoli",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "broccoli.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 105,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 170,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "butternutsquash": {
    "name": "Butternut Squash",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "butternutsquash.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 45,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 180,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "ph_carrot": {
    "name": "PH Carrot",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "ph_carrot.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 25,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 40,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "chard": {
    "name": "Chard",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "chard.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 105,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 156,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "cucumber": {
    "name": "Cucumber",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "cucumber.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 135,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 8,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 32,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "currant": {
    "name": "Currant",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "currant.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 45,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 8,
      "regrow": 2
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 18,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "dragonfruit": {
    "name": "Dragon Fruit",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "dragonfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 300,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 17,
      "regrow": 6
    },
    "produce": {
      "extra": 6,
      "extraPerc": 0.05,
      "price": 110,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "elderberry": {
    "name": "Elderberry",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "elderberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 52,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 9,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "fieldpea": {
    "name": "Field Pea",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "fieldpea.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 50,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 7,
      "regrow": 4
    },
    "produce": {
      "extra": 3,
      "extraPerc": 0.3,
      "price": 20,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "huckleberry": {
    "name": "Huckleberry",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "huckleberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 225,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 7,
      "regrow": 3
    },
    "produce": {
      "extra": 6,
      "extraPerc": 0.1,
      "price": 70,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "lentil": {
    "name": "Lentil",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "lentil.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 34,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 48,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "lettuce": {
    "name": "Lettuce",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "lettuce.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 120,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 180,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "ph_onion": {
    "name": "PH Onion",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "ph_onion.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 60,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 56,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "parsley": {
    "name": "Parsley",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "parsley.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 12,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 16,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "peanut": {
    "name": "peanut",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "peanut.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 112,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 5,
      "extraPerc": 0.1,
      "price": 50,
    },
  },
  "quince": {
    "name": "Quince",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "quince.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 120,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 9,
      "regrow": 3
    },
    "produce": {
      "extra": 3,
      "extraPerc": 0.2,
      "price": 52,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "raspberry": {
    "name": "Raspberry",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "raspberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 40,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 7,
      "regrow": 3
    },
    "produce": {
      "extra": 5,
      "extraPerc": 0.5,
      "price": 15,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "silvergourd": {
    "name": "Silver Gourd",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "silvergourd.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 138,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 193,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "soy": {
    "name": "Soy",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "quince.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 96,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 5,
      "regrow": 2
    },
    "produce": {
      "extra": 3,
      "extraPerc": 0.2,
      "price": 32,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "sweetpotato": {
    "name": "Sweet Potato",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "sweetpotato.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 120,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 3,
      "extraPerc": 0.3,
      "price": 44,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "watermelon": {
    "name": "Watermelon",
    "url": "https://www.nexusmods.com/stardewvalley/mods/9949",
    "img": "watermelon.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 95,
      "specialLoc": "PH Stand",
      "specialUrl": "https://www.nexusmods.com/stardewvalley/mods/9949"
    },
    "growth": {
      "initial": 12,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 135,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "loc_carrot": {
    "name": "LoC Carrot",
    "url": "https://www.nexusmods.com/stardewvalley/mods/6830",
    "img": "loc_carrot.png",
    "seeds": {
      "pierre": 25,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 40,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "loc_onion": {
    "name": "LoC Onion",
    "url": "https://www.nexusmods.com/stardewvalley/mods/6830",
    "img": "loc_onion.png",
    "seeds": {
      "pierre": 45,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "cabbage": {
    "name": "Cabbage",
    "url": "https://www.nexusmods.com/stardewvalley/mods/6830",
    "img": "cabbage.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 145,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "voidroot": {
    "name": "Void Root",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Void_Root",
    "img": "voidroot.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Monster Drop",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 235,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "monstermushroom": {
    "name": "Monster Mushroom",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Monster_Mushroom",
    "img": "monstermushroom.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Monster Drop",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 850,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "monsterfruit": {
    "name": "Monster Fruit",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Monster_Fruit",
    "img": "monsterfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Monster Drop",
      "specialUrl": ""
    },
    "growth": {
      "initial": 25,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 1525,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "ancientfiber": {
    "name": "Ancient Fiber",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Ancient_Fiber",
    "img": "ancientfiber.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Artifact Spots in Secret Woods",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 4,
      "extraPerc": 0.05,
      "price": 145,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "slimeberry": {
    "name": "Slime Berry",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Slime_Berry",
    "img": "slimeberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Monster Drop",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "extra": 3,
      "extraPerc": 0.1,
      "price": 65,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "salalberry": {
    "name": "Salal Berry",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Salal_Berry",
    "img": "salalberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 0,
      "specialLoc": "Artifact Spots in Secret Woods",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "extra": 4,
      "extraPerc": 0.03,
      "price": 75,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  },
  "jojaveggie": {
    "name": "Joja Veggie",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Joja_Veggie",
    "img": "jojaveggie.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 600,
      "specialLoc": "Joja Emporium in SVE",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 1140,
      "jarType": "Pickles",
      "kegType": "Juice"
    },
  },
  "jojaberry": {
    "name": "Joja Berry",
    "url": "https://stardew-valley-expanded.fandom.com/wiki/Joja_Berry",
    "img": "jojaberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 6500,
      "specialLoc": "Joja Emporium in SVE",
      "specialUrl": ""
    },
    "growth": {
      "initial": 25,
      "regrow": 4
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 650,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
  }
};