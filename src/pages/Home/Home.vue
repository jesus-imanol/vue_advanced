<template>
  <Loader v-if="loading"></Loader>
  <AlertMessage v-if="showAlert" :message="valueEmited" @close-modal="closeAlert"></AlertMessage>
  <div class="flex w-full h-screen bg-slate-900 items-center justify-center flex-col">
    <div class="flex items-center h-[100vh] bg-black flex-row flex-wrap gap-4 w-full justify-center">
      <Card
        v-for="(item, index) in productss"
        :key="index"
        :name="item.name"
        :race="item.race"
        :ki="item.ki"
        :image="item.image"
        @message="name"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import Card from './components/Card.vue'
import { onMounted, ref } from 'vue'
import Axios from 'Axios'
import type { Character } from './models/ICharacter'
import Loader from '@/utils/Loader.vue'
import AlertMessage from '@/utils/AlertMessage.vue'


defineOptions({
  name: 'HomePage',
})
const loading = ref(false)
const showAlert = ref(false)
const valueEmited = ref('')
const name = ($event: string) => {
 showAlert.value = true
 valueEmited.value = $event
 setTimeout(() => {
  showAlert.value = false
 }, 3000)
}

const closeAlert = ($event:boolean) => {
 showAlert.value = $event
}


const productss = ref<Character[]>([])

onMounted(async () => {
  try {
    loading.value = true
    const response = await Axios.get('https://dragonball-api.com/api/characters')
    productss.value = response.data.items
    console.log(productss.value);

  } catch (error) {
    console.error(error)

  } finally {
    console.log('Fetch completed')
    loading.value = false
  }
})


</script>
