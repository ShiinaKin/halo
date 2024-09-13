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
import { ListedSinglePage } from './listed-single-page';

/**
 * 
 * @export
 * @interface ListedSinglePageList
 */
export interface ListedSinglePageList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof ListedSinglePageList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof ListedSinglePageList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof ListedSinglePageList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<ListedSinglePage>}
     * @memberof ListedSinglePageList
     */
    'items': Array<ListedSinglePage>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof ListedSinglePageList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof ListedSinglePageList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof ListedSinglePageList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof ListedSinglePageList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof ListedSinglePageList
     */
    'totalPages': number;
}

