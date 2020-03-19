import React from "react";
import Layout from "../../components/Layout";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import Page from "../../components/Page";

const Posts = ({ page, posts }) => (
  <Layout title={`posts page ${page}`}>
    <Page current={page} />
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link
            as={`/post/${post.id}`}
            href={`/post?id=${post.id}`}
          >
            <a>{post.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Posts;

export async function getServerSideProps({ query }) {
  const page = Number(query.page || 1);
  return fetch(
    `${process.env.API_URL}/api/posts?page=${page}`
  )
    .then(result => result.json())
    .then(posts => ({ props: { posts, page: page } }));
}
