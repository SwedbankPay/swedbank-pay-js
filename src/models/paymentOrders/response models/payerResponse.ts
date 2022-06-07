import { Address } from "../../address";
import { AccountInfo } from "../../accountInfo";
import { EmailAddress } from "../../emailAddress";
import { Identifiable } from "../../generics/identifiable";
import { Msisdn } from "../../msisdn";
import { NationalIdentifier } from "../nationalIdentifier";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class PayerResponse extends Identifiable {
    @v.ValidateNested()
    @Type(() => AccountInfo)
    accountInfo: AccountInfo;

    @v.ValidateNested()
    @Type(() => Address)
    billingAddress: Address;

    @v.IsString()
    consumerProfileRef: string;

    @v.ValidateNested()
    @Type(() => EmailAddress)
    email: EmailAddress;

    @v.IsString()
    firstName: string;

    @v.IsString()
    homePhoneNumber: string;

    @v.IsString()
    lastName: string;

    @v.ValidateNested()
    @Type(() => Msisdn)
    msisdn: Msisdn;

    @v.ValidateNested()
    @Type(() => NationalIdentifier)
    nationalIdentifier: NationalIdentifier;

    @v.ValidateNested()
    @Type(() => Address)
    shippingAddress: Address;

    @v.IsString()
    workPhoneNumber: string;
}