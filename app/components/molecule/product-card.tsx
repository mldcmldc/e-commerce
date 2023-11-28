type ProductCardProps = {
  name: string;
}

function ProductCard(props: ProductCardProps) {
  const { name } = props;

  return <div className="w-full h-40 flex justify-center items-center border border-black">{name}</div>
}

export default ProductCard;
