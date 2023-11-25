export default defineEventHandler(event => {
    return sendRedirect(event, 'https://delphin.dev', 302)
})