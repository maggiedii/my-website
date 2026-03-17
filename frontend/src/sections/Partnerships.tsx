import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Handshake } from 'lucide-react';
import type { Partnership as PartnershipType } from 'shared';

interface PartnershipsProps {
  partnerships: PartnershipType[];
}

export function Partnerships({ partnerships }: PartnershipsProps) {
  return (
    <section id="partnerships" className="scroll-mt-24 bg-pastel-peach/20 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-pastel-pink-dark">Partnerships</h2>

        {partnerships.length === 0 ? (
          <Card className="animate-slide-up">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-pastel-pink-light p-3">
                  <Handshake className="h-6 w-6 text-pastel-pink-dark" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">Partnerships coming soon</CardTitle>
                  <CardDescription className="text-lg">
                    Add collaborations in `backend/src/data/profile.json` when you are ready.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="animate-slide-up h-full transition-transform hover:scale-[1.02]">
                <CardHeader
                  className={
                    partnership.collaboration || partnership.duration || partnership.description || partnership.link
                      ? 'space-y-4'
                      : 'items-center justify-center space-y-4 px-6 py-8 text-center'
                  }
                >
                  <div
                    className={
                      partnership.collaboration || partnership.duration || partnership.description || partnership.link
                        ? 'flex items-start gap-4'
                        : 'flex flex-col items-center gap-4'
                    }
                  >
                    <div
                      className={`flex h-20 items-center justify-center rounded-2xl border border-pastel-pink/20 px-5 ${
                        partnership.collaboration || partnership.duration || partnership.description || partnership.link
                          ? 'w-28 shrink-0'
                          : 'w-full'
                      } ${
                        partnership.logoBackground === 'dark' ? 'bg-slate-900' : 'bg-white'
                      }`}
                    >
                      {partnership.logo ? (
                        <img
                          src={partnership.logo}
                          alt={`${partnership.partner} logo`}
                          className="max-h-11 w-auto max-w-full object-contain"
                        />
                      ) : (
                        <Handshake className="h-6 w-6 text-pastel-pink-dark" />
                      )}
                    </div>
                    <div
                      className={
                        partnership.collaboration || partnership.duration || partnership.description || partnership.link
                          ? 'flex-1'
                          : 'space-y-1'
                      }
                    >
                      <CardTitle className="text-xl">{partnership.partner}</CardTitle>
                      {partnership.collaboration || partnership.duration ? (
                        <CardDescription className="text-base">
                          {[partnership.collaboration, partnership.duration].filter(Boolean).join(' • ')}
                        </CardDescription>
                      ) : null}
                    </div>
                  </div>
                </CardHeader>
                {partnership.description || partnership.link ? (
                  <CardContent className="space-y-4 pt-0">
                    {partnership.description ? (
                      <p className="text-muted-foreground">{partnership.description}</p>
                    ) : null}
                    {partnership.link ? (
                      <a
                        href={partnership.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-pastel-pink-dark transition-colors hover:text-pastel-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        View partnership
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </CardContent>
                ) : null}
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
