from pytrends.request import TrendReq
from cryptrendsDataMining.dbUtils import writeRowToTable

GOOGLE_USERNAME = "steventarantino@gmail.com"
GOOGLE_PASSWORD = "wtf12345"
PAST_HOUR = 'now 1-H'



def get_google_trends_data(kw_list, timeframe=PAST_HOUR):
    pytrend = TrendReq(GOOGLE_USERNAME , GOOGLE_PASSWORD, hl='en-US', tz=360, custom_useragent=None)
    pytrend.build_payload(kw_list=kw_list, cat=0, timeframe=timeframe)
    interest_over_time_df = pytrend.interest_over_time()
    return interest_over_time_df

def write_google_trends_dataframe_to_table(df):
    for index, row in df.iterrows():
        timestamp = index
        score = row[0]
        table_name = 'key_indicators_googletrends'
        writeRowToTable(table_name,[timestamp, str(score)])


print('fetching google trends data')
df = get_google_trends_data(["bitcoin"])
print('got the data')
print('inserting into google trends table')
write_google_trends_dataframe_to_table(df)
print('done')
