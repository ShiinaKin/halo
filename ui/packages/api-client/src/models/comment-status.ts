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



/**
 * 
 * @export
 * @interface CommentStatus
 */
export interface CommentStatus {
    /**
     * 
     * @type {boolean}
     * @memberof CommentStatus
     */
    'hasNewReply'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentStatus
     */
    'lastReplyTime'?: string;
    /**
     * 
     * @type {number}
     * @memberof CommentStatus
     */
    'observedVersion'?: number;
    /**
     * 
     * @type {number}
     * @memberof CommentStatus
     */
    'replyCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof CommentStatus
     */
    'unreadReplyCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof CommentStatus
     */
    'visibleReplyCount'?: number;
}

