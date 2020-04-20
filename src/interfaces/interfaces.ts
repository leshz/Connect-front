export interface propsGeneral {
  data?: {
    loading?: boolean,
    getAllProjects?:object[]
  }
}

export interface employee { 
  _id?: string
  firstName?: string,
  lastName?: string,
  position?: string,
  salary?:number,
  state?: boolean,
  project?: Project
}

export interface Project {
  _id ?: string;
  name?: string;
  department?: string;
}
