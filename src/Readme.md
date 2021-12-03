

API


```
Get Token (POST) => https://6119f1e3cbf1b30017eb53fb.mockapi.io/ap1/v1/token

Payload => 
{
    "groupName": "test"
}

Response
{
    "token": "e744ef80-d6cd-44d7-8f40-0d6a54d69634"
}

```


```
Write Log (GET, POST, DELETE) => https://6119f1e3cbf1b30017eb53fb.mockapi.io/ap1/v1/log

Authorization: `Bearer {{token received from token call}}`

Payload => 
{
    "event": {
      "_id": "60f14279a1180a063281b628",
      "index": 0,
      "guid": "7cb009f4-eb2f-457f-8f75-9549b568ef1e",
      "isActive": true,
      "balance": "$3,899.96",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "brown",
      "name": "Gretchen Hernandez",
      "gender": "female",
      "company": "SURETECH",
      "email": "gretchenhernandez@suretech.com",
      "phone": "+1 (842) 552-3933",
      "address": "904 Milford Street, Waterford, South Carolina, 1918",
      "about": "Voluptate laboris magna est irure ipsum. Cillum pariatur duis dolore nostrud pariatur aliquip duis enim do laboris consequat. Cupidatat consequat proident deserunt ipsum cupidatat laboris adipisicing.\r\n",
      "registered": "2017-01-06T10:19:08 -06:-30"
    }
}

Response
{
    "createdAt": "2021-08-15T15:33:32.424Z",
    "event": {
        "_id": "60f14279a1180a063281b628",
        "index": 0,
        "guid": "7cb009f4-eb2f-457f-8f75-9549b568ef1e",
        "isActive": true,
        "balance": "$3,899.96",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "brown",
        "name": "Gretchen Hernandez",
        "gender": "female",
        "company": "SURETECH",
        "email": "gretchenhernandez@suretech.com",
        "phone": "+1 (842) 552-3933",
        "address": "904 Milford Street, Waterford, South Carolina, 1918",
        "about": "Voluptate laboris magna est irure ipsum. Cillum pariatur duis dolore nostrud pariatur aliquip duis enim do laboris consequat. Cupidatat consequat proident deserunt ipsum cupidatat laboris adipisicing.\r\n",
        "registered": "2017-01-06T10:19:08 -06:-30"
    },
    "id": "1"
}
```
