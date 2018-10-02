export interface GroupInfoBase{
    name:   string
    category:   string
    tags:       string[]
}
export interface GroupInfo extends GroupInfoBase{
    number: number
    url:    string
    description?: string
}
export interface GroupIndex extends GroupInfoBase{
    src: string
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