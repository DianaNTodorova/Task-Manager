export default function Button({ children, ...props }) {
  return (
    <button
      className="px-6 py-4 text-xs md:text-base font-bold bg-customBlue text-customBeige hover:bg-customBeige hover:text-customBlue hover:shadow-[4px_4px_0px_#000080] transition-shadow"
      {...props}
    >
      {children}
    </button>
  );
}
