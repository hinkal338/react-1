import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import restaurantCardMock from "../../components/mocks/restaurantCardMock.json";

describe("Restaurant Card component test cases", () => {
  it("Should render restaurant name", () => {
    render(<RestaurantCard resData={restaurantCardMock} />);
    const resName = screen.getByText("A2B - Adyar Ananda Bhavan");
    expect(resName).toBeInTheDocument();
  });
});
