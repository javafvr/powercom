import { LatestActivities } from "../components/LatestActivities";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Ui/LatestActivities",
  component: { LatestActivities },
  argTypes: {
    onClick: {},
    items: [],
  },
};

//👇 We create a template of how args map to rendering
const Template = (args) => ({
  components: { LatestActivities },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<LatestActivities v-bind="args" ></LatestActivities>',
});

export const UiLatestActivities = Template.bind({});

UiLatestActivities.args = {
  items: [
    {
      title: "Commands",
      icon: "IconCommand",
      items: [
        {
          title: "meter 012345678",
          subtitle: "10:03 16/03/2022",
          status: "Relay off",
        },
        {
          title: "Dcu 0123456789",
          subtitle: "10:00 16/03/2022",
          status: "Link meters",
        },
      ],
    },
    {
      title: "Reports",
      icon: "IconDocument",
      items: [
        {
          title: "Electricity sum meters...",
          subtitle: "10:03 16/03/2022",
          status: "",
        },
        { title: "Active dcus...", subtitle: "10:00 16/03/2022", status: "" },
      ],
    },
    {
      title: "Process",
      icon: "IconWorkflow",
      items: [
        { title: "Dcu detect", subtitle: "10:03 16/03/2022", status: "" },
        { title: "Firmeare upgrade", subtitle: "10:00 16/03/2022", status: "" },
      ],
    },
    {
      title: "Work-order",
      icon: "IconClipboard",
      items: [
        { title: "Workorder 1", subtitle: "10:03 16/03/2022", status: "" },
        { title: "Workorder 2", subtitle: "10:00 16/03/2022", status: "" },
      ],
    },
  ],
};
