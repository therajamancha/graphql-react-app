"use client";

import React from "react";
import { AppSidebar } from "~/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { Outlet, useLocation, Link } from "react-router";
import AuthProvider from "~/provider/AuthProvider";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API!,
  cache: new InMemoryCache(),
});

// Helper function to format path segments
const formatPathSegment = (segment: string): string => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function Page() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
              <div className="flex items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    {pathSegments.map((segment, index) => {
                      const isLast = index === pathSegments.length - 1;
                      const path = `/${pathSegments
                        .slice(0, index + 1)
                        .join("/")}`;
                      const formattedSegment = formatPathSegment(segment);

                      return (
                        <React.Fragment key={path}>
                          <BreadcrumbSeparator className="hidden md:block" />
                          <BreadcrumbItem>
                            {isLast ? (
                              <BreadcrumbPage>
                                {formattedSegment === "Admin"
                                  ? "Dashboard"
                                  : formattedSegment}
                              </BreadcrumbPage>
                            ) : (
                              <BreadcrumbLink asChild>
                                <Link to={path}>
                                  {formattedSegment === "Admin"
                                    ? "Dashboard"
                                    : formattedSegment}
                                </Link>
                              </BreadcrumbLink>
                            )}
                          </BreadcrumbItem>
                        </React.Fragment>
                      );
                    })}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <Outlet />
          </SidebarInset>
        </SidebarProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}
