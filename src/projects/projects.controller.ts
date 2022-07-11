import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly ProjectsService: ProjectsService) {}

  @Get()
  getHello(): Object {
    return { message: 'ok' };
  }
}
