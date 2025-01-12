import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { StrictMode, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Layout from "./components/Layout.jsx";
import LoadingAnimation from "./pages/LoadingAnimation.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import "./index.css";

const Competition = React.lazy(() => import("./pages/Competition.jsx"));
const Homepage = React.lazy(() => import("./pages/home-page"));
const Register = React.lazy(() => import("./pages/register"));
const Events = React.lazy(() => import("./pages/Events.jsx"));

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingAnimation />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="Register" element={<Register />} />
              <Route path="events" element={<Events />} />
              <Route path="events/:eventId" element={<Competition />} />
              <Route
                path="events/:eventId/:competitionId"
                element={<Competition />}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      
      <SpeedInsights/>
      <Analytics/>
    </>
  );
}

export default App;
