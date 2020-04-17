import { collectors } from './collectors';

const collections = {
  imperialImpressionism: {
    id: 'imperialImpressionism',
    label: 'Imperial Impressionism',
    collector: collectors.artCritiqueJacques,
    levelReq: 118
  },
  radiantRenaissance: {
    id: 'radiantRenaissance',
    label: 'Radiant Renaissance',
    collector: collectors.artCritiqueJacques,
    levelReq: 105
  },
  anarchicAbstraction: {
    id: 'anarchicAbstraction',
    label: 'Anarchic Abstraction Impressionism',
    collector: collectors.artCritiqueJacques,
    levelReq: 89
  },
  smokyFings: {
    id: 'smokyFings',
    label: 'Smoky Fings',
    collector: collectors.chiefTess,
    levelReq: 81
  },
  showyFings: {
    id: 'showyFings',
    label: 'Showy Fings',
    collector: collectors.chiefTess,
    levelReq: 92
  },
  blingyFings: {
    id: 'blingyFings',
    label: 'Blingy Fings',
    collector: collectors.chiefTess,
    levelReq: 69
  },
  hittyFings: {
    id: 'hittyFings',
    label: 'Hitty Fings',
    collector: collectors.chiefTess,
    levelReq: 89
  },
  redRumRelicsI: {
    id: 'redRumRelicsI',
    label: 'Red Rum Relics I',
    collector: collectors.generalBentnoze,
    levelReq: 94
  },
  redRumRelicsII: {
    id: 'redRumRelicsII',
    label: 'Red Rum Relics II',
    collector: collectors.generalBentnoze,
    levelReq: 110
  },
  redRumRelicsIII: {
    id: 'redRumRelicsIII',
    label: 'Red Rum Relics III',
    collector: collectors.generalBentnoze,
    levelReq: 119
  },
  greenGobboGoodiesI: {
    id: 'greenGobboGoodiesI',
    label: 'Green Gobbo Goodies I',
    collector: collectors.generalWartface,
    levelReq: 83
  },
  greenGobboGoodiesII: {
    id: 'greenGobboGoodiesII',
    label: 'Green Gobbo Goodies II',
    collector: collectors.generalWartface,
    levelReq: 97
  },
  greenGobboGoodiesIII: {
    id: 'greenGobboGoodiesIII',
    label: 'Green Gobbo Goodies III',
    collector: collectors.generalWartface,
    levelReq: 119
  },
  zamorakianI: {
    id: 'zamorakianI',
    label: 'Zamorakian I',
    collector: collectors.isaura,
    levelReq: 36
  },
  zamorakianII: {
    id: 'zamorakianII',
    label: 'Zamorakian II',
    collector: collectors.isaura,
    levelReq: 81
  },
  zamorakianIII: {
    id: 'zamorakianIII',
    label: 'Zamorakian III',
    collector: collectors.isaura,
    levelReq: 110
  },
  zamorakianIV: {
    id: 'zamorakianIV',
    label: 'Zamorakian IV',
    collector: collectors.isaura,
    levelReq: 116
  },
  armadyleanI: {
    id: 'armadyleanI',
    label: 'Armadylean I',
    collector: collectors.lowse,
    levelReq: 81
  },
  armadyleanII: {
    id: 'armadyleanII',
    label: 'Armadylean II',
    collector: collectors.lowse,
    levelReq: 98
  },
  armadyleanIII: {
    id: 'armadyleanIII',
    label: 'Armadylean III',
    collector: collectors.lowse,
    levelReq: 118
  },
  saradoministI: {
    id: 'saradoministI',
    label: 'Saradominist I',
    collector: collectors.sirAtcha,
    levelReq: 56
  },
  saradoministII: {
    id: 'saradoministII',
    label: 'Saradominist II',
    collector: collectors.sirAtcha,
    levelReq: 72
  },
  saradoministIII: {
    id: 'saradoministIII',
    label: 'Saradominist III',
    collector: collectors.sirAtcha,
    levelReq: 100
  },
  saradoministIV: {
    id: 'saradoministIV',
    label: 'Saradominist IV',
    collector: collectors.sirAtcha,
    levelReq: 117
  },
  zarosianI: {
    id: 'zarosianI',
    label: 'Zarosian I',
    collector: collectors.soran,
    levelReq: 25
  },
  zarosianII: {
    id: 'zarosianII',
    label: 'Zarosian II',
    collector: collectors.soran,
    levelReq: 81
  },
  zarosianIII: {
    id: 'zarosianIII',
    label: 'Zarosian III',
    collector: collectors.soran,
    levelReq: 107
  },
  zarosianIV: {
    id: 'zarosianIV',
    label: 'Zarosian IV',
    collector: collectors.soran,
    levelReq: 119
  },
  museumZamorakianI: {
    id: 'museumZamorakianI',
    label: 'Museum Zamorakian I',
    collector: collectors.velucia,
    levelReq: 36
  },
  museumZamorakianII: {
    id: 'museumZamorakianII',
    label: 'Museum Zamorakian II',
    collector: collectors.velucia,
    levelReq: 81
  },
  museumZamorakianIII: {
    id: 'museumZamorakianIII',
    label: 'Museum Zamorakian III',
    collector: collectors.velucia,
    levelReq: 110
  },
  museumZamorakianIV: {
    id: 'museumZamorakianIV',
    label: 'Museum Zamorakian IV',
    collector: collectors.velucia,
    levelReq: 116
  },
  museumArmadyleanI: {
    id: 'museumArmadyleanI',
    label: 'Museum Armadylean I',
    collector: collectors.velucia,
    levelReq: 81
  },
  museumArmadyleanII: {
    id: 'museumArmadyleanII',
    label: 'Museum Armadylean II',
    collector: collectors.velucia,
    levelReq: 98
  },
  museumArmadyleanIII: {
    id: 'museumArmadyleanIII',
    label: 'Museum Armadylean III',
    collector: collectors.velucia,
    levelReq: 118
  },
  museumBandosianI: {
    id: 'museumBandosianI',
    label: 'Museum Bandosian I',
    collector: collectors.velucia,
    levelReq: 89
  },
  museumBandosianII: {
    id: 'museumBandosianII',
    label: 'Museum Bandosian II',
    collector: collectors.velucia,
    levelReq: 110
  },
  museumBandosianIII: {
    id: 'museumBandosianIII',
    label: 'Museum Bandosian III',
    collector: collectors.velucia,
    levelReq: 119
  },
  museumSaradoministI: {
    id: 'museumSaradoministI',
    label: 'Museum Saradominist I',
    collector: collectors.velucia,
    levelReq: 56
  },
  museumSaradoministII: {
    id: 'museumSaradoministII',
    label: 'Museum Saradominist II',
    collector: collectors.velucia,
    levelReq: 72
  },
  museumSaradoministIII: {
    id: 'museumSaradoministIII',
    label: 'Museum Saradominist III',
    collector: collectors.velucia,
    levelReq: 100
  },
  museumSaradoministIV: {
    id: 'museumSaradoministIV',
    label: 'Museum Saradominist IV',
    collector: collectors.velucia,
    levelReq: 117
  },
  museumZarosianI: {
    id: 'museumZarosianI',
    label: 'Museum Zarosian I',
    collector: collectors.velucia,
    levelReq: 25
  },
  museumZarosianII: {
    id: 'museumZarosianII',
    label: 'Museum Zarosian II',
    collector: collectors.velucia,
    levelReq: 81
  },
  museumZarosianIII: {
    id: 'museumZarosianIII',
    label: 'Museum Zarosian III',
    collector: collectors.velucia,
    levelReq: 107
  },
  museumZarosianIV: {
    id: 'museumZarosianIV',
    label: 'Museum Zarosian IV',
    collector: collectors.velucia,
    levelReq: 119
  },
  wiseAmTheMusicMan: {
    id: 'wiseAmTheMusicMan',
    label: 'Wise Am The Music Man',
    collector: collectors.wiseOldMan,
    levelReq: 91
  },
  hatHoarder: {
    id: 'hatHoarder',
    label: 'Hat Hoarder',
    collector: collectors.wiseOldMan,
    levelReq: 116
  },
  hatProblem: {
    id: 'hatProblem',
    label: 'Hat Problem',
    collector: collectors.wiseOldMan,
    levelReq: 114
  },
  magicMan: {
    id: 'magicMan',
    label: 'Magic Man',
    collector: collectors.wiseOldMan,
    levelReq: 118
  },
  knowledgeIsPower: {
    id: 'knowledgeIsPower',
    label: 'Knowledge Is Power',
    collector: collectors.wiseOldMan,
    levelReq: 119
  }
};
export { collections };
