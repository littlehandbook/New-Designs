import React from 'react';
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
interface AvatarProps {
  /**
   * The source URL for the avatar image
   */
  src?: string;
  /**
   * Alternative text for the avatar image
   */
  alt?: string;
  /**
   * Initials to display when no image is available
   */
  initials?: string;
  /**
   * The size of the avatar
   * @default 'md'
   */
  size?: AvatarSize;
  /**
   * Additional classes to apply to the avatar
   */
  className?: string;
  /**
   * If true, the avatar will have a ring
   * @default false
   */
  ring?: boolean;
  /**
   * The color of the ring
   * @default 'primary'
   */
  ringColor?: 'primary' | 'success' | 'warning' | 'error' | 'gray';
  /**
   * Status indicator to show on the avatar
   */
  status?: 'online' | 'offline' | 'busy' | 'away';
}
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  className = '',
  ring = false,
  ringColor = 'primary',
  status
}) => {
  // Size classes
  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-14 w-14 text-lg',
    '2xl': 'h-16 w-16 text-xl'
  };
  // Ring classes
  const ringClasses = ring ? {
    primary: 'ring-2 ring-primary-500',
    success: 'ring-2 ring-success-500',
    warning: 'ring-2 ring-warning-500',
    error: 'ring-2 ring-error-500',
    gray: 'ring-2 ring-gray-300'
  }[ringColor] : '';
  // Status classes
  const statusClasses = {
    online: 'bg-success-500',
    offline: 'bg-gray-400',
    busy: 'bg-error-500',
    away: 'bg-warning-500'
  };
  // Status size based on avatar size
  const statusSizeClasses = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
    xl: 'h-3.5 w-3.5',
    '2xl': 'h-4 w-4'
  };
  return <div className="relative inline-block">
      {src ? <img src={src} alt={alt} className={`${sizeClasses[size]} ${ringClasses} rounded-full object-cover ${className}`} /> : <div className={`${sizeClasses[size]} ${ringClasses} rounded-full flex items-center justify-center bg-gray-200 text-gray-600 font-medium ${className}`}>
          {initials || alt.charAt(0).toUpperCase()}
        </div>}
      {status && <span className={`absolute bottom-0 right-0 block ${statusSizeClasses[size]} ${statusClasses[status]} rounded-full ring-2 ring-white`}></span>}
    </div>;
};