import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  // Rota: POST /estoque - Adiciona um novo item ao estoque
  @Post()
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  // Rota: GET /estoque - Retorna todos os itens do estoque
  @Get()
  findAll() {
    return this.estoqueService.findAll();
  }

  // Rota: GET /estoque/:id - Retorna um único item do estoque com base no ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(+id);
  }

  // Rota: PATCH /estoque/:id - Atualiza um item do estoque existente com base no ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueService.update(+id, updateEstoqueDto);
  }

  // Rota: DELETE /estoque/:id - Remove um item do estoque com base no ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoqueService.remove(+id);
  }
}
