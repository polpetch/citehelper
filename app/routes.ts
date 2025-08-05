import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("admin", "routes/admin.tsx"),
  route("admin/manage", "routes/admin.manage.tsx"),
  route("admin/format", "routes/admin.format.tsx"),
  route("admin/users", "routes/admin.users.tsx"),
] satisfies RouteConfig;
