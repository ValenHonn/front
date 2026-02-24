import { NavLink } from "react-router-dom"


function Products() {
  const products = [
    "Teclado Gamer", 
    "Mouse Gamer", 
    "Silla Gamer", 
    "Botella Gamer"
  ]


  return (
    <>
      <div>
        <h1>Products Section</h1>
        <ul>
          {products.map((product)=>(
            <li key={product}><NavLink to={`/products/${product}`}>{product}</NavLink></li> //creamos muchos links segun la cantidad de productos que existan
          ))}
        </ul>
      </div>
    </>
  )
}

export default Products