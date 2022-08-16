import { createRouter, createWebHistory } from "vue-router";
// import IndexView from "../views/transaction/IndexView.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "transaction.index",
            component: () =>
                import ("../views/transaction/IndexView.vue"),
            props: true,
            meta: {
                title: 'transaction.index'
            }
        },
        {
            path: "/add",
            name: "transaction.add",
            component: () =>
                import ("../views/transaction/AddView.vue"),
            props: true,
            meta: {
                title: 'transaction.add'
            }
        },
        {
            path: "/edit/:id",
            name: "transaction.edit",
            component: () =>
                import ("../views/transaction/EditView.vue"),
            props: true,
            meta: {
                title: 'transaction.edit'
            }
        },
    ],
});

export default router;