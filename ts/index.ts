function printAll(strs:string|string[]|null){
    if(strs&&typeof strs==='object'){  //类型缩小与真值缩小
        for(const s of strs){
            console.log(s)
        }
    }else if(typeof strs==='string'){
        console.log(strs)
    }else{
        
    }
}