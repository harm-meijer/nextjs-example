import React from "react";
import Layout from "../../components/Layout";

function Post(props) {
  console.log("in render");
  return (
    <Layout title={"post title"}>
      <pre>{JSON.stringify(props, undefined, 2)}</pre>
      {/* this shows
          {
            "url": {
              "query": {
                "id": "8"
              },
              "pathname": "/post/[id]",
              "asPath": "/post/8"
            }
          }      
      */}
    </Layout>
  );
}

export async function getServerSideProps(needQuery) {
  console.log("never see this", needQuery);
  return { props: { dosNot: "matter, never called" } };
}

export default Post;
