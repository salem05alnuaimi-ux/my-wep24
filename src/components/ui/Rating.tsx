import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  size?: number;
  showNumber?: boolean;
  reviewCount?: number;
}

export default function Rating({
  value,
  size = 14,
  showNumber = false,
  reviewCount,
}: RatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={
              star <= Math.round(value)
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }
          />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm text-gray-600">
          {value.toFixed(1)}
          {reviewCount !== undefined && ` (${reviewCount})`}
        </span>
      )}
    </div>
  );
}