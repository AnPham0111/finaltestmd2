"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.Products = [];
    }
    ProductManager.prototype.add = function () {
        var _a;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        (_a = this.Products).push.apply(_a, data);
        this.show(this.Products);
    };
    ProductManager.prototype["delete"] = function (name) {
        for (var i = 0; i < this.Products.length; i++) {
            if (this.Products[i].Name == name) {
                this.Products.splice(i, 1);
            }
        }
        this.show(this.Products);
    };
    ProductManager.prototype.edit = function (product, ID, name, type, price, amount, date, desciption) {
        var index = this.Products.indexOf(product);
        this.Products[index].ID = ID;
        this.Products[index].Name = name;
        this.Products[index].Type = type;
        this.Products[index].price = price;
        this.Products[index].date_creat = date;
        this.Products[index].amount = amount;
        this.Products[index].description = desciption;
        this.show(this.Products);
    };
    ProductManager.prototype.show = function (arr) {
        console.table(arr);
    };
    ProductManager.prototype.search = function (name) {
        var arrProduct = [];
        for (var i = 0; i < this.Products.length; i++) {
            if (this.Products[i].Name == name) {
                arrProduct.push(this.Products[i]);
            }
        }
        this.show(arrProduct);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
