import { NavLink, Outlet, useParams } from "react-router-dom"


function ProductDetail() {

    const { productname } = useParams()
   
    

  return (
    <>
      <div>
        <h1>Detalle de {productname}</h1>
        <NavLink to="buy">Buy</NavLink>
        <Outlet />
      </div>
    </>
  )
}

export default ProductDetail