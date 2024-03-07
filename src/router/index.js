import { createRouter, createWebHistory} from "vue-router"
import RestaurantReservation from "@/views/RestaurantReservation.vue"
import NewReservation from "@/views/NewReservation.vue"


const routes = [
    {
        // http//localhost/restaurantreservtion
        path: "/restaurantreservation",
        component: RestaurantReservation
    },
    {
        // http//localhost/newreservation
        path: "/newreservation",
        component: NewReservation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;