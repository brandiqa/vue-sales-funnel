<template>
  <div class="video-content" v-bind:style="{ marginTop: topMargin }">
    <b-embed type="iframe" aspect="16by9" :src="link" allowfullscreen />
  </div>
</template>

<script>
export default {
  name: "video-content",
  props: {
    link: String,
    topMargin: String
  }
};
</script>
