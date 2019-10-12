// 头部组件
<template>
    <div>
        头部头部我是头部
    </div>
</template>;
<script>
export default {
    data () {
        return {

        }
    },
    mounted () {
        this.setAutoWindow()
    },
    methods: {
        setAutoWindow () {
            let winWidths = (document.body) && (document.body.clientWidth) ? document.body.clientWidth : window.innerWidth
            winWidths = !winWidths ? window.screen.availWidth : winWidths
            const defaultWidth = 750
            const viewport = document.getElementById('viewport')
            const appScale = winWidths >= defaultWidth ? 1 : (winWidths / defaultWidth)
            viewport.content = 'width=device-width,initial-scale=' + appScale + ', minimum-scale=' + appScale + ', maximum-scale=' + appScale + ', viewport-fit=cover'
        }
    }
}
</script>
