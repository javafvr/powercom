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
  IconCheck,
  IconLightningBoltCircle,
  IconWaterCircle,
  IconOutlinedProtect,
  IconEnvelope
} from "../src/components/Icon";

import { DefaultLayout, VeeLayout, HomeLayout, LoginLayout } from './layouts'

createApp(App)
  .component('default-layout', DefaultLayout)
  .component('login-layout', LoginLayout)
  .component('home-layout', HomeLayout)
  .component('vee-layout', VeeLayout)
  .component("IconOutlinedProtect", IconOutlinedProtect)
  .component("IconEnvelope", IconEnvelope)
  .component("IconLightningBoltCircle", IconLightningBoltCircle)
  .component("IconWaterCircle", IconWaterCircle)
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
