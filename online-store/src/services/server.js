import firestore from "../firebase"


// READ
export const getSwords = async () => {
    const collectionRef = firestore.collection("swords");

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

    return querySnap
}

//UPDATE
export const updateSword = async (id, record) => {
    const collRef = firestore.collection('swords')
    const docRef = collRef.doc(id)
    await docRef.update(record)
}


// DELETE CART ITEM
export const deleteItem = async (id) => {
    const collectionRef = firestore.collection("cart");
    const docRef = collectionRef.doc(id);

    await docRef.delete()
}

// ADD TO CART
export const addToCart = async (record) => {
    const collectionRef = firestore.collection("cart");

    await collectionRef.add(record)
}

// GET CART ITEMS
export const getItems = async () => {
    const collectionRef = firestore.collection("cart");
    const querySnap = await collectionRef.get();
    const documents = querySnap.docs;
    const data = documents.map((doc) => {
        return {...doc.data()}
    })
    return data
}
