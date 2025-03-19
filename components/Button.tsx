import { Button, ButtonProps } from '@heroui/react';

type CustomButtonProps = ButtonProps & {
    animated?: boolean;
    color?: 'primary' | 'secondary';
    text: string;
};

const animationStyle = 'hover:translate-x-2 transition-all ease-linear';

const StyledButton: React.FC<CustomButtonProps> = ({
    animated,
    className,
    color = 'secondary',
    size = 'lg',
    text,
}) => {
    return (
        <Button
            color={color}
            radius='md'
            size={size}
            className={`${className} ${animated ? animationStyle : ''}`}
        >
            {text}
        </Button>
    );
};

export default StyledButton;
