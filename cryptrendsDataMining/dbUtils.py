import psycopg2

def writeRowToTable(table_name, row_values):

    sql = "INSERT INTO " + str(table_name) + " VALUES ("
    sql = sql + ', '.join(['\'' + str(x) + '\'' for x in row_values]) + ");"

    try:
        conn = psycopg2.connect(host="localhost", database="cryptrendsDB", user="usr", password="password")
        cur = conn.cursor()
        cur.execute(sql)
        conn.commit()
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
