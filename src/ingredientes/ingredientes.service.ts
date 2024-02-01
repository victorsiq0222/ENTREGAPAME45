import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstoqueService {

  constructor(private readonly prisma : PrismaService){}

  create(createIngredienteDto: CreateIngredienteDto) {

    return this.prisma.ingrediente.create({ data :createIngredienteDto});
    
  }

  findAll() {
    return this.prisma.ingrediente.findMany();
  }

  findOne(id: number) {
    return this.prisma.ingrediente.findUnique({where: {id}});
  }

  update(id: number , updateIngredienteDto : UpdateIngredienteDto) {
    return this.prisma.ingrediente.update({where:{id:id},data:updateIngredienteDto});
  }

  remove(id: number) {
      this.prisma.ingrediente.delete({where:{id}});
      return " deletado com sucesso "
  }
}

