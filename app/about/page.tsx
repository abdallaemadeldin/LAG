import { Trophy, Users, Rocket, Blocks } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-yellow-400/10 to-transparent -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-[#FFD700] rounded-2xl rotate-12 opacity-20" />
        <div className="absolute top-1/3 right-32 w-32 h-32 bg-[#191970] rounded-2xl -rotate-12 opacity-20" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-[#0A0F2C] rounded-2xl rotate-45 opacity-20" />
        <div className="absolute top-32 left-1/4 w-24 h-24 bg-[#121212] rounded-2xl rotate-45 opacity-20" />
        <div className="absolute top-48 right-1/4 w-16 h-16 bg-[#FFD700] rounded-2xl -rotate-12 opacity-20" />
      </div>
      
      <section className="pt-24 pb-16 container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-12 h-12 bg-[#FFD700] rounded shadow-lg transform -rotate-12" />
            <div className="w-12 h-12 bg-[#191970] rounded shadow-lg transform rotate-12" />
            <div className="w-12 h-12 bg-[#0A0F2C] rounded shadow-lg transform -rotate-6" />
          </div>
          <h1 className="text-4xl font-bold">About LAG Agency</h1>
          <p className="text-lg text-muted-foreground">
            Building connections through the power of LEGO® creativity since 2020.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="h-2 w-16 bg-[#FFD700] rounded-full" />
            <div className="h-2 w-8 bg-[#191970] rounded-full" />
            <div className="h-2 w-12 bg-[#0A0F2C] rounded-full" />
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg"
              alt="LAG Agency Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-8 w-16 h-16 bg-[#FFD700] rounded-xl transform rotate-12" />
          <div className="absolute -bottom-8 right-12 w-20 h-20 bg-[#191970] rounded-xl transform -rotate-12" />
        </div>
      </section>
      
      <section className="py-24 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center">
                  <Blocks className="w-6 h-6 text-[#0A0F2C]" />
                </div>
                <h2 className="text-3xl font-bold">Our Story</h2>
              </div>
              
              <div className="flex gap-2">
                <div className="h-1 w-20 bg-[#FFD700] rounded-full" />
                <div className="h-1 w-12 bg-[#191970] rounded-full" />
                <div className="h-1 w-16 bg-[#0A0F2C] rounded-full" />
              </div>
              
              <p className="text-muted-foreground">
                LAG Agency was born from a simple idea: to bring people together through the universal language of LEGO®. What started as a small team of enthusiasts has grown into a full-service event agency, specializing in creating unforgettable LEGO® experiences.
              </p>
              
              <p className="text-muted-foreground">
                Our mission is simple: to unlock creativity and foster connections through the power of LEGO®. Whether it's team building, educational workshops, or large-scale installations, we believe every brick placed is an opportunity to inspire, engage, and bring people together.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded bg-[#FFD700] transform rotate-12" />
                  <div className="w-8 h-8 rounded bg-[#191970] transform -rotate-12" />
                  <div className="w-8 h-8 rounded bg-[#0A0F2C]" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Building dreams since 2020
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg"
                  alt="LEGO Building Process"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#FFD700] rounded-xl transform -rotate-12 -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0A0F2C] rounded-xl transform rotate-45 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#191970] rounded-xl transform rotate-12 -z-10" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Blocks,
                color: '#FFD700',
                title: 'Creativity',
                description: 'We believe in the power of imagination to transform events into memorable experiences.',
              },
              {
                icon: Users,
                color: '#191970',
                title: 'Collaboration',
                description: 'Working together with our clients to build something extraordinary.',
              },
              {
                icon: Rocket,
                color: '#0A0F2C',
                title: 'Innovation',
                description: 'Pushing boundaries to create unique and engaging LEGO experiences.',
              },
              {
                icon: Trophy,
                color: '#121212',
                title: 'Excellence',
                description: 'Committed to delivering the highest quality in every brick we place.',
              },
            ].map((value, index) => (
              <div key={value.title} className="group relative">
                <div className={`absolute inset-0 bg-[${value.color}]/20 rounded-xl -rotate-6 scale-[0.98] opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className={`bg-[${value.color}] p-6 rounded-xl shadow-lg relative`}>
                  <div className={`bg-[${value.color}] w-12 h-3 absolute -top-1.5 left-8 rounded opacity-50`} />
                  <value.icon className="w-8 h-8 mb-4 text-[#FFFFFF]" />
                  <h3 className="font-semibold text-xl mb-2 text-[#FFFFFF]">{value.title}</h3>
                  <p className="text-[#FFFFFF]/80">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '500+',
                label: 'Events Completed',
                description: 'Successful LEGO® experiences delivered',
                color: '#FFD700',
              },
              {
                number: '50K+',
                label: 'Happy Builders',
                description: 'Participants in our events',
                color: '#FFD700',
              },
              {
                number: '1M+',
                label: 'Bricks Used',
                description: 'In our creative installations',
                color: '#FFD700',
              },
              {
                number: '15+',
                label: 'Industry Awards',
                description: 'For innovative LEGO® experiences',
                color: '#FFD700',
              },
            ].map((stat, index) => (
              <div key={stat.label} className="group relative">
                <div className={`absolute inset-0 bg-[${stat.color}]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className="bg-cta-hover rounded-xl p-6 shadow-lg relative">
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[${stat.color}] rounded`} />
                  <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-[${stat.color}] rounded opacity-50`} />
                  
                  <div className="text-center space-y-1">
                    <div className={`text-4xl font-bold text-[${stat.color}]`}>
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-semibold">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                  
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 space-y-1">
                    <div className={`w-2 h-2 rounded-full bg-[${stat.color}]`} />
                    <div className={`w-2 h-2 rounded-full bg-[${stat.color}]`} />
                    <div className={`w-2 h-2 rounded-full bg-[${stat.color}]`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Meet the Master Builders</h2>
            <p className="text-lg text-muted-foreground">
              Our team of creative experts bringing LEGO® magic to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Creative Director',
                funFact: 'Built a 10,000-piece LEGO city in under 48 hours',
                color: '#FFD700',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Technical Lead',
                funFact: 'Holds a world record for speed-building the Death Star',
                color: '#8A2BE2',
                image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
              },
              {
                name: 'Emma Thompson',
                role: 'Event Manager',
                funFact: 'Started with LEGO at age 3, never stopped building',
                color: '#0A0F2C',
                image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
              },
            ].map((member, index) => (
              <div key={member.name} className="group relative">
                <div className={`absolute inset-0 bg-[${member.color}]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className="bg-cta-hover rounded-xl p-6 shadow-lg relative">
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[${member.color}] rounded`} />
                    <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-[${member.color}] rounded opacity-50`} />
                    <div className={`absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-12 bg-[${member.color}] rounded`} />
                    <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-12 bg-[${member.color}] rounded`} />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded bg-[${member.color}] flex-shrink-0 flex items-center justify-center`}>
                        <Blocks className="w-4 h-4 text-[#FFFFFF]" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Fun Fact:</span> {member.funFact}
                      </p>
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
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from those who've experienced the magic of LAG events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'David Chen',
                role: 'Tech Company CEO',
                quote: 'The team building workshop was transformative. Our employees still talk about it months later!',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
                color: '#FFD700',
              },
              {
                name: 'Emily Martinez',
                role: 'Event Coordinator',
                quote: 'LAG brought our conference to life with their interactive LEGO installations. Simply incredible!',
                image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
                color: '#8A2BE2',
              },
              {
                name: 'Michael Thompson',
                role: 'School Principal',
                quote: 'The educational value combined with pure fun made our STEM week unforgettable for students.',
                image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
                color: '#0A0F2C',
              },
            ].map((testimonial, index) => (
              <div key={testimonial.name} className="group relative">
                <div className={`absolute inset-0 bg-[${testimonial.color}]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className="bg-cta-hover rounded-xl p-6 shadow-lg relative">
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[${testimonial.color}] rounded`} />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-[${testimonial.color}] rounded-lg transform rotate-12`} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <blockquote className="relative">
                    <div className={`absolute -left-2 -top-2 w-8 h-8 bg-[${testimonial.color}]/20 rounded-full`} />
                    <p className="relative text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-4 h-4 bg-[${testimonial.color}] rounded-sm transform rotate-45`}
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
      
      <section className="py-24 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FFD700] rounded-2xl rotate-12 opacity-20" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#191970] rounded-2xl -rotate-12 opacity-20" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-[#0A0F2C] rounded-2xl rotate-45 opacity-20" />
        </div>
        
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD700] hover:bg-[#191970] text-[#0A0F2C] hover:text-[#FFFFFF] font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Let's Build Your Event
                  <Blocks className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}