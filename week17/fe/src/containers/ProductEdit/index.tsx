import { ProductForm } from "../../components"
import { ProductForm as ProductFormProps, Product } from "../../types"
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";

const ProductEdit = () => {

    const navigate = useNavigate();
    const [product, setProduct] = useState<Product>()

    const { id } = useParams();

    const getProduct = useCallback(
        async () => {
            const fetching = await fetch(`https://dummyjson.com/products/${id}`)
            const response: Product = await fetching.json();
    
            setProduct(response)
        },
        [id]
    )

    useEffect(
        () => {
            getProduct()
        },
        [getProduct]
    )

    const onSubmit = async (values: ProductFormProps) => {
        try {
            const fetching = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(values)
            })
            await fetching.json()
            navigate('/product')
        } catch (error) {
            alert(error)
        }
    }

    if(product) {
        return <ProductForm onSubmit={onSubmit} product={product}/>
    }

    return null
}

export default ProductEdit