import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import AboutInfo from "./index";

describe('About-info', () => {
  it("About-info page render", () => {
    render(<AboutInfo />);
  
    expect(screen.getByTestId('about-info')).toBeInTheDocument();
  });
})

