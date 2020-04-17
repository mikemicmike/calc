import { IArtefact } from './IArtefact';

export interface IArtefactChooserSection {
  artefacts: IArtefact[];
  label: string;
  color: string;
  collapsed: boolean;
  levelReq: number;
  icon: string;
}
