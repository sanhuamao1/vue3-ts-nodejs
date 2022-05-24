<script setup lang='ts'>

// const props=defineProps({
//     title:{
//         type:String,
//         default:()=>{return 'title'}
//     },
// })

type TreeList={
    name:string,
    icon?:string,
    children?:TreeList[] | []
}

type Props={
    data?:TreeList[]
}

defineProps<Props>()

</script>
    
    
<template>
        <div>
            菜单
        </div>
</template>
    

<style>
    
</style>