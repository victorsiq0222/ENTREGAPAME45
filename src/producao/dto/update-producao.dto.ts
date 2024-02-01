import { PartialType } from '@nestjs/mapped-types';
import { CreateProducaoDto } from './create-producao.dto';

export class UpdateProducaoDto extends PartialType(CreateProducaoDto) {
    data_producao:string;
    status:string;
}
