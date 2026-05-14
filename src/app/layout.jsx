import './../styles/tailwind.css'

export const metadata = {
  title: 'TalkinClaw - Voice Assistant for Self-Hosted AI',
  description: 'Open-source Android voice assistant for self-hosted LLM agents. On-device speech recognition, private by design.',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-zinc-900 text-zinc-100 antialiased">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
