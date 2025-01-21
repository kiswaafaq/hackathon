// Function to sanitize input
const sanitizeInput = (input) => input.replace(/[^a-zA-Z0-9 ]/g, '');

// Function to fetch products
export async function fetchProducts() {
  try {
    const response = await fetch("/api/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    // Sanitize the fetched data (example: assuming data is an array of products)
    const sanitizedData = data.map((product) => ({
      ...product,
      name: sanitizeInput(product.name || ""),
      description: sanitizeInput(product.description || ""),
    }));

    return sanitizedData;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return { error: "Unable to fetch products. Please try again later." };
  }
}
