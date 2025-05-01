import { Scale, FileText, AlertCircle, CheckCircle } from "lucide-react";

export default function TermsPage() {
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
                <Scale className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#191970] rounded-full" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <div className="space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Agreement to Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing our services, you agree to be bound by these
                  Terms of Service and all applicable laws and regulations.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>You agree to provide accurate information</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#191970] rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Intellectual Property
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content and materials available through our service are
                  protected by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copyright and trademark laws</li>
                  <li>Intellectual property rights</li>
                  <li>Other proprietary rights</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">Service Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Our service terms include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment and refund policies</li>
                  <li>Event cancellation terms</li>
                  <li>Liability limitations</li>
                  <li>Dispute resolution procedures</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
