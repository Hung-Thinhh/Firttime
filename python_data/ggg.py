from seleniumwire import webdriver
import zlib

site_url = "https://shopee.co.id/Paha-Fillet-Ayam-Organik-Lacto-Farm-500gr-Paha-Fillet-Segar-Ayam-Probiotik-Organik-Paha-Boneless-Ayam-MPASI-Ayam-Sehat-Ayam-Anti-Alergi-Daging-Ayam-MPASI-i.382368918.8835294847"

driver = webdriver.Chrome()
driver.maximize_window()

# define scope to capture only specified url
driver.scopes = ["https://shopee.co.id/api/v4/item/get\?.*"]

print("starting to capture")

driver.get(site_url)

assert driver.last_request, "no request found"

target_response = driver.last_request.response
target_encoding = target_response.headers["content-encoding"]

target_response_data = target_response.body

if target_encoding:
    if target_encoding == "gzip":
        print("content is encoded")
        # from https://stackoverflow.com/a/2695575
        target_response_data = zlib.decompress(target_response_data, 16 + zlib.MAX_WBITS)
    else:
        raise ValueError("unsupported encoding")

print()
print("found data: ")
print(target_response_data)
print()

print("closing window")

driver.close()