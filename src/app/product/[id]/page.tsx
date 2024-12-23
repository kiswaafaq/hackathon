// app/product/[id]/page.tsx
import Image from 'next/image';
import productsData from 'data/products.json';
import { notFound } from 'next/navigation';

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    description?: string;
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = productsData.find((p: Product) => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto p-8"> {/* Increased padding */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> {/* items-start for alignment */}
                <div className="md:order-1"> {/* Image on the left on larger screens */}
                    <div className="relative aspect-square md:aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg"> {/* Aspect ratio and styling */}
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="100vw"
                            priority // Prioritize image loading
                        />
                    </div>
                </div>
                <div className="md:order-2"> {/* Text on the right on larger screens */}
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1> {/* Larger heading */}
                    <div className="flex items-center mb-6"> {/* Increased spacing */}
                        <p className="text-xl mr-4">${product.price}</p> {/* Increased spacing */}
                        {product.originalPrice && (
                            <p className="text-gray-500 line-through">${product.originalPrice}</p>
                        )}
                    </div>
                    {product.description && <p className="text-gray-700 mb-8">{product.description}</p>} {/* Increased spacing */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"> {/* Larger button */}
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}