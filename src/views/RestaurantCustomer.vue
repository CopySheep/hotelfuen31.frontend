<script setup>
import { onMounted, ref } from "vue";
const customers = ref([]);

const loadCustomers = async () => {
    const response = await fetch("https://localhost:7245/api/RestaurantCustomers");
    const datas = await response.json();

    customers.value = datas;

    console.log(customers.value);
};
onMounted(() => {
    loadCustomers();
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
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in customers" v-bind:key="customer.id">
                <td>{{ customer.id }}</td>
                <td>{{ customer.name }}</td>
                <td>{{ customer.phone }}</td>
                <td>{{ customer.email }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
