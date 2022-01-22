const formatter = new Intl.NumberFormat('en-US', {style : 'currency', currency: 'USD'})

export function currency(value){
    return formatter.format(value)
}