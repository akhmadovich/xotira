<template>
  <div class="card col-6 m-1">
      <div class="card-header">
          <h3 class="card-title">{{product.name}}</h3>
      </div>
      <div class="card-body text-start padding">
          <div><strong>Price:</strong> ${{product.price.toFixed(2)}}</div>
          <div class="card-text"><strong>Description:</strong> {{product.description}}</div>
          <div><strong>Category:</strong> {{product.category}}</div>
          <button class="btn btn-outline-dark" @click="$emit('view-product', product)">View product</button>
      </div>
  </div>
</template>

<script>
export default {
    props:['product'],
    emits:['view-product']
}
</script>

<style lang="scss">
    .padding{
        div{
            padding: 5px;
        }
    }
</style>