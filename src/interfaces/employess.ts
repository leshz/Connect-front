import { Project } from './projects';

export interface employee { 
  _id?: string
  firstName?: string,
  lastName?: string,
  position?: string,
  salary?:number,
  state?: boolean,
  project?: Project
}