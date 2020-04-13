export const routes = [
  {
    path: "/",
    component: () => import("@/views/frontend/Index"),
    children: [
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
        path: "/login",
        name: "Login",
        component: () => import("@/views/frontend/SignIn")
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/frontend/SignUp")
      },
      {
        path: "*",
        name: "NotFound",
        component: () => import("@/views/frontend/404")
      }
    ]
  }
];
