<template>
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-8">

            <router-view></router-view>
            <router-link to="/create" class="btn btn-primary btn-sm rounded shadow mb-3">Add</router-link>

            <div class="card rounded shadow">
                <div class="card-header">
                    <h3>Transaction List</h3>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(transaction, index) in transactions.data" :key="index">
                                <td>{{ transaction.title }}</td>
                                <td>{{ transaction.amount }}</td>
                                <td>{{ transaction.type }}</td>
                                <td>
                                    <div class="btn-group">
                                        <router-link to="/edit/1" class="btn btn-sm btn-outline-info">Edit</router-link>
                                        <button class="btn btn-sm btn-outline-danger ml-3">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
        name: 'App',
        data: () => ({
            transactions: []
        }),
        mounted() {
            axios.get('http://127.0.0.1:8000/api/transaction')
            .then((res) => {
                this.transactions = res.data;
                console.log(res)
            }).catch((err) => {
                console.log(err.response.message)
            });
        },

}
</script>
