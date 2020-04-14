const componentTypes = {
  thirdAgeIron: {
    id: 'thirdAgeIron',
    label: 'Third Age Iron',
    image: 'https://runescape.wiki/images/4/4e/Third_Age_iron.png?bd2f4',
  },
  zarosianInsigna: {
    id: 'zarosianInsigna',
    label: 'Zarosian Insigna',
    image: 'https://runescape.wiki/images/2/20/Zarosian_insignia.png?b0543',
  },
  samiteSilk: {
    id: 'samiteSilk',
    label: 'Samite Silk',
    image: 'https://runescape.wiki/images/4/4b/Samite_silk.png?4331d',
  },
  imperialSteel: {
    id: 'imperialSteel',
    label: 'Imperial Steel',
    image: 'https://runescape.wiki/images/a/a3/Imperial_steel.png?e9be1',
  },
  whiteOak: {
    id: 'whiteOak',
    label: 'White Oak',
    image: 'https://runescape.wiki/images/7/74/White_oak.png?cd6d0',
  },
  goldrune: {
    id: 'goldrune',
    label: 'Goldrune',
    image: 'https://runescape.wiki/images/8/82/Goldrune.png?94da4',
  },
  orthenglass: {
    id: 'orthenglass',
    label: 'Orthenglass',
    image: 'https://runescape.wiki/images/f/f9/Orthenglass.png?ed18c',
  },
  vellum: {
    id: 'vellum',
    label: 'Vellum',
    image: 'https://runescape.wiki/images/b/bd/Vellum.png?b7d2e',
  },
  cadmiumRed: {
    id: 'cadmiumRed',
    label: 'Cadmium Red',
    image: 'https://runescape.wiki/images/2/23/Cadmium_red.png?24178',
  },
  ancientVis: {
    id: 'ancientVis',
    label: 'Ancient Vis',
    image: 'https://runescape.wiki/images/0/0c/Ancient_vis.png?23810',
  },
  tyrianPurple: {
    id: 'tyrianPurple',
    label: 'Tyrian Purple',
    image: 'https://runescape.wiki/images/f/f1/Tyrian_purple.png?5a878',
  },
  leatherScraps: {
    id: 'leatherScraps',
    label: 'Leather Scraps',
    image: 'https://runescape.wiki/images/a/ab/Leather_scraps.png?2a9e3',
  },
  chaoticBrimstone: {
    id: 'chaoticBrimstone',
    label: 'Chaotic Brimstone',
    image: 'https://runescape.wiki/images/9/97/Chaotic_brimstone.png?6c179',
  },
  demonhide: {
    id: 'demonhide',
    label: 'Demonhide',
    image: 'https://runescape.wiki/images/7/78/Demonhide.png?ca7e2',
  },
  eyeOfTheDagon: {
    id: 'eyeOfTheDagon',
    label: 'Eye Of Dagon',
    image: 'https://runescape.wiki/images/3/38/Eye_of_Dagon.png?2566e',
  },
  hellfireMetal: {
    id: 'hellfireMetal',
    label: 'Hellfire Metal',
    image: 'https://runescape.wiki/images/3/37/Hellfire_metal.png?bb5ec',
  },
  keramos: {
    id: 'keramos',
    label: 'Keramos',
    image: 'https://runescape.wiki/images/9/90/Keramos.png?06488',
  },
  whiteMarble: {
    id: 'whiteMarble',
    label: 'White Marble',
    image: 'https://runescape.wiki/images/3/32/White_marble.png?c5603',
  },
  cobaltBlue: {
    id: 'cobaltBlue',
    label: 'Cobalt Blue',
    image: 'https://runescape.wiki/images/c/cb/Cobalt_blue.png?3f2d6',
  },
  everlightSilvithril: {
    id: 'everlightSilvithril',
    label: 'Everlight Silvthril',
    image: 'https://runescape.wiki/images/1/15/Everlight_silvthril.png?ff6b9',
  },
  starOfSaradomin: {
    id: 'starOfSaradomin',
    label: 'Star Of Saradomin',
    image: 'https://runescape.wiki/images/b/bd/Star_of_Saradomin.png?8127d',
  },
  bloodOfOrcus: {
    id: 'bloodOfOrcus',
    label: 'Blood Of Orcus',
    image: 'https://runescape.wiki/images/c/c2/Blood_of_Orcus.png?c914f',
  },
  stormguardSteel: {
    id: 'stormguardSteel',
    label: 'Stormguard Steel',
    image: 'https://runescape.wiki/images/0/0a/Stormguard_steel.png?c2c57',
  },
  wingsOfWar: {
    id: 'wingsOfWar',
    label: 'Wings Of War',
    image: 'https://runescape.wiki/images/f/f2/Wings_of_War.png?56ca3',
  },
  animalFurs: {
    id: 'animalFurs',
    label: 'Animal Furs',
    image: 'https://runescape.wiki/images/a/a8/Animal_furs.png?8a52a',
  },
  armadyleanYellow: {
    id: 'armadyleanYellow',
    label: 'Armadylean Yellow',
    image: 'https://runescape.wiki/images/5/5c/Armadylean_yellow.png?046d9',
  },
  malachiteGreen: {
    id: 'malachiteGreen',
    label: 'Malachite Green',
    image: 'https://runescape.wiki/images/5/5c/Malachite_green.png?f1667',
  },
  markOfTheKyzaj: {
    id: 'markOfTheKyzaj',
    label: 'Mark Of The Kyzaj',
    image: 'https://runescape.wiki/images/b/b2/Mark_of_the_Kyzaj.png?b5feb',
  },
  vulcanisedRubble: {
    id: 'vulcanisedRubble',
    label: 'Vulcanised Rubber',
    image: 'https://runescape.wiki/images/b/b0/Vulcanised_rubber.png?81603',
  },
  warforgedBronze: {
    id: 'warforgedBronze',
    label: 'Warforged Bronze',
    image: 'https://runescape.wiki/images/f/fa/Warforged_bronze.png?a1193',
  },
  fossilisedBone: {
    id: 'fossilisedBone',
    label: 'Fossilised Bone',
    image: 'https://runescape.wiki/images/f/f3/Fossilised_bone.png?1befa',
  },
  yubiuskClay: {
    id: 'yubiuskClay',
    label: 'Yubiusk Clay',
    image: 'https://runescape.wiki/images/6/63/Yu%27biusk_clay.png?d3f3d',
  },
  aetheriumAlloy: {
    id: 'aetheriumAlloy',
    label: 'Aetherium Alloy',
    image: 'https://runescape.wiki/images/4/4c/Aetherium_alloy.png?16ef9',
  },
  quintessence: {
    id: 'quintessence',
    label: 'Quintessence',
    image: 'https://runescape.wiki/images/4/44/Quintessence.png?e4c05',
  },
  soapstone: {
    id: 'soapstone',
    label: 'Soapstone',
    image: 'https://runescape.wiki/images/8/81/Soapstone.png?b148a',
  },
  ruby: {
    id: 'ruby',
    label: 'Ruby',
    image: 'https://runescape.wiki/images/a/a9/Ruby.png?febb5',
  },
  whiteCandle: {
    id: 'whiteCandle',
    label: 'White Candle',
    image: 'https://runescape.wiki/images/c/c8/White_candle.png?f35d4',
  },
  clockwork: {
    id: 'clockwork',
    label: 'Clockwork',
    image: 'https://runescape.wiki/images/b/b2/Clockwork.png?ad28a',
  },
  dragonstone: {
    id: 'dragonstone',
    label: 'Dragonstone',
    image: 'https://runescape.wiki/images/2/25/Dragonstone.png?3de17',
  },
  bronzeBar: {
    id: 'bronzeBar',
    label: 'Bronze Bar',
    image: 'https://runescape.wiki/images/c/cd/Bronze_bar.png?b167f',
  },
  silverBar: {
    id: 'silverBar',
    label: 'Silver Bar',
    image: 'https://runescape.wiki/images/b/b2/Silver_bar.png?c94e5',
  },
  sapphire: {
    id: 'sapphire',
    label: 'Sapphire',
    image: 'https://runescape.wiki/images/f/f7/Sapphire.png?2d2eb',
  },
  diamond: {
    id: 'diamond',
    label: 'Diamond',
    image: 'https://runescape.wiki/images/e/ea/Diamond.png?144b7',
  },
  phoenixFeather: {
    id: 'phoenixFeather',
    label: 'Phoenix Feather',
    image: 'https://runescape.wiki/images/4/47/Phoenix_feather.png?39886',
  },
  weaponPoison: {
    id: 'weaponPoison',
    label: 'Weapon Poison(3)',
    image: 'https://runescape.wiki/images/6/6f/Weapon_poison_%283%29.png?2b378',
  },
  rope: {
    id: 'rope',
    label: 'Rope',
    image: 'https://runescape.wiki/images/b/b4/Rope.png?a725f',
  },
  emerald: {
    id: 'emerald',
    label: 'Emerald',
    image: 'https://runescape.wiki/images/6/6a/Emerald.png?007c8',
  },
  blackMushroomInk: {
    id: 'blackMushroomInk',
    label: 'Black Mushroom Ink',
    image: 'https://runescape.wiki/images/c/c4/Black_mushroom_ink.png?24982',
  },
  moltenGlass: {
    id: 'moltenGlass',
    label: 'Molten Glass',
    image: 'https://runescape.wiki/images/8/84/Molten_glass.png?55506',
  },
  deathRune: {
    id: 'deathRune',
    label: 'Death Rune',
    image: 'https://runescape.wiki/images/5/55/Death_rune.png?4080e',
  },
};
export { componentTypes };
