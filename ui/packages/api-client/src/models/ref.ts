/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.18.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Extension reference object. The name is mandatory
 * @export
 * @interface Ref
 */
export interface Ref {
    /**
     * Extension group
     * @type {string}
     * @memberof Ref
     */
    'group'?: string;
    /**
     * Extension kind
     * @type {string}
     * @memberof Ref
     */
    'kind'?: string;
    /**
     * Extension name. This field is mandatory
     * @type {string}
     * @memberof Ref
     */
    'name': string;
    /**
     * Extension version
     * @type {string}
     * @memberof Ref
     */
    'version'?: string;
}

