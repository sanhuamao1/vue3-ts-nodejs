<template>
    <div>
        <input type="number" step="20" v-model="number.current">
        <transition>
            <div>{{(number.rollNum).toFixed(0)}}</div>
        </transition>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import {gsap} from 'gsap'

type num={
    current:number,
    rollNum:number
}
const number=reactive<num>({
    current:0,
    rollNum:0
})

watch(()=>number.current,(newVal,oldVal)=>{
    gsap.to(number,{
        duration:1,
        rollNum:newVal
    })
})
</script>
    
<style>
    
</style>