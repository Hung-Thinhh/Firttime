import requests
import time
import random
import pandas as pd
import json
cookies = {
    'SPC_F=Eezifg2Qxz7JFS13VRFfbftugLfQmBpy; REC_T_ID=37698612-5a65-11ec-92ea-48df37dec2a8; G_ENABLED_IDPS=google; SPC_CLIENTID=RWV6aWZnMlF4ejdKzvuembbqchtgdlpz; _hjSessionUser_868286=eyJpZCI6ImY3NzYxYzZmLTUwZmQtNWM5Ni1hY2RjLTA4YzQ0NjhjODkxOCIsImNyZWF0ZWQiOjE2MzkyMTUyMDE4MzYsImV4aXN0aW5nIjp0cnVlfQ==; __utma=20759802.1148061261.1639215201.1643166480.1644631782.4; _ga_KK6LLGGZNQ=GS1.1.1662887657.7.0.1662887658.0.0.0; cto_bundle=mI6UFV9ZV2Y5c21jbyUyQjFQdTBKalJLJTJCc3MlMkZ2Vkt5dUtXZ1pqUUlKRVc0UmxjTHlCOXk4Rnc1Sm5uQXhubGk3eFVOMlllY3p6ekYzU1RTREJUeGh6WUNidjNzM3pNaVdBc2xOJTJGODhnem5NTnZXNWpvZHR4R2xQMEwwYnpDYTkxeUdtODRyd29hY014ZDQlMkY1eDhPNVZobEdpc2pRJTNEJTNE; _gcl_au=1.1.1537708770.1671329621; SPC_T_IV="ZXF6SUdMQVljdXE1NnNYVQ=="; SPC_T_ID="Mz3Tt4Hz97/QtLg5E6BBqsJhvJLqMptaG7WtiHJmghrcumjYvBRrHUVmD8Abrav1q5bifZze/HN6BrurE8Ty9VzFwTX+fRpa+n/lUBkPpmENwl/4J1q6x9W1e3DAn2q7JqdbXiiWJ/mfXOUz5oyMftJU85s+vrfpSupPSQppL20="; _ga_FV78QC1144=GS1.1.1674900523.4.0.1674900523.60.0.0; language=vi; SC_DFP=HznzrQwuMbLQfKaZlnytvpMoTPURzCsa; SPC_U=165898961; SPC_R_T_IV=QldLbmtsOFBzbHNEWDNxYw==; SPC_T_ID=2BcOwXaOFWraV1lS+PrZCkJk1WK6Y/BVk98kK3wirjr8ctDt/wgeQICz1c6rX9tJv8zO/W4Het98ac7wXvyzbeKUgDepV6wZOXQyamJr9TQh8vwPylkxXQYQuhsQ7/QfhTY7oQ1nKQh4+iLxMEqQP2mb513FTG69tYDFfB2xBtk=; SPC_T_IV=QldLbmtsOFBzbHNEWDNxYw==; SPC_R_T_ID=2BcOwXaOFWraV1lS+PrZCkJk1WK6Y/BVk98kK3wirjr8ctDt/wgeQICz1c6rX9tJv8zO/W4Het98ac7wXvyzbeKUgDepV6wZOXQyamJr9TQh8vwPylkxXQYQuhsQ7/QfhTY7oQ1nKQh4+iLxMEqQP2mb513FTG69tYDFfB2xBtk=; SPC_SI=lL31YwAAAAA2ZDZGWDZYM+XIKAAAAAAAUUtkR2dvdGI=; _gid=GA1.2.1052315439.1677595555; __LOCALE__null=VN; csrftoken=5fan8TqB9TYxdenFRvsLcoByvtNam6LV; SPC_IA=1; _QPWSDCXHZQA=cd782d47-858d-4e45-be9b-9d962bfd7c08; SPC_SC_TK=3e9b680efd79f50915b6a4fcb11268a1; SPC_SC_UD=165898961; SPC_STK=m8grQfXscvVKRczzNDYKuae2WoykNcrXqgg4bjnajkbDX+ovr8/gdiuGQCDKgkngT6qwp2US8Rk6JHCEAqPxJSnUlZTbBMdSxjaoYMzNwvW/HwK45i8XojLjmWJJJzaB8EHwCSfZQH9OhX0LhXUOZfxLp51sTJ1terT8iBOWyJ+gu3EZA3EDrg3C1Oi3Xp/w; SPC_ST=.UUJnNlZOQmMyRVdxNFQ3NWo0lSd+Wa26YEHZC+KkVExw42JmXqvrvN+ULE5yQ6HmYs8lIUwvvQ1mJ/3oF9dvXDR25U32zQaVeecW14zEgfHK9XDZYny4wRqAXVtaGpHghIPuZMikxAxAPLQPS0STGm0Nr4/3+I2wR01eMMIe8QNKPyVlh9aPy8QK8ypjuENw/4on5rqqUHUnmcDMtYrJMQ==; _ga_3XVGTY3603=GS1.1.1677658094.2.1.1677658752.26.0.0; _med=affiliates; _hjIncludedInSessionSample_868286=0; _hjSession_868286=eyJpZCI6IjQ2NGNhMjVhLTM0MWItNDExNS1iMWQ1LWI3NTU1OTk2M2VkOSIsImNyZWF0ZWQiOjE2Nzc2NjMwNjg3MzIsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.1.1148061261.1639215201; _ga_M32T05RVZT=GS1.1.1677663069.463.1.1677664707.60.0.0; SPC_EC=MTBnbjByRkZCZFVlWVdkWIZo0EpTdY19jfTDWRfsZjzM4m2ZHbW4Lka+8HEtQuvVQ5Z9Bi6Trau2qyp+AsA1WSv5gU04ujk3YtnW68PbRjDa2uz4r+qkjqoqD9jwbWDDsy8MH3AKd49PKNGADlXh9FlIXZfMQMKSCTQdmYk7PXA=; shopee_webUnique_ccd=Iwxsvy6MzxEpteSaexBqZQ%3D%3D%7CWw5y3LDEiL9yJNpoiE%2FwZzcC0NRhtE6Xa2Pl0PVtAs0vB7muC3MDnAdL5c4TPI8vpixasEKnxz8p48CgeCVaKnhkgLU2nL9XNtOraA%3D%3D%7CBIGjLw2ye1s%2BIz2r%7C06%7C3; ds=d3d142cc81e01676d6df636f3baf4c64'
}

headers = {
    'authority': 'shopee.vn',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8',
    'Referer': 'https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567?page=0',
    'x-requested-with': 'XMLHttpRequest',
}

params = {
    'bundle': 'category_landing_page',
    'cat_level': '1',
    'catid': '11035567',
    'limit': '60',
    'offset': '0'
}
a=0
product_item = []
for i in range(0, 540 , 60):
    a+=1
    response = requests.get(f'https://shopee.vn/api/v4/recommend/recommend?bundle=category_landing_page&cat_level=1&catid=11035567&limit=60&offset='+ str(i))#, cookies=cookies)
    if response.status_code == 200:
        print('request success!!!')
        product_item.append(response.json())
    time.sleep(random.randrange(3, 10))


with open('test10.json', 'w') as file:
    file.write(json.dumps(product_item, indent=5))
