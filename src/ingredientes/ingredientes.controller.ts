import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';


@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  // Rota: POST /ingredientes - Adiciona um novo ingrediente
  @Post()
  create(@Body() createIngredientesDto: CreateIngredienteDto) {
    return this.ingredientesService.create(createIngredientesDto);
  }

  // Rota: GET /ingredientes - Retorna todos os ingredientes
  @Get()
  findAll() {
    return this.ingredientesService.findAll();
  }

  // Rota: GET /ingredientes/:id - Retorna um único ingrediente com base no ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientesService.findOne(+id);
  }

  // Rota: PATCH /ingredientes/:id - Atualiza um ingrediente existente com base no ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredientesDto: UpdateIngredienteDto) {
    return this.ingredientesService.update(+id, updateIngredientesDto);
  }

  // Rota: DELETE /ingredientes/:id - Remove um ingrediente com base no ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesService.remove(+id);
  }
}
