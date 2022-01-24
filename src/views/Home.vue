<template>
  <div class="home">
      <div class="row justify-content-center">
        <product-summary-card
          v-for="product in items"
          :key="product.id"
          :product="product"
          @view-product="viewProduct($event)"
        ></product-summary-card>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ProductSummaryCard from '../components/product/ProductSummaryCard.vue'
import items from '../data/items'

export default {
  name:'Home',
  components: { ProductSummaryCard },
  setup(){
    const product1 = ref(null)
    
    const viewProduct = val =>{
      product1.value = val
      console.log(product1.value);
    }
    
    return{
      items,
      viewProduct,
      product1
    }
  }
}
</script>

<style lang="scss">
  
</style>