import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/about/About";
import Catalog from "../../features/catalog/Catalog";
import ProjectDetails from "../../features/catalog/ProjectDetails";
import ContactPage from "../../features/contact/Contact";
import HomePage from "../../features/home/Home";
import ShopPage from "../../features/shop/Shop";
import Header from "./Header";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Maiden Orange', 
        'cursive'
      ].join(','),
    },
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? 'white' : '#121212'
      }
    }
  })

function handleThemeChange(){
  setdarkMode(!darkMode);
}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<ProjectDetails />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
