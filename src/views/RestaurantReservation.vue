<script setup>
import { onMounted, ref } from "vue";

const reservations = ref([]);
const name = ref("");
const phone = ref("");

const loadReservations = async () => {
    const response = await fetch(`https://localhost:7245/api/RestaurantReservation?name=${name.value}&phone=${phone.value}`);
    const datas = await response.json();

    reservations.value = datas;
};

onMounted(() => {
    loadReservations();
})

const inputHandler = () => {
    loadReservations();
};

</script>

<template>
    <div class="row mb-3">
        <div class="col-6">
        </div>
        <div class="col-3">
            <input type="search" placeholder="請輸入姓名" v-model="name" v-on:input="inputHandler">
        </div>
        <div class="col-3">
            <input type="search" placeholder="請輸入電話" v-model="phone" v-on:input="inputHandler">
        </div>
    </div>
    <table class="table">
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