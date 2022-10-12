import React, {useCallback, useEffect} from "react";
import {useParams} from "react-router-dom";
import ArticleCard from "../../components/article-card";
import Layout from "../../components/layouts/layout";
import ToolsContainer from "../../containers/tools"
import TopContainer from "../../containers/top";
import { useDispatch, useSelector } from "react-redux";
import actionsBasket from "../../store/basket/actions";
import actionsArticle from "../../store/article/actions";

function Article(){
  
  const params = useParams();
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsArticle.load(params.id));
   }, [params.id]);

  const select = useSelector(state => ({
    article: state.article.data,
  }));
  console.log(select.data)

  const callbacks = {
    // добавление товара в корзину
    onAdd: useCallback((id) => dispatch(actionsBasket.addToBasket(id)), []),
  };

  return (
    <Layout head={<h1>Товар:</h1>}>
      <TopContainer/>
      <ToolsContainer/>
      <ArticleCard article={select.article} onAdd={callbacks.onAdd}/>
    </Layout>
  )
}

export default React.memo(Article);
