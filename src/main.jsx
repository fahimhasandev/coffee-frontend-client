import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddCoffee from "./components/AddCoffee.jsx"
import UpdateCoffee from "./components/UpdateCoffee.jsx"
import Layout from "./components/Layout.jsx"
import SignIn from "./components/SignIn.jsx"
import SignUp from "./components/SignUp.jsx"
import AuthProvider from "./providers/AuthProvider.jsx"
import Users from "./components/Users.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("http://localhost:5001/coffee")
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5001/coffee/${params.id}`)
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:5001/users")
      }
    ]
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
