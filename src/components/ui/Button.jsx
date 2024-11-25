import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Button = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "h-10 px-4 py-2",
        "bg-violet-600 text-white hover:bg-violet-700",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };
