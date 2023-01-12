import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp({
  data() {
    return {
      students: [],
      search: "",
      student: { name: "", zdav: false, group: "" },
    };
  },
  mounted: function () {
    axios.get("http://34.82.81.113:3000/students").then((response) => {
      this.students = response.data;
    });
  },
  methods: {
    deleteStudent(studId) {
      const index = this.students.findIndex((elem) => elem.id === studId);
      this.students.splice(index, 1);
    },
    addStudent() {
      this.student.id = this.students.length + 1;
      this.students.push({ ...this.student });
    },
  },
});
app.use(VueAxios, axios);
app.mount("#app");
