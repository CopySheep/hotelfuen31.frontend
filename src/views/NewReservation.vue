<script setup>
import { onMounted, ref } from "vue";
const reservations = ref({
    name: "",
    phone: "",
    email: "",
    date: "",
    count: 0,
    period_id: 0,
    seat_Id: 0
});

const seats = ref([]);

const periods = ref([]);

const clickHandler = async () => {
    const response = await fetch("https://localhost:7245/api/RestaurantReservations", {
        body: reservations.value,
        method: "POST"
    });

    const datas = await response.json
    console.log(datas);
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
    <form>
        <div class="row mb-3">
            <div class="col-3">
                <label for="name" class="form-label">姓名：</label>
                <input type="text" class="form-control" id="name" v-model="reservations.name">
            </div>
            <div class="col-3">
                <label for="phone" class="form-label">電話：</label>
                <input type="text" class="form-control" id="phone" v-model="reservations.phone">
            </div>
            <div class="col-6">
                <label for="email" class="form-label">信箱：</label>
                <input type="email" class="form-control" id="email" v-model="reservations.email">
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-6">
                <label for="date" class="form-label">日期：</label>
                <input type="date" class="form-control" id="date" v-model="reservations.date">
            </div>
            <div class="col-6">
                <label for="period" class="form-label">用餐時段：</label>
                <select class="form-select" v-model="reservations.id">
                    <option v-for="period in periods" v-bind:key="period.id">{{ period.name }}</option>
                </select>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-6">
                <label for="count" class="form-label">人數：</label>
                <input type="number" class="form-control" id="count" v-model="reservations.count">
            </div>
            <div class="col-6">
                <label for="seat" class="form-label">座位：</label>
                <select class="form-select" v-model="reservations.seat_Id">
                    <option v-for="seat in seats" v-bind:key="seat.id">{{ seat.id }}號{{ seat.type }}</option>
                </select>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="clickHandler">Submit</button>
    </form>
</template>

<style scoped></style>
