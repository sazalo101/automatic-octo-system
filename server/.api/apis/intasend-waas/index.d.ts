import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Chargebacks API
     *
     */
    chargebacks_list(metadata?: types.ChargebacksListMetadataParam): Promise<FetchResponse<200, types.ChargebacksListResponse200>>;
    /**
     * Chargebacks API
     *
     */
    chargebacks_create(body: types.ChargebacksCreateBodyParam): Promise<FetchResponse<201, types.ChargebacksCreateResponse201>>;
    /**
     * Chargebacks API
     *
     */
    chargebacks_read(metadata: types.ChargebacksReadMetadataParam): Promise<FetchResponse<200, types.ChargebacksReadResponse200>>;
    /**
     * Checkout and Express Links API
     *
     */
    checkout_create(body: types.CheckoutCreateBodyParam): Promise<FetchResponse<201, types.CheckoutCreateResponse201>>;
    /**
     * Approve send money request
     *
     */
    checkout_details(body: types.CheckoutDetailsBodyParam): Promise<FetchResponse<200, types.CheckoutDetailsResponse200>>;
    /**
     * Payment customers API
     *
     */
    customers_list(metadata?: types.CustomersListMetadataParam): Promise<FetchResponse<200, types.CustomersListResponse200>>;
    /**
     * Payment customers API
     *
     */
    customers_read(metadata: types.CustomersReadMetadataParam): Promise<FetchResponse<200, types.CustomersReadResponse200>>;
    mpesaPaybillAccounts_list(metadata?: types.MpesaPaybillAccountsListMetadataParam): Promise<FetchResponse<200, types.MpesaPaybillAccountsListResponse200>>;
    mpesaPaybillAccounts_create(body: types.MpesaPaybillAccountsCreateBodyParam): Promise<FetchResponse<201, types.MpesaPaybillAccountsCreateResponse201>>;
    mpesaPaybillAccounts_read(metadata: types.MpesaPaybillAccountsReadMetadataParam): Promise<FetchResponse<200, types.MpesaPaybillAccountsReadResponse200>>;
    /**
     * Generate payment reference number for deposit at Coop-Bank Mtaani Agents
     *
     */
    payment_coopAgentDeposit_create(body: types.PaymentCoopAgentDepositCreateBodyParam): Promise<FetchResponse<200, types.PaymentCoopAgentDepositCreateResponse200>>;
    /**
     * Send MPesa STK Push
     *
     */
    payment_mpesaStkPush_create(body: types.PaymentMpesaStkPushCreateBodyParam): Promise<FetchResponse<200, types.PaymentMpesaStkPushCreateResponse200>>;
    /**
     * Check payment status using invoice of checkout ID
     *
     */
    payment_status_create(body: types.PaymentStatusCreateBodyParam): Promise<FetchResponse<200, types.PaymentStatusCreateResponse200>>;
    /**
     * Payment links API
     *
     */
    paymentlinks_list(metadata?: types.PaymentlinksListMetadataParam): Promise<FetchResponse<200, types.PaymentlinksListResponse200>>;
    /**
     * Payment links API
     *
     */
    paymentlinks_create(body: types.PaymentlinksCreateBodyParam): Promise<FetchResponse<201, types.PaymentlinksCreateResponse201>>;
    /**
     * Payment links API
     *
     */
    paymentlinks_read(metadata: types.PaymentlinksReadMetadataParam): Promise<FetchResponse<200, types.PaymentlinksReadResponse200>>;
    /**
     * Payment links API
     *
     */
    paymentlinks_update(body: types.PaymentlinksUpdateBodyParam, metadata: types.PaymentlinksUpdateMetadataParam): Promise<FetchResponse<200, types.PaymentlinksUpdateResponse200>>;
    /**
     * Approve send money request
     *
     */
    sendMoney_approve_create(body: types.SendMoneyApproveCreateBodyParam): Promise<FetchResponse<200, types.SendMoneyApproveCreateResponse200>>;
    /**
     * Returns a list of Bank Codes
     *
     */
    sendMoney_bankCodes_ke_list(): Promise<FetchResponse<number, unknown>>;
    /**
     * Cancel send money request
     *
     */
    sendMoney_cancel_create(body: types.SendMoneyCancelCreateBodyParam): Promise<FetchResponse<200, types.SendMoneyCancelCreateResponse200>>;
    /**
     * Initiate or load a new send money request
     *
     */
    sendMoney_initiate_create(body: types.SendMoneyInitiateCreateBodyParam): Promise<FetchResponse<200, types.SendMoneyInitiateCreateResponse200>>;
    /**
     * Check send money status
     *
     */
    sendMoney_status_create(body: types.SendMoneyStatusCreateBodyParam): Promise<FetchResponse<200, types.SendMoneyStatusCreateResponse200>>;
    subscriptionsCustomers_list(metadata?: types.SubscriptionsCustomersListMetadataParam): Promise<FetchResponse<200, types.SubscriptionsCustomersListResponse200>>;
    subscriptionsCustomers_create(body: types.SubscriptionsCustomersCreateBodyParam): Promise<FetchResponse<201, types.SubscriptionsCustomersCreateResponse201>>;
    subscriptionsCustomers_read(metadata: types.SubscriptionsCustomersReadMetadataParam): Promise<FetchResponse<200, types.SubscriptionsCustomersReadResponse200>>;
    subscriptionsCustomers_update(body: types.SubscriptionsCustomersUpdateBodyParam, metadata: types.SubscriptionsCustomersUpdateMetadataParam): Promise<FetchResponse<200, types.SubscriptionsCustomersUpdateResponse200>>;
    subscriptionsPlans_list(metadata?: types.SubscriptionsPlansListMetadataParam): Promise<FetchResponse<200, types.SubscriptionsPlansListResponse200>>;
    subscriptionsPlans_create(body: types.SubscriptionsPlansCreateBodyParam): Promise<FetchResponse<201, types.SubscriptionsPlansCreateResponse201>>;
    subscriptionsPlans_read(metadata: types.SubscriptionsPlansReadMetadataParam): Promise<FetchResponse<200, types.SubscriptionsPlansReadResponse200>>;
    subscriptionsPlans_update(body: types.SubscriptionsPlansUpdateBodyParam, metadata: types.SubscriptionsPlansUpdateMetadataParam): Promise<FetchResponse<200, types.SubscriptionsPlansUpdateResponse200>>;
    subscriptions_list(metadata?: types.SubscriptionsListMetadataParam): Promise<FetchResponse<200, types.SubscriptionsListResponse200>>;
    subscriptions_create(body: types.SubscriptionsCreateBodyParam): Promise<FetchResponse<201, types.SubscriptionsCreateResponse201>>;
    subscriptions_read(metadata: types.SubscriptionsReadMetadataParam): Promise<FetchResponse<200, types.SubscriptionsReadResponse200>>;
    /**
     * Cancel subscription
     *
     */
    subscriptions_unsubscribe(body: types.SubscriptionsUnsubscribeBodyParam, metadata: types.SubscriptionsUnsubscribeMetadataParam): Promise<FetchResponse<201, types.SubscriptionsUnsubscribeResponse201>>;
    subscriptions_transactions(metadata: types.SubscriptionsTransactionsMetadataParam): Promise<FetchResponse<200, types.SubscriptionsTransactionsResponse200>>;
    /**
     * Retrieve wallet transactions by wallet_id, currency, trans_type, or date
     *
     */
    transactions_list(metadata?: types.TransactionsListMetadataParam): Promise<FetchResponse<200, types.TransactionsListResponse200>>;
    /**
     * Retrieve wallet transactions by wallet_id, currency, trans_type, or date
     *
     */
    transactions_read(metadata: types.TransactionsReadMetadataParam): Promise<FetchResponse<200, types.TransactionsReadResponse200>>;
    wallets_list(metadata?: types.WalletsListMetadataParam): Promise<FetchResponse<200, types.WalletsListResponse200>>;
    wallets_create(body: types.WalletsCreateBodyParam): Promise<FetchResponse<201, types.WalletsCreateResponse201>>;
    wallets_read(metadata: types.WalletsReadMetadataParam): Promise<FetchResponse<200, types.WalletsReadResponse200>>;
    /**
     * Forex exchange API - Move money between wallets of different currencies
     *
     */
    wallets_exchange(body: types.WalletsExchangeBodyParam, metadata: types.WalletsExchangeMetadataParam): Promise<FetchResponse<200, types.WalletsExchangeResponse200>>;
    /**
     * Internal wallet to wallet transfers
     *
     */
    wallets_intra_transfer(body: types.WalletsIntraTransferBodyParam, metadata: types.WalletsIntraTransferMetadataParam): Promise<FetchResponse<200, types.WalletsIntraTransferResponse200>>;
    /**
     * Get wallet statement (transactions performed)
     *
     */
    wallets_transactions(metadata: types.WalletsTransactionsMetadataParam): Promise<FetchResponse<200, types.WalletsTransactionsResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
