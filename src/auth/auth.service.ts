import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtModule: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    try {
      // save new user in the db
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // return the saved user
      return this.gettoken(user.id, user.email);
    } catch (error) {
      // console.log('Error type:', error.constructor.name);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //if user does not exist throw exception
    if (!user) {
      throw new ForbiddenException('Credential incrorrect');
    }
    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);
    // if password incorrect throw exception
    if (!pwMatches) {
      throw new ForbiddenException('Credential Incorrect');
    }

    // send back the user
    return this.gettoken(user.id, user.email);
  }

  async gettoken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.configService.get('JWT_SECRET');

    const token = await this.jwtModule.signAsync(payload, {
      expiresIn: '15m',
      secret,
    });

    return {
      access_token: token,
    };
  }
}
