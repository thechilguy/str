import {
  Body,
  Controller,
  Post,
  Put,
  Get,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { CreateAuthorDto } from './dto/create.author.dto';
import { AuthorsService } from './authors.service';
import { ReadAuthorDto } from './dto/read.author.dto';
import { GetAuthorParams } from './dto/get.author.params';
import { ReadManyAuthorsQueryDTO } from './dto/read-many.authors.query.dto';
import { ReadManyAuthorsDTO } from './dto/read-mady.authors.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly service: AuthorsService) {}

  @Get()
  getMany(
    @Query() query: ReadManyAuthorsQueryDTO,
  ): Promise<ReadManyAuthorsDTO> {
    return this.service.getMany(query);
  }

  @Get(':authorId')
  getOne(@Param() { authorId }: GetAuthorParams): Promise<ReadAuthorDto> {
    return this.service.getOne(authorId);
  }

  @Post()
  async create(@Body() data: CreateAuthorDto): Promise<ReadAuthorDto> {
    const id = await this.service.create(data);
    return this.service.getOne(id);
  }

  @Put(':authorId')
  async update(
    @Param() { authorId }: GetAuthorParams,
    @Body() data: CreateAuthorDto,
  ): Promise<ReadAuthorDto> {
    await this.service.update(authorId, data);
    return this.service.getOne(authorId);
  }
  @Delete(':authorId')
  delete(@Param() { authorId }: GetAuthorParams): Promise<void> {
    return this.service.delete(authorId);
  }
}
