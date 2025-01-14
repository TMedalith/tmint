
  
  import { forwardRef } from 'react';
  import { cn } from '@/lib/utils'; 
  
  type ButtonVariant = 'link' | 'button';
  
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: ButtonVariant;
    href?: string;
    showArrow?: boolean;
  }
  
  export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ children, className, variant = 'button', showArrow = true, href, ...props }, ref) => {
      const Comp = variant === 'link' ? 'a' : 'button';
      
      return (
        <Comp
          ref={ref as any}
          className={cn(
            'inline-flex items-center gap-2 px-6 py-3 text-sm transition-all duration-300 rounded-full',
            'bg-[#588061] text-white hover:bg-[#588061]/90',
            className
          )}
          {...(variant === 'link' ? { href } : props)}
        >
          {children}
          {showArrow && (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              />
            </svg>
          )}
        </Comp>
      );
    }
  );
  
  Button.displayName = 'Button';
  