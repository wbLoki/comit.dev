import { ButtonProps } from '@types';
import { Button } from '@heroui/react';

type CustomButtonProps = ButtonProps & {
    animated?: boolean;
    color?: 'primary' | 'secondary';
    text: string;
};

const animationStyle = 'hover:translate-x-2 transition-all ease-linear';

const StyledButton: React.FC<CustomButtonProps> = ({
    styles,
    animated,
    text,
}) => {
    return (
        <Button
            color='secondary'
            radius='md'
            className={`${styles} ${animated ? animationStyle : ''}`}
        >
            {text}
        </Button>
    );
};

export default StyledButton;
