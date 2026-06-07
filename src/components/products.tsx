type Product = {
  origin: string;
  name: string;
  notes: string;
  price: string;
  tile: string;
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    origin: "The Spine",
    name: "Truong Son — Signature Blend",
    notes: "Caramel · cocoa · toasted nut",
    price: "$22.00",
    tile: "bg-tile-clay",
    featured: true,
  },
  {
    origin: "Da Lat, Lam Dong",
    name: "Mist — Highland Arabica",
    notes: "Bright · floral · stone fruit",
    price: "$24.00",
    tile: "bg-tile-mist",
  },
  {
    origin: "Dak Lak",
    name: "Bold — Single-Origin Robusta",
    notes: "Dark chocolate · toasted nut · bold",
    price: "$21.00",
    tile: "bg-tile-blush",
  },
  {
    origin: "Brew Kit",
    name: "Milk Coffee Kit",
    notes: "Blend · condensed milk · real phin filter",
    price: "$38.00",
    tile: "bg-tile-stone",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href="#collection"
      className="group flex flex-col text-espresso"
    >
      <div
        className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-sm ${product.tile}`}
      >
        {product.featured && (
          <span className="absolute left-3 top-3 bg-amber px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-espresso">
            Signature
          </span>
        )}
        {/* Stylised bag stand-in */}
        <div className="flex h-44 w-32 flex-col justify-between rounded-sm bg-cream/90 p-4 shadow-md transition-transform duration-300 group-hover:-translate-y-1">
          <span className="font-display text-lg font-semibold leading-tight">
            {product.name.split("—")[0].trim()}
          </span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-espresso/60">
            Sunwake
          </span>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <p className="eyebrow text-jade">{product.origin}</p>
        <h3 className="font-display text-lg font-semibold leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-espresso/60">{product.notes}</p>
        <p className="pt-1 text-sm font-semibold">{product.price}</p>
      </div>
    </a>
  );
}

export function Products() {
  return (
    <section id="collection" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-amber">The Collection</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-espresso md:text-5xl">
            Small batches, big character
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-espresso-soft">
            Start with the signature blend, then explore each region on its own
            terms.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
