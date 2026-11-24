import type { LucideIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

interface IconProps extends ComponentProps<LucideIcon> {
    node?: LucideIcon | null;
}

export function Icon({ node: IconComponent, ...props }: IconProps) {
    if (!IconComponent) {
        return null;
    }

    return <IconComponent {...props} />;
}
