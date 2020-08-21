/* tslint:disable:max-line-length */
import { TreoNavigationItem } from '@treo/components/navigation';

export const defaultNavigation: TreoNavigationItem[] = [
    {
        id: 'pages',
        title: 'Dashboard',
        type: 'basic',
        icon: 'apps',
        link: '/dashboard'
    },
    {
        id: 'pages',
        title: 'Master Records',
        subtitle: 'All Master Records',
        type: 'group',
        children: [
            {
                id: 'pages.cropmaster',
                title: 'Crop Master Records',
                type: 'collapsable',
                icon: 'heroicons_outline:clipboard-list',
                children: [
                    {
                        id: 'pages.crop.activity',
                        title: 'Crop Activity Master',
                        type: 'basic',
                        link: '/crop/activity'
                    },
                    {
                        id: 'pages.crop.category',
                        title: 'Crop Category Master',
                        type: 'basic',
                        link: '/crop/category'
                    },{
                        id: 'pages.crop.family',
                        title: 'Crop Family Master',
                        type: 'basic',
                        link: '/crop/family'
                    },
                    {
                        id: 'pages.crop.crop',
                        title: 'Crop Master',
                        type: 'basic',
                        link: '/crop/crop'
                    },
                    {
                        id: 'pages.crop.stages',
                        title: 'Crop Stages Master',
                        type: 'basic',
                        link: '/crop/stages'
                    },
                    {
                        id: 'pages.crop.disease',
                        title: 'Disease Master',
                        type: 'basic',
                        link: '/crop/disease'
                    }
                ]
            },
            {
                id: 'pages.masterrecords',
                title: 'Master Records',
                type: 'collapsable',
                icon: 'heroicons_outline:clipboard-list',
                children: [
                    {
                        id: 'pages.activitymaster',
                        title: 'Activities Master',
                        type: 'basic',
                        link: '/activitymaster'
                    },
                    {
                        id: 'pages.activitymaster',
                        title: 'Irrigation Master',
                        type: 'basic',
                        link: '/irrigationmaster'
                    },{
                        id: 'pages.activitymaster',
                        title: 'Land Measurement Master',
                        type: 'basic',
                        link: '/landmeasurement'
                    },
                    {
                        id: 'pages.activitymaster',
                        title: 'Location Master',
                        type: 'basic',
                        link: '/locationmaster'
                    },
                    {
                        id: 'pages.materialmaster',
                        title: 'Material Master',
                        type: 'basic',
                        link: '/materialmaster'
                    },
                    {
                        id: 'pages.mulchmaster',
                        title: 'Mulch Master',
                        type: 'basic',
                        link: '/mulchmaster'
                    },
                    {
                        id: 'pages.plantationmaster',
                        title: 'Plantation Master',
                        type: 'basic',
                        link: '/plantationmaster'
                    },
                    {
                        id: 'pages.preparationmaster',
                        title: 'Preparation Master',
                        type: 'basic',
                        link: '/preparationmaster'
                    },
                    {
                        id: 'pages.qamaster',
                        title: 'QA Master',
                        type: 'basic',
                        link: '/qamaster'
                    },
                    {
                        id: 'pages.seasonmaster',
                        title: 'Season Master',
                        type: 'basic',
                        link: '/seasonmaster'
                    },
                    {
                        id: 'pages.soilmaster',
                        title: 'Soil Master',
                        type: 'basic',
                        link: '/soilmaster'
                    },
                    {
                        id: 'pages.unitmeasurementmaster',
                        title: 'Unit Measurement Master',
                        type: 'basic',
                        link: '/unitmeasurementmaster'
                    }
                ]
            }
           
        ]
    }
];
export const compactNavigation: TreoNavigationItem[] = [
    {
        id: 'starter',
        title: 'Starter',
        type: 'aside',
        icon: 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: TreoNavigationItem[] = [
    {
        id: 'starter.example',
        title: 'Example component',
        type: 'basic',
        icon: 'heroicons:chart-pie',

    },
    {
        id: 'starter.dummy.1',
        title: 'Dummy menu item #1',
        icon: 'heroicons:calendar',
        type: 'basic'
    },
    {
        id: 'starter.dummy.2',
        title: 'Dummy menu item #1',
        icon: 'heroicons:user-group',
        type: 'basic'
    }
];
export const horizontalNavigation: TreoNavigationItem[] = [
    {
        id: 'starter',
        title: 'Starter',
        type: 'group',
        icon: 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
