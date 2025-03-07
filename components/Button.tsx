import { ButtonProps } from '@types';

const Button: React.FC<ButtonProps> = ({ styles }) => {
    return (
        <button
            type='button'
            className={`${styles} py-4 px-6 bg-orange font-poppins font-medium text-[18px] text-white outline-none rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer`}
        >
            Get Started
        </button>
    );
};

export default Button;
