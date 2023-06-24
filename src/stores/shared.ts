import {ref} from 'vue';
import { defineStore } from 'pinia';
import getCurrentScreenSize from "@/utils/getCurrentScreenSize";

export const useSharedStore = defineStore('shared', () =>{
  const screenSize = ref(getCurrentScreenSize());
  return {
    screenSize
  }
});