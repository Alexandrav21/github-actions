export function hasTitle(title:string): void {
    if (!title) {
        throw new Error('The PR must have a title!')
    }
}