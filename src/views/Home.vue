<template>
  <div class="home">
      <product-description-drawer
        :product="product1"
        :active="active.product_drawer"
      ></product-description-drawer>
      <div class="product-cards-container">
        <ProductSummaryCard 
          v-for="product in items"
          :key="product.id"
          :product="product"
          @view-product="viewProduct($event)"/>
      </div>
  </div>
</template>

<script>
import items from '../data/items'
import ProductSummaryCard from '../components/product/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '../components/product/ProductDescriptionDrawer.vue'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',
  setup(){
    const product1 = ref(null)
    const viewProduct = val => {
      product1.value = val
      console.log(product1.value);
    }
    
    return{
      items,
      product1,
      viewProduct,
      active:{
        product_drawer: false
      }
    }
  },
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer
  }
}
</script>

<style lang="scss">
  .product-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>