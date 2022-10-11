import React, {useCallback, useMemo} from "react";
import Layout from "../../components/layouts/layout";
import ToolsContainer from "../../containers/tools"
import TopContainer from "../../containers/top"
import NotFound from "../../components/not-found";

function EmptyPage() {

  return (
    <Layout head={<h1>Неизвестная страница</h1> }>
      <TopContainer/>
      <ToolsContainer/>
      <NotFound/>
    </Layout>
  )
}

export default EmptyPage;