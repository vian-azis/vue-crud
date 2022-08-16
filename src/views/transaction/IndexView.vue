<template>
  <div class="px-3 my-5">
    <div class="d-flex w-100">
      <h6 class="text-left text-light">CRUD</h6>
      <router-link :to="{ name: 'transaction.add' }" class="btn btn-sm btn-outline-primary ms-auto"><font-awesome-icon icon="fa-solid fa-plus" /> Add</router-link>
    </div>
    <table class="table text-light">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">data_a</th>
          <th scope="col">data_b</th>
          <th scope="col">data_c</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in transactions" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ transaction.data_a }}</td>
          <td>{{ transaction.data_b }}</td>
          <td>{{ transaction.data_c }}</td>
          <td style="width: 120px;">
            <div class="btn-group">
              <router-link :to="{
                name: 'transaction.edit',
                params: { id: transaction.id },
              }" class="btn btn-sm btn-outline-info">Edit</router-link>
              <button class="btn btn-sm btn-outline-danger" @click.prevent="del(transaction.id, index)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    // reactive state
    let transactions = ref([]);
    onMounted(() => {
      // get axios
      axios
        .get("http://localhost/crud-tester/data")
        .then((result) => {
          transactions.value = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });

    function del(id, index) {
      let axiosConfig = {
        headers: {
          'Content-Type': "application/json; charset=UTF-8",
          'Accept': "Token",
          'Access-Control-Allow-Origin': "*",
        },
      };
      axios({
        method: "delete",
        url: `http://localhost/crud-tester/data/delete/${id}`,
        headers: axiosConfig,
      })
        .then(function (response) {
          if (response.data.status) {
            transactions.value.splice(index, 1)
          } else {
            console.log(response.data.message);
          }
        })
        .catch(function (err) {
          console.log(err.response.data);
        });
    }

    return {
      transactions,
      del
    };
  },
};
</script>
