import React, { useEffect, useState, forwardRef, Component } from 'react';
/**
 * Mobile Design System
 *
 * This file exports components specifically optimized for mobile interfaces.
 * These components follow mobile-first design principles with larger touch targets,
 * simplified layouts, and mobile-specific interaction patterns.
 */
// Mobile-specific constants
const TOUCH_TARGET_SIZE = 44; // Minimum touch target size in pixels (per Apple HIG)
// Mobile color palette (shared with main design system but can be customized)
export const mobileColors = {
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065'
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712'
  }
  // Other colors from main design system...
};
// Mobile typography scale (adjusted for mobile readability)
export const mobileTypography = {
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.75rem',
    '4xl': '2rem' // 32px (reduced from desktop)
  },
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.625'
  }
};
// Mobile spacing scale (adjusted for touch interfaces)
export const mobileSpacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem' // 64px
};
// Mobile Button Component
interface MobileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}
export const MobileButton = forwardRef<HTMLButtonElement, MobileButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}, ref) => {
  // Base classes with larger touch targets
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none active:scale-95 transform';
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 text-white active:bg-primary-700',
    secondary: 'bg-gray-100 text-gray-800 active:bg-gray-200',
    outline: 'border border-gray-300 text-gray-700 bg-white active:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
    danger: 'bg-red-600 text-white active:bg-red-700'
  };
  // Size classes with larger touch targets for mobile
  const sizeClasses = {
    sm: 'text-sm px-4 py-2 rounded-lg min-h-[44px]',
    md: 'text-base px-5 py-3 rounded-lg min-h-[48px]',
    lg: 'text-lg px-6 py-4 rounded-lg min-h-[56px]'
  };
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  // Disabled classes
  const disabledClasses = props.disabled || isLoading ? 'opacity-50 cursor-not-allowed active:scale-100' : '';
  return <button ref={ref} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${disabledClasses} ${className}`} disabled={props.disabled || isLoading} {...props}>
        {isLoading && <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>;
});
MobileButton.displayName = 'MobileButton';
// Mobile Card Component
interface MobileCardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
  hasShadow?: boolean;
  hasBorder?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
}
export const MobileCard: React.FC<MobileCardProps> = ({
  children,
  className = '',
  onPress,
  hasShadow = true,
  hasBorder = true,
  padding = 'medium'
}) => {
  const paddingClasses = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6'
  };
  const shadowClass = hasShadow ? 'shadow-md' : '';
  const borderClass = hasBorder ? 'border border-gray-200' : '';
  const interactiveClass = onPress ? 'active:bg-gray-50 cursor-pointer' : '';
  return <div className={`bg-white rounded-xl ${paddingClasses[padding]} ${shadowClass} ${borderClass} ${interactiveClass} ${className}`} onClick={onPress}>
      {children}
    </div>;
};
// Mobile Bottom Navigation
interface MobileBottomNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onPress: () => void;
}
interface MobileBottomNavigationProps {
  items: MobileBottomNavItemProps[];
  className?: string;
}
export const MobileBottomNavigation: React.FC<MobileBottomNavigationProps> = ({
  items,
  className = ''
}) => {
  return <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around h-16 ${className}`}>
      {items.map((item, index) => <button key={index} className={`flex flex-col items-center justify-center w-full h-full ${item.isActive ? 'text-primary-600' : 'text-gray-500'}`} onClick={item.onPress}>
          <div className="text-current">{item.icon}</div>
          <span className={`text-xs mt-1 ${item.isActive ? 'font-medium' : ''}`}>
            {item.label}
          </span>
        </button>)}
    </div>;
};
// Mobile List Item
interface MobileListItemProps {
  title: string;
  subtitle?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onPress?: () => void;
  className?: string;
  divider?: boolean;
}
export const MobileListItem: React.FC<MobileListItemProps> = ({
  title,
  subtitle,
  leftContent,
  rightContent,
  onPress,
  className = '',
  divider = true
}) => {
  return <div className={`flex items-center py-4 ${divider ? 'border-b border-gray-200' : ''} ${onPress ? 'active:bg-gray-50 cursor-pointer' : ''} ${className}`} onClick={onPress}>
      {leftContent && <div className="mr-4 flex-shrink-0">{leftContent}</div>}
      <div className="flex-1 min-w-0">
        <p className="text-base font-medium text-gray-900 truncate">{title}</p>
        {subtitle && <p className="text-sm text-gray-500 truncate">{subtitle}</p>}
      </div>
      {rightContent && <div className="ml-4 flex-shrink-0">{rightContent}</div>}
    </div>;
};
// Mobile Search Input
interface MobileSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  showClearButton?: boolean;
  className?: string;
}
export const MobileSearchInput: React.FC<MobileSearchInputProps> = ({
  onClear,
  showClearButton = true,
  className = '',
  ...props
}) => {
  return <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input type="search" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full text-base focus:outline-none" placeholder="Search clients..." {...props} />
      {showClearButton && props.value && <button type="button" className="absolute inset-y-0 right-3 flex items-center" onClick={onClear}>
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>}
    </div>;
};
// Mobile Modal/Sheet
interface MobileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  showHandle?: boolean;
  height?: 'auto' | 'half' | 'full';
  className?: string;
}
export const MobileSheet: React.FC<MobileSheetProps> = ({
  isOpen,
  onClose,
  children,
  title,
  showHandle = true,
  height = 'half',
  className = ''
}) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // Handle animation timing
  useEffect(() => {
    if (isOpen && !isVisible) {
      setIsVisible(true);
      setIsAnimatingOut(false);
    } else if (!isOpen && isVisible) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);
  if (!isVisible) return null;
  // Handle close with animation
  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  const heightClasses = {
    auto: 'max-h-[90vh]',
    half: 'h-1/2',
    full: 'h-full'
  };
  return <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-50'}`} onClick={handleClose}></div>
      {/* Sheet */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-x-0 bottom-0 max-w-full flex">
            <div className={`bg-white rounded-t-xl w-full transform transition-transform duration-300 ease-out ${heightClasses[height]} ${isAnimatingOut ? 'translate-y-full' : 'translate-y-0'} ${className}`}>
              {/* Handle */}
              {showHandle && <div className="w-full flex justify-center pt-2 pb-1">
                  <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                </div>}
              {/* Title */}
              {title && <div className="border-b border-gray-200 px-4 py-3">
                  <h3 className="text-lg font-medium text-gray-900 text-center">
                    {title}
                  </h3>
                </div>}
              {/* Content */}
              <div className="overflow-y-auto p-4 h-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
// Mobile Segmented Control
interface MobileSegmentedControlProps {
  segments: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
  className?: string;
}
export const MobileSegmentedControl: React.FC<MobileSegmentedControlProps> = ({
  segments,
  selectedIndex,
  onChange,
  className = ''
}) => {
  return <div className={`bg-gray-100 p-1 rounded-lg flex ${className}`}>
      {segments.map((segment, index) => <button key={index} className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${selectedIndex === index ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => onChange(index)}>
          {segment}
        </button>)}
    </div>;
};