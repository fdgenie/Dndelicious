import Vue from "vue";
import axios from "axios";
const customAxios = axios.create({
  baseURL: process.env.API_URL
});

Vue.prototype.$axios = customAxios;

export default customAxios;
