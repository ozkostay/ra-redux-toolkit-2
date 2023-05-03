import React from "react";

export default function PhotoItem({item}) {
  // const image_web = 'https://via.placeholder.com/500';
  // const image_local = require('../img/111.jpg');
  
  const image_var = require('../img/' + item.fileName);
  
  const container = {
    width: '200px',
    height: '200px',
    border: '1px solid black',
    margin: '10px',
    backgroundColor: "red",
  }

  return <>
    <div>
      {/* <img  style={container} src={require('../img/333.jpg')}></img>
      <img  style={container} src={image_web} alt='pic'></img>
      <img  style={container} src={image_local} alt='pic'></img> */}
      <img  style={container} src={image_var} alt='pic'></img>
    </div>
  </>
}

