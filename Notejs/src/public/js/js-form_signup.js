
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement
        }
    }



    let selectorRules = {};
    function Validate(inputElement, rule) {
        const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        let errorMessage;


        const rules = selectorRules[rule.selector];
        const btn_login = document.querySelector('.btn-login');

        for (const element of rules) {
            errorMessage = element(inputElement.value);
            if (errorMessage) break
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
            btn_login.style.opacity = 0.8;
            btn_login.style.cursor = 'not-allowed';
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
            btn_login.style.opacity = 1;
            btn_login.style.cursor = 'pointer';
            btn_login.onclick = async function (e) {
                e.preventDefault();
                console.log('ok')
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'status': 'checkAccount',
                        'PhoneNumber': `${document.querySelector('#phone-number').value}`,
                        'LoginName': `${document.querySelector('#userName').value}`,
                    })
                };
                const response = await fetch('/post-signup', requestOptions)
                console.log(response.status)
                if (response.status == '200') {
                    // document.querySelector('.form-erro').classList.remove('displayed')
                    document.querySelector('#form-2').classList.remove('displayed')
                    document.querySelector('#form-1').classList.add('displayed')

                }
                else if (response.status == '203') {
                    document.querySelector('.form-erro').classList.remove('displayed')
                    document.querySelector('.error-title').innerHTML = 'Tên đăng nhập này đã được sử dụng, vui lòng thử lại'

                }
                else if (response.status == '201') {
                    document.querySelector('.form-erro').classList.remove('displayed')
                    document.querySelector('.error-title').innerHTML = 'Số điện thoại và tên đăng nhập này đã được sử dụng, vui lòng thử lại'

                }
                else if (response.status == '202') {
                    document.querySelector('.form-erro').classList.remove('displayed')
                    document.querySelector('.error-title').innerHTML = 'Số điện thoại này đã được sử dụng, vui lòng thử lại'

                }

            }
            document.querySelector('.submid').onclick = async function (e) {
                e.preventDefault();

                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'status': 'CreateAccount',
                        'PhoneNumber': `${document.querySelector('#phone-number').value}`,
                        'LoginName': `${document.querySelector('#userName').value}`,
                        'password': `${document.querySelector('#password').value}`
                    })
                };
                const response = await fetch('/post-signup', requestOptions)
                console.log(response.status)
                if (response.status == '200') {

                    console.log('thành công')
                    document.querySelectorAll('.form-main')[1].classList.add('displayed')
                    document.querySelectorAll('.form-footer')[1].classList.add('displayed')
                    document.querySelector('.form-success').classList.remove('displayed')
                    document.querySelectorAll('.title')[1].innerHTML = 'Đăng ký thành công !';
                    document.querySelectorAll('.title')[1].style.textAlign = 'center';
                    const phone_value = document.querySelector('#phone-number').value;
                    const phone_output = document.querySelector('.phone-login span')
                    phone_output.innerHTML = phone_value.replace('0', '(+84)')
                    const seccons_success = document.querySelector('.seccons-success')
                    let i = 0;

                    const intr = setInterval(function () {
                        seccons_success.innerHTML = 9 - i + 's'
                        if (++i == 11) clearInterval(intr);

                    }, 1000)
                    setTimeout(() => {
                        document.querySelector('.btn-home a').click()
                    }, 10500);

                }

                // document.querySelector('.form-main').classList.add('displayed')
                // document.querySelector('.form-footer').classList.add('displayed')
                // document.querySelector('.form-success').classList.remove('displayed')
                // document.querySelector('.title').innerHTML = 'Đăng ký thành công !';
                // document.querySelector('.title').style.textAlign = 'center';
                // const phone_value = form_phoneNumber.value;
                // const phone_output = document.querySelector('.phone-login span')
                // phone_output.innerHTML = phone_value.replace('0', '(+84)')
                // const seccons_success = document.querySelector('.seccons-success')
                // let i = 0;

                // const intr = setInterval(function () {
                //     seccons_success.innerHTML = 9 - i + 's'
                //     if (++i == 11) clearInterval(intr);

                // }, 1000)
                // setTimeout(() => {
                //     document.querySelector('.btn-home a').click()
                // }, 10500);


            }
            const eye = document.querySelector('.eye')
            const eye1 = document.querySelector('.eye-icon1')
            const eye2 = document.querySelector('.eye-icon2')
            eye.onclick = function () {
                console.log(123)
                if (eye2.classList.contains('displayed')) {
                    eye2.classList.remove('displayed')
                    eye1.classList.add('displayed')
                    document.querySelector('#password').type = 'text'
                }
                else {
                    eye1.classList.remove('displayed')
                    eye2.classList.add('displayed')
                    document.querySelector('#password').type = 'password'
                }
            }


        }
        return !errorMessage;
    }
    const formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.querySelector('button').onclick = function (e) {
            e.preventDefault();

            let isFormValid = true;
            options.rules.forEach(function (rule) {
                const inputElement = formElement.querySelector(rule.selector);
                const isValid = Validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false;
                }
            });
            const enableInputs = formElement.querySelectorAll('[name]')

            if (isFormValid) {
                if (typeof options.onSubmid === 'function') {
                    const formValues = Array.from(enableInputs).reduce(function (values, input) {
                        values[input.name] = input.value
                        return values;
                    }, {})

                    options.onSubmid(formValues)
                }

            }


        }
        options.rules.forEach(function (rule) {

            const inputElement = formElement.querySelector(rule.selector);
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            if (inputElement) {
                // Xử lí khi blur ra ngoài
                inputElement.onblur = function () {
                    Validate(inputElement, rule)
                }
                // xử lí khi input vào
                inputElement.oninput = function () {
                    const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                    document.querySelector('.error-title').innerHTML = 'Số điện thoại này đã được sử dụng, vui lòng thử lại'
                    document.querySelector('.form-erro').classList.add('displayed')

                }
            }
        });
    }
}
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message
        }
    }
}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Email không đúng'
        }
    }
}
Validator.isPhone = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            return regex.test(value) ? undefined : 'Số điện thoại không hợp lệ'
        }
    }

}
Validator.isLenght = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {

            return value.length >= min ? undefined : `Phải nhập tối thiểu ${min} kí tự`
        }
    }
}
Validator.isConfirmation = function (selector, getConfirm, messgage) {
    return {
        selector: selector,
        test: function (value) {
            if (getConfirm() == '') {
                return 'Bạn phải nhập trước mật khẩu'
            } else {
                return value === getConfirm() ? undefined : messgage || 'Nhập sai mật khẩu'
            }
        }
    }
}



let windowObjectReference = null; // global variable
let previousURL; /* global variable that will store the
                    url currently in the secondary window */
function openRequestedSingleTab(url) {
    if (windowObjectReference === null || windowObjectReference.closed) {
        windowObjectReference = window.open(url, "SingleSecondaryWindowName");
    } else if (previousURL !== url) {
        windowObjectReference = window.open(url, "SingleSecondaryWindowName");
        /* if the resource to load is different,
           then we load it in the already opened secondary window and then
           we bring such window back on top/in front of its parent window. */
        windowObjectReference.focus();
    } else {
        windowObjectReference.focus();
    }
    previousURL = url;
    /* explanation: we store the current url in order to compare url
       in the event of another call of this function. */
}

const links = document.querySelectorAll("a[target='Đăng nhập - Tài khoản Google']") || document.querySelectorAll("a[target='Đăng nhập - Tài khoản Facebook')");
for (const link of links) {
    link.addEventListener(
        "click",
        (event) => {
            openRequestedSingleTab(link.href);
            event.preventDefault();
        },
        false
    );
}

// document.querySelector('.btn-login').onclick = function(){
//     document.querySelector('#password').classList.remove('displayed')
//     document.querySelector('#phone-number').classList.add('displayed')

// }
