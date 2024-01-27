import userService from "../services/user-services"
import jwt from 'jsonwebtoken';

let handleLogin = async (req, res) => {
    let PhoneNumber = req.body.phoneNumber;
    let password = req.body.password;

    if (!PhoneNumber || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter'
        })
    }
    let userData = await userService.handleUserLogin(PhoneNumber, password)
    return res.status(200).json({
        errCode: userData.errcode,
        message: userData.errMessage,
        token: userData.token,
        user: userData.user ? userData.user : {}
    })
}

let checkLogin = (req, res) => {
    try {
        const token = req.cookies.token
        if (token) {
            const ketqua = jwt.verify(token, 'mk')
            // return res.send('update done')

            return res.render('index.ejs', {
                is_from_login: true,
            })

        }
        else {
            return res.render('index.ejs', {
                is_from_login: false,
            })
        }

    } catch (error) {
        // return res.send('error updating')
        return res.render('login.ejs')
    }
}

let handleLogout = async (req, res) => {

    try {
        const token = req.cookies.token
        const ketqua = jwt.verify(token, 'mk')
        if (ketqua) {
            res.clearCookie('token');
            res.redirect('/index');
        }

    } catch (error) {
        return res.send(error)
    }
}

let getUser = async (req, res) => {
    res.render('user.ejs')
}
let getInfoUser = async (req, res) => {
    const token = req.cookies.token
    const userId = jwt.verify(token, 'mk');
    console.log(userId.id)

    let userData = await userService.handleGetInfoUser(userId.id)
    return res.status(200).json({
        errCode: userData.errcode,
        message: userData.errMessage,
        token: userData.token,
        user: userData.user ? userData.user : {}
    })
}
module.exports = {
    handleLogin: handleLogin,
    checkLogin: checkLogin,
    handleLogout: handleLogout,
    getUser: getUser,
    getInfoUser: getInfoUser
}