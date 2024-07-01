export interface ImageInfo {
    title: string;
    description: string;
    country: string;
    city: string;
    fileName?: string;
    fileUrl?: string;
}

export type Image = {
    title: string;
    description: string;
    fileName: string;
};

export type ImageByLocation = {
    country: string;
    cities: {
        city: string;
        images: Image[];
    }[];
};
