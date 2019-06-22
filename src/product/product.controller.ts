import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from 'express';

@Controller('products')
export class ProductController {
  @Get()
  findAll(): any {
    return {
      data: [],
    };
  }
  
  @Post()
  create(@Req() request: Request): any {
    return {};
  }
}