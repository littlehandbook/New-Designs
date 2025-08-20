import React from 'react';
import { ChevronRight, Search, Bell, Menu, User } from 'lucide-react';
import { Button } from './Button';
export interface PageHeaderProps {
  /**
   * The title of the page
   */
  title: string;
  /**
   * Optional subtitle or description
   */
  description?: string;
  /**
   * Optional breadcrumbs to display above the title
   */
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  /**
   * Optional actions to display in the header
   */
  actions?: React.ReactNode;
  /**
   * Additional classes to apply to the header
   */
  className?: string;
}
export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  breadcrumbs,
  actions,
  className = ''
}) => {
  return <div className={`pb-5 ${className}`}>
      {breadcrumbs && breadcrumbs.length > 0 && <nav className="flex mb-3" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => <li key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0 mx-1" />}
                {crumb.href ? <a href={crumb.href} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    {crumb.label}
                  </a> : <span className="text-sm font-medium text-gray-500">
                    {crumb.label}
                  </span>}
              </li>)}
          </ol>
        </nav>}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
        {actions && <div className="flex space-x-3">{actions}</div>}
      </div>
    </div>;
};
export interface SectionHeaderProps {
  /**
   * The title of the section
   */
  title: string;
  /**
   * Optional description
   */
  description?: string;
  /**
   * Optional actions to display in the header
   */
  actions?: React.ReactNode;
  /**
   * Additional classes to apply to the header
   */
  className?: string;
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  actions,
  className = ''
}) => {
  return <div className={`pb-5 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
        {actions && <div className="flex space-x-3">{actions}</div>}
      </div>
    </div>;
};
export interface AppHeaderProps {
  /**
   * The logo component or image
   */
  logo: React.ReactNode;
  /**
   * Optional navigation items
   */
  navItems?: {
    label: string;
    href: string;
    active?: boolean;
  }[];
  /**
   * Optional search input
   */
  searchInput?: React.ReactNode;
  /**
   * Optional user profile section
   */
  userProfile?: React.ReactNode;
  /**
   * Optional actions to display in the header (notifications, etc.)
   */
  actions?: React.ReactNode;
  /**
   * If true, the mobile menu is open
   */
  isMobileMenuOpen?: boolean;
  /**
   * Function to toggle the mobile menu
   */
  onMobileMenuToggle?: () => void;
  /**
   * Additional classes to apply to the header
   */
  className?: string;
}
export const AppHeader: React.FC<AppHeaderProps> = ({
  logo,
  navItems = [],
  searchInput,
  userProfile,
  actions,
  isMobileMenuOpen,
  onMobileMenuToggle,
  className = ''
}) => {
  return <header className={`bg-white border-b border-gray-200 ${className}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">{logo}</div>
            {/* Desktop Navigation */}
            {navItems.length > 0 && <nav className="hidden md:ml-6 md:flex md:space-x-8">
                {navItems.map((item, index) => <a key={index} href={item.href} className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${item.active ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                    {item.label}
                  </a>)}
              </nav>}
          </div>
          {/* Search, Actions, and Profile */}
          <div className="flex items-center">
            {searchInput && <div className="hidden md:block">{searchInput}</div>}
            {actions && <div className="ml-4 flex items-center md:ml-6">{actions}</div>}
            {userProfile && <div className="ml-3">{userProfile}</div>}
            {/* Mobile menu button */}
            {navItems.length > 0 && <div className="ml-3 md:hidden">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen} onClick={onMobileMenuToggle}>
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? <span className="block h-6 w-6">✕</span> : <Menu className="block h-6 w-6" />}
                </button>
              </div>}
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {navItems.length > 0 && isMobileMenuOpen && <div className="md:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => <a key={index} href={item.href} className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${item.active ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}>
                {item.label}
              </a>)}
          </div>
          {userProfile && <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-4">{userProfile}</div>
            </div>}
        </div>}
    </header>;
};
// Sample default user profile component
export const DefaultUserProfile: React.FC<{
  name: string;
  email: string;
  avatarUrl?: string;
  onClick?: () => void;
}> = ({
  name,
  email,
  avatarUrl,
  onClick
}) => {
  return <div className="flex items-center" onClick={onClick}>
      <div className="flex-shrink-0">
        {avatarUrl ? <img className="h-8 w-8 rounded-full" src={avatarUrl} alt={name} /> : <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-500" />
          </div>}
      </div>
      <div className="ml-3">
        <div className="text-sm font-medium text-gray-700">{name}</div>
        <div className="text-xs text-gray-500">{email}</div>
      </div>
    </div>;
};
// Sample search input component
export const SearchInput: React.FC<{
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}> = ({
  placeholder = 'Search',
  value,
  onChange,
  className = ''
}) => {
  return <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={placeholder} value={value} onChange={onChange} />
    </div>;
};
// Sample notification button
export const NotificationButton: React.FC<{
  count?: number;
  onClick?: () => void;
}> = ({
  count,
  onClick
}) => {
  return <button type="button" className="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onClick}>
      <span className="sr-only">View notifications</span>
      <Bell className="h-6 w-6" aria-hidden="true" />
      {count !== undefined && count > 0 && <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>}
    </button>;
};