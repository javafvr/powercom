import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {
  IconCommand,
  IconDocument,
  IconWorkflow,
  IconClipboard,
  IconChevronRight,
  IconArrowDropDown,
} from "../src/components/Icon";

createApp(App)
  .component("IconCommand", IconCommand)
  .component("IconDocument", IconDocument)
  .component("IconWorkflow", IconWorkflow)
  .component("IconClipboard", IconClipboard)
  .component("IconChevronRight", IconChevronRight)
  .component("IconArrowDropDown", IconArrowDropDown)
  .use(router)
  .mount("#app");
