import {ref} from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () =>{
  const isSignInModalShow = ref(false);
  return {
    isSignInModalShow
  }
});