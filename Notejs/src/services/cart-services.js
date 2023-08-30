// import bcrypt from 'bcryptjs';
import db from '../models/index';


let createNewCartItem = async (data, id) => {
    return new Promise(async (resolve, reject) => {
        console.log(data)
        console.log(id)
        const Product = await db.Cart.findOne({ where: { ID_user: id, link_product: data.link, category: data.category } });
        if (Product) {
            try {
                await db.Cart.increment('quality', {
                    by: 1,
                    where: {
                        ID_user: id
                    }
                });
                resolve(201);
                console.log("Cập nhật product");
            }
            catch (error) {
                reject(error);
            }

        }
        else {
            try {

                await db.Cart.create({
                    ID_user: id,
                    link_product: data.link,
                    image: data.image,
                    quality: data.quality,
                    shop_name: data.shop_name,
                    product_name: data.product_name,
                    Price: data.Price,
                    category: data.category
                })
                resolve(200);
                console.log("Thêm mới ");
            }



            catch (error) {
                reject(error);

            }

        }
    })
}
let getCartItem = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // const cart = await db.User.findByPk(id, {
            //     attributes: ['id', 'LoginName'],
            //     include: db.Cart, // Sử dụng tên mặc định 'Carts' hoặc 'User'
            //     // order: [['shop_name', 'ASC']],
            //     group: ['shop_name']
            // });
            const cartsByShop = new Map();

            const carts = await db.Cart.findAll({
                where: { ID_user: id },
                order: [['id', 'DESC']]
            });
            console.log(carts);

            carts.forEach((cart) => {
                const { shop_name } = cart;
                if (cartsByShop.has(shop_name)) {
                    cartsByShop.get(shop_name).push(cart);
                } else {
                    cartsByShop.set(shop_name, [cart]);
                }
            });

            console.log(cartsByShop);

            resolve(cartsByShop);
            console.log("Cập nhật product");
        }
        catch (error) {
            reject(error);
        }
    })
}
let deleteCartItem = async (data, id) => {
    return new Promise(async (resolve, reject) => {

        try {
            await db.Cart.destroy({

                where: {
                    ID_user: id,
                    link_product: data.link,
                    category: data.category
                }
            });
            resolve(200);
            console.log("Cập nhật product");
        }
        catch (error) {
            reject(error);
        }

    })
}



module.exports = {
    createNewCartItem: createNewCartItem,
    getCartItem: getCartItem,
    deleteCartItem: deleteCartItem
}