import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { PaymentInstrument } from '../paymentInstrument';
import { MobilePayPaymentAuthorizationListResponse } from './mobilePayPaymentAuthorizationListResponse';

export class MobilePayPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorizationListResponse)
    authorizations: MobilePayPaymentAuthorizationListResponse;
}