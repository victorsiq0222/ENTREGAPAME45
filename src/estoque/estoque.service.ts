import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstoqueService {

  constructor(private readonly prisma : PrismaService){}

  create(createEstoqueDto: CreateEstoqueDto) {

    return this.prisma.estoque.create({ data :createEstoqueDto});
    
  }

  findAll() {
    return this.prisma.estoque.findMany();
  }

  findOne(id: number) {
    return this.prisma.estoque.findUnique({where: {id}});
  }

  update(id: number , updateEstoqueDto : UpdateEstoqueDto) {
    return this.prisma.estoque.update({where:{id:id},data:updateEstoqueDto});
  }

  remove(id: number) {
      this.prisma.estoque.delete({where:{id}});
      return " deletado com sucesso "
  }
}
