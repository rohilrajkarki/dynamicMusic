import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
font-weight: 550;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color:white;
background-color: #${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`

const Center = styled.div`
flex:1;
padding: 20px;

`

const Title = styled.h3`
margin-bottom: 30px;
font-weight: bold;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
font-weight: 600;

`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`

`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DYNAMICS</Logo>

                <Desc>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nesciunt voluptas magnam suscipit minus itaque provident facilis ipsum minima deserunt.
                </Desc>

                <SocialContainer>
                    <SocialIcon color="3B5999" >
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="2a992a">
                        <WhatsApp />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Electric</ListItem>
                    <ListItem>Acoustic</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />  122 street Itahari,Nepal
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />  +977 9845612356
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@DYNAMICS.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer