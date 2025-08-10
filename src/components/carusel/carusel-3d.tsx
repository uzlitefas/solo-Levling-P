import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  className?: string;
}

export const Carousel3D: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  showIndicators = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<CarouselItem | null>(
    null
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide, autoPlayInterval]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === " ") {
        event.preventDefault();
        setIsPlaying(!isPlaying);
      } else if (event.key === "Escape") {
        setFullscreenImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isPlaying]);

  const getItemPosition = (index: number) => {
    const diff = index - currentIndex;
    const total = items.length;

    if (diff === 0) return "center";
    if (diff === 1 || diff === -(total - 1)) return "right";
    if (diff === -1 || diff === total - 1) return "left";
    if (diff > 1 || diff < -(total - 1)) return "far-right";
    return "far-left";
  };

  const getTransformStyle = (position: string) => {
    const baseTransforms = {
      center: "translateX(0%) translateZ(0px) rotateY(0deg) scale(1)",
      left: "translateX(-80%) translateZ(-200px) rotateY(25deg) scale(0.8)",
      right: "translateX(80%) translateZ(-200px) rotateY(-25deg) scale(0.8)",
      "far-left":
        "translateX(-140%) translateZ(-400px) rotateY(45deg) scale(0.6)",
      "far-right":
        "translateX(140%) translateZ(-400px) rotateY(-45deg) scale(0.6)",
    };

    return (
      baseTransforms[position as keyof typeof baseTransforms] ||
      baseTransforms["far-right"]
    );
  };

  return (
    <>
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 text-white hover:text-red-500"
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="max-w-4xl w-full px-4">
            <img
              src={fullscreenImage.image}
              alt={fullscreenImage.title}
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
            <div className="mt-4 text-white text-center">
              <h2 className="text-2xl font-bold">{fullscreenImage.title}</h2>
              <p className="text-white/80 mt-2">
                {fullscreenImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        className={cn("relative w-full h-[600px] overflow-hidden", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background dark:via-blue-800 via-blue-400 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: "1000px", perspectiveOrigin: "center center" }}
        >
          <div className="relative w-full max-w-md h-96 mx-auto">
            {items.map((item, index) => {
              const position = getItemPosition(index);
              const transform = getTransformStyle(position);
              const isActive = index === currentIndex;

              return (
                <Card
                  key={item.id}
                  className={cn(
                    "absolute inset-0 cursor-pointer transition-all duration-700 ease-out",
                    "bg-white/10 backdrop-blur-md border border-white/20",
                    "hover:bg-white/20 hover:border-white/30",
                    isActive
                      ? "z-20"
                      : position === "left" || position === "right"
                      ? "z-10"
                      : "z-0"
                  )}
                  style={{
                    transform,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => {
                    if (isActive) {
                      setFullscreenImage(item);
                    } else {
                      goToSlide(index);
                    }
                  }}
                >
                  <CardContent className="p-0 h-full relative overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground">
                        {item.category}
                      </Badge>
                      {item.featured && (
                        <Badge className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm text-yellow-900">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border border-white/20 hover:border-white/40"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border border-white/20 hover:border-white/40"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 left-4 z-30 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border border-white/20 hover:border-white/40"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>

        {showIndicators && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="absolute bottom-16 right-4 z-30 text-right">
          <h2 className="text-foreground text-2xl font-bold mb-2">
            {items[currentIndex]?.title}
          </h2>
          <p className="text-foreground/80 text-sm max-w-xs">
            {items[currentIndex]?.description}
          </p>
        </div>
      </div>
    </>
  );
};
