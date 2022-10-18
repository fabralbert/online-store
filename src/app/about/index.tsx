import React from "react";
import Layout from "../../components/layouts/layout";
import ToolsContainer from "../../containers/tools"
import TopContainer from "../../containers/top"
import AboutInfo from "../../components/about-info";

function Main() {

  return (
    <Layout head={<h1>О магазине</h1>}>
      <TopContainer/>
      <ToolsContainer/>
      <AboutInfo/>
    </Layout>
  )
}

export default React.memo(Main);
