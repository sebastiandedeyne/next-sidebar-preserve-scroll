import Link from "next/link";

export default function Index() {
    return (
        <div>
            Hello, world!
            <Link href="/page-2">
                <a>Page 2</a>
            </Link>
        </div>
    );
}
