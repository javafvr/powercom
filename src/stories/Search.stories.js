import Search from "../components/Search";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Ui/Search",
  component: Search,
  argTypes: {
    placeholder: "",
    disabled: Boolean,
    onClick: {},
    data: [],
    color: {
      control: { type: "select" },
      options: ["purple", "gray"],
    },
    size: {
      control: { type: "select" },
      options: ["XS", "S", "M", "L"],
    },
    // filteredData: [],
  },
};

const filteredData = []

//👇 We create a template of how args map to rendering
const Template = (args) => ({
  components: { Search },
  data: () => ({ filteredData }),
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Search v-bind="args" v-model="filteredData" outline></Search><div v-if="filteredData.length"><div v-for="(item, index) in filteredData" :key="index">{{item}}</div></div><p v-else>No matches found.</p>',
});

export const UiSearch = Template.bind({});

UiSearch.args = {
  placeholder: "defaultPlaceholder",
  outline: true,
  // filteredData: [],
  data: [
    { name: 'Chuck Norris', power: Infinity },
    { name: 'Bruce Lee', power: 9000 },
    { name: 'Jackie Chan', power: 7000 },
    { name: 'Jet Li', power: 8000 }
  ],
  filterKey: ""
};
