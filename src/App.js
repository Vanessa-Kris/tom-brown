import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Switch, ThemeProvider, createTheme } from "@mui/material";
import Nav from "./Components/Nav";
import Landing from "./Pages/Landing";
import Footer from "./Components/Footer";
// import OrderPage from "./Pages/OrderPage";

// Define MUI dark theme
const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          {/* <Route exact path="/order" component={OrderPage} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
