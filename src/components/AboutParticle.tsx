"use client"
import ParticleImage from "./originkit/svgparticles"

export default function AboutParticle({ src }: { src: string }) {
  return (
    <div className="w-full h-full relative">
      <ParticleImage
        width="100%"
        height="100%"
        particleCount={120}
        particleSize={2.8}
        imageConfig={{ image: src, mode: "fit", scale: 11 }}
        hoverConfig={{ hoverType: "roam", roamOpacity: 0.45, transition: { duration: 0.9, ease: "easeInOut" } }}
        repulsionConfig={{ repulsionForce: 4, repulsionRadius: 48 }}
      />
    </div>
  )
}
