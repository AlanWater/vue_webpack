'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _test = require('./../templates/test1.vue');

var _test2 = _interopRequireDefault(_test);

var _test3 = require('./../templates/test2.vue');

var _test4 = _interopRequireDefault(_test3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by shenyong on 2017/7/2.
 */
_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
    routes: [{
        path: '/test1',
        component: _test2.default
    }, {
        path: '/test2',
        component: _test4.default
    }]
});
//# sourceMappingURL=routes.js.map