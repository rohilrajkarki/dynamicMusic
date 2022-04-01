
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import styled from "styled-components"
import { useLocation } from "react-router-dom";
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
    const location = useLocation()

    const catagory = location.pathname.split("/")[2]

    const [filters, setFilter] = useState({})
    const [sort, setSort] = useState("newest")
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value
        })
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Guitars</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="Color" onChange={handleFilters}>
                        <Option disabled >Brand</Option>
                        <Option>red</Option>
                        <Option>rblacked</Option>
                        <Option>Mantra</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >Price</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                        <Option>30K-40K</Option>
                    </Select>
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
