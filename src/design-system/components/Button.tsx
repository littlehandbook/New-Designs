import React, { forwardRef } from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * If true, the button will take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * If true, the button will show a loading spinner
   * @default false
   */
  isLoading?: boolean;
  /**
   * The icon to display before the button text
   */
  leftIcon?: React.ReactNode;
  /**
   * The icon to display after the button text
   */
  rightIcon?: React.ReactNode;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}, ref) => {
  // Base classes applied to all buttons
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  // Classes based on variant
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    link: 'text-primary-600 hover:text-primary-700 hover:underline focus:ring-primary-500 p-0',
    danger: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500'
  };
  // Classes based on size
  const sizeClasses = {
    xs: 'text-xs px-2.5 py-1.5 rounded',
    sm: 'text-sm px-3 py-2 rounded-md',
    md: 'text-sm px-4 py-2 rounded-md',
    lg: 'text-base px-5 py-2.5 rounded-md',
    xl: 'text-lg px-6 py-3 rounded-md'
  };
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  // Disabled classes
  const disabledClasses = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  return <button ref={ref} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${disabledClasses} ${className}`} disabled={disabled || isLoading} {...props}>
        {isLoading && <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>;
});
Button.displayName = 'Button';