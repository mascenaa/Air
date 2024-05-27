import csv
from time import sleep
from openai import OpenAI
import threading

client = OpenAI(
     
)

def translate_airport(row):
     response = client.chat.completions.create(
          model="gpt-3.5-turbo",
          messages=[
               {
                    "role": "user",
                    "content": f"Traduza o nome do seguinte aeroporto ({row[3]}) para português, e deixe ele no seguinte formato: 'Aeroporto Internacional/Nacional de NOME_CIDADE', um exemplo de referencia é o Aeroporto Internacional de Guarulhos."  
               }
          ],
          temperature=1,
          max_tokens=256,
          top_p=1,
          frequency_penalty=0,
          presence_penalty=0
     )
     row[3] = response.choices[0].message.content
     print(row[3])

def process_rows(rows):
     for row in rows:
          if (row[2] == 'large_airport'):
               translate_airport(row)

with open('./webscrapping/data/airports.csv', 'r', encoding='utf-8') as file:
     reader = csv.reader(file)
     rows = list(reader)

     # Split the rows into chunks for each thread
     num_threads = 4  # Change this to the desired number of threads
     chunk_size = len(rows) // num_threads
     chunks = [rows[i:i+chunk_size] for i in range(0, len(rows), chunk_size)]

     threads = []
     for chunk in chunks:
          thread = threading.Thread(target=process_rows, args=(chunk,))
          thread.start()
          threads.append(thread)

     # Wait for all threads to finish
     for thread in threads:
          thread.join()

     with open('./webscrapping/data/airports.csv', 'w', encoding='utf-8', newline='') as file:
          writer = csv.writer(file)
          writer.writerows(rows)
          print('Feito')
