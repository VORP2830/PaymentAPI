import { Controller, Get} from "@nestjs/common";

@Controller('api/health')
export class HealthController{
    constructor() {}

    @Get()
    async get(): Promise<any>{
        return {
            accessDate: new Date().toTimeString()
        };
    }
}