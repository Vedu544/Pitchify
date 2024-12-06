import { client } from "@/sanity/lib/client";
import { INVESTER_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(INVESTER_BY_ID_QUERY, { id });
  // console.log(post);

  if (!post) return notFound();
  return (
    <>
      <div className="flex flex-col lg:flex lg:flex-row mt-6 ">
        {/* //investor card */}

        <div className="bg-white border-2 border-blue-400 w-96 lg:w-72 ml-20 lg:ml-2 lg:mr-0 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-40 h-40 mb-3 mt-3 rounded-full shadow-lg"
              src={post.image}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
              {post.name}
            </h5>
            <button className="mt-1 bg-blue-600 text-xl p-4 rounded-full text-white font-bold">
              <a
                href={post.linkedinURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full"
              >
                Connect Now
              </a>
            </button>
          </div>
        </div>

        {/* //investor bio */}
        <div className="border-2 border-blue-400 ml-4  lg:w-full p-3 rounded-lg mr-4 mt-5 lg:mt-0">
          <div className="flex mt-2">
            {/* //label */}
            <div>
              <h1 className="font-semibold whitespace-nowrap lg:text-2xl lg:font-bold">
                Comapany Invested:{" "}
              </h1>
            </div>
            {/* //value */}
            <div className="lg:mt-1 ml-2">
              <h2 className="font-semibold whitespace-nowrap lg:text-xl lg:font-semibold">
                {post.companyinvested}
              </h2>
            </div>
          </div>

          <div className="flex mt-2">
            {/* //label */}
            <div>
              <h1 className="font-semibold lg:text-2xl lg:font-bold">
                Comapany Owned:{" "}
              </h1>
            </div>
            {/* //value */}
            <div className="lg:mt-1 ml-2">
              <h2 className="font-semibold lg:text-xl lg:font-semibold">
                {post.companyowned}
              </h2>
            </div>
          </div>

          <div className="flex mt-2">
            {/* //label */}
            <div>
              <h1 className="font-semibold lg:text-2xl lg:font-bold">
                Category:{" "}
              </h1>
            </div>
            {/* //value */}
            <div className="lg:mt-1 ml-2">
              <h2 className="font-semibold lg:text-xl lg:font-semibold">
                {post.category}
              </h2>
            </div>
          </div>

          <div className="mt-2">
            {/* //label */}
            <div>
              <h1 className="font-semibold lg:text-2xl lg:font-bold">Bio</h1>
            </div>
            {/* //value */}
            <div className="lg:mt-1 ml-2">
              <h2 className="font-semibold lg:text-xl lg:font-semibold">
                {post.bio}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
