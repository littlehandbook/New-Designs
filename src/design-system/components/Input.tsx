import React, { forwardRef } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label
   */
  label?: string;
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  /**
   * Error message displayed below the input
   */
  error?: string;
  /**
   * If true, the input will take up the full width of its container
   * @default true
   */
  fullWidth?: boolean;
  /**
   * Left icon displayed inside the input
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon displayed inside the input
   */
  rightIcon?: React.ReactNode;
  /**
   * Additional classes to apply to the input container
   */
  containerClassName?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  error,
  fullWidth = true,
  leftIcon,
  rightIcon,
  containerClassName = '',
  className = '',
  id,
  disabled,
  ...props
}, ref) => {
  // Generate a unique ID if one isn't provided
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  // Base classes
  const containerClasses = `${fullWidth ? 'w-full' : ''} ${containerClassName}`;
  const inputBaseClasses = 'block border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 text-base py-3';
  const inputErrorClasses = error ? 'border-error-300 text-error-900 placeholder-error-300 focus:ring-error-500 focus:border-error-500' : '';
  const inputDisabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';
  const inputWidthClasses = fullWidth ? 'w-full' : '';
  const inputPaddingClasses = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : 'px-4';
  return <div className={containerClasses}>
        {label && <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>}
        <div className="relative rounded-md shadow-sm">
          {leftIcon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>}
          <input ref={ref} id={inputId} className={`${inputBaseClasses} ${inputErrorClasses} ${inputDisabledClasses} ${inputWidthClasses} ${inputPaddingClasses} ${className}`} disabled={disabled} {...props} />
          {rightIcon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {rightIcon}
            </div>}
        </div>
        {(helperText || error) && <p className={`mt-1 text-base ${error ? 'text-error-600' : 'text-gray-500'}`}>
            {error || helperText}
          </p>}
      </div>;
});
Input.displayName = 'Input';