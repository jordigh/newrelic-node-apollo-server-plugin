/*
 * Copyright 2020 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

const { setupApolloServerHapiTests } = require('./apollo-server-hapi-setup')
const attributesTests = require('../attributes-tests')

setupApolloServerHapiTests(attributesTests)
