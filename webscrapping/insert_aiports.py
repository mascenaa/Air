import csv
import psycopg2

conn = psycopg2.connect(
     host="localhost",
     port="5432",
     database="airdb",
     user="admin",
     password="admin"
)

with open('./webscrapping/data/airports.csv', 'r', encoding='utf-8') as file:
     reader = csv.reader(file)
     for row in reader:
          if (row[2] == 'large_airport') and row[13] != '':
               print('Aiport Name: ' + row[3] + ' | Municipio: ' + row[10], row[8] + " | ITA_CODE: " + row[13])
               cursor = conn.cursor()
               cursor.execute("INSERT INTO public.aeroportos (id, nome, cidade, pais, codigo_iata) VALUES (DEFAULT, %s, %s, %s, %s)", (row[3], row[10], row[8], row[13]))
               conn.commit()

conn.close()
