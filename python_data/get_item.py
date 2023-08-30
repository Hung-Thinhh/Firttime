import requests
import time
import random
import pandas as pd
import json
from tqdm import tqdm
# Đọc nội dung từ tệp JSON


cookies = {
    'SPC_F=Eezifg2Qxz7JFS13VRFfbftugLfQmBpy; REC_T_ID=37698612-5a65-11ec-92ea-48df37dec2a8; G_ENABLED_IDPS=google; SPC_CLIENTID=RWV6aWZnMlF4ejdKzvuembbqchtgdlpz; _hjSessionUser_868286=eyJpZCI6ImY3NzYxYzZmLTUwZmQtNWM5Ni1hY2RjLTA4YzQ0NjhjODkxOCIsImNyZWF0ZWQiOjE2MzkyMTUyMDE4MzYsImV4aXN0aW5nIjp0cnVlfQ==; __utma=20759802.1148061261.1639215201.1643166480.1644631782.4; _ga_KK6LLGGZNQ=GS1.1.1662887657.7.0.1662887658.0.0.0; cto_bundle=mI6UFV9ZV2Y5c21jbyUyQjFQdTBKalJLJTJCc3MlMkZ2Vkt5dUtXZ1pqUUlKRVc0UmxjTHlCOXk4Rnc1Sm5uQXhubGk3eFVOMlllY3p6ekYzU1RTREJUeGh6WUNidjNzM3pNaVdBc2xOJTJGODhnem5NTnZXNWpvZHR4R2xQMEwwYnpDYTkxeUdtODRyd29hY014ZDQlMkY1eDhPNVZobEdpc2pRJTNEJTNE; _gcl_au=1.1.1537708770.1671329621; SPC_T_IV="ZXF6SUdMQVljdXE1NnNYVQ=="; SPC_T_ID="Mz3Tt4Hz97/QtLg5E6BBqsJhvJLqMptaG7WtiHJmghrcumjYvBRrHUVmD8Abrav1q5bifZze/HN6BrurE8Ty9VzFwTX+fRpa+n/lUBkPpmENwl/4J1q6x9W1e3DAn2q7JqdbXiiWJ/mfXOUz5oyMftJU85s+vrfpSupPSQppL20="; _ga_FV78QC1144=GS1.1.1674900523.4.0.1674900523.60.0.0; SPC_SI=hHC+YwAAAABlSk1GZlE0Sp+2DQEAAAAAYk5abEs4cDU=; _gid=GA1.2.2121986761.1675241975; language=vi; _med=affiliates; SC_DFP=HznzrQwuMbLQfKaZlnytvpMoTPURzCsa; _ga_3XVGTY3603=GS1.1.1675865084.1.1.1675865142.2.0.0; SPC_U=165898961; SPC_R_T_IV=QldLbmtsOFBzbHNEWDNxYw==; SPC_T_ID=2BcOwXaOFWraV1lS+PrZCkJk1WK6Y/BVk98kK3wirjr8ctDt/wgeQICz1c6rX9tJv8zO/W4Het98ac7wXvyzbeKUgDepV6wZOXQyamJr9TQh8vwPylkxXQYQuhsQ7/QfhTY7oQ1nKQh4+iLxMEqQP2mb513FTG69tYDFfB2xBtk=; SPC_T_IV=QldLbmtsOFBzbHNEWDNxYw==; SPC_R_T_ID=2BcOwXaOFWraV1lS+PrZCkJk1WK6Y/BVk98kK3wirjr8ctDt/wgeQICz1c6rX9tJv8zO/W4Het98ac7wXvyzbeKUgDepV6wZOXQyamJr9TQh8vwPylkxXQYQuhsQ7/QfhTY7oQ1nKQh4+iLxMEqQP2mb513FTG69tYDFfB2xBtk=; __LOCALE__null=VN; csrftoken=RaeY9DjRuSnBgEn3NNrmxZEj3oFGChRd; _QPWSDCXHZQA=cd782d47-858d-4e45-be9b-9d962bfd7c08; AMP_TOKEN=%24NOT_FOUND; _hjAbsoluteSessionInProgress=1; _dc_gtm_UA-61914164-6=1; _ga_M32T05RVZT=GS1.1.1676689337.424.1.1676689362.35.0.0; _ga=GA1.1.1148061261.1639215201; shopee_webUnique_ccd=n3M1ykL%2BXpId%2BFLKZvqjxQ%3D%3D%7C77MzJCufDcWTvNA7lAMACYKpbmIRJlctCp6pQUs%2BGlor43muumS7X1qjjydf8vJE2qy9xH2FtNXn%2B0X%2Fs8VGnxuzqhTisvAPCWFYXw%3D%3D%7ChWV5ZD0gWxKPtSRf%7C06%7C3; ds=448dea8df8d5bb06433f7ad39f60a702'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
    'Referer': 'https://shopee.vn/',
    'x-requested-with': 'XMLHttpRequest',
    # 'Connection': 'keep-alive',
    # 'TE': 'Trailers',
}

params = {
    'itemid': 20972490711,
    'shopid': 947257509
}
product_item = []
for i in range(0, 1):
    response = requests.get('https://shopee.vn/api/v4/item/get?itemid=20972490711&shopid=947257509',headers=headers)
    if response.status_code == 200:
        print('request success!!!')
        data = response.json()
        print(data)
        print(json.dumps(data, ensure_ascii=False).encode('utf8').decode())
        product_item.append(response.json())
    else:
        print('request error')
    time.sleep(random.randrange(3, 10))
    


# with open('info_item.json', 'w') as file:
#     file.write(json.dumps(product_item, indent=5))
