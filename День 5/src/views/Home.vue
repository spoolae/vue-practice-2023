<template>
  <AddCity :cityList="cityList"></AddCity>
  <h2>Current Location</h2>
  <WeatherCard :item="currentPositionCity" v-if="currentPositionCity"></WeatherCard>
  <h2>Added Cities</h2>
  <WeatherCard v-for="item in cityList" :item="item"></WeatherCard>
</template>

<script>
import AddCity from '../Components/AddCity.vue';
import WeatherCard from '../Components/WeatherCard.vue';
import { Api } from '../Api';
export default{
  name:"Home",
  components:{
    AddCity,
    WeatherCard
  },
  data() {
    return {
      cityList:[],
      currentPositionCity:"",
    }
  },
  mounted(){
    this.getCityList();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        Api.getWeatherInfoByCoords(position.coords.latitude,position.coords.longitude)
      .then((res)=>{
      this.currentPositionCity = res.data.name;
    })
    .catch((e)=>{
      alert(e);
    })
      })
    }
  },
  methods:{
    getCityList(){
      if(localStorage.getItem('cityList')){
        this.cityList = JSON.parse(localStorage.getItem('cityList'));
      }
    }
  }
}
</script>

<style scoped>
  h2{
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 32px;
    margin: 35px 0 20px 0;
  }
</style>