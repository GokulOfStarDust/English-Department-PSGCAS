import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Homepage from "./pages/home-page";
import Register from "./pages/register";
import Events from "./pages/Events.jsx";
import Competition from "./pages/Competition.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Register" element={<Register />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:eventId" element={<Competition />} />
          <Route path="events/:eventId/:competitionId" element={<Competition />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
