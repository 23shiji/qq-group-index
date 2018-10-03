<template lang="pug">
.tag-view
  h1 {{tag.name}}
  template(v-for="g in groups")
    group-info(:group="g")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {TagInfo, GroupIndex} from '@/data'
import GroupInfo from '@/components/GroupInfo.vue'

@Component({
  components: {
    GroupInfo
  },
  
})
export default class TagView extends Vue {
  mounted(){
    this.$store.dispatch('updateIndex')
  }
  get name(): string{
    return this.$route.params.name
  }
  get tag(): TagInfo{
    return this.$store.getters.getTagInfo(this.name)
  }
  get groups(): GroupIndex{
    return this.tag.groups.map(id => this.$store.getters.getGroupIndex(id))
  }
}
</script>
