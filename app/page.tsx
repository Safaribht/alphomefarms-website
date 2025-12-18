import Hero from "../components/Hero";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Page() {
  return (
    <main>
      <Hero />

      <Section title="Our Programs">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="AgriGuard360" description="Smart farming, forest monitoring, and market access for communities." />
          <Card title="Youth & Women Training" description="Practical skills, leadership, and green jobs pathways." />
          <Card title="Agroforestry & Reforestation" description="Tree planting, soil restoration, and climate resilience." />
        </div>
      </Section>

      <Section title="Get Involved">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/donate">Donate</Button>
          <Button href="/contact" variant="secondary">Contact Us</Button>
        </div>
      </Section>
    </main>
  );
}
