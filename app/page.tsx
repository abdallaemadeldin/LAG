import { Button } from "@/components/ui/button";
import {
  Blocks,
  Rocket,
  Trophy,
  Users,
  Calendar,
  Truck,
  Wrench,
  Palette,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-accent rounded-2xl rotate-12 opacity-20" />
        <div className="absolute top-1/3 right-32 w-32 h-32 bg-[#191970] rounded-2xl -rotate-12 opacity-20" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-primary rounded-2xl rotate-45 opacity-20" />
      </div>
      <section className="container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-accent rounded shadow-lg transform -rotate-12" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                We fill the gap
              </h1>
              <div className="w-16 h-16 bg-[#191970] rounded shadow-lg transform rotate-12" />
            </div>
            <p className="text-xl text-muted-foreground">
              Transform your events into unforgettable experiences with our
              custom LEGO solutions.
            </p>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-xl bg-accent hover:bg-cta-hover hover:text-accent text-[#0A0F2C]"
          >
            Let&apos;s Build Your Event
          </Button>
        </div>
      </section>

      <div className="relative">
        <div className="absolute inset-x-0 -top-4 h-8 bg-gradient-to-r from-accent via-[#191970] to-primary transform -skew-y-3" />
        <section className="bg-secondary/50 pt-24 pb-16">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold">
                Building Dreams, One Brick at a Time
              </h2>
              <p className="text-lg text-muted-foreground">
                LAG Agency specializes in creating extraordinary LEGO-themed
                experiences that inspire creativity and bring people together.
                We transform ordinary spaces into interactive wonderlands where
                imagination knows no bounds.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-6 shadow-lg group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Award-Winning Designs
                </h3>
                <p className="text-muted-foreground">
                  Recognized for our innovative LEGO installations and unique
                  event concepts.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-lg group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-[#191970] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Passionate LEGO masters dedicated to bringing your vision to
                  life.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-lg group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Limitless Creativity
                </h3>
                <p className="text-muted-foreground">
                  From corporate events to birthday parties, we create
                  unforgettable experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute inset-x-0 -bottom-4 h-8 bg-gradient-to-r from-primary via-[#191970] to-accent transform skew-y-3" />
      </div>

      <section className="py-24 container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Our Building Blocks</h2>
          <p className="text-lg text-muted-foreground">
            Every successful event is built from perfectly fitted pieces. Here's
            how we make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-transparent rounded-xl -rotate-6 scale-[0.98] opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="bg-accent p-6 rounded-xl shadow-lg relative">
              <div className="bg-accent/70 w-12 h-3 absolute -top-1.5 left-8 rounded" />
              <Calendar className="w-8 h-8 mb-4 text-white" />
              <h3 className="font-semibold text-xl mb-2 text-white">
                Planning
              </h3>
              <p className="text-white/80">
                Meticulous event planning and creative concept development.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#191970]/20 to-transparent rounded-xl -rotate-6 scale-[0.98] opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="bg-[#191970] p-6 rounded-xl shadow-lg relative">
              <div className="bg-[#191970]/70 w-12 h-3 absolute -top-1.5 left-8 rounded" />
              <Palette className="w-8 h-8 mb-4 text-white" />
              <h3 className="font-semibold text-xl mb-2 text-white">
                Production
              </h3>
              <p className="text-white/80">
                Custom LEGO builds and interactive installations.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/20 to-transparent rounded-xl -rotate-6 scale-[0.98] opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="bg-[#8A2BE2] p-6 rounded-xl shadow-lg relative">
              <div className="bg-[#8A2BE2]/70 w-12 h-3 absolute -top-1.5 left-8 rounded" />
              <Truck className="w-8 h-8 mb-4 text-white" />
              <h3 className="font-semibold text-xl mb-2 text-white">
                Logistics
              </h3>
              <p className="text-white/80">
                Seamless delivery and setup of all LEGO elements.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent rounded-xl -rotate-6 scale-[0.98] opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="bg-secondary p-6 rounded-xl shadow-lg relative">
              <div className="bg-secondary/70 w-12 h-3 absolute -top-1.5 left-8 rounded" />
              <Wrench className="w-8 h-8 mb-4 text-white" />
              <h3 className="font-semibold text-xl mb-2 text-white">Support</h3>
              <p className="text-white/80">
                On-site management and technical assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Masterpieces</h2>
            <p className="text-lg text-muted-foreground">
              Every event is a unique creation, built brick by brick with
              passion and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 z-10">
                <div className="text-black">
                  <h3 className="font-bold text-xl mb-2">
                    Tech Conference 2024
                  </h3>
                  <p className="text-black/80">
                    Interactive LEGO robotics display and team building workshop
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg"
                  alt="Tech Conference LEGO Display"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute -top-2 left-4 w-8 h-8 bg-accent rounded-lg transform rotate-45" />
                <div className="absolute -top-2 right-8 w-6 h-6 bg-[#191970] rounded-lg transform -rotate-12" />
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-red-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 z-10">
                <div className="text-black">
                  <h3 className="font-bold text-xl mb-2">Children's Museum</h3>
                  <p className="text-black/80">
                    Giant LEGO city installation with interactive play zones
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
                  alt="Children's Museum LEGO City"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute -top-2 left-8 w-6 h-6 bg-primary rounded-lg transform -rotate-12" />
                <div className="absolute -top-2 right-4 w-8 h-8 bg-[#191970] rounded-lg transform rotate-45" />
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 z-10">
                <div className="text-black">
                  <h3 className="font-bold text-xl mb-2">
                    Corporate Team Building
                  </h3>
                  <p className="text-black/80">
                    Custom LEGO challenge events for Fortune 500 companies
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="https://t3.ftcdn.net/jpg/01/94/35/50/360_F_194355042_6zWDHJjet3sUpRYdsKN9KOiB0Pbeb9SX.jpg"
                  alt="Corporate Team Building Event"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute -top-2 left-6 w-8 h-8 bg-secondary rounded-lg transform rotate-45" />
                <div className="absolute -top-2 right-6 w-6 h-6 bg-accent rounded-lg transform -rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="absolute inset-x-0 -top-4 h-8 bg-gradient-to-r from-accent via-[#191970] to-primary transform -skew-y-3" />
        <section className="py-24 bg-background">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Happy Builders</h2>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it - hear from those who've
                experienced the magic of LEGO events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute -top-6 left-8 w-20 h-20 bg-yellow-400 rounded-2xl transform rotate-12 -z-10" />
                <div className="bg-cta-hover rounded-xl p-6 shadow-lg relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center">
                      <Users className="w-6 h-6 text-yellow-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">
                        Tech Conference Organizer
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The LEGO robotics workshop was a huge hit! Our attendees
                    couldn't stop talking about how engaging and unique the
                    experience was."
                  </p>
                  <div className="absolute -bottom-2 right-8 w-8 h-8 bg-yellow-400 rounded transform rotate-45" />
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 left-8 w-20 h-20 bg-red-400 rounded-2xl transform -rotate-12 -z-10" />
                <div className="bg-cta-hover rounded-xl p-6 shadow-lg relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-400 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-red-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Michael Chen</h3>
                      <p className="text-sm text-muted-foreground">
                        Museum Director
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The interactive LEGO city installation exceeded our
                    expectations. It's become our most popular permanent
                    exhibit!"
                  </p>
                  <div className="absolute -bottom-2 right-8 w-8 h-8 bg-red-400 rounded transform rotate-45" />
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 left-8 w-20 h-20 bg-blue-400 rounded-2xl transform rotate-12 -z-10" />
                <div className="bg-cta-hover rounded-xl p-6 shadow-lg relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-400 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Emily Rodriguez</h3>
                      <p className="text-sm text-muted-foreground">
                        HR Director
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Best team building activity we've ever done! The custom
                    challenges really brought our departments together."
                  </p>
                  <div className="absolute -bottom-2 right-8 w-8 h-8 bg-blue-400 rounded transform rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute inset-x-0 -bottom-4 h-8 bg-gradient-to-r from-primary via-[#191970] to-accent transform skew-y-3" />
      </div>

      <section className="py-24 container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Let's Connect!</h2>
          <p className="text-lg text-muted-foreground">
            Ready to build something amazing together? Drop us a message!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-2xl transform rotate-12 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#191970] rounded-2xl transform -rotate-12 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl transform rotate-45 -z-10" />

            <form className="bg-cta-hover rounded-xl p-8 shadow-lg relative space-y-6">
              <div className="absolute -top-3 left-12 w-16 h-4 bg-accent/70 rounded" />
              <div className="absolute -top-3 right-12 w-16 h-4 bg-[#191970]/70 rounded" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    <label className="text-sm font-medium">Name</label>
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-accent" />
                    <label className="text-sm font-medium">Company</label>
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                    placeholder="Awesome Inc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <label className="text-sm font-medium">Event Date</label>
                </div>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Blocks className="w-5 h-5 text-accent" />
                  <label className="text-sm font-medium">Message</label>
                </div>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background min-h-[120px]"
                  placeholder="Tell us about your dream event..."
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-secondary text-cta-hover hover:text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
