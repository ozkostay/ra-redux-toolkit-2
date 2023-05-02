import React from "react";

export default function PhotoItem({item}) {
  const container = {
    width: '200px',
    height: '200px',
    border: '1px solid black',
    margin: '10px',
  }

  return <>
    <div style={container}>
      photo
      {item.fileName}
    </div>
  </>
}
