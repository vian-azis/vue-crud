<template>
  <div class="px-3 my-5">
    <div class="d-flex w-100">
      <h6 class="text-left text-light">Edit Data</h6>
      <router-link :to="{ name: 'transaction.index' }" class="btn btn-sm btn-outline-secondary ms-auto">
        <font-awesome-icon icon="fa-solid fa-angle-left" /> Back
      </router-link>
    </div>
    <form class="text-light mt-3" @submit.prevent="update()">
      <div class="div mb-3">
        <label for="" class="form-label">data_a</label>
        <input required m type="number" class="form-control" v-model="transaction.data_a" />
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
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import moment from 'moment'
import axios from "axios";
export default {
  setup() {
    // data binding
    let transaction = reactive({
      data_a: '',
      data_b: '',
      data_c: '',
    });
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      axios
        .get(`http://localhost/crud-tester/data/data_by_id/${route.params.id}`)
        .then((result) => {
          transaction.data_a = result.data.data.data_a;
          transaction.data_b = result.data.data.data_b;
          transaction.data_c = moment(result.data.data.data_c).format('YYYY-MM-DDTHH:mm');
          console.log(transaction.data_c)
        })
        .catch((err) => {
          console.log(err);
        });
    });

    function update() {
      let axiosConfig = {
        headers: {
          'Content-Type': "application/json; charset=UTF-8",
          'Accept': "Token",
          'Access-Control-Allow-Origin': "*",
        },
      };
      axios({
        method: "put",
        url: `http://localhost/crud-tester/data/edit/${route.params.id}`,
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
      update,
    };
  },
};
</script>
