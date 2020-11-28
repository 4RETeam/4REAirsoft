export class CreateCategoryDto {
  name!: string;
  description!: string;
  createdDate!: Date;
  imagePath!: string;
}
export class FindChildrenDto {
  name!: string;
}
