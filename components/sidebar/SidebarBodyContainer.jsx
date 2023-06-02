export default  function SidebarBodyContainer({children}) {
  return <div className=" w-full overflow-y-scroll lg:pl-4 md:pl-3 mobmax:px-3">{children}</div>;
}