<script setup>
import BaseInput from "@/components/BaseInput";
import ContextMenu from "@/components/ContextMenu";
import Button from "@/components/Button";
import Link from "@/components/Link";
import Dropdown from "@/components/Dropdown";
import { ref } from "vue";

// const props = defineProps({
//   logoUrl: {
//     type: String,
//     default: "../../../public/images/logo.svg"
//   }
// });

const errors = ref({login: "", password: ""});
const login = ref("");
const password = ref("");
const language = ref({title: "English (USA)", value: "english"});
const languageOptions = ref([{title: "English (USA)", value: "english"}, {title: "Espanol (ES)", value: "espanol"}]);

const checkForm = (e) => {
  errors.value = {login: "", password: ""};

  if (!password.value) {
    errors.value.password = 'Enter password';
  }
  if (!login.value) {
    errors.value.login = 'Enter email.';
  } else if (!validEmail(login.value)) {
    errors.value.login = 'Enter correct email.';
  }

  if (!errors.value.login.length || !errors.value.password.length) {
    return false;
  }

  e.preventDefault();
}

const validEmail = (login) => {
  var re = /.+@.+\..+/i;
  return re.test(login);
}


</script>

<template>
  <div :class="[$style.loginForm]">
    <div :class="$style.header">
      <div :class="$style.logo">
        <img :src="require('../../../public/images/logo.svg')" alt="logo" />
      </div>
      <Dropdown :options="languageOptions" v-model="language"/>
    </div>
    <div :class="$style.content">
      <div :class="$style.title">Sign In</div>
      <div :class="$style.subtitle">Enter your details to proceed further</div>
      <form
        action="https://vuejs.org/"
        method="post"
        novalidate="true"
        :class="$style.form"
      >
        <div :class="$style.formItem">
          <BaseInput
            label="login"
            v-model="login"
            type="email"
            size="XL"
            color="gray"
            placeholder="Start typing…"
            :caption="errors.login"
            :error="Boolean(errors.login)"
          >
            <template #append>
              <IconEnvelope />
            </template>
          </BaseInput>
        </div>
        <div :class="$style.formItem">
          <BaseInput
            v-model="password"
            label="Password"
            type="password"
            size="XL"
            placeholder="Start typing…"
            :caption="errors.password"
            :error="Boolean(errors.password)"
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
          <Button @click="checkForm" type="submit" title="Sign In" size="M" solid color="purple" stretch autocomplete/>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "LoginForm.module.scss";
</style>
