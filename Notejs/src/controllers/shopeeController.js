// import db from '../models/index';
// import CRUDServices from '../services/CRUD-services';
// import jwt from 'jsonwebtoken';
import axios from 'axios';


let getSearch_suggestion = (req, res, next) => {
  const axios = require('axios');

  axios.get('https://shopee.vn/api/v4/search/search_suggestion?bundle=popsearch&limit=8&offset=0')
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}
let getBatch_list_by_spaces = (req, res, next) => {
  const axios = require('axios');

  const params = {
    "spaces": [
      {
        "space_key": "PC-VN-CATEGORY_CAROUSEL_01",
        "space_filter": [
          {
            "key": "category_id",
            "value": "11035567"
          }
        ]
      }
    ],
    "extra_data": "{}"
  }

  axios.get('https://shopee.vn/api/v4/banner/batch_list_by_spaces', params)
    .then(response => {
      const data = response.data;
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}


let getFlash_sale = (req, res, next) => {
  const axios = require('axios');

  axios.get('https://shopee.vn/api/v4/flash_sale/flash_sale_get_items?limit=50&need_personalize=true&offset=0&order_mode=2&sort_soldout=true&with_dp_items=true')
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}
let getMall_shops = (req, res, next) => {
  const axios = require('axios');

  axios.get('https://shopee.vn/api/v4/homepage/mall_shops?limit=15')
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}
let getRecommend = (req, res, next) => {
  const axios = require('axios');

  axios.get('https://shopee.vn/api/v4/recommend/recommend?bundle=daily_discover_main&item_card=3&limit=60&offset=0&view_session_id=bf16ad62-ca6c-4cb6-9408-b6c2a963e6f5')
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}
let getPageRecommend = (req, res, next) => {
  const axios = require('axios');
  const page = req.query.page
  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "*/*",
      "accept-encodinge": "gzip, deflate, br",
      "referer": `https://shopee.vn/daily_discover?pageNumber=${page}`,
      "Sec-Ch-Ua-Mobile": "?0",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    // params: params
  };
  axios.get('https://shopee.vn/api/v4/recommend/recommend?bundle=daily_discover_main&item_card=3&limit=180&offset=60&view_session_id=212a363e-fe7a-4aa5-bc12-99a89c73b3e4')
    .then(response => {
      const data = response.data;
      console.log(page)
      console.log(response.headers);
      console.log(data.data.sections[0].data.item[0].name);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}
let getTop_products = (req, res, next) => {
  const axios = require('axios');

  axios.get('https://shopee.vn/api/v4/recommend/recommend?bundle=top_products_homepage&limit=20')
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let get_Item = (req, res, next) => {

  const axios = require('axios');
  const iditem = req.query.iditem
  const idshop = req.query.idshop

  console.log(iditem);
  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "application/json",
      "accept-encodinge": "gzip, deflate, br",
      "Sec-Ch-Ua-Mobile": "?0",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    // params: params
  };
  axios.get(`https://shopee.vn/api/v4/pdp/get_pc?shop_id=${idshop}&item_id=${iditem}`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}
let getShopInfo = (req, res, next) => {

  const axios = require('axios');
  const idshop = req.query.idshop
  const iditem = req.query.iditem
  console.log(iditem);
  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "application/json",
      "accept-encodinge": "gzip, deflate, br",
      "Sec-Ch-Ua-Mobile": "?0",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    // params: params
  };
  axios.get(`https://shopee.vn/api/v4/product/get_shop_info?shopid=${idshop}`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getShopbase = (req, res, next) => {

  const axios = require('axios');
  const username = req.query.username
  const config = {

    params: {
      "username": `${username}`
    }
  };
  axios.get(`https://shopee.vn/api/v4/shop/get_shop_base`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getShopCategories = (req, res, next) => {

  const axios = require('axios');
  const idshop = req.query.idshop
  const iditem = req.query.iditem
  console.log(iditem);
  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "application/json",
      "accept-encodinge": "gzip, deflate, br",
      "Sec-Ch-Ua-Mobile": "?0",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    // params: params
  };
  axios.get(`https://shopee.vn/api/v4/shop/get_categories?limit=20&offset=0&shopid=${idshop}&two_tier_cate=1&version=2`)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getShopRecomment = (req, res, next) => {

  const axios = require('axios');
  const idshop = req.query.idshop
  const page = req.query.page
  const config = {

    params: {
      "bundle": "shop_page_category_tab_main",
      "limit": "30",
      "offset": `${(parseInt(page) - 1) * 30}`,
      "shop_id": `${idshop}`,
      "sort_type": "1"
    }
  };
  axios.get(`https://shopee.vn/api/v4/shop/rcmd_items`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getShopTab = (req, res, next) => {

  const axios = require('axios');
  const config = {

    params: {
      "entry_point": "",
      "rcmd_condition": { "cat_id": null, "item_id": null, "upstream": "" },
      "shopid": 47462746,
      "version": 3
    }
  };
  axios.post(`https://shopee.vn/api/v4/shop/get_shop_tab`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getReviewsItem = (req, res, next) => {

  const axios = require('axios');
  const iditem = req.query.iditem
  const idshop = req.query.idshop
  console.log(iditem);
  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "application/json",
      "accept-encodinge": "gzip, deflate, br",
      "Sec-Ch-Ua-Mobile": "?0",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    // params: params
  };
  axios.get(`https://shopee.vn/api/v2/item/get_ratings?exclude_filter=0&filter=0&filter_size=0&flag=1&fold_filter=0&itemid=${iditem}&limit=6&offset=0&relevant_reviews=false&request_source=1&shopid=${idshop}&tag_filter=&type=0&variation_filters=`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getFirts_deal_0d = (req, res, next) => {

  const axios = require('axios');
  const urlAPI = req.query.urlAPI
  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "application/json",
      "accept-encodinge": "gzip, deflate, br",
      "Sec-Ch-Ua-Mobile": "?0",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    // params: params
  };
  axios.get(urlAPI, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getOfficial_shop = (req, res, next) => {

  const axios = require('axios');
  const catid = req.query.catid

  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "application/json",
      "accept-encodinge": "gzip, deflate, br",
      "Sec-Ch-Ua-Mobile": "?0",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    params: {
      "category_id": `${catid}`,
      "imit": 23,
      "offset": 0
    }
  };
  axios.get(`https://shopee.vn/api/v4/official_shop/get_shops`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}
let getPopular_collection = (req, res, next) => {

  const axios = require('axios');
  const catid = req.query.catid

  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "application/json",
      "accept-encodinge": "gzip, deflate, br",
      "Sec-Ch-Ua-Mobile": "?0",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    params: {
      "catid": `${catid}`
    }
  };
  axios.get(`https://shopee.vn/api/v4/pages/get_popular_collection`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}
let getThoitrangnam_rcm = (req, res, next) => {

  const axios = require('axios');
  const page = req.query.page
  const catid = req.query.catid
  const cat_level = req.query.cat_level
  console.log(catid)
  const config = {

    params: {
      "bundle": "category_landing_page",
      "cat_level": `${cat_level}`,
      "catid": `${catid}`,
      "limit": 60,
      "offset": `${(parseInt(page) - 1) * 60}`
    }
  };
  axios.get(`https://shopee.vn/api/v4/recommend/recommend`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getThoitrangnam_search_items = (req, res, next) => {

  const axios = require('axios');
  const page = req.query.page
  const catid = req.query.catid
  const cat_level = req.query.cat_level
  console.log(catid)
  const config = {
    headers: {
      "accept-language": "vi,en-US;q=0.9,en;q=0.8",
      "accept": "application/json",
      "accept-encodinge": "gzip, deflate, br",
      "Sec-Ch-Ua": '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest"
    },
    params: {
      "by": "pop",
      "categoryids": `100244`,
      "match_id": `11035567`,
      "limit": 60,
      "newest": `0`,
      "order": "desc",
      "page_type": "search",
      "scenario": "PAGE_CATEGORY",
      "version": 2,
      // "view_session_id": "0a24e78c-af55-444c-94e1-2d57cf2ee151"
    }
  };
  axios.get(`https://shopee.vn/api/v4/search/search_items`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getMenu_Search_filter = (req, res, next) => {

  const axios = require('axios');
  const catid = req.query.catid

  const config = {
    params: {
      "match_id": `${catid}`,
      "page_type": "search",
      "scenario": "PAGE_CATEGORY"
    }
  };
  axios.get(`https://shopee.vn/api/v4/search/search_filter_config`, config)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}

let getCategory_tree = (req, res, next) => {

  const axios = require('axios');

  axios.get(`https://shopee.vn/api/v4/pages/get_category_tree`)
    .then(response => {
      const data = response.data;
      // console.log(data);
      // Xử lí dữ liệu ở đây
      return res.send(data)
    })
    .catch(error => {
      console.log(error);
    });
}



module.exports = {
  getSearch_suggestion: getSearch_suggestion,
  getBatch_list_by_spaces: getBatch_list_by_spaces,
  getFlash_sale: getFlash_sale,
  getMall_shops: getMall_shops,
  getRecommend: getRecommend,
  getPageRecommend: getPageRecommend,
  getTop_products: getTop_products,
  get_Item: get_Item,
  getShopInfo: getShopInfo,
  getShopbase: getShopbase,
  getShopRecomment: getShopRecomment,
  getShopTab: getShopTab,
  getReviewsItem: getReviewsItem,
  getFirts_deal_0d: getFirts_deal_0d,
  getShopCategories: getShopCategories,
  getOfficial_shop: getOfficial_shop,
  getPopular_collection: getPopular_collection,
  getThoitrangnam_rcm: getThoitrangnam_rcm,
  getMenu_Search_filter: getMenu_Search_filter,
  getCategory_tree: getCategory_tree,
  getThoitrangnam_search_items: getThoitrangnam_search_items
}