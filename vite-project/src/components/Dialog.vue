<template>
    <div class="dialog">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot v-for="(item,index) in data" :key="index" :slotItem="item" :index="index"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive } from "@vue/reactivity"


type person={
    name:string,
    age:number
}
    
const data=reactive<person[]>([
    {
        name:'xxx1',
        age:1
    },
    {
        name:'xxx2',
        age:2
    },
    {
        name:'xxx3',
        age:3
    }
])
</script>
    
<style lang="less" scoped>

.dialog>div{
    height: 200px;
    color: white;
    padding: 10px;

}
.header{
    background: red;
}
.content{
    background: green;
}
.footer{
    background: blue;
}
    
</style>