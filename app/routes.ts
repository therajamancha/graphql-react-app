import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // home route

  layout("routes/auth/layout.tsx", [
    ...prefix("admin", [
      route("login", "routes/auth/login.tsx"),
      route("signup", "routes/auth/signup.tsx"),
      route("forgot-password", "routes/auth/forgot-password.tsx"),
    ]),
  ]),

  // layout for dashboard
  layout("routes/dashboard/layout.tsx", [
    route("admin", "routes/dashboard/index.tsx"),
    // prefix for admin
    ...prefix("admin", [
      route("customers", "routes/dashboard/customers/index.tsx"),
      // prefix for customers
      ...prefix("customers", [
        route("create", "routes/dashboard/customers/create.tsx"), // create route
        route(":customerId", "routes/dashboard/customers/customer.tsx"), // customer dynamic route
      ]),
    ]),
  ]),
] satisfies RouteConfig;
