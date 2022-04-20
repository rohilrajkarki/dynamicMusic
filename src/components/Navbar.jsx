import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { mobile } from "../responsive";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/userRedux';
import { cartReset } from '../redux/cartRedux';

const Container = styled.div`
height:50px;
background-color: #F3DDC5;

${mobile({
    height: "50px"
})}
`;

const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items: center;
justify-content: space-between;


${mobile({
    padding: "10px"
})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
padding-left: 6rem;

${mobile({
    display: "none"
})}
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border:none;

${mobile({
    width: "50px"
})}
`

const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo1 = styled.h1`
font-weight: bolder;
font-size: 18px;

${mobile({
    fontSize: "24px"
})}
`

const Logo2 = styled.h1`
font-size: 10px;


${mobile({
    fontSize: "24px"
})}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

${mobile({
    justifyContent: "center"
})}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const RightMenuItems = styled.div`
margin-left: 25px;
display: flex;
`

const MenuItems = styled.div`
margin-left: 25px;
cursor: pointer;
display: ${(props) => props.type === true && "none"};

${mobile({
    fontSize: "10px", marginLeft: "10px"
})}
`


const Navbar = ({ user }) => {
    const quantity = useSelector(state => state.cart.quantity)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logOut())
        dispatch(cartReset())
        history.push('/login')
    }



    return (
        <Container>
            <Wrapper>
                <Center>
                    <Link to="/"  >
                        <Logo1>DYNAMICS</Logo1>
                        <Logo2>MUSIC STORE</Logo2>
                    </Link>
                </Center>

                <Right>
                    <RightMenu>
                        <Link to="/">
                            <RightMenuItems>Home</RightMenuItems>
                        </Link>
                        {/* <RightMenuItems>Shop</RightMenuItems> */}
                        <Link to="/post">
                            <RightMenuItems>Blogs</RightMenuItems>
                        </Link>
                        <Link to="/products">
                            <RightMenuItems>Shop</RightMenuItems>
                        </Link>
                        <RightMenuItems>
                            <Link to="/register"  >
                                <MenuItems type={user}>Register</MenuItems>
                            </Link>
                        </RightMenuItems>
                        <RightMenuItems>
                            <Link to="/login">
                                <MenuItems type={user}>SignIn</MenuItems>
                            </Link>
                        </RightMenuItems>
                    </RightMenu>

                </Right>
                <Left>

                    <Language onClick={(e) => handleLogout(e)}>LogOut</Language>

                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                    <Link to="/cart">
                        <MenuItems>
                            {/* <Stack spacing={10} direction="row"> */}
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                            {/* </Stack> */}
                        </MenuItems>
                    </Link>
                </Left>
            </Wrapper>
        </Container >
    )
}

export default Navbar
