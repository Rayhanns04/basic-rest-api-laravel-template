<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-view></router-view>
                <router-link
                    to="/"
                    class="btn btn-primary btn-sm rounded shadow mb-3"
                    >Back</router-link
                >

                <div class="card rounded shadow">
                    <div class="card-header">
                        <h3>Create Transaction</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="onCreatedTransaction">
                            <div class="mb-3">
                                <label for="" class="form-label">Title</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="title"
                                />

                                <div class="text-danger">
                                    <!-- Validation Message -->
                                    {{ validation.type }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Amount</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model="amount"
                                />

                                <div class="text-danger">
                                    Validation Message
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Time</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="yyyy-mm-dd hh:mm:ss"
                                    v-model="time"
                                />

                                <div class="text-danger">
                                    Validation Message
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Type</label>
                                <select
                                    id=""
                                    class="form-select"
                                    v-model="type"
                                >
                                    <option value="expense">Expense</option>
                                    <option value="revenue">Revenue</option>
                                </select>

                                <div class="text-danger">
                                    Validation Message
                                </div>
                            </div>

                            <button
                                class="btn btn-outline-primary"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            title: "",
            amount: "",
            time: "",
            type: "",
            validation: []
        };
    },
    methods: {
        onCreatedTransaction() {
            axios
                .post("http://127.0.0.1:8000/api/transaction", {
                    title: this.title,
                    amount: this.amount,
                    time: this.time,
                    type: this.type
                })
                .then(() => {
                    alert("Success");
                    console.log("Success");
                })
                .catch(err => {
                    this.validation.value = err.response.data;
                    console.log(this.validation);
                });
        }
    }
};
</script>
