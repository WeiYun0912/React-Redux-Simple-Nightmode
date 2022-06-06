import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import { ModeButton } from "./components/styled/Button.styled";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import content from "./content";
import { setDarkTheme, setDefaultTheme } from "./store/themeSlice";
function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const setDark = () => {
    dispatch(setDarkTheme());
  };

  const setDefault = () => {
    dispatch(setDefaultTheme());
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </Container>

        {!theme.darkmode ? (
          <ModeButton onClick={setDark} bg="#324b50">
            <img src="./images/night-mode.png" alt="" />
          </ModeButton>
        ) : (
          <ModeButton onClick={setDefault} bg="#FFE9D0">
            <img src="./images/contrast.png" alt="" />
          </ModeButton>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
