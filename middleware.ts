import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/' ]);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware( async (auth, req) => {
    // if ( !isPublicRoute(req) ) auth.protect();
    console.log("CLERK MIDDLEWARE, ", req.url);
    await auth.protect();
});

export const config = {
    matcher: [
         '/((?!.*|_next).*)', 
         '/', 
         '/(api|trpc)(.*)'
    ]     
}