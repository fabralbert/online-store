import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ArticleCard from "../../components/article-card";
import ArticleCardEdit from "../../components/article-card-edit";
import Layout from "../../components/layouts/layout";
import ToolsContainer from "../../containers/tools"
import TopContainer from "../../containers/top";
import Loader from "../../components/loader";
import actionsBasket from "../../store/basket/actions";
import actionsArticle from "../../store/article/actions";
import actionsModals from "../../store/modals/actions";
import { useAppSelector } from "../../hooks/useTypesSelector"
import { useAppDispatch } from "../../hooks/useTypesDispatch";

interface Data {
  countLeft: number | string;
  description: string;
  price: number | string;
  title: string;
}

function Article(){

  const params = useParams();
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(actionsArticle.load(params.id))
    };
   }, [params.id]);

  const select = useAppSelector(state => ({
    article: state.article.data,
    isLoading: state.article.isLoading,
    user: state.login.user
  }));

  console.log(select.article, select.isLoading)

  const [isEdit, setIsEdit] = useState(false)

  const callbacks = {
    // добавление товара в корзину
    onAdd: useCallback((id: string) => {
      dispatch(actionsBasket.addToBasket(id))
    }, []),
    // открытие модалки логина
    openModalLogin: useCallback(() => {
      dispatch(actionsModals.open('login'));
    }, []),
    // редактирование
    onEdit: useCallback(() => setIsEdit(!isEdit), [isEdit]),
    // отмена редактирования
    onCancel: useCallback(() => setIsEdit(!isEdit), [isEdit]),
    // сохранение новых данных
    onSave: useCallback((data: Data) => { 
      dispatch(actionsArticle.editArticle(data));
      setIsEdit(!isEdit);
    }, [isEdit]),
  };
  
  // если данные пока не загрузились, то отрисовываем loader
  if (select.isLoading) {
  return (
    <Layout head={<h1>Товар:</h1>}>
      <TopContainer/>
      <ToolsContainer/>
      <Loader/>
    </Layout>
    )
  }

  return (
    <Layout head={<h1>Товар:</h1>}>
      <TopContainer/>
      <ToolsContainer/>
      {isEdit ? 
      <ArticleCardEdit article={select.article} onSave={callbacks.onSave} onCancel={callbacks.onCancel}/> : 
      <ArticleCard article={select.article} onAdd={callbacks.onAdd} user={select.user} onOpen={callbacks.openModalLogin} onEdit={callbacks.onEdit}/> 
      }
    </Layout>
  )
}

export default React.memo(Article);
