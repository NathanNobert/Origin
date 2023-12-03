import {
    createPageMetaTagsFromConfig,
    PageMetaTagData,
} from './meta-tag-utils';
import { MetaDefinition } from '@angular/platform-browser';

export interface MetaTagConfig {
    [key: string]: MetaDefinition[];
}

export type PageMetaTagConfigList = Record<string, PageMetaTagData>;

//**************************************************
//* Landing pages meta tag config
//**************************************************

//--------------------------------------------------
const landingPageMetaTagConfigList: PageMetaTagConfigList = {
    landingPage: {
        title: 'Hello | Nathan Nobert',
        description:
            'A bio about Nathan Nobert, a software engineer and entrepreneur.',
        image: '/assets/images/NathanNobert.jpg',
        url: '',
        keywords:
            'Nathan Nobert, Nathan, Nobert, Bio, Software Engineer, Entrepreneur, Prosperse',
    },
};

//**************************************************
//* Meta tag data
//**************************************************
export enum MetaTagPage {
    LandingPage = 'landingPage',
}

//--------------------------------------------------
export const MetaTagConfig: MetaTagConfig = {
    landingPage: [
        ...createPageMetaTagsFromConfig(
            landingPageMetaTagConfigList[MetaTagPage.LandingPage],
        ),
    ],
};
