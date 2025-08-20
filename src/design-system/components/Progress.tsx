import React from 'react';
export interface ProgressBarProps {
  /**
   * Current value of the progress bar
   */
  value: number;
  /**
   * Maximum value of the progress bar
   * @default 100
   */
  max?: number;
  /**
   * Size of the progress bar
   * @default "md"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Color variant of the progress bar
   * @default "primary"
   */
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * If true, shows the progress value as text
   * @default false
   */
  showValue?: boolean;
  /**
   * Format function for the displayed value
   * @default (value, max) => `${Math.round((value / max) * 100)}%`
   */
  formatValue?: (value: number, max: number) => string;
  /**
   * If true, adds a striped effect to the progress bar
   * @default false
   */
  striped?: boolean;
  /**
   * If true, adds an animated effect to the progress bar
   * @default false
   */
  animated?: boolean;
  /**
   * Additional classes to apply to the progress bar
   */
  className?: string;
  /**
   * Label to display above the progress bar
   */
  label?: string;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  showValue = false,
  formatValue = (value, max) => `${Math.round(value / max * 100)}%`,
  striped = false,
  animated = false,
  className = '',
  label
}) => {
  // Ensure value is between 0 and max
  const normalizedValue = Math.max(0, Math.min(value, max));
  const percentage = normalizedValue / max * 100;
  // Size classes
  const sizeClasses = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600',
    success: 'bg-success-600',
    warning: 'bg-warning-600',
    error: 'bg-error-600',
    info: 'bg-info-600'
  };
  // Striped and animated classes
  const stripedClass = striped ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1rem_1rem]' : '';
  const animatedClass = animated && striped ? 'animate-progress-stripes' : '';
  return <div className={className}>
      {(label || showValue) && <div className="flex items-center justify-between mb-1">
          {label && <div className="text-sm font-medium text-gray-700">{label}</div>}
          {showValue && <div className="text-sm font-medium text-gray-500">
              {formatValue(normalizedValue, max)}
            </div>}
        </div>}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div className={`${variantClasses[variant]} ${stripedClass} ${animatedClass} rounded-full transition-all duration-300 ease-in-out`} style={{
        width: `${percentage}%`
      }} role="progressbar" aria-valuenow={normalizedValue} aria-valuemin={0} aria-valuemax={max}></div>
      </div>
    </div>;
};
export interface SpinnerProps {
  /**
   * Size of the spinner
   * @default "md"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Color variant of the spinner
   * @default "primary"
   */
  variant?: 'primary' | 'white' | 'gray' | 'success' | 'warning' | 'error' | 'info';
  /**
   * Additional classes to apply to the spinner
   */
  className?: string;
  /**
   * Label to display next to the spinner
   */
  label?: string;
}
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  className = '',
  label
}) => {
  // Size classes
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };
  // Variant classes
  const variantClasses = {
    primary: 'text-primary-600',
    white: 'text-white',
    gray: 'text-gray-500',
    success: 'text-success-600',
    warning: 'text-warning-600',
    error: 'text-error-600',
    info: 'text-info-600'
  };
  return <div className={`inline-flex items-center ${className}`}>
      <svg className={`animate-spin ${sizeClasses[size]} ${variantClasses[variant]}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      {label && <span className="ml-2">{label}</span>}
    </div>;
};
export interface StepperProps {
  /**
   * Array of step objects
   */
  steps: {
    id: string | number;
    label: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
  /**
   * ID of the active step
   */
  activeStep: string | number;
  /**
   * IDs of completed steps
   */
  completedSteps?: (string | number)[];
  /**
   * Orientation of the stepper
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Additional classes to apply to the stepper
   */
  className?: string;
  /**
   * Callback when a step is clicked
   */
  onStepClick?: (stepId: string | number) => void;
}
export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  completedSteps = [],
  orientation = 'horizontal',
  className = '',
  onStepClick
}) => {
  const isStepActive = (stepId: string | number) => stepId === activeStep;
  const isStepCompleted = (stepId: string | number) => completedSteps.includes(stepId);
  const getStepStatus = (stepId: string | number) => {
    if (isStepCompleted(stepId)) return 'completed';
    if (isStepActive(stepId)) return 'active';
    return 'inactive';
  };
  const getStepClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-primary-600 text-white border-primary-600';
      case 'active':
        return 'bg-white text-primary-600 border-primary-600';
      default:
        return 'bg-white text-gray-500 border-gray-300';
    }
  };
  const getLineClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-primary-600';
      case 'active':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };
  return <div className={`${orientation === 'vertical' ? 'flex flex-col' : 'flex items-center justify-between'} ${className}`}>
      {steps.map((step, index) => {
      const status = getStepStatus(step.id);
      const stepClasses = getStepClasses(status);
      const isLast = index === steps.length - 1;
      return <div key={step.id} className={`${orientation === 'vertical' ? 'flex items-start' : 'flex flex-col items-center'} ${orientation === 'horizontal' ? 'flex-1' : ''}`}>
            <div className="flex items-center">
              <div className={`${orientation === 'vertical' ? 'flex-shrink-0' : ''}`} onClick={() => onStepClick && onStepClick(step.id)}>
                <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center ${stepClasses} ${onStepClick ? 'cursor-pointer' : ''}`}>
                  {status === 'completed' ? <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg> : step.icon ? step.icon : <span>{index + 1}</span>}
                </div>
              </div>
              {!isLast && orientation === 'horizontal' && <div className={`w-full h-0.5 ${getLineClasses(status)}`}></div>}
              {orientation === 'vertical' && <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {step.label}
                  </div>
                  {step.description && <div className="mt-1 text-sm text-gray-500">
                      {step.description}
                    </div>}
                </div>}
            </div>
            {orientation === 'horizontal' && <div className="mt-2 text-sm font-medium text-gray-900 text-center">
                {step.label}
              </div>}
            {!isLast && orientation === 'vertical' && <div className={`ml-4 w-0.5 h-8 ${getLineClasses(status)}`}></div>}
          </div>;
    })}
    </div>;
};
export interface SkeletonProps {
  /**
   * Type of skeleton
   * @default "text"
   */
  type?: 'text' | 'circle' | 'rectangle' | 'avatar' | 'button' | 'card' | 'image';
  /**
   * Width of the skeleton
   * @default "100%"
   */
  width?: string;
  /**
   * Height of the skeleton
   */
  height?: string;
  /**
   * If true, adds an animated pulse effect
   * @default true
   */
  animated?: boolean;
  /**
   * Border radius
   */
  rounded?: string;
  /**
   * Additional classes to apply to the skeleton
   */
  className?: string;
}
export const Skeleton: React.FC<SkeletonProps> = ({
  type = 'text',
  width = '100%',
  height,
  animated = true,
  rounded,
  className = ''
}) => {
  // Determine dimensions and styles based on type
  let styles: React.CSSProperties = {
    width
  };
  let roundedClass = '';
  switch (type) {
    case 'circle':
      styles.height = height || width;
      roundedClass = 'rounded-full';
      break;
    case 'avatar':
      styles.height = height || width;
      roundedClass = 'rounded-full';
      break;
    case 'button':
      styles.height = height || '2.5rem';
      roundedClass = 'rounded-md';
      break;
    case 'card':
      styles.height = height || '12rem';
      roundedClass = 'rounded-lg';
      break;
    case 'image':
      styles.height = height || '0';
      styles.paddingBottom = height ? undefined : '56.25%'; // 16:9 aspect ratio
      roundedClass = 'rounded-md';
      break;
    case 'text':
    default:
      styles.height = height || '1rem';
      roundedClass = 'rounded';
      break;
  }
  // Apply custom border radius if provided
  if (rounded) {
    roundedClass = `rounded-${rounded}`;
  }
  return <div className={`bg-gray-200 ${animated ? 'animate-pulse' : ''} ${roundedClass} ${className}`} style={styles} aria-hidden="true"></div>;
};