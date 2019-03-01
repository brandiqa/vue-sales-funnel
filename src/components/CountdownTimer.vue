<template>
  <div class="countdown-timer">
    <Countdown :deadline="endDate"></Countdown>
  </div>
</template>

<script>
import Countdown from "vuejs-countdown";

export default {
  name: "countdown-timer",
  components: { Countdown },
  props: {
    endDate: String
  }
};
</script>

<style>
.countdown-timer {
  padding: 15px;
  text-align: center;
}
.countdown-section {
  display: inline-block;
  margin-right: 25px;
}
.vuejs-countdown .digit {
  display: block;
  border: 4px solid orange;
  color: darkorange;
  padding: 10px;
  border-radius: 100px;
  width: 72px;
  margin-bottom: 10px;
}
.text {
  font-size: 0.7rem;
  font-weight: bold;
  color: gray;
}
</style>
