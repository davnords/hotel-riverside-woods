'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

function Location() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Location
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Find Us in Sezibwa</h3>
            <p className="text-gray-600">
              Located in the the tranquil nature of Sezibwa, Mukono, Riverside Woods resort is easily accessible
              and situated close to the Jinja road.
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Riverside Woods, Sezibwa, Kampala, Uganda</span>
            </div>
            <Button
              className="mt-4"

              onClick={() => window.open('https://www.google.com/maps/place/Riverside+Woods+Sezibwa/@0.3387453,32.8641758,17z/data=!4m15!1m8!3m7!1s0x177dc5169dc8dec1:0x9564754c23f7bc38!2sRiverside+Woods+Sezibwa!8m2!3d0.3388068!4d32.864397!10e5!16s%2Fg%2F11fr2rsbzb!3m5!1s0x177dc5169dc8dec1:0x9564754c23f7bc38!8m2!3d0.3388068!4d32.864397!16s%2Fg%2F11fr2rsbzb?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
          <div className="aspect-square w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.843461646919!2d32.8641758!3d0.3387453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dc5169dc8dec1%3A0x9564754c23f7bc38!2sRiverside+Woods+Sezibwa!5e0!3m2!1sen!2sug!4v1710337559276!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location