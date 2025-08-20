import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export interface SidebarProps {
  /**
   * Sidebar content
   */
  children: React.ReactNode;
  /**
   * If true, the sidebar is collapsed
   * @default false
   */
  collapsed?: boolean;
  /**
   * Function to toggle the sidebar collapsed state
   */
  onToggle?: () => void;
  /**
   * Position of the sidebar
   * @default "left"
   */
  position?: 'left' | 'right';
  /**
   * Width of the expanded sidebar
   * @default "64"
   */
  expandedWidth?: string;
  /**
   * Width of the collapsed sidebar
   * @default "16"
   */
  collapsedWidth?: string;
  /**
   * If true, adds a border to the sidebar
   * @default true
   */
  bordered?: boolean;
  /**
   * Background color of the sidebar
   * @default "white"
   */
  bgColor?: string;
  /**
   * If true, the sidebar is fixed (position: fixed)
   * @default false
   */
  fixed?: boolean;
  /**
   * Z-index of the sidebar when fixed
   * @default "40"
   */
  zIndex?: string;
  /**
   * Additional classes to apply to the sidebar
   */
  className?: string;
}
export const Sidebar: React.FC<SidebarProps> = ({
  children,
  collapsed = false,
  onToggle,
  position = 'left',
  expandedWidth = '64',
  collapsedWidth = '16',
  bordered = true,
  bgColor = 'white',
  fixed = false,
  zIndex = '40',
  className = ''
}) => {
  const width = collapsed ? collapsedWidth : expandedWidth;
  const borderClass = bordered ? position === 'left' ? 'border-r' : 'border-l' : '';
  const positionClass = fixed ? 'fixed top-0 bottom-0' : 'relative';
  const positionSideClass = position === 'left' ? 'left-0' : 'right-0';
  return <aside className={`
        h-full flex flex-col
        w-${width}
        bg-${bgColor}
        ${borderClass}
        border-gray-200
        ${positionClass}
        ${positionSideClass}
        ${fixed ? `z-${zIndex}` : ''}
        transition-all duration-300 ease-in-out
        ${className}
      `}>
      {children}
      {onToggle && <button onClick={onToggle} className={`
            absolute top-1/2 -mt-6
            ${position === 'left' ? `-right-3` : `-left-3`}
            h-12 w-6
            flex items-center justify-center
            bg-white
            border border-gray-200
            rounded-${position === 'left' ? 'r' : 'l'}-md
            text-gray-500 hover:text-gray-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          `} aria-expanded={!collapsed}>
          {position === 'left' ? collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" /> : collapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>}
    </aside>;
};
export interface SidebarSectionProps {
  /**
   * Section content
   */
  children: React.ReactNode;
  /**
   * Section title
   */
  title?: string;
  /**
   * If true, the section is collapsible
   * @default false
   */
  collapsible?: boolean;
  /**
   * If true, the section is collapsed
   * @default false
   */
  collapsed?: boolean;
  /**
   * Function to toggle the section collapsed state
   */
  onToggle?: () => void;
  /**
   * Additional classes to apply to the section
   */
  className?: string;
}
export const SidebarSection: React.FC<SidebarSectionProps> = ({
  children,
  title,
  collapsible = false,
  collapsed = false,
  onToggle,
  className = ''
}) => {
  return <div className={`py-4 ${className}`}>
      {title && <h3 className={`
            px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider
            ${collapsible ? 'flex items-center justify-between cursor-pointer' : ''}
          `} onClick={collapsible ? onToggle : undefined}>
          {title}
          {collapsible && <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${!collapsed ? 'transform rotate-90' : ''}`} />}
        </h3>}
      {(!collapsible || !collapsed) && <div className="mt-2 space-y-1">{children}</div>}
    </div>;
};
export interface SidebarItemProps {
  /**
   * Item label
   */
  label: string;
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
  /**
   * If true, the item is active
   * @default false
   */
  active?: boolean;
  /**
   * If true, the item is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Link for the item
   */
  href?: string;
  /**
   * Function to call when the item is clicked
   */
  onClick?: () => void;
  /**
   * Additional classes to apply to the item
   */
  className?: string;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon,
  active = false,
  disabled = false,
  href,
  onClick,
  className = ''
}) => {
  const baseClasses = `
    group flex items-center px-4 py-2 text-sm font-medium rounded-md
    ${active ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;
  const content = <>
      {icon && <span className={`mr-3 h-5 w-5 ${active ? 'text-primary-600' : 'text-gray-500 group-hover:text-gray-600'}`}>
          {icon}
        </span>}
      {label}
    </>;
  if (href && !disabled) {
    return <a href={href} className={baseClasses}>
        {content}
      </a>;
  }
  return <button className={baseClasses} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {content}
    </button>;
};
export interface SidebarUserProps {
  /**
   * User name
   */
  name: string;
  /**
   * User email or subtitle
   */
  subtitle?: string;
  /**
   * URL for the user avatar
   */
  avatarUrl?: string;
  /**
   * Function to call when the user profile is clicked
   */
  onClick?: () => void;
  /**
   * Additional classes to apply to the user profile
   */
  className?: string;
}
export const SidebarUser: React.FC<SidebarUserProps> = ({
  name,
  subtitle,
  avatarUrl,
  onClick,
  className = ''
}) => {
  return <div className={`p-4 border-t border-gray-200 ${onClick ? 'cursor-pointer' : ''} ${className}`} onClick={onClick}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {avatarUrl ? <img className="h-9 w-9 rounded-full" src={avatarUrl} alt={name} /> : <div className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 font-medium text-sm">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{name}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>;
};