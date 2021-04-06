export default {
    data() {
        return {
            message: 'mixin的数据',
            foo: '2222'
        }
    },
    created() {
        this.hello();
        console.log('测试一下同名钩子函数=====mixinJs')
        this.food();
        this.conflicting()
    },
    methods: {
        hello() {
            console.log('hello from mixin!')
        },
        food() {
            console.log('foo')
        },
        conflicting() {
            console.log('from self====mixinJs')
        }
    }
}