import styled from 'styled-components'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { sliderItems } from '../data';
import { useState } from 'react';

// import Guitar from '../assets/images/guitarPic.png'

const Container = styled.div`
width:100%;
height: 100vh;
display: flex;
position: relative;
background-color: #F3DDC5;
overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #e2d6d6;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: 1.5s ease;
background-color: #F3DDC5;

transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};

`

const ImgContainer = styled.div`
font: 1;
height: 85%;
width: 70%;
clip-path: polygon(41% 0, 70% 18%, 100% 39%, 100% 70%, 100% 100%, 67% 100%, 36% 78%, 0 53%, 0% 35%, 0 0);

`
const Image = styled.img`
font: 1;
object-fit: cover;
margin-top: 50px;
margin-left: 80px;
height:${(props) => props.type === 3 ? 600 : 80}%;
width: ${(props) => props.type === 3 ? 600 : 80}%;
/* width: 40vw; */
`
const InfoContainer = styled.div`
font: 1;
padding: 50px;
width: 50%;
`

const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 4px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;

`



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    console.log(sliderItems)

    const [sizechange, setsizechange] = useState(3000);

    const handleSizeChange = (a) => {
        setsizechange(3)

        console.log(sizechange);

    }
    console.log(sizechange);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);

        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")} >
                <ChevronLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((items) => (

                    <Slide bg={items.bg} key={items.id}>
                        <InfoContainer>
                            <Title>{items.title}</Title>
                            <Desc>{items.desc}</Desc>
                            {/* <Button >Shop Now</Button> */}
                        </InfoContainer>
                        <ImgContainer>
                            <Image src={items.img} type={sizechange} />
                        </ImgContainer>

                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ChevronRight />
            </Arrow>

        </Container>
    )
}

export default Slider
