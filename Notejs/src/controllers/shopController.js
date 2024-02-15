import db from '../models/index';
import shopServices from '../services/shop-services';

let getHomePage = async (req, res) => {
    try {
        return res.render('shop/index.ejs', {
            header: 'header',
            slide_bar: 'slide_bar',
        });
    } catch (err) {
        console.log(err);
    }
}
let getNewProduct = async (req, res) => {
    try {
        const group_type = await shopServices.getAllGroupType()
        const type_sp = await shopServices.getAllTypeSp()
        return res.render('shop/newProduct.ejs', {
            header: 'header',
            slide_bar: 'slide_bar',
            group_type: group_type,
            type_sp:type_sp
        });
    } catch (err) {
        console.log(err);
    }

}
let get_group_type = async (req, res) => {
    try {
        let data = await shopServices.getAllGroupType();
        console.log(data)

        return res.status(200).json({
            EM: 'get group type successfully',
            EC: 0,
            DT: data
        })
    } catch (err) {
        console.log(err);
    }

}

let getCRUD = async(req, res) => {
    try {
        let data = await db.User.findAll()
        let allUser = await CRUDServices.getAllUser();
        return res.render('admin/crud.ejs', {
            data: JSON.stringify(data),
            header: 'header_admin',
            data:allUser
        });
    } catch (err) {
        console.log(err);
    }
}
let handleCreateNewUser = async (req, res) => {
    let message = await CRUDServices.createNewUsers( req.body)
    console.log(message)
    return res.send('crud-ejs')
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDServices.getAllUser();
    return res.status(200).json({
        EM: 'get user seucess',
        EC: 0,
        DT: data
    })
}

let getEditCRUD = async (req, res) => {

    let userid = req.query.id;
    if (userid) {
        let userdata = await CRUDServices.getUserInfoById(userid);
        return res.render('EditCRUD.ejs', {
            user: userdata
        })

    } else {
        return res.send('data is found')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.status(200).json({
        EM: allUsers.EM,
        EC: allUsers.EC,
        DT: allUsers.DT
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.body.id;
    if (id) {
        let data = await CRUDServices.deleteUserById(id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } else {
        return res.status(404).json( {
            EM: 'the user is not found',
            EC: -1,
            DT: []
          })

    }


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



module.exports = {
    getHomePage: getHomePage,
    getNewProduct: getNewProduct,
    get_group_type:get_group_type,
    getCRUD: getCRUD,
    handleCreateNewUser:handleCreateNewUser,
    // postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    postSignup: postSignup,

    
}