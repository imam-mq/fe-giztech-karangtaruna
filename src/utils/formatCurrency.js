export function formatCurrency(value) {
    if (value === null || value === undefined || value === "") return "-";

    const number = typeof value === "string" ? parseFloat(value): value;
    if (isNaN(number)) return "-";
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number);

}