const note_check_main = document.querySelectorAll('.note_check-main')
const cart_list_item_main = document.querySelectorAll('.cart_list_item_main')
const quantity_product_number = document.querySelectorAll('.quantity_product_number')
const lastPrice = document.querySelector('.buy_cart_price_main_price')
const voucherLink = document.querySelector('.cart_synthetic_voucherShopee_more')
const modal_footer = document.querySelector('.modal_footer')
const modal_footer_back = document.querySelector('.modal_footer_back')
const modal_footer_ok = document.querySelector('.modal_footer_ok')
const freeship = document.querySelectorAll('.freeship')

const buy_now = document.querySelector('.buy_now')
buy_now.onclick = function(){
    axios.get('https://shopee.vn/api/v4/search/search_suggestion?bundle=popsearch&limit=8&offset=0')
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
}



voucherLink.onclick = function(){
    modal.style.display = 'flex'
    console.log(112233)
}
modal.onclick = function(){
    modal.style.display = 'none'
}
modal_footer_back.onclick = function(){
    modal.style.display = 'none'
}
modal_footer_ok.onclick = function(){
    for(const element of freeship){
        if(element.classList[1] == 'doneCheck'){
            for(const element of discount){
                if(element.classList[1] == 'doneCheck'){
                    document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `
                    <span style = ' margin-right : 15px; border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span> 
                    <span style = ' border: 2px solid #ee4d2d;'>Giảm Giá & Hoàn Xu</span>`
                    console.log(element.classList[1])
                    break;
                }
                else{
                    document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span style = 'border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span>`
                    console.log(element.classList[1])
                }
            }
            break;
        }
        else{
            for(const element of discount){
                if(element.classList[1] == 'doneCheck'){
                    for(const element of freeship){
                        if(element.classList[1] == 'doneCheck'){
                            document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `
                            <span style = ' margin-right : 15px; border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span> 
                            <span style = ' border: 2px solid #ee4d2d;'>Giảm Giá & Hoàn Xu</span>`
                            console.log(element.classList[1])
                            break;
                        }
                        else{
                            document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span style = ' border: 2px solid #ee4d2d;' >Giảm Giá & Hoàn Xu</span>`
                        }
                    }
                    break;
                }
                else{
                    document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span>Chọn hoặc nhập mã</span>`
                }
            }
        }
    }
    
    modal.style.display = 'none'


}
modal__body_detailed.onclick = function(event){
    event.stopPropagation();
}
modal_footer.onclick = function(event){
    event.stopPropagation();
}

function SumPrice(){
    let price = 0
    let sum_product = 0 
    for(const element of document.querySelectorAll('.cart_list_item_main')){
        if(getComputedStyle(element.querySelector('.note_check-main')).backgroundColor !== 'rgb(255, 255, 255)'){
            
            // console.log(parseInt(element.querySelector('.cart_list_item_main_total_price span').innerHTML.replace('₫', '').replace(".", "")))
            price += parseInt(element.querySelector('.cart_list_item_main_total_price span').innerHTML.replace('₫', '').replace(".", ""))
            sum_product +=1
        }
    }
    console.log(price)
    document.querySelector('.buy_cart_price_main_title span').innerHTML = sum_product
    lastPrice.innerHTML = `₫${(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
}

// SumPrice()
for(const element of note_check_main){
    let check = true
    let allcheck = true
    let topcheck = true
    element.onclick = function(){
        // if(check){
            
            if((element == document.querySelector('.note').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)') || (element == document.querySelector('.buy_cart').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)') ){
                for(const e of note_check_main){
                    
                        e.style.backgroundColor = '#ee4d2d'
                       
                        allcheck = false
                        topcheck = false
                        // check = false
                        console.log(topcheck)
                }
                // console.log(allcheck)
                
            }
            else if((element == document.querySelector('.note').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor !== 'rgb(255, 255, 255)') || (element == document.querySelector('.buy_cart').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor !== 'rgb(255, 255, 255)') ){
                for(const e of note_check_main){
                        e.style.backgroundColor = '#fff'
                        topcheck = true
                        allcheck = true
                        console.log(topcheck)

                        // check = true
                }
            }
            else if(element.parentElement.parentElement.parentElement.parentElement.classList == 'cart_list_item'){
                console.log(getComputedStyle(element).backgroundColor);
                
                if(getComputedStyle(element).backgroundColor === '#fff' || getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)'){
                    element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[0].style.backgroundColor = '#ee4d2d'

                    element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[1].style.backgroundColor = '#ee4d2d'
                    // if(allcheck){
                    //     document.querySelector('.note').querySelector('.note_check-main').style.backgroundColor = '#ee4d2d'
                    //     document.querySelector('.buy_cart').querySelector('.note_check-main').style.backgroundColor = '#ee4d2d'
                    //     allcheck = false

                    // }
                    topcheck = false
                    // allcheck = false
                    // check = false
                    console.log('ok ok')
                    console.log(topcheck)

                }
                else{
                    element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[0].style.backgroundColor = '#fff'

                    element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[1].style.backgroundColor = '#fff'

                    document.querySelector('.note').querySelector('.note_check-main').style.backgroundColor = '#fff'
                    document.querySelector('.buy_cart').querySelector('.note_check-main').style.backgroundColor = '#fff'
                    allcheck = true
                    topcheck = true
                    // check = true
                    console.log(topcheck)
                    console.log('k ok')
                    console.log(element.style.backgroundColor)

                }
            }
            else if(element.parentElement.parentElement.parentElement.classList == 'cart_synthetic_Shopee_Xu'){
                if(getComputedStyle(element).backgroundColor == '#fff' || getComputedStyle(element).backgroundColor == 'rgb(255, 255, 255)'){
                    element.style.backgroundColor = '#ee4d2d'
                    document.querySelector('.down_Xu').style.color = '#ee4d2d'
                }
                else{
                    element.style.backgroundColor = '#fff'
                    document.querySelector('.down_Xu').style.color = '#d0d0d0'

                }
            }
            SumPrice()

            
        // }else{
        //     element.style.backgroundColor = '#fff'
        //     check = true
        //     topcheck = true
        // }
    }
}
for(const element of cart_list_item_main){
    let check = true
    element.querySelector('.cart_list_item_main_classify_main').onclick = function(){
        if(check){
            element.querySelector('.cart_list_item_main_classify_more_wrap').style.display = 'flex'
            check = false
        }else{
            element.querySelector('.cart_list_item_main_classify_more_wrap').style.display = 'none'
            check = true
        }
        console.log(check)
    }
}
function select_color(){
    for(const color_item of select_color_item){
        color_item.onclick = function(){
            for(const i of select_color_item){
                if(i !== color_item){
                    i.classList.remove('selected')
                    i.querySelector('.select_color_item_active').style.display = 'none'
                }else{
                    if(!color_item.classList.contains('selected')){
                        color_item.classList.add('selected')
                        color_item.querySelector('.select_color_item_active').style.display = 'block'
                    }
                    else{
                        color_item.classList.remove('selected')
                        color_item.querySelector('.select_color_item_active').style.display = 'none'
                    }

                }
            }
            
        }
    }
}
select_color()
function number_of_products(){
    for(let element of quantity_product_number){
        const adjust_reduce = element.querySelector('.quantity_product_adjust-reduce')
        const adjust_increase = element.querySelector('.quantity_product_adjust-increase')
        const quantity_product_value = element.querySelector('.quantity_product_value')

        adjust_reduce.onclick = function(){
            if(quantity_product_value.innerHTML !== "1"){
                quantity_product_value.innerHTML = parseInt(quantity_product_value.innerHTML) - 1
                const price_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_price span')
                
                const price_total_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_total_price span')
                price_total_item.innerHTML = `₫${(parseInt(price_total_item.innerHTML.replace('₫', '').replace(".", "")) - parseInt(price_item.innerHTML.replace('₫', '').replace(".", ""))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                console.log(price_total_item.innerHTML)

            }
        }
        adjust_increase.onclick = function(){
            if(quantity_product_value.innerHTML != 50){
                quantity_product_value.innerHTML = `${parseInt(quantity_product_value.innerHTML) + 1}`
                const price_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_price span')
                
                const price_total_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_total_price span')
                price_total_item.innerHTML = `₫${(parseInt(price_item.innerHTML.replace('₫', '').replace(".", "")) * parseInt(quantity_product_value.innerHTML)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                console.log(price_total_item.innerHTML)
            }
            console.log(123)
        }
    }
}
number_of_products()



for(const element of freeship){
    element.onclick = function(){
        for(const element of freeship){
            element.querySelector('div').style.border = '0px'
            element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
            // element.classList.remove('doneCheck')

        }
        if(element.classList[1] == 'doneCheck'){
            element.querySelector('div').style.border = '0px solid #ee4d2d'
            element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
            element.classList.remove('doneCheck')
        }
        else{
            element.querySelector('div').style.border = '1px solid #ee4d2d'
            element.querySelector('.freeship_info_check').style.backgroundColor = '#ee4d2d'
            element.classList.add('doneCheck')
        }
        
    }
}
const discount = document.querySelectorAll('.discount')
for(const element of discount){
    element.onclick = function(){
        for(const element of discount){
            element.querySelector('div').style.border = '0px'
            element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
            // element.classList.remove('doneCheck')
        }
        if(element.classList[1] == 'doneCheck'){
            element.querySelector('div').style.border = '0px solid #ee4d2d'
            element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
            element.classList.remove('doneCheck')
        }
        else{
            element.querySelector('div').style.border = '1px solid #ee4d2d'
            element.querySelector('.freeship_info_check').style.backgroundColor = '#ee4d2d'
            element.classList.add('doneCheck')
        }
    }
}

