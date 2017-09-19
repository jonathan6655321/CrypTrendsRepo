from pytrends.request import TrendReq
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import DataFrameUtils

GOOGLE_USERNAME = "steventarantino@gmail.com"
GOOGLE_PASSWORD = "wtf12345"


"""
list of strings for search, 5 at most.
start, end dates: 'YYYY-MM-DD YYYY-MM-DD'
returns a dataframe of google search amounts according to time paramaters
"""
def getSearchesOverTime(searchQuery, startAndEndDates):
    pytrend = TrendReq(GOOGLE_USERNAME, GOOGLE_PASSWORD, custom_useragent="get google trends data script")
    pytrend.build_payload(kw_list=[searchQuery], timeframe=startAndEndDates)
    return pytrend.interest_over_time()

print(getSearchesOverTime(["bitcoin"], '2017-08-06 2017-08-07'))