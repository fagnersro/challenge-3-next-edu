import Image from 'next/image'

interface AvatarProps {
  src: string
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <div className="h-[fit-content] w-[fit-content] rounded-full border-2 border-gray-300 object-cover">
      <Image
        className="rounded-full"
        src={src}
        width={40}
        height={40}
        alt="Avatar"
        quality={100}
        priority
      />
    </div>
  )
}
