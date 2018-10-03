<template lang="pug">
.home
  category-node(:node.sync="$store.state.tree", :expanded="true", :frozen="true")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CategoryNode from '@/components/CategoryNode.vue'

@Component({
  components: {
    CategoryNode,
  },
  
})
export default class Home extends Vue {
  created(){
    console.log(this.$store.state.tree)
  }
}
</script>
