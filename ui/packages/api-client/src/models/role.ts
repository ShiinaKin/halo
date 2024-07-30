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


// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { PolicyRule } from './policy-rule';

/**
 * 
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Role
     */
    'metadata': Metadata;
    /**
     * 
     * @type {Array<PolicyRule>}
     * @memberof Role
     */
    'rules': Array<PolicyRule>;
}

