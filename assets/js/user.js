const container_menu_wrap_item = document.querySelectorAll('.container_menu_wrap_item')
const container_main_wrap_main = document.querySelectorAll('.container_main_wrap_main')





for(const element of container_menu_wrap_item){
    element.onclick = function(){

        if(element.classList[0] === 'container_menu_wrap_PurchaseOrder'){
            document.querySelector('.container_menu_wrap_myUser_menu').style.display = 'none'
            console.log('k ok')
            
            if(element.classList[2] == 'container_menu_wrap_item_buyCheck'){
                for(const main_item of container_main_wrap_main){
                    main_item.style.display = 'none'
                }
                document.querySelector('.container_main_order').style.display = 'block'
                console.log('yes')
            }
            if(element.classList[2] == 'container_menu_wrap_item_nofi'){
                for(const main_item of container_main_wrap_main){
                    main_item.style.display = 'none'
                }
                document.querySelector('.container_main_Notification').style.display = 'flex'
                console.log('yes')
            }
            if(element.classList[2] == 'container_menu_wrap_item_XuShopee'){
                for(const main_item of container_main_wrap_main){
                    main_item.style.display = 'none'
                }
                document.querySelector('.container_main_XuShopee').style.display = 'block'
                console.log('yes')
            }
        }
        else{
            document.querySelector('.container_menu_wrap_myUser_menu').style.display = 'block'
            if(element.classList[0] == 'container_menu_wrap_myUser_title' || element.classList[2] == 'item_file'){
                for(const main_item of container_main_wrap_main){
                    main_item.style.display = 'none'
                }
                
                document.querySelector('.container_main_top').style.display = 'block'
                console.log('yes')
            }
            console.log('here')
            if(element.classList[2] == 'item_address'){
                for(const main_item of container_main_wrap_main){
                    main_item.style.display = 'none'
                }
                console.log(1)
                document.querySelector('.container_main_address').style.display = 'block'
                console.log('yes')
            }
            if(element.classList[2] == 'item_password'){
                for(const main_item of container_main_wrap_main){
                    main_item.style.display = 'none'
                }
                document.querySelector('.container_main_password').style.display = 'block'
                console.log('yes')
            }
            

        }
        for(const e of container_menu_wrap_item){
            if(e.parentElement.classList == 'container_menu_wrap_myUser_menu'){
                e.style.color = 'rgba(0,0,0,.65)';
            }
            else{
                e.style.color = 'rgba(0,0,0,.87)';
            }
            console.log('á à')
        }
        element.style.color = '#ee4d2d'
    }
}


const container_main_order_title_item = document.querySelectorAll('.container_main_order_title_item')
for(const e of container_main_order_title_item){
    e.onclick = function(){
        for(const e of container_main_order_title_item){
            e.style.color = 'rgba(0,0,0,.8)'
            e.style.border = '0'
        }
        e.style.color = '#ee4d2d'
        e.style.borderBottom = '2px solid #ee4d2d'
        if(e.classList[1] == 'container_main_order_title_item_alls' || e.classList[1] == 'container_main_order_title_item_complete'){
            document.querySelector('.container_main_no ').style.display = 'none'
            document.querySelector('.container_main_order_main_item').style.display = 'block'
            

        }
        else{
            document.querySelector('.container_main_order_main_item').style.display = 'none'
            document.querySelector('.container_main_no ').style.display = 'flex'
        }
    }
}
const container_main_XuShopee_title_item = document.querySelectorAll('.container_main_XuShopee_title_item')
for(const e of container_main_XuShopee_title_item){
    e.onclick = function(){
        for(const e of container_main_XuShopee_title_item){
            e.style.color = 'rgba(0,0,0,.8)'
            e.style.border = '0'
        }
        e.style.color = '#ee4d2d'
        e.style.borderBottom = '2px solid #ee4d2d'
    }
}
const container_address_main_contact_update = document.querySelector('.container_address_main_contact_update')
const container_main_address_title_btn = document.querySelector('.container_main_address_title_btn')
const modal = document.querySelector('.modal')
container_address_main_contact_update.onclick = function(){
    modal.style.display = 'flex'
}
modal.onclick = function(){
    modal.style.display = 'none'
}
document.querySelector('.modal_footer_back').onclick = function(){
    modal.style.display = 'none'
}
document.querySelector('.modal_footer_ok').onclick = function(){
    modal.style.display = 'none'
}
document.querySelector('.modal_body').onclick = function(event){
    event.stopPropagation();
}