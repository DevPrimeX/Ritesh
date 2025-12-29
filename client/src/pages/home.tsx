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
      <div className="flex justify-center py-20">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  const displayCategories = categories?.filter(c => c.isHomePage) || [];

  if (displayCategories.length === 0) {
    return (
      <div className="text-center text-slate-500 py-20 font-bold uppercase tracking-widest bg-white/5 rounded-3xl border border-white/10">
        No categories selected for homepage.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {displayCategories.map((cat) => (
        <Link key={cat.id} href={`/products?category=${cat.name}`}>
          <div className="group relative h-[450px] overflow-hidden cursor-pointer bg-slate-900 rounded-3xl border border-white/10 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
            <img 
              src={cat.image || `https://placehold.co/600x800/1e293b/ffffff?text=${cat.name}`} 
              alt={cat.name}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="h-px w-12 bg-primary mb-6 group-hover:w-24 transition-all duration-500" />
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                {cat.name}
              </h3>
              <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                View Collection
              </div>
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
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-10 bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group rounded-3xl">
              <div className="bg-slate-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Certified Quality</h3>
              <p className="text-slate-500 leading-relaxed font-medium">ISO 9001:2015 certified manufacturing process ensuring consistent top-tier quality standards for every batch.</p>
            </div>
            <div className="p-10 bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group rounded-3xl transform md:-translate-y-8">
              <div className="bg-slate-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                <Truck className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Fast Delivery</h3>
              <p className="text-slate-500 leading-relaxed font-medium">Efficient logistics network with real-time tracking, ensuring timely delivery across the country in 2-5 business days.</p>
            </div>
            <div className="p-10 bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group rounded-3xl">
              <div className="bg-slate-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                <ThumbsUp className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Wholesale Pricing</h3>
              <p className="text-slate-500 leading-relaxed font-medium">Direct-from-factory pricing tiers that scale with your volume, providing the best value and margins for your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <div className="text-primary text-xs font-black tracking-widest uppercase mb-4">Product Catalog</div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">Our Categories</h2>
              <p className="text-slate-400 text-lg font-medium">Browse our extensive range of industrial packaging solutions designed for precision and durability.</p>
            </div>
            <div className="h-[2px] flex-1 bg-white/10 mx-12 hidden md:block mb-8" />
          </div>
          
          <CategoryList />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <div className="text-primary text-xs font-black tracking-widest uppercase mb-2">Curated Selection</div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Featured Products</h2>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="text-primary hover:text-primary/80 text-lg font-bold group">
                View Full Catalog <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-96 bg-slate-100 animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
