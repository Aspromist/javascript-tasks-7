'use strict';

exports.init = function () {

    Object.prototype.checkContainsKeys = function (keys) {
        var res = keys.filter(function (prop) {
            return (prop in this);
        });
        return res.length === keys.length;
    };

    Object.prototype.checkHasKeys = function (keys) {
        var props = [];

        for (var prop in this) {
            props.push(prop);
        }

        var res = props.filter(function (prop) {
            return keys.indexOf(prop) != -1;
        });
        return res.length === keys.length;
    };

    Object.prototype.checkContainsValues = function (values) {
        var vals = [];

        for (var key in this) {
            vals.push(this[key]);
        }

        var res = values.filter(function (value) {
            return vals.indexOf(value) != -1;
        });
        return res.length === values.length;
    };

    Object.prototype.checkHasValues = function (values) {
        vals = [];

        for (var key in this) {
            vals.push(this.key);
        }

        var res = vals.filter(function (value) {
            return values.indexOf(value);
        });
        return res.length === values.length;
    };

    Object.prototype.checkHasValueType = function (key, type) {
        return this[key] == type(this[key]);
    };

    Object.prototype.checkHasLength = function (len) {
        if (Object.getPrototypeOf(this) === String.prototype ||
            Object.getPrototypeOf(this) === Array.prototype) {
            return this.length === len;
        }
    };

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        return this.split(' ').length === count;
    };
};
