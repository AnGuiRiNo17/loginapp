import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../components/Home.vue") },
        { path: "/register", component: () => import("../components/Register.vue") },
        { path: "/feed", component: () => import("../components/Feed.vue"), meta: { requiresAuth: true } },
        { path: "/sign-in", component: () => import("../components/SignIn.vue") }, // Asegúrate de que este archivo exista
    ],
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        try {
            const removeListener = onAuthStateChanged(
                getAuth(),
                (user) => {
                    removeListener();
                    resolve(user);
                },
                (error) => {
                    console.error("Error en onAuthStateChanged:", error);
                    reject(error);
                }
            );
        } catch (error) {
            console.error("Error inesperado al obtener el usuario actual:", error);
            reject(error);
        }
    });
};

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        try {
            const user = await getCurrentUser();
            if (user) {
                next();
            } else {
                console.warn("Acceso denegado: Usuario no autenticado.");
                next("/sign-in");
            }
        } catch (error) {
            console.error("Error al verificar la autenticación:", error);
            next("/sign-in");
        }
    } else {
        next();
    }
});

export default router;
