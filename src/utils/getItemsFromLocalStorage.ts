export const getItemsFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('savedItems') || '')
    } catch (error) {
    }
}