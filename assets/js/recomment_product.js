const category_item_list = document.querySelector('.container__main-category-item-list');
const btn_right = document.querySelector('.btn-right');
const btn_left = document.querySelector('.btn-left')
const shopee_category_list_wrap_item_more = document.querySelector('.shopee-category-list-wrap-item-more-title')
const item_open = document.querySelector('.shopee-category-list-wrap-item-more-body-open')
const page_number = document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')
const container__main_category_recommed_header_address = document.querySelector('.container__main-category-recommed-header-address span')
let page = localStorage.getItem('page_number_value');


document.querySelector('.container__main-category-recommed-panels-more-directional:first-child').onclick = function(){
    document.querySelector('.container__main-category-recommed-header-address-pre').click()
}
document.querySelector('.container__main-category-recommed-panels-more-directional:last-child').onclick = function(){
    document.querySelector('.container__main-category-recommed-header-address-next').click()
}

console.log(page)
for(const element of page_number){
    if(element.innerHTML == page){
        if(element.innerHTML >= 3){
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[5].style.display = 'flex'
        }
        else{
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[5].style.display = 'none'
    
        }
        if(element.innerHTML >= 5){
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[2].innerHTML = '...'
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[6].style.display = 'flex'

        }
        else{
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[2].innerHTML = '3'
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[6].style.display = 'none'
        }
        if(element.innerHTML >= 6){
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[7].style.display = 'flex'
        }
        else{
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[7].style.display = 'none'
    
        }
        if(element.innerHTML >= 7){
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[8].innerHTML = '9'
        }
        else{
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[8].innerHTML = '...'
    
        }
        for(const element of page_number){
            element.classList.remove('container__main-category-recommed-panels-more-number-item-active')
        }
        
        element.classList.add('container__main-category-recommed-panels-more-number-item-active')
        
    }
    if(page == 9){
        document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[8].innerHTML = '9'
        document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[8].style.display = 'flex'
        element.classList.add('container__main-category-recommed-panels-more-number-item-active')
    }
    
}



for(const element of page_number){
    element.onclick = function(){
        for(const element of page_number){
            element.classList.remove('container__main-category-recommed-panels-more-number-item-active')
            
        }
        element.classList.add('container__main-category-recommed-panels-more-number-item-active')
        const page_number_value = element.innerHTML
        localStorage.setItem('page_number_value', `${page_number_value}`);
        console.log(localStorage.getItem('page_number_value'));
        location.reload();
    }
}
page = localStorage.getItem('page_number_value')
console.log(page)


// fectch api


const item_recomment = 'list_recomment_item.json'
fetch(item_recomment)
    .then(function(response){
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function(shops){
        console.log(page)
        const items = document.querySelectorAll('.container__main-category-recommed-panels-item')
        const item_recomment_img =  document.querySelectorAll('.container__main-category-recommed-panels-item-top-background-img')
        const item_recomment_name = document.querySelectorAll('.container__main-category-recommed-panels-item-botton-name-main')
        console.log(shops[page-1].data.sections[0].data.item.length)
        for(let i =0 ; i < item_recomment_img.length; i++){
            if(i >= shops[page-1].data.sections[0].data.item.length){
                items[i].style.display = 'none'
                console.log(113)
            }else{
                
                item_recomment_img[i].src = `https://cf.shopee.vn/file/${shops[page-1].data.sections[0].data.item[i].image}`

            }
        }
        for(let i =0 ; i < item_recomment_name.length; i++){
            if(i < shops[page-1].data.sections[0].data.item.length){
                item_recomment_name[i].innerHTML = shops[page-1].data.sections[0].data.item[i].name
            }
        }

        const item_price = document.querySelectorAll('.container__main-category-recommed-panels-item-botton-cost')
        for(let i =0 ; i < item_price.length; i++){
            if(i < shops[page-1].data.sections[0].data.item.length){
                
                    item_price[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2').innerHTML = `${(shops[page-1].data.sections[0].data.item[i].price_min/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                
            }
            
        }

        const item_sold = document.querySelectorAll('.container__main-category-recommed-panels-item-botton-bought span')
        for(let i =0 ; i < item_sold.length; i++){
            if(i < shops[page-1].data.sections[0].data.item.length){
                if(i < shops[page-1].data.sections[0].data.item.length){
                    const sold = shops[page-1].data.sections[0].data.item[i].historical_sold
                    if (sold/1000 > 1){
                        item_sold[i].innerHTML = `Đã bán ${(sold/1000).toFixed(1)}k`
                    }else{
                        item_sold[i].innerHTML = `Đã bán ${sold}`
                    }
                }
            }
        }

        const item_discount = document.querySelectorAll('.fs-content-image-list-item-top-right-name span:first-child')
        for(let i =0 ; i < item_discount.length; i++){
            if(i < shops[page-1].data.sections[0].data.item.length){
                if(shops[page-1].data.sections[0].data.item[i].show_discount == 0){
                    item_discount[i].parentElement.parentElement.parentElement.style.display = 'none'
                }
                else{
                    item_discount[i].innerHTML = `${shops[page-1].data.sections[0].data.item[i].show_discount}%`
                }
            }
        }

        const item_liked_label = document.querySelectorAll('.container__main-category-recommed-panels-item-top-like')
        for(let i =0 ; i < item_liked_label.length; i++){
            if(i < shops[page-1].data.sections[0].data.item.length){
                if(shops[page-1].data.sections[0].data.item[i].show_shopee_verified_label == false){
                    item_liked_label[i].style.display = 'none'
                }
            }
            
        }

        const item_location = document.querySelectorAll('.container__main-category-recommed-panels-item-location')
        for(let i =0 ; i < item_location.length; i++){
            if(i < shops[page-1].data.sections[0].data.item.length){
                if(shops[page-1].data.sections[0].data.item[i].shop_location !== ''){
                    item_location[i].innerHTML = shops[page-1].data.sections[0].data.item[i].shop_location
                }
            }
            
        }

       
    })