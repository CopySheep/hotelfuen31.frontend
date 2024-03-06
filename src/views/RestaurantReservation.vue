<script setup>
import { onMounted, ref } from "vue";

const reservations = ref([]);

const loadReservations = async () => {
    const response = await fetch("https://localhost:7245/api/RestaurantReservation");
    const datas = await response.json();

    reservations.value = datas;
};

onMounted(() => {
    loadReservations();
})

</script>

<template>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>顧客編號</th>
                <th>姓名</th>
                <th>電話</th>
                <th>E-mail</th>
                <th>訂位日期</th>
                <th>人數</th>
                <th>桌號</th>
                <th>總價格</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="reservation in reservations" v-bind:key="reservation.id">
                <td>{{ reservation.id }}</td>
                <td>{{ reservation.name }}</td>
                <td>{{ reservation.phone }}</td>
                <td>{{ reservation.email }}</td>
                <td>{{ reservation.date }}</td>
                <td>{{ reservation.counts }}</td>
                <td>{{ reservation.seat_Id }}</td>
                <td>{{ reservation.unitPrice * reservation.counts }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
