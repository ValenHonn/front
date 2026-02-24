import { NavLink } from "react-router-dom"


function Navbar() {


  return (
    <>
      <div>
        <p>Esta es la navbar</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Productos</NavLink>
        
      </div>
    </>
  )
}

export default Navbar