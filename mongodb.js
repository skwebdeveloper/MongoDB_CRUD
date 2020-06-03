const { MongoClient, ObjectID } = require('mongodb');


const connnectUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-Manager'

MongoClient.connect(connnectUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Try Again');
    }

    // This is for Create an operation 
    const db = client.db(databaseName)

    // CREATING    
    db.collection("Brief").insertMany([
        {
            name: "Saurabh",
            age: 21,
            gender: "Male"
        },
        {
            name: "Gaurav",
            age: 21,
            gender: "Male"
        },
        {
            name: "Rakhi",
            age: 29,
            gender: "Female"
        }
    ]).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    // READING 

    db.collection("Brief").find({
        age: 21
    }).toArray((error, result) => {
        console.log(result)
    })

    db.collection("Brief").find({
        age: 21
    }).count((error, result) => {
        console.log(result)
    })

    // UPDATE

    db.collection("Brief").updateMany({
        age: 21
    }, {
        $set: {
            age: 32
        }
    }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    // DELETE 

    db.collection("Brief").deleteMany({
        age: 21
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


})




