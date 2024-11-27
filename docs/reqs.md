# Prerequisites:

1. MySQL Database with configured tables:

**products** with data filling from add_products.sql
+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| ID             | int          | NO   | PRI | NULL    | auto_increment |
| name           | varchar(255) | NO   |     | NULL    |                |
| aroma          | varchar(255) | NO   |     | NULL    |                |
| weight         | int          | NO   |     | NULL    |                |
| selling_price  | int          | NO   |     | NULL    |                |
| material_cost  | int          | NO   |     | NULL    |                |
| logistics_cost | int          | NO   |     | NULL    |                |
| packaging_cost | int          | NO   |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+

**customers**
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| ID           | int          | NO   | PRI | NULL    | auto_increment |
| full_name    | varchar(255) | NO   |     | NULL    |                |
| address      | varchar(255) | NO   |     | NULL    |                |
| email        | varchar(255) | NO   |     | NULL    |                |
| phone_number | varchar(255) | NO   |     | NULL    |                |
| gender       | tinyint      | NO   |     | NULL    |                |
| type         | tinyint      | NO   |     | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+

**orders**
+----------------+--------------+------+-----+-------------------+-------------------+
| Field          | Type         | Null | Key | Default           | Extra             |
+----------------+--------------+------+-----+-------------------+-------------------+
| ID             | int          | NO   | PRI | NULL              | auto_increment    |
| open_datetime  | datetime     | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| close_datetime | datetime     | YES  |     | NULL              |                   |
| status         | tinyint      | NO   |     | 0                 |                   |
| product_ids    | varchar(255) | NO   |     | NULL              |                   |
+----------------+--------------+------+-----+-------------------+-------------------+

2. Libraries: pip install -r requirements.txt
3. .env file with credentials to database:
    MYSQL_HOST=
    MYSQL_PORT=
    MYSQL_LOGIN=
    MYSQL_PASSWD=
