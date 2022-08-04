import firestore from "../firebase"
import swords from "./swords.js"
import { doc, updateDoc } from "firebase/firestore";


export const seedSwords = async () => {
    const collectionRef = firestore.collection("swords");

    // data is QuerySnapshot
    const data = await collectionRef.get();

    // stopping execution of function if DB is not empty
    if (!data.empty) return;

    // map through every item inside our data array and adds them to the "swords" collection
    const promises = swords.map(async (student) => {
        return await collectionRef.add(student);
    })

    await Promise.all(promises);
}

// READ - getting all documents (students) in our DB
export const getSwords = async () => {
    const collectionRef = firestore.collection("swords");

    // QuerySnapshot
    const querySnap = await collectionRef.get();

    // getting an array of all documents
    const documents = querySnap.docs;

    // use data() method to get an obj containing the documnets data
    const data = documents.map((doc) => {
        return {...doc.data()}
    })

    return data
}

export const getSword = async (id) => {
    const target = firestore.collection('swords').doc(id)
    const querySnap = await target.get()
    // const document = querySnap.docs
    // const data = document.map
    // ((doc) => {
    //     return {...doc.data()}
    // })
    // console.log(data)
    return querySnap
    
}


//UPDATE - Update a single document in our DB
// export const updateSword = async (id, record) => {
//     const sword = firestore.collection('swords').document()

//     const documentID = swords.documentID
    
//     // const collectionRef = firestore.collection("swords");

//     // // getting a document reference
//     // const docRef = collectionRef.doc(id);
//     // await docRef.update(record)

//     // const target = doc(firestore, 'swords', id)
//     // await updateDoc(target, record)
// }


// // DELETE - deleting a specific student using its is in our DB 

// export const deleteStudent = async (id) => {
//     const collectionRef = firestore.collection("students");
//     const docRef = collectionRef.doc(id);

//     // deleting the specified docRef in our DB
//     await docRef.delete()
// }
