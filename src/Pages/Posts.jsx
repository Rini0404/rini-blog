import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

function Posts() {
  // display the data using the id of the post
  const { id } = useParams();

  const getDoc = async () => {
    const data = await getDocs(collection(db, "posts"));

    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getDoc(id);
      setPost(data);
    };

    getPost();
  }, [id]);

  const matchPost = post.filter((post) => post.id === id);
  console.log(matchPost);

  return (
    <>
      {matchPost.map((post) => (
        <div key={post.id}>
          <div className="dark:bg-gray-900">
            <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
                <div>
                  <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">
                    By: {post.author.name}
                  </p>
                </div>
                <div className="md:mt-3">
                  <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">
                    {post.title}
                    
                  </p>
                </div>
                <div className="md:mt-3">
                  <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                </div>
                
              </div>
            </div>
            <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start xl:w-2/4">
                <div>
                  <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">
                    The details
                  </h2>
                </div>
                <div className="mt-8">
                  <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                    {post.body}
                  </p>
                </div>
                {/* image goes here */}
                <div className="mt-8">
                  <img src={post.picture} alt="post" />
                  </div>
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
