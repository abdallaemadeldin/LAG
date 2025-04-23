import { Button } from '@/components/ui/button';
import { Building2, Trophy, Star, Users, Clock, Blocks, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'tech-innovation-summit' },
    { slug: 'city-museum-exhibition' },
  ];
}

const projects = [
  {
    slug: 'tech-innovation-summit',
    title: 'Tech Innovation Summit',
    category: 'Corporate Event',
    description: 'Interactive LEGO® Technic display showcasing future technologies',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    gallery: [
      'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg',
      'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg',
    ],
    icon: Building2,
    color: 'yellow',
    stats: { pieces: '25K+', hours: '120', team: '8' },
    highlights: [
      'Custom-built robotics display',
      'Interactive coding stations',
      'Tech-themed LEGO® sculptures',
      'Hands-on building workshops',
    ],
    testimonial: {
      quote: "The LEGO® displays perfectly captured our company's innovative spirit. An unforgettable experience!",
      author: 'Sarah Chen',
      role: 'Tech Summit Director',
    },
  },
];

export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return null;

  const Icon = project.icon;

  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#FFD700]/10 to-transparent -z-10" />
      
      <section className="pt-24 pb-16 container px-6 mx-auto">
        <Link 
          href="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0A0F2C] rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#FFFFFF]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">{project.title}</h1>
                <p className="text-lg text-muted-foreground">{project.category}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="h-1 w-20 bg-[#FFD700] rounded-full" />
              <div className="h-1 w-12 bg-[#191970] rounded-full" />
              <div className="h-1 w-16 bg-[#121212] rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground">{project.description}</p>

            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2 text-center">
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-[#0A0F2C]/20 rounded-lg flex items-center justify-center">
                    <Blocks className="w-5 h-5 text-[#191970]" />
                  </div>
                </div>
                <div className="font-bold text-xl">{project.stats.pieces}</div>
                <div className="text-sm text-muted-foreground">LEGO® Pieces</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-[#0A0F2C]/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#191970]" />
                  </div>
                </div>
                <div className="font-bold text-xl">{project.stats.hours}</div>
                <div className="text-sm text-muted-foreground">Build Hours</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="flex justify-center">
                  <div className="w-10 h-10 bg-[#0A0F2C]/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#191970]" />
                  </div>
                </div>
                <div className="font-bold text-xl">{project.stats.team}</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FFD700] rounded-xl transform rotate-12 -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#191970] rounded-xl transform -rotate-12 -z-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {project.gallery.map((image, index) => (
            <div key={index} className="relative group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} Gallery ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FFD700] rounded-lg transform rotate-12" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Project Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-[#FFD700] flex-shrink-0 transform rotate-45 mt-1" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-secondary/50 rounded-xl p-8">
            <div className="absolute -top-4 left-8 w-16 h-4 bg-[#FFD700] rounded" />
            <div className="absolute -bottom-4 right-8 w-16 h-4 bg-[#191970] rounded" />
            <blockquote className="relative">
              <div className="absolute -left-2 -top-2 w-8 h-8 bg-[#0A0F2C]/20 rounded-full" />
              <p className="text-lg italic text-muted-foreground mb-4">"{project.testimonial.quote}"</p>
              <footer>
                <div className="font-semibold">{project.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}