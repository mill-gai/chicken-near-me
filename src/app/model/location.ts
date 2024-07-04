import { Items } from './dropdown-item';

export interface Location extends Items {
    country: string;
    city: string;
    lat: number;
    lng: number;
}
