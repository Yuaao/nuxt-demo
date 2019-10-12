console.log(require('./assets/js/flexible.js'))
export default {
    mode: 'universal',
    /*
  ** Headers of the page
  */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                id: 'viewport',
                content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
            },
            {httpEquiv: 'X-UA-Compatible', content: 'ie=edge'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        // script: [{
        //     innerHTML: `
        //
        //     `,
        //     type: 'text/javascript',
        //     charset: 'utf-8'
        // }],
        // __dangerouslyDisableSanitizers: ['script']


    },
    /*
  ** Customize the progress-bar color
  */
    loading: {color: '#fff'},
    /*
  ** Global CSS
  */
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],
    /*
  ** Plugins to load before mounting the App
  */
    plugins: [
        '~/plugins/element-ui/element-ui'
    ],
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [],
    /*
  ** Nuxt.js modules
  */
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        prefix: 'http://rap2api.taobao.org/app/mock/232475',    // 前缀
        proxy: true         // 开启代理
    },
    // proxy: {
    //     '/api/': {
    //         target: 'http://rap2api.taobao.org/app/mock/232475',
    //         pathRewrite: {   // 重写地址
    //             '^/api/': ''
    //         }
    //     }
    // },
    /*
     ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        // babel-plugin-component 按需加载elementui
        analyze: {
            analyzerMode: 'static'  //打包体积优化 npm run build --analyze 可查看体积分布
        },
        transpile: [/^element-ui/,/^axios/], // build的vendor在nuxt2.0+版本中将废弃，只保留做低版本兼容，所以我们这里使用transpile防止重复打包
        babel: {
            'plugins': [
                [
                    'component',
                    {
                        'libraryName': 'element-ui',
                        'styleLibraryName': 'theme-chalk'
                    }
                ]
            ],
            'comments': true
        },
        extend(config, ctx) {
            // 还建议通过webpack启用ESLint热更新模式。这样ESLint将在npm run dev时保存
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
}
