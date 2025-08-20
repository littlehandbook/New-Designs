import React, { cloneElement, isValidElement } from 'react';
import { Input } from './Input';
import { AlertCircle, Check, Info } from 'lucide-react';
export interface FormFieldProps {
  /**
   * Unique identifier for the form field
   */
  id?: string;
  /**
   * Field label
   */
  label?: string;
  /**
   * Helper text displayed below the field
   */
  helperText?: string;
  /**
   * Error message displayed below the field
   */
  error?: string;
  /**
   * Success message displayed below the field
   */
  success?: string;
  /**
   * If true, the field is required
   * @default false
   */
  required?: boolean;
  /**
   * If true, the field is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The form field element (input, select, textarea, etc.)
   */
  children: React.ReactNode;
  /**
   * Additional classes to apply to the form field container
   */
  className?: string;
  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;
}
export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  helperText,
  error,
  success,
  required = false,
  disabled = false,
  children,
  className = '',
  icon
}) => {
  // Generate a unique ID if one isn't provided
  const fieldId = id || `field-${Math.random().toString(36).substring(2, 9)}`;
  return <div className={`mb-4 ${className}`}>
      {label && <div className="flex items-center mb-1.5">
          {icon && <span className="mr-2 text-gray-500">{icon}</span>}
          <label htmlFor={fieldId} className={`block text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        </div>}
      {/* Pass the generated ID to the child component */}
      {isValidElement(children) ? cloneElement(children as React.ReactElement, {
      id: fieldId,
      disabled,
      ...((children as React.ReactElement).props || {})
    }) : children}
      {/* Status messages */}
      {(helperText || error || success) && <div className="mt-1.5">
          {error && <div className="flex items-start text-sm text-red-600">
              <AlertCircle className="h-4 w-4 mr-1.5 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>}
          {success && !error && <div className="flex items-start text-sm text-green-600">
              <Check className="h-4 w-4 mr-1.5 mt-0.5 flex-shrink-0" />
              <span>{success}</span>
            </div>}
          {helperText && !error && !success && <div className="flex items-start text-sm text-gray-500">
              <Info className="h-4 w-4 mr-1.5 mt-0.5 flex-shrink-0" />
              <span>{helperText}</span>
            </div>}
        </div>}
    </div>;
};
export interface FormGroupProps {
  /**
   * Form group content
   */
  children: React.ReactNode;
  /**
   * Group title
   */
  title?: string;
  /**
   * Group description
   */
  description?: string;
  /**
   * Additional classes to apply to the form group
   */
  className?: string;
}
export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  title,
  description,
  className = ''
}) => {
  return <div className={`mb-8 ${className}`}>
      {(title || description) && <div className="mb-4">
          {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>}
      <div className="space-y-4">{children}</div>
    </div>;
};
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Checkbox label
   */
  label: string;
  /**
   * Helper text displayed below the checkbox
   */
  helperText?: string;
  /**
   * Additional classes to apply to the checkbox container
   */
  containerClassName?: string;
}
export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  helperText,
  containerClassName = '',
  className = '',
  ...props
}) => {
  // Generate a unique ID if one isn't provided
  const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
  return <div className={`${containerClassName}`}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input type="checkbox" id={checkboxId} className={`h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 ${className}`} {...props} />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={checkboxId} className={`font-medium ${props.disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
          </label>
          {helperText && <p className="text-gray-500">{helperText}</p>}
        </div>
      </div>
    </div>;
};
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Radio button label
   */
  label: string;
  /**
   * Helper text displayed below the radio button
   */
  helperText?: string;
  /**
   * Additional classes to apply to the radio container
   */
  containerClassName?: string;
}
export const Radio: React.FC<RadioProps> = ({
  id,
  label,
  helperText,
  containerClassName = '',
  className = '',
  ...props
}) => {
  // Generate a unique ID if one isn't provided
  const radioId = id || `radio-${Math.random().toString(36).substring(2, 9)}`;
  return <div className={`${containerClassName}`}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input type="radio" id={radioId} className={`h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500 ${className}`} {...props} />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={radioId} className={`font-medium ${props.disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
          </label>
          {helperText && <p className="text-gray-500">{helperText}</p>}
        </div>
      </div>
    </div>;
};
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Select options
   */
  options: {
    value: string;
    label: string;
  }[];
  /**
   * Additional classes to apply to the select container
   */
  containerClassName?: string;
  /**
   * If true, adds a placeholder option
   */
  placeholder?: string;
}
export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  fullWidth = true,
  className = '',
  ...props
}) => {
  const selectClasses = `
    block border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 text-base py-3 px-4
    ${error ? 'border-error-300 text-error-900 focus:ring-error-500 focus:border-error-500' : ''}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();
  return <select className={selectClasses} value={value} onChange={onChange} disabled={disabled} {...props}>
      {placeholder && <option value="" disabled>
          {placeholder}
        </option>}
      {options.map(option => <option key={option.value} value={option.value}>
          {option.label}
        </option>)}
    </select>;
};
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Additional classes to apply to the textarea container
   */
  containerClassName?: string;
}
export const Textarea: React.FC<TextareaProps> = ({
  error,
  disabled,
  fullWidth = true,
  className = '',
  ...props
}) => {
  const textareaClasses = `
    block border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 text-base py-3 px-4
    ${error ? 'border-error-300 text-error-900 placeholder-error-300 focus:ring-error-500 focus:border-error-500' : ''}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();
  return <textarea className={textareaClasses} disabled={disabled} {...props} />;
};