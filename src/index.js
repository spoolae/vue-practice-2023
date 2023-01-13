import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const cc = require("currency-codes");

const app = createApp({
  data() {
    return {
      //main
      students: [],
      search: "",
      student: { name: "", zdav: false, group: "" },

      //currency
      currency: [],
      itemFrom: "",
      itemTo: "",
      amount: "",
      result: "",
    };
  },
  mounted: function () {
    axios.get("http://34.82.81.113:3000/students").then((response) => {
      this.students = response.data;
    });

    axios.get("currency.json").then((res) => {
      res.data.map((item) => {
        item.nameA =
          (cc.number(item.currencyCodeA) &&
            cc.number(item.currencyCodeA).code) ||
          null;
        item.nameB =
          cc.number(item.currencyCodeB) && cc.number(item.currencyCodeB).code;
      });
      this.currency = res.data;
    });
  },
  methods: {
    searchStudent() {
      if (!this.search) {
        this.students.forEach((student) => {
          student.highlight = false;
        });
        return;
      }
      this.students.forEach((student) => {
        if (student.name.toLowerCase().includes(this.search.toLowerCase())) {
          student.highlight = true;
        } else {
          student.highlight = false;
        }
      });
    },
    deleteStudent(studId) {
      const index = this.students.findIndex((elem) => elem.id === studId);
      this.students.splice(index, 1);
    },
    addStudent() {
      this.student.id = this.students.length + 1;
      this.students.push({ ...this.student });
    },

    getResult() {
      const currentTransaction = this.currency.find(
        (item) => item.nameA === this.itemFrom && item.nameB === this.itemTo
      );
      if (!currentTransaction) {
        this.result = "Not available";
      } else {
        let rate;
        if (currentTransaction.rateBuy) {
          rate = currentTransaction.rateBuy;
        } else if (currentTransaction.rateCross) {
          rate = currentTransaction.rateCross;
        } else if (currentTransaction.rateSell) {
          rate = currentTransaction.rateSell;
        }
        this.result = this.amount * rate;
      }
    },
  },
});
app.use(VueAxios, axios);
app.mount("#app");
