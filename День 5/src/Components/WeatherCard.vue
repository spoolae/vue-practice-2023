<template>

<div class="container">
  <ul>
    <li>{{ info.name }}</li>
    <li><img src="../Assets/humidity.png"></li>
    <li><img src="../Assets/temperature.png"></li>
    <li><img src="../Assets/weather.png"></li>
    <li><img src="../Assets/pressure.png"></li>
  </ul>
  <ul>
    <li>{{ sys.country }}</li>
    <li>Humidity</li>
    <li>Temp</li>
    <li>Weather</li>
    <li>Pressure</li>
  </ul>
  <ul>
    <li>{{ coord.lon }}, {{ coord.lat }}</li>
    <li>{{ main.humidity }}%</li>
    <li>{{ main.temp }}℃</li>
    <li>{{ weather.main }}</li>
    <li>{{ main.pressure }}</li>
  </ul>
</div>

</template>

<script>
import {Api} from '../Api'
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ShowWeather",
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
    };
  },
  mounted() {
    if(this.item){
      Api.getWeatherInfo(this.item)
    .then((res)=>{
      this.info = res.data;
      this.sys = res.data.sys;
      this.weather = res.data.weather[0];
      this.coord = res.data.coord;
      this.main = res.data.main;
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
 margin: 50px auto 0 auto;
 display: flex;
 flex-direction: row;
 justify-content:space-between ;
 padding:50px 70px;
}

.container:hover {
  box-shadow: 0px 0px 25px 3px rgba(255, 255, 255, 1);
}

li{
  margin-bottom:15px;
  text-align: center;
  height:32px;
  font-size: 24px;
}

img{
  filter: invert(1);
  width:32px;
  height:32px;
}
</style>