const urlSearchParams = new URLSearchParams(window.location.search);
const idshop = urlSearchParams.get('idshop'); // '34456910'
const shop_name = document.querySelector('.container_shop_info_lead_content_main_name')
const shop_info_join = document.querySelector('.shop_info_join')
const container__main_category_recommend = document.querySelector('.container__main-category-recommend')
const container__main_category_recommed_header_address = document.querySelector('.container__main-category-recommed-header-address span')

const page_number = document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')
let page = urlSearchParams.get('page')
console.log(page)
container__main_category_recommed_header_address.innerHTML = page


if (page != 1) {
    container__main_category_recommend.scrollIntoView()
}
axios.get('/api/get_shop_info', {
    params: {
        idshop: idshop
    }
})
    .then(response => {
        console.log(response.data.data.response_rate)
        const shop_avatar = document.querySelector('.container_shop_info_lead_content_main_avt')
        shop_avatar.innerHTML = `<img class="shop_avatar_img" src="https://down-vn.img.susercontent.com/file/${response.data.data.account.portrait}" alt="">`
        shop_name.innerHTML = response.data.data.name
        const username = response.data.data.account.username
        localStorage.setItem('username', `${username}`)
        const item_count = document.querySelector('.item_count')
        item_count.innerHTML = response.data.data.item_count
        const rating = response.data.data.rating_bad + response.data.data.rating_good + response.data.data.rating_normal
        const rating_star = response.data.data.rating_star.toFixed(1)
        const shop_info_evaluate = document.querySelector('.rating_count')

        shop_info_evaluate.innerHTML = `${rating_star} (${(rating / 1000).toFixed(1)}k Đánh Giá)`
        const shop_info_response_rate = document.querySelector('.response_rate')
        shop_info_response_rate.innerHTML = `${response.data.data.response_rate}% (Trong Vài Giờ)`
        const shop_info_folow = document.querySelector('.follower_count')
        shop_info_folow.innerHTML = `${(response.data.data.follower_count / 1000).toFixed(1)}k`

        const epochTime = response.data.data.ctime;
        const date = new Date(epochTime * 1000);

        const year = date.getFullYear(); // lấy năm (VD: 2023)
        const month = date.getMonth() + 1; // lấy tháng (VD: 5 - vì tháng được đếm từ 0)
        const day = date.getDate(); // lấy ngày (VD: 5)
        const now = new Date();
        const nowYear = now.getFullYear();
        const nowMonth = now.getMonth() + 1;
        const nowDay = now.getDate();
        if (nowYear - year > 1) {
            shop_info_join.innerHTML = `${nowYear - year} năm trước`
        }
        else if (nowMonth - month > 1) {
            shop_info_join.innerHTML = `${nowMonth - month} tháng trước`
        }
        else if (nowDay - day > 1) {
            shop_info_join.innerHTML = `${nowDay - day} ngày trước`
        }
        else {
            shop_info_join.innerHTML = `Vừa tham gia`

        }
    })
    .catch(error => {
        console.error(error);
    });


const username = localStorage.getItem('username')
axios.get('/api/get_shop_base', {
    params: {
        username: username,
    }
})
    .then(response => {
        const background = document.querySelector('.container_shop_info_lead_background')
        background.style.backgroundImage = `url(https://down-vn.img.susercontent.com/file/${response.data.data.cover})`

        const follow_now = document.querySelector('.follow_now')
        if (response.data.data.account.following_count < 1000) {
            follow_now.innerHTML = `${response.data.data.account.following_count}`
        } else {
            follow_now.innerHTML = `${(response.data.data.account.following_count / 1000).toFixed(1)}k`
        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/shop/get_categories', {
    params: {
        idshop: idshop,
    }
})
    .then(response => {
        console.log(response.data)
        const categories_count = response.data.data.shop_categories.length + 2
        console.log(categories_count)
        const listItem = document.querySelectorAll('.container_shop_menu_item a')
        const categories = document.querySelectorAll('.shopee-category-list-wrap-item')
        for (let i = 2; i < listItem.length; i++) {
            console.log(i)
            if (i < categories_count) {
                console.log('ok vs' + i)
                listItem[i].innerHTML = response.data.data.shop_categories[i - 2].display_name
                categories[i - 1].innerHTML = `<i class="fa-solid fa-caret-right"></i>
                ${response.data.data.shop_categories[i - 2].display_name}`
            }
            else {
                console.log('ko ok vs' + i)

                listItem[i].style.display = 'none'
                categories[i - 1].style.display = 'none'
            }
        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/shop/get-Recomment', {
    params: {
        idshop: idshop,
        page: page

    }
})
    .then(response => {
        const item = document.querySelector('.list2').children
        console.log(response.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
        for (let i = 0; i < 30; i++) {
            if (!response.data.data.items[i]) {
                item[i].style.display = 'none'
            }
        }
        function img_item() {
            for (let i = 0; i < 30; i++) {
                // console.log(response.data.items[i].item_card_full.image)
                item[i].setAttribute('id', `${response.data.data.items[i].itemid}_${response.data.data.items[i].shopid}`);
                // item[i].setAttribute('id', `${response.data.data  .items[i].item_card_full.itemid}_${response.data.data  .sections[0].data.item[i].shopid}`);
                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.items[i].image}`
                item_img.src = `${item_img_src}`
                const item_background_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                item_background_img.src = `https://down-vn.img.susercontent.com/file/vn-50009109-b191fdae3228f95c949d29950c8e7735`

                item[i].querySelector('.container__main-category-recommed-panels-item-a').onclick = function (e) {
                    e.preventDefault();
                    const id = item[i].id
                    const iditem = id.split('_').shift()
                    const idshop = id.substring(id.indexOf("_") + 1)
                    // localStorage.setItem('myid', `${id}`);
                    console.log(iditem)
                    window.location.href = `/item?iditem=${iditem}&idshop=${idshop}`;
                    const price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2').innerHTML
                    const sole = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought span').innerHTML
                    const stock = response.data.data.items[i].stock
                    localStorage.setItem('myprice', `${price}`);
                    localStorage.setItem('mysole', `${sole}`);
                    localStorage.setItem('mystock', `${stock}`);
                    console.log(price)
                    const productId = item[i].id;
                }
            }

        }
        img_item()
        function title_item() {
            for (let i = 0; i < 30; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')

                // const item_titles = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                item_title.innerHTML = response.data.data.items[i].name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 30; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.items[i].price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.items[i].price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 30; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.items[i].discount
                item_discount.innerHTML = (response.data.data.items[i].discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 30; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.items[i].has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 30; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought span')
                const item_reviews = response.data.data.items[i].historical_sold
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
        reviews_item()

    })
    .catch(error => {
        console.error(error);
    });




if (parseInt(page) > 1) {
    console.log('page > 1')
    document.querySelector('.container__main-category-recommed-header-address-pre').classList.remove('recommed-header-address-NotActive')
    document.querySelector('.container__main-category-recommed-header-address-pre').onclick = function () {
        console.log('dang click')
        for (const element of page_number) {
            // console.log(element.innerHTML)

            if (container__main_category_recommed_header_address.innerHTML - 1 == parseInt(element.innerHTML)) {
                console.log('click')

                element.click();
            }
        }
    }

}
if (parseInt(page) < 9) {
    document.querySelector('.container__main-category-recommed-header-address-next').onclick = function () {
        for (const element of page_number) {
            if (container__main_category_recommed_header_address.innerHTML == parseInt(element.innerHTML) - 1) {
                element.click();
            }
        }
    }
    // document.querySelector('.container__main-category-recommed-header-address-pre').classList.remove('recommed-header-address-NotActive')
    // document.querySelector('.container__main-category-recommed-header-address-pre').onclick = function () {
    //     for (const element of page_number) {
    //         if (container__main_category_recommed_header_address.innerHTML - 1 == parseInt(element.innerHTML)) {
    //             element.click();
    //         }
    //     }
    // }
}
else {

    document.querySelector('.container__main-category-recommed-header-address-next').classList.add('recommed-header-address-NotActive')

}

document.querySelector('.container__main-category-recommed-panels-more-directional:first-child').onclick = function () {
    console.log('click')
    document.querySelector('.container__main-category-recommed-header-address-pre').click()
}
document.querySelector('.container__main-category-recommed-panels-more-directional:last-child').onclick = function () {
    document.querySelector('.container__main-category-recommed-header-address-next').click()
}
for (const element of page_number) {
    if (parseInt(element.innerHTML) == parseInt(page)) {
        if (element.innerHTML >= 3) {
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[5].style.display = 'flex'
        }
        else {
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[5].style.display = 'none'

        }
        if (element.innerHTML >= 5) {
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[2].innerHTML = '...'
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[6].style.display = 'flex'

        }
        else {
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[2].innerHTML = '3'
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[6].style.display = 'none'
        }
        if (element.innerHTML >= 6) {
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[7].style.display = 'flex'
        }
        else {
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[7].style.display = 'none'

        }
        if (element.innerHTML >= 7) {
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[8].innerHTML = '9'
        }
        else {
            document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[8].innerHTML = '...'

        }
        for (const element of page_number) {
            element.classList.remove('container__main-category-recommed-panels-more-number-item-active')
        }

        element.classList.add('container__main-category-recommed-panels-more-number-item-active')

    }
    if (page == 9) {
        document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[8].innerHTML = '9'
        document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')[8].style.display = 'flex'
        element.classList.add('container__main-category-recommed-panels-more-number-item-active')
    }

}
for (const element of page_number) {
    element.onclick = function () {
        for (const element of page_number) {
            element.classList.remove('container__main-category-recommed-panels-more-number-item-active')
        }
        element.classList.add('container__main-category-recommed-panels-more-number-item-active')
        const page_number_value = element.innerHTML
        console.log(parseInt(page_number_value))
        // location.reload();
        window.location.href = `/shop?idshop=${idshop}&page=${parseInt(page_number_value)}`;

    }
}

