<template>
  <div class="thank-you container">
    <b-row>
      <b-col>
        <TextContent
          variant="header"
          content="Here’s Your Thank You Headline"
          topMargin="50px"
          theme="red"
        />
        <TextContent
          variant="subheader"
          content="This is your sub-headline to increase credibility or curiosity"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <VideoContent
          link="https://www.youtube.com/embed/m9q58hSppds"
          topMargin="30px"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TextContent from "../components/TextContent.vue";
import VideoContent from "../components/VideoContent";

export default {
  name: "thank-you",
  components: {
    TextContent,
    VideoContent
  }
};
</script>
