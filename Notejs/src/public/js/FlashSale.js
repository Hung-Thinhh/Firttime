const hoursContainer1 = document.querySelector(".hours");
const minutesContainer1 = document.querySelector(".minutes");
const secondsContainer1 = document.querySelector(".seconds");

const last1 = new Date(0);
last1.setUTCHours(-1);

const tickState1 = true;

function updateTime() {
    const now = new Date();

    const lastHours = last1.getHours().toString();
    const nowHours = now.getHours().toString();
    if (lastHours !== nowHours) {
        updateContainer(hoursContainer1, nowHours);
    }

    const lastMinutes = last1.getMinutes().toString();
    const nowMinutes = now.getMinutes().toString();
    if (lastMinutes !== nowMinutes) {
        updateContainer(minutesContainer1, nowMinutes);
    }

    const lastSeconds = last1.getSeconds().toString();
    const nowSeconds = now.getSeconds().toString();
    if (lastSeconds !== nowSeconds) {
        //tick()
        updateContainer(secondsContainer1, nowSeconds);
    }

    //   last1 = now;
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

    const last1 = container.lastElementChild;
    if (last1.lastElementChild.textContent !== time[1]) {
        updateNumber(last1, time[1]);
    }
}

function updateNumber(element, number) {
    //element.last1ElementChild.textContent = number
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

fetch('/api/Flash_saleHome')
    .then(function (response) {
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function (response) {
        const item = document.querySelector('.container__main-category-recommed-panels-wrap ').children
        console.log(response.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 48; i++) {
                // console.log(response.data.items[i].item_card_full.image)
                item[i].setAttribute('id', `${response.data.items[i].itemid}_${response.data.items[i].shopid}`);
                // item[i].setAttribute('id', `${response.data.items[i].item_card_full.itemid}_${response.data.sections[0].data.item[i].shopid}`);
                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.items[i].image}`
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
                    const stock = response.data.items[i].stock

                    localStorage.setItem('myprice', `${price}`);
                    localStorage.setItem('mysole', null);
                    localStorage.setItem('mystock', `${stock}`);


                    console.log(price)
                    const productId = item[i].id;
                }
            }

        }
        img_item()
        function title_item() {
            for (let i = 0; i < 48; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                // console.log(response.data.items[i].name)

                // const item_titles = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                item_title.innerHTML = response.data.items[i].name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 48; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.items[i].price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.items[i].price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 48; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.items[i].discount
                item_discount.innerHTML = (response.data.items[i].discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 48; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.items[i].has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 48; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = response.data.items[i].sold
                console.log(item_reviews)
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
        reviews_item()
    });