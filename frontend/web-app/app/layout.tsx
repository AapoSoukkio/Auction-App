import './globals.css'
import NavBar from './nav/NavBar'
import ToasterProvider from './providers/ToasterProvider'

export const metadata = {
  title: 'Auction',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <ToasterProvider />
        <NavBar/>
        <main className='container mx-auto px-5 pt-10'>
          {children}
        </main>
      </body>
    </html>
  )
}
