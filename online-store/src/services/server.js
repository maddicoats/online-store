import firestore from "../firebase"
import swords from "./swords.js"

export const addToCart = async (record) => {
    const collectionRef = firestore.collection("cart");
    
    //https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference#add
    await collectionRef.add(record)
}

export const seedSwords = async () => {
    const collectionRef = firestore.collection("swords");

    const data = await collectionRef.get();

    if (!data.empty) return;

    const promises = swords.map(async (student) => {
        return await collectionRef.add(student);
    })

    await Promise.all(promises);
}

// READ
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

export const getItems = async () => {
    const collectionRef = firestore.collection("cart");

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

//UPDATE
export const updateSword = async (id, record) => {
    const collRef = firestore.collection('swords')
    const docRef = collRef.doc(id)
    await docRef.update(record)
}


// DELETE ITEM
export const deleteItem = async (id) => {
    const collectionRef = firestore.collection("cart");
    const docRef = collectionRef.doc(id);

    await docRef.delete()
}
