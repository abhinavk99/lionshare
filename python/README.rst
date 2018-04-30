lionshare
=========

Lionshare is a Python wrapper for the `Lionshare
API <https://github.com/lionsharecapital/lionshare-api>`__. You can get
prices and market info on various cryptocurrencies.

Installation
------------

::

    pip install lionshare

Usage
-----

.. code:: python

    from lionshare import Lionshare
    lionshare = Lionshare()

    # All responses are in json

    # Get historical prices for cryptocurrencies
    prices = lionshare.get_prices()
    # Optional period parameter (hour, day, week, month, year)
    prices = lionshare.get_prices('hour')

    # Get current market info for cryptocurrencies
    market_info = lionshare.get_markets()
