import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AddressdsadsaResolverBase } from "./base/addressdsadsa.resolver.base";
import { Addressdsadsa } from "./base/Addressdsadsa";
import { AddressdsadsaService } from "./addressdsadsa.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Addressdsadsa)
export class AddressdsadsaResolver extends AddressdsadsaResolverBase {
  constructor(
    protected readonly service: AddressdsadsaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
