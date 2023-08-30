import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);


let createNewUsers = async (data) => {
    return new Promise(async (resolve, reject) => {
        if (data.status == 'checkAccount') {
            try {
                console.log(data.PhoneNumber)
                const phone = await db.User.findOne({ where: { PhoneNumber: data.PhoneNumber } });
                const user = await db.User.findOne({ where: { LoginName: data.LoginName } });

                // console.log(phone)
                // Kiểm tra nếu user tồn tại, tức là số điện thoại đã tồn tại
                if (phone && user) {
                    // Cả hai trường PhoneNumber và LoginName đều đã tồn tại trong cơ sở dữ liệu
                    resolve(201);
                    console.log("Số điện thoại và tên đăng nhập đã tồn tại");
                    console.log(phone && user);
                } else if (user) {
                    // Chỉ tên đăng nhập đã tồn tại trong cơ sở dữ liệu
                    resolve(203);
                    console.log("Tên đăng nhập đã tồn tại");
                } else if (phone) {
                    // Chỉ số điện thoại đã tồn tại trong cơ sở dữ liệu
                    resolve(202);
                    console.log("Số điện thoại đã tồn tại");
                } else {
                    // Cả hai trường PhoneNumber và LoginName đều chưa tồn tại trong cơ sở dữ liệu
                    // await db.User.create({
                    //     LoginName: data.LoginName,
                    //     UserName: data.userName,
                    //     address: data.address,
                    //     email: data.Email,
                    //     PhoneNumber: data.PhoneNumber,
                    //     gender: data.sex === '1' ? 'male' : 'female',
                    //     Date: data.date
                    // })
                    resolve(200);
                    console.log("Số điện thoại và tên đăng nhập đều chưa tồn tại");
                }



            } catch (error) {
                reject(error);

            }
        }
        else {
            try {
                console.log(data.PhoneNumber)

                let hashPasswordfrombcrypt = await hashUserPassword(data.password)
                await db.User.create({
                    LoginName: data.LoginName,
                    password: hashPasswordfrombcrypt,
                    UserName: data.userName,
                    address: data.address,
                    email: data.Email,
                    PhoneNumber: data.PhoneNumber,
                    gender: data.sex === '1' ? 'male' : 'female',
                    Date: data.date
                })
                resolve(200);
                console.log("Số điện thoại và tên đăng nhập đều chưa tồn tại");
            }



            catch (error) {
                reject(error);

            }

        }

    })


}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (err) {
            reject(err);
        }

    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            });
            resolve(users)
        } catch (error) {
            reject(error);
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true
            })
            if (user) {
                resolve(user)
            } else {
                resolve({})
            }
        } catch (error) {
            reject(error)
        }
    })
}
let updateUserData = (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id },
            })
            if (user) {
                const day = data.day;
                const month = data.month;
                const year = data.year;
                const date = new Date(year, month - 1, day);
                date.setDate(date.getDate() + 1);
                const dateString = date.toISOString().slice(0, 19).replace('T', ' ');
                console.log(dateString)

                user.email = data.email;
                user.UserName = data.UserName;
                user.PhoneNumber = data.PhoneNumber;
                user.gender = data.sex;
                user.Date = dateString

                await user.save();

                let allUsers = await db.User.findAll();
                resolve(user);
            } else {
                resolve()
            }
        } catch (error) {
            console.log(error)
        }
    })
}

let deleteUserById = (Userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: Userid },
            })
            if (user) {


                await user.destroy();


                resolve();
            } else {
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewUsers: createNewUsers,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById
}