import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AddressdsadsaModuleBase } from "./base/addressdsadsa.module.base";
import { AddressdsadsaService } from "./addressdsadsa.service";
import { AddressdsadsaController } from "./addressdsadsa.controller";
import { AddressdsadsaResolver } from "./addressdsadsa.resolver";

@Module({
  imports: [AddressdsadsaModuleBase, forwardRef(() => AuthModule)],
  controllers: [AddressdsadsaController],
  providers: [AddressdsadsaService, AddressdsadsaResolver],
  exports: [AddressdsadsaService],
})
export class AddressdsadsaModule {}
