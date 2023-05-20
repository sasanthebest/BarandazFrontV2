export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <div className="bg-rose-300 ">
      <p className="">layout</p>
      </div>
      <div className="col-span-3">

      {children}
      </div>
    </div>
  );
}
