'use client'
import { useEffect } from "react";
import { useBarandazContext } from '@/context/context';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const SidebarContainer = ({ title, children, mobile }) => {
  const { activeSidebar, setActiveSidebar } = useBarandazContext();
  const router = useRouter();
  useEffect(() => {
    setActiveSidebar(activeSidebar);
  }, [router.asPath]);

  return (
    <div className={`${mobile ? "" : "mobmax:hidden"} sticky top-0`}>
      <div className="flex justify-between h-5v">
        {activeSidebar && (
          <div className="pr-4 w-72 text-neutral-500">
            <h3>{title}</h3>
          </div>
        )}
        <div>
          {activeSidebar ? (
            <div
              onClick={() => setActiveSidebar(!activeSidebar)}
              className="flex justify-center items-center h-6 w-6 sticky bg-sky-500/75 rounded-r-2xl"
            >
              <AiOutlineCaretRight size="1.5rem" color="#170080" />
            </div>
          ) : (
            <div
              className="flex justify-center items-center h-6 w-6 sticky bg-sky-500/75 rounded-l-2xl"
              onClick={() => setActiveSidebar(!activeSidebar)}
            >
              <AiOutlineCaretLeft size="1.5rem" color="#170080" />
            </div>
          )}
        </div>
      </div>
      {activeSidebar && (
        <div className="h-80v w-72">
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default SidebarContainer;


