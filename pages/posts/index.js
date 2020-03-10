import React from "react";
import Layout from "../../components/Layout";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import Page from "../../components/Page";

class Posts extends React.Component {
  static getInitialProps({ query }) {
    const page = Number(query.page || 1);
    return fetch(
      `${process.env.API_URL}/api/posts?page=${page}`
    )
      .then(result => result.json())
      .then(posts => ({ posts, page: query.page }));
  }

  render() {
    return (
      <Layout title={`posts page ${this.props.page}`}>
        <Page current={this.props.page} />
        <ul>
          {this.props.posts.map(post => (
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
  }
}

export default Posts;
