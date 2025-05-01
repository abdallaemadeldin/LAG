import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Users,
  Rocket,
  Calendar,
  Blocks,
} from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-yellow-400/10 to-transparent -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-yellow-400 rounded-2xl rotate-12 opacity-20" />
        <div className="absolute top-1/3 right-32 w-32 h-32 bg-red-400 rounded-2xl -rotate-12 opacity-20" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-blue-400 rounded-2xl rotate-45 opacity-20" />
      </div>

      <section className="pt-32 pb-24 container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6 mb-8">
            <div className="relative">
              <div className="w-12 h-12 bg-yellow-400 rounded shadow-lg transform -rotate-12">
                <MessageSquare className="w-6 h-6 text-yellow-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full" />
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-red-400 rounded shadow-lg transform rotate-12">
                <Mail className="w-6 h-6 text-red-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-blue-400 rounded shadow-lg transform -rotate-6">
                <Phone className="w-6 h-6 text-blue-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Let's Build Together!</h1>
          <p className="text-lg text-muted-foreground">
            Ready to create something amazing? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Whether you're planning an event, have a question, or just
                  want to say hello, we're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  // {
                  //   icon: MapPin,
                  //   title: "Visit Us",
                  //   content: "123 LEGO Lane, Brick City, BC 12345",
                  //   color: "yellow",
                  // },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+971585334758",
                    color: "#FFD700",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "asan@lag.agency",
                    color: "#121212",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Friday: 9am - 6pm",
                    color: "#191970",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-[${item.color}] flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className={`w-6 h-6 text-white`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
                    alt="Office Location"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-xl transform rotate-12 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-400 rounded-xl transform -rotate-12 -z-10" />
              </div>
            </div>

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
                    <Calendar className="w-5 h-5 text-accent" />
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
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-cta-hover rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-12 w-20 h-6 bg-yellow-400 rounded" />
              <div className="absolute -top-4 right-12 w-20 h-6 bg-red-400 rounded" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-blue-400 rounded" />

              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">
                  Follow Our Building Journey!
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Stay updated with our latest projects, events, and
                  behind-the-scenes moments.
                </p>

                <div className="flex justify-center gap-6">
                  {[
                    { color: "yellow", label: "Instagram" },
                    { color: "red", label: "Facebook" },
                    { color: "blue", label: "Twitter" },
                  ].map((social) => (
                    <div
                      key={social.label}
                      className={`w-16 h-16 bg-${social.color}-400 rounded-xl flex items-center justify-center transform hover:rotate-6 transition-transform cursor-pointer`}
                    >
                      <span className="sr-only">{social.label}</span>
                      <div
                        className={`w-8 h-8 bg-${social.color}-500 rounded-lg transform rotate-45`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
