import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  // Rota: POST /funcionario - Cria um novo funcionário
  @Post()
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }

  // Rota: GET /funcionario - Retorna todos os funcionários
  @Get()
  findAll() {
    return this.funcionarioService.findAll();
  }

  // Rota: GET /funcionario/:id - Retorna um único funcionário com base no ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcionarioService.findOne(+id);
  }

  // Rota: PATCH /funcionario/:id - Atualiza um funcionário existente com base no ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionarioService.update(+id, updateFuncionarioDto);
  }

  // Rota: DELETE /funcionario/:id - Remove um funcionário com base no ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcionarioService.remove(+id);
  }
}
