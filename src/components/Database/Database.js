import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDdAAbTnj8zuS6ShQmOXk2WMqJPwEUfHC0",
  authDomain: "personal-dashboard-221dc.firebaseapp.com",
  projectId: "personal-dashboard-221dc",
  storageBucket: "personal-dashboard-221dc.appspot.com",
  messagingSenderId: "833755954803",
  appId: "1:833755954803:web:9d6a7e63a153b33ed8f406",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const getProducts = async () => {
  const dbCol = collection(db, "test-col");
  const dbSnap = await getDocs(dbCol);
  const dbList = dbSnap.docs.map((doc) => doc.data());
  return dbList;
};

// Future dev of posting data
// const postData = () => {
//   const bestArr = [];
//   for (let i = 0; i < 100; i++) {
//     let bestObj = {};
//     bestObj = { test: "salve", index: i };
//     bestArr.push(bestObj);
//   }
//   Firestore.collection("test-col").add({ bestArr });
//   console.log(bestArr);
//   return bestArr;
// };

// postData();

const GetDb = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts()
      .then((item) => {
        setData(item);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return data.map((x, index) => {
    return (
      <div key={index}>
        <span>{x.field1}</span>
        <span>{x.field2}</span>
      </div>
    );
  });
};

export default GetDb;
