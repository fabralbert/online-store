import React, {useCallback} from "react";
import BasketTotal from "../../components/basket-total";
import LayoutModal from "../../components/layouts/layout-modal";
import ItemBasket from "../../components/item-basket";
import ListBasket from "../../components/list-basket";
import { useDispatch, useSelector } from "react-redux";
import actionsModals from "../../store/modals/actions";
import actionsBasket from "../../store/modals/actions";
import { v4 as uuidv4 } from 'uuid';
import book1 from '../../img/book1.jpg';
import book2 from '../../img/book2.jpg';
import book3 from '../../img/book3.jpg';

function Basket() {

  const items = [
    {id: uuidv4(), title: 'Танец с драконами', price: 549, img: book1, description: '"Танцем драконов" издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу "мать драконов" Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.'},
    {id: uuidv4(), title: 'Пламя и кровь', price: 669, img: book2, description: 'Тирион Ланнистер еще не стал заложником жестокого рока, Бран Старк еще не сделался калекой, а голова его отца Неда Старка еще не скатилась с эшафота. Ни один человек в Королевствах не смеет даже предположить, что Дейенерис Таргариен когда-нибудь назовут Матерью Драконов. Вестерос не привел к покорности соседние государства, и Железный Трон, который, согласно поговорке, ковался в крови и пламени, далеко еще не насытился. Древняя, как сам мир, история сходит со страниц ветхих манускриптов, и только мы, септоны, можем отделить правдивые события от жалких басен, и истину от клеветнических наветов.'},
    {id: uuidv4(), title: 'Игра престолов', price: 1989, img: book3, description: 'С этой книгой вы посетите север, где бастард Джон Сноу пытается найти свое место среди ожесточившихся изгоев и отпетых разбойников, поклявшихся нести дозор на Стене. Затем переместитесь на юг, в столицу придворных интриг и порока, в Королевскую Гавань, где отец Джона - лорд Эддард Старк - пытается управиться с обязанностями Десницы при короле Роберте Баратеоне. А следом за этим - в земли варваров за Узким морем, где юная принцесса Дейенерис Таргариен, насильно выданная замуж за предводителя дотракийцев кхала Дрого, открывает для себя любовь и власть.'},
  ]

  const dispatch = useDispatch();

  const select = useSelector(state => ({
    items: state.basket.items,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Закрытие любой модалки
    closeModal: useCallback(() => {
      dispatch(actionsModals.close());
    }, []),
    // onAdd: useCallback(() => {
    //   dispatch(actionsBasket.addToBasket());
    // }, []),
  };

  const renders = {
    itemBasket: useCallback(item => (
      <ItemBasket
        item={item}
        link={`/articles/${item._id}`}
        onLink={callbacks.closeModal}
      />
    ), []),
  }

  return (
    <LayoutModal title={'Корзина'} onClose={callbacks.closeModal}>
      <ListBasket items={select.items} renderItem={renders.itemBasket}/>
      <BasketTotal totalAmount={select.totalAmount} sum={select.sum}/>
    </LayoutModal>
  )
}

export default React.memo(Basket);
