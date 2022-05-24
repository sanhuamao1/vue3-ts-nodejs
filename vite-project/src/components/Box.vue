<template>
    <div>
        <!-- <button @click="switchFlag">切换</button>
        <transition name="fade">
            <div class="box" v-if="flag"></div>
        </transition> -->

         <!-- <transition enter-to-class="" enter-active-class="">
            <div class="box" v-if="flag"></div>
        </transition> -->
         <!-- <transition :duration="500" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <div class="box" v-if="flag"></div>
        </transition> -->
          <!-- <transition :duration="{enter:50,leave:500}" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <div class="box" v-if="flag"></div>
        </transition> -->
        <!-- <transition
            @before-enter="enterFrom"
            @enter="enterActive" 
            @after-enter="enterTo"
            @enter-cancelled="enterStop"
            @leave="leaveActive"
        >
            <div class="box" v-if="flag"></div>
        </transition> -->

        <!-- <transition
            appear
            appear-from-class=""
            appear-active-class=""
            appear-to-class=""
        >

        </transition> -->
        <button @click="addItem">add</button>
        <button @click="deleteItem">delete</button>
        <div class="wrap">
            <transition-group
                enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__bounceOut"
            >
                <div v-for="item in list" :key="item" class="item">{{item}}</div>
            </transition-group>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

import { ref,reactive } from 'vue';
import 'animate.css';
import {gsap} from 'gsap'
const flag=ref<boolean>(true)
const switchFlag=()=>{
    flag.value=!flag.value
}

const list=reactive<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
const addItem=()=>{
    list.push(list.length+1)
}
const deleteItem=()=>{
    list.pop()
}
const enterFrom=(el:Element)=>{
    
}
// const enterActive=(el:Element,done:Function)=>{
//     console.log('曲线')
//     setTimeout(()=>{
//         done()
//     },3000)
// }

const enterActive=(el:Element,done:gsap.Callback)=>{
    gsap.to(el,{
        width:200,
        height:200,
        onComplete:done
    })
}

const enterTo=(el:Element)=>{
    
}
const enterStop=(el:Element)=>{
    console.log('过渡被打断')
}

const leaveActive=(el:Element,done:gsap.Callback)=>{
    gsap.to(el,{
        width:0,
        height:0,
        onComplete:done
    })
}
    
</script>
    
<style lang="less" scoped>
.box{
    width: 300px;
    height: 300px;
    background-color: aqua;
}
    
.fade-enter-from{
    width: 0;
    height: 0;
}
.fade-enter-active{
    transition: all 0.5s ease;//要过渡的属性 时间 曲线
}

.fade-leave-active{
    transition: all 0.5s ease;//要过渡的属性 时间 曲线
}

.fade-leave-to{
    width: 0;
    height: 0;
}

.wrap{
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;
    .item{
        margin: 10px;
    }
}
</style>