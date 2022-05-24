<template>
    <div class="layout">
        <Menu title="菜单" class="layout-left"/>
        <div class="layout-right">
            <Header class="layout-right-header"/>
            <Content>
                <RollNumber/>
            </Content>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import Menu from './menu/index.vue'
import Header from './header/index.vue'
import Content from './content/index.vue'
// import Card from '../components/Card.vue'
// import Tabs from '../components/Tabs/index.vue'
// import Dialog from '../components/Dialog.vue'
// import Login from '../components/Login.vue'
// import Reigister from '../components/Register.vue'
// import Box from '../components/Box.vue'
// import Number from '../components/Number.vue' 
import RollNumber from '../components/RollNumber.vue'

import { ref } from 'vue'

const flag=ref<boolean>(true)
const swicthFlag=()=>{
    flag.value=!flag.value
}

</script>
    
<style lang="less" scoped>
.layout{
    display: flex;
    width: 100%;
    &-left{
        flex: 1;
    }
    &-right{
        flex: 4;
        &-header{
            background-color: lightskyblue;
            height: 36px;
            line-height: 36px;
        }
    }
}
    
</style>