<template>
  <div class="container">
    <div class="item-container">
      <h2>Add City</h2>
      <p>Please enter the city name</p>
      <input type="text" id="city-name" placeholder="Enter the city" v-model="newCity" class="data-input">
      <p>{{ error }}</p>
      <button @click="addNewCity" id="contained-button">Add city</button>
    </div>
    <div class="item-container">
      <h2>Show Detail Weather</h2>
      <p>Select necessary city</p>
      <select id="city-choose" v-model="currentCity" class="data-input">
        <option v-for="item in cityList">{{ item }}</option>
      </select>
      <p></p>
      <router-link :to="`/weather/${currentCity}`" id="contained-button">
        Show weather
      </router-link>
    </div>
  </div>

</template>

<script >
import { defineComponent } from 'vue';
 const cities = require("cities-list");
export default defineComponent({
  name: "CityInput",
   props: {
    cityList: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      currentCity:'',
      newCity:'',
      allCities:[],
      error:''
    };
  },
  mounted(){


  },
   methods:{
    addNewCity(){
      if(this.isExists()){
        if(!this.$parent.cityList.includes(this.newCity)){
          this.cityList.push(this.newCity);
        this.newCity="";
        this.error="";
        }else{
          this.error="The city already exists";
        }
      try {
        localStorage.setItem ('cityList', JSON.stringify(this.cityList));
      }catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
          alert ('Exceeded limit');
        }
      }
      }

    },
    isExists(){
      this.allCities = Object.keys(cities);
      this.allCities = this.allCities.map(item=>item.toLowerCase());
      if(this.allCities.includes(this.newCity.toLowerCase())){
        console.log("ok")
        this.error = ""
        return true
      }else if(!this.newCity){
        this.error = ""
      }else{
        this.error="Такого міста не існує"
        return false
      }
    }
  }
});
</script>

<style scoped>
.container{
 background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72);
 color:#fff;
 border-radius: 30px;
 max-width: 720px;
 margin: 0 auto;
 display: flex;
 flex-direction: row;
 justify-content:space-between ;
 padding:50px 70px;
}

.container:hover {
  box-shadow: 0px 0px 25px 3px rgba(255, 255, 255, 0.5);
}

.item-container{
  width:320px;
}

.data-input{
  width:250px;
  border: none;
  border-radius: 15px;
  padding:10px;
  font-size: 18px;
  margin-bottom: 10px;
}

.data-input:focus{
    outline: none;
}

h2{
  font-size: 32px;
  margin-bottom: 15px;
}

p{
  font-size: 18px;
  margin-bottom: 15px;
}

#contained-button{
  width:50%;
  background-color: white;
  border-radius: 15px;
  padding: 10px 15px;
  display: block;
  color: rgb(40, 40, 40);
  border:transparent;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
}
.container select::selection{
    border: none;
    border-radius: 20px;
    padding: 10px;
    background-color: #f1f1f1;
    outline: none;
}
</style>
