import { MetaDefinition } from '@angular/platform-browser';

export type PageMetaTagData = {
    title: string;
    description: string;
    image: string;
    url: string;
    keywords: string;
    author?: string;
    date?: string;
    type?: string;
};

//**************************************************
//* Page-specific meta tags
//**************************************************

//--------------------------------------------------
export function createPageMetaTagsFromConfig(
    config: PageMetaTagData,
): MetaDefinition[] {
    // Default values for optional properties
    const type = config.type ?? 'website';
    const author = config.author ?? 'Nathan Nobert';
    const date = config.date ?? new Date().toISOString();

    return [
        { name: 'title', property: 'title', content: config.title },
        { name: 'og:title', property: 'og:title', content: config.title },
        { name: 'fb:title', property: 'fb:title', content: config.title },
        {
            name: 'twitter:title',
            property: 'twitter:title',
            content: config.title,
        },
        //--------------------------------------------------
        {
            name: 'description',
            property: 'description',
            content: config.description,
        },
        {
            name: 'og:description',
            property: 'og:description',
            content: config.description,
        },
        {
            name: 'fb:description',
            property: 'fb:description',
            content: config.description,
        },
        {
            name: 'twitter:description',
            property: 'twitter:description',
            content: config.description,
        },
        //--------------------------------------------------
        {
            name: 'og:image',
            property: 'og:image',
            content: `https://nathannobert.com${config.image}`,
        },
        {
            name: 'twitter:image',
            property: 'twitter:image',
            content: `https://nathannobert.com${config.image}`,
        },
        {
            name: 'fb:image',
            property: 'fb:image',
            content: `https://nathannobert.com${config.image}`,
        },
        //--------------------------------------------------
        {
            name: 'og:url',
            property: 'og:url',
            content: `https://nathannobert.com${config.url}`,
        },
        {
            name: 'keywords',
            property: 'keywords',
            content: config.keywords,
        },
        { name: 'og:type', property: 'og:type', content: type },
        { name: 'author', property: 'author', content: author },
        { name: 'date', property: 'date', content: date },
        ...BaseMetaTags,
    ];
}

//--------------------------------------------------
export const BaseMetaTags: MetaDefinition[] = [
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow', property: 'og:robots' },
    {
        name: 'og:image:alt',
        content: 'Nathan Nobert',
        property: 'og:image:alt',
    },
    //--------------------------------------------------
    {
        name: 'twitter:card',
        content: 'summary_large_image',
        property: 'twitter:card',
    },
    {
        name: 'twitter:image:alt',
        content: 'Nathan Nobert',
        property: 'twitter:image:alt',
    },
    {
        name: 'twitter:site',
        content: '@nathannobert',
        property: 'twitter:site',
    },
    {
        name: 'twitter:creator',
        content: '@nathannobert',
        property: 'twitter:creator',
    },
    {
        name: 'fb:site_name',
        property: 'fb:site_name',
        content: 'Nathan Nobert',
    },
    { name: 'fb:card', property: 'fb:card', content: 'summary_large_image' },
    { name: 'fb:app_id', property: 'fb:app_id', content: 'NathanNobert' },
    {
        name: 'fb:image:alt',
        property: 'fb:image:alt',
        content: 'Nathan Nobert',
    },
];
