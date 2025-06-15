import { notFound } from "next/navigation";
import ProductClient from "./Client";

// Product data
const products = [
  {
    id: "midnight-noir",
    name: "Midnight Noir",
    price: 38,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product1.jpg",
    description: "Rich black amber and vanilla with hints of sandalwood",
    category: "noir",
    details: {
      scent: "Black Amber, Vanilla, Sandalwood",
      burnTime: "50-55 hours",
      weight: "8 oz",
      dimensions: "3.5\" x 3.5\" x 4\"",
      materials: "Soy wax, Cotton wick, Matte black glass vessel"
    },
    longDescription: "Midnight Noir envelops your space in a rich, sophisticated ambiance with its deep notes of black amber and vanilla, complemented by hints of sandalwood. The matte black vessel adds a touch of modern elegance to any room. Perfect for creating a cozy evening atmosphere or setting the mood for intimate gatherings."
  },
  {
    id: "snowdrift",
    name: "Snowdrift",
    price: 42,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product2.jpg",
    description: "Fresh cotton, white musk, and a touch of eucalyptus",
    category: "white",
    details: {
      scent: "Fresh Cotton, White Musk, Eucalyptus",
      burnTime: "60-65 hours",
      weight: "10 oz",
      dimensions: "3.75\" x 3.75\" x 4.25\"",
      materials: "Soy wax, Cotton wick, Frosted white glass vessel"
    },
    longDescription: "Snowdrift brings the crisp, clean scent of freshly fallen snow into your home with its blend of fresh cotton and white musk, elevated by subtle notes of eucalyptus. The frosted white glass vessel complements the pure, airy fragrance. Ideal for creating a serene, refreshing atmosphere in any space."
  },
  {
    id: "starlight",
    name: "Starlight",
    price: 36,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product3.jpg",
    description: "Bergamot, silver sage, and cedarwood in a hand-etched tin",
    category: "silver",
    details: {
      scent: "Bergamot, Silver Sage, Cedarwood",
      burnTime: "45-50 hours",
      weight: "7 oz",
      dimensions: "3\" x 3\" x 3.5\"",
      materials: "Soy wax, Cotton wick, Hand-etched silver tin"
    },
    longDescription: "Starlight captures the essence of a clear night sky with its refreshing blend of bergamot, silver sage, and grounding cedarwood. The hand-etched silver tin catches and reflects light beautifully, adding a touch of celestial magic to your space. Perfect for meditation corners or as a thoughtful gift."
  },
  {
    id: "ember",
    name: "Ember",
    price: 44,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product4.jpg",
    description: "Smoky vetiver, amber, and warm spices with ember-like gradient wax",
    category: "noir",
    details: {
      scent: "Smoky Vetiver, Amber, Warm Spices",
      burnTime: "55-60 hours",
      weight: "9 oz",
      dimensions: "3.5\" x 3.5\" x 4.5\"",
      materials: "Soy wax, Cotton wick, Smoky grey glass vessel"
    },
    longDescription: "Ember evokes the comforting warmth of a smoldering fire with its complex blend of smoky vetiver, rich amber, and warm spices. The unique gradient wax mimics glowing embers, while the smoky grey vessel enhances the sensory experience. Perfect for creating a cozy, intimate atmosphere during cool evenings."
  },
  {
    id: "amber-glow",
    name: "Amber Glow",
    price: 38,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/amberglass.jpg",
    description: "Warm amber, vanilla, and golden honey in an amber glass vessel",
    category: "amber",
    details: {
      scent: "Warm Amber, Vanilla, Golden Honey",
      burnTime: "50-55 hours",
      weight: "8 oz",
      dimensions: "3.5\" x 3.5\" x 4\"",
      materials: "Soy wax, Cotton wick, Amber glass vessel"
    },
    longDescription: "Amber Glow bathes your space in a warm, golden light with its comforting blend of amber, vanilla, and sweet honey. The amber glass vessel enhances the candle's warm glow, creating a cozy, inviting atmosphere. Perfect for relaxing evenings or creating a welcoming ambiance for guests."
  },
  {
    id: "midnight-garden",
    name: "Midnight Garden",
    price: 46,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/matteblackvessel.jpg",
    description: "Night-blooming jasmine, bergamot, and black pepper in a matte black vessel",
    category: "noir",
    details: {
      scent: "Night-blooming Jasmine, Bergamot, Black Pepper",
      burnTime: "55-60 hours",
      weight: "9 oz",
      dimensions: "3.75\" x 3.75\" x 4\"",
      materials: "Soy wax, Cotton wick, Matte black concrete vessel"
    },
    longDescription: "Midnight Garden captures the mysterious allure of a garden after dark with its intoxicating blend of night-blooming jasmine, bright bergamot, and a hint of black pepper for depth. The sleek matte black concrete vessel adds a modern, sophisticated touch to any space. Perfect for creating an elegant, sensual atmosphere."
  },
  {
    id: "abstract-dreams",
    name: "Abstract Dreams",
    price: 52,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/paintedceramic.jpg",
    description: "Lavender, chamomile, and sandalwood in a hand-painted ceramic vessel",
    category: "artisan",
    details: {
      scent: "Lavender, Chamomile, Sandalwood",
      burnTime: "65-70 hours",
      weight: "11 oz",
      dimensions: "4\" x 4\" x 4.5\"",
      materials: "Soy wax, Cotton wick, Hand-painted ceramic vessel"
    },
    longDescription: "Abstract Dreams invites relaxation with its calming blend of lavender and chamomile, grounded by warm sandalwood. Each hand-painted ceramic vessel features unique abstract silver strokes, making every candle a one-of-a-kind piece of art. Perfect for creating a peaceful sanctuary or as a special gift for art lovers."
  },
  {
    id: "wanderlust-trio",
    name: "Wanderlust Trio",
    price: 48,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/traveltins.jpg",
    description: "Set of three travel-sized candles in our bestselling scents",
    category: "travel",
    details: {
      scent: "Midnight Noir, Amber Glow, Starlight",
      burnTime: "20-25 hours each",
      weight: "3 oz each",
      dimensions: "2.5\" x 2.5\" x 2\" each",
      materials: "Soy wax, Cotton wick, Embossed travel tins"
    },
    longDescription: "The Wanderlust Trio features our three bestselling scents in travel-friendly sizes, perfect for creating your signature ambiance wherever you go. Each tin is elegantly embossed with our logo and designed to be easily packable. This set makes an ideal gift or a wonderful way to sample different fragrances before committing to a full-sized candle."
  }
];

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
