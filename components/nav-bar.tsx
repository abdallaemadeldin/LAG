"use client";

import {
  Building2,
  Home,
  Package2,
  Phone,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  // { name: "About", href: "/about", icon: Building2 },
  // { name: "Services", href: "/services", icon: Package2 },
  // { name: "Portfolio", href: "/portfolio", icon: Building2 },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function NavBar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <Link href="/">
              <Image
                alt="logo"
                src="/logo.png"
                width={1000}
                height={1000}
                className="w-28 h-auto me-6"
              />
            </Link>
          </div>
        </div>

        <p className="font-semibold">We Fill The GAP</p>

        <button
          className="lg:hidden p-2 hover:bg-cta-hover/80 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        <div className="hidden lg:flex gap-2">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "group relative flex h-10 items-center gap-2 px-4 rounded-md transition-all duration-300",
                  "hover:bg-cta-hover/80 hover:shadow-md",
                  isActive && "bg-cta-hover/60"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    isHovered && "scale-110 rotate-6"
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium transition-all duration-300",
                    isHovered && "translate-x-0.5"
                  )}
                >
                  {item.name}
                </span>
                {isActive && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-cta-hover rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute inset-0 top-16 bg-background transition-all duration-300 transform z-50 ",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container px-6 py-8 space-y-4 bg-background">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300",
                  "hover:bg-cta-hover/80 hover:shadow-md",
                  isActive && "bg-cta-hover/60 shadow-sm"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cta-hover flex items-center justify-center transition-colors">
                    <Icon
                      className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        isHovered && "scale-110 rotate-6"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "font-medium transition-transform duration-300",
                      isHovered && "translate-x-0.5"
                    )}
                  >
                    {item.name}
                  </span>
                </div>
                <ChevronRight
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-300",
                    isHovered && "translate-x-1"
                  )}
                />
              </Link>
            );
          })}
          <div className="pt-4 mt-4 border-t border-border">
            <Button
              asChild
              className="w-full bg-cta-hover hover:bg-cta-hover/90 text-white font-medium"
            >
              <Link href="/contact">Let&lsquo;s Build Together!</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
