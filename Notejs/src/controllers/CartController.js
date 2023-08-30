import cartService from "../services/cart-services"
import jwt from 'jsonwebtoken';


let New_cart_item = async (req, res) => {
    const token = req.cookies.token
    const userId = jwt.verify(token, 'mk');
    console.log(userId.id)
    console.log(req.body)
    let message = await cartService.createNewCartItem(req.body, userId.id)
    console.log(message)
    return res.sendStatus(message)
}
let get_cart_item = async (req, res) => {
    const token = req.cookies.token
    const userId = jwt.verify(token, 'mk');

    let cart = await cartService.getCartItem(userId.id)
    console.log(cart)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        cart: Array.from(cart.entries())
    })
}

let delete_cart_item = async (req, res) => {
    const token = req.cookies.token
    const userId = jwt.verify(token, 'mk');
    console.log(userId.id)
    console.log(req.body)
    let message = await cartService.deleteCartItem(req.body, userId.id)
    console.log(message)
    return res.sendStatus(message)
}



module.exports = {
    New_cart_item: New_cart_item,
    get_cart_item: get_cart_item,
    delete_cart_item: delete_cart_item

}