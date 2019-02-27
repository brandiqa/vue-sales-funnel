<template>
  <div class="optin container">
    <b-row>
      <b-col>
        <TextContent
          variant="header"
          content="Here’s Your Attention Getting Headline"
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
        put image here
      </b-col>
      <b-col>
        <TextContent
          variant="paragraph"
          content="Here’s where you write your compelling message, keep your sentences and paragraphs short."
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TextContent from "../components/TextComponent";

export default {
  name: "optin",
  components: {
    TextContent
  }
};
</script>
