import { index, layout, route } from "@react-router/dev/routes";



export default [
  layout("routes/layout.jsx", [index("routes/home.jsx")]),
  route("login", "routes/login.jsx"),
  route("register", "routes/register.jsx"),
];