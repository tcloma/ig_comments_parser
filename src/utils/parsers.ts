let userMap = new Map<string, number>()

export function clean(comments: string): string[] {
    return comments.split('\n').filter(item => item !== '' && !item.endsWith('Reply'))
}

function parse(arg: string) {
    let currentUser: string
    for (const item of arg) {
        if (item.endsWith('picture')) {
            currentUser = item.substring(0, item.indexOf("'"))
        } else {
            if (item.includes('@')) {
                const tags = item.split(' ')
                const filtered = tags.filter(tag => tag.includes('@'))
                if (userMap.has(currentUser)) {
                    userMap.set(currentUser, userMap.get(currentUser) + filtered.length)
                } else {
                    userMap.set(currentUser, filtered.length)
                }
            }
        }
    }
    console.log(userMap)
}