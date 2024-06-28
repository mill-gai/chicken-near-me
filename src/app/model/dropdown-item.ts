export interface Items {
    id: number,
    value: string
}

export interface LocationItems extends Items {
    country: string,
    city: string
}
