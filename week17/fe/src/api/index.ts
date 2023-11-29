import { GetProductResponse, ProductForm, Product } from '../types'

export const getProductList = async (): Promise<GetProductResponse>  => {
    const fetching = await fetch('http://locahost:5000/blog');

    return fetching.json()
}

export const removeProduct = async (id?: number): Promise<void> => {
    try {
        const fetching = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE'
        })

        return fetching.json()

    } catch (error) {
        alert(error)
    }
}

export const addProduct = async (body: ProductForm) => {
    try {
        const fetching = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        })
        const response : Promise<Product> = fetching.json()
        return response

    } catch (error) {
        alert(error)
    }
}