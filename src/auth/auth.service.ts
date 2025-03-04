import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  registerUser(createUserDto: CreateUserDto) {
    createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5);
    return this.userRepository.save(createUserDto);
  }

  async loginUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { userEmail: createUserDto.userEmail },
    });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const match = await bcrypt.compare(createUserDto.userPassword, user.userPassword);

    if (!match) {
      throw new UnauthorizedException('No estás autorizado');
    }
    const token = jwt.sign({ userEmail: user.userEmail }, 'SECRET_KEY');
    return { accessToken: token };
  }
}
