/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 */

import type {MixedTypeAnnotation} from 'ast-types-flow';
import type {Lines, Print} from '../../types/common';

function printMixedTypeAnnotation(
  print: Print,
  node: MixedTypeAnnotation,
): Lines {
  return ['mixed'];
}

module.exports = printMixedTypeAnnotation;