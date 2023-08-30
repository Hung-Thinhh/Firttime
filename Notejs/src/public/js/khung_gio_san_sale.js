
axios.get('/api/khung-gio-san-sale/firts_deal_0d', {
    params: {
        urlAPI: 'https://shopee.vn/api/v4/collection/get_items?collection_id=1241812&limit=25&show_collection_info=true&source=1',
    }
})
    .then(response => {
        const item = document.querySelector('.list1').children
        console.log(response.data.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 8; i++) {
                // console.log(response.data.data.items[i].item_card_full.image)
                item[i].setAttribute('id', `${response.data.data.items[i].item_card_full.itemid}_${response.data.data.items[i].item_card_full.shopid}`);

                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.items[i].item_card_full.image}`
                item_img.src = `${item_img_src}`

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
                    const stock = response.data.data.sections[0].data.item[i].stock

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
            for (let i = 0; i < 8; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                // console.log(response.data.data.items[i].item_card_full.name)

                const item_titles = response.data.data.items[i].item_card_full.name
                item_title.innerHTML = response.data.data.items[i].item_card_full.name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 8; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.items[i].item_card_full.price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.items[i].item_card_full.price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 8; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.items[i].item_card_full.discount
                item_discount.innerHTML = (response.data.data.items[i].item_card_full.discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 8; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.items[i].item_card_full.has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 8; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = response.data.data.items[i].item_card_full.sold
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/khung-gio-san-sale/firts_deal_0d', {
    params: {
        urlAPI: 'https://shopee.vn/api/v4/collection/get_items?collection_id=2457412&limit=25&show_collection_info=true&source=1',
    }
})
    .then(response => {
        const item = document.querySelector('.list2').children
        console.log(response.data.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 8; i++) {
                // console.log(response.data.data.items[i].item_card_full.image)

                item[i].setAttribute('id', `${response.data.data.items[i].item_card_full.itemid}_${response.data.data.items[i].item_card_full.shopid}`);

                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.items[i].item_card_full.image}`
                item_img.src = `${item_img_src}`

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
                    const stock = response.data.data.sections[0].data.item[i].stock

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
            for (let i = 0; i < 8; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                // console.log(response.data.data.items[i].item_card_full.name)

                const item_titles = response.data.data.items[i].item_card_full.name
                item_title.innerHTML = response.data.data.items[i].item_card_full.name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 8; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.items[i].item_card_full.price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.items[i].item_card_full.price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 8; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.items[i].item_card_full.discount
                item_discount.innerHTML = (response.data.data.items[i].item_card_full.discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 8; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.items[i].item_card_full.has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 8; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = response.data.data.items[i].item_card_full.sold
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/khung-gio-san-sale/firts_deal_0d', {
    params: {
        urlAPI: 'https://shopee.vn/api/v4/collection/get_items?collection_id=1745388&limit=25&show_collection_info=true&source=1',
    }
})
    .then(response => {
        const item = document.querySelector('.list3').children
        console.log(response.data.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 8; i++) {
                // console.log(response.data.data.items[i].item_card_full.image)

                item[i].setAttribute('id', `${response.data.data.items[i].item_card_full.itemid}_${response.data.data.items[i].item_card_full.shopid}`);

                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.items[i].item_card_full.image}`
                item_img.src = `${item_img_src}`

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
                    const stock = response.data.data.sections[0].data.item[i].stock

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
            for (let i = 0; i < 8; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                // console.log(response.data.data.items[i].item_card_full.name)

                const item_titles = response.data.data.items[i].item_card_full.name
                item_title.innerHTML = response.data.data.items[i].item_card_full.name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 8; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.items[i].item_card_full.price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.items[i].item_card_full.price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 8; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.items[i].item_card_full.discount
                item_discount.innerHTML = (response.data.data.items[i].item_card_full.discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 8; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.items[i].item_card_full.has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 8; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = response.data.data.items[i].item_card_full.sold
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/khung-gio-san-sale/firts_deal_0d', {
    params: {
        urlAPI: 'https://shopee.vn/api/v4/collection/get_items?collection_id=1123034&limit=25&show_collection_info=true&source=1',
    }
})
    .then(response => {
        const item = document.querySelector('.list4').children
        console.log(response.data.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 8; i++) {
                // console.log(response.data.data.items[i].item_card_full.image)

                item[i].setAttribute('id', `${response.data.data.items[i].item_card_full.itemid}_${response.data.data.items[i].item_card_full.shopid}`);

                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.items[i].item_card_full.image}`
                item_img.src = `${item_img_src}`

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
                    const stock = response.data.data.sections[0].data.item[i].stock

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
            for (let i = 0; i < 8; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                // console.log(response.data.data.items[i].item_card_full.name)

                const item_titles = response.data.data.items[i].item_card_full.name
                item_title.innerHTML = response.data.data.items[i].item_card_full.name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 8; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.items[i].item_card_full.price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.items[i].item_card_full.price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 8; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.items[i].item_card_full.discount
                item_discount.innerHTML = (response.data.data.items[i].item_card_full.discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 8; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.items[i].item_card_full.has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 8; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = response.data.data.items[i].item_card_full.sold
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/khung-gio-san-sale/firts_deal_0d', {
    params: {
        urlAPI: 'https://shopee.vn/api/v4/collection/get_items?collection_id=2457438&limit=25&show_collection_info=true&source=1',
    }
})
    .then(response => {
        const item = document.querySelector('.list5').children
        console.log(response.data.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 8; i++) {
                // console.log(response.data.data.items[i].item_card_full.image)

                item[i].setAttribute('id', `${response.data.data.items[i].item_card_full.itemid}_${response.data.data.items[i].item_card_full.shopid}`);

                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.items[i].item_card_full.image}`
                item_img.src = `${item_img_src}`

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
                    const stock = response.data.data.sections[0].data.item[i].stock

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
            for (let i = 0; i < 8; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                // console.log(response.data.data.items[i].item_card_full.name)

                const item_titles = response.data.data.items[i].item_card_full.name
                item_title.innerHTML = response.data.data.items[i].item_card_full.name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 8; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.items[i].item_card_full.price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.items[i].item_card_full.price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 8; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.items[i].item_card_full.discount
                item_discount.innerHTML = (response.data.data.items[i].item_card_full.discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 8; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.items[i].item_card_full.has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 8; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = response.data.data.items[i].item_card_full.sold
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/khung-gio-san-sale/firts_deal_0d', {
    params: {
        urlAPI: 'https://shopee.vn/api/v4/collection/get_items?collection_id=2457406&limit=25&show_collection_info=true&source=1',
    }
})
    .then(response => {
        const item = document.querySelector('.list6').children
        console.log(response.data.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 8; i++) {
                // console.log(response.data.data.items[i].item_card_full.image)

                item[i].setAttribute('id', `${response.data.data.items[i].item_card_full.itemid}_${response.data.data.items[i].item_card_full.shopid}`);

                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.items[i].item_card_full.image}`
                item_img.src = `${item_img_src}`

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
                    const stock = response.data.data.sections[0].data.item[i].stock

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
            for (let i = 0; i < 8; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                // console.log(response.data.data.items[i].item_card_full.name)

                const item_titles = response.data.data.items[i].item_card_full.name
                item_title.innerHTML = response.data.data.items[i].item_card_full.name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 8; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.items[i].item_card_full.price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.items[i].item_card_full.price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 8; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.items[i].item_card_full.discount
                item_discount.innerHTML = (response.data.data.items[i].item_card_full.discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 8; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.items[i].item_card_full.has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 8; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = response.data.data.items[i].item_card_full.sold
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
    })
    .catch(error => {
        console.error(error);
    });

axios.get('/api/khung-gio-san-sale/firts_deal_0d', {
    params: {
        urlAPI: 'https://shopee.vn/api/v4/collection/get_items?collection_id=2485382&limit=25&show_collection_info=true&source=1',
    }
})
    .then(response => {
        const item = document.querySelector('.list7').children
        console.log(response.data.data)
        // const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')

        function img_item() {
            for (let i = 0; i < 8; i++) {
                // console.log(response.data.data.items[i].item_card_full.image)

                item[i].setAttribute('id', `${response.data.data.items[i].item_card_full.itemid}_${response.data.data.items[i].item_card_full.shopid}`);

                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-img')
                const item_img_src = `https://cf.shopee.vn/file/${response.data.data.items[i].item_card_full.image}`
                item_img.src = `${item_img_src}`
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
                    const stock = response.data.data.sections[0].data.item[i].stock

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
            for (let i = 0; i < 8; i++) {
                const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
                // console.log(response.data.data.items[i].item_card_full.name)

                const item_titles = response.data.data.items[i].item_card_full.name
                item_title.innerHTML = response.data.data.items[i].item_card_full.name
            }
        }
        title_item()
        function price_item() {
            for (let i = 0; i < 8; i++) {
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = response.data.data.items[i].item_card_full.price
                item[i].querySelector('.fs-content-image-list-item-top-right').style.display = 'none';

                item_price.innerHTML = (response.data.data.items[i].item_card_full.price / 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item() {
            for (let i = 0; i < 8; i++) {
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = response.data.data.items[i].item_card_full.discount
                item_discount.innerHTML = (response.data.data.items[i].item_card_full.discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item() {
            for (let i = 0; i < 8; i++) {
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = response.data.data.items[i].item_card_full.has_lowest_price_guarantee
                if (!item_guarantees) {
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item() {
            for (let i = 0; i < 8; i++) {
                const img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = response.data.data.items[i].item_card_full.sold
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
    })
    .catch(error => {
        console.error(error);
    });

fetch('./json/khung_gio_san_sale-Recomment.json')
    .then(function (response) {
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function (response) {
        const item = document.querySelector('.list9').children
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
                    const sole = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought span').innerHTML
                    const stock = response.data.data.sections[0].data.item[i].stock

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
                let historical_sold = 0
                if (item_reviews / 1000 > 1) {
                    item_review.innerHTML = `Đã bán ${(item_reviews / 1000).toFixed(1)}k`
                } else {
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }

                img_overlay.src = 'https://down-vn.img.susercontent.com/file/vn-50009109-bc0cceed6c6b2da905069467bf1787cb'


            }
        }
    });

function Move_list_item(list_full, btn_right, btn_left) {
    const list_full_position_max = (100 / (list_full.children.length / 6)) - 100;
    const list_full_position_min = (100 / (list_full.children.length / 6));
    const mod_list = list_full.children.length % 6
    const width_wrap = document.querySelector('.container__main-category-fs-content-image-list-wrap').offsetWidth
    const width_item = list_full.children[0].offsetWidth
    const width_deficit = width_item * 6 - width_wrap
    console.log(width_wrap)
    console.log(width_item * 6)
    console.log(width_deficit)
    console.log(mod_list)
    let position_sale = 0;
    btn_right.onclick = function () {

        if (mod_list > 0) {
            if (position_sale < list_full_position_max + list_full_position_min + 1) {
                position_sale -= list_full_position_min
                list_full.style.transform = `translate(${position_sale - position_sale * (6 - mod_list) / 6 - width_deficit / width_wrap * 100}%,0%)`
                console.log(width_deficit / width_wrap * 100)
                btn_left.style.display = 'flex'
                btn_right.style.display = 'none'
            } else {
                position_sale -= list_full_position_min
                list_full.style.transform = `translate(${position_sale}%,0%)`
                btn_right.style.display = 'flex'
                btn_left.style.display = 'flex'
            }
        } else {
            if (position_sale < list_full_position_max + list_full_position_min + 1) {
                position_sale -= list_full_position_min
                list_full.style.transform = `translate(${position_sale}%,0%)`
                btn_left.style.display = 'flex'
                btn_right.style.display = 'none'
            } else {
                position_sale -= list_full_position_min
                list_full.style.transform = `translate(${position_sale}%,0%)`
                btn_right.style.display = 'flex'
                btn_left.style.display = 'flex'
            }
        }

    }
    btn_left.onclick = function () {
        if (position_sale == 0) {
            position_sale = 0
            list_full.style.transform = `translate(${position_sale}%,0%)`
            btn_right.style.display = 'flex'
            btn_left.style.display = 'none'
        }
        else {
            if (position_sale == list_full_position_min * (-1)) {
                position_sale += list_full_position_min
                list_full.style.transform = `translate(${position_sale}%,0%)`
                btn_right.style.display = 'flex'
                btn_left.style.display = 'none'
            }
            else {
                position_sale += list_full_position_min
                list_full.style.transform = `translate(${position_sale}%,0%)`
                btn_right.style.display = 'flex'
                btn_left.style.display = 'flex'
            }

        }
    }

}

const list1 = document.querySelector('.list1')
const container__main_list1 = list1.parentElement.parentElement.querySelector('.container__main-category-fs-content-image-list')
const sale_btn_left1 = list1.parentElement.parentElement.querySelector('.sale_btn_left')
const sale_btn_right1 = list1.parentElement.parentElement.querySelector('.sale_btn_right')
Move_list_item(container__main_list1, sale_btn_right1, sale_btn_left1)
const list2 = document.querySelector('.list2')
const container__main_list2 = list2.parentElement.parentElement.querySelector('.container__main-category-fs-content-image-list')
const sale_btn_left2 = list2.parentElement.parentElement.querySelector('.sale_btn_left')
const sale_btn_right2 = list2.parentElement.parentElement.querySelector('.sale_btn_right')
Move_list_item(container__main_list2, sale_btn_right2, sale_btn_left2)
const list3 = document.querySelector('.list3')
const container__main_list3 = list3.parentElement.parentElement.querySelector('.container__main-category-fs-content-image-list')
const sale_btn_left3 = list3.parentElement.parentElement.querySelector('.sale_btn_left')
const sale_btn_right3 = list3.parentElement.parentElement.querySelector('.sale_btn_right')
Move_list_item(container__main_list3, sale_btn_right3, sale_btn_left3)
const list5 = document.querySelector('.list5')
const container__main_list5 = list5.parentElement.parentElement.querySelector('.container__main-category-fs-content-image-list')
const sale_btn_left5 = list5.parentElement.parentElement.querySelector('.sale_btn_left')
const sale_btn_right5 = list5.parentElement.parentElement.querySelector('.sale_btn_right')
Move_list_item(container__main_list5, sale_btn_right5, sale_btn_left5)
const list6 = document.querySelector('.list6')
const container__main_list6 = list6.parentElement.parentElement.querySelector('.container__main-category-fs-content-image-list')
const sale_btn_left6 = list6.parentElement.parentElement.querySelector('.sale_btn_left')
const sale_btn_right6 = list6.parentElement.parentElement.querySelector('.sale_btn_right')
Move_list_item(container__main_list6, sale_btn_right6, sale_btn_left6)
const list7 = document.querySelector('.list7')
const container__main_list7 = list7.parentElement.parentElement.querySelector('.container__main-category-fs-content-image-list')
const sale_btn_left7 = list7.parentElement.parentElement.querySelector('.sale_btn_left')
const sale_btn_right7 = list7.parentElement.parentElement.querySelector('.sale_btn_right')
Move_list_item(container__main_list7, sale_btn_right7, sale_btn_left7)
const list4 = document.querySelector('.list4')
const container__main_list4 = list4.parentElement.parentElement.querySelector('.container__main-category-fs-content-image-list')
const sale_btn_left4 = list4.parentElement.parentElement.querySelector('.sale_btn_left')
const sale_btn_right4 = list4.parentElement.parentElement.querySelector('.sale_btn_right')
Move_list_item(container__main_list4, sale_btn_right4, sale_btn_left4)
