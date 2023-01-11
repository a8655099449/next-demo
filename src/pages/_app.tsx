import AppLayouts from '@/components/layouts/AppLayouts'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout
  if (getLayout) {
    return getLayout(<Component {...pageProps} />)
  }

  return <AppLayouts>
    <Component {...pageProps} />
  </AppLayouts>

}