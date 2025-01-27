import NotebookPage from "@/components/NotebookPage";
import Waitlist from "@/components/sds/Waitlist";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import NotebookRef from "@/NotebookRef";
import React, { useEffect, useMemo, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

export default function MainComponent() {
    const { width: sideBarWidth, isMobile } = useSidebar();

    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, [location.pathname]); 

    const notebookRoutes = useMemo(
        () =>
            NotebookRef.map((notebook, idx) => (
                <Route
                    key={idx}
                    path={`/${notebook.title}`}
                    element={
                        <React.Suspense fallback={<div>Carregando...</div>}>
                            <NotebookPage title={notebook.title} Component={React.lazy(notebook.file)} />
                        </React.Suspense>
                    }
                />
            )),
        [NotebookRef]
    );

    return (
        <main className="w-full">
            {
                isMobile &&
                <>
                    <SidebarTrigger className="ml-2! mt-2!" />
                </>
            }
            <div id="parentroutes" style={{ marginLeft: 5 + sideBarWidth, marginRight: 5 }} className="max-md:pt-1 pt-3">
                <Routes>
                    {notebookRoutes}
                    <Route
                        path="/waitlist"
                        element={<Waitlist />}
                    />
                    <Route
                        path="/"
                        element={
                            <>
                            {
                                NotebookRef.length > 0 ?
                                <Navigate to={`/${NotebookRef[0].title}`} replace /> :
                                <div className="text-center text-gray-500">
                                    Escolha um artigo na sidebar
                                </div>
                            }
                            </>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <div className="text-center text-red-500">
                                404 - Page not found
                            </div>
                        }
                    />
                </Routes>
            </div>
        </main>
    );
}
