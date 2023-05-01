import React from "react";

export default function StarItem({item}) {
  const container = {
    margin: 20,
  }

  return <>
    <li style={container}>
      {item.fact}
    </li>
  </>
}
