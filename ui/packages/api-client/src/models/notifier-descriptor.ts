/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.0-SNAPSHOT
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
import { NotifierDescriptorSpec } from './notifier-descriptor-spec';

/**
 * 
 * @export
 * @interface NotifierDescriptor
 */
export interface NotifierDescriptor {
    /**
     * 
     * @type {string}
     * @memberof NotifierDescriptor
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof NotifierDescriptor
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof NotifierDescriptor
     */
    'metadata': Metadata;
    /**
     * 
     * @type {NotifierDescriptorSpec}
     * @memberof NotifierDescriptor
     */
    'spec'?: NotifierDescriptorSpec;
}

