import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { PaymentInstrument } from '../paymentInstrument';
import { CardPaymentAuthorizationListResponse } from './cardPaymentAuthorizationListResponse';

export class CardPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => CardPaymentAuthorizationListResponse)
    authorizations: CardPaymentAuthorizationListResponse;

    @v.IsString()
    recurrenceToken: string;
}