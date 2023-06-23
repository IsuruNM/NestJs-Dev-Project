import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtModule;
    private configService;
    constructor(prismaService: PrismaService, jwtModule: JwtService, configService: ConfigService);
    signup(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    gettoken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
