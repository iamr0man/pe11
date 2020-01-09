<template slot="items" slot-scope="props">
  <tr @click.native="test">
    <td>{{ props.item.name }}</td>
    <td class="text-xs-right">{{ props.item.calories }}</td>
    <td class="text-xs-right">{{ props.item.fat }}</td>
    <td class="text-xs-right">{{ props.item.carbs }}</td>
    <td class="text-xs-right">{{ props.item.protein }}</td>
    <td class="text-xs-right">{{ props.item.iron }}</td>  
  </tr>
</template>

<script>
export default {
  data() {
    return {
      items: [{ name: 'Banana', calories: '144gr', fat: '19gr', carbs: '28', protein: '4gr', iron: 'million gr'},]
    }
  },
  methods: {
    test() {
      console.log('click')
    }
  }
}
</script>