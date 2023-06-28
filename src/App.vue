<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (route.path === '/')
    router.push('/assistant')
})
</script>

<template>
  <div class="App-Container">
    <RouterView />
  </div>
</template>

<style>
.App-Container {
  position: absolute;
  padding: 2rem;

  top: 50%;
  left: 50%;

  width: 100%;
  height: 100%;

  transform: translate(-50%, -50%);

  text-align: center;
  font-size: 2rem;
  font-weight: bold;

  box-sizing: border-box;
  background-color: #111111;
}
</style>
