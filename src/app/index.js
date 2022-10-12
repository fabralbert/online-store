import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./main";
import About from "./about";
import EmptyPage from './empty-page';
import Article from './article';
import Login from './login';
import Basket from './basket';
import {useSelector} from 'react-redux'

/**
 * Приложение
 * @return {React.ReactElement} Виртуальные элементы React
 */
function App() {

  const modal = useSelector(state => state.modals.name);

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
