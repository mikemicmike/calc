import { componentTypes } from './componentTypes';
import { factions } from './factions';
import { collections } from './collections';

const Artefacts = [
  {
    label: 'Venator Dagger',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 16
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 12
      }
    ],
    level: 5,
    xp: 305.1,
    faction: factions.zarosian.id,
    collections: [collections.zarosianI.id, collections.museumZarosianI.id],
    quantity: 0
  },
  {
    label: 'Venator Crossbow',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 12
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 16
      }
    ],
    level: 5,
    xp: 305.1,
    collections: [collections.zarosianI.id, collections.museumZarosianI.id],
    faction: factions.zarosian.id,
    quantity: 0
  },
  {
    label: 'Legionary Gladius',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 10
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 6
      },
      {
        type: componentTypes.imperialSteel,
        quantity: 12
      }
    ],
    level: 12,
    xp: 430.8,
    faction: factions.zarosian.id,
    collections: [collections.zarosianI.id, collections.museumZarosianI.id],
    quantity: 0
  },
  {
    label: 'Legionary Square Shield',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 8
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 8
      },
      {
        type: componentTypes.imperialSteel,
        quantity: 12
      }
    ],
    level: 12,
    xp: 430.8,
    faction: factions.zarosian.id,
    collections: [collections.zarosianI.id, collections.museumZarosianI.id],
    quantity: 0
  },
  {
    label: 'Primis Elementis Standard',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 12
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 16
      }
    ],
    level: 12,
    xp: 430.8,
    faction: factions.zarosian.id,
    collections: [collections.zarosianI.id, collections.museumZarosianI.id],
    quantity: 0
  },
  {
    label: 'Zaros Effigy',
    components: [
      {
        type: componentTypes.samiteSilk,
        quantity: 8
      },
      {
        type: componentTypes.whiteOak,
        quantity: 10
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 12
      }
    ],
    level: 17,
    xp: 520.5,
    faction: factions.zarosian.id,
    collections: [collections.zarosianI.id, collections.museumZarosianI.id],
    quantity: 0
  },
  {
    label: 'Zarosian Training Dummy',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 16
      },
      {
        type: componentTypes.whiteOak,
        quantity: 14
      }
    ],
    level: 17,
    xp: 520.5,
    faction: factions.zarosian.id,
    collections: [collections.zarosianI.id, collections.museumZarosianI.id],
    quantity: 0
  },
  {
    label: 'Hookah Pipe',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 10
      },
      {
        type: componentTypes.goldrune,
        quantity: 12
      },
      {
        type: componentTypes.orthenglass,
        quantity: 8
      }
    ],
    level: 20,
    xp: 574.4,
    faction: factions.zamorakian.id,
    collections: [
      collections.smokyFings.id,
      collections.zamorakianI.id,
      collections.museumZamorakianI.id
    ],
    quantity: 0
  },
  {
    label: 'Opulent Wine Goblet',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 14
      },
      {
        type: componentTypes.goldrune,
        quantity: 16
      }
    ],
    level: 20,
    xp: 574.4,
    faction: factions.zamorakian.id,
    collections: [
      collections.smokyFings.id,
      collections.zamorakianI.id,
      collections.museumZamorakianI.id
    ],
    quantity: 0
  },
  {
    label: 'Crest of Dagon',
    components: [
      {
        type: componentTypes.goldrune,
        quantity: 14
      },
      {
        type: componentTypes.orthenglass,
        quantity: 18
      }
    ],
    level: 24,
    xp: 646.2,
    faction: factions.zamorakian.id,
    collections: [
      collections.showyFings.id,
      collections.zamorakianI.id,
      collections.museumZamorakianI.id,
      collections.knowledgeIsPower.id
    ],
    quantity: 0
  },
  {
    label: 'Disorder Painting',
    components: [
      {
        type: componentTypes.samiteSilk,
        quantity: 6
      },
      {
        type: componentTypes.whiteOak,
        quantity: 6
      },
      {
        type: componentTypes.vellum,
        quantity: 6
      },
      {
        type: componentTypes.cadmiumRed,
        quantity: 14
      }
    ],
    level: 24,
    xp: 646.2,
    faction: factions.zamorakian.id,
    collections: [
      collections.anarchicAbstraction.id,
      collections.zamorakianI.id,
      collections.museumZamorakianI.id
    ],
    quantity: 0
  },
  {
    label: 'Legatus Maximus Figurine',
    components: [
      {
        type: componentTypes.goldrune,
        quantity: 8
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 14
      },
      {
        type: componentTypes.ancientVis,
        quantity: 10
      }
    ],
    level: 25,
    xp: 664.1,
    faction: factions.zarosian.id,
    collections: [
      collections.showyFings.id,
      collections.zarosianI.id,
      collections.museumZarosianI.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Solem in Umbra Painting',
    components: [
      {
        type: componentTypes.samiteSilk,
        quantity: 8
      },
      {
        type: componentTypes.whiteOak,
        quantity: 10
      },
      {
        type: componentTypes.tyrianPurple,
        quantity: 14
      }
    ],
    level: 25,
    xp: 664.1,
    faction: factions.zarosian.id,
    collections: [
      collections.imperialImpressionism.id,
      collections.zarosianI.id,
      collections.museumZarosianI.id
    ],
    quantity: 0
  },
  {
    label: 'Lesser Demon Mask',
    components: [
      {
        type: componentTypes.leatherScraps,
        quantity: 6
      },
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 8
      },
      {
        type: componentTypes.demonhide,
        quantity: 12
      },
      {
        type: componentTypes.cadmiumRed,
        quantity: 6
      }
    ],
    level: 29,
    xp: 735.9,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianI.id,
      collections.museumZamorakianI.id,
      collections.hatProblem.id
    ],
    quantity: 0
  },
  {
    label: 'Imp Mask',
    components: [
      {
        type: componentTypes.leatherScraps,
        quantity: 10
      },
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 10
      },
      {
        type: componentTypes.demonhide,
        quantity: 12
      }
    ],
    level: 29,
    xp: 735.9,
    collections: [
      collections.zamorakianI.id,
      collections.museumZamorakianI.id,
      collections.hatHoarder.id
    ],
    faction: factions.zamorakian.id,
    quantity: 0
  },
  {
    label: 'Greater Demon Mask',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 6
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 6
      },
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 8
      },
      {
        type: componentTypes.demonhide,
        quantity: 12
      }
    ],
    level: 29,
    xp: 735.9,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianI.id,
      collections.museumZamorakianI.id,
      collections.hatHoarder.id
    ],
    quantity: 0
  },
  {
    label: 'Order of Dis Robes',
    components: [
      {
        type: componentTypes.samiteSilk,
        quantity: 16
      },
      {
        type: componentTypes.cadmiumRed,
        quantity: 10
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 14
      }
    ],
    level: 36,
    xp: 861.5,
    faction: factions.zamorakian.id,
    collections: [collections.zamorakianI.id, collections.museumZamorakianI.id],
    quantity: 0
  },
  {
    label: 'Ritual Dagger',
    components: [
      {
        type: componentTypes.goldrune,
        quantity: 16
      },
      {
        type: componentTypes.hellfireMetal,
        quantity: 24
      },
      {
        type: componentTypes.ruby,
        quantity: 1
      }
    ],
    level: 36,
    xp: 861.5,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianI.id,
      collections.museumZamorakianI.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Frying Pan',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 20
      },
      {
        type: componentTypes.whiteMarble,
        quantity: 24
      }
    ],
    level: 42,
    xp: 1073.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id
    ],
    quantity: 0
  },
  {
    label: 'Hallowed Lantern',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 20
      },
      {
        type: componentTypes.keramos,
        quantity: 24
      },
      {
        type: componentTypes.whiteCandle,
        quantity: 1
      }
    ],
    level: 42,
    xp: 1073.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id
    ],
    quantity: 0
  },
  {
    label: 'Branding Iron',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 14
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 12
      },
      {
        type: componentTypes.hellfireMetal,
        quantity: 20
      }
    ],
    level: 45,
    xp: 1283.3,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'Manacles',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 14
      },
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 18
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 14
      }
    ],
    level: 45,
    xp: 1283.3,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'Ancient Timepiece',
    components: [
      {
        type: componentTypes.goldrune,
        quantity: 12
      },
      {
        type: componentTypes.imperialSteel,
        quantity: 16
      },
      {
        type: componentTypes.ancientVis,
        quantity: 18
      }
    ],
    level: 47,
    xp: 1423.3,
    faction: factions.zarosian.id,
    collections: [
      collections.blingyFings.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Legatus Pendant',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 16
      },
      {
        type: componentTypes.goldrune,
        quantity: 18
      },
      {
        type: componentTypes.ancientVis,
        quantity: 12
      },
      {
        type: componentTypes.dragonstone,
        quantity: 1
      }
    ],
    level: 47,
    xp: 1423.3,
    faction: factions.zarosian.id,
    collections: [
      collections.blingyFings.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Ceremonial Unicorn Ornament',
    components: [
      {
        type: componentTypes.keramos,
        quantity: 26
      },
      {
        type: componentTypes.cobaltBlue,
        quantity: 20
      }
    ],
    level: 48,
    xp: 1493.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id,
      collections.hatHoarder.id
    ],
    quantity: 0
  },
  {
    label: 'Ceremonial Unicorn Saddle',
    components: [
      {
        type: componentTypes.leatherScraps,
        quantity: 24
      },
      {
        type: componentTypes.cobaltBlue,
        quantity: 22
      }
    ],
    level: 48,
    xp: 1493.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id
    ],
    quantity: 0
  },
  {
    label: 'Everlight Harp',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 30
      },
      {
        type: componentTypes.whiteOak,
        quantity: 22
      }
    ],
    level: 51,
    xp: 1703.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id,
      collections.wiseAmTheMusicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Everlight Trumpet',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 28
      },
      {
        type: componentTypes.goldrune,
        quantity: 24
      }
    ],
    level: 51,
    xp: 1703.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id,
      collections.smokyFings.id,
      collections.wiseAmTheMusicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Everlight Violin',
    components: [
      {
        type: componentTypes.starOfSaradomin,
        quantity: 16
      },
      {
        type: componentTypes.whiteOak,
        quantity: 20
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 16
      }
    ],
    level: 51,
    xp: 1703.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id,
      collections.wiseAmTheMusicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Folded-Arm Figurine(Female)',
    components: [
      {
        type: componentTypes.whiteMarble,
        quantity: 30
      },
      {
        type: componentTypes.goldrune,
        quantity: 24
      }
    ],
    level: 56,
    xp: 2053.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id
    ],
    quantity: 0
  },
  {
    label: 'Folded-Arm Figurine(Male)',
    components: [
      {
        type: componentTypes.whiteMarble,
        quantity: 30
      },
      {
        type: componentTypes.goldrune,
        quantity: 24
      }
    ],
    level: 56,
    xp: 2053.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministI.id,
      collections.museumSaradoministI.id
    ],
    quantity: 0
  },
  {
    label: 'Pontifex Signet Ring',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 16
      },
      {
        type: componentTypes.goldrune,
        quantity: 18
      },
      {
        type: componentTypes.ancientVis,
        quantity: 22
      },
      {
        type: componentTypes.dragonstone,
        quantity: 1
      }
    ],
    level: 58,
    xp: 2193.3,
    faction: factions.zarosian.id,
    collections: [
      collections.blingyFings.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Incite Fear Spell Scroll',
    components: [
      {
        type: componentTypes.vellum,
        quantity: 20
      },
      {
        type: componentTypes.ancientVis,
        quantity: 18
      },
      {
        type: componentTypes.bloodOfOrcus,
        quantity: 18
      }
    ],
    level: 58,
    xp: 2193.3,
    faction: factions.zarosian.id,
    collections: [
      collections.zarosianII.id,
      collections.museumZarosianII.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Dominion Discus',
    components: [
      {
        type: componentTypes.keramos,
        quantity: 34
      },
      {
        type: componentTypes.starOfSaradomin,
        quantity: 28
      }
    ],
    level: 61,
    xp: 2566.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Dominion Javelin',
    components: [
      {
        type: componentTypes.keramos,
        quantity: 32
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 30
      }
    ],
    level: 61,
    xp: 2566.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Dominion Pelte Shield',
    components: [
      {
        type: componentTypes.starOfSaradomin,
        quantity: 34
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 28
      }
    ],
    level: 61,
    xp: 2566.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Lake of Fire Painting',
    components: [
      {
        type: componentTypes.samiteSilk,
        quantity: 10
      },
      {
        type: componentTypes.vellum,
        quantity: 10
      },
      {
        type: componentTypes.whiteOak,
        quantity: 10
      },
      {
        type: componentTypes.cadmiumRed,
        quantity: 34
      }
    ],
    level: 65,
    xp: 3500,
    faction: factions.zamorakian.id,
    collections: [
      collections.anarchicAbstraction.id,
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'Lust metal sculpture',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 16
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 24
      },
      {
        type: componentTypes.goldrune,
        quantity: 24
      },
      {
        type: componentTypes.ruby,
        quantity: 1
      }
    ],
    level: 65,
    xp: 3500,
    faction: factions.zamorakian.id,
    collections: [
      collections.showyFings.id,
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'Chaos Star',
    components: [
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 28
      },
      {
        type: componentTypes.hellfireMetal,
        quantity: 36
      }
    ],
    level: 68,
    xp: 4200,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'Spiked Dog Collar',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 24
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 24
      },
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 16
      }
    ],
    level: 68,
    xp: 4200,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'Bronze Dominion Medal',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 36
      },
      {
        type: componentTypes.starOfSaradomin,
        quantity: 26
      },
      {
        type: componentTypes.bronzeBar,
        quantity: 1
      }
    ],
    level: 69,
    xp: 4433.3,
    faction: factions.saradomist.id,
    collections: [
      collections.blingyFings.id,
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Silver Dominion Medal',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 36
      },
      {
        type: componentTypes.starOfSaradomin,
        quantity: 26
      },
      {
        type: componentTypes.silverBar,
        quantity: 1
      }
    ],
    level: 69,
    xp: 4433.3,
    faction: factions.saradomist.id,
    collections: [
      collections.blingyFings.id,
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Dominion Torch',
    components: [
      {
        type: componentTypes.goldrune,
        quantity: 12
      },
      {
        type: componentTypes.orthenglass,
        quantity: 12
      },
      {
        type: componentTypes.everlightSilvithril,
        quantity: 20
      },
      {
        type: componentTypes.starOfSaradomin,
        quantity: 18
      }
    ],
    level: 69,
    xp: 4433.3,
    faction: factions.saradomist.id,
    collections: [
      collections.smokyFings.id,
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Ikovian Gerege',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 36
      },
      {
        type: componentTypes.wingsOfWar,
        quantity: 30
      }
    ],
    level: 70,
    xp: 4666.7,
    faction: factions.armadylean.id,
    collections: [
      collections.knowledgeIsPower.id,
      collections.armadyleanI.id,
      collections.museumArmadyleanI.id
    ],
    quantity: 0
  },
  {
    label: 'Toy Glider',
    components: [
      {
        type: componentTypes.stormguardSteel,
        quantity: 36
      },
      {
        type: componentTypes.whiteOak,
        quantity: 30
      }
    ],
    level: 70,
    xp: 4666.7,
    faction: factions.armadylean.id,
    collections: [collections.armadyleanI.id, collections.museumArmadyleanI.id],
    quantity: 0
  },
  {
    label: 'Toy War Golem',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 36
      },
      {
        type: componentTypes.whiteOak,
        quantity: 30
      },
      {
        type: componentTypes.clockwork,
        quantity: 1
      }
    ],
    level: 70,
    xp: 4666.7,
    faction: factions.armadylean.id,
    collections: [collections.armadyleanI.id, collections.museumArmadyleanI.id],
    quantity: 0
  },
  {
    label: 'Decorative Vase',
    components: [
      {
        type: componentTypes.whiteMarble,
        quantity: 36
      },
      {
        type: componentTypes.cobaltBlue,
        quantity: 30
      }
    ],
    level: 72,
    xp: 5133.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Patera Bowl',
    components: [
      {
        type: componentTypes.keramos,
        quantity: 36
      },
      {
        type: componentTypes.goldrune,
        quantity: 30
      },
      {
        type: componentTypes.sapphire,
        quantity: 1
      }
    ],
    level: 72,
    xp: 5133.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Kantharos Cup',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 30
      },
      {
        type: componentTypes.orthenglass,
        quantity: 36
      },
      {
        type: componentTypes.sapphire,
        quantity: 1
      }
    ],
    level: 72,
    xp: 5133.3,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministII.id,
      collections.museumSaradoministII.id
    ],
    quantity: 0
  },
  {
    label: 'Ceremonial Mace',
    components: [
      {
        type: componentTypes.imperialSteel,
        quantity: 20
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 20
      },
      {
        type: componentTypes.goldrune,
        quantity: 28
      }
    ],
    level: 74,
    xp: 5600,
    faction: factions.zarosian.id,
    collections: [
      collections.hittyFings.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Consensus Ad Idem Painting',
    components: [
      {
        type: componentTypes.whiteOak,
        quantity: 10
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 10
      },
      {
        type: componentTypes.tyrianPurple,
        quantity: 50
      }
    ],
    level: 74,
    xp: 5600,
    faction: factions.zarosian.id,
    collections: [
      collections.imperialImpressionism.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Pontifex Maximus Figurine',
    components: [
      {
        type: componentTypes.zarosianInsigna,
        quantity: 24
      },
      {
        type: componentTypes.ancientVis,
        quantity: 16
      },
      {
        type: componentTypes.goldrune,
        quantity: 28
      },
      {
        type: componentTypes.dragonstone,
        quantity: 1
      }
    ],
    level: 74,
    xp: 5600,
    faction: factions.zarosian.id,
    collections: [
      collections.showyFings.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Avian Song-Egg Player',
    components: [
      {
        type: componentTypes.stormguardSteel,
        quantity: 36
      },
      {
        type: componentTypes.armadyleanYellow,
        quantity: 32
      },
      {
        type: componentTypes.diamond,
        quantity: 1
      }
    ],
    level: 76,
    xp: 6066.7,
    faction: factions.armadylean.id,
    collections: [
      collections.wiseAmTheMusicMan.id,
      collections.armadyleanI.id,
      collections.museumArmadyleanI.id
    ],
    quantity: 0
  },
  {
    label: 'Keshik Drum',
    components: [
      {
        type: componentTypes.wingsOfWar,
        quantity: 16
      },
      {
        type: componentTypes.animalFurs,
        quantity: 16
      },
      {
        type: componentTypes.whiteOak,
        quantity: 20
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 16
      }
    ],
    level: 76,
    xp: 6066.7,
    faction: factions.armadylean.id,
    collections: [
      collections.wiseAmTheMusicMan.id,
      collections.armadyleanI.id,
      collections.museumArmadyleanI.id
    ],
    quantity: 0
  },
  {
    label: 'Morin Khuur',
    components: [
      {
        type: componentTypes.armadyleanYellow,
        quantity: 36
      },
      {
        type: componentTypes.whiteOak,
        quantity: 32
      }
    ],
    level: 76,
    xp: 6066.7,
    faction: factions.armadylean.id,
    collections: [
      collections.wiseAmTheMusicMan.id,
      collections.armadyleanI.id,
      collections.museumArmadyleanI.id
    ],
    quantity: 0
  },
  {
    label: 'Ekeleshuun blinder mask',
    components: [
      {
        type: componentTypes.vulcanisedRubble,
        quantity: 24
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 20
      },
      {
        type: componentTypes.vellum,
        quantity: 24
      }
    ],
    level: 76,
    xp: 6066.7,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesI.id,
      collections.museumBandosianI.id,
      collections.hatProblem.id
    ],
    quantity: 0
  },
  {
    label: "Narogoshuun 'Hob-da-Gob' ball",
    components: [
      {
        type: componentTypes.vulcanisedRubble,
        quantity: 36
      },
      {
        type: componentTypes.markOfTheKyzaj,
        quantity: 32
      }
    ],
    level: 76,
    xp: 6066.7,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesI.id,
      collections.museumBandosianI.id
    ],
    quantity: 0
  },
  {
    label: 'Rekeshuun war tether',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 20
      },
      {
        type: componentTypes.vulcanisedRubble,
        quantity: 22
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 26
      }
    ],
    level: 76,
    xp: 6066.7,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesI.id,
      collections.museumBandosianI.id
    ],
    quantity: 0
  },
  {
    label: 'Aviansie Dreamcoat',
    components: [
      {
        type: componentTypes.armadyleanYellow,
        quantity: 20
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 30
      },
      {
        type: componentTypes.animalFurs,
        quantity: 22
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.armadylean.id,
    collections: [collections.armadyleanI.id, collections.museumArmadyleanI.id],
    quantity: 0
  },
  {
    label: 'Ceremonial Plume',
    components: [
      {
        type: componentTypes.armadyleanYellow,
        quantity: 38
      },
      {
        type: componentTypes.goldrune,
        quantity: 34
      },
      {
        type: componentTypes.phoenixFeather,
        quantity: 1
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanI.id,
      collections.museumArmadyleanI.id,
      collections.showyFings.id
    ],
    quantity: 0
  },
  {
    label: 'Peacocking parasol',
    components: [
      {
        type: componentTypes.armadyleanYellow,
        quantity: 22
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 30
      },
      {
        type: componentTypes.whiteOak,
        quantity: 20
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.armadylean.id,
    collections: [collections.armadyleanI.id, collections.museumArmadyleanI.id],
    quantity: 0
  },
  {
    label: 'Ogre Kyzaj axe',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 28
      },
      {
        type: componentTypes.markOfTheKyzaj,
        quantity: 20
      },
      {
        type: componentTypes.fossilisedBone,
        quantity: 24
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsI.id,
      collections.museumBandosianI.id
    ],
    quantity: 0
  },
  {
    label: 'Ork cleaver sword',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 36
      },
      {
        type: componentTypes.fossilisedBone,
        quantity: 36
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsI.id,
      collections.museumBandosianI.id
    ],
    quantity: 0
  },
  {
    label: 'Larupia trophy',
    components: [
      {
        type: componentTypes.cadmiumRed,
        quantity: 18
      },
      {
        type: componentTypes.animalFurs,
        quantity: 28
      },
      {
        type: componentTypes.orthenglass,
        quantity: 26
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'Lion trophy',
    components: [
      {
        type: componentTypes.cadmiumRed,
        quantity: 18
      },
      {
        type: componentTypes.animalFurs,
        quantity: 28
      },
      {
        type: componentTypes.whiteOak,
        quantity: 26
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'She-Wolf trophy',
    components: [
      {
        type: componentTypes.cadmiumRed,
        quantity: 18
      },
      {
        type: componentTypes.animalFurs,
        quantity: 28
      },
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 26
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianII.id,
      collections.museumZamorakianII.id
    ],
    quantity: 0
  },
  {
    label: 'Pontifex censer',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 20
      },
      {
        type: componentTypes.ancientVis,
        quantity: 20
      },
      {
        type: componentTypes.goldrune,
        quantity: 32
      },
      {
        type: componentTypes.dragonstone,
        quantity: 1
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.zarosian.id,
    collections: [
      collections.smokyFings.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Pontifex Crozier',
    components: [
      {
        type: componentTypes.imperialSteel,
        quantity: 20
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 20
      },
      {
        type: componentTypes.goldrune,
        quantity: 32
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.zarosian.id,
    collections: [
      collections.hittyFings.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Pontifex Mitre',
    components: [
      {
        type: componentTypes.samiteSilk,
        quantity: 32
      },
      {
        type: componentTypes.ancientVis,
        quantity: 20
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 20
      }
    ],
    level: 81,
    xp: 7388.9,
    faction: factions.zarosian.id,
    collections: [
      collections.hatHoarder.id,
      collections.zarosianII.id,
      collections.museumZarosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Thorobshuun battle standard',
    components: [
      {
        type: componentTypes.markOfTheKyzaj,
        quantity: 16
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 22
      },
      {
        type: componentTypes.whiteOak,
        quantity: 16
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 20
      }
    ],
    level: 83,
    xp: 8166.7,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesI.id,
      collections.museumBandosianI.id
    ],
    quantity: 0
  },
  {
    label: 'Yurkolgokh stink grenade',
    components: [
      {
        type: componentTypes.yubiuskClay,
        quantity: 38
      },
      {
        type: componentTypes.vulcanisedRubble,
        quantity: 36
      },
      {
        type: componentTypes.weaponPoison,
        quantity: 1
      }
    ],
    level: 83,
    xp: 8166.7,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesI.id,
      collections.museumBandosianI.id
    ],
    quantity: 0
  },
  {
    label: 'Dominarian device',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 30
      },
      {
        type: componentTypes.keramos,
        quantity: 22
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 22
      },
      {
        type: componentTypes.clockwork,
        quantity: 1
      }
    ],
    level: 84,
    xp: 8555.6,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIII.id,
      collections.museumSaradoministIII.id
    ],
    quantity: 0
  },
  {
    label: 'Fishing trident',
    components: [
      {
        type: componentTypes.starOfSaradomin,
        quantity: 22
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 30
      },
      {
        type: componentTypes.goldrune,
        quantity: 22
      }
    ],
    level: 84,
    xp: 8555.6,
    faction: factions.saradomist.id,
    collections: [
      collections.hittyFings.id,
      collections.saradoministIII.id,
      collections.museumSaradoministIII.id
    ],
    quantity: 0
  },
  {
    label: 'Hawkeye lens multi-vision scope',
    components: [
      {
        type: componentTypes.stormguardSteel,
        quantity: 40
      },
      {
        type: componentTypes.orthenglass,
        quantity: 34
      }
    ],
    level: 85,
    xp: 8944.4,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanII.id,
      collections.museumArmadyleanII.id
    ],
    quantity: 0
  },
  {
    label: 'Talon-3 razor wing',
    components: [
      {
        type: componentTypes.aetheriumAlloy,
        quantity: 40
      },
      {
        type: componentTypes.wingsOfWar,
        quantity: 34
      },
      {
        type: componentTypes.rope,
        quantity: 1
      }
    ],
    level: 85,
    xp: 8944.4,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanII.id,
      collections.museumArmadyleanII.id
    ],
    quantity: 0
  },
  {
    label: 'Necromantic focus',
    components: [
      {
        type: componentTypes.imperialSteel,
        quantity: 20
      },
      {
        type: componentTypes.bloodOfOrcus,
        quantity: 26
      },
      {
        type: componentTypes.ancientVis,
        quantity: 30
      }
    ],
    level: 86,
    xp: 9333.3,
    faction: factions.zarosian.id,
    collections: [
      collections.knowledgeIsPower.id,
      collections.zarosianIII.id,
      collections.museumZarosianIII.id
    ],
    quantity: 0
  },
  {
    label: "'Exsanguinate' spell scroll",
    components: [
      {
        type: componentTypes.vellum,
        quantity: 40
      },
      {
        type: componentTypes.bloodOfOrcus,
        quantity: 36
      }
    ],
    level: 86,
    xp: 9333.3,
    faction: factions.zarosian.id,
    collections: [
      collections.magicMan.id,
      collections.zarosianIII.id,
      collections.museumZarosianIII.id
    ],
    quantity: 0
  },
  {
    label: 'High priest crozier',
    components: [
      {
        type: componentTypes.markOfTheKyzaj,
        quantity: 26
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 24
      },
      {
        type: componentTypes.goldrune,
        quantity: 28
      }
    ],
    level: 89,
    xp: 10500,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesII.id,
      collections.museumBandosianI.id,
      collections.hittyFings.id
    ],
    quantity: 0
  },
  {
    label: 'High priest mitre',
    components: [
      {
        type: componentTypes.markOfTheKyzaj,
        quantity: 26
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 24
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 28
      }
    ],
    level: 89,
    xp: 10500,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesII.id,
      collections.museumBandosianI.id,
      collections.hatProblem.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: 'High priest orb',
    components: [
      {
        type: componentTypes.markOfTheKyzaj,
        quantity: 26
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 24
      },
      {
        type: componentTypes.goldrune,
        quantity: 28
      }
    ],
    level: 89,
    xp: 10500,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesII.id,
      collections.museumBandosianI.id,
      collections.hittyFings.id
    ],
    quantity: 0
  },
  {
    label: "'Pandemonium' tapestry",
    components: [
      {
        type: componentTypes.whiteOak,
        quantity: 12
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 12
      },
      {
        type: componentTypes.vellum,
        quantity: 12
      },
      {
        type: componentTypes.cadmiumRed,
        quantity: 42
      }
    ],
    level: 89,
    xp: 10500,
    faction: factions.zamorakian.id,
    collections: [
      collections.anarchicAbstraction.id,
      collections.zamorakianIII.id,
      collections.museumZamorakianIII.id
    ],
    quantity: 0
  },
  {
    label: "'Torment' metal sculpture",
    components: [
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 20
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 20
      },
      {
        type: componentTypes.hellfireMetal,
        quantity: 38
      }
    ],
    level: 89,
    xp: 10500,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIII.id,
      collections.museumZamorakianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Prototype gravimeter',
    components: [
      {
        type: componentTypes.quintessence,
        quantity: 34
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 20
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 26
      }
    ],
    level: 91,
    xp: 11277.8,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanII.id,
      collections.museumArmadyleanII.id
    ],
    quantity: 0
  },
  {
    label: 'Songbird recorder',
    components: [
      {
        type: componentTypes.stormguardSteel,
        quantity: 44
      },
      {
        type: componentTypes.orthenglass,
        quantity: 36
      },
      {
        type: componentTypes.diamond,
        quantity: 1
      }
    ],
    level: 91,
    xp: 11277.8,
    faction: factions.armadylean.id,
    collections: [
      collections.wiseAmTheMusicMan.id,
      collections.armadyleanII.id,
      collections.museumArmadyleanII.id
    ],
    quantity: 0
  },
  {
    label: 'Amphora',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 34
      },
      {
        type: componentTypes.keramos,
        quantity: 46
      }
    ],
    level: 92,
    xp: 11666.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIII.id,
      collections.museumSaradoministIII.id
    ],
    quantity: 0
  },
  {
    label: 'Rod of Asclepius',
    components: [
      {
        type: componentTypes.whiteMarble,
        quantity: 30
      },
      {
        type: componentTypes.starOfSaradomin,
        quantity: 24
      },
      {
        type: componentTypes.goldrune,
        quantity: 26
      }
    ],
    level: 92,
    xp: 11666.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIII.id,
      collections.museumSaradoministIII.id,
      collections.showyFings.id
    ],
    quantity: 0
  },
  {
    label: 'Zarosian ewer',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 52
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 30
      }
    ],
    level: 93,
    xp: 12500,
    faction: factions.zarosian.id,
    collections: [collections.zarosianIII.id, collections.museumZarosianIII.id],
    quantity: 0
  },
  {
    label: 'Zarosian stein',
    components: [
      {
        type: componentTypes.thirdAgeIron,
        quantity: 16
      },
      {
        type: componentTypes.imperialSteel,
        quantity: 36
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 30
      }
    ],
    level: 93,
    xp: 12500,
    faction: factions.zarosian.id,
    collections: [collections.zarosianIII.id, collections.museumZarosianIII.id],
    quantity: 0
  },
  {
    label: 'Beastkeeper helm',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 16
      },
      {
        type: componentTypes.vulcanisedRubble,
        quantity: 24
      },
      {
        type: componentTypes.animalFurs,
        quantity: 20
      },
      {
        type: componentTypes.fossilisedBone,
        quantity: 24
      }
    ],
    level: 94,
    xp: 13333.3,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsI.id,
      collections.museumBandosianII.id,
      collections.hatProblem.id
    ],
    quantity: 0
  },
  {
    label: 'Idithuun horn ring',
    components: [
      {
        type: componentTypes.yubiuskClay,
        quantity: 40
      },
      {
        type: componentTypes.vulcanisedRubble,
        quantity: 44
      }
    ],
    level: 94,
    xp: 13333.3,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesII.id,
      collections.museumBandosianII.id
    ],
    quantity: 0
  },
  {
    label: "'Nosorog!' sculpture",
    components: [
      {
        type: componentTypes.yubiuskClay,
        quantity: 30
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 24
      },
      {
        type: componentTypes.soapstone,
        quantity: 30
      }
    ],
    level: 94,
    xp: 13333.3,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsI.id,
      collections.museumBandosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Stormguard gerege',
    components: [
      {
        type: componentTypes.stormguardSteel,
        quantity: 36
      },
      {
        type: componentTypes.wingsOfWar,
        quantity: 28
      },
      {
        type: componentTypes.goldrune,
        quantity: 20
      }
    ],
    level: 95,
    xp: 14166.7,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanII.id,
      collections.museumArmadyleanII.id
    ],
    quantity: 0
  },
  {
    label: 'Dayguard shield',
    components: [
      {
        type: componentTypes.stormguardSteel,
        quantity: 36
      },
      {
        type: componentTypes.wingsOfWar,
        quantity: 28
      },
      {
        type: componentTypes.whiteOak,
        quantity: 20
      }
    ],
    level: 95,
    xp: 14166.7,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanII.id,
      collections.museumArmadyleanII.id
    ],
    quantity: 0
  },
  {
    label: 'Garagorshuun anchor',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 32
      },
      {
        type: componentTypes.markOfTheKyzaj,
        quantity: 26
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 30
      }
    ],
    level: 97,
    xp: 15833.3,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesII.id,
      collections.museumBandosianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Ourg Megahitter',
    components: [
      {
        type: componentTypes.whiteOak,
        quantity: 20
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 20
      },
      {
        type: componentTypes.orthenglass,
        quantity: 26
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 22
      }
    ],
    level: 97,
    xp: 15833.3,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsII.id,
      collections.museumBandosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Ourg Tower/Goblin Cower Shield',
    components: [
      {
        type: componentTypes.markOfTheKyzaj,
        quantity: 20
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 26
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 22
      },
      {
        type: componentTypes.whiteOak,
        quantity: 20
      }
    ],
    level: 97,
    xp: 15833.3,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsII.id,
      collections.museumBandosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Golem Heart',
    components: [
      {
        type: componentTypes.aetheriumAlloy,
        quantity: 34
      },
      {
        type: componentTypes.quintessence,
        quantity: 24
      },
      {
        type: componentTypes.orthenglass,
        quantity: 16
      },
      {
        type: componentTypes.soapstone,
        quantity: 16
      }
    ],
    level: 98,
    xp: 16666.7,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanII.id,
      collections.museumArmadyleanII.id
    ],
    quantity: 0
  },
  {
    label: 'Golem Instruction',
    components: [
      {
        type: componentTypes.quintessence,
        quantity: 46
      },
      {
        type: componentTypes.vellum,
        quantity: 44
      },
      {
        type: componentTypes.blackMushroomInk,
        quantity: 1
      }
    ],
    level: 98,
    xp: 16666.7,
    faction: factions.armadylean.id,
    collections: [
      collections.knowledgeIsPower.id,
      collections.armadyleanII.id,
      collections.museumArmadyleanII.id
    ],
    quantity: 0
  },
  {
    label: 'Hellfire Haladie',
    components: [
      {
        type: componentTypes.hellfireMetal,
        quantity: 44
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 26
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 20
      }
    ],
    level: 98,
    xp: 16666.7,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIII.id,
      collections.museumZamorakianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Hellfire Katar',
    components: [
      {
        type: componentTypes.hellfireMetal,
        quantity: 50
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 40
      }
    ],
    level: 98,
    xp: 16666.7,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIII.id,
      collections.museumZamorakianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Hellfire Zaghnal',
    components: [
      {
        type: componentTypes.hellfireMetal,
        quantity: 38
      },
      {
        type: componentTypes.whiteOak,
        quantity: 26
      },
      {
        type: componentTypes.orthenglass,
        quantity: 26
      }
    ],
    level: 98,
    xp: 16666.7,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIII.id,
      collections.museumZamorakianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Dorgeshuun Spear',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 50
      },
      {
        type: componentTypes.whiteOak,
        quantity: 42
      }
    ],
    level: 100,
    xp: 18666.7,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesIII.id,
      collections.museumBandosianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Forged in War Sculpture',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 50
      },
      {
        type: componentTypes.yubiuskClay,
        quantity: 42
      },
      {
        type: componentTypes.emerald,
        quantity: 1
      }
    ],
    level: 100,
    xp: 18666.7,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsII.id,
      collections.museumBandosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Kopis Dagger',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 50
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 42
      }
    ],
    level: 100,
    xp: 18666.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIII.id,
      collections.museumSaradoministIII.id
    ],
    quantity: 0
  },
  {
    label: 'Xiphos Short Sword',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 46
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 46
      }
    ],
    level: 100,
    xp: 18666.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIII.id,
      collections.museumSaradoministIII.id
    ],
    quantity: 0
  },
  {
    label: 'Smoke Cloud Spell Scroll',
    components: [
      {
        type: componentTypes.vellum,
        quantity: 40
      },
      {
        type: componentTypes.ancientVis,
        quantity: 20
      },
      {
        type: componentTypes.bloodOfOrcus,
        quantity: 32
      }
    ],
    level: 100,
    xp: 18666.7,
    faction: factions.zarosian.id,
    collections: [
      collections.zarosianIII.id,
      collections.museumZarosianIII.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Vigorem Vial',
    components: [
      {
        type: componentTypes.imperialSteel,
        quantity: 54
      },
      {
        type: componentTypes.ancientVis,
        quantity: 38
      },
      {
        type: componentTypes.moltenGlass,
        quantity: 1
      }
    ],
    level: 100,
    xp: 18666.7,
    faction: factions.zarosian.id,
    collections: [collections.zarosianIII.id, collections.museumZarosianIII.id],
    quantity: 0
  },
  {
    label: 'Blackfire Lance',
    components: [
      {
        type: componentTypes.aetheriumAlloy,
        quantity: 50
      },
      {
        type: componentTypes.quintessence,
        quantity: 46
      }
    ],
    level: 103,
    xp: 22166.7,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Nightguard Shield',
    components: [
      {
        type: componentTypes.stormguardSteel,
        quantity: 30
      },
      {
        type: componentTypes.wingsOfWar,
        quantity: 36
      },
      {
        type: componentTypes.whiteOak,
        quantity: 30
      }
    ],
    level: 103,
    xp: 22166.7,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Huzamogaarb chaos crown',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 44
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 34
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 20
      }
    ],
    level: 104,
    xp: 23333.3,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesIII.id,
      collections.museumBandosianIII.id,
      collections.hatProblem.id
    ],
    quantity: 0
  },
  {
    label: 'Saragorgak star crown',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 44
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 34
      },
      {
        type: componentTypes.starOfSaradomin,
        quantity: 20
      }
    ],
    level: 104,
    xp: 23333.3,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesIII.id,
      collections.museumBandosianIII.id,
      collections.hatHoarder.id
    ],
    quantity: 0
  },
  {
    label: "'Possession' metal sculpture",
    components: [
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 24
      },
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 30
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 44
      }
    ],
    level: 104,
    xp: 23333.3,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIV.id,
      collections.museumZamorakianIV.id
    ],
    quantity: 0
  },
  {
    label: 'Trishula',
    components: [
      {
        type: componentTypes.hellfireMetal,
        quantity: 48
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 30
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 20
      }
    ],
    level: 104,
    xp: 23333.3,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIV.id,
      collections.museumZamorakianIV.id
    ],
    quantity: 0
  },
  {
    label: 'Tsutsaroth piercing',
    components: [
      {
        type: componentTypes.hellfireMetal,
        quantity: 44
      },
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 30
      },
      {
        type: componentTypes.cadmiumRed,
        quantity: 24
      }
    ],
    level: 104,
    xp: 23333.3,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIV.id,
      collections.museumZamorakianIV.id
    ],
    quantity: 0
  },
  {
    label: "'The Pride of Padosan' painting",
    components: [
      {
        type: componentTypes.cobaltBlue,
        quantity: 52
      },
      {
        type: componentTypes.whiteOak,
        quantity: 16
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 16
      },
      {
        type: componentTypes.vellum,
        quantity: 16
      }
    ],
    level: 105,
    xp: 24500,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIV.id,
      collections.museumSaradoministIV.id,
      collections.radiantRenaissance.id
    ],
    quantity: 0
  },
  {
    label: "'Hallowed Be the Everlight' painting",
    components: [
      {
        type: componentTypes.cobaltBlue,
        quantity: 52
      },
      {
        type: componentTypes.whiteOak,
        quantity: 16
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 16
      },
      {
        type: componentTypes.vellum,
        quantity: 16
      }
    ],
    level: 105,
    xp: 24500,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIV.id,
      collections.museumSaradoministIV.id,
      collections.radiantRenaissance.id
    ],
    quantity: 0
  },
  {
    label: "'The Lord of Light' painting",
    components: [
      {
        type: componentTypes.cobaltBlue,
        quantity: 52
      },
      {
        type: componentTypes.whiteOak,
        quantity: 16
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 16
      },
      {
        type: componentTypes.vellum,
        quantity: 16
      }
    ],
    level: 105,
    xp: 24500,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIV.id,
      collections.museumSaradoministIV.id,
      collections.radiantRenaissance.id
    ],
    quantity: 0
  },
  {
    label: 'Ancient magic tablet',
    components: [
      {
        type: componentTypes.ancientVis,
        quantity: 40
      },
      {
        type: componentTypes.bloodOfOrcus,
        quantity: 64
      }
    ],
    level: 107,
    xp: 27000,
    faction: factions.zarosian.id,
    collections: [collections.zarosianIII.id, collections.museumZarosianIII.id],
    quantity: 0
  },
  {
    label: 'Portable phylactery',
    components: [
      {
        type: componentTypes.imperialSteel,
        quantity: 48
      },
      {
        type: componentTypes.bloodOfOrcus,
        quantity: 36
      },
      {
        type: componentTypes.ancientVis,
        quantity: 20
      }
    ],
    level: 107,
    xp: 27000,
    faction: factions.zarosian.id,
    collections: [
      collections.zarosianIII.id,
      collections.museumZarosianIII.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: "'Animate Dead' spell scroll",
    components: [
      {
        type: componentTypes.vellum,
        quantity: 40
      },
      {
        type: componentTypes.ancientVis,
        quantity: 24
      },
      {
        type: componentTypes.bloodOfOrcus,
        quantity: 40
      }
    ],
    level: 107,
    xp: 27000,
    faction: factions.zarosian.id,
    collections: [
      collections.zarosianIII.id,
      collections.museumZarosianIII.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: "'The Enlightened Soul' scroll",
    components: [
      {
        type: componentTypes.starOfSaradomin,
        quantity: 50
      },
      {
        type: componentTypes.vellum,
        quantity: 60
      }
    ],
    level: 109,
    xp: 29666.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIV.id,
      collections.museumSaradoministIV.id,
      collections.knowledgeIsPower.id
    ],
    quantity: 0
  },
  {
    label: "'The Eudoxian Elements' tablet",
    components: [
      {
        type: componentTypes.whiteMarble,
        quantity: 60
      },
      {
        type: componentTypes.goldrune,
        quantity: 50
      }
    ],
    level: 109,
    xp: 29666.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIV.id,
      collections.museumSaradoministIV.id,
      collections.knowledgeIsPower.id
    ],
    quantity: 0
  },
  {
    label: 'Drogokishuun hook sword',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 44
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 36
      },
      {
        type: componentTypes.fossilisedBone,
        quantity: 32
      }
    ],
    level: 110,
    xp: 31000,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesIII.id,
      collections.museumBandosianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Hobgoblin mansticker',
    components: [
      {
        type: componentTypes.warforgedBronze,
        quantity: 66
      },
      {
        type: componentTypes.fossilisedBone,
        quantity: 46
      }
    ],
    level: 110,
    xp: 31000,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsII.id,
      collections.museumBandosianII.id
    ],
    quantity: 0
  },
  {
    label: 'Chaos Elemental trophy',
    components: [
      {
        type: componentTypes.chaoticBrimstone,
        quantity: 52
      },
      {
        type: componentTypes.whiteOak,
        quantity: 30
      },
      {
        type: componentTypes.hellfireMetal,
        quantity: 30
      }
    ],
    level: 110,
    xp: 31000,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIII.id,
      collections.museumZamorakianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Virius trophy',
    components: [
      {
        type: componentTypes.demonhide,
        quantity: 44
      },
      {
        type: componentTypes.whiteOak,
        quantity: 34
      },
      {
        type: componentTypes.orthenglass,
        quantity: 34
      }
    ],
    level: 110,
    xp: 31000,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIII.id,
      collections.museumZamorakianIII.id
    ],
    quantity: 0
  },
  {
    label: 'Flat Cap',
    components: [
      {
        type: componentTypes.armadyleanYellow,
        quantity: 60
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 54
      }
    ],
    level: 111,
    xp: 32333.3,
    faction: factions.armadylean.id,
    collections: [
      collections.hatProblem.id,
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Night Owl Flight Goggles',
    components: [
      {
        type: componentTypes.armadyleanYellow,
        quantity: 44
      },
      {
        type: componentTypes.leatherScraps,
        quantity: 40
      },
      {
        type: componentTypes.orthenglass,
        quantity: 30
      }
    ],
    level: 111,
    xp: 32333.3,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Prototype Godbow',
    components: [
      {
        type: componentTypes.aetheriumAlloy,
        quantity: 50
      },
      {
        type: componentTypes.quintessence,
        quantity: 34
      },
      {
        type: componentTypes.wingsOfWar,
        quantity: 34
      }
    ],
    level: 112,
    xp: 33666.7,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Prototype Godstaff',
    components: [
      {
        type: componentTypes.aetheriumAlloy,
        quantity: 50
      },
      {
        type: componentTypes.quintessence,
        quantity: 34
      },
      {
        type: componentTypes.wingsOfWar,
        quantity: 34
      }
    ],
    level: 112,
    xp: 33666.7,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Prototype Godsword',
    components: [
      {
        type: componentTypes.aetheriumAlloy,
        quantity: 50
      },
      {
        type: componentTypes.goldrune,
        quantity: 34
      },
      {
        type: componentTypes.wingsOfWar,
        quantity: 34
      }
    ],
    level: 112,
    xp: 33666.7,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Praetorian Hood',
    components: [
      {
        type: componentTypes.ancientVis,
        quantity: 36
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 48
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 40
      },
      {
        type: componentTypes.deathRune,
        quantity: 30
      }
    ],
    level: 114,
    xp: 36666.7,
    faction: factions.zarosian.id,
    collections: [
      collections.hatProblem.id,
      collections.zarosianIV.id,
      collections.museumZarosianIV.id
    ],
    quantity: 0
  },
  {
    label: 'Praetorian Robes',
    components: [
      {
        type: componentTypes.ancientVis,
        quantity: 30
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 54
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 40
      },
      {
        type: componentTypes.deathRune,
        quantity: 50
      }
    ],
    level: 114,
    xp: 36666.7,
    faction: factions.zarosian.id,
    collections: [collections.zarosianIV.id, collections.museumZarosianIV.id],
    quantity: 0
  },
  {
    label: 'Praetorian Staff',
    components: [
      {
        type: componentTypes.imperialSteel,
        quantity: 36
      },
      {
        type: componentTypes.ancientVis,
        quantity: 58
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 30
      },
      {
        type: componentTypes.deathRune,
        quantity: 100
      }
    ],
    level: 114,
    xp: 36666.7,
    faction: factions.zarosian.id,
    collections: [collections.zarosianIV.id, collections.museumZarosianIV.id],
    quantity: 0
  },
  {
    label: 'Kal-i-kran chieftain crown',
    components: [
      {
        type: componentTypes.yubiuskClay,
        quantity: 66
      },
      {
        type: componentTypes.animalFurs,
        quantity: 60
      }
    ],
    level: 115,
    xp: 38333.3,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsIII.id,
      collections.museumBandosianIII.id,
      collections.hatHoarder.id
    ],
    quantity: 0
  },
  {
    label: 'Kal-i-kran mace',
    components: [
      {
        type: componentTypes.vulcanisedRubble,
        quantity: 42
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 44
      },
      {
        type: componentTypes.fossilisedBone,
        quantity: 40
      }
    ],
    level: 115,
    xp: 38333.3,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsIII.id,
      collections.museumBandosianIII.id,
      collections.hatHoarder.id
    ],
    quantity: 0
  },
  {
    label: 'Kal-i-kran warhorn',
    components: [
      {
        type: componentTypes.vulcanisedRubble,
        quantity: 44
      },
      {
        type: componentTypes.fossilisedBone,
        quantity: 42
      },
      {
        type: componentTypes.animalFurs,
        quantity: 40
      }
    ],
    level: 115,
    xp: 38333.3,
    faction: factions.bandosian.id,
    collections: [
      collections.redRumRelicsIII.id,
      collections.museumBandosianIII.id,
      collections.hatHoarder.id
    ],
    quantity: 0
  },
  {
    label: 'Tsutsaroth Helm',
    components: [
      {
        type: componentTypes.hellfireMetal,
        quantity: 50
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 40
      },
      {
        type: componentTypes.goldrune,
        quantity: 40
      }
    ],
    level: 116,
    xp: 40000.0,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIV.id,
      collections.museumZamorakianIV.id,
      collections.hatHoarder.id
    ],
    quantity: 0
  },
  {
    label: 'Tsutsaroth Pauldron',
    components: [
      {
        type: componentTypes.hellfireMetal,
        quantity: 40
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 40
      },
      {
        type: componentTypes.goldrune,
        quantity: 50
      }
    ],
    level: 116,
    xp: 40000.0,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIV.id,
      collections.museumZamorakianIV.id
    ],
    quantity: 0
  },
  {
    label: 'Tsutsaroth Urumi',
    components: [
      {
        type: componentTypes.hellfireMetal,
        quantity: 50
      },
      {
        type: componentTypes.eyeOfTheDagon,
        quantity: 40
      },
      {
        type: componentTypes.thirdAgeIron,
        quantity: 40
      }
    ],
    level: 116,
    xp: 40000.0,
    faction: factions.zamorakian.id,
    collections: [
      collections.zamorakianIV.id,
      collections.museumZamorakianIV.id
    ],
    quantity: 0
  },
  {
    label: 'Kontos Lance',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 70
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 62
      }
    ],
    level: 117,
    xp: 41666.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIV.id,
      collections.museumSaradoministIV.id
    ],
    quantity: 0
  },
  {
    label: 'Kontos Lance',
    components: [
      {
        type: componentTypes.everlightSilvithril,
        quantity: 70
      },
      {
        type: componentTypes.whiteOak,
        quantity: 62
      }
    ],
    level: 117,
    xp: 41666.7,
    faction: factions.saradomist.id,
    collections: [
      collections.saradoministIV.id,
      collections.museumSaradoministIV.id
    ],
    quantity: 0
  },
  {
    label: 'Chuluu Stone',
    components: [
      {
        type: componentTypes.aetheriumAlloy,
        quantity: 40
      },
      {
        type: componentTypes.quintessence,
        quantity: 30
      },
      {
        type: componentTypes.soapstone,
        quantity: 40
      },
      {
        type: componentTypes.goldrune,
        quantity: 24
      }
    ],
    level: 118,
    xp: 43333.3,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id,
      collections.magicMan.id
    ],
    quantity: 0
  },
  {
    label: 'Quintessence Counter',
    components: [
      {
        type: componentTypes.quintessence,
        quantity: 54
      },
      {
        type: componentTypes.stormguardSteel,
        quantity: 40
      },
      {
        type: componentTypes.whiteOak,
        quantity: 40
      }
    ],
    level: 118,
    xp: 43333.3,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Spherical astrolabe',
    components: [
      {
        type: componentTypes.aetheriumAlloy,
        quantity: 46
      },
      {
        type: componentTypes.armadyleanYellow,
        quantity: 40
      },
      {
        type: componentTypes.orthenglass,
        quantity: 48
      }
    ],
    level: 118,
    xp: 43333.3,
    faction: factions.armadylean.id,
    collections: [
      collections.armadyleanIII.id,
      collections.museumArmadyleanIII.id
    ],
    quantity: 0
  },
  {
    label: 'Ancient globe',
    components: [
      {
        type: componentTypes.whiteOak,
        quantity: 20
      },
      {
        type: componentTypes.tyrianPurple,
        quantity: 54
      },
      {
        type: componentTypes.ancientVis,
        quantity: 60
      }
    ],
    level: 118,
    xp: 43333.3,
    faction: factions.zarosian.id,
    collections: [collections.zarosianIV.id, collections.museumZarosianIV.id],
    quantity: 0
  },
  {
    label: 'Battle Plans',
    components: [
      {
        type: componentTypes.vellum,
        quantity: 40
      },
      {
        type: componentTypes.tyrianPurple,
        quantity: 60
      },
      {
        type: componentTypes.ancientVis,
        quantity: 34
      }
    ],
    level: 118,
    xp: 43333.3,
    faction: factions.zarosian.id,
    collections: [collections.zarosianIV.id, collections.museumZarosianIV.id],
    quantity: 0
  },
  {
    label: "'Prima Legio' Painting",
    components: [
      {
        type: componentTypes.whiteOak,
        quantity: 20
      },
      {
        type: componentTypes.samiteSilk,
        quantity: 20
      },
      {
        type: componentTypes.zarosianInsigna,
        quantity: 20
      },
      {
        type: componentTypes.tyrianPurple,
        quantity: 74
      }
    ],
    level: 118,
    xp: 43333.3,
    faction: factions.zarosian.id,
    collections: [
      collections.zarosianIV.id,
      collections.museumZarosianIV.id,
      collections.imperialImpressionism.id
    ],
    quantity: 0
  },
  {
    label: 'Horogothgar cooking pot',
    components: [
      {
        type: componentTypes.yubiuskClay,
        quantity: 60
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 38
      },
      {
        type: componentTypes.soapstone,
        quantity: 40
      }
    ],
    level: 119,
    xp: 45000,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesIII.id,
      collections.museumBandosianIII.id
    ],
    quantity: 0
  },
  {
    label: "'Da Boss Man' sculpture",
    components: [
      {
        type: componentTypes.yubiuskClay,
        quantity: 50
      },
      {
        type: componentTypes.malachiteGreen,
        quantity: 44
      },
      {
        type: componentTypes.soapstone,
        quantity: 44
      }
    ],
    level: 119,
    xp: 45000,
    faction: factions.bandosian.id,
    collections: [
      collections.greenGobboGoodiesIII.id,
      collections.redRumRelicsIII.id,
      collections.museumBandosianIII.id,
      collections.knowledgeIsPower.id
    ],
    quantity: 0
  }
];
export { Artefacts };
