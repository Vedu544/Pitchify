import { sanityFetch } from "@/sanity/lib/live";
import { INVESTER_QUERY } from "@/sanity/lib/queries";
import InvestorCard from "@/components/InvestorCard";
import React from "react";
import Link from "next/link";

const page = async () => {
  const {data:posts} = await sanityFetch({query: INVESTER_QUERY})
  console.log('investers', posts)

  return (
    <>
      {posts.length > 0 ? (
        <>
          <section className="pink_container">
            <h1 className="heading">
              Empower Your Vision <br />
              Connect with Investors Today
            </h1>
            <p className="sub-heading">
              "Find the perfect partners to fund your growth and bring your
              startup dreams to life"
            </p>
          </section>

          <div className="p-4 bg-gray-100">
         
            <div
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ maxWidth: "1200px", margin: "0 auto" }}
            >
              {posts.map((post: any) => (
                <InvestorCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>No investors yet</p>
      )}
    </>
  );
};

export default page;
