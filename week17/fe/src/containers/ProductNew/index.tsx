import { GetProductResponse } from "../../types"
import { ProductForm } from "../../components"
import { useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query"
import { addProduct } from '../../api'; 

const ProductNew = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { mutate } = useMutation(addProduct, {
        onSuccess: (data) => {
            if(data) {
                const prevProducts = queryClient.getQueryData<GetProductResponse>(['getProductList']);
                if(prevProducts) {
                    const newProducts = {
                        ...prevProducts,
                        products: [...prevProducts.products , data]
                    }
                    queryClient.setQueryData('getProductList', newProducts)
                }
                navigate('/product')

            }
        }
    })


    // const onSubmit = async (values: ProductFormProps) => {
    //     try {
    //         const fetching = await fetch('https://dummyjson.com/products/add', {
    //             method: 'POST',
    //             headers: { 
    //                 'Content-Type': 'application/json' 
    //             },
    //             body: JSON.stringify(values)
    //         })
    //         await fetching.json()
    //         navigate('/product')
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    return (
        <ProductForm onSubmit={mutate}/>
    )
}

export default ProductNew