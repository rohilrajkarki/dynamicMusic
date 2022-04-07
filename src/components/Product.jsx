import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';


const Info = styled.div`
 opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: end;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #ebf3f1;
position: relative;

/* flex-basis: 33.333333%; */
&:hover ${Info} {
    opacity: 1;
}
`
const Circle = styled.div`
width: 200px;
height: 200px;
background-color: white;
border-radius: 50%;
position: absolute;
`

const Image = styled.img`
height: 100%;
width: 100%;
z-index: 2;
/* &:hover{
    background-image: url("https://i1.wp.com/handicraftsinnepal.com/wp-content/uploads/2020/04/daura-suruwal.png?resize=510%2C765&ssl=1");
} */
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
    background-color: #d4bd9a;
    transform: scale(1.2);
}
`


const Product = ({ item }) => {


    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />

                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlinedIcon />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
            <div>{item.title}</div>
        </Container>
    )
}

export default Product
