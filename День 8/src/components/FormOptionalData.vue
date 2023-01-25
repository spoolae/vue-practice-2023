<template>
  <div class="flex items-center max-w-screen-md ml-auto mr-auto mb-4">
    <input
      id="link-checkbox"
      type="checkbox"
      v-model="isAnon"
      class="w-4 h-4 text-purple-600"
    />
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900"
      >Написати відгук
      <span class="text-purple-600 dark:text-purple-600 hover:underline"
        >анонімно</span
      >.</label
    >
  </div>
  <form v-if="!isAnon" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4" v-for="item in dataInputListOptional">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="input">
        {{ item.msg }}
      </label>
      <textarea
        v-model="item.inputData"
        v-if="item.isSmall"
        id="input"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-700 rounded-lg border leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
      <input
        v-else
        v-model="item.inputData"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="input"
        type="text"
      />
    </div>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormOptionalData",
  props: {
    dataInputListOptional: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      isAnon: false,
    };
  },
});
</script>
