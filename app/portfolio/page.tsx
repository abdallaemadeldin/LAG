"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Building2, Trophy, Star, Blocks, HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "tech-innovation-summit",
    title: "Tech Innovation Summit",
    category: "Corporate Event",
    description:
      "Interactive LEGO® Technic display showcasing future technologies",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    icon: Building2,
    stats: { pieces: "25K+", hours: "120", team: "8" },
  },
  {
    slug: "city-museum-exhibition",
    title: "City Museum Exhibition",
    category: "Public Installation",
    description: "Massive LEGO® city diorama with working features",
    image:
      "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg",
    icon: Trophy,
    stats: { pieces: "50K+", hours: "240", team: "12" },
  },
  {
    title: "Space Adventure",
    category: "Theme Park",
    description: "Interactive space-themed LEGO® experience",
    image: "https://images.pexels.com/photos/1187758/pexels-photo-1187758.jpeg",
    icon: Star,
    color: "blue",
    stats: { pieces: "35K+", hours: "180", team: "10" },
  },
  {
    title: "Robotics Workshop",
    category: "Educational",
    description: "STEM learning program using LEGO® Mindstorms",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    icon: Building2,
    color: "green",
    stats: { pieces: "15K+", hours: "90", team: "6" },
  },
  {
    title: "Medieval Castle",
    category: "Museum Exhibition",
    description: "Historical recreation using LEGO® architecture",
    image: "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg",
    icon: Trophy,
    color: "purple",
    stats: { pieces: "45K+", hours: "200", team: "15" },
  },
  {
    title: "Eco Future City",
    category: "Public Installation",
    description: "Sustainable city concept built in LEGO®",
    image: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg",
    icon: Star,
    color: "orange",
    stats: { pieces: "30K+", hours: "150", team: "8" },
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#FFD700]/10 to-transparent -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-[#FFD700] rounded-2xl rotate-12 opacity-20" />
        <div className="absolute top-1/3 right-32 w-32 h-32 bg-[#191970] rounded-2xl -rotate-12 opacity-20" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-[#0A0F2C] rounded-2xl rotate-45 opacity-20" />
        <div className="absolute top-32 left-1/4 w-24 h-24 bg-[#121212] rounded-2xl rotate-45 opacity-20" />
        <div className="absolute top-48 right-1/4 w-16 h-16 bg-[#FFD700] rounded-2xl -rotate-12 opacity-20" />
      </div>

      <section className="pt-32 pb-24 container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6 mb-8">
            <div className="relative">
              <div className="w-12 h-12 bg-[#FFD700] rounded shadow-lg transform -rotate-12">
                <Trophy className="w-6 h-6 text-[#0A0F2C] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#191970] rounded-full" />
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-[#191970] rounded shadow-lg transform rotate-12">
                <Star className="w-6 h-6 text-[#FFD700] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFD700] rounded-full" />
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-[#0A0F2C] rounded shadow-lg transform -rotate-6">
                <Building2 className="w-6 h-6 text-[#FFD700] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#191970] rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Our Bricktastic Events</h1>
          <p className="text-lg text-muted-foreground">
            Discover our collection of extraordinary LEGO® creations that have
            brought joy and wonder to events worldwide.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="h-2 w-16 bg-[#FFD700] rounded-full" />
            <div className="h-2 w-8 bg-[#191970] rounded-full" />
            <div className="h-2 w-12 bg-[#0A0F2C] rounded-full" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            { number: "50+", label: "Major Events" },
            { number: "1M+", label: "Bricks Used" },
            { number: "100K+", label: "Happy Attendees" },
          ].map((stat, index) => (
            <div key={stat.label} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative p-6">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="group relative">
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-xl bg-[#FFD700] flex items-center justify-center mb-4 mx-auto">
                        <project.icon className="w-7 h-7 text-[#0A0F2C]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-4">
                        {project.category}
                      </p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">
                            {project.stats.pieces}
                          </div>
                          <div className="text-xs text-white/70">Pieces</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">
                            {project.stats.hours}
                          </div>
                          <div className="text-xs text-white/70">Hours</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">
                            {project.stats.team}
                          </div>
                          <div className="text-xs text-white/70">Builders</div>
                        </div>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-[#FFD700] hover:bg-[#191970] text-[#0A0F2C] hover:text-[#FFFFFF]"
                      >
                        <Link href={`/portfolio/${project.slug}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Client Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear what our clients say about their LEGO® experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The team building workshop transformed our company culture. Everyone still talks about it!",
                author: "Michael Chang",
                role: "HR Director, TechCorp",
                image:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                color: "yellow",
              },
              {
                quote:
                  "Our museum exhibition exceeded all expectations. The interactive elements were brilliant!",
                author: "Emma Rodriguez",
                role: "Museum Curator",
                image:
                  "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
                color: "red",
              },
              {
                quote:
                  "The STEM workshop inspired our students. A perfect blend of education and fun!",
                author: "David Wilson",
                role: "School Principal",
                image:
                  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
                color: "blue",
              },
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-${testimonial.color}-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`}
                />
                <div className="bg-cta-hover rounded-xl p-6 shadow-lg relative">
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-${testimonial.color}-400 rounded`}
                  />
                  <div
                    className={`absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-16 bg-${testimonial.color}-400 rounded`}
                  />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div
                        className={`absolute -bottom-2 -right-2 w-6 h-6 bg-${testimonial.color}-400 rounded-lg transform rotate-12`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <blockquote className="relative">
                    <div
                      className={`absolute -left-2 -top-2 w-8 h-8 bg-${testimonial.color}-400/20 rounded-full`}
                    />
                    <p className="relative text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-4 h-4 bg-${testimonial.color}-400 rounded-sm transform rotate-45`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-2xl transform rotate-12 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-400 rounded-2xl transform -rotate-12 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400 rounded-2xl transform rotate-45 -z-10" />

            <div className="bg-cta-hover rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-3 left-12 w-20 h-6 bg-yellow-400 rounded" />
              <div className="absolute -top-3 right-12 w-20 h-6 bg-red-400 rounded" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-blue-400 rounded" />

              <div className="text-center space-y-6">
                <div className="flex justify-center gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded transform rotate-12" />
                  <div className="w-10 h-10 bg-red-400 rounded transform -rotate-12" />
                  <div className="w-10 h-10 bg-blue-400 rounded" />
                </div>

                <h2 className="text-3xl font-bold">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Let's create an unforgettable LEGO® experience together. Our
                  team is ready to bring your vision to life.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFD700] hover:bg-[#191970] text-[#0A0F2C] hover:text-[#FFFFFF] font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group relative"
                >
                  <div className="absolute inset-x-4 -top-2 h-2 bg-[#191970] rounded-t-lg transform group-hover:-translate-y-0.5 transition-transform" />
                  Let's Build Your Event Together!
                  <HeartHandshake className="w-6 h-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all" />
                  <div className="absolute inset-x-4 -bottom-2 h-2 bg-[#0A0F2C] rounded-b-lg transform group-hover:translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
