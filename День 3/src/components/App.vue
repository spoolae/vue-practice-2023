<template>
  <div>
    <h3>Населений пункт</h3>
    <input type="text" v-model="cityRef" placeholder="Місто" list="cities" @input="showCities">
    <datalist id="cities">
        <template v-for="item in cities">
            <option :value="item.Ref">{{ item.Present }}</option>
        </template>
    </datalist>
    <h3>Поштове відділення</h3>
    <input type="text" v-model="warehouseId" placeholder="Номер відділення" list="warehouses" @input="showWarehouses">
    <datalist id="warehouses">
        <template v-for="item in warehouses">
            <option :value="item.Description"></option>
        </template>
    </datalist>
  </div>
</template>
<script>
import { myApi } from '../api';
export default {
  name:"App",
  data() {
    return {
      currentArea:"",
      cities:[],
      cityRef:'',
      warehouses:[],
      warehouseId:'',
    };
  },
  methods:{
    showCities(){
        myApi.getRequest("Address","searchSettlements",{
          CityName : this.cityRef,
          Limit : "10",
          Page : "1"
        })
        .then((res)=>{
          const dataObj = res.data["data"]
          this.cities = dataObj[0].Addresses
        })
    },
    showWarehouses(){
      myApi.getRequest("Address","getWarehouses",{
      SettlementRef : this.cityRef,
      WarehouseId:this.warehouseId
      })
      .then((res)=>{
        this.warehouses = res.data.data
      })
      .catch(e=>console.error(e));
    }
  }
}
</script>