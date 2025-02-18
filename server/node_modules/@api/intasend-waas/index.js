"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'intasend-waas/v1.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Chargebacks API
     *
     */
    SDK.prototype.chargebacks_list = function (metadata) {
        return this.core.fetch('/chargebacks/', 'get', metadata);
    };
    /**
     * Chargebacks API
     *
     */
    SDK.prototype.chargebacks_create = function (body) {
        return this.core.fetch('/chargebacks/', 'post', body);
    };
    /**
     * Chargebacks API
     *
     */
    SDK.prototype.chargebacks_read = function (metadata) {
        return this.core.fetch('/chargebacks/{id}/', 'get', metadata);
    };
    /**
     * Checkout and Express Links API
     *
     */
    SDK.prototype.checkout_create = function (body) {
        return this.core.fetch('/checkout/', 'post', body);
    };
    /**
     * Approve send money request
     *
     */
    SDK.prototype.checkout_details = function (body) {
        return this.core.fetch('/checkout/details/', 'post', body);
    };
    /**
     * Payment customers API
     *
     */
    SDK.prototype.customers_list = function (metadata) {
        return this.core.fetch('/customers/', 'get', metadata);
    };
    /**
     * Payment customers API
     *
     */
    SDK.prototype.customers_read = function (metadata) {
        return this.core.fetch('/customers/{id}/', 'get', metadata);
    };
    SDK.prototype.mpesaPaybillAccounts_list = function (metadata) {
        return this.core.fetch('/mpesa-paybill-accounts/', 'get', metadata);
    };
    SDK.prototype.mpesaPaybillAccounts_create = function (body) {
        return this.core.fetch('/mpesa-paybill-accounts/', 'post', body);
    };
    SDK.prototype.mpesaPaybillAccounts_read = function (metadata) {
        return this.core.fetch('/mpesa-paybill-accounts/{id}/', 'get', metadata);
    };
    /**
     * Generate payment reference number for deposit at Coop-Bank Mtaani Agents
     *
     */
    SDK.prototype.payment_coopAgentDeposit_create = function (body) {
        return this.core.fetch('/payment/coop-agent-deposit/', 'post', body);
    };
    /**
     * Send MPesa STK Push
     *
     */
    SDK.prototype.payment_mpesaStkPush_create = function (body) {
        return this.core.fetch('/payment/mpesa-stk-push/', 'post', body);
    };
    /**
     * Check payment status using invoice of checkout ID
     *
     */
    SDK.prototype.payment_status_create = function (body) {
        return this.core.fetch('/payment/status/', 'post', body);
    };
    /**
     * Payment links API
     *
     */
    SDK.prototype.paymentlinks_list = function (metadata) {
        return this.core.fetch('/paymentlinks/', 'get', metadata);
    };
    /**
     * Payment links API
     *
     */
    SDK.prototype.paymentlinks_create = function (body) {
        return this.core.fetch('/paymentlinks/', 'post', body);
    };
    /**
     * Payment links API
     *
     */
    SDK.prototype.paymentlinks_read = function (metadata) {
        return this.core.fetch('/paymentlinks/{id}/', 'get', metadata);
    };
    /**
     * Payment links API
     *
     */
    SDK.prototype.paymentlinks_update = function (body, metadata) {
        return this.core.fetch('/paymentlinks/{id}/', 'put', body, metadata);
    };
    /**
     * Approve send money request
     *
     */
    SDK.prototype.sendMoney_approve_create = function (body) {
        return this.core.fetch('/send-money/approve/', 'post', body);
    };
    /**
     * Returns a list of Bank Codes
     *
     */
    SDK.prototype.sendMoney_bankCodes_ke_list = function () {
        return this.core.fetch('/send-money/bank-codes/ke/', 'get');
    };
    /**
     * Cancel send money request
     *
     */
    SDK.prototype.sendMoney_cancel_create = function (body) {
        return this.core.fetch('/send-money/cancel/', 'post', body);
    };
    /**
     * Initiate or load a new send money request
     *
     */
    SDK.prototype.sendMoney_initiate_create = function (body) {
        return this.core.fetch('/send-money/initiate/', 'post', body);
    };
    /**
     * Check send money status
     *
     */
    SDK.prototype.sendMoney_status_create = function (body) {
        return this.core.fetch('/send-money/status/', 'post', body);
    };
    SDK.prototype.subscriptionsCustomers_list = function (metadata) {
        return this.core.fetch('/subscriptions-customers/', 'get', metadata);
    };
    SDK.prototype.subscriptionsCustomers_create = function (body) {
        return this.core.fetch('/subscriptions-customers/', 'post', body);
    };
    SDK.prototype.subscriptionsCustomers_read = function (metadata) {
        return this.core.fetch('/subscriptions-customers/{id}/', 'get', metadata);
    };
    SDK.prototype.subscriptionsCustomers_update = function (body, metadata) {
        return this.core.fetch('/subscriptions-customers/{id}/', 'put', body, metadata);
    };
    SDK.prototype.subscriptionsPlans_list = function (metadata) {
        return this.core.fetch('/subscriptions-plans/', 'get', metadata);
    };
    SDK.prototype.subscriptionsPlans_create = function (body) {
        return this.core.fetch('/subscriptions-plans/', 'post', body);
    };
    SDK.prototype.subscriptionsPlans_read = function (metadata) {
        return this.core.fetch('/subscriptions-plans/{id}/', 'get', metadata);
    };
    SDK.prototype.subscriptionsPlans_update = function (body, metadata) {
        return this.core.fetch('/subscriptions-plans/{id}/', 'put', body, metadata);
    };
    SDK.prototype.subscriptions_list = function (metadata) {
        return this.core.fetch('/subscriptions/', 'get', metadata);
    };
    SDK.prototype.subscriptions_create = function (body) {
        return this.core.fetch('/subscriptions/', 'post', body);
    };
    SDK.prototype.subscriptions_read = function (metadata) {
        return this.core.fetch('/subscriptions/{id}/', 'get', metadata);
    };
    /**
     * Cancel subscription
     *
     */
    SDK.prototype.subscriptions_unsubscribe = function (body, metadata) {
        return this.core.fetch('/subscriptions/{id}/unsubscribe/', 'post', body, metadata);
    };
    SDK.prototype.subscriptions_transactions = function (metadata) {
        return this.core.fetch('/subscriptions/{id}/transactions/', 'get', metadata);
    };
    /**
     * Retrieve wallet transactions by wallet_id, currency, trans_type, or date
     *
     */
    SDK.prototype.transactions_list = function (metadata) {
        return this.core.fetch('/transactions/', 'get', metadata);
    };
    /**
     * Retrieve wallet transactions by wallet_id, currency, trans_type, or date
     *
     */
    SDK.prototype.transactions_read = function (metadata) {
        return this.core.fetch('/transactions/{id}/', 'get', metadata);
    };
    SDK.prototype.wallets_list = function (metadata) {
        return this.core.fetch('/wallets/', 'get', metadata);
    };
    SDK.prototype.wallets_create = function (body) {
        return this.core.fetch('/wallets/', 'post', body);
    };
    SDK.prototype.wallets_read = function (metadata) {
        return this.core.fetch('/wallets/{id}/', 'get', metadata);
    };
    /**
     * Forex exchange API - Move money between wallets of different currencies
     *
     */
    SDK.prototype.wallets_exchange = function (body, metadata) {
        return this.core.fetch('/wallets/{id}/exchange/', 'post', body, metadata);
    };
    /**
     * Internal wallet to wallet transfers
     *
     */
    SDK.prototype.wallets_intra_transfer = function (body, metadata) {
        return this.core.fetch('/wallets/{id}/intra_transfer/', 'post', body, metadata);
    };
    /**
     * Get wallet statement (transactions performed)
     *
     */
    SDK.prototype.wallets_transactions = function (metadata) {
        return this.core.fetch('/wallets/{id}/transactions/', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
