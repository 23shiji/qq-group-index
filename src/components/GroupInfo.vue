<template lang="pug">
.group-info
  router-link(:to="`/group/${group.id}`")
    p {{group.name}}({{group.number}})
</template>

<script lang="ts">
import {GroupInfo} from '../data'
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components:{
    CategoryNode
  }
})
export default class CategoryNode extends Vue {
  @Prop() private group!: GroupInfo;
  expandedStatus: boolean = false
}
</script>
