import { IComponent } from './IComponent';

export interface IArtefact {
  id: string;
  label: string;
  components: IComponent[];
  quantity: number;
  collections: string[];
  image: string;
  xp: number;
  level: number;
  faction: string;
  chronotes: number;
  boostedXp?: number;
}
