import { useEffect, useState } from "react";

export const SidebarAction = () => {
    const bottomHeight: number = 50

    // sidebar actions
    const [sidebarStyle, setSidebarStyle] = useState<React.CSSProperties>({
        position: "static",
    });
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsFullScreen(window.innerWidth >= 1024);
        };

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    useEffect(() => {
        if (!isFullScreen) {
            setSidebarStyle({ position: "static" });
            return;
        }
        setSidebarStyle({ position: "fixed", bottom: `${bottomHeight}px` });

        const handleScroll = () => {
            const footer = document.getElementById("footer");
            const sidebar = document.getElementById("sidebar");

            if (!footer || !sidebar) return;

            const footerTop = footer.getBoundingClientRect().top + window.scrollY;
            const sidebarHeight = sidebar.offsetHeight;

            const viewportBottom = window.scrollY + window.innerHeight;

            if (viewportBottom >= footerTop) {
                const calc = footerTop - (sidebarHeight + bottomHeight);
                setSidebarStyle({
                    position: "absolute",
                    top: calc,
                });
            } else {
                setSidebarStyle({ position: "fixed", bottom: `${bottomHeight}px` });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFullScreen]);

    return {
        sidebarStyle,
        isFullScreen,
    }
}