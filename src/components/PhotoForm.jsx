import React from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from '../store/photosSlice';

export default function StarForm() {
  const dispatch = useDispatch();
  function fnSubmit(event) {
    event.preventDefault();
    console.log(event.target.file.value);
    dispatch(addPhoto(event.target.file.value))
  }

  return <>
    <form onSubmit={(e) => fnSubmit(e)}>
      <p>Добавление файла</p>
        <br></br>
        <br></br>
        <input type="file" name='file'></input>
        <input type="submit" value="Добавить"></input>
    </form>
  </>
}