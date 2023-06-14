import {CiLinkedin} from 'react-icons/ci'
import {AiOutlineYoutube} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import {FaTelegramPlane} from 'react-icons/fa'
import {RxInstagramLogo} from 'react-icons/rx'
import Footer from '@/components/Footer'

export default async function layout({children}) {

    return (
        <>
        <div>{children}</div>
        <div className='flex flex-row items-center justify-around pb-5'>
            <Footer/>
        </div>
        
        </>
    )
    
}