from lionshare import Lionshare

lionshare = Lionshare()

response = lionshare.get_prices('hour')
print(response)

response = lionshare.get_markets()
print(response)
