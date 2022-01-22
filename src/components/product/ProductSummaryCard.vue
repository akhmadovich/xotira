<template>
    <div class="card">
        <div class="card-header">
            <h2>{{product.category}}</h2>
        </div>
        <div class="card-body">
            <h3>Company name: {{product.name}}</h3>
            <h4>Price : {{currency(product.price)}}</h4>
            <p>Description: {{description}}</p>
            <button class="btn btn-outline-primary" @click="$emit('view-product', product)">View Product</button>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {currency} from '../../utils/currency'

export default {
    props:['product'],
    emits:['view-product'],
    setup(props){
        const description = computed(() => {
            return props.product.description.substring(0, 150)
        })
        return{
            currency,
            description
        }
    }
}
</script>