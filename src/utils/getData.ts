export const getData = () => {
    const Data = new Date()
    const Hour = Data.getHours()
    const Minutes = Data.getMinutes();
    return Hour + ':' + Minutes
}