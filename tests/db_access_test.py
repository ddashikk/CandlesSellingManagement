import sys
import unittest
from unittest.mock import patch, MagicMock
sys.path.insert(1, 'main_app/')
from db_access import get_product_details, get_product_details_by_id


class TestDBModule(unittest.TestCase):

    @patch('db_access.mysql.connector.connect')
    @patch('db_access.load_dotenv')
    def test_get_product_details(self, mock_load_dotenv, mock_connect):
        mock_load_dotenv.return_value = None
        
        mock_cursor = MagicMock()
        mock_cursor.fetchone.return_value = {'ID': 1, 'aroma': 'Малиновый сорбет', 'name': 'Свеча в стакане'}
        mock_connect.return_value.cursor.return_value = mock_cursor

        aroma = 'Малиновый сорбет'
        result = get_product_details(aroma=aroma)

        mock_connect.assert_called_once()
        mock_cursor.execute.assert_called_once_with("SELECT * FROM products WHERE aroma = 'Малиновый сорбет';")
        self.assertEqual(result, {'ID': 1, 'aroma': 'Малиновый сорбет', 'name': 'Свеча в стакане'})

    
    @patch('db_access.mysql.connector.connect')
    @patch('db_access.load_dotenv')
    def test_get_product_details_by_id(self, mock_load_dotenv, mock_connect):
        mock_load_dotenv.return_value = None

        mock_cursor = MagicMock()
        mock_cursor.fetchone.return_value = {'ID': 2, 'aroma': 'Малиновый сорбет', 'name': 'Свеча в стакане'}
        mock_connect.return_value.cursor.return_value = mock_cursor

        product_id = 2
        result = get_product_details_by_id(id=product_id)

        mock_connect.assert_called_once()
        mock_cursor.execute.assert_called_once_with("SELECT * FROM products WHERE ID = '2';")
        self.assertEqual(result, {'ID': 2, 'aroma': 'Малиновый сорбет', 'name': 'Свеча в стакане'})

    @patch('db_access.mysql.connector.connect')
    @patch('db_access.load_dotenv')
    def test_decorator_closes_connection(self, mock_load_dotenv, mock_connect):
        mock_load_dotenv.return_value = None

        mock_connection = MagicMock()
        mock_cursor = MagicMock()
        mock_connect.return_value = mock_connection
        mock_connection.cursor.return_value = mock_cursor

        get_product_details(aroma="Малиновый сорбет")

        mock_cursor.close.assert_called_once()
        mock_connection.close.assert_called_once()


if __name__ == '__main__':
    unittest.main()