import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';
import { Laptop, Monitor, Smartphone, Tablet, TvMinimal } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

interface Props {
    className?: string;
}

const indicatorVariants = cva(
    "m-3 gap-1 rounded-md p-1 px-1 pr-1.5 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 fixed z-9999 flex items-center justify-center opacity-50 select-none hover:opacity-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='stroke-'])]:stroke-[2.5]",
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground',
                secondary: 'bg-secondary text-secondary-foreground',
                outline: 'bg-background text-foreground border',
                ghost: 'text-foreground bg-transparent',
            },
            position: {
                'top-left': 'top-0 left-0',
                'top-right': 'top-0 right-0',
                'bottom-left': 'bottom-0 left-0',
                'bottom-right': 'right-0 bottom-0',
            },
        },
        defaultVariants: {
            variant: 'default',
            position: 'bottom-left',
        },
    },
);

function ScreenIndicator({
    variant = 'default',
    position = 'bottom-left',
    className,
}: Props & VariantProps<typeof indicatorVariants>) {
    return (
        <div
            className={cn(indicatorVariants({ variant, position, className }))}
        >
            <Icon
                node={Smartphone}
                className="max-md:block hidden opacity-50"
            />
            <Icon node={Tablet} className="md:max-lg:block hidden opacity-50" />
            <Icon node={Laptop} className="lg:max-xl:block hidden opacity-50" />
            <Icon
                node={Monitor}
                className="xl:max-2xl:block hidden opacity-50"
            />
            <Icon node={TvMinimal} className="2xl:block hidden opacity-50" />
            <div className="max-sm:block hidden">vs</div>
            <div className="sm:max-md:block hidden">sm</div>
            <div className="md:max-lg:block hidden">md</div>
            <div className="lg:max-xl:block hidden">lg</div>
            <div className="xl:max-2xl:block hidden">xl</div>
            <div className="2xl:block hidden">2xl</div>
        </div>
    );
}

export { ScreenIndicator, indicatorVariants };
