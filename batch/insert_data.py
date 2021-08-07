import json
import boto3
import decimal

TABLE_NAME = 'HotelTable'
FILE_PATH = './room_data.json'

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)


def put_items_dynamodb():
   put_item = convert_json_dict(FILE_PATH)

   try:
       with table.batch_writer() as batch:
           for item in put_item:
               batch.put_item(
                   Item=item
               )
   except Exception as e:
       print(e)


def convert_json_dict(json_file_name):
   with open(json_file_name) as json_file:
       data = json.load(json_file, parse_float=decimal.Decimal)

   return data

if __name__ == "__main__":
    print("Start...")
    put_items_dynamodb()
    print("End...")
else:
    print("Something Wrong...")
