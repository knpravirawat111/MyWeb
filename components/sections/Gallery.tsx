"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["all", "travel", "events", "personal"] as const;
type Category = (typeof categories)[number];

// Placeholder gallery data - replace with your actual images
const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/placeholder-1.jpg",
    alt: "Travel Adventure",
    category: "travel",
  },
  {
    id: 2,
    src: "/images/gallery/placeholder-2.jpg",
    alt: "Tech Event",
    category: "events",
  },
  {
    id: 3,
    src: "/images/gallery/placeholder-3.jpg",
    alt: "Personal Moment",
    category: "personal",
  },
  {
    id: 4,
    src: "/images/gallery/placeholder-4.jpg",
    alt: "Mountain Trip",
    category: "travel",
  },
  {
    id: 5,
    src: "/images/gallery/placeholder-5.jpg",
    alt: "Conference",
    category: "events",
  },
  {
    id: 6,
    src: "/images/gallery/placeholder-6.jpg",
    alt: "Celebration",
    category: "personal",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-20 lg:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Photo Gallery"
          subtitle="Glimpses of life beyond the screen"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item.id)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800"
              >
                {/* Placeholder gradient - replace with actual Image component */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    item.category === "travel"
                      ? "from-blue-400 to-cyan-600"
                      : item.category === "events"
                      ? "from-purple-400 to-pink-600"
                      : "from-amber-400 to-orange-600"
                  }`}
                />

                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <svg
                      className="w-8 h-8 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    <span className="text-sm font-medium">{item.alt}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400">
              No photos in this category yet.
            </p>
          </div>
        )}

        {/* Note */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Add your photos to <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">/public/images/gallery/</code>
        </p>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-slate-800"
              >
                {/* Placeholder for enlarged image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/50">Image Preview</p>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
