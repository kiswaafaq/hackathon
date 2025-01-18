import client from './sanityClient'; // Import the client you set up

export const fetchProducts = async () => {
    const query = `*[_type == "product"] {
      name,
      price,
      description,
      "imageUrl": image.asset->url
    }`;
    try {
      const products = await client.fetch(query);
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  };