import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppDashboard from "@/pages/AppDashboard.vue";
import AppUsers from "@/pages/users/AppUsers.vue";
import AppRegister from "@/pages/AppRegister.vue";
import AppWrapper from "@/pages/AppWrapper.vue";
import AppLogin from "@/pages/AppLogin.vue";
import UserCreate from "@/pages/users/UserCreate.vue";
import UserEdit from "@/pages/users/UserEdit.vue";
import AppRoles from "@/pages/roles/AppRoles.vue";
import RoleCreate from "@/pages/roles/RoleCreate.vue";
import RoleEdit from "@/pages/roles/RoleEdit.vue";
import AppProducts from "@/pages/products/AppProducts.vue";
import ProductCreate from "@/pages/products/ProductCreate.vue";
import ProductEdit from "@/pages/products/ProductEdit.vue";
import AppOrders from "@/pages/orders/AppOrders.vue";
import AppProfile from "@/pages/AppProfile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/register",
    component: AppRegister,
  },
  {
    path: "/login",
    component: AppLogin,
  },
  {
    path: "",
    component: AppWrapper,
    children: [
      {
        path: "",
        component: AppDashboard,
      },
      {
        path: "/users",
        component: AppUsers,
      },
      {
        path: "/users/create",
        component: UserCreate,
      },
      {
        path: "/users/:id/edit",
        component: UserEdit,
      },
      {
        path: "/roles",
        component: AppRoles,
      },
      {
        path: "/roles/create",
        component: RoleCreate,
      },
      {
        path: "/roles/:id/edit",
        component: RoleEdit,
      },
      {
        path: "/products",
        component: AppProducts,
      },
      {
        path: "/products/create",
        component: ProductCreate,
      },
      {
        path: "/products/:id/edit",
        component: ProductEdit,
      },
      {
        path: "/orders",
        component: AppOrders,
      },
      {
        path: "/profile",
        component: AppProfile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
