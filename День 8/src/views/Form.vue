<template>
  <div class="w-full max-w-screen-md ml-auto mr-auto mt-2 text-center">
    <h2 class="text-gray-500 text-3xl font-bold mb-4 mt-6">
      Повідомити про корупцію в навчальному закладі
    </h2>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div v-for="item in requiredFields" class="text-left">
        <label style="line-height: 2">{{ item.msg }}</label>
        <input
          v-model="item.inputData"
          :name="item.variable"
          :class="{
            'block w-full p-2 rounded': true,
            'text-gray-700': true,
            'bg-gray-200': true,
            'mb-4': true,
            'h-10': true,
          }"
          type="text"
        />
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="showOptionalFields" />
          Вказати особисту інформацію
        </label>
      </div>
      <div
        v-if="showOptionalFields"
        v-for="item in optionalFields"
        class="text-left"
      >
        <label style="line-height: 2">{{ item.msg }}</label>
        <input
          v-model="item.inputData"
          :name="item.variable"
          :class="{
            'block w-full p-2 rounded': true,
            'text-gray-700': true,
            'bg-gray-200': true,
            'mb-4': true,
            'h-10': true,
          }"
          type="text"
        />
      </div>
    </form>
    <button
      @click="sendEmail"
      class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
      type="button"
    >
      Відправити
    </button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      requiredFields: [
        {
          msg: "ПІБ особи яка ймовірно вчинила правопорушення",
          inputData: "",
          variable: "profName",
        },
        { msg: "Посада", inputData: "", variable: "posada" },
        { msg: "Місце роботи", inputData: "", variable: "place" },
        {
          msg: "Опис ситуації",
          inputData: "",
          isSmall: true,
          variable: "description",
        },
      ],
      optionalFields: [
        { msg: "Ваше ПІБ", inputData: "", variable: "fromName" },
        { msg: "Номер телефону", inputData: "", variable: "fromPhone" },
      ],
      showOptionalFields: false,
      formData: {},
    };
  },
  methods: {
    sendEmail(e) {
      this.requiredFields.forEach((item) => {
        this.formData[item.variable] = item.inputData;
      });
      this.optionalFields.forEach((item) => {
        if (!item.inputData) {
          this.formData[item.variable] = "Анонімно";
        } else {
          this.formData[item.variable] = item.inputData;
        }
      });
      try {
        emailjs.send(
          "service_439weax",
          "template_o9f0w8m",
          {
            ...this.formData,
          },
          "gDPJns2l5uUlHFowZ"
        );
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>
