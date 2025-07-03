export default function Button({ variant = "primary", children, ...props }) {
  const base = "px-4 py-2 rounded text-white font-semibold ";
  const styles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };
  return <button className={base + styles[variant]} {...props}>{children}</button>;
}
