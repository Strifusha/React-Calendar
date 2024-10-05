import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventsProvider } from './contexts/eventsContext';
import { DynamicPage } from "./components/DynamicPage/DynamicPage";
import { Layout } from './components/Layout/Layout';

export const App = () => {

  return (
    <EventsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<p>This is your home page</p>} />
            <Route path=":item" element={<DynamicPage />} />
          </Route>
        </Routes>
      </Router>
    </EventsProvider>

  );
}