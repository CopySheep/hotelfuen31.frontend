import { createRouter, createWebHistory} from "vue-router"
import RestaurantCustomer from "@/views/RestaurantCustomer.vue"

const routes = [
    {
        // http//localhost/restaurantcustomer
        path: "/restaurnatcustomer",
        component: RestaurantCustomer
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;