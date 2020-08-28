# Steps to run this application

### to clone project 
git clone "https://github.com/AnushaNath/assessment-nodejs.git" 

### to get node-modules 
npm i   

### to transpile server.ts
tsc server.ts

### to start the server
nodemon server.js OR npm start

######## To test the App ########

Run in Postman

### POST the request using endpoint url /api/v1/parse

{ 
	"data": "JOHN0000MICHAEL0009994567"
	
}

### Response

{
    "result": {
        "data": {
            "firstName": "JOHN0000",
            "lastName": "MICHAEL000",
            "clientId": "9994567"
        },
        "message": "Success",
        "statusCode": 200
    }
}

### POST the request using endpoint url /api/v2/parse

{ 
	"data": "JOHN0000MICHAEL0009994567"
	
}

### Response

{
    "result": {
        "data": {
            "firstName": "JOHN",
            "lastName": "MICHAEL",
            "clientId": "999-4567"
        },
        "message": "Success",
        "statusCode": 200
    }
}

### Diagonostic Report

report.json 

### Unit Testing

Navigate to src/Tests
tsc Routes.test.ts
npm test
