import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Layout from "./index";

describe('Field', () => {
  it("Field render", () => {

    render(
    <Layout head={<h1>Текст</h1>}>
      <div>текст</div>
    </Layout>
    );
  
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it("should be default text if head was empty", () => {

    render(
    <Layout head={''}>
      <div>текст</div>
    </Layout>
    );
  
    expect(screen.getByTestId('layout-head')).toContainHTML('Интернет-магазин')
  });
})

