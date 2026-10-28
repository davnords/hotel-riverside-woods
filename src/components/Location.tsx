'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Navigation } from 'lucide-react'

const DIRECTIONS_URL = 'https://www.google.com/maps?cid=10764857979203730488'

function Location() {
  return (
    <section className="py-24 px-4 md:px-8 bg-muted/60 border-y border-border/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">
              <span className="h-px w-6 bg-primary/40" aria-hidden />
              Getting here
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-5">
              Find us in Ssezibwa
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-7">
              Set in the tranquil nature of Ssezibwa, Mukono, Riverside Woods is easily
              accessible and sits close to the Jinja&ndash;Kampala road.
            </p>

            <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background p-5 mb-7">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed">
                Riverside Woods Resort, Ssezibwa Falls Road,
                <br />
                3.9&nbsp;km off the Jinja&ndash;Kampala Road, Mukono, Uganda
              </span>
            </div>

            <Button
              size="lg"
              className="rounded-full px-6"
              onClick={() => window.open(DIRECTIONS_URL, '_blank', 'noopener,noreferrer')}
            >
              <Navigation className="mr-2 h-4 w-4" />
              Get directions
            </Button>
          </div>

          <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-lg shadow-primary/5 border border-border/70">
            <iframe
              title="Map showing Riverside Woods Resort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.843461646919!2d32.8641758!3d0.3387453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dc5169dc8dec1%3A0x9564754c23f7bc38!2sRiverside+Woods+Sezibwa!5e0!3m2!1sen!2sug!4v1710337559276!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
