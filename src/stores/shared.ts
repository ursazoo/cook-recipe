import {ref} from 'vue';
import { defineStore } from 'pinia';
import device from "current-device";
import getCurrentScreenSize from "@/utils/getCurrentScreenSize";

export const useSharedStore = defineStore('shared', () =>{
  const screenSize = ref(getCurrentScreenSize());
  const isMobile = device.mobile();
  return {
    screenSize,
    isMobile
  }
});