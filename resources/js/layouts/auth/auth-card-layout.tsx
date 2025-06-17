import AppLogoIcon from '@/components/app-logo-icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-md flex-col gap-6">

                <div className="flex flex-col gap-6">
                    <Card className="rounded-xl">
                        <Link href={route('home')} className="flex items-center gap-2 self-center font-medium">
                            <div className="flex w-40 items-center justify-center">
                                <AppLogoIcon />
                            </div>
                        </Link>
                        {title || description && (
                            <CardHeader className="px-10 pb-0 text-center">
                                <CardTitle className="text-xl">{title}</CardTitle>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>)}
                        <CardContent className="px-10">{children}</CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
