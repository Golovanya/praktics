<template>
    <div class="wraper">
      <section class="postsection">

        <div v-for="post in posts" class="post" :key="post.id">
           <h1>{{post.term}}</h1>
           <hr>
           <p> <strong>{{post.term}}</strong> - {{ post.intr}}</p>
          </div>

      </section>
     
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
           }, 1  )
   
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
    p::before{
      background-color: teal;
      height: 3em;
      width: 2px;
      display: block;
      content: "";
      position: absolute;
      left: 70px
      ;
    }
    .post  h1::first-letter{
      font-size: 50px;
      color: teal ;

    }
    .postsection{
      display: flex;
      flex-direction: column;
    }
    p{
      margin-left: 5em;
      font-size: 20px;
    }
    h1{
      font-size: 32px;
    }
    .post{
      position: relative;
      margin-bottom: 3em;
    }
   </style>
   