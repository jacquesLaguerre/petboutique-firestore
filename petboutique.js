import { initializeApp, cert } from "firebase-admin/app";
 import { getFirestore } from 'firebase-admin/firestore';


import serviceAccount from './serviceAccounts.js';
initializeApp({
credential: cert(serviceAccount) })
   const db = getFirestore();

//    db.collection('Pets').add({
//     type: "Frog",
//     breed: "toad",
//     color:"green",
//     age: 12

//    })
//    .then(doc=> console.log("New pet:", doc.id))
//    .catch(console.error)

// db.collection('Products').add({
//    type: "Rope",
//     brand:"Chuckit",  
//     productNum: 2,
// })
// .then(doc=> console.log("New product:",doc.id))
// .catch(console.error)


// db.collection('Customers').add({
//     firstName: "Mido",
//     lastName:"Khanil",
//     email:"7@gmail.com", 
//     phone: 37794576
// })
// .then(doc=> console.log('New Customer:', doc.id))
// .catch(console.error)

// db.collection('Pets').get()
// .then(collection=> collection.docs.forEach(doc => {
//     console.log(doc.id, doc.data())
// }))
// .catch(console.error) //forEach is used to iterate through the document 

// db.collection('Customers').get()
// .then(collection=> collection.docs.forEach(doc=> {
//     console.log(doc.id, doc.data() )
// }))
// .catch(console.error)

// db.collection('Products').get()
// .then(collection=> collection.docs.forEach(doc=>{
//     console.log(doc.id, doc.data() )
// }))
// .catch(console.error)


// function getPets(){
//     db.collection('Pets').doc('C8a82vjAgrMUFqBpR3YE').get()
//     .then(doc => console.log(doc.data()))
//     .catch(console.error)
//     }

// db.collection('Pets')
// .doc("C8a82vjAgrMUFqBpR3YE")
// .update( {Age : 6})
// .then( () => console.log(getPets()))
// .catch(console.error)

function getProducts(){
    db.collection('Products').doc( 'v2xuvnZ3q4JQuuAqI28f').get()
    .then(doc => console.log(doc.data()))
    .catch(console.error)
    }

    db.collection('Products')
.doc("v2xuvnZ3q4JQuuAqI28f")
.update( {name : 'Bon Bagay'})
.then( () => console.log(getProducts()))
.catch(console.error)

