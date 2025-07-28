import Link from 'next/link'

export default function Projects() {
  return (
    <div className="container">
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>My Projects</h1>
        <p>My projects will be showcased here soon!</p>
        <Link href="/" style={{ color: '#9B177E', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}