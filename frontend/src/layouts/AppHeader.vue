<template>
   <header>
    <div class="header">
        <div class="btn-section">
           <my-button style="margin-right: 10px;" @click="$router.push('/')">Глоссарий</my-button>
           <my-button @click = "$router.push('/graph')">Граф</my-button> 
        </div> 
        <h3>Голованов Иван
            <br>р4209
        </h3>
    </div>
   </header>
</template>
<script>
import MyButton from "../components/MyButton.vue"
export default {
    component:{
        MyButton
    },
}
</script>
<style>
header{
    background-color: teal;
    text-align: center;
    margin-bottom: 2em;
}

   

.header{
    display: flex;
    color: white;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
}
</style>