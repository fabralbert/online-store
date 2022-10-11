import React, {useEffect} from "react";
import CatalogList from "../../containers/catalog-list";
import Layout from "../../components/layouts/layout";
import ToolsContainer from "../../containers/tools"
import TopContainer from "../../containers/top";
import { useDispatch } from "react-redux";
import actionsCatalog from "../../store/catalog/actions";

console.log(actionsCatalog)

function Main() {

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(actionsCatalog.load());
  }, []);

  return (
    <Layout head={<h1>Главная</h1>}>
      <TopContainer/>
      <ToolsContainer/>
      <CatalogList/>
    </Layout>
  )
}

export default React.memo(Main);
