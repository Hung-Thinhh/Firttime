import express from 'express';
import axios from 'axios';
import { writeFile } from 'fs/promises';

const app = express();
const PORT = 5501;

app.get('/get-product-data/:productId', async (req, res) => {
  const productId = req.params.productId;

  const url = `https://shopee.vn/api/v4/product/get_shop_info?shopid=${productId}`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
    'Referer': 'https://shopee.vn/',
    'x-requested-with': 'XMLHttpRequest'
  };

  try {
    const response = await axios.get(url, { headers });
    const data = response.data;

    await writeFile(`product_${productId}.json`, JSON.stringify(data));

    res.status(200).json({ message: 'Product data saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
const productId = 1234; // Thay productId bằng sản phẩm được click
fetch(`http://localhost:5501/get-product-data/${productId}`)
  .then(response => response.json())
  .then(data => console.log(data.message))
  .catch(error => console.error(error));

