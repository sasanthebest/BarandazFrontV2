import {getMyChambers} from "@/services/userServices"
import EmptyState from "@/components/EmptyState"
import Button from "@/components/util/Button"
import MyChambers from "@/components/Account/myChambers/MyChambers"


export default async function page() {
  const myChambers = await getMyChambers()
  
  if (myChambers?.results.length===0){
    return (
      <div className="flex flex-col items-center gap-5">
      <EmptyState title="حجره ای یافت نشد" subtitle="با ثبت حجره فروشگاه اینترنتی خود را تاسیس کرده و در سرتاسر ایران دیده شوید"/>
      <Button small label="ایجاد حجره"/>
      </div>
    )

  }

  return (
    <MyChambers  data={myChambers.results}/>
  )
}
