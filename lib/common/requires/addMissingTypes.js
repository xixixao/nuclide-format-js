'use strict';

var _FirstNode = require('../utils/FirstNode');

var _FirstNode2 = _interopRequireDefault(_FirstNode);

var _getUndeclaredTypes = require('../utils/getUndeclaredTypes');

var _getUndeclaredTypes2 = _interopRequireDefault(_getUndeclaredTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 */

function addMissingTypes(root, options) {
  var first = _FirstNode2.default.get(root);
  if (!first) {
    return;
  }
  var _first = first; // For flow.

  var moduleMap = options.moduleMap;

  var requireOptions = {
    sourcePath: options.sourcePath,
    typeImport: true
  };

  (0, _getUndeclaredTypes2.default)(root, options).forEach(function (name) {
    var node = moduleMap.getRequire(name, requireOptions);
    _first.insertBefore(node);
  });
}

module.exports = addMissingTypes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcmVxdWlyZXMvYWRkTWlzc2luZ1R5cGVzLmpzIl0sIm5hbWVzIjpbImFkZE1pc3NpbmdUeXBlcyIsInJvb3QiLCJvcHRpb25zIiwiZmlyc3QiLCJnZXQiLCJfZmlyc3QiLCJtb2R1bGVNYXAiLCJyZXF1aXJlT3B0aW9ucyIsInNvdXJjZVBhdGgiLCJ0eXBlSW1wb3J0IiwiZm9yRWFjaCIsIm5vZGUiLCJnZXRSZXF1aXJlIiwibmFtZSIsImluc2VydEJlZm9yZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBYUE7Ozs7QUFDQTs7Ozs7O0FBZEE7Ozs7Ozs7Ozs7QUFnQkEsU0FBU0EsZUFBVCxDQUF5QkMsSUFBekIsRUFBMkNDLE9BQTNDLEVBQXlFO0FBQ3ZFLE1BQU1DLFFBQVEsb0JBQVVDLEdBQVYsQ0FBY0gsSUFBZCxDQUFkO0FBQ0EsTUFBSSxDQUFDRSxLQUFMLEVBQVk7QUFDVjtBQUNEO0FBQ0QsTUFBTUUsU0FBU0YsS0FBZixDQUx1RSxDQUtqRDs7QUFMaUQsTUFPaEVHLFNBUGdFLEdBT25ESixPQVBtRCxDQU9oRUksU0FQZ0U7O0FBUXZFLE1BQU1DLGlCQUFpQjtBQUNyQkMsZ0JBQVlOLFFBQVFNLFVBREM7QUFFckJDLGdCQUFZO0FBRlMsR0FBdkI7O0FBS0Esb0NBQW1CUixJQUFuQixFQUF5QkMsT0FBekIsRUFBa0NRLE9BQWxDLENBQTBDLGdCQUFRO0FBQ2hELFFBQU1DLE9BQU9MLFVBQVVNLFVBQVYsQ0FBcUJDLElBQXJCLEVBQTJCTixjQUEzQixDQUFiO0FBQ0FGLFdBQU9TLFlBQVAsQ0FBb0JILElBQXBCO0FBQ0QsR0FIRDtBQUlEOztBQUVESSxPQUFPQyxPQUFQLEdBQWlCaEIsZUFBakIiLCJmaWxlIjoiYWRkTWlzc2luZ1R5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBsaWNlbnNlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW5cbiAqIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cblxuaW1wb3J0IHR5cGUge0NvbGxlY3Rpb259IGZyb20gJy4uL3R5cGVzL2FzdCc7XG5pbXBvcnQgdHlwZSB7U291cmNlT3B0aW9uc30gZnJvbSAnLi4vb3B0aW9ucy9Tb3VyY2VPcHRpb25zJztcblxuaW1wb3J0IEZpcnN0Tm9kZSBmcm9tICcuLi91dGlscy9GaXJzdE5vZGUnO1xuaW1wb3J0IGdldFVuZGVjbGFyZWRUeXBlcyBmcm9tICcuLi91dGlscy9nZXRVbmRlY2xhcmVkVHlwZXMnO1xuXG5mdW5jdGlvbiBhZGRNaXNzaW5nVHlwZXMocm9vdDogQ29sbGVjdGlvbiwgb3B0aW9uczogU291cmNlT3B0aW9ucyk6IHZvaWQge1xuICBjb25zdCBmaXJzdCA9IEZpcnN0Tm9kZS5nZXQocm9vdCk7XG4gIGlmICghZmlyc3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgX2ZpcnN0ID0gZmlyc3Q7IC8vIEZvciBmbG93LlxuXG4gIGNvbnN0IHttb2R1bGVNYXB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVxdWlyZU9wdGlvbnMgPSB7XG4gICAgc291cmNlUGF0aDogb3B0aW9ucy5zb3VyY2VQYXRoLFxuICAgIHR5cGVJbXBvcnQ6IHRydWUsXG4gIH07XG5cbiAgZ2V0VW5kZWNsYXJlZFR5cGVzKHJvb3QsIG9wdGlvbnMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IG1vZHVsZU1hcC5nZXRSZXF1aXJlKG5hbWUsIHJlcXVpcmVPcHRpb25zKTtcbiAgICBfZmlyc3QuaW5zZXJ0QmVmb3JlKG5vZGUpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNaXNzaW5nVHlwZXM7XG4iXX0=