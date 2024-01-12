<template>
  <div class="app">
    <app-layout>
      <router-view/>
    </app-layout>
    
  </div>
</template>

<script>
import  {AppLayout}  from './layouts';
export default {
components: {
  AppLayout
}
}
</script>

<style >

</style>