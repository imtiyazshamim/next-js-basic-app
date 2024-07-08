export async function GET(){
    return  Response.json([
        {title: 'Nokie'},
        {title: 'shamim'},
    ])
}

export async function Post(){
    return  Response.json([
        {title: 'Shamim'},
        {title: 'Imtiyaz'},
    ])
}