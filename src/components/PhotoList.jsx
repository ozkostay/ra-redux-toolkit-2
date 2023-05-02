import React from "react";
import PhotoItem from './PhotoItem';
import { useSelector } from "react-redux";

export default function PhotoList() {
  const photosArr = useSelector((state) => state.photosReducer.photosArr);
  
  const tempArr = [
    {id: 1, fileName: '111.jpg',},
    {id: 2, fileName: '222.jpg',},
    {id: 3, fileName: '333.jpg',},
    {id: 4, fileName: '444.jpg',},
    {id: 5, fileName: '555.jpg',}
  ]
    
  const container = {
    width: 670,
    margin: '0 auto',
    border: '1px solid red',
    display: 'flex',
    flexWrap: 'wrap'
  }

return <>
    === List ===
    <div style={container}>
      {tempArr.map((item) => <PhotoItem key={item.id} item={item}/>)}
      {/* <PhotoItem />
      <PhotoItem />
      <PhotoItem />
      <PhotoItem />
      <PhotoItem /> */}
    </div>
  </>
}
