import json


with open('static/userData.json') as f:
        data = json.load(f)

# for user in data:
#     print(user['bio'])


#Load json file
def loadData():
    with open('static/userData.json') as f:
        return json.load(f)

#Save json file with new data
def saveData(data):
     with open('static/userData.json', 'w') as f:
        json.dump(data, f, indent=4)

#Update one item in json file
def updateData(userID, key, newValue):
    data[userID][key] = newValue
    saveData(data)
