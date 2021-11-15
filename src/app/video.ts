
import { ECategory } from "./ecategory";
 
export interface Video {
    id: number;
  title: string;
  imagePath: string;
  category: ECategory;
  dateAdded: Date;
  production: string;
  amount: number;
  description: string;
}
