<template>
  <div class="text-content" v-bind:style="{ marginTop: topMargin }">
    <h1 class="header" v-bind:style="getStyle()" v-if="variant === 'header'">
      {{ content }}
    </h1>
    <h2 class="subheader" v-if="variant === 'subheader'">{{ content }}</h2>
    <p class="paragraph" v-if="variant === 'paragraph'" v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: "TextContent",
  props: {
    variant: String,
    content: String,
    topMargin: String,
    theme: String
  },
  data: function() {
    return {
      red: {
        color: "red"
      },
      blue: {
        color: "blue"
      }
    };
  },
  methods: {
    getStyle() {
      switch (this.$props.theme) {
        case "red":
          return this.red;
        case "blue":
          return this.blue;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.header {
  color: rgb(50, 50, 50);
  text-align: center;
}
.subheader {
  font-size: 1.5rem;
  color: rgb(100, 100, 100);
  text-align: center;
}
p {
  color: rgb(124, 124, 124);
}
</style>
