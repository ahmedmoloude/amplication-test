import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AddressdsadsaService } from "./addressdsadsa.service";
import { AddressdsadsaControllerBase } from "./base/addressdsadsa.controller.base";

@swagger.ApiTags("addressdsadsas")
@common.Controller("addressdsadsas")
export class AddressdsadsaController extends AddressdsadsaControllerBase {
  constructor(
    protected readonly service: AddressdsadsaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
