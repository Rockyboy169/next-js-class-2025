import Link from "next/link";

export default function MenuBar() {
    return (
        <nav className="fixed flex bottom-0 left-0 right-0 p-[16px] px-[100px] bg-gray-100 justify-between shadow-lg [&>a]:hover:opacity-50">
            <Link href="/"><img className="w-[24px] h-[24px]"
       src="/home.png" /></Link>
            <Link href="about"><img className="w-[24px] h-[24px]"
       src="/about.png" /></Link>
            <Link href="contact"><img className="w-[24px] h-[24px]"
       src="/contact.png" /></Link>
        </nav>
    )
}