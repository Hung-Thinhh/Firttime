const container_menu_wrap_item = document.querySelectorAll('.container_menu_wrap_item')
const container_main_wrap_main = document.querySelectorAll('.container_main_wrap_main')
const container_main_table_userName = document.querySelector('.container_main_table_userName')
const container_main_table_fullname = document.querySelector('.container_main_table_fullname input')
const container_main_table_email = document.querySelector('.container_main_table_email')
const table_btn_edit_email = document.querySelector('.table_btn_edit_email')
const container_main_table_emailInput = document.querySelector('.container_main_table_emailInput')
const container_main_table_phoneNumber = document.querySelector('.container_main_table_phoneNumber')
fetch('/api/user', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    .then(response => response.json())
    .then(data => {
        // Lấy thông tin user từ response của server
        const user = data.user;
        console.log(user); // { id: 'asdf', name: 'John Doe', email: 'john.doe@example.com'}

        if (user.LoginName) {
            container_main_table_userName.innerHTML = user.LoginName
            document.querySelector('.container_menu_user_title_name').innerHTML = user.LoginName
        } else {
            container_main_table_userName.innerHTML = ''
        }
        if (user.UserName) {
            container_main_table_fullname.value = user.UserName
        } else {
            container_main_table_fullname.value = ''
        }
        if (user.email) {
            const email = user.email
            const atPosition = email.indexOf("@");
            const username = email.slice(0, atPosition);
            const hiddenUsername = username.slice(0, 2) + "*".repeat(username.length - 2);
            const hiddenEmail = hiddenUsername + email.slice(atPosition);

            container_main_table_email.innerHTML = hiddenEmail
            container_main_table_emailInput.querySelector('input').value = user.email
            container_main_table_emailInput.style.display = 'none'

        } else {
            table_btn_edit_email.style.display = 'none'
            container_main_table_email.style.display = 'none'
            container_main_table_emailInput.style.display = 'flex'
        }
        if (user.phoneNumber) {
            const phoneNumber = user.phoneNumber
            const hiddenNumber = "********" + phoneNumber.slice(-2);
            container_main_table_phoneNumber.innerHTML = hiddenNumber
        }

        if (user.gender) {
            if (user.gender == 1) {
                document.getElementById("Nam").checked = true;
                console.log('nam')
            }
            else if (user.gender == 0) {
                document.getElementById("Nữ").checked = true;
                console.log('nu')

            } else {
                document.getElementById("Khác").checked = true;
                console.log('khac')

            }
        }
        if (user.Date) {
            const date = new Date(user.Date);
            // const formattedDate = date.toLocaleDateString('vi-VN', {
            //     year: 'numeric',
            //     month: '2-digit',
            //     day: '2-digit',
            //   });
            //   console.log(formattedDate)
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            console.log(year, month, day);

            if (day) {
                const daylist = document.getElementById('day').querySelector(`option[value="${day}"]`);
                daylist.selected = true;
                console.log(daylist);
            }
            if (month) {
                const monthlist = document.getElementById('month').querySelector(`option[value="${month}"]`);
                monthlist.selected = true;
                console.log(monthlist);
            }
            if (year) {
                // const yearlist = document.getElementById('year').querySelector(`option[value="${year}"]`);
                // yearlist.selected = true;
                // console.log(yearlist);
                const yearSelect = document.getElementById("year");
                const optionToSelect = year;
                for (let i = 0; i < yearSelect.options.length; i++) {

                    if (yearSelect.options[i].value == optionToSelect) {
                        yearSelect.selectedIndex = i;
                        console.log(yearSelect.options[i])
                        break;
                    } else {
                        console.log('ko')
                    }
                }
            }

        }

    })
    .catch(error => console.error(error));


for (const element of container_menu_wrap_item) {
    element.onclick = function () {

        if (element.classList[0] === 'container_menu_wrap_PurchaseOrder') {
            document.querySelector('.container_menu_wrap_myUser_menu').style.display = 'none'
            console.log('k ok')

            if (element.classList[2] == 'container_menu_wrap_item_buyCheck') {
                for (const main_item of container_main_wrap_main) {
                    main_item.style.display = 'none'
                }
                document.querySelector('.container_main_order').style.display = 'block'
                console.log('yes')
            }
            if (element.classList[2] == 'container_menu_wrap_item_nofi') {
                for (const main_item of container_main_wrap_main) {
                    main_item.style.display = 'none'
                }
                document.querySelector('.container_main_Notification').style.display = 'flex'
                console.log('yes')
            }
            if (element.classList[2] == 'container_menu_wrap_item_XuShopee') {
                for (const main_item of container_main_wrap_main) {
                    main_item.style.display = 'none'
                }
                document.querySelector('.container_main_XuShopee').style.display = 'block'
                console.log('yes')
            }
        }
        else {
            document.querySelector('.container_menu_wrap_myUser_menu').style.display = 'block'
            if (element.classList[0] == 'container_menu_wrap_myUser_title' || element.classList[2] == 'item_file') {
                for (const main_item of container_main_wrap_main) {
                    main_item.style.display = 'none'
                }

                document.querySelector('.container_main_top').style.display = 'block'
                console.log('yes')
            }
            console.log('here')
            if (element.classList[2] == 'item_address') {
                for (const main_item of container_main_wrap_main) {
                    main_item.style.display = 'none'
                }
                console.log(1)
                document.querySelector('.container_main_address').style.display = 'block'
                console.log('yes')
            }
            if (element.classList[2] == 'item_password') {
                for (const main_item of container_main_wrap_main) {
                    main_item.style.display = 'none'
                }
                document.querySelector('.container_main_password').style.display = 'block'
                console.log('yes')
            }


        }
        for (const e of container_menu_wrap_item) {
            if (e.parentElement.classList == 'container_menu_wrap_myUser_menu') {
                e.style.color = 'rgba(0,0,0,.65)';
            }
            else {
                e.style.color = 'rgba(0,0,0,.87)';
            }
            console.log('á à')
        }
        element.style.color = '#ee4d2d'
    }
}


const container_main_order_title_item = document.querySelectorAll('.container_main_order_title_item')
for (const e of container_main_order_title_item) {
    e.onclick = function () {
        for (const e of container_main_order_title_item) {
            e.style.color = 'rgba(0,0,0,.8)'
            e.style.border = '0'
        }
        e.style.color = '#ee4d2d'
        e.style.borderBottom = '2px solid #ee4d2d'
        if (e.classList[1] == 'container_main_order_title_item_alls' || e.classList[1] == 'container_main_order_title_item_complete') {
            document.querySelector('.container_main_no ').style.display = 'none'
            document.querySelector('.container_main_order_main_item').style.display = 'block'


        }
        else {
            document.querySelector('.container_main_order_main_item').style.display = 'none'
            document.querySelector('.container_main_no ').style.display = 'flex'
        }
    }
}
const container_main_XuShopee_title_item = document.querySelectorAll('.container_main_XuShopee_title_item')
for (const e of container_main_XuShopee_title_item) {
    e.onclick = function () {
        for (const e of container_main_XuShopee_title_item) {
            e.style.color = 'rgba(0,0,0,.8)'
            e.style.border = '0'
        }
        e.style.color = '#ee4d2d'
        e.style.borderBottom = '2px solid #ee4d2d'
    }
}
const container_address_main_contact_update = document.querySelector('.container_address_main_contact_update')
const container_main_address_title_btn = document.querySelector('.container_main_address_title_btn')
const modal = document.querySelector('.modal')
container_address_main_contact_update.onclick = function () {
    modal.style.display = 'flex'
}
modal.onclick = function () {
    modal.style.display = 'none'
}
document.querySelector('.modal_footer_back').onclick = function () {
    modal.style.display = 'none'
}
document.querySelector('.modal_footer_ok').onclick = function () {
    modal.style.display = 'none'
}
document.querySelector('.modal_body').onclick = function (event) {
    event.stopPropagation();
}
document.querySelectorAll('.table_btn_edit')[1].onclick = function (event) {
    event.preventDefault()
}
