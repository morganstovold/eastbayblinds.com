"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { businessInfo, navigationItems } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/EastBayBlinds-logo.png";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const ProductsDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${
            isActivePath("/products") ? "text-primary" : "text-gray-700"
          }`}
        >
          Products
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/products/shutters" className="w-full">
            Shutters
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/products/blinds" className="w-full">
            Blinds
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/products/shades" className="w-full">
            Shades
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const MobileMenu = () => (
    <div className="flex flex-col space-y-4 p-4">
      {navigationItems.map((item) => (
        <div key={item.id}>
          {item.children ? (
            <div className="space-y-2">
              <Link
                href={item.href}
                className={`block py-2 text-lg font-medium transition-colors ${
                  isActivePath(item.href)
                    ? "text-primary"
                    : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
              <div className="ml-4 space-y-2">
                {item.children.map((child) => (
                  <Link
                    key={child.id}
                    href={child.href}
                    className={`block py-1 text-base transition-colors ${
                      isActivePath(child.href)
                        ? "text-primary"
                        : "text-gray-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={item.href}
              className={`block py-2 text-lg font-medium transition-colors ${
                isActivePath(item.href) ? "text-primary" : "text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
      <Separator />
      <div className="pt-4">
        <Button asChild size="lg" className="w-full">
          <Link href="/contact">Free Consultation</Link>
        </Button>
      </div>
    </div>
  );

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="East Bay Blinds Logo"
              width={125}
              height={125}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.children ? (
                  <ProductsDropdown />
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-700 transition-colors duration-300 font-medium ${
                      isActivePath(item.href) ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{businessInfo.phone}</span>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">EB</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">
                      {businessInfo.name}
                    </span>
                  </Link>
                </div>
                <Separator />
                <div className="flex-1 py-4">
                  <MobileMenu />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
