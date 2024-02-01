import { Injectable } from '@nestjs/common';
import { CreateProducaoDto } from './dto/create-producao.dto';
import { UpdateProducaoDto } from './dto/update-producao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstoqueService {

  constructor(private readonly prisma : PrismaService){}

  create(createProducaoDto: CreateProducaoDto) {

    return this.prisma.producao.create({ data :createProducaoDto});
    
  }

  findAll() {
    return this.prisma.producao.findMany();
  }

  findOne(id: number) {
    return this.prisma.producao.findUnique({where: {id}});
  }

  update(id: number , updateProducaoDto : UpdateProducaoDto) {
    return this.prisma.producao.update({where:{id:id},data:updateProducaoDto});
  }

  remove(id: number) {
      this.prisma.producao.delete({where:{id}});
      return " deletado com sucesso "
  }
}
