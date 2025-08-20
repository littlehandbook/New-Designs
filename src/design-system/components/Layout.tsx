import React, { Component } from 'react';
export interface ContainerProps {
  /**
   * Container content
   */
  children: React.ReactNode;
  /**
   * Maximum width of the container
   * @default "7xl"
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'none';
  /**
   * If true, the container will be centered
   * @default true
   */
  centered?: boolean;
  /**
   * Horizontal padding
   * @default "px-4 sm:px-6 lg:px-8"
   */
  padding?: string;
  /**
   * Additional classes to apply to the container
   */
  className?: string;
}
export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '7xl',
  centered = true,
  padding = 'px-4 sm:px-6 lg:px-8',
  className = ''
}) => {
  const maxWidthClass = maxWidth === 'none' ? '' : `max-w-${maxWidth}`;
  const centerClass = centered ? 'mx-auto' : '';
  return <div className={`${maxWidthClass} ${centerClass} ${padding} ${className}`}>
      {children}
    </div>;
};
export interface GridProps {
  /**
   * Grid content
   */
  children: React.ReactNode;
  /**
   * Number of columns at different breakpoints
   * @default { default: 1, sm: 2, md: 3, lg: 4 }
   */
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  /**
   * Gap between grid items
   * @default "gap-6"
   */
  gap?: string;
  /**
   * Additional classes to apply to the grid
   */
  className?: string;
}
export const Grid: React.FC<GridProps> = ({
  children,
  cols = {
    default: 1,
    sm: 2,
    md: 3,
    lg: 4
  },
  gap = 'gap-6',
  className = ''
}) => {
  // Build the responsive grid template columns classes
  const gridColsClasses = Object.entries(cols).map(([breakpoint, colCount]) => {
    if (breakpoint === 'default') {
      return `grid-cols-${colCount}`;
    }
    return `${breakpoint}:grid-cols-${colCount}`;
  }).join(' ');
  return <div className={`grid ${gridColsClasses} ${gap} ${className}`}>
      {children}
    </div>;
};
export interface FlexProps {
  /**
   * Flex content
   */
  children: React.ReactNode;
  /**
   * Flex direction
   * @default "row"
   */
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  /**
   * Responsive flex direction
   */
  responsiveDirection?: {
    sm?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
    md?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
    lg?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
    xl?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  };
  /**
   * Justify content
   * @default "start"
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  /**
   * Align items
   * @default "start"
   */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
   * Gap between flex items
   */
  gap?: string;
  /**
   * If true, items will wrap
   * @default false
   */
  wrap?: boolean;
  /**
   * Additional classes to apply to the flex container
   */
  className?: string;
}
export const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  responsiveDirection,
  justify = 'start',
  align = 'start',
  gap,
  wrap = false,
  className = ''
}) => {
  // Build the base flex classes
  const flexClasses = ['flex', `flex-${direction}`, `justify-${justify}`, `items-${align}`, wrap ? 'flex-wrap' : '', gap ? `gap-${gap}` : ''];
  // Add responsive direction classes if provided
  const responsiveClasses = responsiveDirection ? Object.entries(responsiveDirection).map(([breakpoint, dir]) => `${breakpoint}:flex-${dir}`) : [];
  const allClasses = [...flexClasses, ...responsiveClasses, className].filter(Boolean).join(' ');
  return <div className={allClasses}>{children}</div>;
};
export interface DividerProps {
  /**
   * Orientation of the divider
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Optional label to display in the divider
   */
  label?: string;
  /**
   * Additional classes to apply to the divider
   */
  className?: string;
}
export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className = ''
}) => {
  if (orientation === 'horizontal') {
    if (label) {
      return <div className={`relative ${className}`}>
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500">{label}</span>
          </div>
        </div>;
    }
    return <hr className={`border-t border-gray-300 ${className}`} />;
  }
  // Vertical divider
  return <div className={`inline-block h-full border-l border-gray-300 ${className}`} aria-hidden="true"></div>;
};
export interface BoxProps {
  /**
   * Box content
   */
  children: React.ReactNode;
  /**
   * Padding applied to all sides
   */
  p?: number | string;
  /**
   * Padding applied to the top and bottom
   */
  py?: number | string;
  /**
   * Padding applied to the left and right
   */
  px?: number | string;
  /**
   * Padding applied to the top
   */
  pt?: number | string;
  /**
   * Padding applied to the bottom
   */
  pb?: number | string;
  /**
   * Padding applied to the left
   */
  pl?: number | string;
  /**
   * Padding applied to the right
   */
  pr?: number | string;
  /**
   * Margin applied to all sides
   */
  m?: number | string;
  /**
   * Margin applied to the top and bottom
   */
  my?: number | string;
  /**
   * Margin applied to the left and right
   */
  mx?: number | string;
  /**
   * Margin applied to the top
   */
  mt?: number | string;
  /**
   * Margin applied to the bottom
   */
  mb?: number | string;
  /**
   * Margin applied to the left
   */
  ml?: number | string;
  /**
   * Margin applied to the right
   */
  mr?: number | string;
  /**
   * Background color
   */
  bg?: string;
  /**
   * Border width
   */
  border?: string;
  /**
   * Border color
   */
  borderColor?: string;
  /**
   * Border radius
   */
  rounded?: string;
  /**
   * Shadow
   */
  shadow?: string;
  /**
   * Width
   */
  width?: string;
  /**
   * Height
   */
  height?: string;
  /**
   * Additional classes to apply to the box
   */
  className?: string;
  /**
   * HTML element to render
   * @default "div"
   */
  as?: React.ElementType;
}
export const Box: React.FC<BoxProps> = ({
  children,
  p,
  py,
  px,
  pt,
  pb,
  pl,
  pr,
  m,
  my,
  mx,
  mt,
  mb,
  ml,
  mr,
  bg,
  border,
  borderColor,
  rounded,
  shadow,
  width,
  height,
  className = '',
  as: Component = 'div'
}) => {
  // Build the classes based on the props
  const classes = [
  // Padding
  p !== undefined && `p-${p}`, py !== undefined && `py-${py}`, px !== undefined && `px-${px}`, pt !== undefined && `pt-${pt}`, pb !== undefined && `pb-${pb}`, pl !== undefined && `pl-${pl}`, pr !== undefined && `pr-${pr}`,
  // Margin
  m !== undefined && `m-${m}`, my !== undefined && `my-${my}`, mx !== undefined && `mx-${mx}`, mt !== undefined && `mt-${mt}`, mb !== undefined && `mb-${mb}`, ml !== undefined && `ml-${ml}`, mr !== undefined && `mr-${mr}`,
  // Styling
  bg && `bg-${bg}`, border && `border-${border}`, borderColor && `border-${borderColor}`, rounded && `rounded-${rounded}`, shadow && `shadow-${shadow}`, width && `w-${width}`, height && `h-${height}`,
  // Additional classes
  className].filter(Boolean).join(' ');
  return <Component className={classes}>{children}</Component>;
};