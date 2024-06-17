// import React, { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import Header from "./components/Header";
// import InventoryStats from "./components/InventoryStats";
// import ProductTable from "./components/ProductTable";
// import { setProducts, setStats } from "./actions/actions";
// import "./App.css";

// const App = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const toggle = () => {
//     setIsAdmin(!isAdmin);
//   };

//   // const fetchProducts = async () => {
//   //   try {
//   //     const response = await axios.get(
//   //       "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
//   //     );
//   //     const data = response.data;
//   //     dispatch(setProducts(data));
//   //     updateStats(data);
//   //   } catch (error) {
//   //     console.error("Error fetching the data", error);
//   //   }
//   // };

//   const fetchProducts = useCallback(async () => {
//     try {
//       const response = await axios.get(
//         "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
//       );
//       const data = response.data;
//       dispatch(setProducts(data));
//       updateStats(data);
//     } catch (error) {
//       console.error("Error fetching the data", error);
//     }
//   }, [dispatch, updateStats]);

//   const updateStats = useCallback(
//     (updatedProducts) => {
//       const totalProducts = updatedProducts.length;
//       const totalValue = updatedProducts.reduce(
//         (acc, product) => acc + parseFloat(product.value.replace("$", "")),
//         0
//       );
//       const outOfStock = updatedProducts.filter(
//         (product) => product.quantity === 0
//       ).length;
//       const categories = new Set(
//         updatedProducts.map((product) => product.category)
//       ).size;

//       dispatch(
//         setStats([
//           { label: "Total Product", value: totalProducts },
//           { label: "Total Store Value", value: `$${totalValue}` },
//           { label: "Out of Stocks", value: outOfStock },
//           { label: "No of Categories", value: categories },
//         ])
//       );
//     },
//     [dispatch]
//   );

//   useEffect(() => {
//     fetchProducts();
//   });

//   useEffect(() => {
//     updateStats(products);
//   }, [products,updateStats]);

//   return (
//     <div className="App">
//       <Header isAdmin={isAdmin} toggle={toggle} />
//       <div className="content">
//         <InventoryStats />
//         <ProductTable isAdmin={isAdmin} />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "./components/Header";
import InventoryStats from "./components/InventoryStats";
import ProductTable from "./components/ProductTable";
import { setProducts, setStats } from "./actions/actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggle = () => {
    setIsAdmin(!isAdmin);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
        );
        const data = response.data;
        dispatch(setProducts(data));
        updateStats(data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    const updateStats = (updatedProducts) => {
      const totalProducts = updatedProducts.length;
      const totalValue = updatedProducts.reduce(
        (acc, product) => acc + parseFloat(product.value.replace("$", "")),
        0
      );
      const outOfStock = updatedProducts.filter(
        (product) => product.quantity === 0
      ).length;
      const categories = new Set(
        updatedProducts.map((product) => product.category)
      ).size;

      dispatch(
        setStats([
          { label: "Total Product", value: totalProducts },
          { label: "Total Store Value", value: `$${totalValue}` },
          { label: "Out of Stocks", value: outOfStock },
          { label: "No of Categories", value: categories },
        ])
      );
    };

    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const updateStats = (updatedProducts) => {
      const totalProducts = updatedProducts.length;
      const totalValue = updatedProducts.reduce(
        (acc, product) => acc + parseFloat(product.value.replace("$", "")),
        0
      );
      const outOfStock = updatedProducts.filter(
        (product) => product.quantity === 0
      ).length;
      const categories = new Set(
        updatedProducts.map((product) => product.category)
      ).size;

      dispatch(
        setStats([
          { label: "Total Product", value: totalProducts },
          { label: "Total Store Value", value: `$${totalValue}` },
          { label: "Out of Stocks", value: outOfStock },
          { label: "No of Categories", value: categories },
        ])
      );
    };

    updateStats(products);
  }, [products, dispatch]);

  return (
    <div className="App">
      <Header isAdmin={isAdmin} toggle={toggle} />
      <div className="content">
        <InventoryStats />
        <ProductTable isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default App;

