import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ArticleCard from "../../components/article-card";
import ArticleCardEdit from "../../components/article-card-edit";
import Layout from "../../components/layouts/layout";
import ToolsContainer from "../../containers/tools"
import TopContainer from "../../containers/top";
import { useDispatch, useSelector } from "react-redux";
import actionsBasket from "../../store/basket/actions";
import actionsArticle from "../../store/article/actions";
import actionsModals from "../../store/modals/actions";

function Article(){
  
  const params = useParams();
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsArticle.load(params.id));
   }, [params.id]);

  const select = useSelector(state => ({
    article: state.article.data,
    user: state.login.user
  }));

  const [isEdit, setIsEdit] = useState(false)

  const callbacks = {
    // добавление товара в корзину
    onAdd: useCallback((id) => dispatch(actionsBasket.addToBasket(id)), []),
    // открытие модалки логина
    openModalLogin: useCallback(() => {
      dispatch(actionsModals.open('login'));
    }, []),
    // редактирование
    onEdit: useCallback(() => setIsEdit(!isEdit), [isEdit]),
    // отмена редактирования
    onCancel: useCallback(() => setIsEdit(!isEdit), [isEdit]),
    // сохранение новых данных
    onSave: useCallback(() => setIsEdit(!isEdit), [isEdit]),
  };

  return (
    <Layout head={<h1>Товар:</h1>}>
      <TopContainer/>
      <ToolsContainer/>
      {isEdit ? 
      <ArticleCardEdit article={select.article} onAdd={callbacks.onAdd} user={select.user} onOpen={callbacks.openModalLogin} onSave={callbacks.onSave} onCancel={callbacks.onCancel}/> : 
      <ArticleCard article={select.article} onAdd={callbacks.onAdd} user={select.user} onOpen={callbacks.openModalLogin} onEdit={callbacks.onEdit}/> 
      }
    </Layout>
  )
}

export default React.memo(Article);
