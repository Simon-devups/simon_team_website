import { SetMetadata } from "@nestjs/common";
import { UserType } from "generated/prisma";


export const Role = (...roles:UserType[]) => SetMetadata('roles',roles)