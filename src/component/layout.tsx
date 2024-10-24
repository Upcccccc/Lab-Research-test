import React from "react";

type LayoutProps = {
    //child element: any component that can be rendered
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="bg-dark text-white p-3">
                <h1 className="h4 mb-0">File management System</h1>
            </header>
            <main className="flex-grow-1">
                {children}
            </main>
            <footer className="bg-dark text-white p-2 text-center">
                © 2024 Yuchen Liu Test
            </footer>
        </div>
    );
}

export default Layout;
