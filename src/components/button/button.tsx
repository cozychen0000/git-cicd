interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  children:React.ReactNode
}

function Button({ children, ...props }:ButtonProps) {
  return (
    <div>
      <button type="button" className="bg-white rounded p-2" {...props}>{children}</button>
    </div>
  );
}

export default Button;
