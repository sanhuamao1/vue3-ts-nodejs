<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header-maintitle">{{title}}</div>
            <div class="card-header-description">{{description}}</div>
        </div>
        <div class="card-main">
            <div>{{content}}</div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    type props={
        title:string,
        description:string,
        content:string,
    }

    withDefaults(defineProps<props>(),{
        title:'主标题',
        description:'描述',
        content:'内容'
    })
</script>
    
<style lang="less" scoped>
.card{
    padding: 16px;
    border-radius: 4px;
    width: fit-content;
    display: inline-block;
    background-color: white;
    box-shadow: 0 0 3px #655;
    min-width: 180px;
    max-width: 220px;
    &-header{
        border-bottom: 1px solid #eee;
        &-maintitle{
            font-size: 18px;
        }
        &-description{
            font-size: 12px;
            color: darkgray;
            margin: 1em 0;
        }
    }
    &-main{
        margin: .6em 0;
        font-size: 14px;
        text-indent: 1em;
        overflow-wrap: anywhere;
        line-height: 18px;
        font-family: serif;
    }
}
    
</style>