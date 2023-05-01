import React from "react";
import { useDispatch } from "react-redux";
import { setCount } from '../store/starWarsSlice';

export default function StarForm() {
  const dispatch = useDispatch();
  function fnSubmit(event) {
    event.preventDefault();
    console.log(event.target.file.value);
  }

  return <>
    <form onSubmit={(e) => fnSubmit(e)}>
      <p>Добавление файла</p>
      {/* <input 
        type='number' 
        min="1" 
        max="5" 
        onChange={(e) => {
          dispatch(setCount(e.target.value))
        }}/> */}
        <br></br>
        <br></br>
        <input type="file" name='file'></input>
        <input type="submit" value="Отправить"></input>
    </form>
  </>
}