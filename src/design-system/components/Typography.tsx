import React, { Component } from 'react';
interface TypographyProps {
  /**
   * The content to be rendered
   */
  children: React.ReactNode;
  /**
   * Additional classes to apply
   */
  className?: string;
  /**
   * If true, the text will be truncated with an ellipsis if it overflows
   * @default false
   */
  truncate?: boolean;
  /**
   * HTML element to render
   */
  as?: React.ElementType;
}
export const Heading1: React.FC<TypographyProps> = ({
  children,
  className = '',
  truncate = false,
  as: Component = 'h1'
}) => {
  return <Component className={`text-3xl font-bold text-gray-900 ${truncate ? 'truncate' : ''} ${className}`}>
      {children}
    </Component>;
};
export const Heading2: React.FC<TypographyProps> = ({
  children,
  className = '',
  truncate = false,
  as: Component = 'h2'
}) => {
  return <Component className={`text-2xl font-bold text-gray-900 ${truncate ? 'truncate' : ''} ${className}`}>
      {children}
    </Component>;
};
export const Heading3: React.FC<TypographyProps> = ({
  children,
  className = '',
  truncate = false,
  as: Component = 'h3'
}) => {
  return <Component className={`text-xl font-semibold text-gray-900 ${truncate ? 'truncate' : ''} ${className}`}>
      {children}
    </Component>;
};
export const Heading4: React.FC<TypographyProps> = ({
  children,
  className = '',
  truncate = false,
  as: Component = 'h4'
}) => {
  return <Component className={`text-lg font-semibold text-gray-900 ${truncate ? 'truncate' : ''} ${className}`}>
      {children}
    </Component>;
};
export const Heading5: React.FC<TypographyProps> = ({
  children,
  className = '',
  truncate = false,
  as: Component = 'h5'
}) => {
  return <Component className={`text-base font-semibold text-gray-900 ${truncate ? 'truncate' : ''} ${className}`}>
      {children}
    </Component>;
};
export const Heading6: React.FC<TypographyProps> = ({
  children,
  className = '',
  truncate = false,
  as: Component = 'h6'
}) => {
  return <Component className={`text-sm font-semibold text-gray-900 ${truncate ? 'truncate' : ''} ${className}`}>
      {children}
    </Component>;
};
export const Text: React.FC<TypographyProps & {
  variant?: 'default' | 'secondary' | 'subtle' | 'success' | 'warning' | 'error';
}> = ({
  children,
  className = '',
  truncate = false,
  variant = 'default',
  as: Component = 'p'
}) => {
  const variantClasses = {
    default: 'text-gray-900',
    secondary: 'text-gray-700',
    subtle: 'text-gray-500',
    success: 'text-success-600',
    warning: 'text-warning-600',
    error: 'text-error-600'
  };
  return <Component className={`text-base ${variantClasses[variant]} ${truncate ? 'truncate' : ''} ${className}`}>
      {children}
    </Component>;
};
export const SmallText: React.FC<TypographyProps & {
  variant?: 'default' | 'secondary' | 'subtle' | 'success' | 'warning' | 'error';
}> = ({
  children,
  className = '',
  truncate = false,
  variant = 'default',
  as: Component = 'p'
}) => {
  const variantClasses = {
    default: 'text-gray-900',
    secondary: 'text-gray-700',
    subtle: 'text-gray-500',
    success: 'text-success-600',
    warning: 'text-warning-600',
    error: 'text-error-600'
  };
  return <Component className={`text-sm ${variantClasses[variant]} ${truncate ? 'truncate' : ''} ${className}`}>
      {children}
    </Component>;
};