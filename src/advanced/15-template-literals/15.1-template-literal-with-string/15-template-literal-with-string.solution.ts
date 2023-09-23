/*
 * TODO: Declare a route type that will check a string against a route formula and not allow others to be passed.
 * Examples of correct routes: '/products', '/settings', etc.
 */
type Route = `/${string}`;

const goToRoute = (route: Route) => { /* Some action... */ };


/* Test the result */
// Should succeed:
goToRoute('/users');
goToRoute('/');
goToRoute('/admin/users');

// Should give an error:
// @ts-expect-error
goToRoute('users/1');
// @ts-expect-error
goToRoute('http://facebook.com');
