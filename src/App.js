import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import {Redirect} from 'react-router';
import Navbar from "./Navbar";
import Search from "./Search";
import RecommendedPackage from "./RecommendedPackage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact
    path="/"
    element={<Navigate to="/excelerator"/>}
  />
        <Route path="/excelerator" element={<Navbar />}>
        <Route path="/excelerator/search/:id" element={<Search />} />
        <Route path="/excelerator/recommendedPackage" element={<RecommendedPackage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
