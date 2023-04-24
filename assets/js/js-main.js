const  header__navbar_item_notify = document.querySelector('.header__navbar-item--has-notify')
const header__notify = document.querySelector('.header__notify')
const header_language = document.querySelector('.header__navbar-item--has-language')
const header__navbar_language = document.querySelector('.header__navbar-language')
const header__cart = document.querySelector('.header__cart-wrap')
const header__cart_list = document.querySelector('.header__cart-list')
const header__navbar_language_list = document.querySelector('.header__navbar-language-list')
const vn = document.querySelector('.language-vn')
const en = document.querySelector('.language-en')
const language = document.querySelector('.header__navbar-language-item--viewed span')
const item = document.querySelector('.container__main-category-recommed-panels-wrap ').children
const onmouse = function(x,y){
    x.onmouseenter = function(){
        y.classList.remove('mouseleave')
        setTimeout(function(){
            y.style.scale = 1;
        },0)
    }
    x.onmouseleave = function(){
        y.classList.add('mouseleave')
        setTimeout(function(){
            y.style.scale = 0;
        },200)
        
    }
}
// onmouse(header__navbar_item_notify,header__notify)
onmouse(header_language,header__navbar_language)
onmouse(header__cart,header__cart_list)

header__navbar_language_list.onmouseenter = function(){
    language.style.color = 'black'
}
language.onmouseenter = function(){
    language.style.color = '#fa6834'
}
language.onmouseleave = function(){
    language.style.color = 'black'
}
header__navbar_language_list.onmouseleave = function(){
    language.style.color = '#fa6834'
}





const banner_list = document.querySelector('.banner-top-full__main-list')
const banner_btn_Right = document.querySelector('.main-button-wrap-right')
const banner_btn_Left = document.querySelector('.main-button-wrap-left')
function Move_Item_Time(main_list,btn_Right,btn_Left,listDots){
    let position = 0;
    let nums = 0;
    let percent_position_max = (100 / main_list.children.length).toFixed(6) - 100 
    let percent_position_min = (100 / main_list.children.length)
    btn_Right.onclick = function(){
        if(position<= percent_position_max){
            main_list.classList.remove(`dot${main_list.children.length-1}`)
            position = 0;
            nums = 0;
            main_list.classList.add(`dot${nums}`)
            main_list.style.transform = `translateX(${position}%) translateX(0px)`
            main_list.style.transition = 'all 500ms ease 0s'

        }else{
            main_list.classList.add(`dot${nums+1}`)
            main_list.classList.remove(`dot${nums}`)
            position-=percent_position_min;
            nums +=1
            main_list.style.transform = `translateX(${position}%) translateX(0px)`
            main_list.style.transition = 'all 500ms ease 0s'
        }
        dots()
    } 

    btn_Left.onclick = function(){
        if(position==0){
            position = percent_position_max ;
            nums = main_list.children.length-1
            main_list.classList.add(`dot${nums}`)
            main_list.style.transform = `translateX(${position}%) translateX(0px)`
            main_list.style.transition = 'all 500ms ease 0s'
        }
        else if(main_list.classList.contains('dot1')){
            position = 0;
            nums = 0;
            main_list.classList.remove(`dot${nums+1}`)
            main_list.classList.add(`dot${nums}`)
            main_list.style.transform = `translateX(0%) translateX(0px)`
            main_list.style.transition = 'all 500ms ease 0s'
        }
        else{
            main_list.classList.add(`dot${nums-1}`)
            main_list.classList.remove(`dot${nums}`)
            nums -= 1;
            position+=percent_position_min;
            main_list.style.transform = `translateX(${position}%) translateX(0px)`
            main_list.style.transition = 'all 500ms ease 0s'
        }
        dots()
    } 
    const list_dots = document.querySelector(`${listDots}`).children
    // console.log(list_dots)
    function loopRemove_Dot(group_dots,a){
        for(let i=0; i<group_dots.length;i++){
            if(i==a){
                group_dots[i].classList.add('stardust-carousel__dot-active')
            }
           
            else{
                group_dots[i].classList.remove('stardust-carousel__dot-active')
            }
        }
    }
    function dots(){
        for(let i=0; i<list_dots.length;i++){
            if(main_list.classList.contains(`dot${i}`)){ 
                loopRemove_Dot(list_dots,i)
            }
        }
        
    }

    setInterval(function(){
        btn_Right.click()
    },5000)
}
// setTimeout(function(){
//     Move_Item_Time(banner_list,banner_btn_Right,banner_btn_Left,'.stardust-carousel__dots')
// },3000)
Move_Item_Time(banner_list,banner_btn_Right,banner_btn_Left,'.stardust-carousel__dots')





const category_mall_left_list = document.querySelector('.container__main-category-mall-content-left-list')
const category_mall_left_btn_Left = document.querySelector('.category-mall-button-wrap-left')
const category_mall_left_btn_Right = document.querySelector('.category-mall-button-wrap-right')
Move_Item_Time(category_mall_left_list,category_mall_left_btn_Right,category_mall_left_btn_Left,'.category-mall-stardust-carousel__dots')




const category_list = document.querySelector('.container__main-category-item-list')
const category_btn_right = document.querySelector('.category_btn_right')
const category_btn_left = document.querySelector('.category_btn_left')
category_btn_right.onclick = function(){
    category_list.style.transform = 'translate(-28.5%,0%)'
}
category_btn_left.onclick = function(){
    category_list.style.transform = 'translate(0%,0%)'
}
const category_mall_content_right_list = document.querySelector('.container__main-category-mall-content-right-ul')
const category_mall_content_right_btn_right = document.querySelector('.category-mall_btn_right')
const category_mall_content_right_btn_left = document.querySelector('.category-mall_btn_left')
category_mall_content_right_btn_right.onclick = function(){
    category_mall_content_right_list.style.transform = 'translate(-37%,0%)'
}
category_mall_content_right_btn_left.onclick = function(){
    category_mall_content_right_list.style.transform = 'translate(0%,0%)'
}


const sale_list = document.querySelector('.container__main-category-fs-content-image-list')
const sale_btn_right = document.querySelector('.sale_btn_right')
const sale_btn_left = document.querySelector('.sale_btn_left')

function Move_list_item(list_full,btn_right,btn_left) {
    const list_full_position_max = (100 / (list_full.children.length/6)) -100;
    const list_full_position_min = (100 / (list_full.children.length/6) );
    let position_sale = 0;
    btn_right.onclick = function(){

        if(position_sale < list_full_position_max + list_full_position_min +1){
            position_sale -= list_full_position_min 
            list_full.style.transform = `translate(${position_sale}%,0%)`
            btn_left.style.display = 'flex'
            btn_right.style.display = 'none'
        }else{
            position_sale -= list_full_position_min 
            list_full.style.transform = `translate(${position_sale}%,0%)`
            btn_right.style.display = 'flex'
            btn_left.style.display = 'flex'
        }

    }
    btn_left.onclick = function(){
        if(position_sale==0){
            position_sale=0
            list_full.style.transform = `translate(${position_sale}%,0%)`
            btn_right.style.display = 'flex'
            btn_left.style.display = 'none'
        }
        else{
            if(position_sale == list_full_position_min*(-1)){
                position_sale+=list_full_position_min
                list_full.style.transform = `translate(${position_sale}%,0%)`
                btn_right.style.display = 'flex'
                btn_left.style.display = 'none'
            }
            else{
                position_sale+=list_full_position_min
                list_full.style.transform = `translate(${position_sale}%,0%)`
                btn_right.style.display = 'flex'
                btn_left.style.display = 'flex'
            }

        }
    }

}
Move_list_item(sale_list,sale_btn_right,sale_btn_left)


const category_top_search_list = document.querySelector('.container__main-category-top-search-content-ul')
const category_top_search_btn_right = document.querySelector('.top-search_btn_right')
const category_top_search_btn_left = document.querySelector('.top-search_btn_left')
Move_list_item(category_top_search_list,category_top_search_btn_right,category_top_search_btn_left)
// clock

const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");

const last = new Date(0);
last.setUTCHours(-1);

const tickState = true;

function updateTime() {
  const now = new Date();

  const lastHours = last.getHours().toString();
  const nowHours = now.getHours().toString();
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours);
  }

  const lastMinutes = last.getMinutes().toString();
  const nowMinutes = now.getMinutes().toString();
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes);
  }

  const lastSeconds = last.getSeconds().toString();
  const nowSeconds = now.getSeconds().toString();
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds);
  }

//   last = now;
}



function updateContainer(container, newTime) {
  const time = newTime.split("");

  if (time.length === 1) {
    time.unshift("0");
  }

  const first = container.firstElementChild;
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0]);
  }

  const last = container.lastElementChild;
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1]);
  }
}

function updateNumber(element, number) {
  //element.lastElementChild.textContent = number
  const second = element.lastElementChild.cloneNode(true);
  second.textContent = number;

  element.appendChild(second);
  element.classList.add("move");

  setTimeout(function () {
    element.classList.remove("move");
  }, 300);
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 300);
}

setInterval(updateTime, 100);


function get_item(){
    for(const element of item){
        element.onclick = function(){
            const iditem = element.id
            localStorage.setItem('myid', `${iditem}`);
            console.log(iditem)
            const price = element.querySelector('.container__main-category-recommed-panels-item-botton-cost-name2').innerHTML
            localStorage.setItem('myprice', `${price}`);
            console.log(price)
            const productId = element.id;
            
        }
    }
}
get_item();
function renderProductData(data) {
    console.log(data)
}

document.querySelector('.container__main-category-recommed-panels-more-btn').onclick = function(){
    const page_number_value = 2
        localStorage.setItem('page_number_value', `${page_number_value}`);
}


