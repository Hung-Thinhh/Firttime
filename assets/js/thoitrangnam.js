const category_item_list = document.querySelector('.container__main-category-item-list');
const btn_right = document.querySelector('.btn-right');
const btn_left = document.querySelector('.btn-left')
const shopee_category_list_wrap_item_more = document.querySelector('.shopee-category-list-wrap-item-more-title')
const item_open = document.querySelector('.shopee-category-list-wrap-item-more-body-open')
const page_number = document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')
const container__main_category_recommed_header_address = document.querySelector('.container__main-category-recommed-header-address span')
let page = localStorage.getItem('page_number_value');
container__main_category_recommed_header_address.innerHTML = page
if(page > 1){
    document.querySelector('.container__main-category-recommed-header-address-pre').classList.remove('recommed-header-address-NotActive')
    document.querySelector('.container__main-category-recommed-header-address-pre').onclick = function(){
        for(const element of page_number){
            if(container__main_category_recommed_header_address.innerHTML - 1 == element.innerHTML){
                element.click();
            }
        }
    }
   
}
if(page<9){
    document.querySelector('.container__main-category-recommed-header-address-next').onclick = function(){
        for(const element of page_number){
            if(container__main_category_recommed_header_address.innerHTML  == element.innerHTML - 1){
                element.click();
            }
        }
    }
}
else{
    document.querySelector('.container__main-category-recommed-header-address-next').classList.add('recommed-header-address-NotActive')

}

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
btn_right.onclick = function(){
    category_item_list.style.transform = 'translate(-1200px, 0px)'
}
btn_left.onclick = function(){
    category_item_list.style.transform = 'translate(0px, 0px)'
}
function open_category(a,b){
    let more_open = 0;
    a.onclick = function(){
        if(more_open == 0){
            b.style.display = 'grid'
            more_open = 1;
        }
        else{
            b.style.display = 'none'
            more_open = 0
        }
    }
}
open_category(shopee_category_list_wrap_item_more,item_open);
for(let i = 0; i < document.querySelectorAll('.shopee-checkbox__control-more').length; i++){
    open_category(document.querySelectorAll('.shopee-checkbox__control-more')[i],document.querySelectorAll('.shopee-filter-group-body-item-open')[i])
}

function checkbox_item(a,b){
    let more_open = 0;
    a.onclick = function(){
        if(more_open == 0){
            b.style.display = 'block'
            more_open = 1;
        }
        else{
            b.style.display = 'none'
            more_open = 0
        }
    }
}
for(let i = 0; i < document.querySelectorAll('.shopee-checkbox__box').length; i++){
    checkbox_item(document.querySelectorAll('.shopee-checkbox__box')[i],document.querySelectorAll('.fa-check')[i])
}
function select_tab(a){
    a.onclick = function(){
        for(const element of document.querySelectorAll('.container__main-category-recommed-header-tab-item')){
            element.classList.remove('container__main-category-recommed-header-tab-item-active')
        }
        setTimeout(function(){
            a.classList.add('container__main-category-recommed-header-tab-item-active')
        },100)
    }
}
for(let i = 0; i < document.querySelectorAll('.container__main-category-recommed-header-tab-item').length-1; i++){
    select_tab(document.querySelectorAll('.container__main-category-recommed-header-tab-item')[i])
}
const price_more = document.querySelectorAll('.container__main-category-recommed-header-tab-item-more-list')
for(const element of price_more){
    element.onclick = function(){
        element.parentElement.parentElement.querySelector('span').innerHTML = element.innerHTML
        element.parentElement.parentElement.querySelector('span').style.color = '#ee4d2d'
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
const img_batchList = 'Thoitrangnam_batchList.json'
fetch(img_batchList)
    .then(function(response){
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function(shops){
        
        const batchList_img =  document.querySelectorAll('.banner-top-full__main-img-item ')

        
        for(let i =0 ; i < batchList_img.length; i++){
            
            batchList_img[i].src = shops.data.space_banners[0].banners[i].image_url

        }
       
    })
    const popular_items = 'Thoitrangnam_popular.json'
    fetch(popular_items)
        .then(function(response){
            return response.json()//json này trả về là 1 promise và response đã ở dạng JS
        })
        .then(function(shops){
            
            const popular_item1 = document.querySelectorAll('.container__main-category-fs-content-image-list')[0].querySelectorAll('.container__main-category-fs-content-image-list-item')
            const popular_item2 = document.querySelectorAll('.container__main-category-fs-content-image-list')[1].querySelectorAll('.container__main-category-fs-content-image-list-item')
            
            for(let i =0 ; i < popular_item1.length-1; i++){
                
                popular_item1[i].querySelector('.fs-content-image-list-item-inline-img-main').src = `https://cf.shopee.vn/file/${shops[0].data.popular_collection_list[0].collection_list[i].img}`
                popular_item1[i].querySelector('.fs-content-image-list-item-botton-deal-main').innerHTML = shops[0].data.popular_collection_list[0].collection_list[i].title
                popular_item1[i].querySelector('.fs-content-image-list-item-botton-deal-hot').innerHTML = `₫${(shops[0].data.popular_collection_list[0].collection_list[i].normal_item_price_min/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`

            }
            for(let i =0 ; i < popular_item2.length-1; i++){
                
                popular_item2[i].querySelector('.fs-content-image-list-item-inline-img-main').src = `https://cf.shopee.vn/file/${shops[0].data.popular_collection_list[1].collection_list[i].img}`
                popular_item2[i].querySelector('.fs-content-image-list-item-botton-deal-main').innerHTML = shops[0].data.popular_collection_list[1].collection_list[i].title
                popular_item2[i].querySelector('.fs-content-image-list-item-botton-deal-hot').innerHTML = `₫${(shops[0].data.popular_collection_list[1].collection_list[i].normal_item_price_min/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`

            }
           
        })
const img_shop = 'Thoitrangnam_officeShops.json'
fetch(img_shop)
    .then(function(response){
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function(shops){
        
        const category_list_group_img_item =  document.querySelectorAll('.category-list-group-img-item')

        
        for(let i =0 ; i < category_list_group_img_item.length-1; i++){
            
            category_list_group_img_item[i].src = `https://cf.shopee.vn/file/${shops[0].data.official_shops[i].logo_pc}`

        }
       
    })

const item_recomment = 'test10.json'
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
                if(shops[page-1].data.sections[0].data.item[i].price_min !== shops[page-1].data.sections[0].data.item[i].price_max){
                    item_price[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2').innerHTML = `₫${(shops[page-1].data.sections[0].data.item[i].price_min/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}-₫${(shops[page-1].data.sections[0].data.item[i].price_max/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                    item_price[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name1').style.display = 'none'
                }
                else{
                    item_price[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2').innerHTML = `${(shops[page-1].data.sections[0].data.item[i].price_min/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                }
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