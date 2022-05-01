<script setup>
import BaseInput from "@/components/BaseInput";
import ContextMenu from "@/components/ContextMenu";
import Button from "@/components/Button";
import Link from "@/components/Link";
import { ref } from "vue";

const error = ref("error");

// const props = defineProps({
//   logoUrl: {
//     type: String,
//     default: "../../../public/images/logo.svg"
//   }
// });

const errors = ref([]);
const name = ref("");
const email = ref("");
const movie = ref("");

const checkForm = (e) => {
  errors.value = [];

  if (!name) {
    errors.value.push('Укажите имя.');
  }
  if (!email) {
    errors.push('Укажите электронную почту.');
  } else if (!validEmail(email)) {
    this.errors.push('Укажите корректный адрес электронной почты.');
  }

  if (!errors.value.length) {
    return true;
  }

  e.preventDefault();
}


const validEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
</script>

<template>
  <div :class="[$style.loginForm]">
    <div :class="$style.header">
      <div :class="$style.logo">
        <img :src="require('../../../public/images/logo.svg')" alt="logo" />
      </div>
      <ContextMenu>
        <template #activator>
          <div :class="$style.selector">
            <div :class="$style.selectorText">English (USA)</div>
            <IconArrowDropDown height="16" width="16" />
          </div>
        </template>
        <template #content>
          <div :class="$style.contextMenuContent">
            <div :class="[$style.mbXS]">English (usa)</div>
          </div>
        </template>
      </ContextMenu>
    </div>
    <div :class="$style.content">
      <div :class="$style.title">Sign In</div>
      <div :class="$style.subtitle">Enter your details to proceed further</div>
      <form :class="$style.form">
        <div :class="$style.formItem">
          <BaseInput
            label="Email"
            type="email"
            size="XL"
            color="gray"
            placeholder="Start typing…"
            :caption="error"
          >
            <template #append>
              <IconEnvelope />
            </template>
          </BaseInput>
        </div>
        <div :class="$style.formItem">
          <BaseInput
            label="Password"
            type="password"
            size="XL"
            placeholder="Start typing…"
            :caption="error"
          >
            <template #append>
              <IconOutlinedProtect />
            </template>
          </BaseInput>
        </div>
        <div :class="[$style.formItem, $style.formLink]">
          <div :class="$style.formLink">
            <Link
              title="Recover password"
              color="purple"
              size="M"
              to="/forgot-password"
              bold
            />
          </div>
        </div>
        <div :class="[$style.formItem, $style.formSubmit]">
          <Button type="submit" title="Sign In" size="M" solid color="purple" stretch />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "LoginForm.module.scss";
</style>
