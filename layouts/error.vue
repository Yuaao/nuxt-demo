// 处理页面错误公共页面
<template>
    <div
        class="container"
    >
        {{ error.message }}
    </div>
</template>
<script>
export default {
    data () {
        return {
            error: {
                message: '对不起，出错了！'
            }
        }
    },
    layout: 'blog' // 可以为错误页面指定自定义的error布局。

}
</script>
