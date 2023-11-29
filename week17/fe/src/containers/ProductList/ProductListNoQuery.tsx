import { ColumnsType } from 'antd/es/table';
import { ProductList as ProductListComponent } from '../../components'
import { Product, GetProductResponse } from '../../types';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductListNoQuery = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    const getProductList = async () => {
        const fetching = await fetch('https://dummyjson.com/products')
        const response: GetProductResponse = await fetching.json();
        setProducts(response.products ?? []);
    }

    useEffect(
        () => {
            getProductList()
        },
        []
    )

    const removeProduct = async (id: number) => {
        try {
            const fetching = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE'
            })

            const response = await fetching.json()

            if(response) {
                //cara pertama panggil api lagi
                // getProductList()

                //cara kedua
                setProducts((products) => products.filter((product) => product.id !== id))
            }
        } catch (error) {
            alert(error)
        }
    }

    const columns: ColumnsType<Product> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',        
        },
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',        
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <>
                <Button type={'default'} onClick={() => navigate(`/product/${record.id}`)}>Detail</Button>
                <Button type={'primary'} onClick={() => navigate(`/product/edit/${record.id}`)}>Edit</Button>
                <Button type={'primary'} color={'red'} onClick={() => removeProduct(record.id) }>Delete</Button>
              </>
            ),
        },
    ];

    return (
        <>
            <h3>Daftar Product</h3>
            <Button type={'primary'} onClick={() => navigate('/product/new')}>Tambah Product Baru</Button>
            <ProductListComponent columns={columns} data={products ?? []}/>
        </>
    )
}

export default ProductListNoQuery