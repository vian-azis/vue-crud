<template>
  <div class="px-3 my-5">
    <div class="d-flex w-100">
      <h6 class="text-left text-light">Add Data</h6>
      <router-link :to="{ name: 'transaction.index' }" class="btn btn-sm btn-outline-secondary ms-auto">
        <font-awesome-icon icon="fa-solid fa-angle-left" /> Back
      </router-link>
    </div>
    <form class="text-light mt-3" @submit.prevent="store()">
      <div class="div mb-3">
        <label for="" class="form-label">data_a</label>
        <input required type="number" class="form-control" v-model="transaction.data_a" />
        <div class="div text-danger" v-if="validation.data_a">{{ validation.data_a[0] }}</div>
      </div>
      <div class="div mb-3">
        <label for="" class="form-label">data_b</label>
        <input type="text" class="form-control" v-model="transaction.data_b" />
        <div class="div text-danger" v-if="validation.data_b">{{ validation.data_b[0] }}</div>
      </div>
      <div class="div mb-3">
        <label for="" class="form-label">data_c</label>
        <input type="datetime-local" class="form-control" v-model="transaction.data_c" />
        <div class="div text-danger" v-if="validation.data_c">{{ validation.data_c[0] }}</div>
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    // data binding
    const transaction = reactive({
      data_a: null,
      data_b: null,
      data_c: null,
    });
    const validation = ref([]);
    const router = useRouter();

    function store() {
      let axiosConfig = {
        headers: {
          'Content-Type': "application/json; charset=UTF-8",
          'Accept': "Token",
          'Access-Control-Allow-Origin': "*",
        },
      };
      axios({
        method: "post",
        url: "http://localhost/crud-tester/data/add",
        headers: axiosConfig,
        data: transaction,
      })
        .then(function (response) {
          if (response.data.status) {
            router.push({
              name: "transaction.index",
            });
          } else {
            console.log(response.data.message);
          }
        })
        .catch(function (err) {
          validation.value = err.response.data;
        });
    }

    return {
      transaction,
      validation,
      router,
      store,
    };
  },
};
</script>
