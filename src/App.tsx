import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Changelog from './pages/Changelog';
import ChangelogDetail from './pages/ChangelogDetail';
import Privacy from './pages/Privacy';
import ComponentShowcase from './pages/ComponentShowcase';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="changelog/:id" element={<ChangelogDetail />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="components" element={<ComponentShowcase />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
