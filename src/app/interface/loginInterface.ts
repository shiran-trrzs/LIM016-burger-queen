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

export interface Order {
  name:      string;
  price:     number;
  image:     string;
  type:      string;
  _id:       string;
  qty:       number;
  totalPrice:number;
  dateEntry: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewOrder {
    _id:           string;
    userId:        string;
    client:        string;
    products:      ProductElement[];
    status:        string;
    dateEntry:     Date;
    dateProcessed: Date;
    createdAt:     Date;
    updatedAt:     Date;
}

export interface ProductElement {
    qty:     number;
    product: ProductProduct;
    _id:     string;
}

export interface ProductProduct {
    _id:       string;
    name:      string;
    price:     number;
    image:     string;
    type:      string;
    dateEntry: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrderInfo {
  userId:   string;
  client:   string;
  products: Product[];
}

export interface Product {
  qty:       number;
  productId: string;
}

export interface Status {
  status: string
}