import { createRouter, createWebHistory} from "vue-router"
import RestaurantReservation from "@/views/RestaurantReservation.vue"

const routes = [
    {
        // http//localhost/restaurantreservtion
        path: "/restaurnatreservation",
        component: RestaurantReservation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;