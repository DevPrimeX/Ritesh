import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, User, Package, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="font-sans text-2xl font-black tracking-tighter text-slate-950 uppercase group-hover:text-primary transition-colors">
            Ritesh <span className="text-primary group-hover:text-slate-950 transition-colors">Plastic</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {!isAdmin ? (
            <>
              <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
              <Link href="/products" className="hover:text-primary transition-colors">PRODUCTS</Link>
              <Link href="/about" className="hover:text-primary transition-colors">ABOUT US</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
            </>
          ) : (
            <>
              <Link href="/admin/dashboard" className="text-primary">DASHBOARD</Link>
              <Link href="/" className="hover:text-primary transition-colors">VIEW SITE</Link>
            </>
          )}

          {user ? (
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l">
              <span className="text-muted-foreground">Hi, {user.username}</span>
              <Button variant="ghost" size="sm" onClick={() => logout()}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Admin Login
              </Button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4 space-y-4 shadow-lg animate-in slide-in-from-top-5">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 font-medium">HOME</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="block py-2 font-medium">PRODUCTS</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 font-medium">ABOUT US</Link>
          {user && (
            <div className="border-t pt-4 mt-2">
              <Link href="/admin/dashboard" onClick={() => setIsOpen(false)} className="block py-2 font-medium text-primary">ADMIN DASHBOARD</Link>
              <Button variant="destructive" className="w-full mt-2" onClick={() => logout()}>Logout</Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 mt-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <span className="font-sans text-3xl font-black tracking-tighter text-white uppercase">
                Ritesh <span className="text-primary">Plastic</span>
              </span>
            </div>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Leading manufacturer of high-performance, precision-engineered plastic solutions for the pharmaceutical industry.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xl font-black mb-8 tracking-tight uppercase">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link href="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-black mb-8 tracking-tight uppercase">Categories</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link href="/products?category=Containers" className="hover:text-primary transition-colors">Plastic Containers</Link></li>
              <li><Link href="/products?category=Trays" className="hover:text-primary transition-colors">Serving Trays</Link></li>
              <li><Link href="/products?category=Foils" className="hover:text-primary transition-colors">Aluminum Foils</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-black mb-8 tracking-tight uppercase">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center"><Phone className="h-5 w-5 mr-3 text-primary" /> +91 98822 82826</li>
              <li className="flex items-start mt-4 leading-relaxed">
                <div className="mt-1 mr-3 w-5 h-5 flex-shrink-0 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                Industrial Area Lodhimajra, Baddi<br/>Himachal Pradesh, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-bold tracking-widest uppercase">
          <div>© {new Date().getFullYear()} Ritesh Plastic. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
