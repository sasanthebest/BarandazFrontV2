import EmptyState from "@/components/EmptyState";



export default async function page() {
  
    return (
      <div className="flex flex-col items-center gap-3">
        <EmptyState
          title="تاکنون از آگهی های بارانداز بازدید نداشته اید."

        />
      </div>
    );
  }
  