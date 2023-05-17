// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7oDJh_w5VbLAE-6hechqvz1RmVqJKzjs",
    authDomain: "curious-furnace-340706.firebaseapp.com",
    databaseURL: "https://curious-furnace-340706-default-rtdb.firebaseio.com",
    projectId: "curious-furnace-340706",
    storageBucket: "curious-furnace-340706.appspot.com",
    messagingSenderId: "702051913816",
    appId: "1:702051913816:web:e1256fc5455bc0da687a2d"
};

// Firebase 초기화
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage =getStorage(app);

