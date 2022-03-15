export interface LoginResponse {
    token: string;
}

export interface LoginPayload {
    email: string;
    password: string;
  }
  
export  interface User {
    roles:     Roles;
    _id:       string;
    email:     string;
    password:  string;
    createdAt: Date;
    updatedAt: Date;
  }
  
export interface Roles {
    admin: boolean;
    name:  string;
  }

export interface Products {
    name:      string;
    price:     number;
    image:     string;
    type:      string;
    _id:       string;
    dateEntry: Date;
    createdAt: Date;
    updatedAt: Date;
}
