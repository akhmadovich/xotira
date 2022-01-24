<template>
    <div class="drawer-background" :class="{show : active}" @click="emit('close-product-drawer')"></div>
    <div v-if="product" class="alert alert-info position-relative padding">
        <div :show="{show:active}">
            <button class="btn-close position-absolute top-0 end-0" @click="emit('close-product-drawer')"></button>
        </div>
        <h3 class="text-center">{{product.name}}</h3>
        <div class="mark">Price: ${{product.price.toFixed(2)}}</div>
        <div class="p-2">Description: {{product.description}}</div>

        <div class="cart-total" v-if="product_total">
            <h3>In Cart</h3>
            <h4>${{product_total.toFixed(2)}}</h4>
        </div>

        <div class="btn-group">
            <button class="btn btn-danger">Remove</button>
            <button class="btn btn-outline-success">Add</button>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:['active', 'product'],
    emits:['close-product-drawer'],
    setup(){
        const product_total = computed(()=>{
            return 56.00
        })

        return{
            product_total
        }
    }
}
</script>