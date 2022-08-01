import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { db, auth } from "../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

function Posts() {
  
  // display the data using the id of the post

  return (
    <>
      <div className="text-white ">posts...testing here....</div>
      <div className="text-white ">{id}</div>
      <div className="text-white ">seee</div>
    </>
  );
}

export default Posts;
