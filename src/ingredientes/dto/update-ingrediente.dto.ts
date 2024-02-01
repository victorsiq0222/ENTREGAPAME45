import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredienteDto } from './create-ingrediente.dto';

export class UpdateIngredienteDto extends PartialType(CreateIngredienteDto) {
    nome:string;
    quantidade_disponivel:number;
    quantidade_minima_encomenda:number;
}
