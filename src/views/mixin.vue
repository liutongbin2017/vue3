<template>
    <div class="mixin">
        <input ref="input" v-focus />
    </div>
</template>
<style>
    
</style>

<script>

// import mixins from './mixins'
export default {
    name: 'Mixin',
    // mixins:[mixins],
    data() {
        return {
            message:'vueMixin的数据',
            name:'ssss'
        }
    },
    created() {
        console.log(this.$data);
        console.log('测试一下同名钩子函数=====mixinVue');
        this.conflicting()

    },
    methods:{
        bar() {
            console.log('bar')
        },
        conflicting() {
            console.log('from self')
        }
    }

}
</script>
