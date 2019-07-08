<template>
    <div>
        <button @click="ck">{{msg}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:"这是按钮"
        }
    },
    methods: {
        ck(){
            console.log("1234")
        }
    },
}
</script>