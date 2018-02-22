/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 */

import type {Collection} from '../types/ast';
import type {SourceOptions} from '../options/SourceOptions';

import FirstNode from '../utils/FirstNode';
import getUndeclaredIdentifiers from '../utils/getUndeclaredIdentifiers';
import getUndeclaredJSXIdentifiers from '../utils/getUndeclaredJSXIdentifiers';

function addMissingRequires(root: Collection, options: SourceOptions): boolean {
  const first = FirstNode.get(root);
  if (!first) {
    return false;
  }
  const _first = first; // For flow.

  const {moduleMap} = options;
  const jsxIdentifiers = getUndeclaredJSXIdentifiers(root, options);

  // Add the missing requires.
  const undeclaredIdentifiers = getUndeclaredIdentifiers(root, options);

  undeclaredIdentifiers.forEach(name => {
    if (!options.dontAddMissing || options.alwaysAddMissingNames.has(name)) {
      const node = moduleMap.getRequire(name, {
        jsxSuffix: jsxIdentifiers.has(name) ? options.jsxSuffix : undefined,
        sourcePath: options.sourcePath,
      });
      _first.insertBefore(node);
    }
  });
  return undeclaredIdentifiers.size > 0;
}

module.exports = addMissingRequires;
