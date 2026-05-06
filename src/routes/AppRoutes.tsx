import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import BuyProduct from "../pages/BuyProduct"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Tasks from "../pages/Tasks"
import TaskFormPage from "../pages/TaskFormPage"
import Profile from "../pages/Profile"
import ProtectedRoute from "../ProtectedRoute"

function AppRoutes() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productname" element={<ProductDetail />}>
          <Route path="buy" element={<BuyProduct />}/>
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/tasks" element={<Tasks />} /> {/* ver tareas */}
          <Route path="/add-task" element={<TaskFormPage />} /> {/* agregar tareas */}
          <Route path="/tasks/:id" element={<TaskFormPage />} /> {/* editar tareas */}
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>}/>

      </Routes>
    </>
  )
}

export default AppRoutes