"use strict";
exports.__esModule = true;
var Generic = /** @class */ (function () {
    function Generic() {
        this._items = new Array();
    }
    Generic.prototype.add = function (item) {
        this._items.push(item);
    };
    Generic.prototype.getAll = function () {
        return this._items;
    };
    Generic.prototype.first = function (id) {
        return this._items.filter(function (item) {
            item.id === id;
        })[0];
    };
    Generic.prototype.getLast = function () {
        return this._items.lastIndexOf[0];
    };
    Generic.prototype.getFirst = function () {
        return this._items[0];
    };
    return Generic;
}());
exports.Generic = Generic;
