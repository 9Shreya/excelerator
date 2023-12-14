import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import {Redirect} from 'react-router';
import Navbar from "./Navbar";
import Search from "./Search";
import RecommendedPackage from "./RecommendedPackage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/excelerator" exact element={<Navbar />}>
        <Route path="/excelerator/search/:id" exact element={<Search />} />
        <Route path="/excelerator/recommendedPackage" element={<RecommendedPackage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
