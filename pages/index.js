import React from "react";
import Link from "next/link";

class Post extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    return (
      <div>
        <div>
          <Link href="/posts" as="/posts">
            <a>Posts</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Post;
