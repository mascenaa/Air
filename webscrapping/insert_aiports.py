import csv
import psycopg2

conn = psycopg2.connect(
     host="localhost",
     port="5432",
     database="airdb",
     user="root",
     password="root"
)

with open('webscrapping/data/airports.csv', 'r', encoding='utf-8') as file:
     reader = csv.reader(file)
     for row in reader:
          if (row[2] == 'medium_airport' or row[2] == 'large_airport') and row[13] != '':
               print('Aiport Name: ' + row[3] + ' | Municipio: ' + row[10], row[8] + " | ITA_CODE: " + row[13])
               cursor = conn.cursor()
               cursor.execute("INSERT INTO public.aeroportos (nome, cidade, pais, codigo_iata) VALUES (%s, %s, %s, %s)", (row[3], row[10], row[8], row[13]))
               conn.commit()

conn.close()
