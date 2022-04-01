import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import styled from 'styled-components'


const Container = styled.div`
height: 60vh;
background-color: #7890a0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`


const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;

`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
`

const Input = styled.input`
border: none;
flex: 8;
padding-left:20px;
`

const Button = styled.button`
flex:1;
background-color: #2a992a;
color:white;
`

const Newsletter = () => {
    return (
        <Container>

            <Title>DYNAMICS</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur facere mollitia voluptatem magnam?</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendTwoToneIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
