import React, { useEffect, useState } from "react";
import Faker from "faker";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyDdAAbTnj8zuS6ShQmOXk2WMqJPwEUfHC0",
//   authDomain: "personal-dashboard-221dc.firebaseapp.com",
//   projectId: "personal-dashboard-221dc",
//   storageBucket: "personal-dashboard-221dc.appspot.com",
//   messagingSenderId: "833755954803",
//   appId: "1:833755954803:web:9d6a7e63a153b33ed8f406",
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const getProducts = async () => {
//   const dbCol = collection(db, "new-test-col");
//   const dbSnap = await getDocs(dbCol);
//   const dbList = dbSnap.docs.map((doc) => doc.data());
//   return dbList;
// };

// Start of dummy data batch creation
// const createNewData = () => {
//   const dataCol = collection(db, "new-test-col");

//   for (let i = 0; i < 100; i++) {
//     addDoc(dataCol, {
//       firstName: firstName,
//       lastName: lastName,
//       index: i,
//       created: serverTimestamp(),
//     });
//   }
// };
// createNewData();
// End of dummy data batch creation

const firstNameArr = [];
const lastNameArr = [];

const createString = (letterNumber, objArray) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 5; i++) {
    let text = "";
    for (let j = 0; j < letterNumber; j++) {
      text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    objArray.push(text);
  }
  return objArray;
};

const createData = () => {
  const firstName = createString(5, firstNameArr);
  const lastName = createString(7, lastNameArr);
  const dummyData = [];

  for (let i = 0; i < firstName.length; i++) {
    let newObj = {};
    newObj.firstName = firstName[i];
    newObj.lastName = lastName[i];
    newObj.age = Math.floor(Math.random() * 100);
    dummyData.push(newObj);
  }

  console.log(dummyData);
  return dummyData;
};

const dummyData = createData();

// const newDummyData = new Array(25).fill("carnat").map(() => {
//   return {
//     firstName: Faker.name.firstName(),
//     lastName: Faker.name.lastName(),
//   };
// });
// console.log(newDummyData);

// const GetDb = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getProducts()
//       .then((item) => {
//         setData(item);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);
//   return data.map((x, index) => {
//     return (
//       <div key={index}>
//         <span>
//           {x.name} {x.index}
//         </span>
//       </div>
//     );
//   });
// };

const GetDb = () => {
  return dummyData.map((x, index) => {
    return (
      <div key={index}>
        <span>
          {x.firstName} {x.lastName}
        </span>
      </div>
    );
  });
};

export default GetDb;
