<template lang="pug">
.category
  h1(@click="switchExpandedStatus()")
    | {{node.name}}
    template(v-if="!frozen")
      span(v-if="!expandedStatus") +
      span(v-if="expandedStatus")  -
  .children-container(v-if="expandedStatus")
    .group-container
      template(v-for="g in groups")
        group-info(:group="g")
    .category-container
      .category-info(v-for="c in node.children")
        category-node(:node.sync="c")
    .group-info(v-for="{name, number} in groups")
      p {{name}}({{number}})
</template>

<script lang="ts">
import {Category} from '../data'
import GroupInfo from '@/components/GroupInfo.vue'
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components:{
    CategoryNode,
    GroupInfo
  }
})
export default class CategoryNode extends Vue {
  @Prop() private node!: Category;
  @Prop({default: false}) private expanded!: boolean;
  @Prop({default: false}) private frozen: boolean;
  expandedStatus: boolean = false
  created(){
    this.expandedStatus = this.expanded
  }
  get groups(){
    return this.node.groups.map((id: number) => this.$store.getters.getGroupIndex(id))
  }
  switchExpandedStatus(){
    if(!this.frozen){
      this.expandedStatus = !this.expandedStatus
    }
  }
}
</script>
