import styled from 'styled-components'

const Container = styled.div`
 height: 30px;
 background-color:#342D27;
 color: white;
 display: flex;
 align-items: center;
 justify-content: end;
 font-size: 14px;
 font-weight: 500;margin: 0;
  padding: 0;

 `


const Announcement = () => {
    return (
        <Container>
            Contact | FAQ |Retrun Policy
        </Container>
    )
}

export default Announcement
