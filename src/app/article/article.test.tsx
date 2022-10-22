import { act, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Article from "./index";
import { createTestStore } from "../../testHelpers";
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import actionsArticle from '../../store/article/actions'


 // @ts-ignore
 
let store;

describe('About', () => {

  beforeEach(() => {
    store = createTestStore();
  });

  it("Article is loading",  async () => {
    
    render(
    // @ts-ignore
      <Provider store={store}><Article /></Provider>,  {wrapper: MemoryRouter}
    );
    
    await waitFor(() => {
      // @ts-ignore
    store.dispatch(actionsArticle.load('1'));
    
    expect(screen.getByText('Танец с драконами')).toBeInTheDocument();})

  });

  it("Article is editing",  async () => {
    
    render(
    // @ts-ignore
      <Provider store={store}><Article /></Provider>,  {wrapper: MemoryRouter}
    );

    const data = {
      title: "Танец с драконами тест",
      price: "600",
      description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
      countLeft: "10"
    }

    await waitFor(() => {
      // @ts-ignore
      store.dispatch(actionsArticle.editArticle(data));
      
      expect(screen.getByText('Танец с драконами тест')).toBeInTheDocument();

    });

  });
})

