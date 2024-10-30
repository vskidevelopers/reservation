export default function capitalize(str) {
    if (typeof str !== "string") return ""; // Return an empty string if input is not a string
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}