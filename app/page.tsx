    import {"@/components/ui/Section"} from "@/components/ui/Section";
    import { Card } from "@/components/ui/Card";
    import { Button } from "@/components/ui/Button";

    export const metadata = {
      title: "Programs"
    };

    export default function Page() {
      return (
        <>
          <section className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Programs</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">What we implement: training, tools, markets, agroforestry, and community forest protection.</p>
            </div>
          </section>

          <Section
  title="Programs"
  subtitle="Our programs connect sustainable farming with forest protection and livelihoods."
>
  <div className="grid gap-6 md:grid-cols-3">
    <Card title="AgriGuard360" eyebrow="Technology + community">
      A platform and program model that helps communities monitor forests while
      enabling climate-smart farming, learning, and market connections.
      <div className="mt-4">
        <a id="agriguard360" />
        <Button href="/contact" variant="ghost">Request a program brief</Button>
      </div>
    </Card>

    <Card title="Farmer training & extension" eyebrow="Capacity building">
      Practical training modules covering soil health, seed selection,
      post-harvest handling, cooperative models, and farm business planning.
    </Card>

    <Card title="Agroforestry & reforestation" eyebrow="Nature-based solutions">
      Tree nurseries, planting campaigns, and community protection efforts to
      restore degraded landscapes and stabilize yields over time.
    </Card>
  </div>
</Section>

<Section
  title="Community-led forest monitoring"
  subtitle="We support local monitors to identify threats and create evidence for action."
>
  <div className="grid gap-6 md:grid-cols-2">
    <Card title="Threat reporting" eyebrow="Early warning">
      Community members document forest threats and submit reports aligned with
      accountability and safeguarding principles.
    </Card>
    <Card title="Advocacy and coordination" eyebrow="Response">
      We coordinate with stakeholders—community leaders, civil society, and
      relevant institutions—to act on credible evidence.
    </Card>
  </div>
</Section>

<Section
  title="How to engage"
  subtitle="Partner, sponsor training, support equipment, or fund monitoring activities."
>
  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-base font-semibold text-slate-900">
          Let’s co-design an implementation plan.
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          We can tailor activities, deliverables, and indicators to your funding requirements.
        </p>
      </div>
      <div className="flex gap-3">
        <Button href="/donate" variant="primary">Donate</Button>
        <Button href="/contact" variant="secondary">Partner with us</Button>
      </div>
    </div>
  </div>
</Section>

        </>
      );
    }
