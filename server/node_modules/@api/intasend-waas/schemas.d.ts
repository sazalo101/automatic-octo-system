declare const ChargebacksCreate: {
    readonly body: {
        readonly required: readonly ["transaction", "reason"];
        readonly type: "object";
        readonly properties: {
            readonly chargeback_id: {
                readonly title: "Chargeback id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly session_id: {
                readonly title: "Session id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly transaction: {
                readonly required: readonly ["invoice"];
                readonly type: "object";
                readonly properties: {
                    readonly transaction_id: {
                        readonly title: "Transaction id";
                        readonly type: "string";
                        readonly readOnly: true;
                    };
                    readonly invoice: {
                        readonly required: readonly ["provider", "value"];
                        readonly type: "object";
                        readonly properties: {
                            readonly invoice_id: {
                                readonly title: "Invoice id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly state: {
                                readonly title: "State";
                                readonly type: "string";
                                readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                            };
                            readonly provider: {
                                readonly title: "Provider";
                                readonly type: "string";
                                readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                            };
                            readonly charges: {
                                readonly title: "Charges";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly net_amount: {
                                readonly title: "Net amount";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly currency: {
                                readonly title: "Currency";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly value: {
                                readonly title: "Value";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly account: {
                                readonly title: "Account";
                                readonly description: "Depositing account, email or phone number";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 140;
                            };
                            readonly api_ref: {
                                readonly title: "Api ref";
                                readonly description: "API tracking reference number";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 140;
                            };
                            readonly clearing_status: {
                                readonly title: "Clearing status";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly mpesa_reference: {
                                readonly title: "Mpesa reference";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly host: {
                                readonly title: "Host";
                                readonly description: "Payment origin host i.e domain making the payment";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                                readonly maxLength: 200;
                            };
                            readonly retry_count: {
                                readonly title: "Retry count";
                                readonly type: "integer";
                                readonly maximum: 2147483647;
                                readonly minimum: -2147483648;
                            };
                            readonly failed_reason: {
                                readonly title: "Failed reason";
                                readonly type: readonly ["string", "null"];
                            };
                            readonly failed_code: {
                                readonly title: "Failed code";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 45;
                            };
                            readonly failed_code_link: {
                                readonly title: "Failed code link";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                    readonly currency: {
                        readonly title: "Currency";
                        readonly type: "string";
                        readonly readOnly: true;
                    };
                    readonly value: {
                        readonly title: "Value";
                        readonly type: "string";
                        readonly format: "decimal";
                        readonly readOnly: true;
                    };
                    readonly running_balance: {
                        readonly title: "Running balance";
                        readonly type: "string";
                        readonly format: "decimal";
                        readonly readOnly: true;
                    };
                    readonly narrative: {
                        readonly title: "Narrative";
                        readonly type: readonly ["string", "null"];
                    };
                    readonly trans_type: {
                        readonly title: "Trans type";
                        readonly type: "string";
                        readonly enum: readonly ["SALE", "ADJUSTMENT", "PAYOUT", "CHARGE", "AIRTIME", "DEPOSIT", "EXCHANGE", "UNMARKED"];
                    };
                    readonly status: {
                        readonly title: "Status";
                        readonly type: "string";
                        readonly enum: readonly ["AVAILABLE", "CLEARING", "ON-HOLD", "CANCELLED", "CHARGEBACK-PENDING", "REFUNDED", "ADJUSTMENT"];
                    };
                    readonly created_at: {
                        readonly title: "Created at";
                        readonly type: readonly ["string", "null"];
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                    readonly updated_at: {
                        readonly title: "Updated at";
                        readonly type: readonly ["string", "null"];
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                };
            };
            readonly amount: {
                readonly title: "Amount";
                readonly type: "string";
                readonly format: "decimal";
            };
            readonly reason: {
                readonly title: "Reason";
                readonly type: "string";
                readonly enum: readonly ["Unavailable service", "Delayed delivery", "Wrong service", "Duplicate payment", "Other"];
            };
            readonly status: {
                readonly title: "Status";
                readonly type: "string";
                readonly readOnly: true;
                readonly minLength: 1;
            };
            readonly resolution: {
                readonly title: "Resolution";
                readonly description: "Resolution statement";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
            };
            readonly staff_created: {
                readonly title: "Staff created";
                readonly description: "Specify if chargeback was initiated by the admin";
                readonly type: "boolean";
                readonly readOnly: true;
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly required: readonly ["transaction", "reason"];
            readonly type: "object";
            readonly properties: {
                readonly chargeback_id: {
                    readonly title: "Chargeback id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly session_id: {
                    readonly title: "Session id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transaction: {
                    readonly required: readonly ["invoice"];
                    readonly type: "object";
                    readonly properties: {
                        readonly transaction_id: {
                            readonly title: "Transaction id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly invoice: {
                            readonly required: readonly ["provider", "value"];
                            readonly type: "object";
                            readonly properties: {
                                readonly invoice_id: {
                                    readonly title: "Invoice id";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly state: {
                                    readonly title: "State";
                                    readonly type: "string";
                                    readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                                    readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                                };
                                readonly provider: {
                                    readonly title: "Provider";
                                    readonly type: "string";
                                    readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                                    readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                                };
                                readonly charges: {
                                    readonly title: "Charges";
                                    readonly type: "string";
                                    readonly format: "decimal";
                                };
                                readonly net_amount: {
                                    readonly title: "Net amount";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly currency: {
                                    readonly title: "Currency";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly value: {
                                    readonly title: "Value";
                                    readonly type: "string";
                                    readonly format: "decimal";
                                };
                                readonly account: {
                                    readonly title: "Account";
                                    readonly description: "Depositing account, email or phone number";
                                    readonly type: readonly ["string", "null"];
                                    readonly maxLength: 140;
                                };
                                readonly api_ref: {
                                    readonly title: "Api ref";
                                    readonly description: "API tracking reference number";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                    readonly maxLength: 140;
                                };
                                readonly clearing_status: {
                                    readonly title: "Clearing status";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly mpesa_reference: {
                                    readonly title: "Mpesa reference";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly host: {
                                    readonly title: "Host";
                                    readonly description: "Payment origin host i.e domain making the payment";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                                    readonly maxLength: 200;
                                };
                                readonly retry_count: {
                                    readonly title: "Retry count";
                                    readonly type: "integer";
                                    readonly maximum: 2147483647;
                                    readonly minimum: -2147483648;
                                };
                                readonly failed_reason: {
                                    readonly title: "Failed reason";
                                    readonly type: readonly ["string", "null"];
                                };
                                readonly failed_code: {
                                    readonly title: "Failed code";
                                    readonly type: readonly ["string", "null"];
                                    readonly maxLength: 45;
                                };
                                readonly failed_code_link: {
                                    readonly title: "Failed code link";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly created_at: {
                                    readonly title: "Created at";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "date-time";
                                    readonly readOnly: true;
                                };
                                readonly updated_at: {
                                    readonly title: "Updated at";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "date-time";
                                    readonly readOnly: true;
                                };
                            };
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly value: {
                            readonly title: "Value";
                            readonly type: "string";
                            readonly format: "decimal";
                            readonly readOnly: true;
                        };
                        readonly running_balance: {
                            readonly title: "Running balance";
                            readonly type: "string";
                            readonly format: "decimal";
                            readonly readOnly: true;
                        };
                        readonly narrative: {
                            readonly title: "Narrative";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly trans_type: {
                            readonly title: "Trans type";
                            readonly type: "string";
                            readonly enum: readonly ["SALE", "ADJUSTMENT", "PAYOUT", "CHARGE", "AIRTIME", "DEPOSIT", "EXCHANGE", "UNMARKED"];
                            readonly description: "`SALE` `ADJUSTMENT` `PAYOUT` `CHARGE` `AIRTIME` `DEPOSIT` `EXCHANGE` `UNMARKED`";
                        };
                        readonly status: {
                            readonly title: "Status";
                            readonly type: "string";
                            readonly enum: readonly ["AVAILABLE", "CLEARING", "ON-HOLD", "CANCELLED", "CHARGEBACK-PENDING", "REFUNDED", "ADJUSTMENT"];
                            readonly description: "`AVAILABLE` `CLEARING` `ON-HOLD` `CANCELLED` `CHARGEBACK-PENDING` `REFUNDED` `ADJUSTMENT`";
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly reason: {
                    readonly title: "Reason";
                    readonly type: "string";
                    readonly enum: readonly ["Unavailable service", "Delayed delivery", "Wrong service", "Duplicate payment", "Other"];
                    readonly description: "`Unavailable service` `Delayed delivery` `Wrong service` `Duplicate payment` `Other`";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly readOnly: true;
                    readonly minLength: 1;
                };
                readonly resolution: {
                    readonly title: "Resolution";
                    readonly description: "Resolution statement";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                };
                readonly staff_created: {
                    readonly title: "Staff created";
                    readonly description: "Specify if chargeback was initiated by the admin";
                    readonly type: "boolean";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ChargebacksList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["transaction", "reason"];
                        readonly type: "object";
                        readonly properties: {
                            readonly chargeback_id: {
                                readonly title: "Chargeback id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly session_id: {
                                readonly title: "Session id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly transaction: {
                                readonly required: readonly ["invoice"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly transaction_id: {
                                        readonly title: "Transaction id";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly invoice: {
                                        readonly required: readonly ["provider", "value"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly invoice_id: {
                                                readonly title: "Invoice id";
                                                readonly type: "string";
                                                readonly readOnly: true;
                                            };
                                            readonly state: {
                                                readonly title: "State";
                                                readonly type: "string";
                                                readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                                                readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                                            };
                                            readonly provider: {
                                                readonly title: "Provider";
                                                readonly type: "string";
                                                readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                                                readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                                            };
                                            readonly charges: {
                                                readonly title: "Charges";
                                                readonly type: "string";
                                                readonly format: "decimal";
                                            };
                                            readonly net_amount: {
                                                readonly title: "Net amount";
                                                readonly type: "string";
                                                readonly readOnly: true;
                                            };
                                            readonly currency: {
                                                readonly title: "Currency";
                                                readonly type: "string";
                                                readonly readOnly: true;
                                            };
                                            readonly value: {
                                                readonly title: "Value";
                                                readonly type: "string";
                                                readonly format: "decimal";
                                            };
                                            readonly account: {
                                                readonly title: "Account";
                                                readonly description: "Depositing account, email or phone number";
                                                readonly type: readonly ["string", "null"];
                                                readonly maxLength: 140;
                                            };
                                            readonly api_ref: {
                                                readonly title: "Api ref";
                                                readonly description: "API tracking reference number";
                                                readonly type: readonly ["string", "null"];
                                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                                readonly maxLength: 140;
                                            };
                                            readonly clearing_status: {
                                                readonly title: "Clearing status";
                                                readonly type: "string";
                                                readonly readOnly: true;
                                            };
                                            readonly mpesa_reference: {
                                                readonly title: "Mpesa reference";
                                                readonly type: "string";
                                                readonly readOnly: true;
                                            };
                                            readonly host: {
                                                readonly title: "Host";
                                                readonly description: "Payment origin host i.e domain making the payment";
                                                readonly type: readonly ["string", "null"];
                                                readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                                                readonly maxLength: 200;
                                            };
                                            readonly retry_count: {
                                                readonly title: "Retry count";
                                                readonly type: "integer";
                                                readonly maximum: 2147483647;
                                                readonly minimum: -2147483648;
                                            };
                                            readonly failed_reason: {
                                                readonly title: "Failed reason";
                                                readonly type: readonly ["string", "null"];
                                            };
                                            readonly failed_code: {
                                                readonly title: "Failed code";
                                                readonly type: readonly ["string", "null"];
                                                readonly maxLength: 45;
                                            };
                                            readonly failed_code_link: {
                                                readonly title: "Failed code link";
                                                readonly type: "string";
                                                readonly readOnly: true;
                                            };
                                            readonly created_at: {
                                                readonly title: "Created at";
                                                readonly type: readonly ["string", "null"];
                                                readonly format: "date-time";
                                                readonly readOnly: true;
                                            };
                                            readonly updated_at: {
                                                readonly title: "Updated at";
                                                readonly type: readonly ["string", "null"];
                                                readonly format: "date-time";
                                                readonly readOnly: true;
                                            };
                                        };
                                    };
                                    readonly currency: {
                                        readonly title: "Currency";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly value: {
                                        readonly title: "Value";
                                        readonly type: "string";
                                        readonly format: "decimal";
                                        readonly readOnly: true;
                                    };
                                    readonly running_balance: {
                                        readonly title: "Running balance";
                                        readonly type: "string";
                                        readonly format: "decimal";
                                        readonly readOnly: true;
                                    };
                                    readonly narrative: {
                                        readonly title: "Narrative";
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly trans_type: {
                                        readonly title: "Trans type";
                                        readonly type: "string";
                                        readonly enum: readonly ["SALE", "ADJUSTMENT", "PAYOUT", "CHARGE", "AIRTIME", "DEPOSIT", "EXCHANGE", "UNMARKED"];
                                        readonly description: "`SALE` `ADJUSTMENT` `PAYOUT` `CHARGE` `AIRTIME` `DEPOSIT` `EXCHANGE` `UNMARKED`";
                                    };
                                    readonly status: {
                                        readonly title: "Status";
                                        readonly type: "string";
                                        readonly enum: readonly ["AVAILABLE", "CLEARING", "ON-HOLD", "CANCELLED", "CHARGEBACK-PENDING", "REFUNDED", "ADJUSTMENT"];
                                        readonly description: "`AVAILABLE` `CLEARING` `ON-HOLD` `CANCELLED` `CHARGEBACK-PENDING` `REFUNDED` `ADJUSTMENT`";
                                    };
                                    readonly created_at: {
                                        readonly title: "Created at";
                                        readonly type: readonly ["string", "null"];
                                        readonly format: "date-time";
                                        readonly readOnly: true;
                                    };
                                    readonly updated_at: {
                                        readonly title: "Updated at";
                                        readonly type: readonly ["string", "null"];
                                        readonly format: "date-time";
                                        readonly readOnly: true;
                                    };
                                };
                            };
                            readonly amount: {
                                readonly title: "Amount";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly reason: {
                                readonly title: "Reason";
                                readonly type: "string";
                                readonly enum: readonly ["Unavailable service", "Delayed delivery", "Wrong service", "Duplicate payment", "Other"];
                                readonly description: "`Unavailable service` `Delayed delivery` `Wrong service` `Duplicate payment` `Other`";
                            };
                            readonly status: {
                                readonly title: "Status";
                                readonly type: "string";
                                readonly readOnly: true;
                                readonly minLength: 1;
                            };
                            readonly resolution: {
                                readonly title: "Resolution";
                                readonly description: "Resolution statement";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            };
                            readonly staff_created: {
                                readonly title: "Staff created";
                                readonly description: "Specify if chargeback was initiated by the admin";
                                readonly type: "boolean";
                                readonly readOnly: true;
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ChargebacksRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique integer value identifying this Chargeback.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["transaction", "reason"];
            readonly type: "object";
            readonly properties: {
                readonly chargeback_id: {
                    readonly title: "Chargeback id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly session_id: {
                    readonly title: "Session id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transaction: {
                    readonly required: readonly ["invoice"];
                    readonly type: "object";
                    readonly properties: {
                        readonly transaction_id: {
                            readonly title: "Transaction id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly invoice: {
                            readonly required: readonly ["provider", "value"];
                            readonly type: "object";
                            readonly properties: {
                                readonly invoice_id: {
                                    readonly title: "Invoice id";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly state: {
                                    readonly title: "State";
                                    readonly type: "string";
                                    readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                                    readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                                };
                                readonly provider: {
                                    readonly title: "Provider";
                                    readonly type: "string";
                                    readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                                    readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                                };
                                readonly charges: {
                                    readonly title: "Charges";
                                    readonly type: "string";
                                    readonly format: "decimal";
                                };
                                readonly net_amount: {
                                    readonly title: "Net amount";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly currency: {
                                    readonly title: "Currency";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly value: {
                                    readonly title: "Value";
                                    readonly type: "string";
                                    readonly format: "decimal";
                                };
                                readonly account: {
                                    readonly title: "Account";
                                    readonly description: "Depositing account, email or phone number";
                                    readonly type: readonly ["string", "null"];
                                    readonly maxLength: 140;
                                };
                                readonly api_ref: {
                                    readonly title: "Api ref";
                                    readonly description: "API tracking reference number";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                    readonly maxLength: 140;
                                };
                                readonly clearing_status: {
                                    readonly title: "Clearing status";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly mpesa_reference: {
                                    readonly title: "Mpesa reference";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly host: {
                                    readonly title: "Host";
                                    readonly description: "Payment origin host i.e domain making the payment";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                                    readonly maxLength: 200;
                                };
                                readonly retry_count: {
                                    readonly title: "Retry count";
                                    readonly type: "integer";
                                    readonly maximum: 2147483647;
                                    readonly minimum: -2147483648;
                                };
                                readonly failed_reason: {
                                    readonly title: "Failed reason";
                                    readonly type: readonly ["string", "null"];
                                };
                                readonly failed_code: {
                                    readonly title: "Failed code";
                                    readonly type: readonly ["string", "null"];
                                    readonly maxLength: 45;
                                };
                                readonly failed_code_link: {
                                    readonly title: "Failed code link";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly created_at: {
                                    readonly title: "Created at";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "date-time";
                                    readonly readOnly: true;
                                };
                                readonly updated_at: {
                                    readonly title: "Updated at";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "date-time";
                                    readonly readOnly: true;
                                };
                            };
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly value: {
                            readonly title: "Value";
                            readonly type: "string";
                            readonly format: "decimal";
                            readonly readOnly: true;
                        };
                        readonly running_balance: {
                            readonly title: "Running balance";
                            readonly type: "string";
                            readonly format: "decimal";
                            readonly readOnly: true;
                        };
                        readonly narrative: {
                            readonly title: "Narrative";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly trans_type: {
                            readonly title: "Trans type";
                            readonly type: "string";
                            readonly enum: readonly ["SALE", "ADJUSTMENT", "PAYOUT", "CHARGE", "AIRTIME", "DEPOSIT", "EXCHANGE", "UNMARKED"];
                            readonly description: "`SALE` `ADJUSTMENT` `PAYOUT` `CHARGE` `AIRTIME` `DEPOSIT` `EXCHANGE` `UNMARKED`";
                        };
                        readonly status: {
                            readonly title: "Status";
                            readonly type: "string";
                            readonly enum: readonly ["AVAILABLE", "CLEARING", "ON-HOLD", "CANCELLED", "CHARGEBACK-PENDING", "REFUNDED", "ADJUSTMENT"];
                            readonly description: "`AVAILABLE` `CLEARING` `ON-HOLD` `CANCELLED` `CHARGEBACK-PENDING` `REFUNDED` `ADJUSTMENT`";
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly reason: {
                    readonly title: "Reason";
                    readonly type: "string";
                    readonly enum: readonly ["Unavailable service", "Delayed delivery", "Wrong service", "Duplicate payment", "Other"];
                    readonly description: "`Unavailable service` `Delayed delivery` `Wrong service` `Duplicate payment` `Other`";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly readOnly: true;
                    readonly minLength: 1;
                };
                readonly resolution: {
                    readonly title: "Resolution";
                    readonly description: "Resolution statement";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                };
                readonly staff_created: {
                    readonly title: "Staff created";
                    readonly description: "Specify if chargeback was initiated by the admin";
                    readonly type: "boolean";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CheckoutCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly title: "Id";
                readonly type: "string";
                readonly format: "uuid";
                readonly readOnly: true;
            };
            readonly url: {
                readonly title: "Url";
                readonly type: "string";
                readonly readOnly: true;
                readonly minLength: 1;
            };
            readonly signature: {
                readonly title: "Signature";
                readonly type: "string";
                readonly readOnly: true;
                readonly minLength: 1;
            };
            readonly first_name: {
                readonly title: "First name";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly maxLength: 45;
            };
            readonly last_name: {
                readonly title: "Last name";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly maxLength: 45;
            };
            readonly phone_number: {
                readonly title: "Phone number";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[0-9-_+ ]+$";
                readonly maxLength: 30;
            };
            readonly email: {
                readonly title: "Email";
                readonly type: readonly ["string", "null"];
                readonly format: "email";
                readonly maxLength: 254;
            };
            readonly country: {
                readonly title: "Country";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly maxLength: 2;
            };
            readonly address: {
                readonly title: "Address";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                readonly maxLength: 140;
            };
            readonly city: {
                readonly title: "City";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                readonly maxLength: 70;
            };
            readonly state: {
                readonly title: "State";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                readonly maxLength: 70;
            };
            readonly zipcode: {
                readonly title: "Zipcode";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly maxLength: 10;
            };
            readonly api_ref: {
                readonly title: "Api ref";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly maxLength: 70;
            };
            readonly wallet_id: {
                readonly title: "Wallet id";
                readonly type: readonly ["string", "null"];
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly maxLength: 10;
            };
            readonly method: {
                readonly title: "Method";
                readonly type: readonly ["string", "null"];
                readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
            };
            readonly host: {
                readonly title: "Host";
                readonly type: readonly ["string", "null"];
                readonly format: "uri";
                readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                readonly maxLength: 400;
            };
            readonly is_mobile: {
                readonly title: "Is mobile";
                readonly type: "boolean";
            };
            readonly version: {
                readonly title: "Version";
                readonly type: readonly ["string", "null"];
                readonly readOnly: true;
                readonly minLength: 1;
            };
            readonly redirect_url: {
                readonly title: "Redirect url";
                readonly type: readonly ["string", "null"];
                readonly format: "uri";
                readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                readonly maxLength: 400;
            };
            readonly amount: {
                readonly title: "Amount";
                readonly type: "string";
                readonly format: "decimal";
            };
            readonly currency: {
                readonly title: "Currency";
                readonly type: "string";
                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
            };
            readonly paid: {
                readonly title: "Paid";
                readonly type: "boolean";
                readonly readOnly: true;
            };
            readonly mobile_tarrif: {
                readonly title: "Mobile tarrif";
                readonly type: "string";
                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
            };
            readonly card_tarrif: {
                readonly title: "Card tarrif";
                readonly type: "string";
                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
            };
            readonly bitcoin_tarrif: {
                readonly title: "Bitcoin tarrif";
                readonly type: "string";
                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
            };
            readonly ach_tarrif: {
                readonly title: "Ach tarrif";
                readonly type: "string";
                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly title: "Id";
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly url: {
                    readonly title: "Url";
                    readonly type: "string";
                    readonly readOnly: true;
                    readonly minLength: 1;
                };
                readonly signature: {
                    readonly title: "Signature";
                    readonly type: "string";
                    readonly readOnly: true;
                    readonly minLength: 1;
                };
                readonly first_name: {
                    readonly title: "First name";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 45;
                };
                readonly last_name: {
                    readonly title: "Last name";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 45;
                };
                readonly phone_number: {
                    readonly title: "Phone number";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[0-9-_+ ]+$";
                    readonly maxLength: 30;
                };
                readonly email: {
                    readonly title: "Email";
                    readonly type: readonly ["string", "null"];
                    readonly format: "email";
                    readonly maxLength: 254;
                };
                readonly country: {
                    readonly title: "Country";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 2;
                };
                readonly address: {
                    readonly title: "Address";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                    readonly maxLength: 140;
                };
                readonly city: {
                    readonly title: "City";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                    readonly maxLength: 70;
                };
                readonly state: {
                    readonly title: "State";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                    readonly maxLength: 70;
                };
                readonly zipcode: {
                    readonly title: "Zipcode";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 10;
                };
                readonly api_ref: {
                    readonly title: "Api ref";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 70;
                };
                readonly wallet_id: {
                    readonly title: "Wallet id";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 10;
                };
                readonly method: {
                    readonly title: "Method";
                    readonly type: readonly ["string", "null"];
                    readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                    readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                };
                readonly host: {
                    readonly title: "Host";
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                    readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                    readonly maxLength: 400;
                };
                readonly is_mobile: {
                    readonly title: "Is mobile";
                    readonly type: "boolean";
                };
                readonly version: {
                    readonly title: "Version";
                    readonly type: readonly ["string", "null"];
                    readonly readOnly: true;
                    readonly minLength: 1;
                };
                readonly redirect_url: {
                    readonly title: "Redirect url";
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                    readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                    readonly maxLength: 400;
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly paid: {
                    readonly title: "Paid";
                    readonly type: "boolean";
                    readonly readOnly: true;
                };
                readonly mobile_tarrif: {
                    readonly title: "Mobile tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly card_tarrif: {
                    readonly title: "Card tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly bitcoin_tarrif: {
                    readonly title: "Bitcoin tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly ach_tarrif: {
                    readonly title: "Ach tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CheckoutDetails: {
    readonly body: {
        readonly required: readonly ["checkout_id", "signature"];
        readonly type: "object";
        readonly properties: {
            readonly checkout_id: {
                readonly title: "Checkout id";
                readonly type: "string";
                readonly minLength: 1;
            };
            readonly signature: {
                readonly title: "Signature";
                readonly type: "string";
                readonly minLength: 1;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly title: "Id";
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly url: {
                    readonly title: "Url";
                    readonly type: "string";
                    readonly readOnly: true;
                    readonly minLength: 1;
                };
                readonly signature: {
                    readonly title: "Signature";
                    readonly type: "string";
                    readonly readOnly: true;
                    readonly minLength: 1;
                };
                readonly first_name: {
                    readonly title: "First name";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 45;
                };
                readonly last_name: {
                    readonly title: "Last name";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 45;
                };
                readonly phone_number: {
                    readonly title: "Phone number";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[0-9-_+ ]+$";
                    readonly maxLength: 30;
                };
                readonly email: {
                    readonly title: "Email";
                    readonly type: readonly ["string", "null"];
                    readonly format: "email";
                    readonly maxLength: 254;
                };
                readonly country: {
                    readonly title: "Country";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 2;
                };
                readonly address: {
                    readonly title: "Address";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                    readonly maxLength: 140;
                };
                readonly city: {
                    readonly title: "City";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                    readonly maxLength: 70;
                };
                readonly state: {
                    readonly title: "State";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ .,]+$";
                    readonly maxLength: 70;
                };
                readonly zipcode: {
                    readonly title: "Zipcode";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 10;
                };
                readonly api_ref: {
                    readonly title: "Api ref";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 70;
                };
                readonly wallet_id: {
                    readonly title: "Wallet id";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 10;
                };
                readonly method: {
                    readonly title: "Method";
                    readonly type: readonly ["string", "null"];
                    readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                    readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                };
                readonly host: {
                    readonly title: "Host";
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                    readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                    readonly maxLength: 400;
                };
                readonly is_mobile: {
                    readonly title: "Is mobile";
                    readonly type: "boolean";
                };
                readonly version: {
                    readonly title: "Version";
                    readonly type: readonly ["string", "null"];
                    readonly readOnly: true;
                    readonly minLength: 1;
                };
                readonly redirect_url: {
                    readonly title: "Redirect url";
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                    readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                    readonly maxLength: 400;
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly paid: {
                    readonly title: "Paid";
                    readonly type: "boolean";
                    readonly readOnly: true;
                };
                readonly mobile_tarrif: {
                    readonly title: "Mobile tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly card_tarrif: {
                    readonly title: "Card tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly bitcoin_tarrif: {
                    readonly title: "Bitcoin tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly ach_tarrif: {
                    readonly title: "Ach tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CustomersList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly first_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly phone_number: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly email: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly country: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly customer_id: {
                                readonly title: "Customer id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly phone_number: {
                                readonly title: "Phone number";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[0-9-_+ ]+$";
                                readonly maxLength: 20;
                            };
                            readonly email: {
                                readonly title: "Email";
                                readonly type: readonly ["string", "null"];
                                readonly format: "email";
                                readonly maxLength: 254;
                            };
                            readonly first_name: {
                                readonly title: "First name";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 45;
                            };
                            readonly last_name: {
                                readonly title: "Last name";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 45;
                            };
                            readonly country: {
                                readonly title: "Country";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 2;
                            };
                            readonly zipcode: {
                                readonly title: "Zipcode";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 10;
                            };
                            readonly provider: {
                                readonly title: "Provider";
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                                readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CustomersRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique integer value identifying this payment customers.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly title: "Customer id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly phone_number: {
                    readonly title: "Phone number";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[0-9-_+ ]+$";
                    readonly maxLength: 20;
                };
                readonly email: {
                    readonly title: "Email";
                    readonly type: readonly ["string", "null"];
                    readonly format: "email";
                    readonly maxLength: 254;
                };
                readonly first_name: {
                    readonly title: "First name";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 45;
                };
                readonly last_name: {
                    readonly title: "Last name";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 45;
                };
                readonly country: {
                    readonly title: "Country";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 2;
                };
                readonly zipcode: {
                    readonly title: "Zipcode";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 10;
                };
                readonly provider: {
                    readonly title: "Provider";
                    readonly type: readonly ["string", "null"];
                    readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                    readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MpesaPaybillAccountsCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly paybill: {
                readonly title: "Paybill";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly account: {
                readonly title: "Account";
                readonly type: "integer";
                readonly readOnly: true;
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly paybill: {
                    readonly title: "Paybill";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly account: {
                    readonly title: "Account";
                    readonly type: "integer";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MpesaPaybillAccountsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly paybill: {
                                readonly title: "Paybill";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly account: {
                                readonly title: "Account";
                                readonly type: "integer";
                                readonly readOnly: true;
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MpesaPaybillAccountsRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique integer value identifying this MPesa Paybill Account.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly paybill: {
                    readonly title: "Paybill";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly account: {
                    readonly title: "Account";
                    readonly type: "integer";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PaymentCoopAgentDepositCreate: {
    readonly body: {
        readonly required: readonly ["amount"];
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly title: "Amount";
                readonly type: "string";
                readonly format: "decimal";
            };
            readonly wallet_id: {
                readonly title: "IntaSend Wallet ID";
                readonly type: readonly ["string", "null"];
            };
            readonly api_ref: {
                readonly title: "Reference ID";
                readonly type: readonly ["string", "null"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["invoice"];
            readonly type: "object";
            readonly properties: {
                readonly invoice: {
                    readonly required: readonly ["provider", "value"];
                    readonly type: "object";
                    readonly properties: {
                        readonly invoice_id: {
                            readonly title: "Invoice id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly state: {
                            readonly title: "State";
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                            readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                        };
                        readonly provider: {
                            readonly title: "Provider";
                            readonly type: "string";
                            readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                            readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                        };
                        readonly charges: {
                            readonly title: "Charges";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly net_amount: {
                            readonly title: "Net amount";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly value: {
                            readonly title: "Value";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly account: {
                            readonly title: "Account";
                            readonly description: "Depositing account, email or phone number";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 140;
                        };
                        readonly api_ref: {
                            readonly title: "Api ref";
                            readonly description: "API tracking reference number";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 140;
                        };
                        readonly clearing_status: {
                            readonly title: "Clearing status";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly mpesa_reference: {
                            readonly title: "Mpesa reference";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly host: {
                            readonly title: "Host";
                            readonly description: "Payment origin host i.e domain making the payment";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                            readonly maxLength: 200;
                        };
                        readonly retry_count: {
                            readonly title: "Retry count";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly failed_reason: {
                            readonly title: "Failed reason";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly failed_code: {
                            readonly title: "Failed code";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 45;
                        };
                        readonly failed_code_link: {
                            readonly title: "Failed code link";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly reference_no: {
                    readonly title: "Reference no";
                    readonly type: "integer";
                    readonly readOnly: true;
                };
                readonly bank_account: {
                    readonly title: "Bank account";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "COMPLETE"];
                    readonly description: "`PENDING` `PROCESSING` `FAILED` `COMPLETE`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PaymentMpesaStkPushCreate: {
    readonly body: {
        readonly required: readonly ["amount", "phone_number"];
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly title: "Amount";
                readonly type: "string";
                readonly format: "decimal";
            };
            readonly phone_number: {
                readonly title: "Phone number";
                readonly type: "string";
                readonly minLength: 1;
            };
            readonly api_ref: {
                readonly title: "Reference ID";
                readonly type: readonly ["string", "null"];
            };
            readonly wallet_id: {
                readonly title: "Wallet id";
                readonly type: readonly ["string", "null"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["invoice", "customer", "payment_link"];
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly title: "Id";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly invoice: {
                    readonly required: readonly ["provider", "value"];
                    readonly type: "object";
                    readonly properties: {
                        readonly invoice_id: {
                            readonly title: "Invoice id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly state: {
                            readonly title: "State";
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                            readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                        };
                        readonly provider: {
                            readonly title: "Provider";
                            readonly type: "string";
                            readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                            readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                        };
                        readonly charges: {
                            readonly title: "Charges";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly net_amount: {
                            readonly title: "Net amount";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly value: {
                            readonly title: "Value";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly account: {
                            readonly title: "Account";
                            readonly description: "Depositing account, email or phone number";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 140;
                        };
                        readonly api_ref: {
                            readonly title: "Api ref";
                            readonly description: "API tracking reference number";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 140;
                        };
                        readonly clearing_status: {
                            readonly title: "Clearing status";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly mpesa_reference: {
                            readonly title: "Mpesa reference";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly host: {
                            readonly title: "Host";
                            readonly description: "Payment origin host i.e domain making the payment";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                            readonly maxLength: 200;
                        };
                        readonly retry_count: {
                            readonly title: "Retry count";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly failed_reason: {
                            readonly title: "Failed reason";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly failed_code: {
                            readonly title: "Failed code";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 45;
                        };
                        readonly failed_code_link: {
                            readonly title: "Failed code link";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly customer: {
                    readonly type: "object";
                    readonly properties: {
                        readonly customer_id: {
                            readonly title: "Customer id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly phone_number: {
                            readonly title: "Phone number";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[0-9-_+ ]+$";
                            readonly maxLength: 20;
                        };
                        readonly email: {
                            readonly title: "Email";
                            readonly type: readonly ["string", "null"];
                            readonly format: "email";
                            readonly maxLength: 254;
                        };
                        readonly first_name: {
                            readonly title: "First name";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 45;
                        };
                        readonly last_name: {
                            readonly title: "Last name";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 45;
                        };
                        readonly country: {
                            readonly title: "Country";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 2;
                        };
                        readonly zipcode: {
                            readonly title: "Zipcode";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 10;
                        };
                        readonly provider: {
                            readonly title: "Provider";
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                            readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly payment_link: {
                    readonly required: readonly ["title"];
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly title: "Id";
                            readonly type: "string";
                            readonly format: "uuid";
                        };
                        readonly title: {
                            readonly title: "Title";
                            readonly description: "Payment link title";
                            readonly type: "string";
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 140;
                            readonly minLength: 1;
                        };
                        readonly is_active: {
                            readonly title: "Is active";
                            readonly type: "boolean";
                        };
                        readonly redirect_url: {
                            readonly title: "Redirect url";
                            readonly description: "Optional website URL to redirect the client after a successful payment";
                            readonly type: readonly ["string", "null"];
                            readonly format: "uri";
                            readonly maxLength: 400;
                        };
                        readonly amount: {
                            readonly title: "Amount";
                            readonly type: "integer";
                            readonly default: 0;
                            readonly minimum: 0;
                        };
                        readonly usage_limit: {
                            readonly title: "Usage limit";
                            readonly type: "integer";
                            readonly default: 0;
                            readonly minimum: 0;
                        };
                        readonly qrcode_file: {
                            readonly title: "Qrcode file";
                            readonly type: readonly ["string", "null"];
                            readonly readOnly: true;
                            readonly format: "uri";
                        };
                        readonly url: {
                            readonly title: "Url";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                            readonly description: "`KES` `USD` `EUR` `GBP`";
                        };
                        readonly mobile_tarrif: {
                            readonly title: "Mobile tarrif";
                            readonly type: "string";
                            readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                            readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                        };
                        readonly card_tarrif: {
                            readonly title: "Card tarrif";
                            readonly type: "string";
                            readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                            readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly customer_comment: {
                    readonly title: "Customer comment";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                };
                readonly refundable: {
                    readonly title: "Refundable";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PaymentStatusCreate: {
    readonly body: {
        readonly required: readonly ["invoice_id"];
        readonly type: "object";
        readonly properties: {
            readonly invoice_id: {
                readonly title: "Invoice id";
                readonly type: "string";
                readonly minLength: 1;
            };
            readonly checkout_id: {
                readonly title: "Checkout id";
                readonly type: readonly ["string", "null"];
            };
            readonly signature: {
                readonly title: "Signature";
                readonly type: readonly ["string", "null"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["invoice", "meta"];
            readonly type: "object";
            readonly properties: {
                readonly invoice: {
                    readonly required: readonly ["provider", "value"];
                    readonly type: "object";
                    readonly properties: {
                        readonly invoice_id: {
                            readonly title: "Invoice id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly state: {
                            readonly title: "State";
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                            readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                        };
                        readonly provider: {
                            readonly title: "Provider";
                            readonly type: "string";
                            readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                            readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                        };
                        readonly charges: {
                            readonly title: "Charges";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly net_amount: {
                            readonly title: "Net amount";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly value: {
                            readonly title: "Value";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly account: {
                            readonly title: "Account";
                            readonly description: "Depositing account, email or phone number";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 140;
                        };
                        readonly api_ref: {
                            readonly title: "Api ref";
                            readonly description: "API tracking reference number";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 140;
                        };
                        readonly clearing_status: {
                            readonly title: "Clearing status";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly mpesa_reference: {
                            readonly title: "Mpesa reference";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly host: {
                            readonly title: "Host";
                            readonly description: "Payment origin host i.e domain making the payment";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                            readonly maxLength: 200;
                        };
                        readonly retry_count: {
                            readonly title: "Retry count";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly failed_reason: {
                            readonly title: "Failed reason";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly failed_code: {
                            readonly title: "Failed code";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 45;
                        };
                        readonly failed_code_link: {
                            readonly title: "Failed code link";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly meta: {
                    readonly required: readonly ["customer", "payment_link"];
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly title: "Id";
                            readonly type: "string";
                            readonly format: "uuid";
                        };
                        readonly customer: {
                            readonly type: "object";
                            readonly properties: {
                                readonly customer_id: {
                                    readonly title: "Customer id";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly phone_number: {
                                    readonly title: "Phone number";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[0-9-_+ ]+$";
                                    readonly maxLength: 20;
                                };
                                readonly email: {
                                    readonly title: "Email";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "email";
                                    readonly maxLength: 254;
                                };
                                readonly first_name: {
                                    readonly title: "First name";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                    readonly maxLength: 45;
                                };
                                readonly last_name: {
                                    readonly title: "Last name";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                    readonly maxLength: 45;
                                };
                                readonly country: {
                                    readonly title: "Country";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                    readonly maxLength: 2;
                                };
                                readonly zipcode: {
                                    readonly title: "Zipcode";
                                    readonly type: readonly ["string", "null"];
                                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                    readonly maxLength: 10;
                                };
                                readonly provider: {
                                    readonly title: "Provider";
                                    readonly type: readonly ["string", "null"];
                                    readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                                    readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                                };
                                readonly created_at: {
                                    readonly title: "Created at";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "date-time";
                                    readonly readOnly: true;
                                };
                                readonly updated_at: {
                                    readonly title: "Updated at";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "date-time";
                                    readonly readOnly: true;
                                };
                            };
                        };
                        readonly payment_link: {
                            readonly required: readonly ["title"];
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly title: "Id";
                                    readonly type: "string";
                                    readonly format: "uuid";
                                };
                                readonly title: {
                                    readonly title: "Title";
                                    readonly description: "Payment link title";
                                    readonly type: "string";
                                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                    readonly maxLength: 140;
                                    readonly minLength: 1;
                                };
                                readonly is_active: {
                                    readonly title: "Is active";
                                    readonly type: "boolean";
                                };
                                readonly redirect_url: {
                                    readonly title: "Redirect url";
                                    readonly description: "Optional website URL to redirect the client after a successful payment";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "uri";
                                    readonly maxLength: 400;
                                };
                                readonly amount: {
                                    readonly title: "Amount";
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly minimum: 0;
                                };
                                readonly usage_limit: {
                                    readonly title: "Usage limit";
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly minimum: 0;
                                };
                                readonly qrcode_file: {
                                    readonly title: "Qrcode file";
                                    readonly type: readonly ["string", "null"];
                                    readonly readOnly: true;
                                    readonly format: "uri";
                                };
                                readonly url: {
                                    readonly title: "Url";
                                    readonly type: "string";
                                    readonly readOnly: true;
                                };
                                readonly currency: {
                                    readonly title: "Currency";
                                    readonly type: "string";
                                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                                    readonly description: "`KES` `USD` `EUR` `GBP`";
                                };
                                readonly mobile_tarrif: {
                                    readonly title: "Mobile tarrif";
                                    readonly type: "string";
                                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                                };
                                readonly card_tarrif: {
                                    readonly title: "Card tarrif";
                                    readonly type: "string";
                                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                                };
                                readonly created_at: {
                                    readonly title: "Created at";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "date-time";
                                    readonly readOnly: true;
                                };
                                readonly updated_at: {
                                    readonly title: "Updated at";
                                    readonly type: readonly ["string", "null"];
                                    readonly format: "date-time";
                                    readonly readOnly: true;
                                };
                            };
                        };
                        readonly customer_comment: {
                            readonly title: "Customer comment";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PaymentlinksCreate: {
    readonly body: {
        readonly required: readonly ["title"];
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly title: "Id";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly title: {
                readonly title: "Title";
                readonly description: "Payment link title";
                readonly type: "string";
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly maxLength: 140;
                readonly minLength: 1;
            };
            readonly is_active: {
                readonly title: "Is active";
                readonly type: "boolean";
            };
            readonly redirect_url: {
                readonly title: "Redirect url";
                readonly description: "Optional website URL to redirect the client after a successful payment";
                readonly type: readonly ["string", "null"];
                readonly format: "uri";
                readonly maxLength: 400;
            };
            readonly amount: {
                readonly title: "Amount";
                readonly type: "integer";
                readonly default: 0;
                readonly minimum: 0;
            };
            readonly usage_limit: {
                readonly title: "Usage limit";
                readonly type: "integer";
                readonly default: 0;
                readonly minimum: 0;
            };
            readonly qrcode_file: {
                readonly title: "Qrcode file";
                readonly type: readonly ["string", "null"];
                readonly readOnly: true;
                readonly format: "uri";
            };
            readonly url: {
                readonly title: "Url";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly currency: {
                readonly title: "Currency";
                readonly type: "string";
                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
            };
            readonly mobile_tarrif: {
                readonly title: "Mobile tarrif";
                readonly type: "string";
                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
            };
            readonly card_tarrif: {
                readonly title: "Card tarrif";
                readonly type: "string";
                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly required: readonly ["title"];
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly title: "Id";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly title: {
                    readonly title: "Title";
                    readonly description: "Payment link title";
                    readonly type: "string";
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 140;
                    readonly minLength: 1;
                };
                readonly is_active: {
                    readonly title: "Is active";
                    readonly type: "boolean";
                };
                readonly redirect_url: {
                    readonly title: "Redirect url";
                    readonly description: "Optional website URL to redirect the client after a successful payment";
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                    readonly maxLength: 400;
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "integer";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly usage_limit: {
                    readonly title: "Usage limit";
                    readonly type: "integer";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly qrcode_file: {
                    readonly title: "Qrcode file";
                    readonly type: readonly ["string", "null"];
                    readonly readOnly: true;
                    readonly format: "uri";
                };
                readonly url: {
                    readonly title: "Url";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly mobile_tarrif: {
                    readonly title: "Mobile tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly card_tarrif: {
                    readonly title: "Card tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PaymentlinksList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["title"];
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly title: "Id";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly title: {
                                readonly title: "Title";
                                readonly description: "Payment link title";
                                readonly type: "string";
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 140;
                                readonly minLength: 1;
                            };
                            readonly is_active: {
                                readonly title: "Is active";
                                readonly type: "boolean";
                            };
                            readonly redirect_url: {
                                readonly title: "Redirect url";
                                readonly description: "Optional website URL to redirect the client after a successful payment";
                                readonly type: readonly ["string", "null"];
                                readonly format: "uri";
                                readonly maxLength: 400;
                            };
                            readonly amount: {
                                readonly title: "Amount";
                                readonly type: "integer";
                                readonly default: 0;
                                readonly minimum: 0;
                            };
                            readonly usage_limit: {
                                readonly title: "Usage limit";
                                readonly type: "integer";
                                readonly default: 0;
                                readonly minimum: 0;
                            };
                            readonly qrcode_file: {
                                readonly title: "Qrcode file";
                                readonly type: readonly ["string", "null"];
                                readonly readOnly: true;
                                readonly format: "uri";
                            };
                            readonly url: {
                                readonly title: "Url";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly currency: {
                                readonly title: "Currency";
                                readonly type: "string";
                                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                                readonly description: "`KES` `USD` `EUR` `GBP`";
                            };
                            readonly mobile_tarrif: {
                                readonly title: "Mobile tarrif";
                                readonly type: "string";
                                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                                readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                            };
                            readonly card_tarrif: {
                                readonly title: "Card tarrif";
                                readonly type: "string";
                                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                                readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PaymentlinksRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A UUID string identifying this payment links.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["title"];
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly title: "Id";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly title: {
                    readonly title: "Title";
                    readonly description: "Payment link title";
                    readonly type: "string";
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 140;
                    readonly minLength: 1;
                };
                readonly is_active: {
                    readonly title: "Is active";
                    readonly type: "boolean";
                };
                readonly redirect_url: {
                    readonly title: "Redirect url";
                    readonly description: "Optional website URL to redirect the client after a successful payment";
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                    readonly maxLength: 400;
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "integer";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly usage_limit: {
                    readonly title: "Usage limit";
                    readonly type: "integer";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly qrcode_file: {
                    readonly title: "Qrcode file";
                    readonly type: readonly ["string", "null"];
                    readonly readOnly: true;
                    readonly format: "uri";
                };
                readonly url: {
                    readonly title: "Url";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly mobile_tarrif: {
                    readonly title: "Mobile tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly card_tarrif: {
                    readonly title: "Card tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PaymentlinksUpdate: {
    readonly body: {
        readonly required: readonly ["title"];
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly title: "Id";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly title: {
                readonly title: "Title";
                readonly description: "Payment link title";
                readonly type: "string";
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly maxLength: 140;
                readonly minLength: 1;
            };
            readonly is_active: {
                readonly title: "Is active";
                readonly type: "boolean";
            };
            readonly redirect_url: {
                readonly title: "Redirect url";
                readonly description: "Optional website URL to redirect the client after a successful payment";
                readonly type: readonly ["string", "null"];
                readonly format: "uri";
                readonly maxLength: 400;
            };
            readonly amount: {
                readonly title: "Amount";
                readonly type: "integer";
                readonly default: 0;
                readonly minimum: 0;
            };
            readonly usage_limit: {
                readonly title: "Usage limit";
                readonly type: "integer";
                readonly default: 0;
                readonly minimum: 0;
            };
            readonly qrcode_file: {
                readonly title: "Qrcode file";
                readonly type: readonly ["string", "null"];
                readonly readOnly: true;
                readonly format: "uri";
            };
            readonly url: {
                readonly title: "Url";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly currency: {
                readonly title: "Currency";
                readonly type: "string";
                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
            };
            readonly mobile_tarrif: {
                readonly title: "Mobile tarrif";
                readonly type: "string";
                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
            };
            readonly card_tarrif: {
                readonly title: "Card tarrif";
                readonly type: "string";
                readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A UUID string identifying this payment links.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["title"];
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly title: "Id";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly title: {
                    readonly title: "Title";
                    readonly description: "Payment link title";
                    readonly type: "string";
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 140;
                    readonly minLength: 1;
                };
                readonly is_active: {
                    readonly title: "Is active";
                    readonly type: "boolean";
                };
                readonly redirect_url: {
                    readonly title: "Redirect url";
                    readonly description: "Optional website URL to redirect the client after a successful payment";
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                    readonly maxLength: 400;
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "integer";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly usage_limit: {
                    readonly title: "Usage limit";
                    readonly type: "integer";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly qrcode_file: {
                    readonly title: "Qrcode file";
                    readonly type: readonly ["string", "null"];
                    readonly readOnly: true;
                    readonly format: "uri";
                };
                readonly url: {
                    readonly title: "Url";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly mobile_tarrif: {
                    readonly title: "Mobile tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly card_tarrif: {
                    readonly title: "Card tarrif";
                    readonly type: "string";
                    readonly enum: readonly ["BUSINESS-PAYS", "CUSTOMER-PAYS"];
                    readonly description: "`BUSINESS-PAYS` `CUSTOMER-PAYS`";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SendMoneyApproveCreate: {
    readonly body: {
        readonly required: readonly ["wallet", "transactions"];
        readonly type: "object";
        readonly properties: {
            readonly file_id: {
                readonly title: "File id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly device_id: {
                readonly title: "Device id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly tracking_id: {
                readonly title: "Tracking id";
                readonly type: "string";
                readonly format: "uuid";
            };
            readonly batch_reference: {
                readonly title: "Batch reference";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 70;
            };
            readonly status: {
                readonly title: "Status";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly status_code: {
                readonly title: "Status code";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly nonce: {
                readonly title: "Nonce";
                readonly type: "string";
                readonly maxLength: 6;
                readonly minLength: 1;
            };
            readonly wallet: {
                readonly required: readonly ["available_balance"];
                readonly type: "object";
                readonly properties: {
                    readonly wallet_id: {
                        readonly title: "Wallet id";
                        readonly type: "string";
                        readonly readOnly: true;
                    };
                    readonly label: {
                        readonly title: "Label";
                        readonly type: "string";
                        readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                        readonly maxLength: 40;
                        readonly minLength: 1;
                    };
                    readonly can_disburse: {
                        readonly title: "Can disburse";
                        readonly type: "boolean";
                    };
                    readonly currency: {
                        readonly title: "Currency";
                        readonly type: "string";
                        readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    };
                    readonly wallet_type: {
                        readonly title: "Wallet type";
                        readonly type: "string";
                        readonly enum: readonly ["SETTLEMENT", "WORKING"];
                    };
                    readonly current_balance: {
                        readonly title: "Current balance";
                        readonly type: "string";
                        readonly format: "decimal";
                        readonly readOnly: true;
                    };
                    readonly available_balance: {
                        readonly title: "Available balance";
                        readonly type: "string";
                        readonly format: "decimal";
                    };
                    readonly updated_at: {
                        readonly title: "Updated at";
                        readonly type: readonly ["string", "null"];
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                };
            };
            readonly transactions: {
                readonly type: "array";
                readonly items: {
                    readonly required: readonly ["account", "amount"];
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly title: "Status";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly status_code: {
                            readonly title: "Status code";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly request_reference_id: {
                            readonly title: "Request reference id";
                            readonly type: "string";
                            readonly format: "uuid";
                        };
                        readonly name: {
                            readonly title: "Name";
                            readonly description: "Beneficiary name as per Client Records";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 240;
                        };
                        readonly account: {
                            readonly title: "Account";
                            readonly description: "Phone number, bank account number etc";
                            readonly type: "string";
                            readonly pattern: "^([\\s\\d]+)$";
                            readonly maxLength: 24;
                            readonly minLength: 1;
                        };
                        readonly id_number: {
                            readonly title: "Id number";
                            readonly description: "Optional ID number of beneficiary - MPesa transaction will be validated";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 20;
                        };
                        readonly bank_code: {
                            readonly title: "Bank code";
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["1", "2", "3", "7", "10", "11", "12", "14", "16", "17", "18", "19", "23", "25", "31", "35", "43", "49", "50", "51", "53", "54", "55", "57", "63", "66", "68", "70", "72", "74", "76", "78", "61", "65", "89", "97"];
                        };
                        readonly amount: {
                            readonly title: "Amount";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly narrative: {
                            readonly title: "Narrative";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 240;
                        };
                    };
                };
            };
            readonly charge_estimate: {
                readonly title: "Charge estimate";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly total_amount_estimate: {
                readonly title: "Total amount estimate";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly total_amount: {
                readonly title: "Total amount";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly transactions_count: {
                readonly title: "Transactions count";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["transactions", "wallet"];
            readonly type: "object";
            readonly properties: {
                readonly file_id: {
                    readonly title: "File id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly tracking_id: {
                    readonly title: "Tracking id";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly batch_reference: {
                    readonly title: "Batch reference";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 70;
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly status_code: {
                    readonly title: "Status code";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["account", "amount"];
                        readonly type: "object";
                        readonly properties: {
                            readonly transaction_id: {
                                readonly title: "Transaction id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly status: {
                                readonly title: "Status";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly status_code: {
                                readonly title: "Status code";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly request_reference_id: {
                                readonly title: "Request reference id";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly provider: {
                                readonly title: "Provider";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly bank_code: {
                                readonly title: "Bank code";
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["1", "2", "3", "7", "10", "11", "12", "14", "16", "17", "18", "19", "23", "25", "31", "35", "43", "49", "50", "51", "53", "54", "55", "57", "63", "66", "68", "70", "72", "74", "76", "78", "61", "65", "89", "97"];
                                readonly description: "`1` `2` `3` `7` `10` `11` `12` `14` `16` `17` `18` `19` `23` `25` `31` `35` `43` `49` `50` `51` `53` `54` `55` `57` `63` `66` `68` `70` `72` `74` `76` `78` `61` `65` `89` `97`";
                            };
                            readonly name: {
                                readonly title: "Name";
                                readonly description: "Beneficiary name as per Client Records";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 240;
                            };
                            readonly account: {
                                readonly title: "Account";
                                readonly description: "Phone number, bank account number etc";
                                readonly type: "string";
                                readonly pattern: "^([\\s\\d]+)$";
                                readonly maxLength: 24;
                                readonly minLength: 1;
                            };
                            readonly account_type: {
                                readonly title: "Account type";
                                readonly description: "Optional account type for classification e.g TillNumber and PayBill\n\n`TillNumber` `PayBill`";
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["TillNumber", "PayBill"];
                            };
                            readonly account_reference: {
                                readonly title: "Account reference";
                                readonly description: "Account reference. Required for M-Pesa PayBill option";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 20;
                            };
                            readonly provider_reference: {
                                readonly title: "Provider reference";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly provider_account_name: {
                                readonly title: "Provider account name";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly amount: {
                                readonly title: "Amount";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly charge: {
                                readonly title: "Charge";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly narrative: {
                                readonly title: "Narrative";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 240;
                            };
                            readonly file_id: {
                                readonly title: "File id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly currency: {
                                readonly title: "Currency";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
                readonly actual_charges: {
                    readonly title: "Actual charges";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly paid_amount: {
                    readonly title: "Paid amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly failed_amount: {
                    readonly title: "Failed amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly wallet: {
                    readonly required: readonly ["available_balance"];
                    readonly type: "object";
                    readonly properties: {
                        readonly wallet_id: {
                            readonly title: "Wallet id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly label: {
                            readonly title: "Label";
                            readonly type: "string";
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 40;
                            readonly minLength: 1;
                        };
                        readonly can_disburse: {
                            readonly title: "Can disburse";
                            readonly type: "boolean";
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                            readonly description: "`KES` `USD` `EUR` `GBP`";
                        };
                        readonly wallet_type: {
                            readonly title: "Wallet type";
                            readonly type: "string";
                            readonly enum: readonly ["SETTLEMENT", "WORKING"];
                            readonly description: "`SETTLEMENT` `WORKING`";
                        };
                        readonly current_balance: {
                            readonly title: "Current balance";
                            readonly type: "string";
                            readonly format: "decimal";
                            readonly readOnly: true;
                        };
                        readonly available_balance: {
                            readonly title: "Available balance";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly charge_estimate: {
                    readonly title: "Charge estimate";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly total_amount_estimate: {
                    readonly title: "Total amount estimate";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly total_amount: {
                    readonly title: "Total amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transactions_count: {
                    readonly title: "Transactions count";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SendMoneyCancelCreate: {
    readonly body: {
        readonly required: readonly ["file_id"];
        readonly type: "object";
        readonly properties: {
            readonly file_id: {
                readonly title: "File id";
                readonly type: "string";
                readonly minLength: 1;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["transactions", "wallet"];
            readonly type: "object";
            readonly properties: {
                readonly file_id: {
                    readonly title: "File id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly tracking_id: {
                    readonly title: "Tracking id";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly batch_reference: {
                    readonly title: "Batch reference";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 70;
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly status_code: {
                    readonly title: "Status code";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["account", "amount"];
                        readonly type: "object";
                        readonly properties: {
                            readonly transaction_id: {
                                readonly title: "Transaction id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly status: {
                                readonly title: "Status";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly status_code: {
                                readonly title: "Status code";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly request_reference_id: {
                                readonly title: "Request reference id";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly provider: {
                                readonly title: "Provider";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly bank_code: {
                                readonly title: "Bank code";
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["1", "2", "3", "7", "10", "11", "12", "14", "16", "17", "18", "19", "23", "25", "31", "35", "43", "49", "50", "51", "53", "54", "55", "57", "63", "66", "68", "70", "72", "74", "76", "78", "61", "65", "89", "97"];
                                readonly description: "`1` `2` `3` `7` `10` `11` `12` `14` `16` `17` `18` `19` `23` `25` `31` `35` `43` `49` `50` `51` `53` `54` `55` `57` `63` `66` `68` `70` `72` `74` `76` `78` `61` `65` `89` `97`";
                            };
                            readonly name: {
                                readonly title: "Name";
                                readonly description: "Beneficiary name as per Client Records";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 240;
                            };
                            readonly account: {
                                readonly title: "Account";
                                readonly description: "Phone number, bank account number etc";
                                readonly type: "string";
                                readonly pattern: "^([\\s\\d]+)$";
                                readonly maxLength: 24;
                                readonly minLength: 1;
                            };
                            readonly account_type: {
                                readonly title: "Account type";
                                readonly description: "Optional account type for classification e.g TillNumber and PayBill\n\n`TillNumber` `PayBill`";
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["TillNumber", "PayBill"];
                            };
                            readonly account_reference: {
                                readonly title: "Account reference";
                                readonly description: "Account reference. Required for M-Pesa PayBill option";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 20;
                            };
                            readonly provider_reference: {
                                readonly title: "Provider reference";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly provider_account_name: {
                                readonly title: "Provider account name";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly amount: {
                                readonly title: "Amount";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly charge: {
                                readonly title: "Charge";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly narrative: {
                                readonly title: "Narrative";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 240;
                            };
                            readonly file_id: {
                                readonly title: "File id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly currency: {
                                readonly title: "Currency";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
                readonly actual_charges: {
                    readonly title: "Actual charges";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly paid_amount: {
                    readonly title: "Paid amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly failed_amount: {
                    readonly title: "Failed amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly wallet: {
                    readonly required: readonly ["available_balance"];
                    readonly type: "object";
                    readonly properties: {
                        readonly wallet_id: {
                            readonly title: "Wallet id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly label: {
                            readonly title: "Label";
                            readonly type: "string";
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 40;
                            readonly minLength: 1;
                        };
                        readonly can_disburse: {
                            readonly title: "Can disburse";
                            readonly type: "boolean";
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                            readonly description: "`KES` `USD` `EUR` `GBP`";
                        };
                        readonly wallet_type: {
                            readonly title: "Wallet type";
                            readonly type: "string";
                            readonly enum: readonly ["SETTLEMENT", "WORKING"];
                            readonly description: "`SETTLEMENT` `WORKING`";
                        };
                        readonly current_balance: {
                            readonly title: "Current balance";
                            readonly type: "string";
                            readonly format: "decimal";
                            readonly readOnly: true;
                        };
                        readonly available_balance: {
                            readonly title: "Available balance";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly charge_estimate: {
                    readonly title: "Charge estimate";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly total_amount_estimate: {
                    readonly title: "Total amount estimate";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly total_amount: {
                    readonly title: "Total amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transactions_count: {
                    readonly title: "Transactions count";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SendMoneyInitiateCreate: {
    readonly body: {
        readonly required: readonly ["currency", "provider", "transactions"];
        readonly type: "object";
        readonly properties: {
            readonly currency: {
                readonly title: "Currency";
                readonly type: "string";
                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
            };
            readonly provider: {
                readonly title: "Provider";
                readonly type: "string";
                readonly enum: readonly ["MPESA-B2C", "MPESA-B2B", "PESALINK", "INTASEND", "AIRTIME"];
            };
            readonly device_id: {
                readonly title: "Device id";
                readonly type: "string";
                readonly minLength: 1;
            };
            readonly callback_url: {
                readonly title: "Callback url";
                readonly type: readonly ["string", "null"];
                readonly format: "uri";
                readonly maxLength: 400;
            };
            readonly batch_reference: {
                readonly title: "Batch reference";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 70;
            };
            readonly transactions: {
                readonly type: "array";
                readonly items: {
                    readonly required: readonly ["account", "amount"];
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly title: "Name";
                            readonly description: "Beneficiary name as per Client Records";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 240;
                        };
                        readonly account: {
                            readonly title: "Account";
                            readonly description: "Phone number, bank account number etc";
                            readonly type: "string";
                            readonly pattern: "^([\\s\\d]+)$";
                            readonly maxLength: 24;
                            readonly minLength: 1;
                        };
                        readonly id_number: {
                            readonly title: "Id number";
                            readonly description: "Optional ID number of beneficiary - MPesa transaction will be validated";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 20;
                        };
                        readonly amount: {
                            readonly title: "Amount";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly bank_code: {
                            readonly title: "Bank code";
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["1", "2", "3", "7", "10", "11", "12", "14", "16", "17", "18", "19", "23", "25", "31", "35", "43", "49", "50", "51", "53", "54", "55", "57", "63", "66", "68", "70", "72", "74", "76", "78", "61", "65", "89", "97"];
                        };
                        readonly category_name: {
                            readonly title: "Category name";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly narrative: {
                            readonly title: "Narrative";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 240;
                        };
                        readonly account_type: {
                            readonly title: "Account type";
                            readonly description: "Optional account type for classification e.g TillNumber and PayBill";
                            readonly type: readonly ["string", "null"];
                            readonly enum: readonly ["TillNumber", "PayBill"];
                        };
                        readonly account_reference: {
                            readonly title: "Account reference";
                            readonly description: "Account reference. Required for M-Pesa PayBill option";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 20;
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["wallet", "transactions"];
            readonly type: "object";
            readonly properties: {
                readonly file_id: {
                    readonly title: "File id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly device_id: {
                    readonly title: "Device id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly tracking_id: {
                    readonly title: "Tracking id";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly batch_reference: {
                    readonly title: "Batch reference";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 70;
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly status_code: {
                    readonly title: "Status code";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly nonce: {
                    readonly title: "Nonce";
                    readonly type: "string";
                    readonly maxLength: 6;
                    readonly minLength: 1;
                };
                readonly wallet: {
                    readonly required: readonly ["available_balance"];
                    readonly type: "object";
                    readonly properties: {
                        readonly wallet_id: {
                            readonly title: "Wallet id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly label: {
                            readonly title: "Label";
                            readonly type: "string";
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 40;
                            readonly minLength: 1;
                        };
                        readonly can_disburse: {
                            readonly title: "Can disburse";
                            readonly type: "boolean";
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                            readonly description: "`KES` `USD` `EUR` `GBP`";
                        };
                        readonly wallet_type: {
                            readonly title: "Wallet type";
                            readonly type: "string";
                            readonly enum: readonly ["SETTLEMENT", "WORKING"];
                            readonly description: "`SETTLEMENT` `WORKING`";
                        };
                        readonly current_balance: {
                            readonly title: "Current balance";
                            readonly type: "string";
                            readonly format: "decimal";
                            readonly readOnly: true;
                        };
                        readonly available_balance: {
                            readonly title: "Available balance";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly transactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["account", "amount"];
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly title: "Status";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly status_code: {
                                readonly title: "Status code";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly request_reference_id: {
                                readonly title: "Request reference id";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly name: {
                                readonly title: "Name";
                                readonly description: "Beneficiary name as per Client Records";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 240;
                            };
                            readonly account: {
                                readonly title: "Account";
                                readonly description: "Phone number, bank account number etc";
                                readonly type: "string";
                                readonly pattern: "^([\\s\\d]+)$";
                                readonly maxLength: 24;
                                readonly minLength: 1;
                            };
                            readonly id_number: {
                                readonly title: "Id number";
                                readonly description: "Optional ID number of beneficiary - MPesa transaction will be validated";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 20;
                            };
                            readonly bank_code: {
                                readonly title: "Bank code";
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["1", "2", "3", "7", "10", "11", "12", "14", "16", "17", "18", "19", "23", "25", "31", "35", "43", "49", "50", "51", "53", "54", "55", "57", "63", "66", "68", "70", "72", "74", "76", "78", "61", "65", "89", "97"];
                                readonly description: "`1` `2` `3` `7` `10` `11` `12` `14` `16` `17` `18` `19` `23` `25` `31` `35` `43` `49` `50` `51` `53` `54` `55` `57` `63` `66` `68` `70` `72` `74` `76` `78` `61` `65` `89` `97`";
                            };
                            readonly amount: {
                                readonly title: "Amount";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly narrative: {
                                readonly title: "Narrative";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 240;
                            };
                        };
                    };
                };
                readonly charge_estimate: {
                    readonly title: "Charge estimate";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly total_amount_estimate: {
                    readonly title: "Total amount estimate";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly total_amount: {
                    readonly title: "Total amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transactions_count: {
                    readonly title: "Transactions count";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SendMoneyStatusCreate: {
    readonly body: {
        readonly required: readonly ["tracking_id"];
        readonly type: "object";
        readonly properties: {
            readonly tracking_id: {
                readonly title: "Tracking id";
                readonly type: "string";
                readonly format: "uuid";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["transactions", "wallet"];
            readonly type: "object";
            readonly properties: {
                readonly file_id: {
                    readonly title: "File id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly tracking_id: {
                    readonly title: "Tracking id";
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly batch_reference: {
                    readonly title: "Batch reference";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 70;
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly status_code: {
                    readonly title: "Status code";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["account", "amount"];
                        readonly type: "object";
                        readonly properties: {
                            readonly transaction_id: {
                                readonly title: "Transaction id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly status: {
                                readonly title: "Status";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly status_code: {
                                readonly title: "Status code";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly request_reference_id: {
                                readonly title: "Request reference id";
                                readonly type: "string";
                                readonly format: "uuid";
                            };
                            readonly provider: {
                                readonly title: "Provider";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly bank_code: {
                                readonly title: "Bank code";
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["1", "2", "3", "7", "10", "11", "12", "14", "16", "17", "18", "19", "23", "25", "31", "35", "43", "49", "50", "51", "53", "54", "55", "57", "63", "66", "68", "70", "72", "74", "76", "78", "61", "65", "89", "97"];
                                readonly description: "`1` `2` `3` `7` `10` `11` `12` `14` `16` `17` `18` `19` `23` `25` `31` `35` `43` `49` `50` `51` `53` `54` `55` `57` `63` `66` `68` `70` `72` `74` `76` `78` `61` `65` `89` `97`";
                            };
                            readonly name: {
                                readonly title: "Name";
                                readonly description: "Beneficiary name as per Client Records";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 240;
                            };
                            readonly account: {
                                readonly title: "Account";
                                readonly description: "Phone number, bank account number etc";
                                readonly type: "string";
                                readonly pattern: "^([\\s\\d]+)$";
                                readonly maxLength: 24;
                                readonly minLength: 1;
                            };
                            readonly account_type: {
                                readonly title: "Account type";
                                readonly description: "Optional account type for classification e.g TillNumber and PayBill\n\n`TillNumber` `PayBill`";
                                readonly type: readonly ["string", "null"];
                                readonly enum: readonly ["TillNumber", "PayBill"];
                            };
                            readonly account_reference: {
                                readonly title: "Account reference";
                                readonly description: "Account reference. Required for M-Pesa PayBill option";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 20;
                            };
                            readonly provider_reference: {
                                readonly title: "Provider reference";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly provider_account_name: {
                                readonly title: "Provider account name";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly amount: {
                                readonly title: "Amount";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly charge: {
                                readonly title: "Charge";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly narrative: {
                                readonly title: "Narrative";
                                readonly type: readonly ["string", "null"];
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 240;
                            };
                            readonly file_id: {
                                readonly title: "File id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly currency: {
                                readonly title: "Currency";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
                readonly actual_charges: {
                    readonly title: "Actual charges";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly paid_amount: {
                    readonly title: "Paid amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly failed_amount: {
                    readonly title: "Failed amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly wallet: {
                    readonly required: readonly ["available_balance"];
                    readonly type: "object";
                    readonly properties: {
                        readonly wallet_id: {
                            readonly title: "Wallet id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly label: {
                            readonly title: "Label";
                            readonly type: "string";
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 40;
                            readonly minLength: 1;
                        };
                        readonly can_disburse: {
                            readonly title: "Can disburse";
                            readonly type: "boolean";
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                            readonly description: "`KES` `USD` `EUR` `GBP`";
                        };
                        readonly wallet_type: {
                            readonly title: "Wallet type";
                            readonly type: "string";
                            readonly enum: readonly ["SETTLEMENT", "WORKING"];
                            readonly description: "`SETTLEMENT` `WORKING`";
                        };
                        readonly current_balance: {
                            readonly title: "Current balance";
                            readonly type: "string";
                            readonly format: "decimal";
                            readonly readOnly: true;
                        };
                        readonly available_balance: {
                            readonly title: "Available balance";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly charge_estimate: {
                    readonly title: "Charge estimate";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly total_amount_estimate: {
                    readonly title: "Total amount estimate";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly total_amount: {
                    readonly title: "Total amount";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly transactions_count: {
                    readonly title: "Transactions count";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsCreate: {
    readonly body: {
        readonly required: readonly ["customer_id", "plan_id", "start_date"];
        readonly type: "object";
        readonly properties: {
            readonly subscription_id: {
                readonly title: "Subscription id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly customer_id: {
                readonly title: "Customer id";
                readonly minLength: 1;
                readonly type: "string";
            };
            readonly reference: {
                readonly title: "Reference";
                readonly type: "string";
            };
            readonly plan_id: {
                readonly title: "Plan id";
                readonly minLength: 1;
                readonly type: "string";
            };
            readonly status: {
                readonly title: "Status";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly start_date: {
                readonly format: "date";
                readonly title: "Start date";
                readonly type: "string";
            };
            readonly setup_url: {
                readonly title: "Setup url";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly created_at: {
                readonly format: "date-time";
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly format: "date-time";
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly required: readonly ["customer_id", "plan_id", "start_date"];
            readonly type: "object";
            readonly properties: {
                readonly subscription_id: {
                    readonly title: "Subscription id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly customer_id: {
                    readonly title: "Customer id";
                    readonly minLength: 1;
                    readonly type: "string";
                };
                readonly reference: {
                    readonly title: "Reference";
                    readonly type: "string";
                };
                readonly plan_id: {
                    readonly title: "Plan id";
                    readonly minLength: 1;
                    readonly type: "string";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly start_date: {
                    readonly format: "date";
                    readonly title: "Start date";
                    readonly type: "string";
                };
                readonly setup_url: {
                    readonly title: "Setup url";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly format: "date-time";
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly format: "date-time";
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsCustomersCreate: {
    readonly body: {
        readonly required: readonly ["email", "first_name", "last_name"];
        readonly type: "object";
        readonly properties: {
            readonly customer_id: {
                readonly title: "Customer id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly email: {
                readonly title: "Email";
                readonly type: "string";
                readonly format: "email";
                readonly maxLength: 254;
                readonly minLength: 1;
            };
            readonly first_name: {
                readonly title: "First name";
                readonly type: "string";
                readonly maxLength: 45;
                readonly minLength: 1;
            };
            readonly last_name: {
                readonly title: "Last name";
                readonly type: "string";
                readonly maxLength: 45;
                readonly minLength: 1;
            };
            readonly reference: {
                readonly title: "Reference";
                readonly description: "Third-party reference ID";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 45;
            };
            readonly address: {
                readonly title: "Address";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 50;
            };
            readonly city: {
                readonly title: "City";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 50;
            };
            readonly state: {
                readonly title: "State";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 50;
            };
            readonly zipcode: {
                readonly title: "Zipcode";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 10;
            };
            readonly country: {
                readonly title: "Country";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 2;
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly required: readonly ["email", "first_name", "last_name"];
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly title: "Customer id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly email: {
                    readonly title: "Email";
                    readonly type: "string";
                    readonly format: "email";
                    readonly maxLength: 254;
                    readonly minLength: 1;
                };
                readonly first_name: {
                    readonly title: "First name";
                    readonly type: "string";
                    readonly maxLength: 45;
                    readonly minLength: 1;
                };
                readonly last_name: {
                    readonly title: "Last name";
                    readonly type: "string";
                    readonly maxLength: 45;
                    readonly minLength: 1;
                };
                readonly reference: {
                    readonly title: "Reference";
                    readonly description: "Third-party reference ID";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 45;
                };
                readonly address: {
                    readonly title: "Address";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly city: {
                    readonly title: "City";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly state: {
                    readonly title: "State";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly zipcode: {
                    readonly title: "Zipcode";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 10;
                };
                readonly country: {
                    readonly title: "Country";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 2;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsCustomersList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["email", "first_name", "last_name"];
                        readonly type: "object";
                        readonly properties: {
                            readonly customer_id: {
                                readonly title: "Customer id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly email: {
                                readonly title: "Email";
                                readonly type: "string";
                                readonly format: "email";
                                readonly maxLength: 254;
                                readonly minLength: 1;
                            };
                            readonly first_name: {
                                readonly title: "First name";
                                readonly type: "string";
                                readonly maxLength: 45;
                                readonly minLength: 1;
                            };
                            readonly last_name: {
                                readonly title: "Last name";
                                readonly type: "string";
                                readonly maxLength: 45;
                                readonly minLength: 1;
                            };
                            readonly reference: {
                                readonly title: "Reference";
                                readonly description: "Third-party reference ID";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 45;
                            };
                            readonly address: {
                                readonly title: "Address";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 50;
                            };
                            readonly city: {
                                readonly title: "City";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 50;
                            };
                            readonly state: {
                                readonly title: "State";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 50;
                            };
                            readonly zipcode: {
                                readonly title: "Zipcode";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 10;
                            };
                            readonly country: {
                                readonly title: "Country";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 2;
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsCustomersRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique id value identifying this Customer.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["email", "first_name", "last_name"];
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly title: "Customer id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly email: {
                    readonly title: "Email";
                    readonly type: "string";
                    readonly format: "email";
                    readonly maxLength: 254;
                    readonly minLength: 1;
                };
                readonly first_name: {
                    readonly title: "First name";
                    readonly type: "string";
                    readonly maxLength: 45;
                    readonly minLength: 1;
                };
                readonly last_name: {
                    readonly title: "Last name";
                    readonly type: "string";
                    readonly maxLength: 45;
                    readonly minLength: 1;
                };
                readonly reference: {
                    readonly title: "Reference";
                    readonly description: "Third-party reference ID";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 45;
                };
                readonly address: {
                    readonly title: "Address";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly city: {
                    readonly title: "City";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly state: {
                    readonly title: "State";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly zipcode: {
                    readonly title: "Zipcode";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 10;
                };
                readonly country: {
                    readonly title: "Country";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 2;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsCustomersUpdate: {
    readonly body: {
        readonly required: readonly ["email", "first_name", "last_name"];
        readonly type: "object";
        readonly properties: {
            readonly customer_id: {
                readonly title: "Customer id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly email: {
                readonly title: "Email";
                readonly type: "string";
                readonly format: "email";
                readonly maxLength: 254;
                readonly minLength: 1;
            };
            readonly first_name: {
                readonly title: "First name";
                readonly type: "string";
                readonly maxLength: 45;
                readonly minLength: 1;
            };
            readonly last_name: {
                readonly title: "Last name";
                readonly type: "string";
                readonly maxLength: 45;
                readonly minLength: 1;
            };
            readonly reference: {
                readonly title: "Reference";
                readonly description: "Third-party reference ID";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 45;
            };
            readonly address: {
                readonly title: "Address";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 50;
            };
            readonly city: {
                readonly title: "City";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 50;
            };
            readonly state: {
                readonly title: "State";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 50;
            };
            readonly zipcode: {
                readonly title: "Zipcode";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 10;
            };
            readonly country: {
                readonly title: "Country";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 2;
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique id value identifying this Customer.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["email", "first_name", "last_name"];
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly title: "Customer id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly email: {
                    readonly title: "Email";
                    readonly type: "string";
                    readonly format: "email";
                    readonly maxLength: 254;
                    readonly minLength: 1;
                };
                readonly first_name: {
                    readonly title: "First name";
                    readonly type: "string";
                    readonly maxLength: 45;
                    readonly minLength: 1;
                };
                readonly last_name: {
                    readonly title: "Last name";
                    readonly type: "string";
                    readonly maxLength: 45;
                    readonly minLength: 1;
                };
                readonly reference: {
                    readonly title: "Reference";
                    readonly description: "Third-party reference ID";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 45;
                };
                readonly address: {
                    readonly title: "Address";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly city: {
                    readonly title: "City";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly state: {
                    readonly title: "State";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 50;
                };
                readonly zipcode: {
                    readonly title: "Zipcode";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 10;
                };
                readonly country: {
                    readonly title: "Country";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 2;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["customer", "plan", "start_date"];
                        readonly type: "object";
                        readonly properties: {
                            readonly subscription_id: {
                                readonly title: "Subscription id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly reference: {
                                readonly title: "Reference";
                                readonly description: "Third-party reference ID";
                                readonly type: readonly ["string", "null"];
                                readonly maxLength: 45;
                            };
                            readonly customer: {
                                readonly required: readonly ["email", "first_name", "last_name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly customer_id: {
                                        readonly title: "Customer id";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly email: {
                                        readonly title: "Email";
                                        readonly type: "string";
                                        readonly format: "email";
                                        readonly maxLength: 254;
                                        readonly minLength: 1;
                                    };
                                    readonly first_name: {
                                        readonly title: "First name";
                                        readonly type: "string";
                                        readonly maxLength: 45;
                                        readonly minLength: 1;
                                    };
                                    readonly last_name: {
                                        readonly title: "Last name";
                                        readonly type: "string";
                                        readonly maxLength: 45;
                                        readonly minLength: 1;
                                    };
                                    readonly reference: {
                                        readonly title: "Reference";
                                        readonly description: "Third-party reference ID";
                                        readonly type: readonly ["string", "null"];
                                        readonly maxLength: 45;
                                    };
                                    readonly address: {
                                        readonly title: "Address";
                                        readonly type: readonly ["string", "null"];
                                        readonly maxLength: 50;
                                    };
                                    readonly city: {
                                        readonly title: "City";
                                        readonly type: readonly ["string", "null"];
                                        readonly maxLength: 50;
                                    };
                                    readonly state: {
                                        readonly title: "State";
                                        readonly type: readonly ["string", "null"];
                                        readonly maxLength: 50;
                                    };
                                    readonly zipcode: {
                                        readonly title: "Zipcode";
                                        readonly type: readonly ["string", "null"];
                                        readonly maxLength: 10;
                                    };
                                    readonly country: {
                                        readonly title: "Country";
                                        readonly type: readonly ["string", "null"];
                                        readonly maxLength: 2;
                                    };
                                    readonly created_at: {
                                        readonly title: "Created at";
                                        readonly type: readonly ["string", "null"];
                                        readonly format: "date-time";
                                        readonly readOnly: true;
                                    };
                                    readonly updated_at: {
                                        readonly title: "Updated at";
                                        readonly type: readonly ["string", "null"];
                                        readonly format: "date-time";
                                        readonly readOnly: true;
                                    };
                                };
                            };
                            readonly plan: {
                                readonly required: readonly ["frequency", "currency", "amount"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly title: "Name";
                                        readonly type: "string";
                                        readonly maxLength: 32;
                                        readonly minLength: 1;
                                    };
                                    readonly plan_id: {
                                        readonly title: "Plan id";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly frequency: {
                                        readonly title: "Frequency";
                                        readonly type: "integer";
                                        readonly maximum: 2147483647;
                                        readonly minimum: -2147483648;
                                    };
                                    readonly frequency_unit: {
                                        readonly title: "Frequency unit";
                                        readonly type: "string";
                                        readonly enum: readonly ["D", "W", "M", "Y"];
                                        readonly description: "`D` `W` `M` `Y`";
                                    };
                                    readonly billing_cycles: {
                                        readonly title: "Billing cycles";
                                        readonly type: "integer";
                                        readonly maximum: 2147483647;
                                        readonly minimum: -2147483648;
                                    };
                                    readonly currency: {
                                        readonly title: "Currency";
                                        readonly type: "string";
                                        readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                                        readonly description: "`KES` `USD` `EUR` `GBP`";
                                    };
                                    readonly amount: {
                                        readonly title: "Amount";
                                        readonly type: "string";
                                        readonly format: "decimal";
                                    };
                                    readonly created_at: {
                                        readonly title: "Created at";
                                        readonly type: readonly ["string", "null"];
                                        readonly format: "date-time";
                                        readonly readOnly: true;
                                    };
                                    readonly updated_at: {
                                        readonly title: "Updated at";
                                        readonly type: readonly ["string", "null"];
                                        readonly format: "date-time";
                                        readonly readOnly: true;
                                    };
                                };
                            };
                            readonly payment_method: {
                                readonly title: "Payment method";
                                readonly type: "string";
                                readonly enum: readonly ["CARD-PAYMENT"];
                                readonly description: "`CARD-PAYMENT`";
                            };
                            readonly status: {
                                readonly title: "Status";
                                readonly type: "string";
                                readonly enum: readonly ["PENDING", "ACTIVE", "CANCELED", "COMPLETED", "FAILED"];
                                readonly description: "`PENDING` `ACTIVE` `CANCELED` `COMPLETED` `FAILED`";
                            };
                            readonly start_date: {
                                readonly title: "Start date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly completed_cycles: {
                                readonly title: "Completed cycles";
                                readonly type: "integer";
                                readonly maximum: 2147483647;
                                readonly minimum: -2147483648;
                            };
                            readonly setup_url: {
                                readonly title: "Setup url";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsPlansCreate: {
    readonly body: {
        readonly required: readonly ["frequency", "currency", "amount"];
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly title: "Name";
                readonly type: "string";
                readonly maxLength: 32;
                readonly minLength: 1;
            };
            readonly plan_id: {
                readonly title: "Plan id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly frequency: {
                readonly title: "Frequency";
                readonly type: "integer";
                readonly maximum: 2147483647;
                readonly minimum: -2147483648;
            };
            readonly frequency_unit: {
                readonly title: "Frequency unit";
                readonly type: "string";
                readonly enum: readonly ["D", "W", "M", "Y"];
            };
            readonly billing_cycles: {
                readonly title: "Billing cycles";
                readonly type: "integer";
                readonly maximum: 2147483647;
                readonly minimum: -2147483648;
            };
            readonly currency: {
                readonly title: "Currency";
                readonly type: "string";
                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
            };
            readonly amount: {
                readonly title: "Amount";
                readonly type: "string";
                readonly format: "decimal";
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly required: readonly ["frequency", "currency", "amount"];
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly title: "Name";
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly minLength: 1;
                };
                readonly plan_id: {
                    readonly title: "Plan id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly frequency: {
                    readonly title: "Frequency";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly frequency_unit: {
                    readonly title: "Frequency unit";
                    readonly type: "string";
                    readonly enum: readonly ["D", "W", "M", "Y"];
                    readonly description: "`D` `W` `M` `Y`";
                };
                readonly billing_cycles: {
                    readonly title: "Billing cycles";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsPlansList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["frequency", "currency", "amount"];
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly title: "Name";
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly minLength: 1;
                            };
                            readonly plan_id: {
                                readonly title: "Plan id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly frequency: {
                                readonly title: "Frequency";
                                readonly type: "integer";
                                readonly maximum: 2147483647;
                                readonly minimum: -2147483648;
                            };
                            readonly frequency_unit: {
                                readonly title: "Frequency unit";
                                readonly type: "string";
                                readonly enum: readonly ["D", "W", "M", "Y"];
                                readonly description: "`D` `W` `M` `Y`";
                            };
                            readonly billing_cycles: {
                                readonly title: "Billing cycles";
                                readonly type: "integer";
                                readonly maximum: 2147483647;
                                readonly minimum: -2147483648;
                            };
                            readonly currency: {
                                readonly title: "Currency";
                                readonly type: "string";
                                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                                readonly description: "`KES` `USD` `EUR` `GBP`";
                            };
                            readonly amount: {
                                readonly title: "Amount";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsPlansRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique id value identifying this Plan.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["frequency", "currency", "amount"];
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly title: "Name";
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly minLength: 1;
                };
                readonly plan_id: {
                    readonly title: "Plan id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly frequency: {
                    readonly title: "Frequency";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly frequency_unit: {
                    readonly title: "Frequency unit";
                    readonly type: "string";
                    readonly enum: readonly ["D", "W", "M", "Y"];
                    readonly description: "`D` `W` `M` `Y`";
                };
                readonly billing_cycles: {
                    readonly title: "Billing cycles";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsPlansUpdate: {
    readonly body: {
        readonly required: readonly ["frequency", "currency", "amount"];
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly title: "Name";
                readonly type: "string";
                readonly maxLength: 32;
                readonly minLength: 1;
            };
            readonly plan_id: {
                readonly title: "Plan id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly frequency: {
                readonly title: "Frequency";
                readonly type: "integer";
                readonly maximum: 2147483647;
                readonly minimum: -2147483648;
            };
            readonly frequency_unit: {
                readonly title: "Frequency unit";
                readonly type: "string";
                readonly enum: readonly ["D", "W", "M", "Y"];
            };
            readonly billing_cycles: {
                readonly title: "Billing cycles";
                readonly type: "integer";
                readonly maximum: 2147483647;
                readonly minimum: -2147483648;
            };
            readonly currency: {
                readonly title: "Currency";
                readonly type: "string";
                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
            };
            readonly amount: {
                readonly title: "Amount";
                readonly type: "string";
                readonly format: "decimal";
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique id value identifying this Plan.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["frequency", "currency", "amount"];
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly title: "Name";
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly minLength: 1;
                };
                readonly plan_id: {
                    readonly title: "Plan id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly frequency: {
                    readonly title: "Frequency";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly frequency_unit: {
                    readonly title: "Frequency unit";
                    readonly type: "string";
                    readonly enum: readonly ["D", "W", "M", "Y"];
                    readonly description: "`D` `W` `M` `Y`";
                };
                readonly billing_cycles: {
                    readonly title: "Billing cycles";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly amount: {
                    readonly title: "Amount";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique id value identifying this Subscription.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["customer", "plan", "start_date"];
            readonly type: "object";
            readonly properties: {
                readonly subscription_id: {
                    readonly title: "Subscription id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly reference: {
                    readonly title: "Reference";
                    readonly description: "Third-party reference ID";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 45;
                };
                readonly customer: {
                    readonly required: readonly ["email", "first_name", "last_name"];
                    readonly type: "object";
                    readonly properties: {
                        readonly customer_id: {
                            readonly title: "Customer id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly email: {
                            readonly title: "Email";
                            readonly type: "string";
                            readonly format: "email";
                            readonly maxLength: 254;
                            readonly minLength: 1;
                        };
                        readonly first_name: {
                            readonly title: "First name";
                            readonly type: "string";
                            readonly maxLength: 45;
                            readonly minLength: 1;
                        };
                        readonly last_name: {
                            readonly title: "Last name";
                            readonly type: "string";
                            readonly maxLength: 45;
                            readonly minLength: 1;
                        };
                        readonly reference: {
                            readonly title: "Reference";
                            readonly description: "Third-party reference ID";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 45;
                        };
                        readonly address: {
                            readonly title: "Address";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly city: {
                            readonly title: "City";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly state: {
                            readonly title: "State";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly zipcode: {
                            readonly title: "Zipcode";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 10;
                        };
                        readonly country: {
                            readonly title: "Country";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 2;
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly plan: {
                    readonly required: readonly ["frequency", "currency", "amount"];
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly title: "Name";
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly minLength: 1;
                        };
                        readonly plan_id: {
                            readonly title: "Plan id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly frequency: {
                            readonly title: "Frequency";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly frequency_unit: {
                            readonly title: "Frequency unit";
                            readonly type: "string";
                            readonly enum: readonly ["D", "W", "M", "Y"];
                            readonly description: "`D` `W` `M` `Y`";
                        };
                        readonly billing_cycles: {
                            readonly title: "Billing cycles";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                            readonly description: "`KES` `USD` `EUR` `GBP`";
                        };
                        readonly amount: {
                            readonly title: "Amount";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly payment_method: {
                    readonly title: "Payment method";
                    readonly type: "string";
                    readonly enum: readonly ["CARD-PAYMENT"];
                    readonly description: "`CARD-PAYMENT`";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly enum: readonly ["PENDING", "ACTIVE", "CANCELED", "COMPLETED", "FAILED"];
                    readonly description: "`PENDING` `ACTIVE` `CANCELED` `COMPLETED` `FAILED`";
                };
                readonly start_date: {
                    readonly title: "Start date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly completed_cycles: {
                    readonly title: "Completed cycles";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly setup_url: {
                    readonly title: "Setup url";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique id value identifying this Subscription.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["customer", "plan", "start_date"];
            readonly type: "object";
            readonly properties: {
                readonly subscription_id: {
                    readonly title: "Subscription id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly reference: {
                    readonly title: "Reference";
                    readonly description: "Third-party reference ID";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 45;
                };
                readonly customer: {
                    readonly required: readonly ["email", "first_name", "last_name"];
                    readonly type: "object";
                    readonly properties: {
                        readonly customer_id: {
                            readonly title: "Customer id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly email: {
                            readonly title: "Email";
                            readonly type: "string";
                            readonly format: "email";
                            readonly maxLength: 254;
                            readonly minLength: 1;
                        };
                        readonly first_name: {
                            readonly title: "First name";
                            readonly type: "string";
                            readonly maxLength: 45;
                            readonly minLength: 1;
                        };
                        readonly last_name: {
                            readonly title: "Last name";
                            readonly type: "string";
                            readonly maxLength: 45;
                            readonly minLength: 1;
                        };
                        readonly reference: {
                            readonly title: "Reference";
                            readonly description: "Third-party reference ID";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 45;
                        };
                        readonly address: {
                            readonly title: "Address";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly city: {
                            readonly title: "City";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly state: {
                            readonly title: "State";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly zipcode: {
                            readonly title: "Zipcode";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 10;
                        };
                        readonly country: {
                            readonly title: "Country";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 2;
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly plan: {
                    readonly required: readonly ["frequency", "currency", "amount"];
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly title: "Name";
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly minLength: 1;
                        };
                        readonly plan_id: {
                            readonly title: "Plan id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly frequency: {
                            readonly title: "Frequency";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly frequency_unit: {
                            readonly title: "Frequency unit";
                            readonly type: "string";
                            readonly enum: readonly ["D", "W", "M", "Y"];
                            readonly description: "`D` `W` `M` `Y`";
                        };
                        readonly billing_cycles: {
                            readonly title: "Billing cycles";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                            readonly description: "`KES` `USD` `EUR` `GBP`";
                        };
                        readonly amount: {
                            readonly title: "Amount";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly payment_method: {
                    readonly title: "Payment method";
                    readonly type: "string";
                    readonly enum: readonly ["CARD-PAYMENT"];
                    readonly description: "`CARD-PAYMENT`";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly enum: readonly ["PENDING", "ACTIVE", "CANCELED", "COMPLETED", "FAILED"];
                    readonly description: "`PENDING` `ACTIVE` `CANCELED` `COMPLETED` `FAILED`";
                };
                readonly start_date: {
                    readonly title: "Start date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly completed_cycles: {
                    readonly title: "Completed cycles";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly setup_url: {
                    readonly title: "Setup url";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SubscriptionsUnsubscribe: {
    readonly body: {
        readonly required: readonly ["customer", "plan", "start_date"];
        readonly type: "object";
        readonly properties: {
            readonly subscription_id: {
                readonly title: "Subscription id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly reference: {
                readonly title: "Reference";
                readonly description: "Third-party reference ID";
                readonly type: readonly ["string", "null"];
                readonly maxLength: 45;
            };
            readonly customer: {
                readonly required: readonly ["email", "first_name", "last_name"];
                readonly type: "object";
                readonly properties: {
                    readonly customer_id: {
                        readonly title: "Customer id";
                        readonly type: "string";
                        readonly readOnly: true;
                    };
                    readonly email: {
                        readonly title: "Email";
                        readonly type: "string";
                        readonly format: "email";
                        readonly maxLength: 254;
                        readonly minLength: 1;
                    };
                    readonly first_name: {
                        readonly title: "First name";
                        readonly type: "string";
                        readonly maxLength: 45;
                        readonly minLength: 1;
                    };
                    readonly last_name: {
                        readonly title: "Last name";
                        readonly type: "string";
                        readonly maxLength: 45;
                        readonly minLength: 1;
                    };
                    readonly reference: {
                        readonly title: "Reference";
                        readonly description: "Third-party reference ID";
                        readonly type: readonly ["string", "null"];
                        readonly maxLength: 45;
                    };
                    readonly address: {
                        readonly title: "Address";
                        readonly type: readonly ["string", "null"];
                        readonly maxLength: 50;
                    };
                    readonly city: {
                        readonly title: "City";
                        readonly type: readonly ["string", "null"];
                        readonly maxLength: 50;
                    };
                    readonly state: {
                        readonly title: "State";
                        readonly type: readonly ["string", "null"];
                        readonly maxLength: 50;
                    };
                    readonly zipcode: {
                        readonly title: "Zipcode";
                        readonly type: readonly ["string", "null"];
                        readonly maxLength: 10;
                    };
                    readonly country: {
                        readonly title: "Country";
                        readonly type: readonly ["string", "null"];
                        readonly maxLength: 2;
                    };
                    readonly created_at: {
                        readonly title: "Created at";
                        readonly type: readonly ["string", "null"];
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                    readonly updated_at: {
                        readonly title: "Updated at";
                        readonly type: readonly ["string", "null"];
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                };
            };
            readonly plan: {
                readonly required: readonly ["frequency", "currency", "amount"];
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly title: "Name";
                        readonly type: "string";
                        readonly maxLength: 32;
                        readonly minLength: 1;
                    };
                    readonly plan_id: {
                        readonly title: "Plan id";
                        readonly type: "string";
                        readonly readOnly: true;
                    };
                    readonly frequency: {
                        readonly title: "Frequency";
                        readonly type: "integer";
                        readonly maximum: 2147483647;
                        readonly minimum: -2147483648;
                    };
                    readonly frequency_unit: {
                        readonly title: "Frequency unit";
                        readonly type: "string";
                        readonly enum: readonly ["D", "W", "M", "Y"];
                    };
                    readonly billing_cycles: {
                        readonly title: "Billing cycles";
                        readonly type: "integer";
                        readonly maximum: 2147483647;
                        readonly minimum: -2147483648;
                    };
                    readonly currency: {
                        readonly title: "Currency";
                        readonly type: "string";
                        readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    };
                    readonly amount: {
                        readonly title: "Amount";
                        readonly type: "string";
                        readonly format: "decimal";
                    };
                    readonly created_at: {
                        readonly title: "Created at";
                        readonly type: readonly ["string", "null"];
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                    readonly updated_at: {
                        readonly title: "Updated at";
                        readonly type: readonly ["string", "null"];
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                };
            };
            readonly payment_method: {
                readonly title: "Payment method";
                readonly type: "string";
                readonly enum: readonly ["CARD-PAYMENT"];
            };
            readonly status: {
                readonly title: "Status";
                readonly type: "string";
                readonly enum: readonly ["PENDING", "ACTIVE", "CANCELED", "COMPLETED", "FAILED"];
            };
            readonly start_date: {
                readonly title: "Start date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly completed_cycles: {
                readonly title: "Completed cycles";
                readonly type: "integer";
                readonly maximum: 2147483647;
                readonly minimum: -2147483648;
            };
            readonly setup_url: {
                readonly title: "Setup url";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
            readonly updated_at: {
                readonly title: "Updated at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique id value identifying this Subscription.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly required: readonly ["customer", "plan", "start_date"];
            readonly type: "object";
            readonly properties: {
                readonly subscription_id: {
                    readonly title: "Subscription id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly reference: {
                    readonly title: "Reference";
                    readonly description: "Third-party reference ID";
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 45;
                };
                readonly customer: {
                    readonly required: readonly ["email", "first_name", "last_name"];
                    readonly type: "object";
                    readonly properties: {
                        readonly customer_id: {
                            readonly title: "Customer id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly email: {
                            readonly title: "Email";
                            readonly type: "string";
                            readonly format: "email";
                            readonly maxLength: 254;
                            readonly minLength: 1;
                        };
                        readonly first_name: {
                            readonly title: "First name";
                            readonly type: "string";
                            readonly maxLength: 45;
                            readonly minLength: 1;
                        };
                        readonly last_name: {
                            readonly title: "Last name";
                            readonly type: "string";
                            readonly maxLength: 45;
                            readonly minLength: 1;
                        };
                        readonly reference: {
                            readonly title: "Reference";
                            readonly description: "Third-party reference ID";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 45;
                        };
                        readonly address: {
                            readonly title: "Address";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly city: {
                            readonly title: "City";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly state: {
                            readonly title: "State";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 50;
                        };
                        readonly zipcode: {
                            readonly title: "Zipcode";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 10;
                        };
                        readonly country: {
                            readonly title: "Country";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 2;
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly plan: {
                    readonly required: readonly ["frequency", "currency", "amount"];
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly title: "Name";
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly minLength: 1;
                        };
                        readonly plan_id: {
                            readonly title: "Plan id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly frequency: {
                            readonly title: "Frequency";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly frequency_unit: {
                            readonly title: "Frequency unit";
                            readonly type: "string";
                            readonly enum: readonly ["D", "W", "M", "Y"];
                            readonly description: "`D` `W` `M` `Y`";
                        };
                        readonly billing_cycles: {
                            readonly title: "Billing cycles";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                            readonly description: "`KES` `USD` `EUR` `GBP`";
                        };
                        readonly amount: {
                            readonly title: "Amount";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly payment_method: {
                    readonly title: "Payment method";
                    readonly type: "string";
                    readonly enum: readonly ["CARD-PAYMENT"];
                    readonly description: "`CARD-PAYMENT`";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly enum: readonly ["PENDING", "ACTIVE", "CANCELED", "COMPLETED", "FAILED"];
                    readonly description: "`PENDING` `ACTIVE` `CANCELED` `COMPLETED` `FAILED`";
                };
                readonly start_date: {
                    readonly title: "Start date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly completed_cycles: {
                    readonly title: "Completed cycles";
                    readonly type: "integer";
                    readonly maximum: 2147483647;
                    readonly minimum: -2147483648;
                };
                readonly setup_url: {
                    readonly title: "Setup url";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TransactionsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly trans_type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly wallet_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["invoice"];
                        readonly type: "object";
                        readonly properties: {
                            readonly transaction_id: {
                                readonly title: "Transaction id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly invoice: {
                                readonly required: readonly ["provider", "value"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly invoice_id: {
                                        readonly title: "Invoice id";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly state: {
                                        readonly title: "State";
                                        readonly type: "string";
                                        readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                                        readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                                    };
                                    readonly provider: {
                                        readonly title: "Provider";
                                        readonly type: "string";
                                        readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                                        readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                                    };
                                    readonly charges: {
                                        readonly title: "Charges";
                                        readonly type: "string";
                                        readonly format: "decimal";
                                    };
                                    readonly net_amount: {
                                        readonly title: "Net amount";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly currency: {
                                        readonly title: "Currency";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly value: {
                                        readonly title: "Value";
                                        readonly type: "string";
                                        readonly format: "decimal";
                                    };
                                    readonly account: {
                                        readonly title: "Account";
                                        readonly description: "Depositing account, email or phone number";
                                        readonly type: readonly ["string", "null"];
                                        readonly maxLength: 140;
                                    };
                                    readonly api_ref: {
                                        readonly title: "Api ref";
                                        readonly description: "API tracking reference number";
                                        readonly type: readonly ["string", "null"];
                                        readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                        readonly maxLength: 140;
                                    };
                                    readonly clearing_status: {
                                        readonly title: "Clearing status";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly mpesa_reference: {
                                        readonly title: "Mpesa reference";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly host: {
                                        readonly title: "Host";
                                        readonly description: "Payment origin host i.e domain making the payment";
                                        readonly type: readonly ["string", "null"];
                                        readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                                        readonly maxLength: 200;
                                    };
                                    readonly retry_count: {
                                        readonly title: "Retry count";
                                        readonly type: "integer";
                                        readonly maximum: 2147483647;
                                        readonly minimum: -2147483648;
                                    };
                                    readonly failed_reason: {
                                        readonly title: "Failed reason";
                                        readonly type: readonly ["string", "null"];
                                    };
                                    readonly failed_code: {
                                        readonly title: "Failed code";
                                        readonly type: readonly ["string", "null"];
                                        readonly maxLength: 45;
                                    };
                                    readonly failed_code_link: {
                                        readonly title: "Failed code link";
                                        readonly type: "string";
                                        readonly readOnly: true;
                                    };
                                    readonly created_at: {
                                        readonly title: "Created at";
                                        readonly type: readonly ["string", "null"];
                                        readonly format: "date-time";
                                        readonly readOnly: true;
                                    };
                                    readonly updated_at: {
                                        readonly title: "Updated at";
                                        readonly type: readonly ["string", "null"];
                                        readonly format: "date-time";
                                        readonly readOnly: true;
                                    };
                                };
                            };
                            readonly currency: {
                                readonly title: "Currency";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly value: {
                                readonly title: "Value";
                                readonly type: "string";
                                readonly format: "decimal";
                                readonly readOnly: true;
                            };
                            readonly running_balance: {
                                readonly title: "Running balance";
                                readonly type: "string";
                                readonly format: "decimal";
                                readonly readOnly: true;
                            };
                            readonly narrative: {
                                readonly title: "Narrative";
                                readonly type: readonly ["string", "null"];
                            };
                            readonly trans_type: {
                                readonly title: "Trans type";
                                readonly type: "string";
                                readonly enum: readonly ["SALE", "ADJUSTMENT", "PAYOUT", "CHARGE", "AIRTIME", "DEPOSIT", "EXCHANGE", "UNMARKED"];
                                readonly description: "`SALE` `ADJUSTMENT` `PAYOUT` `CHARGE` `AIRTIME` `DEPOSIT` `EXCHANGE` `UNMARKED`";
                            };
                            readonly status: {
                                readonly title: "Status";
                                readonly type: "string";
                                readonly enum: readonly ["AVAILABLE", "CLEARING", "ON-HOLD", "CANCELLED", "CHARGEBACK-PENDING", "REFUNDED", "ADJUSTMENT"];
                                readonly description: "`AVAILABLE` `CLEARING` `ON-HOLD` `CANCELLED` `CHARGEBACK-PENDING` `REFUNDED` `ADJUSTMENT`";
                            };
                            readonly created_at: {
                                readonly title: "Created at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TransactionsRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique id value identifying this transaction.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["invoice"];
            readonly type: "object";
            readonly properties: {
                readonly transaction_id: {
                    readonly title: "Transaction id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly invoice: {
                    readonly required: readonly ["provider", "value"];
                    readonly type: "object";
                    readonly properties: {
                        readonly invoice_id: {
                            readonly title: "Invoice id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly state: {
                            readonly title: "State";
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                            readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                        };
                        readonly provider: {
                            readonly title: "Provider";
                            readonly type: "string";
                            readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                            readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                        };
                        readonly charges: {
                            readonly title: "Charges";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly net_amount: {
                            readonly title: "Net amount";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly value: {
                            readonly title: "Value";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly account: {
                            readonly title: "Account";
                            readonly description: "Depositing account, email or phone number";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 140;
                        };
                        readonly api_ref: {
                            readonly title: "Api ref";
                            readonly description: "API tracking reference number";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 140;
                        };
                        readonly clearing_status: {
                            readonly title: "Clearing status";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly mpesa_reference: {
                            readonly title: "Mpesa reference";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly host: {
                            readonly title: "Host";
                            readonly description: "Payment origin host i.e domain making the payment";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                            readonly maxLength: 200;
                        };
                        readonly retry_count: {
                            readonly title: "Retry count";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly failed_reason: {
                            readonly title: "Failed reason";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly failed_code: {
                            readonly title: "Failed code";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 45;
                        };
                        readonly failed_code_link: {
                            readonly title: "Failed code link";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly value: {
                    readonly title: "Value";
                    readonly type: "string";
                    readonly format: "decimal";
                    readonly readOnly: true;
                };
                readonly running_balance: {
                    readonly title: "Running balance";
                    readonly type: "string";
                    readonly format: "decimal";
                    readonly readOnly: true;
                };
                readonly narrative: {
                    readonly title: "Narrative";
                    readonly type: readonly ["string", "null"];
                };
                readonly trans_type: {
                    readonly title: "Trans type";
                    readonly type: "string";
                    readonly enum: readonly ["SALE", "ADJUSTMENT", "PAYOUT", "CHARGE", "AIRTIME", "DEPOSIT", "EXCHANGE", "UNMARKED"];
                    readonly description: "`SALE` `ADJUSTMENT` `PAYOUT` `CHARGE` `AIRTIME` `DEPOSIT` `EXCHANGE` `UNMARKED`";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly enum: readonly ["AVAILABLE", "CLEARING", "ON-HOLD", "CANCELLED", "CHARGEBACK-PENDING", "REFUNDED", "ADJUSTMENT"];
                    readonly description: "`AVAILABLE` `CLEARING` `ON-HOLD` `CANCELLED` `CHARGEBACK-PENDING` `REFUNDED` `ADJUSTMENT`";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WalletsCreate: {
    readonly body: {
        readonly required: readonly ["label"];
        readonly type: "object";
        readonly properties: {
            readonly wallet_id: {
                readonly title: "Wallet id";
                readonly type: "string";
                readonly readOnly: true;
            };
            readonly currency: {
                readonly title: "Currency";
                readonly type: "string";
                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
            };
            readonly wallet_type: {
                readonly title: "Wallet type";
                readonly type: "string";
                readonly enum: readonly ["SETTLEMENT", "WORKING"];
            };
            readonly can_disburse: {
                readonly title: "Can disburse";
                readonly type: "boolean";
            };
            readonly label: {
                readonly title: "Label";
                readonly type: "string";
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly minLength: 1;
            };
            readonly created_at: {
                readonly title: "Created at";
                readonly type: readonly ["string", "null"];
                readonly format: "date-time";
                readonly readOnly: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly required: readonly ["label"];
            readonly type: "object";
            readonly properties: {
                readonly wallet_id: {
                    readonly title: "Wallet id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly wallet_type: {
                    readonly title: "Wallet type";
                    readonly type: "string";
                    readonly enum: readonly ["SETTLEMENT", "WORKING"];
                    readonly description: "`SETTLEMENT` `WORKING`";
                };
                readonly can_disburse: {
                    readonly title: "Can disburse";
                    readonly type: "boolean";
                };
                readonly label: {
                    readonly title: "Label";
                    readonly type: "string";
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly minLength: 1;
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WalletsExchange: {
    readonly body: {
        readonly required: readonly ["currency", "amount", "action"];
        readonly type: "object";
        readonly properties: {
            readonly currency: {
                readonly title: "Currency";
                readonly type: "string";
                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
            };
            readonly amount: {
                readonly title: "Amount";
                readonly type: "string";
                readonly format: "decimal";
            };
            readonly action: {
                readonly title: "Action";
                readonly type: "string";
                readonly enum: readonly ["QUOTE", "EXCHANGE"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique integer value identifying this wallet.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["rate", "fxe_amount", "status", "currency", "narrative"];
            readonly type: "object";
            readonly properties: {
                readonly rate: {
                    readonly title: "Rate";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly fxe_amount: {
                    readonly title: "Fxe amount";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly minLength: 1;
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly narrative: {
                    readonly title: "Narrative";
                    readonly type: "string";
                    readonly minLength: 1;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WalletsIntraTransfer: {
    readonly body: {
        readonly required: readonly ["wallet_id", "amount", "narrative"];
        readonly type: "object";
        readonly properties: {
            readonly wallet_id: {
                readonly title: "Wallet id";
                readonly description: "Receiving wallet";
                readonly type: "string";
                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                readonly minLength: 1;
            };
            readonly amount: {
                readonly title: "Amount";
                readonly type: "string";
                readonly format: "decimal";
            };
            readonly narrative: {
                readonly title: "Narrative";
                readonly type: "string";
                readonly pattern: "^[^<>%;$]+$";
                readonly minLength: 1;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique integer value identifying this wallet.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["available_balance"];
            readonly type: "object";
            readonly properties: {
                readonly wallet_id: {
                    readonly title: "Wallet id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly label: {
                    readonly title: "Label";
                    readonly type: "string";
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 40;
                    readonly minLength: 1;
                };
                readonly can_disburse: {
                    readonly title: "Can disburse";
                    readonly type: "boolean";
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly wallet_type: {
                    readonly title: "Wallet type";
                    readonly type: "string";
                    readonly enum: readonly ["SETTLEMENT", "WORKING"];
                    readonly description: "`SETTLEMENT` `WORKING`";
                };
                readonly current_balance: {
                    readonly title: "Current balance";
                    readonly type: "string";
                    readonly format: "decimal";
                    readonly readOnly: true;
                };
                readonly available_balance: {
                    readonly title: "Available balance";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WalletsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly record_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly label: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly wallet_type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly can_disburse: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A page number within the paginated result set.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["count", "results"];
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly previous: {
                    readonly type: readonly ["string", "null"];
                    readonly format: "uri";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["available_balance"];
                        readonly type: "object";
                        readonly properties: {
                            readonly wallet_id: {
                                readonly title: "Wallet id";
                                readonly type: "string";
                                readonly readOnly: true;
                            };
                            readonly label: {
                                readonly title: "Label";
                                readonly type: "string";
                                readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                                readonly maxLength: 40;
                                readonly minLength: 1;
                            };
                            readonly can_disburse: {
                                readonly title: "Can disburse";
                                readonly type: "boolean";
                            };
                            readonly currency: {
                                readonly title: "Currency";
                                readonly type: "string";
                                readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                                readonly description: "`KES` `USD` `EUR` `GBP`";
                            };
                            readonly wallet_type: {
                                readonly title: "Wallet type";
                                readonly type: "string";
                                readonly enum: readonly ["SETTLEMENT", "WORKING"];
                                readonly description: "`SETTLEMENT` `WORKING`";
                            };
                            readonly current_balance: {
                                readonly title: "Current balance";
                                readonly type: "string";
                                readonly format: "decimal";
                                readonly readOnly: true;
                            };
                            readonly available_balance: {
                                readonly title: "Available balance";
                                readonly type: "string";
                                readonly format: "decimal";
                            };
                            readonly updated_at: {
                                readonly title: "Updated at";
                                readonly type: readonly ["string", "null"];
                                readonly format: "date-time";
                                readonly readOnly: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WalletsRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique integer value identifying this wallet.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["available_balance"];
            readonly type: "object";
            readonly properties: {
                readonly wallet_id: {
                    readonly title: "Wallet id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly label: {
                    readonly title: "Label";
                    readonly type: "string";
                    readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                    readonly maxLength: 40;
                    readonly minLength: 1;
                };
                readonly can_disburse: {
                    readonly title: "Can disburse";
                    readonly type: "boolean";
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly enum: readonly ["KES", "USD", "EUR", "GBP"];
                    readonly description: "`KES` `USD` `EUR` `GBP`";
                };
                readonly wallet_type: {
                    readonly title: "Wallet type";
                    readonly type: "string";
                    readonly enum: readonly ["SETTLEMENT", "WORKING"];
                    readonly description: "`SETTLEMENT` `WORKING`";
                };
                readonly current_balance: {
                    readonly title: "Current balance";
                    readonly type: "string";
                    readonly format: "decimal";
                    readonly readOnly: true;
                };
                readonly available_balance: {
                    readonly title: "Available balance";
                    readonly type: "string";
                    readonly format: "decimal";
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WalletsTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique integer value identifying this wallet.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly required: readonly ["invoice"];
            readonly type: "object";
            readonly properties: {
                readonly transaction_id: {
                    readonly title: "Transaction id";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly invoice: {
                    readonly required: readonly ["provider", "value"];
                    readonly type: "object";
                    readonly properties: {
                        readonly invoice_id: {
                            readonly title: "Invoice id";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly state: {
                            readonly title: "State";
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "PROCESSING", "FAILED", "CANCELED", "PARTIAL", "COMPLETE", "RETRY"];
                            readonly description: "`PENDING` `PROCESSING` `FAILED` `CANCELED` `PARTIAL` `COMPLETE` `RETRY`";
                        };
                        readonly provider: {
                            readonly title: "Provider";
                            readonly type: "string";
                            readonly enum: readonly ["M-PESA", "CARD-PAYMENT", "BITCOIN", "BANK-ACH", "COOP_B2B"];
                            readonly description: "`M-PESA` `CARD-PAYMENT` `BITCOIN` `BANK-ACH` `COOP_B2B`";
                        };
                        readonly charges: {
                            readonly title: "Charges";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly net_amount: {
                            readonly title: "Net amount";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly currency: {
                            readonly title: "Currency";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly value: {
                            readonly title: "Value";
                            readonly type: "string";
                            readonly format: "decimal";
                        };
                        readonly account: {
                            readonly title: "Account";
                            readonly description: "Depositing account, email or phone number";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 140;
                        };
                        readonly api_ref: {
                            readonly title: "Api ref";
                            readonly description: "API tracking reference number";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_ ]+$";
                            readonly maxLength: 140;
                        };
                        readonly clearing_status: {
                            readonly title: "Clearing status";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly mpesa_reference: {
                            readonly title: "Mpesa reference";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly host: {
                            readonly title: "Host";
                            readonly description: "Payment origin host i.e domain making the payment";
                            readonly type: readonly ["string", "null"];
                            readonly pattern: "^[a-zA-Z0-9-_./=:?# ]+$";
                            readonly maxLength: 200;
                        };
                        readonly retry_count: {
                            readonly title: "Retry count";
                            readonly type: "integer";
                            readonly maximum: 2147483647;
                            readonly minimum: -2147483648;
                        };
                        readonly failed_reason: {
                            readonly title: "Failed reason";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly failed_code: {
                            readonly title: "Failed code";
                            readonly type: readonly ["string", "null"];
                            readonly maxLength: 45;
                        };
                        readonly failed_code_link: {
                            readonly title: "Failed code link";
                            readonly type: "string";
                            readonly readOnly: true;
                        };
                        readonly created_at: {
                            readonly title: "Created at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                        readonly updated_at: {
                            readonly title: "Updated at";
                            readonly type: readonly ["string", "null"];
                            readonly format: "date-time";
                            readonly readOnly: true;
                        };
                    };
                };
                readonly currency: {
                    readonly title: "Currency";
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly value: {
                    readonly title: "Value";
                    readonly type: "string";
                    readonly format: "decimal";
                    readonly readOnly: true;
                };
                readonly running_balance: {
                    readonly title: "Running balance";
                    readonly type: "string";
                    readonly format: "decimal";
                    readonly readOnly: true;
                };
                readonly narrative: {
                    readonly title: "Narrative";
                    readonly type: readonly ["string", "null"];
                };
                readonly trans_type: {
                    readonly title: "Trans type";
                    readonly type: "string";
                    readonly enum: readonly ["SALE", "ADJUSTMENT", "PAYOUT", "CHARGE", "AIRTIME", "DEPOSIT", "EXCHANGE", "UNMARKED"];
                    readonly description: "`SALE` `ADJUSTMENT` `PAYOUT` `CHARGE` `AIRTIME` `DEPOSIT` `EXCHANGE` `UNMARKED`";
                };
                readonly status: {
                    readonly title: "Status";
                    readonly type: "string";
                    readonly enum: readonly ["AVAILABLE", "CLEARING", "ON-HOLD", "CANCELLED", "CHARGEBACK-PENDING", "REFUNDED", "ADJUSTMENT"];
                    readonly description: "`AVAILABLE` `CLEARING` `ON-HOLD` `CANCELLED` `CHARGEBACK-PENDING` `REFUNDED` `ADJUSTMENT`";
                };
                readonly created_at: {
                    readonly title: "Created at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly updated_at: {
                    readonly title: "Updated at";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { ChargebacksCreate, ChargebacksList, ChargebacksRead, CheckoutCreate, CheckoutDetails, CustomersList, CustomersRead, MpesaPaybillAccountsCreate, MpesaPaybillAccountsList, MpesaPaybillAccountsRead, PaymentCoopAgentDepositCreate, PaymentMpesaStkPushCreate, PaymentStatusCreate, PaymentlinksCreate, PaymentlinksList, PaymentlinksRead, PaymentlinksUpdate, SendMoneyApproveCreate, SendMoneyCancelCreate, SendMoneyInitiateCreate, SendMoneyStatusCreate, SubscriptionsCreate, SubscriptionsCustomersCreate, SubscriptionsCustomersList, SubscriptionsCustomersRead, SubscriptionsCustomersUpdate, SubscriptionsList, SubscriptionsPlansCreate, SubscriptionsPlansList, SubscriptionsPlansRead, SubscriptionsPlansUpdate, SubscriptionsRead, SubscriptionsTransactions, SubscriptionsUnsubscribe, TransactionsList, TransactionsRead, WalletsCreate, WalletsExchange, WalletsIntraTransfer, WalletsList, WalletsRead, WalletsTransactions };
