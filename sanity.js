// import { useClient } from '@sanity/client';
// import imageUrlBuilder from "@sanity/image-url";

// const client = useClient({
//     projectId:'p57ljfhb',
//     dataset: "production",
//     useCdn: true,
//     apiVersion: '2021-10-21'
    
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
// //sanity cors add http://localhost:3333
// export default client;


import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId:'p57ljfhb',
        dataset: "production",
        useCdn: true,
        apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)
export default client

// import myConfiguredSanityClient from './sanityClient'
// import imageUrlBuilder from "@sanity/image-url";

// const client = myConfiguredSanityClient({
//     projectId:'p57ljfhb',
//     dataset: "production",
//     useCdn: true,
//     apiVersion: '2021-10-21'
    
// })

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source)
// //sanity cors add http://localhost:3333
// export default client;















