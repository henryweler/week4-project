import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function HomePage() {
  const cards = [
    {
      title: "React Components",
      description:
        "Reusable UI components make development faster and more organized.",
    },

    {
      title: "Next.js Routing",
      description:
        "Next.js provides fast client-side navigation and server rendering.",
    },

    {
      title: "State Management",
      description:
        "React hooks simplify dynamic interactions and user experiences.",
    },
  ];

  return (
    <div className="space-y-10">
      <Hero />

      <section className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
    </div>
  );
}
