from pytrends.request import TrendReq
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import DataFrameUtils
import requests
import datetime

mapCoinNameToSymbol = {"Bitcoin":'BTC',
                      "Ethereum": 'ETH',
                      "Ripple": 'XRP',
                      "Litecoin": 'LTC',
                      "Dash": 'DASH' ,
                      "Stratis": 'STRAT',
                      "Monero": 'XMR',
                      "Bytecoin": 'BCN',
                      "Ethereum Classic": 'ETC',
                      "DigiByte": 'DGB'}

def getPriceOverTime(coinSymbol):
    symbol = mapCoinNameToSymbol[coinSymbol]
    response = requests.get('https://min-api.cryptocompare.com/data/histohour?fsym=' + symbol + '&tsym=USD&limit=720&aggregate=3&e=CCCAGG')
    priceOverTime = [[e['time'], e['close']] for e in response.json()['Data']]
    for entry in priceOverTime:
        entry[0] = datetime.datetime.fromtimestamp(int(entry[0])).strftime('%Y-%m-%d')
    return pd.DataFrame(data=priceOverTime).set_index(0)