import styled from "styled-components";
import { Heading } from "../../components";
// import Navbar from "../../containers/Navbar/Navbar";
import { NavBar } from "../../containers/";

const Header = () => {
  return (
    <Wrapper>
      <Heading textAlign="center">The Candy Shop</Heading>
      <NavBar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
`;
