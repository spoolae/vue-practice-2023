<template>
<ShowDetailWeather :item="city"></ShowDetailWeather>
</template>

<script>
import ShowDetailWeather from '../Components/ShowDetailWeather.vue';
export default {
  name: "CityInfo",
  props: {
    city:''
  },
  components:{
    ShowDetailWeather
  },
  data() {
    return {
    };
  },
}
</script>