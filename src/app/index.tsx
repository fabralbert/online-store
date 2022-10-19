import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./main";
import About from "./about";
import EmptyPage from './empty-page';
import Article from './article';
import Login from './login';
import Basket from './basket';
import { useAppSelector } from "../hooks/useTypesSelector"

/**
 * Приложение
 * @return {React.ReactElement} Виртуальные элементы React
 */
function App(): React.ReactElement { //@TODO

  const modal = useAppSelector(state => state.modals.name); //@TODO
  return (
    <>
        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/articles/:id"} element={<Article/>}/>
          <Route path="*" element={<EmptyPage/>}/>
        </Routes>
      {modal === 'login' && <Login/>}
      {modal === 'basket' && <Basket/>}
    </>
  );
}

export default React.memo(App);
