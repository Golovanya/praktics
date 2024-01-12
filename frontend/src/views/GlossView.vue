<template>
    <div class="wraper">

      <div v-for="post in posts" class="post">
         <h1>{{post.term}}</h1>:
         <p>{{ post.intr }}</p>
     
      </div>
    </div>
   </template>
   <script>
   import axios from 'axios';
   export default {
     data() {
       return {
         posts:[]
       }
     },
     methods: {
       async fetchPosts() {
         try {
           this.isPostLoading = true
           setTimeout(async () => {
             const response = await axios.get("http://localhost:3000/terms")
             this.posts = response.data
             this.isPostLoading = false
           },   )
   
         } catch (e) {
           alert('Ошибка')
         }
       }
     }, 
     mounted() {
       this.fetchPosts();
   
     },
   }
   </script>
   
   <style scoped>
    .wraper{
      width: 90%;
      margin: auto;
      display: flex;
    }
    .post{
      width: 30%;
      border: 1px solid teal;
    }
   </style>
   