import requests
from serpapi import GoogleSearch

def get_flight_prices(departure_id: str, arrival_id: str, outbound_date: str, return_date: str, currency: str):
    parametros_pesquisa = {
          "engine": "google_flights",
          "departure_id": departure_id,
          "arrival_id": arrival_id,
          "outbound_date": outbound_date,
          "return_date": return_date,
          "currency": currency,
          "hl": "pt-br",
          "api_key": "03c30d9162c90516202b3c0a6f21429bc15b6bd50893cac7cc9b33dfe00e797f"
     }
    
    search = GoogleSearch(parametros_pesquisa)
    results = search.get_dict()
    print(results)

    return results


