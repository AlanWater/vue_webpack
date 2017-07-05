'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _routes = require('./routes/routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './assets/sass/reset.sass'//报错暂时不用sass
_vue2.default.config.debug = true; //开启错误提示

/**
 * Created by shenyong on 2017/7/2.
 */
//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
new _vue2.default({
    router: _routes2.default,
    el: '#appIndex',
    render: function render(h) {
        return h(_App2.default);
    }
});
//# sourceMappingURL=main.js.map