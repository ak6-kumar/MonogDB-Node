var mongo = require('mongodb').MongoClient;
var assert = require('assert');
const { MongoClient } = require('mongodb');
const dbOp = require('./operations');

const Url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

MongoClient.connect(Url).then((client)=>{
    console.log("Connected to the MongoDB server");
    const db = client.db(dbName);
    dbOp.insertDoc(db,{name:"Pizza",discription:"Lavde ki sarkar hai"},'dishes')
    .then((result)=>{
        console.log("Insert Documents:\n",result.ops);
        
        return dbOp.findDocs(db,'dishes');
    })
    .then((docs)=>{
            console.log("Found documents\n",docs);
            
            return dbOp.updateDoc(db,{name:"Pakoda"},{discription:"Kya bataye maa chudi padi hai"},'dishes');
    })
    .then((result)=>{
                console.log("Updated doc",result.result);
                
                return dbOp.findDocs(db,'dishes');
    })
    .then((result)=>{
                    console.log("Found updated doc\n",result);
                    
                    return db.dropCollection('dishes');
    })
    .then((result)=>{
                        console.log("Dropped collection:\n",result);
                        client.close();
    })
    .catch((err)=>console.log(err));
})
.catch((err)=> console.log(err));