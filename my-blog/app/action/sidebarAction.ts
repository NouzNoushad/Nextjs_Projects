import React, { useEffect, useState } from 'react'

export const SidebarAction = () => {

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
        setSidebarStyle({ position: "fixed", bottom: "100px" });

        const handleScroll = () => {
            const footer = document.getElementById("footer");
            const sidebar = document.getElementById("sidebar");

            if (!footer || !sidebar) return;

            const footerTop = footer.getBoundingClientRect().top + window.scrollY;
            const sidebarHeight = sidebar.offsetHeight;

            const viewportBottom = window.scrollY + window.innerHeight;

            if (viewportBottom >= footerTop) {
                const calc = footerTop - (sidebarHeight + 100);
                setSidebarStyle({
                    position: "absolute",
                    top: calc,
                });
            } else {
                setSidebarStyle({ position: "fixed", bottom: "100px" });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFullScreen]);

    return {
        isFullScreen,
        sidebarStyle,
    }
}