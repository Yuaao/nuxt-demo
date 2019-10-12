<template>
    <div class="container">
        <div>
            <logo/>
            <h1
                class="title"
            >
                JollyChic
            </h1>
            <h2
                class="subtitle"
            >
                test
            </h2>
            <div>
                <i
                    class="el-icon-edit"
                >
                </i>
                <i
                    class="el-icon-share"
                >
                </i>
                <el-button
                    type="primary"
                    icon="el-icon-search"
                >
                    搜索
                </el-button>
            </div>
            <div class="links">
                <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    class="button--green"
                >
                    Documentation
                </a>
                <a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    class="button--grey"
                >
                    GitHub
                </a>
                <div
                    v-for="item in array"
                    :key="item"
                >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
// import { ajax } from '~/plugins/axios.js'
export default {
    components: {
        Logo
    },
    asyncData ({ redirect }) {

    },
    data () {
        return {
            array: []
        }
    },
    created () {
        this.allList()
        this.getAjax()

    },
    methods: {
        allList () {
            this.$axios.get('./jollychic/getDeatil.do',
                {
                    params: {
                        id: 12345
                    }
                }
            ).then(res => {
                console.log(res)
            })
        },
        getAjax () {
            // ajax('get','./jollychic/getDeatil.do',{
            //     id: 222
            // }).then((res)=>{
            //     console.lo(res)
            // })
            // console.log(ajax)

        }
    }
}
</script>

<style>
    html {
        background: #ffffff;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-size: 62.5%;
        /*10 ÷ 16 × 100% = 62.5%*/
    }

    html, body {
        width: 100%;
    }
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
