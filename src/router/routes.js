const childBackend = [];

const childFrontend = [
  {
    path: "",
    name: "Home",
    component: () => import("@/views/frontend/Home")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/frontend/About")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/frontend/Blog")
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("@/views/frontend/Order"),
    children: [
      {
        path: "/order/nasi-boks",
        name: "NasiBoks",
        component: () => import("@/views/frontend/page/NasiBoks")
      },
      {
        path: "/order/reservasi-tempat",
        name: "ReservasiTempat",
        component: () => import("@/views/frontend/page/ReservasiTempat")
      },
      {
        path: "/order/sedekah-nasi-boks",
        name: "SedekahNasiBoks",
        component: () => import("@/views/frontend/page/SedekahNasiBoks")
      }
    ]
  },
  {
    path: "/order-history",
    name: "OrderHistory",
    component: () => import("@/views/frontend/auth/view/OrderHistory")
  },
  {
    // Login: Route
    path: "/login",
    name: "Login",
    component: () => import("@/views/frontend/auth/Login")
  },
  {
    // Register: Route
    path: "/register",
    name: "Register",
    component: () => import("@/views/frontend/auth/Register")
  },
  {
    // Forgot: Route
    path: "/forgot-password",
    name: "ForgotPasword",
    component: () => import("@/views/frontend/auth/ForgotPassword")
  },
  {
    // Verify: Route
    path: "/verify",
    name: "VerifyEmail",
    component: () => import("@/views/frontend/auth/VerifyEmail")
  },
  {
    // Backend: Route
    path: "/foodpedia",
    name: "Backend",
    component: () => import("@/views/backend/Index"),
    children: [...childBackend]
  },
  {
    // Page not Found: Route
    path: "*",
    name: "NotFound",
    component: () => import("@/views/frontend/404")
  }
];

export const routes = [
  {
    // Frontend: Route
    path: "/",
    component: () => import("@/views/frontend/Index"),
    children: [...childFrontend]
  }
];
