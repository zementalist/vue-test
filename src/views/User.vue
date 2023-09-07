<template>
  <div class="about">
    <p style="text-align:center;font-size:61px;"> {{ username.toUpperCase()[0] }} </p>
    <h3>This is {{ $route.params.username }}'s page!</h3>
    <br>
    <card>
      <h2 slot="username">{{ username }}</h2>
      <h3 slot="age"> Age: 19 </h3>
      <h4 slot="gender"> Male </h4>
    </card>
    <h4> Number of posts: {{ posts.length }} </h4>
  </div>
</template>


<script>
import api  from "@/services/api.js";
export default {
  props:['username'],
  data() {
    return {
      posts:[]
    }
  },
  created() {
    api.getPosts()
    .then(response => {
      this.posts = response.data
      console.log(response)
    })
    .catch(error => {
      console.log("Error: " + error.response)
    })
  }
}
</script>

<style>

</style>
