import { createApp } from 'vue'
import App from './App.vue'
import {Place} from "@/models/Place";
Place.getInstance()

createApp(App).mount('#app')
