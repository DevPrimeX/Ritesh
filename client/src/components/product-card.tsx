import { Link } from "wouter";
import { type Product } from "@shared/schema";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Box } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images?.[0] || "https://placehold.co/600x400/e2e8f0/1e293b?text=Product+Image";

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="overflow-hidden border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer rounded-3xl h-full flex flex-col">
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 border-none shadow-sm font-bold px-3 py-1 rounded-full uppercase text-[10px] tracking-widest">
            {product.category}
          </Badge>
        </div>
        <CardContent className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors line-clamp-2 uppercase leading-tight">
              {product.name}
            </h3>
            <p className="text-slate-500 text-sm line-clamp-2 font-medium leading-relaxed mb-6">
              {product.description}
            </p>
          </div>
          <Button variant="outline" className="w-full border-slate-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 rounded-2xl h-12 font-bold uppercase tracking-widest text-xs">
            View Details
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
