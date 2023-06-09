let flash_sale = 'flash_sale.json'
let search_suggestions = 'search_suggestion.json'
let shop_mall = 'mall_shops.json'
let top_search = 'top_products.json'
let banner_top_full = 'banner_batch_list.json'
let itemAPI = 'recomment_item_Home.json'
let mall_banner = 'malls_banner.json'
fetch(flash_sale)
    .then(function(response){
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function(sales){
        
        const item_img = document.querySelectorAll('.fs-content-image-list-item-inline-img-main')
        const item_price = document.querySelectorAll('.fs-content-image-list-item-botton-deal-hot')
        const discount_list = document.querySelectorAll('.fs-content-image-list-item-top-right-name')
        
        for(let i =0 ; i<16; i++){
            const discount = discount_list[i].querySelector('span')
            discount.innerHTML = sales.data.items[i].discount
            item_img[i].src = `https://cf.shopee.vn/file/${sales.data.items[i].image}`
            item_price[i].innerHTML = (sales.data.items[i].price/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        }
       
    })
fetch(banner_top_full)
    .then(function(response){
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function(boxs) {
        let banner_top_items = document.querySelector('.banner-top-full__main-list')
        let banner = ''
        let dot = ''
        let dots = document.querySelector('.stardust-carousel__dots')
        const category_sale_img = document.querySelector('.container__main-category-sale-img')
        category_sale_img.src = boxs.data.space_banners[1].banners[0].image_url
        
        for(let i =0 ; i<5; i++){
            
            banner += `<li class="banner-top-full__main-list-item"><a href="${boxs.data.space_banners[0].banners[i].target_url}"><img src="${boxs.data.space_banners[0].banners[i].image_url}" alt="" class="banner-top-full__main-img-item banner-top-full__main-img-item-wed"></a></li>`
            dot += `<div class="stardust-carousel__dot"></div>`
        }
        banner_top_items.innerHTML = banner
        
        
    })
fetch(itemAPI)
    .then(function(response){
        return response.json()
    })
    .then(function(json_items){
        const item = document.querySelector('.container__main-category-recommed-panels-wrap').children
        console.log(item[0])
        const item_prices = item[0].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
        
        function img_item(){
            for(let i = 0; i < 48; i++){
                item[i].setAttribute('id', `${json_items.data.sections[0].data.item[i].itemid}_${json_items.data.sections[0].data.item[i].shopid}`);
                const item_img = item[i].querySelector('.container__main-category-recommed-panels-item-top-img')
                const item_img_src = `https://cf.shopee.vn/file/${json_items.data.sections[0].data.item[i].image}`
                item_img.src = `${item_img_src}`
            }
        } 
        img_item()
        function title_item() {
        for(let i = 0; i < 48; i++){
            const item_title = item[i].querySelector('.container__main-category-recommed-panels-item-botton-name-main')
            const item_titles = json_items.data.sections[0].data.item[i].name
            item_title.innerHTML = json_items.data.sections[0].data.item[i].name
        }
        }
        title_item()
        function price_item(){
            for(let i = 0; i < 48; i++){
                const item_price = item[i].querySelector('.container__main-category-recommed-panels-item-botton-cost-name2')
                const item_prices = json_items.data.sections[0].data.item[i].price
                item_price.innerHTML = (json_items.data.sections[0].data.item[i].price/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
        price_item()

        function discount_item(){
            for(let i = 0; i < 48; i++){
                const item_discount = item[i].querySelector('.fs-content-image-list-item-top-right-name span')
                const item_discounts = json_items.data.sections[0].data.item[i].discount
                item_discount.innerHTML = (json_items.data.sections[0].data.item[i].discount)
            }
        }
        discount_item()
        function has_lowest_price_guarantee_item(){
            for(let i = 0; i < 48; i++){
                const item_guarantee = item[i].querySelector('.container__main-category-recommed-panels-item-top-like')
                const item_guarantees = json_items.data.sections[0].data.item[i].has_lowest_price_guarantee
                if(!item_guarantees){
                    item_guarantee.style.display = 'none'
                }
            }
        }
        has_lowest_price_guarantee_item()
        function reviews_item(){
            for(let i = 0; i < 48; i++){
                const  img_overlay = item[i].querySelector('.container__main-category-recommed-panels-item-top-background-img')
                const item_review = item[i].querySelector('.container__main-category-recommed-panels-item-botton-bought')
                const item_reviews = json_items.data.sections[0].data.item[i].sold
                let historical_sold = 0
                if (item_reviews/1000 > 1){
                    item_review.innerHTML = `Đã bán ${(item_reviews/1000).toFixed(1)}k`
                }else{
                    item_review.innerHTML = `Đã bán ${item_reviews}`
                }
                if(img_overlay.src === ''|| img_overlay === undefined){
                    img_overlay.style.display = 'none'
                }
                
            }
        }
        reviews_item()
    })

//ok 
fetch(search_suggestions)
    .then(function(response){
        return response.json()
    })    
    .then(function(search_suggestion){
        const header__suggest = document.querySelectorAll('.header__suggest-list-item')
            for(let i = 0; i < 8; i++){
                const item_suggest = header__suggest[i]
                const item_suggests = search_suggestion[0].data.queries[i].text
                console.log(item_suggests)
                item_suggest.innerHTML = item_suggests
            }

    })

fetch(shop_mall)
    .then(function(response){
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function(mall){
        const mall_top_imgs = document.querySelectorAll('.container__main-category-mall-content-right-li-wrap img')
        const mall_titles = document.querySelectorAll('.container__main-category-mall-content-right-li-top-name')
        for(let i = 0; i < 13; i++){
            const item_imgs = mall[0].data.shops[i].image
            mall_top_imgs[i].src = `https://cf.shopee.vn/file/${item_imgs}`
            mall_titles[i].innerHTML = mall[0].data.shops[i].promo_text
        }
    })

fetch(top_search)
    .then(function(response){
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function(top_search){
        const top_search_top_imgs = document.querySelectorAll('.container__main-category-top-search-content-li-image')
        const statistical_item = document.querySelectorAll('.container__main-category-top-search-content-li-sales')
        const top_search_titles = document.querySelectorAll('.container__main-category-top-search-content-li-name')
        for(let i = 0; i < 24; i++){
            const item_imgs = top_search[0].data.sections[0].data.top_product[i].images[0]
            let item_reviews = top_search[0].data.sections[0].data.top_product[i].count
            top_search_top_imgs[i].src = `https://cf.shopee.vn/file/${item_imgs}`
            top_search_titles[i].innerHTML = top_search[0].data.sections[0].data.top_product[i].name
            if (item_reviews/1000 > 1){
                statistical_item.innerHTML = `Bán ${(item_reviews/1000).toFixed(1)}k+ / tháng`
            }else{
                statistical_item.innerHTML = `Bán ${item_reviews} / tháng`
            }
        }
    })
fetch(mall_banner)
    .then(function(response){
        return response.json()//json này trả về là 1 promise và response đã ở dạng JS
    })
    .then(function(mall_banner){
        const mall_banner_imgs = document.querySelectorAll('.container__main-category-mall-content-left-img')
        
        for(let i = 0; i < 6; i++){
            const item_imgs = mall_banner.data.space_banners[0].banners[i].image_url
            mall_banner_imgs[i].src = item_imgs
           
        }
    })





