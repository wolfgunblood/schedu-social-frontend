import { Calendar, Cog, Home, Inbox, PlusCircle, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { NavUser } from "./nav-user"

// Menu items.
// Menu items.
const applicationItems = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
]

const configurationItems = [
    {
        title: "Accounts",
        url: "/accounts",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Cog,
    },
]

export function AppSidebar() {

    const data = {
        user: {
            name: "john doe",
            email: "johndoe@email.com",
            avatar: "hello"
        }
    }
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="flex flex-col p-4 group-data-[collapsible=icon]:hidden">
                <h1 className="mb-4 text-2xl font-bold text-primary">Schedu</h1>
                <Button className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Post
                </Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {applicationItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className="mr-2 h-4 w-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Configuration</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {configurationItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className="mr-2 h-4 w-4" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
