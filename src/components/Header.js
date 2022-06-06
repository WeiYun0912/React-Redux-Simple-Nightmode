import { useSelector } from "react-redux";
import { Button } from "./styled/Button.styled";
import { Container } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { StyledHeader, Nav, Logo, Image } from "./styled/Header.styled";

const Header = () => {
  const darkmode = useSelector((state) => state.theme.darkmode);
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo
            src={!darkmode ? "./images/logo.svg" : "./images/logo_white.svg"}
            alt="Image load fail"
          />
          <Button
            bg={!darkmode ? "#fff" : "#00C5A2"}
            color={!darkmode ? "#000" : "#fff"}
          >
            Try It Free
          </Button>
        </Nav>
        <Flex>
          <div style={!darkmode ? {} : { color: "#fff" }}>
            <h1>Build The Very Fantastic For Your Fans</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              voluptatibus explicabo aliquid, fuga accusantium, repudiandae
              vitae pariatur, consequatur facilis quibusdam numquam beatae
              magnam expedita consectetur adipisci esse sit ab molestiae?
            </p>

            <Button bg={!darkmode ? "#ff0099" : "#00A8D3"} color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
