import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';


@Controller('checklist')
export class ChecklistController {
  constructor(private readonly checklistService: ChecklistService) {}
  
  // Rota: POST /checklist - Cria um novo checklist
  @Post()
  create(@Body() createChecklistDto: CreateChecklistDto) {
    return this.checklistService.create(createChecklistDto);
  }

  // Rota: GET /checklist - Retorna todos os checklists
  @Get()
  findAll() {
    return this.checklistService.findAll();
  }

  // Rota: GET /checklist/:id - Retorna um único checklist com base no ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checklistService.findOne(+id);
  }

  // Rota: PATCH /checklist/:id - Atualiza um checklist existente com base no ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChecklistDto: UpdateChecklistDto) {
    return this.checklistService.update(+id, updateChecklistDto);
  }

  // Rota: DELETE /checklist/:id - Remove um checklist com base no ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checklistService.remove(+id);
  }
}
