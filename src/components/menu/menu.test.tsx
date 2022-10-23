import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Menu from "./index";
import { MemoryRouter } from 'react-router-dom';

const menu = [
  {key: 1, title: 'Главная', link: '/'},
  {key: 2, title: 'О магазине', link: '/about'},
]

describe('Menu', () => {
  it("Menu render", () => {
    render(<Menu  items={menu}/>, {wrapper: MemoryRouter});
  
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });
})

