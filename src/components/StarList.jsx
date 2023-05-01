import React from "react";
import StarItem from './StarItem';
import { useSelector } from "react-redux";

export default function StarList() {
  const fromCount = useSelector((state) => state.starWars.count);
  const starWarsFacts = [
    {
      id: 1,
      fact: 'Прообразом Чубакки стал пёс режиссёра',
    },
    {
      id: 2,
      fact: 'Актёрам разрешили подобрать любимый цвет для своих световых мечей',
    },
    {
      id: 3,
      fact: 'В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    },
    {
      id: 4,
      fact: 'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    },
    {
      id: 5,
      fact: 'Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
    }
  ];
  const tempArr = starWarsFacts.slice(0, fromCount);
  const container = {
    width: 600,
    textAlign: 'left',
    margin: '0 auto'
  }

return <>
    <ul style={container}>
      {tempArr.map((item) => <StarItem key={item.id} item={item}/>)}
    </ul>
  </>
}
