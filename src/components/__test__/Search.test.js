import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import resListMockData from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resListMockData);
    },
  });
});
it("Should load restaurant cards for sandwich search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(resCardsBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "sandwich" } });
  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");
  expect(resCardsAfterSearch.length).toBe(2);
});

it("Should load top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeTopRestaurantClick = screen.getAllByTestId("resCard");
  expect(cardsBeforeTopRestaurantClick.length).toBe(20);

  const topRatedRestaurantBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(topRatedRestaurantBtn).toBeInTheDocument();

  fireEvent.click(topRatedRestaurantBtn);

  const cardsAfterTopRestaurantClick = screen.getAllByTestId("resCard");
  expect(cardsAfterTopRestaurantClick.length).toBe(17);
});
