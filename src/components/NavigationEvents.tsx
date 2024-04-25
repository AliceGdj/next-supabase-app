// "use client"
 
// import { useEffect } from 'react'
// import { usePathname, useSearchParams } from 'next/navigation'
 
// export function NavigationEvents() {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     const url = `${pathname}?${searchParams}`
//     console.log("USE EFFECT navigation URL: ", url)
//     // Use the current URL
//     // ...
//     if (pathname === '/created_at') {
//       console.log("CREATED AT PAGE")
//     }
//     if (pathname === '/title') {
//         console.log("TITLE PAGE")
//     }
//     if (pathname === '/rating') {
//     console.log("RATING PAGE")
//     }

//   }, [pathname, searchParams])
 
//   return null 
// }
