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
  IconImportExport,
  IconError,
  IconPlugOff,
  IconCheck
} from "../src/components/Icon";

createApp(App)
  .component("IconCommand", IconCommand)
  .component("IconDocument", IconDocument)
  .component("IconWorkflow", IconWorkflow)
  .component("IconClipboard", IconClipboard)
  .component("IconChevronRight", IconChevronRight)
  .component("IconArrowDropDown", IconArrowDropDown)
  .component("IconImportExport", IconImportExport)
  .component("IconError", IconError)
  .component("IconPlugOff", IconPlugOff)
  .component("IconCheck", IconCheck)
  .use(router)
  .mount("#app");
