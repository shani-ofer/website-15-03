import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";
import { IndividualsPage } from "./pages/IndividualsPage";
import { CompaniesPage } from "./pages/CompaniesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="coaching" element={<IndividualsPage />} />
          <Route path="management" element={<CompaniesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
