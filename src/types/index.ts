/**
 * Global Type Definitions
 * Centralized type exports for the Oralyn application
 */

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Service Types
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export type ServiceProps = BaseComponentProps;
