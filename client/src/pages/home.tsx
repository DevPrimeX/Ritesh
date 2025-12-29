import { Link } from "wouter";
import { motion } from "framer-motion";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, ThumbsUp, Loader2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useQuery } from "@tanstack/react-query";
import { type Category } from "@shared/schema";

function CategoryList() {
  const { data: categories, isLoading } = useQuery<Category[]>({ 
    queryKey: ["/api/categories"] 
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const displayCategories = categories?.filter(c => c.isHomePage) || [];

  if (displayCategories.length === 0) {
    return (
      <div className="text-center text-slate-500 py-12">
        No categories selected for homepage.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayCategories.map((cat) => (
        <Link key={cat.id} href={`/products?category=${cat.name}`}>
          <div className="group relative h-80 overflow-hidden cursor-pointer bg-slate-900 rounded-md">
            <img 
              src={cat.image || `https://placehold.co/600x800/1e293b/ffffff?text=${cat.name}`} 
              alt={cat.name}
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white border-4 border-white px-6 py-3 uppercase tracking-widest group-hover:bg-white group-hover:text-slate-900 transition-colors">
                {cat.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function HomePage() {
  const { data: featuredProducts, isLoading } = useProducts({ search: "" });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-slate-950 text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-transparent z-10" />
        
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0" ref={emblaRef}>
          <div className="flex h-full">
            <div className="flex-[0_0_100%] min-w-0 relative">
               <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 scale-105" alt="Industrial Manufacturing" />
            </div>
            <div className="flex-[0_0_100%] min-w-0 relative">
               <img src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" alt="Precision Engineering" />
            </div>
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Industrial Excellence
            </div>
            <h1 className="text-6xl md:text-8xl font-sans font-black mb-6 leading-[0.9] tracking-tighter uppercase">
              The Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Packaging
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-xl font-medium leading-relaxed">
              Premium manufacturing of high-performance, sustainable plastic solutions for global pharmaceutical leaders.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 h-16 rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 font-bold">
                  Explore Catalog <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/5 backdrop-blur-md hover:bg-white hover:text-slate-950 text-lg px-10 h-16 rounded-2xl transition-all hover:scale-105 active:scale-95 font-bold">
                  Custom Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-slate-100 bg-slate-50/50 hover-elevate transition-shadow group rounded-md">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Certified Quality</h3>
              <p className="text-slate-600">ISO 9001:2015 certified manufacturing process ensuring consistent top-tier quality standards for every batch.</p>
            </div>
            <div className="p-8 border border-slate-100 bg-slate-50/50 hover-elevate transition-shadow group rounded-md">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-slate-600">Efficient logistics network with real-time tracking, ensuring timely delivery across the country in 2-5 business days.</p>
            </div>
            <div className="p-8 border border-slate-100 bg-slate-50/50 hover-elevate transition-shadow group rounded-md">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ThumbsUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Wholesale Pricing</h3>
              <p className="text-slate-600">Direct-from-factory pricing tiers that scale with your volume, providing the best value and margins for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 uppercase">Our Categories</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
          
          <CategoryList />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-900">FEATURED PRODUCTS</h2>
              <div className="h-1 w-20 bg-primary" />
            </div>
            <Link href="/products">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-96 bg-slate-100 animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts?.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
