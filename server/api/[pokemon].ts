export default defineEventHandler(async (event) => {
    try {
        const { pokemon } = event.context.params
        const response = await $fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
        const idealResponse = {
            id: response.id,
            name: response.name,
            sprite: response.sprites.front_default
        }
    
        return idealResponse
    } catch (error) {
        throw createError({
            status: 404,
            message: 'Pokemon not found'
        })
    }
})