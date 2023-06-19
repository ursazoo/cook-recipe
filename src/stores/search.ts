import {ref} from 'vue';
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', () =>{
  const keyword = ref('');
  return {
    keyword
  }
});