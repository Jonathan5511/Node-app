const path = require('path')
const fs = require('fs')
const dirname = require('../util/path')

const p = path.join(dirname, 'data', 'products.json')

const getProductFromFile = (cb)=>{ 
            fs.readFile(p, (err,fileData)=>{
                if(err){
                    cb([]);
                }
                cb(JSON.parse(fileData))
            })
}

module.exports = class Product {
    constructor(title, imageUrl, price, description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    save(){
        getProductFromFile(products=>{
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err)
            })
        })
    }
    static fetchAll(cb){
        getProductFromFile(cb)
    }
} 