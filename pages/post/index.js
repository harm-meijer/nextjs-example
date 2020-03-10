import React from "react";
import Link from "next/link";
import fetch from "isomorphic-fetch";
import Layout from "../../components/Layout";

class Post extends React.Component {
  static getInitialProps({ query }) {
    return fetch(
      `${process.env.API_URL}/api/post?id=${query.id}`
    )
      .then(result => result.json())
      .then(post => ({ post }));
  }

  render() {
    return (
      <Layout title={this.props.post.name}>
        <pre>
          {JSON.stringify(this.props.post, undefined, 2)}
        </pre>
      </Layout>
    );
  }
}

export default Post;
