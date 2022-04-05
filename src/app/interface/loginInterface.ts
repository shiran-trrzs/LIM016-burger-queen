export interface LoginResponse {
    token: string;
}

export interface LoginPayload {
    email: string;
    password: string;
  }
  
export  interface User {
    nameUser: string;
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
    dateEntry: string;
    createdAt: string;
    updatedAt: string;
}

export interface Order {
  name:      string;
  price:     number;
  image:     string;
  type:      string;
  _id:       string;
  qty:       number;
  totalPrice:number;
  dateEntry: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewOrder {
    _id:           string;
    userId:        string;
    client:        string;
    products:      ProductElement[];
    status:        string;
    dateEntry:     string;
    dateProcessed: string;
    createdAt:     string;
    updatedAt:     string;
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
    dateEntry: string;
    createdAt: string;
    updatedAt: string;
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