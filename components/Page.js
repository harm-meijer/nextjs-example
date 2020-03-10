import React from "react";
import Router from "next/router";

export default function Page({ current }) {
  const handleChange = React.useCallback(e => {
    e.preventDefault();
    Router.push(
      `/posts?page=${e.target.value}`,
      `/posts/${e.target.value}`
    );
  }, []);
  return (
    <select onChange={handleChange}>
      {[...new Array(20)]
        .map((_, index) => index + 1)
        .map(index => (
          <option
            key={index}
            value={index}
            selected={index === Number(current)}
          >
            {index}
          </option>
        ))}
    </select>
  );
}
