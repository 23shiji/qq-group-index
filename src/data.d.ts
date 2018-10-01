export interface GroupInfo{
    name:   string
    number: number
    url:    string
    category:   string
    tags:       string[]
    description?: string
}
export interface Category{
    name:   string
    path:   string
    groups: number[]
    children:   Category[]
}
export interface TagInfo{
    name: string
    categories: string[]
}