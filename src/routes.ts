/**
 * An array of routes that are accessible to the public.
 * These routes are not protected by authentication.
 * @type {string[]}
 */
export const publicRoutes = ['/', '/contact', '/about', '/restaurants'];



/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in user to the internal pages.
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', 
    '/auth/error', 
    '/auth/register',
    '/auth/forgot-password',
    '/auth/reset-password',
    '/auth/verify-email',
];


/**
 * The prefix for the authentication routes.
 * 
 * @type {string}
 */
export const authPrefix = '/api/auth';


/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const defaultRedirectPath = '/internal/dashboard';