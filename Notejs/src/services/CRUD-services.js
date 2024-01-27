import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUsers = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data.PhoneNumber);
      const phone = await db.User.findOne({
        where: { PhoneNumber: data.PhoneNumber },
      });
      const user = await db.User.findOne({
        where: { LoginName: data.LoginName },
      });

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
        let hashPasswordfrombcrypt = await hashUserPassword(data.password);
        await db.User.create({
          loginName: data.LoginName,
          email: data.Email,
          userName: data.Name,
          address: data.address,
          phoneNumber: data.PhoneNumber,
          gender: data.sex === "1" ? "1" : "0",
          birthDay: data.date,
          password: hashPasswordfrombcrypt,
        });
        resolve(200);
        console.log("Số điện thoại và tên đăng nhập đều chưa tồn tại");
        console.log(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (err) {
      reject(err);
    }
  });
};

let getAllUser = async() => {

    try {
        let users = await db.User.findAll({
            attributes:['id','userName','loginName','address','email','birthDay','gender','phoneNumber'],
        raw: true,
      });
      return users;
    } catch (error) {
      reject(error);
    }
};

let getUserInfoById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        resolve({});
      }
    } catch (error) {
      reject(error);
    }
  });
};
let updateUserData = async(data) => {
    try {
      let user = await db.User.findOne({
        where: { id: data.id },
      });
      if (user) {
          user.userName= data.Name,
          user.address= data.address,
          user.gender= data.sex === "1" ? "1" : "0",
          user.birthDay= data.date,

        await user.save();
        return {
          EM: 'update user success',
          EC: 0,
          DT: []
      }
      } else {
        return {
          EM: 'the user is not found',
          EC: 0,
          DT: []
      }
      }
    } catch (error) {
      console.log(error);
    }

};

let deleteUserById = async(Userid) => {
  try {
      console.log(Userid);
      let user = await db.User.findOne({
        where: { id: Userid },
      });
      console.log(user);
      if (user) {
        await user.destroy();

        return {
          EM: 'delete user success',
          EC: 0,
          DT: []
        }
      } else {
        return {
          EM: 'the user is not found',
          EC: -1,
          DT: []
        }
      }
    } catch (error) {
      return {
        EM: 'the user is not found',
        EC: -1,
        DT: []
      }
    }

};

module.exports = {
  createNewUsers: createNewUsers,
  getAllUser: getAllUser,
  getUserInfoById: getUserInfoById,
  updateUserData: updateUserData,
  deleteUserById: deleteUserById,
};
