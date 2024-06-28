type CardProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  imgSrc: string;
  price: number;
  name: string;
  category: string;
};

export default function Card({
  imgSrc,
  price,
  name,
  category,
  ...props
}: CardProps) {
  return (
    <a
      href="#"
      className="hover:scale-105 shadow-sm hover:shadow-lg transition-all duration-200 border rounded-md overflow-hidden border-seondary-500"
    >
      <img
        src={imgSrc}
        alt="Product"
        className="h-64 w-72 object-cover object-center"
      />
      <article className="px-4 py-3 w-full bg-primary-50 flex flex-col gap-1">
        <span className="text-secondary-500 uppercase text-xs">{category}</span>
        <p className="text-lg text-secondary-950 truncate block capitalize">
          {name}
        </p>
        <p className="text-base text-secondary-950">{price} €</p>
      </article>
    </a>
  );
}
