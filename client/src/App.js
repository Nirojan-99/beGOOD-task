import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Pages from "./Pages/Pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  let mode = "light";
  let theme1 = createTheme({
    typography: {
      mode,
      primary: {
        main: "#073050",
      },
    },
    palette: {
      mode: "light",
      ...{
        primary: {
          main: "#1597BB",
        },
        status: {
          danger: "#E28743",
        },
        background: {
          default: "#073050",
          paper: "#fff",
          button: "#FACF00", //yellow
        },
        divider: "#1597BB",
        secondary: {
          main: "#1597BB",
        },
        text: {
          primary: "#073050",
          secondary: "#073050",
        },
        success: {
          main: "#073050",
        },
        info: {
          main: "#1597BB",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme1}>
      <Router>
        <Header />
        <Pages />
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
