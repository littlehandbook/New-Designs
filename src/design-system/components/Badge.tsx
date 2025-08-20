import React from 'react';
type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';
interface BadgeProps {
  /**
   * Badge content
   */
  children: React.ReactNode;
  /**
   * The visual style of the badge
   * @default 'default'
   */
  variant?: BadgeVariant;
  /**
   * The size of the badge
   * @default 'md'
   */
  size?: BadgeSize;
  /**
   * Additional classes to apply to the badge
   */
  className?: string;
  /**
   * Optional icon to display before the badge text
   */
  icon?: React.ReactNode;
}
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon
}) => {
  // Base classes applied to all badges
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  // Classes based on variant
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-success-100 text-success-800',
    warning: 'bg-warning-100 text-warning-800',
    error: 'bg-error-100 text-error-800',
    info: 'bg-info-100 text-info-800'
  };
  // Classes based on size
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1'
  };
  return <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {icon && <span className="mr-1 -ml-0.5">{icon}</span>}
      {children}
    </span>;
};