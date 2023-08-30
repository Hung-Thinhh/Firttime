

const onmouse = function (x, y) {
    x.onmouseenter = function () {
        y.classList.remove('mouseleave')
        setTimeout(function () {
            y.style.scale = 1;
        }, 0)
    }
    x.onmouseleave = function () {
        y.classList.add('mouseleave')
        setTimeout(function () {
            y.style.scale = 0;
        }, 200)

    }
}
const header_language = document.querySelector('.header__navbar-item--has-language')
const header__navbar_language = document.querySelector('.header__navbar-language')
const header__cart = document.querySelector('.header__cart-wrap')
const header__cart_list = document.querySelector('.header__cart-list')
const language = document.querySelector('.header__navbar-language-item--viewed span')
const header__navbar_language_list = document.querySelector('.header__navbar-language-list')

// onmouse(header__navbar_item_notify,header__notify)
onmouse(header_language, header__navbar_language)
onmouse(header__cart, header__cart_list)

header__navbar_language_list.onmouseenter = function () {
    language.style.color = 'black'
}
language.onmouseenter = function () {
    language.style.color = '#fa6834'
}
language.onmouseleave = function () {
    language.style.color = 'black'
}
header__navbar_language_list.onmouseleave = function () {
    language.style.color = '#fa6834'
}


const logout_btn = document.querySelector('.logout_btn a')
logout_btn.onclick = async function (e) {
    e.preventDefault()
    console.log('click')
    const currentUrl = new URL(window.location.href);
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    };
    const response = await fetch('/logOut', requestOptions)
    console.log(response.status)
    if (response.status == '200') {
        localStorage.setItem('is_from_login', false);
        window.location.reload();
        console.log('logout successful')
    }

}