export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      {children}
    </div>
  );
}
