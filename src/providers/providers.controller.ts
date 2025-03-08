import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { User } from 'src/auth/entities/user.entity';
import { UserData } from 'src/auth/decorators/user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiAuth } from 'src/auth/decorators/api.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiAuth()
@ApiTags('Providers')
@UseGuards(AuthGuard)
@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Auth(ROLES.MANAGER)
  @Post()
  @ApiResponse({
    status: 201,
    example: {
      providerId: "UUID",
      providerName: "Proveedor Ejemplo",
      providerEmail: "proveedor@email.com",
      providerPhoneNumber: "1234567890"
    }
  })
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista de todos los proveedores',
    example: [
      {
        providerId: "1a2b3c4d-1234-5678-9abc-def012345678",
        providerName: "Proveedor 1",
        providerEmail: "proveedora@email.com",
        providerPhoneNumber: "9082663812"
      },
      {
        providerId: "5e6f7g8h-9876-5432-1abc-def098765432",
        providerName: "Proveedor 2",
        providerEmail: "proveedorb@email.com",
        providerPhoneNumber: "0987609081"
      },
      {
        providerId: "9i0j1k2l-1122-3344-5566-778899aabbcc",
        providerName: "Proveedor 3",
        providerEmail: "proveedorc@email.com",
        providerPhoneNumber: "8988720111"
      }
    ]
  })

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @Get('/name/:name')
  @ApiResponse({
    status: 200,
    description: 'Busca un proveedor por nombre',
    example: {
      providerId: "UUID",
      providerName: "Proveedor Ejemplo",
      providerEmail: "proveedor@email.com",
      providerPhoneNumber: "1234567890"
    }
  })
  findByName(@Param('name') name: string) {
    return this.providersService.findOneByName(name);
  }

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Obtiene un proveedor por ID',
    example: {
      providerId: "UUID",
      providerName: "Proveedor Ejemplo",
      providerEmail: "proveedor@email.com",
      providerPhoneNumber: "1234567890"
    }
  })
  findOne(@Param('id') id: string) {
    const provider = this.providersService.findOne(id);
    if (!provider) throw new NotFoundException();
    return provider;
  }

  @Auth(ROLES.MANAGER)
  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Actualiza un proveedor',
    example: {
      providerId: "UUID",
      providerName: "Nuevo Nombre",
      providerEmail: "nuevo@email.com",
      providerPhoneNumber: "0987654321"
    }
  })
  update(@Param('id') id: string, @Body() updateProviderDto: UpdateProviderDto) {
    return this.providersService.update(id, updateProviderDto);
  }

  @Auth(ROLES.MANAGER)
  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Proveedor eliminado exitosamente'
  })
  remove(@Param('id') id: string) {
    return this.providersService.remove(id);
  }
}
