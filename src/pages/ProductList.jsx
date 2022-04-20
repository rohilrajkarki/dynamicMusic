
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import styled from "styled-components"
import { useLocation } from "react-router";
import { useState } from "react";


const Container = styled.div`

`
const Title = styled.h1`
padding: 20px;

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
padding: 20px;

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`

const Option = styled.option`

`

const ProductList = () => {
    const location = useLocation();

    const catagory = location.pathname.split("/")[2];
    // console.log(location)
    // console.log(catagory)
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        console.log(value)
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
        console.log(filters)

    };


    return (
        <Container>
            <Title>{catagory}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >Brand</Option>
                        <Option>semi</Option>
                        <Option>electric</Option>
                        <Option>black</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                    </Select>
                    {/* <Select name="size" onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                        <Option>30K-40K</Option>
                    </Select> */}
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>

                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products catagory={catagory} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
