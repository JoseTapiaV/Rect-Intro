// Donde van las propiedades de cada entidad
export interface Pet {
    id: string,
    name: string,
    age: number,
    bornDate: Date,
    country?: string
}