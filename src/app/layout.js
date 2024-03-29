import Head from "./components/Head"
import Navbar from "./components/Navbar"
import "./globals.css"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
     <body>
       <Navbar />
       <Head/>
       {children}
     </body>
    </html>
  )
}
