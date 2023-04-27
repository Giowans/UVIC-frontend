
const Button = ({className, onClick, children}) => {
  return (
    <button onClick={onClick} className={`select-none py-2 px-3 h-fit w-full rounded-full bg-primary font-medium font-helvetica text-white transition duration-150 hover:bg-primary-dark ${className}`}>
      {children || 'Texto'}
    </button>
  );
}

export default Button;