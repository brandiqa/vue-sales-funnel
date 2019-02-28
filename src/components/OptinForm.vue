<template>
  <div class="optin-form">
    <form @submit.prevent="onSubmit">
      <b-form-group>
        <b-form-input
          id="exampleInput1"
          type="email"
          v-model="form.email"
          size="lg"
          required
          placeholder="Enter email"
        />
      </b-form-group>
      <b-button type="submit" v-bind:variant="submitColor" size="lg" block>{{
        submitText
      }}</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "optin-form",
  props: {
    submitText: String,
    submitColor: String
  },
  data() {
    return {
      form: {
        email: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.form);
    }
  }
};
</script>

<style scoped>
.btn {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
