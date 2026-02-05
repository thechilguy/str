import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create.author';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly service: AuthorsService) {}
  getMany() {}

  getOne() {}
  @Post()
  create(@Body() data: CreateAuthorDto) {
    console.log(data);
  }

  update() {}

  delete() {}
}
