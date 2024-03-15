import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";
import Map from "./pages/Map";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="main" />} />
          <Route path="main" element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path="bookdetails" element={<BookDetails />} />
          <Route path="map" element={<Map />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
