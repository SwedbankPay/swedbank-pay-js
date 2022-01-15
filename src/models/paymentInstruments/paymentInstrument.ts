import { PayeeInfo } from "../../Services/PaymentOrder/models/PayeeInfo";
import { Amount } from "../amount";
import { Currency } from "../currency";
import { Identifiable } from "../identifiable";
import { Language } from "../language";
import { Operation } from "../operation";
import { State } from "../state";
import { Urls } from "../urls";
import { CancellationListResponse } from "./cancellationListResponse";
import { CaptureListResponse } from "./captureListResponse";
import { PaymentIntent } from "./paymentIntent";
import { PriceListResponse } from "./priceListResponse";
import { ReversalListResponse } from "./reversalListResponse";
import { TransactionListResponse } from "./transactionListResponse";

export interface PaymentInstrument extends Identifiable {
    amount: Amount;
    cancellations: CancellationListResponse;
    captures: CaptureListResponse;
    created: string;
    updated: string;
    currency: Currency;
    description: string;
    instrument: PaymentInstrument;
    intent: PaymentIntent;
    language: Language;
    number: number;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    initiatingSystemUserAgent: string;
    prices: PriceListResponse;
    remainingCancellationAmount: Amount;
    remainingCaptureAmount: Amount;
    remainingReversalAmount: Amount;
    state: State;
    transactions: TransactionListResponse;
    urls: Urls;
    userAgent: string;
    vatAmount: Amount;
    reversals: ReversalListResponse;
    metadata: Metadata;
}