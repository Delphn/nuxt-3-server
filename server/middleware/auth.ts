export default defineEventHandler(event => {
    const auth = getCookie(event, 'pokemon-auth')
    const url = getRequestURL(event)
    
    if (auth) {
        // the user is authenticated, keep doing your thing
        return
    } else {
        return sendRedirect(event, '/login', 302)
    }
})