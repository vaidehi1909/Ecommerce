import * as React from 'react';
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ReduxProvider from "@/components/ReduxProvider";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import theme from "@/styles/theme";

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "Generated with Nextjs 14 and Material UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0 }}
      >
        <ReduxProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
