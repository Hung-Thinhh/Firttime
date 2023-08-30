import db from '../models/index';
import CRUDServices from '../services/CRUD-services';
import jwt from 'jsonwebtoken';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (err) {
        console.log(err);
    }

}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
// let postCRUD = async (req, res) => {
//     let message = await CRUDServices.createNewUsers( req.body)
//     console.log(message)
//     return res.send('crud-ejs')
// }

let displayGetCRUD = async (req, res) => {

    let data = await CRUDServices.getAllUser();
    // console.log('===============----------')
    // console.log(data)
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {

    let userid = req.query.id;
    if (userid) {
        let userdata = await CRUDServices.getUserInfoById(userid);
        console.log('===============')
        console.log(userdata)
        return res.render('EditCRUD.ejs', {
            user: userdata
        })

    } else {
        return res.send('data is found')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    console.log(data)
    const token = req.cookies.token
    const userId = jwt.verify(token, 'mk');
    let allUsers = await CRUDServices.updateUserData(data, userId.id);
    // return res.render('displayCRUD.ejs', {
    //     dataTable: allUsers
    // })
    return res.send(allUsers)
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDServices.deleteUserById(id);
        return res.send('delete done')
    } else {
        return res.send('No delete')

    }


}
let getIndex = async (req, res) => {
    return res.render('index.ejs')

}
let getCart = async (req, res) => {
    return res.render('cart.ejs')

}
let getPay = async (req, res) => {
    return res.render('pay.ejs')

}
let getShop = async (req, res) => {
    return res.render('shop.ejs')

}
let getLogin = async (req, res) => {
    return res.render('login.ejs')

}
let getSignup = async (req, res) => {
    return res.render('signup.ejs')

}
let postSignup = async (req, res) => {
    console.log(req.body)
    let message = await CRUDServices.createNewUsers(req.body)
    console.log(message)
    return res.sendStatus(message)


    // return res.render('signup_success.ejs', {
    //     PhoneNumber: message,

    // })


}
let getKhung_gio_san_sale = async (req, res) => {
    return res.render('flashsale.ejs')

}
let getGi_cung_re_freeship = async (req, res) => {
    return res.render('mua_la_freeship.ejs')

}
let getFlash_sale = async (req, res) => {
    return res.render('FlashSale_category.ejs')

}
let getThoi_Trang_Nam = async (req, res) => {
    return res.render('thoitrangnam.ejs')

}
let getItem = async (req, res) => {
    return res.render('item.ejs')

}
let getDaily_discover = async (req, res) => {
    return res.render('recomment_product.ejs')

}


module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    // postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    getIndex: getIndex,
    getCart: getCart,
    getPay: getPay,
    getShop: getShop,
    getLogin: getLogin,
    getSignup: getSignup,
    postSignup: postSignup,
    getKhung_gio_san_sale: getKhung_gio_san_sale,
    getGi_cung_re_freeship: getGi_cung_re_freeship,
    getFlash_sale: getFlash_sale,
    getThoi_Trang_Nam: getThoi_Trang_Nam,
    getItem: getItem,
    getDaily_discover: getDaily_discover
}