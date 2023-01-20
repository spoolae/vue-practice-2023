<template>
<DetailWeatherCard :item="city"></DetailWeatherCard>
</template>

<script>
import DetailWeatherCard from "../Components/DetailWeatherCard.vue"
export default {
  name: "CityInfo",
  props: {
    city:''
  },
  components:{
    DetailWeatherCard
  },
  data() {
    return {
    };
  },
}
</script>