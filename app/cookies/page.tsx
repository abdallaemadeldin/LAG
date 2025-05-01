import { Cookie, Settings, Bell, Shield } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-accent/10 to-transparent -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-accent rounded-2xl rotate-12 opacity-20" />
        <div className="absolute top-1/3 right-32 w-32 h-32 bg-[#191970] rounded-2xl -rotate-12 opacity-20" />
        <div className="absolute bottom-1/4 -right-16 w-48 h-48 bg-primary rounded-2xl rotate-45 opacity-20" />
      </div>

      <section className="pt-32 pb-24 container px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-6 mb-8">
            <div className="relative">
              <div className="w-12 h-12 bg-accent rounded shadow-lg transform -rotate-12">
                <Cookie className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#191970] rounded-full" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground">
              Learn about how we use cookies and similar technologies on our
              website.
            </p>
          </div>

          <div className="space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">What Are Cookies</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cookies are small text files that are placed on your device
                  when you visit our website. They help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences</li>
                  <li>Understand how you use our website</li>
                  <li>Improve your browsing experience</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#191970] rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Types of Cookies We Use
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We use different types of cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to improve our service</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for relevant content</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">Managing Cookies</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>You can control cookies through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Browser settings</li>
                  <li>Our cookie consent tool</li>
                  <li>Third-party opt-out mechanisms</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
