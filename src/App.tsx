import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import OurStoryPage from './OurStory/OurStoryPage';
import ContactPage from './Contact/ContactPage';
import ServicesPage from './Services/ServicesPage';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="our-story" element={<OurStoryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
