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
                    验证码
                </td>
                <td>
                    <input v-model="form.code" type="text">
                </td>
            </tr>
        </table>
        <button @click="handleLogin">登陆</button>
    </div>  
</template>
    
<script setup lang='ts'>

import { reactive } from 'vue';
type form={
    username:string,
    password:string,
    code:string
}
const form=reactive<form>({
    username:'',
    password:'',
    code:''
})

const handleLogin=()=>{
    console.log(form)
}

</script>
    
<style>
    
</style>