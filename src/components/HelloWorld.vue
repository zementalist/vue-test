<template>
  <div class="hello">
    <h1>{{ product }} </h1>
    <div class="product_img">
      <img :src="getImgUrl" height="300" alt="">
    </div>
    <br>
    <div class="product_info">
      <p v-if="inStock">In stock</p>
      <p v-else>Out of service</p>
      <ul>
        <li @mouseover="updateProduct(index)" v-for="(tod,index) in todo" :key="tod.id">
          {{ tod.name }}
        </li>
      </ul>
      <button :disabled="!inStock" :class="!inStock ? 'disabledBtn' : '' " @click="counter" :style="inStock ? styleList : null" > AddCart </button> <span>{{count}}</span>
    </div>
    <br>
    <tab @tab-change="switchTab"></tab>
    <br>
    <div v-if="errors.length">
      <ul type="square">
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
    </div>
    <br>
    <form @submit.prevent="submitForm" v-show="tab">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name"> <br>
      <label for="review">Review</label>
      <input type="textarea" name="review" v-model="review"> <br>
      <label for="rate">Rate</label>
      <select name="rate" v-model.number="rate">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select> <br>
      <input type="submit" value="Submit">
    </form>

  </div>
</template>

<script>
import tab from "./tab.vue";
export default {
  name: 'HelloWorld',
  components: {tab},
  props: {
    msg: {type:String, required:true, default:"Default"},
    logged: {type: Boolean, required:false, default:false}
  },
  data: function() {
    return {
      name:null,
      review:null,
      rate:null,
      errors:[],
      product: "T-Shirt",
      myimg: "prod2",
      selected:0,
      count:0,
      tab:0,
      todo: [
        {id:1, name:"zeyad", img:"prod1", quantity:8},
        {id:2, name:"ahmed", img:"prod2", quantity:0}
      ],
      styleList: [
        {
        fontSize:"18px",
        color:"white"
        },
        {
          'background-color':'blue',
        }
      ]
    }
    
  },
  methods: {
    updateProduct(index) {
      this.selected = index;
    },
    counter() {
      this.count += 1;
    },
    submitForm() {
      this.errors = [];
      if(this.name && this.review && this.rate) {
        let productReview = {name:this.name, review:this.review, rate:this.rate};
        console.log(productReview)
        this.$emit("form-submitted", productReview);
      }
      else {
        if(!this.name) this.errors.push("Name is required");
        if(!this.review) this.errors.push("Review is required");
        if(!this.rate) this.errors.push("Rate is required");
      }
    },
    switchTab(tab) {
      this.tab = tab;
      this.$emit("tab-change", tab);
    }
  },
  computed: {
    inStock() {
      return this.todo[this.selected].quantity > 0
    },
    getImgUrl() {
      var images = require.context('../assets/', false, /\.jpg$/)
      return images('./' + this.todo[this.selected].img + ".jpg")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.disabledBtn {
  background-color: gray;
  color: darkslategray;
  font-size: 18px;
}
</style>
