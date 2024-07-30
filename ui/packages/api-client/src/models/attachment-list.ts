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
import { Attachment } from './attachment';

/**
 * 
 * @export
 * @interface AttachmentList
 */
export interface AttachmentList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof AttachmentList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof AttachmentList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof AttachmentList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<Attachment>}
     * @memberof AttachmentList
     */
    'items': Array<Attachment>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof AttachmentList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof AttachmentList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof AttachmentList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof AttachmentList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof AttachmentList
     */
    'totalPages': number;
}

