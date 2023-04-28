import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import MyLayout from '@/components/MyLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}
