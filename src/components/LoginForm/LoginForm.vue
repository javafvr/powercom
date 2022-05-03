<script setup>
import BaseInput from "@/components/BaseInput";
import Button from "@/components/Button";
import Link from "@/components/Link";
import Dropdown from "@/components/Dropdown";
import { ref, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const errors = ref({ login: "", password: "" });
const loginForm = ref({ login: "", password: "" });
const language = ref({ title: "English (USA)", value: "english" });
const languageOptions = ref([
  { title: "English (USA)", value: "english" },
  { title: "Espanol (ES)", value: "espanol" },
]);

const user = computed(() => store.state.user.user);

const login = () => {
  if (checkForm()) {
    store.dispatch("userAuth/login", loginForm.value);
  }
};

const checkForm = () => {
  errors.value = { login: "", password: "" };

  if (!loginForm.value.password) {
    errors.value.password = "Enter password";
  }
  if (!loginForm.value.login) {
    errors.value.login = "Enter email.";
  } else if (!validEmail(loginForm.value.login)) {
    errors.value.login = "Enter correct email.";
  }

  if (errors.value.login === !"" || errors.value.password === !"") {
    return false;
  }
  return true;
};

const validEmail = (login) => {
  var re = /.+@.+\..+/i;
  return re.test(login);
};

onBeforeMount(() => {
  store.dispatch("userAuth/fetchUser");
  console.log(user);
});
</script>

<template>
  <div :class="[$style.loginForm]">
    <div :class="$style.header">
      <div :class="$style.logo">
        <img :src="require('../../../public/images/logo.svg')" alt="logo" />
      </div>
      <Dropdown :options="languageOptions" v-model="language" />
    </div>
    <div :class="$style.content">
      <div :class="$style.title">Sign In</div>
      <div :class="$style.subtitle">Enter your details to proceed further</div>
      <form method="post" novalidate="true" :class="$style.form">
        <div :class="$style.formItem">
          <BaseInput
            label="login"
            v-model="loginForm.login"
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
            v-model="loginForm.password"
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
          <Button
            @click="login()"
            type="submit"
            title="Sign In"
            size="M"
            solid
            color="purple"
            stretch
            autocomplete
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "LoginForm.module.scss";
</style>
