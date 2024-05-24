// Declaração de modulo para o TSX entender o que está acontecendo.
declare module '@/components/ui/dropdown-menu' {
    import * as React from 'react';
  
    export interface DropdownMenuProps {
      className?: string;
      inset?: boolean;
      children?: React.ReactNode;
      [key: string]: any;
    }
  
    export const DropdownMenu: React.FC<DropdownMenuProps>;
    export const DropdownMenuTrigger: React.FC<DropdownMenuProps>;
    export const DropdownMenuContent: React.FC<DropdownMenuProps>;
    export const DropdownMenuItem: React.FC<DropdownMenuProps>;
    export const DropdownMenuCheckboxItem: React.FC<DropdownMenuProps>;
    export const DropdownMenuRadioItem: React.FC<DropdownMenuProps>;
    export const DropdownMenuLabel: React.FC<DropdownMenuProps>;
    export const DropdownMenuSeparator: React.FC<DropdownMenuProps>;
    export const DropdownMenuShortcut: React.FC<DropdownMenuProps>;
    export const DropdownMenuGroup: React.FC<DropdownMenuProps>;
    export const DropdownMenuPortal: React.FC<DropdownMenuProps>;
    export const DropdownMenuSub: React.FC<DropdownMenuProps>;
    export const DropdownMenuSubContent: React.FC<DropdownMenuProps>;
    export const DropdownMenuSubTrigger: React.FC<DropdownMenuProps>;
    export const DropdownMenuRadioGroup: React.FC<DropdownMenuProps>;
  }
  