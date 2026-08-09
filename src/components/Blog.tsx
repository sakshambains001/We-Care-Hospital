import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ARTICLES } from "../data";
import { Article } from "../types";
import { Calendar, Clock, ArrowRight, X, BookOpen, Share2 } from "lucide-react";

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="blog" className="py-16 md:py-24 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
            Health Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Latest Medical Tips & Health Insights
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg leading-relaxed">
            Nourish your mind with preventive advice and wellness strategies formulated by our senior consulting clinicians and therapists.
          </p>
        </div>

        {/* 3-Article Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {ARTICLES.map((art, idx) => (
            <motion.div
              id={`blog-card-${art.id}`}
              key={art.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-teal-500/20 transition-all overflow-hidden flex flex-col justify-between text-left group"
            >
              {/* Card Photo header */}
              <div className="aspect-16/10 w-full overflow-hidden relative bg-slate-50">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Category Badge */}
                <span className="absolute bottom-4 left-4 bg-teal-600 text-white font-semibold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {art.category}
                </span>
              </div>

              {/* Card Main Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Date and Read Time */}
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {art.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-teal-600 transition-colors">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                {/* Read More Trigger */}
                <button
                  id={`blog-read-btn-${art.id}`}
                  onClick={() => setSelectedArticle(art)}
                  className="cursor-pointer text-xs sm:text-sm font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 group-hover:gap-2 transition-all mt-auto self-start"
                >
                  Read Full Article <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Reading Canvas (Article Full Modal) */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
              
              {/* Backdrop Click */}
              <div className="absolute inset-0" onClick={() => setSelectedArticle(null)} />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 border border-slate-100 flex flex-col"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-md z-10">
                  <div className="flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-wider">
                    <BookOpen size={16} />
                    We Care Wellness Library
                  </div>
                  <button
                    id="blog-modal-close"
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Cover Image in modal */}
                <div className="aspect-16/7 w-full overflow-hidden bg-slate-100">
                  <img
                    src={selectedArticle.imageUrl}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article Body Content */}
                <div className="p-6 sm:p-8 text-left space-y-4">
                  {/* Category and metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                    <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      {selectedArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      Published: {selectedArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {selectedArticle.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                    {selectedArticle.title}
                  </h3>

                  {/* Content paragraphs - map newline splits to actual paragraph elements */}
                  <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-5 pt-3 border-t border-slate-100 max-w-none prose prose-slate">
                    {selectedArticle.content.split("\n\n").map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Footer and advice note */}
                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-500 italic text-center sm:text-left">
                    Disclaimer: This article is for informational purposes. Consult our specialists for personalized clinical advice.
                  </span>
                  <button
                    id="blog-modal-footer-close"
                    onClick={() => setSelectedArticle(null)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                  >
                    Done Reading
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
