import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 opacity-20" />
        <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-red-400 rounded-2xl -rotate-12 opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-blue-400 rounded-2xl rotate-45 opacity-20" />
      </div>

      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                alt="logo"
                src="/logo.png"
                width={1000}
                height={1000}
                className="w-36 h-[100px] object-cover"
              />
            </div>
            <p className="text-muted-foreground">
              Transforming events into unforgettable LEGO experiences since
              2020.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-foreground transition-colors">
                <Link href="/services/corporate">Corporate Events</Link>
              </li>
              <li className="hover:text-foreground transition-colors">
                <Link href="/services/birthday">Birthday Parties</Link>
              </li>
              <li className="hover:text-foreground transition-colors">
                <Link href="/services/exhibitions">Exhibitions</Link>
              </li>
              <li className="hover:text-foreground transition-colors">
                <Link href="/services/workshops">Workshops</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-foreground transition-colors">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-foreground transition-colors">
                <Link href="/team">Our Team</Link>
              </li>
              <li className="hover:text-foreground transition-colors">
                <Link href="/careers">Careers</Link>
              </li>
              <li className="hover:text-foreground transition-colors">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-foreground transition-colors">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li className="hover:text-foreground transition-colors">
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li className="hover:text-foreground transition-colors">
                <Link href="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 LAG Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
