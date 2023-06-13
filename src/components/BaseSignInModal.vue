<template>
  <a-modal v-model:visible="modalStore.isSignInModalShow" title="SIGN IN" @cancel="handleCancel" @before-ok="handleBeforeOk">
    <a-form :model="form" layout="vertical">
      <a-form-item field="username" label="Name">
        <a-input v-model="form.username" />
      </a-form-item>
      <a-form-item field="password" label="Post">
        <a-input type="password" v-model="form.password" />
      </a-form-item>
    </a-form>
    <template v-slot:footer>
      <div>
        <a-button type="primary">Submit</a-button>
        <a-button>Cancel</a-button>
      </div>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();

const form = reactive({
  username: '',
  password: '',
})

function handleCancel() {
  console.log('onCancel')
}

function handleBeforeOk() {
  console.log('onOk')
}
</script>

<style lang="less" scoped>

</style>