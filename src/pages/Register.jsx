import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


const Container = styled.div`
width: 100vw;
height: 100vh;
background:
linear-gradient(
    rgba(255,255,255,0.3),
    rgba(255,255,255,0.3)
), 
url("https://images.pexels.com/photos/1716580/pexels-photo-1716580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
center;

display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 900;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 20px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 100%;
border: none;
padding: 15px 20px;
background-color: teal;
cursor: pointer;
`

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                username,
                email,
                password,
            });
            console.log(res)
        } catch (error) {
            // console.log(error);
            setError(true);
        }

    }


    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="username" onChange={e => setUsername(e.target.value)} />
                    <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
                    <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
                    {/* <Input placeholder="confirm password" /> */}
                    <Agreement>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium esse sapiente blanditiis vitae!
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Link to="/login">
                        <Button type="submit">CREATE</Button>
                    </Link>
                    {error && <span>Something went wrong!</span>}
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
