import React from "react";
import Layout from "../../components/layouts/layout";
import ToolsContainer from "../../containers/tools"
import TopContainer from "../../containers/top"
import NotFound from "../../components/not-found";

function EmptyPage() {

  return (
    <div  data-testid={'empty'}>
      <Layout head={<h1>Неизвестная страница</h1> }>
        <TopContainer/>
        <ToolsContainer/>
        <NotFound/>
      </Layout>
    </div>
  )
}

export default React.memo(EmptyPage);