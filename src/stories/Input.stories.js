import BaseInput from "../components/BaseInput";
import { IconMagnify } from "../components/Icon"

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Ui/BaseInput",
  component: BaseInput, IconMagnify,
  argTypes: {
    placeholder: "",
    disabled: Boolean,
    onClick: {},
    color: {
      control: { type: "select" },
      options: ["purple", "gray"],
    },
    size: {
      control: { type: "select" },
      options: ["XS", "S", "M", "L"],
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { BaseInput },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<BaseInput v-bind="args" />',
});

export const UiInput = Template.bind({});

UiInput.args = {
  placeholder: "defaultPlaceholder",
  outline: true,
};

const Template2 = (args) => ({
  components: { BaseInput, IconMagnify },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<BaseInput v-bind="args" ><template #append><IconMagnify /></template></BaseInput>',
});

export const UiSearch = Template2.bind({});

UiSearch.args = {
  placeholder: "Search...",
  outline: true,
};
