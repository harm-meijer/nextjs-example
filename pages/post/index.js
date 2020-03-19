import React from "react";
import Layout from "../../components/Layout";

function Post({ post }) {
  console.log("in render", post);
  return (
    <Layout title={post.name}>
      <pre>{JSON.stringify(post, undefined, 2)}</pre>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  return fetch(
    `${process.env.API_URL}/api/post?id=${query.id}`
  )
    .then(result => result.json())
    .then(post => ({ props: { post } }));
}

export default Post;
