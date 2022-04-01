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
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium esse sapiente blanditiis vitae!
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
