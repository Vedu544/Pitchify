import { defineField , defineType } from "sanity";


export const connectInvester = defineType({
    name: "connectInvester",
    title: "Connect Invester",
    type: "document",
    fields:[
        defineField({
            name: 'id',
            type: 'number'
        }),
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'category',
            type: 'string'
        }),
        defineField({
            name: 'companyowned',
            type: 'string'
        }),
        defineField({
            name: 'companyinvested',
            type: 'string'
        }),
        defineField({
            name: 'bio',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name: 'linkedinURL',
            type: 'url'
        })

    ]
})