import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Ananya Hi Solutions | Digital Transformation & Web Services',
  description: 'Expert web design, digital marketing, and software development services in Hyderabad.',
  icons: {
    icon: [
      { url: '/assets/front/images/logo/ananya-favicon.ico', type: 'image/x-icon' },
      { url: '/assets/front/images/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/assets/front/images/logo/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} d-flex flex-column min-vh-100`}>
        <Header />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
