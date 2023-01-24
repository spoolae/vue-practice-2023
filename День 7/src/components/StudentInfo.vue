<template>
  <div class="info">
    <h2>Students count: {{ studentsCount }}</h2>
    <button @click="isOpen = true"><img :src="student.photo" alt="Student photo" width="100"></button>
    <div>
      <p>Ім'я <strong>{{ student.name }}</strong></p>
      <p>Група <strong>{{ student.group }}</strong></p>
      <p>Практика <strong>{{ isDonePrText }}</strong></p>
  </div>
  <Modal :open="isOpen" @close="isOpen = !isOpen">
    <img :src="student.photo" alt="Student photo">
  </Modal>
  </div>
</template>

<script>
import axios from "axios"
import Modal from "./Modal.vue";
import { ref } from "vue";

export default {
  name:'StudentInfo',
  components:{
    Modal
  },
  props: {
    id: '',
  },
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
  data(){
    return{
      student:{},
    }
  },
  computed: {
    isDonePrText(){
      return this.student.isDonePr ? "Здана" : "Не здана";
    },
    studentsCount () {
      return this.$store.getters.getCount
    }
  },
  mounted(){
    axios.get(`http://34.82.81.113:3000/students/${this.id}`).then((res)=>{
      this.student = res.data;
      console.log(res.data)
    })
  }

}
</script>