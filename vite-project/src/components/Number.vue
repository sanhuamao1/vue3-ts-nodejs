<template>
    <div>
        <button @click="random">随机</button>
         <transition-group class="wrap" tag="div" move-class="mmm">
            <div class="item" v-for="item in list" :key="item.id">{{item.number}}</div>
        </transition-group>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive } from "@vue/reactivity";


const list=reactive(Array.apply(null,{length:81} as number[]).map((_,index)=>{
    return{
        id:index,
        number:(index%9)+1
    }
}))

const random=()=>{
    list.sort(()=>Number(Math.random())-0.5)
    console.log(list)
}
</script>
    
<style lang="less" scoped>
.wrap{
    display: flex;
    flex-wrap: wrap;
    width: calc(27px * 9);
    .item{
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.mmm{
    transition: all 1s;
}
</style>