import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import restaurantMenuMock from "../mocks/restaurantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurantMenuMock);
    },
  });
});
it("Should load restaurant menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore()}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Burgers & Wraps (24)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(24);

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  expect(addBtns.length).toBe(24);

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart 1")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(25);
});
