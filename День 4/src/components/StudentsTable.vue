<template>
  <template v-if="!isEdit">
    <router-link :to="'/student-info/'+item._id">
      <td>{{item.name}}</td>
    </router-link>
    <td><input type="checkbox" v-model="item.isDonePr"></td>
    <td>{{item.group}}</td>
    <td><a href = "#" @click="$emit('delete', item._id)">Delete</a></td>
    <td><a href="#" @click="$emit('edit', item)">Edit</a></td>
  </template>
</template>
<script>
export default {
  name: "StudentsTable",
  props: {
    item: {
      type: Object,
      require: true
    }
  }
};
</script>