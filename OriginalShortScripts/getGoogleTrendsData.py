from pytrends.request import TrendReq
import pandas as pd
import matplotlib.pyplot as plt
plt.style.use('ggplot')
import numpy as np
import DataFrameUtils



GOOGLE_USERNAME = "steventarantino@gmail.com"
GOOGLE_PASSWORD = "wtf12345"
pytrend = TrendReq(GOOGLE_USERNAME, GOOGLE_PASSWORD, custom_useragent="get google trends data script")


searchQuery = 'bitcoin price'
pytrend.build_payload(kw_list=[searchQuery], timeframe='now 4-H')
# note: 4 hours works but 5 doesn't.. weird shit cause this is a hacky solution..
bitcoinSearchesOverTime = pytrend.interest_over_time()

print(bitcoinSearchesOverTime)

oneDayFile = "bitcoin_data_24h_6.9.csv"
fiveYearFile = "bitcoinity_data.csv"
bitcoinPriceOverTime = pd.DataFrame.from_csv("C:\\Development\\BitCoinYuval\\" + oneDayFile)
print(bitcoinPriceOverTime)

bitcoinPriceOverTime = DataFrameUtils.normalize(bitcoinPriceOverTime)
bitcoinSearchesOverTime = DataFrameUtils.normalize(bitcoinSearchesOverTime)


priceColName = 'averageBitcoinPrice'
bitcoinPriceOverTime[priceColName] = bitcoinPriceOverTime.mean(axis=1)
bitcoinPriceOverTime[priceColName] += bitcoinSearchesOverTime[searchQuery].mean() - bitcoinPriceOverTime[priceColName].mean()

priceAndSearchesOverTime = pd.concat([bitcoinPriceOverTime[priceColName], bitcoinSearchesOverTime], axis=1)
mergedColumnNames = list(priceAndSearchesOverTime)

plt.plot(priceAndSearchesOverTime)
plt.show()

for i in range(100):
    priceAndSearchesOverTime["priceShiftedBy" + str(i)] = priceAndSearchesOverTime[priceColName].shift(-i)

print(priceAndSearchesOverTime)

correlationData = priceAndSearchesOverTime.corr()
print(correlationData)
# correlationData.plot(y=searchQuery, kind='barh')
# plt.show()

print("done")
