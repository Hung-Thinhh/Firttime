const urlSearchParams = new URLSearchParams(window.location.search);
const category_item_list = document.querySelector('.container__main-category-item-list');
const btn_right = document.querySelector('.btn-right');
const btn_left = document.querySelector('.btn-left')
const shopee_category_list_wrap_item_more = document.querySelector('.shopee-category-list-wrap-item-more-title')
const item_open = document.querySelector('.shopee-category-list-wrap-item-more-body-open')
const page_number = document.querySelectorAll('.container__main-category-recommed-panels-more-number-item')
const container__main_category_recommed_header_address = document.querySelector('.container__main-category-recommed-header-address span')



let page = urlSearchParams.get('page')
let catid = urlSearchParams.get('catid')
let itemid = urlSearchParams.get('itemid')
console.log(page)
console.log(itemid)
// 1
if (itemid) {
    document.querySelector('.container__main-category-list').style.display = 'none'
    document.querySelector('.section-banner-hotword--with-skin').style.display = 'none'

}
container__main_category_recommed_header_address.innerHTML = page
for (const element of page_number) {

    if (parseInt(element.innerHTML) == page) {
        console.log('page ' + page)
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
        // element.classList.add('container__main-category-recommed-panels-more-number-item-active')
    }

}
if (page != 1) {
    document.querySelector('.container__main-category-recommed-panels-wrap').scrollIntoView()
}

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


btn_right.onclick = function () {
    category_item_list.style.transform = 'translate(-1200px, 0px)'
}
btn_left.onclick = function () {
    category_item_list.style.transform = 'translate(0px, 0px)'
}
function open_category(a, b) {
    let more_open = 0;
    a.onclick = function () {
        if (more_open == 0) {
            b.style.display = 'grid'
            more_open = 1;
        }
        else {
            b.style.display = 'none'
            more_open = 0
        }
    }
}
open_category(shopee_category_list_wrap_item_more, item_open);
for (let i = 0; i < document.querySelectorAll('.shopee-checkbox__control-more').length; i++) {
    open_category(document.querySelectorAll('.shopee-checkbox__control-more')[i], document.querySelectorAll('.shopee-filter-group-body-item-open')[i])
}

function checkbox_item(a, b) {
    let more_open = 0;
    a.onclick = function () {
        if (more_open == 0) {
            b.style.display = 'block'
            more_open = 1;
        }
        else {
            b.style.display = 'none'
            more_open = 0
        }
    }
}
for (let i = 0; i < document.querySelectorAll('.shopee-checkbox__box').length; i++) {
    checkbox_item(document.querySelectorAll('.shopee-checkbox__box')[i], document.querySelectorAll('.fa-check')[i])
}
function select_tab(a) {
    a.onclick = function () {
        for (const element of document.querySelectorAll('.container__main-category-recommed-header-tab-item')) {
            element.classList.remove('container__main-category-recommed-header-tab-item-active')
        }
        setTimeout(function () {
            a.classList.add('container__main-category-recommed-header-tab-item-active')
            const currentUrl = window.location.href;
            const url = new URL(`${currentUrl}`);
            const searchParams = new URLSearchParams(url.search);
            const sortByParam = searchParams.get('sortBy');
            console.log(sortByParam)
            if (sortByParam) {
                const url = new URLSearchParams(window.location.search);
                url.set('sortBy', `${a.id}`);
                const newUrl = window.location.origin + window.location.pathname + '?' + url.toString();
                history.pushState({}, '', newUrl);
            } else {
                const newUrl = currentUrl.concat(`&sortBy=${a.id}`);
                history.pushState({}, '', newUrl);
            }
        }, 100)
    }
}
for (let i = 0; i < document.querySelectorAll('.container__main-category-recommed-header-tab-item').length - 1; i++) {
    select_tab(document.querySelectorAll('.container__main-category-recommed-header-tab-item')[i])
}
const price_more = document.querySelectorAll('.container__main-category-recommed-header-tab-item-more-list')
for (const element of price_more) {
    element.onclick = function () {
        element.parentElement.parentElement.querySelector('span').innerHTML = element.innerHTML
        element.parentElement.parentElement.querySelector('span').style.color = '#ee4d2d'
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
        if (itemid) {
            window.location.href = `/Thoi-Trang-Nam?catid=${catid}&page=${parseInt(page_number_value)}&itemid=${itemid}`;

        } else {
            window.location.href = `/Thoi-Trang-Nam?catid=${catid}&page=${parseInt(page_number_value)}`;
        }
    }
}





// fectch api
let params = {
    page: page,
    catid: catid,
    cat_level: 1
};
if (itemid) {
    params = {
        page: page,
        catid: itemid,
        cat_level: 2
    };
}
axios.get('/api/menu/search_filter', {
    params: params
})
    .then(response => {
        // console.log(response.data.data.filter_configuration.dynamic_filter_group_data.facets)
        const shopee_filter_group = document.querySelectorAll('.shopee-filter-group')
        const shopee_category0 = shopee_filter_group[0].querySelectorAll('.shopee-checkbox__control span')
        for (let i = 0; i < shopee_category0.length - 1; i++) {
            console.log(shopee_category0.length)
            // console.log(response.data.data.filter_configuration.dynamic_filter_group_data.facets.category)
            if (!response.data.data.filter_configuration.dynamic_filter_group_data.facets[i]) {
                break;
            } else {
                shopee_category0[i].innerHTML = `${response.data.data.filter_configuration.dynamic_filter_group_data.facets[i].category.display_name} (${(response.data.data.filter_configuration.dynamic_filter_group_data.facets[i].count / 1000).toFixed(0)}k+) `
                shopee_category0[i].parentElement.setAttribute('id', `${response.data.data.filter_configuration.dynamic_filter_group_data.facets[i].catid}`);
            }
        }
        const shopee_category1 = shopee_filter_group[1].querySelectorAll('.shopee-checkbox__control span')
        for (let i = 0; i < shopee_category1.length - 1; i++) {
            // console.log('ok')

            shopee_category1[i].innerHTML = `${response.data.data.filter_configuration.dynamic_filter_group_data.locations[i].display_name}  `

        }
        const shopee_category4 = shopee_filter_group[4].querySelectorAll('.shopee-checkbox__control span')
        for (let i = 0; i < shopee_category4.length - 1; i++) {
            // console.log('ok')

            shopee_category4[i].innerHTML = `${response.data.data.filter_configuration.dynamic_filter_group_data.brands[i].name}  `
            shopee_category4[i].parentElement.setAttribute('id', `${response.data.data.filter_configuration.dynamic_filter_group_data.brands[i].brandid}`);

        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/category_tree', {
    params: {
        page: page

    }
})
    .then(response => {
        console.log(response.data.data.category_list.length)
        const shopee_category0 = document.querySelectorAll('.shopee-category-list-wrap-item')
        for (const element of response.data.data.category_list) {
            // console.log('ok')
            if (element.catid == catid) {
                // console.log(response.data.data.category_list[i].children)
                let category = element.children
                console.log(catid)
                document.querySelector('.shopee-category-list-active a').innerHTML = `<i class="fa-solid fa-caret-right"></i>
                ${element.display_name}`
                for (let i = 0; i < shopee_category0.length; i++) {
                    // console.log('oki')
                    // console.log(category[i].display_name)
                    shopee_category0[i].innerHTML = `<i class="fa-solid fa-caret-right"></i>
                    ${category[i].display_name}`
                    shopee_category0[i].setAttribute('id', `${category[i].catid}`);

                }

            }
        }

    })
    .catch(error => {
        console.error(error);
    });



const img_batchList = '/json/Thoitrangnam_batchList.json'
fetch(img_batchList)
    .then(function (response) {
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function (shops) {

        const batchList_img = document.querySelectorAll('.banner-top-full__main-img-item ')


        for (let i = 0; i < batchList_img.length; i++) {

            batchList_img[i].src = shops.data.space_banners[0].banners[i].image_url

        }

    })


axios.get('/api/Thoi-Trang-Nam/popular_collection', {
    params: {
        page: page,
        catid: catid

    }
})
    .then(response => {
        const popular_item1 = document.querySelectorAll('.container__main-category-fs-content-image-list')[0].querySelectorAll('.container__main-category-fs-content-image-list-item')
        const popular_item2 = document.querySelectorAll('.container__main-category-fs-content-image-list')[1].querySelectorAll('.container__main-category-fs-content-image-list-item')

        for (let i = 0; i < popular_item1.length; i++) {

            popular_item1[i].querySelector('.fs-content-image-list-item-inline-img-main').src = `https://cf.shopee.vn/file/${response.data.data.popular_collection_list[0].collection_list[i].img}`
            popular_item1[i].querySelector('.fs-content-image-list-item-botton-deal-main').innerHTML = response.data.data.popular_collection_list[0].collection_list[i].title
            popular_item1[i].querySelector('.fs-content-image-list-item-botton-deal-hot').innerHTML = `₫${(response.data.data.popular_collection_list[0].collection_list[i].normal_item_price_min / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`

        }
        for (let i = 0; i < popular_item2.length; i++) {

            popular_item2[i].querySelector('.fs-content-image-list-item-inline-img-main').src = `https://cf.shopee.vn/file/${response.data.data.popular_collection_list[1].collection_list[i].img}`
            popular_item2[i].querySelector('.fs-content-image-list-item-botton-deal-main').innerHTML = response.data.data.popular_collection_list[1].collection_list[i].title
            popular_item2[i].querySelector('.fs-content-image-list-item-botton-deal-hot').innerHTML = `₫${(response.data.data.popular_collection_list[1].collection_list[i].normal_item_price_min / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`

        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/Thoi-Trang-Nam/official_shop', {
    params: {
        page: page,
        catid: catid

    }
})
    .then(response => {
        const category_list_group_img_item = document.querySelectorAll('.category-list-group-img-item')


        for (let i = 0; i < category_list_group_img_item.length - 1; i++) {

            category_list_group_img_item[i].src = `https://cf.shopee.vn/file/${response.data.data.official_shops[i].logo_pc}`

        }
    })
    .catch(error => {
        console.error(error);
    });




axios.get('/api/Thoi-Trang-Nam/listRecommend', {
    params: params
})
    .then(response => {
        const item = document.querySelector('.container__main-category-recommed-panels-wrap').children
        console.log(response.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 60; i++) {
                // console.log(response.data.items[i].item_card_full.image)
                item[i].setAttribute('id', `${response.data.data.sections[0].data.item[i].itemid}_${response.data.data.sections[0].data.item[i].shopid}`);
                // item[i].setAttribute('id', `${response.data.data.sections[0].data  .itms[i].item_card_full.itemid}_${response.data.data.sections[0].data  .setions[0].data.item[i].shopid}`);
                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.sections[0].data.item[i].image}`
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
                    const stock = response.data.data.sections[0].data.item[i].stock
                    const sole = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought span').innerHTML

                    const price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2').innerHTML
                    localStorage.setItem('mystock', `${stock}`);
                    localStorage.setItem('myprice', `${price}`);
                    localStorage.setItem('mysole', `${sole}`);

                    console.log(price)
                    const productId = item[i].id;
                }
            }

        }
        img_item()
        function title_item() {
            for (let i = 0; i < 60; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')

                // const item_titles = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                item_title.innerHTML = response.data.data.sections[0].data.item[i].name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 60; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.sections[0].data.item[i].price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.sections[0].data.item[i].price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 60; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.sections[0].data.item[i].discount
                item_discount.innerHTML = (response.data.data.sections[0].data.item[i].discount)
            }
        }
        // discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 60; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.sections[0].data.item[i].has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        // has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 60; i++) {
                // console.log('go')
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought span')
                const item_reviews = response.data.data.sections[0].data.item[i].historical_sold
                // let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'

                const item_location = item[i].querySelector('.container__main-category-recommed-panels-item-location')
                if (response.data.data.sections[0].data.item[i].shop_location !== '') {
                    item_location.innerHTML = response.data.data.sections[0].data.item[i].shop_location
                }

            }
        }
        reviews_item()
    })
    .catch(error => {
        console.error(error);
    });


const shopee_category_list_wrap_item = document.querySelectorAll('.shopee-category-list-wrap-item')

setTimeout(() => {
    for (const element of shopee_category_list_wrap_item) {
        if (element.id == parseInt(itemid)) {
            document.querySelector('.shopee-category-list-active a').style.color = 'rgba(0, 0, 0, 0.8)'
            document.querySelector('.shopee-category-list-active a i').style.color = 'transparent'
            document.querySelector('.shopee-category-list-active a').onclick = function (e) {
                e.preventDefault();

                window.location.href = `/Thoi-Trang-Nam?catid=${catid}&page=1`;

            }
            element.style.color = '#ee4d2d'
            element.querySelector('i').style.color = '#ee4d2d'
            console.log('come')
        }
        element.onclick = function (e) {
            e.preventDefault();

            let itemid = this.id
            window.location.href = `/Thoi-Trang-Nam?catid=${catid}&page=1&itemid=${itemid}`;

        }
    }
}, 1000);
