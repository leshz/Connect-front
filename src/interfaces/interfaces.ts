export interface propsGeneral {
  data?: {
    loading?: boolean;
    getAllProjects?: object[];
    getAllEmployees?: object[];
  };
}
export interface employee {
  _id?: string;
  firstName?: string;
  lastName?: string;
  position?: string;
  salary?: number;
  state?: boolean;
  item?: number;
  project?: any;
}

export interface Project {
  _id?: string;
  name?: string;
  department?: string;
  onClick: () => void;
}
export interface projectItem { 
  [id:number]:Project
}

export interface propsOfListEmployees { 
  information ?: employee[]
}

export interface propsEditEmployee {
  children?: unknown;
  isOpen?: boolean;
  onClose: () => void;
  firstName?: string;
  lastName?: string;
  state?: boolean;
  salary?: number;
  position?: string;
  _id?: string;
  project?: any[];
}