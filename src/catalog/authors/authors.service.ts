import { Injectable, NotImplementedException } from '@nestjs/common';
import { ReadManyAuthorsQueryDTO } from './dto/read-many.authors.query.dto';
import { ReadManyAuthorsDTO } from './dto/read-mady.authors.dto';
import { CreateAuthorDto } from './dto/create.author.dto';
import { ReadAuthorDto } from './dto/read.author.dto';

@Injectable()
export class AuthorsService {
  getMany(query: ReadManyAuthorsQueryDTO): Promise<ReadManyAuthorsDTO> {
    throw new NotImplementedException(
      `Method not implemented.${JSON.stringify(query)}`,
    );
  }

  getOne(authorId: string): Promise<ReadAuthorDto> {
    throw new NotImplementedException(`Method not implemented.${authorId}`);
  }

  create(data: CreateAuthorDto): Promise<string> {
    throw new NotImplementedException(
      `Method not impemented.${JSON.stringify(data)}`,
    );
  }

  update(authorId: string, data: CreateAuthorDto): Promise<void> {
    console.log(data);
    throw new NotImplementedException(`Method not implemented.${authorId}`);
  }

  delete(authorId: string): Promise<void> {
    throw new NotImplementedException(`Method not implemented.${authorId}`);
  }
}
