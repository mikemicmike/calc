const PROXY: string = 'https://cors-anywhere.herokuapp.com/';
const skills: string[] = [
  'overall',
  'attack',
  'defence',
  'strength',
  'constitution',
  'ranged',
  'prayer',
  'magic',
  'cooking',
  'woodcutting',
  'fletching',
  'fishing',
  'firemaking',
  'crafting',
  'smithing',
  'mining',
  'herblore',
  'agility',
  'thieving',
  'slayer',
  'farming',
  'runecrafting',
  'hunter',
  'construction',
  'summoning',
  'dungeoneering',
  'divination',
  'invention',
  'archaeology',
];
const activities: string[] = [
  'bounty_hunters',
  'bh_rogues',
  'dominion_tower',
  'the_crucible',
  'castle_wars_games',
  'ba_attackers',
  'ba_defenders',
  'ba_collectors',
  'ba_healers',
  'duel_tournament',
  'mobilising_armies',
  'conquest',
  'fist_of_guthix',
  'gg_resource_race',
  'gg_athletics',
  'we2_armadyl_lifetime_contribution',
  'we2_bandos_lifetime_contribution',
  'we2_armadyl_pvp_kills',
  'we2_bandos_pvp_kills',
  'heist_guard_level',
  'heist_robber_level',
  'cfp_5_game_average',
  'af15_cow_tipping',
  'af15_rats_killed_after_the_miniquest',
  'runescore',
  'clue_scrolls_easy',
  'clue_scrolls_medium',
  'clue_scrolls_hard',
  'clue_scrolls_elite',
  'clue_scrolls_master',
];

interface Rank {
  rank: number;
  count: number;
}

interface SkillRank {
  rank: number;
  level: number;
  experience: number;
}

interface PlayerSkills {
  agility: SkillRank;
  archaeology: SkillRank;
  attack: SkillRank;
  constitution: SkillRank;
  construction: SkillRank;
  cooking: SkillRank;
  crafting: SkillRank;
  defence: SkillRank;
  divination: SkillRank;
  dungeoneering: SkillRank;
  farming: SkillRank;
  firemaking: SkillRank;
  fishing: SkillRank;
  fletching: SkillRank;
  herblore: SkillRank;
  hunter: SkillRank;
  invention: SkillRank;
  magic: SkillRank;
  mining: SkillRank;
  overall: SkillRank;
  prayer: SkillRank;
  ranged: SkillRank;
  runecrafting: SkillRank;
  slayer: SkillRank;
  smithing: SkillRank;
  strength: SkillRank;
  summoning: SkillRank;
  thieving: SkillRank;
  woodcutting: SkillRank;
}

interface PlayerActivities {
  bounty_hunters: Rank;
  bh_rogues: Rank;
  dominion_tower: Rank;
  the_crucible: Rank;
  castle_wars_games: Rank;
  ba_attackers: Rank;
  ba_defenders: Rank;
  ba_collectors: Rank;
  ba_healers: Rank;
  duel_tournament: Rank;
  mobilising_armies: Rank;
  conquest: Rank;
  fist_of_guthix: Rank;
  gg_resource_race: Rank;
  gg_athletics: Rank;
  we2_armadyl_lifetime_contribution: Rank;
  we2_bandos_lifetime_contribution: Rank;
  we2_armadyl_pvp_kills: Rank;
  we2_bandos_pvp_kills: Rank;
  heist_guard_level: Rank;
  heist_robber_level: Rank;
  cfp_5_game_average: Rank;
  af15_cow_tipping: Rank;
  af15_rats_killed_after_the_miniquest: Rank;
  runescore: Rank;
  clue_scrolls_easy: Rank;
  clue_scrolls_medium: Rank;
  clue_scrolls_hard: Rank;
  clue_scrolls_elite: Rank;
  clue_scrolls_master: Rank;
}

interface Player {
  activities: PlayerActivities;
  skills: PlayerSkills;
}

function separate(data: string): string[] {
  return data.split('\n');
}

function formatSkills(skillsArray: string[]): PlayerSkills {
  return skills.reduce((acc: any, skillName, index) => {
    const [rank, level, experience] = skillsArray[index].split(',');
    acc[skillName] = {
      rank: parseInt(rank),
      level: parseInt(level),
      experience: parseInt(experience),
    };
    return acc;
  }, {});
}

function formatActivities(activitiesArray: string[]): PlayerActivities {
  const init__: PlayerActivities = {
    bounty_hunters: { rank: 0, count: 0 },
    bh_rogues: { rank: 0, count: 0 },
    dominion_tower: { rank: 0, count: 0 },
    the_crucible: { rank: 0, count: 0 },
    castle_wars_games: { rank: 0, count: 0 },
    ba_attackers: { rank: 0, count: 0 },
    ba_defenders: { rank: 0, count: 0 },
    ba_collectors: { rank: 0, count: 0 },
    ba_healers: { rank: 0, count: 0 },
    duel_tournament: { rank: 0, count: 0 },
    mobilising_armies: { rank: 0, count: 0 },
    conquest: { rank: 0, count: 0 },
    fist_of_guthix: { rank: 0, count: 0 },
    gg_resource_race: { rank: 0, count: 0 },
    gg_athletics: { rank: 0, count: 0 },
    we2_armadyl_lifetime_contribution: { rank: 0, count: 0 },
    we2_bandos_lifetime_contribution: { rank: 0, count: 0 },
    we2_armadyl_pvp_kills: { rank: 0, count: 0 },
    we2_bandos_pvp_kills: { rank: 0, count: 0 },
    heist_guard_level: { rank: 0, count: 0 },
    heist_robber_level: { rank: 0, count: 0 },
    cfp_5_game_average: { rank: 0, count: 0 },
    af15_cow_tipping: { rank: 0, count: 0 },
    af15_rats_killed_after_the_miniquest: { rank: 0, count: 0 },
    runescore: { rank: 0, count: 0 },
    clue_scrolls_easy: { rank: 0, count: 0 },
    clue_scrolls_medium: { rank: 0, count: 0 },
    clue_scrolls_hard: { rank: 0, count: 0 },
    clue_scrolls_elite: { rank: 0, count: 0 },
    clue_scrolls_master: { rank: 0, count: 0 },
  };

  return activities.reduce(
    (accumulator: any, activityName: string, index: number) => {
      const [rank, count] = activitiesArray[index].split(',');

      accumulator[activityName] = {
        rank: parseInt(rank),
        count: parseInt(count),
      };

      return accumulator;
    },
    init__
  );
}

function parseToJSON(data: string): Player {
  const lines = separate(data);
  const [skillsStartIndex, skillsEndIndex] = [0, skills.length];
  const [activitiesStartIndex, activitiesEndIndex] = [
    skills.length,
    skills.length + activities.length,
  ];

  return {
    activities: formatActivities([
      ...lines.slice(activitiesStartIndex, activitiesEndIndex),
    ]),
    skills: formatSkills([...lines.slice(skillsStartIndex, skillsEndIndex)]),
  };
}

export default async function getPlayer(user: string): Promise<Player> {
  const data = await fetch(
    `${PROXY}secure.runescape.com/m=hiscore/index_lite.ws?player=${user}`
  );

  return parseToJSON(await data.text());
}

export async function getPlayerArchaeology(user: string): Promise<SkillRank> {
  const {
    skills: { archaeology },
  } = await getPlayer(user);

  return archaeology;
}
