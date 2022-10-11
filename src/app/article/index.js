import React, {useCallback} from "react";
import {useParams} from "react-router-dom";
import ArticleCard from "../../components/article-card";
import Layout from "../../components/layouts/layout";
import ToolsContainer from "../../containers/tools"
import TopContainer from "../../containers/top";

function Article(){

  // Параметры из пути /articles/:id
  const params = useParams();

  return (
    <Layout head={<h1>Товар:</h1>}>
      <TopContainer/>
      <ToolsContainer/>
      <ArticleCard/>
    </Layout>
  )
}

export default React.memo(Article);
