import './globals.css';
export const metadata = {
  title: 'Simple Next.js App',
  description: 'A minimal Next.js application scaffolded for quick startup.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
