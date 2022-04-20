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
    // console.log(catagory, filters, sort)
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
                // console.log(catagory)
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getProducts()
    }, [catagory]);

    useEffect(() => {
        catagory &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
        // console.log(products)
    }, [products, catagory, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);


    return (
        <Container>
            {/* {filteredProducts.map((item) => (

                < Product item={item} key={item.id} />
            ))} */}

            {catagory
                ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
                : products
                    // .slice(0, 8)
                    .map((item) => <Product item={item} key={item._id} />)}
        </Container>
    )
}

export default Products
