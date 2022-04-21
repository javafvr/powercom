import Button from "../components/Button";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Ui/Button",
  component: Button,
  argTypes: {
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["XS", "S", "M", "L", "XL"],
    },
    color: {
      control: { type: "select" },
      options: ["green", "purple", "gray"],
    },
    shadow: Boolean,
    bold: Boolean,
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Button },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const UiButton = Template.bind({});

UiButton.args = {
  title: "title1",
  size: "L",
  solid: true,
  color: "purple",
  shadow: false,
  bold: true,
};
