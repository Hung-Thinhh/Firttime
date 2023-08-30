
import axios from 'axios';
import { writeFile, readFile } from 'fs/promises';

async function fetchProductData(productId) {
  const url = `https://shopee.vn/api/v4/recommend/recommend?bundle=daily_discover_main&item_card=2&limit=60&offset=240&view_session_id=e563ee40-5c37-4516-9dd2-3a30dfbabad6`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Accept': 'application/json',
    'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
    'Referer': 'https://shopee.vn/daily_discover?pageNumber=5',
    'x-requested-with': 'XMLHttpRequest'
  };

  axios.get(url, {
    headers: headers
  })
  .then(response => response.data)
  .then(async data => {
    // Xử lý dữ liệu và hiển thị trên trang web
    console.log(data);
    
  })
  .catch(error => console.error(error));
}

// Đọc dữ liệu từ tệp JSON đã lưu trước đó
// async function readProductData() {
//   const data = await readFile('123.json', 'utf-8');
//   console.log(data);
//   // Xử lý dữ liệu và hiển thị trên trang web
// }

// fetchProductData('123');
// Sau khi gọi phương thức fetchProductData, dữ liệu sẽ được lưu vào tệp 123.json
// Bạn có thể sử dụng phương thức readProductData để đọc dữ liệu từ tệp này vào bộ nhớ khi cần thiết

fetchProductData()
