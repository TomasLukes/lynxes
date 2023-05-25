
export default function ProductPage({ params }) {
  const { id } = params;

  return (
        <p className="mx-auto text-center bg-yellow-500 py-3 text-3xl">Product: <span className="font-semibold">{id}</span></p>
    )
}

