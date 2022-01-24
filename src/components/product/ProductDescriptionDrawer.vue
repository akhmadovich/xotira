<template>
    <div class="drawer-background" :class="{show : active}" @click="emit('close-product-drawer')"></div>
    <div class="drawer" :show="{show:active}">
        <div class="drawer-close fs-4" @click="emit('close-product-drawer')">
            &times;
        </div>
    </div>
    <div v-if="product" class="product-details">
        <h3 class="text-center">{{product.name}}</h3>
        <p>{{product.description}}</p>
        <p>${{product.price.toFixed(2)}}</p>

        <div class="card-total" v-if="product_total">
            <h3>In Cart</h3>
            <p>{{ product_total }}</p>
        </div>
    </div>

    <div class="button-container">
        <button class="btn btn-outline-danger me-1">Remove</button>
        <button class="btn btn-outline-primary">Add</button>
    </div>
  
</template>

<script>
export default {
    props:['active', 'product'],
    emits:['close-product-drawer'],
}
</script>
