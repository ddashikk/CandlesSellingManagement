import mysql.connector
import os
from dotenv import load_dotenv


def db_connect(func):
    """
    Decorator for connection to mysql DB.
    It's setting up the connection and forwarding cursor to func
    """

    def connector(*args, **kwargs):
        load_dotenv()
        host=os.getenv('MYSQL_HOST')
        port=os.getenv('MYSQL_PORT')
        user=os.getenv('MYSQL_USER')
        password=os.getenv('MYSQL_PASSWD')
        database='main'
        db = mysql.connector.connect(host=host, user=user, password=password, database=database)
        cursor = db.cursor(dictionary=True)
        kwargs['cursor'] = cursor
        responce = func(*args, **kwargs)
        db.commit()
        cursor.close()
        db.close()
        return responce

    return connector


@db_connect
def get_product_details(aroma, cursor):
    cursor.execute(f"SELECT * FROM products WHERE aroma = '{aroma}';")
    res = cursor.fetchone()
    return res

@db_connect
def get_product_details_by_id(id, cursor):
    cursor.execute(f"SELECT * FROM products WHERE ID = '{id}';")
    res = cursor.fetchone()
    return res