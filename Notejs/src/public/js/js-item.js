const app = document.querySelector('.app')
const view_item = document.querySelectorAll('.view_item img')
const view_big = document.querySelector('.view_big img')
const modal_view_item = document.querySelectorAll('.modal__body-detailed-menu-item img')
const modal_view_big = document.querySelector('.modal__body-detailed-big_img img')
const modal = document.querySelector('.modal')
const modal__body_detailed = document.querySelector('.modal__body-detailed')
const modal_btn_right = document.querySelector('.modal__body-detailed-big_img-right')
const modal_btn_left = document.querySelector('.modal__body-detailed-big_img-left')
const album_big_wrap = document.querySelector('.review_product-item-user-album-big-wrap')
const review_product_item = document.querySelectorAll('.review_product-item')
const select_color_wrap = document.querySelectorAll('.select_color_wrap')
const select_color_item = document.querySelectorAll('.select_color_item')
const select_color_item_active = document.querySelector('.select_color_item_active')
const adjust_reduce = document.querySelector('.quantity_product_adjust-reduce')
const adjust_increase = document.querySelector('.quantity_product_adjust-increase')
const quantity_product_value = document.querySelector('.quantity_product_value')
const quantity_product_rest = document.querySelector('.quantity_product_rest').children[0]
const quantity_error = document.querySelector('.quantity_error')
const more_products = document.querySelector('.more_products')
const buy_products = document.querySelector('.buy_products')
const select_color_quantity_wrap = document.querySelector('.select_color_quantity-wrap')
const feedback_product_more = document.querySelectorAll('.feedback_product-more')
const name_product = document.querySelector('.product_briefing_name span')
const item_rating = document.querySelector('.product_briefing_buy_rank span')
const buy_ed = document.querySelector('.buy_ed')
const price = document.querySelector('.price')
const view_like = document.querySelector('.view_like')
const number_of_reviews = document.querySelector('.number_of_reviews')
const product__content = document.querySelector('.page-product__content-describe-main-wrap p')
const cover_star = document.querySelector('.cover')
const cover_star2 = document.querySelector('.cover2')
const shop_name = document.querySelector('.shop_name')
const shop_info_evaluate = document.querySelector('.shop_info_evaluate')
const shop_info_product = document.querySelector('.shop_info_product')
const shop_info_folow = document.querySelector('.shop_info_folow')
const shop_info_join = document.querySelector('.shop_info_join')
const shop_info_response_rate = document.querySelector('.shop_info_response_rate')



const urlSearchParams = new URLSearchParams(window.location.search);
const iditem = urlSearchParams.get('iditem'); // '18648329978'
console.log(iditem)
const idshop = urlSearchParams.get('idshop'); // '34456910'



// let myid = localStorage.getItem('myid');
// console.log(myid);
let myprice = localStorage.getItem('myprice');

console.log(myprice);
// const iditem = myid.split('/').shift()
// const idshop = myid.substring(myid.indexOf("/") + 1)
const item_info = './json/list_infomation_recomment_item.json'
axios.get('/api/get_item', {
    params: {
        iditem: iditem,
        idshop: idshop
    }
})
    .then(response => {
        console.log(response.data.data.name);
        let stock = ''
        if (localStorage.getItem('mystock') != 'null') {
            stock = localStorage.getItem('mystock');

        } else {
            stock = response.data.data.discount_stock
        }
        let sole = ''
        if (localStorage.getItem('mysole') != 'null') {
            sole = localStorage.getItem('mysole').split(' ')[2];
        } else {
            if (((response.data.data.global_sold) / 1000) < 1) {
                sole = (response.data.data.global_sold)
            } else {
                sole = `${((response.data.data.global_sold) / 1000).toFixed(1)}k`
            }
        }
        console.log(sole)
        console.log(response.data.data.image)
        view_big.src = `https://cf.shopee.vn/file/${response.data.data.image}`
        for (let i = 0; i < view_item.length; i++) {
            if (response.data.data.images[i]) {
                view_item[i].src = `https://cf.shopee.vn/file/${response.data.data.images[i]}`
            }
            else {
                view_item[i].style.display = 'none'
            }
        }
        for (let i = 0; i < modal_view_item.length; i++) {
            if (response.data.data.images[i]) {
                modal_view_item[i].src = `https://cf.shopee.vn/file/${response.data.data.images[i]}`
            }
            else {
                modal_view_item[i].style.display = 'none'
            }
        }
        name_product.innerHTML = response.data.data.name


        buy_ed.innerHTML = sole



        if (response.data.data.liked_count / 1000 > 1) {
            view_like.innerHTML = `Đã thích(${(response.data.data.liked_count / 1000).toFixed(1)}k)`
        } else {
            view_like.innerHTML = `Đã thích(${(response.data.data.liked_count)})`
        }
        if (response.data.data.item_rating.rating_count[0] / 1000 < 1) {
            number_of_reviews.innerHTML = `${response.data.data.item_rating.rating_count[0]}`
        } else {
            number_of_reviews.innerHTML = `${(response.data.data.item_rating.rating_count[0] / 1000).toFixed(1)}k`
        }
        price.innerHTML = myprice
        console.log(response.data.data.tier_variations[0].name)
        const select_colors = document.querySelectorAll('.select_color')
        for (let i = 0; i < select_colors.length; i++) {
            if (i == response.data.data.tier_variations.length || response.data.data.tier_variations[i].name == '') {
                select_colors[i].style.display = 'none'
                select_colors[i].classList.add('select_color_select')

            } else {
                select_colors[i].querySelector('.select_color_title').innerHTML = response.data.data.tier_variations[i].name
                const select_color_item = select_colors[i].querySelectorAll('.select_color_item')
                for (let j = 0; j < select_color_item.length; j++) {
                    if (response.data.data.tier_variations[i].options[j] !== undefined) {
                        select_color_item[j].querySelector('.select_color_item_name').innerHTML = response.data.data.tier_variations[i].options[j]
                    } else {
                        select_color_item[j].style.display = 'none'
                    }
                }
            }

        }
        const page_link_detail = document.querySelector('.page-product__content-detail-item_value')
        let categories = response.data.data.categories;
        let page_link_detail_html = "<a class='container_address_a' href='./index'>Shopee</a>";
        for (const element of categories) {
            page_link_detail_html += `&gt;<a href="">${element.display_name}</a>`;
        }
        page_link_detail_html += "</div>";
        page_link_detail.innerHTML = page_link_detail_html;
        //
        const container_address = document.querySelector('.container_address')
        container_address.innerHTML = page_link_detail_html + `&gt;<a style='color: black' href=''>${response.data.data.name}</a>`

        const page_product__content_detail_item = document.querySelector('.page-product__content-detail_main')
        const attributes = response.data.data.attributes
        console.log(response.data.data.discount_stock)
        let page_product__content_detail_item_HTML = `
            <div class="page-product__content-detail-item">
                <div class="page-product__content-detail-item_name">Danh mục</div>
                <div class="page-product__content-detail-item_value">
                    ${page_link_detail_html}
                </div>
            </div>`
        for (const element of attributes) {
            page_product__content_detail_item_HTML += `
                <div class="page-product__content-detail-item">
                    <div class="page-product__content-detail-item_name">${element.name}</div>
                    <div class="page-product__content-detail-item_value">${element.value}</div>
                </div>
                `
        }


        page_product__content_detail_item_HTML += `
            <div class="page-product__content-detail-item">
                <div class="page-product__content-detail-item_name">Kho hàng</div>
                <div class="page-product__content-detail-item_value">${stock}</div>
            </div>
            <div class="page-product__content-detail-item">
                <div class="page-product__content-detail-item_name">Gửi từ</div>
                <div class="page-product__content-detail-item_value">${response.data.data.shop_location}</div>
            </div>
            `
        page_product__content_detail_item_HTML += "</div>";
        page_product__content_detail_item.innerHTML = page_product__content_detail_item_HTML


        //
        product__content.innerHTML = response.data.data.description

        const select_review_name = document.querySelectorAll('.select-review_product-item-name')
        let a = 5;
        let Sumrating_count = 0
        let Maxrating_count = response.data.data.item_rating.rating_count[0] * 5

        for (let i = 1; i < select_review_name.length - 2; i++) {
            Sumrating_count += a * response.data.data.item_rating.rating_count[a]
            console.log(Sumrating_count)
            if (response.data.data.item_rating.rating_count[a] / 1000 < 1) {
                select_review_name[i].innerHTML = `${a} sao (${response.data.data.item_rating.rating_count[a]})`
            } else {
                select_review_name[i].innerHTML = `${a} sao (${(response.data.data.item_rating.rating_count[a] / 1000).toFixed(1)}k)`
            }
            a -= 1
        }
        const rating_count = (Sumrating_count / Maxrating_count * 5).toFixed(1)
        item_rating.innerHTML = rating_count


        const star_now = document.querySelector('.select-review_product-title-name')
        star_now.innerHTML = `
      ${rating_count} 
      <p> trên 5</p>
  `

        // star cover 
        const covers = 80 - (80 / 5 * rating_count)
        console.log(covers)
        cover_star.style.width = `${covers}px`

        const covers2 = 101 - (101 / 5 * rating_count)
        cover_star2.style.width = `${covers2}px`


    })
    .catch(error => {
        console.error(error);
    });

// shop
axios.get('/api/get_shop_info', {
    params: {
        iditem: iditem,
        idshop: idshop
    }
})
    .then(response => {
        // console.log(response.data.data.response_rate)
        const shop_avatar = document.querySelector('.shop_avatar')
        shop_avatar.innerHTML = `<img class="shop_avatar_img" src="https://down-vn.img.susercontent.com/file/${response.data.data.account.portrait}" alt="">`
        shop_name.innerHTML = response.data.data.name
        const rating = response.data.data.rating_bad + response.data.data.rating_good + response.data.data.rating_normal
        shop_info_evaluate.innerHTML = `${(rating / 1000).toFixed(1)}k`
        shop_info_response_rate.innerHTML = `${response.data.data.response_rate}%`
        shop_info_folow.innerHTML = `${(response.data.data.follower_count / 1000).toFixed(1)}k`
        shop_info_product.innerHTML = response.data.data.item_count
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
// comment
axios.get('/api/get_reviews_item', {
    params: {
        iditem: iditem,
        idshop: idshop
    }
})
    .then(response => {
        for (let i = 0; i < review_product_item.length; i++) {
            let a = 0

            const review_products = review_product_item[i].querySelector('.review_product-item-user-name')
            const review_product_date = review_product_item[i].querySelector('.review_product-item-user-info_review-date')
            const comment_title = review_product_item[i].querySelector('.review_product-item-user-comment')
            const type_product = review_product_item[i].querySelector('.review_product-item-user-info_review-type-product')
            const review_product_img_list = review_product_item[i].querySelectorAll('.review_product-item-user-album-item img')
            const review_product_img_big_list = review_product_item[i].querySelectorAll('.review_product-item-user-album-item-big img')
            const icon_rating = review_product_item[i].querySelectorAll('.icon-rating-solid')
            if (response.data.data.ratings[i]) {
                review_products.innerHTML = response.data.data.ratings[i].author_username
                // Chuyen date 
                // Thời gian Unix timestamp
                const unixTime = response.data.data.ratings[i].ctime;

                // Chuyển đổi thời gian sang đối tượng Date
                const date = new Date(unixTime * 1000);

                // Lấy các thông tin về ngày, tháng và năm
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const hours = date.getHours(); // lấy giờ
                const minutes = date.getMinutes(); // lấy phút
                const seconds = date.getSeconds(); // lấy giây  
                // Định dạng ngày tháng năm theo chuẩn ISO
                const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                review_product_date.innerHTML = formattedDate
                // comment
                comment_title.innerHTML = response.data.data.ratings[i].comment
                // loại hàng đã mua 
                type_product.innerHTML = `Phân loại hàng: ${response.data.data.ratings[i].product_items[0].model_name}`
                if (response.data.data.ratings[i].images[0]) {
                    console.log(response.data.data.ratings[i].images[0])
                    let big_list = ''
                    for (let j = 0; j < review_product_img_list.length; j++) {
                        if (response.data.data.ratings[i].images[j]) {
                            a += 1
                            // console.log(a)
                            review_product_img_list[j].src = `https://cf.shopee.vn/file/${response.data.data.ratings[i].images[j]}`
                            review_product_img_big_list[j].src = `https://cf.shopee.vn/file/${response.data.data.ratings[i].images[j]}`
                            // review_product_img_big_list[j].setAttribute('id', a)
                            big_list += `<li class="review_product-item-user-album-item-big">
                            <img src="https://cf.shopee.vn/file/${response.data.data.ratings[i].images[j]}" alt="" >
                        </li>`
                        } else {
                            review_product_img_list[j].style.display = 'none'
                            review_product_img_big_list[j].setAttribute('id', a)
                            // review_product_img_big_list[j].style.display = 'none'
                        }
                    }
                    // console.log(big_list)

                    // document.querySelectorAll('.review_product-item-user-album-big')[i].innerHTML = big_list
                } else {
                    document.querySelectorAll('.review_product-item-user-album')[i].style.display = 'none'
                    console.log(i)
                }
                // console.log(response.data.data.ratings[i].rating_star)
                for (let j = 0; j < response.data.data.ratings[i].rating_star; j++) {
                    icon_rating[j].style.display = 'block'
                }
            }
            else {
                review_product_item[i].style.display = 'none'
            }


        }
    })
    .catch(error => {
        console.error(error);
    });

function select_color() {
    for (const color of select_color_wrap) {
        for (const color_item of color.querySelectorAll('.select_color_item')) {
            color_item.onclick = function () {
                select_color_quantity_wrap.style.background = '#fff'
                quantity_error.style.display = 'none'
                for (const i of color.querySelectorAll('.select_color_item')) {
                    if (i !== color_item) {
                        i.classList.remove('selected')
                        i.querySelector('.select_color_item_active').style.display = 'none'
                    } else {
                        if (!color_item.classList.contains('selected')) {
                            color.parentElement.classList.add('select_color_select')
                            color_item.classList.add('selected')
                            color_item.querySelector('.select_color_item_active').style.display = 'block'
                        }
                        else {
                            color_item.classList.remove('selected')
                            color.parentElement.classList.remove('select_color_select')

                            color_item.querySelector('.select_color_item_active').style.display = 'none'
                        }

                    }
                }

            }
        }
    }
}
select_color()

function number_of_products() {
    adjust_reduce.onclick = function () {
        if (quantity_product_value.innerHTML !== "1") {
            quantity_product_value.innerHTML = parseInt(quantity_product_value.innerHTML) - 1
        }
    }
    adjust_increase.onclick = function () {
        if (quantity_product_value.innerHTML != quantity_product_rest) {
            quantity_product_value.innerHTML = `${parseInt(quantity_product_value.innerHTML) + 1}`
        }
        console.log(123)
    }
}
number_of_products()

function select_item() {
    for (const element of view_item) {
        element.onmouseenter = function () {
            view_big.src = element.src.replace('_tn', '')
            for (const a of view_item) {
                a.parentElement.style.border = ' 2px solid #fff'
            }
            element.parentElement.style.border = ' 2px solid #ee4d2d'
        }
        element.onclick = function () {
            modal.style.display = 'block'
            modal_view_big.src = element.src.replace('_tn', '')
            for (const element of modal_view_item) {
                element.onclick = function () {
                    modal_view_big.src = element.src.replace('_tn', '')
                    for (const a of modal_view_item) {
                        a.parentElement.style.border = ' 2px solid #fff'
                    }
                    element.parentElement.style.border = ' 2px solid #ee4d2d'
                }
                if (element.src.replace('_tn', '') === modal_view_big.src.replace('_tn', '')) {
                    element.click()
                    console.log(123)
                }
            }
        }
    }


}
select_item()


function modals() {
    modal.onclick = function () {
        modal.style.display = 'none'
    }
    modal__body_detailed.onclick = function (event) {
        event.stopPropagation();
    }
}
modals()

function btn_item() {
    const modal_item_list = document.querySelectorAll('.modal__body-detailed-menu-item')
    modal_btn_right.onclick = function () {
        let nextItem = null;
        for (const item of modal_item_list) {
            if (item.querySelector('img').src.replace('_tn', '') === modal_view_big.src.replace('_tn', '')) {
                // Found selected item
                // Choose next item
                nextItem = item.nextElementSibling;
                console.log(nextItem)
                break;
            }
        }
        if (nextItem) {
            // Click next item
            nextItem.querySelector('img').click();
        } else {
            modal_view_item[0].click();
        }

    }
    modal_btn_left.onclick = function () {
        let prevItem = null;
        for (const item of modal_item_list) {
            if (item.querySelector('img').src.replace('_tn', '') === modal_view_big.src.replace('_tn', '')) {
                // Found selected item
                // Choose next item
                prevItem = item.previousElementSibling;
                console.log(prevItem)
                break;
            }
        }
        if (prevItem) {
            // Click next item
            prevItem.querySelector('img').click();
        } else {
            modal_view_item[modal_view_item.length - 1].click();
        }
    }
}
btn_item()

function more_and_buy() {
    // Bạn đã chọn phân loại hàng chưa ?
    let flag1 = false;
    more_products.onclick = function () {

        for (const color of document.querySelectorAll('.select_color')) {
            if (!color.classList.contains('select_color_select')) {
                flag1 = false;
                break
            }
            else {
                flag1 = true;

            }
        }
        console.log(flag1)
        if (!flag1) {
            select_color_quantity_wrap.style.background = '#fff5f5'
            quantity_error.style.display = 'block'
        }
        else {
            const currentUrl = window.location.href;
            const category_select = document.querySelectorAll('.selected');
            let category = '';
            for (let i = 0; i < category_select.length; i++) {
                category += category_select[i].querySelector('.select_color_item_name').innerHTML + '+';
            }
            // Xóa dấu '+' cuối cùng của chuỗi nếu cần thiết
            if (category.endsWith('+')) {
                category = category.slice(0, -1);
            }
            console.log(category);
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'link': currentUrl,
                    'image': `${document.querySelector('.view_big img').src}`,
                    'shop_name': `${document.querySelector('.shop_name').innerHTML}`,
                    'product_name': `${document.querySelector('.product_briefing_name span').innerHTML}`,
                    'Price': `${parseInt(document.querySelector('.price').innerHTML.replace(/\D/g, ''))}`,
                    'category': category,
                    'quality': `${document.querySelector('.quantity_product_value').innerHTML}`,



                    // 'LoginName': `${document.querySelector('#userName').value}`,
                })
            };
            const response = fetch('/New_cart_item', requestOptions)
            console.log(response.status)
            if (response.status == '200') {
                // document.querySelector('.form-erro').classList.remove('displayed')
                document.querySelector('#form-2').classList.remove('displayed')
                document.querySelector('#form-1').classList.add('displayed')

            }
        }
    }
}
more_and_buy()


function comment_album_wrap() {

    let widthItem = 0;
    let widthItemRight = 0;
    let width = 0;
    let widthRight = 0;
    let itemNow = null;
    let width_a = null;
    let width_item_a = null;
    // album_wrap_list_item[0].parentElement.style.border = '2px solid #ee4d2d'
    for (const element of review_product_item) {
        const album_big_btn_left = element.querySelector('.review_product-item-user-album-big-btn_left')
        const album_big_btn_right = element.querySelector('.review_product-item-user-album-big-btn_right')

        const album_big_wrap_list_item = element.querySelectorAll('.review_product-item-user-album-item-big')
        const album_big_wrap_list = element.querySelector('.review_product-item-user-album-big')
        const album_big_container = element.querySelector('.review_product-item-user-album-big-container')
        const album_wrap_list_item = element.querySelectorAll('.review_product-item-user-album-item img')

        function max_width() {
            let maxWidth = 0;
            for (let i = 0; i < album_big_wrap_list_item.length - 2; i++) {
                maxWidth += album_big_wrap_list_item[i].clientWidth
                // console.log(maxWidth)
            }
            return maxWidth;
        }
        let nextItem = element[0];
        let preItem = element[0];

        album_big_btn_right.onclick = function () {

            for (const item of album_big_wrap_list_item) {
                if (album_big_wrap_list.style.marginLeft == max_width() * -1 + 'px') {
                    album_big_btn_right.style.display = 'none'
                }
                else {
                    album_big_btn_right.style.display = 'flex'
                }
                if (album_big_wrap_list.style.marginLeft !== 0 || album_big_wrap_list.style.marginLeft !== '0px') {
                    album_big_btn_left.style.display = 'flex'
                } else {
                    album_big_btn_left.style.display = 'none'
                }
                if (window.getComputedStyle(album_big_wrap_list).marginLeft == '0px') {
                    nextItem = null
                    // widthItemRight = nextItem.clientWidth;
                    widthRight = 0
                }

                if (widthRight + 'px' == window.getComputedStyle(album_big_wrap_list).marginLeft) {
                    // Found selected item
                    // Choose next item
                    nextItem = item.nextElementSibling;
                    widthItemRight = item.clientWidth;
                    break;
                }
                widthRight -= item.clientWidth

            }
            console.log(widthRight)
            console.log(widthItemRight)


            if (nextItem) {
                itemNow = nextItem
                for (const item of album_wrap_list_item) {
                    if (item.src.replace('_tn', '') === itemNow.querySelector('img').src) {
                        console.log(item)
                        console.log(itemNow)
                        item.parentElement.style.border = '2px solid #ee4d2d'
                        app.onclick = function () {
                            album_big_container.style.display = 'none'
                            item.parentElement.style.border = '0px solid #ee4d2d'
                        }
                        element.querySelector('.review_product-item-user-album').onclick = function (event) {
                            event.stopPropagation();
                        }
                        album_big_container.onclick = function (event) {
                            event.stopPropagation();
                        }
                    }
                    else {
                        item.parentElement.style.border = '0px solid #ee4d2d'
                    }
                }
                console.log(itemNow)
                album_big_container.style.width = nextItem.clientWidth + 'px'
                element.querySelector('.review_product-item-user-album-big-wrap').style.width = nextItem.clientWidth + 'px'
                album_big_wrap_list.style.marginLeft = widthRight - widthItemRight + 'px'
                widthRight = 0

            } else {
                // album_big_container.style.width = album_big_wrap_list_item[0].clientWidth
            }
        }
        if (album_big_wrap_list.style.marginLeft == 0 || album_big_wrap_list.style.marginLeft == '0px') {
            album_big_btn_left.style.display = 'none'
        } else {
            album_big_btn_left.style.display = 'flex'

        }
        album_big_btn_left.onclick = function () {

            for (const item of album_big_wrap_list_item) {
                if (album_big_wrap_list.style.marginLeft === 0 || album_big_wrap_list.style.marginLeft === '0px') {
                    album_big_btn_left.style.display = 'none'
                } else {
                    album_big_btn_left.style.display = 'flex'
                }
                if (album_big_wrap_list.style.marginLeft == 0 || album_big_wrap_list.style.marginLeft == '0px') {
                    album_big_btn_left.style.display = 'none'
                }
                if (album_big_wrap_list.style.marginLeft !== max_width() * -1 + 'px') {
                    album_big_btn_right.style.display = 'flex'
                }

                console.log(item)
                if (album_big_wrap_list.style.marginLeft !== '0px') {
                    preItem = false;
                    widthItem = 0
                }
                if (album_big_wrap_list.style.marginLeft == 0) {
                    album_big_btn_left.style.display = 'none'
                }
                if (width + 'px' == album_big_wrap_list.style.marginLeft) {
                    // Found selected item
                    // Choose next item
                    preItem = item.previousElementSibling;
                    widthItem = preItem.clientWidth;
                    break;
                } else {

                    width -= item.clientWidth;


                }

            }
            console.log(widthItem)

            if (preItem) {
                itemNow = preItem
                for (const item of album_wrap_list_item) {

                    if (item.src.replace('_tn', '') === itemNow.querySelector('img').src) {
                        console.log(item)
                        console.log(itemNow)
                        item.parentElement.style.border = '2px solid #ee4d2d'
                        app.onclick = function () {
                            album_big_container.style.display = 'none'
                            item.parentElement.style.border = '0px solid #ee4d2d'
                        }
                        element.querySelector('.review_product-item-user-album').onclick = function (event) {
                            event.stopPropagation();
                        }
                        album_big_container.onclick = function (event) {
                            event.stopPropagation();
                        }
                    }
                    else {
                        item.parentElement.style.border = '0px solid #ee4d2d'
                    }
                }
                album_big_container.style.width = preItem.clientWidth + 'px'
                element.querySelector('.review_product-item-user-album-big-wrap').style.width = preItem.clientWidth + 'px'
                album_big_wrap_list.style.marginLeft = width + widthItem + 'px'
                width = 0;
            } else {
                // album_big_container.style.width = album_big_wrap_list_item[album_big_wrap_list_item.length -1 ].clientWidth +'px';
                // review_product_item[i].querySelector('.review_product-item-user-album-big-wrap').style.width = album_big_wrap_list_item[album_big_wrap_list_item.length -1 ].clientWidth + 'px';
                // album_big_wrap_list.style.marginLeft =  width   + 'px'
                width = 0;
            }
        }
        for (let i = 0; i < album_wrap_list_item.length; i++) {
            album_wrap_list_item[i].onclick = function () {
                album_big_container.style.display = 'block'
                app.onclick = function () {
                    album_big_container.style.display = 'none'
                    album_wrap_list_item[i].parentElement.style.border = '0px solid #ee4d2d'
                }
                element.querySelector('.review_product-item-user-album').onclick = function (event) {
                    event.stopPropagation();
                }
                album_big_container.onclick = function (event) {
                    event.stopPropagation();
                }
                if (album_wrap_list_item[i].src.replace('_tn', '') == album_big_wrap_list_item[0].querySelector('img').src.replace('_tn', '')) {
                    album_big_btn_left.style.display = 'none'
                } else {
                    album_big_btn_left.style.display = 'flex'
                }
                if (album_wrap_list_item[i].src.replace('_tn', '') == album_big_wrap_list_item[album_big_wrap_list_item.length - 1].querySelector('img').src.replace('_tn', '') || album_wrap_list_item[i + 1].src == 'http://localhost:8080/0') {
                    album_big_btn_right.style.display = 'none'
                    console.log(album_big_wrap_list_item.id)
                } else {
                    album_big_btn_right.style.display = 'flex'
                }
                album_wrap_list_item[i].parentElement.style.border = '2px solid #ee4d2d'
                for (const k of album_wrap_list_item) {
                    if (k !== album_wrap_list_item[i]) {
                        k.parentElement.style.border = '0px solid #fff'

                    }
                }
                for (const a of album_big_wrap_list_item) {
                    if (a.querySelector('img').src.replace('_tn', '') == album_wrap_list_item[i].src.replace('_tn', '')) {
                        // album_big_wrap_list.style.marginLeft = width_a +'px'
                        // break;
                        console.log(a.querySelector('img').src)
                        console.log(album_wrap_list_item[i])
                        width_item_a = a.clientWidth
                        break;
                    }
                    else {
                        width_a += a.clientWidth
                    }
                }
                console.log(width_a)
                console.log(width_item_a)
                album_big_wrap_list.style.marginLeft = width_a * -1 + 'px'
                album_big_container.style.width = width_item_a + 'px'
                element.querySelector('.review_product-item-user-album-big-wrap').style.width = width_item_a + 'px'
                width_a = 0
            }
        }
    }


}
comment_album_wrap()

function feedback_more() {

    for (const item of feedback_product_more) {
        let feedback_product_more_title = item.querySelector('.feedback_product-more-title')
        item.onclick = function (event) {
            app.onclick = function () {
                feedback_product_more_title.style.display = 'none'
            }
            event.stopPropagation();
            feedback_product_more_title.style.display = 'flex'
        }
    }
}
feedback_more()


const shop_avatar = document.querySelector('.shop_avatar')
shop_avatar.onclick = function (e) {
    e.preventDefault();

    window.location.href = `/shop?idshop=${idshop}&page=1`;

}

