import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>About Me</h1>
        <p>This page is coming soon!</p>
        <Link href="/" style={{ color: '#9B177E', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}