import { Button } from '@/components/ui/button';
import { Building2, Calendar, Clock, MapPin, Users, Blocks, MessageCircle, HelpCircle, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { slug: 'tech-innovation-summit' },
  ];
}

const events = [
  {
    slug: 'tech-innovation-summit',
    title: 'Tech Innovation Summit',
    date: 'March 15, 2024',
    time: '9:00 AM - 5:00 PM',
    venue: 'TechHub Convention Center',
    address: '123 Innovation Drive, Silicon Valley, CA',
    description: 'Join us for an immersive LEGO® Technic experience showcasing the future of technology through interactive builds and displays.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    color: 'yellow',
    schedule: [
      {
        time: '9:00 AM',
        title: 'Registration & Welcome',
        description: 'Check-in and receive your LEGO® builder badge',
      },
      {
        time: '10:00 AM',
        title: 'Opening Keynote',
        description: 'The Future of Tech through LEGO® Innovation',
      },
      {
        time: '11:30 AM',
        title: 'Interactive Building Session',
        description: 'Hands-on LEGO® Technic robotics workshop',
      },
      {
        time: '1:00 PM',
        title: 'Lunch Break',
        description: 'Networking and display viewing',
      },
      {
        time: '2:00 PM',
        title: 'Tech Challenges',
        description: 'Team-based LEGO® building competitions',
      },
      {
        time: '4:00 PM',
        title: 'Awards Ceremony',
        description: 'Celebrating the best builds of the day',
      },
    ],
    speakers: [
      {
        name: 'Dr. Sarah Chen',
        role: 'Lead Innovation Designer',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
        topic: 'Building the Future with LEGO® Technic',
      },
      {
        name: 'Mark Rodriguez',
        role: 'Master Builder',
        image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        topic: 'Advanced Robotics Techniques',
      },
      {
        name: 'Emily Thompson',
        role: 'Tech Education Specialist',
        image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
        topic: 'STEM Learning Through Play',
      },
    ],
    testimonials: [
      {
        quote: "The interactive sessions were incredibly engaging. Best tech event I've attended!",
        author: "James Wilson",
        role: "Software Engineer",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
      },
      {
        quote: "Amazing how LEGO® can teach complex tech concepts in such a fun way.",
        author: "Lisa Chen",
        role: "Product Manager",
        image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
      }
    ],
    faqs: [
      {
        question: "What should I bring?",
        answer: "Just your creativity! All LEGO® materials will be provided."
      },
      {
        question: "Is this suitable for beginners?",
        answer: "Yes! We have activities for all skill levels."
      },
      {
        question: "Will there be networking opportunities?",
        answer: "Absolutely! We have dedicated networking sessions throughout the day."
      }
    ]
  }
];

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return null;

  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#FFD700]/10 to-transparent -z-10" />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 container px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="aspect-[21/9] rounded-xl overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-8 w-16 h-16 bg-[#FFD700] rounded-xl transform rotate-12" />
            <div className="absolute -bottom-8 right-12 w-20 h-20 bg-[#191970] rounded-xl transform -rotate-12" />
          </div>

          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">{event.title}</h1>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span>{event.venue}</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Event Schedule</h2>
            <div className="space-y-6">
              {event.schedule.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-[#FFD700]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="bg-background rounded-xl p-6 shadow-lg relative">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FFD700] rounded transform rotate-45" />
                    <div className="flex items-start gap-6">
                      <div className="text-lg font-semibold text-muted-foreground w-24 flex-shrink-0">
                        {item.time}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {event.speakers.map((speaker, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-[#FFD700]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="bg-background rounded-xl p-6 shadow-lg relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#FFD700] rounded" />
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="rounded-xl overflow-hidden">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#FFD700] rounded-lg transform rotate-12" />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{speaker.role}</p>
                      <p className="text-sm">{speaker.topic}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Attendee Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.testimonials.map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-[#FFD700]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="bg-background rounded-xl p-6 shadow-lg relative">
                    <div className="absolute -top-3 left-8 w-16 h-4 bg-[#FFD700] rounded" />
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#FFD700] rounded-lg transform rotate-12" />
                      </div>
                      <div>
                        <blockquote className="text-muted-foreground italic mb-3">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {event.faqs.map((faq, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-[#FFD700]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="bg-background rounded-xl p-6 shadow-lg relative">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FFD700] rounded transform rotate-45" />
                    <div className="space-y-2">
                      <h3 className="font-semibold flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-muted-foreground" />
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-12 w-20 h-6 bg-[#FFD700] rounded" />
              <div className="absolute -top-4 right-12 w-20 h-6 bg-[#191970] rounded" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0F2C] rounded" />
              
              <div className="text-center space-y-6 mb-8">
                <h2 className="text-3xl font-bold">Questions About the Event?</h2>
                <p className="text-lg text-muted-foreground">
                  Get in touch with our team for more information about {event.title}
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background min-h-[120px]"
                    placeholder="Your question or message..."
                  />
                </div>

                <Button className="w-full bg-[#FFD700] hover:bg-[#191970] text-[#0A0F2C] hover:text-[#FFFFFF]">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}