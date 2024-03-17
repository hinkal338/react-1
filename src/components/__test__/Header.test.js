import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
describe("Header component test cases", () => {
  it("Should load login button inside Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore()}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
  it("Should load cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore()}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart 0");
    expect(cartItems).toBeInTheDocument();
  });

  it("Should load online status", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore()}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const onlineStatus = screen.getByText("Online Status: ✅");
    expect(onlineStatus).toBeInTheDocument();
  });
  it("Should change login to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore()}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument;
  });
});
