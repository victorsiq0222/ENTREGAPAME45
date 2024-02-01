import { Injectable } from '@nestjs/common';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChecklistService {

  constructor(private readonly prisma : PrismaService){}

  create(createChecklistDto: CreateChecklistDto) {

    return this.prisma.checklist.create({ data :createChecklistDto});
    
  }

  findAll() {
    return this.prisma.checklist.findMany();
  }

  findOne(id: number) {
    return this.prisma.checklist.findUnique({where: {id}});
  }

  update(id: number, updateChecklistDto: UpdateChecklistDto) {
    return this.prisma.checklist.update({where:{id:id},data:updateChecklistDto});
  }

  remove(id: number) {
      this.prisma.checklist.delete({where:{id}});
      return " deletado com sucesso "
  }
}





