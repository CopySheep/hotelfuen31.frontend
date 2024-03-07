<script setup>
import { ref } from "vue";
const reservations = ([
    name: "",
    phone: "",
    email: "",
    date: "",
    period: "",
    count: "",
    seat: ""
]);

const clickHandler = () => {

};

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
                <select class="form-select">
                    <option value="1">One</option>
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
                <select class="form-select">
                    <option value="1">One</option>
                </select>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="clickHandler">Submit</button>
    </form>
</template>

<style scoped></style>
