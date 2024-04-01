var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    module.exports = window.React;
  }
});

// external-global-plugin:antd
var require_antd = __commonJS({
  "external-global-plugin:antd"(exports, module) {
    module.exports = window.antd;
  }
});

// node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames2() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// external-global-plugin:react-query
var require_react_query = __commonJS({
  "external-global-plugin:react-query"(exports, module) {
    module.exports = window.reactquery;
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/version.js
var version;
var init_version = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/version.js"() {
    version = "2.9.6";
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/utils.js
var getContractAddress, getUrl, getVersion;
var init_utils = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/utils.js"() {
    init_version();
    getContractAddress = (address) => address;
    getUrl = (url) => url;
    getVersion = () => `viem@${version}`;
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/base.js
function walk(err, fn) {
  if (fn?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err)
    return walk(err.cause, fn);
  return fn ? null : err;
}
var BaseError;
var init_base = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/base.js"() {
    init_utils();
    BaseError = class _BaseError extends Error {
      constructor(shortMessage, args = {}) {
        super();
        Object.defineProperty(this, "details", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "docsPath", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ViemError"
        });
        Object.defineProperty(this, "version", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: getVersion()
        });
        const details = args.cause instanceof _BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath6 = args.cause instanceof _BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        this.message = [
          shortMessage || "An error occurred.",
          "",
          ...args.metaMessages ? [...args.metaMessages, ""] : [],
          ...docsPath6 ? [
            `Docs: https://viem.sh${docsPath6}${args.docsSlug ? `#${args.docsSlug}` : ""}`
          ] : [],
          ...details ? [`Details: ${details}`] : [],
          `Version: ${this.version}`
        ].join("\n");
        if (args.cause)
          this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath6;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
      }
      walk(fn) {
        return walk(this, fn);
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, InvalidBytesBooleanError, SizeOverflowError;
var init_encoding = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/encoding.js"() {
    init_base();
    IntegerOutOfRangeError = class extends BaseError {
      constructor({ max, min, signed, size: size3, value }) {
        super(`Number "${value}" is not in safe ${size3 ? `${size3 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "IntegerOutOfRangeError"
        });
      }
    };
    InvalidBytesBooleanError = class extends BaseError {
      constructor(bytes2) {
        super(`Bytes value "${bytes2}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidBytesBooleanError"
        });
      }
    };
    SizeOverflowError = class extends BaseError {
      constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "SizeOverflowError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
  if (!value)
    return false;
  if (typeof value !== "string")
    return false;
  return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
var init_isHex = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/isHex.js"() {
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/size.js
function size(value) {
  if (isHex(value, { strict: false }))
    return Math.ceil((value.length - 2) / 2);
  return value.length;
}
var init_size = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/size.js"() {
    init_isHex();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/trim.js
function trim(hexOrBytes, { dir = "left" } = {}) {
  let data = typeof hexOrBytes === "string" ? hexOrBytes.replace("0x", "") : hexOrBytes;
  let sliceLength = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  if (typeof hexOrBytes === "string") {
    if (data.length === 1 && dir === "right")
      data = `${data}0`;
    return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
  }
  return data;
}
var init_trim = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/trim.js"() {
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/data.js
var SliceOffsetOutOfBoundsError, SizeExceedsPaddingSizeError, InvalidBytesLengthError;
var init_data = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/data.js"() {
    init_base();
    SliceOffsetOutOfBoundsError = class extends BaseError {
      constructor({ offset, position, size: size3 }) {
        super(`Slice ${position === "start" ? "starting" : "ending"} at offset "${offset}" is out-of-bounds (size: ${size3}).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "SliceOffsetOutOfBoundsError"
        });
      }
    };
    SizeExceedsPaddingSizeError = class extends BaseError {
      constructor({ size: size3, targetSize, type }) {
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size3}) exceeds padding size (${targetSize}).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "SizeExceedsPaddingSizeError"
        });
      }
    };
    InvalidBytesLengthError = class extends BaseError {
      constructor({ size: size3, targetSize, type }) {
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size3} ${type} long.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidBytesLengthError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size: size3 = 32 } = {}) {
  if (typeof hexOrBytes === "string")
    return padHex(hexOrBytes, { dir, size: size3 });
  return padBytes(hexOrBytes, { dir, size: size3 });
}
function padHex(hex_, { dir, size: size3 = 32 } = {}) {
  if (size3 === null)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size3 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size3,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size3 * 2, "0")}`;
}
function padBytes(bytes2, { dir, size: size3 = 32 } = {}) {
  if (size3 === null)
    return bytes2;
  if (bytes2.length > size3)
    throw new SizeExceedsPaddingSizeError({
      size: bytes2.length,
      targetSize: size3,
      type: "bytes"
    });
  const paddedBytes = new Uint8Array(size3);
  for (let i = 0; i < size3; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size3 - i - 1] = bytes2[padEnd ? i : bytes2.length - i - 1];
  }
  return paddedBytes;
}
var init_pad = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/pad.js"() {
    init_data();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/toHex.js
function toHex2(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToHex(value, opts);
  if (typeof value === "string") {
    return stringToHex(value, opts);
  }
  if (typeof value === "boolean")
    return boolToHex(value, opts);
  return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { size: opts.size });
  }
  return hex;
}
function bytesToHex(value, opts = {}) {
  let string = "";
  for (let i = 0; i < value.length; i++) {
    string += hexes[value[i]];
  }
  const hex = `0x${string}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { dir: "right", size: opts.size });
  }
  return hex;
}
function numberToHex(value_, opts = {}) {
  const { signed, size: size3 } = opts;
  const value = BigInt(value_);
  let maxValue;
  if (size3) {
    if (signed)
      maxValue = (1n << BigInt(size3) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size3) * 8n) - 1n;
  } else if (typeof value_ === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    const suffix = typeof value_ === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size3,
      value: `${value_}${suffix}`
    });
  }
  const hex = `0x${(signed && value < 0 ? (1n << BigInt(size3 * 8)) + BigInt(value) : value).toString(16)}`;
  if (size3)
    return pad(hex, { size: size3 });
  return hex;
}
function stringToHex(value_, opts = {}) {
  const value = encoder.encode(value_);
  return bytesToHex(value, opts);
}
var hexes, encoder;
var init_toHex = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/toHex.js"() {
    init_encoding();
    init_pad();
    init_fromHex();
    hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
    encoder = /* @__PURE__ */ new TextEncoder();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/toBytes.js
function toBytes(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToBytes(value, opts);
  if (typeof value === "boolean")
    return boolToBytes(value, opts);
  if (isHex(value))
    return hexToBytes(value, opts);
  return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  const bytes2 = new Uint8Array(1);
  bytes2[0] = Number(value);
  if (typeof opts.size === "number") {
    assertSize(bytes2, { size: opts.size });
    return pad(bytes2, { size: opts.size });
  }
  return bytes2;
}
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function hexToBytes(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = pad(hex, { dir: "right", size: opts.size });
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes2 = new Uint8Array(length);
  for (let index2 = 0, j2 = 0; index2 < length; index2++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j2++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j2++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j2 - 2]}${hexString[j2 - 1]}" in "${hexString}").`);
    }
    bytes2[index2] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes2;
}
function numberToBytes(value, opts) {
  const hex = numberToHex(value, opts);
  return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
  const bytes2 = encoder2.encode(value);
  if (typeof opts.size === "number") {
    assertSize(bytes2, { size: opts.size });
    return pad(bytes2, { dir: "right", size: opts.size });
  }
  return bytes2;
}
var encoder2, charCodeMap;
var init_toBytes = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/toBytes.js"() {
    init_base();
    init_isHex();
    init_pad();
    init_fromHex();
    init_toHex();
    encoder2 = /* @__PURE__ */ new TextEncoder();
    charCodeMap = {
      zero: 48,
      nine: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size3 }) {
  if (size(hexOrBytes) > size3)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size3
    });
}
function hexToBigInt(hex, opts = {}) {
  const { signed } = opts;
  if (opts.size)
    assertSize(hex, { size: opts.size });
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size3 = (hex.length - 2) / 2;
  const max = (1n << BigInt(size3) * 8n - 1n) - 1n;
  if (value <= max)
    return value;
  return value - BigInt(`0x${"f".padStart(size3 * 2, "f")}`) - 1n;
}
function hexToNumber(hex, opts = {}) {
  return Number(hexToBigInt(hex, opts));
}
var init_fromHex = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/fromHex.js"() {
    init_encoding();
    init_size();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/formatter.js
function defineFormatter(type, format) {
  return ({ exclude, format: overrides }) => {
    return {
      exclude,
      format: (args) => {
        const formatted = format(args);
        if (exclude) {
          for (const key of exclude) {
            delete formatted[key];
          }
        }
        return {
          ...formatted,
          ...overrides(args)
        };
      },
      type
    };
  };
}
var init_formatter = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/formatter.js"() {
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/address.js
var InvalidAddressError;
var init_address = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/address.js"() {
    init_base();
    InvalidAddressError = class extends BaseError {
      constructor({ address }) {
        super(`Address "${address}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart."
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidAddressError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/lru.js
var LruMap;
var init_lru = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/lru.js"() {
    LruMap = class extends Map {
      constructor(size3) {
        super();
        Object.defineProperty(this, "maxSize", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.maxSize = size3;
      }
      set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize)
          this.delete(this.keys().next().value);
        return this;
      }
    };
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_assert.js
function number(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function bytes(b, ...lengths) {
  if (!(b instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
var init_assert = __esm({
  "node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_assert.js"() {
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_u64.js
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l: l2 } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l2];
  }
  return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH, rotlSL, rotlBH, rotlBL;
var init_u64 = __esm({
  "node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_u64.js"() {
    U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    _32n = /* @__PURE__ */ BigInt(32);
    rotlSH = (h, l2, s) => h << s | l2 >>> 32 - s;
    rotlSL = (h, l2, s) => l2 << s | h >>> 32 - s;
    rotlBH = (h, l2, s) => l2 << s - 32 | h >>> 64 - s;
    rotlBL = (h, l2, s) => h << s - 32 | l2 >>> 64 - s;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/utils.js
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!u8a(data))
    throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes2(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}
var u8a, u32, createView, rotr, isLE, Hash, toStr;
var init_utils2 = __esm({
  "node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/utils.js"() {
    u8a = (a) => a instanceof Uint8Array;
    u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    rotr = (word, shift) => word << 32 - shift | word >>> shift;
    isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    if (!isLE)
      throw new Error("Non little-endian hardware is not supported");
    Hash = class {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    };
    toStr = {}.toString;
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/sha3.js
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y2 = 0; y2 < 50; y2 += 10) {
        s[x + y2] ^= Th;
        s[x + y2 + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y2 = 0; y2 < 50; y2 += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y2 + x];
      for (let x = 0; x < 10; x++)
        s[y2 + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var SHA3_PI, SHA3_ROTL, _SHA3_IOTA, _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, sha3_224, sha3_256, sha3_384, sha3_512, keccak_224, keccak_256, keccak_384, keccak_512, genShake, shake128, shake256;
var init_sha3 = __esm({
  "node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/sha3.js"() {
    init_assert();
    init_u64();
    init_utils2();
    [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
    _0n = /* @__PURE__ */ BigInt(0);
    _1n = /* @__PURE__ */ BigInt(1);
    _2n = /* @__PURE__ */ BigInt(2);
    _7n = /* @__PURE__ */ BigInt(7);
    _256n = /* @__PURE__ */ BigInt(256);
    _0x71n = /* @__PURE__ */ BigInt(113);
    for (let round = 0, R = _1n, x = 1, y2 = 0; round < 24; round++) {
      [x, y2] = [y2, (2 * x + 3 * y2) % 5];
      SHA3_PI.push(2 * (5 * y2 + x));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j2 = 0; j2 < 7; j2++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j2)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
    rotlH = (h, l2, s) => s > 32 ? rotlBH(h, l2, s) : rotlSH(h, l2, s);
    rotlL = (h, l2, s) => s > 32 ? rotlBL(h, l2, s) : rotlSL(h, l2, s);
    Keccak = class _Keccak extends Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        number(outputLen);
        if (0 >= this.blockLen || this.blockLen >= 200)
          throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = u32(this.state);
      }
      keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        exists(this);
        const { blockLen, state } = this;
        data = toBytes2(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        exists(this, false);
        bytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes2) {
        number(bytes2);
        return this.xofInto(new Uint8Array(bytes2));
      }
      digestInto(out) {
        output(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        this.state.fill(0);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
    sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
    sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
    sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
    sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
    keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
    keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
    keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
    keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
    genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
    shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
    shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
  const to = to_ || "hex";
  const bytes2 = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes2;
  return toHex2(bytes2);
}
var init_keccak256 = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/keccak256.js"() {
    init_sha3();
    init_isHex();
    init_toBytes();
    init_toHex();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
  const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
  const hash2 = keccak256(stringToBytes(hexAddress), "bytes");
  const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash2[i >> 1] >> 4 >= 8 && address[i]) {
      address[i] = address[i].toUpperCase();
    }
    if ((hash2[i >> 1] & 15) >= 8 && address[i + 1]) {
      address[i + 1] = address[i + 1].toUpperCase();
    }
  }
  return `0x${address.join("")}`;
}
var init_getAddress = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/address/getAddress.js"() {
    init_toBytes();
    init_keccak256();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/address/isAddress.js
function isAddress(address, options) {
  const { strict = true } = options ?? {};
  if (isAddressCache.has(address))
    return isAddressCache.get(address);
  const result = (() => {
    if (!addressRegex.test(address))
      return false;
    if (address.toLowerCase() === address)
      return true;
    if (strict)
      return checksumAddress(address) === address;
    return true;
  })();
  isAddressCache.set(address, result);
  return result;
}
var addressRegex, isAddressCache;
var init_isAddress = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/address/isAddress.js"() {
    init_lru();
    init_getAddress();
    addressRegex = /^0x[a-fA-F0-9]{40}$/;
    isAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/concat.js
function concat(values) {
  if (typeof values[0] === "string")
    return concatHex(values);
  return concatBytes(values);
}
function concatBytes(values) {
  let length = 0;
  for (const arr of values) {
    length += arr.length;
  }
  const result = new Uint8Array(length);
  let offset = 0;
  for (const arr of values) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}
function concatHex(values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
var init_concat = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/concat.js"() {
  }
});

// node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/regex.js
function execTyped(regex2, string) {
  const match = regex2.exec(string);
  return match?.groups;
}
var init_regex = __esm({
  "node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/regex.js"() {
  }
});

// node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js
function formatAbiParameter(abiParameter) {
  let type = abiParameter.type;
  if (tupleRegex.test(abiParameter.type) && "components" in abiParameter) {
    type = "(";
    const length = abiParameter.components.length;
    for (let i = 0; i < length; i++) {
      const component = abiParameter.components[i];
      type += formatAbiParameter(component);
      if (i < length - 1)
        type += ", ";
    }
    const result = execTyped(tupleRegex, abiParameter.type);
    type += `)${result?.array ?? ""}`;
    return formatAbiParameter({
      ...abiParameter,
      type
    });
  }
  if ("indexed" in abiParameter && abiParameter.indexed)
    type = `${type} indexed`;
  if (abiParameter.name)
    return `${type} ${abiParameter.name}`;
  return type;
}
var tupleRegex;
var init_formatAbiParameter = __esm({
  "node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js"() {
    init_regex();
    tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
  }
});

// node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js
function formatAbiParameters(abiParameters) {
  let params = "";
  const length = abiParameters.length;
  for (let i = 0; i < length; i++) {
    const abiParameter = abiParameters[i];
    params += formatAbiParameter(abiParameter);
    if (i !== length - 1)
      params += ", ";
  }
  return params;
}
var init_formatAbiParameters = __esm({
  "node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js"() {
    init_formatAbiParameter();
  }
});

// node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js
function formatAbiItem(abiItem) {
  if (abiItem.type === "function")
    return `function ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== "nonpayable" ? ` ${abiItem.stateMutability}` : ""}${abiItem.outputs.length ? ` returns (${formatAbiParameters(abiItem.outputs)})` : ""}`;
  else if (abiItem.type === "event")
    return `event ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})`;
  else if (abiItem.type === "error")
    return `error ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})`;
  else if (abiItem.type === "constructor")
    return `constructor(${formatAbiParameters(abiItem.inputs)})${abiItem.stateMutability === "payable" ? " payable" : ""}`;
  else if (abiItem.type === "fallback")
    return "fallback()";
  return "receive() external payable";
}
var init_formatAbiItem = __esm({
  "node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js"() {
    init_formatAbiParameters();
  }
});

// node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/exports/index.js
var init_exports = __esm({
  "node_modules/.pnpm/abitype@1.0.0_typescript@5.2.2/node_modules/abitype/dist/esm/exports/index.js"() {
    init_formatAbiItem();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/formatAbiItem.js
function formatAbiItem2(abiItem, { includeName = false } = {}) {
  if (abiItem.type !== "function" && abiItem.type !== "event" && abiItem.type !== "error")
    throw new InvalidDefinitionTypeError(abiItem.type);
  return `${abiItem.name}(${formatAbiParams(abiItem.inputs, { includeName })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
  if (!params)
    return "";
  return params.map((param) => formatAbiParam(param, { includeName })).join(includeName ? ", " : ",");
}
function formatAbiParam(param, { includeName }) {
  if (param.type.startsWith("tuple")) {
    return `(${formatAbiParams(param.components, { includeName })})${param.type.slice("tuple".length)}`;
  }
  return param.type + (includeName && param.name ? ` ${param.name}` : "");
}
var init_formatAbiItem2 = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/formatAbiItem.js"() {
    init_abi();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/abi.js
var AbiConstructorNotFoundError, AbiConstructorParamsNotFoundError, AbiDecodingDataSizeTooSmallError, AbiDecodingZeroDataError, AbiEncodingArrayLengthMismatchError, AbiEncodingBytesSizeMismatchError, AbiEncodingLengthMismatchError, AbiErrorSignatureNotFoundError, AbiEventSignatureEmptyTopicsError, AbiEventSignatureNotFoundError, AbiEventNotFoundError, AbiFunctionNotFoundError, AbiFunctionOutputsNotFoundError, AbiItemAmbiguityError, BytesSizeMismatchError, DecodeLogDataMismatch, DecodeLogTopicsMismatch, InvalidAbiEncodingTypeError, InvalidAbiDecodingTypeError, InvalidArrayError, InvalidDefinitionTypeError, UnsupportedPackedAbiType;
var init_abi = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/abi.js"() {
    init_formatAbiItem2();
    init_size();
    init_base();
    AbiConstructorNotFoundError = class extends BaseError {
      constructor({ docsPath: docsPath6 }) {
        super([
          "A constructor was not found on the ABI.",
          "Make sure you are using the correct ABI and that the constructor exists on it."
        ].join("\n"), {
          docsPath: docsPath6
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiConstructorNotFoundError"
        });
      }
    };
    AbiConstructorParamsNotFoundError = class extends BaseError {
      constructor({ docsPath: docsPath6 }) {
        super([
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
          "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
        ].join("\n"), {
          docsPath: docsPath6
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiConstructorParamsNotFoundError"
        });
      }
    };
    AbiDecodingDataSizeTooSmallError = class extends BaseError {
      constructor({ data, params, size: size3 }) {
        super([`Data size of ${size3} bytes is too small for given parameters.`].join("\n"), {
          metaMessages: [
            `Params: (${formatAbiParams(params, { includeName: true })})`,
            `Data:   ${data} (${size3} bytes)`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiDecodingDataSizeTooSmallError"
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "params", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "size", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size3;
      }
    };
    AbiDecodingZeroDataError = class extends BaseError {
      constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiDecodingZeroDataError"
        });
      }
    };
    AbiEncodingArrayLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength, type }) {
        super([
          `ABI encoding array length mismatch for type ${type}.`,
          `Expected length: ${expectedLength}`,
          `Given length: ${givenLength}`
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEncodingArrayLengthMismatchError"
        });
      }
    };
    AbiEncodingBytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${size(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEncodingBytesSizeMismatchError"
        });
      }
    };
    AbiEncodingLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength }) {
        super([
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${expectedLength}`,
          `Given length (values): ${givenLength}`
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEncodingLengthMismatchError"
        });
      }
    };
    AbiErrorSignatureNotFoundError = class extends BaseError {
      constructor(signature, { docsPath: docsPath6 }) {
        super([
          `Encoded error signature "${signature}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join("\n"), {
          docsPath: docsPath6
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiErrorSignatureNotFoundError"
        });
        Object.defineProperty(this, "signature", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.signature = signature;
      }
    };
    AbiEventSignatureEmptyTopicsError = class extends BaseError {
      constructor({ docsPath: docsPath6 }) {
        super("Cannot extract event signature from empty topics.", {
          docsPath: docsPath6
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEventSignatureEmptyTopicsError"
        });
      }
    };
    AbiEventSignatureNotFoundError = class extends BaseError {
      constructor(signature, { docsPath: docsPath6 }) {
        super([
          `Encoded event signature "${signature}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it.",
          `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join("\n"), {
          docsPath: docsPath6
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEventSignatureNotFoundError"
        });
      }
    };
    AbiEventNotFoundError = class extends BaseError {
      constructor(eventName, { docsPath: docsPath6 } = {}) {
        super([
          `Event ${eventName ? `"${eventName}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it."
        ].join("\n"), {
          docsPath: docsPath6
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEventNotFoundError"
        });
      }
    };
    AbiFunctionNotFoundError = class extends BaseError {
      constructor(functionName, { docsPath: docsPath6 } = {}) {
        super([
          `Function ${functionName ? `"${functionName}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it."
        ].join("\n"), {
          docsPath: docsPath6
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiFunctionNotFoundError"
        });
      }
    };
    AbiFunctionOutputsNotFoundError = class extends BaseError {
      constructor(functionName, { docsPath: docsPath6 }) {
        super([
          `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
          "Cannot decode function result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the function exists on it."
        ].join("\n"), {
          docsPath: docsPath6
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiFunctionOutputsNotFoundError"
        });
      }
    };
    AbiItemAmbiguityError = class extends BaseError {
      constructor(x, y2) {
        super("Found ambiguous types in overloaded ABI items.", {
          metaMessages: [
            `\`${x.type}\` in \`${formatAbiItem2(x.abiItem)}\`, and`,
            `\`${y2.type}\` in \`${formatAbiItem2(y2.abiItem)}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI."
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiItemAmbiguityError"
        });
      }
    };
    BytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, givenSize }) {
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "BytesSizeMismatchError"
        });
      }
    };
    DecodeLogDataMismatch = class extends BaseError {
      constructor({ abiItem, data, params, size: size3 }) {
        super([
          `Data size of ${size3} bytes is too small for non-indexed event parameters.`
        ].join("\n"), {
          metaMessages: [
            `Params: (${formatAbiParams(params, { includeName: true })})`,
            `Data:   ${data} (${size3} bytes)`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "DecodeLogDataMismatch"
        });
        Object.defineProperty(this, "abiItem", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "params", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "size", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size3;
      }
    };
    DecodeLogTopicsMismatch = class extends BaseError {
      constructor({ abiItem, param }) {
        super([
          `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ""} on event "${formatAbiItem2(abiItem, { includeName: true })}".`
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "DecodeLogTopicsMismatch"
        });
        Object.defineProperty(this, "abiItem", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.abiItem = abiItem;
      }
    };
    InvalidAbiEncodingTypeError = class extends BaseError {
      constructor(type, { docsPath: docsPath6 }) {
        super([
          `Type "${type}" is not a valid encoding type.`,
          "Please provide a valid ABI type."
        ].join("\n"), { docsPath: docsPath6 });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidAbiEncodingType"
        });
      }
    };
    InvalidAbiDecodingTypeError = class extends BaseError {
      constructor(type, { docsPath: docsPath6 }) {
        super([
          `Type "${type}" is not a valid decoding type.`,
          "Please provide a valid ABI type."
        ].join("\n"), { docsPath: docsPath6 });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidAbiDecodingType"
        });
      }
    };
    InvalidArrayError = class extends BaseError {
      constructor(value) {
        super([`Value "${value}" is not a valid array.`].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidArrayError"
        });
      }
    };
    InvalidDefinitionTypeError = class extends BaseError {
      constructor(type) {
        super([
          `"${type}" is not a valid definition type.`,
          'Valid types: "function", "event", "error"'
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidDefinitionTypeError"
        });
      }
    };
    UnsupportedPackedAbiType = class extends BaseError {
      constructor(type) {
        super(`Type "${type}" is not supported for packed encoding.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnsupportedPackedAbiType"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/hashSignature.js
function hashSignature(sig) {
  return hash(sig);
}
var hash;
var init_hashSignature = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/hashSignature.js"() {
    init_toBytes();
    init_keccak256();
    hash = (value) => keccak256(toBytes(value));
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/normalizeSignature.js
function normalizeSignature(signature) {
  let active = true;
  let current = "";
  let level = 0;
  let result = "";
  let valid = false;
  for (let i = 0; i < signature.length; i++) {
    const char = signature[i];
    if (["(", ")", ","].includes(char))
      active = true;
    if (char === "(")
      level++;
    if (char === ")")
      level--;
    if (!active)
      continue;
    if (level === 0) {
      if (char === " " && ["event", "function", ""].includes(result))
        result = "";
      else {
        result += char;
        if (char === ")") {
          valid = true;
          break;
        }
      }
      continue;
    }
    if (char === " ") {
      if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
        current = "";
        active = false;
      }
      continue;
    }
    result += char;
    current += char;
  }
  if (!valid)
    throw new BaseError("Unable to normalize signature.");
  return result;
}
var init_normalizeSignature = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/normalizeSignature.js"() {
    init_base();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/toSignature.js
var toSignature;
var init_toSignature = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/toSignature.js"() {
    init_exports();
    init_normalizeSignature();
    toSignature = (def) => {
      const def_ = (() => {
        if (typeof def === "string")
          return def;
        return formatAbiItem(def);
      })();
      return normalizeSignature(def_);
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/toSignatureHash.js
function toSignatureHash(fn) {
  return hashSignature(toSignature(fn));
}
var init_toSignatureHash = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/toSignatureHash.js"() {
    init_hashSignature();
    init_toSignature();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/toEventSelector.js
var toEventSelector;
var init_toEventSelector = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/toEventSelector.js"() {
    init_toSignatureHash();
    toEventSelector = toSignatureHash;
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/slice.js
function slice(value, start, end, { strict } = {}) {
  if (isHex(value, { strict: false }))
    return sliceHex(value, start, end, {
      strict
    });
  return sliceBytes(value, start, end, {
    strict
  });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
function sliceBytes(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = value_.slice(start, end);
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = `0x${value_.replace("0x", "").slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
var init_slice = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/slice.js"() {
    init_data();
    init_isHex();
    init_size();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
function encodeAbiParameters(params, values) {
  if (params.length !== values.length)
    throw new AbiEncodingLengthMismatchError({
      expectedLength: params.length,
      givenLength: values.length
    });
  const preparedParams = prepareParams({
    params,
    values
  });
  const data = encodeParams(preparedParams);
  if (data.length === 0)
    return "0x";
  return data;
}
function prepareParams({ params, values }) {
  const preparedParams = [];
  for (let i = 0; i < params.length; i++) {
    preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
  }
  return preparedParams;
}
function prepareParam({ param, value }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, { length, param: { ...param, type } });
  }
  if (param.type === "tuple") {
    return encodeTuple(value, {
      param
    });
  }
  if (param.type === "address") {
    return encodeAddress(value);
  }
  if (param.type === "bool") {
    return encodeBool(value);
  }
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    const signed = param.type.startsWith("int");
    return encodeNumber(value, { signed });
  }
  if (param.type.startsWith("bytes")) {
    return encodeBytes(value, { param });
  }
  if (param.type === "string") {
    return encodeString(value);
  }
  throw new InvalidAbiEncodingTypeError(param.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function encodeParams(preparedParams) {
  let staticSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size(encoded);
  }
  const staticParams = [];
  const dynamicParams = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic) {
      staticParams.push(numberToHex(staticSize + dynamicSize, { size: 32 }));
      dynamicParams.push(encoded);
      dynamicSize += size(encoded);
    } else {
      staticParams.push(encoded);
    }
  }
  return concat([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
  if (!isAddress(value))
    throw new InvalidAddressError({ address: value });
  return { dynamic: false, encoded: padHex(value.toLowerCase()) };
}
function encodeArray(value, { length, param }) {
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new AbiEncodingArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${param.type}[${length}]`
    });
  let dynamicChild = false;
  const preparedParams = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParam({ param, value: value[i] });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParams.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encodeParams(preparedParams);
    if (dynamic) {
      const length2 = numberToHex(preparedParams.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParams.length > 0 ? concat([length2, data]) : length2
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concat(preparedParams.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { param }) {
  const [, paramSize] = param.type.split("bytes");
  const bytesSize = size(value);
  if (!paramSize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padHex(value_, {
        dir: "right",
        size: Math.ceil((value.length - 2) / 2 / 32) * 32
      });
    return {
      dynamic: true,
      encoded: concat([padHex(numberToHex(bytesSize, { size: 32 })), value_])
    };
  }
  if (bytesSize !== parseInt(paramSize))
    throw new AbiEncodingBytesSizeMismatchError({
      expectedSize: parseInt(paramSize),
      value
    });
  return { dynamic: false, encoded: padHex(value, { dir: "right" }) };
}
function encodeBool(value) {
  if (typeof value !== "boolean")
    throw new BaseError(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: false, encoded: padHex(boolToHex(value)) };
}
function encodeNumber(value, { signed }) {
  return {
    dynamic: false,
    encoded: numberToHex(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = stringToHex(value);
  const partsLength = Math.ceil(size(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padHex(slice(hexValue, i * 32, (i + 1) * 32), {
      dir: "right"
    }));
  }
  return {
    dynamic: true,
    encoded: concat([
      padHex(numberToHex(size(hexValue), { size: 32 })),
      ...parts
    ])
  };
}
function encodeTuple(value, { param }) {
  let dynamic = false;
  const preparedParams = [];
  for (let i = 0; i < param.components.length; i++) {
    const param_ = param.components[i];
    const index2 = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParam({
      param: param_,
      value: value[index2]
    });
    preparedParams.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encodeParams(preparedParams) : concat(preparedParams.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
var init_encodeAbiParameters = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js"() {
    init_abi();
    init_address();
    init_base();
    init_isAddress();
    init_concat();
    init_pad();
    init_size();
    init_slice();
    init_toHex();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/toFunctionSelector.js
var toFunctionSelector;
var init_toFunctionSelector = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/toFunctionSelector.js"() {
    init_slice();
    init_toSignatureHash();
    toFunctionSelector = (fn) => slice(toSignatureHash(fn), 0, 4);
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/getAbiItem.js
function getAbiItem(parameters) {
  const { abi, args = [], name } = parameters;
  const isSelector = isHex(name, { strict: false });
  const abiItems = abi.filter((abiItem) => {
    if (isSelector) {
      if (abiItem.type === "function")
        return toFunctionSelector(abiItem) === name;
      if (abiItem.type === "event")
        return toEventSelector(abiItem) === name;
      return false;
    }
    return "name" in abiItem && abiItem.name === name;
  });
  if (abiItems.length === 0)
    return void 0;
  if (abiItems.length === 1)
    return abiItems[0];
  let matchedAbiItem = void 0;
  for (const abiItem of abiItems) {
    if (!("inputs" in abiItem))
      continue;
    if (!args || args.length === 0) {
      if (!abiItem.inputs || abiItem.inputs.length === 0)
        return abiItem;
      continue;
    }
    if (!abiItem.inputs)
      continue;
    if (abiItem.inputs.length === 0)
      continue;
    if (abiItem.inputs.length !== args.length)
      continue;
    const matched = args.every((arg, index2) => {
      const abiParameter = "inputs" in abiItem && abiItem.inputs[index2];
      if (!abiParameter)
        return false;
      return isArgOfType(arg, abiParameter);
    });
    if (matched) {
      if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
        const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
        if (ambiguousTypes)
          throw new AbiItemAmbiguityError({
            abiItem,
            type: ambiguousTypes[0]
          }, {
            abiItem: matchedAbiItem,
            type: ambiguousTypes[1]
          });
      }
      matchedAbiItem = abiItem;
    }
  }
  if (matchedAbiItem)
    return matchedAbiItem;
  return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
  const argType = typeof arg;
  const abiParameterType = abiParameter.type;
  switch (abiParameterType) {
    case "address":
      return isAddress(arg, { strict: false });
    case "bool":
      return argType === "boolean";
    case "function":
      return argType === "string";
    case "string":
      return argType === "string";
    default: {
      if (abiParameterType === "tuple" && "components" in abiParameter)
        return Object.values(abiParameter.components).every((component, index2) => {
          return isArgOfType(Object.values(arg)[index2], component);
        });
      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
        return argType === "number" || argType === "bigint";
      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
        return argType === "string" || arg instanceof Uint8Array;
      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
        return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
          ...abiParameter,
          // Pop off `[]` or `[M]` from end of type
          type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
        }));
      }
      return false;
    }
  }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
  for (const parameterIndex in sourceParameters) {
    const sourceParameter = sourceParameters[parameterIndex];
    const targetParameter = targetParameters[parameterIndex];
    if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter)
      return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
    const types = [sourceParameter.type, targetParameter.type];
    const ambiguous = (() => {
      if (types.includes("address") && types.includes("bytes20"))
        return true;
      if (types.includes("address") && types.includes("string"))
        return isAddress(args[parameterIndex], { strict: false });
      if (types.includes("address") && types.includes("bytes"))
        return isAddress(args[parameterIndex], { strict: false });
      return false;
    })();
    if (ambiguous)
      return types;
  }
  return;
}
var init_getAbiItem = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/getAbiItem.js"() {
    init_abi();
    init_isHex();
    init_isAddress();
    init_toEventSelector();
    init_toFunctionSelector();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/accounts/utils/parseAccount.js
function parseAccount(account) {
  if (typeof account === "string")
    return { address: account, type: "json-rpc" };
  return account;
}
var init_parseAccount = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/accounts/utils/parseAccount.js"() {
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/prepareEncodeFunctionData.js
function prepareEncodeFunctionData(parameters) {
  const { abi, args, functionName } = parameters;
  let abiItem = abi[0];
  if (functionName) {
    const item = getAbiItem({
      abi,
      args,
      name: functionName
    });
    if (!item)
      throw new AbiFunctionNotFoundError(functionName, { docsPath: docsPath2 });
    abiItem = item;
  }
  if (abiItem.type !== "function")
    throw new AbiFunctionNotFoundError(void 0, { docsPath: docsPath2 });
  return {
    abi: [abiItem],
    functionName: toFunctionSelector(formatAbiItem2(abiItem))
  };
}
var docsPath2;
var init_prepareEncodeFunctionData = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/prepareEncodeFunctionData.js"() {
    init_abi();
    init_toFunctionSelector();
    init_formatAbiItem2();
    init_getAbiItem();
    docsPath2 = "/docs/contract/encodeFunctionData";
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/encodeFunctionData.js
function encodeFunctionData(parameters) {
  const { args } = parameters;
  const { abi, functionName } = (() => {
    if (parameters.abi.length === 1 && parameters.functionName?.startsWith("0x"))
      return parameters;
    return prepareEncodeFunctionData(parameters);
  })();
  const abiItem = abi[0];
  const signature = functionName;
  const data = "inputs" in abiItem && abiItem.inputs ? encodeAbiParameters(abiItem.inputs, args ?? []) : void 0;
  return concatHex([signature, data ?? "0x"]);
}
var init_encodeFunctionData = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/encodeFunctionData.js"() {
    init_concat();
    init_encodeAbiParameters();
    init_prepareEncodeFunctionData();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/solidity.js
var panicReasons, solidityError, solidityPanic;
var init_solidity = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/solidity.js"() {
    panicReasons = {
      1: "An `assert` condition failed.",
      17: "Arithmetic operation resulted in underflow or overflow.",
      18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
      33: "Attempted to convert to an invalid type.",
      34: "Attempted to access a storage byte array that is incorrectly encoded.",
      49: "Performed `.pop()` on an empty array",
      50: "Array index is out of bounds.",
      65: "Allocated too much memory or created an array which is too large.",
      81: "Attempted to call a zero-initialized variable of internal function type."
    };
    solidityError = {
      inputs: [
        {
          name: "message",
          type: "string"
        }
      ],
      name: "Error",
      type: "error"
    };
    solidityPanic = {
      inputs: [
        {
          name: "reason",
          type: "uint256"
        }
      ],
      name: "Panic",
      type: "error"
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/cursor.js
var NegativeOffsetError, PositionOutOfBoundsError, RecursiveReadLimitExceededError;
var init_cursor = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/cursor.js"() {
    init_base();
    NegativeOffsetError = class extends BaseError {
      constructor({ offset }) {
        super(`Offset \`${offset}\` cannot be negative.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "NegativeOffsetError"
        });
      }
    };
    PositionOutOfBoundsError = class extends BaseError {
      constructor({ length, position }) {
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "PositionOutOfBoundsError"
        });
      }
    };
    RecursiveReadLimitExceededError = class extends BaseError {
      constructor({ count, limit }) {
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "RecursiveReadLimitExceededError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/cursor.js
function createCursor(bytes2, { recursiveReadLimit = 8192 } = {}) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes2;
  cursor.dataView = new DataView(bytes2.buffer, bytes2.byteOffset, bytes2.byteLength);
  cursor.positionReadCount = /* @__PURE__ */ new Map();
  cursor.recursiveReadLimit = recursiveReadLimit;
  return cursor;
}
var staticCursor;
var init_cursor2 = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/cursor.js"() {
    init_cursor();
    staticCursor = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: /* @__PURE__ */ new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: Infinity,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
          });
      },
      assertPosition(position) {
        if (position < 0 || position > this.bytes.length - 1)
          throw new PositionOutOfBoundsError({
            length: this.bytes.length,
            position
          });
      },
      decrementPosition(offset) {
        if (offset < 0)
          throw new NegativeOffsetError({ offset });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
      },
      getReadCount(position) {
        return this.positionReadCount.get(position || this.position) || 0;
      },
      incrementPosition(offset) {
        if (offset < 0)
          throw new NegativeOffsetError({ offset });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
      },
      inspectByte(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
      },
      inspectBytes(length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
      },
      inspectUint8(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
      },
      inspectUint16(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
      },
      inspectUint24(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
      },
      inspectUint32(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
      },
      pushByte(byte2) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte2;
        this.position++;
      },
      pushBytes(bytes2) {
        this.assertPosition(this.position + bytes2.length - 1);
        this.bytes.set(bytes2, this.position);
        this.position += bytes2.length;
      },
      pushUint8(value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
      },
      pushUint16(value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
      },
      pushUint24(value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
      },
      pushUint32(value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
      },
      readByte() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
      },
      readBytes(length, size3) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size3 ?? length;
        return value;
      },
      readUint8() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
      },
      readUint16() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
      },
      readUint24() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
      },
      readUint32() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
      },
      get remaining() {
        return this.bytes.length - this.position;
      },
      setPosition(position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return () => this.position = oldPosition;
      },
      _touch() {
        if (this.recursiveReadLimit === Infinity)
          return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0)
          this.recursiveReadCount++;
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/fromBytes.js
function bytesToBigInt(bytes2, opts = {}) {
  if (typeof opts.size !== "undefined")
    assertSize(bytes2, { size: opts.size });
  const hex = bytesToHex(bytes2, opts);
  return hexToBigInt(hex, opts);
}
function bytesToBool(bytes_, opts = {}) {
  let bytes2 = bytes_;
  if (typeof opts.size !== "undefined") {
    assertSize(bytes2, { size: opts.size });
    bytes2 = trim(bytes2);
  }
  if (bytes2.length > 1 || bytes2[0] > 1)
    throw new InvalidBytesBooleanError(bytes2);
  return Boolean(bytes2[0]);
}
function bytesToNumber(bytes2, opts = {}) {
  if (typeof opts.size !== "undefined")
    assertSize(bytes2, { size: opts.size });
  const hex = bytesToHex(bytes2, opts);
  return hexToNumber(hex, opts);
}
function bytesToString(bytes_, opts = {}) {
  let bytes2 = bytes_;
  if (typeof opts.size !== "undefined") {
    assertSize(bytes2, { size: opts.size });
    bytes2 = trim(bytes2, { dir: "right" });
  }
  return new TextDecoder().decode(bytes2);
}
var init_fromBytes = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/fromBytes.js"() {
    init_encoding();
    init_trim();
    init_fromHex();
    init_toHex();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js
function decodeAbiParameters(params, data) {
  const bytes2 = typeof data === "string" ? hexToBytes(data) : data;
  const cursor = createCursor(bytes2);
  if (size(bytes2) === 0 && params.length > 0)
    throw new AbiDecodingZeroDataError();
  if (size(data) && size(data) < 32)
    throw new AbiDecodingDataSizeTooSmallError({
      data: typeof data === "string" ? data : bytesToHex(data),
      params,
      size: size(data)
    });
  let consumed = 0;
  const values = [];
  for (let i = 0; i < params.length; ++i) {
    const param = params[i];
    cursor.setPosition(consumed);
    const [data2, consumed_] = decodeParameter(cursor, param, {
      staticPosition: 0
    });
    consumed += consumed_;
    values.push(data2);
  }
  return values;
}
function decodeParameter(cursor, param, { staticPosition }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return decodeArray(cursor, { ...param, type }, { length, staticPosition });
  }
  if (param.type === "tuple")
    return decodeTuple(cursor, param, { staticPosition });
  if (param.type === "address")
    return decodeAddress(cursor);
  if (param.type === "bool")
    return decodeBool(cursor);
  if (param.type.startsWith("bytes"))
    return decodeBytes(cursor, param, { staticPosition });
  if (param.type.startsWith("uint") || param.type.startsWith("int"))
    return decodeNumber(cursor, param);
  if (param.type === "string")
    return decodeString(cursor, { staticPosition });
  throw new InvalidAbiDecodingTypeError(param.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
function decodeAddress(cursor) {
  const value = cursor.readBytes(32);
  return [checksumAddress(bytesToHex(sliceBytes(value, -20))), 32];
}
function decodeArray(cursor, param, { length, staticPosition }) {
  if (!length) {
    const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const startOfData = start + sizeOfLength;
    cursor.setPosition(start);
    const length2 = bytesToNumber(cursor.readBytes(sizeOfLength));
    const dynamicChild = hasDynamicChild(param);
    let consumed2 = 0;
    const value2 = [];
    for (let i = 0; i < length2; ++i) {
      cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed2));
      const [data, consumed_] = decodeParameter(cursor, param, {
        staticPosition: startOfData
      });
      consumed2 += consumed_;
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  if (hasDynamicChild(param)) {
    const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const value2 = [];
    for (let i = 0; i < length; ++i) {
      cursor.setPosition(start + i * 32);
      const [data] = decodeParameter(cursor, param, {
        staticPosition: start
      });
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  let consumed = 0;
  const value = [];
  for (let i = 0; i < length; ++i) {
    const [data, consumed_] = decodeParameter(cursor, param, {
      staticPosition: staticPosition + consumed
    });
    consumed += consumed_;
    value.push(data);
  }
  return [value, consumed];
}
function decodeBool(cursor) {
  return [bytesToBool(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
  const [_, size3] = param.type.split("bytes");
  if (!size3) {
    const offset = bytesToNumber(cursor.readBytes(32));
    cursor.setPosition(staticPosition + offset);
    const length = bytesToNumber(cursor.readBytes(32));
    if (length === 0) {
      cursor.setPosition(staticPosition + 32);
      return ["0x", 32];
    }
    const data = cursor.readBytes(length);
    cursor.setPosition(staticPosition + 32);
    return [bytesToHex(data), 32];
  }
  const value = bytesToHex(cursor.readBytes(parseInt(size3), 32));
  return [value, 32];
}
function decodeNumber(cursor, param) {
  const signed = param.type.startsWith("int");
  const size3 = parseInt(param.type.split("int")[1] || "256");
  const value = cursor.readBytes(32);
  return [
    size3 > 48 ? bytesToBigInt(value, { signed }) : bytesToNumber(value, { signed }),
    32
  ];
}
function decodeTuple(cursor, param, { staticPosition }) {
  const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
  const value = hasUnnamedChild ? [] : {};
  let consumed = 0;
  if (hasDynamicChild(param)) {
    const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    for (let i = 0; i < param.components.length; ++i) {
      const component = param.components[i];
      cursor.setPosition(start + consumed);
      const [data, consumed_] = decodeParameter(cursor, component, {
        staticPosition: start
      });
      consumed += consumed_;
      value[hasUnnamedChild ? i : component?.name] = data;
    }
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
  }
  for (let i = 0; i < param.components.length; ++i) {
    const component = param.components[i];
    const [data, consumed_] = decodeParameter(cursor, component, {
      staticPosition
    });
    value[hasUnnamedChild ? i : component?.name] = data;
    consumed += consumed_;
  }
  return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
  const offset = bytesToNumber(cursor.readBytes(32));
  const start = staticPosition + offset;
  cursor.setPosition(start);
  const length = bytesToNumber(cursor.readBytes(32));
  if (length === 0) {
    cursor.setPosition(staticPosition + 32);
    return ["", 32];
  }
  const data = cursor.readBytes(length, 32);
  const value = bytesToString(trim(data));
  cursor.setPosition(staticPosition + 32);
  return [value, 32];
}
function hasDynamicChild(param) {
  const { type } = param;
  if (type === "string")
    return true;
  if (type === "bytes")
    return true;
  if (type.endsWith("[]"))
    return true;
  if (type === "tuple")
    return param.components?.some(hasDynamicChild);
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents && hasDynamicChild({ ...param, type: arrayComponents[1] }))
    return true;
  return false;
}
var sizeOfLength, sizeOfOffset;
var init_decodeAbiParameters = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js"() {
    init_abi();
    init_getAddress();
    init_cursor2();
    init_size();
    init_slice();
    init_trim();
    init_fromBytes();
    init_toBytes();
    init_toHex();
    init_encodeAbiParameters();
    sizeOfLength = 32;
    sizeOfOffset = 32;
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/decodeErrorResult.js
function decodeErrorResult(parameters) {
  const { abi, data } = parameters;
  const signature = slice(data, 0, 4);
  if (signature === "0x")
    throw new AbiDecodingZeroDataError();
  const abi_ = [...abi || [], solidityError, solidityPanic];
  const abiItem = abi_.find((x) => x.type === "error" && signature === toFunctionSelector(formatAbiItem2(x)));
  if (!abiItem)
    throw new AbiErrorSignatureNotFoundError(signature, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem,
    args: "inputs" in abiItem && abiItem.inputs && abiItem.inputs.length > 0 ? decodeAbiParameters(abiItem.inputs, slice(data, 4)) : void 0,
    errorName: abiItem.name
  };
}
var init_decodeErrorResult = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/decodeErrorResult.js"() {
    init_solidity();
    init_abi();
    init_slice();
    init_toFunctionSelector();
    init_decodeAbiParameters();
    init_formatAbiItem2();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/stringify.js
var stringify;
var init_stringify = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/stringify.js"() {
    stringify = (value, replacer, space) => JSON.stringify(value, (key, value_) => {
      const value2 = typeof value_ === "bigint" ? value_.toString() : value_;
      return typeof replacer === "function" ? replacer(key, value2) : value2;
    }, space);
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js
function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false }) {
  if (!("name" in abiItem))
    return;
  if (!("inputs" in abiItem))
    return;
  if (!abiItem.inputs)
    return;
  return `${includeFunctionName ? abiItem.name : ""}(${abiItem.inputs.map((input, i) => `${includeName && input.name ? `${input.name}: ` : ""}${typeof args[i] === "object" ? stringify(args[i]) : args[i]}`).join(", ")})`;
}
var init_formatAbiItemWithArgs = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js"() {
    init_stringify();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/unit.js
var etherUnits, gweiUnits;
var init_unit = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/unit.js"() {
    etherUnits = {
      gwei: 9,
      wei: 18
    };
    gweiUnits = {
      ether: -9,
      wei: 9
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/unit/formatUnits.js
function formatUnits(value, decimals) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
var init_formatUnits = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/unit/formatUnits.js"() {
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/unit/formatEther.js
function formatEther(wei, unit = "wei") {
  return formatUnits(wei, etherUnits[unit]);
}
var init_formatEther = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/unit/formatEther.js"() {
    init_unit();
    init_formatUnits();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/unit/formatGwei.js
function formatGwei(wei, unit = "wei") {
  return formatUnits(wei, gweiUnits[unit]);
}
var init_formatGwei = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/unit/formatGwei.js"() {
    init_unit();
    init_formatUnits();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/stateOverride.js
function prettyStateMapping(stateMapping) {
  return stateMapping.reduce((pretty, { slot, value }) => {
    return `${pretty}        ${slot}: ${value}
`;
  }, "");
}
function prettyStateOverride(stateOverride) {
  return stateOverride.reduce((pretty, { address, ...state }) => {
    let val = `${pretty}    ${address}:
`;
    if (state.nonce)
      val += `      nonce: ${state.nonce}
`;
    if (state.balance)
      val += `      balance: ${state.balance}
`;
    if (state.code)
      val += `      code: ${state.code}
`;
    if (state.state) {
      val += "      state:\n";
      val += prettyStateMapping(state.state);
    }
    if (state.stateDiff) {
      val += "      stateDiff:\n";
      val += prettyStateMapping(state.stateDiff);
    }
    return val;
  }, "  State Override:\n").slice(0, -1);
}
var AccountStateConflictError, StateAssignmentConflictError;
var init_stateOverride = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/stateOverride.js"() {
    init_base();
    AccountStateConflictError = class extends BaseError {
      constructor({ address }) {
        super(`State for account "${address}" is set multiple times.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AccountStateConflictError"
        });
      }
    };
    StateAssignmentConflictError = class extends BaseError {
      constructor() {
        super("state and stateDiff are set on the same account.");
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "StateAssignmentConflictError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/transaction.js
function prettyPrint(args) {
  const entries = Object.entries(args).map(([key, value]) => {
    if (value === void 0 || value === false)
      return null;
    return [key, value];
  }).filter(Boolean);
  const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
  return entries.map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join("\n");
}
var FeeConflictError, InvalidLegacyVError, InvalidSerializableTransactionError, InvalidStorageKeySizeError, TransactionExecutionError, TransactionNotFoundError, TransactionReceiptNotFoundError, WaitForTransactionReceiptTimeoutError;
var init_transaction = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/transaction.js"() {
    init_formatEther();
    init_formatGwei();
    init_base();
    FeeConflictError = class extends BaseError {
      constructor() {
        super([
          "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
          "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "FeeConflictError"
        });
      }
    };
    InvalidLegacyVError = class extends BaseError {
      constructor({ v }) {
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidLegacyVError"
        });
      }
    };
    InvalidSerializableTransactionError = class extends BaseError {
      constructor({ transaction }) {
        super("Cannot infer a transaction type from provided transaction.", {
          metaMessages: [
            "Provided Transaction:",
            "{",
            prettyPrint(transaction),
            "}",
            "",
            "To infer the type, either provide:",
            "- a `type` to the Transaction, or",
            "- an EIP-1559 Transaction with `maxFeePerGas`, or",
            "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
            "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
            "- a Legacy Transaction with `gasPrice`"
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidSerializableTransactionError"
        });
      }
    };
    InvalidStorageKeySizeError = class extends BaseError {
      constructor({ storageKey }) {
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidStorageKeySizeError"
        });
      }
    };
    TransactionExecutionError = class extends BaseError {
      constructor(cause, { account, docsPath: docsPath6, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
        const prettyArgs = prettyPrint({
          chain: chain && `${chain?.name} (id: ${chain?.id})`,
          from: account?.address,
          to,
          value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
          data,
          gas,
          gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
          maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
          maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
          nonce
        });
        super(cause.shortMessage, {
          cause,
          docsPath: docsPath6,
          metaMessages: [
            ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
            "Request Arguments:",
            prettyArgs
          ].filter(Boolean)
        });
        Object.defineProperty(this, "cause", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionExecutionError"
        });
        this.cause = cause;
      }
    };
    TransactionNotFoundError = class extends BaseError {
      constructor({ blockHash, blockNumber, blockTag, hash: hash2, index: index2 }) {
        let identifier = "Transaction";
        if (blockTag && index2 !== void 0)
          identifier = `Transaction at block time "${blockTag}" at index "${index2}"`;
        if (blockHash && index2 !== void 0)
          identifier = `Transaction at block hash "${blockHash}" at index "${index2}"`;
        if (blockNumber && index2 !== void 0)
          identifier = `Transaction at block number "${blockNumber}" at index "${index2}"`;
        if (hash2)
          identifier = `Transaction with hash "${hash2}"`;
        super(`${identifier} could not be found.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionNotFoundError"
        });
      }
    };
    TransactionReceiptNotFoundError = class extends BaseError {
      constructor({ hash: hash2 }) {
        super(`Transaction receipt with hash "${hash2}" could not be found. The Transaction may not be processed on a block yet.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionReceiptNotFoundError"
        });
      }
    };
    WaitForTransactionReceiptTimeoutError = class extends BaseError {
      constructor({ hash: hash2 }) {
        super(`Timed out while waiting for transaction with hash "${hash2}" to be confirmed.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "WaitForTransactionReceiptTimeoutError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/contract.js
var CallExecutionError, ContractFunctionExecutionError, ContractFunctionRevertedError, ContractFunctionZeroDataError, RawContractError;
var init_contract = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/contract.js"() {
    init_parseAccount();
    init_solidity();
    init_decodeErrorResult();
    init_formatAbiItem2();
    init_formatAbiItemWithArgs();
    init_getAbiItem();
    init_formatEther();
    init_formatGwei();
    init_abi();
    init_base();
    init_stateOverride();
    init_transaction();
    init_utils();
    CallExecutionError = class extends BaseError {
      constructor(cause, { account: account_, docsPath: docsPath6, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride }) {
        const account = account_ ? parseAccount(account_) : void 0;
        let prettyArgs = prettyPrint({
          from: account?.address,
          to,
          value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
          data,
          gas,
          gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
          maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
          maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
          nonce
        });
        if (stateOverride) {
          prettyArgs += `
${prettyStateOverride(stateOverride)}`;
        }
        super(cause.shortMessage, {
          cause,
          docsPath: docsPath6,
          metaMessages: [
            ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
            "Raw Call Arguments:",
            prettyArgs
          ].filter(Boolean)
        });
        Object.defineProperty(this, "cause", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "CallExecutionError"
        });
        this.cause = cause;
      }
    };
    ContractFunctionExecutionError = class extends BaseError {
      constructor(cause, { abi, args, contractAddress, docsPath: docsPath6, functionName, sender }) {
        const abiItem = getAbiItem({ abi, args, name: functionName });
        const formattedArgs = abiItem ? formatAbiItemWithArgs({
          abiItem,
          args,
          includeFunctionName: false,
          includeName: false
        }) : void 0;
        const functionWithParams = abiItem ? formatAbiItem2(abiItem, { includeName: true }) : void 0;
        const prettyArgs = prettyPrint({
          address: contractAddress && getContractAddress(contractAddress),
          function: functionWithParams,
          args: formattedArgs && formattedArgs !== "()" && `${[...Array(functionName?.length ?? 0).keys()].map(() => " ").join("")}${formattedArgs}`,
          sender
        });
        super(cause.shortMessage || `An unknown error occurred while executing the contract function "${functionName}".`, {
          cause,
          docsPath: docsPath6,
          metaMessages: [
            ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
            "Contract Call:",
            prettyArgs
          ].filter(Boolean)
        });
        Object.defineProperty(this, "abi", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "args", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "cause", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "functionName", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "sender", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ContractFunctionExecutionError"
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
      }
    };
    ContractFunctionRevertedError = class extends BaseError {
      constructor({ abi, data, functionName, message }) {
        let cause;
        let decodedData = void 0;
        let metaMessages;
        let reason;
        if (data && data !== "0x") {
          try {
            decodedData = decodeErrorResult({ abi, data });
            const { abiItem, errorName, args: errorArgs } = decodedData;
            if (errorName === "Error") {
              reason = errorArgs[0];
            } else if (errorName === "Panic") {
              const [firstArg] = errorArgs;
              reason = panicReasons[firstArg];
            } else {
              const errorWithParams = abiItem ? formatAbiItem2(abiItem, { includeName: true }) : void 0;
              const formattedArgs = abiItem && errorArgs ? formatAbiItemWithArgs({
                abiItem,
                args: errorArgs,
                includeFunctionName: false,
                includeName: false
              }) : void 0;
              metaMessages = [
                errorWithParams ? `Error: ${errorWithParams}` : "",
                formattedArgs && formattedArgs !== "()" ? `       ${[...Array(errorName?.length ?? 0).keys()].map(() => " ").join("")}${formattedArgs}` : ""
              ];
            }
          } catch (err) {
            cause = err;
          }
        } else if (message)
          reason = message;
        let signature;
        if (cause instanceof AbiErrorSignatureNotFoundError) {
          signature = cause.signature;
          metaMessages = [
            `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
            "Make sure you are using the correct ABI and that the error exists on it.",
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
          ];
        }
        super(reason && reason !== "execution reverted" || signature ? [
          `The contract function "${functionName}" reverted with the following ${signature ? "signature" : "reason"}:`,
          reason || signature
        ].join("\n") : `The contract function "${functionName}" reverted.`, {
          cause,
          metaMessages
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ContractFunctionRevertedError"
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "reason", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "signature", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.data = decodedData;
        this.reason = reason;
        this.signature = signature;
      }
    };
    ContractFunctionZeroDataError = class extends BaseError {
      constructor({ functionName }) {
        super(`The contract function "${functionName}" returned no data ("0x").`, {
          metaMessages: [
            "This could be due to any of the following:",
            `  - The contract does not have the function "${functionName}",`,
            "  - The parameters passed to the contract function may be invalid, or",
            "  - The address is not a contract."
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ContractFunctionZeroDataError"
        });
      }
    };
    RawContractError = class extends BaseError {
      constructor({ data, message }) {
        super(message || "");
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: 3
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "RawContractError"
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.data = data;
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/request.js
var HttpRequestError, RpcRequestError, TimeoutError;
var init_request = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/request.js"() {
    init_stringify();
    init_base();
    init_utils();
    HttpRequestError = class extends BaseError {
      constructor({ body, details, headers, status, url }) {
        super("HTTP request failed.", {
          details,
          metaMessages: [
            status && `Status: ${status}`,
            `URL: ${getUrl(url)}`,
            body && `Request body: ${stringify(body)}`
          ].filter(Boolean)
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "HttpRequestError"
        });
        Object.defineProperty(this, "body", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "headers", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "status", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "url", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
      }
    };
    RpcRequestError = class extends BaseError {
      constructor({ body, error, url }) {
        super("RPC Request failed.", {
          cause: error,
          details: error.message,
          metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "RpcRequestError"
        });
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.code = error.code;
      }
    };
    TimeoutError = class extends BaseError {
      constructor({ body, url }) {
        super("The request took too long to respond.", {
          details: "The request timed out.",
          metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TimeoutError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/rpc.js
var unknownErrorCode, RpcError, ProviderRpcError, ParseRpcError, InvalidRequestRpcError, MethodNotFoundRpcError, InvalidParamsRpcError, InternalRpcError, InvalidInputRpcError, ResourceNotFoundRpcError, ResourceUnavailableRpcError, TransactionRejectedRpcError, MethodNotSupportedRpcError, LimitExceededRpcError, JsonRpcVersionUnsupportedError, UserRejectedRequestError, UnauthorizedProviderError, UnsupportedProviderMethodError, ProviderDisconnectedError, ChainDisconnectedError, SwitchChainError, UnknownRpcError;
var init_rpc = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/rpc.js"() {
    init_base();
    init_request();
    unknownErrorCode = -1;
    RpcError = class extends BaseError {
      constructor(cause, { code, docsPath: docsPath6, metaMessages, shortMessage }) {
        super(shortMessage, {
          cause,
          docsPath: docsPath6,
          metaMessages: metaMessages || cause?.metaMessages
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "RpcError"
        });
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.name = cause.name;
        this.code = cause instanceof RpcRequestError ? cause.code : code ?? unknownErrorCode;
      }
    };
    ProviderRpcError = class extends RpcError {
      constructor(cause, options) {
        super(cause, options);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ProviderRpcError"
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.data = options.data;
      }
    };
    ParseRpcError = class _ParseRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _ParseRpcError.code,
          shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ParseRpcError"
        });
      }
    };
    Object.defineProperty(ParseRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32700
    });
    InvalidRequestRpcError = class _InvalidRequestRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _InvalidRequestRpcError.code,
          shortMessage: "JSON is not a valid request object."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidRequestRpcError"
        });
      }
    };
    Object.defineProperty(InvalidRequestRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32600
    });
    MethodNotFoundRpcError = class _MethodNotFoundRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _MethodNotFoundRpcError.code,
          shortMessage: "The method does not exist / is not available."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "MethodNotFoundRpcError"
        });
      }
    };
    Object.defineProperty(MethodNotFoundRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32601
    });
    InvalidParamsRpcError = class _InvalidParamsRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _InvalidParamsRpcError.code,
          shortMessage: [
            "Invalid parameters were provided to the RPC method.",
            "Double check you have provided the correct parameters."
          ].join("\n")
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidParamsRpcError"
        });
      }
    };
    Object.defineProperty(InvalidParamsRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32602
    });
    InternalRpcError = class _InternalRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _InternalRpcError.code,
          shortMessage: "An internal error was received."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InternalRpcError"
        });
      }
    };
    Object.defineProperty(InternalRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32603
    });
    InvalidInputRpcError = class _InvalidInputRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _InvalidInputRpcError.code,
          shortMessage: [
            "Missing or invalid parameters.",
            "Double check you have provided the correct parameters."
          ].join("\n")
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidInputRpcError"
        });
      }
    };
    Object.defineProperty(InvalidInputRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32e3
    });
    ResourceNotFoundRpcError = class _ResourceNotFoundRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _ResourceNotFoundRpcError.code,
          shortMessage: "Requested resource not found."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ResourceNotFoundRpcError"
        });
      }
    };
    Object.defineProperty(ResourceNotFoundRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32001
    });
    ResourceUnavailableRpcError = class _ResourceUnavailableRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _ResourceUnavailableRpcError.code,
          shortMessage: "Requested resource not available."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ResourceUnavailableRpcError"
        });
      }
    };
    Object.defineProperty(ResourceUnavailableRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32002
    });
    TransactionRejectedRpcError = class _TransactionRejectedRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _TransactionRejectedRpcError.code,
          shortMessage: "Transaction creation failed."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionRejectedRpcError"
        });
      }
    };
    Object.defineProperty(TransactionRejectedRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32003
    });
    MethodNotSupportedRpcError = class _MethodNotSupportedRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _MethodNotSupportedRpcError.code,
          shortMessage: "Method is not implemented."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "MethodNotSupportedRpcError"
        });
      }
    };
    Object.defineProperty(MethodNotSupportedRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32004
    });
    LimitExceededRpcError = class _LimitExceededRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _LimitExceededRpcError.code,
          shortMessage: "Request exceeds defined limit."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "LimitExceededRpcError"
        });
      }
    };
    Object.defineProperty(LimitExceededRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32005
    });
    JsonRpcVersionUnsupportedError = class _JsonRpcVersionUnsupportedError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _JsonRpcVersionUnsupportedError.code,
          shortMessage: "Version of JSON-RPC protocol is not supported."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "JsonRpcVersionUnsupportedError"
        });
      }
    };
    Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32006
    });
    UserRejectedRequestError = class _UserRejectedRequestError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _UserRejectedRequestError.code,
          shortMessage: "User rejected the request."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UserRejectedRequestError"
        });
      }
    };
    Object.defineProperty(UserRejectedRequestError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4001
    });
    UnauthorizedProviderError = class _UnauthorizedProviderError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _UnauthorizedProviderError.code,
          shortMessage: "The requested method and/or account has not been authorized by the user."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnauthorizedProviderError"
        });
      }
    };
    Object.defineProperty(UnauthorizedProviderError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4100
    });
    UnsupportedProviderMethodError = class _UnsupportedProviderMethodError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _UnsupportedProviderMethodError.code,
          shortMessage: "The Provider does not support the requested method."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnsupportedProviderMethodError"
        });
      }
    };
    Object.defineProperty(UnsupportedProviderMethodError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4200
    });
    ProviderDisconnectedError = class _ProviderDisconnectedError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _ProviderDisconnectedError.code,
          shortMessage: "The Provider is disconnected from all chains."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ProviderDisconnectedError"
        });
      }
    };
    Object.defineProperty(ProviderDisconnectedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4900
    });
    ChainDisconnectedError = class _ChainDisconnectedError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _ChainDisconnectedError.code,
          shortMessage: "The Provider is not connected to the requested chain."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ChainDisconnectedError"
        });
      }
    };
    Object.defineProperty(ChainDisconnectedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4901
    });
    SwitchChainError = class _SwitchChainError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _SwitchChainError.code,
          shortMessage: "An error occurred when attempting to switch chain."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "SwitchChainError"
        });
      }
    };
    Object.defineProperty(SwitchChainError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4902
    });
    UnknownRpcError = class extends RpcError {
      constructor(cause) {
        super(cause, {
          shortMessage: "An unknown RPC error occurred."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnknownRpcError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/node.js
var ExecutionRevertedError, FeeCapTooHighError, FeeCapTooLowError, NonceTooHighError, NonceTooLowError, NonceMaxValueError, InsufficientFundsError, IntrinsicGasTooHighError, IntrinsicGasTooLowError, TransactionTypeNotSupportedError, TipAboveFeeCapError, UnknownNodeError;
var init_node = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/node.js"() {
    init_formatGwei();
    init_base();
    ExecutionRevertedError = class extends BaseError {
      constructor({ cause, message } = {}) {
        const reason = message?.replace("execution reverted: ", "")?.replace("execution reverted", "");
        super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ExecutionRevertedError"
        });
      }
    };
    Object.defineProperty(ExecutionRevertedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 3
    });
    Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /execution reverted/
    });
    FeeCapTooHighError = class extends BaseError {
      constructor({ cause, maxFeePerGas } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "FeeCapTooHigh"
        });
      }
    };
    Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
    });
    FeeCapTooLowError = class extends BaseError {
      constructor({ cause, maxFeePerGas } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)}` : ""} gwei) cannot be lower than the block base fee.`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "FeeCapTooLow"
        });
      }
    };
    Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
    });
    NonceTooHighError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is higher than the next one expected.`, { cause });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "NonceTooHighError"
        });
      }
    };
    Object.defineProperty(NonceTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce too high/
    });
    NonceTooLowError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super([
          `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is lower than the current nonce of the account.`,
          "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
        ].join("\n"), { cause });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "NonceTooLowError"
        });
      }
    };
    Object.defineProperty(NonceTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce too low|transaction already imported|already known/
    });
    NonceMaxValueError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}exceeds the maximum allowed nonce.`, { cause });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "NonceMaxValueError"
        });
      }
    };
    Object.defineProperty(NonceMaxValueError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce has max value/
    });
    InsufficientFundsError = class extends BaseError {
      constructor({ cause } = {}) {
        super([
          "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
        ].join("\n"), {
          cause,
          metaMessages: [
            "This error could arise when the account does not have enough funds to:",
            " - pay for the total gas fee,",
            " - pay for the value to send.",
            " ",
            "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
            " - `gas` is the amount of gas needed for transaction to execute,",
            " - `gas fee` is the gas fee,",
            " - `value` is the amount of ether to send to the recipient."
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InsufficientFundsError"
        });
      }
    };
    Object.defineProperty(InsufficientFundsError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /insufficient funds/
    });
    IntrinsicGasTooHighError = class extends BaseError {
      constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "IntrinsicGasTooHighError"
        });
      }
    };
    Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /intrinsic gas too high|gas limit reached/
    });
    IntrinsicGasTooLowError = class extends BaseError {
      constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction is too low.`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "IntrinsicGasTooLowError"
        });
      }
    };
    Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /intrinsic gas too low/
    });
    TransactionTypeNotSupportedError = class extends BaseError {
      constructor({ cause }) {
        super("The transaction type is not supported for this chain.", {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionTypeNotSupportedError"
        });
      }
    };
    Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /transaction type not valid/
    });
    TipAboveFeeCapError = class extends BaseError {
      constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}) {
        super([
          `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}).`
        ].join("\n"), {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TipAboveFeeCapError"
        });
      }
    };
    Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
    });
    UnknownNodeError = class extends BaseError {
      constructor({ cause }) {
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnknownNodeError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/errors/getNodeError.js
function getNodeError(err, args) {
  const message = (err.details || "").toLowerCase();
  const executionRevertedError = err instanceof BaseError ? err.walk((e) => e.code === ExecutionRevertedError.code) : err;
  if (executionRevertedError instanceof BaseError) {
    return new ExecutionRevertedError({
      cause: err,
      message: executionRevertedError.details
    });
  }
  if (ExecutionRevertedError.nodeMessage.test(message))
    return new ExecutionRevertedError({
      cause: err,
      message: err.details
    });
  if (FeeCapTooHighError.nodeMessage.test(message))
    return new FeeCapTooHighError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas
    });
  if (FeeCapTooLowError.nodeMessage.test(message))
    return new FeeCapTooLowError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas
    });
  if (NonceTooHighError.nodeMessage.test(message))
    return new NonceTooHighError({ cause: err, nonce: args?.nonce });
  if (NonceTooLowError.nodeMessage.test(message))
    return new NonceTooLowError({ cause: err, nonce: args?.nonce });
  if (NonceMaxValueError.nodeMessage.test(message))
    return new NonceMaxValueError({ cause: err, nonce: args?.nonce });
  if (InsufficientFundsError.nodeMessage.test(message))
    return new InsufficientFundsError({ cause: err });
  if (IntrinsicGasTooHighError.nodeMessage.test(message))
    return new IntrinsicGasTooHighError({ cause: err, gas: args?.gas });
  if (IntrinsicGasTooLowError.nodeMessage.test(message))
    return new IntrinsicGasTooLowError({ cause: err, gas: args?.gas });
  if (TransactionTypeNotSupportedError.nodeMessage.test(message))
    return new TransactionTypeNotSupportedError({ cause: err });
  if (TipAboveFeeCapError.nodeMessage.test(message))
    return new TipAboveFeeCapError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas,
      maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
  return new UnknownNodeError({
    cause: err
  });
}
var init_getNodeError = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/errors/getNodeError.js"() {
    init_base();
    init_node();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/extract.js
function extract(value_, { format }) {
  if (!format)
    return {};
  const value = {};
  function extract_(formatted2) {
    const keys = Object.keys(formatted2);
    for (const key of keys) {
      if (key in value_)
        value[key] = value_[key];
      if (formatted2[key] && typeof formatted2[key] === "object" && !Array.isArray(formatted2[key]))
        extract_(formatted2[key]);
    }
  }
  const formatted = format(value_ || {});
  extract_(formatted);
  return value;
}
var init_extract = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/extract.js"() {
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/transactionRequest.js
function formatTransactionRequest(request) {
  const rpcRequest = { ...request };
  if (typeof request.blobs !== "undefined" && typeof request.blobs[0] !== "string")
    rpcRequest.blobs = request.blobs.map((x) => bytesToHex(x));
  if (typeof request.gas !== "undefined")
    rpcRequest.gas = numberToHex(request.gas);
  if (typeof request.gasPrice !== "undefined")
    rpcRequest.gasPrice = numberToHex(request.gasPrice);
  if (typeof request.maxFeePerBlobGas !== "undefined")
    rpcRequest.maxFeePerBlobGas = numberToHex(request.maxFeePerBlobGas);
  if (typeof request.maxFeePerGas !== "undefined")
    rpcRequest.maxFeePerGas = numberToHex(request.maxFeePerGas);
  if (typeof request.maxPriorityFeePerGas !== "undefined")
    rpcRequest.maxPriorityFeePerGas = numberToHex(request.maxPriorityFeePerGas);
  if (typeof request.nonce !== "undefined")
    rpcRequest.nonce = numberToHex(request.nonce);
  if (typeof request.type !== "undefined")
    rpcRequest.type = rpcTransactionType[request.type];
  if (typeof request.value !== "undefined")
    rpcRequest.value = numberToHex(request.value);
  return rpcRequest;
}
var rpcTransactionType;
var init_transactionRequest = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/transactionRequest.js"() {
    init_toHex();
    rpcTransactionType = {
      legacy: "0x0",
      eip2930: "0x1",
      eip1559: "0x2",
      eip4844: "0x3"
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/assertRequest.js
function assertRequest(args) {
  const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  if (account && !isAddress(account.address))
    throw new InvalidAddressError({ address: account.address });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof gasPrice !== "undefined" && (typeof maxFeePerGas !== "undefined" || typeof maxPriorityFeePerGas !== "undefined"))
    throw new FeeConflictError();
  if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
var init_assertRequest = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/assertRequest.js"() {
    init_parseAccount();
    init_address();
    init_node();
    init_transaction();
    init_isAddress();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js
function decodeFunctionResult(parameters) {
  const { abi, args, functionName, data } = parameters;
  let abiItem = abi[0];
  if (functionName) {
    const item = getAbiItem({ abi, args, name: functionName });
    if (!item)
      throw new AbiFunctionNotFoundError(functionName, { docsPath: docsPath4 });
    abiItem = item;
  }
  if (abiItem.type !== "function")
    throw new AbiFunctionNotFoundError(void 0, { docsPath: docsPath4 });
  if (!abiItem.outputs)
    throw new AbiFunctionOutputsNotFoundError(abiItem.name, { docsPath: docsPath4 });
  const values = decodeAbiParameters(abiItem.outputs, data);
  if (values && values.length > 1)
    return values;
  if (values && values.length === 1)
    return values[0];
  return void 0;
}
var docsPath4;
var init_decodeFunctionResult = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js"() {
    init_abi();
    init_decodeAbiParameters();
    init_getAbiItem();
    docsPath4 = "/docs/contract/decodeFunctionResult";
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/abis.js
var multicall3Abi, universalResolverErrors, universalResolverResolveAbi, universalResolverReverseAbi, textResolverAbi, addressResolverAbi, universalSignatureValidatorAbi;
var init_abis = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/abis.js"() {
    multicall3Abi = [
      {
        inputs: [
          {
            components: [
              {
                name: "target",
                type: "address"
              },
              {
                name: "allowFailure",
                type: "bool"
              },
              {
                name: "callData",
                type: "bytes"
              }
            ],
            name: "calls",
            type: "tuple[]"
          }
        ],
        name: "aggregate3",
        outputs: [
          {
            components: [
              {
                name: "success",
                type: "bool"
              },
              {
                name: "returnData",
                type: "bytes"
              }
            ],
            name: "returnData",
            type: "tuple[]"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ];
    universalResolverErrors = [
      {
        inputs: [],
        name: "ResolverNotFound",
        type: "error"
      },
      {
        inputs: [],
        name: "ResolverWildcardNotSupported",
        type: "error"
      },
      {
        inputs: [],
        name: "ResolverNotContract",
        type: "error"
      },
      {
        inputs: [
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "ResolverError",
        type: "error"
      },
      {
        inputs: [
          {
            components: [
              {
                name: "status",
                type: "uint16"
              },
              {
                name: "message",
                type: "string"
              }
            ],
            name: "errors",
            type: "tuple[]"
          }
        ],
        name: "HttpError",
        type: "error"
      }
    ];
    universalResolverResolveAbi = [
      ...universalResolverErrors,
      {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes" },
          { name: "data", type: "bytes" }
        ],
        outputs: [
          { name: "", type: "bytes" },
          { name: "address", type: "address" }
        ]
      },
      {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes" },
          { name: "data", type: "bytes" },
          { name: "gateways", type: "string[]" }
        ],
        outputs: [
          { name: "", type: "bytes" },
          { name: "address", type: "address" }
        ]
      }
    ];
    universalResolverReverseAbi = [
      ...universalResolverErrors,
      {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{ type: "bytes", name: "reverseName" }],
        outputs: [
          { type: "string", name: "resolvedName" },
          { type: "address", name: "resolvedAddress" },
          { type: "address", name: "reverseResolver" },
          { type: "address", name: "resolver" }
        ]
      },
      {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [
          { type: "bytes", name: "reverseName" },
          { type: "string[]", name: "gateways" }
        ],
        outputs: [
          { type: "string", name: "resolvedName" },
          { type: "address", name: "resolvedAddress" },
          { type: "address", name: "reverseResolver" },
          { type: "address", name: "resolver" }
        ]
      }
    ];
    textResolverAbi = [
      {
        name: "text",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes32" },
          { name: "key", type: "string" }
        ],
        outputs: [{ name: "", type: "string" }]
      }
    ];
    addressResolverAbi = [
      {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{ name: "name", type: "bytes32" }],
        outputs: [{ name: "", type: "address" }]
      },
      {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes32" },
          { name: "coinType", type: "uint256" }
        ],
        outputs: [{ name: "", type: "bytes" }]
      }
    ];
    universalSignatureValidatorAbi = [
      {
        inputs: [
          {
            internalType: "address",
            name: "_signer",
            type: "address"
          },
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes"
          }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
      }
    ];
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/contract.js
var aggregate3Signature;
var init_contract2 = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/contract.js"() {
    aggregate3Signature = "0x82ad56cb";
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/chain.js
var ChainDoesNotSupportContract, ChainMismatchError, ChainNotFoundError, ClientChainNotConfiguredError, InvalidChainIdError;
var init_chain = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/chain.js"() {
    init_base();
    ChainDoesNotSupportContract = class extends BaseError {
      constructor({ blockNumber, chain, contract }) {
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
          metaMessages: [
            "This could be due to any of the following:",
            ...blockNumber && contract.blockCreated && contract.blockCreated > blockNumber ? [
              `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`
            ] : [
              `- The chain does not have the contract "${contract.name}" configured.`
            ]
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ChainDoesNotSupportContract"
        });
      }
    };
    ChainMismatchError = class extends BaseError {
      constructor({ chain, currentChainId }) {
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} \u2013 ${chain.name}).`, {
          metaMessages: [
            `Current Chain ID:  ${currentChainId}`,
            `Expected Chain ID: ${chain.id} \u2013 ${chain.name}`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ChainMismatchError"
        });
      }
    };
    ChainNotFoundError = class extends BaseError {
      constructor() {
        super([
          "No chain was provided to the request.",
          "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ChainNotFoundError"
        });
      }
    };
    ClientChainNotConfiguredError = class extends BaseError {
      constructor() {
        super("No chain was provided to the Client.");
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ClientChainNotConfiguredError"
        });
      }
    };
    InvalidChainIdError = class extends BaseError {
      constructor({ chainId }) {
        super(typeof chainId === "number" ? `Chain ID "${chainId}" is invalid.` : "Chain ID is invalid.");
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidChainIdError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/chain/getChainContractAddress.js
function getChainContractAddress({ blockNumber, chain, contract: name }) {
  const contract = chain?.contracts?.[name];
  if (!contract)
    throw new ChainDoesNotSupportContract({
      chain,
      contract: { name }
    });
  if (blockNumber && contract.blockCreated && contract.blockCreated > blockNumber)
    throw new ChainDoesNotSupportContract({
      blockNumber,
      chain,
      contract: {
        name,
        blockCreated: contract.blockCreated
      }
    });
  return contract.address;
}
var init_getChainContractAddress = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/chain/getChainContractAddress.js"() {
    init_chain();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/errors/getCallError.js
function getCallError(err, { docsPath: docsPath6, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new CallExecutionError(cause, {
    docsPath: docsPath6,
    ...args
  });
}
var init_getCallError = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/errors/getCallError.js"() {
    init_contract();
    init_node();
    init_getNodeError();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/promise/createBatchScheduler.js
function createBatchScheduler({ fn, id, shouldSplitBatch, wait: wait2 = 0, sort }) {
  const exec = async () => {
    const scheduler = getScheduler();
    flush();
    const args = scheduler.map(({ args: args2 }) => args2);
    if (args.length === 0)
      return;
    fn(args).then((data) => {
      if (sort && Array.isArray(data))
        data.sort(sort);
      for (let i = 0; i < scheduler.length; i++) {
        const { pendingPromise } = scheduler[i];
        pendingPromise.resolve?.([data[i], data]);
      }
    }).catch((err) => {
      for (let i = 0; i < scheduler.length; i++) {
        const { pendingPromise } = scheduler[i];
        pendingPromise.reject?.(err);
      }
    });
  };
  const flush = () => schedulerCache.delete(id);
  const getBatchedArgs = () => getScheduler().map(({ args }) => args);
  const getScheduler = () => schedulerCache.get(id) || [];
  const setScheduler = (item) => schedulerCache.set(id, [...getScheduler(), item]);
  return {
    flush,
    async schedule(args) {
      const pendingPromise = {};
      const promise = new Promise((resolve, reject) => {
        pendingPromise.resolve = resolve;
        pendingPromise.reject = reject;
      });
      const split2 = shouldSplitBatch?.([...getBatchedArgs(), args]);
      if (split2)
        exec();
      const hasActiveScheduler = getScheduler().length > 0;
      if (hasActiveScheduler) {
        setScheduler({ args, pendingPromise });
        return promise;
      }
      setScheduler({ args, pendingPromise });
      setTimeout(exec, wait2);
      return promise;
    }
  };
}
var schedulerCache;
var init_createBatchScheduler = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/promise/createBatchScheduler.js"() {
    schedulerCache = /* @__PURE__ */ new Map();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/ccip.js
var OffchainLookupError, OffchainLookupResponseMalformedError, OffchainLookupSenderMismatchError;
var init_ccip = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/ccip.js"() {
    init_stringify();
    init_base();
    init_utils();
    OffchainLookupError = class extends BaseError {
      constructor({ callbackSelector, cause, data, extraData, sender, urls }) {
        super(cause.shortMessage || "An error occurred while fetching for an offchain result.", {
          cause,
          metaMessages: [
            ...cause.metaMessages || [],
            cause.metaMessages?.length ? "" : [],
            "Offchain Gateway Call:",
            urls && [
              "  Gateway URL(s):",
              ...urls.map((url) => `    ${getUrl(url)}`)
            ],
            `  Sender: ${sender}`,
            `  Data: ${data}`,
            `  Callback selector: ${callbackSelector}`,
            `  Extra data: ${extraData}`
          ].flat()
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "OffchainLookupError"
        });
      }
    };
    OffchainLookupResponseMalformedError = class extends BaseError {
      constructor({ result, url }) {
        super("Offchain gateway response is malformed. Response data must be a hex value.", {
          metaMessages: [
            `Gateway URL: ${getUrl(url)}`,
            `Response: ${stringify(result)}`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "OffchainLookupResponseMalformedError"
        });
      }
    };
    OffchainLookupSenderMismatchError = class extends BaseError {
      constructor({ sender, to }) {
        super("Reverted sender address does not match target contract address (`to`).", {
          metaMessages: [
            `Contract address: ${to}`,
            `OffchainLookup sender address: ${sender}`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "OffchainLookupSenderMismatchError"
        });
      }
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/address/isAddressEqual.js
function isAddressEqual(a, b) {
  if (!isAddress(a, { strict: false }))
    throw new InvalidAddressError({ address: a });
  if (!isAddress(b, { strict: false }))
    throw new InvalidAddressError({ address: b });
  return a.toLowerCase() === b.toLowerCase();
}
var init_isAddressEqual = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/address/isAddressEqual.js"() {
    init_address();
    init_isAddress();
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ccip.js
var ccip_exports = {};
__export(ccip_exports, {
  ccipRequest: () => ccipRequest,
  offchainLookup: () => offchainLookup,
  offchainLookupAbiItem: () => offchainLookupAbiItem,
  offchainLookupSignature: () => offchainLookupSignature
});
async function offchainLookup(client, { blockNumber, blockTag, data, to }) {
  const { args } = decodeErrorResult({
    data,
    abi: [offchainLookupAbiItem]
  });
  const [sender, urls, callData, callbackSelector, extraData] = args;
  const { ccipRead } = client;
  const ccipRequest_ = ccipRead && typeof ccipRead?.request === "function" ? ccipRead.request : ccipRequest;
  try {
    if (!isAddressEqual(to, sender))
      throw new OffchainLookupSenderMismatchError({ sender, to });
    const result = await ccipRequest_({ data: callData, sender, urls });
    const { data: data_ } = await call2(client, {
      blockNumber,
      blockTag,
      data: concat([
        callbackSelector,
        encodeAbiParameters([{ type: "bytes" }, { type: "bytes" }], [result, extraData])
      ]),
      to
    });
    return data_;
  } catch (err) {
    throw new OffchainLookupError({
      callbackSelector,
      cause: err,
      data,
      extraData,
      sender,
      urls
    });
  }
}
async function ccipRequest({ data, sender, urls }) {
  let error = new Error("An unknown error occurred.");
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const method = url.includes("{data}") ? "GET" : "POST";
    const body = method === "POST" ? { data, sender } : void 0;
    try {
      const response = await fetch(url.replace("{sender}", sender).replace("{data}", data), {
        body: JSON.stringify(body),
        method
      });
      let result;
      if (response.headers.get("Content-Type")?.startsWith("application/json")) {
        result = (await response.json()).data;
      } else {
        result = await response.text();
      }
      if (!response.ok) {
        error = new HttpRequestError({
          body,
          details: result?.error ? stringify(result.error) : response.statusText,
          headers: response.headers,
          status: response.status,
          url
        });
        continue;
      }
      if (!isHex(result)) {
        error = new OffchainLookupResponseMalformedError({
          result,
          url
        });
        continue;
      }
      return result;
    } catch (err) {
      error = new HttpRequestError({
        body,
        details: err.message,
        url
      });
    }
  }
  throw error;
}
var offchainLookupSignature, offchainLookupAbiItem;
var init_ccip2 = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ccip.js"() {
    init_call();
    init_ccip();
    init_request();
    init_decodeErrorResult();
    init_encodeAbiParameters();
    init_isAddressEqual();
    init_concat();
    init_isHex();
    init_stringify();
    offchainLookupSignature = "0x556f1830";
    offchainLookupAbiItem = {
      name: "OffchainLookup",
      type: "error",
      inputs: [
        {
          name: "sender",
          type: "address"
        },
        {
          name: "urls",
          type: "string[]"
        },
        {
          name: "callData",
          type: "bytes"
        },
        {
          name: "callbackFunction",
          type: "bytes4"
        },
        {
          name: "extraData",
          type: "bytes"
        }
      ]
    };
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/call.js
async function call2(client, args) {
  const { account: account_ = client.account, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = "latest", accessList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  try {
    assertRequest(args);
    const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const rpcStateOverride = parseStateOverride(stateOverride);
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      from: account?.address,
      accessList,
      blobs,
      data,
      gas,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    if (batch && shouldPerformMulticall({ request }) && !rpcStateOverride) {
      try {
        return await scheduleMulticall(client, {
          ...request,
          blockNumber,
          blockTag
        });
      } catch (err) {
        if (!(err instanceof ClientChainNotConfiguredError) && !(err instanceof ChainDoesNotSupportContract))
          throw err;
      }
    }
    const response = await client.request({
      method: "eth_call",
      params: rpcStateOverride ? [
        request,
        block,
        rpcStateOverride
      ] : [request, block]
    });
    if (response === "0x")
      return { data: void 0 };
    return { data: response };
  } catch (err) {
    const data2 = getRevertErrorData(err);
    const { offchainLookup: offchainLookup2, offchainLookupSignature: offchainLookupSignature2 } = await Promise.resolve().then(() => (init_ccip2(), ccip_exports));
    if (client.ccipRead !== false && data2?.slice(0, 10) === offchainLookupSignature2 && to)
      return { data: await offchainLookup2(client, { data: data2, to }) };
    throw getCallError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}
function shouldPerformMulticall({ request }) {
  const { data, to, ...request_ } = request;
  if (!data)
    return false;
  if (data.startsWith(aggregate3Signature))
    return false;
  if (!to)
    return false;
  if (Object.values(request_).filter((x) => typeof x !== "undefined").length > 0)
    return false;
  return true;
}
async function scheduleMulticall(client, args) {
  const { batchSize = 1024, wait: wait2 = 0 } = typeof client.batch?.multicall === "object" ? client.batch.multicall : {};
  const { blockNumber, blockTag = "latest", data, multicallAddress: multicallAddress_, to } = args;
  let multicallAddress = multicallAddress_;
  if (!multicallAddress) {
    if (!client.chain)
      throw new ClientChainNotConfiguredError();
    multicallAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "multicall3"
    });
  }
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const block = blockNumberHex || blockTag;
  const { schedule } = createBatchScheduler({
    id: `${client.uid}.${block}`,
    wait: wait2,
    shouldSplitBatch(args2) {
      const size3 = args2.reduce((size4, { data: data2 }) => size4 + (data2.length - 2), 0);
      return size3 > batchSize * 2;
    },
    fn: async (requests) => {
      const calls = requests.map((request) => ({
        allowFailure: true,
        callData: request.data,
        target: request.to
      }));
      const calldata = encodeFunctionData({
        abi: multicall3Abi,
        args: [calls],
        functionName: "aggregate3"
      });
      const data2 = await client.request({
        method: "eth_call",
        params: [
          {
            data: calldata,
            to: multicallAddress
          },
          block
        ]
      });
      return decodeFunctionResult({
        abi: multicall3Abi,
        args: [calls],
        functionName: "aggregate3",
        data: data2 || "0x"
      });
    }
  });
  const [{ returnData, success }] = await schedule({ data, to });
  if (!success)
    throw new RawContractError({ data: returnData });
  if (returnData === "0x")
    return { data: void 0 };
  return { data: returnData };
}
function getRevertErrorData(err) {
  if (!(err instanceof BaseError))
    return void 0;
  const error = err.walk();
  return typeof error?.data === "object" ? error.data?.data : error.data;
}
function parseStateMapping(stateMapping) {
  if (!stateMapping || stateMapping.length === 0)
    return void 0;
  return stateMapping.reduce((acc, { slot, value }) => {
    if (slot.length !== 66)
      throw new InvalidBytesLengthError({
        size: slot.length,
        targetSize: 66,
        type: "hex"
      });
    if (value.length !== 66)
      throw new InvalidBytesLengthError({
        size: value.length,
        targetSize: 66,
        type: "hex"
      });
    acc[slot] = value;
    return acc;
  }, {});
}
function parseAccountStateOverride(args) {
  const { balance, nonce, state, stateDiff, code } = args;
  const rpcAccountStateOverride = {};
  if (code !== void 0) {
    rpcAccountStateOverride.code = code;
  }
  if (balance !== void 0) {
    rpcAccountStateOverride.balance = numberToHex(balance, { size: 32 });
  }
  if (nonce !== void 0) {
    rpcAccountStateOverride.nonce = numberToHex(nonce, { size: 8 });
  }
  if (state !== void 0) {
    rpcAccountStateOverride.state = parseStateMapping(state);
  }
  if (stateDiff !== void 0) {
    if (rpcAccountStateOverride.state)
      throw new StateAssignmentConflictError();
    rpcAccountStateOverride.stateDiff = parseStateMapping(stateDiff);
  }
  return rpcAccountStateOverride;
}
function parseStateOverride(args) {
  if (!args)
    return void 0;
  const rpcStateOverride = {};
  for (const { address, ...accountState } of args) {
    if (!isAddress(address, { strict: false }))
      throw new InvalidAddressError({ address });
    if (rpcStateOverride[address])
      throw new AccountStateConflictError({ address });
    rpcStateOverride[address] = parseAccountStateOverride(accountState);
  }
  return rpcStateOverride;
}
var init_call = __esm({
  "node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/call.js"() {
    init_parseAccount();
    init_abis();
    init_contract2();
    init_address();
    init_base();
    init_chain();
    init_contract();
    init_data();
    init_stateOverride();
    init_decodeFunctionResult();
    init_encodeFunctionData();
    init_isAddress();
    init_getChainContractAddress();
    init_toHex();
    init_getCallError();
    init_extract();
    init_transactionRequest();
    init_createBatchScheduler();
    init_assertRequest();
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_sha2.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l2 = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l2, wl, isLE2);
}
var SHA2;
var init_sha2 = __esm({
  "node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_sha2.js"() {
    init_assert();
    init_utils2();
    SHA2 = class extends Hash {
      constructor(blockLen, outputLen, padOffset, isLE2) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE2;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = createView(this.buffer);
      }
      update(data) {
        exists(this);
        const { view, buffer: buffer2, blockLen } = this;
        data = toBytes2(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          if (take === blockLen) {
            const dataView = createView(data);
            for (; blockLen <= len - pos; pos += blockLen)
              this.process(dataView, pos);
            continue;
          }
          buffer2.set(data.subarray(pos, pos + take), this.pos);
          this.pos += take;
          pos += take;
          if (this.pos === blockLen) {
            this.process(view, 0);
            this.pos = 0;
          }
        }
        this.length += data.length;
        this.roundClean();
        return this;
      }
      digestInto(out) {
        exists(this);
        output(out, this);
        this.finished = true;
        const { buffer: buffer2, view, blockLen, isLE: isLE2 } = this;
        let { pos } = this;
        buffer2[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        if (this.padOffset > blockLen - pos) {
          this.process(view, 0);
          pos = 0;
        }
        for (let i = pos; i < blockLen; i++)
          buffer2[i] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
        this.process(view, 0);
        const oview = createView(out);
        const len = this.outputLen;
        if (len % 4)
          throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
          throw new Error("_sha2: outputLen bigger than state");
        for (let i = 0; i < outLen; i++)
          oview.setUint32(4 * i, state[i], isLE2);
      }
      digest() {
        const { buffer: buffer2, outputLen } = this;
        this.digestInto(buffer2);
        const res = buffer2.slice(0, outputLen);
        this.destroy();
        return res;
      }
      _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer: buffer2, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
          to.buffer.set(buffer2);
        return to;
      }
    };
  }
});

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/sha256.js
var Chi, Maj, SHA256_K, IV, SHA256_W, SHA256, sha256;
var init_sha256 = __esm({
  "node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/sha256.js"() {
    init_sha2();
    init_utils2();
    Chi = (a, b, c2) => a & b ^ ~a & c2;
    Maj = (a, b, c2) => a & b ^ a & c2 ^ b & c2;
    SHA256_K = /* @__PURE__ */ new Uint32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    IV = /* @__PURE__ */ new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    SHA256_W = /* @__PURE__ */ new Uint32Array(64);
    SHA256 = class extends SHA2 {
      constructor() {
        super(64, 32, 8, false);
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
      }
      get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
      }
      // prettier-ignore
      set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
      }
      process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4)
          SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
          const W15 = SHA256_W[i - 15];
          const W2 = SHA256_W[i - 2];
          const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
          const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
          SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
          const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
          const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
          const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
          const T2 = sigma0 + Maj(A, B, C) | 0;
          H = G;
          G = F;
          F = E;
          E = D + T1 | 0;
          D = C;
          C = B;
          B = A;
          A = T1 + T2 | 0;
        }
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
      }
      roundClean() {
        SHA256_W.fill(0);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
      }
    };
    sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());
  }
});

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/abstract/utils.js
function equalBytes(b1, b2) {
  if (b1.length !== b2.length)
    return false;
  for (let i = 0; i < b1.length; i++)
    if (b1[i] !== b2[i])
      return false;
  return true;
}
var _0n2, _1n2, _2n2;
var init_utils3 = __esm({
  "node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/abstract/utils.js"() {
    _0n2 = BigInt(0);
    _1n2 = BigInt(1);
    _2n2 = BigInt(2);
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    module.exports = Error;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    module.exports = EvalError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    module.exports = RangeError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    module.exports = ReferenceError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    module.exports = SyntaxError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    module.exports = TypeError;
  }
});

// node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    module.exports = URIError;
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/.pnpm/has-proto@1.0.3/node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/.pnpm/has-proto@1.0.3/node_modules/has-proto/index.js"(exports, module) {
    "use strict";
    var test = {
      __proto__: null,
      foo: {}
    };
    var $Object = Object;
    module.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr2 = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j2 = 0; j2 < b.length; j2 += 1) {
        arr[j2 + a.length] = b[j2];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j2 = 0; i < arrLike.length; i += 1, j2 += 1) {
        arr[j2] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind2(that) {
      var target = this;
      if (typeof target !== "function" || toStr2.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call3 = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind2 = require_function_bind();
    module.exports = bind2.call(call3, $hasOwn);
  }
});

// node_modules/.pnpm/get-intrinsic@1.2.4/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/.pnpm/get-intrinsic@1.2.4/node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen2 = doEval2("%AsyncGenerator%");
        if (gen2 && getProto) {
          value = getProto(gen2.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind2 = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind2.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
    var $replace = bind2.call(Function.call, String.prototype.replace);
    var $strSlice = bind2.call(Function.call, String.prototype.slice);
    var $exec = bind2.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number2, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number2 || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/.pnpm/es-define-property@1.0.0/node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/.pnpm/es-define-property@1.0.0/node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/.pnpm/gopd@1.0.1/node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/.pnpm/gopd@1.0.1/node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "node_modules/.pnpm/define-data-property@1.1.4/node_modules/define-data-property/index.js"(exports, module) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/.pnpm/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "node_modules/.pnpm/set-function-length@1.2.2/node_modules/set-function-length/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define2 = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define2(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define2(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// node_modules/.pnpm/call-bind@1.0.7/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.7/node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = require_type();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind2.call($call, $apply);
    var $defineProperty = require_es_define_property();
    var $max = GetIntrinsic("%Math.max%");
    module.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind2, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind2, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/.pnpm/call-bind@1.0.7/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.7/node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// (disabled):node_modules/.pnpm/object-inspect@1.13.1/node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):node_modules/.pnpm/object-inspect@1.13.1/node_modules/object-inspect/util.inspect"() {
  }
});

// node_modules/.pnpm/object-inspect@1.13.1/node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/.pnpm/object-inspect@1.13.1/node_modules/object-inspect/index.js"(exports, module) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr2(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray(obj) {
      return toStr2(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr2(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr2(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr2(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr2(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr2(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr2(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr2(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f2) {
      if (f2.name) {
        return f2.name;
      }
      var m2 = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
      if (m2) {
        return m2[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l2 = xs.length; i < l2; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m2) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c2) {
      var n = c2.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size3, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size3 + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j2 = 0; j2 < syms.length; j2++) {
          if (isEnumerable.call(obj, syms[j2])) {
            xs.push("[" + inspect(syms[j2]) + "]: " + inspect(obj[syms[j2]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/.pnpm/side-channel@1.0.6/node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/.pnpm/side-channel@1.0.6/node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('.').ListNode<typeof value>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j2 = 0; j2 < obj.length; ++j2) {
            if (typeof obj[j2] !== "undefined") {
              compacted.push(obj[j2]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode2 = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var encode2 = function encode3(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var i = 0; i < string.length; ++i) {
        var c2 = string.charCodeAt(i);
        if (c2 === 45 || c2 === 46 || c2 === 95 || c2 === 126 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || format === formats.RFC1738 && (c2 === 40 || c2 === 41)) {
          out += string.charAt(i);
          continue;
        }
        if (c2 < 128) {
          out = out + hexTable[c2];
          continue;
        }
        if (c2 < 2048) {
          out = out + (hexTable[192 | c2 >> 6] + hexTable[128 | c2 & 63]);
          continue;
        }
        if (c2 < 55296 || c2 >= 57344) {
          out = out + (hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63]);
          continue;
        }
        i += 1;
        c2 = 65536 + ((c2 & 1023) << 10 | string.charCodeAt(i) & 1023);
        out += hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j2 = 0; j2 < keys.length; ++j2) {
          var key = keys[j2];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode: decode2,
      encode: encode2,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date2) {
        return toISO.call(date2);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify2 = function stringify3(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder3, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder3 && !encodeValuesOnly ? encoder3(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder3) {
          var keyValue = encodeValuesOnly ? prefix : encoder3(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder3(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder3) {
          obj = utils.maybeMap(obj, encoder3);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j2 = 0; j2 < objKeys.length; ++j2) {
        var key = objKeys[j2];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify3(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder3,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify2(
          obj[key],
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: true,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && leaf === "" ? [] : [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index2 = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index2) && root !== decodedRoot && String(index2) === decodedRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
            obj = [];
            obj[index2] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/qs@6.12.0/node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    var stringify2 = require_stringify();
    var parse2 = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse: parse2,
      stringify: stringify2
    };
  }
});

// node_modules/.pnpm/@whatwg-node+fetch@0.9.17/node_modules/@whatwg-node/fetch/dist/global-ponyfill.js
var require_global_ponyfill = __commonJS({
  "node_modules/.pnpm/@whatwg-node+fetch@0.9.17/node_modules/@whatwg-node/fetch/dist/global-ponyfill.js"(exports, module) {
    module.exports.fetch = globalThis.fetch;
    module.exports.Headers = globalThis.Headers;
    module.exports.Request = globalThis.Request;
    module.exports.Response = globalThis.Response;
    module.exports.FormData = globalThis.FormData;
    module.exports.ReadableStream = globalThis.ReadableStream;
    module.exports.WritableStream = globalThis.WritableStream;
    module.exports.TransformStream = globalThis.TransformStream;
    module.exports.Blob = globalThis.Blob;
    module.exports.File = globalThis.File;
    module.exports.crypto = globalThis.crypto;
    module.exports.btoa = globalThis.btoa;
    module.exports.TextEncoder = globalThis.TextEncoder;
    module.exports.TextDecoder = globalThis.TextDecoder;
    module.exports.URLPattern = globalThis.URLPattern;
    module.exports.URL = globalThis.URL;
    module.exports.URLSearchParams = globalThis.URLSearchParams;
    module.exports.createFetch = () => globalThis;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/typebox.js
var require_typebox = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/typebox.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Type = exports.JsonType = exports.JavaScriptTypeBuilder = exports.JsonTypeBuilder = exports.TypeBuilder = exports.TypeBuilderError = exports.TransformEncodeBuilder = exports.TransformDecodeBuilder = exports.TemplateLiteralDslParser = exports.TemplateLiteralGenerator = exports.TemplateLiteralGeneratorError = exports.TemplateLiteralFinite = exports.TemplateLiteralFiniteError = exports.TemplateLiteralParser = exports.TemplateLiteralParserError = exports.TemplateLiteralResolver = exports.TemplateLiteralPattern = exports.TemplateLiteralPatternError = exports.UnionResolver = exports.KeyArrayResolver = exports.KeyArrayResolverError = exports.KeyResolver = exports.ObjectMap = exports.Intrinsic = exports.IndexedAccessor = exports.TypeClone = exports.TypeExtends = exports.TypeExtendsResult = exports.TypeExtendsError = exports.ExtendsUndefined = exports.TypeGuard = exports.TypeGuardUnknownTypeError = exports.ValueGuard = exports.FormatRegistry = exports.TypeBoxError = exports.TypeRegistry = exports.PatternStringExact = exports.PatternNumberExact = exports.PatternBooleanExact = exports.PatternString = exports.PatternNumber = exports.PatternBoolean = exports.Kind = exports.Hint = exports.Optional = exports.Readonly = exports.Transform = void 0;
    exports.Transform = Symbol.for("TypeBox.Transform");
    exports.Readonly = Symbol.for("TypeBox.Readonly");
    exports.Optional = Symbol.for("TypeBox.Optional");
    exports.Hint = Symbol.for("TypeBox.Hint");
    exports.Kind = Symbol.for("TypeBox.Kind");
    exports.PatternBoolean = "(true|false)";
    exports.PatternNumber = "(0|[1-9][0-9]*)";
    exports.PatternString = "(.*)";
    exports.PatternBooleanExact = `^${exports.PatternBoolean}$`;
    exports.PatternNumberExact = `^${exports.PatternNumber}$`;
    exports.PatternStringExact = `^${exports.PatternString}$`;
    var TypeRegistry;
    (function(TypeRegistry2) {
      const map = /* @__PURE__ */ new Map();
      function Entries() {
        return new Map(map);
      }
      TypeRegistry2.Entries = Entries;
      function Clear() {
        return map.clear();
      }
      TypeRegistry2.Clear = Clear;
      function Delete(kind) {
        return map.delete(kind);
      }
      TypeRegistry2.Delete = Delete;
      function Has(kind) {
        return map.has(kind);
      }
      TypeRegistry2.Has = Has;
      function Set2(kind, func) {
        map.set(kind, func);
      }
      TypeRegistry2.Set = Set2;
      function Get(kind) {
        return map.get(kind);
      }
      TypeRegistry2.Get = Get;
    })(TypeRegistry || (exports.TypeRegistry = TypeRegistry = {}));
    var TypeBoxError = class extends Error {
      constructor(message) {
        super(message);
      }
    };
    exports.TypeBoxError = TypeBoxError;
    var FormatRegistry2;
    (function(FormatRegistry3) {
      const map = /* @__PURE__ */ new Map();
      function Entries() {
        return new Map(map);
      }
      FormatRegistry3.Entries = Entries;
      function Clear() {
        return map.clear();
      }
      FormatRegistry3.Clear = Clear;
      function Delete(format) {
        return map.delete(format);
      }
      FormatRegistry3.Delete = Delete;
      function Has(format) {
        return map.has(format);
      }
      FormatRegistry3.Has = Has;
      function Set2(format, func) {
        map.set(format, func);
      }
      FormatRegistry3.Set = Set2;
      function Get(format) {
        return map.get(format);
      }
      FormatRegistry3.Get = Get;
    })(FormatRegistry2 || (exports.FormatRegistry = FormatRegistry2 = {}));
    var ValueGuard;
    (function(ValueGuard2) {
      function IsArray(value) {
        return Array.isArray(value);
      }
      ValueGuard2.IsArray = IsArray;
      function IsBigInt(value) {
        return typeof value === "bigint";
      }
      ValueGuard2.IsBigInt = IsBigInt;
      function IsBoolean(value) {
        return typeof value === "boolean";
      }
      ValueGuard2.IsBoolean = IsBoolean;
      function IsDate(value) {
        return value instanceof globalThis.Date;
      }
      ValueGuard2.IsDate = IsDate;
      function IsNull(value) {
        return value === null;
      }
      ValueGuard2.IsNull = IsNull;
      function IsNumber(value) {
        return typeof value === "number";
      }
      ValueGuard2.IsNumber = IsNumber;
      function IsObject(value) {
        return typeof value === "object" && value !== null;
      }
      ValueGuard2.IsObject = IsObject;
      function IsString(value) {
        return typeof value === "string";
      }
      ValueGuard2.IsString = IsString;
      function IsUint8Array(value) {
        return value instanceof globalThis.Uint8Array;
      }
      ValueGuard2.IsUint8Array = IsUint8Array;
      function IsUndefined(value) {
        return value === void 0;
      }
      ValueGuard2.IsUndefined = IsUndefined;
    })(ValueGuard || (exports.ValueGuard = ValueGuard = {}));
    var TypeGuardUnknownTypeError = class extends TypeBoxError {
    };
    exports.TypeGuardUnknownTypeError = TypeGuardUnknownTypeError;
    var TypeGuard2;
    (function(TypeGuard3) {
      function IsPattern(value) {
        try {
          new RegExp(value);
          return true;
        } catch {
          return false;
        }
      }
      function IsControlCharacterFree(value) {
        if (!ValueGuard.IsString(value))
          return false;
        for (let i = 0; i < value.length; i++) {
          const code = value.charCodeAt(i);
          if (code >= 7 && code <= 13 || code === 27 || code === 127) {
            return false;
          }
        }
        return true;
      }
      function IsAdditionalProperties(value) {
        return IsOptionalBoolean(value) || TSchema(value);
      }
      function IsOptionalBigInt(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsBigInt(value);
      }
      function IsOptionalNumber(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsNumber(value);
      }
      function IsOptionalBoolean(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsBoolean(value);
      }
      function IsOptionalString(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value);
      }
      function IsOptionalPattern(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
      }
      function IsOptionalFormat(value) {
        return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value);
      }
      function IsOptionalSchema(value) {
        return ValueGuard.IsUndefined(value) || TSchema(value);
      }
      function TAny(schema) {
        return TKindOf(schema, "Any") && IsOptionalString(schema.$id);
      }
      TypeGuard3.TAny = TAny;
      function TArray(schema) {
        return TKindOf(schema, "Array") && schema.type === "array" && IsOptionalString(schema.$id) && TSchema(schema.items) && IsOptionalNumber(schema.minItems) && IsOptionalNumber(schema.maxItems) && IsOptionalBoolean(schema.uniqueItems) && IsOptionalSchema(schema.contains) && IsOptionalNumber(schema.minContains) && IsOptionalNumber(schema.maxContains);
      }
      TypeGuard3.TArray = TArray;
      function TAsyncIterator(schema) {
        return TKindOf(schema, "AsyncIterator") && schema.type === "AsyncIterator" && IsOptionalString(schema.$id) && TSchema(schema.items);
      }
      TypeGuard3.TAsyncIterator = TAsyncIterator;
      function TBigInt(schema) {
        return TKindOf(schema, "BigInt") && schema.type === "bigint" && IsOptionalString(schema.$id) && IsOptionalBigInt(schema.exclusiveMaximum) && IsOptionalBigInt(schema.exclusiveMinimum) && IsOptionalBigInt(schema.maximum) && IsOptionalBigInt(schema.minimum) && IsOptionalBigInt(schema.multipleOf);
      }
      TypeGuard3.TBigInt = TBigInt;
      function TBoolean(schema) {
        return TKindOf(schema, "Boolean") && schema.type === "boolean" && IsOptionalString(schema.$id);
      }
      TypeGuard3.TBoolean = TBoolean;
      function TConstructor(schema) {
        return TKindOf(schema, "Constructor") && schema.type === "Constructor" && IsOptionalString(schema.$id) && ValueGuard.IsArray(schema.parameters) && schema.parameters.every((schema2) => TSchema(schema2)) && TSchema(schema.returns);
      }
      TypeGuard3.TConstructor = TConstructor;
      function TDate(schema) {
        return TKindOf(schema, "Date") && schema.type === "Date" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.exclusiveMaximumTimestamp) && IsOptionalNumber(schema.exclusiveMinimumTimestamp) && IsOptionalNumber(schema.maximumTimestamp) && IsOptionalNumber(schema.minimumTimestamp) && IsOptionalNumber(schema.multipleOfTimestamp);
      }
      TypeGuard3.TDate = TDate;
      function TFunction(schema) {
        return TKindOf(schema, "Function") && schema.type === "Function" && IsOptionalString(schema.$id) && ValueGuard.IsArray(schema.parameters) && schema.parameters.every((schema2) => TSchema(schema2)) && TSchema(schema.returns);
      }
      TypeGuard3.TFunction = TFunction;
      function TInteger(schema) {
        return TKindOf(schema, "Integer") && schema.type === "integer" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.exclusiveMaximum) && IsOptionalNumber(schema.exclusiveMinimum) && IsOptionalNumber(schema.maximum) && IsOptionalNumber(schema.minimum) && IsOptionalNumber(schema.multipleOf);
      }
      TypeGuard3.TInteger = TInteger;
      function TIntersect(schema) {
        return TKindOf(schema, "Intersect") && (ValueGuard.IsString(schema.type) && schema.type !== "object" ? false : true) && ValueGuard.IsArray(schema.allOf) && schema.allOf.every((schema2) => TSchema(schema2) && !TTransform(schema2)) && IsOptionalString(schema.type) && (IsOptionalBoolean(schema.unevaluatedProperties) || IsOptionalSchema(schema.unevaluatedProperties)) && IsOptionalString(schema.$id);
      }
      TypeGuard3.TIntersect = TIntersect;
      function TIterator(schema) {
        return TKindOf(schema, "Iterator") && schema.type === "Iterator" && IsOptionalString(schema.$id) && TSchema(schema.items);
      }
      TypeGuard3.TIterator = TIterator;
      function TKindOf(schema, kind) {
        return TKind(schema) && schema[exports.Kind] === kind;
      }
      TypeGuard3.TKindOf = TKindOf;
      function TKind(schema) {
        return ValueGuard.IsObject(schema) && exports.Kind in schema && ValueGuard.IsString(schema[exports.Kind]);
      }
      TypeGuard3.TKind = TKind;
      function TLiteralString(schema) {
        return TLiteral(schema) && ValueGuard.IsString(schema.const);
      }
      TypeGuard3.TLiteralString = TLiteralString;
      function TLiteralNumber(schema) {
        return TLiteral(schema) && ValueGuard.IsNumber(schema.const);
      }
      TypeGuard3.TLiteralNumber = TLiteralNumber;
      function TLiteralBoolean(schema) {
        return TLiteral(schema) && ValueGuard.IsBoolean(schema.const);
      }
      TypeGuard3.TLiteralBoolean = TLiteralBoolean;
      function TLiteral(schema) {
        return TKindOf(schema, "Literal") && IsOptionalString(schema.$id) && (ValueGuard.IsBoolean(schema.const) || ValueGuard.IsNumber(schema.const) || ValueGuard.IsString(schema.const));
      }
      TypeGuard3.TLiteral = TLiteral;
      function TNever(schema) {
        return TKindOf(schema, "Never") && ValueGuard.IsObject(schema.not) && Object.getOwnPropertyNames(schema.not).length === 0;
      }
      TypeGuard3.TNever = TNever;
      function TNot(schema) {
        return TKindOf(schema, "Not") && TSchema(schema.not);
      }
      TypeGuard3.TNot = TNot;
      function TNull(schema) {
        return TKindOf(schema, "Null") && schema.type === "null" && IsOptionalString(schema.$id);
      }
      TypeGuard3.TNull = TNull;
      function TNumber(schema) {
        return TKindOf(schema, "Number") && schema.type === "number" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.exclusiveMaximum) && IsOptionalNumber(schema.exclusiveMinimum) && IsOptionalNumber(schema.maximum) && IsOptionalNumber(schema.minimum) && IsOptionalNumber(schema.multipleOf);
      }
      TypeGuard3.TNumber = TNumber;
      function TObject(schema) {
        return TKindOf(schema, "Object") && schema.type === "object" && IsOptionalString(schema.$id) && ValueGuard.IsObject(schema.properties) && IsAdditionalProperties(schema.additionalProperties) && IsOptionalNumber(schema.minProperties) && IsOptionalNumber(schema.maxProperties) && Object.entries(schema.properties).every(([key, schema2]) => IsControlCharacterFree(key) && TSchema(schema2));
      }
      TypeGuard3.TObject = TObject;
      function TPromise(schema) {
        return TKindOf(schema, "Promise") && schema.type === "Promise" && IsOptionalString(schema.$id) && TSchema(schema.item);
      }
      TypeGuard3.TPromise = TPromise;
      function TRecord(schema) {
        return TKindOf(schema, "Record") && schema.type === "object" && IsOptionalString(schema.$id) && IsAdditionalProperties(schema.additionalProperties) && ValueGuard.IsObject(schema.patternProperties) && ((schema2) => {
          const keys = Object.getOwnPropertyNames(schema2.patternProperties);
          return keys.length === 1 && IsPattern(keys[0]) && ValueGuard.IsObject(schema2.patternProperties) && TSchema(schema2.patternProperties[keys[0]]);
        })(schema);
      }
      TypeGuard3.TRecord = TRecord;
      function TRecursive(schema) {
        return ValueGuard.IsObject(schema) && exports.Hint in schema && schema[exports.Hint] === "Recursive";
      }
      TypeGuard3.TRecursive = TRecursive;
      function TRef(schema) {
        return TKindOf(schema, "Ref") && IsOptionalString(schema.$id) && ValueGuard.IsString(schema.$ref);
      }
      TypeGuard3.TRef = TRef;
      function TString(schema) {
        return TKindOf(schema, "String") && schema.type === "string" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.minLength) && IsOptionalNumber(schema.maxLength) && IsOptionalPattern(schema.pattern) && IsOptionalFormat(schema.format);
      }
      TypeGuard3.TString = TString;
      function TSymbol(schema) {
        return TKindOf(schema, "Symbol") && schema.type === "symbol" && IsOptionalString(schema.$id);
      }
      TypeGuard3.TSymbol = TSymbol;
      function TTemplateLiteral(schema) {
        return TKindOf(schema, "TemplateLiteral") && schema.type === "string" && ValueGuard.IsString(schema.pattern) && schema.pattern[0] === "^" && schema.pattern[schema.pattern.length - 1] === "$";
      }
      TypeGuard3.TTemplateLiteral = TTemplateLiteral;
      function TThis(schema) {
        return TKindOf(schema, "This") && IsOptionalString(schema.$id) && ValueGuard.IsString(schema.$ref);
      }
      TypeGuard3.TThis = TThis;
      function TTransform(schema) {
        return ValueGuard.IsObject(schema) && exports.Transform in schema;
      }
      TypeGuard3.TTransform = TTransform;
      function TTuple(schema) {
        return TKindOf(schema, "Tuple") && schema.type === "array" && IsOptionalString(schema.$id) && ValueGuard.IsNumber(schema.minItems) && ValueGuard.IsNumber(schema.maxItems) && schema.minItems === schema.maxItems && // empty
        (ValueGuard.IsUndefined(schema.items) && ValueGuard.IsUndefined(schema.additionalItems) && schema.minItems === 0 || ValueGuard.IsArray(schema.items) && schema.items.every((schema2) => TSchema(schema2)));
      }
      TypeGuard3.TTuple = TTuple;
      function TUndefined(schema) {
        return TKindOf(schema, "Undefined") && schema.type === "undefined" && IsOptionalString(schema.$id);
      }
      TypeGuard3.TUndefined = TUndefined;
      function TUnionLiteral(schema) {
        return TUnion(schema) && schema.anyOf.every((schema2) => TLiteralString(schema2) || TLiteralNumber(schema2));
      }
      TypeGuard3.TUnionLiteral = TUnionLiteral;
      function TUnion(schema) {
        return TKindOf(schema, "Union") && IsOptionalString(schema.$id) && ValueGuard.IsObject(schema) && ValueGuard.IsArray(schema.anyOf) && schema.anyOf.every((schema2) => TSchema(schema2));
      }
      TypeGuard3.TUnion = TUnion;
      function TUint8Array(schema) {
        return TKindOf(schema, "Uint8Array") && schema.type === "Uint8Array" && IsOptionalString(schema.$id) && IsOptionalNumber(schema.minByteLength) && IsOptionalNumber(schema.maxByteLength);
      }
      TypeGuard3.TUint8Array = TUint8Array;
      function TUnknown(schema) {
        return TKindOf(schema, "Unknown") && IsOptionalString(schema.$id);
      }
      TypeGuard3.TUnknown = TUnknown;
      function TUnsafe(schema) {
        return TKindOf(schema, "Unsafe");
      }
      TypeGuard3.TUnsafe = TUnsafe;
      function TVoid(schema) {
        return TKindOf(schema, "Void") && schema.type === "void" && IsOptionalString(schema.$id);
      }
      TypeGuard3.TVoid = TVoid;
      function TReadonly(schema) {
        return ValueGuard.IsObject(schema) && schema[exports.Readonly] === "Readonly";
      }
      TypeGuard3.TReadonly = TReadonly;
      function TOptional(schema) {
        return ValueGuard.IsObject(schema) && schema[exports.Optional] === "Optional";
      }
      TypeGuard3.TOptional = TOptional;
      function TSchema(schema) {
        return ValueGuard.IsObject(schema) && (TAny(schema) || TArray(schema) || TBoolean(schema) || TBigInt(schema) || TAsyncIterator(schema) || TConstructor(schema) || TDate(schema) || TFunction(schema) || TInteger(schema) || TIntersect(schema) || TIterator(schema) || TLiteral(schema) || TNever(schema) || TNot(schema) || TNull(schema) || TNumber(schema) || TObject(schema) || TPromise(schema) || TRecord(schema) || TRef(schema) || TString(schema) || TSymbol(schema) || TTemplateLiteral(schema) || TThis(schema) || TTuple(schema) || TUndefined(schema) || TUnion(schema) || TUint8Array(schema) || TUnknown(schema) || TUnsafe(schema) || TVoid(schema) || TKind(schema) && TypeRegistry.Has(schema[exports.Kind]));
      }
      TypeGuard3.TSchema = TSchema;
    })(TypeGuard2 || (exports.TypeGuard = TypeGuard2 = {}));
    var ExtendsUndefined;
    (function(ExtendsUndefined2) {
      function Check(schema) {
        return schema[exports.Kind] === "Intersect" ? schema.allOf.every((schema2) => Check(schema2)) : schema[exports.Kind] === "Union" ? schema.anyOf.some((schema2) => Check(schema2)) : schema[exports.Kind] === "Undefined" ? true : schema[exports.Kind] === "Not" ? !Check(schema.not) : false;
      }
      ExtendsUndefined2.Check = Check;
    })(ExtendsUndefined || (exports.ExtendsUndefined = ExtendsUndefined = {}));
    var TypeExtendsError = class extends TypeBoxError {
    };
    exports.TypeExtendsError = TypeExtendsError;
    var TypeExtendsResult;
    (function(TypeExtendsResult2) {
      TypeExtendsResult2[TypeExtendsResult2["Union"] = 0] = "Union";
      TypeExtendsResult2[TypeExtendsResult2["True"] = 1] = "True";
      TypeExtendsResult2[TypeExtendsResult2["False"] = 2] = "False";
    })(TypeExtendsResult || (exports.TypeExtendsResult = TypeExtendsResult = {}));
    var TypeExtends;
    (function(TypeExtends2) {
      function IntoBooleanResult(result) {
        return result === TypeExtendsResult.False ? result : TypeExtendsResult.True;
      }
      function Throw(message) {
        throw new TypeExtendsError(message);
      }
      function IsStructuralRight(right) {
        return TypeGuard2.TNever(right) || TypeGuard2.TIntersect(right) || TypeGuard2.TUnion(right) || TypeGuard2.TUnknown(right) || TypeGuard2.TAny(right);
      }
      function StructuralRight(left, right) {
        return TypeGuard2.TNever(right) ? TNeverRight(left, right) : TypeGuard2.TIntersect(right) ? TIntersectRight(left, right) : TypeGuard2.TUnion(right) ? TUnionRight(left, right) : TypeGuard2.TUnknown(right) ? TUnknownRight(left, right) : TypeGuard2.TAny(right) ? TAnyRight(left, right) : Throw("StructuralRight");
      }
      function TAnyRight(left, right) {
        return TypeExtendsResult.True;
      }
      function TAny(left, right) {
        return TypeGuard2.TIntersect(right) ? TIntersectRight(left, right) : TypeGuard2.TUnion(right) && right.anyOf.some((schema) => TypeGuard2.TAny(schema) || TypeGuard2.TUnknown(schema)) ? TypeExtendsResult.True : TypeGuard2.TUnion(right) ? TypeExtendsResult.Union : TypeGuard2.TUnknown(right) ? TypeExtendsResult.True : TypeGuard2.TAny(right) ? TypeExtendsResult.True : TypeExtendsResult.Union;
      }
      function TArrayRight(left, right) {
        return TypeGuard2.TUnknown(left) ? TypeExtendsResult.False : TypeGuard2.TAny(left) ? TypeExtendsResult.Union : TypeGuard2.TNever(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TArray(left, right) {
        return TypeGuard2.TObject(right) && IsObjectArrayLike(right) ? TypeExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !TypeGuard2.TArray(right) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
      }
      function TAsyncIterator(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : !TypeGuard2.TAsyncIterator(right) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
      }
      function TBigInt(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TBigInt(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TBooleanRight(left, right) {
        return TypeGuard2.TLiteral(left) && ValueGuard.IsBoolean(left.const) ? TypeExtendsResult.True : TypeGuard2.TBoolean(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TBoolean(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TBoolean(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TConstructor(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : !TypeGuard2.TConstructor(right) ? TypeExtendsResult.False : left.parameters.length > right.parameters.length ? TypeExtendsResult.False : !left.parameters.every((schema, index2) => IntoBooleanResult(Visit(right.parameters[index2], schema)) === TypeExtendsResult.True) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
      }
      function TDate(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TDate(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TFunction(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : !TypeGuard2.TFunction(right) ? TypeExtendsResult.False : left.parameters.length > right.parameters.length ? TypeExtendsResult.False : !left.parameters.every((schema, index2) => IntoBooleanResult(Visit(right.parameters[index2], schema)) === TypeExtendsResult.True) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
      }
      function TIntegerRight(left, right) {
        return TypeGuard2.TLiteral(left) && ValueGuard.IsNumber(left.const) ? TypeExtendsResult.True : TypeGuard2.TNumber(left) || TypeGuard2.TInteger(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TInteger(left, right) {
        return TypeGuard2.TInteger(right) || TypeGuard2.TNumber(right) ? TypeExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeExtendsResult.False;
      }
      function TIntersectRight(left, right) {
        return right.allOf.every((schema) => Visit(left, schema) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TIntersect(left, right) {
        return left.allOf.some((schema) => Visit(schema, right) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TIterator(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : !TypeGuard2.TIterator(right) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
      }
      function TLiteral(left, right) {
        return TypeGuard2.TLiteral(right) && right.const === left.const ? TypeExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TString(right) ? TStringRight(left, right) : TypeGuard2.TNumber(right) ? TNumberRight(left, right) : TypeGuard2.TInteger(right) ? TIntegerRight(left, right) : TypeGuard2.TBoolean(right) ? TBooleanRight(left, right) : TypeExtendsResult.False;
      }
      function TNeverRight(left, right) {
        return TypeExtendsResult.False;
      }
      function TNever(left, right) {
        return TypeExtendsResult.True;
      }
      function UnwrapTNot(schema) {
        let [current, depth] = [schema, 0];
        while (true) {
          if (!TypeGuard2.TNot(current))
            break;
          current = current.not;
          depth += 1;
        }
        return depth % 2 === 0 ? current : exports.Type.Unknown();
      }
      function TNot(left, right) {
        return TypeGuard2.TNot(left) ? Visit(UnwrapTNot(left), right) : TypeGuard2.TNot(right) ? Visit(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
      }
      function TNull(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TNull(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TNumberRight(left, right) {
        return TypeGuard2.TLiteralNumber(left) ? TypeExtendsResult.True : TypeGuard2.TNumber(left) || TypeGuard2.TInteger(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TNumber(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TInteger(right) || TypeGuard2.TNumber(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function IsObjectPropertyCount(schema, count) {
        return Object.getOwnPropertyNames(schema.properties).length === count;
      }
      function IsObjectStringLike(schema) {
        return IsObjectArrayLike(schema);
      }
      function IsObjectSymbolLike(schema) {
        return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && TypeGuard2.TUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (TypeGuard2.TString(schema.properties.description.anyOf[0]) && TypeGuard2.TUndefined(schema.properties.description.anyOf[1]) || TypeGuard2.TString(schema.properties.description.anyOf[1]) && TypeGuard2.TUndefined(schema.properties.description.anyOf[0]));
      }
      function IsObjectNumberLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectBooleanLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectBigIntLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectDateLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectUint8ArrayLike(schema) {
        return IsObjectArrayLike(schema);
      }
      function IsObjectFunctionLike(schema) {
        const length = exports.Type.Number();
        return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit(schema.properties["length"], length)) === TypeExtendsResult.True;
      }
      function IsObjectConstructorLike(schema) {
        return IsObjectPropertyCount(schema, 0);
      }
      function IsObjectArrayLike(schema) {
        const length = exports.Type.Number();
        return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit(schema.properties["length"], length)) === TypeExtendsResult.True;
      }
      function IsObjectPromiseLike(schema) {
        const then = exports.Type.Function([exports.Type.Any()], exports.Type.Any());
        return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit(schema.properties["then"], then)) === TypeExtendsResult.True;
      }
      function Property(left, right) {
        return Visit(left, right) === TypeExtendsResult.False ? TypeExtendsResult.False : TypeGuard2.TOptional(left) && !TypeGuard2.TOptional(right) ? TypeExtendsResult.False : TypeExtendsResult.True;
      }
      function TObjectRight(left, right) {
        return TypeGuard2.TUnknown(left) ? TypeExtendsResult.False : TypeGuard2.TAny(left) ? TypeExtendsResult.Union : TypeGuard2.TNever(left) || TypeGuard2.TLiteralString(left) && IsObjectStringLike(right) || TypeGuard2.TLiteralNumber(left) && IsObjectNumberLike(right) || TypeGuard2.TLiteralBoolean(left) && IsObjectBooleanLike(right) || TypeGuard2.TSymbol(left) && IsObjectSymbolLike(right) || TypeGuard2.TBigInt(left) && IsObjectBigIntLike(right) || TypeGuard2.TString(left) && IsObjectStringLike(right) || TypeGuard2.TSymbol(left) && IsObjectSymbolLike(right) || TypeGuard2.TNumber(left) && IsObjectNumberLike(right) || TypeGuard2.TInteger(left) && IsObjectNumberLike(right) || TypeGuard2.TBoolean(left) && IsObjectBooleanLike(right) || TypeGuard2.TUint8Array(left) && IsObjectUint8ArrayLike(right) || TypeGuard2.TDate(left) && IsObjectDateLike(right) || TypeGuard2.TConstructor(left) && IsObjectConstructorLike(right) || TypeGuard2.TFunction(left) && IsObjectFunctionLike(right) ? TypeExtendsResult.True : TypeGuard2.TRecord(left) && TypeGuard2.TString(RecordKey(left)) ? (() => {
          return right[exports.Hint] === "Record" ? TypeExtendsResult.True : TypeExtendsResult.False;
        })() : TypeGuard2.TRecord(left) && TypeGuard2.TNumber(RecordKey(left)) ? (() => {
          return IsObjectPropertyCount(right, 0) ? TypeExtendsResult.True : TypeExtendsResult.False;
        })() : TypeExtendsResult.False;
      }
      function TObject(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : !TypeGuard2.TObject(right) ? TypeExtendsResult.False : (() => {
          for (const key of Object.getOwnPropertyNames(right.properties)) {
            if (!(key in left.properties) && !TypeGuard2.TOptional(right.properties[key])) {
              return TypeExtendsResult.False;
            }
            if (TypeGuard2.TOptional(right.properties[key])) {
              return TypeExtendsResult.True;
            }
            if (Property(left.properties[key], right.properties[key]) === TypeExtendsResult.False) {
              return TypeExtendsResult.False;
            }
          }
          return TypeExtendsResult.True;
        })();
      }
      function TPromise(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) && IsObjectPromiseLike(right) ? TypeExtendsResult.True : !TypeGuard2.TPromise(right) ? TypeExtendsResult.False : IntoBooleanResult(Visit(left.item, right.item));
      }
      function RecordKey(schema) {
        return exports.PatternNumberExact in schema.patternProperties ? exports.Type.Number() : exports.PatternStringExact in schema.patternProperties ? exports.Type.String() : Throw("Unknown record key pattern");
      }
      function RecordValue(schema) {
        return exports.PatternNumberExact in schema.patternProperties ? schema.patternProperties[exports.PatternNumberExact] : exports.PatternStringExact in schema.patternProperties ? schema.patternProperties[exports.PatternStringExact] : Throw("Unable to get record value schema");
      }
      function TRecordRight(left, right) {
        const [Key, Value2] = [RecordKey(right), RecordValue(right)];
        return TypeGuard2.TLiteralString(left) && TypeGuard2.TNumber(Key) && IntoBooleanResult(Visit(left, Value2)) === TypeExtendsResult.True ? TypeExtendsResult.True : TypeGuard2.TUint8Array(left) && TypeGuard2.TNumber(Key) ? Visit(left, Value2) : TypeGuard2.TString(left) && TypeGuard2.TNumber(Key) ? Visit(left, Value2) : TypeGuard2.TArray(left) && TypeGuard2.TNumber(Key) ? Visit(left, Value2) : TypeGuard2.TObject(left) ? (() => {
          for (const key of Object.getOwnPropertyNames(left.properties)) {
            if (Property(Value2, left.properties[key]) === TypeExtendsResult.False) {
              return TypeExtendsResult.False;
            }
          }
          return TypeExtendsResult.True;
        })() : TypeExtendsResult.False;
      }
      function TRecord(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : !TypeGuard2.TRecord(right) ? TypeExtendsResult.False : Visit(RecordValue(left), RecordValue(right));
      }
      function TStringRight(left, right) {
        return TypeGuard2.TLiteral(left) && ValueGuard.IsString(left.const) ? TypeExtendsResult.True : TypeGuard2.TString(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TString(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TString(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TSymbol(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TSymbol(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TTemplateLiteral(left, right) {
        return TypeGuard2.TTemplateLiteral(left) ? Visit(TemplateLiteralResolver.Resolve(left), right) : TypeGuard2.TTemplateLiteral(right) ? Visit(left, TemplateLiteralResolver.Resolve(right)) : Throw("Invalid fallthrough for TemplateLiteral");
      }
      function IsArrayOfTuple(left, right) {
        return TypeGuard2.TArray(right) && left.items !== void 0 && left.items.every((schema) => Visit(schema, right.items) === TypeExtendsResult.True);
      }
      function TTupleRight(left, right) {
        return TypeGuard2.TNever(left) ? TypeExtendsResult.True : TypeGuard2.TUnknown(left) ? TypeExtendsResult.False : TypeGuard2.TAny(left) ? TypeExtendsResult.Union : TypeExtendsResult.False;
      }
      function TTuple(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) && IsObjectArrayLike(right) ? TypeExtendsResult.True : TypeGuard2.TArray(right) && IsArrayOfTuple(left, right) ? TypeExtendsResult.True : !TypeGuard2.TTuple(right) ? TypeExtendsResult.False : ValueGuard.IsUndefined(left.items) && !ValueGuard.IsUndefined(right.items) || !ValueGuard.IsUndefined(left.items) && ValueGuard.IsUndefined(right.items) ? TypeExtendsResult.False : ValueGuard.IsUndefined(left.items) && !ValueGuard.IsUndefined(right.items) ? TypeExtendsResult.True : left.items.every((schema, index2) => Visit(schema, right.items[index2]) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUint8Array(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TUint8Array(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUndefined(left, right) {
        return IsStructuralRight(right) ? StructuralRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TRecord(right) ? TRecordRight(left, right) : TypeGuard2.TVoid(right) ? VoidRight(left, right) : TypeGuard2.TUndefined(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUnionRight(left, right) {
        return right.anyOf.some((schema) => Visit(left, schema) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUnion(left, right) {
        return left.anyOf.every((schema) => Visit(schema, right) === TypeExtendsResult.True) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TUnknownRight(left, right) {
        return TypeExtendsResult.True;
      }
      function TUnknown(left, right) {
        return TypeGuard2.TNever(right) ? TNeverRight(left, right) : TypeGuard2.TIntersect(right) ? TIntersectRight(left, right) : TypeGuard2.TUnion(right) ? TUnionRight(left, right) : TypeGuard2.TAny(right) ? TAnyRight(left, right) : TypeGuard2.TString(right) ? TStringRight(left, right) : TypeGuard2.TNumber(right) ? TNumberRight(left, right) : TypeGuard2.TInteger(right) ? TIntegerRight(left, right) : TypeGuard2.TBoolean(right) ? TBooleanRight(left, right) : TypeGuard2.TArray(right) ? TArrayRight(left, right) : TypeGuard2.TTuple(right) ? TTupleRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TUnknown(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function VoidRight(left, right) {
        return TypeGuard2.TUndefined(left) ? TypeExtendsResult.True : TypeGuard2.TUndefined(left) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function TVoid(left, right) {
        return TypeGuard2.TIntersect(right) ? TIntersectRight(left, right) : TypeGuard2.TUnion(right) ? TUnionRight(left, right) : TypeGuard2.TUnknown(right) ? TUnknownRight(left, right) : TypeGuard2.TAny(right) ? TAnyRight(left, right) : TypeGuard2.TObject(right) ? TObjectRight(left, right) : TypeGuard2.TVoid(right) ? TypeExtendsResult.True : TypeExtendsResult.False;
      }
      function Visit(left, right) {
        return (
          // resolvable
          TypeGuard2.TTemplateLiteral(left) || TypeGuard2.TTemplateLiteral(right) ? TTemplateLiteral(left, right) : TypeGuard2.TNot(left) || TypeGuard2.TNot(right) ? TNot(left, right) : (
            // standard
            TypeGuard2.TAny(left) ? TAny(left, right) : TypeGuard2.TArray(left) ? TArray(left, right) : TypeGuard2.TBigInt(left) ? TBigInt(left, right) : TypeGuard2.TBoolean(left) ? TBoolean(left, right) : TypeGuard2.TAsyncIterator(left) ? TAsyncIterator(left, right) : TypeGuard2.TConstructor(left) ? TConstructor(left, right) : TypeGuard2.TDate(left) ? TDate(left, right) : TypeGuard2.TFunction(left) ? TFunction(left, right) : TypeGuard2.TInteger(left) ? TInteger(left, right) : TypeGuard2.TIntersect(left) ? TIntersect(left, right) : TypeGuard2.TIterator(left) ? TIterator(left, right) : TypeGuard2.TLiteral(left) ? TLiteral(left, right) : TypeGuard2.TNever(left) ? TNever(left, right) : TypeGuard2.TNull(left) ? TNull(left, right) : TypeGuard2.TNumber(left) ? TNumber(left, right) : TypeGuard2.TObject(left) ? TObject(left, right) : TypeGuard2.TRecord(left) ? TRecord(left, right) : TypeGuard2.TString(left) ? TString(left, right) : TypeGuard2.TSymbol(left) ? TSymbol(left, right) : TypeGuard2.TTuple(left) ? TTuple(left, right) : TypeGuard2.TPromise(left) ? TPromise(left, right) : TypeGuard2.TUint8Array(left) ? TUint8Array(left, right) : TypeGuard2.TUndefined(left) ? TUndefined(left, right) : TypeGuard2.TUnion(left) ? TUnion(left, right) : TypeGuard2.TUnknown(left) ? TUnknown(left, right) : TypeGuard2.TVoid(left) ? TVoid(left, right) : Throw(`Unknown left type operand '${left[exports.Kind]}'`)
          )
        );
      }
      function Extends(left, right) {
        return Visit(left, right);
      }
      TypeExtends2.Extends = Extends;
    })(TypeExtends || (exports.TypeExtends = TypeExtends = {}));
    var TypeClone;
    (function(TypeClone2) {
      function ArrayType(value) {
        return value.map((value2) => Visit(value2));
      }
      function DateType(value) {
        return new Date(value.getTime());
      }
      function Uint8ArrayType(value) {
        return new Uint8Array(value);
      }
      function ObjectType(value) {
        const clonedProperties = Object.getOwnPropertyNames(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
        const clonedSymbols = Object.getOwnPropertySymbols(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
        return { ...clonedProperties, ...clonedSymbols };
      }
      function Visit(value) {
        return ValueGuard.IsArray(value) ? ArrayType(value) : ValueGuard.IsDate(value) ? DateType(value) : ValueGuard.IsUint8Array(value) ? Uint8ArrayType(value) : ValueGuard.IsObject(value) ? ObjectType(value) : value;
      }
      function Rest(schemas) {
        return schemas.map((schema) => Type(schema));
      }
      TypeClone2.Rest = Rest;
      function Type(schema, options = {}) {
        return { ...Visit(schema), ...options };
      }
      TypeClone2.Type = Type;
    })(TypeClone || (exports.TypeClone = TypeClone = {}));
    var IndexedAccessor;
    (function(IndexedAccessor2) {
      function OptionalUnwrap(schema) {
        return schema.map((schema2) => {
          const { [exports.Optional]: _, ...clone } = TypeClone.Type(schema2);
          return clone;
        });
      }
      function IsIntersectOptional(schema) {
        return schema.every((schema2) => TypeGuard2.TOptional(schema2));
      }
      function IsUnionOptional(schema) {
        return schema.some((schema2) => TypeGuard2.TOptional(schema2));
      }
      function ResolveIntersect(schema) {
        return IsIntersectOptional(schema.allOf) ? exports.Type.Optional(exports.Type.Intersect(OptionalUnwrap(schema.allOf))) : schema;
      }
      function ResolveUnion(schema) {
        return IsUnionOptional(schema.anyOf) ? exports.Type.Optional(exports.Type.Union(OptionalUnwrap(schema.anyOf))) : schema;
      }
      function ResolveOptional(schema) {
        return schema[exports.Kind] === "Intersect" ? ResolveIntersect(schema) : schema[exports.Kind] === "Union" ? ResolveUnion(schema) : schema;
      }
      function TIntersect(schema, key) {
        const resolved = schema.allOf.reduce((acc, schema2) => {
          const indexed = Visit(schema2, key);
          return indexed[exports.Kind] === "Never" ? acc : [...acc, indexed];
        }, []);
        return ResolveOptional(exports.Type.Intersect(resolved));
      }
      function TUnion(schema, key) {
        const resolved = schema.anyOf.map((schema2) => Visit(schema2, key));
        return ResolveOptional(exports.Type.Union(resolved));
      }
      function TObject(schema, key) {
        const property = schema.properties[key];
        return ValueGuard.IsUndefined(property) ? exports.Type.Never() : exports.Type.Union([property]);
      }
      function TTuple(schema, key) {
        const items = schema.items;
        if (ValueGuard.IsUndefined(items))
          return exports.Type.Never();
        const element = items[key];
        if (ValueGuard.IsUndefined(element))
          return exports.Type.Never();
        return element;
      }
      function Visit(schema, key) {
        return schema[exports.Kind] === "Intersect" ? TIntersect(schema, key) : schema[exports.Kind] === "Union" ? TUnion(schema, key) : schema[exports.Kind] === "Object" ? TObject(schema, key) : schema[exports.Kind] === "Tuple" ? TTuple(schema, key) : exports.Type.Never();
      }
      function Resolve(schema, keys, options = {}) {
        const resolved = keys.map((key) => Visit(schema, key.toString()));
        return ResolveOptional(exports.Type.Union(resolved, options));
      }
      IndexedAccessor2.Resolve = Resolve;
    })(IndexedAccessor || (exports.IndexedAccessor = IndexedAccessor = {}));
    var Intrinsic;
    (function(Intrinsic2) {
      function Uncapitalize(value) {
        const [first, rest] = [value.slice(0, 1), value.slice(1)];
        return `${first.toLowerCase()}${rest}`;
      }
      function Capitalize(value) {
        const [first, rest] = [value.slice(0, 1), value.slice(1)];
        return `${first.toUpperCase()}${rest}`;
      }
      function Uppercase(value) {
        return value.toUpperCase();
      }
      function Lowercase(value) {
        return value.toLowerCase();
      }
      function IntrinsicTemplateLiteral(schema, mode) {
        const expression = TemplateLiteralParser.ParseExact(schema.pattern);
        const finite = TemplateLiteralFinite.Check(expression);
        if (!finite)
          return { ...schema, pattern: IntrinsicLiteral(schema.pattern, mode) };
        const strings = [...TemplateLiteralGenerator.Generate(expression)];
        const literals = strings.map((value) => exports.Type.Literal(value));
        const mapped = IntrinsicRest(literals, mode);
        const union = exports.Type.Union(mapped);
        return exports.Type.TemplateLiteral([union]);
      }
      function IntrinsicLiteral(value, mode) {
        return typeof value === "string" ? mode === "Uncapitalize" ? Uncapitalize(value) : mode === "Capitalize" ? Capitalize(value) : mode === "Uppercase" ? Uppercase(value) : mode === "Lowercase" ? Lowercase(value) : value : value.toString();
      }
      function IntrinsicRest(schema, mode) {
        if (schema.length === 0)
          return [];
        const [L, ...R] = schema;
        return [Map2(L, mode), ...IntrinsicRest(R, mode)];
      }
      function Visit(schema, mode) {
        return TypeGuard2.TTemplateLiteral(schema) ? IntrinsicTemplateLiteral(schema, mode) : TypeGuard2.TUnion(schema) ? exports.Type.Union(IntrinsicRest(schema.anyOf, mode)) : TypeGuard2.TLiteral(schema) ? exports.Type.Literal(IntrinsicLiteral(schema.const, mode)) : schema;
      }
      function Map2(schema, mode) {
        return Visit(schema, mode);
      }
      Intrinsic2.Map = Map2;
    })(Intrinsic || (exports.Intrinsic = Intrinsic = {}));
    var ObjectMap;
    (function(ObjectMap2) {
      function TIntersect(schema, callback) {
        return exports.Type.Intersect(schema.allOf.map((inner) => Visit(inner, callback)), { ...schema });
      }
      function TUnion(schema, callback) {
        return exports.Type.Union(schema.anyOf.map((inner) => Visit(inner, callback)), { ...schema });
      }
      function TObject(schema, callback) {
        return callback(schema);
      }
      function Visit(schema, callback) {
        return schema[exports.Kind] === "Intersect" ? TIntersect(schema, callback) : schema[exports.Kind] === "Union" ? TUnion(schema, callback) : schema[exports.Kind] === "Object" ? TObject(schema, callback) : schema;
      }
      function Map2(schema, callback, options) {
        return { ...Visit(TypeClone.Type(schema), callback), ...options };
      }
      ObjectMap2.Map = Map2;
    })(ObjectMap || (exports.ObjectMap = ObjectMap = {}));
    var KeyResolver;
    (function(KeyResolver2) {
      function UnwrapPattern(key) {
        return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
      }
      function TIntersect(schema, options) {
        return schema.allOf.reduce((acc, schema2) => [...acc, ...Visit(schema2, options)], []);
      }
      function TUnion(schema, options) {
        const sets = schema.anyOf.map((inner) => Visit(inner, options));
        return [...sets.reduce((set, outer) => outer.map((key) => sets.every((inner) => inner.includes(key)) ? set.add(key) : set)[0], /* @__PURE__ */ new Set())];
      }
      function TObject(schema, options) {
        return Object.getOwnPropertyNames(schema.properties);
      }
      function TRecord(schema, options) {
        return options.includePatterns ? Object.getOwnPropertyNames(schema.patternProperties) : [];
      }
      function Visit(schema, options) {
        return TypeGuard2.TIntersect(schema) ? TIntersect(schema, options) : TypeGuard2.TUnion(schema) ? TUnion(schema, options) : TypeGuard2.TObject(schema) ? TObject(schema, options) : TypeGuard2.TRecord(schema) ? TRecord(schema, options) : [];
      }
      function ResolveKeys(schema, options) {
        return [...new Set(Visit(schema, options))];
      }
      KeyResolver2.ResolveKeys = ResolveKeys;
      function ResolvePattern(schema) {
        const keys = ResolveKeys(schema, { includePatterns: true });
        const pattern = keys.map((key) => `(${UnwrapPattern(key)})`);
        return `^(${pattern.join("|")})$`;
      }
      KeyResolver2.ResolvePattern = ResolvePattern;
    })(KeyResolver || (exports.KeyResolver = KeyResolver = {}));
    var KeyArrayResolverError = class extends TypeBoxError {
    };
    exports.KeyArrayResolverError = KeyArrayResolverError;
    var KeyArrayResolver;
    (function(KeyArrayResolver2) {
      function Resolve(schema) {
        return Array.isArray(schema) ? schema : TypeGuard2.TUnionLiteral(schema) ? schema.anyOf.map((schema2) => schema2.const.toString()) : TypeGuard2.TLiteral(schema) ? [schema.const] : TypeGuard2.TTemplateLiteral(schema) ? (() => {
          const expression = TemplateLiteralParser.ParseExact(schema.pattern);
          if (!TemplateLiteralFinite.Check(expression))
            throw new KeyArrayResolverError("Cannot resolve keys from infinite template expression");
          return [...TemplateLiteralGenerator.Generate(expression)];
        })() : [];
      }
      KeyArrayResolver2.Resolve = Resolve;
    })(KeyArrayResolver || (exports.KeyArrayResolver = KeyArrayResolver = {}));
    var UnionResolver;
    (function(UnionResolver2) {
      function* TUnion(union) {
        for (const schema of union.anyOf) {
          if (schema[exports.Kind] === "Union") {
            yield* TUnion(schema);
          } else {
            yield schema;
          }
        }
      }
      function Resolve(union) {
        return exports.Type.Union([...TUnion(union)], { ...union });
      }
      UnionResolver2.Resolve = Resolve;
    })(UnionResolver || (exports.UnionResolver = UnionResolver = {}));
    var TemplateLiteralPatternError = class extends TypeBoxError {
    };
    exports.TemplateLiteralPatternError = TemplateLiteralPatternError;
    var TemplateLiteralPattern;
    (function(TemplateLiteralPattern2) {
      function Throw(message) {
        throw new TemplateLiteralPatternError(message);
      }
      function Escape(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function Visit(schema, acc) {
        return TypeGuard2.TTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : TypeGuard2.TUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit(schema2, acc)).join("|")})` : TypeGuard2.TNumber(schema) ? `${acc}${exports.PatternNumber}` : TypeGuard2.TInteger(schema) ? `${acc}${exports.PatternNumber}` : TypeGuard2.TBigInt(schema) ? `${acc}${exports.PatternNumber}` : TypeGuard2.TString(schema) ? `${acc}${exports.PatternString}` : TypeGuard2.TLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : TypeGuard2.TBoolean(schema) ? `${acc}${exports.PatternBoolean}` : Throw(`Unexpected Kind '${schema[exports.Kind]}'`);
      }
      function Create(kinds) {
        return `^${kinds.map((schema) => Visit(schema, "")).join("")}$`;
      }
      TemplateLiteralPattern2.Create = Create;
    })(TemplateLiteralPattern || (exports.TemplateLiteralPattern = TemplateLiteralPattern = {}));
    var TemplateLiteralResolver;
    (function(TemplateLiteralResolver2) {
      function Resolve(template) {
        const expression = TemplateLiteralParser.ParseExact(template.pattern);
        if (!TemplateLiteralFinite.Check(expression))
          return exports.Type.String();
        const literals = [...TemplateLiteralGenerator.Generate(expression)].map((value) => exports.Type.Literal(value));
        return exports.Type.Union(literals);
      }
      TemplateLiteralResolver2.Resolve = Resolve;
    })(TemplateLiteralResolver || (exports.TemplateLiteralResolver = TemplateLiteralResolver = {}));
    var TemplateLiteralParserError = class extends TypeBoxError {
    };
    exports.TemplateLiteralParserError = TemplateLiteralParserError;
    var TemplateLiteralParser;
    (function(TemplateLiteralParser2) {
      function IsNonEscaped(pattern, index2, char) {
        return pattern[index2] === char && pattern.charCodeAt(index2 - 1) !== 92;
      }
      function IsOpenParen(pattern, index2) {
        return IsNonEscaped(pattern, index2, "(");
      }
      function IsCloseParen(pattern, index2) {
        return IsNonEscaped(pattern, index2, ")");
      }
      function IsSeparator(pattern, index2) {
        return IsNonEscaped(pattern, index2, "|");
      }
      function IsGroup(pattern) {
        if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
          return false;
        let count = 0;
        for (let index2 = 0; index2 < pattern.length; index2++) {
          if (IsOpenParen(pattern, index2))
            count += 1;
          if (IsCloseParen(pattern, index2))
            count -= 1;
          if (count === 0 && index2 !== pattern.length - 1)
            return false;
        }
        return true;
      }
      function InGroup(pattern) {
        return pattern.slice(1, pattern.length - 1);
      }
      function IsPrecedenceOr(pattern) {
        let count = 0;
        for (let index2 = 0; index2 < pattern.length; index2++) {
          if (IsOpenParen(pattern, index2))
            count += 1;
          if (IsCloseParen(pattern, index2))
            count -= 1;
          if (IsSeparator(pattern, index2) && count === 0)
            return true;
        }
        return false;
      }
      function IsPrecedenceAnd(pattern) {
        for (let index2 = 0; index2 < pattern.length; index2++) {
          if (IsOpenParen(pattern, index2))
            return true;
        }
        return false;
      }
      function Or(pattern) {
        let [count, start] = [0, 0];
        const expressions = [];
        for (let index2 = 0; index2 < pattern.length; index2++) {
          if (IsOpenParen(pattern, index2))
            count += 1;
          if (IsCloseParen(pattern, index2))
            count -= 1;
          if (IsSeparator(pattern, index2) && count === 0) {
            const range2 = pattern.slice(start, index2);
            if (range2.length > 0)
              expressions.push(Parse(range2));
            start = index2 + 1;
          }
        }
        const range = pattern.slice(start);
        if (range.length > 0)
          expressions.push(Parse(range));
        if (expressions.length === 0)
          return { type: "const", const: "" };
        if (expressions.length === 1)
          return expressions[0];
        return { type: "or", expr: expressions };
      }
      function And(pattern) {
        function Group(value, index2) {
          if (!IsOpenParen(value, index2))
            throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
          let count = 0;
          for (let scan = index2; scan < value.length; scan++) {
            if (IsOpenParen(value, scan))
              count += 1;
            if (IsCloseParen(value, scan))
              count -= 1;
            if (count === 0)
              return [index2, scan];
          }
          throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
        }
        function Range(pattern2, index2) {
          for (let scan = index2; scan < pattern2.length; scan++) {
            if (IsOpenParen(pattern2, scan))
              return [index2, scan];
          }
          return [index2, pattern2.length];
        }
        const expressions = [];
        for (let index2 = 0; index2 < pattern.length; index2++) {
          if (IsOpenParen(pattern, index2)) {
            const [start, end] = Group(pattern, index2);
            const range = pattern.slice(start, end + 1);
            expressions.push(Parse(range));
            index2 = end;
          } else {
            const [start, end] = Range(pattern, index2);
            const range = pattern.slice(start, end);
            if (range.length > 0)
              expressions.push(Parse(range));
            index2 = end - 1;
          }
        }
        return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
      }
      function Parse(pattern) {
        return IsGroup(pattern) ? Parse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: pattern };
      }
      TemplateLiteralParser2.Parse = Parse;
      function ParseExact(pattern) {
        return Parse(pattern.slice(1, pattern.length - 1));
      }
      TemplateLiteralParser2.ParseExact = ParseExact;
    })(TemplateLiteralParser || (exports.TemplateLiteralParser = TemplateLiteralParser = {}));
    var TemplateLiteralFiniteError = class extends TypeBoxError {
    };
    exports.TemplateLiteralFiniteError = TemplateLiteralFiniteError;
    var TemplateLiteralFinite;
    (function(TemplateLiteralFinite2) {
      function Throw(message) {
        throw new TemplateLiteralFiniteError(message);
      }
      function IsNumber(expression) {
        return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
      }
      function IsBoolean(expression) {
        return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
      }
      function IsString(expression) {
        return expression.type === "const" && expression.const === ".*";
      }
      function Check(expression) {
        return IsBoolean(expression) ? true : IsNumber(expression) || IsString(expression) ? false : expression.type === "and" ? expression.expr.every((expr) => Check(expr)) : expression.type === "or" ? expression.expr.every((expr) => Check(expr)) : expression.type === "const" ? true : Throw(`Unknown expression type`);
      }
      TemplateLiteralFinite2.Check = Check;
    })(TemplateLiteralFinite || (exports.TemplateLiteralFinite = TemplateLiteralFinite = {}));
    var TemplateLiteralGeneratorError = class extends TypeBoxError {
    };
    exports.TemplateLiteralGeneratorError = TemplateLiteralGeneratorError;
    var TemplateLiteralGenerator;
    (function(TemplateLiteralGenerator2) {
      function* Reduce(buffer2) {
        if (buffer2.length === 1)
          return yield* buffer2[0];
        for (const left of buffer2[0]) {
          for (const right of Reduce(buffer2.slice(1))) {
            yield `${left}${right}`;
          }
        }
      }
      function* And(expression) {
        return yield* Reduce(expression.expr.map((expr) => [...Generate(expr)]));
      }
      function* Or(expression) {
        for (const expr of expression.expr)
          yield* Generate(expr);
      }
      function* Const(expression) {
        return yield expression.const;
      }
      function* Generate(expression) {
        return expression.type === "and" ? yield* And(expression) : expression.type === "or" ? yield* Or(expression) : expression.type === "const" ? yield* Const(expression) : (() => {
          throw new TemplateLiteralGeneratorError("Unknown expression");
        })();
      }
      TemplateLiteralGenerator2.Generate = Generate;
    })(TemplateLiteralGenerator || (exports.TemplateLiteralGenerator = TemplateLiteralGenerator = {}));
    var TemplateLiteralDslParser;
    (function(TemplateLiteralDslParser2) {
      function* ParseUnion(template) {
        const trim2 = template.trim().replace(/"|'/g, "");
        return trim2 === "boolean" ? yield exports.Type.Boolean() : trim2 === "number" ? yield exports.Type.Number() : trim2 === "bigint" ? yield exports.Type.BigInt() : trim2 === "string" ? yield exports.Type.String() : yield (() => {
          const literals = trim2.split("|").map((literal) => exports.Type.Literal(literal.trim()));
          return literals.length === 0 ? exports.Type.Never() : literals.length === 1 ? literals[0] : exports.Type.Union(literals);
        })();
      }
      function* ParseTerminal(template) {
        if (template[1] !== "{") {
          const L = exports.Type.Literal("$");
          const R = ParseLiteral(template.slice(1));
          return yield* [L, ...R];
        }
        for (let i = 2; i < template.length; i++) {
          if (template[i] === "}") {
            const L = ParseUnion(template.slice(2, i));
            const R = ParseLiteral(template.slice(i + 1));
            return yield* [...L, ...R];
          }
        }
        yield exports.Type.Literal(template);
      }
      function* ParseLiteral(template) {
        for (let i = 0; i < template.length; i++) {
          if (template[i] === "$") {
            const L = exports.Type.Literal(template.slice(0, i));
            const R = ParseTerminal(template.slice(i));
            return yield* [L, ...R];
          }
        }
        yield exports.Type.Literal(template);
      }
      function Parse(template_dsl) {
        return [...ParseLiteral(template_dsl)];
      }
      TemplateLiteralDslParser2.Parse = Parse;
    })(TemplateLiteralDslParser || (exports.TemplateLiteralDslParser = TemplateLiteralDslParser = {}));
    var TransformDecodeBuilder = class {
      constructor(schema) {
        this.schema = schema;
      }
      Decode(decode2) {
        return new TransformEncodeBuilder(this.schema, decode2);
      }
    };
    exports.TransformDecodeBuilder = TransformDecodeBuilder;
    var TransformEncodeBuilder = class {
      constructor(schema, decode2) {
        this.schema = schema;
        this.decode = decode2;
      }
      Encode(encode2) {
        const schema = TypeClone.Type(this.schema);
        return TypeGuard2.TTransform(schema) ? (() => {
          const Encode = (value) => schema[exports.Transform].Encode(encode2(value));
          const Decode = (value) => this.decode(schema[exports.Transform].Decode(value));
          const Codec = { Encode, Decode };
          return { ...schema, [exports.Transform]: Codec };
        })() : (() => {
          const Codec = { Decode: this.decode, Encode: encode2 };
          return { ...schema, [exports.Transform]: Codec };
        })();
      }
    };
    exports.TransformEncodeBuilder = TransformEncodeBuilder;
    var TypeOrdinal = 0;
    var TypeBuilderError = class extends TypeBoxError {
    };
    exports.TypeBuilderError = TypeBuilderError;
    var TypeBuilder = class {
      /** `[Internal]` Creates a schema without `static` and `params` types */
      Create(schema) {
        return schema;
      }
      /** `[Internal]` Throws a TypeBuilder error with the given message */
      Throw(message) {
        throw new TypeBuilderError(message);
      }
      /** `[Internal]` Discards property keys from the given record type */
      Discard(record, keys) {
        return keys.reduce((acc, key) => {
          const { [key]: _, ...rest } = acc;
          return rest;
        }, record);
      }
      /** `[Json]` Omits compositing symbols from this schema */
      Strict(schema) {
        return JSON.parse(JSON.stringify(schema));
      }
    };
    exports.TypeBuilder = TypeBuilder;
    var JsonTypeBuilder = class extends TypeBuilder {
      // ------------------------------------------------------------------------
      // Modifiers
      // ------------------------------------------------------------------------
      /** `[Json]` Creates a Readonly and Optional property */
      ReadonlyOptional(schema) {
        return this.Readonly(this.Optional(schema));
      }
      /** `[Json]` Creates a Readonly property */
      Readonly(schema) {
        return { ...TypeClone.Type(schema), [exports.Readonly]: "Readonly" };
      }
      /** `[Json]` Creates an Optional property */
      Optional(schema) {
        return { ...TypeClone.Type(schema), [exports.Optional]: "Optional" };
      }
      // ------------------------------------------------------------------------
      // Types
      // ------------------------------------------------------------------------
      /** `[Json]` Creates an Any type */
      Any(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Any" });
      }
      /** `[Json]` Creates an Array type */
      Array(schema, options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Array", type: "array", items: TypeClone.Type(schema) });
      }
      /** `[Json]` Creates a Boolean type */
      Boolean(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Boolean", type: "boolean" });
      }
      /** `[Json]` Intrinsic function to Capitalize LiteralString types */
      Capitalize(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), "Capitalize"), ...options };
      }
      /** `[Json]` Creates a Composite object type */
      Composite(objects, options) {
        const intersect = exports.Type.Intersect(objects, {});
        const keys = KeyResolver.ResolveKeys(intersect, { includePatterns: false });
        const properties = keys.reduce((acc, key) => ({ ...acc, [key]: exports.Type.Index(intersect, [key]) }), {});
        return exports.Type.Object(properties, options);
      }
      /** `[Json]` Creates a Enum type */
      Enum(item, options = {}) {
        if (ValueGuard.IsUndefined(item))
          return this.Throw("Enum undefined or empty");
        const values1 = Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
        const values2 = [...new Set(values1)];
        const anyOf = values2.map((value) => exports.Type.Literal(value));
        return this.Union(anyOf, { ...options, [exports.Hint]: "Enum" });
      }
      /** `[Json]` Creates a Conditional type */
      Extends(left, right, trueType, falseType, options = {}) {
        switch (TypeExtends.Extends(left, right)) {
          case TypeExtendsResult.Union:
            return this.Union([TypeClone.Type(trueType, options), TypeClone.Type(falseType, options)]);
          case TypeExtendsResult.True:
            return TypeClone.Type(trueType, options);
          case TypeExtendsResult.False:
            return TypeClone.Type(falseType, options);
        }
      }
      /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
      Exclude(unionType, excludedMembers, options = {}) {
        return TypeGuard2.TTemplateLiteral(unionType) ? this.Exclude(TemplateLiteralResolver.Resolve(unionType), excludedMembers, options) : TypeGuard2.TTemplateLiteral(excludedMembers) ? this.Exclude(unionType, TemplateLiteralResolver.Resolve(excludedMembers), options) : TypeGuard2.TUnion(unionType) ? (() => {
          const narrowed = unionType.anyOf.filter((inner) => TypeExtends.Extends(inner, excludedMembers) === TypeExtendsResult.False);
          return narrowed.length === 1 ? TypeClone.Type(narrowed[0], options) : this.Union(narrowed, options);
        })() : TypeExtends.Extends(unionType, excludedMembers) !== TypeExtendsResult.False ? this.Never(options) : TypeClone.Type(unionType, options);
      }
      /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
      Extract(type, union, options = {}) {
        return TypeGuard2.TTemplateLiteral(type) ? this.Extract(TemplateLiteralResolver.Resolve(type), union, options) : TypeGuard2.TTemplateLiteral(union) ? this.Extract(type, TemplateLiteralResolver.Resolve(union), options) : TypeGuard2.TUnion(type) ? (() => {
          const narrowed = type.anyOf.filter((inner) => TypeExtends.Extends(inner, union) !== TypeExtendsResult.False);
          return narrowed.length === 1 ? TypeClone.Type(narrowed[0], options) : this.Union(narrowed, options);
        })() : TypeExtends.Extends(type, union) !== TypeExtendsResult.False ? TypeClone.Type(type, options) : this.Never(options);
      }
      /** `[Json]` Returns an Indexed property type for the given keys */
      Index(schema, unresolved, options = {}) {
        return TypeGuard2.TArray(schema) && TypeGuard2.TNumber(unresolved) ? (() => {
          return TypeClone.Type(schema.items, options);
        })() : TypeGuard2.TTuple(schema) && TypeGuard2.TNumber(unresolved) ? (() => {
          const items = ValueGuard.IsUndefined(schema.items) ? [] : schema.items;
          const cloned = items.map((schema2) => TypeClone.Type(schema2));
          return this.Union(cloned, options);
        })() : (() => {
          const keys = KeyArrayResolver.Resolve(unresolved);
          const clone = TypeClone.Type(schema);
          return IndexedAccessor.Resolve(clone, keys, options);
        })();
      }
      /** `[Json]` Creates an Integer type */
      Integer(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Integer", type: "integer" });
      }
      /** `[Json]` Creates an Intersect type */
      Intersect(allOf, options = {}) {
        if (allOf.length === 0)
          return exports.Type.Never();
        if (allOf.length === 1)
          return TypeClone.Type(allOf[0], options);
        if (allOf.some((schema) => TypeGuard2.TTransform(schema)))
          this.Throw("Cannot intersect transform types");
        const objects = allOf.every((schema) => TypeGuard2.TObject(schema));
        const cloned = TypeClone.Rest(allOf);
        const clonedUnevaluatedProperties = TypeGuard2.TSchema(options.unevaluatedProperties) ? { unevaluatedProperties: TypeClone.Type(options.unevaluatedProperties) } : {};
        return options.unevaluatedProperties === false || TypeGuard2.TSchema(options.unevaluatedProperties) || objects ? this.Create({ ...options, ...clonedUnevaluatedProperties, [exports.Kind]: "Intersect", type: "object", allOf: cloned }) : this.Create({ ...options, ...clonedUnevaluatedProperties, [exports.Kind]: "Intersect", allOf: cloned });
      }
      /** `[Json]` Creates a KeyOf type */
      KeyOf(schema, options = {}) {
        return TypeGuard2.TRecord(schema) ? (() => {
          const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
          return pattern === exports.PatternNumberExact ? this.Number(options) : pattern === exports.PatternStringExact ? this.String(options) : this.Throw("Unable to resolve key type from Record key pattern");
        })() : TypeGuard2.TTuple(schema) ? (() => {
          const items = ValueGuard.IsUndefined(schema.items) ? [] : schema.items;
          const literals = items.map((_, index2) => exports.Type.Literal(index2.toString()));
          return this.Union(literals, options);
        })() : TypeGuard2.TArray(schema) ? (() => {
          return this.Number(options);
        })() : (() => {
          const keys = KeyResolver.ResolveKeys(schema, { includePatterns: false });
          if (keys.length === 0)
            return this.Never(options);
          const literals = keys.map((key) => this.Literal(key));
          return this.Union(literals, options);
        })();
      }
      /** `[Json]` Creates a Literal type */
      Literal(value, options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Literal", const: value, type: typeof value });
      }
      /** `[Json]` Intrinsic function to Lowercase LiteralString types */
      Lowercase(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), "Lowercase"), ...options };
      }
      /** `[Json]` Creates a Never type */
      Never(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Never", not: {} });
      }
      /** `[Json]` Creates a Not type */
      Not(schema, options) {
        return this.Create({ ...options, [exports.Kind]: "Not", not: TypeClone.Type(schema) });
      }
      /** `[Json]` Creates a Null type */
      Null(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Null", type: "null" });
      }
      /** `[Json]` Creates a Number type */
      Number(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Number", type: "number" });
      }
      /** `[Json]` Creates an Object type */
      Object(properties, options = {}) {
        const propertyKeys = Object.getOwnPropertyNames(properties);
        const optionalKeys = propertyKeys.filter((key) => TypeGuard2.TOptional(properties[key]));
        const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
        const clonedAdditionalProperties = TypeGuard2.TSchema(options.additionalProperties) ? { additionalProperties: TypeClone.Type(options.additionalProperties) } : {};
        const clonedProperties = propertyKeys.reduce((acc, key) => ({ ...acc, [key]: TypeClone.Type(properties[key]) }), {});
        return requiredKeys.length > 0 ? this.Create({ ...options, ...clonedAdditionalProperties, [exports.Kind]: "Object", type: "object", properties: clonedProperties, required: requiredKeys }) : this.Create({ ...options, ...clonedAdditionalProperties, [exports.Kind]: "Object", type: "object", properties: clonedProperties });
      }
      /** `[Json]` Constructs a type whose keys are omitted from the given type */
      Omit(schema, unresolved, options = {}) {
        const keys = KeyArrayResolver.Resolve(unresolved);
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ["$id", exports.Transform]), (object) => {
          if (ValueGuard.IsArray(object.required)) {
            object.required = object.required.filter((key) => !keys.includes(key));
            if (object.required.length === 0)
              delete object.required;
          }
          for (const key of Object.getOwnPropertyNames(object.properties)) {
            if (keys.includes(key))
              delete object.properties[key];
          }
          return this.Create(object);
        }, options);
      }
      /** `[Json]` Constructs a type where all properties are optional */
      Partial(schema, options = {}) {
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ["$id", exports.Transform]), (object) => {
          const properties = Object.getOwnPropertyNames(object.properties).reduce((acc, key) => {
            return { ...acc, [key]: this.Optional(object.properties[key]) };
          }, {});
          return this.Object(
            properties,
            this.Discard(object, ["required"])
            /* object used as options to retain other constraints */
          );
        }, options);
      }
      /** `[Json]` Constructs a type whose keys are picked from the given type */
      Pick(schema, unresolved, options = {}) {
        const keys = KeyArrayResolver.Resolve(unresolved);
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ["$id", exports.Transform]), (object) => {
          if (ValueGuard.IsArray(object.required)) {
            object.required = object.required.filter((key) => keys.includes(key));
            if (object.required.length === 0)
              delete object.required;
          }
          for (const key of Object.getOwnPropertyNames(object.properties)) {
            if (!keys.includes(key))
              delete object.properties[key];
          }
          return this.Create(object);
        }, options);
      }
      /** `[Json]` Creates a Record type */
      Record(key, schema, options = {}) {
        return TypeGuard2.TTemplateLiteral(key) ? (() => {
          const expression = TemplateLiteralParser.ParseExact(key.pattern);
          return TemplateLiteralFinite.Check(expression) ? this.Object([...TemplateLiteralGenerator.Generate(expression)].reduce((acc, key2) => ({ ...acc, [key2]: TypeClone.Type(schema) }), {}), options) : this.Create({ ...options, [exports.Kind]: "Record", type: "object", patternProperties: { [key.pattern]: TypeClone.Type(schema) } });
        })() : TypeGuard2.TUnion(key) ? (() => {
          const union = UnionResolver.Resolve(key);
          if (TypeGuard2.TUnionLiteral(union)) {
            const properties = union.anyOf.reduce((acc, literal) => ({ ...acc, [literal.const]: TypeClone.Type(schema) }), {});
            return this.Object(properties, { ...options, [exports.Hint]: "Record" });
          } else
            this.Throw("Record key of type union contains non-literal types");
        })() : TypeGuard2.TLiteral(key) ? (() => {
          return ValueGuard.IsString(key.const) || ValueGuard.IsNumber(key.const) ? this.Object({ [key.const]: TypeClone.Type(schema) }, options) : this.Throw("Record key of type literal is not of type string or number");
        })() : TypeGuard2.TInteger(key) || TypeGuard2.TNumber(key) ? (() => {
          return this.Create({ ...options, [exports.Kind]: "Record", type: "object", patternProperties: { [exports.PatternNumberExact]: TypeClone.Type(schema) } });
        })() : TypeGuard2.TString(key) ? (() => {
          const pattern = ValueGuard.IsUndefined(key.pattern) ? exports.PatternStringExact : key.pattern;
          return this.Create({ ...options, [exports.Kind]: "Record", type: "object", patternProperties: { [pattern]: TypeClone.Type(schema) } });
        })() : this.Never();
      }
      /** `[Json]` Creates a Recursive type */
      Recursive(callback, options = {}) {
        if (ValueGuard.IsUndefined(options.$id))
          options.$id = `T${TypeOrdinal++}`;
        const thisType = callback({ [exports.Kind]: "This", $ref: `${options.$id}` });
        thisType.$id = options.$id;
        return this.Create({ ...options, [exports.Hint]: "Recursive", ...thisType });
      }
      /** `[Json]` Creates a Ref type. */
      Ref(unresolved, options = {}) {
        if (ValueGuard.IsString(unresolved))
          return this.Create({ ...options, [exports.Kind]: "Ref", $ref: unresolved });
        if (ValueGuard.IsUndefined(unresolved.$id))
          this.Throw("Reference target type must specify an $id");
        return this.Create({ ...options, [exports.Kind]: "Ref", $ref: unresolved.$id });
      }
      /** `[Json]` Constructs a type where all properties are required */
      Required(schema, options = {}) {
        return ObjectMap.Map(this.Discard(TypeClone.Type(schema), ["$id", exports.Transform]), (object) => {
          const properties = Object.getOwnPropertyNames(object.properties).reduce((acc, key) => {
            return { ...acc, [key]: this.Discard(object.properties[key], [exports.Optional]) };
          }, {});
          return this.Object(
            properties,
            object
            /* object used as options to retain other constraints  */
          );
        }, options);
      }
      /** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
      Rest(schema) {
        return TypeGuard2.TTuple(schema) && !ValueGuard.IsUndefined(schema.items) ? TypeClone.Rest(schema.items) : TypeGuard2.TIntersect(schema) ? TypeClone.Rest(schema.allOf) : TypeGuard2.TUnion(schema) ? TypeClone.Rest(schema.anyOf) : [];
      }
      /** `[Json]` Creates a String type */
      String(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "String", type: "string" });
      }
      /** `[Json]` Creates a TemplateLiteral type */
      TemplateLiteral(unresolved, options = {}) {
        const pattern = ValueGuard.IsString(unresolved) ? TemplateLiteralPattern.Create(TemplateLiteralDslParser.Parse(unresolved)) : TemplateLiteralPattern.Create(unresolved);
        return this.Create({ ...options, [exports.Kind]: "TemplateLiteral", type: "string", pattern });
      }
      /** `[Json]` Creates a Transform type */
      Transform(schema) {
        return new TransformDecodeBuilder(schema);
      }
      /** `[Json]` Creates a Tuple type */
      Tuple(items, options = {}) {
        const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
        const clonedItems = TypeClone.Rest(items);
        const schema = items.length > 0 ? { ...options, [exports.Kind]: "Tuple", type: "array", items: clonedItems, additionalItems, minItems, maxItems } : { ...options, [exports.Kind]: "Tuple", type: "array", minItems, maxItems };
        return this.Create(schema);
      }
      /** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
      Uncapitalize(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), "Uncapitalize"), ...options };
      }
      /** `[Json]` Creates a Union type */
      Union(union, options = {}) {
        return TypeGuard2.TTemplateLiteral(union) ? TemplateLiteralResolver.Resolve(union) : (() => {
          const anyOf = union;
          if (anyOf.length === 0)
            return this.Never(options);
          if (anyOf.length === 1)
            return this.Create(TypeClone.Type(anyOf[0], options));
          const clonedAnyOf = TypeClone.Rest(anyOf);
          return this.Create({ ...options, [exports.Kind]: "Union", anyOf: clonedAnyOf });
        })();
      }
      /** `[Json]` Creates an Unknown type */
      Unknown(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Unknown" });
      }
      /** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
      Unsafe(options = {}) {
        return this.Create({ ...options, [exports.Kind]: options[exports.Kind] || "Unsafe" });
      }
      /** `[Json]` Intrinsic function to Uppercase LiteralString types */
      Uppercase(schema, options = {}) {
        return { ...Intrinsic.Map(TypeClone.Type(schema), "Uppercase"), ...options };
      }
    };
    exports.JsonTypeBuilder = JsonTypeBuilder;
    var JavaScriptTypeBuilder = class extends JsonTypeBuilder {
      /** `[JavaScript]` Creates a AsyncIterator type */
      AsyncIterator(items, options = {}) {
        return this.Create({ ...options, [exports.Kind]: "AsyncIterator", type: "AsyncIterator", items: TypeClone.Type(items) });
      }
      /** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
      Awaited(schema, options = {}) {
        const Unwrap = (rest) => rest.length > 0 ? (() => {
          const [L, ...R] = rest;
          return [this.Awaited(L), ...Unwrap(R)];
        })() : rest;
        return TypeGuard2.TIntersect(schema) ? exports.Type.Intersect(Unwrap(schema.allOf)) : TypeGuard2.TUnion(schema) ? exports.Type.Union(Unwrap(schema.anyOf)) : TypeGuard2.TPromise(schema) ? this.Awaited(schema.item) : TypeClone.Type(schema, options);
      }
      /** `[JavaScript]` Creates a BigInt type */
      BigInt(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "BigInt", type: "bigint" });
      }
      /** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
      ConstructorParameters(schema, options = {}) {
        return this.Tuple([...schema.parameters], { ...options });
      }
      /** `[JavaScript]` Creates a Constructor type */
      Constructor(parameters, returns, options) {
        const [clonedParameters, clonedReturns] = [TypeClone.Rest(parameters), TypeClone.Type(returns)];
        return this.Create({ ...options, [exports.Kind]: "Constructor", type: "Constructor", parameters: clonedParameters, returns: clonedReturns });
      }
      /** `[JavaScript]` Creates a Date type */
      Date(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Date", type: "Date" });
      }
      /** `[JavaScript]` Creates a Function type */
      Function(parameters, returns, options) {
        const [clonedParameters, clonedReturns] = [TypeClone.Rest(parameters), TypeClone.Type(returns)];
        return this.Create({ ...options, [exports.Kind]: "Function", type: "Function", parameters: clonedParameters, returns: clonedReturns });
      }
      /** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
      InstanceType(schema, options = {}) {
        return TypeClone.Type(schema.returns, options);
      }
      /** `[JavaScript]` Creates an Iterator type */
      Iterator(items, options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Iterator", type: "Iterator", items: TypeClone.Type(items) });
      }
      /** `[JavaScript]` Extracts the Parameters from the given Function type */
      Parameters(schema, options = {}) {
        return this.Tuple(schema.parameters, { ...options });
      }
      /** `[JavaScript]` Creates a Promise type */
      Promise(item, options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Promise", type: "Promise", item: TypeClone.Type(item) });
      }
      /** `[Extended]` Creates a String type */
      RegExp(unresolved, options = {}) {
        const pattern = ValueGuard.IsString(unresolved) ? unresolved : unresolved.source;
        return this.Create({ ...options, [exports.Kind]: "String", type: "string", pattern });
      }
      /**
       * @deprecated Use `Type.RegExp`
       */
      RegEx(regex2, options = {}) {
        return this.RegExp(regex2, options);
      }
      /** `[JavaScript]` Extracts the ReturnType from the given Function type */
      ReturnType(schema, options = {}) {
        return TypeClone.Type(schema.returns, options);
      }
      /** `[JavaScript]` Creates a Symbol type */
      Symbol(options) {
        return this.Create({ ...options, [exports.Kind]: "Symbol", type: "symbol" });
      }
      /** `[JavaScript]` Creates a Undefined type */
      Undefined(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Undefined", type: "undefined" });
      }
      /** `[JavaScript]` Creates a Uint8Array type */
      Uint8Array(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Uint8Array", type: "Uint8Array" });
      }
      /** `[JavaScript]` Creates a Void type */
      Void(options = {}) {
        return this.Create({ ...options, [exports.Kind]: "Void", type: "void" });
      }
    };
    exports.JavaScriptTypeBuilder = JavaScriptTypeBuilder;
    exports.JsonType = new JsonTypeBuilder();
    exports.Type = new JavaScriptTypeBuilder();
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/guard.js
var require_guard = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/guard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsValueType = exports.IsSymbol = exports.IsFunction = exports.IsString = exports.IsBigInt = exports.IsInteger = exports.IsNumber = exports.IsBoolean = exports.IsNull = exports.IsUndefined = exports.IsArray = exports.IsObject = exports.IsPlainObject = exports.HasPropertyKey = exports.IsDate = exports.IsUint8Array = exports.IsPromise = exports.IsTypedArray = exports.IsIterator = exports.IsAsyncIterator = void 0;
    function IsAsyncIterator(value) {
      return IsObject(value) && Symbol.asyncIterator in value;
    }
    exports.IsAsyncIterator = IsAsyncIterator;
    function IsIterator(value) {
      return IsObject(value) && Symbol.iterator in value;
    }
    exports.IsIterator = IsIterator;
    function IsTypedArray(value) {
      return ArrayBuffer.isView(value);
    }
    exports.IsTypedArray = IsTypedArray;
    function IsPromise(value) {
      return value instanceof Promise;
    }
    exports.IsPromise = IsPromise;
    function IsUint8Array(value) {
      return value instanceof Uint8Array;
    }
    exports.IsUint8Array = IsUint8Array;
    function IsDate(value) {
      return value instanceof Date && Number.isFinite(value.getTime());
    }
    exports.IsDate = IsDate;
    function HasPropertyKey(value, key) {
      return key in value;
    }
    exports.HasPropertyKey = HasPropertyKey;
    function IsPlainObject(value) {
      return IsObject(value) && IsFunction(value.constructor) && value.constructor.name === "Object";
    }
    exports.IsPlainObject = IsPlainObject;
    function IsObject(value) {
      return value !== null && typeof value === "object";
    }
    exports.IsObject = IsObject;
    function IsArray(value) {
      return Array.isArray(value) && !ArrayBuffer.isView(value);
    }
    exports.IsArray = IsArray;
    function IsUndefined(value) {
      return value === void 0;
    }
    exports.IsUndefined = IsUndefined;
    function IsNull(value) {
      return value === null;
    }
    exports.IsNull = IsNull;
    function IsBoolean(value) {
      return typeof value === "boolean";
    }
    exports.IsBoolean = IsBoolean;
    function IsNumber(value) {
      return typeof value === "number";
    }
    exports.IsNumber = IsNumber;
    function IsInteger(value) {
      return IsNumber(value) && Number.isInteger(value);
    }
    exports.IsInteger = IsInteger;
    function IsBigInt(value) {
      return typeof value === "bigint";
    }
    exports.IsBigInt = IsBigInt;
    function IsString(value) {
      return typeof value === "string";
    }
    exports.IsString = IsString;
    function IsFunction(value) {
      return typeof value === "function";
    }
    exports.IsFunction = IsFunction;
    function IsSymbol(value) {
      return typeof value === "symbol";
    }
    exports.IsSymbol = IsSymbol;
    function IsValueType(value) {
      return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
    }
    exports.IsValueType = IsValueType;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/system/system.js
var require_system = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/system/system.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultErrorFunction = exports.TypeSystemPolicy = exports.TypeSystemErrorFunction = exports.TypeSystem = exports.TypeSystemDuplicateFormat = exports.TypeSystemDuplicateTypeKind = void 0;
    var guard_1 = require_guard();
    var errors_1 = require_errors();
    var Types = require_typebox();
    var TypeSystemDuplicateTypeKind = class extends Types.TypeBoxError {
      constructor(kind) {
        super(`Duplicate type kind '${kind}' detected`);
      }
    };
    exports.TypeSystemDuplicateTypeKind = TypeSystemDuplicateTypeKind;
    var TypeSystemDuplicateFormat = class extends Types.TypeBoxError {
      constructor(kind) {
        super(`Duplicate string format '${kind}' detected`);
      }
    };
    exports.TypeSystemDuplicateFormat = TypeSystemDuplicateFormat;
    var TypeSystem;
    (function(TypeSystem2) {
      function Type(kind, check) {
        if (Types.TypeRegistry.Has(kind))
          throw new TypeSystemDuplicateTypeKind(kind);
        Types.TypeRegistry.Set(kind, check);
        return (options = {}) => Types.Type.Unsafe({ ...options, [Types.Kind]: kind });
      }
      TypeSystem2.Type = Type;
      function Format(format, check) {
        if (Types.FormatRegistry.Has(format))
          throw new TypeSystemDuplicateFormat(format);
        Types.FormatRegistry.Set(format, check);
        return format;
      }
      TypeSystem2.Format = Format;
    })(TypeSystem || (exports.TypeSystem = TypeSystem = {}));
    var TypeSystemErrorFunction;
    (function(TypeSystemErrorFunction2) {
      let errorMessageFunction = DefaultErrorFunction;
      function Reset() {
        errorMessageFunction = DefaultErrorFunction;
      }
      TypeSystemErrorFunction2.Reset = Reset;
      function Set2(callback) {
        errorMessageFunction = callback;
      }
      TypeSystemErrorFunction2.Set = Set2;
      function Get() {
        return errorMessageFunction;
      }
      TypeSystemErrorFunction2.Get = Get;
    })(TypeSystemErrorFunction || (exports.TypeSystemErrorFunction = TypeSystemErrorFunction = {}));
    var TypeSystemPolicy;
    (function(TypeSystemPolicy2) {
      TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
      TypeSystemPolicy2.AllowArrayObject = false;
      TypeSystemPolicy2.AllowNaN = false;
      TypeSystemPolicy2.AllowNullVoid = false;
      function IsExactOptionalProperty(value, key) {
        return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
      }
      TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
      function IsObjectLike(value) {
        const isObject = (0, guard_1.IsObject)(value);
        return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !(0, guard_1.IsArray)(value);
      }
      TypeSystemPolicy2.IsObjectLike = IsObjectLike;
      function IsRecordLike(value) {
        return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
      }
      TypeSystemPolicy2.IsRecordLike = IsRecordLike;
      function IsNumberLike(value) {
        const isNumber = (0, guard_1.IsNumber)(value);
        return TypeSystemPolicy2.AllowNaN ? isNumber : isNumber && Number.isFinite(value);
      }
      TypeSystemPolicy2.IsNumberLike = IsNumberLike;
      function IsVoidLike(value) {
        const isUndefined = (0, guard_1.IsUndefined)(value);
        return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
      }
      TypeSystemPolicy2.IsVoidLike = IsVoidLike;
    })(TypeSystemPolicy || (exports.TypeSystemPolicy = TypeSystemPolicy = {}));
    function DefaultErrorFunction(schema, errorType) {
      switch (errorType) {
        case errors_1.ValueErrorType.ArrayContains:
          return "Expected array to contain at least one matching value";
        case errors_1.ValueErrorType.ArrayMaxContains:
          return `Expected array to contain no more than ${schema.maxContains} matching values`;
        case errors_1.ValueErrorType.ArrayMinContains:
          return `Expected array to contain at least ${schema.minContains} matching values`;
        case errors_1.ValueErrorType.ArrayMaxItems:
          return `Expected array length to be less or equal to ${schema.maxItems}`;
        case errors_1.ValueErrorType.ArrayMinItems:
          return `Expected array length to be greater or equal to ${schema.minItems}`;
        case errors_1.ValueErrorType.ArrayUniqueItems:
          return "Expected array elements to be unique";
        case errors_1.ValueErrorType.Array:
          return "Expected array";
        case errors_1.ValueErrorType.AsyncIterator:
          return "Expected AsyncIterator";
        case errors_1.ValueErrorType.BigIntExclusiveMaximum:
          return `Expected bigint to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.BigIntExclusiveMinimum:
          return `Expected bigint to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.BigIntMaximum:
          return `Expected bigint to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.BigIntMinimum:
          return `Expected bigint to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.BigIntMultipleOf:
          return `Expected bigint to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.BigInt:
          return "Expected bigint";
        case errors_1.ValueErrorType.Boolean:
          return "Expected boolean";
        case errors_1.ValueErrorType.DateExclusiveMinimumTimestamp:
          return `Expected Date timestamp to be greater than ${schema.exclusiveMinimumTimestamp}`;
        case errors_1.ValueErrorType.DateExclusiveMaximumTimestamp:
          return `Expected Date timestamp to be less than ${schema.exclusiveMaximumTimestamp}`;
        case errors_1.ValueErrorType.DateMinimumTimestamp:
          return `Expected Date timestamp to be greater or equal to ${schema.minimumTimestamp}`;
        case errors_1.ValueErrorType.DateMaximumTimestamp:
          return `Expected Date timestamp to be less or equal to ${schema.maximumTimestamp}`;
        case errors_1.ValueErrorType.DateMultipleOfTimestamp:
          return `Expected Date timestamp to be a multiple of ${schema.multipleOfTimestamp}`;
        case errors_1.ValueErrorType.Date:
          return "Expected Date";
        case errors_1.ValueErrorType.Function:
          return "Expected function";
        case errors_1.ValueErrorType.IntegerExclusiveMaximum:
          return `Expected integer to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.IntegerExclusiveMinimum:
          return `Expected integer to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.IntegerMaximum:
          return `Expected integer to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.IntegerMinimum:
          return `Expected integer to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.IntegerMultipleOf:
          return `Expected integer to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.Integer:
          return "Expected integer";
        case errors_1.ValueErrorType.IntersectUnevaluatedProperties:
          return "Unexpected property";
        case errors_1.ValueErrorType.Intersect:
          return "Expected all values to match";
        case errors_1.ValueErrorType.Iterator:
          return "Expected Iterator";
        case errors_1.ValueErrorType.Literal:
          return `Expected ${typeof schema.const === "string" ? `'${schema.const}'` : schema.const}`;
        case errors_1.ValueErrorType.Never:
          return "Never";
        case errors_1.ValueErrorType.Not:
          return "Value should not match";
        case errors_1.ValueErrorType.Null:
          return "Expected null";
        case errors_1.ValueErrorType.NumberExclusiveMaximum:
          return `Expected number to be less than ${schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.NumberExclusiveMinimum:
          return `Expected number to be greater than ${schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.NumberMaximum:
          return `Expected number to be less or equal to ${schema.maximum}`;
        case errors_1.ValueErrorType.NumberMinimum:
          return `Expected number to be greater or equal to ${schema.minimum}`;
        case errors_1.ValueErrorType.NumberMultipleOf:
          return `Expected number to be a multiple of ${schema.multipleOf}`;
        case errors_1.ValueErrorType.Number:
          return "Expected number";
        case errors_1.ValueErrorType.Object:
          return "Expected object";
        case errors_1.ValueErrorType.ObjectAdditionalProperties:
          return "Unexpected property";
        case errors_1.ValueErrorType.ObjectMaxProperties:
          return `Expected object to have no more than ${schema.maxProperties} properties`;
        case errors_1.ValueErrorType.ObjectMinProperties:
          return `Expected object to have at least ${schema.minProperties} properties`;
        case errors_1.ValueErrorType.ObjectRequiredProperty:
          return "Required property";
        case errors_1.ValueErrorType.Promise:
          return "Expected Promise";
        case errors_1.ValueErrorType.StringFormatUnknown:
          return `Unknown format '${schema.format}'`;
        case errors_1.ValueErrorType.StringFormat:
          return `Expected string to match '${schema.format}' format`;
        case errors_1.ValueErrorType.StringMaxLength:
          return `Expected string length less or equal to ${schema.maxLength}`;
        case errors_1.ValueErrorType.StringMinLength:
          return `Expected string length greater or equal to ${schema.minLength}`;
        case errors_1.ValueErrorType.StringPattern:
          return `Expected string to match '${schema.pattern}'`;
        case errors_1.ValueErrorType.String:
          return "Expected string";
        case errors_1.ValueErrorType.Symbol:
          return "Expected symbol";
        case errors_1.ValueErrorType.TupleLength:
          return `Expected tuple to have ${schema.maxItems || 0} elements`;
        case errors_1.ValueErrorType.Tuple:
          return "Expected tuple";
        case errors_1.ValueErrorType.Uint8ArrayMaxByteLength:
          return `Expected byte length less or equal to ${schema.maxByteLength}`;
        case errors_1.ValueErrorType.Uint8ArrayMinByteLength:
          return `Expected byte length greater or equal to ${schema.minByteLength}`;
        case errors_1.ValueErrorType.Uint8Array:
          return "Expected Uint8Array";
        case errors_1.ValueErrorType.Undefined:
          return "Expected undefined";
        case errors_1.ValueErrorType.Union:
          return "Expected union value";
        case errors_1.ValueErrorType.Void:
          return "Expected void";
        case errors_1.ValueErrorType.Kind:
          return `Expected kind '${schema[Types.Kind]}'`;
        default:
          return "Unknown error type";
      }
    }
    exports.DefaultErrorFunction = DefaultErrorFunction;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/deref.js
var require_deref = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/deref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deref = exports.TypeDereferenceError = void 0;
    var typebox_1 = require_typebox();
    var TypeDereferenceError = class extends typebox_1.TypeBoxError {
      constructor(schema) {
        super(`Unable to dereference schema with $id '${schema.$id}'`);
        this.schema = schema;
      }
    };
    exports.TypeDereferenceError = TypeDereferenceError;
    function Deref(schema, references) {
      const index2 = references.findIndex((target) => target.$id === schema.$ref);
      if (index2 === -1)
        throw new TypeDereferenceError(schema);
      return references[index2];
    }
    exports.Deref = Deref;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/hash.js
var require_hash = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hash = exports.ByteMarker = exports.ValueHashError = void 0;
    var guard_1 = require_guard();
    var ValueHashError = class extends Error {
      constructor(value) {
        super(`Unable to hash value`);
        this.value = value;
      }
    };
    exports.ValueHashError = ValueHashError;
    var ByteMarker;
    (function(ByteMarker2) {
      ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
      ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
      ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
      ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
      ByteMarker2[ByteMarker2["String"] = 4] = "String";
      ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
      ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
      ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
      ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
      ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
      ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
    })(ByteMarker || (exports.ByteMarker = ByteMarker = {}));
    var Accumulator = BigInt("14695981039346656037");
    var [Prime, Size] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
    var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
    var F64 = new Float64Array(1);
    var F64In = new DataView(F64.buffer);
    var F64Out = new Uint8Array(F64.buffer);
    function* NumberToBytes(value) {
      const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
      for (let i = 0; i < byteCount; i++) {
        yield value >> 8 * (byteCount - 1 - i) & 255;
      }
    }
    function ArrayType(value) {
      FNV1A64(ByteMarker.Array);
      for (const item of value) {
        Visit(item);
      }
    }
    function BooleanType(value) {
      FNV1A64(ByteMarker.Boolean);
      FNV1A64(value ? 1 : 0);
    }
    function BigIntType(value) {
      FNV1A64(ByteMarker.BigInt);
      F64In.setBigInt64(0, value);
      for (const byte2 of F64Out) {
        FNV1A64(byte2);
      }
    }
    function DateType(value) {
      FNV1A64(ByteMarker.Date);
      Visit(value.getTime());
    }
    function NullType(value) {
      FNV1A64(ByteMarker.Null);
    }
    function NumberType(value) {
      FNV1A64(ByteMarker.Number);
      F64In.setFloat64(0, value);
      for (const byte2 of F64Out) {
        FNV1A64(byte2);
      }
    }
    function ObjectType(value) {
      FNV1A64(ByteMarker.Object);
      for (const key of globalThis.Object.keys(value).sort()) {
        Visit(key);
        Visit(value[key]);
      }
    }
    function StringType(value) {
      FNV1A64(ByteMarker.String);
      for (let i = 0; i < value.length; i++) {
        for (const byte2 of NumberToBytes(value.charCodeAt(i))) {
          FNV1A64(byte2);
        }
      }
    }
    function SymbolType(value) {
      FNV1A64(ByteMarker.Symbol);
      Visit(value.description);
    }
    function Uint8ArrayType(value) {
      FNV1A64(ByteMarker.Uint8Array);
      for (let i = 0; i < value.length; i++) {
        FNV1A64(value[i]);
      }
    }
    function UndefinedType(value) {
      return FNV1A64(ByteMarker.Undefined);
    }
    function Visit(value) {
      if ((0, guard_1.IsArray)(value))
        return ArrayType(value);
      if ((0, guard_1.IsBoolean)(value))
        return BooleanType(value);
      if ((0, guard_1.IsBigInt)(value))
        return BigIntType(value);
      if ((0, guard_1.IsDate)(value))
        return DateType(value);
      if ((0, guard_1.IsNull)(value))
        return NullType(value);
      if ((0, guard_1.IsNumber)(value))
        return NumberType(value);
      if ((0, guard_1.IsPlainObject)(value))
        return ObjectType(value);
      if ((0, guard_1.IsString)(value))
        return StringType(value);
      if ((0, guard_1.IsSymbol)(value))
        return SymbolType(value);
      if ((0, guard_1.IsUint8Array)(value))
        return Uint8ArrayType(value);
      if ((0, guard_1.IsUndefined)(value))
        return UndefinedType(value);
      throw new ValueHashError(value);
    }
    function FNV1A64(byte2) {
      Accumulator = Accumulator ^ Bytes[byte2];
      Accumulator = Accumulator * Prime % Size;
    }
    function Hash2(value) {
      Accumulator = BigInt("14695981039346656037");
      Visit(value);
      return Accumulator;
    }
    exports.Hash = Hash2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/errors/errors.js
var require_errors = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/errors/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Errors = exports.ValueErrorIterator = exports.EscapeKey = exports.ValueErrorsUnknownTypeError = exports.ValueErrorType = void 0;
    var guard_1 = require_guard();
    var system_1 = require_system();
    var deref_1 = require_deref();
    var hash_1 = require_hash();
    var Types = require_typebox();
    var ValueErrorType;
    (function(ValueErrorType2) {
      ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
      ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
      ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
      ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
      ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
      ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
      ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
      ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
      ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
      ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
      ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
      ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
      ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
      ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
      ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
      ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
      ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
      ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
      ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
      ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
      ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
      ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
      ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
      ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
      ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
      ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
      ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
      ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
      ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
      ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
      ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
      ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
      ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
      ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
      ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
      ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
      ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
      ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
      ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
      ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 48] = "StringFormatUnknown";
      ValueErrorType2[ValueErrorType2["StringFormat"] = 49] = "StringFormat";
      ValueErrorType2[ValueErrorType2["StringMaxLength"] = 50] = "StringMaxLength";
      ValueErrorType2[ValueErrorType2["StringMinLength"] = 51] = "StringMinLength";
      ValueErrorType2[ValueErrorType2["StringPattern"] = 52] = "StringPattern";
      ValueErrorType2[ValueErrorType2["String"] = 53] = "String";
      ValueErrorType2[ValueErrorType2["Symbol"] = 54] = "Symbol";
      ValueErrorType2[ValueErrorType2["TupleLength"] = 55] = "TupleLength";
      ValueErrorType2[ValueErrorType2["Tuple"] = 56] = "Tuple";
      ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 57] = "Uint8ArrayMaxByteLength";
      ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 58] = "Uint8ArrayMinByteLength";
      ValueErrorType2[ValueErrorType2["Uint8Array"] = 59] = "Uint8Array";
      ValueErrorType2[ValueErrorType2["Undefined"] = 60] = "Undefined";
      ValueErrorType2[ValueErrorType2["Union"] = 61] = "Union";
      ValueErrorType2[ValueErrorType2["Void"] = 62] = "Void";
    })(ValueErrorType || (exports.ValueErrorType = ValueErrorType = {}));
    var ValueErrorsUnknownTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.ValueErrorsUnknownTypeError = ValueErrorsUnknownTypeError;
    function EscapeKey(key) {
      return key.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    exports.EscapeKey = EscapeKey;
    function IsDefined(value) {
      return value !== void 0;
    }
    var ValueErrorIterator = class {
      constructor(iterator) {
        this.iterator = iterator;
      }
      [Symbol.iterator]() {
        return this.iterator;
      }
      /** Returns the first value error or undefined if no errors */
      First() {
        const next = this.iterator.next();
        return next.done ? void 0 : next.value;
      }
    };
    exports.ValueErrorIterator = ValueErrorIterator;
    function Create(type, schema, path, value) {
      return { type, schema, path, value, message: system_1.TypeSystemErrorFunction.Get()(schema, type) };
    }
    function* TAny(schema, references, path, value) {
    }
    function* TArray(schema, references, path, value) {
      if (!(0, guard_1.IsArray)(value)) {
        return yield Create(ValueErrorType.Array, schema, path, value);
      }
      if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
      }
      if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
      }
      for (let i = 0; i < value.length; i++) {
        yield* Visit(schema.items, references, `${path}/${i}`, value[i]);
      }
      if (schema.uniqueItems === true && !function() {
        const set = /* @__PURE__ */ new Set();
        for (const element of value) {
          const hashed = (0, hash_1.Hash)(element);
          if (set.has(hashed)) {
            return false;
          } else {
            set.add(hashed);
          }
        }
        return true;
      }()) {
        yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
      }
      if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
        return;
      }
      const containsSchema = IsDefined(schema.contains) ? schema.contains : Types.Type.Never();
      const containsCount = value.reduce((acc, value2, index2) => Visit(containsSchema, references, `${path}${index2}`, value2).next().done === true ? acc + 1 : acc, 0);
      if (containsCount === 0) {
        yield Create(ValueErrorType.ArrayContains, schema, path, value);
      }
      if ((0, guard_1.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
      }
      if ((0, guard_1.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
      }
    }
    function* TAsyncIterator(schema, references, path, value) {
      if (!(0, guard_1.IsAsyncIterator)(value))
        yield Create(ValueErrorType.AsyncIterator, schema, path, value);
    }
    function* TBigInt(schema, references, path, value) {
      if (!(0, guard_1.IsBigInt)(value))
        return yield Create(ValueErrorType.BigInt, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
      }
    }
    function* TBoolean(schema, references, path, value) {
      if (!(0, guard_1.IsBoolean)(value))
        yield Create(ValueErrorType.Boolean, schema, path, value);
    }
    function* TConstructor(schema, references, path, value) {
      yield* Visit(schema.returns, references, path, value.prototype);
    }
    function* TDate(schema, references, path, value) {
      if (!(0, guard_1.IsDate)(value))
        return yield Create(ValueErrorType.Date, schema, path, value);
      if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
      }
    }
    function* TFunction(schema, references, path, value) {
      if (!(0, guard_1.IsFunction)(value))
        yield Create(ValueErrorType.Function, schema, path, value);
    }
    function* TInteger(schema, references, path, value) {
      if (!(0, guard_1.IsInteger)(value))
        return yield Create(ValueErrorType.Integer, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
      }
    }
    function* TIntersect(schema, references, path, value) {
      for (const inner of schema.allOf) {
        const next = Visit(inner, references, path, value).next();
        if (!next.done) {
          yield Create(ValueErrorType.Intersect, schema, path, value);
          yield next.value;
        }
      }
      if (schema.unevaluatedProperties === false) {
        const keyCheck = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
          if (!keyCheck.test(valueKey)) {
            yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
          }
        }
      }
      if (typeof schema.unevaluatedProperties === "object") {
        const keyCheck = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
          if (!keyCheck.test(valueKey)) {
            const next = Visit(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
            if (!next.done)
              yield next.value;
          }
        }
      }
    }
    function* TIterator(schema, references, path, value) {
      if (!(0, guard_1.IsIterator)(value))
        yield Create(ValueErrorType.Iterator, schema, path, value);
    }
    function* TLiteral(schema, references, path, value) {
      if (!(value === schema.const))
        yield Create(ValueErrorType.Literal, schema, path, value);
    }
    function* TNever(schema, references, path, value) {
      yield Create(ValueErrorType.Never, schema, path, value);
    }
    function* TNot(schema, references, path, value) {
      if (Visit(schema.not, references, path, value).next().done === true)
        yield Create(ValueErrorType.Not, schema, path, value);
    }
    function* TNull(schema, references, path, value) {
      if (!(0, guard_1.IsNull)(value))
        yield Create(ValueErrorType.Null, schema, path, value);
    }
    function* TNumber(schema, references, path, value) {
      if (!system_1.TypeSystemPolicy.IsNumberLike(value))
        return yield Create(ValueErrorType.Number, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.NumberMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.NumberMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
      }
    }
    function* TObject(schema, references, path, value) {
      if (!system_1.TypeSystemPolicy.IsObjectLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
      }
      const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
      const knownKeys = Object.getOwnPropertyNames(schema.properties);
      const unknownKeys = Object.getOwnPropertyNames(value);
      for (const requiredKey of requiredKeys) {
        if (unknownKeys.includes(requiredKey))
          continue;
        yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
      }
      if (schema.additionalProperties === false) {
        for (const valueKey of unknownKeys) {
          if (!knownKeys.includes(valueKey)) {
            yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
          }
        }
      }
      if (typeof schema.additionalProperties === "object") {
        for (const valueKey of unknownKeys) {
          if (knownKeys.includes(valueKey))
            continue;
          yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
        }
      }
      for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
          yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
          if (Types.ExtendsUndefined.Check(schema) && !(knownKey in value)) {
            yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
          }
        } else {
          if (system_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
            yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
          }
        }
      }
    }
    function* TPromise(schema, references, path, value) {
      if (!(0, guard_1.IsPromise)(value))
        yield Create(ValueErrorType.Promise, schema, path, value);
    }
    function* TRecord(schema, references, path, value) {
      if (!system_1.TypeSystemPolicy.IsRecordLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
      }
      const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
      const regex2 = new RegExp(patternKey);
      for (const [propertyKey, propertyValue] of Object.entries(value)) {
        if (regex2.test(propertyKey))
          yield* Visit(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
      }
      if (typeof schema.additionalProperties === "object") {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
          if (!regex2.test(propertyKey))
            yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
      }
      if (schema.additionalProperties === false) {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
          if (regex2.test(propertyKey))
            continue;
          return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
      }
    }
    function* TRef(schema, references, path, value) {
      yield* Visit((0, deref_1.Deref)(schema, references), references, path, value);
    }
    function* TString(schema, references, path, value) {
      if (!(0, guard_1.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
      if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
      }
      if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
      }
      if ((0, guard_1.IsString)(schema.pattern)) {
        const regex2 = new RegExp(schema.pattern);
        if (!regex2.test(value)) {
          yield Create(ValueErrorType.StringPattern, schema, path, value);
        }
      }
      if ((0, guard_1.IsString)(schema.format)) {
        if (!Types.FormatRegistry.Has(schema.format)) {
          yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
        } else {
          const format = Types.FormatRegistry.Get(schema.format);
          if (!format(value)) {
            yield Create(ValueErrorType.StringFormat, schema, path, value);
          }
        }
      }
    }
    function* TSymbol(schema, references, path, value) {
      if (!(0, guard_1.IsSymbol)(value))
        yield Create(ValueErrorType.Symbol, schema, path, value);
    }
    function* TTemplateLiteral(schema, references, path, value) {
      if (!(0, guard_1.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
      const regex2 = new RegExp(schema.pattern);
      if (!regex2.test(value)) {
        yield Create(ValueErrorType.StringPattern, schema, path, value);
      }
    }
    function* TThis(schema, references, path, value) {
      yield* Visit((0, deref_1.Deref)(schema, references), references, path, value);
    }
    function* TTuple(schema, references, path, value) {
      if (!(0, guard_1.IsArray)(value))
        return yield Create(ValueErrorType.Tuple, schema, path, value);
      if (schema.items === void 0 && !(value.length === 0)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
      }
      if (!(value.length === schema.maxItems)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
      }
      if (!schema.items) {
        return;
      }
      for (let i = 0; i < schema.items.length; i++) {
        yield* Visit(schema.items[i], references, `${path}/${i}`, value[i]);
      }
    }
    function* TUndefined(schema, references, path, value) {
      if (!(0, guard_1.IsUndefined)(value))
        yield Create(ValueErrorType.Undefined, schema, path, value);
    }
    function* TUnion(schema, references, path, value) {
      let count = 0;
      for (const subschema of schema.anyOf) {
        const errors = [...Visit(subschema, references, path, value)];
        if (errors.length === 0)
          return;
        count += errors.length;
      }
      if (count > 0) {
        yield Create(ValueErrorType.Union, schema, path, value);
      }
    }
    function* TUint8Array(schema, references, path, value) {
      if (!(0, guard_1.IsUint8Array)(value))
        return yield Create(ValueErrorType.Uint8Array, schema, path, value);
      if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
      }
      if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
      }
    }
    function* TUnknown(schema, references, path, value) {
    }
    function* TVoid(schema, references, path, value) {
      if (!system_1.TypeSystemPolicy.IsVoidLike(value))
        yield Create(ValueErrorType.Void, schema, path, value);
    }
    function* TKind(schema, references, path, value) {
      const check = Types.TypeRegistry.Get(schema[Types.Kind]);
      if (!check(schema, value))
        yield Create(ValueErrorType.Kind, schema, path, value);
    }
    function* Visit(schema, references, path, value) {
      const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[Types.Kind]) {
        case "Any":
          return yield* TAny(schema_, references_, path, value);
        case "Array":
          return yield* TArray(schema_, references_, path, value);
        case "AsyncIterator":
          return yield* TAsyncIterator(schema_, references_, path, value);
        case "BigInt":
          return yield* TBigInt(schema_, references_, path, value);
        case "Boolean":
          return yield* TBoolean(schema_, references_, path, value);
        case "Constructor":
          return yield* TConstructor(schema_, references_, path, value);
        case "Date":
          return yield* TDate(schema_, references_, path, value);
        case "Function":
          return yield* TFunction(schema_, references_, path, value);
        case "Integer":
          return yield* TInteger(schema_, references_, path, value);
        case "Intersect":
          return yield* TIntersect(schema_, references_, path, value);
        case "Iterator":
          return yield* TIterator(schema_, references_, path, value);
        case "Literal":
          return yield* TLiteral(schema_, references_, path, value);
        case "Never":
          return yield* TNever(schema_, references_, path, value);
        case "Not":
          return yield* TNot(schema_, references_, path, value);
        case "Null":
          return yield* TNull(schema_, references_, path, value);
        case "Number":
          return yield* TNumber(schema_, references_, path, value);
        case "Object":
          return yield* TObject(schema_, references_, path, value);
        case "Promise":
          return yield* TPromise(schema_, references_, path, value);
        case "Record":
          return yield* TRecord(schema_, references_, path, value);
        case "Ref":
          return yield* TRef(schema_, references_, path, value);
        case "String":
          return yield* TString(schema_, references_, path, value);
        case "Symbol":
          return yield* TSymbol(schema_, references_, path, value);
        case "TemplateLiteral":
          return yield* TTemplateLiteral(schema_, references_, path, value);
        case "This":
          return yield* TThis(schema_, references_, path, value);
        case "Tuple":
          return yield* TTuple(schema_, references_, path, value);
        case "Undefined":
          return yield* TUndefined(schema_, references_, path, value);
        case "Union":
          return yield* TUnion(schema_, references_, path, value);
        case "Uint8Array":
          return yield* TUint8Array(schema_, references_, path, value);
        case "Unknown":
          return yield* TUnknown(schema_, references_, path, value);
        case "Void":
          return yield* TVoid(schema_, references_, path, value);
        default:
          if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
            throw new ValueErrorsUnknownTypeError(schema);
          return yield* TKind(schema_, references_, path, value);
      }
    }
    function Errors(...args) {
      const iterator = args.length === 3 ? Visit(args[0], args[1], "", args[2]) : Visit(args[0], [], "", args[1]);
      return new ValueErrorIterator(iterator);
    }
    exports.Errors = Errors;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/errors/index.js
var require_errors2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/errors/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m2[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p in m2)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m2, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_errors(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/system/index.js
var require_system2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/system/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m2[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p in m2)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m2, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueErrorType = void 0;
    var errors_1 = require_errors();
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return errors_1.ValueErrorType;
    } });
    __exportStar(require_system(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/check.js
var require_check = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Check = exports.ValueCheckUnknownTypeError = void 0;
    var guard_1 = require_guard();
    var index_1 = require_system2();
    var deref_1 = require_deref();
    var hash_1 = require_hash();
    var Types = require_typebox();
    var ValueCheckUnknownTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super(`Unknown type`);
        this.schema = schema;
      }
    };
    exports.ValueCheckUnknownTypeError = ValueCheckUnknownTypeError;
    function IsAnyOrUnknown(schema) {
      return schema[Types.Kind] === "Any" || schema[Types.Kind] === "Unknown";
    }
    function IsDefined(value) {
      return value !== void 0;
    }
    function TAny(schema, references, value) {
      return true;
    }
    function TArray(schema, references, value) {
      if (!(0, guard_1.IsArray)(value))
        return false;
      if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        return false;
      }
      if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        return false;
      }
      if (!value.every((value2) => Visit(schema.items, references, value2))) {
        return false;
      }
      if (schema.uniqueItems === true && !function() {
        const set = /* @__PURE__ */ new Set();
        for (const element of value) {
          const hashed = (0, hash_1.Hash)(element);
          if (set.has(hashed)) {
            return false;
          } else {
            set.add(hashed);
          }
        }
        return true;
      }()) {
        return false;
      }
      if (!(IsDefined(schema.contains) || (0, guard_1.IsNumber)(schema.minContains) || (0, guard_1.IsNumber)(schema.maxContains))) {
        return true;
      }
      const containsSchema = IsDefined(schema.contains) ? schema.contains : Types.Type.Never();
      const containsCount = value.reduce((acc, value2) => Visit(containsSchema, references, value2) ? acc + 1 : acc, 0);
      if (containsCount === 0) {
        return false;
      }
      if ((0, guard_1.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        return false;
      }
      if ((0, guard_1.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        return false;
      }
      return true;
    }
    function TAsyncIterator(schema, references, value) {
      return (0, guard_1.IsAsyncIterator)(value);
    }
    function TBigInt(schema, references, value) {
      if (!(0, guard_1.IsBigInt)(value))
        return false;
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        return false;
      }
      return true;
    }
    function TBoolean(schema, references, value) {
      return (0, guard_1.IsBoolean)(value);
    }
    function TConstructor(schema, references, value) {
      return Visit(schema.returns, references, value.prototype);
    }
    function TDate(schema, references, value) {
      if (!(0, guard_1.IsDate)(value))
        return false;
      if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        return false;
      }
      return true;
    }
    function TFunction(schema, references, value) {
      return (0, guard_1.IsFunction)(value);
    }
    function TInteger(schema, references, value) {
      if (!(0, guard_1.IsInteger)(value)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
      }
      return true;
    }
    function TIntersect(schema, references, value) {
      const check1 = schema.allOf.every((schema2) => Visit(schema2, references, value));
      if (schema.unevaluatedProperties === false) {
        const keyPattern = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
        return check1 && check2;
      } else if (Types.TypeGuard.TSchema(schema.unevaluatedProperties)) {
        const keyCheck = new RegExp(Types.KeyResolver.ResolvePattern(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit(schema.unevaluatedProperties, references, value[key]));
        return check1 && check2;
      } else {
        return check1;
      }
    }
    function TIterator(schema, references, value) {
      return (0, guard_1.IsIterator)(value);
    }
    function TLiteral(schema, references, value) {
      return value === schema.const;
    }
    function TNever(schema, references, value) {
      return false;
    }
    function TNot(schema, references, value) {
      return !Visit(schema.not, references, value);
    }
    function TNull(schema, references, value) {
      return (0, guard_1.IsNull)(value);
    }
    function TNumber(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsNumberLike(value))
        return false;
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
      }
      return true;
    }
    function TObject(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsObjectLike(value))
        return false;
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
      }
      const knownKeys = Object.getOwnPropertyNames(schema.properties);
      for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
          if (!Visit(property, references, value[knownKey])) {
            return false;
          }
          if ((Types.ExtendsUndefined.Check(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
            return false;
          }
        } else {
          if (index_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit(property, references, value[knownKey])) {
            return false;
          }
        }
      }
      if (schema.additionalProperties === false) {
        const valueKeys = Object.getOwnPropertyNames(value);
        if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
          return true;
        } else {
          return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
        }
      } else if (typeof schema.additionalProperties === "object") {
        const valueKeys = Object.getOwnPropertyNames(value);
        return valueKeys.every((key) => knownKeys.includes(key) || Visit(schema.additionalProperties, references, value[key]));
      } else {
        return true;
      }
    }
    function TPromise(schema, references, value) {
      return (0, guard_1.IsPromise)(value);
    }
    function TRecord(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsRecordLike(value)) {
        return false;
      }
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
      }
      const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
      const regex2 = new RegExp(patternKey);
      const check1 = Object.entries(value).every(([key, value2]) => {
        return regex2.test(key) ? Visit(patternSchema, references, value2) : true;
      });
      const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
        return !regex2.test(key) ? Visit(schema.additionalProperties, references, value2) : true;
      }) : true;
      const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
        return regex2.test(key);
      }) : true;
      return check1 && check2 && check3;
    }
    function TRef(schema, references, value) {
      return Visit((0, deref_1.Deref)(schema, references), references, value);
    }
    function TString(schema, references, value) {
      if (!(0, guard_1.IsString)(value)) {
        return false;
      }
      if (IsDefined(schema.minLength)) {
        if (!(value.length >= schema.minLength))
          return false;
      }
      if (IsDefined(schema.maxLength)) {
        if (!(value.length <= schema.maxLength))
          return false;
      }
      if (IsDefined(schema.pattern)) {
        const regex2 = new RegExp(schema.pattern);
        if (!regex2.test(value))
          return false;
      }
      if (IsDefined(schema.format)) {
        if (!Types.FormatRegistry.Has(schema.format))
          return false;
        const func = Types.FormatRegistry.Get(schema.format);
        return func(value);
      }
      return true;
    }
    function TSymbol(schema, references, value) {
      return (0, guard_1.IsSymbol)(value);
    }
    function TTemplateLiteral(schema, references, value) {
      return (0, guard_1.IsString)(value) && new RegExp(schema.pattern).test(value);
    }
    function TThis(schema, references, value) {
      return Visit((0, deref_1.Deref)(schema, references), references, value);
    }
    function TTuple(schema, references, value) {
      if (!(0, guard_1.IsArray)(value)) {
        return false;
      }
      if (schema.items === void 0 && !(value.length === 0)) {
        return false;
      }
      if (!(value.length === schema.maxItems)) {
        return false;
      }
      if (!schema.items) {
        return true;
      }
      for (let i = 0; i < schema.items.length; i++) {
        if (!Visit(schema.items[i], references, value[i]))
          return false;
      }
      return true;
    }
    function TUndefined(schema, references, value) {
      return (0, guard_1.IsUndefined)(value);
    }
    function TUnion(schema, references, value) {
      return schema.anyOf.some((inner) => Visit(inner, references, value));
    }
    function TUint8Array(schema, references, value) {
      if (!(0, guard_1.IsUint8Array)(value)) {
        return false;
      }
      if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        return false;
      }
      if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        return false;
      }
      return true;
    }
    function TUnknown(schema, references, value) {
      return true;
    }
    function TVoid(schema, references, value) {
      return index_1.TypeSystemPolicy.IsVoidLike(value);
    }
    function TKind(schema, references, value) {
      if (!Types.TypeRegistry.Has(schema[Types.Kind]))
        return false;
      const func = Types.TypeRegistry.Get(schema[Types.Kind]);
      return func(schema, value);
    }
    function Visit(schema, references, value) {
      const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[Types.Kind]) {
        case "Any":
          return TAny(schema_, references_, value);
        case "Array":
          return TArray(schema_, references_, value);
        case "AsyncIterator":
          return TAsyncIterator(schema_, references_, value);
        case "BigInt":
          return TBigInt(schema_, references_, value);
        case "Boolean":
          return TBoolean(schema_, references_, value);
        case "Constructor":
          return TConstructor(schema_, references_, value);
        case "Date":
          return TDate(schema_, references_, value);
        case "Function":
          return TFunction(schema_, references_, value);
        case "Integer":
          return TInteger(schema_, references_, value);
        case "Intersect":
          return TIntersect(schema_, references_, value);
        case "Iterator":
          return TIterator(schema_, references_, value);
        case "Literal":
          return TLiteral(schema_, references_, value);
        case "Never":
          return TNever(schema_, references_, value);
        case "Not":
          return TNot(schema_, references_, value);
        case "Null":
          return TNull(schema_, references_, value);
        case "Number":
          return TNumber(schema_, references_, value);
        case "Object":
          return TObject(schema_, references_, value);
        case "Promise":
          return TPromise(schema_, references_, value);
        case "Record":
          return TRecord(schema_, references_, value);
        case "Ref":
          return TRef(schema_, references_, value);
        case "String":
          return TString(schema_, references_, value);
        case "Symbol":
          return TSymbol(schema_, references_, value);
        case "TemplateLiteral":
          return TTemplateLiteral(schema_, references_, value);
        case "This":
          return TThis(schema_, references_, value);
        case "Tuple":
          return TTuple(schema_, references_, value);
        case "Undefined":
          return TUndefined(schema_, references_, value);
        case "Union":
          return TUnion(schema_, references_, value);
        case "Uint8Array":
          return TUint8Array(schema_, references_, value);
        case "Unknown":
          return TUnknown(schema_, references_, value);
        case "Void":
          return TVoid(schema_, references_, value);
        default:
          if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
            throw new ValueCheckUnknownTypeError(schema_);
          return TKind(schema_, references_, value);
      }
    }
    function Check(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    exports.Check = Check;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/transform.js
var require_transform = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/transform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EncodeTransform = exports.DecodeTransform = exports.HasTransform = exports.TransformEncodeError = exports.TransformDecodeError = exports.TransformEncodeCheckError = exports.TransformDecodeCheckError = void 0;
    var guard_1 = require_guard();
    var deref_1 = require_deref();
    var check_1 = require_check();
    var Types = require_typebox();
    var TransformDecodeCheckError = class extends Types.TypeBoxError {
      constructor(schema, value, error) {
        super(`Unable to decode due to invalid value`);
        this.schema = schema;
        this.value = value;
        this.error = error;
      }
    };
    exports.TransformDecodeCheckError = TransformDecodeCheckError;
    var TransformEncodeCheckError = class extends Types.TypeBoxError {
      constructor(schema, value, error) {
        super(`Unable to encode due to invalid value`);
        this.schema = schema;
        this.value = value;
        this.error = error;
      }
    };
    exports.TransformEncodeCheckError = TransformEncodeCheckError;
    var TransformDecodeError = class extends Types.TypeBoxError {
      constructor(schema, value, error) {
        super(`${error instanceof Error ? error.message : "Unknown error"}`);
        this.schema = schema;
        this.value = value;
      }
    };
    exports.TransformDecodeError = TransformDecodeError;
    var TransformEncodeError = class extends Types.TypeBoxError {
      constructor(schema, value, error) {
        super(`${error instanceof Error ? error.message : "Unknown error"}`);
        this.schema = schema;
        this.value = value;
      }
    };
    exports.TransformEncodeError = TransformEncodeError;
    var HasTransform;
    (function(HasTransform2) {
      function TArray(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.items, references);
      }
      function TAsyncIterator(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.items, references);
      }
      function TConstructor(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.returns, references) || schema.parameters.some((schema2) => Visit(schema2, references));
      }
      function TFunction(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.returns, references) || schema.parameters.some((schema2) => Visit(schema2, references));
      }
      function TIntersect(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Types.TypeGuard.TTransform(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit(schema2, references));
      }
      function TIterator(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.items, references);
      }
      function TNot(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.not, references);
      }
      function TObject(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Object.values(schema.properties).some((schema2) => Visit(schema2, references)) || Types.TypeGuard.TSchema(schema.additionalProperties) && Visit(schema.additionalProperties, references);
      }
      function TPromise(schema, references) {
        return Types.TypeGuard.TTransform(schema) || Visit(schema.item, references);
      }
      function TRecord(schema, references) {
        const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
        const property = schema.patternProperties[pattern];
        return Types.TypeGuard.TTransform(schema) || Visit(property, references) || Types.TypeGuard.TSchema(schema.additionalProperties) && Types.TypeGuard.TTransform(schema.additionalProperties);
      }
      function TRef(schema, references) {
        if (Types.TypeGuard.TTransform(schema))
          return true;
        return Visit((0, deref_1.Deref)(schema, references), references);
      }
      function TThis(schema, references) {
        if (Types.TypeGuard.TTransform(schema))
          return true;
        return Visit((0, deref_1.Deref)(schema, references), references);
      }
      function TTuple(schema, references) {
        return Types.TypeGuard.TTransform(schema) || !(0, guard_1.IsUndefined)(schema.items) && schema.items.some((schema2) => Visit(schema2, references));
      }
      function TUnion(schema, references) {
        return Types.TypeGuard.TTransform(schema) || schema.anyOf.some((schema2) => Visit(schema2, references));
      }
      function Visit(schema, references) {
        const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
        const schema_ = schema;
        if (schema.$id && visited.has(schema.$id))
          return false;
        if (schema.$id)
          visited.add(schema.$id);
        switch (schema[Types.Kind]) {
          case "Array":
            return TArray(schema_, references_);
          case "AsyncIterator":
            return TAsyncIterator(schema_, references_);
          case "Constructor":
            return TConstructor(schema_, references_);
          case "Function":
            return TFunction(schema_, references_);
          case "Intersect":
            return TIntersect(schema_, references_);
          case "Iterator":
            return TIterator(schema_, references_);
          case "Not":
            return TNot(schema_, references_);
          case "Object":
            return TObject(schema_, references_);
          case "Promise":
            return TPromise(schema_, references_);
          case "Record":
            return TRecord(schema_, references_);
          case "Ref":
            return TRef(schema_, references_);
          case "This":
            return TThis(schema_, references_);
          case "Tuple":
            return TTuple(schema_, references_);
          case "Union":
            return TUnion(schema_, references_);
          default:
            return Types.TypeGuard.TTransform(schema);
        }
      }
      const visited = /* @__PURE__ */ new Set();
      function Has(schema, references) {
        visited.clear();
        return Visit(schema, references);
      }
      HasTransform2.Has = Has;
    })(HasTransform || (exports.HasTransform = HasTransform = {}));
    var DecodeTransform;
    (function(DecodeTransform2) {
      function Default(schema, value) {
        try {
          return Types.TypeGuard.TTransform(schema) ? schema[Types.Transform].Decode(value) : value;
        } catch (error) {
          throw new TransformDecodeError(schema, value, error);
        }
      }
      function TArray(schema, references, value) {
        return (0, guard_1.IsArray)(value) ? Default(schema, value.map((value2) => Visit(schema.items, references, value2))) : Default(schema, value);
      }
      function TIntersect(schema, references, value) {
        if (!(0, guard_1.IsPlainObject)(value) || (0, guard_1.IsValueType)(value))
          return Default(schema, value);
        const knownKeys = Types.KeyResolver.ResolveKeys(schema, { includePatterns: false });
        const knownProperties = knownKeys.reduce((value2, key) => {
          return key in value2 ? { ...value2, [key]: Visit(Types.IndexedAccessor.Resolve(schema, [key]), references, value2[key]) } : value2;
        }, value);
        if (!Types.TypeGuard.TTransform(schema.unevaluatedProperties)) {
          return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const unevaluatedProperties = schema.unevaluatedProperties;
        const unknownProperties = unknownKeys.reduce((value2, key) => {
          return !knownKeys.includes(key) ? { ...value2, [key]: Default(unevaluatedProperties, value2[key]) } : value2;
        }, knownProperties);
        return Default(schema, unknownProperties);
      }
      function TNot(schema, references, value) {
        return Default(schema, Visit(schema.not, references, value));
      }
      function TObject(schema, references, value) {
        if (!(0, guard_1.IsPlainObject)(value))
          return Default(schema, value);
        const knownKeys = Types.KeyResolver.ResolveKeys(schema, { includePatterns: false });
        const knownProperties = knownKeys.reduce((value2, key) => {
          return key in value2 ? { ...value2, [key]: Visit(schema.properties[key], references, value2[key]) } : value2;
        }, value);
        if (!Types.TypeGuard.TSchema(schema.additionalProperties)) {
          return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const additionalProperties = schema.additionalProperties;
        const unknownProperties = unknownKeys.reduce((value2, key) => {
          return !knownKeys.includes(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
        }, knownProperties);
        return Default(schema, unknownProperties);
      }
      function TRecord(schema, references, value) {
        if (!(0, guard_1.IsPlainObject)(value))
          return Default(schema, value);
        const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
        const knownKeys = new RegExp(pattern);
        const knownProperties = Object.getOwnPropertyNames(value).reduce((value2, key) => {
          return knownKeys.test(key) ? { ...value2, [key]: Visit(schema.patternProperties[pattern], references, value2[key]) } : value2;
        }, value);
        if (!Types.TypeGuard.TSchema(schema.additionalProperties)) {
          return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const additionalProperties = schema.additionalProperties;
        const unknownProperties = unknownKeys.reduce((value2, key) => {
          return !knownKeys.test(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
        }, knownProperties);
        return Default(schema, unknownProperties);
      }
      function TRef(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        return Default(schema, Visit(target, references, value));
      }
      function TThis(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        return Default(schema, Visit(target, references, value));
      }
      function TTuple(schema, references, value) {
        return (0, guard_1.IsArray)(value) && (0, guard_1.IsArray)(schema.items) ? Default(schema, schema.items.map((schema2, index2) => Visit(schema2, references, value[index2]))) : Default(schema, value);
      }
      function TUnion(schema, references, value) {
        const defaulted = Default(schema, value);
        for (const subschema of schema.anyOf) {
          if (!(0, check_1.Check)(subschema, references, defaulted))
            continue;
          return Visit(subschema, references, defaulted);
        }
        return defaulted;
      }
      function Visit(schema, references, value) {
        const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
        const schema_ = schema;
        switch (schema[Types.Kind]) {
          case "Array":
            return TArray(schema_, references_, value);
          case "Intersect":
            return TIntersect(schema_, references_, value);
          case "Not":
            return TNot(schema_, references_, value);
          case "Object":
            return TObject(schema_, references_, value);
          case "Record":
            return TRecord(schema_, references_, value);
          case "Ref":
            return TRef(schema_, references_, value);
          case "Symbol":
            return Default(schema_, value);
          case "This":
            return TThis(schema_, references_, value);
          case "Tuple":
            return TTuple(schema_, references_, value);
          case "Union":
            return TUnion(schema_, references_, value);
          default:
            return Default(schema_, value);
        }
      }
      function Decode(schema, references, value) {
        return Visit(schema, references, value);
      }
      DecodeTransform2.Decode = Decode;
    })(DecodeTransform || (exports.DecodeTransform = DecodeTransform = {}));
    var EncodeTransform;
    (function(EncodeTransform2) {
      function Default(schema, value) {
        try {
          return Types.TypeGuard.TTransform(schema) ? schema[Types.Transform].Encode(value) : value;
        } catch (error) {
          throw new TransformEncodeError(schema, value, error);
        }
      }
      function TArray(schema, references, value) {
        const defaulted = Default(schema, value);
        return (0, guard_1.IsArray)(defaulted) ? defaulted.map((value2) => Visit(schema.items, references, value2)) : defaulted;
      }
      function TIntersect(schema, references, value) {
        const defaulted = Default(schema, value);
        if (!(0, guard_1.IsPlainObject)(value) || (0, guard_1.IsValueType)(value))
          return defaulted;
        const knownKeys = Types.KeyResolver.ResolveKeys(schema, { includePatterns: false });
        const knownProperties = knownKeys.reduce((value2, key) => {
          return key in defaulted ? { ...value2, [key]: Visit(Types.IndexedAccessor.Resolve(schema, [key]), references, value2[key]) } : value2;
        }, defaulted);
        if (!Types.TypeGuard.TTransform(schema.unevaluatedProperties)) {
          return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const unevaluatedProperties = schema.unevaluatedProperties;
        return unknownKeys.reduce((value2, key) => {
          return !knownKeys.includes(key) ? { ...value2, [key]: Default(unevaluatedProperties, value2[key]) } : value2;
        }, knownProperties);
      }
      function TNot(schema, references, value) {
        return Default(schema.not, Default(schema, value));
      }
      function TObject(schema, references, value) {
        const defaulted = Default(schema, value);
        if (!(0, guard_1.IsPlainObject)(value))
          return defaulted;
        const knownKeys = Types.KeyResolver.ResolveKeys(schema, { includePatterns: false });
        const knownProperties = knownKeys.reduce((value2, key) => {
          return key in value2 ? { ...value2, [key]: Visit(schema.properties[key], references, value2[key]) } : value2;
        }, defaulted);
        if (!Types.TypeGuard.TSchema(schema.additionalProperties)) {
          return knownProperties;
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const additionalProperties = schema.additionalProperties;
        return unknownKeys.reduce((value2, key) => {
          return !knownKeys.includes(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
        }, knownProperties);
      }
      function TRecord(schema, references, value) {
        const defaulted = Default(schema, value);
        if (!(0, guard_1.IsPlainObject)(value))
          return defaulted;
        const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
        const knownKeys = new RegExp(pattern);
        const knownProperties = Object.getOwnPropertyNames(value).reduce((value2, key) => {
          return knownKeys.test(key) ? { ...value2, [key]: Visit(schema.patternProperties[pattern], references, value2[key]) } : value2;
        }, defaulted);
        if (!Types.TypeGuard.TSchema(schema.additionalProperties)) {
          return Default(schema, knownProperties);
        }
        const unknownKeys = Object.getOwnPropertyNames(knownProperties);
        const additionalProperties = schema.additionalProperties;
        return unknownKeys.reduce((value2, key) => {
          return !knownKeys.test(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
        }, knownProperties);
      }
      function TRef(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        const resolved = Visit(target, references, value);
        return Default(schema, resolved);
      }
      function TThis(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        const resolved = Visit(target, references, value);
        return Default(schema, resolved);
      }
      function TTuple(schema, references, value) {
        const value1 = Default(schema, value);
        return (0, guard_1.IsArray)(schema.items) ? schema.items.map((schema2, index2) => Visit(schema2, references, value1[index2])) : [];
      }
      function TUnion(schema, references, value) {
        for (const subschema of schema.anyOf) {
          if (!(0, check_1.Check)(subschema, references, value))
            continue;
          const value1 = Visit(subschema, references, value);
          return Default(schema, value1);
        }
        for (const subschema of schema.anyOf) {
          const value1 = Visit(subschema, references, value);
          if (!(0, check_1.Check)(schema, references, value1))
            continue;
          return Default(schema, value1);
        }
        return Default(schema, value);
      }
      function Visit(schema, references, value) {
        const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
        const schema_ = schema;
        switch (schema[Types.Kind]) {
          case "Array":
            return TArray(schema_, references_, value);
          case "Intersect":
            return TIntersect(schema_, references_, value);
          case "Not":
            return TNot(schema_, references_, value);
          case "Object":
            return TObject(schema_, references_, value);
          case "Record":
            return TRecord(schema_, references_, value);
          case "Ref":
            return TRef(schema_, references_, value);
          case "This":
            return TThis(schema_, references_, value);
          case "Tuple":
            return TTuple(schema_, references_, value);
          case "Union":
            return TUnion(schema_, references_, value);
          default:
            return Default(schema_, value);
        }
      }
      function Encode(schema, references, value) {
        return Visit(schema, references, value);
      }
      EncodeTransform2.Encode = Encode;
    })(EncodeTransform || (exports.EncodeTransform = EncodeTransform = {}));
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/compiler/compiler.js
var require_compiler = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/compiler/compiler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeCompiler = exports.Policy = exports.TypeCompilerTypeGuardError = exports.TypeCompilerUnknownTypeError = exports.TypeCheck = void 0;
    var transform_1 = require_transform();
    var guard_1 = require_guard();
    var errors_1 = require_errors();
    var index_1 = require_system2();
    var deref_1 = require_deref();
    var hash_1 = require_hash();
    var Types = require_typebox();
    var TypeCheck = class {
      constructor(schema, references, checkFunc, code) {
        this.schema = schema;
        this.references = references;
        this.checkFunc = checkFunc;
        this.code = code;
        this.hasTransform = transform_1.HasTransform.Has(schema, references);
      }
      /** Returns the generated assertion code used to validate this type. */
      Code() {
        return this.code;
      }
      /** Returns an iterator for each error in this value. */
      Errors(value) {
        return (0, errors_1.Errors)(this.schema, this.references, value);
      }
      /** Returns true if the value matches the compiled type. */
      Check(value) {
        return this.checkFunc(value);
      }
      /** Decodes a value or throws if error */
      Decode(value) {
        if (!this.checkFunc(value))
          throw new transform_1.TransformDecodeCheckError(this.schema, value, this.Errors(value).First());
        return this.hasTransform ? transform_1.DecodeTransform.Decode(this.schema, this.references, value) : value;
      }
      /** Encodes a value or throws if error */
      Encode(value) {
        const encoded = this.hasTransform ? transform_1.EncodeTransform.Encode(this.schema, this.references, value) : value;
        if (!this.checkFunc(encoded))
          throw new transform_1.TransformEncodeCheckError(this.schema, value, this.Errors(value).First());
        return encoded;
      }
    };
    exports.TypeCheck = TypeCheck;
    var Character;
    (function(Character2) {
      function DollarSign(code) {
        return code === 36;
      }
      Character2.DollarSign = DollarSign;
      function IsUnderscore(code) {
        return code === 95;
      }
      Character2.IsUnderscore = IsUnderscore;
      function IsAlpha(code) {
        return code >= 65 && code <= 90 || code >= 97 && code <= 122;
      }
      Character2.IsAlpha = IsAlpha;
      function IsNumeric(code) {
        return code >= 48 && code <= 57;
      }
      Character2.IsNumeric = IsNumeric;
    })(Character || (Character = {}));
    var MemberExpression;
    (function(MemberExpression2) {
      function IsFirstCharacterNumeric(value) {
        if (value.length === 0)
          return false;
        return Character.IsNumeric(value.charCodeAt(0));
      }
      function IsAccessor(value) {
        if (IsFirstCharacterNumeric(value))
          return false;
        for (let i = 0; i < value.length; i++) {
          const code = value.charCodeAt(i);
          const check = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
          if (!check)
            return false;
        }
        return true;
      }
      function EscapeHyphen(key) {
        return key.replace(/'/g, "\\'");
      }
      function Encode(object, key) {
        return IsAccessor(key) ? `${object}.${key}` : `${object}['${EscapeHyphen(key)}']`;
      }
      MemberExpression2.Encode = Encode;
    })(MemberExpression || (MemberExpression = {}));
    var Identifier;
    (function(Identifier2) {
      function Encode($id) {
        const buffer2 = [];
        for (let i = 0; i < $id.length; i++) {
          const code = $id.charCodeAt(i);
          if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
            buffer2.push($id.charAt(i));
          } else {
            buffer2.push(`_${code}_`);
          }
        }
        return buffer2.join("").replace(/__/g, "_");
      }
      Identifier2.Encode = Encode;
    })(Identifier || (Identifier = {}));
    var LiteralString;
    (function(LiteralString2) {
      function Escape(content) {
        return content.replace(/'/g, "\\'");
      }
      LiteralString2.Escape = Escape;
    })(LiteralString || (LiteralString = {}));
    var TypeCompilerUnknownTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.TypeCompilerUnknownTypeError = TypeCompilerUnknownTypeError;
    var TypeCompilerTypeGuardError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Preflight validation check failed to guard for the given schema");
        this.schema = schema;
      }
    };
    exports.TypeCompilerTypeGuardError = TypeCompilerTypeGuardError;
    var Policy;
    (function(Policy2) {
      function IsExactOptionalProperty(value, key, expression) {
        return index_1.TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value} ? ${expression} : true)` : `(${MemberExpression.Encode(value, key)} !== undefined ? ${expression} : true)`;
      }
      Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
      function IsObjectLike(value) {
        return !index_1.TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}))` : `(typeof ${value} === 'object' && ${value} !== null)`;
      }
      Policy2.IsObjectLike = IsObjectLike;
      function IsRecordLike(value) {
        return !index_1.TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}) && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))` : `(typeof ${value} === 'object' && ${value} !== null && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))`;
      }
      Policy2.IsRecordLike = IsRecordLike;
      function IsNumberLike(value) {
        return !index_1.TypeSystemPolicy.AllowNaN ? `(typeof ${value} === 'number' && Number.isFinite(${value}))` : `typeof ${value} === 'number'`;
      }
      Policy2.IsNumberLike = IsNumberLike;
      function IsVoidLike(value) {
        return index_1.TypeSystemPolicy.AllowNullVoid ? `(${value} === undefined || ${value} === null)` : `${value} === undefined`;
      }
      Policy2.IsVoidLike = IsVoidLike;
    })(Policy || (exports.Policy = Policy = {}));
    var TypeCompiler2;
    (function(TypeCompiler3) {
      function IsAnyOrUnknown(schema) {
        return schema[Types.Kind] === "Any" || schema[Types.Kind] === "Unknown";
      }
      function* TAny(schema, references, value) {
        yield "true";
      }
      function* TArray(schema, references, value) {
        yield `Array.isArray(${value})`;
        const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
        if ((0, guard_1.IsNumber)(schema.maxItems))
          yield `${value}.length <= ${schema.maxItems}`;
        if ((0, guard_1.IsNumber)(schema.minItems))
          yield `${value}.length >= ${schema.minItems}`;
        const elementExpression = CreateExpression(schema.items, references, "value");
        yield `${value}.every((${parameter}) => ${elementExpression})`;
        if (Types.TypeGuard.TSchema(schema.contains) || (0, guard_1.IsNumber)(schema.minContains) || (0, guard_1.IsNumber)(schema.maxContains)) {
          const containsSchema = Types.TypeGuard.TSchema(schema.contains) ? schema.contains : Types.Type.Never();
          const checkExpression = CreateExpression(containsSchema, references, "value");
          const checkMinContains = (0, guard_1.IsNumber)(schema.minContains) ? [`(count >= ${schema.minContains})`] : [];
          const checkMaxContains = (0, guard_1.IsNumber)(schema.maxContains) ? [`(count <= ${schema.maxContains})`] : [];
          const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
          const check = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
          yield `((${parameter}) => { ${checkCount}; return ${check}})(${value})`;
        }
        if (schema.uniqueItems === true) {
          const check = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
          const block = `const set = new Set(); for(const element of value) { ${check} }`;
          yield `((${parameter}) => { ${block} )(${value})`;
        }
      }
      function* TAsyncIterator(schema, references, value) {
        yield `(typeof value === 'object' && Symbol.asyncIterator in ${value})`;
      }
      function* TBigInt(schema, references, value) {
        yield `(typeof ${value} === 'bigint')`;
        if ((0, guard_1.IsBigInt)(schema.exclusiveMaximum))
          yield `${value} < BigInt(${schema.exclusiveMaximum})`;
        if ((0, guard_1.IsBigInt)(schema.exclusiveMinimum))
          yield `${value} > BigInt(${schema.exclusiveMinimum})`;
        if ((0, guard_1.IsBigInt)(schema.maximum))
          yield `${value} <= BigInt(${schema.maximum})`;
        if ((0, guard_1.IsBigInt)(schema.minimum))
          yield `${value} >= BigInt(${schema.minimum})`;
        if ((0, guard_1.IsBigInt)(schema.multipleOf))
          yield `(${value} % BigInt(${schema.multipleOf})) === 0`;
      }
      function* TBoolean(schema, references, value) {
        yield `(typeof ${value} === 'boolean')`;
      }
      function* TConstructor(schema, references, value) {
        yield* Visit(schema.returns, references, `${value}.prototype`);
      }
      function* TDate(schema, references, value) {
        yield `(${value} instanceof Date) && Number.isFinite(${value}.getTime())`;
        if ((0, guard_1.IsNumber)(schema.exclusiveMaximumTimestamp))
          yield `${value}.getTime() < ${schema.exclusiveMaximumTimestamp}`;
        if ((0, guard_1.IsNumber)(schema.exclusiveMinimumTimestamp))
          yield `${value}.getTime() > ${schema.exclusiveMinimumTimestamp}`;
        if ((0, guard_1.IsNumber)(schema.maximumTimestamp))
          yield `${value}.getTime() <= ${schema.maximumTimestamp}`;
        if ((0, guard_1.IsNumber)(schema.minimumTimestamp))
          yield `${value}.getTime() >= ${schema.minimumTimestamp}`;
        if ((0, guard_1.IsNumber)(schema.multipleOfTimestamp))
          yield `(${value}.getTime() % ${schema.multipleOfTimestamp}) === 0`;
      }
      function* TFunction(schema, references, value) {
        yield `(typeof ${value} === 'function')`;
      }
      function* TInteger(schema, references, value) {
        yield `(typeof ${value} === 'number' && Number.isInteger(${value}))`;
        if ((0, guard_1.IsNumber)(schema.exclusiveMaximum))
          yield `${value} < ${schema.exclusiveMaximum}`;
        if ((0, guard_1.IsNumber)(schema.exclusiveMinimum))
          yield `${value} > ${schema.exclusiveMinimum}`;
        if ((0, guard_1.IsNumber)(schema.maximum))
          yield `${value} <= ${schema.maximum}`;
        if ((0, guard_1.IsNumber)(schema.minimum))
          yield `${value} >= ${schema.minimum}`;
        if ((0, guard_1.IsNumber)(schema.multipleOf))
          yield `(${value} % ${schema.multipleOf}) === 0`;
      }
      function* TIntersect(schema, references, value) {
        const check1 = schema.allOf.map((schema2) => CreateExpression(schema2, references, value)).join(" && ");
        if (schema.unevaluatedProperties === false) {
          const keyCheck = CreateVariable(`${new RegExp(Types.KeyResolver.ResolvePattern(schema))};`);
          const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key))`;
          yield `(${check1} && ${check2})`;
        } else if (Types.TypeGuard.TSchema(schema.unevaluatedProperties)) {
          const keyCheck = CreateVariable(`${new RegExp(Types.KeyResolver.ResolvePattern(schema))};`);
          const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema.unevaluatedProperties, references, `${value}[key]`)})`;
          yield `(${check1} && ${check2})`;
        } else {
          yield `(${check1})`;
        }
      }
      function* TIterator(schema, references, value) {
        yield `(typeof value === 'object' && Symbol.iterator in ${value})`;
      }
      function* TLiteral(schema, references, value) {
        if (typeof schema.const === "number" || typeof schema.const === "boolean") {
          yield `(${value} === ${schema.const})`;
        } else {
          yield `(${value} === '${LiteralString.Escape(schema.const)}')`;
        }
      }
      function* TNever(schema, references, value) {
        yield `false`;
      }
      function* TNot(schema, references, value) {
        const expression = CreateExpression(schema.not, references, value);
        yield `(!${expression})`;
      }
      function* TNull(schema, references, value) {
        yield `(${value} === null)`;
      }
      function* TNumber(schema, references, value) {
        yield Policy.IsNumberLike(value);
        if ((0, guard_1.IsNumber)(schema.exclusiveMaximum))
          yield `${value} < ${schema.exclusiveMaximum}`;
        if ((0, guard_1.IsNumber)(schema.exclusiveMinimum))
          yield `${value} > ${schema.exclusiveMinimum}`;
        if ((0, guard_1.IsNumber)(schema.maximum))
          yield `${value} <= ${schema.maximum}`;
        if ((0, guard_1.IsNumber)(schema.minimum))
          yield `${value} >= ${schema.minimum}`;
        if ((0, guard_1.IsNumber)(schema.multipleOf))
          yield `(${value} % ${schema.multipleOf}) === 0`;
      }
      function* TObject(schema, references, value) {
        yield Policy.IsObjectLike(value);
        if ((0, guard_1.IsNumber)(schema.minProperties))
          yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
        if ((0, guard_1.IsNumber)(schema.maxProperties))
          yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
        const knownKeys = Object.getOwnPropertyNames(schema.properties);
        for (const knownKey of knownKeys) {
          const memberExpression = MemberExpression.Encode(value, knownKey);
          const property = schema.properties[knownKey];
          if (schema.required && schema.required.includes(knownKey)) {
            yield* Visit(property, references, memberExpression);
            if (Types.ExtendsUndefined.Check(property) || IsAnyOrUnknown(property))
              yield `('${knownKey}' in ${value})`;
          } else {
            const expression = CreateExpression(property, references, memberExpression);
            yield Policy.IsExactOptionalProperty(value, knownKey, expression);
          }
        }
        if (schema.additionalProperties === false) {
          if (schema.required && schema.required.length === knownKeys.length) {
            yield `Object.getOwnPropertyNames(${value}).length === ${knownKeys.length}`;
          } else {
            const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
            yield `Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key))`;
          }
        }
        if (typeof schema.additionalProperties === "object") {
          const expression = CreateExpression(schema.additionalProperties, references, `${value}[key]`);
          const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
          yield `(Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key) || ${expression}))`;
        }
      }
      function* TPromise(schema, references, value) {
        yield `(typeof value === 'object' && typeof ${value}.then === 'function')`;
      }
      function* TRecord(schema, references, value) {
        yield Policy.IsRecordLike(value);
        if ((0, guard_1.IsNumber)(schema.minProperties))
          yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
        if ((0, guard_1.IsNumber)(schema.maxProperties))
          yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
        const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
        const variable = CreateVariable(`${new RegExp(patternKey)}`);
        const check1 = CreateExpression(patternSchema, references, "value");
        const check2 = Types.TypeGuard.TSchema(schema.additionalProperties) ? CreateExpression(schema.additionalProperties, references, value) : schema.additionalProperties === false ? "false" : "true";
        const expression = `(${variable}.test(key) ? ${check1} : ${check2})`;
        yield `(Object.entries(${value}).every(([key, value]) => ${expression}))`;
      }
      function* TRef(schema, references, value) {
        const target = (0, deref_1.Deref)(schema, references);
        if (state.functions.has(schema.$ref))
          return yield `${CreateFunctionName(schema.$ref)}(${value})`;
        yield* Visit(target, references, value);
      }
      function* TString(schema, references, value) {
        yield `(typeof ${value} === 'string')`;
        if ((0, guard_1.IsNumber)(schema.maxLength))
          yield `${value}.length <= ${schema.maxLength}`;
        if ((0, guard_1.IsNumber)(schema.minLength))
          yield `${value}.length >= ${schema.minLength}`;
        if (schema.pattern !== void 0) {
          const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
          yield `${variable}.test(${value})`;
        }
        if (schema.format !== void 0) {
          yield `format('${schema.format}', ${value})`;
        }
      }
      function* TSymbol(schema, references, value) {
        yield `(typeof ${value} === 'symbol')`;
      }
      function* TTemplateLiteral(schema, references, value) {
        yield `(typeof ${value} === 'string')`;
        const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
        yield `${variable}.test(${value})`;
      }
      function* TThis(schema, references, value) {
        yield `${CreateFunctionName(schema.$ref)}(${value})`;
      }
      function* TTuple(schema, references, value) {
        yield `Array.isArray(${value})`;
        if (schema.items === void 0)
          return yield `${value}.length === 0`;
        yield `(${value}.length === ${schema.maxItems})`;
        for (let i = 0; i < schema.items.length; i++) {
          const expression = CreateExpression(schema.items[i], references, `${value}[${i}]`);
          yield `${expression}`;
        }
      }
      function* TUndefined(schema, references, value) {
        yield `${value} === undefined`;
      }
      function* TUnion(schema, references, value) {
        const expressions = schema.anyOf.map((schema2) => CreateExpression(schema2, references, value));
        yield `(${expressions.join(" || ")})`;
      }
      function* TUint8Array(schema, references, value) {
        yield `${value} instanceof Uint8Array`;
        if ((0, guard_1.IsNumber)(schema.maxByteLength))
          yield `(${value}.length <= ${schema.maxByteLength})`;
        if ((0, guard_1.IsNumber)(schema.minByteLength))
          yield `(${value}.length >= ${schema.minByteLength})`;
      }
      function* TUnknown(schema, references, value) {
        yield "true";
      }
      function* TVoid(schema, references, value) {
        yield Policy.IsVoidLike(value);
      }
      function* TKind(schema, references, value) {
        const instance = state.instances.size;
        state.instances.set(instance, schema);
        yield `kind('${schema[Types.Kind]}', ${instance}, ${value})`;
      }
      function* Visit(schema, references, value, useHoisting = true) {
        const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
        const schema_ = schema;
        if (useHoisting && (0, guard_1.IsString)(schema.$id)) {
          const functionName = CreateFunctionName(schema.$id);
          if (state.functions.has(functionName)) {
            return yield `${functionName}(${value})`;
          } else {
            const functionCode = CreateFunction(functionName, schema, references, "value", false);
            state.functions.set(functionName, functionCode);
            return yield `${functionName}(${value})`;
          }
        }
        switch (schema_[Types.Kind]) {
          case "Any":
            return yield* TAny(schema_, references_, value);
          case "Array":
            return yield* TArray(schema_, references_, value);
          case "AsyncIterator":
            return yield* TAsyncIterator(schema_, references_, value);
          case "BigInt":
            return yield* TBigInt(schema_, references_, value);
          case "Boolean":
            return yield* TBoolean(schema_, references_, value);
          case "Constructor":
            return yield* TConstructor(schema_, references_, value);
          case "Date":
            return yield* TDate(schema_, references_, value);
          case "Function":
            return yield* TFunction(schema_, references_, value);
          case "Integer":
            return yield* TInteger(schema_, references_, value);
          case "Intersect":
            return yield* TIntersect(schema_, references_, value);
          case "Iterator":
            return yield* TIterator(schema_, references_, value);
          case "Literal":
            return yield* TLiteral(schema_, references_, value);
          case "Never":
            return yield* TNever(schema_, references_, value);
          case "Not":
            return yield* TNot(schema_, references_, value);
          case "Null":
            return yield* TNull(schema_, references_, value);
          case "Number":
            return yield* TNumber(schema_, references_, value);
          case "Object":
            return yield* TObject(schema_, references_, value);
          case "Promise":
            return yield* TPromise(schema_, references_, value);
          case "Record":
            return yield* TRecord(schema_, references_, value);
          case "Ref":
            return yield* TRef(schema_, references_, value);
          case "String":
            return yield* TString(schema_, references_, value);
          case "Symbol":
            return yield* TSymbol(schema_, references_, value);
          case "TemplateLiteral":
            return yield* TTemplateLiteral(schema_, references_, value);
          case "This":
            return yield* TThis(schema_, references_, value);
          case "Tuple":
            return yield* TTuple(schema_, references_, value);
          case "Undefined":
            return yield* TUndefined(schema_, references_, value);
          case "Union":
            return yield* TUnion(schema_, references_, value);
          case "Uint8Array":
            return yield* TUint8Array(schema_, references_, value);
          case "Unknown":
            return yield* TUnknown(schema_, references_, value);
          case "Void":
            return yield* TVoid(schema_, references_, value);
          default:
            if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
              throw new TypeCompilerUnknownTypeError(schema);
            return yield* TKind(schema_, references_, value);
        }
      }
      const state = {
        language: "javascript",
        functions: /* @__PURE__ */ new Map(),
        variables: /* @__PURE__ */ new Map(),
        instances: /* @__PURE__ */ new Map()
        // exterior kind instances
      };
      function CreateExpression(schema, references, value, useHoisting = true) {
        return `(${[...Visit(schema, references, value, useHoisting)].join(" && ")})`;
      }
      function CreateFunctionName($id) {
        return `check_${Identifier.Encode($id)}`;
      }
      function CreateVariable(expression) {
        const variableName = `local_${state.variables.size}`;
        state.variables.set(variableName, `const ${variableName} = ${expression}`);
        return variableName;
      }
      function CreateFunction(name, schema, references, value, useHoisting = true) {
        const [newline, pad3] = ["\n", (length) => "".padStart(length, " ")];
        const parameter = CreateParameter("value", "any");
        const returns = CreateReturns("boolean");
        const expression = [...Visit(schema, references, value, useHoisting)].map((expression2) => `${pad3(4)}${expression2}`).join(` &&${newline}`);
        return `function ${name}(${parameter})${returns} {${newline}${pad3(2)}return (${newline}${expression}${newline}${pad3(2)})
}`;
      }
      function CreateParameter(name, type) {
        const annotation = state.language === "typescript" ? `: ${type}` : "";
        return `${name}${annotation}`;
      }
      function CreateReturns(type) {
        return state.language === "typescript" ? `: ${type}` : "";
      }
      function Build(schema, references, options) {
        const functionCode = CreateFunction("check", schema, references, "value");
        const parameter = CreateParameter("value", "any");
        const returns = CreateReturns("boolean");
        const functions = [...state.functions.values()];
        const variables = [...state.variables.values()];
        const checkFunction = (0, guard_1.IsString)(schema.$id) ? `return function check(${parameter})${returns} {
  return ${CreateFunctionName(schema.$id)}(value)
}` : `return ${functionCode}`;
        return [...variables, ...functions, checkFunction].join("\n");
      }
      function Code(...args) {
        const defaults = { language: "javascript" };
        const [schema, references, options] = args.length === 2 && (0, guard_1.IsArray)(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !(0, guard_1.IsArray)(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
        state.language = options.language;
        state.variables.clear();
        state.functions.clear();
        state.instances.clear();
        if (!Types.TypeGuard.TSchema(schema))
          throw new TypeCompilerTypeGuardError(schema);
        for (const schema2 of references)
          if (!Types.TypeGuard.TSchema(schema2))
            throw new TypeCompilerTypeGuardError(schema2);
        return Build(schema, references, options);
      }
      TypeCompiler3.Code = Code;
      function Compile(schema, references = []) {
        const generatedCode = Code(schema, references, { language: "javascript" });
        const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
        const instances = new Map(state.instances);
        function typeRegistryFunction(kind, instance, value) {
          if (!Types.TypeRegistry.Has(kind) || !instances.has(instance))
            return false;
          const checkFunc = Types.TypeRegistry.Get(kind);
          const schema2 = instances.get(instance);
          return checkFunc(schema2, value);
        }
        function formatRegistryFunction(format, value) {
          if (!Types.FormatRegistry.Has(format))
            return false;
          const checkFunc = Types.FormatRegistry.Get(format);
          return checkFunc(value);
        }
        function hashFunction(value) {
          return (0, hash_1.Hash)(value);
        }
        const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
        return new TypeCheck(schema, references, checkFunction, generatedCode);
      }
      TypeCompiler3.Compile = Compile;
    })(TypeCompiler2 || (exports.TypeCompiler = TypeCompiler2 = {}));
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/compiler/index.js
var require_compiler2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/compiler/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m2, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m2[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p in m2)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m2, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueErrorIterator = exports.ValueErrorType = void 0;
    var index_1 = require_errors2();
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return index_1.ValueErrorType;
    } });
    Object.defineProperty(exports, "ValueErrorIterator", { enumerable: true, get: function() {
      return index_1.ValueErrorIterator;
    } });
    __exportStar(require_compiler(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/pointer.js
var require_pointer = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/pointer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValuePointer = exports.ValuePointerRootDeleteError = exports.ValuePointerRootSetError = void 0;
    var ValuePointerRootSetError = class extends Error {
      constructor(value, path, update) {
        super("Cannot set root value");
        this.value = value;
        this.path = path;
        this.update = update;
      }
    };
    exports.ValuePointerRootSetError = ValuePointerRootSetError;
    var ValuePointerRootDeleteError = class extends Error {
      constructor(value, path) {
        super("Cannot delete root value");
        this.value = value;
        this.path = path;
      }
    };
    exports.ValuePointerRootDeleteError = ValuePointerRootDeleteError;
    var ValuePointer;
    (function(ValuePointer2) {
      function Escape(component) {
        return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
      }
      function* Format(pointer) {
        if (pointer === "")
          return;
        let [start, end] = [0, 0];
        for (let i = 0; i < pointer.length; i++) {
          const char = pointer.charAt(i);
          if (char === "/") {
            if (i === 0) {
              start = i + 1;
            } else {
              end = i;
              yield Escape(pointer.slice(start, end));
              start = i + 1;
            }
          } else {
            end = i;
          }
        }
        yield Escape(pointer.slice(start));
      }
      ValuePointer2.Format = Format;
      function Set2(value, pointer, update) {
        if (pointer === "")
          throw new ValuePointerRootSetError(value, pointer, update);
        let [owner, next, key] = [null, value, ""];
        for (const component of Format(pointer)) {
          if (next[component] === void 0)
            next[component] = {};
          owner = next;
          next = next[component];
          key = component;
        }
        owner[key] = update;
      }
      ValuePointer2.Set = Set2;
      function Delete(value, pointer) {
        if (pointer === "")
          throw new ValuePointerRootDeleteError(value, pointer);
        let [owner, next, key] = [null, value, ""];
        for (const component of Format(pointer)) {
          if (next[component] === void 0 || next[component] === null)
            return;
          owner = next;
          next = next[component];
          key = component;
        }
        if (Array.isArray(owner)) {
          const index2 = parseInt(key);
          owner.splice(index2, 1);
        } else {
          delete owner[key];
        }
      }
      ValuePointer2.Delete = Delete;
      function Has(value, pointer) {
        if (pointer === "")
          return true;
        let [owner, next, key] = [null, value, ""];
        for (const component of Format(pointer)) {
          if (next[component] === void 0)
            return false;
          owner = next;
          next = next[component];
          key = component;
        }
        return Object.getOwnPropertyNames(owner).includes(key);
      }
      ValuePointer2.Has = Has;
      function Get(value, pointer) {
        if (pointer === "")
          return value;
        let current = value;
        for (const component of Format(pointer)) {
          if (current[component] === void 0)
            return void 0;
          current = current[component];
        }
        return current;
      }
      ValuePointer2.Get = Get;
    })(ValuePointer || (exports.ValuePointer = ValuePointer = {}));
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/clone.js
var require_clone = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/clone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clone = void 0;
    var guard_1 = require_guard();
    function ObjectType(value) {
      const keys = [...Object.getOwnPropertyNames(value), ...Object.getOwnPropertySymbols(value)];
      return keys.reduce((acc, key) => ({ ...acc, [key]: Clone(value[key]) }), {});
    }
    function ArrayType(value) {
      return value.map((element) => Clone(element));
    }
    function TypedArrayType(value) {
      return value.slice();
    }
    function DateType(value) {
      return new Date(value.toISOString());
    }
    function ValueType(value) {
      return value;
    }
    function Clone(value) {
      if ((0, guard_1.IsArray)(value))
        return ArrayType(value);
      if ((0, guard_1.IsDate)(value))
        return DateType(value);
      if ((0, guard_1.IsPlainObject)(value))
        return ObjectType(value);
      if ((0, guard_1.IsTypedArray)(value))
        return TypedArrayType(value);
      if ((0, guard_1.IsValueType)(value))
        return ValueType(value);
      throw new Error("ValueClone: Unable to clone value");
    }
    exports.Clone = Clone;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/delta.js
var require_delta = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/delta.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Patch = exports.Diff = exports.ValueDeltaUnableToDiffUnknownValue = exports.ValueDeltaObjectWithSymbolKeyError = exports.Edit = exports.Delete = exports.Update = exports.Insert = void 0;
    var guard_1 = require_guard();
    var typebox_1 = require_typebox();
    var pointer_1 = require_pointer();
    var clone_1 = require_clone();
    exports.Insert = typebox_1.Type.Object({
      type: typebox_1.Type.Literal("insert"),
      path: typebox_1.Type.String(),
      value: typebox_1.Type.Unknown()
    });
    exports.Update = typebox_1.Type.Object({
      type: typebox_1.Type.Literal("update"),
      path: typebox_1.Type.String(),
      value: typebox_1.Type.Unknown()
    });
    exports.Delete = typebox_1.Type.Object({
      type: typebox_1.Type.Literal("delete"),
      path: typebox_1.Type.String()
    });
    exports.Edit = typebox_1.Type.Union([exports.Insert, exports.Update, exports.Delete]);
    var ValueDeltaObjectWithSymbolKeyError = class extends Error {
      constructor(key) {
        super("Cannot diff objects with symbol keys");
        this.key = key;
      }
    };
    exports.ValueDeltaObjectWithSymbolKeyError = ValueDeltaObjectWithSymbolKeyError;
    var ValueDeltaUnableToDiffUnknownValue = class extends Error {
      constructor(value) {
        super("Unable to create diff edits for unknown value");
        this.value = value;
      }
    };
    exports.ValueDeltaUnableToDiffUnknownValue = ValueDeltaUnableToDiffUnknownValue;
    function CreateUpdate(path, value) {
      return { type: "update", path, value };
    }
    function CreateInsert(path, value) {
      return { type: "insert", path, value };
    }
    function CreateDelete(path) {
      return { type: "delete", path };
    }
    function* ObjectType(path, current, next) {
      if (!(0, guard_1.IsPlainObject)(next))
        return yield CreateUpdate(path, next);
      const currentKeys = [...Object.keys(current), ...Object.getOwnPropertySymbols(current)];
      const nextKeys = [...Object.keys(next), ...Object.getOwnPropertySymbols(next)];
      for (const key of currentKeys) {
        if ((0, guard_1.IsSymbol)(key))
          throw new ValueDeltaObjectWithSymbolKeyError(key);
        if ((0, guard_1.IsUndefined)(next[key]) && nextKeys.includes(key))
          yield CreateUpdate(`${path}/${String(key)}`, void 0);
      }
      for (const key of nextKeys) {
        if ((0, guard_1.IsUndefined)(current[key]) || (0, guard_1.IsUndefined)(next[key]))
          continue;
        if ((0, guard_1.IsSymbol)(key))
          throw new ValueDeltaObjectWithSymbolKeyError(key);
        yield* Visit(`${path}/${String(key)}`, current[key], next[key]);
      }
      for (const key of nextKeys) {
        if ((0, guard_1.IsSymbol)(key))
          throw new ValueDeltaObjectWithSymbolKeyError(key);
        if ((0, guard_1.IsUndefined)(current[key]))
          yield CreateInsert(`${path}/${String(key)}`, next[key]);
      }
      for (const key of currentKeys.reverse()) {
        if ((0, guard_1.IsSymbol)(key))
          throw new ValueDeltaObjectWithSymbolKeyError(key);
        if ((0, guard_1.IsUndefined)(next[key]) && !nextKeys.includes(key))
          yield CreateDelete(`${path}/${String(key)}`);
      }
    }
    function* ArrayType(path, current, next) {
      if (!(0, guard_1.IsArray)(next))
        return yield CreateUpdate(path, next);
      for (let i = 0; i < Math.min(current.length, next.length); i++) {
        yield* Visit(`${path}/${i}`, current[i], next[i]);
      }
      for (let i = 0; i < next.length; i++) {
        if (i < current.length)
          continue;
        yield CreateInsert(`${path}/${i}`, next[i]);
      }
      for (let i = current.length - 1; i >= 0; i--) {
        if (i < next.length)
          continue;
        yield CreateDelete(`${path}/${i}`);
      }
    }
    function* TypedArrayType(path, current, next) {
      if (!(0, guard_1.IsTypedArray)(next) || current.length !== next.length || Object.getPrototypeOf(current).constructor.name !== Object.getPrototypeOf(next).constructor.name)
        return yield CreateUpdate(path, next);
      for (let i = 0; i < Math.min(current.length, next.length); i++) {
        yield* Visit(`${path}/${i}`, current[i], next[i]);
      }
    }
    function* ValueType(path, current, next) {
      if (current === next)
        return;
      yield CreateUpdate(path, next);
    }
    function* Visit(path, current, next) {
      if ((0, guard_1.IsPlainObject)(current))
        return yield* ObjectType(path, current, next);
      if ((0, guard_1.IsArray)(current))
        return yield* ArrayType(path, current, next);
      if ((0, guard_1.IsTypedArray)(current))
        return yield* TypedArrayType(path, current, next);
      if ((0, guard_1.IsValueType)(current))
        return yield* ValueType(path, current, next);
      throw new ValueDeltaUnableToDiffUnknownValue(current);
    }
    function Diff(current, next) {
      return [...Visit("", current, next)];
    }
    exports.Diff = Diff;
    function IsRootUpdate(edits) {
      return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
    }
    function IsIdentity(edits) {
      return edits.length === 0;
    }
    function Patch(current, edits) {
      if (IsRootUpdate(edits)) {
        return (0, clone_1.Clone)(edits[0].value);
      }
      if (IsIdentity(edits)) {
        return (0, clone_1.Clone)(current);
      }
      const clone = (0, clone_1.Clone)(current);
      for (const edit of edits) {
        switch (edit.type) {
          case "insert": {
            pointer_1.ValuePointer.Set(clone, edit.path, edit.value);
            break;
          }
          case "update": {
            pointer_1.ValuePointer.Set(clone, edit.path, edit.value);
            break;
          }
          case "delete": {
            pointer_1.ValuePointer.Delete(clone, edit.path);
            break;
          }
        }
      }
      return clone;
    }
    exports.Patch = Patch;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/mutate.js
var require_mutate = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/mutate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mutate = exports.ValueMutateInvalidRootMutationError = exports.ValueMutateTypeMismatchError = void 0;
    var guard_1 = require_guard();
    var pointer_1 = require_pointer();
    var clone_1 = require_clone();
    var ValueMutateTypeMismatchError = class extends Error {
      constructor() {
        super("Cannot assign due type mismatch of assignable values");
      }
    };
    exports.ValueMutateTypeMismatchError = ValueMutateTypeMismatchError;
    var ValueMutateInvalidRootMutationError = class extends Error {
      constructor() {
        super("Only object and array types can be mutated at the root level");
      }
    };
    exports.ValueMutateInvalidRootMutationError = ValueMutateInvalidRootMutationError;
    function ObjectType(root, path, current, next) {
      if (!(0, guard_1.IsPlainObject)(current)) {
        pointer_1.ValuePointer.Set(root, path, (0, clone_1.Clone)(next));
      } else {
        const currentKeys = Object.keys(current);
        const nextKeys = Object.keys(next);
        for (const currentKey of currentKeys) {
          if (!nextKeys.includes(currentKey)) {
            delete current[currentKey];
          }
        }
        for (const nextKey of nextKeys) {
          if (!currentKeys.includes(nextKey)) {
            current[nextKey] = null;
          }
        }
        for (const nextKey of nextKeys) {
          Visit(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
        }
      }
    }
    function ArrayType(root, path, current, next) {
      if (!(0, guard_1.IsArray)(current)) {
        pointer_1.ValuePointer.Set(root, path, (0, clone_1.Clone)(next));
      } else {
        for (let index2 = 0; index2 < next.length; index2++) {
          Visit(root, `${path}/${index2}`, current[index2], next[index2]);
        }
        current.splice(next.length);
      }
    }
    function TypedArrayType(root, path, current, next) {
      if ((0, guard_1.IsTypedArray)(current) && current.length === next.length) {
        for (let i = 0; i < current.length; i++) {
          current[i] = next[i];
        }
      } else {
        pointer_1.ValuePointer.Set(root, path, (0, clone_1.Clone)(next));
      }
    }
    function ValueType(root, path, current, next) {
      if (current === next)
        return;
      pointer_1.ValuePointer.Set(root, path, next);
    }
    function Visit(root, path, current, next) {
      if ((0, guard_1.IsArray)(next))
        return ArrayType(root, path, current, next);
      if ((0, guard_1.IsTypedArray)(next))
        return TypedArrayType(root, path, current, next);
      if ((0, guard_1.IsPlainObject)(next))
        return ObjectType(root, path, current, next);
      if ((0, guard_1.IsValueType)(next))
        return ValueType(root, path, current, next);
    }
    function IsNonMutableValue(value) {
      return (0, guard_1.IsTypedArray)(value) || (0, guard_1.IsValueType)(value);
    }
    function IsMismatchedValue(current, next) {
      return (0, guard_1.IsPlainObject)(current) && (0, guard_1.IsArray)(next) || (0, guard_1.IsArray)(current) && (0, guard_1.IsPlainObject)(next);
    }
    function Mutate(current, next) {
      if (IsNonMutableValue(current) || IsNonMutableValue(next))
        throw new ValueMutateInvalidRootMutationError();
      if (IsMismatchedValue(current, next))
        throw new ValueMutateTypeMismatchError();
      Visit(current, "", current, next);
    }
    exports.Mutate = Mutate;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/equal.js
var require_equal = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/equal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Equal = void 0;
    var guard_1 = require_guard();
    function ObjectType(left, right) {
      if (!(0, guard_1.IsPlainObject)(right))
        return false;
      const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
      const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
      if (leftKeys.length !== rightKeys.length)
        return false;
      return leftKeys.every((key) => Equal(left[key], right[key]));
    }
    function DateType(left, right) {
      return (0, guard_1.IsDate)(right) && left.getTime() === right.getTime();
    }
    function ArrayType(left, right) {
      if (!(0, guard_1.IsArray)(right) || left.length !== right.length)
        return false;
      return left.every((value, index2) => Equal(value, right[index2]));
    }
    function TypedArrayType(left, right) {
      if (!(0, guard_1.IsTypedArray)(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
        return false;
      return left.every((value, index2) => Equal(value, right[index2]));
    }
    function ValueType(left, right) {
      return left === right;
    }
    function Equal(left, right) {
      if ((0, guard_1.IsPlainObject)(left))
        return ObjectType(left, right);
      if ((0, guard_1.IsDate)(left))
        return DateType(left, right);
      if ((0, guard_1.IsTypedArray)(left))
        return TypedArrayType(left, right);
      if ((0, guard_1.IsArray)(left))
        return ArrayType(left, right);
      if ((0, guard_1.IsValueType)(left))
        return ValueType(left, right);
      throw new Error("ValueEquals: Unable to compare value");
    }
    exports.Equal = Equal;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/create.js
var require_create = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Create = exports.ValueCreateRecursiveInstantiationError = exports.ValueCreateTempateLiteralTypeError = exports.ValueCreateIntersectTypeError = exports.ValueCreateNotTypeError = exports.ValueCreateNeverTypeError = exports.ValueCreateUnknownTypeError = void 0;
    var guard_1 = require_guard();
    var check_1 = require_check();
    var deref_1 = require_deref();
    var Types = require_typebox();
    var ValueCreateUnknownTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.ValueCreateUnknownTypeError = ValueCreateUnknownTypeError;
    var ValueCreateNeverTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Never types cannot be created");
        this.schema = schema;
      }
    };
    exports.ValueCreateNeverTypeError = ValueCreateNeverTypeError;
    var ValueCreateNotTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Not types must have a default value");
        this.schema = schema;
      }
    };
    exports.ValueCreateNotTypeError = ValueCreateNotTypeError;
    var ValueCreateIntersectTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Intersect produced invalid value. Consider using a default value.");
        this.schema = schema;
      }
    };
    exports.ValueCreateIntersectTypeError = ValueCreateIntersectTypeError;
    var ValueCreateTempateLiteralTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Can only create template literal values from patterns that produce finite sequences. Consider using a default value.");
        this.schema = schema;
      }
    };
    exports.ValueCreateTempateLiteralTypeError = ValueCreateTempateLiteralTypeError;
    var ValueCreateRecursiveInstantiationError = class extends Types.TypeBoxError {
      constructor(schema, recursiveMaxDepth2) {
        super("Value cannot be created as recursive type may produce value of infinite size. Consider using a default.");
        this.schema = schema;
        this.recursiveMaxDepth = recursiveMaxDepth2;
      }
    };
    exports.ValueCreateRecursiveInstantiationError = ValueCreateRecursiveInstantiationError;
    function TAny(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return {};
      }
    }
    function TArray(schema, references) {
      if (schema.uniqueItems === true && !(0, guard_1.HasPropertyKey)(schema, "default")) {
        throw new Error("ValueCreate.Array: Array with the uniqueItems constraint requires a default value");
      } else if ("contains" in schema && !(0, guard_1.HasPropertyKey)(schema, "default")) {
        throw new Error("ValueCreate.Array: Array with the contains constraint requires a default value");
      } else if ("default" in schema) {
        return schema.default;
      } else if (schema.minItems !== void 0) {
        return Array.from({ length: schema.minItems }).map((item) => {
          return Visit(schema.items, references);
        });
      } else {
        return [];
      }
    }
    function TAsyncIterator(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return /* @__PURE__ */ async function* () {
        }();
      }
    }
    function TBigInt(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return BigInt(0);
      }
    }
    function TBoolean(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return false;
      }
    }
    function TConstructor(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        const value = Visit(schema.returns, references);
        if (typeof value === "object" && !Array.isArray(value)) {
          return class {
            constructor() {
              for (const [key, val] of Object.entries(value)) {
                const self = this;
                self[key] = val;
              }
            }
          };
        } else {
          return class {
          };
        }
      }
    }
    function TDate(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.minimumTimestamp !== void 0) {
        return new Date(schema.minimumTimestamp);
      } else {
        return /* @__PURE__ */ new Date();
      }
    }
    function TFunction(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return () => Visit(schema.returns, references);
      }
    }
    function TInteger(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.minimum !== void 0) {
        return schema.minimum;
      } else {
        return 0;
      }
    }
    function TIntersect(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        const value = schema.allOf.reduce((acc, schema2) => {
          const next = Visit(schema2, references);
          return typeof next === "object" ? { ...acc, ...next } : next;
        }, {});
        if (!(0, check_1.Check)(schema, references, value))
          throw new ValueCreateIntersectTypeError(schema);
        return value;
      }
    }
    function TIterator(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return /* @__PURE__ */ function* () {
        }();
      }
    }
    function TLiteral(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return schema.const;
      }
    }
    function TNever(schema, references) {
      throw new ValueCreateNeverTypeError(schema);
    }
    function TNot(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        throw new ValueCreateNotTypeError(schema);
      }
    }
    function TNull(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return null;
      }
    }
    function TNumber(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.minimum !== void 0) {
        return schema.minimum;
      } else {
        return 0;
      }
    }
    function TObject(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        const required = new Set(schema.required);
        return schema.default || Object.entries(schema.properties).reduce((acc, [key, schema2]) => {
          return required.has(key) ? { ...acc, [key]: Visit(schema2, references) } : { ...acc };
        }, {});
      }
    }
    function TPromise(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return Promise.resolve(Visit(schema.item, references));
      }
    }
    function TRecord(schema, references) {
      const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (!(keyPattern === Types.PatternStringExact || keyPattern === Types.PatternNumberExact)) {
        const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
        return propertyKeys.reduce((acc, key) => {
          return { ...acc, [key]: Visit(valueSchema, references) };
        }, {});
      } else {
        return {};
      }
    }
    function TRef(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return Visit((0, deref_1.Deref)(schema, references), references);
      }
    }
    function TString(schema, references) {
      if (schema.pattern !== void 0) {
        if (!(0, guard_1.HasPropertyKey)(schema, "default")) {
          throw new Error("ValueCreate.String: String types with patterns must specify a default value");
        } else {
          return schema.default;
        }
      } else if (schema.format !== void 0) {
        if (!(0, guard_1.HasPropertyKey)(schema, "default")) {
          throw new Error("ValueCreate.String: String types with formats must specify a default value");
        } else {
          return schema.default;
        }
      } else {
        if ((0, guard_1.HasPropertyKey)(schema, "default")) {
          return schema.default;
        } else if (schema.minLength !== void 0) {
          return Array.from({ length: schema.minLength }).map(() => ".").join("");
        } else {
          return "";
        }
      }
    }
    function TSymbol(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if ("value" in schema) {
        return Symbol.for(schema.value);
      } else {
        return Symbol();
      }
    }
    function TTemplateLiteral(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      }
      const expression = Types.TemplateLiteralParser.ParseExact(schema.pattern);
      if (!Types.TemplateLiteralFinite.Check(expression))
        throw new ValueCreateTempateLiteralTypeError(schema);
      const sequence = Types.TemplateLiteralGenerator.Generate(expression);
      return sequence.next().value;
    }
    function TThis(schema, references) {
      if (recursiveDepth++ > recursiveMaxDepth)
        throw new ValueCreateRecursiveInstantiationError(schema, recursiveMaxDepth);
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return Visit((0, deref_1.Deref)(schema, references), references);
      }
    }
    function TTuple(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      }
      if (schema.items === void 0) {
        return [];
      } else {
        return Array.from({ length: schema.minItems }).map((_, index2) => Visit(schema.items[index2], references));
      }
    }
    function TUndefined(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return void 0;
      }
    }
    function TUnion(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.anyOf.length === 0) {
        throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
      } else {
        return Visit(schema.anyOf[0], references);
      }
    }
    function TUint8Array(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.minByteLength !== void 0) {
        return new Uint8Array(schema.minByteLength);
      } else {
        return new Uint8Array(0);
      }
    }
    function TUnknown(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return {};
      }
    }
    function TVoid(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return void 0;
      }
    }
    function TKind(schema, references) {
      if ((0, guard_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        throw new Error("User defined types must specify a default value");
      }
    }
    function Visit(schema, references) {
      const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[Types.Kind]) {
        case "Any":
          return TAny(schema_, references_);
        case "Array":
          return TArray(schema_, references_);
        case "AsyncIterator":
          return TAsyncIterator(schema_, references_);
        case "BigInt":
          return TBigInt(schema_, references_);
        case "Boolean":
          return TBoolean(schema_, references_);
        case "Constructor":
          return TConstructor(schema_, references_);
        case "Date":
          return TDate(schema_, references_);
        case "Function":
          return TFunction(schema_, references_);
        case "Integer":
          return TInteger(schema_, references_);
        case "Intersect":
          return TIntersect(schema_, references_);
        case "Iterator":
          return TIterator(schema_, references_);
        case "Literal":
          return TLiteral(schema_, references_);
        case "Never":
          return TNever(schema_, references_);
        case "Not":
          return TNot(schema_, references_);
        case "Null":
          return TNull(schema_, references_);
        case "Number":
          return TNumber(schema_, references_);
        case "Object":
          return TObject(schema_, references_);
        case "Promise":
          return TPromise(schema_, references_);
        case "Record":
          return TRecord(schema_, references_);
        case "Ref":
          return TRef(schema_, references_);
        case "String":
          return TString(schema_, references_);
        case "Symbol":
          return TSymbol(schema_, references_);
        case "TemplateLiteral":
          return TTemplateLiteral(schema_, references_);
        case "This":
          return TThis(schema_, references_);
        case "Tuple":
          return TTuple(schema_, references_);
        case "Undefined":
          return TUndefined(schema_, references_);
        case "Union":
          return TUnion(schema_, references_);
        case "Uint8Array":
          return TUint8Array(schema_, references_);
        case "Unknown":
          return TUnknown(schema_, references_);
        case "Void":
          return TVoid(schema_, references_);
        default:
          if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
            throw new ValueCreateUnknownTypeError(schema_);
          return TKind(schema_, references_);
      }
    }
    var recursiveMaxDepth = 512;
    var recursiveDepth = 0;
    function Create(...args) {
      recursiveDepth = 0;
      return args.length === 2 ? Visit(args[0], args[1]) : Visit(args[0], []);
    }
    exports.Create = Create;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/cast.js
var require_cast = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/cast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cast = exports.Default = exports.DefaultClone = exports.ValueCastUnknownTypeError = exports.ValueCastRecursiveTypeError = exports.ValueCastNeverTypeError = exports.ValueCastArrayUniqueItemsTypeError = void 0;
    var guard_1 = require_guard();
    var create_1 = require_create();
    var check_1 = require_check();
    var clone_1 = require_clone();
    var deref_1 = require_deref();
    var Types = require_typebox();
    var ValueCastArrayUniqueItemsTypeError = class extends Types.TypeBoxError {
      constructor(schema, value) {
        super("Array cast produced invalid data due to uniqueItems constraint");
        this.schema = schema;
        this.value = value;
      }
    };
    exports.ValueCastArrayUniqueItemsTypeError = ValueCastArrayUniqueItemsTypeError;
    var ValueCastNeverTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Never types cannot be cast");
        this.schema = schema;
      }
    };
    exports.ValueCastNeverTypeError = ValueCastNeverTypeError;
    var ValueCastRecursiveTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Cannot cast recursive schemas");
        this.schema = schema;
      }
    };
    exports.ValueCastRecursiveTypeError = ValueCastRecursiveTypeError;
    var ValueCastUnknownTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.ValueCastUnknownTypeError = ValueCastUnknownTypeError;
    var UnionCastCreate;
    (function(UnionCastCreate2) {
      function Score(schema, references, value) {
        if (schema[Types.Kind] === "Object" && typeof value === "object" && !(0, guard_1.IsNull)(value)) {
          const object = schema;
          const keys = Object.getOwnPropertyNames(value);
          const entries = Object.entries(object.properties);
          const [point, max] = [1 / entries.length, entries.length];
          return entries.reduce((acc, [key, schema2]) => {
            const literal = schema2[Types.Kind] === "Literal" && schema2.const === value[key] ? max : 0;
            const checks = (0, check_1.Check)(schema2, references, value[key]) ? point : 0;
            const exists2 = keys.includes(key) ? point : 0;
            return acc + (literal + checks + exists2);
          }, 0);
        } else {
          return (0, check_1.Check)(schema, references, value) ? 1 : 0;
        }
      }
      function Select(union, references, value) {
        let [select, best] = [union.anyOf[0], 0];
        for (const schema of union.anyOf) {
          const score = Score(schema, references, value);
          if (score > best) {
            select = schema;
            best = score;
          }
        }
        return select;
      }
      function Create(union, references, value) {
        if ("default" in union) {
          return union.default;
        } else {
          const schema = Select(union, references, value);
          return Cast(schema, references, value);
        }
      }
      UnionCastCreate2.Create = Create;
    })(UnionCastCreate || (UnionCastCreate = {}));
    function DefaultClone(schema, references, value) {
      return (0, check_1.Check)(schema, references, value) ? (0, clone_1.Clone)(value) : (0, create_1.Create)(schema, references);
    }
    exports.DefaultClone = DefaultClone;
    function Default(schema, references, value) {
      return (0, check_1.Check)(schema, references, value) ? value : (0, create_1.Create)(schema, references);
    }
    exports.Default = Default;
    function TArray(schema, references, value) {
      if ((0, check_1.Check)(schema, references, value))
        return (0, clone_1.Clone)(value);
      const created = (0, guard_1.IsArray)(value) ? (0, clone_1.Clone)(value) : (0, create_1.Create)(schema, references);
      const minimum = (0, guard_1.IsNumber)(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
      const maximum = (0, guard_1.IsNumber)(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
      const casted = maximum.map((value2) => Visit(schema.items, references, value2));
      if (schema.uniqueItems !== true)
        return casted;
      const unique = [...new Set(casted)];
      if (!(0, check_1.Check)(schema, references, unique))
        throw new ValueCastArrayUniqueItemsTypeError(schema, unique);
      return unique;
    }
    function TConstructor(schema, references, value) {
      if ((0, check_1.Check)(schema, references, value))
        return (0, create_1.Create)(schema, references);
      const required = new Set(schema.returns.required || []);
      const result = function() {
      };
      for (const [key, property] of Object.entries(schema.returns.properties)) {
        if (!required.has(key) && value.prototype[key] === void 0)
          continue;
        result.prototype[key] = Visit(property, references, value.prototype[key]);
      }
      return result;
    }
    function TIntersect(schema, references, value) {
      const created = (0, create_1.Create)(schema, references);
      const mapped = (0, guard_1.IsPlainObject)(created) && (0, guard_1.IsPlainObject)(value) ? { ...created, ...value } : value;
      return (0, check_1.Check)(schema, references, mapped) ? mapped : (0, create_1.Create)(schema, references);
    }
    function TNever(schema, references, value) {
      throw new ValueCastNeverTypeError(schema);
    }
    function TObject(schema, references, value) {
      if ((0, check_1.Check)(schema, references, value))
        return value;
      if (value === null || typeof value !== "object")
        return (0, create_1.Create)(schema, references);
      const required = new Set(schema.required || []);
      const result = {};
      for (const [key, property] of Object.entries(schema.properties)) {
        if (!required.has(key) && value[key] === void 0)
          continue;
        result[key] = Visit(property, references, value[key]);
      }
      if (typeof schema.additionalProperties === "object") {
        const propertyNames = Object.getOwnPropertyNames(schema.properties);
        for (const propertyName of Object.getOwnPropertyNames(value)) {
          if (propertyNames.includes(propertyName))
            continue;
          result[propertyName] = Visit(schema.additionalProperties, references, value[propertyName]);
        }
      }
      return result;
    }
    function TRecord(schema, references, value) {
      if ((0, check_1.Check)(schema, references, value))
        return (0, clone_1.Clone)(value);
      if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
        return (0, create_1.Create)(schema, references);
      const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const subschema = schema.patternProperties[subschemaPropertyName];
      const result = {};
      for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(subschema, references, propValue);
      }
      return result;
    }
    function TRef(schema, references, value) {
      return Visit((0, deref_1.Deref)(schema, references), references, value);
    }
    function TThis(schema, references, value) {
      return Visit((0, deref_1.Deref)(schema, references), references, value);
    }
    function TTuple(schema, references, value) {
      if ((0, check_1.Check)(schema, references, value))
        return (0, clone_1.Clone)(value);
      if (!(0, guard_1.IsArray)(value))
        return (0, create_1.Create)(schema, references);
      if (schema.items === void 0)
        return [];
      return schema.items.map((schema2, index2) => Visit(schema2, references, value[index2]));
    }
    function TUnion(schema, references, value) {
      return (0, check_1.Check)(schema, references, value) ? (0, clone_1.Clone)(value) : UnionCastCreate.Create(schema, references, value);
    }
    function Visit(schema, references, value) {
      const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[Types.Kind]) {
        case "Array":
          return TArray(schema_, references_, value);
        case "Constructor":
          return TConstructor(schema_, references_, value);
        case "Intersect":
          return TIntersect(schema_, references_, value);
        case "Never":
          return TNever(schema_, references_, value);
        case "Object":
          return TObject(schema_, references_, value);
        case "Record":
          return TRecord(schema_, references_, value);
        case "Ref":
          return TRef(schema_, references_, value);
        case "This":
          return TThis(schema_, references_, value);
        case "Tuple":
          return TTuple(schema_, references_, value);
        case "Union":
          return TUnion(schema_, references_, value);
        case "Date":
        case "Symbol":
        case "Uint8Array":
          return DefaultClone(schema, references, value);
        case "Any":
        case "AsyncIterator":
        case "BigInt":
        case "Boolean":
        case "Function":
        case "Integer":
        case "Iterator":
        case "Literal":
        case "Not":
        case "Null":
        case "Number":
        case "Promise":
        case "String":
        case "TemplateLiteral":
        case "Undefined":
        case "Unknown":
        case "Void":
          return Default(schema_, references_, value);
        default:
          if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
            throw new ValueCastUnknownTypeError(schema_);
          return Default(schema_, references_, value);
      }
    }
    function Cast(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    exports.Cast = Cast;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/convert.js
var require_convert = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Convert = exports.Default = exports.ValueConvertUnknownTypeError = void 0;
    var guard_1 = require_guard();
    var clone_1 = require_clone();
    var check_1 = require_check();
    var deref_1 = require_deref();
    var Types = require_typebox();
    var ValueConvertUnknownTypeError = class extends Types.TypeBoxError {
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.ValueConvertUnknownTypeError = ValueConvertUnknownTypeError;
    function IsStringNumeric(value) {
      return (0, guard_1.IsString)(value) && !isNaN(value) && !isNaN(parseFloat(value));
    }
    function IsValueToString(value) {
      return (0, guard_1.IsBigInt)(value) || (0, guard_1.IsBoolean)(value) || (0, guard_1.IsNumber)(value);
    }
    function IsValueTrue(value) {
      return value === true || (0, guard_1.IsNumber)(value) && value === 1 || (0, guard_1.IsBigInt)(value) && value === BigInt("1") || (0, guard_1.IsString)(value) && (value.toLowerCase() === "true" || value === "1");
    }
    function IsValueFalse(value) {
      return value === false || (0, guard_1.IsNumber)(value) && (value === 0 || Object.is(value, -0)) || (0, guard_1.IsBigInt)(value) && value === BigInt("0") || (0, guard_1.IsString)(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
    }
    function IsTimeStringWithTimeZone(value) {
      return (0, guard_1.IsString)(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
    }
    function IsTimeStringWithoutTimeZone(value) {
      return (0, guard_1.IsString)(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
    }
    function IsDateTimeStringWithTimeZone(value) {
      return (0, guard_1.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
    }
    function IsDateTimeStringWithoutTimeZone(value) {
      return (0, guard_1.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
    }
    function IsDateString(value) {
      return (0, guard_1.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
    }
    function TryConvertLiteralString(value, target) {
      const conversion = TryConvertString(value);
      return conversion === target ? conversion : value;
    }
    function TryConvertLiteralNumber(value, target) {
      const conversion = TryConvertNumber(value);
      return conversion === target ? conversion : value;
    }
    function TryConvertLiteralBoolean(value, target) {
      const conversion = TryConvertBoolean(value);
      return conversion === target ? conversion : value;
    }
    function TryConvertLiteral(schema, value) {
      if (typeof schema.const === "string") {
        return TryConvertLiteralString(value, schema.const);
      } else if (typeof schema.const === "number") {
        return TryConvertLiteralNumber(value, schema.const);
      } else if (typeof schema.const === "boolean") {
        return TryConvertLiteralBoolean(value, schema.const);
      } else {
        return (0, clone_1.Clone)(value);
      }
    }
    function TryConvertBoolean(value) {
      return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
    }
    function TryConvertBigInt(value) {
      return IsStringNumeric(value) ? BigInt(parseInt(value)) : (0, guard_1.IsNumber)(value) ? BigInt(value | 0) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
    }
    function TryConvertString(value) {
      return IsValueToString(value) ? value.toString() : (0, guard_1.IsSymbol)(value) && value.description !== void 0 ? value.description.toString() : value;
    }
    function TryConvertNumber(value) {
      return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
    }
    function TryConvertInteger(value) {
      return IsStringNumeric(value) ? parseInt(value) : (0, guard_1.IsNumber)(value) ? value | 0 : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
    }
    function TryConvertNull(value) {
      return (0, guard_1.IsString)(value) && value.toLowerCase() === "null" ? null : value;
    }
    function TryConvertUndefined(value) {
      return (0, guard_1.IsString)(value) && value === "undefined" ? void 0 : value;
    }
    function TryConvertDate(value) {
      return (0, guard_1.IsDate)(value) ? value : (0, guard_1.IsNumber)(value) ? new Date(value) : IsValueTrue(value) ? /* @__PURE__ */ new Date(1) : IsValueFalse(value) ? /* @__PURE__ */ new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`) : value;
    }
    function Default(value) {
      return value;
    }
    exports.Default = Default;
    function TArray(schema, references, value) {
      if ((0, guard_1.IsArray)(value)) {
        return value.map((value2) => Visit(schema.items, references, value2));
      }
      return value;
    }
    function TBigInt(schema, references, value) {
      return TryConvertBigInt(value);
    }
    function TBoolean(schema, references, value) {
      return TryConvertBoolean(value);
    }
    function TDate(schema, references, value) {
      return TryConvertDate(value);
    }
    function TInteger(schema, references, value) {
      return TryConvertInteger(value);
    }
    function TIntersect(schema, references, value) {
      return schema.allOf.every((schema2) => Types.TypeGuard.TObject(schema2)) ? Visit(Types.Type.Composite(schema.allOf), references, value) : Visit(schema.allOf[0], references, value);
    }
    function TLiteral(schema, references, value) {
      return TryConvertLiteral(schema, value);
    }
    function TNull(schema, references, value) {
      return TryConvertNull(value);
    }
    function TNumber(schema, references, value) {
      return TryConvertNumber(value);
    }
    function TObject(schema, references, value) {
      if ((0, guard_1.IsObject)(value))
        return Object.getOwnPropertyNames(schema.properties).reduce((acc, key) => {
          return value[key] !== void 0 ? { ...acc, [key]: Visit(schema.properties[key], references, value[key]) } : { ...acc };
        }, value);
      return value;
    }
    function TRecord(schema, references, value) {
      const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const property = schema.patternProperties[propertyKey];
      const result = {};
      for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(property, references, propValue);
      }
      return result;
    }
    function TRef(schema, references, value) {
      return Visit((0, deref_1.Deref)(schema, references), references, value);
    }
    function TString(schema, references, value) {
      return TryConvertString(value);
    }
    function TSymbol(schema, references, value) {
      return (0, guard_1.IsString)(value) || (0, guard_1.IsNumber)(value) ? Symbol(value) : value;
    }
    function TThis(schema, references, value) {
      return Visit((0, deref_1.Deref)(schema, references), references, value);
    }
    function TTuple(schema, references, value) {
      if ((0, guard_1.IsArray)(value) && !(0, guard_1.IsUndefined)(schema.items)) {
        return value.map((value2, index2) => {
          return index2 < schema.items.length ? Visit(schema.items[index2], references, value2) : value2;
        });
      }
      return value;
    }
    function TUndefined(schema, references, value) {
      return TryConvertUndefined(value);
    }
    function TUnion(schema, references, value) {
      for (const subschema of schema.anyOf) {
        const converted = Visit(subschema, references, value);
        if ((0, check_1.Check)(subschema, references, converted)) {
          return converted;
        }
      }
      return value;
    }
    function Visit(schema, references, value) {
      const references_ = (0, guard_1.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[Types.Kind]) {
        case "Array":
          return TArray(schema_, references_, value);
        case "BigInt":
          return TBigInt(schema_, references_, value);
        case "Boolean":
          return TBoolean(schema_, references_, value);
        case "Date":
          return TDate(schema_, references_, value);
        case "Integer":
          return TInteger(schema_, references_, value);
        case "Intersect":
          return TIntersect(schema_, references_, value);
        case "Literal":
          return TLiteral(schema_, references_, value);
        case "Null":
          return TNull(schema_, references_, value);
        case "Number":
          return TNumber(schema_, references_, value);
        case "Object":
          return TObject(schema_, references_, value);
        case "Record":
          return TRecord(schema_, references_, value);
        case "Ref":
          return TRef(schema_, references_, value);
        case "String":
          return TString(schema_, references_, value);
        case "Symbol":
          return TSymbol(schema_, references_, value);
        case "This":
          return TThis(schema_, references_, value);
        case "Tuple":
          return TTuple(schema_, references_, value);
        case "Undefined":
          return TUndefined(schema_, references_, value);
        case "Union":
          return TUnion(schema_, references_, value);
        case "Any":
        case "AsyncIterator":
        case "Constructor":
        case "Function":
        case "Iterator":
        case "Never":
        case "Promise":
        case "TemplateLiteral":
        case "Uint8Array":
        case "Unknown":
        case "Void":
          return Default(value);
        default:
          if (!Types.TypeRegistry.Has(schema_[Types.Kind]))
            throw new ValueConvertUnknownTypeError(schema_);
          return Default(value);
      }
    }
    function Convert(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    exports.Convert = Convert;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/value.js
var require_value = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Value = void 0;
    var ValueErrors = require_errors2();
    var ValueMutate = require_mutate();
    var ValueHash = require_hash();
    var ValueEqual = require_equal();
    var ValueCast = require_cast();
    var ValueClone = require_clone();
    var ValueConvert = require_convert();
    var ValueCreate = require_create();
    var ValueCheck = require_check();
    var ValueDelta = require_delta();
    var ValueTransform = require_transform();
    var Value2;
    (function(Value3) {
      function Cast(...args) {
        return ValueCast.Cast.apply(ValueCast, args);
      }
      Value3.Cast = Cast;
      function Create(...args) {
        return ValueCreate.Create.apply(ValueCreate, args);
      }
      Value3.Create = Create;
      function Check(...args) {
        return ValueCheck.Check.apply(ValueCheck, args);
      }
      Value3.Check = Check;
      function Convert(...args) {
        return ValueConvert.Convert.apply(ValueConvert, args);
      }
      Value3.Convert = Convert;
      function Clone(value) {
        return ValueClone.Clone(value);
      }
      Value3.Clone = Clone;
      function Decode(...args) {
        const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
        if (!Check(schema, references, value))
          throw new ValueTransform.TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
        return ValueTransform.DecodeTransform.Decode(schema, references, value);
      }
      Value3.Decode = Decode;
      function Encode(...args) {
        const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
        const encoded = ValueTransform.EncodeTransform.Encode(schema, references, value);
        if (!Check(schema, references, encoded))
          throw new ValueTransform.TransformEncodeCheckError(schema, value, Errors(schema, references, value).First());
        return encoded;
      }
      Value3.Encode = Encode;
      function Errors(...args) {
        return ValueErrors.Errors.apply(ValueErrors, args);
      }
      Value3.Errors = Errors;
      function Equal(left, right) {
        return ValueEqual.Equal(left, right);
      }
      Value3.Equal = Equal;
      function Diff(current, next) {
        return ValueDelta.Diff(current, next);
      }
      Value3.Diff = Diff;
      function Hash2(value) {
        return ValueHash.Hash(value);
      }
      Value3.Hash = Hash2;
      function Patch(current, edits) {
        return ValueDelta.Patch(current, edits);
      }
      Value3.Patch = Patch;
      function Mutate(current, next) {
        ValueMutate.Mutate(current, next);
      }
      Value3.Mutate = Mutate;
    })(Value2 || (exports.Value = Value2 = {}));
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/index.js
var require_value2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.31.28/node_modules/@sinclair/typebox/value/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Value = exports.ValuePointer = exports.Delete = exports.Update = exports.Insert = exports.Edit = exports.ValueErrorIterator = exports.ValueErrorType = void 0;
    var index_1 = require_errors2();
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return index_1.ValueErrorType;
    } });
    Object.defineProperty(exports, "ValueErrorIterator", { enumerable: true, get: function() {
      return index_1.ValueErrorIterator;
    } });
    var delta_1 = require_delta();
    Object.defineProperty(exports, "Edit", { enumerable: true, get: function() {
      return delta_1.Edit;
    } });
    Object.defineProperty(exports, "Insert", { enumerable: true, get: function() {
      return delta_1.Insert;
    } });
    Object.defineProperty(exports, "Update", { enumerable: true, get: function() {
      return delta_1.Update;
    } });
    Object.defineProperty(exports, "Delete", { enumerable: true, get: function() {
      return delta_1.Delete;
    } });
    var pointer_1 = require_pointer();
    Object.defineProperty(exports, "ValuePointer", { enumerable: true, get: function() {
      return pointer_1.ValuePointer;
    } });
    var value_1 = require_value();
    Object.defineProperty(exports, "Value", { enumerable: true, get: function() {
      return value_1.Value;
    } });
  }
});

// external-global-plugin:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "external-global-plugin:react/jsx-runtime"(exports, module) {
    module.exports = window.reactjsxruntime;
  }
});

// external-global-plugin:react-router-dom
var require_react_router_dom = __commonJS({
  "external-global-plugin:react-router-dom"(exports, module) {
    module.exports = window.reactrouterdom;
  }
});

// external-global-plugin:@veramo-community/veramo-react
var require_veramo_react = __commonJS({
  "external-global-plugin:@veramo-community/veramo-react"(exports, module) {
    module.exports = window.veramoreact;
  }
});

// external-global-plugin:@ant-design/pro-components
var require_pro_components = __commonJS({
  "external-global-plugin:@ant-design/pro-components"(exports, module) {
    module.exports = window.antdPro;
  }
});

// external-global-plugin:@veramo-community/agent-explorer-plugin
var require_agent_explorer_plugin = __commonJS({
  "external-global-plugin:@veramo-community/agent-explorer-plugin"(exports, module) {
    module.exports = window.agentexplorerplugin;
  }
});

// external-global-plugin:uuid
var require_uuid = __commonJS({
  "external-global-plugin:uuid"(exports, module) {
    module.exports = window.uuid;
  }
});

// src/components/WitnessedCredentialHeader.tsx
var import_react3 = __toESM(require_react(), 1);
var import_antd = __toESM(require_antd(), 1);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/Context.js
var import_react = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react.createContext)({});
var Context_default = IconContext;

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l2) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f2 = true, o2 = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l2) {
        if (Object(t) !== t)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e = i.call(t)).done) && (a.push(e.value), a.length !== l2); f2 = true)
          ;
    } catch (r2) {
      o2 = true, n = r2;
    } finally {
      try {
        if (!f2 && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o2)
          throw n;
      }
    }
    return a;
  }
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n = Object.prototype.toString.call(o2).slice(8, -1);
  if (n === "Object" && o2.constructor)
    n = o2.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o2);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o2, minLen);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l2) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  if (s === 0) {
    g = l2;
    b = l2;
    r = l2;
  } else {
    var q = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p = 2 * l2 - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d2 = max - min;
  var s = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d2 + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d2 + 2;
        break;
      case b:
        h = (r - g) / d2 + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, v };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f2 = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f2 * s);
  var t = v * (1 - (1 - f2) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l2);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g = _ref.g, b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g = _ref2.g, b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index2 = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node) {
    return node.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function(node) {
        if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function(node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/shadow.js
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_react2 = __toESM(require_react());
function camelCase(input) {
  return input.replace(/-(.)/g, function(match, g) {
    return g.toUpperCase();
  });
}
function warning2(valid, message) {
  warning_default(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2({
      key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index2) {
      return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
    }));
  }
  return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index2) {
    return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
  var _useContext = (0, import_react2.useContext)(Context_default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  (0, import_react2.useEffect)(function() {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: true,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded);
  var svgRef = React2.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning2(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate2(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className,
    onClick,
    style,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var _excluded2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded2);
  var _React$useContext = React3.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = (0, import_classnames.default)(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ React3.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ React3.createElement(IconBase_default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CheckOutlined.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlined_default = CheckOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CheckOutlined.js
var CheckOutlined2 = function CheckOutlined3(props, ref) {
  return /* @__PURE__ */ React4.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: CheckOutlined_default
  }));
};
if (true) {
  CheckOutlined2.displayName = "CheckOutlined";
}
var CheckOutlined_default2 = /* @__PURE__ */ React4.forwardRef(CheckOutlined2);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PlusOutlined.js
var React5 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
var PlusOutlined_default = PlusOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PlusOutlined.js
var PlusOutlined2 = function PlusOutlined3(props, ref) {
  return /* @__PURE__ */ React5.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: PlusOutlined_default
  }));
};
if (true) {
  PlusOutlined2.displayName = "PlusOutlined";
}
var PlusOutlined_default2 = /* @__PURE__ */ React5.forwardRef(PlusOutlined2);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SketchOutlined.js
var React6 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/SketchOutlined.js
var SketchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M925.6 405.1l-203-253.7a6.5 6.5 0 00-5-2.4H306.4c-1.9 0-3.8.9-5 2.4l-203 253.7a6.5 6.5 0 00.2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1 1.8 0 3.5-.8 4.8-2.1l408.6-459.5a6.5 6.5 0 00.2-8.3zM645.2 206.4l34.4 133.9-132.5-133.9h98.1zm8.2 178.5H370.6L512 242l141.4 142.9zM378.8 206.4h98.1L344.3 340.3l34.5-133.9zm-53.4 7l-44.1 171.5h-93.1l137.2-171.5zM194.6 434.9H289l125.8 247.7-220.2-247.7zM512 763.4L345.1 434.9h333.7L512 763.4zm97.1-80.8L735 434.9h94.4L609.1 682.6zm133.6-297.7l-44.1-171.5 137.2 171.5h-93.1z" } }] }, "name": "sketch", "theme": "outlined" };
var SketchOutlined_default = SketchOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SketchOutlined.js
var SketchOutlined2 = function SketchOutlined3(props, ref) {
  return /* @__PURE__ */ React6.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: SketchOutlined_default
  }));
};
if (true) {
  SketchOutlined2.displayName = "SketchOutlined";
}
var SketchOutlined_default2 = /* @__PURE__ */ React6.forwardRef(SketchOutlined2);

// src/components/WitnessedCredentialHeader.tsx
var import_react_query = __toESM(require_react_query(), 1);

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/chain/defineChain.js
function defineChain(chain) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...chain
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/op-stack/contracts.js
var contracts = {
  gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" },
  l1Block: { address: "0x4200000000000000000000000000000000000015" },
  l2CrossDomainMessenger: {
    address: "0x4200000000000000000000000000000000000007"
  },
  l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" },
  l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" },
  l2ToL1MessagePasser: {
    address: "0x4200000000000000000000000000000000000016"
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/op-stack/formatters.js
init_fromHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/block.js
init_formatter();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/transaction.js
init_fromHex();
init_formatter();
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844"
};
function formatTransaction(transaction) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
    gas: transaction.gas ? BigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
    maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : void 0,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : void 0,
    typeHex: transaction.type ? transaction.type : void 0,
    value: transaction.value ? BigInt(transaction.value) : void 0,
    v: transaction.v ? BigInt(transaction.v) : void 0
  };
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return void 0;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  if (transaction_.type === "eip1559") {
    delete transaction_.maxFeePerBlobGas;
  }
  return transaction_;
}
var defineTransaction = /* @__PURE__ */ defineFormatter("transaction", formatTransaction);

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block) {
  const transactions = block.transactions?.map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : void 0,
    timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}
var defineBlock = /* @__PURE__ */ defineFormatter("block", formatBlock);

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/transactionReceipt.js
init_fromHex();
init_formatter();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName } = {}) {
  return {
    ...log,
    blockHash: log.blockHash ? log.blockHash : null,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionHash: log.transactionHash ? log.transactionHash : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
    ...eventName ? { args, eventName } : {}
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/transactionReceipt.js
var statuses = {
  "0x0": "reverted",
  "0x1": "success"
};
function formatTransactionReceipt(transactionReceipt) {
  const receipt = {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
    status: transactionReceipt.status ? statuses[transactionReceipt.status] : null,
    type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
  };
  if (transactionReceipt.blobGasPrice)
    receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
  if (transactionReceipt.blobGasUsed)
    receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
  return receipt;
}
var defineTransactionReceipt = /* @__PURE__ */ defineFormatter("transactionReceipt", formatTransactionReceipt);

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/op-stack/formatters.js
var formatters = {
  block: /* @__PURE__ */ defineBlock({
    format(args) {
      const transactions = args.transactions?.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        const formatted = formatTransaction(transaction);
        if (formatted.typeHex === "0x7e") {
          formatted.isSystemTx = transaction.isSystemTx;
          formatted.mint = transaction.mint ? hexToBigInt(transaction.mint) : void 0;
          formatted.sourceHash = transaction.sourceHash;
          formatted.type = "deposit";
        }
        return formatted;
      });
      return {
        transactions,
        stateRoot: args.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ defineTransaction({
    format(args) {
      const transaction = {};
      if (args.type === "0x7e") {
        transaction.isSystemTx = args.isSystemTx;
        transaction.mint = args.mint ? hexToBigInt(args.mint) : void 0;
        transaction.sourceHash = args.sourceHash;
        transaction.type = "deposit";
      }
      return transaction;
    }
  }),
  transactionReceipt: /* @__PURE__ */ defineTransactionReceipt({
    format(args) {
      return {
        l1GasPrice: args.l1GasPrice ? hexToBigInt(args.l1GasPrice) : null,
        l1GasUsed: args.l1GasUsed ? hexToBigInt(args.l1GasUsed) : null,
        l1Fee: args.l1Fee ? hexToBigInt(args.l1Fee) : null,
        l1FeeScalar: args.l1FeeScalar ? Number(args.l1FeeScalar) : null
      };
    }
  })
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/op-stack/serializers.js
init_address();
init_isAddress();
init_concat();
init_toHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/getAction.js
function getAction(client, action, name) {
  return (params) => client[action.name || name]?.(params) ?? action(client, params);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/encodeEventTopics.js
init_abi();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/log.js
init_base();
var FilterTypeNotSupportedError = class extends BaseError {
  constructor(type) {
    super(`Filter type "${type}" is not supported.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "FilterTypeNotSupportedError"
    });
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/encodeEventTopics.js
init_toBytes();
init_keccak256();
init_toEventSelector();
init_encodeAbiParameters();
init_formatAbiItem2();
init_getAbiItem();
var docsPath = "/docs/contract/encodeEventTopics";
function encodeEventTopics(parameters) {
  const { abi, eventName, args } = parameters;
  let abiItem = abi[0];
  if (eventName) {
    const item = getAbiItem({ abi, name: eventName });
    if (!item)
      throw new AbiEventNotFoundError(eventName, { docsPath });
    abiItem = item;
  }
  if (abiItem.type !== "event")
    throw new AbiEventNotFoundError(void 0, { docsPath });
  const definition = formatAbiItem2(abiItem);
  const signature = toEventSelector(definition);
  let topics = [];
  if (args && "inputs" in abiItem) {
    const indexedInputs = abiItem.inputs?.filter((param) => "indexed" in param && param.indexed);
    const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? indexedInputs?.map((x) => args[x.name]) ?? [] : [];
    if (args_.length > 0) {
      topics = indexedInputs?.map((param, i) => Array.isArray(args_[i]) ? args_[i].map((_, j2) => encodeArg({ param, value: args_[i][j2] })) : args_[i] ? encodeArg({ param, value: args_[i] }) : null) ?? [];
    }
  }
  return [signature, ...topics];
}
function encodeArg({ param, value }) {
  if (param.type === "string" || param.type === "bytes")
    return keccak256(toBytes(value));
  if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    throw new FilterTypeNotSupportedError(param.type);
  return encodeAbiParameters([param], [value]);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/createContractEventFilter.js
init_toHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js
function createFilterRequestScope(client, { method }) {
  const requestMap = {};
  if (client.transport.type === "fallback")
    client.transport.onResponse?.(({ method: method_, response: id, status, transport }) => {
      if (status === "success" && method === method_)
        requestMap[id] = transport.request;
    });
  return (id) => requestMap[id] || client.request;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/createContractEventFilter.js
async function createContractEventFilter(client, parameters) {
  const { address, abi, args, eventName, fromBlock, strict, toBlock } = parameters;
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  const topics = eventName ? encodeEventTopics({
    abi,
    args,
    eventName
  }) : void 0;
  const id = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        topics
      }
    ]
  });
  return {
    abi,
    args,
    eventName,
    id,
    request: getRequest(id),
    strict: Boolean(strict),
    type: "event"
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/estimateContractGas.js
init_parseAccount();
init_encodeFunctionData();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/errors/getContractError.js
init_abi();
init_base();
init_contract();
init_rpc();
var EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath: docsPath6, functionName, sender }) {
  const { code, data, message, shortMessage } = err instanceof RawContractError ? err : err instanceof BaseError ? err.walk((err2) => "data" in err2) || err.walk() : {};
  const cause = (() => {
    if (err instanceof AbiDecodingZeroDataError)
      return new ContractFunctionZeroDataError({ functionName });
    if ([EXECUTION_REVERTED_ERROR_CODE, InternalRpcError.code].includes(code) && (data || message || shortMessage)) {
      return new ContractFunctionRevertedError({
        abi,
        data: typeof data === "object" ? data.data : data,
        functionName,
        message: shortMessage ?? message
      });
    }
    return err;
  })();
  return new ContractFunctionExecutionError(cause, {
    abi,
    args,
    contractAddress: address,
    docsPath: docsPath6,
    functionName,
    sender
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/estimateGas.js
init_parseAccount();
init_toHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/estimateGas.js
init_formatEther();
init_formatGwei();
init_base();
init_transaction();
var EstimateGasExecutionError = class extends BaseError {
  constructor(cause, { account, docsPath: docsPath6, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
    const prettyArgs = prettyPrint({
      from: account?.address,
      to,
      value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
      data,
      gas,
      gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
      maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
      maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
      nonce
    });
    super(cause.shortMessage, {
      cause,
      docsPath: docsPath6,
      metaMessages: [
        ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        prettyArgs
      ].filter(Boolean)
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EstimateGasExecutionError"
    });
    this.cause = cause;
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/errors/getEstimateGasError.js
init_node();
init_getNodeError();
function getEstimateGasError(err, { docsPath: docsPath6, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new EstimateGasExecutionError(cause, {
    docsPath: docsPath6,
    ...args
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/estimateGas.js
init_extract();
init_transactionRequest();
init_assertRequest();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
init_parseAccount();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/fee.js
init_formatGwei();
init_base();
var BaseFeeScalarError = class extends BaseError {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseFeeScalarError"
    });
  }
};
var Eip1559FeesNotSupportedError = class extends BaseError {
  constructor() {
    super("Chain does not support EIP-1559 fees.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Eip1559FeesNotSupportedError"
    });
  }
};
var MaxFeePerGasTooLowError = class extends BaseError {
  constructor({ maxPriorityFeePerGas }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${formatGwei(maxPriorityFeePerGas)} gwei).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "MaxFeePerGasTooLowError"
    });
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js
init_fromHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/block.js
init_base();
var BlockNotFoundError = class extends BaseError {
  constructor({ blockHash, blockNumber }) {
    let identifier = "Block";
    if (blockHash)
      identifier = `Block at hash "${blockHash}"`;
    if (blockNumber)
      identifier = `Block at number "${blockNumber}"`;
    super(`${identifier} could not be found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BlockNotFoundError"
    });
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getBlock.js
init_toHex();
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_ } = {}) {
  const blockTag = blockTag_ ?? "latest";
  const includeTransactions = includeTransactions_ ?? false;
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let block = null;
  if (blockHash) {
    block = await client.request({
      method: "eth_getBlockByHash",
      params: [blockHash, includeTransactions]
    });
  } else {
    block = await client.request({
      method: "eth_getBlockByNumber",
      params: [blockNumberHex || blockTag, includeTransactions]
    });
  }
  if (!block)
    throw new BlockNotFoundError({ blockHash, blockNumber });
  const format = client.chain?.formatters?.block?.format || formatBlock;
  return format(block);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getGasPrice.js
async function getGasPrice(client) {
  const gasPrice = await client.request({
    method: "eth_gasPrice"
  });
  return BigInt(gasPrice);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js
async function estimateMaxPriorityFeePerGas(client, args) {
  return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
  const { block: block_, chain = client.chain, request } = args || {};
  if (typeof chain?.fees?.defaultPriorityFee === "function") {
    const block = block_ || await getAction(client, getBlock, "getBlock")({});
    return chain.fees.defaultPriorityFee({
      block,
      client,
      request
    });
  }
  if (typeof chain?.fees?.defaultPriorityFee !== "undefined")
    return chain?.fees?.defaultPriorityFee;
  try {
    const maxPriorityFeePerGasHex = await client.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return hexToBigInt(maxPriorityFeePerGasHex);
  } catch {
    const [block, gasPrice] = await Promise.all([
      block_ ? Promise.resolve(block_) : getAction(client, getBlock, "getBlock")({}),
      getAction(client, getGasPrice, "getGasPrice")({})
    ]);
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
    if (maxPriorityFeePerGas < 0n)
      return 0n;
    return maxPriorityFeePerGas;
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js
async function estimateFeesPerGas(client, args) {
  return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
  const { block: block_, chain = client.chain, request, type = "eip1559" } = args || {};
  const baseFeeMultiplier = await (async () => {
    if (typeof chain?.fees?.baseFeeMultiplier === "function")
      return chain.fees.baseFeeMultiplier({
        block: block_,
        client,
        request
      });
    return chain?.fees?.baseFeeMultiplier ?? 1.2;
  })();
  if (baseFeeMultiplier < 1)
    throw new BaseFeeScalarError();
  const decimals = baseFeeMultiplier.toString().split(".")[1]?.length ?? 0;
  const denominator = 10 ** decimals;
  const multiply = (base2) => base2 * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
  const block = block_ ? block_ : await getAction(client, getBlock, "getBlock")({});
  if (typeof chain?.fees?.estimateFeesPerGas === "function") {
    const fees = await chain.fees.estimateFeesPerGas({
      block: block_,
      client,
      multiply,
      request,
      type
    });
    if (fees !== null)
      return fees;
  }
  if (type === "eip1559") {
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === "bigint" ? request.maxPriorityFeePerGas : await internal_estimateMaxPriorityFeePerGas(client, {
      block,
      chain,
      request
    });
    const baseFeePerGas = multiply(block.baseFeePerGas);
    const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  const gasPrice = request?.gasPrice ?? multiply(await getAction(client, getGasPrice, "getGasPrice")({}));
  return {
    gasPrice
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getTransactionCount.js
init_fromHex();
init_toHex();
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
  const count = await client.request({
    method: "eth_getTransactionCount",
    params: [address, blockNumber ? numberToHex(blockNumber) : blockTag]
  });
  return hexToNumber(count);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/account.js
init_base();
var AccountNotFoundError = class extends BaseError {
  constructor({ docsPath: docsPath6 } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."
    ].join("\n"), {
      docsPath: docsPath6,
      docsSlug: "account"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AccountNotFoundError"
    });
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
init_assertRequest();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/getTransactionType.js
init_transaction();
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.blobs !== "undefined" || typeof transaction.blobVersionedHashes !== "undefined" || typeof transaction.maxFeePerBlobGas !== "undefined" || typeof transaction.sidecars !== "undefined")
    return "eip4844";
  if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined") {
    return "eip1559";
  }
  if (typeof transaction.gasPrice !== "undefined") {
    if (typeof transaction.accessList !== "undefined")
      return "eip2930";
    return "legacy";
  }
  throw new InvalidSerializableTransactionError({ transaction });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getChainId.js
init_fromHex();
async function getChainId(client) {
  const chainIdHex = await client.request({
    method: "eth_chainId"
  });
  return hexToNumber(chainIdHex);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
async function prepareTransactionRequest(client, args) {
  const { account: account_ = client.account, chain, chainId, gas, nonce, parameters = ["chainId", "fees", "gas", "nonce", "type"], type } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  const request = { ...args, ...account ? { from: account?.address } : {} };
  if (parameters.includes("chainId")) {
    if (chain)
      request.chainId = chain.id;
    else if (typeof chainId !== "undefined")
      request.chainId = chainId;
    else
      request.chainId = await getAction(client, getChainId, "getChainId")({});
  }
  if (parameters.includes("nonce") && typeof nonce === "undefined" && account)
    request.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
      address: account.address,
      blockTag: "pending"
    });
  const block = await (() => {
    if (typeof request.type !== "undefined")
      return;
    return getAction(client, getBlock, "getBlock")({ blockTag: "latest" });
  })();
  if ((parameters.includes("fees") || parameters.includes("type")) && typeof type === "undefined") {
    try {
      request.type = getTransactionType(request);
    } catch {
      request.type = typeof block?.baseFeePerGas === "bigint" ? "eip1559" : "legacy";
    }
  }
  if (parameters.includes("fees")) {
    if (request.type === "eip1559" || request.type === "eip4844") {
      if (typeof request.maxFeePerGas === "undefined" || typeof request.maxPriorityFeePerGas === "undefined") {
        const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
          block,
          chain,
          request
        });
        if (typeof args.maxPriorityFeePerGas === "undefined" && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas)
          throw new MaxFeePerGasTooLowError({
            maxPriorityFeePerGas
          });
        request.maxPriorityFeePerGas = maxPriorityFeePerGas;
        request.maxFeePerGas = maxFeePerGas;
      }
    } else {
      if (typeof args.maxFeePerGas !== "undefined" || typeof args.maxPriorityFeePerGas !== "undefined")
        throw new Eip1559FeesNotSupportedError();
      const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
        block,
        chain,
        request,
        type: "legacy"
      });
      request.gasPrice = gasPrice_;
    }
  }
  if (parameters.includes("gas") && typeof gas === "undefined")
    request.gas = await getAction(client, estimateGas, "estimateGas")({
      ...request,
      account: account ? { address: account.address, type: "json-rpc" } : void 0
    });
  assertRequest(request);
  delete request.parameters;
  return request;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/estimateGas.js
async function estimateGas(client, args) {
  const account_ = args.account ?? client.account;
  const account = account_ ? parseAccount(account_) : void 0;
  try {
    const { accessList, blobs, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = account?.type === "local" ? await prepareTransactionRequest(client, args) : args;
    const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    assertRequest(args);
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      from: account?.address,
      accessList,
      blobs,
      data,
      gas,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    const balance = await client.request({
      method: "eth_estimateGas",
      params: block ? [request, block] : [request]
    });
    return BigInt(balance);
  } catch (err) {
    throw getEstimateGasError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/estimateContractGas.js
async function estimateContractGas(client, parameters) {
  const { abi, address, args, functionName, ...request } = parameters;
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const gas = await getAction(client, estimateGas, "estimateGas")({
      data,
      to: address,
      ...request
    });
    return gas;
  } catch (error) {
    const account = request.account ? parseAccount(request.account) : void 0;
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/estimateContractGas",
      functionName,
      sender: account?.address
    });
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getContractEvents.js
init_getAbiItem();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/decodeEventLog.js
init_abi();
init_size();
init_toEventSelector();
init_cursor();
init_decodeAbiParameters();
init_formatAbiItem2();
var docsPath3 = "/docs/contract/decodeEventLog";
function decodeEventLog(parameters) {
  const { abi, data, strict: strict_, topics } = parameters;
  const strict = strict_ ?? true;
  const [signature, ...argTopics] = topics;
  if (!signature)
    throw new AbiEventSignatureEmptyTopicsError({ docsPath: docsPath3 });
  const abiItem = abi.find((x) => x.type === "event" && signature === toEventSelector(formatAbiItem2(x)));
  if (!(abiItem && "name" in abiItem) || abiItem.type !== "event")
    throw new AbiEventSignatureNotFoundError(signature, { docsPath: docsPath3 });
  const { name, inputs } = abiItem;
  const isUnnamed = inputs?.some((x) => !("name" in x && x.name));
  let args = isUnnamed ? [] : {};
  const indexedInputs = inputs.filter((x) => "indexed" in x && x.indexed);
  for (let i = 0; i < indexedInputs.length; i++) {
    const param = indexedInputs[i];
    const topic = argTopics[i];
    if (!topic)
      throw new DecodeLogTopicsMismatch({
        abiItem,
        param
      });
    args[param.name || i] = decodeTopic({ param, value: topic });
  }
  const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
  if (nonIndexedInputs.length > 0) {
    if (data && data !== "0x") {
      try {
        const decodedData = decodeAbiParameters(nonIndexedInputs, data);
        if (decodedData) {
          if (isUnnamed)
            args = [...args, ...decodedData];
          else {
            for (let i = 0; i < nonIndexedInputs.length; i++) {
              args[nonIndexedInputs[i].name] = decodedData[i];
            }
          }
        }
      } catch (err) {
        if (strict) {
          if (err instanceof AbiDecodingDataSizeTooSmallError || err instanceof PositionOutOfBoundsError)
            throw new DecodeLogDataMismatch({
              abiItem,
              data,
              params: nonIndexedInputs,
              size: size(data)
            });
          throw err;
        }
      }
    } else if (strict) {
      throw new DecodeLogDataMismatch({
        abiItem,
        data: "0x",
        params: nonIndexedInputs,
        size: 0
      });
    }
  }
  return {
    eventName: name,
    args: Object.values(args).length > 0 ? args : void 0
  };
}
function decodeTopic({ param, value }) {
  if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    return value;
  const decodedArg = decodeAbiParameters([param], value) || [];
  return decodedArg[0];
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/parseEventLogs.js
function parseEventLogs({ abi, eventName, logs, strict = true }) {
  return logs.map((log) => {
    try {
      const event = decodeEventLog({
        ...log,
        abi,
        strict
      });
      if (eventName && !eventName.includes(event.eventName))
        return null;
      return { ...event, ...log };
    } catch (err) {
      let eventName2;
      let isUnnamed;
      if (err instanceof AbiEventSignatureNotFoundError)
        return null;
      if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
        if (strict)
          return null;
        eventName2 = err.abiItem.name;
        isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
      }
      return { ...log, args: isUnnamed ? [] : {}, eventName: eventName2 };
    }
  }).filter(Boolean);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getLogs.js
init_toHex();
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
  const strict = strict_ ?? false;
  const events = events_ ?? (event ? [event] : void 0);
  let topics = [];
  if (events) {
    topics = [
      events.flatMap((event2) => encodeEventTopics({
        abi: [event2],
        eventName: event2.name,
        args
      }))
    ];
    if (event)
      topics = topics[0];
  }
  let logs;
  if (blockHash) {
    logs = await client.request({
      method: "eth_getLogs",
      params: [{ address, topics, blockHash }]
    });
  } else {
    logs = await client.request({
      method: "eth_getLogs",
      params: [
        {
          address,
          topics,
          fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
          toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock
        }
      ]
    });
  }
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!events)
    return formattedLogs;
  return parseEventLogs({
    abi: events,
    logs: formattedLogs,
    strict
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getContractEvents.js
async function getContractEvents(client, parameters) {
  const { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
  const event = eventName ? getAbiItem({ abi, name: eventName }) : void 0;
  const events = !event ? abi.filter((x) => x.type === "event") : void 0;
  return getAction(client, getLogs, "getLogs")({
    address,
    args,
    blockHash,
    event,
    events,
    fromBlock,
    toBlock,
    strict
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/readContract.js
init_decodeFunctionResult();
init_encodeFunctionData();
init_call();
async function readContract(client, parameters) {
  const { abi, address, args, functionName, ...rest } = parameters;
  const calldata = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const { data } = await getAction(client, call2, "call")({
      ...rest,
      data: calldata,
      to: address
    });
    return decodeFunctionResult({
      abi,
      args,
      functionName,
      data: data || "0x"
    });
  } catch (error) {
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/readContract",
      functionName
    });
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/simulateContract.js
init_parseAccount();
init_decodeFunctionResult();
init_encodeFunctionData();
init_call();
async function simulateContract(client, parameters) {
  const { abi, address, args, dataSuffix, functionName, ...callRequest } = parameters;
  const account = callRequest.account ? parseAccount(callRequest.account) : client.account;
  const calldata = encodeFunctionData({ abi, args, functionName });
  try {
    const { data } = await getAction(client, call2, "call")({
      batch: false,
      data: `${calldata}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...callRequest,
      account
    });
    const result = decodeFunctionResult({
      abi,
      args,
      functionName,
      data: data || "0x"
    });
    const minimizedAbi = abi.filter((abiItem) => "name" in abiItem && abiItem.name === parameters.functionName);
    return {
      result,
      request: {
        abi: minimizedAbi,
        address,
        args,
        dataSuffix,
        functionName,
        ...callRequest,
        account
      }
    };
  } catch (error) {
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/simulateContract",
      functionName,
      sender: account?.address
    });
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/watchContractEvent.js
init_abi();
init_rpc();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/observe.js
var listenersCache = /* @__PURE__ */ new Map();
var cleanupCache = /* @__PURE__ */ new Map();
var callbackCount = 0;
function observe(observerId, callbacks, fn) {
  const callbackId = ++callbackCount;
  const getListeners = () => listenersCache.get(observerId) || [];
  const unsubscribe = () => {
    const listeners2 = getListeners();
    listenersCache.set(observerId, listeners2.filter((cb) => cb.id !== callbackId));
  };
  const unwatch = () => {
    const cleanup2 = cleanupCache.get(observerId);
    if (getListeners().length === 1 && cleanup2)
      cleanup2();
    unsubscribe();
  };
  const listeners = getListeners();
  listenersCache.set(observerId, [
    ...listeners,
    { id: callbackId, fns: callbacks }
  ]);
  if (listeners && listeners.length > 0)
    return unwatch;
  const emit = {};
  for (const key in callbacks) {
    emit[key] = (...args) => {
      const listeners2 = getListeners();
      if (listeners2.length === 0)
        return;
      for (const listener of listeners2)
        listener.fns[key]?.(...args);
    };
  }
  const cleanup = fn(emit);
  if (typeof cleanup === "function")
    cleanupCache.set(observerId, cleanup);
  return unwatch;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/wait.js
async function wait(time2) {
  return new Promise((res) => setTimeout(res, time2));
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/poll.js
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
  let active = true;
  const unwatch = () => active = false;
  const watch = async () => {
    let data = void 0;
    if (emitOnBegin)
      data = await fn({ unpoll: unwatch });
    const initialWait = await initialWaitTime?.(data) ?? interval;
    await wait(initialWait);
    const poll2 = async () => {
      if (!active)
        return;
      await fn({ unpoll: unwatch });
      await wait(interval);
      poll2();
    };
    poll2();
  };
  watch();
  return unwatch;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/watchContractEvent.js
init_stringify();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/promise/withCache.js
var promiseCache = /* @__PURE__ */ new Map();
var responseCache = /* @__PURE__ */ new Map();
function getCache(cacheKey2) {
  const buildCache = (cacheKey3, cache) => ({
    clear: () => cache.delete(cacheKey3),
    get: () => cache.get(cacheKey3),
    set: (data) => cache.set(cacheKey3, data)
  });
  const promise = buildCache(cacheKey2, promiseCache);
  const response = buildCache(cacheKey2, responseCache);
  return {
    clear: () => {
      promise.clear();
      response.clear();
    },
    promise,
    response
  };
}
async function withCache(fn, { cacheKey: cacheKey2, cacheTime = Infinity }) {
  const cache = getCache(cacheKey2);
  const response = cache.response.get();
  if (response && cacheTime > 0) {
    const age = (/* @__PURE__ */ new Date()).getTime() - response.created.getTime();
    if (age < cacheTime)
      return response.data;
  }
  let promise = cache.promise.get();
  if (!promise) {
    promise = fn();
    cache.promise.set(promise);
  }
  try {
    const data = await promise;
    cache.response.set({ created: /* @__PURE__ */ new Date(), data });
    return data;
  } finally {
    cache.promise.clear();
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getBlockNumber.js
var cacheKey = (id) => `blockNumber.${id}`;
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
  const blockNumberHex = await withCache(() => client.request({
    method: "eth_blockNumber"
  }), { cacheKey: cacheKey(client.uid), cacheTime });
  return BigInt(blockNumberHex);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getFilterChanges.js
async function getFilterChanges(_client, { filter }) {
  const strict = "strict" in filter && filter.strict;
  const logs = await filter.request({
    method: "eth_getFilterChanges",
    params: [filter.id]
  });
  if (typeof logs[0] === "string")
    return logs;
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!("abi" in filter) || !filter.abi)
    return formattedLogs;
  return parseEventLogs({
    abi: filter.abi,
    logs: formattedLogs,
    strict
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/uninstallFilter.js
async function uninstallFilter(_client, { filter }) {
  return filter.request({
    method: "eth_uninstallFilter",
    params: [filter.id]
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/watchContractEvent.js
function watchContractEvent(client, parameters) {
  const { abi, address, args, batch = true, eventName, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const pollContractEvent = () => {
    const strict = strict_ ?? false;
    const observerId = stringify([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval,
      strict
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        if (!initialized) {
          try {
            filter = await getAction(client, createContractEventFilter, "createContractEventFilter")({
              abi,
              address,
              args,
              eventName,
              strict
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getContractEvents, "getContractEvents")({
                abi,
                address,
                args,
                eventName,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber,
                strict
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeContractEvent = () => {
    const strict = strict_ ?? false;
    const observerId = stringify([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval,
      strict
    ]);
    let active = true;
    let unsubscribe = () => active = false;
    return observe(observerId, { onLogs, onError }, (emit) => {
      ;
      (async () => {
        try {
          const topics = eventName ? encodeEventTopics({
            abi,
            eventName,
            args
          }) : [];
          const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
            params: ["logs", { address, topics }],
            onData(data) {
              if (!active)
                return;
              const log = data.result;
              try {
                const { eventName: eventName2, args: args2 } = decodeEventLog({
                  abi,
                  data: log.data,
                  topics: log.topics,
                  strict: strict_
                });
                const formatted = formatLog(log, {
                  args: args2,
                  eventName: eventName2
                });
                emit.onLogs([formatted]);
              } catch (err) {
                let eventName2;
                let isUnnamed;
                if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                  if (strict_)
                    return;
                  eventName2 = err.abiItem.name;
                  isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
                }
                const formatted = formatLog(log, {
                  args: isUnnamed ? [] : {},
                  eventName: eventName2
                });
                emit.onLogs([formatted]);
              }
            },
            onError(error) {
              emit.onError?.(error);
            }
          });
          unsubscribe = unsubscribe_;
          if (!active)
            unsubscribe();
        } catch (err) {
          onError?.(err);
        }
      })();
      return () => unsubscribe();
    });
  };
  return enablePolling ? pollContractEvent() : subscribeContractEvent();
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/writeContract.js
init_encodeFunctionData();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/sendTransaction.js
init_parseAccount();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/chain/assertCurrentChain.js
init_chain();
function assertCurrentChain({ chain, currentChainId }) {
  if (!chain)
    throw new ChainNotFoundError();
  if (currentChainId !== chain.id)
    throw new ChainMismatchError({ chain, currentChainId });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/errors/getTransactionError.js
init_node();
init_transaction();
init_getNodeError();
function getTransactionError(err, { docsPath: docsPath6, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new TransactionExecutionError(cause, {
    docsPath: docsPath6,
    ...args
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/sendTransaction.js
init_extract();
init_transactionRequest();
init_assertRequest();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js
async function sendRawTransaction(client, { serializedTransaction }) {
  return client.request({
    method: "eth_sendRawTransaction",
    params: [serializedTransaction]
  }, { retryCount: 0 });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/sendTransaction.js
async function sendTransaction(client, parameters) {
  const { account: account_ = client.account, chain = client.chain, accessList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = parameters;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const account = parseAccount(account_);
  try {
    assertRequest(parameters);
    let chainId;
    if (chain !== null) {
      chainId = await getAction(client, getChainId, "getChainId")({});
      assertCurrentChain({
        currentChainId: chainId,
        chain
      });
    }
    if (account.type === "local") {
      const request2 = await getAction(client, prepareTransactionRequest, "prepareTransactionRequest")({
        account,
        accessList,
        blobs,
        chain,
        chainId,
        data,
        gas,
        gasPrice,
        maxFeePerBlobGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value,
        ...rest
      });
      const serializer = chain?.serializers?.transaction;
      const serializedTransaction = await account.signTransaction(request2, {
        serializer
      });
      return await getAction(client, sendRawTransaction, "sendRawTransaction")({
        serializedTransaction
      });
    }
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      accessList,
      blobs,
      data,
      from: account.address,
      gas,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    return await client.request({
      method: "eth_sendTransaction",
      params: [request]
    }, { retryCount: 0 });
  } catch (err) {
    throw getTransactionError(err, {
      ...parameters,
      account,
      chain: parameters.chain || void 0
    });
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/wallet/writeContract.js
async function writeContract(client, parameters) {
  const { abi, address, args, dataSuffix, functionName, ...request } = parameters;
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  return getAction(client, sendTransaction, "sendTransaction")({
    data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
    to: address,
    ...request
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/getContract.js
function getContract({ abi, address, client: client_ }) {
  const client = client_;
  const [publicClient, walletClient] = (() => {
    if (!client)
      return [void 0, void 0];
    if ("public" in client && "wallet" in client)
      return [client.public, client.wallet];
    if ("public" in client)
      return [client.public, void 0];
    if ("wallet" in client)
      return [void 0, client.wallet];
    return [client, client];
  })();
  const hasPublicClient = publicClient !== void 0 && publicClient !== null;
  const hasWalletClient = walletClient !== void 0 && walletClient !== null;
  const contract = {};
  let hasReadFunction = false;
  let hasWriteFunction = false;
  let hasEvent = false;
  for (const item of abi) {
    if (item.type === "function")
      if (item.stateMutability === "view" || item.stateMutability === "pure")
        hasReadFunction = true;
      else
        hasWriteFunction = true;
    else if (item.type === "event")
      hasEvent = true;
    if (hasReadFunction && hasWriteFunction && hasEvent)
      break;
  }
  if (hasPublicClient) {
    if (hasReadFunction)
      contract.read = new Proxy({}, {
        get(_, functionName) {
          return (...parameters) => {
            const { args, options } = getFunctionParameters(parameters);
            return getAction(publicClient, readContract, "readContract")({
              abi,
              address,
              functionName,
              args,
              ...options
            });
          };
        }
      });
    if (hasWriteFunction)
      contract.simulate = new Proxy({}, {
        get(_, functionName) {
          return (...parameters) => {
            const { args, options } = getFunctionParameters(parameters);
            return getAction(publicClient, simulateContract, "simulateContract")({
              abi,
              address,
              functionName,
              args,
              ...options
            });
          };
        }
      });
    if (hasEvent) {
      contract.createEventFilter = new Proxy({}, {
        get(_, eventName) {
          return (...parameters) => {
            const abiEvent = abi.find((x) => x.type === "event" && x.name === eventName);
            const { args, options } = getEventParameters(parameters, abiEvent);
            return getAction(publicClient, createContractEventFilter, "createContractEventFilter")({
              abi,
              address,
              eventName,
              args,
              ...options
            });
          };
        }
      });
      contract.getEvents = new Proxy({}, {
        get(_, eventName) {
          return (...parameters) => {
            const abiEvent = abi.find((x) => x.type === "event" && x.name === eventName);
            const { args, options } = getEventParameters(parameters, abiEvent);
            return getAction(publicClient, getContractEvents, "getContractEvents")({
              abi,
              address,
              eventName,
              args,
              ...options
            });
          };
        }
      });
      contract.watchEvent = new Proxy({}, {
        get(_, eventName) {
          return (...parameters) => {
            const abiEvent = abi.find((x) => x.type === "event" && x.name === eventName);
            const { args, options } = getEventParameters(parameters, abiEvent);
            return getAction(publicClient, watchContractEvent, "watchContractEvent")({
              abi,
              address,
              eventName,
              args,
              ...options
            });
          };
        }
      });
    }
  }
  if (hasWalletClient) {
    if (hasWriteFunction)
      contract.write = new Proxy({}, {
        get(_, functionName) {
          return (...parameters) => {
            const { args, options } = getFunctionParameters(parameters);
            return getAction(walletClient, writeContract, "writeContract")({
              abi,
              address,
              functionName,
              args,
              ...options
            });
          };
        }
      });
  }
  if (hasPublicClient || hasWalletClient) {
    if (hasWriteFunction)
      contract.estimateGas = new Proxy({}, {
        get(_, functionName) {
          return (...parameters) => {
            const { args, options } = getFunctionParameters(parameters);
            const client2 = publicClient ?? walletClient;
            return getAction(client2, estimateContractGas, "estimateContractGas")({
              abi,
              address,
              functionName,
              args,
              ...options,
              account: options.account ?? walletClient.account
            });
          };
        }
      });
  }
  contract.address = address;
  contract.abi = abi;
  return contract;
}
function getFunctionParameters(values) {
  const hasArgs = values.length && Array.isArray(values[0]);
  const args = hasArgs ? values[0] : [];
  const options = (hasArgs ? values[1] : values[0]) ?? {};
  return { args, options };
}
function getEventParameters(values, abiEvent) {
  let hasArgs = false;
  if (Array.isArray(values[0]))
    hasArgs = true;
  else if (values.length === 1) {
    hasArgs = abiEvent.inputs.some((x) => x.indexed);
  } else if (values.length === 2) {
    hasArgs = true;
  }
  const args = hasArgs ? values[0] : void 0;
  const options = (hasArgs ? values[1] : values[0]) ?? {};
  return { args, options };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/accounts.js
init_parseAccount();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/uid.js
var size2 = 256;
var index = size2;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size2 * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size2; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/clients/createClient.js
function createClient(parameters) {
  const { batch, cacheTime = parameters.pollingInterval ?? 4e3, ccipRead, key = "base", name = "Base Client", pollingInterval = 4e3, type = "base" } = parameters;
  const chain = parameters.chain;
  const account = parameters.account ? parseAccount(parameters.account) : void 0;
  const { config, request, value } = parameters.transport({
    chain,
    pollingInterval
  });
  const transport = { ...config, ...value };
  const client = {
    account,
    batch,
    cacheTime,
    ccipRead,
    chain,
    key,
    name,
    pollingInterval,
    request,
    transport,
    type,
    uid: uid()
  };
  function extend(base2) {
    return (extendFn) => {
      const extended = extendFn(base2);
      for (const key2 in client)
        delete extended[key2];
      const combined = { ...base2, ...extended };
      return Object.assign(combined, { extend: extend(combined) });
    };
  }
  return Object.assign(client, { extend: extend(client) });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/buildRequest.js
init_base();
init_request();
init_rpc();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/promise/withRetry.js
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry: shouldRetry2 = () => true } = {}) {
  return new Promise((resolve, reject) => {
    const attemptRetry = async ({ count = 0 } = {}) => {
      const retry = async ({ error }) => {
        const delay = typeof delay_ === "function" ? delay_({ count, error }) : delay_;
        if (delay)
          await wait(delay);
        attemptRetry({ count: count + 1 });
      };
      try {
        const data = await fn();
        resolve(data);
      } catch (err) {
        if (count < retryCount && await shouldRetry2({ count, error: err }))
          return retry({ error: err });
        reject(err);
      }
    };
    attemptRetry();
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/buildRequest.js
function buildRequest(request, options = {}) {
  return async (args, overrideOptions = {}) => {
    const { retryDelay = 150, retryCount = 3 } = {
      ...options,
      ...overrideOptions
    };
    return withRetry(async () => {
      try {
        return await request(args);
      } catch (err_) {
        const err = err_;
        switch (err.code) {
          case ParseRpcError.code:
            throw new ParseRpcError(err);
          case InvalidRequestRpcError.code:
            throw new InvalidRequestRpcError(err);
          case MethodNotFoundRpcError.code:
            throw new MethodNotFoundRpcError(err);
          case InvalidParamsRpcError.code:
            throw new InvalidParamsRpcError(err);
          case InternalRpcError.code:
            throw new InternalRpcError(err);
          case InvalidInputRpcError.code:
            throw new InvalidInputRpcError(err);
          case ResourceNotFoundRpcError.code:
            throw new ResourceNotFoundRpcError(err);
          case ResourceUnavailableRpcError.code:
            throw new ResourceUnavailableRpcError(err);
          case TransactionRejectedRpcError.code:
            throw new TransactionRejectedRpcError(err);
          case MethodNotSupportedRpcError.code:
            throw new MethodNotSupportedRpcError(err);
          case LimitExceededRpcError.code:
            throw new LimitExceededRpcError(err);
          case JsonRpcVersionUnsupportedError.code:
            throw new JsonRpcVersionUnsupportedError(err);
          case UserRejectedRequestError.code:
            throw new UserRejectedRequestError(err);
          case UnauthorizedProviderError.code:
            throw new UnauthorizedProviderError(err);
          case UnsupportedProviderMethodError.code:
            throw new UnsupportedProviderMethodError(err);
          case ProviderDisconnectedError.code:
            throw new ProviderDisconnectedError(err);
          case ChainDisconnectedError.code:
            throw new ChainDisconnectedError(err);
          case SwitchChainError.code:
            throw new SwitchChainError(err);
          case 5e3:
            throw new UserRejectedRequestError(err);
          default:
            if (err_ instanceof BaseError)
              throw err_;
            throw new UnknownRpcError(err);
        }
      }
    }, {
      delay: ({ count, error }) => {
        if (error && error instanceof HttpRequestError) {
          const retryAfter = error?.headers?.get("Retry-After");
          if (retryAfter?.match(/\d/))
            return parseInt(retryAfter) * 1e3;
        }
        return ~~(1 << count) * retryDelay;
      },
      retryCount,
      shouldRetry: ({ error }) => shouldRetry(error)
    });
  };
}
function shouldRetry(error) {
  if ("code" in error && typeof error.code === "number") {
    if (error.code === -1)
      return true;
    if (error.code === LimitExceededRpcError.code)
      return true;
    if (error.code === InternalRpcError.code)
      return true;
    return false;
  }
  if (error instanceof HttpRequestError && error.status) {
    if (error.status === 403)
      return true;
    if (error.status === 408)
      return true;
    if (error.status === 413)
      return true;
    if (error.status === 429)
      return true;
    if (error.status === 500)
      return true;
    if (error.status === 502)
      return true;
    if (error.status === 503)
      return true;
    if (error.status === 504)
      return true;
    return false;
  }
  return true;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/clients/transports/createTransport.js
function createTransport({ key, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
  return {
    config: { key, name, request, retryCount, retryDelay, timeout, type },
    request: buildRequest(request, { retryCount, retryDelay }),
    value
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/clients/transports/http.js
init_request();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/transport.js
init_base();
var UrlRequiredError = class extends BaseError {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro"
    });
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/clients/transports/http.js
init_createBatchScheduler();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/rpc/http.js
init_request();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/promise/withTimeout.js
function withTimeout(fn, { errorInstance = new Error("timed out"), timeout, signal }) {
  return new Promise((resolve, reject) => {
    ;
    (async () => {
      let timeoutId;
      try {
        const controller = new AbortController();
        if (timeout > 0) {
          timeoutId = setTimeout(() => {
            if (signal) {
              controller.abort();
            } else {
              reject(errorInstance);
            }
          }, timeout);
        }
        resolve(await fn({ signal: controller?.signal || null }));
      } catch (err) {
        if (err.name === "AbortError")
          reject(errorInstance);
        reject(err);
      } finally {
        clearTimeout(timeoutId);
      }
    })();
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/rpc/http.js
init_stringify();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/rpc/id.js
function createIdStore() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
var idCache = /* @__PURE__ */ createIdStore();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/rpc/http.js
function getHttpRpcClient(url, options = {}) {
  return {
    async request(params) {
      const { body, fetchOptions = {}, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 1e4 } = params;
      const { headers, method, signal: signal_ } = { ...options.fetchOptions, ...fetchOptions };
      try {
        const response = await withTimeout(async ({ signal }) => {
          const request = new Request(url, {
            ...fetchOptions,
            body: Array.isArray(body) ? stringify(body.map((body2) => ({
              jsonrpc: "2.0",
              id: body2.id ?? idCache.take(),
              ...body2
            }))) : stringify({
              jsonrpc: "2.0",
              id: body.id ?? idCache.take(),
              ...body
            }),
            headers: {
              ...headers,
              "Content-Type": "application/json"
            },
            method: method || "POST",
            signal: signal_ || (timeout > 0 ? signal : null)
          });
          if (onRequest)
            await onRequest(request);
          const response2 = await fetch(request);
          return response2;
        }, {
          errorInstance: new TimeoutError({ body, url }),
          timeout,
          signal: true
        });
        if (onResponse)
          await onResponse(response);
        let data;
        if (response.headers.get("Content-Type")?.startsWith("application/json"))
          data = await response.json();
        else
          data = await response.text();
        if (!response.ok) {
          throw new HttpRequestError({
            body,
            details: stringify(data.error) || response.statusText,
            headers: response.headers,
            status: response.status,
            url
          });
        }
        return data;
      } catch (err) {
        if (err instanceof HttpRequestError)
          throw err;
        if (err instanceof TimeoutError)
          throw err;
        throw new HttpRequestError({
          body,
          details: err.message,
          url
        });
      }
    }
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/clients/transports/http.js
function http(url, config = {}) {
  const { batch, fetchOptions, key = "http", name = "HTTP JSON-RPC", onFetchRequest, onFetchResponse, retryDelay } = config;
  return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
    const { batchSize = 1e3, wait: wait2 = 0 } = typeof batch === "object" ? batch : {};
    const retryCount = config.retryCount ?? retryCount_;
    const timeout = timeout_ ?? config.timeout ?? 1e4;
    const url_ = url || chain?.rpcUrls.default.http[0];
    if (!url_)
      throw new UrlRequiredError();
    const rpcClient = getHttpRpcClient(url_, {
      fetchOptions,
      onRequest: onFetchRequest,
      onResponse: onFetchResponse,
      timeout
    });
    return createTransport({
      key,
      name,
      async request({ method, params }) {
        const body = { method, params };
        const { schedule } = createBatchScheduler({
          id: `${url}`,
          wait: wait2,
          shouldSplitBatch(requests) {
            return requests.length > batchSize;
          },
          fn: (body2) => rpcClient.request({
            body: body2
          }),
          sort: (a, b) => a.id - b.id
        });
        const fn = async (body2) => batch ? schedule(body2) : [
          await rpcClient.request({
            body: body2
          })
        ];
        const [{ error, result }] = await fn(body);
        if (error)
          throw new RpcRequestError({
            body,
            error,
            url: url_
          });
        return result;
      },
      retryCount,
      retryDelay,
      timeout,
      type: "http"
    }, {
      fetchOptions,
      url: url_
    });
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/ens/getEnsAddress.js
init_abis();
init_decodeFunctionResult();
init_encodeFunctionData();
init_getChainContractAddress();
init_trim();
init_toHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/errors.js
init_solidity();
init_base();
init_contract();
function isNullUniversalResolverError(err, callType) {
  if (!(err instanceof BaseError))
    return false;
  const cause = err.walk((e) => e instanceof ContractFunctionRevertedError);
  if (!(cause instanceof ContractFunctionRevertedError))
    return false;
  if (cause.data?.errorName === "ResolverNotFound")
    return true;
  if (cause.data?.errorName === "ResolverWildcardNotSupported")
    return true;
  if (cause.data?.errorName === "ResolverNotContract")
    return true;
  if (cause.data?.errorName === "ResolverError")
    return true;
  if (cause.data?.errorName === "HttpError")
    return true;
  if (cause.reason?.includes("Wildcard on non-extended resolvers is not supported"))
    return true;
  if (callType === "reverse" && cause.reason === panicReasons[50])
    return true;
  return false;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/namehash.js
init_concat();
init_toBytes();
init_toHex();
init_keccak256();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/encodedLabelToLabelhash.js
init_isHex();
function encodedLabelToLabelhash(label) {
  if (label.length !== 66)
    return null;
  if (label.indexOf("[") !== 0)
    return null;
  if (label.indexOf("]") !== 65)
    return null;
  const hash2 = `0x${label.slice(1, 65)}`;
  if (!isHex(hash2))
    return null;
  return hash2;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/namehash.js
function namehash(name) {
  let result = new Uint8Array(32).fill(0);
  if (!name)
    return bytesToHex(result);
  const labels = name.split(".");
  for (let i = labels.length - 1; i >= 0; i -= 1) {
    const hashFromEncodedLabel = encodedLabelToLabelhash(labels[i]);
    const hashed = hashFromEncodedLabel ? toBytes(hashFromEncodedLabel) : keccak256(stringToBytes(labels[i]), "bytes");
    result = keccak256(concat([result, hashed]), "bytes");
  }
  return bytesToHex(result);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/packetToBytes.js
init_toBytes();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/encodeLabelhash.js
function encodeLabelhash(hash2) {
  return `[${hash2.slice(2)}]`;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/labelhash.js
init_toBytes();
init_toHex();
init_keccak256();
function labelhash(label) {
  const result = new Uint8Array(32).fill(0);
  if (!label)
    return bytesToHex(result);
  return encodedLabelToLabelhash(label) || keccak256(stringToBytes(label));
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/packetToBytes.js
function packetToBytes(packet) {
  const value = packet.replace(/^\.|\.$/gm, "");
  if (value.length === 0)
    return new Uint8Array(1);
  const bytes2 = new Uint8Array(stringToBytes(value).byteLength + 2);
  let offset = 0;
  const list = value.split(".");
  for (let i = 0; i < list.length; i++) {
    let encoded = stringToBytes(list[i]);
    if (encoded.byteLength > 255)
      encoded = stringToBytes(encodeLabelhash(labelhash(list[i])));
    bytes2[offset] = encoded.length;
    bytes2.set(encoded, offset + 1);
    offset += encoded.length + 1;
  }
  if (bytes2.byteLength !== offset + 1)
    return bytes2.slice(0, offset + 1);
  return bytes2;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/ens/getEnsAddress.js
async function getEnsAddress(client, { blockNumber, blockTag, coinType, name, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const functionData = encodeFunctionData({
      abi: addressResolverAbi,
      functionName: "addr",
      ...coinType != null ? { args: [namehash(name), BigInt(coinType)] } : { args: [namehash(name)] }
    });
    const readContractParameters = {
      address: universalResolverAddress,
      abi: universalResolverResolveAbi,
      functionName: "resolve",
      args: [toHex2(packetToBytes(name)), functionData],
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const res = gatewayUrls ? await readContractAction({
      ...readContractParameters,
      args: [...readContractParameters.args, gatewayUrls]
    }) : await readContractAction(readContractParameters);
    if (res[0] === "0x")
      return null;
    const address = decodeFunctionResult({
      abi: addressResolverAbi,
      args: coinType != null ? [namehash(name), BigInt(coinType)] : void 0,
      functionName: "addr",
      data: res[0]
    });
    if (address === "0x")
      return null;
    if (trim(address) === "0x00")
      return null;
    return address;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err, "resolve"))
      return null;
    throw err;
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/ens.js
init_base();
var EnsAvatarInvalidMetadataError = class extends BaseError {
  constructor({ data }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(data)}`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EnsAvatarInvalidMetadataError"
    });
  }
};
var EnsAvatarInvalidNftUriError = class extends BaseError {
  constructor({ reason }) {
    super(`ENS NFT avatar URI is invalid. ${reason}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EnsAvatarInvalidNftUriError"
    });
  }
};
var EnsAvatarUriResolutionError = class extends BaseError {
  constructor({ uri: uri2 }) {
    super(`Unable to resolve ENS avatar URI "${uri2}". The URI may be malformed, invalid, or does not respond with a valid image.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EnsAvatarUriResolutionError"
    });
  }
};
var EnsAvatarUnsupportedNamespaceError = class extends BaseError {
  constructor({ namespace }) {
    super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EnsAvatarUnsupportedNamespaceError"
    });
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/avatar/utils.js
var networkRegex = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
var ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
var base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
var dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri2) {
  try {
    const res = await fetch(uri2, { method: "HEAD" });
    if (res.status === 200) {
      const contentType = res.headers.get("content-type");
      return contentType?.startsWith("image/");
    }
    return false;
  } catch (error) {
    if (typeof error === "object" && typeof error.response !== "undefined") {
      return false;
    }
    if (!globalThis.hasOwnProperty("Image"))
      return false;
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(true);
      };
      img.onerror = () => {
        resolve(false);
      };
      img.src = uri2;
    });
  }
}
function getGateway(custom, defaultGateway) {
  if (!custom)
    return defaultGateway;
  if (custom.endsWith("/"))
    return custom.slice(0, -1);
  return custom;
}
function resolveAvatarUri({ uri: uri2, gatewayUrls }) {
  const isEncoded = base64Regex.test(uri2);
  if (isEncoded)
    return { uri: uri2, isOnChain: true, isEncoded };
  const ipfsGateway = getGateway(gatewayUrls?.ipfs, "https://ipfs.io");
  const arweaveGateway = getGateway(gatewayUrls?.arweave, "https://arweave.net");
  const networkRegexMatch = uri2.match(networkRegex);
  const { protocol, subpath, target, subtarget = "" } = networkRegexMatch?.groups || {};
  const isIPNS = protocol === "ipns:/" || subpath === "ipns/";
  const isIPFS = protocol === "ipfs:/" || subpath === "ipfs/" || ipfsHashRegex.test(uri2);
  if (uri2.startsWith("http") && !isIPNS && !isIPFS) {
    let replacedUri = uri2;
    if (gatewayUrls?.arweave)
      replacedUri = uri2.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
    return { uri: replacedUri, isOnChain: false, isEncoded: false };
  }
  if ((isIPNS || isIPFS) && target) {
    return {
      uri: `${ipfsGateway}/${isIPNS ? "ipns" : "ipfs"}/${target}${subtarget}`,
      isOnChain: false,
      isEncoded: false
    };
  }
  if (protocol === "ar:/" && target) {
    return {
      uri: `${arweaveGateway}/${target}${subtarget || ""}`,
      isOnChain: false,
      isEncoded: false
    };
  }
  let parsedUri = uri2.replace(dataURIRegex, "");
  if (parsedUri.startsWith("<svg")) {
    parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
  }
  if (parsedUri.startsWith("data:") || parsedUri.startsWith("{")) {
    return {
      uri: parsedUri,
      isOnChain: true,
      isEncoded: false
    };
  }
  throw new EnsAvatarUriResolutionError({ uri: uri2 });
}
function getJsonImage(data) {
  if (typeof data !== "object" || !("image" in data) && !("image_url" in data) && !("image_data" in data)) {
    throw new EnsAvatarInvalidMetadataError({ data });
  }
  return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri: uri2 }) {
  try {
    const res = await fetch(uri2).then((res2) => res2.json());
    const image = await parseAvatarUri({
      gatewayUrls,
      uri: getJsonImage(res)
    });
    return image;
  } catch {
    throw new EnsAvatarUriResolutionError({ uri: uri2 });
  }
}
async function parseAvatarUri({ gatewayUrls, uri: uri2 }) {
  const { uri: resolvedURI, isOnChain } = resolveAvatarUri({ uri: uri2, gatewayUrls });
  if (isOnChain)
    return resolvedURI;
  const isImage = await isImageUri(resolvedURI);
  if (isImage)
    return resolvedURI;
  throw new EnsAvatarUriResolutionError({ uri: uri2 });
}
function parseNftUri(uri_) {
  let uri2 = uri_;
  if (uri2.startsWith("did:nft:")) {
    uri2 = uri2.replace("did:nft:", "").replace(/_/g, "/");
  }
  const [reference, asset_namespace, tokenID] = uri2.split("/");
  const [eip_namespace, chainID] = reference.split(":");
  const [erc_namespace, contractAddress] = asset_namespace.split(":");
  if (!eip_namespace || eip_namespace.toLowerCase() !== "eip155")
    throw new EnsAvatarInvalidNftUriError({ reason: "Only EIP-155 supported" });
  if (!chainID)
    throw new EnsAvatarInvalidNftUriError({ reason: "Chain ID not found" });
  if (!contractAddress)
    throw new EnsAvatarInvalidNftUriError({
      reason: "Contract address not found"
    });
  if (!tokenID)
    throw new EnsAvatarInvalidNftUriError({ reason: "Token ID not found" });
  if (!erc_namespace)
    throw new EnsAvatarInvalidNftUriError({ reason: "ERC namespace not found" });
  return {
    chainID: parseInt(chainID),
    namespace: erc_namespace.toLowerCase(),
    contractAddress,
    tokenID
  };
}
async function getNftTokenUri(client, { nft }) {
  if (nft.namespace === "erc721") {
    return readContract(client, {
      address: nft.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(nft.tokenID)]
    });
  }
  if (nft.namespace === "erc1155") {
    return readContract(client, {
      address: nft.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(nft.tokenID)]
    });
  }
  throw new EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js
async function parseAvatarRecord(client, { gatewayUrls, record }) {
  if (/eip155:/i.test(record))
    return parseNftAvatarUri(client, { gatewayUrls, record });
  return parseAvatarUri({ uri: record, gatewayUrls });
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
  const nft = parseNftUri(record);
  const nftUri = await getNftTokenUri(client, { nft });
  const { uri: resolvedNftUri, isOnChain, isEncoded } = resolveAvatarUri({ uri: nftUri, gatewayUrls });
  if (isOnChain && (resolvedNftUri.includes("data:application/json;base64,") || resolvedNftUri.startsWith("{"))) {
    const encodedJson = isEncoded ? (
      // if it is encoded, decode it
      atob(resolvedNftUri.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      resolvedNftUri
    );
    const decoded = JSON.parse(encodedJson);
    return parseAvatarUri({ uri: getJsonImage(decoded), gatewayUrls });
  }
  let uriTokenId = nft.tokenID;
  if (nft.namespace === "erc1155")
    uriTokenId = uriTokenId.replace("0x", "").padStart(64, "0");
  return getMetadataAvatarUri({
    gatewayUrls,
    uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/ens/getEnsText.js
init_abis();
init_decodeFunctionResult();
init_encodeFunctionData();
init_getChainContractAddress();
init_toHex();
async function getEnsText(client, { blockNumber, blockTag, name, key, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const readContractParameters = {
      address: universalResolverAddress,
      abi: universalResolverResolveAbi,
      functionName: "resolve",
      args: [
        toHex2(packetToBytes(name)),
        encodeFunctionData({
          abi: textResolverAbi,
          functionName: "text",
          args: [namehash(name), key]
        })
      ],
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const res = gatewayUrls ? await readContractAction({
      ...readContractParameters,
      args: [...readContractParameters.args, gatewayUrls]
    }) : await readContractAction(readContractParameters);
    if (res[0] === "0x")
      return null;
    const record = decodeFunctionResult({
      abi: textResolverAbi,
      functionName: "text",
      data: res[0]
    });
    return record === "" ? null : record;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err, "resolve"))
      return null;
    throw err;
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/ens/getEnsAvatar.js
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress }) {
  const record = await getAction(client, getEnsText, "getEnsText")({
    blockNumber,
    blockTag,
    key: "avatar",
    name,
    universalResolverAddress,
    gatewayUrls,
    strict
  });
  if (!record)
    return null;
  try {
    return await parseAvatarRecord(client, {
      record,
      gatewayUrls: assetGatewayUrls
    });
  } catch {
    return null;
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/ens/getEnsName.js
init_abis();
init_getChainContractAddress();
init_toHex();
async function getEnsName(client, { address, blockNumber, blockTag, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const readContractParameters = {
      address: universalResolverAddress,
      abi: universalResolverReverseAbi,
      functionName: "reverse",
      args: [toHex2(packetToBytes(reverseNode))],
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const [name, resolvedAddress] = gatewayUrls ? await readContractAction({
      ...readContractParameters,
      args: [...readContractParameters.args, gatewayUrls]
    }) : await readContractAction(readContractParameters);
    if (address.toLowerCase() !== resolvedAddress.toLowerCase())
      return null;
    return name;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err, "reverse"))
      return null;
    throw err;
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/ens/getEnsResolver.js
init_getChainContractAddress();
init_toHex();
async function getEnsResolver(client, { blockNumber, blockTag, name, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [resolverAddress] = await getAction(client, readContract, "readContract")({
    address: universalResolverAddress,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [toHex2(packetToBytes(name))],
    blockNumber,
    blockTag
  });
  return resolverAddress;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/clients/decorators/public.js
init_call();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/createBlockFilter.js
async function createBlockFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newBlockFilter"
  });
  const id = await client.request({
    method: "eth_newBlockFilter"
  });
  return { id, request: getRequest(id), type: "block" };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/createEventFilter.js
init_toHex();
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
  const events = events_ ?? (event ? [event] : void 0);
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  let topics = [];
  if (events) {
    topics = [
      events.flatMap((event2) => encodeEventTopics({
        abi: [event2],
        eventName: event2.name,
        args
      }))
    ];
    if (event)
      topics = topics[0];
  }
  const id = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        ...topics.length ? { topics } : {}
      }
    ]
  });
  return {
    abi: events,
    args,
    eventName: event ? event.name : void 0,
    fromBlock,
    id,
    request: getRequest(id),
    strict: Boolean(strict),
    toBlock,
    type: "event"
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js
async function createPendingTransactionFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newPendingTransactionFilter"
  });
  const id = await client.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id, request: getRequest(id), type: "transaction" };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getBalance.js
init_toHex();
async function getBalance(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const balance = await client.request({
    method: "eth_getBalance",
    params: [address, blockNumberHex || blockTag]
  });
  return BigInt(balance);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getBlobBaseFee.js
async function getBlobBaseFee(client) {
  const baseFee = await client.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(baseFee);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getBlockTransactionCount.js
init_fromHex();
init_toHex();
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = "latest" } = {}) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let count;
  if (blockHash) {
    count = await client.request({
      method: "eth_getBlockTransactionCountByHash",
      params: [blockHash]
    });
  } else {
    count = await client.request({
      method: "eth_getBlockTransactionCountByNumber",
      params: [blockNumberHex || blockTag]
    });
  }
  return hexToNumber(count);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getBytecode.js
init_toHex();
async function getBytecode(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const hex = await client.request({
    method: "eth_getCode",
    params: [address, blockNumberHex || blockTag]
  });
  if (hex === "0x")
    return void 0;
  return hex;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getFeeHistory.js
init_toHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/feeHistory.js
function formatFeeHistory(feeHistory) {
  return {
    baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
    gasUsedRatio: feeHistory.gasUsedRatio,
    oldestBlock: BigInt(feeHistory.oldestBlock),
    reward: feeHistory.reward?.map((reward) => reward.map((value) => BigInt(value)))
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getFeeHistory.js
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = "latest", rewardPercentiles }) {
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const feeHistory = await client.request({
    method: "eth_feeHistory",
    params: [
      numberToHex(blockCount),
      blockNumberHex || blockTag,
      rewardPercentiles
    ]
  });
  return formatFeeHistory(feeHistory);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getFilterLogs.js
async function getFilterLogs(_client, { filter }) {
  const strict = filter.strict ?? false;
  const logs = await filter.request({
    method: "eth_getFilterLogs",
    params: [filter.id]
  });
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!filter.abi)
    return formattedLogs;
  return parseEventLogs({
    abi: filter.abi,
    logs: formattedLogs,
    strict
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getProof.js
init_toHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/regex.js
var arrayRegex = /^(.*)\[([0-9]*)\]$/;
var bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/typedData.js
init_abi();
init_address();
init_isAddress();
init_size();
init_toHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/signature/hashTypedData.js
init_encodeAbiParameters();
init_concat();
init_toHex();
init_keccak256();
function hashTypedData(parameters) {
  const { domain = {}, message, primaryType } = parameters;
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...parameters.types
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x1901"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain")
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  return keccak256(concat(parts));
}
function hashDomain({ domain, types }) {
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types
  });
}
function hashStruct({ data, primaryType, types }) {
  const encoded = encodeData({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
function encodeData({ data, primaryType, types }) {
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType]) {
    const [type, value] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value);
  }
  return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
  const encodedHashType = toHex2(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeType({ primaryType, types }) {
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = /* @__PURE__ */ new Set()) {
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match?.[0];
  if (results.has(primaryType) || types[primaryType] === void 0) {
    return results;
  }
  results.add(primaryType);
  for (const field of types[primaryType]) {
    findTypeDependencies({ primaryType: field.type, types }, results);
  }
  return results;
}
function encodeField({ types, name, type, value }) {
  if (types[type] !== void 0) {
    return [
      { type: "bytes32" },
      keccak256(encodeData({ data: value, primaryType: type, types }))
    ];
  }
  if (type === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, keccak256(value)];
  }
  if (type === "string")
    return [{ type: "bytes32" }, keccak256(toHex2(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/typedData.js
function validateTypedData(parameters) {
  const { domain, message, primaryType, types } = parameters;
  const validateData = (struct, data) => {
    for (const param of struct) {
      const { name, type } = param;
      const value = data[name];
      const integerMatch = type.match(integerRegex);
      if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
        const [_type, base2, size_] = integerMatch;
        numberToHex(value, {
          signed: base2 === "int",
          size: parseInt(size_) / 8
        });
      }
      if (type === "address" && typeof value === "string" && !isAddress(value))
        throw new InvalidAddressError({ address: value });
      const bytesMatch = type.match(bytesRegex);
      if (bytesMatch) {
        const [_type, size_] = bytesMatch;
        if (size_ && size(value) !== parseInt(size_))
          throw new BytesSizeMismatchError({
            expectedSize: parseInt(size_),
            givenSize: size(value)
          });
      }
      const struct2 = types[type];
      if (struct2)
        validateData(struct2, value);
    }
  };
  if (types.EIP712Domain && domain)
    validateData(types.EIP712Domain, domain);
  if (primaryType !== "EIP712Domain") {
    const type = types[primaryType];
    validateData(type, message);
  }
}
function getTypesForEIP712Domain({ domain }) {
  return [
    typeof domain?.name === "string" && { name: "name", type: "string" },
    domain?.version && { name: "version", type: "string" },
    typeof domain?.chainId === "number" && {
      name: "chainId",
      type: "uint256"
    },
    domain?.verifyingContract && {
      name: "verifyingContract",
      type: "address"
    },
    domain?.salt && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/encodeDeployData.js
init_abi();
init_concat();
init_encodeAbiParameters();
var docsPath5 = "/docs/contract/encodeDeployData";
function encodeDeployData(parameters) {
  const { abi, args, bytecode } = parameters;
  if (!args || args.length === 0)
    return bytecode;
  const description = abi.find((x) => "type" in x && x.type === "constructor");
  if (!description)
    throw new AbiConstructorNotFoundError({ docsPath: docsPath5 });
  if (!("inputs" in description))
    throw new AbiConstructorParamsNotFoundError({ docsPath: docsPath5 });
  if (!description.inputs || description.inputs.length === 0)
    throw new AbiConstructorParamsNotFoundError({ docsPath: docsPath5 });
  const data = encodeAbiParameters(description.inputs, args);
  return concatHex([bytecode, data]);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/abi/encodePacked.js
init_abi();
init_address();
init_isAddress();
init_concat();
init_pad();
init_toHex();
function encodePacked(types, values) {
  if (types.length !== values.length)
    throw new AbiEncodingLengthMismatchError({
      expectedLength: types.length,
      givenLength: values.length
    });
  const data = [];
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    const value = values[i];
    data.push(encode(type, value));
  }
  return concatHex(data);
}
function encode(type, value, isArray = false) {
  if (type === "address") {
    const address = value;
    if (!isAddress(address))
      throw new InvalidAddressError({ address });
    return pad(address.toLowerCase(), {
      size: isArray ? 32 : null
    });
  }
  if (type === "string")
    return stringToHex(value);
  if (type === "bytes")
    return value;
  if (type === "bool")
    return pad(boolToHex(value), { size: isArray ? 32 : 1 });
  const intMatch = type.match(integerRegex);
  if (intMatch) {
    const [_type, baseType, bits = "256"] = intMatch;
    const size3 = parseInt(bits) / 8;
    return numberToHex(value, {
      size: isArray ? 32 : size3,
      signed: baseType === "int"
    });
  }
  const bytesMatch = type.match(bytesRegex);
  if (bytesMatch) {
    const [_type, size3] = bytesMatch;
    if (parseInt(size3) !== (value.length - 2) / 2)
      throw new BytesSizeMismatchError({
        expectedSize: parseInt(size3),
        givenSize: (value.length - 2) / 2
      });
    return pad(value, { dir: "right", size: isArray ? 32 : null });
  }
  const arrayMatch = type.match(arrayRegex);
  if (arrayMatch && Array.isArray(value)) {
    const [_type, childType] = arrayMatch;
    const data = [];
    for (let i = 0; i < value.length; i++) {
      data.push(encode(childType, value[i], true));
    }
    if (data.length === 0)
      return "0x";
    return concatHex(data);
  }
  throw new UnsupportedPackedAbiType(type);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/index.js
init_isHex();
init_toHex();
init_fromHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/isHash.js
init_isHex();
init_size();
function isHash(hash2) {
  return isHex(hash2) && size(hash2) === 32;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/hash/sha256.js
init_sha256();
init_isHex();
init_toBytes();
init_toHex();
function sha2562(value, to_) {
  const to = to_ || "hex";
  const bytes2 = sha256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes2;
  return toHex2(bytes2);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/strings.js
var presignMessagePrefix = "Ethereum Signed Message:\n";

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/signature/hashMessage.js
init_concat();
init_toBytes();
init_keccak256();
function hashMessage(message, to_) {
  const messageBytes = (() => {
    if (typeof message === "string")
      return stringToBytes(message);
    if (message.raw instanceof Uint8Array)
      return message.raw;
    return toBytes(message.raw);
  })();
  const prefixBytes = stringToBytes(`${presignMessagePrefix}${messageBytes.length}`);
  return keccak256(concat([prefixBytes, messageBytes]), to_);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/kzg.js
var versionedHashVersionKzg = 1;

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/assertTransaction.js
init_address();
init_base();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/errors/blob.js
init_base();
var BlobSizeTooLargeError = class extends BaseError {
  constructor({ maxSize, size: size3 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size3} bytes`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BlobSizeTooLargeError"
    });
  }
};
var EmptyBlobError = class extends BaseError {
  constructor() {
    super("Blob data must not be empty.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EmptyBlobError"
    });
  }
};
var InvalidVersionedHashSizeError = class extends BaseError {
  constructor({ hash: hash2, size: size3 }) {
    super(`Versioned hash "${hash2}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${size3}`]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidVersionedHashSizeError"
    });
  }
};
var InvalidVersionedHashVersionError = class extends BaseError {
  constructor({ hash: hash2, version: version2 }) {
    super(`Versioned hash "${hash2}" version is invalid.`, {
      metaMessages: [
        `Expected: ${versionedHashVersionKzg}`,
        `Received: ${version2}`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "InvalidVersionedHashVersionError"
    });
  }
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/assertTransaction.js
init_chain();
init_node();
init_isAddress();
init_size();
init_slice();
init_fromHex();
function assertTransactionEIP4844(transaction) {
  const { blobVersionedHashes } = transaction;
  if (blobVersionedHashes) {
    if (blobVersionedHashes.length === 0)
      throw new EmptyBlobError();
    for (const hash2 of blobVersionedHashes) {
      const size_ = size(hash2);
      const version2 = hexToNumber(slice(hash2, 0, 1));
      if (size_ !== 32)
        throw new InvalidVersionedHashSizeError({ hash: hash2, size: size_ });
      if (version2 !== versionedHashVersionKzg)
        throw new InvalidVersionedHashVersionError({
          hash: hash2,
          version: version2
        });
    }
  }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
  const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
function assertTransactionEIP2930(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (gasPrice && gasPrice > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}
function assertTransactionLegacy(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, accessList } = transaction;
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof chainId !== "undefined" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (gasPrice && gasPrice > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
  if (accessList)
    throw new BaseError("`accessList` is not a valid Legacy Transaction attribute.");
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/blob/blobsToCommitments.js
init_toBytes();
init_toHex();
function blobsToCommitments(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = [];
  for (const blob of blobs)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return to === "bytes" ? commitments : commitments.map((x) => bytesToHex(x));
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/blob/blobsToProofs.js
init_toBytes();
init_toHex();
function blobsToProofs(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = typeof parameters.commitments[0] === "string" ? parameters.commitments.map((x) => hexToBytes(x)) : parameters.commitments;
  const proofs = [];
  for (let i = 0; i < blobs.length; i++) {
    const blob = blobs[i];
    const commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return to === "bytes" ? proofs : proofs.map((x) => bytesToHex(x));
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/blob.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/blob/toBlobs.js
init_cursor2();
init_size();
init_toBytes();
init_toHex();
function toBlobs(parameters) {
  const to = parameters.to ?? (typeof parameters.data === "string" ? "hex" : "bytes");
  const data = typeof parameters.data === "string" ? hexToBytes(parameters.data) : parameters.data;
  const size_ = size(data);
  if (!size_)
    throw new EmptyBlobError();
  if (size_ > maxBytesPerTransaction)
    throw new BlobSizeTooLargeError({
      maxSize: maxBytesPerTransaction,
      size: size_
    });
  const blobs = [];
  let active = true;
  let position = 0;
  while (active) {
    const blob = createCursor(new Uint8Array(bytesPerBlob));
    let size3 = 0;
    while (size3 < fieldElementsPerBlob) {
      const bytes2 = data.slice(position, position + (bytesPerFieldElement - 1));
      blob.pushByte(0);
      blob.pushBytes(bytes2);
      if (bytes2.length < 31) {
        blob.pushByte(128);
        active = false;
        break;
      }
      size3++;
      position += 31;
    }
    blobs.push(blob);
  }
  return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => bytesToHex(x.bytes));
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/blob/toBlobSidecars.js
function toBlobSidecars(parameters) {
  const { data, kzg, to } = parameters;
  const blobs = parameters.blobs ?? toBlobs({ data, to });
  const commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg, to });
  const proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg, to });
  const sidecars = [];
  for (let i = 0; i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/serializeTransaction.js
init_transaction();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
init_toHex();
function commitmentToVersionedHash(parameters) {
  const { commitment, version: version2 = 1 } = parameters;
  const to = parameters.to ?? (typeof commitment === "string" ? "hex" : "bytes");
  const versionedHash = sha2562(commitment, "bytes");
  versionedHash.set([version2], 0);
  return to === "bytes" ? versionedHash : bytesToHex(versionedHash);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js
function commitmentsToVersionedHashes(parameters) {
  const { commitments, version: version2 } = parameters;
  const to = parameters.to ?? (typeof commitments[0] === "string" ? "hex" : "bytes");
  const hashes = [];
  for (const commitment of commitments) {
    hashes.push(commitmentToVersionedHash({
      commitment,
      to,
      version: version2
    }));
  }
  return hashes;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/serializeTransaction.js
init_concat();
init_trim();
init_toHex();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/serializeAccessList.js
init_address();
init_transaction();
init_isAddress();
function serializeAccessList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  const serializedAccessList = [];
  for (let i = 0; i < accessList.length; i++) {
    const { address, storageKeys } = accessList[i];
    for (let j2 = 0; j2 < storageKeys.length; j2++) {
      if (storageKeys[j2].length - 2 !== 64) {
        throw new InvalidStorageKeySizeError({ storageKey: storageKeys[j2] });
      }
    }
    if (!isAddress(address, { strict: false })) {
      throw new InvalidAddressError({ address });
    }
    serializedAccessList.push([address, storageKeys]);
  }
  return serializedAccessList;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/transaction/serializeTransaction.js
function serializeTransaction(transaction, signature) {
  const type = getTransactionType(transaction);
  if (type === "eip1559")
    return serializeTransactionEIP1559(transaction, signature);
  if (type === "eip2930")
    return serializeTransactionEIP2930(transaction, signature);
  if (type === "eip4844")
    return serializeTransactionEIP4844(transaction, signature);
  return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP4844(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP4844(transaction);
  let blobVersionedHashes = transaction.blobVersionedHashes;
  let sidecars = transaction.sidecars;
  if (transaction.blobs) {
    const blobs2 = typeof transaction.blobs[0] === "string" ? transaction.blobs : transaction.blobs.map((x) => bytesToHex(x));
    const kzg = transaction.kzg;
    const commitments2 = blobsToCommitments({
      blobs: blobs2,
      kzg
    });
    const proofs2 = blobsToProofs({ blobs: blobs2, commitments: commitments2, kzg });
    blobVersionedHashes = commitmentsToVersionedHashes({
      commitments: commitments2
    });
    if (sidecars !== false)
      sidecars = toBlobSidecars({ blobs: blobs2, commitments: commitments2, proofs: proofs2 });
  }
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex2(chainId),
    nonce ? toHex2(nonce) : "0x",
    maxPriorityFeePerGas ? toHex2(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex2(maxFeePerGas) : "0x",
    gas ? toHex2(gas) : "0x",
    to ?? "0x",
    value ? toHex2(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    maxFeePerBlobGas ? toHex2(maxFeePerBlobGas) : "0x",
    blobVersionedHashes ?? [],
    ...toYParitySignatureArray(transaction, signature)
  ];
  const blobs = [];
  const commitments = [];
  const proofs = [];
  if (sidecars)
    for (let i = 0; i < sidecars.length; i++) {
      const { blob, commitment, proof } = sidecars[i];
      blobs.push(blob);
      commitments.push(commitment);
      proofs.push(proof);
    }
  return concatHex([
    "0x03",
    sidecars ? (
      // If sidecars are enabled, envelope turns into a "wrapper":
      toRlp([serializedTransaction, blobs, commitments, proofs])
    ) : (
      // If sidecars are disabled, standard envelope is used:
      toRlp(serializedTransaction)
    )
  ]);
}
function serializeTransactionEIP1559(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP1559(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex2(chainId),
    nonce ? toHex2(nonce) : "0x",
    maxPriorityFeePerGas ? toHex2(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex2(maxFeePerGas) : "0x",
    gas ? toHex2(gas) : "0x",
    to ?? "0x",
    value ? toHex2(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x02",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionEIP2930(transaction, signature) {
  const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
  assertTransactionEIP2930(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex2(chainId),
    nonce ? toHex2(nonce) : "0x",
    gasPrice ? toHex2(gasPrice) : "0x",
    gas ? toHex2(gas) : "0x",
    to ?? "0x",
    value ? toHex2(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x01",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionLegacy(transaction, signature) {
  const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
  assertTransactionLegacy(transaction);
  let serializedTransaction = [
    nonce ? toHex2(nonce) : "0x",
    gasPrice ? toHex2(gasPrice) : "0x",
    gas ? toHex2(gas) : "0x",
    to ?? "0x",
    value ? toHex2(value) : "0x",
    data ?? "0x"
  ];
  if (signature) {
    const v = (() => {
      if (signature.v >= 35n) {
        const inferredChainId = (signature.v - 35n) / 2n;
        if (inferredChainId > 0)
          return signature.v;
        return 27n + (signature.v === 35n ? 0n : 1n);
      }
      if (chainId > 0)
        return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
      const v2 = 27n + (signature.v === 27n ? 0n : 1n);
      if (signature.v !== v2)
        throw new InvalidLegacyVError({ v: signature.v });
      return v2;
    })();
    serializedTransaction = [
      ...serializedTransaction,
      toHex2(v),
      signature.r,
      signature.s
    ];
  } else if (chainId > 0) {
    serializedTransaction = [
      ...serializedTransaction,
      toHex2(chainId),
      "0x",
      "0x"
    ];
  }
  return toRlp(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature) {
  const { r, s, v, yParity } = signature ?? transaction;
  if (typeof r === "undefined")
    return [];
  if (typeof s === "undefined")
    return [];
  if (typeof v === "undefined" && typeof yParity === "undefined")
    return [];
  const yParity_ = (() => {
    if (typeof yParity === "number")
      return yParity ? toHex2(1) : "0x";
    if (v === 0n)
      return "0x";
    if (v === 1n)
      return toHex2(1);
    return v === 27n ? "0x" : toHex2(1);
  })();
  return [yParity_, trim(r), trim(s)];
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/formatters/proof.js
function formatStorageProof(storageProof) {
  return storageProof.map((proof) => ({
    ...proof,
    value: BigInt(proof.value)
  }));
}
function formatProof(proof) {
  return {
    ...proof,
    balance: proof.balance ? BigInt(proof.balance) : void 0,
    nonce: proof.nonce ? hexToNumber(proof.nonce) : void 0,
    storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : void 0
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getProof.js
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
  const blockTag = blockTag_ ?? "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const proof = await client.request({
    method: "eth_getProof",
    params: [address, storageKeys, blockNumberHex || blockTag]
  });
  return formatProof(proof);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getStorageAt.js
init_toHex();
async function getStorageAt(client, { address, blockNumber, blockTag = "latest", slot }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const data = await client.request({
    method: "eth_getStorageAt",
    params: [address, slot, blockNumberHex || blockTag]
  });
  return data;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getTransaction.js
init_transaction();
init_toHex();
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash: hash2, index: index2 }) {
  const blockTag = blockTag_ || "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let transaction = null;
  if (hash2) {
    transaction = await client.request({
      method: "eth_getTransactionByHash",
      params: [hash2]
    });
  } else if (blockHash) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [blockHash, numberToHex(index2)]
    });
  } else if (blockNumberHex || blockTag) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [blockNumberHex || blockTag, numberToHex(index2)]
    });
  }
  if (!transaction)
    throw new TransactionNotFoundError({
      blockHash,
      blockNumber,
      blockTag,
      hash: hash2,
      index: index2
    });
  const format = client.chain?.formatters?.transaction?.format || formatTransaction;
  return format(transaction);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getTransactionConfirmations.js
async function getTransactionConfirmations(client, { hash: hash2, transactionReceipt }) {
  const [blockNumber, transaction] = await Promise.all([
    getAction(client, getBlockNumber, "getBlockNumber")({}),
    hash2 ? getAction(client, getTransaction, "getBlockNumber")({ hash: hash2 }) : void 0
  ]);
  const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
  if (!transactionBlockNumber)
    return 0n;
  return blockNumber - transactionBlockNumber + 1n;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/getTransactionReceipt.js
init_transaction();
async function getTransactionReceipt(client, { hash: hash2 }) {
  const receipt = await client.request({
    method: "eth_getTransactionReceipt",
    params: [hash2]
  });
  if (!receipt)
    throw new TransactionReceiptNotFoundError({ hash: hash2 });
  const format = client.chain?.formatters?.transactionReceipt?.format || formatTransactionReceipt;
  return format(receipt);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/multicall.js
init_abis();
init_abi();
init_base();
init_contract();
init_decodeFunctionResult();
init_encodeFunctionData();
init_getChainContractAddress();
async function multicall(client, parameters) {
  const { allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, multicallAddress: multicallAddress_, stateOverride } = parameters;
  const contracts2 = parameters.contracts;
  const batchSize = batchSize_ ?? (typeof client.batch?.multicall === "object" && client.batch.multicall.batchSize || 1024);
  let multicallAddress = multicallAddress_;
  if (!multicallAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    multicallAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "multicall3"
    });
  }
  const chunkedCalls = [[]];
  let currentChunk = 0;
  let currentChunkSize = 0;
  for (let i = 0; i < contracts2.length; i++) {
    const { abi, address, args, functionName } = contracts2[i];
    try {
      const callData = encodeFunctionData({ abi, args, functionName });
      currentChunkSize += (callData.length - 2) / 2;
      if (
        // Check if batching is enabled.
        batchSize > 0 && // Check if the current size of the batch exceeds the size limit.
        currentChunkSize > batchSize && // Check if the current chunk is not already empty.
        chunkedCalls[currentChunk].length > 0
      ) {
        currentChunk++;
        currentChunkSize = (callData.length - 2) / 2;
        chunkedCalls[currentChunk] = [];
      }
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData,
          target: address
        }
      ];
    } catch (err) {
      const error = getContractError(err, {
        abi,
        address,
        args,
        docsPath: "/docs/contract/multicall",
        functionName
      });
      if (!allowFailure)
        throw error;
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData: "0x",
          target: address
        }
      ];
    }
  }
  const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => getAction(client, readContract, "readContract")({
    abi: multicall3Abi,
    address: multicallAddress,
    args: [calls],
    blockNumber,
    blockTag,
    functionName: "aggregate3",
    stateOverride
  })));
  const results = [];
  for (let i = 0; i < aggregate3Results.length; i++) {
    const result = aggregate3Results[i];
    if (result.status === "rejected") {
      if (!allowFailure)
        throw result.reason;
      for (let j2 = 0; j2 < chunkedCalls[i].length; j2++) {
        results.push({
          status: "failure",
          error: result.reason,
          result: void 0
        });
      }
      continue;
    }
    const aggregate3Result = result.value;
    for (let j2 = 0; j2 < aggregate3Result.length; j2++) {
      const { returnData, success } = aggregate3Result[j2];
      const { callData } = chunkedCalls[i][j2];
      const { abi, address, functionName, args } = contracts2[results.length];
      try {
        if (callData === "0x")
          throw new AbiDecodingZeroDataError();
        if (!success)
          throw new RawContractError({ data: returnData });
        const result2 = decodeFunctionResult({
          abi,
          args,
          data: returnData,
          functionName
        });
        results.push(allowFailure ? { result: result2, status: "success" } : result2);
      } catch (err) {
        const error = getContractError(err, {
          abi,
          address,
          args,
          docsPath: "/docs/contract/multicall",
          functionName
        });
        if (!allowFailure)
          throw error;
        results.push({ error, result: void 0, status: "failure" });
      }
    }
  }
  if (results.length !== contracts2.length)
    throw new BaseError("multicall results mismatch");
  return results;
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/verifyHash.js
init_abis();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/constants/contracts.js
var universalSignatureValidatorByteCode = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/verifyHash.js
init_contract();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/data/isBytesEqual.js
init_utils3();
init_toBytes();
init_isHex();
function isBytesEqual(a_, b_) {
  const a = isHex(a_) ? toBytes(a_) : a_;
  const b = isHex(b_) ? toBytes(b_) : b_;
  return equalBytes(a, b);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/verifyHash.js
init_call();
async function verifyHash(client, { address, hash: hash2, signature, ...callRequest }) {
  const signatureHex = isHex(signature) ? signature : toHex2(signature);
  try {
    const { data } = await getAction(client, call2, "call")({
      data: encodeDeployData({
        abi: universalSignatureValidatorAbi,
        args: [address, hash2, signatureHex],
        bytecode: universalSignatureValidatorByteCode
      }),
      ...callRequest
    });
    return isBytesEqual(data ?? "0x0", "0x1");
  } catch (error) {
    if (error instanceof CallExecutionError) {
      return false;
    }
    throw error;
  }
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/verifyMessage.js
async function verifyMessage(client, { address, message, signature, ...callRequest }) {
  const hash2 = hashMessage(message);
  return verifyHash(client, {
    address,
    hash: hash2,
    signature,
    ...callRequest
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/verifyTypedData.js
async function verifyTypedData(client, parameters) {
  const { address, signature, message, primaryType, types, domain, ...callRequest } = parameters;
  const hash2 = hashTypedData({ message, primaryType, types, domain });
  return verifyHash(client, {
    address,
    hash: hash2,
    signature,
    ...callRequest
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js
init_transaction();
init_stringify();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/watchBlockNumber.js
init_fromHex();
init_stringify();
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  let prevBlockNumber;
  const pollBlockNumber = () => {
    const observerId = stringify([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed,
      pollingInterval
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => poll(async () => {
      try {
        const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
        if (prevBlockNumber) {
          if (blockNumber === prevBlockNumber)
            return;
          if (blockNumber - prevBlockNumber > 1 && emitMissed) {
            for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
              emit.onBlockNumber(i, prevBlockNumber);
              prevBlockNumber = i;
            }
          }
        }
        if (!prevBlockNumber || blockNumber > prevBlockNumber) {
          emit.onBlockNumber(blockNumber, prevBlockNumber);
          prevBlockNumber = blockNumber;
        }
      } catch (err) {
        emit.onError?.(err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlockNumber = () => {
    const observerId = stringify([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => {
      let active = true;
      let unsubscribe = () => active = false;
      (async () => {
        try {
          const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
            params: ["newHeads"],
            onData(data) {
              if (!active)
                return;
              const blockNumber = hexToBigInt(data.result?.number);
              emit.onBlockNumber(blockNumber, prevBlockNumber);
              prevBlockNumber = blockNumber;
            },
            onError(error) {
              emit.onError?.(error);
            }
          });
          unsubscribe = unsubscribe_;
          if (!active)
            unsubscribe();
        } catch (err) {
          onError?.(err);
        }
      })();
      return () => unsubscribe();
    });
  };
  return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js
async function waitForTransactionReceipt(client, {
  confirmations = 1,
  hash: hash2,
  onReplaced,
  pollingInterval = client.pollingInterval,
  retryCount = 6,
  retryDelay = ({ count }) => ~~(1 << count) * 200,
  // exponential backoff
  timeout
}) {
  const observerId = stringify(["waitForTransactionReceipt", client.uid, hash2]);
  let transaction;
  let replacedTransaction;
  let receipt;
  let retrying = false;
  return new Promise((resolve, reject) => {
    if (timeout)
      setTimeout(() => reject(new WaitForTransactionReceiptTimeoutError({ hash: hash2 })), timeout);
    const _unobserve = observe(observerId, { onReplaced, resolve, reject }, (emit) => {
      const _unwatch = getAction(client, watchBlockNumber, "watchBlockNumber")({
        emitMissed: true,
        emitOnBegin: true,
        poll: true,
        pollingInterval,
        async onBlockNumber(blockNumber_) {
          if (retrying)
            return;
          let blockNumber = blockNumber_;
          const done = (fn) => {
            _unwatch();
            fn();
            _unobserve();
          };
          try {
            if (receipt) {
              if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                return;
              done(() => emit.resolve(receipt));
              return;
            }
            if (!transaction) {
              retrying = true;
              await withRetry(async () => {
                transaction = await getAction(client, getTransaction, "getTransaction")({ hash: hash2 });
                if (transaction.blockNumber)
                  blockNumber = transaction.blockNumber;
              }, {
                delay: retryDelay,
                retryCount
              });
              retrying = false;
            }
            receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash: hash2 });
            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
              return;
            done(() => emit.resolve(receipt));
          } catch (err) {
            if (err instanceof TransactionNotFoundError || err instanceof TransactionReceiptNotFoundError) {
              if (!transaction) {
                retrying = false;
                return;
              }
              try {
                replacedTransaction = transaction;
                retrying = true;
                const block = await withRetry(() => getAction(client, getBlock, "getBlock")({
                  blockNumber,
                  includeTransactions: true
                }), {
                  delay: retryDelay,
                  retryCount,
                  shouldRetry: ({ error }) => error instanceof BlockNotFoundError
                });
                retrying = false;
                const replacementTransaction = block.transactions.find(({ from, nonce }) => from === replacedTransaction.from && nonce === replacedTransaction.nonce);
                if (!replacementTransaction)
                  return;
                receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({
                  hash: replacementTransaction.hash
                });
                if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                  return;
                let reason = "replaced";
                if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value) {
                  reason = "repriced";
                } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                  reason = "cancelled";
                }
                done(() => {
                  emit.onReplaced?.({
                    reason,
                    replacedTransaction,
                    transaction: replacementTransaction,
                    transactionReceipt: receipt
                  });
                  emit.resolve(receipt);
                });
              } catch (err_) {
                done(() => emit.reject(err_));
              }
            } else {
              done(() => emit.reject(err));
            }
          }
        }
      });
    });
  });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/watchBlocks.js
init_stringify();
function watchBlocks(client, { blockTag = "latest", emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const includeTransactions = includeTransactions_ ?? false;
  let prevBlock;
  const pollBlocks = () => {
    const observerId = stringify([
      "watchBlocks",
      client.uid,
      blockTag,
      emitMissed,
      emitOnBegin,
      includeTransactions,
      pollingInterval
    ]);
    return observe(observerId, { onBlock, onError }, (emit) => poll(async () => {
      try {
        const block = await getAction(client, getBlock, "getBlock")({
          blockTag,
          includeTransactions
        });
        if (block.number && prevBlock?.number) {
          if (block.number === prevBlock.number)
            return;
          if (block.number - prevBlock.number > 1 && emitMissed) {
            for (let i = prevBlock?.number + 1n; i < block.number; i++) {
              const block2 = await getAction(client, getBlock, "getBlock")({
                blockNumber: i,
                includeTransactions
              });
              emit.onBlock(block2, prevBlock);
              prevBlock = block2;
            }
          }
        }
        if (
          // If no previous block exists, emit.
          !prevBlock?.number || // If the block tag is "pending" with no block number, emit.
          blockTag === "pending" && !block?.number || // If the next block number is greater than the previous block number, emit.
          // We don't want to emit blocks in the past.
          block.number && block.number > prevBlock.number
        ) {
          emit.onBlock(block, prevBlock);
          prevBlock = block;
        }
      } catch (err) {
        emit.onError?.(err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlocks = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newHeads"],
          onData(data) {
            if (!active)
              return;
            const format = client.chain?.formatters?.block?.format || formatBlock;
            const block = format(data.result);
            onBlock(block, prevBlock);
            prevBlock = block;
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollBlocks() : subscribeBlocks();
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/watchEvent.js
init_stringify();
init_abi();
init_rpc();
function watchEvent(client, { address, args, batch = true, event, events, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const strict = strict_ ?? false;
  const pollEvent = () => {
    const observerId = stringify([
      "watchEvent",
      address,
      args,
      batch,
      client.uid,
      event,
      pollingInterval
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        if (!initialized) {
          try {
            filter = await getAction(client, createEventFilter, "createEventFilter")({
              address,
              args,
              event,
              events,
              strict
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getLogs, "getLogs")({
                address,
                args,
                event,
                events,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeEvent = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const events_ = events ?? (event ? [event] : void 0);
        let topics = [];
        if (events_) {
          topics = [
            events_.flatMap((event2) => encodeEventTopics({
              abi: [event2],
              eventName: event2.name,
              args
            }))
          ];
          if (event)
            topics = topics[0];
        }
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["logs", { address, topics }],
          onData(data) {
            if (!active)
              return;
            const log = data.result;
            try {
              const { eventName, args: args2 } = decodeEventLog({
                abi: events_ ?? [],
                data: log.data,
                topics: log.topics,
                strict
              });
              const formatted = formatLog(log, { args: args2, eventName });
              onLogs([formatted]);
            } catch (err) {
              let eventName;
              let isUnnamed;
              if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                if (strict_)
                  return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
              }
              const formatted = formatLog(log, {
                args: isUnnamed ? [] : {},
                eventName
              });
              onLogs([formatted]);
            }
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollEvent() : subscribeEvent();
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/actions/public/watchPendingTransactions.js
init_stringify();
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const pollPendingTransactions = () => {
    const observerId = stringify([
      "watchPendingTransactions",
      client.uid,
      batch,
      pollingInterval
    ]);
    return observe(observerId, { onTransactions, onError }, (emit) => {
      let filter;
      const unwatch = poll(async () => {
        try {
          if (!filter) {
            try {
              filter = await getAction(client, createPendingTransactionFilter, "createPendingTransactionFilter")({});
              return;
            } catch (err) {
              unwatch();
              throw err;
            }
          }
          const hashes = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          if (hashes.length === 0)
            return;
          if (batch)
            emit.onTransactions(hashes);
          else
            for (const hash2 of hashes)
              emit.onTransactions([hash2]);
        } catch (err) {
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribePendingTransactions = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(data) {
            if (!active)
              return;
            const transaction = data.result;
            onTransactions([transaction]);
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/clients/decorators/public.js
function publicActions(client) {
  return {
    call: (args) => call2(client, args),
    createBlockFilter: () => createBlockFilter(client),
    createContractEventFilter: (args) => createContractEventFilter(client, args),
    createEventFilter: (args) => createEventFilter(client, args),
    createPendingTransactionFilter: () => createPendingTransactionFilter(client),
    estimateContractGas: (args) => estimateContractGas(client, args),
    estimateGas: (args) => estimateGas(client, args),
    getBalance: (args) => getBalance(client, args),
    getBlobBaseFee: () => getBlobBaseFee(client),
    getBlock: (args) => getBlock(client, args),
    getBlockNumber: (args) => getBlockNumber(client, args),
    getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
    getBytecode: (args) => getBytecode(client, args),
    getChainId: () => getChainId(client),
    getContractEvents: (args) => getContractEvents(client, args),
    getEnsAddress: (args) => getEnsAddress(client, args),
    getEnsAvatar: (args) => getEnsAvatar(client, args),
    getEnsName: (args) => getEnsName(client, args),
    getEnsResolver: (args) => getEnsResolver(client, args),
    getEnsText: (args) => getEnsText(client, args),
    getFeeHistory: (args) => getFeeHistory(client, args),
    estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
    getFilterChanges: (args) => getFilterChanges(client, args),
    getFilterLogs: (args) => getFilterLogs(client, args),
    getGasPrice: () => getGasPrice(client),
    getLogs: (args) => getLogs(client, args),
    getProof: (args) => getProof(client, args),
    estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
    getStorageAt: (args) => getStorageAt(client, args),
    getTransaction: (args) => getTransaction(client, args),
    getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
    getTransactionCount: (args) => getTransactionCount(client, args),
    getTransactionReceipt: (args) => getTransactionReceipt(client, args),
    multicall: (args) => multicall(client, args),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    readContract: (args) => readContract(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    simulateContract: (args) => simulateContract(client, args),
    verifyMessage: (args) => verifyMessage(client, args),
    verifyTypedData: (args) => verifyTypedData(client, args),
    uninstallFilter: (args) => uninstallFilter(client, args),
    waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
    watchBlocks: (args) => watchBlocks(client, args),
    watchBlockNumber: (args) => watchBlockNumber(client, args),
    watchContractEvent: (args) => watchContractEvent(client, args),
    watchEvent: (args) => watchEvent(client, args),
    watchPendingTransactions: (args) => watchPendingTransactions(client, args)
  };
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/clients/createPublicClient.js
function createPublicClient(parameters) {
  const { key = "public", name = "Public Client" } = parameters;
  const client = createClient({
    ...parameters,
    key,
    name,
    type: "publicClient"
  });
  return client.extend(publicActions);
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/index.js
init_abi();
init_base();
init_keccak256();

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/utils/encoding/toRlp.js
init_cursor2();
init_toBytes();
init_toHex();
function toRlp(bytes2, to = "hex") {
  const encodable = getEncodable(bytes2);
  const cursor = createCursor(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (to === "hex")
    return bytesToHex(cursor.bytes);
  return cursor.bytes;
}
function getEncodable(bytes2) {
  if (Array.isArray(bytes2))
    return getEncodableList(bytes2.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes2);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode: encode2 } of list) {
        encode2(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes2 = typeof bytesOrHex === "string" ? hexToBytes(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes2.length);
  const length = (() => {
    if (bytes2.length === 1 && bytes2[0] < 128)
      return 1;
    if (bytes2.length <= 55)
      return 1 + bytes2.length;
    return 1 + sizeOfBytesLength + bytes2.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes2.length === 1 && bytes2[0] < 128) {
        cursor.pushBytes(bytes2);
      } else if (bytes2.length <= 55) {
        cursor.pushByte(128 + bytes2.length);
        cursor.pushBytes(bytes2);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes2.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes2.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes2.length);
        else
          cursor.pushUint32(bytes2.length);
        cursor.pushBytes(bytes2);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/op-stack/serializers.js
function serializeTransaction2(transaction, signature) {
  if (isDeposit(transaction))
    return serializeTransactionDeposit(transaction);
  return serializeTransaction(transaction, signature);
}
var serializers = {
  transaction: serializeTransaction2
};
function serializeTransactionDeposit(transaction) {
  assertTransactionDeposit(transaction);
  const { sourceHash, data, from, gas, isSystemTx, mint, to, value } = transaction;
  const serializedTransaction = [
    sourceHash,
    from,
    to ?? "0x",
    mint ? toHex2(mint) : "0x",
    value ? toHex2(value) : "0x",
    gas ? toHex2(gas) : "0x",
    isSystemTx ? "0x1" : "0x",
    data ?? "0x"
  ];
  return concatHex([
    "0x7e",
    toRlp(serializedTransaction)
  ]);
}
function isDeposit(transaction) {
  if (transaction.type === "deposit")
    return true;
  if (typeof transaction.sourceHash !== "undefined")
    return true;
  return false;
}
function assertTransactionDeposit(transaction) {
  const { from, to } = transaction;
  if (from && !isAddress(from))
    throw new InvalidAddressError({ address: from });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
}

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/op-stack/chainConfig.js
var chainConfig = {
  contracts,
  formatters,
  serializers
};

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/chains/definitions/base.js
var sourceId = 1;
var base = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 8453,
  name: "Base",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://basescan.org",
      apiUrl: "https://api.basescan.org/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId]: {
        address: "0x56315b90c40730925ec5485cf004d835058518A0"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 5022
    },
    portal: {
      [sourceId]: {
        address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
        blockCreated: 17482143
      }
    },
    l1StandardBridge: {
      [sourceId]: {
        address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
        blockCreated: 17482143
      }
    }
  },
  sourceId
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/chains/definitions/baseSepolia.js
var sourceId2 = 11155111;
var baseSepolia = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 84532,
  network: "base-sepolia",
  name: "Base Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
      apiUrl: "https://api-sepolia.basescan.org/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId2]: {
        address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
      }
    },
    portal: {
      [sourceId2]: {
        address: "0x49f53e41452c74589e85ca1677426ba426459e85",
        blockCreated: 4446677
      }
    },
    l1StandardBridge: {
      [sourceId2]: {
        address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
        blockCreated: 4446677
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1059647
    }
  },
  testnet: true,
  sourceId: sourceId2
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/chains/definitions/mainnet.js
var mainnet = /* @__PURE__ */ defineChain({
  id: 1,
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://cloudflare-eth.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
      blockCreated: 19258213
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/chains/definitions/optimism.js
var sourceId3 = 1;
var optimism = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 10,
  name: "OP Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Optimism Explorer",
      url: "https://optimistic.etherscan.io",
      apiUrl: "https://api-optimistic.etherscan.io/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId3]: {
        address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    },
    portal: {
      [sourceId3]: {
        address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
      }
    },
    l1StandardBridge: {
      [sourceId3]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    }
  },
  sourceId: sourceId3
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/chains/definitions/optimismSepolia.js
var sourceId4 = 11155111;
var optimismSepolia = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 11155420,
  name: "OP Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com",
      apiUrl: "https://optimism-sepolia.blockscout.com/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    disputeGameFactory: {
      [sourceId4]: {
        address: "0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1"
      }
    },
    l2OutputOracle: {
      [sourceId4]: {
        address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1620204
    },
    portal: {
      [sourceId4]: {
        address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC"
      }
    },
    l1StandardBridge: {
      [sourceId4]: {
        address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1"
      }
    }
  },
  testnet: true,
  sourceId: sourceId4
});

// node_modules/.pnpm/viem@2.9.6_typescript@5.2.2/node_modules/viem/_esm/chains/definitions/sepolia.js
var sepolia = /* @__PURE__ */ defineChain({
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
      apiUrl: "https://api-sepolia.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
      blockCreated: 5317080
    }
  },
  testnet: true
});

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  ClientValidationError: () => ClientValidationError,
  HTTPError: () => HTTPError,
  Response: () => Response,
  URLPattern: () => import_fetch6.URLPattern,
  createClient: () => createClient2,
  createRouter: () => createRouter,
  createRouterBase: () => createRouterBase,
  registerFormats: () => registerFormats,
  useCORS: () => useCORS,
  useClientCookieStore: () => useClientCookieStore
});

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/createRouter.js
var import_qs = __toESM(require_lib(), 1);
var DefaultFetchAPI2 = __toESM(require_global_ponyfill(), 1);

// node_modules/.pnpm/@whatwg-node+server@0.9.32/node_modules/@whatwg-node/server/esm/createServerAdapter.js
var DefaultFetchAPI = __toESM(require_global_ponyfill(), 1);

// node_modules/.pnpm/@whatwg-node+server@0.9.32/node_modules/@whatwg-node/server/esm/utils.js
var import_fetch = __toESM(require_global_ponyfill(), 1);
function isAsyncIterable(body) {
  return body != null && typeof body === "object" && typeof body[Symbol.asyncIterator] === "function";
}
function getPort(nodeRequest) {
  if (nodeRequest.socket?.localPort) {
    return nodeRequest.socket?.localPort;
  }
  const hostInHeader = nodeRequest.headers?.[":authority"] || nodeRequest.headers?.host;
  const portInHeader = hostInHeader?.split(":")?.[1];
  if (portInHeader) {
    return portInHeader;
  }
  return 80;
}
function getHostnameWithPort(nodeRequest) {
  if (nodeRequest.headers?.[":authority"]) {
    return nodeRequest.headers?.[":authority"];
  }
  if (nodeRequest.headers?.host) {
    return nodeRequest.headers?.host;
  }
  const port = getPort(nodeRequest);
  if (nodeRequest.hostname) {
    return nodeRequest.hostname + ":" + port;
  }
  const localIp = nodeRequest.socket?.localAddress;
  if (localIp && !localIp?.includes("::") && !localIp?.includes("ffff")) {
    return `${localIp}:${port}`;
  }
  return "localhost";
}
function buildFullUrl(nodeRequest) {
  const hostnameWithPort = getHostnameWithPort(nodeRequest);
  const protocol = nodeRequest.protocol || (nodeRequest.socket?.encrypted ? "https" : "http");
  const endpoint = nodeRequest.originalUrl || nodeRequest.url || "/graphql";
  return `${protocol}://${hostnameWithPort}${endpoint}`;
}
function isRequestBody(body) {
  const stringTag = body[Symbol.toStringTag];
  if (typeof body === "string" || stringTag === "Uint8Array" || stringTag === "Blob" || stringTag === "FormData" || stringTag === "URLSearchParams" || isAsyncIterable(body)) {
    return true;
  }
  return false;
}
var ServerAdapterRequestAbortSignal = class extends EventTarget {
  constructor() {
    super(...arguments);
    this.aborted = false;
    this._onabort = null;
  }
  throwIfAborted() {
    if (this.aborted) {
      throw this.reason;
    }
  }
  sendAbort() {
    this.reason = new DOMException("This operation was aborted", "AbortError");
    this.aborted = true;
    this.dispatchEvent(new Event("abort"));
  }
  get onabort() {
    return this._onabort;
  }
  set onabort(value) {
    this._onabort = value;
    if (value) {
      this.addEventListener("abort", value);
    } else {
      this.removeEventListener("abort", value);
    }
  }
};
var bunNodeCompatModeWarned = false;
var nodeRequestResponseMap = /* @__PURE__ */ new WeakMap();
function normalizeNodeRequest(nodeRequest, RequestCtor) {
  const rawRequest = nodeRequest.raw || nodeRequest.req || nodeRequest;
  let fullUrl = buildFullUrl(rawRequest);
  if (nodeRequest.query) {
    const url = new import_fetch.URL(fullUrl);
    for (const key in nodeRequest.query) {
      url.searchParams.set(key, nodeRequest.query[key]);
    }
    fullUrl = url.toString();
  }
  let signal;
  const nodeResponse = nodeRequestResponseMap.get(nodeRequest);
  nodeRequestResponseMap.delete(nodeRequest);
  if (nodeResponse?.once) {
    let sendAbortSignal;
    if (RequestCtor !== globalThis.Request) {
      signal = new ServerAdapterRequestAbortSignal();
      sendAbortSignal = () => signal.sendAbort();
    } else {
      const controller = new AbortController();
      signal = controller.signal;
      sendAbortSignal = () => controller.abort();
    }
    const closeEventListener = () => {
      if (signal && !signal.aborted) {
        rawRequest.aborted = true;
        sendAbortSignal();
      }
    };
    nodeResponse.once("close", closeEventListener);
    nodeResponse.once("finish", () => {
      nodeResponse.removeListener("close", closeEventListener);
    });
  }
  if (nodeRequest.method === "GET" || nodeRequest.method === "HEAD") {
    return new RequestCtor(fullUrl, {
      method: nodeRequest.method,
      headers: nodeRequest.headers,
      signal
    });
  }
  const maybeParsedBody = nodeRequest.body;
  if (maybeParsedBody != null && Object.keys(maybeParsedBody).length > 0) {
    if (isRequestBody(maybeParsedBody)) {
      return new RequestCtor(fullUrl, {
        method: nodeRequest.method,
        headers: nodeRequest.headers,
        body: maybeParsedBody,
        signal
      });
    }
    const request = new RequestCtor(fullUrl, {
      method: nodeRequest.method,
      headers: nodeRequest.headers,
      signal
    });
    if (!request.headers.get("content-type")?.includes("json")) {
      request.headers.set("content-type", "application/json; charset=utf-8");
    }
    return new Proxy(request, {
      get: (target, prop, receiver) => {
        switch (prop) {
          case "json":
            return async () => maybeParsedBody;
          case "text":
            return async () => JSON.stringify(maybeParsedBody);
          default:
            return Reflect.get(target, prop, receiver);
        }
      }
    });
  }
  if (globalThis.process?.versions?.bun && isReadable(rawRequest)) {
    if (!bunNodeCompatModeWarned) {
      bunNodeCompatModeWarned = true;
      console.warn(`You use Bun Node compatibility mode, which is not recommended!
It will affect your performance. Please check our Bun integration recipe, and avoid using 'http' for your server implementation.`);
    }
    return new RequestCtor(fullUrl, {
      method: nodeRequest.method,
      headers: nodeRequest.headers,
      duplex: "half",
      body: new ReadableStream({
        start(controller) {
          rawRequest.on("data", (chunk) => {
            controller.enqueue(chunk);
          });
          rawRequest.on("error", (e) => {
            controller.error(e);
          });
          rawRequest.on("end", () => {
            controller.close();
          });
        },
        cancel(e) {
          rawRequest.destroy(e);
        }
      }),
      signal
    });
  }
  return new RequestCtor(fullUrl, {
    method: nodeRequest.method,
    headers: nodeRequest.headers,
    body: rawRequest,
    duplex: "half",
    signal
  });
}
function isReadable(stream) {
  return stream.read != null;
}
function isNodeRequest(request) {
  return isReadable(request);
}
function isServerResponse(stream) {
  return stream != null && stream.setHeader != null && stream.end != null && stream.once != null && stream.write != null;
}
function isFetchEvent(event) {
  return event != null && event.request != null && event.respondWith != null;
}
function configureSocket(rawRequest) {
  rawRequest?.socket?.setTimeout?.(0);
  rawRequest?.socket?.setNoDelay?.(true);
  rawRequest?.socket?.setKeepAlive?.(true);
}
function endResponse(serverResponse) {
  serverResponse.end(null, null, null);
}
async function sendAsyncIterable(serverResponse, asyncIterable) {
  for await (const chunk of asyncIterable) {
    if (!serverResponse.write(chunk)) {
      break;
    }
  }
  endResponse(serverResponse);
}
function sendNodeResponse(fetchResponse, serverResponse, nodeRequest) {
  if (serverResponse.closed || serverResponse.destroyed || serverResponse.writableEnded) {
    return;
  }
  if (!fetchResponse) {
    serverResponse.statusCode = 404;
    serverResponse.end();
    return;
  }
  serverResponse.statusCode = fetchResponse.status;
  serverResponse.statusMessage = fetchResponse.statusText;
  let setCookiesSet = false;
  fetchResponse.headers.forEach((value, key) => {
    if (key === "set-cookie") {
      if (setCookiesSet) {
        return;
      }
      setCookiesSet = true;
      const setCookies = fetchResponse.headers.getSetCookie?.();
      if (setCookies) {
        serverResponse.setHeader("set-cookie", setCookies);
        return;
      }
    }
    serverResponse.setHeader(key, value);
  });
  const bufOfRes = fetchResponse._buffer;
  if (bufOfRes) {
    serverResponse.write(bufOfRes);
    endResponse(serverResponse);
    return;
  }
  const fetchBody = fetchResponse.body;
  if (fetchBody == null) {
    endResponse(serverResponse);
    return;
  }
  if (fetchBody[Symbol.toStringTag] === "Uint8Array") {
    serverResponse.write(fetchBody);
    endResponse(serverResponse);
    return;
  }
  configureSocket(nodeRequest);
  if (isReadable(fetchBody)) {
    serverResponse.once("close", () => {
      fetchBody.destroy();
    });
    fetchBody.pipe(serverResponse);
    return;
  }
  if (isAsyncIterable(fetchBody)) {
    return sendAsyncIterable(serverResponse, fetchBody);
  }
}
function isRequestInit(val) {
  return val != null && typeof val === "object" && ("body" in val || "cache" in val || "credentials" in val || "headers" in val || "integrity" in val || "keepalive" in val || "method" in val || "mode" in val || "redirect" in val || "referrer" in val || "referrerPolicy" in val || "signal" in val || "window" in val);
}
function completeAssign(...args) {
  const [target, ...sources] = args.filter((arg) => arg != null && typeof arg === "object");
  sources.forEach((source) => {
    const descriptors = Object.getOwnPropertyNames(source).reduce((descriptors2, key) => {
      descriptors2[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors2;
    }, {});
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}
function isPromise(val) {
  return val?.then != null;
}
function iterateAsyncVoid(iterable, callback) {
  const iterator = iterable[Symbol.iterator]();
  let stopEarlyFlag = false;
  function stopEarlyFn() {
    stopEarlyFlag = true;
  }
  function iterate() {
    const { done: endOfIterator, value } = iterator.next();
    if (endOfIterator) {
      return;
    }
    const result$ = callback(value, stopEarlyFn);
    if (isPromise(result$)) {
      return result$.then(() => {
        if (stopEarlyFlag) {
          return;
        }
        return iterate();
      });
    }
    if (stopEarlyFlag) {
      return;
    }
    return iterate();
  }
  return iterate();
}
function handleErrorFromRequestHandler(error, ResponseCtor) {
  return new ResponseCtor(error.stack || error.message || error.toString(), {
    status: error.status || 500
  });
}
function isolateObject(originalCtx, waitUntilPromises) {
  if (originalCtx == null) {
    return {};
  }
  const extraProps = {};
  const deletedProps = /* @__PURE__ */ new Set();
  return new Proxy(originalCtx, {
    get(originalCtx2, prop) {
      if (waitUntilPromises != null && prop === "waitUntil") {
        return function waitUntil(promise) {
          waitUntilPromises.push(promise.catch((err) => console.error(err)));
        };
      }
      const extraPropVal = extraProps[prop];
      if (extraPropVal != null) {
        if (typeof extraPropVal === "function") {
          return extraPropVal.bind(extraProps);
        }
        return extraPropVal;
      }
      if (deletedProps.has(prop)) {
        return void 0;
      }
      return originalCtx2[prop];
    },
    set(_originalCtx, prop, value) {
      extraProps[prop] = value;
      return true;
    },
    has(originalCtx2, prop) {
      if (waitUntilPromises != null && prop === "waitUntil") {
        return true;
      }
      if (deletedProps.has(prop)) {
        return false;
      }
      if (prop in extraProps) {
        return true;
      }
      return prop in originalCtx2;
    },
    defineProperty(_originalCtx, prop, descriptor) {
      return Reflect.defineProperty(extraProps, prop, descriptor);
    },
    deleteProperty(_originalCtx, prop) {
      if (prop in extraProps) {
        return Reflect.deleteProperty(extraProps, prop);
      }
      deletedProps.add(prop);
      return true;
    },
    ownKeys(originalCtx2) {
      const extraKeys = Reflect.ownKeys(extraProps);
      const originalKeys = Reflect.ownKeys(originalCtx2);
      const deletedKeys = Array.from(deletedProps);
      const allKeys = new Set(extraKeys.concat(originalKeys.filter((keys) => !deletedKeys.includes(keys))));
      if (waitUntilPromises != null) {
        allKeys.add("waitUntil");
      }
      return Array.from(allKeys);
    },
    getOwnPropertyDescriptor(originalCtx2, prop) {
      if (prop in extraProps) {
        return Reflect.getOwnPropertyDescriptor(extraProps, prop);
      }
      if (deletedProps.has(prop)) {
        return void 0;
      }
      return Reflect.getOwnPropertyDescriptor(originalCtx2, prop);
    }
  });
}
function createDeferredPromise() {
  let resolveFn;
  let rejectFn;
  const promise = new Promise(function deferredPromiseExecutor(resolve, reject) {
    resolveFn = resolve;
    rejectFn = reject;
  });
  return {
    promise,
    get resolve() {
      return resolveFn;
    },
    get reject() {
      return rejectFn;
    }
  };
}
function handleAbortSignalAndPromiseResponse(response$, abortSignal) {
  if (isPromise(response$) && abortSignal) {
    const deferred$ = createDeferredPromise();
    abortSignal.addEventListener("abort", function abortSignalFetchErrorHandler() {
      deferred$.reject(abortSignal.reason);
    });
    response$.then(function fetchSuccessHandler(res) {
      deferred$.resolve(res);
    }).catch(function fetchErrorHandler(err) {
      deferred$.reject(err);
    });
    return deferred$.promise;
  }
  return response$;
}

// node_modules/.pnpm/@whatwg-node+server@0.9.32/node_modules/@whatwg-node/server/esm/uwebsockets.js
function isUWSResponse(res) {
  return !!res.onData;
}
function getRequestFromUWSRequest({ req, res, fetchAPI, signal }) {
  let body;
  const method = req.getMethod();
  if (method !== "get" && method !== "head") {
    body = new fetchAPI.ReadableStream({});
    const readable = body.readable;
    res.onAborted(() => {
      readable.push(null);
    });
    res.onData(function(ab, isLast) {
      const chunk = Buffer.from(ab, 0, ab.byteLength);
      readable.push(Buffer.from(chunk));
      if (isLast) {
        readable.push(null);
      }
    });
  }
  const headers = new fetchAPI.Headers();
  req.forEach((key, value) => {
    headers.append(key, value);
  });
  let url = `http://localhost${req.getUrl()}`;
  const query = req.getQuery();
  if (query) {
    url += `?${query}`;
  }
  return new fetchAPI.Request(url, {
    method,
    headers,
    body,
    signal
  });
}
async function forwardResponseBodyToUWSResponse(uwsResponse, fetchResponse, signal) {
  for await (const chunk of fetchResponse.body) {
    if (signal.aborted) {
      return;
    }
    uwsResponse.cork(() => {
      uwsResponse.write(chunk);
    });
  }
  uwsResponse.cork(() => {
    uwsResponse.end();
  });
}
function sendResponseToUwsOpts(uwsResponse, fetchResponse, signal) {
  if (!fetchResponse) {
    uwsResponse.writeStatus("404 Not Found");
    uwsResponse.end();
    return;
  }
  const bufferOfRes = fetchResponse._buffer;
  if (signal.aborted) {
    return;
  }
  uwsResponse.cork(() => {
    uwsResponse.writeStatus(`${fetchResponse.status} ${fetchResponse.statusText}`);
    for (const [key, value] of fetchResponse.headers) {
      if (key !== "content-length") {
        if (key === "set-cookie") {
          const setCookies = fetchResponse.headers.getSetCookie?.();
          if (setCookies) {
            for (const setCookie of setCookies) {
              uwsResponse.writeHeader(key, setCookie);
            }
            continue;
          }
        }
        uwsResponse.writeHeader(key, value);
      }
    }
    if (bufferOfRes) {
      uwsResponse.end(bufferOfRes);
    }
  });
  if (bufferOfRes) {
    return;
  }
  if (!fetchResponse.body) {
    uwsResponse.end();
    return;
  }
  return forwardResponseBodyToUWSResponse(uwsResponse, fetchResponse, signal);
}

// node_modules/.pnpm/@whatwg-node+server@0.9.32/node_modules/@whatwg-node/server/esm/createServerAdapter.js
async function handleWaitUntils(waitUntilPromises) {
  await Promise.allSettled(waitUntilPromises);
}
function isRequestAccessible(serverContext) {
  try {
    return !!serverContext?.request;
  } catch {
    return false;
  }
}
var EMPTY_OBJECT = {};
function createServerAdapter(serverAdapterBaseObject, options) {
  const fetchAPI = {
    ...DefaultFetchAPI,
    ...options?.fetchAPI
  };
  const givenHandleRequest = typeof serverAdapterBaseObject === "function" ? serverAdapterBaseObject : serverAdapterBaseObject.handle;
  const onRequestHooks = [];
  const onResponseHooks = [];
  if (options?.plugins != null) {
    for (const plugin of options.plugins) {
      if (plugin.onRequest) {
        onRequestHooks.push(plugin.onRequest);
      }
      if (plugin.onResponse) {
        onResponseHooks.push(plugin.onResponse);
      }
    }
  }
  const handleRequest = onRequestHooks.length > 0 || onResponseHooks.length > 0 ? function handleRequest2(request, serverContext) {
    let requestHandler = givenHandleRequest;
    let response;
    if (onRequestHooks.length === 0) {
      return handleEarlyResponse();
    }
    let url = new Proxy(EMPTY_OBJECT, {
      get(_target, prop, _receiver) {
        url = new fetchAPI.URL(request.url, "http://localhost");
        return Reflect.get(url, prop, url);
      }
    });
    const onRequestHooksIteration$ = iterateAsyncVoid(onRequestHooks, (onRequestHook, stopEarly) => onRequestHook({
      request,
      serverContext,
      fetchAPI,
      url,
      requestHandler,
      setRequestHandler(newRequestHandler) {
        requestHandler = newRequestHandler;
      },
      endResponse(newResponse) {
        response = newResponse;
        if (newResponse) {
          stopEarly();
        }
      }
    }));
    function handleResponse(response2) {
      if (onRequestHooks.length === 0) {
        return response2;
      }
      const onResponseHookPayload = {
        request,
        response: response2,
        serverContext
      };
      const onResponseHooksIteration$ = iterateAsyncVoid(onResponseHooks, (onResponseHook) => onResponseHook(onResponseHookPayload));
      if (isPromise(onResponseHooksIteration$)) {
        return onResponseHooksIteration$.then(() => response2);
      }
      return response2;
    }
    function handleEarlyResponse() {
      if (!response) {
        const response$ = requestHandler(request, serverContext);
        if (isPromise(response$)) {
          return response$.then(handleResponse);
        }
        return handleResponse(response$);
      }
      return handleResponse(response);
    }
    if (isPromise(onRequestHooksIteration$)) {
      return onRequestHooksIteration$.then(handleEarlyResponse);
    }
    return handleEarlyResponse();
  } : givenHandleRequest;
  function handleNodeRequest(nodeRequest, ...ctx) {
    const serverContext = ctx.length > 1 ? completeAssign(...ctx) : ctx[0] || {};
    const request = normalizeNodeRequest(nodeRequest, fetchAPI.Request);
    return handleRequest(request, serverContext);
  }
  function handleNodeRequestAndResponse(nodeRequest, nodeResponseOrContainer, ...ctx) {
    const nodeResponse = nodeResponseOrContainer.raw || nodeResponseOrContainer;
    nodeRequestResponseMap.set(nodeRequest, nodeResponse);
    return handleNodeRequest(nodeRequest, ...ctx);
  }
  function requestListener(nodeRequest, serverResponse, ...ctx) {
    const waitUntilPromises = [];
    const defaultServerContext = {
      req: nodeRequest,
      res: serverResponse,
      waitUntil(cb) {
        waitUntilPromises.push(cb.catch((err) => console.error(err)));
      }
    };
    nodeRequestResponseMap.set(nodeRequest, serverResponse);
    let response$;
    try {
      response$ = handleNodeRequest(nodeRequest, defaultServerContext, ...ctx);
    } catch (err) {
      response$ = handleErrorFromRequestHandler(err, fetchAPI.Response);
    }
    if (isPromise(response$)) {
      return response$.catch((e) => handleErrorFromRequestHandler(e, fetchAPI.Response)).then((response) => sendNodeResponse(response, serverResponse, nodeRequest)).catch((err) => {
        console.error(`Unexpected error while handling request: ${err.message || err}`);
      });
    }
    try {
      return sendNodeResponse(response$, serverResponse, nodeRequest);
    } catch (err) {
      console.error(`Unexpected error while handling request: ${err.message || err}`);
    }
  }
  function handleUWS(res, req, ...ctx) {
    const waitUntilPromises = [];
    const defaultServerContext = {
      res,
      req,
      waitUntil(cb) {
        waitUntilPromises.push(cb.catch((err) => console.error(err)));
      }
    };
    const filteredCtxParts = ctx.filter((partCtx) => partCtx != null);
    const serverContext = filteredCtxParts.length > 0 ? completeAssign(defaultServerContext, ...ctx) : defaultServerContext;
    const signal = new ServerAdapterRequestAbortSignal();
    const originalResEnd = res.end.bind(res);
    let resEnded = false;
    res.end = function(data) {
      resEnded = true;
      return originalResEnd(data);
    };
    res.onAborted(() => {
      signal.sendAbort();
    });
    const request = getRequestFromUWSRequest({
      req,
      res,
      fetchAPI,
      signal
    });
    let response$;
    try {
      response$ = handleRequest(request, serverContext);
    } catch (err) {
      response$ = handleErrorFromRequestHandler(err, fetchAPI.Response);
    }
    if (isPromise(response$)) {
      return response$.catch((e) => handleErrorFromRequestHandler(e, fetchAPI.Response)).then((response) => {
        if (!signal.aborted && !resEnded) {
          return sendResponseToUwsOpts(res, response, signal);
        }
      }).catch((err) => {
        console.error(`Unexpected error while handling request: 
${err.stack || err.message || err}`);
      });
    }
    try {
      if (!signal.aborted && !resEnded) {
        return sendResponseToUwsOpts(res, response$, signal);
      }
    } catch (err) {
      console.error(`Unexpected error while handling request: 
${err.stack || err.message || err}`);
    }
  }
  function handleEvent(event, ...ctx) {
    if (!event.respondWith || !event.request) {
      throw new TypeError(`Expected FetchEvent, got ${event}`);
    }
    const filteredCtxParts = ctx.filter((partCtx) => partCtx != null);
    const serverContext = filteredCtxParts.length > 0 ? completeAssign({}, event, ...filteredCtxParts) : isolateObject(event);
    const response$ = handleRequest(event.request, serverContext);
    event.respondWith(response$);
  }
  function handleRequestWithWaitUntil(request, ...ctx) {
    const filteredCtxParts = ctx.filter((partCtx) => partCtx != null);
    let waitUntilPromises;
    const serverContext = filteredCtxParts.length > 1 ? completeAssign(...filteredCtxParts) : isolateObject(filteredCtxParts[0], filteredCtxParts[0] == null || filteredCtxParts[0].waitUntil == null ? waitUntilPromises = [] : void 0);
    const response$ = handleRequest(request, serverContext);
    if (waitUntilPromises?.length) {
      return handleWaitUntils(waitUntilPromises).then(() => response$);
    }
    return response$;
  }
  const fetchFn = (input, ...maybeCtx) => {
    if (typeof input === "string" || "href" in input) {
      const [initOrCtx, ...restOfCtx] = maybeCtx;
      if (isRequestInit(initOrCtx)) {
        const request2 = new fetchAPI.Request(input, initOrCtx);
        const res$2 = handleRequestWithWaitUntil(request2, ...restOfCtx);
        return handleAbortSignalAndPromiseResponse(res$2, initOrCtx?.signal);
      }
      const request = new fetchAPI.Request(input);
      return handleRequestWithWaitUntil(request, ...maybeCtx);
    }
    const res$ = handleRequestWithWaitUntil(input, ...maybeCtx);
    return handleAbortSignalAndPromiseResponse(res$, input._signal);
  };
  const genericRequestHandler = (input, ...maybeCtx) => {
    const [initOrCtxOrRes, ...restOfCtx] = maybeCtx;
    if (isNodeRequest(input)) {
      if (!isServerResponse(initOrCtxOrRes)) {
        throw new TypeError(`Expected ServerResponse, got ${initOrCtxOrRes}`);
      }
      return requestListener(input, initOrCtxOrRes, ...restOfCtx);
    }
    if (isUWSResponse(input)) {
      return handleUWS(input, initOrCtxOrRes, ...restOfCtx);
    }
    if (isServerResponse(initOrCtxOrRes)) {
      throw new TypeError("Got Node response without Node request");
    }
    if (isRequestAccessible(input)) {
      if (isFetchEvent(input)) {
        return handleEvent(input, ...maybeCtx);
      }
      return handleRequestWithWaitUntil(input.request, input, ...maybeCtx);
    }
    return fetchFn(input, ...maybeCtx);
  };
  const adapterObj = {
    handleRequest,
    fetch: fetchFn,
    handleNodeRequest,
    handleNodeRequestAndResponse,
    requestListener,
    handleEvent,
    handleUWS,
    handle: genericRequestHandler
  };
  const serverAdapter = new Proxy(genericRequestHandler, {
    // It should have all the attributes of the handler function and the server instance
    has: (_, prop) => {
      return prop in adapterObj || prop in genericRequestHandler || serverAdapterBaseObject && prop in serverAdapterBaseObject;
    },
    get: (_, prop) => {
      const adapterProp = adapterObj[prop];
      if (adapterProp) {
        if (adapterProp.bind) {
          return adapterProp.bind(adapterObj);
        }
        return adapterProp;
      }
      const handleProp = genericRequestHandler[prop];
      if (handleProp) {
        if (handleProp.bind) {
          return handleProp.bind(genericRequestHandler);
        }
        return handleProp;
      }
      if (serverAdapterBaseObject) {
        const serverAdapterBaseObjectProp = serverAdapterBaseObject[prop];
        if (serverAdapterBaseObjectProp) {
          if (serverAdapterBaseObjectProp.bind) {
            return function(...args) {
              const returnedVal = serverAdapterBaseObject[prop](...args);
              if (returnedVal === serverAdapterBaseObject) {
                return serverAdapter;
              }
              return returnedVal;
            };
          }
          return serverAdapterBaseObjectProp;
        }
      }
    },
    apply(_, __, args) {
      return genericRequestHandler(...args);
    }
  });
  return serverAdapter;
}

// node_modules/.pnpm/@whatwg-node+server@0.9.32/node_modules/@whatwg-node/server/esm/plugins/useCors.js
function getCORSHeadersByRequestAndOptions(request, corsOptions) {
  const currentOrigin = request.headers.get("origin");
  if (corsOptions === false || currentOrigin == null) {
    return null;
  }
  const headers = {};
  if (corsOptions.origin == null || corsOptions.origin.length === 0 || corsOptions.origin.includes("*")) {
    headers["Access-Control-Allow-Origin"] = currentOrigin;
    headers["Vary"] = "Origin";
  } else if (typeof corsOptions.origin === "string") {
    headers["Access-Control-Allow-Origin"] = corsOptions.origin;
  } else if (Array.isArray(corsOptions.origin)) {
    if (corsOptions.origin.length === 1) {
      headers["Access-Control-Allow-Origin"] = corsOptions.origin[0];
    } else if (corsOptions.origin.includes(currentOrigin)) {
      headers["Access-Control-Allow-Origin"] = currentOrigin;
      headers["Vary"] = "Origin";
    } else {
      headers["Access-Control-Allow-Origin"] = "null";
    }
  }
  if (corsOptions.methods?.length) {
    headers["Access-Control-Allow-Methods"] = corsOptions.methods.join(", ");
  } else {
    const requestMethod = request.headers.get("access-control-request-method");
    if (requestMethod) {
      headers["Access-Control-Allow-Methods"] = requestMethod;
    }
  }
  if (corsOptions.allowedHeaders?.length) {
    headers["Access-Control-Allow-Headers"] = corsOptions.allowedHeaders.join(", ");
  } else {
    const requestHeaders = request.headers.get("access-control-request-headers");
    if (requestHeaders) {
      headers["Access-Control-Allow-Headers"] = requestHeaders;
      if (headers["Vary"]) {
        headers["Vary"] += ", Access-Control-Request-Headers";
      }
      headers["Vary"] = "Access-Control-Request-Headers";
    }
  }
  if (corsOptions.credentials != null) {
    if (corsOptions.credentials === true) {
      headers["Access-Control-Allow-Credentials"] = "true";
    }
  } else if (headers["Access-Control-Allow-Origin"] !== "*") {
    headers["Access-Control-Allow-Credentials"] = "true";
  }
  if (corsOptions.exposedHeaders) {
    headers["Access-Control-Expose-Headers"] = corsOptions.exposedHeaders.join(", ");
  }
  if (corsOptions.maxAge) {
    headers["Access-Control-Max-Age"] = corsOptions.maxAge.toString();
  }
  return headers;
}
async function getCORSResponseHeaders(request, corsOptionsFactory, serverContext) {
  const corsOptions = await corsOptionsFactory(request, serverContext);
  return getCORSHeadersByRequestAndOptions(request, corsOptions);
}
function useCORS(options) {
  let corsOptionsFactory = () => ({});
  if (options != null) {
    if (typeof options === "function") {
      corsOptionsFactory = options;
    } else if (typeof options === "object") {
      const corsOptions = {
        ...options
      };
      corsOptionsFactory = () => corsOptions;
    } else if (options === false) {
      corsOptionsFactory = () => false;
    }
  }
  return {
    onRequest({ request, fetchAPI, endResponse: endResponse2 }) {
      if (request.method.toUpperCase() === "OPTIONS") {
        const response = new fetchAPI.Response(null, {
          status: 204,
          // Safari (and potentially other browsers) need content-length 0,
          // for 204 or they just hang waiting for a body
          // see: https://github.com/expressjs/cors/blob/master/lib/index.js#L176
          headers: {
            "Content-Length": "0"
          }
        });
        endResponse2(response);
      }
    },
    async onResponse({ request, serverContext, response }) {
      const headers = await getCORSResponseHeaders(request, corsOptionsFactory, serverContext);
      if (headers != null) {
        for (const headerName in headers) {
          response.headers.set(headerName, headers[headerName]);
        }
      }
    }
  };
}

// node_modules/.pnpm/@whatwg-node+server@0.9.32/node_modules/@whatwg-node/server/esm/plugins/useErrorHandling.js
var import_fetch2 = __toESM(require_global_ponyfill(), 1);
function createDefaultErrorHandler(ResponseCtor = import_fetch2.Response) {
  return function defaultErrorHandler(e) {
    if (e.details || e.status || e.headers || e.name === "HTTPError") {
      return new ResponseCtor(typeof e.details === "object" ? JSON.stringify(e.details) : e.message, {
        status: e.status,
        headers: e.headers || {}
      });
    }
    console.error(e);
    return createDefaultErrorResponse(ResponseCtor);
  };
}
function createDefaultErrorResponse(ResponseCtor) {
  if (ResponseCtor.error) {
    return ResponseCtor.error();
  }
  return new ResponseCtor(null, { status: 500 });
}
var HTTPError = class _HTTPError extends Error {
  constructor(status = 500, message, headers = {}, details) {
    super(message);
    this.status = status;
    this.message = message;
    this.headers = headers;
    this.details = details;
    this.name = "HTTPError";
    Error.captureStackTrace(this, _HTTPError);
  }
};
function useErrorHandling(onError) {
  return {
    onRequest({ requestHandler, setRequestHandler, fetchAPI }) {
      const errorHandler = onError || createDefaultErrorHandler(fetchAPI.Response);
      setRequestHandler(function handlerWithErrorHandling(request, serverContext) {
        try {
          const response$ = requestHandler(request, serverContext);
          if (isPromise(response$)) {
            return response$.catch((e) => errorHandler(e, request, serverContext) || createDefaultErrorResponse(fetchAPI.Response));
          }
          return response$;
        } catch (e) {
          return errorHandler(e, request, serverContext) || createDefaultErrorResponse(fetchAPI.Response);
        }
      });
    }
  };
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/landing-page.js
var landing_page_default = `<!doctype html><html lang=en><head><meta charset=utf-8><title>Welcome to feTS</title><base href=__BASE_PATH__><link rel=icon href=https://raw.githubusercontent.com/ardatan/feTS/main/website/public/favicon.ico><style>body,html{padding:0;margin:0;height:100%;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;color:#fff;background-color:#000}main>section.hero{display:flex;height:90vh;justify-content:center;align-items:center;flex-direction:column}.logo{display:flex;align-items:center}.buttons{margin-top:24px}h1{font-size:80px}h2{color:#888;max-width:50%;margin-top:0;text-align:center}a{color:#fff;text-decoration:none;margin-left:10px;margin-right:10px;font-weight:700;transition:color .3s ease;padding:4px;overflow:visible}a.swagger-ui:hover{color:rgba(255,0,255,.7)}a.docs:hover{color:rgba(28,200,238,.7)}a.oas:hover{color:rgba(125,85,245,.7)}svg{margin-right:24px}.not-what-your-looking-for{margin-top:5vh}.not-what-your-looking-for>*{margin-left:auto;margin-right:auto}.not-what-your-looking-for>p{text-align:center}.not-what-your-looking-for>h2{color:#464646}.not-what-your-looking-for>p{max-width:600px;line-height:1.3em}.not-what-your-looking-for>pre{max-width:300px}</style></head><body id=body><main><section class=hero><div class=logo><div><svg height=150 viewBox="0 0 34 36" fill=none xmlns=http://www.w3.org/2000/svg class="mr-1.5 h-9 w-9"><g clip-path=url(#clip0_238_881)><path fill-rule=evenodd clip-rule=evenodd d="M7.29206 10.6399C9.07389 5.32261 14.0961 1.4912 20.0133 1.4912C27.4213 1.4912 33.4267 7.49658 33.4267 14.9046C33.4267 20.9724 29.3976 26.0992 23.8689 27.7556V31.8839C23.8689 33.3336 22.6937 34.5088 21.2441 34.5088H2.62488C1.1752 34.5088 0 33.3336 0 31.8839V13.2647C0 11.8151 1.1752 10.6399 2.62488 10.6399H7.29206ZM9.69332 10.6399C11.3687 6.59027 15.3582 3.7411 20.0133 3.7411C26.1787 3.7411 31.1768 8.73917 31.1768 14.9046C31.1768 19.7148 28.1344 23.8145 23.8689 25.3844V13.2647C23.8689 11.8151 22.6937 10.6399 21.2441 10.6399H9.69332ZM21.619 28.2229V31.8839C21.619 32.091 21.4511 32.2589 21.2441 32.2589H2.62488C2.41778 32.2589 2.24989 32.091 2.24989 31.8839V13.2647C2.24989 13.0577 2.41778 12.8898 2.62488 12.8898H6.75019C6.65118 13.547 6.59987 14.2198 6.59987 14.9046C6.59987 22.3126 12.6052 28.318 20.0133 28.318C20.5567 28.318 21.0925 28.2857 21.619 28.2229ZM20.283 16.3302L18.5198 14.9326L15.1078 19.237L12.9334 17.2179L11.4025 18.8667L14.4683 21.7134C14.6981 21.9268 15.0065 22.0346 15.3192 22.0108C15.6319 21.9869 15.9205 21.8336 16.1153 21.5879L20.283 16.3302Z" fill=#1886FF></path></g><defs><clipPath id=clip0_238_881><rect width=33.4267 height=36 fill=white></rect></clipPath></defs></svg></div><h1>feTS</h1></div><h2>404 Not Found</h2><div class=buttons><a href=https://the-guild.dev/openapi/fets/server/quick-start class=docs target=_blank>Read the Docs</a> <a download=openapi.json href=__OAS_PATH__ class=oas>Download OpenAPI Spec </a><a href=__SWAGGER_UI_PATH__ class=swagger-ui>Visit Swagger UI</a></div></section><section class=not-what-your-looking-for><h2>Not the page you are looking for? \u{1F440}</h2><p>This page is shown be default whenever a 404 is hit.<br>You can disable this by behavior via the <code>landingPage</code> option.</p><pre>
          <code>
import { createRouter } from 'fets';

const router = createRouter({
  landingPage: false
})
          </code>
        </pre><p>If you expected this page to be the Swagger UI route, you need to configure feTS. Currently, the Swagger UI route is configured to be on <code>__SWAGGER_UI_PATH__</code>.</p><pre>
          <code>
import { createRouter } from 'fets';

const router = createRouter({
  swaggerUI: {
    endpoint: '__REQUEST_PATH__'
  },
})
          </code>
        </pre></section></main></body></html>`;

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/plugins/define-routes.js
var HTTP_METHODS = [
  "GET",
  "HEAD",
  "POST",
  "PUT",
  "DELETE",
  "CONNECT",
  "OPTIONS",
  "TRACE",
  "PATCH"
];
function useDefineRoutes() {
  return {
    onRoute({ basePath, route, routeByPathByMethod, routeByPatternByMethod }) {
      let fullPath = "";
      if (basePath === "/") {
        fullPath = route.path;
      } else if (route.path === "/") {
        fullPath = basePath;
      } else {
        fullPath = `${basePath}${route.path}`;
      }
      if (fullPath.includes(":") || fullPath.includes("*")) {
        let addHandler = function(method) {
          let methodPatternMaps = routeByPatternByMethod.get(method);
          if (!methodPatternMaps) {
            methodPatternMaps = /* @__PURE__ */ new Map();
            routeByPatternByMethod.set(method, methodPatternMaps);
          }
          methodPatternMaps.set(pattern, route);
        };
        const pattern = new URLPattern({ pathname: fullPath });
        if (!route.method) {
          for (const method of HTTP_METHODS) {
            addHandler(method);
          }
        } else {
          addHandler(route.method);
        }
      } else {
        let addHandler = function(method) {
          let methodPathMaps = routeByPathByMethod.get(method);
          if (!methodPathMaps) {
            methodPathMaps = /* @__PURE__ */ new Map();
            routeByPathByMethod.set(method, methodPathMaps);
          }
          methodPathMaps.set(fullPath, route);
        };
        if (!route.method) {
          for (const method of HTTP_METHODS) {
            addHandler(method);
          }
        } else {
          addHandler(route.method);
        }
      }
    }
  };
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/Response.js
var import_fetch3 = __toESM(require_global_ponyfill(), 1);
var Response = import_fetch3.Response;

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/swagger-ui-html.js
var swagger_ui_html_default = '<!doctype html><html lang=en><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><meta name=description content=SwaggerUI><title>SwaggerUI</title><style>@import url(https://cdn.jsdelivr.net/gh/Itz-fork/Fastapi-Swagger-UI-Dark/assets/swagger_ui_dark.min.css) (prefers-color-scheme: dark);@import url(https://unpkg.com/swagger-ui-dist/swagger-ui.css) (prefers-color-scheme: light);@media (prefers-color-scheme:dark){.swagger-ui textarea{background:hsl(358.8deg 1.05% 1.91% / 80%)!important}.swagger-ui .scheme-container{background:#1e1e2e}.swagger-ui select{background:rgba(0,0,0,.2)}.opblock-control-arrow{background:#000}.opblock-tag{border-bottom:1px solid #96ccff}.swagger-ui .opblock .opblock-summary-path{display:inline}.models-control{color:#f5f5f5!important}.model-title{color:#f8f8ff!important}}</style></head><body><div id=swagger-ui></div><script src=https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js crossorigin><\/script><script>window.onload=()=>{window.ui=SwaggerUIBundle(__SWAGGER_UI_OPTIONS__)}<\/script></body></html>';

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/plugins/openapi.js
var requestValidationErrorSchema = {
  title: "RequestValidationError",
  type: "object",
  properties: {
    path: {
      type: "string"
    },
    value: {
      anyOf: [
        {
          type: "string"
        },
        {
          type: "number"
        },
        {
          type: "boolean"
        },
        {
          type: "array"
        },
        {
          type: "object"
        }
      ]
    },
    message: {
      type: "string"
    },
    name: {
      type: "string"
    }
  },
  additionalProperties: false
};
function useOpenAPI({ oasEndpoint, swaggerUIEndpoint, swaggerUIOpts, includeValidationErrors }) {
  let paths;
  return {
    onRouterInit(router) {
      if (includeValidationErrors) {
        const components = router.openAPIDocument.components = router.openAPIDocument.components || {};
        const schemas = components.schemas = components.schemas || {};
        schemas.RequestValidationError = requestValidationErrorSchema;
      }
      paths = router.openAPIDocument.paths = router.openAPIDocument.paths || {};
      if (oasEndpoint) {
        router.route({
          method: "GET",
          path: oasEndpoint,
          internal: true,
          handler: () => Response.json(router.openAPIDocument)
        });
      }
      if (swaggerUIEndpoint) {
        router.route({
          method: "GET",
          path: swaggerUIEndpoint,
          internal: true,
          handler: () => new Response(swagger_ui_html_default.replace("__SWAGGER_UI_OPTIONS__", JSON.stringify({
            spec: router.openAPIDocument,
            dom_id: "#swagger-ui",
            displayOperationId: true,
            tryItOutEnabled: true,
            requestSnippetsEnabled: true,
            displayRequestDuration: true,
            defaultModelRendering: "model",
            defaultModelExpandDepth: 3,
            defaultModelsExpandDepth: 3,
            ...swaggerUIOpts
          })), {
            headers: {
              "Content-Type": "text/html"
            }
          })
        });
      }
    },
    onRoute({ route: { method, path, operationId, description, tags, schemas, security } }) {
      if (schemas) {
        let pathForOAS = path.replace(/:([^/]+)/g, "{$1}");
        if (!pathForOAS.startsWith("/")) {
          pathForOAS = `/${pathForOAS}`;
        }
        const pathObj = paths[pathForOAS] = paths[pathForOAS] || {};
        const lowerCasedMethod = method.toLowerCase();
        pathObj[lowerCasedMethod] = pathObj[lowerCasedMethod] || {};
        const operation = pathObj[lowerCasedMethod];
        operation.operationId = operationId;
        operation.description = description;
        operation.tags = tags;
        operation.security = security;
        let isRequestValidated = false;
        if (schemas.request?.headers) {
          isRequestValidated = true;
          const headersSchema = schemas.request.headers;
          for (const headerName in headersSchema.properties) {
            const headerSchema = headersSchema.properties[headerName];
            operation.parameters = operation.parameters || [];
            operation.parameters.push({
              name: headerName,
              in: "header",
              required: headersSchema.required?.includes(headerName),
              schema: headerSchema
            });
          }
        }
        if (schemas.request?.params) {
          isRequestValidated = true;
          const paramsSchema = schemas.request.params;
          for (const paramName in paramsSchema.properties) {
            const paramSchema = paramsSchema.properties[paramName];
            operation.parameters = operation.parameters || [];
            operation.parameters.push({
              name: paramName,
              in: "path",
              required: paramsSchema.required?.includes(paramName),
              schema: paramSchema
            });
          }
        }
        if (schemas.request?.query) {
          const queriesSchema = schemas.request.query;
          for (const queryName in queriesSchema.properties) {
            const querySchema = queriesSchema.properties[queryName];
            operation.parameters = operation.parameters || [];
            operation.parameters.push({
              name: queryName,
              in: "query",
              required: queriesSchema.required?.includes(queryName),
              schema: querySchema
            });
          }
        }
        if (schemas.request?.json) {
          isRequestValidated = true;
          const requestJsonSchema = schemas.request.json;
          const requestBody = operation.requestBody = operation.requestBody || {};
          requestBody.required = true;
          const requestBodyContent = requestBody.content = requestBody.content || {};
          requestBodyContent["application/json"] = {
            schema: requestJsonSchema
          };
        }
        if (schemas.request?.formData) {
          isRequestValidated = true;
          const requestBody = operation.requestBody = operation.requestBody || {};
          requestBody.required = true;
          const requestBodyContent = requestBody.content = requestBody.content || {};
          const requestFormDataSchema = schemas.request.formData;
          requestBodyContent["multipart/form-data"] = {
            schema: requestFormDataSchema
          };
        }
        if (schemas.responses) {
          for (const statusCode in schemas.responses) {
            const responseSchema = schemas.responses[statusCode];
            operation.responses ||= {};
            operation.responses[statusCode] = {
              description: "",
              content: {
                "application/json": {
                  schema: responseSchema
                }
              }
            };
          }
        } else {
          operation.responses = {
            default: {
              description: ""
            }
          };
        }
        if (includeValidationErrors && isRequestValidated && !operation.responses?.[400]) {
          operation.responses ||= {};
          operation.responses[400] = {
            description: "Request validation failed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/RequestValidationError"
                }
              }
            }
          };
        }
      }
    }
  };
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/plugins/typebox.js
var import_typebox = __toESM(require_typebox(), 1);
var import_compiler = __toESM(require_compiler2(), 1);
var import_value = __toESM(require_value2(), 1);

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/plugins/utils.js
function getHeadersObj(headers) {
  return new Proxy({}, {
    get(_target, prop) {
      return headers.get(prop) || void 0;
    },
    set(_target, prop, value) {
      headers.set(prop, value);
      return true;
    },
    has(_target, prop) {
      return headers.has(prop);
    },
    deleteProperty(_target, prop) {
      headers.delete(prop);
      return true;
    },
    ownKeys() {
      return [...headers.keys()];
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/plugins/typebox.js
function createValidateFn(schema) {
  try {
    const validator = import_compiler.TypeCompiler.Compile(schema);
    return function getErrors(data) {
      return validator.Errors(data);
    };
  } catch (e) {
    return function getErrors(data) {
      return import_value.Value.Errors(schema, data);
    };
  }
}
function sanitizeError({ schema, type, ...error }, name) {
  return {
    ...error,
    name
  };
}
function useTypeBox({ components = {} } = {}) {
  const validateFnBySchema = /* @__PURE__ */ new WeakMap();
  function getValidateFn(schema) {
    let validateFn = validateFnBySchema.get(schema);
    if (!validateFn) {
      validateFn = createValidateFn({
        ...schema,
        components
      });
      validateFnBySchema.set(schema, validateFn);
    }
    return validateFn;
  }
  return {
    onRouteHandle({ route: { schemas }, request }) {
      if (schemas?.request?.headers && import_typebox.TypeGuard.TSchema(schemas.request.headers)) {
        const validateFn = getValidateFn(schemas.request.headers);
        const headersObj = getHeadersObj(request.headers);
        const errors = [...validateFn(headersObj)].map((error) => sanitizeError(error, "headers"));
        if (errors.length) {
          throw new HTTPError(400, "Bad Request", {
            "x-error-type": "validation"
          }, {
            errors
          });
        }
      }
      if (schemas?.request?.params && import_typebox.TypeGuard.TSchema(schemas.request.params)) {
        const validateFn = getValidateFn(schemas.request.params);
        const errors = [...validateFn(request.params)].map((error) => sanitizeError(error, "params"));
        if (errors.length) {
          throw new HTTPError(400, "Bad Request", {
            "x-error-type": "validation"
          }, {
            errors
          });
        }
      }
      if (schemas?.request?.query && import_typebox.TypeGuard.TSchema(schemas.request.query)) {
        const validateFn = getValidateFn(schemas.request.query);
        const errors = [...validateFn(request.query)].map((error) => sanitizeError(error, "query"));
        if (errors.length) {
          throw new HTTPError(400, "Bad Request", {
            "x-error-type": "validation"
          }, {
            errors
          });
        }
      }
      if (schemas?.request?.json && import_typebox.TypeGuard.TSchema(schemas.request.json)) {
        const validateFn = getValidateFn(schemas.request.json);
        const origReqJsonMethod = request.json.bind(request);
        Object.defineProperty(request, "json", {
          value: () => origReqJsonMethod().then((jsonObj) => {
            const errors = [...validateFn(jsonObj)].map(({ schema, type, ...error }) => ({
              name: "json",
              ...error
            }));
            if (errors.length) {
              throw new HTTPError(400, "Bad Request", {
                "x-error-type": "validation"
              }, {
                errors
              });
            }
            return jsonObj;
          }),
          configurable: true
        });
      }
      if (schemas?.request?.formData && import_typebox.TypeGuard.TSchema(schemas.request.formData)) {
        const validateFn = getValidateFn(schemas.request.formData);
        const origMethod = request.formData.bind(request);
        Object.defineProperty(request, "formData", {
          configurable: true,
          value: () => origMethod().then(async (formData) => {
            const formDataObj = {};
            const jobs = [];
            formData.forEach((value, key) => {
              if (value != null) {
                if (typeof value === "string") {
                  formDataObj[key] = value;
                } else {
                  jobs.push(value.arrayBuffer().then((buffer2) => {
                    const typedArray = new Uint8Array(buffer2);
                    const binaryStrParts = [];
                    typedArray.forEach((byte2, index2) => {
                      binaryStrParts[index2] = String.fromCharCode(byte2);
                    });
                    formDataObj[key] = binaryStrParts.join("");
                  }));
                }
              }
            });
            await Promise.all(jobs);
            const errors = [...validateFn(formDataObj)].map((error) => sanitizeError(error, "formData"));
            if (errors.length) {
              throw new HTTPError(400, "Bad Request", {
                "x-error-type": "validation"
              }, {
                errors
              });
            }
            return formDataObj;
          })
        });
      }
    }
  };
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/utils.js
function asyncIterationUntilReturn(iterable, callback) {
  const iterator = iterable[Symbol.iterator]();
  function iterate() {
    const { value, done } = iterator.next();
    if (done) {
      return;
    }
    if (value) {
      const callbackResult$ = callback(value);
      if (isPromise(callbackResult$)) {
        return callbackResult$.then((callbackResult) => {
          if (callbackResult) {
            return callbackResult;
          }
          return iterate();
        });
      }
      if (callbackResult$) {
        return callbackResult$;
      }
      return iterate();
    }
  }
  return iterate();
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/createRouter.js
var EMPTY_OBJECT2 = {};
function createRouterBase({ fetchAPI: givenFetchAPI, base: basePath = "/", plugins = [], openAPI, swaggerUI, landingPage = true } = {}, openAPIDocument) {
  const fetchAPI = {
    ...DefaultFetchAPI2,
    ...givenFetchAPI
  };
  const __onRouterInitHooks = [];
  const onRouteHooks = [];
  const onRouteHandleHooks = [];
  for (const plugin of plugins) {
    if (plugin.onRouterInit) {
      __onRouterInitHooks.push(plugin.onRouterInit);
    }
    if (plugin.onRoute) {
      onRouteHooks.push(plugin.onRoute);
    }
    if (plugin.onRouteHandle) {
      onRouteHandleHooks.push(plugin.onRouteHandle);
    }
  }
  const routeByPatternByMethod = /* @__PURE__ */ new Map();
  const routeByPathByMethod = /* @__PURE__ */ new Map();
  function handleUnhandledRoute(requestPath) {
    if (landingPage) {
      return new fetchAPI.Response(landing_page_default.replaceAll("__BASE_PATH__", basePath).replaceAll("__OAS_PATH__", openAPI?.endpoint || "/openapi.json").replaceAll("__SWAGGER_UI_PATH__", swaggerUI?.endpoint || "/docs").replaceAll("__REQUEST_PATH__", requestPath), {
        headers: {
          "Content-Type": "text/html"
        }
      });
    }
    return void 0;
  }
  return {
    openAPIDocument,
    handle(request, context) {
      let url = new Proxy(EMPTY_OBJECT2, {
        get(_target, prop, _receiver) {
          url = new fetchAPI.URL(request.url, "http://localhost");
          return Reflect.get(url, prop, url);
        }
      });
      let parsedQuery;
      Object.defineProperties(request, {
        parsedUrl: {
          get() {
            return url;
          },
          configurable: true
        },
        query: {
          get() {
            if (parsedQuery == null) {
              const searchPart = request.url.split("?")[1];
              if (searchPart == null) {
                return EMPTY_OBJECT2;
              }
              parsedQuery = (0, import_qs.parse)(searchPart);
            }
            return parsedQuery;
          },
          configurable: true
        }
      });
      const pathPatternMapByMethod = routeByPathByMethod.get(request.method);
      if (pathPatternMapByMethod) {
        const route = pathPatternMapByMethod.get(url.pathname);
        if (route) {
          for (const onRouteHandleHook of onRouteHandleHooks) {
            onRouteHandleHook({
              route,
              request
            });
          }
          const handlerResult$ = route.handler(request, context);
          if (isPromise(handlerResult$)) {
            return handlerResult$.then((handlerResult) => {
              if (handlerResult) {
                return handlerResult;
              }
              return handleUnhandledRoute(request.url);
            });
          }
          if (handlerResult$) {
            return handlerResult$;
          }
        }
      }
      const methodPatternMaps = routeByPatternByMethod.get(request.method);
      if (methodPatternMaps) {
        const patternHandlerResult$ = asyncIterationUntilReturn(methodPatternMaps.entries(), ([pattern, route]) => {
          const match = pattern.exec(url);
          if (match != null) {
            let paramsProxy;
            Object.defineProperty(request, "params", {
              get() {
                if (paramsProxy == null) {
                  paramsProxy = new Proxy(match.pathname.groups, {
                    get(_, prop) {
                      const value = match.pathname.groups[prop.toString()];
                      if (value != null) {
                        return decodeURIComponent(value);
                      }
                      return value;
                    }
                  });
                }
                return paramsProxy;
              },
              configurable: true
            });
            for (const onRouteHandleHook of onRouteHandleHooks) {
              onRouteHandleHook({
                route,
                request
              });
            }
            return route.handler(request, context);
          }
        });
        if (isPromise(patternHandlerResult$)) {
          return patternHandlerResult$.then((patternHandlerResult) => {
            if (patternHandlerResult) {
              return patternHandlerResult;
            }
            return handleUnhandledRoute(request.url);
          });
        }
        if (patternHandlerResult$) {
          return patternHandlerResult$;
        }
      }
      return handleUnhandledRoute(request.url);
    },
    route(route) {
      for (const onRouteHook of onRouteHooks) {
        onRouteHook({
          basePath,
          route,
          routeByPathByMethod,
          routeByPatternByMethod,
          openAPIDocument
        });
      }
      return this;
    },
    __client: {},
    __onRouterInitHooks
  };
}
function createRouter(options = {}) {
  const { openAPI: { endpoint: oasEndpoint = "/openapi.json", includeValidationErrors, ...openAPIDocument } = {}, swaggerUI: { endpoint: swaggerUIEndpoint = "/docs", ...swaggerUIOpts } = {}, plugins: userPlugins = [], base: base2 = "/" } = options;
  openAPIDocument.openapi = openAPIDocument.openapi || "3.0.1";
  const oasInfo = openAPIDocument.info ||= {};
  oasInfo.title ||= "feTS API";
  oasInfo.description ||= "An API written with feTS";
  oasInfo.version ||= "1.0.0";
  if (base2 !== "/") {
    openAPIDocument.servers = openAPIDocument.servers || [
      {
        url: base2
      }
    ];
  }
  const plugins = [
    ...oasEndpoint || swaggerUIEndpoint ? [
      useOpenAPI({
        oasEndpoint,
        swaggerUIEndpoint,
        swaggerUIOpts,
        includeValidationErrors
      })
    ] : [],
    useTypeBox(),
    useErrorHandling(options?.onError),
    useDefineRoutes(),
    ...userPlugins
  ];
  const finalOpts = {
    ...options,
    swaggerUI: {
      endpoint: swaggerUIEndpoint,
      ...swaggerUIOpts
    },
    base: base2,
    plugins
  };
  const routerBaseObject = createRouterBase(finalOpts, openAPIDocument);
  const router = createServerAdapter(routerBaseObject, finalOpts);
  for (const onRouterInitHook of routerBaseObject.__onRouterInitHooks) {
    onRouterInitHook(router);
  }
  return router;
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/index.js
var import_fetch6 = __toESM(require_global_ponyfill(), 1);

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/client/createClient.js
var import_qs2 = __toESM(require_lib(), 1);
var import_fetch4 = __toESM(require_global_ponyfill(), 1);

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/client/clientResponse.js
function createClientTypedResponsePromise(response$) {
  return new Proxy(response$, {
    get(target, key, receiver) {
      if (key === "json") {
        return () => target.then((res) => res.json());
      }
      const value = Reflect.get(target, key, receiver);
      if (typeof value === "function") {
        return value.bind(target);
      }
      return value;
    },
    has(target, key) {
      if (key === "json") {
        return true;
      }
      return Reflect.has(target, key);
    }
  });
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/client/createClient.js
var qsOptions = {
  indices: false,
  arrayFormat: "repeat"
};
var ClientValidationError = class extends Error {
  constructor(path, method, errors, response) {
    super(`Validation failed for ${method} ${path}`);
    this.path = path;
    this.method = method;
    this.errors = errors;
    this.response = response;
  }
  [Symbol.iterator]() {
    return this.errors[Symbol.iterator]();
  }
};
function useValidationErrors() {
  return {
    async onResponse({ path, method, response }) {
      if (response.status === 400 && response.headers.get("x-error-type") === "validation") {
        const resJson = await response.json();
        if (resJson.errors) {
          throw new ClientValidationError(path, method, resJson.errors, response);
        }
      }
    }
  };
}
var EMPTY_OBJECT3 = {};
function createClient2({ endpoint, fetchFn = import_fetch4.fetch, plugins = [], globalParams }) {
  plugins.unshift(useValidationErrors());
  const onRequestInitHooks = [];
  const onFetchHooks = [];
  const onResponseHooks = [];
  for (const plugin of plugins) {
    if (plugin.onRequestInit) {
      onRequestInitHooks.push(plugin.onRequestInit);
    }
    if (plugin.onFetch) {
      onFetchHooks.push(plugin.onFetch);
    }
    if (plugin.onResponse) {
      onResponseHooks.push(plugin.onResponse);
    }
  }
  return new Proxy(EMPTY_OBJECT3, {
    get(_target, path) {
      return new Proxy(EMPTY_OBJECT3, {
        get(_target2, method) {
          async function clientMethod(requestParams = {}) {
            if (globalParams?.headers) {
              requestParams.headers = {
                ...globalParams.headers,
                ...requestParams.headers
              };
            }
            if (globalParams?.query) {
              requestParams.query = {
                ...globalParams.query,
                ...requestParams.query
              };
            }
            if (globalParams?.params) {
              requestParams.params = {
                ...globalParams.params,
                ...requestParams.params
              };
            }
            if (globalParams?.json) {
              requestParams.json = {
                ...globalParams.json,
                ...requestParams.json
              };
            }
            if (globalParams?.formData) {
              requestParams.formData = {
                ...globalParams.formData,
                ...requestParams.formData
              };
            }
            if (globalParams?.formUrlEncoded) {
              requestParams.formUrlEncoded = {
                ...globalParams.formUrlEncoded,
                ...requestParams.formUrlEncoded
              };
            }
            const { headers = {}, params: paramsBody, json: jsonBody, formData: formDataBody, formUrlEncoded: formUrlEncodedBody, query: queryBody, ...requestInitByUser } = requestParams;
            if (paramsBody) {
              for (const pathParamKey in paramsBody) {
                const value = paramsBody[pathParamKey];
                if (value) {
                  path = path.replace(`{${pathParamKey}}`, value).replace(`:${pathParamKey}`, value);
                }
              }
            }
            if (!path.startsWith("/") && !path.startsWith("http")) {
              path = `/${path}`;
            }
            const requestInit = {
              ...requestInitByUser,
              method,
              headers
            };
            if (jsonBody) {
              requestInit.body = JSON.stringify(jsonBody);
              headers["Content-Type"] = "application/json";
            }
            if (formDataBody) {
              requestInit.body = new import_fetch4.FormData();
              for (const key in formDataBody) {
                const value = formDataBody[key];
                if (value != null) {
                  requestInit.body.append(key, value);
                }
              }
            }
            if (formUrlEncodedBody) {
              requestInit.body = (0, import_qs2.stringify)(formUrlEncodedBody, qsOptions);
              requestInit.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            let response;
            for (const onRequestParamsHook of onRequestInitHooks) {
              await onRequestParamsHook({
                path,
                method,
                requestParams,
                requestInit,
                endResponse(res) {
                  response = res;
                }
              });
            }
            if (response == null) {
              let finalUrl = path;
              if (endpoint && !path.startsWith("http")) {
                finalUrl = `${endpoint}${path}`;
              }
              if (queryBody) {
                const searchParams = (0, import_qs2.stringify)(queryBody, qsOptions);
                if (finalUrl.includes("?")) {
                  finalUrl += "&" + searchParams;
                } else {
                  finalUrl += "?" + searchParams;
                }
              }
              let currentFetchFn = fetchFn;
              for (const onFetchHook of onFetchHooks) {
                await onFetchHook({
                  url: finalUrl,
                  init: requestInit,
                  fetchFn: currentFetchFn,
                  setFetchFn(newFetchFn) {
                    currentFetchFn = newFetchFn;
                  }
                });
              }
              response = await currentFetchFn(finalUrl, requestInit);
            }
            for (const onResponseHook of onResponseHooks) {
              await onResponseHook({
                path,
                method,
                requestParams,
                requestInit,
                response
              });
            }
            return response;
          }
          return function wrappedClientMethod(requestParams = {}) {
            return createClientTypedResponsePromise(clientMethod(requestParams));
          };
        }
      });
    }
  });
}

// node_modules/.pnpm/@whatwg-node+cookie-store@0.2.2/node_modules/@whatwg-node/cookie-store/esm/parse.js
var decode = decodeURIComponent;
var pairSplitRegExp = /; */;
function tryDecode(str, decode2) {
  try {
    return typeof decode2 === "boolean" ? decodeURIComponent(str) : decode2(str);
  } catch (e) {
    return str;
  }
}
function parse(str, options = {}) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const map = /* @__PURE__ */ new Map();
  const opt = options || {};
  const pairs = str.split(pairSplitRegExp);
  const dec = opt.decode || decode;
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    let eqIdx = pair.indexOf("=");
    if (eqIdx < 0) {
      continue;
    }
    const key = pair.substr(0, eqIdx).trim();
    let val = pair.substr(++eqIdx, pair.length).trim();
    if (val[0] === '"') {
      val = val.slice(1, -1);
    }
    const cookiesPerKey = map.get(key);
    if (!cookiesPerKey) {
      map.set(key, { name: key, value: tryDecode(val, dec) });
    }
  }
  return map;
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/client/plugins/useClientCookieStore.js
var import_fetch5 = __toESM(require_global_ponyfill(), 1);
function useClientCookieStore(cookieStore) {
  return {
    async onRequestInit({ requestInit }) {
      requestInit.headers = new import_fetch5.Headers(requestInit.headers);
      let cookieHeader = requestInit.headers.get("cookie") || "";
      if (cookieHeader) {
        cookieHeader += "; ";
      }
      const cookies = await cookieStore.getAll();
      cookieHeader += cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
      requestInit.headers.set("cookie", cookieHeader);
    },
    onResponse({ response }) {
      const setCookies = response.headers.getSetCookie?.();
      if (setCookies) {
        for (const setCookie of setCookies) {
          const cookieMap = parse(setCookie);
          for (const [, cookie] of cookieMap) {
            cookieStore.set(cookie);
          }
        }
      }
    }
  };
}

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/index.js
__reExport(esm_exports, __toESM(require_typebox(), 1));

// node_modules/.pnpm/fets@0.6.8/node_modules/fets/esm/plugins/formats.js
var import_typebox3 = __toESM(require_typebox(), 1);
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
var HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var URITEMPLATE = (
  // eslint-disable-next-line no-control-regex
  /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i
);
var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
var FASTDATE = /^\d\d\d\d-[0-1]\d-[0-3]\d$/;
var FASTTIME = /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i;
var FASTDATETIME = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i;
var FASTURIREFERENCE = /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i;
var EMAIL = (input) => {
  if (input[0] === '"')
    return false;
  const [name, host, ...rest] = input.split("@");
  if (!name || !host || rest.length !== 0 || name.length > 64 || host.length > 253)
    return false;
  if (name[0] === "." || name.endsWith(".") || name.includes(".."))
    return false;
  if (!/^[a-z0-9.-]+$/i.test(host) || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(name))
    return false;
  return host.split(".").every((part) => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(part));
};
var IPV4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
var IPV6 = /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
var DURATION = (input) => input.length > 1 && input.length < 80 && (/^P\d+([.,]\d+)?W$/.test(input) || /^P[\dYMDTHS]*(\d[.,]\d+)?[YMDHS]$/.test(input) && /^P([.,\d]+Y)?([.,\d]+M)?([.,\d]+D)?(T([.,\d]+H)?([.,\d]+M)?([.,\d]+S)?)?$/.test(input));
function bind(r) {
  return r.test.bind(r);
}
var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
function byte(str) {
  BYTE.lastIndex = 0;
  return BYTE.test(str);
}
function float(str) {
  const n = +str;
  return !Number.isNaN(n) && Number.isFinite(n);
}
var fullFormat = {
  date,
  time: time.bind(void 0, false),
  // eslint-disable-next-line camelcase
  "date-time": date_time,
  duration: DURATION,
  uri,
  "uri-reference": bind(URIREF),
  "uri-template": bind(URITEMPLATE),
  url: (v) => {
    try {
      new URL(v);
      return true;
    } catch (e) {
      return false;
    }
  },
  email: EMAIL,
  hostname: bind(HOSTNAME),
  ipv4: bind(IPV4),
  ipv6: bind(IPV6),
  regex,
  uuid: bind(UUID),
  "json-pointer": bind(JSON_POINTER),
  "json-pointer-uri-fragment": bind(JSON_POINTER_URI_FRAGMENT),
  "relative-json-pointer": bind(RELATIVE_JSON_POINTER),
  "iso-date-time": bind(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i),
  "iso-time": bind(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i),
  byte,
  int32: (v) => Number.isSafeInteger(+v) && +v >= -2147483648 && +v <= 2147483647,
  int64: (v) => {
    const vNum = BigInt(v);
    return vNum >= -9223372036854775808n && vNum <= 9223372036854775807n;
  },
  float,
  double: float,
  password: () => true,
  binary: (val) => val != null && typeof val === "object" && (val[Symbol.toStringTag] === "File" || val[Symbol.toStringTag] === "Blob")
};
var fastFormat = {
  ...fullFormat,
  date: bind(FASTDATE),
  time: bind(FASTTIME),
  "date-time": bind(FASTDATETIME),
  "uri-reference": bind(FASTURIREFERENCE)
};
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function date(str) {
  const matches = str.match(DATE);
  if (!matches)
    return false;
  const year = +matches[1];
  const month = +matches[2];
  const day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && // eslint-disable-next-line eqeqeq
  day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
function time(full, str) {
  const matches = str.match(TIME);
  if (!matches)
    return false;
  const hour = +matches[1];
  const minute = +matches[2];
  const second = +matches[3];
  const timeZone = !!matches[5];
  return (hour <= 23 && minute <= 59 && second <= 59 || // eslint-disable-next-line eqeqeq
  hour == 23 && minute == 59 && second == 60) && (!full || timeZone);
}
var DATE_TIME_SEPARATOR = /t|\s/i;
function date_time(str) {
  const dateTime = str.split(DATE_TIME_SEPARATOR);
  return dateTime.length == 2 && date(dateTime[0]) && time(true, dateTime[1]);
}
var NOT_URI_FRAGMENT = /\/|:/;
var URI_PATTERN = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
  return NOT_URI_FRAGMENT.test(str) && URI_PATTERN.test(str);
}
var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
  if (Z_ANCHOR.test(str))
    return false;
  try {
    new RegExp(str);
    return true;
  } catch (e) {
    return false;
  }
}
function registerFormats({ formats = Object.keys(fastFormat), type = "fast" } = {}) {
  const formatMap = type === "full" ? fullFormat : fastFormat;
  for (const format of formats) {
    import_typebox3.FormatRegistry.Set(format, formatMap[format]);
  }
}

// node_modules/.pnpm/@witnessco+client@0.1.14_viem@2.9.6/node_modules/@witnessco/client/dist/index.js
var y = [{ type: "constructor", inputs: [{ name: "owner", type: "address", internalType: "address" }], stateMutability: "nonpayable" }, { type: "fallback", stateMutability: "nonpayable" }, { type: "function", name: "UPDATER_ROLE", inputs: [], outputs: [{ name: "", type: "uint256", internalType: "uint256" }], stateMutability: "view" }, { type: "function", name: "cancelOwnershipHandover", inputs: [], outputs: [], stateMutability: "payable" }, { type: "function", name: "completeOwnershipHandover", inputs: [{ name: "pendingOwner", type: "address", internalType: "address" }], outputs: [], stateMutability: "payable" }, { type: "function", name: "currentRoot", inputs: [], outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }], stateMutability: "view" }, { type: "function", name: "getCurrentTreeState", inputs: [], outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }, { name: "", type: "uint256", internalType: "uint256" }], stateMutability: "view" }, { type: "function", name: "getLastUpdateBlock", inputs: [], outputs: [{ name: "", type: "uint256", internalType: "uint256" }], stateMutability: "view" }, { type: "function", name: "getLastUpdateTime", inputs: [], outputs: [{ name: "", type: "uint256", internalType: "uint256" }], stateMutability: "view" }, { type: "function", name: "grantRoles", inputs: [{ name: "user", type: "address", internalType: "address" }, { name: "roles", type: "uint256", internalType: "uint256" }], outputs: [], stateMutability: "payable" }, { type: "function", name: "hasAllRoles", inputs: [{ name: "user", type: "address", internalType: "address" }, { name: "roles", type: "uint256", internalType: "uint256" }], outputs: [{ name: "", type: "bool", internalType: "bool" }], stateMutability: "view" }, { type: "function", name: "hasAnyRole", inputs: [{ name: "user", type: "address", internalType: "address" }, { name: "roles", type: "uint256", internalType: "uint256" }], outputs: [{ name: "", type: "bool", internalType: "bool" }], stateMutability: "view" }, { type: "function", name: "owner", inputs: [], outputs: [{ name: "result", type: "address", internalType: "address" }], stateMutability: "view" }, { type: "function", name: "ownershipHandoverExpiresAt", inputs: [{ name: "pendingOwner", type: "address", internalType: "address" }], outputs: [{ name: "result", type: "uint256", internalType: "uint256" }], stateMutability: "view" }, { type: "function", name: "renounceOwnership", inputs: [], outputs: [], stateMutability: "payable" }, { type: "function", name: "renounceRoles", inputs: [{ name: "roles", type: "uint256", internalType: "uint256" }], outputs: [], stateMutability: "payable" }, { type: "function", name: "requestOwnershipHandover", inputs: [], outputs: [], stateMutability: "payable" }, { type: "function", name: "revokeRoles", inputs: [{ name: "user", type: "address", internalType: "address" }, { name: "roles", type: "uint256", internalType: "uint256" }], outputs: [], stateMutability: "payable" }, { type: "function", name: "rolesOf", inputs: [{ name: "user", type: "address", internalType: "address" }], outputs: [{ name: "roles", type: "uint256", internalType: "uint256" }], stateMutability: "view" }, { type: "function", name: "rootCache", inputs: [{ name: "root", type: "bytes32", internalType: "bytes32" }], outputs: [{ name: "", type: "uint256", internalType: "uint256" }], stateMutability: "view" }, { type: "function", name: "rootInfo", inputs: [{ name: "root", type: "bytes32", internalType: "bytes32" }], outputs: [{ name: "", type: "tuple", internalType: "struct RootInfo", components: [{ name: "treeSize", type: "uint176", internalType: "uint176" }, { name: "timestamp", type: "uint40", internalType: "uint40" }, { name: "height", type: "uint40", internalType: "uint40" }] }], stateMutability: "view" }, { type: "function", name: "safeVerifyProof", inputs: [{ name: "proof", type: "tuple", internalType: "struct Proof", components: [{ name: "index", type: "uint256", internalType: "uint256" }, { name: "leaf", type: "bytes32", internalType: "bytes32" }, { name: "leftRange", type: "bytes32[]", internalType: "bytes32[]" }, { name: "rightRange", type: "bytes32[]", internalType: "bytes32[]" }, { name: "targetRoot", type: "bytes32", internalType: "bytes32" }] }], outputs: [{ name: "isValid", type: "bool", internalType: "bool" }], stateMutability: "view" }, { type: "function", name: "transferOwnership", inputs: [{ name: "newOwner", type: "address", internalType: "address" }], outputs: [], stateMutability: "payable" }, { type: "function", name: "updateTreeRoot", inputs: [{ name: "newSize", type: "uint256", internalType: "uint256" }, { name: "oldRange", type: "bytes32[]", internalType: "bytes32[]" }, { name: "newRange", type: "bytes32[]", internalType: "bytes32[]" }], outputs: [], stateMutability: "nonpayable" }, { type: "function", name: "verifyProof", inputs: [{ name: "proof", type: "tuple", internalType: "struct Proof", components: [{ name: "index", type: "uint256", internalType: "uint256" }, { name: "leaf", type: "bytes32", internalType: "bytes32" }, { name: "leftRange", type: "bytes32[]", internalType: "bytes32[]" }, { name: "rightRange", type: "bytes32[]", internalType: "bytes32[]" }, { name: "targetRoot", type: "bytes32", internalType: "bytes32" }] }], outputs: [], stateMutability: "view" }, { type: "event", name: "OwnershipHandoverCanceled", inputs: [{ name: "pendingOwner", type: "address", indexed: true, internalType: "address" }], anonymous: false }, { type: "event", name: "OwnershipHandoverRequested", inputs: [{ name: "pendingOwner", type: "address", indexed: true, internalType: "address" }], anonymous: false }, { type: "event", name: "OwnershipTransferred", inputs: [{ name: "oldOwner", type: "address", indexed: true, internalType: "address" }, { name: "newOwner", type: "address", indexed: true, internalType: "address" }], anonymous: false }, { type: "event", name: "RolesUpdated", inputs: [{ name: "user", type: "address", indexed: true, internalType: "address" }, { name: "roles", type: "uint256", indexed: true, internalType: "uint256" }], anonymous: false }, { type: "event", name: "RootUpdated", inputs: [{ name: "newRoot", type: "bytes32", indexed: true, internalType: "bytes32" }, { name: "newSize", type: "uint256", indexed: true, internalType: "uint256" }], anonymous: false }, { type: "error", name: "AlreadyInitialized", inputs: [] }, { type: "error", name: "InvalidProofBadLeftRange", inputs: [] }, { type: "error", name: "InvalidProofBadRightRange", inputs: [] }, { type: "error", name: "InvalidProofLeafIdxOutOfBounds", inputs: [] }, { type: "error", name: "InvalidProofUnrecognizedRoot", inputs: [] }, { type: "error", name: "InvalidUpdateNewRangeMismatchWrongLength", inputs: [] }, { type: "error", name: "InvalidUpdateOldRangeMismatchShouldBeEmpty", inputs: [] }, { type: "error", name: "InvalidUpdateOldRangeMismatchWrongCurrentRoot", inputs: [] }, { type: "error", name: "InvalidUpdateOldRangeMismatchWrongLength", inputs: [] }, { type: "error", name: "InvalidUpdateTreeSizeMustGrow", inputs: [] }, { type: "error", name: "NewOwnerIsZeroAddress", inputs: [] }, { type: "error", name: "NoHandoverRequest", inputs: [] }, { type: "error", name: "Unauthorized", inputs: [] }];
var l = { [base.id]: "0x0000000e143f453f45B2E1cCaDc0f3CE21c2F06a", [mainnet.id]: "0x0000000e143f453f45B2E1cCaDc0f3CE21c2F06a", [optimism.id]: "0x0000000e143f453f45B2E1cCaDc0f3CE21c2F06a", [baseSepolia.id]: "0x0000000159C8253802551eEaf8b475db1A50d712", [sepolia.id]: "0x00000008bcf12Eeb9E4162687D6D251f0F4e7FC2", [optimismSepolia.id]: "0x0000000a3fa5CFe56b202F376cCa7334c93aEB8b" };
var d = [base, mainnet, optimism, baseSepolia, sepolia, optimismSepolia];
var $ = d.map((p) => p.id);
var m = (p) => {
  let e = d.find((t) => t.id === p);
  if (!e)
    throw new Error(`Unsupported chain: ${p}`);
  return e;
};
function o(p) {
  if (!isHash(p))
    throw new Error(`${p} is not a valid hash`);
  return p;
}
function c(p) {
  return p.map(o);
}
var P = "https://api.witness.co";
var j = "https://base-mainnet.g.alchemy.com/v2/0EArwrcjeLdLrQ9b-3Nac-dktS4LNMDM";
var f = class {
  constructor(e = "", t = P, n = fetch, a = j) {
    this.authToken = e;
    this.client = createClient2({ endpoint: t, fetchFn: n });
    let r = http(a), s = createPublicClient({ transport: r });
    this.chain = (async () => {
      let i = await s.getChainId();
      return m(i);
    })(), this.contract = this.chain.then((i) => {
      let u = createPublicClient({ chain: i, transport: r });
      return getContract({ client: u, address: l[i.id], abi: y });
    });
  }
  client;
  chain;
  contract;
  async getCurrentTreeState() {
    let e = await this.client["/getTreeState"].get();
    if (!e.ok)
      throw new Error("Error getting current tree state", { cause: await e.json() });
    let { leafCount: t, merklizedRoot: n, merklizedLeafCount: a, unmerklizedLeafCount: r, checkpointedRoot: s, checkpointedLeafCount: i } = await e.json();
    return { leafCount: BigInt(t), merklizedRoot: o(n), merklizedLeafCount: BigInt(a), unmerklizedLeafCount: BigInt(r), checkpointedRoot: o(s), checkpointedLeafCount: BigInt(i) };
  }
  async waitForCheckpointedLeafHash(e) {
    let t = Date.now(), n = await this.getLeafIndexForHash(e);
    for (; ; ) {
      let { treeSize: a, ...r } = await this.getLatestOnchainCheckpoint(), s = BigInt(a);
      if (s > n)
        return { treeSize: s, ...r };
      if (Date.now() - t > 15 * 60 * 1e3)
        throw new Error(`Timeout waiting for checkpoint covering leafIndex ${n}`);
      await new Promise((i) => setTimeout(i, 5e3));
    }
  }
  async postLeaf(e) {
    let t = await this.client["/postLeafHash"].post({ json: { leafHash: e }, headers: { Authorization: `Bearer ${this.authToken}` } });
    if (!t.ok)
      throw new Error(`Error inserting leafHash ${e}`, { cause: await t.json() });
    let { leafIndex: n } = await t.json();
    return { leafHash: e, leafIndex: BigInt(n) };
  }
  async postLeafAndGetProof(e) {
    await this.postLeaf(e);
    let { treeSize: t } = await this.waitForCheckpointedLeafHash(e);
    return this.getProofForLeafHash(e, t);
  }
  async postLeafAndGetTimestamp(e) {
    return await this.postLeaf(e), await this.waitForCheckpointedLeafHash(e), this.getTimestampForLeafHash(e);
  }
  async getTimestampForLeafHash(e) {
    let t = await this.client["/getTimestampByLeafHash"].get({ query: { leafHash: e, chainId: (await this.chain).id } });
    if (!t.ok)
      throw new Error(`Error getting timestamp for leafhash ${e}`, { cause: await t.json() });
    let { timestamp: n } = await t.json();
    return new Date(Number(n) * 1e3);
  }
  async getLeafIndexForHash(e) {
    let t = await this.client["/getLeafIndexByHash"].get({ query: { leafHash: e } });
    if (!t.ok)
      throw new Error(`Error getting leafIndex for hash ${e}`, { cause: await t.json() });
    let { leafIndex: n } = await t.json();
    return BigInt(n);
  }
  async getEarliestCheckpointCoveringLeafIndex(e) {
    let t = await this.client["/getEarliestCheckpointCoveringLeafIndex"].get({ query: { chainId: (await this.chain).id, leafIndex: e.toString() } });
    if (!t.ok)
      throw new Error(`Error getting checkpoint covering leafIndex ${e}`, { cause: await t.json() });
    let { blockNumber: n, blockHash: a, timestamp: r, rootHash: s, treeSize: i, txHash: u, ...b } = await t.json();
    return { ...b, blockNumber: BigInt(n), blockHash: o(a), timestamp: new Date(Number(r) * 1e3), rootHash: o(s), treeSize: BigInt(i), txHash: o(u) };
  }
  async getLatestOnchainCheckpoint() {
    let e = await this.client["/getLatestCheckpoint"].get({ query: { chainId: (await this.chain).id } });
    if (!e.ok)
      throw new Error("Error getting latest onchain checkpoint", { cause: await e.json() });
    let { blockNumber: t, blockHash: n, timestamp: a, rootHash: r, treeSize: s, txHash: i, ...u } = await e.json();
    return { ...u, blockNumber: BigInt(t), blockHash: o(n), timestamp: new Date(Number(a) * 1e3), rootHash: o(r), treeSize: BigInt(s), txHash: o(i) };
  }
  async getCheckpointByTxHash(e) {
    let t = await this.client["/getCheckpointByTransactionHash"].get({ query: { txHash: e } });
    if (!t.ok)
      throw new Error(`Error getting checkpoint for txHash ${e}`, { cause: await t.json() });
    let { blockNumber: n, blockHash: a, timestamp: r, rootHash: s, treeSize: i, ...u } = await t.json();
    return { ...u, blockNumber: BigInt(n), blockHash: o(a), timestamp: new Date(Number(r) * 1e3), rootHash: o(s), treeSize: BigInt(i) };
  }
  async getProofForLeafHash(e, t) {
    let n = await this.client["/getProofForLeafHash"].get({ query: { leafHash: e, targetTreeSize: t?.toString() } });
    if (!n.ok)
      throw new Error(`Error getting proof for leafHash ${e}`, { cause: await n.json() });
    let { leafIndex: a, leftHashes: r, rightHashes: s, targetRootHash: i } = await n.json();
    return { leafIndex: BigInt(a), leafHash: e, leftHashes: c(r), rightHashes: c(s), targetRootHash: o(i) };
  }
  async verifyProofServer(e) {
    let { leafIndex: t, ...n } = e, a = await this.client["/postProof"].post({ json: { leafIndex: t.toString(), ...n } });
    if (!a.ok)
      throw new Error("Error verifying proof", { cause: await a.json() });
    return a.json();
  }
  async verifyProofChain(e) {
    let t = await this.contract, { leafIndex: n, leafHash: a, leftHashes: r, rightHashes: s, targetRootHash: i } = e;
    return await t.read.safeVerifyProof([{ index: n, leaf: a, leftRange: r ?? [], rightRange: s ?? [], targetRoot: i }]);
  }
  hash(e) {
    let t = encodePacked(["string"], [e]);
    return keccak256(t);
  }
};

// src/api.ts
var API_KEY = "";
var createWitnessHash = (content) => {
  const witness = new f(API_KEY);
  return witness.hash(content);
};
var getTimestamp = async (leafHash) => {
  const witness = new f(API);
  try {
    const timestamp = await witness.getTimestampForLeafHash(leafHash);
    return timestamp;
  } catch (ex) {
    console.log("no timestamp found");
    await postLeaf(leafHash);
    return void 0;
  }
};
var postLeaf = async (leafHash) => {
  const witness = new f(API_KEY);
  const result = await witness.postLeaf(leafHash);
  console.log("result: ", result);
  return result;
};

// src/components/WitnessedCredentialHeader.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var WitnessedCredentialHeader = ({
  credential
}) => {
  const witness = new f();
  const { data: witnessData, isLoading: isLoadingWitnessData } = (0, import_react_query.useQuery)(
    ["witness-data", credential.hash],
    () => {
      return getTimestamp(witness.hash(credential.hash));
    }
  );
  if (!witnessData) {
    console.log("credential not yet witnessed");
  }
  const date2 = import_react3.default.useMemo(() => {
    if (!witnessData)
      return void 0;
    return witnessData;
  }, [witnessData]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: date2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "horizontal", align: "baseline", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckOutlined_default2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Typography.Text, { children: `Witnessed: ${date2.toDateString()}` }) })
  ] }) });
};

// src/components/Polls.tsx
var import_react5 = __toESM(require_react(), 1);
var import_react_router_dom = __toESM(require_react_router_dom(), 1);
var import_react_query2 = __toESM(require_react_query(), 1);
var import_veramo_react2 = __toESM(require_veramo_react(), 1);
var import_pro_components = __toESM(require_pro_components(), 1);
var import_agent_explorer_plugin2 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd3 = __toESM(require_antd(), 1);

// src/components/PollForm.tsx
var import_antd2 = __toESM(require_antd(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_veramo_react = __toESM(require_veramo_react(), 1);
var import_agent_explorer_plugin = __toESM(require_agent_explorer_plugin(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var PollForm = ({ onOk, initialIssuer }) => {
  const token = import_antd2.theme.useToken();
  const [title, setTitle] = (0, import_react4.useState)("");
  const [pollInput, setPollInput] = (0, import_react4.useState)("");
  const [pollOptions, setPollOptions] = (0, import_react4.useState)([]);
  const { agent } = (0, import_veramo_react.useVeramo)();
  const [isSaving, setIsSaving] = (0, import_react4.useState)(false);
  const [form] = import_antd2.Form.useForm();
  const handleCreatePost = async (did, issuerAgent) => {
    setIsSaving(true);
    try {
      const identifier = await issuerAgent?.didManagerGet({ did });
      const usableProofs = await issuerAgent.listUsableProofFormats(identifier);
      const proofFormat = usableProofs.includes("jwt") ? "jwt" : usableProofs[0];
      const credential = await issuerAgent.createVerifiableCredential({
        save: true,
        proofFormat,
        credential: {
          "@context": ["https://www.w3.org/2018/credentials/v1"],
          type: ["VerifiableCredential", "WitnessPollAnnouncement"],
          issuer: { id: did },
          issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
          credentialSubject: {
            title,
            pollOptions: pollOptions.map(({ option }) => option)
          }
        }
      });
      console.log("credential: ", credential);
      if (credential) {
        const credhash = await agent?.dataStoreSaveVerifiableCredential({ verifiableCredential: credential });
        const witnessHash = createWitnessHash(credhash);
        await postLeaf(witnessHash);
        if (credhash) {
          window.localStorage.removeItem("witness-poll");
          onOk(credhash);
        }
      }
    } catch (e) {
      console.error(e);
    }
    setIsSaving(false);
  };
  console.log("pollOptions: ", pollOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Space, { direction: "vertical", style: { width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Form, { form, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_antd2.Input,
        {
          defaultValue: "Title",
          value: title,
          onChange: (e) => setTitle(e.target.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Space.Compact, { style: { width: "100%" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_antd2.Input,
          {
            defaultValue: "Add poll option",
            value: pollInput,
            onChange: (e) => setPollInput(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Button, { type: "primary", onClick: () => {
          setPollOptions([...pollOptions, { option: pollInput }]);
          setPollInput("");
        }, children: "Add Poll Option" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Table, { dataSource: pollOptions, columns: [{ title: "option", key: "option", dataIndex: "option" }] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Space, { direction: "horizontal", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_agent_explorer_plugin.ActionButton,
      {
        title: "Create Poll and Save to Agent:",
        disabled: pollOptions.length === 0 || isSaving,
        onAction: handleCreatePost
      }
    ) })
  ] });
};

// src/components/Polls.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Polls = () => {
  const { notification } = import_antd3.App.useApp();
  const [drawerOpen, setDrawerOpen] = (0, import_react5.useState)(false);
  const [pageSize, setPageSize] = import_react5.default.useState(10);
  const [page, setPage] = import_react5.default.useState(1);
  const navigate = (0, import_react_router_dom.useNavigate)();
  const { agent } = (0, import_veramo_react2.useVeramo)();
  const { data: credentialsCount } = (0, import_react_query2.useQuery)(
    ["credentialsCount", { agentId: agent?.context.name }],
    () => agent?.dataStoreORMGetVerifiableCredentialsCount({
      where: [{ column: "type", value: ["VerifiableCredential,WitnessPollAnnouncement"] }]
    })
  );
  const { data: credentials, isLoading, refetch } = (0, import_react_query2.useQuery)(
    ["witness-polls", { agentId: agent?.context.name }],
    () => agent?.dataStoreORMGetVerifiableCredentials({
      where: [{ column: "type", value: ["VerifiableCredential,WitnessPollAnnouncement"] }],
      order: [{ column: "issuanceDate", direction: "DESC" }]
    })
  );
  const handleNewPost = async (hash2) => {
    console.log("handle new post.");
    notification.success({
      message: "Poll created"
    });
    setDrawerOpen(false);
    await refetch();
    navigate(`/witness/poll/${hash2}`);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_pro_components.PageContainer,
    {
      extra: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Button,
          {
            icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PlusOutlined_default2, {}),
            type: "primary",
            title: "Compose new post",
            onClick: () => setDrawerOpen(true),
            children: "Compose"
          },
          "add"
        )
      ],
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.List,
          {
            itemLayout: "vertical",
            size: "large",
            pagination: {
              position: "both",
              pageSize,
              current: page,
              total: credentialsCount,
              showSizeChanger: true,
              onChange(page2, pageSize2) {
                setPage(page2);
                setPageSize(pageSize2);
              }
            },
            dataSource: credentials,
            renderItem: (item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_agent_explorer_plugin2.VerifiableCredentialComponent, { credential: item }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Drawer,
          {
            title: "Compose new post",
            placement: "right",
            onClose: () => setDrawerOpen(false),
            open: drawerOpen,
            width: 800,
            destroyOnClose: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PollForm, { onOk: handleNewPost })
          }
        )
      ]
    }
  );
};

// src/components/CredentialActionComponent.tsx
var import_react_query4 = __toESM(require_react_query(), 1);
var import_veramo_react4 = __toESM(require_veramo_react(), 1);
var import_antd5 = __toESM(require_antd(), 1);

// src/components/VoteButton.tsx
var import_antd4 = __toESM(require_antd(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_veramo_react3 = __toESM(require_veramo_react(), 1);
var import_react_query3 = __toESM(require_react_query(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var VoteButton = ({ onAction, option }) => {
  const { agents } = (0, import_veramo_react3.useVeramo)();
  const [showDrawer, setShowDrawer] = (0, import_react6.useState)(false);
  const [showPicker, setShowPicker] = (0, import_react6.useState)(false);
  const agentQueries = (0, import_react_query3.useQueries)(
    agents?.map((agent) => {
      return {
        queryKey: ["identifiers", { agentId: agent?.context.id }],
        queryFn: () => agent.didManagerFind()
      };
    })
  );
  const identifiersWithAgents = import_react6.default.useMemo(() => {
    const identifiersWithAgents2 = [];
    if (agentQueries.every(
      (result) => result.isSuccess || result.isError
    )) {
      agentQueries.forEach((agentQuery, agentIndex) => {
        if (agentQuery.isSuccess && agentQuery.data) {
          agentQuery.data.forEach((identifier) => {
            identifiersWithAgents2.push({
              ...identifier,
              agent: agents[agentIndex]
            });
          });
        }
      });
    }
    return identifiersWithAgents2;
  }, [agentQueries]);
  const profileQueries = (0, import_react_query3.useQueries)(
    identifiersWithAgents.map((identifier) => {
      return {
        queryKey: ["identifierProfile", {
          did: identifier.did,
          //@ts-ignore
          agentId: identifier.agent.context.id
        }],
        queryFn: () => identifier.agent.getIdentifierProfile({ did: identifier.did })
      };
    })
  );
  const profilesWithAgents = import_react6.default.useMemo(() => {
    const profilesWithAgents2 = [];
    if (profileQueries.every(
      (result) => result.isSuccess || result.isError
    )) {
      profileQueries.forEach((profileQuery, profileIndex) => {
        if (profileQuery.isSuccess && profileQuery.data) {
          profilesWithAgents2.push({
            ...profileQuery.data,
            agent: identifiersWithAgents[profileIndex].agent
          });
        }
      });
    }
    return profilesWithAgents2;
  }, [profileQueries]);
  const menuStyle = {
    boxShadow: "none",
    backgroundColor: "transparent"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: option && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_antd4.Button,
      {
        style: { borderRadius: 20 },
        size: "small",
        onClick: () => setShowDrawer(true),
        type: "primary",
        children: option
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_antd4.Drawer,
      {
        title: `Vote ${option}`,
        placement: "bottom",
        closable: true,
        onClose: () => setShowDrawer(false),
        open: showDrawer,
        height: 500,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_antd4.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Col, { md: 6 }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_antd4.Col,
            {
              md: 12,
              xs: 24,
              style: { position: "relative" },
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_antd4.Menu,
                {
                  style: menuStyle,
                  items: profilesWithAgents.map(
                    (profile) => {
                      return {
                        key: profile.did,
                        onClick: () => {
                          setShowDrawer(false);
                          if (option) {
                            onAction(profile.did, option);
                          }
                        },
                        icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Avatar, { src: profile.picture, size: "small" }),
                        label: profile.name
                      };
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Col, { md: 6 })
        ] })
      }
    )
  ] }) });
};

// src/components/CredentialActionComponent.tsx
var import_uuid = __toESM(require_uuid(), 1);
var import_react_router_dom2 = __toESM(require_react_router_dom(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var CredentialActionComponent = ({
  hash: hash2
}) => {
  const { agent } = (0, import_veramo_react4.useVeramo)();
  const { notification } = import_antd5.App.useApp();
  const navigate = (0, import_react_router_dom2.useNavigate)();
  const location = (0, import_react_router_dom2.useLocation)();
  const { data: credentials, refetch } = (0, import_react_query4.useQuery)(
    [
      "credential",
      { hash: hash2, agentId: agent?.context.name }
    ],
    () => agent?.dataStoreORMGetVerifiableCredentials({
      where: [
        {
          column: "hash",
          value: [hash2]
        },
        {
          column: "type",
          value: ["VerifiableCredential,WitnessPollAnnouncement"]
        }
      ]
    })
  );
  const credential = credentials && credentials[0];
  const vote = async (did, option) => {
    const verifiableCredential = await agent?.createVerifiableCredential({
      credential: {
        "@context": ["https://www.w3.org/2018/credentials/v1"],
        type: ["VerifiableCredential", "WitnessPollResponse"],
        issuer: did,
        issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
        credentialSubject: {
          pollHash: hash2,
          option
        }
      },
      proofFormat: "jwt"
    });
    const credentialHash = await agent?.dataStoreSaveVerifiableCredential({
      verifiableCredential
    });
    await postLeaf(createWitnessHash(credentialHash));
    const messageId = (0, import_uuid.v4)();
    const threadId = credential?.hash;
    console.log("response thread id: ", threadId);
    const recipient = credential?.verifiableCredential.issuer.id;
    console.log("recipient: ", recipient);
    const shareMessage = {
      type: "https://didcomm.org/basicmessage/2.0/message",
      from: did,
      created_time: (/* @__PURE__ */ new Date()).getTime(),
      to: recipient,
      id: messageId,
      thid: threadId,
      body: { content: "I voted in your poll" },
      attachments: [{
        media_type: "credential+ld+json",
        data: { json: verifiableCredential }
      }]
    };
    const packedMessage = await agent?.packDIDCommMessage({
      message: shareMessage,
      packing: "authcrypt"
    });
    const res = await agent?.sendDIDCommMessage({
      packedMessage,
      messageId: shareMessage.id,
      recipientDidUrl: recipient
    });
    await agent?.dataStoreSaveMessage({ message: {
      type: "https://didcomm.org/basicmessage/2.0/message",
      from: did,
      to: recipient,
      id: messageId,
      threadId,
      data: { content: shareMessage.body.content },
      attachments: shareMessage.attachments
    } });
    notification.success({
      message: "Message sent"
    });
  };
  if (!credential || !credential.verifiableCredential.credentialSubject.pollOptions) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, {});
  }
  const showGoToDetails = !location.pathname.includes("/witness/poll/");
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    credential && credential.verifiableCredential.credentialSubject.pollOptions?.map((option) => {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(VoteButton, { option, onAction: vote });
    }),
    showGoToDetails && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd5.Divider, { type: "vertical" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd5.Button, { onClick: () => navigate(`/witness/poll/${hash2}`), children: "Go to Poll Details Page" })
    ] })
  ] });
};

// src/components/WitnessPoll.tsx
var React11 = __toESM(require_react(), 1);
var import_antd6 = __toESM(require_antd(), 1);
var import_veramo_react5 = __toESM(require_veramo_react(), 1);
var import_react_query5 = __toESM(require_react_query(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var WitnessPoll = ({ credential, context }) => {
  const { agent } = (0, import_veramo_react5.useVeramo)();
  const { token } = import_antd6.theme.useToken();
  const [validVotes, setValidVotes] = React11.useState([]);
  const { title, pollOptions } = credential.verifiableCredential.credentialSubject;
  const credHash = credential.hash;
  const { data: credentials, refetch } = (0, import_react_query5.useQuery)(
    [
      "credentialReactionCredentials",
      { credHash, agentId: agent?.context.name }
    ],
    () => agent?.dataStoreORMGetVerifiableCredentialsByClaims({
      where: [
        {
          column: "type",
          value: ["pollHash"]
        },
        {
          column: "value",
          value: [credHash]
        },
        {
          column: "credentialType",
          value: ["VerifiableCredential,WitnessPollResponse"]
        }
      ]
    })
  );
  React11.useEffect(() => {
    async function getWitnessed() {
      if (credentials) {
        let validVotesTemp = [];
        for (var cred of credentials) {
          try {
            const result = await getTimestamp(createWitnessHash(cred.hash));
            if (result) {
              console.log("found witnesed vote hash: ", cred.hash);
              validVotesTemp.push(cred.hash);
            } else {
              console.log("not a witnessed vote. hash: ", cred.hash);
            }
          } catch (ex) {
            console.log("not sure: ", ex);
          }
        }
        setValidVotes(validVotesTemp);
      }
    }
    getWitnessed();
  }, [credentials]);
  const map = /* @__PURE__ */ new Map();
  const witnessedMap = /* @__PURE__ */ new Map();
  pollOptions.forEach((po) => {
    map.set(po, 0);
    witnessedMap.set(po, 0);
  });
  console.log("valid votes: ", validVotes);
  credentials?.forEach((vote) => {
    const option = vote.verifiableCredential.credentialSubject.option;
    map.set(option, (map.get(option) || 0) + 1);
    if (validVotes.includes(vote.hash)) {
      console.log("found a witnessed vote. hash: ", vote.hash);
      witnessedMap.set(option, (witnessedMap.get(option) || 0) + 1);
    }
  });
  let pollResults = [{}];
  map.forEach((count, option) => {
    pollResults = [...pollResults, { option, count, validCount: witnessedMap.get(option) }];
  });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { marginTop: token.margin }, children: [
    "Title: ",
    title,
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Table, { dataSource: pollResults, columns: [{ title: "option", key: "option", dataIndex: "option" }, { title: "all votes", key: "count", dataIndex: "count" }, { title: "witnessed votes", key: "validCount", dataIndex: "validCount" }] })
  ] });
};

// src/components/PollPage.tsx
var import_react7 = __toESM(require_react(), 1);
var import_react_router_dom3 = __toESM(require_react_router_dom(), 1);
var import_veramo_react7 = __toESM(require_veramo_react(), 1);
var import_pro_components2 = __toESM(require_pro_components(), 1);
var import_antd8 = __toESM(require_antd(), 1);
var import_agent_explorer_plugin4 = __toESM(require_agent_explorer_plugin(), 1);
var import_react8 = __toESM(require_react(), 1);

// src/components/Votes.tsx
var import_react_query6 = __toESM(require_react_query(), 1);
var import_veramo_react6 = __toESM(require_veramo_react(), 1);
var import_antd7 = __toESM(require_antd(), 1);
var import_agent_explorer_plugin3 = __toESM(require_agent_explorer_plugin(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var Votes = ({ hash: hash2 }) => {
  const { agent } = (0, import_veramo_react6.useVeramo)();
  const { data: credentials, isLoading, refetch } = (0, import_react_query6.useQuery)(
    [
      "credentialReactionCredentials",
      { hash: hash2, agentId: agent?.context.name }
    ],
    () => agent?.dataStoreORMGetVerifiableCredentialsByClaims({
      where: [
        {
          column: "type",
          value: ["pollHash"]
        },
        {
          column: "value",
          value: [hash2]
        },
        {
          column: "credentialType",
          value: ["VerifiableCredential,WitnessPollResponse"]
        }
      ]
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_antd7.List,
    {
      itemLayout: "vertical",
      size: "large",
      dataSource: credentials,
      renderItem: (item) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_agent_explorer_plugin3.VerifiableCredentialComponent, { credential: item }) })
    }
  );
};

// src/components/PollPage.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var PollPage = () => {
  const { hash: hash2 } = (0, import_react_router_dom3.useParams)();
  const { agents, agent } = (0, import_veramo_react7.useVeramo)();
  const [refDrawerOpen, setRefDrawerOpen] = (0, import_react7.useState)(false);
  const [poll2, setPoll] = (0, import_react7.useState)(null);
  const { token } = import_antd8.theme.useToken();
  const [sidebar, setSidebar] = (0, import_react7.useState)(null);
  const [loading, setLoading] = (0, import_react7.useState)(true);
  const localAgent = import_react7.default.useMemo(() => {
    return agents.find((agent2) => agent2.context.id === "web3Agent");
  }, [agents]);
  if (!agent)
    return null;
  if (!localAgent)
    return null;
  if (!hash2)
    return null;
  (0, import_react8.useEffect)(() => {
    setLoading(true);
    const load = async () => {
      try {
        const postCredential = await agent.dataStoreGetVerifiableCredential({ hash: hash2 });
        setPoll({ hash: hash2, verifiableCredential: postCredential });
      } catch (e) {
        console.log("unknown poll.");
      }
      setLoading(false);
    };
    load();
  }, [hash2, agent]);
  if (loading)
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd8.Spin, {});
  if (!poll2)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    import_pro_components2.PageContainer,
    {
      loading,
      style: { paddingTop: 10 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(ResponsiveContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd8.Row, { gutter: 16, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd8.Col, { xs: 24, sm: 16, style: {
            overflow: "hidden",
            marginBottom: token.margin
          }, children: poll2 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_agent_explorer_plugin4.VerifiableCredentialComponent, { credential: poll2 }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd8.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd8.Button, { type: "text", onClick: () => setRefDrawerOpen(true), children: "See votes" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_antd8.Drawer,
          {
            title: "Posts that reference this one",
            placement: "right",
            onClose: () => setRefDrawerOpen(false),
            open: refDrawerOpen,
            width: 800,
            destroyOnClose: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Votes, { hash: hash2 })
          }
        )
      ]
    }
  );
};
var ResponsiveContainer = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_antd8.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_antd8.Col,
      {
        lg: 3
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_antd8.Col,
      {
        lg: 18,
        sm: 24,
        xs: 24,
        style: { position: "relative" },
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_antd8.Col,
      {
        lg: 3
      }
    )
  ] });
};

// src/index.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var Plugin = {
  init: () => {
    return {
      name: "Witness",
      config: {
        enabled: true,
        url: "core://witness"
      },
      description: "Timestamping",
      requiredMethods: [],
      icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SketchOutlined_default2, {}),
      routes: [
        {
          path: "/witness/polls",
          element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Polls, {})
        },
        {
          path: "/witness/poll/:hash",
          element: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PollPage, {})
        }
      ],
      menuItems: [
        {
          name: "Witness",
          path: "/witness/polls",
          icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SketchOutlined_default2, {})
        }
      ],
      hasCss: true,
      getCredentialHeaderComponent: (credential) => {
        return WitnessedCredentialHeader;
      },
      getCredentialActionComponents: () => [CredentialActionComponent],
      getCredentialComponent: (credential) => {
        if (credential.verifiableCredential.type?.includes("WitnessPollAnnouncement")) {
          return WitnessPoll;
        }
        return void 0;
      }
    };
  }
};
var src_default = Plugin;
export {
  src_default as default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
