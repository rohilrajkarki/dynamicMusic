import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div`

`

const Wrapper = styled.div`
padding: 50px;
display: flex;
`

const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`

const Title = styled.h1`
font-weight: 300;
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 300;
font-size: 40px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0px;
width: 50%;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;

`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`
padding: 5px;
`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 900;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
font-weight: 900;
cursor: pointer;

&:hover{
    background-color: #f1eded;
}
`



const ProductDetails = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src=" https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>T-shirt</Title>
                    <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores odio ipsa aspernatur officia, aperiam id architecto, provident reiciendis sunt assumenda illo expedita eaque, rem numquam tempore quod debitis similique esse!</Desc>
                    <Price>Rs.2000 </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="grey" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>Aucostic</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>

                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductDetails
