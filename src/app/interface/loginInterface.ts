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
  