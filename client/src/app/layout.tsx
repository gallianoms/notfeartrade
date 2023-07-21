import './globals.css'
import Footer from '@/components/Footer'
import ThemeProvider from '@/lib/ThemeProvider'
import ProgressBar from '@/lib/ProgressBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ProgressBar />
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
