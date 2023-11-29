export interface GetProductResponse {
    products: Product[];
    title: string;
    author: string;
    //limit: number;
}

export interface Product {
    id: number;
    title: string;
    author: string;
}

export type ProductForm = Omit<Product,'id'>

export interface LoginForm {
    username: string;
    password: string;
}

export interface LoginResponse {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    token: string;
}
