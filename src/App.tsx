import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import OurStoryPage from './OurStory/OurStoryPage';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import FaqPage from './FAQ/FaqPage';
import GalleryPage from './Gallery/GalleryPage';
import RegistryPage from './Registry/RegistryPage';
import PrivacyPolicyPage from './PrivacyPolicy/PrivacyPolicyPage';
import TermsPage from './Terms/TermsPage';
import RsvpPage from './RSVP/RsvpPage';
import RsvpEventsPage from './RSVP/RsvpEvents/RsvpEventsPage';
import ErrorPage from './Error/ErrorPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" errorElement={<ErrorPage />}>
            <Route index element={<HomePage />} />
            <Route path="our-story" element={<OurStoryPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="registry" element={<RegistryPage />} />
            <Route path="rsvp">
              <Route index element={<RsvpPage />} />
              <Route
                path="events/:id"
                element={<RsvpEventsPage />}
                errorElement={<ErrorPage />}
              />
            </Route>
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-service" element={<TermsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
