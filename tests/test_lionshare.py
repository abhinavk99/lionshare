from lionshare import Lionshare

def test_prices():
    """Tests an API call to get coin prices"""

    lionshare = Lionshare()
    response = lionshare.get_prices('hour')

    assert isinstance(response, dict)
    assert isinstance(response['data'], dict)

def test_markets():
    """Tests an API call to get coin markets"""

    lionshare = Lionshare()
    response = lionshare.get_markets()

    assert isinstance(response, dict)
    assert isinstance(response['data'], dict)
