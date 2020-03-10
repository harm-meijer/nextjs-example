import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <div id="content">{children}</div>
      </div>
    </React.Fragment>
  );
}
