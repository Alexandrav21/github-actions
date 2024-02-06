export function hasDescription(description:string): void {
    if(!description) {
        throw new Error ('The PR must have a description!')
    }
}