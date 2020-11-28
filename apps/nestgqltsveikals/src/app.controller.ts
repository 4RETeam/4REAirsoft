import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productsService: ProductsService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Get()
  @Render('Index')
  public async index() {
    // initial props
    return {
      title: 'Next with Nest',
      specialProducts: await this.productsService.findSpecialOffers(),
      categories: await this.categoriesService.findAll(),
      nonSpecialproducts: await this.productsService.findNonSpecialOffers(),
      newProducts: await this.productsService.findNewProducts(),
    };
  }

  @Get('catalogue/')
  @Render('Index')
  public shop() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }

  @Get('catalogue/')
  @Render('Index')
  public userDash() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }

  @Get('product/:id')
  @Render('Index')
  public product() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }

  @Get('admin')
  @Render('Admin')
  public admin() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }
  @Get('admin/products')
  @Render('AdminProducts')
  public async adminProducts() {
    const categories = await this.categoriesService.findAll();
    const products = [];
    categories.forEach(( element ) =>  {
      // console.log(element);
      const productLine = this.categoriesService.findAllChildProducts(element.name);
      products.push(productLine);
    });
    // initial props
    return {
      title: 'Next with Nest',
      categories,
      products
    };
  }
  @Get('admin/categories')
  @Render('AdminCategories')
  public async adminCategories() {
    // initial props
    const categories = await this.categoriesService.findAll();

    return {
      title: 'Next with Nest',
      categories,

    };
  }
  @Get('admin/clients')
  @Render('Admin')
  public adminclients() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }
  @Get('admin/dashboard')
  @Render('Admin')
  public admindashboard() {
    // initial props
    return {
      title: 'Next with Nest',
    };
  }
}
