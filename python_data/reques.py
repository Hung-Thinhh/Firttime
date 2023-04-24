import requests
import time
import random
import pandas as pd
import json
cookies = {
    'SPC_F=Eezifg2Qxz7JFS13VRFfbftugLfQmBpy; REC_T_ID=37698612-5a65-11ec-92ea-48df37dec2a8; G_ENABLED_IDPS=google; SPC_CLIENTID=RWV6aWZnMlF4ejdKzvuembbqchtgdlpz; _hjSessionUser_868286=eyJpZCI6ImY3NzYxYzZmLTUwZmQtNWM5Ni1hY2RjLTA4YzQ0NjhjODkxOCIsImNyZWF0ZWQiOjE2MzkyMTUyMDE4MzYsImV4aXN0aW5nIjp0cnVlfQ==; __utma=20759802.1148061261.1639215201.1643166480.1644631782.4; _ga_KK6LLGGZNQ=GS1.1.1662887657.7.0.1662887658.0.0.0; cto_bundle=mI6UFV9ZV2Y5c21jbyUyQjFQdTBKalJLJTJCc3MlMkZ2Vkt5dUtXZ1pqUUlKRVc0UmxjTHlCOXk4Rnc1Sm5uQXhubGk3eFVOMlllY3p6ekYzU1RTREJUeGh6WUNidjNzM3pNaVdBc2xOJTJGODhnem5NTnZXNWpvZHR4R2xQMEwwYnpDYTkxeUdtODRyd29hY014ZDQlMkY1eDhPNVZobEdpc2pRJTNEJTNE; _gcl_au=1.1.1537708770.1671329621; SPC_T_IV="ZXF6SUdMQVljdXE1NnNYVQ=="; SPC_T_ID="Mz3Tt4Hz97/QtLg5E6BBqsJhvJLqMptaG7WtiHJmghrcumjYvBRrHUVmD8Abrav1q5bifZze/HN6BrurE8Ty9VzFwTX+fRpa+n/lUBkPpmENwl/4J1q6x9W1e3DAn2q7JqdbXiiWJ/mfXOUz5oyMftJU85s+vrfpSupPSQppL20="; _ga_FV78QC1144=GS1.1.1674900523.4.0.1674900523.60.0.0; SPC_SI=hHC+YwAAAABlSk1GZlE0Sp+2DQEAAAAAYk5abEs4cDU=; _gid=GA1.2.2121986761.1675241975; language=vi; _med=affiliates; SPC_SC_TK=bbe092f0bed514e3671d37795b18ec28; SPC_SC_UD=165898961; SPC_STK=5tiuc1L0EG46NaFKrLUOXKWIPyELdda26Q9oATb4USKdlJ9wJUnHucpGa3vCXnAfg6Iwsn0LNTdlaIdRT8OgNo+zH5WEPgWiO4fTeGCTIf6xSEERKaFL/B93vft6w+1LsHT5cM81F3aiCRFP6jUOwHqCZbAVt01beCZkckeNd3MpNaf7Dg6L0na/rHrrWqNp; SC_DFP=HznzrQwuMbLQfKaZlnytvpMoTPURzCsa; _ga_3XVGTY3603=GS1.1.1675865084.1.1.1675865142.2.0.0; SPC_U=165898961; SPC_R_T_IV=QldLbmtsOFBzbHNEWDNxYw==; SPC_T_ID=2BcOwXaOFWraV1lS+PrZCkJk1WK6Y/BVk98kK3wirjr8ctDt/wgeQICz1c6rX9tJv8zO/W4Het98ac7wXvyzbeKUgDepV6wZOXQyamJr9TQh8vwPylkxXQYQuhsQ7/QfhTY7oQ1nKQh4+iLxMEqQP2mb513FTG69tYDFfB2xBtk=; SPC_T_IV=QldLbmtsOFBzbHNEWDNxYw==; SPC_R_T_ID=2BcOwXaOFWraV1lS+PrZCkJk1WK6Y/BVk98kK3wirjr8ctDt/wgeQICz1c6rX9tJv8zO/W4Het98ac7wXvyzbeKUgDepV6wZOXQyamJr9TQh8vwPylkxXQYQuhsQ7/QfhTY7oQ1nKQh4+iLxMEqQP2mb513FTG69tYDFfB2xBtk=; __LOCALE__null=VN; csrftoken=6fdkpjr0apNd3PnhTvXHxlJRMvs2uGGO; _QPWSDCXHZQA=cd782d47-858d-4e45-be9b-9d962bfd7c08; _hjIncludedInSessionSample_868286=0; _hjSession_868286=eyJpZCI6IjNhNzFjZGFiLTVlNGItNGExMy1iYjFmLTZjZmM1YzM0YTE5MCIsImNyZWF0ZWQiOjE2NzYzMDAwOTA4MzYsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; AMP_TOKEN=%24NOT_FOUND; _dc_gtm_UA-61914164-6=1; shopee_webUnique_ccd=QD5YMDV0qzyDfLFH%2Fbw5PA%3D%3D%7Cq5RurTXI978sfnbG3SAvhvpj3Mqw9HPA%2B9qwB6eJuIF6FksxUUj71iC5CFd3zCFbcEp5SCdqeby636ELckkiRad9Z6Az8a45zCZu%7CAKRzkZTnIx6zVZfi%7C06%7C3; ds=ca627e6154cb9ca68538868eec547356; _ga=GA1.1.1148061261.1639215201; _ga_M32T05RVZT=GS1.1.1676300093.412.1.1676300101.52.0.0'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
    'Referer': 'https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567',
    'x-requested-with': 'XMLHttpRequest',
    # 'Connection': 'keep-alive',
    # 'TE': 'Trailers',
}

params = {
    'bundle': 'category_landing_page',
    'cat_level': '1',
    'catid': '11035567',
    'limit': '60',
    'offset': '0',
}

product_item = []
for i in range(1, 3):
    params['cat_level'] = i
    response = requests.get('https://shopee.vn/api/v4/recommend/recommend?',params=params)#, cookies=cookies)
    item = []
    if response.status_code == 200:
        print('request success!!!')
        for a, record in enumerate(response.json().get('data').get('sections')[0].get('data').get('item')):
            item.append({ 'item{}'.format(a): record})
    product_item.append({'page{}'.format(i):item})        
    time.sleep(random.randrange(3, 10))


with open('product_item.json', 'w') as file:
    file.write(json.dumps(product_item, indent=5))




# df = pd.DataFrame(product_id)
# pd.to_json('product_id_ncds.json')
# json_str = json.dumps(pd)
# # print("Without indent:", json_str)
# with open("data.json", "w") as file:
#     file.write(json_str)