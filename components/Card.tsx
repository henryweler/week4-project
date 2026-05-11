type CardProps = {
  title: string;
  description: string;
};

export default function Card({
  title,
  description,
}: CardProps) {
  return (
    <article className="border p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-2">
        {title}
      </h3>

      <p>{description}</p>
    </article>
  );
}
