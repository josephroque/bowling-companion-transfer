/**
 *
 * @license
 * Copyright (C) 2016 Joseph Roque
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Joseph Roque
 * @created 2016-12-23
 * @file util.js
 * @description Utility methods for use throughout the app
 *
 */

/* eslint-disable no-console */

// Imports
const dateFormat = require('dateformat');

// Characters that may appear in IDs
const POSSIBLE_ID_VALUES = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';

/**
 * Print a message to the error console with the current time
 *
 * @param {string} message the message to display
 */
export function logError(message, err) {
  const errMessage = `${dateFormat('yyyy/mm/dd HH:MM:ss')}: ${message}`;
  if (err) {
    console.error(errMessage, err);
  } else {
    console.error(errMessage);
  }
}

/**
 * Print a message to the console with the current time
 */
export function logMessage(message) {
  console.log(`${dateFormat('yyyy/mm/dd HH:MM:ss')}: ${message}`);
}

/**
 * Formats milliseconds to be a bit prettier.
 */
export function formatMilliseconds(ms) {
  if (ms < 1000) {
    return `${ms}ms`;
  } else if (ms < 60 * 1000) {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = ms % 1000;
    return `${seconds}.${milliseconds}s`;
  } else if (ms < 60 * 60 * 1000) {
    const minutes = Math.floor(ms / (60 * 1000));
    const remainder = ms % (60 * 1000);
    const seconds = Math.floor(remainder / 1000);
    const milliseconds = remainder % 1000;
    return `${minutes}:${seconds}.${milliseconds} min`;
  } else {
    const hours = Math.floor(ms / (60 * 60 * 1000));
    let remainder = ms % (60 * 60 * 1000);
    const minutes = Math.floor(remainder / (60 * 1000));
    remainder %= (60 * 1000);
    const seconds = Math.floor(remainder / 1000);
    const milliseconds = remainder % 1000;
    return `${hours}h ${minutes}:${seconds}.${milliseconds} min`;
  }
}

/**
 * Generates an random string of numbers and letters
 *
 * @param {number} length length of the string to return
 */
export function generateId(length) {
  let text = '';
  for (let i = 0; i < length; i++) {
    text += POSSIBLE_ID_VALUES.charAt(Math.floor(Math.random() * POSSIBLE_ID_VALUES.length));
  }
  return text;
}
