<template>
    <div class="Tabs">
        <span v-for="(item,index) in tabList" :key="index" @click="switchComponent(item)">{{item.name}}</span>
        <component :is="data.component"></component>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive } from '@vue/reactivity'
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
type Tab={
    name:string,
    component:any
}

const tabList=reactive<Tab[]>([
    {
        name:'A组件',
        component:A
    },
    {
        name:'B组件',
        component:B
    },
     {
        name:'C组件',
        component:C
    }
])

type com=Pick<Tab,'component'>
// 因为是com类型，所以属性名称不能变，要对应
const data=reactive<com>({
    component:tabList[0].component
})
const switchComponent=(item:Tab)=>{
    data.component=item.component
}
</script>
    
<!-- <script lang="ts">
//以字符串的形式绑定
// export default{
//     components:{
//         A
//     }
// }
</script> -->

<style lang="less" scoped>
.Tabs>span{
    display: inline-block;
    padding: 4px 20px;
    margin-right: 16px;
    border: 1px solid rgb(152, 152, 152);
    border-radius: 2px;
    background-color: white;
    cursor: pointer;
    &.active{
        background-color: antiquewhite;
    }
}
    
</style>