import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { EstoqueModule } from './estoque/estoque.module';
import { ProdutoModule } from './produto/produto.module';
import { ProducaoModule } from './producao/producao.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ChecklistModule } from './checklist/checklist.module';

@Module({
  imports: [FuncionarioModule, EstoqueModule, ProdutoModule, ProducaoModule, IngredientesModule, ChecklistModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
