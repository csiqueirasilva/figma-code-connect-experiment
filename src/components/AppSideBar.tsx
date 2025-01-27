import {
    Sidebar2,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    useSidebar,
} from "@/components/ui/sidebar";
import TypographyH3 from "./typography/TypographyH3";
import NotebookRef from "@/NotebookRef";
import { Link, useLocation } from "react-router-dom";
import TypographyLink from "@/components/typography/TypographyLink";

export function AppSidebar() {
    const sidebar = useSidebar();
    const location = useLocation();

    return (
        <Sidebar2 className="p-1">
            <SidebarHeader className="bg-white block">
                <TypographyH3>Índice</TypographyH3>
            </SidebarHeader>
            <SidebarContent className="bg-white flex flex-col!">
                {NotebookRef.map((nb, idx) => {
                    const isActive = decodeURIComponent(location.pathname) === `/${nb.title}`;
                    return (
                        <SidebarGroup className="my-2 cursor-pointer" key={idx} onClick={() => sidebar.setOpenMobile(false)}>
                            <TypographyLink
                                to={`/${nb.title}`}
                                className={`flex! items-center! px-4! py-2! rounded-md! ${
                                    isActive ? "bg-blue-500! text-white!" : "hover:bg-gray-200!"
                                }`}
                            >
                                <div>{nb.title}</div>
                            </TypographyLink>
                        </SidebarGroup>
                    );
                })}
            </SidebarContent>
        </Sidebar2>
    );
}
