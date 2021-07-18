export default function (context) {
    if(!context.store.getters.isAuthenticated) {
        context.redirect('/admin/auth');
        console.log('[Middleware] Just auth');
    }
}