import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Callback when the modal is closed
   */
  onClose: () => void;
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * Modal footer content
   */
  footer?: React.ReactNode;
  /**
   * If true, the modal can be closed by clicking outside
   * @default true
   */
  closeOnOutsideClick?: boolean;
  /**
   * If true, the modal can be closed by pressing Escape
   * @default true
   */
  closeOnEsc?: boolean;
  /**
   * Size of the modal
   * @default "md"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
  /**
   * Additional classes to apply to the modal
   */
  className?: string;
  /**
   * If true, the modal will not have a close button
   * @default false
   */
  hideCloseButton?: boolean;
}
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  size = 'md',
  className = '',
  hideCloseButton = false
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
      }, 200); // Match this duration with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = ''; // Restore scrolling when modal is closed
    };
  }, [isOpen, closeOnEsc]);
  // If not visible, don't render anything
  if (!isVisible) return null;
  // Handle close with animation
  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };
  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      handleClose();
    }
  };
  // Determine max-width based on size
  const sizeClasses = {
    xs: 'sm:max-w-xs',
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl',
    '3xl': 'sm:max-w-3xl',
    '4xl': 'sm:max-w-4xl',
    '5xl': 'sm:max-w-5xl',
    full: 'sm:max-w-full'
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-200 ${isAnimatingOut ? 'opacity-0' : 'opacity-50'}`} aria-hidden="true"></div>
      {/* Modal Dialog */}
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0" onClick={handleBackdropClick}>
        <div className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-200 ${sizeClasses[size]} w-full ${isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} ${className}`}>
          {/* Modal Header */}
          {(title || !hideCloseButton) && <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
              {!hideCloseButton && <button type="button" className="text-gray-400 hover:text-gray-500 focus:outline-none" onClick={handleClose}>
                  <span className="sr-only">Close</span>
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>}
            </div>}
          {/* Modal Body */}
          <div className="px-4 py-4 sm:p-6">{children}</div>
          {/* Modal Footer */}
          {footer && <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6 flex flex-row-reverse gap-2">
              {footer}
            </div>}
        </div>
      </div>
    </div>;
};
export interface DrawerProps {
  /**
   * Whether the drawer is open
   */
  isOpen: boolean;
  /**
   * Callback when the drawer is closed
   */
  onClose: () => void;
  /**
   * Drawer title
   */
  title?: string;
  /**
   * Drawer content
   */
  children: React.ReactNode;
  /**
   * Drawer footer content
   */
  footer?: React.ReactNode;
  /**
   * The position of the drawer
   * @default "right"
   */
  position?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * Size of the drawer (width for left/right, height for top/bottom)
   * @default "md"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  /**
   * Additional classes to apply to the drawer
   */
  className?: string;
  /**
   * If true, the drawer will not have a close button
   * @default false
   */
  hideCloseButton?: boolean;
}
export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  position = 'right',
  size = 'md',
  className = '',
  hideCloseButton = false
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
      }, 300); // Match this duration with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when drawer is open
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = ''; // Restore scrolling when drawer is closed
    };
  }, [isOpen]);
  // If not visible, don't render anything
  if (!isVisible) return null;
  // Handle close with animation
  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  // Determine size classes based on position and size
  const getSizeClass = () => {
    const sizes = {
      xs: {
        left: 'w-56',
        right: 'w-56',
        top: 'h-32',
        bottom: 'h-32'
      },
      sm: {
        left: 'w-72',
        right: 'w-72',
        top: 'h-48',
        bottom: 'h-48'
      },
      md: {
        left: 'w-96',
        right: 'w-96',
        top: 'h-64',
        bottom: 'h-64'
      },
      lg: {
        left: 'w-1/3',
        right: 'w-1/3',
        top: 'h-1/3',
        bottom: 'h-1/3'
      },
      xl: {
        left: 'w-1/2',
        right: 'w-1/2',
        top: 'h-1/2',
        bottom: 'h-1/2'
      },
      '2xl': {
        left: 'w-2/3',
        right: 'w-2/3',
        top: 'h-2/3',
        bottom: 'h-2/3'
      },
      '3xl': {
        left: 'w-3/4',
        right: 'w-3/4',
        top: 'h-3/4',
        bottom: 'h-3/4'
      },
      full: {
        left: 'w-full',
        right: 'w-full',
        top: 'h-full',
        bottom: 'h-full'
      }
    };
    return sizes[size][position];
  };
  // Determine transform classes based on position
  const getTransformClass = () => {
    const transforms = {
      left: isAnimatingOut ? '-translate-x-full' : 'translate-x-0',
      right: isAnimatingOut ? 'translate-x-full' : 'translate-x-0',
      top: isAnimatingOut ? '-translate-y-full' : 'translate-y-0',
      bottom: isAnimatingOut ? 'translate-y-full' : 'translate-y-0'
    };
    return transforms[position];
  };
  // Determine position classes
  const getPositionClass = () => {
    const positions = {
      left: 'inset-y-0 left-0',
      right: 'inset-y-0 right-0',
      top: 'inset-x-0 top-0',
      bottom: 'inset-x-0 bottom-0'
    };
    return positions[position];
  };
  return <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-50'}`} aria-hidden="true" onClick={handleClose}></div>
      {/* Drawer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`pointer-events-none fixed ${getPositionClass()} flex max-w-full`}>
            <div className={`pointer-events-auto ${getSizeClass()} transform transition-transform duration-300 ease-in-out ${getTransformClass()} flex flex-col bg-white shadow-xl ${className}`}>
              {/* Drawer Header */}
              {(title || !hideCloseButton) && <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  {title && <h3 className="text-lg font-medium text-gray-900">
                      {title}
                    </h3>}
                  {!hideCloseButton && <button type="button" className="text-gray-400 hover:text-gray-500 focus:outline-none" onClick={handleClose}>
                      <span className="sr-only">Close</span>
                      <X className="h-5 w-5" aria-hidden="true" />
                    </button>}
                </div>}
              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-4">{children}</div>
              {/* Drawer Footer */}
              {footer && <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex flex-row-reverse gap-2">
                  {footer}
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export interface DialogProps {
  /**
   * Whether the dialog is open
   */
  isOpen: boolean;
  /**
   * Callback when the dialog is closed
   */
  onClose: () => void;
  /**
   * Dialog title
   */
  title: string;
  /**
   * Dialog content
   */
  children: React.ReactNode;
  /**
   * Callback when the confirm button is clicked
   */
  onConfirm: () => void;
  /**
   * Text for the confirm button
   * @default "Confirm"
   */
  confirmText?: string;
  /**
   * Text for the cancel button
   * @default "Cancel"
   */
  cancelText?: string;
  /**
   * Variant for the confirm button
   * @default "primary"
   */
  confirmVariant?: 'primary' | 'danger' | 'outline';
  /**
   * Additional classes to apply to the dialog
   */
  className?: string;
}
export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmVariant = 'primary',
  className = ''
}) => {
  return <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm" className={className} footer={<>
          <Button variant={confirmVariant} onClick={onConfirm}>
            {confirmText}
          </Button>
          <Button variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
        </>}>
      <div className="mt-2">{children}</div>
    </Modal>;
};