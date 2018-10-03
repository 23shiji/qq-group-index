<template lang="pug">
.group-view
  template(v-if="group")
    h1
      | {{group.name}}
      | (
      a(v-if="group.url", :href="group.url", target="_blank") {{group.number}}
      span(v-else) {{group.number}}
      | )
    h5
      template(v-for="t in group.tags")
        router-link(:to="`/tag/${t}`") {{t}}
        |, 
    div(v-if="group.description", v-html="group.description")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {GroupInfo} from '@/data'
import CategoryNode from '@/components/CategoryNode.vue'
import store from '@/store'

@Component({
  components: {
    CategoryNode,
  }
})
export default class Group extends Vue {
  get id(): number{
    return parseInt(this.$route.params.id)
  }
  get group(): GroupInfo | null{
    return this.$store.state.currentGroup
  }
  updateGroup(){
    console.log(23333)
    this.$store.dispatch('updateGroup', this.id)
  }
  mounted(){
    this.updateGroup()
  }
  beforeRouterUpdate(to: Object, from: Object, next: Function){
    this.updateGroup()
    next()
  }
}
</script>
