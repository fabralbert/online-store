import { render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import Item from "./index";
import { MemoryRouter } from 'react-router-dom';

const item = {
  id: "1",
  title: "Танец с драконами",
  price: 549,
  img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
  description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
  countLeft: 5
}

describe('Item', () => {
  
  it("should component render with button to add goods if user in props", () => {

    const onAdd = jest.fn();

    const onOpen = jest.fn();

    render(<Item item={item} link={`/articles/${item.id}`} onAdd={onAdd} user={'admin'} onOpen={onOpen}/>, {wrapper: MemoryRouter});
 
    expect(screen.getByTestId('btn-add')).toBeInTheDocument();
    expect(screen.getByTestId('item')).toBeInTheDocument();
  });

  it("shouldn't render button to add goods, but warning of to login without user props", () => {

    const onAdd = jest.fn();

    const onOpen = jest.fn();

    render(<Item item={item} link={`/articles/${item.id}`} onAdd={onAdd} user={''} onOpen={onOpen}/>, {wrapper: MemoryRouter});
 
    expect(screen.getByTestId('warning')).toBeInTheDocument();
    expect(screen.queryByTestId('btn-add')).toBeNull();
  });

  it("should onAdd be clicked", () => {

    const OnAdd = jest.fn();

    const onOpen = jest.fn();

    render(<Item item={item} link={`/articles/${item.id}`} onAdd={OnAdd} user={'admin'} onOpen={onOpen}/>, {wrapper: MemoryRouter});

    fireEvent.click(screen.getByTestId('btn-add'))

    expect(OnAdd).toBeCalledTimes(1)
  });

  it("should onOpen be clicked", () => {

    const OnAdd = jest.fn();

    const onOpen = jest.fn();

    render(<Item item={item} link={`/articles/${item.id}`} onAdd={OnAdd} user={''} onOpen={onOpen}/>, {wrapper: MemoryRouter});

    fireEvent.click(screen.getByTestId('warning'))

    expect(onOpen).toBeCalledTimes(1)
  });
})

