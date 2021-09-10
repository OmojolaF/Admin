import { createRouter, createWebHistory } from "vue-router"
import Login from "../components/Login.vue"
import Dashboard from "../components/Dashboard.vue"
import Form from "../components/Form.vue"
import contents from "../components/contents.vue"
import description from "../components/description.vue"


const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard, 
  },
  {
    path: "/form",
    name: "Form",
    component: Form, 
  },
  {
    path: "/contents",
    name: "contents",
    component: contents, 
  },
  {
    path: "/description",
    name: "description",
    component: description, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
