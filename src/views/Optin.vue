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
    <b-row style="marginTop:20px">
      <b-col>
        <b-img
          src="https://images.unsplash.com/photo-1483032469466-b937c425697b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
          fluid
        />
      </b-col>
      <b-col>
        <TextContent
          variant="paragraph"
          content="Here’s where you write your compelling message, keep your sentences and paragraphs short."
        />
        <TextContent
          variant="paragraph"
          content="Use <strong>*bold*</strong>, <u>underline</u> and <i>italics</i> to emphasize important points."
        />
        <OptinForm
          submitText="Free Download!"
          submitColor="warning"
          @submit="handleSubmit"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <CountdownTimer endDate="March 3, 2020" />
        <TextContent
          variant="subheader"
          content="This is offer will soon expire"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TextContent from "../components/TextContent";
import OptinForm from "../components/OptinForm";
import CountdownTimer from "../components/CountdownTimer";

export default {
  name: "optin",
  components: {
    TextContent,
    OptinForm,
    CountdownTimer
  },
  methods: {
    handleSubmit(form) {
      console.log("Add New Subscriber", form.email);
      this.$router.push({ path: "/thank-you" });
    }
  }
};
</script>
