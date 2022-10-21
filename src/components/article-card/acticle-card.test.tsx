import { render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import ArticleCard from "./index";

const onAdd = jest.fn;
const onOpen = jest.fn;
const onEdit = jest.fn;

describe('Article-card', () => {
  it("Article-card-info render", () => {

    const article = {
      id: "1",
      title: "Танец с драконами",
      price: 549,
      img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
      description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
      countLeft: 5
    }

    render(<ArticleCard article={article} user='' onAdd={onAdd} onOpen={onOpen} onEdit={onEdit}/>);
  
    expect(screen.getByTestId('article-card')).toBeInTheDocument();
  });

  it("Article-card-info buttons render", () => {

    const article = {
      id: "1",
      title: "Танец с драконами",
      price: 549,
      img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
      description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
      countLeft: 5
    }

    render(<ArticleCard article={article} user='admin' onAdd={onAdd} onOpen={onOpen} onEdit={onEdit}/>);
  
    expect(screen.getByTestId('article-card-buttons')).toBeInTheDocument();
  });

  it("Expect div with warning to login", () => {

    const article = {
      id: "1",
      title: "Танец с драконами",
      price: 549,
      img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
      description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
      countLeft: 5
    }

    render(<ArticleCard article={article} user='' onAdd={onAdd} onOpen={onOpen} onEdit={onEdit}/>);

    const btnOpen = screen.getByTestId('article-card-btn-open')
    fireEvent.click(btnOpen)
    expect(screen.getByTestId('article-card-btn-open')).toBeInTheDocument();
  });

  it("Expect article-card-buttons after click onAdd", () => {

    const article = {
      id: "1",
      title: "Танец с драконами",
      price: 549,
      img: "https://img-gorod.ru/27/197/2719718_detail.jpg",
      description: "'Танцем драконов' издавна звали в Семи королевствах войну. Но теперь война охватывает все новые и новые земли. Война катится с Севера – из-за Стены. Война идет с Запада – с Островов. Войну замышляет Юг, мечтающий посадить на Железный Трон свою ставленницу. И совсем уже неожиданную угрозу несет с Востока вошедшая в силу 'мать драконов' Дейенерис... Что будет? Кровь и ненависть. Любовь и политика. И прежде всего – судьба, которой угодно было свести в смертоносном танце великие силы.",
      countLeft: 5
    }

    render(<ArticleCard article={article} user='admin' onAdd={onAdd} onOpen={onOpen} onEdit={onEdit}/>);
    const btnAdd = screen.getByTestId('article-card-btn-add')

    fireEvent.click(btnAdd)
    expect(screen.getByTestId('article-card-btn-add')).toBeInTheDocument();
  });
})

