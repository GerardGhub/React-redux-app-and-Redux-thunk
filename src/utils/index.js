export const toDisplayableDateFormat = (dateString) => {
let date = new Date(dateString);
return `${date.getDate()}
${date.toLocaleDateString("en-US", {
    month: 'short'
})} ${date.getFullYear()} ${date.toLocaleDateString("en-US",{hour:'numeric'})}}
`};