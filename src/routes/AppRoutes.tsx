import { Route, Routes, useParams } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import BuyProduct from "../pages/BuyProduct"


function AppRoutes() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productname" element={<ProductDetail />}>
          <Route path="buy" element={<BuyProduct />}/>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>}/>

      </Routes>
    </>
  )
}

export default AppRoutes