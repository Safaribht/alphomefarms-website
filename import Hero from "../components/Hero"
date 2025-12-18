import { Button } from "./ui/Button";
import { site } from "./site";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-teal-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-semibold text-teal-800 shadow-soft">
              Community-led agriculture & forest protection in the DRC
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Growing food security while protecting forests.
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-700">
              {site.name} empowers youth and women farmers through climate-smart
              agriculture, agroforestry, and community monitoring—supported by
              innovation and practical training.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/programs" variant="primary">Explore our programs</Button>
              <Button href="/donate" variant="ghost">Support our work</Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-xs font-semibold text-slate-600">Focus</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Farmers • Youth • Women</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-xs font-semibold text-slate-600">Approach</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Training • Tools • Markets</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-xs font-semibold text-slate-600">Impact</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Resilience • Jobs • Forests</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Featured initiative
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">AgriGuard360</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                A community-powered platform combining training and data to
                support sustainable farming while reducing deforestation.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-teal-50 p-4">
                  <p className="text-sm font-bold text-teal-900">Forest Monitoring</p>
                  <p className="mt-1 text-sm text-teal-900/80">
                    Community alerts and reporting for mining/charcoal-driven threats.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-900">Smart Farming</p>
                  <p className="mt-1 text-sm text-slate-700">
                    Climate-smart practices, market access, and learning resources.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button href="/programs#agriguard360" variant="secondary">
                  Learn about AgriGuard360
                </Button>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-3xl bg-teal-200 blur-2xl md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
