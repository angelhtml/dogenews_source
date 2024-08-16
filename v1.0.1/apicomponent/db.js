

const { Database, aql } = require("arangojs");

//database info
const db = new Database({
  url: "http://localhost:8529/",
  databaseName: "arango",
  auth: {
    username: "root",
    password: ""
  },
})





//socket
//export const mysocket =[mysocket1]

//======================================================socket================================================>








const getCollection = async (cName) => {

  // get list of collections in database
  const collections = await db.collections();

  // check if collection exists, if so return collection, if not, create it
  if (collections.find((c) => c._name === cName)) {
    return await db.collection(cName);
  } else {
    return db.createCollection(cName);
  }
};

//for saving data on your collection
export async function arangoUsers(Email, Password, Username) {
  try {
    await getCollection("Users")
    await db.query(aql `INSERT {Username: ${Username}, Email: ${Email}, state:"false" ,Password: ${Password}} IN Users`);
  } catch (error) {
    console.log(error)
  }
}




