const btn_create = document.querySelector(".btn_create");
const form_create = document.querySelector(".form_create");
const form_update = document.querySelector(".form_update");
const table_tbody = document.querySelector('table tbody')
const edit_btn = document.querySelectorAll('.edit_btn')
const delete_btn = document.querySelectorAll('.delete_btn')
const modal_edit = document.querySelector('.modal_edit')
const btn_update = document.querySelector('.btn_update')
btn_create.onclick = () => {
  // Tạo đối tượng FormData từ form
  const formData = new FormData(form_create);

  // Chuyển đổi FormData thành đối tượng JSON
  const jsonData = {};
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }
  console.log(jsonData);
  fetch("/admin/create-user", {
    method: "POST",
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status == 200) {
          alert("Success");
          getAllUsers()
      }
    })
    .catch((error) => {
      // Xử lý lỗi
    });
};
btn_update.onclick = () => {
  // Tạo đối tượng FormData từ form
  const formData = new FormData(form_update);

  // Chuyển đổi FormData thành đối tượng JSON
  const jsonData = {};
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }
  console.log(jsonData);
  fetch("/admin/post-crud", {
    method: "POST",
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status == 200) {
          alert("Success");
          getAllUsers()
      }
    })
    .catch((error) => {
      // Xử lý lỗi
    });
};
const getAllUsers = () => {
    fetch("/admin/get-alluser", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json()) // Chuyển đổi phản hồi thành đối tượng JSON
    .then(data => {
      // Xử lý dữ liệu từ phản hồi ở đây
        console.log(data); 
        let table = ''
        for (let i = 0; i < data.DT.length; i++) {
           let th = `<tr>
            <th scope="row">${data.DT[i].id?data.DT[i].id:''}</th>
            <td>${data.DT[i].loginName?data.DT[i].loginName:''}</td>
            <td>${data.DT[i].userName?data.DT[i].userName:''}</td>
            <td>${data.DT[i].email?data.DT[i].email:''}</td>
            <td>${data.DT[i].birthDay?changeDate(data.DT[i].birthDay):''}</td>
            <td>${data.DT[i].address ? data.DT[i].address : ''}</td>
            <td>
              <button
                type="button"
                class="edit_btn"
                data-toggle="modal"
                data-target="#editUser" id="${data.DT[i].id?data.DT[i].id:''}">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>

              <button type="button" class="delete_btn" id="${data.DT[i].id?data.DT[i].id:''}">
              <i class="fa-solid fa-trash"></i>
            </button>
            </td>
          </tr>`
            table += th
        }
        console.log(table)
        table_tbody.innerHTML = table
    })
        .catch((error) => {
            // Xử lý lỗi
        });
};
const changeDate = (date) => {
    const dateString = date;
    const dateObject = new Date(dateString);
    const newdate = dateObject.toISOString().substring(0, 10);
    console.log(newdate)
    return newdate
}

for (const btn of edit_btn) {
    btn.onclick = () => {
      console.log(btn.id)
      modal_edit.querySelector('#id').value = dataUser[btn.id].id
      
        modal_edit.querySelector('#LoginName').value = dataUser[btn.id].loginName
        modal_edit.querySelector('#Email').value = dataUser[btn.id].email
        modal_edit.querySelector('#Name').value = dataUser[btn.id].userName
        modal_edit.querySelector('#Phone_Number').value = dataUser[btn.id].phoneNumber
        modal_edit.querySelector('#Address').value = dataUser[btn.id].address
        modal_edit.querySelector('#Sex').value = dataUser[btn.id].gender
        modal_edit.querySelector('#Birtday').value = changeDate(dataUser[btn.id].birthDay)
    }
}

for (const btn of delete_btn) {
  btn.onclick = () => {
    console.log(btn.id)
    fetch("/admin/delete-crud", {
      method: "POST",
      body: JSON.stringify({id:btn.id}),
      headers: {
        "Content-Type": "application/json",
      },
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Có lỗi khi gửi yêu cầu');
    }
  }) // Chuyển đổi phản hồi thành đối tượng JSON
  .then(data => {
    // Xử lý dữ liệu từ phản hồi ở đây
    console.log(data); 
    alert(data.EM)
    getAllUsers()
     
  })
      .catch((error) => {
          // Xử lý lỗi
      });
  }
}


