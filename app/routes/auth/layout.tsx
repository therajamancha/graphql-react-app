import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { GalleryVerticalEnd } from "lucide-react";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("access_token") || "";
    if (user) navigate("/admin");
  }, []);

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
