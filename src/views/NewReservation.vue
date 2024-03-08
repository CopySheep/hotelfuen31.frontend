<script setup>
import { onMounted, ref } from "vue";

const reservations = ref({
    name: "",
    phone: "",
    email: "",
    date: "",
    counts: 0,
    period_id: 0,
    seat_Id: 0
});

const seats = ref([]);

const periods = ref([]);

const postReservations = async () => {
    const response = await fetch("https://localhost:7245/api/RestaurantReservations", {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservations.value),
        method: "POST",
    });
    const datas = await response.text();
    console.log(datas);
    alert(datas);
};

const clickHandler = () => {
    const confirmMessage = "是否確定資料輸入無誤？";

    if (confirm(confirmMessage)) {
        postReservations();
    }
};

const loadSeats = async () => {
    const response = await fetch("https://localhost:7245/api/RestaurantSeats");
    const datas = await response.json();

    seats.value = datas;
};

const loadPeriod = async () => {
    const response = await fetch("https://localhost:7245/api/RestaurantPeriods");
    const datas = await response.json();

    periods.value = datas;
};

onMounted(() => {
    loadSeats();
    loadPeriod();
});

</script>

<template>
    <div class="row mb-3">
        <div class="col-3">
            <label for="name" class="form-label">姓名：</label>
            <input type="text" class="form-control" id="name" v-model="reservations.name" required>
        </div>
        <div class="col-3">
            <label for="phone" class="form-label">電話：</label>
            <input type="text" class="form-control" id="phone" v-model="reservations.phone" required v-bind:maxlength="10">
        </div>
        <div class="col-6">
            <label for="email" class="form-label">信箱：</label>
            <input type="email" class="form-control" id="email" v-model="reservations.email">
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-6">
            <label for="date" class="form-label">日期：</label>
            <input type="date" class="form-control" id="date" v-model="reservations.date" required>
        </div>
        <div class="col-6">
            <label for="period" class="form-label">用餐時段：</label>
            <select class="form-select" v-model="reservations.period_id">
                <option v-for="period in periods" v-bind:key="period.id" v-bind:value="period.id">{{ period.name }}</option>
            </select>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-6">
            <label for="counts" class="form-label">人數：</label>
            <input type="number" class="form-control" id="counts" v-model="reservations.counts" required v-bind:min="1" v-bind:max="6">
        </div>
        <div class="col-6">
            <label for="seat" class="form-label">座位：</label>
            <select class="form-select" v-model="reservations.seat_Id">
                <option v-for="seat in seats" v-bind:key="seat.id" v-bind:value="seat.id">{{ seat.id }}號{{ seat.type }}</option>
            </select>
        </div>
    </div>
    <button class="btn btn-primary" v-on:click="clickHandler">訂位</button>

</template>

<style scoped></style>
