import Link from "next/link"

interface CTAButtonProps {
  text: string
  href: string
}

export default function CTAButton({ text, href }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--beige)] 
      transition-colors hover:bg-[var(--beige)] hover:text-[var(--primary)]/90 border-1 border-[var(--primary)]"
    >
      {text}
    </Link>
  )
}
