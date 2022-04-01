import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios';

const Container = styled.div`
 padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;

const Products = ({ catagory, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    // `http://localhost:5000/api/products?category=S`
                    catagory
                        ? `http://localhost:5000/api/products?category=${catagory}`
                        : 'http://localhost:5000/api/products'
                );
                // console.log(res)
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getProducts()
    }, [catagory]);

    useEffect(() => {
        catagory && setFilteredProducts(
            products.filter((item) => {
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            })
        )
        console.log(filteredProducts)
    }, [products, catagory, filters])


    return (
        <Container>
            {products.map((item) => (

                < Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
