import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    SignIn(dto: AuthDto): Promise<import(".prisma/client").User>;
    SignOut(dto: AuthDto): Promise<import(".prisma/client").User>;
}
