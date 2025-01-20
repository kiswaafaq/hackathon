import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Simulates user interactions
import Cart from "../components/Cart"; // Your Cart component

// Test for an empty cart
test("renders cart with no items", () => {
  render(<Cart items={[]} />);
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});

// Test for adding an item to the cart
test("adds item to cart via button click", () => {
  const mockAddToCart = jest.fn(); // Mock function to simulate adding to the cart
  render(<Cart items={[]} onAddToCart={mockAddToCart} />);

  // Simulate clicking the "Add to Cart" button
  userEvent.click(screen.getByRole("button", { name: /Add to Cart/i }));

  // Verify the mock function is called
  expect(mockAddToCart).toHaveBeenCalledTimes(1);
});

// Test for displaying items in the cart
test("displays items in the cart", () => {
  const items = [
    { id: 1, name: "Chair", price: 500 },
    { id: 2, name: "Table", price: 1000 },
  ]; // Mock cart items

  render(<Cart items={items} />);

  // Check that each item's name and price are displayed
  items.forEach((item) => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.price.toString())).toBeInTheDocument();
  });
});
