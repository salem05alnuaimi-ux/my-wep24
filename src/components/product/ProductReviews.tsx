"use client";

import { useState } from "react";
import { ProductReview } from "@/types";
import { useLanguage } from "@/store/languageStore";
import Rating from "@/components/ui/Rating";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProductReviewsProps {
  reviews: ProductReview[];
  averageRating: number;
}

export default function ProductReviews({
  reviews,
  averageRating,
}: ProductReviewsProps) {
  const { locale } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  // Distribution
  const distribution = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter((r) => r.rating === stars).length;
    const percent = reviews.length ? (count / reviews.length) * 100 : 0;
    return { stars, count, percent };
  });

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-2xl">
        <p className="text-gray-500">
          {locale === "ar"
            ? "لا توجد تقييمات بعد. كن أول من يقيّم!"
            : "No reviews yet. Be the first to review!"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="grid md:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-2xl">
        <div className="text-center md:text-start">
          <div className="text-5xl font-display font-bold text-text-primary mb-2">
            {averageRating.toFixed(1)}
          </div>
          <Rating value={averageRating} size={20} />
          <p className="text-sm text-gray-500 mt-2">
            {locale === "ar"
              ? `${reviews.length} تقييم`
              : `${reviews.length} reviews`}
          </p>
        </div>

        <div className="space-y-2">
          {distribution.map(({ stars, count, percent }) => (
            <div key={stars} className="flex items-center gap-3 text-sm">
              <span className="w-3 text-gray-600">{stars}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-yellow-400"
                />
              </div>
              <span className="w-8 text-end text-gray-500">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {visibleReviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-100 rounded-2xl"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{review.userName}</span>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      <CheckCircle2 size={12} />
                      {locale === "ar" ? "مشتري موثق" : "Verified"}
                    </span>
                  )}
                </div>
                <Rating value={review.rating} size={12} />
              </div>
              <span className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString(
                  locale === "ar" ? "ar-OM" : "en-US",
                  { year: "numeric", month: "short", day: "numeric" }
                )}
              </span>
            </div>
            <p className="text-text-primary leading-relaxed">
              {review.comment[locale]}
            </p>
          </motion.div>
        ))}
      </div>

      {reviews.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-primary font-medium"
        >
          {showAll
            ? locale === "ar"
              ? "عرض أقل"
              : "Show less"
            : locale === "ar"
            ? `عرض جميع التقييمات (${reviews.length})`
            : `Show all reviews (${reviews.length})`}
        </button>
      )}
    </div>
  );
}