import { IComponent } from './IComponent';

export interface IArtefact {
  label: string;
  components: IComponent[];
  quantity: number;
  collections: string[];
  image: string;
  xp: number;
  level: number;
  faction: string;
}
