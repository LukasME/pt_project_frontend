export class Expedition {
    id: number;
    slug: string;
    title: string;
    description: string;
    states: string[];
    dateFrom: Date;
    dateTo: Date;
    previewPhotoUrls: string[];
    photoUrls: string[];
    contentHTML: string;
}