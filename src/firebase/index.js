import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from "firebase/auth";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import store from "../store/index.js";
import {useNavigate} from "react-router-dom";


const firebaseConfig={
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENT_ID

}




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage()

const uploadImage = async (file,folder,fileName) => {
    const storageRef = ref(storage, `${folder}/${fileName}`)
    await uploadBytesResumable(storageRef, file)
    return await getDownloadURL(storageRef)
}

const signUp = async (email, password,username,photo) => {
    try {

        const user = await createUserWithEmailAndPassword(auth, email, password)
        const photoURL = await uploadImage(photo,'profilePicture',user.user.uid)
        await updateProfile(auth.currentUser, { displayName: username, photoURL })
        //create user in firestore
        await setDoc(doc(db, "users", user.user.uid), {
            username ,
            email,
            photoURL,
            uid: user.user.uid,

        })



    }
    catch (e) {
        throw e
    }

}

const signupWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const { displayName, email, photoURL, uid } = user
        await setDoc(doc(db, "users", uid), {
            username: displayName,
            email,
            photoURL,
            uid,

        })
        return user
    }
    catch (e) {
        throw e
    }


}
const signIn = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password)

    }
    catch (error) {


        switch (error.code) {
            case 'auth/user-not-found':
                throw 'Bu kullanıcı adı veya e-posta adresi kayıtlı değil.';
            case 'auth/wrong-password':
                throw 'Şifreniz yanlış, lütfen tekrar deneyin.';
            case 'auth/invalid-email':
                throw 'Geçersiz bir e-posta adresi girdiniz.';
            default:
                throw 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.';
        }
    }
}
const signInWithGoogle = async () => {
    try {

        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);


    }
    catch (e) {
        throw e
    }
}
const signOut = async () => {
    try {
        await auth.signOut()
    }
    catch (e) {
        throw e
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {

        const uid = user.uid;
        store.dispatch({ type: 'auth/login', payload: { uid } })
    } else {
        store.dispatch({ type: 'auth/logout' })

    }
}
)


export { signUp,signupWithGoogle ,signOut,signIn,signInWithGoogle}