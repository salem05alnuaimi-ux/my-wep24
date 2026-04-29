import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute start-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            className={`w-full ${
              icon ? "ps-10" : "ps-4"
            } pe-4 py-3 border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 ${
              error ? "border-red-300" : "border-gray-200 focus:border-primary"
            } ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";