import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


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
&:hover{
    opacity: 0.5;
}

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
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch { }
        };
        getProduct();
    }, [id]);


    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleAddCart = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size })
        );
    };

    return (
        <Container>

            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>Rs.2000 </Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}

                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={(e) => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={(e) => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleAddCart}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductDetails
