import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <div className="text-center">
                <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
                <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
