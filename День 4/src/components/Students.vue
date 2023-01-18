<template>
    <div id="app">
     <input type="text" name="search" v-model="search"><br>
     <table class="table table-dark">
       <tr v-for="item in students"  v-bind:key="item._id">
         <StudentsTable :item="item" @edit="openEditForm" @delete="deleteStudent"></StudentsTable>
       </tr>
     </table>
     <form v-if="isEdit" class="student-form">
       <AddStudent :student="newStudent"></AddStudent>
       <button @click="updateStudent(newStudent)">Save</button>
       <button @click="cancelEdit()">Cancel</button>
     </form>
     <form v-else class="student-input">
       <input v-model="student.name">
       <input type="checkbox" v-model="student.isDonePr">
       <select v-model="student.group">
         <option value="RPZ 19 1/9">RPZ 19 1/9</option>
         <option value="RPZ 19 2/9">RPZ 19 2/9</option>
       </select>
     <button @click="addStudent()">Add student</button>
     </form>
   </div>
  </template>
  <script>
  
  import axios from 'axios'
  import AddStudent from './AddStudent.vue';
  import StudentsTable from './StudentsTable.vue';
  export default {
    name:"Students",
   components: {
     AddStudent,
     StudentsTable
   },
   data() {
     return {
       students: [],
       search: "",
       student: { name: "", isDonePr: false, group: "" },
       isEdit:false,
       newStudent: {}
     };
   },
   mounted() {
     axios.get("http://34.82.81.113:3000/students").then((res)=>{
       this.students = res.data;
     })
   },
   methods: {addStudent() {
    axios.post("http://34.82.81.113:3000/students",{ ...this.student }).then(
      (response)=>{
        this.students.push(response.data);
      }
    );
  },
  deleteStudent(studId) {
    axios.delete(`http://34.82.81.113:3000/students/${studId}`).then(()=>{
      this.students = this.students.filter((item)=>item._id !== studId);
    });
  },
  updateStudent(newStudent) {
    axios.put(`http://34.82.81.113:3000/students/${newStudent._id}`,
    {
      name:newStudent.name,
      isDonePr:newStudent.isDonePr,
      group:newStudent.group
    }).then(
      (response)=>{
        console.log(response);
        this.isEdit = false;
      }
    );
  },
  openEditForm(item) {
    this.newStudent = item;
    this.isEdit = true;
  },
  cancelEdit() {
    this.isEdit = false;
  }},
  }
  </script>