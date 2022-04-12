import styled from "styled-components"
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
width: 100vw;
height: 100vh;
background:
linear-gradient(
    #af76764b,
    rgba(255,255,255,0.3)
), 
url("https://st.depositphotos.com/1035837/1897/i/950/depositphotos_18972075-stock-photo-guitar.jpg")
no-repeat;
background-position:top center;
background-size: cover;

display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 900;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 20px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
cursor: pointer;
margin-bottom: 10px;
&:disabled {
    color: green;
    cursor: not-allowed;
  }
`
const Link = styled.span`
font-size: 14px;
font-weight: bold;
margin: 5px 0px;
cursor: pointer;
color: green;
`
const Error = styled.span`
  color: red;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching}>
                        {/* <Button onClick={handleClick} > */}
                        LOGIN
                    </Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
