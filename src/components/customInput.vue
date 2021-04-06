<template>
    <div>

    <br />子组件
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        >
    <!-- <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        > -->
    </div>
</template>
<script>
    export default {
        props: ['modelValue'],
        emits: ['update:modelValue'],
        data(){
            return{
            }
        },
        

    }
</script>
