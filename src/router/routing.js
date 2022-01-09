import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
import Experience from "../components/Experience";
import Contact from "../components/Contact";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/experience", 
        component: Experience,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
