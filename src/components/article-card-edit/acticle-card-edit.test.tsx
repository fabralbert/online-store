import { render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import ArticleCardEdit from "./index";

const onSave = jest.fn();
const onCancel = jest.fn();

const article = {
  id: "1",
  title: "Танец с драконами",
  price: 549,
  img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
  description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
  countLeft: 5
}

describe('Article-card-edit', () => {
  it("Article-card-info render", () => {

    render(<ArticleCardEdit article={article} onSave={onSave} onCancel={onCancel}/>);
  
    expect(screen.getByTestId('article-card-edit')).toBeInTheDocument();
  });
  

  it("should btnSave clicked", () => {

    render(<ArticleCardEdit article={article} onSave={onSave} onCancel={onCancel}/>);

    fireEvent.click(screen.getByTestId('article-card-btn-save'))
    fireEvent.click(screen.getByTestId('article-card-btn-save'))
    fireEvent.click(screen.getByTestId('article-card-btn-save'))

    expect(onSave).toBeCalledTimes(3)

  });

  it("should btnCancel clicked", () => {

    render(<ArticleCardEdit article={article} onSave={onSave} onCancel={onCancel}/>);

    fireEvent.click(screen.getByTestId('article-card-edit-btn-cancel'))

    expect(onSave).toBeCalledTimes(1)

  });
})

