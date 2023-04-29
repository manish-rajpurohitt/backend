import pymongo
import json

# Connect to the MongoDB database
client = pymongo.MongoClient("mongodb+srv://kanha:Ww7SarTZngsrY3YG@cluster0.dksdhjn.mongodb.net/?retryWrites=true&w=majority")
db = client["mydatabase"]

# Load the JSON data from a file
with open('myFile.json', 'r') as f:
    data = json.load(f)

# Insert the JSON data into the MongoDB collection
collection = db["productsdb"]
collection.insert_many(data)

# Confirm that the data was inserted successfully
for doc in collection.find():
    print(doc)
