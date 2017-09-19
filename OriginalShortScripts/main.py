from pytrends.request import TrendReq
import pandas as pd
import matplotlib.pyplot as plt
plt.style.use('ggplot')
import numpy as np
import DataFrameUtils
import GoogleTrendsData
import CryptoCoinData
from sklearn.preprocessing import StandardScaler

coins = ["Bitcoin",
         "Ethereum",
         "Ripple",
         "Litecoin",
         "Dash",
         "Stratis",
         "Monero",
         "Bytecoin",
         "Ethereum Classic",
         "DigiByte"]

searchQueries = [c + ' price' for c in coins]
startAndEndDates = '2017-05-12 2017-06-12'

for i in range(10):
    searchesOverTime = GoogleTrendsData.getSearchesOverTime(searchQueries[i], startAndEndDates)
    priceOverTime = CryptoCoinData.getPriceOverTime(coins[i])

    # scale the features:
    searchesOverTime = DataFrameUtils.normalize(searchesOverTime)
    priceOverTime = DataFrameUtils.normalize(priceOverTime)

    df = pd.concat([searchesOverTime, priceOverTime], axis=1)
    start = df.ix[:,0].first_valid_index()
    end = df.ix[:,0].last_valid_index()
    df = df.truncate(before=start, after=end)

    plt.plot(df)
    plt.title('Google searches for \'' + searchQueries[i] + '\' : RED, price: BLUE')
    plt.savefig('plot' + searchQueries[i] + 'againstGoogleSearches1Month.png')
    plt.clf()


print ("done")