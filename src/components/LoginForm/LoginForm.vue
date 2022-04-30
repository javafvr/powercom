<script setup>
import BaseInput from "@/components/BaseInput";
import ContextMenu from "@/components/ContextMenu";
import Button from "@/components/Button";
import Link from "@/components/Link";
// import { defineProps } from "vue";

// const props = defineProps({
//   logoUrl: {
//     type: String,
//     default: "../../../public/images/logo.svg"
//   }
// });
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
      <div :class="$style.form">
        <div :class="$style.formItem">
          <BaseInput label="Email" type="email" placeholder="Start typing…">
            <template #append>
              <IconEnvelope />
            </template>
          </BaseInput>
        </div>
        <div :class="$style.formItem">
          <BaseInput
            label="Password"
            type="password"
            placeholder="Start typing…"
          >
            <template #append>
              <IconOutlinedProtect />
            </template>
          </BaseInput>
        </div>
        <div :class="$style.formItem">
          <div :class="$style.link">
            <Link
              title="Recover password"
              color="purple"
              size="M"
              to="/forgot-password"
            />
          </div>
        </div>
        <div :class="$style.formItem">
          <Button title="Sign In" size="L" solid color="purple" responsive />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "LoginForm.module.scss";
</style>
