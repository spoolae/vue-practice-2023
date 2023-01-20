<template>

<div class="container">
  <ul>
    <li><img class="flag" crossorigin="anonymous" :src="countryFlagImg"></li>
    <li><img src="../Assets/humidity.png"></li>
    <li><img src="../Assets/temperature.png"></li>
    <li><img src="../Assets/weather.png"></li>
    <li><img src="../Assets/pressure.png"></li>
    <li><img src="../Assets/description.png"></li>
    <li><img src="../Assets/compass.png"></li>
    <li><img src="../Assets/wind-speed.png"></li>
  </ul>
  <ul>
    <li>{{ info.name }}</li>
    <li>Humidity</li>
    <li>Temp/feels like</li>
    <li>Main</li>
    <li>Pressure</li>
    <li>Description</li>
    <li>Wind direction</li>
    <li>Wind speed</li>
  </ul>
  <ul>
  <!-- {{ info.coord }} -->
    <li>{{ sys.country }}</li>
    <li>{{ main.humidity }}%</li>
    <li>{{ main.temp }}℃</li>
    <li>{{ weather.main }}</li>
    <li>{{ main.pressure }}</li>
    <li>{{ weather.description }}</li>
    <li>{{ wind.deg }}</li>
    <li>{{ wind.speed }}</li>
  </ul>
  <ul>
    <li>{{ coord.lon }}, {{ coord.lat }}</li>
    <li></li>
    <li>{{ main.feels_like }}℃</li>
  </ul>
</div>

</template>

<script>
import {Api} from '../Api'
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ShowDetailWeather",
  props: {
    item: {
      type: String,
      require: false
    }
  },
  data() {
    return {
      info:{},
      sys:{},
      weather:{},
      coord:{},
      main:{},
      wind:{},
      countryFlagImg:'',
    };
  },
  mounted() {
    if(this.item){
      Api.getWeatherInfo(this.item)
    .then((res)=>{
      console.log(res.data)
      this.info = res.data;
      this.sys = res.data.sys;
      this.weather = res.data.weather[0];
      this.coord = res.data.coord;
      this.main = res.data.main;
      this.wind = res.data.wind;
      this.countryFlagImg = `https://countryflagsapi.com/png/${res.data.sys.country}`
    })
    .catch((e)=>{
      alert(e);
    })
    }
  },
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

li{
  margin-bottom:15px;
  text-align: center;
  height:32px;
  font-size: 24px;
}

img{
  filter: invert(1);
  border-radius: 5px;
  width:32px;
  height:32px;
}

.flag{
  filter: none;
}
</style>