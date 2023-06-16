import Footer from '@/components/Footer'

export default async function layout({children}) {

    return (
        <div >
        {children}
        <div className='flex flex-row items-center justify-around pb-5'>
            <Footer/>
        </div>
        
        </div>
    )
    
}