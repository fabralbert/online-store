import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import LoginBtn from "./index";

const onOpen = jest.fn();
const onUnlogin = jest.fn();

describe('LoginBtn', () => {
  it("Login btn render", () => {
    render(<LoginBtn onOpen={onOpen} user={''} onUnlogin={onUnlogin} />);
  
    expect(screen.getByTestId('login-btn')).toBeInTheDocument();
  });
})

