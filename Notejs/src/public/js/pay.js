const voucherLink = document.querySelector('.cart_synthetic_voucherShopee_more')
const modal_footer = document.querySelector('.modal_footer')
const modal_footer_back = document.querySelector('.modal_footer_back')
const modal_footer_ok = document.querySelector('.modal_footer_ok')
const freeship = document.querySelectorAll('.freeship')

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
                    document.querySelector('.cart_synthetic_voucherShopee_note').style.display = 'block'
                    break;
                }
                else {
                    document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span style = 'border: 2px solid rgb(38, 170, 153);'>Miễn Phí Vận Chuyển</span>`
                    console.log(element.classList[1])
                    document.querySelector('.cart_synthetic_voucherShopee_note').style.display = 'block'

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
                            document.querySelector('.cart_synthetic_voucherShopee_note').style.display = 'block'

                            console.log(element.classList[1])
                            break;
                        }
                        else {
                            document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span style = ' border: 2px solid #ee4d2d;' >Giảm Giá & Hoàn Xu</span>`
                            document.querySelector('.cart_synthetic_voucherShopee_note').style.display = 'block'

                        }
                    }
                    break;
                }
                else {
                    document.querySelector('.cart_synthetic_voucherShopee_more').innerHTML = `<span>Chọn hoặc nhập mã</span>`
                    document.querySelector('.cart_synthetic_voucherShopee_note').style.display = 'none'

                }
            }
        }
    }

    modal.style.display = 'none'


}
const checked = document.querySelector('.note_check-main')
let haha = true
checked.onclick = function () {
    if (haha) {
        checked.style.backgroundColor = '#ee4d2d'
        document.querySelector('.down_Xu').style.color = '#ee4d2d'
        haha = false
    }
    else {
        checked.style.backgroundColor = '#fff'
        document.querySelector('.down_Xu').style.color = '#d0d0d0'
        haha = true

    }
}

modal__body_detailed.onclick = function (event) {
    event.stopPropagation();
}
modal_footer.onclick = function (event) {
    event.stopPropagation();
}
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