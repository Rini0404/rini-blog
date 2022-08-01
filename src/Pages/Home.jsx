import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


function Home({ isAuth }) {
  
  const notify = () => toast("Delete success");

  const [postList, setPostList] = useState([]);

  const postCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollection);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    notify();
  };
  

  return (
    <div>
      <div className="mx-auto container py-20 px-6 ">
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {postList.map((post) => (
            <Link 
              key={post.id}
              to = {{
                pathname: `/posts/${post.id}`, 
                state: { post }
              }}
            
            
            >
            <div key={post.id} className="flex flex-col justify-center">
            <div className="rounded">
              <div className="w-full h-64 flex flex-col justify-between items-start bg-blue-300 rounded-lg border border-blue-300 mb-6 py-5 px-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                      <span className="text-xl font-bold text-gray-800">
                        Author:
                      </span>{" "}
                      {post.author.name}
                    </h1>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold mb-3">{post.title}</h4>
                  <p className="text-gray-800 text-sm">
                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                    nesciunt, neque porro quisquam est, quid malum, sensu
                    iudicari
                  </p>
                </div>
                <div className="w-full flex flex-col items-start">
                  <div className="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-alarm"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={13} r={7} />
                      <polyline points="12 10 12 13 14 13" />
                      <line x1={7} y1={4} x2="4.25" y2={6} />
                      <line x1={17} y1={4} x2="19.75" y2={6} />
                    </svg>
                    <p className="ml-2">sws</p>
                  </div>
                  <div className="flex items-center justify-between text-gray-800 w-full">
                    <p className="text-sm">March 28, 2020</p>

                    {/* add auth so creator can delete */}
                    {isAuth && post.author.id === auth.currentUser.uid && (
                      <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => deletePost(post.id)}
                        >
                          <BsTrash />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
