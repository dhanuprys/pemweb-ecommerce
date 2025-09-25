export default function SafeWidth({ children, className }) {
    return (
        <div className={`max-w-[65rem] px-4 mx-auto ${className}`}>
            {children}
        </div>
    );
}