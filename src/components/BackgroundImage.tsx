import Image from 'next/image'

export default function BackgroundImage() {
  return (
    <Image
      src="/images/bg_image.png"
      alt="Cardigan"
      fill
      className="background-image"
      style={{ objectFit: 'cover' }}
      priority
    />
  )
}