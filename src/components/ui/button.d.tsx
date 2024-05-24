// Declaração de modulo para o TSX entender o que está acontecendo.
declare module '@/components/ui/button' {
    import * as React from 'react';
  
    export interface ButtonProps {
      className?: string;
      variant?: string;
      size?: string;
      asChild?: boolean;
      [key: string]: any;
    }
  
    export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>;
    export const buttonVariants: any; // Substitua 'any' pelo tipo correto se você souber
  }
  