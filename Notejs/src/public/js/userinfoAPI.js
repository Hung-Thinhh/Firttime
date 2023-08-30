const is_from_login = localStorage.getItem('is_from_login');
const header__navbar_item__has_john = document.querySelector('.header__navbar-item--has-john')
const header__navbar_user = document.querySelector('.header__navbar-user')

if (is_from_login == 'true') {
    console.log('ok hahahaah')
    document.querySelectorAll('.header__navbar-item--separate')[1].style.display = 'none';

    // user name
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

                document.querySelector('.header__navbar-user-name').innerHTML = user.LoginName
            }


        })
        .catch(error => console.error(error));
    // item login-signup
    header__navbar_item__has_john.style.display = 'none';
    header__navbar_user.style.display = 'inline-flex'

    //item notify
    document.querySelector('.header__notify-header').style.display = 'flex';
    document.querySelector('.header__notify-list').style.display = 'flex';
    document.querySelector('.header__notify-footer-btn').style.display = 'flex';
    document.querySelector('.header__notify_img_no-login').style.display = 'none';
    document.querySelector('.header__notify-footer-btn-noLogin').style.display = 'none';

    //item cart
    document.querySelector('.header__cart-list').classList.remove('header__cart-list--no-cart')
    document.querySelector('.header__cart-notice').style.display = 'flex';


}


// const header__navbar_logout = document.querySelectorAll('.header__navbar-user-list')[2]
// header__navbar_logout.onclick = function () {
//     localStorage.setItem('is_from_login', false);
//     // window.location.href = '/index';

// }