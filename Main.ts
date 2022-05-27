import {ProductManager} from "./ProductManager";
import {Product} from "./Product";

let productManager = new ProductManager()
let banh = new Product(`122`,`banh`,`banh`,120000,123123123,`12/2/2020`,`asdasdasda`)
let keo = new Product(`122`,`keo`,`keo`,120000,123123123,`12/2/2020`,`asdasdasda`)
let duong = new Product(`122`,`duong`,`duong`,120000,123123123,`12/2/2020`,`asdasdasda`)
let banhmi = new Product(`122`,`banhmi`,`banh`,120000,123123123,`12/2/2020`,`asdasdasda`)
let sua = new Product(`122`,`sua`,`sua`,120000,123123123,`12/2/2020`,`asdasdasda`)
productManager.add(banh,keo,duong,banhmi,sua)
productManager.search(`duong`)