

function Validator(options) {
    function getParent(element, selector){
        while (element.parentElement){
            if (element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement
        }
    }



    let selectorRules={};
    function Validate(inputElement, rule){
        const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        let errorMessage ;
        
        
        const rules = selectorRules[rule.selector];
        const btn_login = document.querySelector('.btn-login');
        const form_password = document.querySelector('#password');
        const form_phoneNumber = document.querySelector('#phone-number');

        for(const element of rules){
            errorMessage = element(inputElement.value);
            if(errorMessage) break
        }
        if(errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
            
        }else{
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
            
            btn_login.onclick = function(e){
                e.preventDefault();
                
                
            }
            
            
            const eye = document.querySelector('.eye')
            const eye1 = document.querySelector('.eye-icon1')
            const eye2 = document.querySelector('.eye-icon2')
            eye.onclick = function(){
                console.log(123)
                if(eye2.classList.contains('displayed')){
                    eye2.classList.remove('displayed')
                    eye1.classList.add('displayed')
                    document.querySelector('#password').type = 'text'
                }
                else{
                    eye1.classList.remove('displayed')
                    eye2.classList.add('displayed')
                    document.querySelector('#password').type = 'password'
                }
            }
            

        }
        return !errorMessage ;
    }
    const formElement = document.querySelector(options.form);
    if(formElement){  
        formElement.querySelector('button').onclick = function(e){
            e.preventDefault();
            
            let isFormValid = true;
            options.rules.forEach(function(rule) {
                const inputElement = formElement.querySelector(rule.selector);
                const isValid = Validate(inputElement, rule)
                if(!isValid){
                    isFormValid = false;
                }
            });
            const enableInputs = formElement.querySelectorAll('[name]')
            
            if(isFormValid){
                // if(typeof options.onSubmid === 'function'){
                //     const formValues = Array.from(enableInputs).reduce(function(values, input){
                //         values[input.name] = input.value
                //         return values;
                //     },{})
                    
                //     options.onSubmid(formValues)   
                // }
                
            }
            

        }
        options.rules.forEach(function(rule) {

            const inputElement = formElement.querySelector(rule.selector);
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }
            if(inputElement){
                // Xử lí khi blur ra ngoài
                inputElement.onblur = function(){
                    Validate(inputElement, rule)
                    getParent(inputElement, options.formGroupSelector).classList.remove('oninput')

                }
                // xử lí khi input vào
                // inputElement.oninput = function(){
                //     const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                //     errorElement.innerText = '';
                //     getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                // }
                inputElement.onclick = function(){
                    const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                    getParent(inputElement, options.formGroupSelector).classList.add('oninput')
                }
            }
        });
    }
}
Validator.isRequired = function(selector,message) {
    return {
        selector: selector,
        test: function(value){
            return  value.trim() ? undefined : message
        }
    }
}
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value){
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Email không đúng'
        }
    }
}
Validator.isPhone = function(selector) {
    return {
        selector: selector,
        test: function(value){
            const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            return regex.test(value) ? undefined : 'Số điện thoại không hợp lệ'
        }
    }

}
Validator.isLenght = function(selector, min) {
    return {
        selector: selector,
        test: function(value){
            
            return value.length >= min  ? undefined : `Phải nhập tối thiểu ${min} kí tự`
        }
    }
}
Validator.isConfirmation = function(selector, getConfirm,messgage) {
    return {
        selector: selector,
        test: function(value){
            if(getConfirm()==''){
                return 'Bạn phải nhập trước mật khẩu'
            }else{
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
