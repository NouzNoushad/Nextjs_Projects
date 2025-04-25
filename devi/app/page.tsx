import ScrollUpButton from "@/components/scrollUpButton";

export default function Home() {
    return (
        <div>
            {/* Scroll Up Button */}
            <ScrollUpButton />
            {/* Header */}
            <header className="h-[">
                <a href="#">
                    <h1>DEWI</h1>
                </a>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Dropdown</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <button>
                    Get Started
                </button>
            </header>
        </div>
    );
}
