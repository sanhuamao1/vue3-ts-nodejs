<template>
    <div>
        <table>
            <tr>
                <td>
                    账号：
                </td>
                <td>
                    <input v-model="form.username" type="text">
                </td>
            </tr>
            <tr>
                <td>
                    密码：
                </td>
                <td>
                    <input v-model="form.password" type="password">
                </td>
            </tr>
            <tr>
                <td>
                    确认密码
                </td>
                <td>
                    <input v-model="form.comfirm" type="password">
                </td>
            </tr>
        </table>
        <button @click="handleRegister">注册</button>
    </div>  
</template>
    
<script setup lang='ts'>

import { reactive } from 'vue';
type form={
    username:string,
    password:string,
    comfirm:string
}
const form=reactive<form>({
    username:'',
    password:'',
    comfirm:''
})

const handleRegister=()=>{
    console.log(form)
}

</script>
    
<style>
    
</style>