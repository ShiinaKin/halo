/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { PostHit } from './post-hit';

/**
 * 
 * @export
 * @interface PostHits
 */
export interface PostHits {
    /**
     * 
     * @type {Array<PostHit>}
     * @memberof PostHits
     */
    'hits'?: Array<PostHit>;
    /**
     * 
     * @type {string}
     * @memberof PostHits
     */
    'keyword'?: string;
    /**
     * 
     * @type {number}
     * @memberof PostHits
     */
    'limit'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostHits
     */
    'processingTimeMillis'?: number;
    /**
     * 
     * @type {number}
     * @memberof PostHits
     */
    'total'?: number;
}

