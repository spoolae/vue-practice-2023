<template>
  <div>
    <h3>Введіть місто, у якому шукаєте відділення</h3>
    <input type="text" v-model="city" placeholder="Місто" list="cities" @input="showCities" @change="selectCity">
    <datalist id="cities">
        <template v-for="item in cities">
            <option :value="item.Present"></option>
        </template>
    </datalist>

    <h3>Введіть номер відділення</h3>
    <input type="text" v-model="warehouseId" placeholder="Номер відділення" list="warehouses" @input="showWarehouses" @change="selectWarehouse">
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
      city:'',
      cityRef:'',
      warehouses:[],
      warehouseRef:'',
      warehouseId:'',
    };
  },
  methods:{
    showCities(){
        myApi.getRequest("Address","searchSettlements",{
          CityName : this.city,
          Limit : "10",
          Page : "1"
        })
        .then((res)=>{
          const dataObj = res.data["data"]
          this.cities = dataObj[0].Addresses
          console.log(dataObj)
        })
    },
    selectCity(event) {
        this.cityRef = event.target.value;
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
    },
    selectWarehouse(event) {
        this.warehouseRef = event.target.value;
    }
  }
}

</script>