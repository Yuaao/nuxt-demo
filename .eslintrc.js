// http://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        // sourceType: 'module',
        parser: 'babel-eslint'
    },
    globals: {
        'IS_DEV_COMPILE': true,
        'BUILD_VERSION_NUM': true,
        'SENTRY_HOST': true,
        'SENTRY_PUBLIC_KEY': true,
        'SENTRY_APP_ID': true,
        'SENTRY_MAPPING': true,
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here

    // off 或 0：表示不验证规则。
    // warn 或 1：表示验证规则，当不满足时，给警告。
    // error 或 2 ：表示验证规则，不满足时报错。
    'rules': {
        'semi': [1, 'never'],  // 要求或禁止使用分号代替 ASI always要求使用分号
        'no-mixed-spaces-and-tabs': [1, false], // 禁止空格和 tab 的混合缩进
        'arrow-parens': 0,  // 要求箭头函数的参数使用圆括号
        'no-tabs': 'off',  // 禁用 tab
        'no-trailing-spaces': 0,  // 禁用行尾空格
        'padded-blocks': 0,  // 要求或禁止块内填充
        'no-empty': 0,  // 禁止出现空语句块
        'no-multi-spaces': 0,  // 禁止使用多个空格
        'handle-callback-err': 0,  // 要求回调函数中有容错处理
        'key-spacing': [0, {
            'beforeColon': false,
            'afterColon': false
        }
        ],   //强制在对象字面量的属性中键和值之间使用一致的间距
        'indent': ['warn', 4, {'SwitchCase': 1}],    // 强制使用一致的缩进
        'prefer-promise-reject-errors': 0,  // 要求使用 Error 对象作为 Promise 拒绝的原因
        'generator-star-spacing': 0,  // 强制 generator 函数中 * 号周围使用一致的空格
        'eol-last': 0,  // 要求或禁止文件末尾存在空行
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0 // 禁用 debugger
    }
};
