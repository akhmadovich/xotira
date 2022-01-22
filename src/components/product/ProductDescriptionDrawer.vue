<template>
    <div class="drawer-background" :class="{show : active}" @click="emit('close-product-drawer')"></div>
    <div class="drawer" :show="{show:active}">
        <div class="drawer-close" @click="emit('close-product-drawer')">
            X
        </div>
    </div>
    <div v-if="product" class="product-details">
        <h3 class="text-center">{{product.name}}</h3>
    </div>
</template>

<script>
export default {
    props:['active', 'product']
}
</script>