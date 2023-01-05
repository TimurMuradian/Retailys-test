import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./pages/ProductList";
import PartsList from "./pages/PartsList";
import Header from "./components/Header";
import dataXML from "./data.xml";
// import dataXML from "./export_full.xml";
import XMLParser from "react-xml-parser";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const [products, setProducts] = useState([]);
  const [parts, setParts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(dataXML, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((res) => {
        const data = new XMLParser().parseFromString(res.data);
        const items = data.getElementsByTagName("item");
        const allParts = data.getElementsByTagName("part");
        setProducts(items);
        setParts(allParts);
        setIsLoading(false);
      });
  }, []);

  const amount = products.length;

    if (isLoading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      );
    }

  return (
    <BrowserRouter>
      <Header amount={amount} />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} isLoading={isLoading} />}
        />
        <Route
          path="/parts"
          element={<PartsList parts={parts} isLoading={isLoading} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
