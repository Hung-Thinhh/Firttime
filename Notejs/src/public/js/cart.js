


async function getCart() {
    await fetch('/api/Get_cart_item', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {

            console.log(data.cart);
            const carts = data.cart
            let listcartitem = ''
            for (let j = 0; j < carts.length; j++) {
                console.log(carts[j])
                let cartitem = `<div class="cart_list_item">
                <div class="cart_list_item_shop">
                    <div class="note_check">
                        <label for="">
                            <input class="check" type="checkbox" name="" id="">
                            <div class="note_check-main">
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </label>
                    </div>
                    <div class="cart_list_item_liked">
                        <span>Yêu thích+</span>
                    </div>
                    <div class="cart_list_item_shop_name">
                        ${carts[j][0]}
                    </div>
                    <button class="chat-shop">
                        <i class="fa-solid fa-message"></i>
                    </button>
                </div>`

                for (let i = 0; i < carts[j][1].length; i++) {
                    cartitem += `
                    
                    <div class="cart_list_item_main">
                        <div class="note_check">
                            <label for="">
                                <input class="check" type="checkbox" name="" id="">
                                <div class="note_check-main">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                            </label>
                        </div>
                        <div class="cart_list_item_main_info">
                            <div class="cart_list_item_main_info_img">
                                <a href="">
                                    <div class="image_info" style="background-image:url(${carts[j][1][i].image})"></div>
                                </a>
                            </div>
                            <div class="cart_list_item_main_info_title">
                                <a href="${carts[j][1][i].link_product}">
                                    ${carts[j][1][i].product_name}
    
                                </a>
                                <div class="cart_list_item_voucher">
    
                                </div>
                            </div>
                        </div>
                        <div class="cart_list_item_main_classify">
                            <div class="cart_list_item_main_classify_main">
                                <div class="cart_list_item_main_classify_title">
                                    Phân loại hàng:
                                    <button></button>
                                </div>
                                <div class="cart_list_item_main_classify_name">
                                    ${carts[j][1][i].category}
                                </div>
                            </div>
                            <div class="cart_list_item_main_classify_more_wrap">
                                <div class="cart_list_item_main_classify_more">
                                    <div class="cart_list_item_main_classify_more_main">
                                        <div class="classify_more_title">Màu:</div>
                                        <div class="select_color_wrap">
                                            <div class="select_color_item">
                                                <div class="select_color_item_active">
                                                    <i class="fas fa-check" aria-hidden="true"></i>
    
                                                </div>
                                                <div class="select_color_item_name">
                                                    đen
                                                </div>
                                            </div>
                                            <div class="select_color_item">
                                                <div class="select_color_item_active">
                                                    <i class="fas fa-check" aria-hidden="true"></i>
                                                </div>
                                                <div class="select_color_item_name">
                                                    ghi
                                                </div>
                                            </div>
                                            <div class="select_color_item">
                                                <div class="select_color_item_active">
                                                    <i class="fas fa-check" aria-hidden="true"></i>
                                                </div>
                                                <div class="select_color_item_name">
                                                    ghi
                                                </div>
                                            </div>
                                            <div class="select_color_item">
                                                <div class="select_color_item_active">
                                                    <i class="fas fa-check" aria-hidden="true"></i>
                                                </div>
                                                <div class="select_color_item_name">
                                                    ghi
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
                                    <div class="cart_list_item_main_classify_more_main_footer">
                                        <button>Trở về</button>
                                        <button>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cart_list_item_main_price">
                            <span>₫${carts[j][1][i].Price.toLocaleString('vi-VN')}</span>
                        </div>
                        <div class="cart_list_item_main_numbers">
                            <div class="quantity_product_number">
                                <div class="quantity_product_adjust quantity_product_adjust-reduce">-</div>
                                <div class="quantity_product_value">${carts[j][1][i].quality}</div>
                                <div class="quantity_product_adjust quantity_product_adjust-increase">+</div>
                            </div>
                        </div>
                        <div class="cart_list_item_main_total_price">
                            <span>₫${(parseInt(carts[j][1][i].Price) * parseInt(carts[j][1][i].quality)).toLocaleString('vi-VN')}</span>
                        </div>
                        <div class="cart_list_item_main_total_operation">
                            <div class="cart_list_item_main_total_operation_delete">Xóa</div>
                            <div class="cart_list_item_main_total_operation_search">
                                <span>
                                    Tìm sản phẩm tương tự
                                </span>
                                ▼
                            </div>
                        </div>
                    </div>
                    `
                    if (i == carts[j][1].length - 1) {
                        cartitem += `
                        <div class="cart_list_item_free_ship">
                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon MS9XQD icon-free-shipping-line">
                            <g>
                                <line fill="none" stroke-linejoin="round" stroke-miterlimit="10" x1="8.6" x2="4.2" y1="9.8" y2="9.8"></line>
                                <circle cx="3" cy="11.2" fill="none" r="2" stroke-miterlimit="10"></circle>
                                <circle cx="10" cy="11.2" fill="none" r="2" stroke-miterlimit="10"></circle>
                                <line fill="none" stroke-miterlimit="10" x1="10.5" x2="14.4" y1="7.3" y2="7.3">
                                </line>
                                <polyline fill="none" points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1" stroke-linejoin="round" stroke-miterlimit="10"></polyline>
                                <polyline fill="none" points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2" stroke-linejoin="round" stroke-miterlimit="10"></polyline>
                            </g>
                        </svg>
                        <div class="cart_list_item_free_ship_title">Giảm ₫15.000 phí vận chuyển đơn tối thiểu
                            ₫50.000; Giảm ₫25.000 phí vận chuyển đơn tối thiểu ₫99.000</div>
                        <div class="cart_list_item_free_ship_more">
                            <span>Tìm hiểu thêm</span>
                        </div>
                    </div>
                </div>
                        `
                        listcartitem += cartitem
                    }
                    console.log(carts[j][1][i])
                }

                if (j == carts.length - 1) {
                    listcartitem += ''

                }
                // console.log(listcartitem)

            }
            document.querySelector('.cart_list').innerHTML = listcartitem

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
            buy_now.onclick = function () {
                axios.get('https://shopee.vn/api/v4/search/search_suggestion?bundle=popsearch&limit=8&offset=0')
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }



            voucherLink.onclick = function () {
                modal.style.display = 'flex'
                console.log(112233)
            }
            modal.onclick = function () {
                modal.style.display = 'none'
            }
            modal_footer_back.onclick = function () {
                modal.style.display = 'none'
            }
            modal_footer_ok.onclick = function () {
                for (const element of freeship) {
                    if (element.classList[1] == 'doneCheck') {
                        for (const element of discount) {
                            if (element.classList[1] == 'doneCheck') {
                                document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `
                        <span style = ' margin-right : 15px; border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span> 
                        <span style = ' border: 2px solid #ee4d2d;'>Giảm Giá & Hoàn Xu</span>`
                                console.log(element.classList[1])
                                break;
                            }
                            else {
                                document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span style = 'border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span>`
                                console.log(element.classList[1])
                            }
                        }
                        break;
                    }
                    else {
                        for (const element of discount) {
                            if (element.classList[1] == 'doneCheck') {
                                for (const element of freeship) {
                                    if (element.classList[1] == 'doneCheck') {
                                        document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `
                                <span style = ' margin-right : 15px; border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span> 
                                <span style = ' border: 2px solid #ee4d2d;'>Giảm Giá & Hoàn Xu</span>`
                                        console.log(element.classList[1])
                                        break;
                                    }
                                    else {
                                        document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span style = ' border: 2px solid #ee4d2d;' >Giảm Giá & Hoàn Xu</span>`
                                    }
                                }
                                break;
                            }
                            else {
                                document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span>Chọn hoặc nhập mã</span>`
                            }
                        }
                    }
                }

                modal.style.display = 'none'


            }
            modal__body_detailed.onclick = function (event) {
                event.stopPropagation();
            }
            modal_footer.onclick = function (event) {
                event.stopPropagation();
            }

            function SumPrice() {
                let price = 0
                let sum_product = 0
                for (const element of document.querySelectorAll('.cart_list_item_main')) {
                    if (getComputedStyle(element.querySelector('.note_check-main')).backgroundColor !== 'rgb(255, 255, 255)') {
                        console.log(element)
                        // console.log(parseInt(element.querySelector('.cart_list_item_main_total_price span').innerHTML.replace('₫', '').replace(".", "")))
                        price += parseInt(element.querySelector('.cart_list_item_main_total_price span').innerHTML.replace('₫', '').replace(/\./g, ""))
                        sum_product += 1
                    }
                }
                console.log(price.toString().replace(/\./g, "").toLocaleString('vi-VN'))
                document.querySelector('.buy_cart_price_main_title span').innerHTML = sum_product
                lastPrice.innerHTML = `₫${parseInt(price.toString().replace(/\./g, "")).toLocaleString('vi-VN')}`
            }

            // SumPrice()
            for (const element of note_check_main) {
                let check = true
                let allcheck = true
                let topcheck = true
                element.onclick = function () {
                    // if(check){

                    if ((element == document.querySelector('.note').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)') || (element == document.querySelector('.buy_cart').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)')) {
                        for (const e of note_check_main) {

                            e.style.backgroundColor = '#ee4d2d'

                            allcheck = false
                            topcheck = false
                            // check = false
                            console.log(topcheck)
                        }
                        // console.log(allcheck)

                    }
                    else if ((element == document.querySelector('.note').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor !== 'rgb(255, 255, 255)') || (element == document.querySelector('.buy_cart').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor !== 'rgb(255, 255, 255)')) {
                        for (const e of note_check_main) {
                            e.style.backgroundColor = '#fff'
                            topcheck = true
                            allcheck = true
                            console.log(topcheck)

                            // check = true
                        }
                    }
                    else if (element.parentElement.parentElement.parentElement.parentElement.classList == 'cart_list_item') {
                        console.log(getComputedStyle(element).backgroundColor);

                        if (getComputedStyle(element).backgroundColor === '#fff' || getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)') {
                            // element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[0].style.backgroundColor = '#ee4d2d'
                            console.log(element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main'))
                            // element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[1].style.backgroundColor = '#ee4d2d'
                            if (element.parentElement.parentElement.parentElement.classList.contains('cart_list_item_shop')) {
                                for (let i = 0; i < element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main').length; i++) {
                                    element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[i].style.backgroundColor = '#ee4d2d'

                                }
                            }
                            else {
                                let elo = true
                                element.style.backgroundColor = '#ee4d2d'
                                for (let i = 1; i < element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main').length; i++) {
                                    if (element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[i].style.backgroundColor === 'rgb(238, 77, 45)') {
                                        elo = true;
                                    } else {
                                        elo = false;
                                        break

                                    }

                                }
                                console.log(elo)

                                if (elo) {
                                    element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[0].style.backgroundColor = '#ee4d2d'
                                }

                            }
                            // if(allcheck){
                            //     document.querySelector('.note').querySelector('.note_check-main').style.backgroundColor = '#ee4d2d'
                            //     document.querySelector('.buy_cart').querySelector('.note_check-main').style.backgroundColor = '#ee4d2d'
                            //     allcheck = false

                            // }
                            topcheck = false


                        }
                        else {
                            element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[0].style.backgroundColor = '#fff'

                            element.style.backgroundColor = '#fff'

                            document.querySelector('.note').querySelector('.note_check-main').style.backgroundColor = '#fff'
                            document.querySelector('.buy_cart').querySelector('.note_check-main').style.backgroundColor = '#fff'
                            allcheck = true
                            topcheck = true
                            // check = true
                            console.log(topcheck)
                            console.log('k ok')
                            console.log(element.style.backgroundColor)
                            if (element.parentElement.parentElement.parentElement.classList.contains('cart_list_item_shop')) {
                                for (let i = 0; i < element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main').length; i++) {
                                    element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[i].style.backgroundColor = '#fff'

                                }
                            }

                        }
                    }
                    else if (element.parentElement.parentElement.parentElement.classList == 'cart_synthetic_Shopee_Xu') {
                        if (getComputedStyle(element).backgroundColor == '#fff' || getComputedStyle(element).backgroundColor == 'rgb(255, 255, 255)') {
                            element.style.backgroundColor = '#ee4d2d'
                            document.querySelector('.down_Xu').style.color = '#ee4d2d'
                        }
                        else {
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
            for (const element of cart_list_item_main) {
                let check = true
                element.querySelector('.cart_list_item_main_classify_main').onclick = function () {
                    if (check) {
                        element.querySelector('.cart_list_item_main_classify_more_wrap').style.display = 'flex'
                        check = false
                    } else {
                        element.querySelector('.cart_list_item_main_classify_more_wrap').style.display = 'none'
                        check = true
                    }
                    console.log(check)
                }
            }
            function select_color() {
                for (const color_item of select_color_item) {
                    color_item.onclick = function () {
                        for (const i of select_color_item) {
                            if (i !== color_item) {
                                i.classList.remove('selected')
                                i.querySelector('.select_color_item_active').style.display = 'none'
                            } else {
                                if (!color_item.classList.contains('selected')) {
                                    color_item.classList.add('selected')
                                    color_item.querySelector('.select_color_item_active').style.display = 'block'
                                }
                                else {
                                    color_item.classList.remove('selected')
                                    color_item.querySelector('.select_color_item_active').style.display = 'none'
                                }

                            }
                        }

                    }
                }
            }
            select_color()
            function number_of_products() {
                for (let element of quantity_product_number) {
                    const adjust_reduce = element.querySelector('.quantity_product_adjust-reduce')
                    const adjust_increase = element.querySelector('.quantity_product_adjust-increase')
                    const quantity_product_value = element.querySelector('.quantity_product_value')

                    adjust_reduce.onclick = function () {
                        if (quantity_product_value.innerHTML !== "1") {
                            quantity_product_value.innerHTML = parseInt(quantity_product_value.innerHTML) - 1
                            const price_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_price span')

                            const price_total_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_total_price span')
                            price_total_item.innerHTML = `₫${(parseInt(price_total_item.innerHTML.replace('₫', '').replace(".", "")) - parseInt(price_item.innerHTML.replace('₫', '').replace(".", ""))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                            console.log(price_total_item.innerHTML)

                        }
                    }
                    adjust_increase.onclick = function () {
                        if (quantity_product_value.innerHTML != 50) {
                            quantity_product_value.innerHTML = `${parseInt(quantity_product_value.innerHTML) + 1}`
                            const price_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_price span')

                            const price_total_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_total_price span')
                            price_total_item.innerHTML = `₫${(parseInt(price_item.innerHTML.replace('₫', '').replace(/\./g, "")) * parseInt(quantity_product_value.innerHTML)).toLocaleString('vi-VN')}`
                            console.log(price_total_item.innerHTML)
                            console.log(parseInt(price_item.innerHTML.replace('₫', '').replace(/\./g, "")))
                        }
                        console.log(123)
                    }
                }
            }
            number_of_products()



            for (const element of freeship) {
                element.onclick = function () {
                    for (const element of freeship) {
                        element.querySelector('div').style.border = '0px'
                        element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
                        // element.classList.remove('doneCheck')

                    }
                    if (element.classList[1] == 'doneCheck') {
                        element.querySelector('div').style.border = '0px solid #ee4d2d'
                        element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
                        element.classList.remove('doneCheck')
                    }
                    else {
                        element.querySelector('div').style.border = '1px solid #ee4d2d'
                        element.querySelector('.freeship_info_check').style.backgroundColor = '#ee4d2d'
                        element.classList.add('doneCheck')
                    }

                }
            }
            const discount = document.querySelectorAll('.discount')
            for (const element of discount) {
                element.onclick = function () {
                    for (const element of discount) {
                        element.querySelector('div').style.border = '0px'
                        element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
                        // element.classList.remove('doneCheck')
                    }
                    if (element.classList[1] == 'doneCheck') {
                        element.querySelector('div').style.border = '0px solid #ee4d2d'
                        element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
                        element.classList.remove('doneCheck')
                    }
                    else {
                        element.querySelector('div').style.border = '1px solid #ee4d2d'
                        element.querySelector('.freeship_info_check').style.backgroundColor = '#ee4d2d'
                        element.classList.add('doneCheck')
                    }
                }
            }


            const delecart = document.querySelectorAll('.cart_list_item_main_total_operation_delete')
            for (const dele of delecart) {
                dele.onclick = function () {
                    const text = dele.parentElement.parentElement.querySelector('.cart_list_item_main_classify_name').innerHTML
                    const trimmedText = text.trim(); // Loại bỏ khoảng trắng từ đầu và cuối chuỗi
                    const extractedText = trimmedText.replace(/\n/g, ""); // Loại bỏ ký tự xuống dòng trong chuỗi
                    fetch('/api/Delete_cart_item', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            'link': `${dele.parentElement.parentElement.querySelector('.cart_list_item_main_info_title a').href}`,
                            'category': `${extractedText}`,
                            // 'LoginName': `${dele.parentElement.querySelector('.cart_list_item_main_classify_name').innerHTML}`,
                        })
                    })
                        .then(response => {
                            if (response.status == '200') {
                                getCart()

                            }
                        })
                        .then(data => {
                            console.log(data.status);


                        })
                        .catch(error => console.error(error));
                }
            }






        })
        .catch(error => console.error(error));

}
getCart()




// buy_now.onclick = function () {
//     axios.get('https://shopee.vn/api/v4/search/search_suggestion?bundle=popsearch&limit=8&offset=0')
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }



// voucherLink.onclick = function () {
//     modal.style.display = 'flex'
//     console.log(112233)
// }
// modal.onclick = function () {
//     modal.style.display = 'none'
// }
// modal_footer_back.onclick = function () {
//     modal.style.display = 'none'
// }
// modal_footer_ok.onclick = function () {
//     for (const element of freeship) {
//         if (element.classList[1] == 'doneCheck') {
//             for (const element of discount) {
//                 if (element.classList[1] == 'doneCheck') {
//                     document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `
//                     <span style = ' margin-right : 15px; border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span>
//                     <span style = ' border: 2px solid #ee4d2d;'>Giảm Giá & Hoàn Xu</span>`
//                     console.log(element.classList[1])
//                     break;
//                 }
//                 else {
//                     document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span style = 'border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span>`
//                     console.log(element.classList[1])
//                 }
//             }
//             break;
//         }
//         else {
//             for (const element of discount) {
//                 if (element.classList[1] == 'doneCheck') {
//                     for (const element of freeship) {
//                         if (element.classList[1] == 'doneCheck') {
//                             document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `
//                             <span style = ' margin-right : 15px; border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span>
//                             <span style = ' border: 2px solid #ee4d2d;'>Giảm Giá & Hoàn Xu</span>`
//                             console.log(element.classList[1])
//                             break;
//                         }
//                         else {
//                             document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span style = ' border: 2px solid #ee4d2d;' >Giảm Giá & Hoàn Xu</span>`
//                         }
//                     }
//                     break;
//                 }
//                 else {
//                     document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span>Chọn hoặc nhập mã</span>`
//                 }
//             }
//         }
//     }

//     modal.style.display = 'none'


// }
// modal__body_detailed.onclick = function (event) {
//     event.stopPropagation();
// }
// modal_footer.onclick = function (event) {
//     event.stopPropagation();
// }

// function SumPrice() {
//     let price = 0
//     let sum_product = 0
//     for (const element of document.querySelectorAll('.cart_list_item_main')) {
//         if (getComputedStyle(element.querySelector('.note_check-main')).backgroundColor !== 'rgb(255, 255, 255)') {

//             // console.log(parseInt(element.querySelector('.cart_list_item_main_total_price span').innerHTML.replace('₫', '').replace(".", "")))
//             price += parseInt(element.querySelector('.cart_list_item_main_total_price span').innerHTML.replace('₫', '').replace(".", ""))
//             sum_product += 1
//         }
//     }
//     console.log(price)
//     document.querySelector('.buy_cart_price_main_title span').innerHTML = sum_product
//     lastPrice.innerHTML = `₫${(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
// }

// // SumPrice()
// for (const element of note_check_main) {
//     let check = true
//     let allcheck = true
//     let topcheck = true
//     element.onclick = function () {
//         // if(check){

//         if ((element == document.querySelector('.note').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)') || (element == document.querySelector('.buy_cart').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)')) {
//             for (const e of note_check_main) {

//                 e.style.backgroundColor = '#ee4d2d'

//                 allcheck = false
//                 topcheck = false
//                 // check = false
//                 console.log(topcheck)
//             }
//             // console.log(allcheck)

//         }
//         else if ((element == document.querySelector('.note').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor !== 'rgb(255, 255, 255)') || (element == document.querySelector('.buy_cart').querySelector('.note_check-main') && getComputedStyle(element).backgroundColor !== 'rgb(255, 255, 255)')) {
//             for (const e of note_check_main) {
//                 e.style.backgroundColor = '#fff'
//                 topcheck = true
//                 allcheck = true
//                 console.log(topcheck)

//                 // check = true
//             }
//         }
//         else if (element.parentElement.parentElement.parentElement.parentElement.classList == 'cart_list_item') {
//             console.log(getComputedStyle(element).backgroundColor);

//             if (getComputedStyle(element).backgroundColor === '#fff' || getComputedStyle(element).backgroundColor === 'rgb(255, 255, 255)') {
//                 element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[0].style.backgroundColor = '#ee4d2d'

//                 element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[1].style.backgroundColor = '#ee4d2d'
//                 // if(allcheck){
//                 //     document.querySelector('.note').querySelector('.note_check-main').style.backgroundColor = '#ee4d2d'
//                 //     document.querySelector('.buy_cart').querySelector('.note_check-main').style.backgroundColor = '#ee4d2d'
//                 //     allcheck = false

//                 // }
//                 topcheck = false
//                 // allcheck = false
//                 // check = false
//                 console.log('ok ok')
//                 console.log(topcheck)

//             }
//             else {
//                 element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[0].style.backgroundColor = '#fff'

//                 element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.note_check-main')[1].style.backgroundColor = '#fff'

//                 document.querySelector('.note').querySelector('.note_check-main').style.backgroundColor = '#fff'
//                 document.querySelector('.buy_cart').querySelector('.note_check-main').style.backgroundColor = '#fff'
//                 allcheck = true
//                 topcheck = true
//                 // check = true
//                 console.log(topcheck)
//                 console.log('k ok')
//                 console.log(element.style.backgroundColor)

//             }
//         }
//         else if (element.parentElement.parentElement.parentElement.classList == 'cart_synthetic_Shopee_Xu') {
//             if (getComputedStyle(element).backgroundColor == '#fff' || getComputedStyle(element).backgroundColor == 'rgb(255, 255, 255)') {
//                 element.style.backgroundColor = '#ee4d2d'
//                 document.querySelector('.down_Xu').style.color = '#ee4d2d'
//             }
//             else {
//                 element.style.backgroundColor = '#fff'
//                 document.querySelector('.down_Xu').style.color = '#d0d0d0'

//             }
//         }
//         SumPrice()


//         // }else{
//         //     element.style.backgroundColor = '#fff'
//         //     check = true
//         //     topcheck = true
//         // }
//     }
// }
// for (const element of cart_list_item_main) {
//     let check = true
//     element.querySelector('.cart_list_item_main_classify_main').onclick = function () {
//         if (check) {
//             element.querySelector('.cart_list_item_main_classify_more_wrap').style.display = 'flex'
//             check = false
//         } else {
//             element.querySelector('.cart_list_item_main_classify_more_wrap').style.display = 'none'
//             check = true
//         }
//         console.log(check)
//     }
// }
// function select_color() {
//     for (const color_item of select_color_item) {
//         color_item.onclick = function () {
//             for (const i of select_color_item) {
//                 if (i !== color_item) {
//                     i.classList.remove('selected')
//                     i.querySelector('.select_color_item_active').style.display = 'none'
//                 } else {
//                     if (!color_item.classList.contains('selected')) {
//                         color_item.classList.add('selected')
//                         color_item.querySelector('.select_color_item_active').style.display = 'block'
//                     }
//                     else {
//                         color_item.classList.remove('selected')
//                         color_item.querySelector('.select_color_item_active').style.display = 'none'
//                     }

//                 }
//             }

//         }
//     }
// }
// select_color()
// function number_of_products() {
//     for (let element of quantity_product_number) {
//         const adjust_reduce = element.querySelector('.quantity_product_adjust-reduce')
//         const adjust_increase = element.querySelector('.quantity_product_adjust-increase')
//         const quantity_product_value = element.querySelector('.quantity_product_value')

//         adjust_reduce.onclick = function () {
//             if (quantity_product_value.innerHTML !== "1") {
//                 quantity_product_value.innerHTML = parseInt(quantity_product_value.innerHTML) - 1
//                 const price_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_price span')

//                 const price_total_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_total_price span')
//                 price_total_item.innerHTML = `₫${(parseInt(price_total_item.innerHTML.replace('₫', '').replace(".", "")) - parseInt(price_item.innerHTML.replace('₫', '').replace(".", ""))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
//                 console.log(price_total_item.innerHTML)

//             }
//         }
//         adjust_increase.onclick = function () {
//             if (quantity_product_value.innerHTML != 50) {
//                 quantity_product_value.innerHTML = `${parseInt(quantity_product_value.innerHTML) + 1}`
//                 const price_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_price span')

//                 const price_total_item = element.parentElement.parentElement.querySelector('.cart_list_item_main_total_price span')
//                 price_total_item.innerHTML = `₫${(parseInt(price_item.innerHTML.replace('₫', '').replace(".", "")) * parseInt(quantity_product_value.innerHTML)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
//                 console.log(price_total_item.innerHTML)
//             }
//             console.log(123)
//         }
//     }
// }
// number_of_products()



// for (const element of freeship) {
//     element.onclick = function () {
//         for (const element of freeship) {
//             element.querySelector('div').style.border = '0px'
//             element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
//             // element.classList.remove('doneCheck')

//         }
//         if (element.classList[1] == 'doneCheck') {
//             element.querySelector('div').style.border = '0px solid #ee4d2d'
//             element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
//             element.classList.remove('doneCheck')
//         }
//         else {
//             element.querySelector('div').style.border = '1px solid #ee4d2d'
//             element.querySelector('.freeship_info_check').style.backgroundColor = '#ee4d2d'
//             element.classList.add('doneCheck')
//         }

//     }
// }
// const discount = document.querySelectorAll('.discount')
// for (const element of discount) {
//     element.onclick = function () {
//         for (const element of discount) {
//             element.querySelector('div').style.border = '0px'
//             element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
//             // element.classList.remove('doneCheck')
//         }
//         if (element.classList[1] == 'doneCheck') {
//             element.querySelector('div').style.border = '0px solid #ee4d2d'
//             element.querySelector('.freeship_info_check').style.backgroundColor = '#fff'
//             element.classList.remove('doneCheck')
//         }
//         else {
//             element.querySelector('div').style.border = '1px solid #ee4d2d'
//             element.querySelector('.freeship_info_check').style.backgroundColor = '#ee4d2d'
//             element.classList.add('doneCheck')
//         }
//     }
// }

