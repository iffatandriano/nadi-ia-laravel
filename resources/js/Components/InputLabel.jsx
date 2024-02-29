export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `border border-gray-400 font-medium text-sm text-gray-700` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
