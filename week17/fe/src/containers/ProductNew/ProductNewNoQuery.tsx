import { ProductForm as ProductFormProps } from "../../types"
import { ProductForm } from "../../components"
import { useNavigate } from "react-router-dom"

const ProductNewNoQuery = () => {

    const navigate = useNavigate()


    const onSubmit = async (values: ProductFormProps) => {
        try {
            const fetching = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
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

    return (
        <ProductForm onSubmit={onSubmit}/>
    )
}

export default ProductNewNoQuery