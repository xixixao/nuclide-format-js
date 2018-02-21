/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 */

import type {SourceOptions} from './options/SourceOptions';
import type {ParsingInfo} from './requires/transform';

import {parse} from 'babylon';
import jscs from 'jscodeshift';

import Options from './options/Options';
import nuclideTransform from './nuclide/transform';
import printRoot from './utils/printRoot';
import requiresTransform from './requires/transform';

function transform(
  source: string,
  options: SourceOptions,
): {output: string, info: ParsingInfo} {
  Options.validateSourceOptions(options);

  // Parse the source code once, then reuse the root node
  const root = jscs(source, {parser: {parse: parseWithBabylon}});

  // Add use-strict
  // TODO: implement this, make it configurable

  // Requires
  const info = requiresTransform(root, options);

  let output = printRoot(root);

  // Transform that operates on the raw string output.
  output = nuclideTransform(output, options);

  return {output, info};
}

const babylonOptions = {
  sourceType: 'module',
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: true,
  plugins: [
    'jsx',
    'flow',
    'asyncFunctions',
    'classConstructorCall',
    'doExpressions',
    'trailingFunctionCommas',
    'objectRestSpread',
    'decorators',
    'classProperties',
    'exportExtensions',
    'exponentiationOperator',
    'asyncGenerators',
    'functionBind',
    'functionSent',
  ],
};

function parseWithBabylon (code) {
  return parse(code, babylonOptions);
};

module.exports = transform;
