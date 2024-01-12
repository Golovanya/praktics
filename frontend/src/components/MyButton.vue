<template >
    <button>
        <slot/>
    </button>
</template>
<script>
export default {
  name:'my-button'  
}
</script>
<style>
   button {
    background: none;
    border: 1px solid white;
    color: white;
    padding: 1em 2em;
    border-radius: 20px;
    font-size: 18px;
    font-weight: bolder;
    cursor: pointer;
    letter-spacing: 1px;
}
button:hover {
    background: white;
    border: 1px solid white;
    color: teal;
    padding: 1em 2em;
    border-radius: 20px;
    transition: background 1s;
}
</style>