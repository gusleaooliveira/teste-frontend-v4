import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HourlyEarningService } from './hourly-earning.service';
import { CreateHourlyEarningDto } from './dto/create-hourly-earning.dto';
import { UpdateHourlyEarningDto } from './dto/update-hourly-earning.dto';

@Controller('hourly-earning')
export class HourlyEarningController {
  constructor(private readonly hourlyEarningService: HourlyEarningService) {}

  @Post()
  async create(@Body() createHourlyEarningDto: CreateHourlyEarningDto) {
    return await this.hourlyEarningService.create(createHourlyEarningDto);
  }

  @Get()
  async findAll() {
    return await this.hourlyEarningService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hourlyEarningService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHourlyEarningDto: UpdateHourlyEarningDto) {
    return await this.hourlyEarningService.update(id, updateHourlyEarningDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.hourlyEarningService.remove(id);
  }
}