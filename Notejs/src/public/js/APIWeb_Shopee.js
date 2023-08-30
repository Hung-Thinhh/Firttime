const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\ACER\\Desktop\\shop\\product_item.json'; // đường dẫn tới file

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // console.log(data[0].item0)
  const obj = JSON.parse(data);
  // console.log(obj[0]);
  const item = obj[0].page1[0].item0.name
  console.log(item);
});

const filename = 'C:\\Users\\ACER\\Desktop\\shop\\flash_sale.json'; // đường dẫn tới file

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // console.log(data[0].item0)
  const obj = JSON.parse(data);
  // console.log(obj[0]);
  const item = obj.data.items[0].name
  console.log(item);
        const item_img = document.querySelectorAll('.fs-content-image-list-item-inline-img-main')
        const item_price = document.querySelectorAll('.fs-content-image-list-item-botton-deal-hot')
        for(let i =0 ; i<16; i++){
            item_img[i].src = `https://cf.shopee.vn/file/${obj.data.items[i].image}`
            item_price[i].innerHTML = (obj.data.items[i].price/100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        }
});

