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
  countLeft: 5,
  selfTotalSum: 549,
  amount: 5,
}

const onRemove = jest.fn();

const onClose = jest.fn();

describe('BasketItem', () => {
  
  it("Basket item render", () => {

    render(<Item item={item} link={`/articles/${item.id}`} onLink={onClose} onRemove={onRemove}/>, {wrapper: MemoryRouter});

    expect(screen.getByTestId('item-basket')).toBeInTheDocument();
  });

  it("should onRemove and onClose be clicked", () => {

    render(<Item item={item} link={`/articles/${item.id}`} onLink={onClose} onRemove={onRemove}/>, {wrapper: MemoryRouter});

    fireEvent.click(screen.getByTestId('btn-remove'))
    expect(onRemove).toBeCalledTimes(1)
    fireEvent.click(screen.getByTestId('btn-link-close'))
    expect(onClose).toBeCalledTimes(1)
  });
})

