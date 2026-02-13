export default function Button({ children }) {
  return (
    <button className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-6 py-3 rounded-full font-medium shadow">
      {children}
    </button>
  );
}
