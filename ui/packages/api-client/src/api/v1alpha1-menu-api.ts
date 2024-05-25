/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Menu } from '../models';
// @ts-ignore
import { MenuList } from '../models';
/**
 * V1alpha1MenuApi - axios parameter creator
 * @export
 */
export const V1alpha1MenuApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create v1alpha1/Menu
         * @param {Menu} [menu] Fresh menu
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createV1alpha1Menu: async (menu?: Menu, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/menus`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(menu, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete v1alpha1/Menu
         * @param {string} name Name of menu
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteV1alpha1Menu: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteV1alpha1Menu', 'name', name)
            const localVarPath = `/api/v1alpha1/menus/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get v1alpha1/Menu
         * @param {string} name Name of menu
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getV1alpha1Menu: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getV1alpha1Menu', 'name', name)
            const localVarPath = `/api/v1alpha1/menus/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List v1alpha1/Menu
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listV1alpha1Menu: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/menus`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update v1alpha1/Menu
         * @param {string} name Name of menu
         * @param {Menu} [menu] Updated menu
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateV1alpha1Menu: async (name: string, menu?: Menu, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateV1alpha1Menu', 'name', name)
            const localVarPath = `/api/v1alpha1/menus/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(menu, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * V1alpha1MenuApi - functional programming interface
 * @export
 */
export const V1alpha1MenuApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = V1alpha1MenuApiAxiosParamCreator(configuration)
    return {
        /**
         * Create v1alpha1/Menu
         * @param {Menu} [menu] Fresh menu
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createV1alpha1Menu(menu?: Menu, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Menu>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createV1alpha1Menu(menu, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuApi.createV1alpha1Menu']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete v1alpha1/Menu
         * @param {string} name Name of menu
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteV1alpha1Menu(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteV1alpha1Menu(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuApi.deleteV1alpha1Menu']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get v1alpha1/Menu
         * @param {string} name Name of menu
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getV1alpha1Menu(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Menu>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getV1alpha1Menu(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuApi.getV1alpha1Menu']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List v1alpha1/Menu
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listV1alpha1Menu(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MenuList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listV1alpha1Menu(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuApi.listV1alpha1Menu']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update v1alpha1/Menu
         * @param {string} name Name of menu
         * @param {Menu} [menu] Updated menu
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateV1alpha1Menu(name: string, menu?: Menu, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Menu>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateV1alpha1Menu(name, menu, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1MenuApi.updateV1alpha1Menu']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * V1alpha1MenuApi - factory interface
 * @export
 */
export const V1alpha1MenuApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = V1alpha1MenuApiFp(configuration)
    return {
        /**
         * Create v1alpha1/Menu
         * @param {V1alpha1MenuApiCreateV1alpha1MenuRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createV1alpha1Menu(requestParameters: V1alpha1MenuApiCreateV1alpha1MenuRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Menu> {
            return localVarFp.createV1alpha1Menu(requestParameters.menu, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete v1alpha1/Menu
         * @param {V1alpha1MenuApiDeleteV1alpha1MenuRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteV1alpha1Menu(requestParameters: V1alpha1MenuApiDeleteV1alpha1MenuRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteV1alpha1Menu(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get v1alpha1/Menu
         * @param {V1alpha1MenuApiGetV1alpha1MenuRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getV1alpha1Menu(requestParameters: V1alpha1MenuApiGetV1alpha1MenuRequest, options?: RawAxiosRequestConfig): AxiosPromise<Menu> {
            return localVarFp.getV1alpha1Menu(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List v1alpha1/Menu
         * @param {V1alpha1MenuApiListV1alpha1MenuRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listV1alpha1Menu(requestParameters: V1alpha1MenuApiListV1alpha1MenuRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<MenuList> {
            return localVarFp.listV1alpha1Menu(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Update v1alpha1/Menu
         * @param {V1alpha1MenuApiUpdateV1alpha1MenuRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateV1alpha1Menu(requestParameters: V1alpha1MenuApiUpdateV1alpha1MenuRequest, options?: RawAxiosRequestConfig): AxiosPromise<Menu> {
            return localVarFp.updateV1alpha1Menu(requestParameters.name, requestParameters.menu, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createV1alpha1Menu operation in V1alpha1MenuApi.
 * @export
 * @interface V1alpha1MenuApiCreateV1alpha1MenuRequest
 */
export interface V1alpha1MenuApiCreateV1alpha1MenuRequest {
    /**
     * Fresh menu
     * @type {Menu}
     * @memberof V1alpha1MenuApiCreateV1alpha1Menu
     */
    readonly menu?: Menu
}

/**
 * Request parameters for deleteV1alpha1Menu operation in V1alpha1MenuApi.
 * @export
 * @interface V1alpha1MenuApiDeleteV1alpha1MenuRequest
 */
export interface V1alpha1MenuApiDeleteV1alpha1MenuRequest {
    /**
     * Name of menu
     * @type {string}
     * @memberof V1alpha1MenuApiDeleteV1alpha1Menu
     */
    readonly name: string
}

/**
 * Request parameters for getV1alpha1Menu operation in V1alpha1MenuApi.
 * @export
 * @interface V1alpha1MenuApiGetV1alpha1MenuRequest
 */
export interface V1alpha1MenuApiGetV1alpha1MenuRequest {
    /**
     * Name of menu
     * @type {string}
     * @memberof V1alpha1MenuApiGetV1alpha1Menu
     */
    readonly name: string
}

/**
 * Request parameters for listV1alpha1Menu operation in V1alpha1MenuApi.
 * @export
 * @interface V1alpha1MenuApiListV1alpha1MenuRequest
 */
export interface V1alpha1MenuApiListV1alpha1MenuRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof V1alpha1MenuApiListV1alpha1Menu
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof V1alpha1MenuApiListV1alpha1Menu
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof V1alpha1MenuApiListV1alpha1Menu
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof V1alpha1MenuApiListV1alpha1Menu
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof V1alpha1MenuApiListV1alpha1Menu
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for updateV1alpha1Menu operation in V1alpha1MenuApi.
 * @export
 * @interface V1alpha1MenuApiUpdateV1alpha1MenuRequest
 */
export interface V1alpha1MenuApiUpdateV1alpha1MenuRequest {
    /**
     * Name of menu
     * @type {string}
     * @memberof V1alpha1MenuApiUpdateV1alpha1Menu
     */
    readonly name: string

    /**
     * Updated menu
     * @type {Menu}
     * @memberof V1alpha1MenuApiUpdateV1alpha1Menu
     */
    readonly menu?: Menu
}

/**
 * V1alpha1MenuApi - object-oriented interface
 * @export
 * @class V1alpha1MenuApi
 * @extends {BaseAPI}
 */
export class V1alpha1MenuApi extends BaseAPI {
    /**
     * Create v1alpha1/Menu
     * @param {V1alpha1MenuApiCreateV1alpha1MenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuApi
     */
    public createV1alpha1Menu(requestParameters: V1alpha1MenuApiCreateV1alpha1MenuRequest = {}, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuApiFp(this.configuration).createV1alpha1Menu(requestParameters.menu, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete v1alpha1/Menu
     * @param {V1alpha1MenuApiDeleteV1alpha1MenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuApi
     */
    public deleteV1alpha1Menu(requestParameters: V1alpha1MenuApiDeleteV1alpha1MenuRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuApiFp(this.configuration).deleteV1alpha1Menu(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get v1alpha1/Menu
     * @param {V1alpha1MenuApiGetV1alpha1MenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuApi
     */
    public getV1alpha1Menu(requestParameters: V1alpha1MenuApiGetV1alpha1MenuRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuApiFp(this.configuration).getV1alpha1Menu(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List v1alpha1/Menu
     * @param {V1alpha1MenuApiListV1alpha1MenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuApi
     */
    public listV1alpha1Menu(requestParameters: V1alpha1MenuApiListV1alpha1MenuRequest = {}, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuApiFp(this.configuration).listV1alpha1Menu(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update v1alpha1/Menu
     * @param {V1alpha1MenuApiUpdateV1alpha1MenuRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1MenuApi
     */
    public updateV1alpha1Menu(requestParameters: V1alpha1MenuApiUpdateV1alpha1MenuRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1MenuApiFp(this.configuration).updateV1alpha1Menu(requestParameters.name, requestParameters.menu, options).then((request) => request(this.axios, this.basePath));
    }
}

