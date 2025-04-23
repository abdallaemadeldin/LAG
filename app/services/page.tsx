import { Button } from '@/components/ui/button';
import { Building2, Cake, Blocks, GraduationCap, Users, Rocket, Wand2, Sparkles, Calendar, Truck, MapPin, Mic2, ClipboardCheck, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
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
                <Wand2 className="w-6 h-6 text-[#0A0F2C] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#191970] rounded-full" />
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-[#191970] rounded shadow-lg transform rotate-12">
                <Sparkles className="w-6 h-6 text-[#FFD700] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFD700] rounded-full" />
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-[#0A0F2C] rounded shadow-lg transform -rotate-6">
                <Blocks className="w-6 h-6 text-[#FFD700] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#191970] rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Transforming ideas into extraordinary LEGO® experiences. Each service is crafted with creativity, precision, and passion.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="h-2 w-16 bg-[#FFD700] rounded-full" />
            <div className="h-2 w-8 bg-[#191970] rounded-full" />
            <div className="h-2 w-12 bg-[#0A0F2C] rounded-full" />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            { number: '15+', label: 'Event Types' },
            { number: '500+', label: 'Happy Clients' },
            { number: '100%', label: 'Satisfaction Rate' },
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
            {[
              {
                icon: Building2,
                title: 'Corporate Events',
                description: 'Team building activities and custom installations for corporate environments.',
                image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
                color: '#FFD700',
              },
              {
                icon: Cake,
                title: 'Birthday Parties',
                description: 'Unforgettable LEGO-themed celebrations for all ages.',
                image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg',
                color: '#191970',
              },
              {
                icon: Blocks,
                title: 'Exhibitions',
                description: 'Large-scale LEGO displays and interactive installations.',
                image: 'https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg',
                color: '#0A0F2C',
              },
              {
                icon: GraduationCap,
                title: 'Educational Workshops',
                description: 'STEM learning programs using LEGO education sets.',
                image: 'https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg',
                color: '#FFD700',
              },
              {
                icon: Users,
                title: 'Community Events',
                description: 'Public installations and community building activities.',
                image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
                color: '#191970',
              },
              {
                icon: Rocket,
                title: 'Custom Projects',
                description: 'Bespoke LEGO solutions for unique requirements.',
                image: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg',
                color: '#0A0F2C',
              },
            ].map((service, index) => (
              <div key={service.title} className="group relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 group/image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg bg-[${service.color}] flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-[#FFFFFF]" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-white/90">{service.description}</p>
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
            <h2 className="text-3xl font-bold">Our Building Process</h2>
            <p className="text-lg text-muted-foreground">
              Every successful event is built brick by brick with meticulous attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Event Planning',
                description: 'Comprehensive planning and timeline management for flawless execution.',
                color: '#FFD700',
                features: ['Concept Development', 'Timeline Creation', 'Budget Management'],
              },
              {
                icon: Blocks,
                title: 'Event Production',
                description: 'Expert creation and assembly of LEGO® installations and activities.',
                color: '#8A2BE2',
                features: ['Custom Builds', 'Interactive Elements', 'Safety Measures'],
              },
              {
                icon: Truck,
                title: 'Logistics',
                description: 'Seamless transportation and setup of all LEGO® components.',
                color: '#0A0F2C',
                features: ['Material Handling', 'Setup & Teardown', 'Equipment Management'],
              },
              {
                icon: MapPin,
                title: 'Venue Selection',
                description: 'Finding the perfect space for your LEGO® experience.',
                color: '#FFD700',
                features: ['Location Scouting', 'Space Planning', 'Venue Coordination'],
              },
              {
                icon: Mic2,
                title: 'Entertainment',
                description: 'Engaging activities and professional LEGO® facilitators.',
                color: '#8A2BE2',
                features: ['Expert Builders', 'Interactive Games', 'Building Challenges'],
              },
              {
                icon: ClipboardCheck,
                title: 'On-site Management',
                description: 'Professional oversight ensuring smooth event operation.',
                color: '#0A0F2C',
                features: ['Event Supervision', 'Guest Experience', 'Real-time Problem Solving'],
              },
            ].map((feature, index) => (
              <div key={feature.title} className="group relative">
                <div className={`absolute inset-0 bg-[${feature.color}]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className="bg-cta-hover rounded-xl p-6 shadow-lg relative">
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[${feature.color}] rounded`} />
                  <div className={`absolute -right-2 top-8 w-4 h-12 bg-[${feature.color}] rounded`} />
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-[${feature.color}] flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-[#FFFFFF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-sm bg-[${feature.color}] transform rotate-45`} />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container px-6 mx-auto">
          {[
            {
              title: 'Corporate Events',
              description: 'Transform team building and corporate gatherings into engaging LEGO® experiences that foster collaboration and creativity.',
              features: [
                'Custom team building workshops',
                'Conference installations',
                'Product launch experiences',
                'Office space transformations',
              ],
              image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
              color: '#FFD700',
              icon: Building2,
            },
            {
              title: 'Birthday Parties',
              description: 'Create unforgettable celebrations with themed LEGO® activities and custom builds for all ages.',
              features: [
                'Age-appropriate activities',
                'Themed party decorations',
                'Building competitions',
                'Take-home LEGO® projects',
              ],
              image: 'https://images.pexels.com/photos/7214784/pexels-photo-7214784.jpeg',
              color: '#191970',
              icon: Cake,
            },
            {
              title: 'Educational Workshops',
              description: 'Combine learning with fun through STEM-focused LEGO® programs and interactive sessions.',
              features: [
                'STEM curriculum integration',
                'Robotics workshops',
                'Architecture programs',
                'Engineering challenges',
              ],
              image: 'https://images.pexels.com/photos/8471800/pexels-photo-8471800.jpeg',
              color: '#8A2BE2',
              icon: GraduationCap,
            },
          ].map((service, index) => (
            <div key={service.title} className="mb-32 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-none">
                  <div className="relative">
                    <div className={`absolute -top-3 left-8 w-16 h-4 bg-[${service.color}] rounded`} />
                    <div className={`absolute -left-3 top-8 w-4 h-16 bg-[${service.color}] rounded`} />
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-[${service.color}] flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-[#FFFFFF]" />
                        </div>
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                      </div>
                      
                      <p className="text-lg text-muted-foreground">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={feature} className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded bg-[${service.color}] flex-shrink-0 transform rotate-45 mt-1`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        asChild
                        size="lg"
                        className={`bg-[${service.color}] hover:bg-[#191970] text-[#FFFFFF]`}
                      >
                        <Link href="/contact">Book This Service</Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="relative order-1 lg:order-none">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-[${service.color}] rounded-xl transform rotate-12 -z-10`} />
                  <div className={`absolute -top-6 -left-6 w-16 h-16 bg-[${service.color}] rounded-xl transform -rotate-12 -z-10`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-cta-hover rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-12 w-20 h-6 bg-[#FFD700] rounded" />
              <div className="absolute -top-4 right-12 w-20 h-6 bg-[#191970] rounded" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0F2C] rounded" />
              
              <div className="text-center space-y-6">
                <div className="flex justify-center gap-4">
                  <div className="w-10 h-10 bg-[#FFD700] rounded transform rotate-12" />
                  <div className="w-10 h-10 bg-[#191970] rounded transform -rotate-12" />
                  <div className="w-10 h-10 bg-[#0A0F2C] rounded" />
                </div>
                
                <h2 className="text-3xl font-bold">Ready to Build Something Amazing?</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Let's create an unforgettable LEGO® experience together. Our team is ready to bring your vision to life.
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