import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddressdsadsaServiceBase } from "./base/addressdsadsa.service.base";

@Injectable()
export class AddressdsadsaService extends AddressdsadsaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
