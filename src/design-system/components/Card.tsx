import React from 'react';
interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Additional classes to apply to the card
   */
  className?: string;
  /**
   * If true, the card will not have padding
   * @default false
   */
  noPadding?: boolean;
  /**
   * If true, the card will have a hover effect
   * @default false
   */
  interactive?: boolean;
  /**
   * Optional card header
   */
  header?: React.ReactNode;
  /**
   * Optional card footer
   */
  footer?: React.ReactNode;
}
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  noPadding = false,
  interactive = false,
  header,
  footer
}) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden';
  const interactiveClasses = interactive ? 'transition-shadow hover:shadow-md' : '';
  return <div className={`${baseClasses} ${interactiveClasses} ${className}`}>
      {header && <div className="px-6 py-4 border-b border-gray-200">{header}</div>}
      <div className={noPadding ? '' : 'p-6'}>{children}</div>
      {footer && <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>}
    </div>;
};
export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = ''
}) => {
  return <h3 className={`text-lg font-medium text-gray-900 ${className}`}>
      {children}
    </h3>;
};
export const CardDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = ''
}) => {
  return <p className={`mt-1 text-sm text-gray-500 ${className}`}>{children}</p>;
};