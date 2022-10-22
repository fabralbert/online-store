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

  const [isEdit, setIsEdit] = useState(false)

  // добавление товара в корзину
  const onAdd = useCallback((id: string) => {
    dispatch(actionsBasket.addToBasket(id))
  }, [])
  
  // открытие модалки логина
  const openModalLogin = useCallback(() => {
    dispatch(actionsModals.open('login'));
  }, [])

  // редактирование
  const onEdit = useCallback(() => setIsEdit(!isEdit), [isEdit])

  // отмена редактирования
  const onCancel = useCallback(() => setIsEdit(!isEdit), [isEdit])
  
  // сохранение новых данных
  const onSave = useCallback((data: Data) => { 
    dispatch(actionsArticle.editArticle(data));
    setIsEdit(!isEdit);
  }, [isEdit])

  
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
      <ArticleCardEdit article={select.article} onSave={onSave} onCancel={onCancel}/> : 
      <ArticleCard article={select.article} onAdd={onAdd} user={select.user} onOpen={openModalLogin} onEdit={onEdit}/> 
      }
    </Layout>
  )
}

export default React.memo(Article);
