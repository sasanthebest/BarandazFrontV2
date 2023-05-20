export {default} from 'next-auth/middleware'

export const config={
    matcher:[
        '/user/:path*',
        // '/user/myChambers',
        // '/user/myBookmarks',
        // '/user/myLastSeens',
    ]
}