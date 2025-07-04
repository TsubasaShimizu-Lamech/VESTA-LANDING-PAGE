import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vesta.lamech.jp'),
  title: 'VESTA(ベスタ) - M&R Therapy | ラジオ波深部熱筋膜リリース施術',
  description: 'VESTA(ベスタ)は温熱筋膜リリースに特化した機器です。MFRテクニックとRET RF深部加温を同時に適用するM&R Therapyで、短時間でより強力な癒し効果を実現します。',
  generator: 'v0.dev',
  keywords: [
    'VESTA', 'ベスタ', 'M&R Therapy', 
    'ラジオ波', '深部熱', '筋膜リリース', 'かっさ', '温熱療法', '温熱',
    '施術', 'RET RF', 'MFR', 'Myofascial Release',
    'かっさプローブ', '筋膜リリース機器', '温熱施術機器',
    'リハビリ', '治療', 'セラピー', '痛み軽減', '可動域改善'
  ],
  authors: [{ name: 'VESTA(ベスタ)' }],
  creator: 'VESTA(ベスタ)',
  publisher: 'VESTA(ベスタ)',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  openGraph: {
    title: 'VESTA(ベスタ) - M&R Therapy | ラジオ波深部熱筋膜リリース施術',
    description: 'VESTA(ベスタ)は温熱筋膜リリースに特化した機器です。MFRテクニックとRET RF深部加温を同時に適用するM&R Therapyで、短時間でより強力な癒し効果を実現します。',
    siteName: 'VESTA(ベスタ)',
    images: [
      {
        url: '/images/vesta-logo.png',
        width: 1200,
        height: 630,
        alt: 'VESTA(ベスタ) Logo',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VESTA(ベスタ) - M&R Therapy | ラジオ波深部熱筋膜リリース施術',
    description: 'VESTA(ベスタ)は温熱筋膜リリースに特化した機器です。MFRテクニックとRET RF深部加温を同時に適用するM&R Therapyで、短時間でより強力な癒し効果を実現します。',
    images: ['/images/vesta-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Google Search Consoleで取得したコードを設定してください
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
