'use strict';

/**
 * services-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::services-info.services-info');
