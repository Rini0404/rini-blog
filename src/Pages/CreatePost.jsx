import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate()

  const postCollection = collection(db, "posts");

  const notify = () => toast("Please login to create a post!");

  const createPost = async (e) => {
    await addDoc(postCollection, {
      title,
      body,
      author: { 
        name: auth.currentUser.displayName, 
        id: auth.currentUser.uid 
      },
      createdAt: new Date()
    });
    navigate('/')
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
      notify()
    }
  }
  , [])



  return (
    <div className="py-16 px-6 grid justify-items-center">
      <div className="grid p-8 w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Post your programming article here!
        </h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        {/* add to middle  */}
        <div className="flex justify-items-center w-full my-4">
          <fieldset className="text-center w-full space-y-1 dark:text-gray-100">
            <label for="files" className="block text-sm font-medium">
              Attachments
            </label>
            <div className="py-4 flex justify-center">
              <input
                type="file"
                name="files"
                id="files"
                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
              />
            </div>
          </fieldset>
        </div>

        <div className="mt-6 ">
          <div className="items-center -mx-2 md:flex">
            {/* <div className="w-full mx-2">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
              />
            </div> */}

            <div className="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Title
              </label>

              <input
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="title"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Post
            </label>

            <textarea
              onChange={(e) => setBody(e.target.value)}
              className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={createPost}
              type="submit"
              className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
