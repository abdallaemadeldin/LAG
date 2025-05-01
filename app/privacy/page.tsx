import { Shield, Lock, Eye, FileCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
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
                <Shield className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#191970] rounded-full" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Your privacy matters to us. Learn how we collect, use, and protect
              your information.
            </p>
          </div>

          <div className="space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Company details</li>
                  <li>Event preferences and requirements</li>
                  <li>Communication history</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#191970] rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the collected information for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Communicating about events and updates</li>
                  <li>Processing payments and transactions</li>
                  <li>Analyzing and enhancing user experience</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We do not sell or rent your personal information. We may share
                  your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers and partners</li>
                  <li>Legal authorities when required</li>
                  <li>Business transfers in case of acquisition</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
