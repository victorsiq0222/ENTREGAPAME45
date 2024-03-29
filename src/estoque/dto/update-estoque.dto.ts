import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDto) {
    quantidade:number;
    data_entrada:string;
    data_saida:string;
}
