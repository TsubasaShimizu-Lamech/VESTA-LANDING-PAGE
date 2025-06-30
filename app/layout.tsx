import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VESTA - M&R Therapy | ラジオ波深部熱筋膜リリース施術',
  description: 'VESTAは温熱筋膜リリースに特化した機器です。MFRテクニックとRET RF深部加温を同時に適用するM&R Therapyで、短時間でより強力な癒し効果を実現します。',
  generator: 'v0.dev',
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
