from data.sites import *
import requests


def main():
     for site in sites:
          print(f"Scrapping {site}")
          response = requests.get(site)
          print(response.text)
          print(response)          
          


main()