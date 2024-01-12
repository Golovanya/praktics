<template>
    <div class="app_layout">
        <app-header/>
            <slot/>
    </div>

</template>
<script>
import AppHeader from "./AppHeader.vue"
export default {
    components:{
        AppHeader
    }
    
}
</script>
<style>
    .app_layout{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
</style>