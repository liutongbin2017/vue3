<template>
    <div>

    <br />插槽
    <div>
        <div class="demo-alert-box">
            <strong>Error!</strong>
        <slot></slot>
    </div>
    </div>
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
