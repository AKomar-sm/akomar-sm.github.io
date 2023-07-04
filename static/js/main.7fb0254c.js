/*! For license information please see main.7fb0254c.js.LICENSE.txt */
!(function () {
  'use strict';
  var e = {
      463: function (e, n, t) {
        var r = t(791),
          l = t(296);
        function a(e) {
          for (
            var n =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              t = 1;
            t < arguments.length;
            t++
          )
            n += '&args[]=' + encodeURIComponent(arguments[t]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            n +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var o = new Set(),
          i = {};
        function u(e, n) {
          s(e, n), s(e + 'Capture', n);
        }
        function s(e, n) {
          for (i[e] = n, e = 0; e < n.length; e++) o.add(n[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, n, t, r, l, a, o) {
          (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
            (this.attributeName = r),
            (this.attributeNamespace = l),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var v = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var n = e[0];
            v[n] = new h(n, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            v[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, n, t, r) {
          var l = v.hasOwnProperty(n) ? v[n] : null;
          (null !== l
            ? 0 !== l.type
            : r ||
              !(2 < n.length) ||
              ('o' !== n[0] && 'O' !== n[0]) ||
              ('n' !== n[1] && 'N' !== n[1])) &&
            ((function (e, n, t, r) {
              if (
                null === n ||
                'undefined' === typeof n ||
                (function (e, n, t, r) {
                  if (null !== t && 0 === t.type) return !1;
                  switch (typeof n) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== t
                          ? !t.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, n, t, r)
              )
                return !0;
              if (r) return !1;
              if (null !== t)
                switch (t.type) {
                  case 3:
                    return !n;
                  case 4:
                    return !1 === n;
                  case 5:
                    return isNaN(n);
                  case 6:
                    return isNaN(n) || 1 > n;
                }
              return !1;
            })(n, t, l, r) && (t = null),
            r || null === l
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(n) &&
                (null === t ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
              : l.mustUseProperty
              ? (e[l.propertyName] = null === t ? 3 !== l.type && '' : t)
              : ((n = l.attributeName),
                (r = l.attributeNamespace),
                null === t
                  ? e.removeAttribute(n)
                  : ((t =
                      3 === (l = l.type) || (4 === l && !0 === t)
                        ? ''
                        : '' + t),
                    r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var n = e.replace(g, y);
            v[n] = new h(n, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var n = e.replace(g, y);
              v[n] = new h(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var n = e.replace(g, y);
            v[n] = new h(
              n,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new h(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          S = Symbol.for('react.portal'),
          x = Symbol.for('react.fragment'),
          E = Symbol.for('react.strict_mode'),
          C = Symbol.for('react.profiler'),
          _ = Symbol.for('react.provider'),
          N = Symbol.for('react.context'),
          P = Symbol.for('react.forward_ref'),
          z = Symbol.for('react.suspense'),
          L = Symbol.for('react.suspense_list'),
          j = Symbol.for('react.memo'),
          T = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var O = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var R = Symbol.iterator;
        function M(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (R && e[R]) || e['@@iterator'])
            ? e
            : null;
        }
        var F,
          I = Object.assign;
        function D(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (t) {
              var n = t.stack.trim().match(/\n( *(at )?)/);
              F = (n && n[1]) || '';
            }
          return '\n' + F + e;
        }
        var U = !1;
        function V(e, n) {
          if (!e || U) return '';
          U = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (n)
              if (
                ((n = function () {
                  throw Error();
                }),
                Object.defineProperty(n.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(n, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (s) {
                  r = s;
                }
                e.call(n.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && 'string' === typeof s.stack) {
              for (
                var l = s.stack.split('\n'),
                  a = r.stack.split('\n'),
                  o = l.length - 1,
                  i = a.length - 1;
                1 <= o && 0 <= i && l[o] !== a[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (l[o] !== a[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || l[o] !== a[i])) {
                        var u = '\n' + l[o].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            u.includes('<anonymous>') &&
                            (u = u.replace('<anonymous>', e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = t);
          }
          return (e = e ? e.displayName || e.name : '') ? D(e) : '';
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D('Lazy');
            case 13:
              return D('Suspense');
            case 19:
              return D('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return '';
          }
        }
        function A(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case x:
              return 'Fragment';
            case S:
              return 'Portal';
            case C:
              return 'Profiler';
            case E:
              return 'StrictMode';
            case z:
              return 'Suspense';
            case L:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || 'Context') + '.Consumer';
              case _:
                return (e._context.displayName || 'Context') + '.Provider';
              case P:
                var n = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = n.displayName || n.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case j:
                return null !== (n = e.displayName || null)
                  ? n
                  : A(e.type) || 'Memo';
              case T:
                (n = e._payload), (e = e._init);
                try {
                  return A(e(n));
                } catch (t) {}
            }
          return null;
        }
        function B(e) {
          var n = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (n.displayName || 'Context') + '.Consumer';
            case 10:
              return (n._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = n.render).displayName || e.name || ''),
                n.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return n;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return A(n);
            case 8:
              return n === E ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof n)
                return n.displayName || n.name || null;
              if ('string' === typeof n) return n;
          }
          return null;
        }
        function $(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function H(e) {
          var n = e.type;
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === n || 'radio' === n)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var n = H(e) ? 'checked' : 'value',
                t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                r = '' + e[n];
              if (
                !e.hasOwnProperty(n) &&
                'undefined' !== typeof t &&
                'function' === typeof t.get &&
                'function' === typeof t.set
              ) {
                var l = t.get,
                  a = t.set;
                return (
                  Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                      return l.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, n, { enumerable: t.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[n];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var n = e._valueTracker;
          if (!n) return !0;
          var t = n.getValue(),
            r = '';
          return (
            e && (r = H(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== t && (n.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        function Y(e, n) {
          var t = n.checked;
          return I({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != t ? t : e._wrapperState.initialChecked,
          });
        }
        function X(e, n) {
          var t = null == n.defaultValue ? '' : n.defaultValue,
            r = null != n.checked ? n.checked : n.defaultChecked;
          (t = $(null != n.value ? n.value : t)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: t,
              controlled:
                'checkbox' === n.type || 'radio' === n.type
                  ? null != n.checked
                  : null != n.value,
            });
        }
        function G(e, n) {
          null != (n = n.checked) && b(e, 'checked', n, !1);
        }
        function Z(e, n) {
          G(e, n);
          var t = $(n.value),
            r = n.type;
          if (null != t)
            'number' === r
              ? ((0 === t && '' === e.value) || e.value != t) &&
                (e.value = '' + t)
              : e.value !== '' + t && (e.value = '' + t);
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value');
          n.hasOwnProperty('value')
            ? ee(e, n.type, t)
            : n.hasOwnProperty('defaultValue') &&
              ee(e, n.type, $(n.defaultValue)),
            null == n.checked &&
              null != n.defaultChecked &&
              (e.defaultChecked = !!n.defaultChecked);
        }
        function J(e, n, t) {
          if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
            var r = n.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== n.value && null !== n.value)
              )
            )
              return;
            (n = '' + e._wrapperState.initialValue),
              t || n === e.value || (e.value = n),
              (e.defaultValue = n);
          }
          '' !== (t = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== t && (e.name = t);
        }
        function ee(e, n, t) {
          ('number' === n && K(e.ownerDocument) === e) ||
            (null == t
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + t && (e.defaultValue = '' + t));
        }
        var ne = Array.isArray;
        function te(e, n, t, r) {
          if (((e = e.options), n)) {
            n = {};
            for (var l = 0; l < t.length; l++) n['$' + t[l]] = !0;
            for (t = 0; t < e.length; t++)
              (l = n.hasOwnProperty('$' + e[t].value)),
                e[t].selected !== l && (e[t].selected = l),
                l && r && (e[t].defaultSelected = !0);
          } else {
            for (t = '' + $(t), n = null, l = 0; l < e.length; l++) {
              if (e[l].value === t)
                return (
                  (e[l].selected = !0), void (r && (e[l].defaultSelected = !0))
                );
              null !== n || e[l].disabled || (n = e[l]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function re(e, n) {
          if (null != n.dangerouslySetInnerHTML) throw Error(a(91));
          return I({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function le(e, n) {
          var t = n.value;
          if (null == t) {
            if (((t = n.children), (n = n.defaultValue), null != t)) {
              if (null != n) throw Error(a(92));
              if (ne(t)) {
                if (1 < t.length) throw Error(a(93));
                t = t[0];
              }
              n = t;
            }
            null == n && (n = ''), (t = n);
          }
          e._wrapperState = { initialValue: $(t) };
        }
        function ae(e, n) {
          var t = $(n.value),
            r = $(n.defaultValue);
          null != t &&
            ((t = '' + t) !== e.value && (e.value = t),
            null == n.defaultValue &&
              e.defaultValue !== t &&
              (e.defaultValue = t)),
            null != r && (e.defaultValue = '' + r);
        }
        function oe(e) {
          var n = e.textContent;
          n === e._wrapperState.initialValue &&
            '' !== n &&
            null !== n &&
            (e.value = n);
        }
        function ie(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function ue(e, n) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? ie(n)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === n
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, n) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = n;
              else {
                for (
                  (se = se || document.createElement('div')).innerHTML =
                    '<svg>' + n.valueOf().toString() + '</svg>',
                    n = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; n.firstChild; ) e.appendChild(n.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, n, t, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, n);
                  });
                }
              : ce);
        function de(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType)
              return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ['Webkit', 'ms', 'Moz', 'O'];
        function he(e, n, t) {
          return null == n || 'boolean' === typeof n || '' === n
            ? ''
            : t ||
              'number' !== typeof n ||
              0 === n ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ('' + n).trim()
            : n + 'px';
        }
        function ve(e, n) {
          for (var t in ((e = e.style), n))
            if (n.hasOwnProperty(t)) {
              var r = 0 === t.indexOf('--'),
                l = he(t, n[t], r);
              'float' === t && (t = 'cssFloat'),
                r ? e.setProperty(t, l) : (e[t] = l);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[n] = pe[e]);
          });
        });
        var ge = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, n) {
          if (n) {
            if (
              ge[e] &&
              (null != n.children || null != n.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != n.dangerouslySetInnerHTML) {
              if (null != n.children) throw Error(a(60));
              if (
                'object' !== typeof n.dangerouslySetInnerHTML ||
                !('__html' in n.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != n.style && 'object' !== typeof n.style)
              throw Error(a(62));
          }
        }
        function be(e, n) {
          if (-1 === e.indexOf('-')) return 'string' === typeof n.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var ke = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          xe = null,
          Ee = null;
        function Ce(e) {
          if ((e = bl(e))) {
            if ('function' !== typeof Se) throw Error(a(280));
            var n = e.stateNode;
            n && ((n = wl(n)), Se(e.stateNode, e.type, n));
          }
        }
        function _e(e) {
          xe ? (Ee ? Ee.push(e) : (Ee = [e])) : (xe = e);
        }
        function Ne() {
          if (xe) {
            var e = xe,
              n = Ee;
            if (((Ee = xe = null), Ce(e), n))
              for (e = 0; e < n.length; e++) Ce(n[e]);
          }
        }
        function Pe(e, n) {
          return e(n);
        }
        function ze() {}
        var Le = !1;
        function je(e, n, t) {
          if (Le) return e(n, t);
          Le = !0;
          try {
            return Pe(e, n, t);
          } finally {
            (Le = !1), (null !== xe || null !== Ee) && (ze(), Ne());
          }
        }
        function Te(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var r = wl(t);
          if (null === r) return null;
          t = r[n];
          e: switch (n) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && 'function' !== typeof t) throw Error(a(231, n, typeof t));
          return t;
        }
        var Oe = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, 'passive', {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener('test', Re, Re),
              window.removeEventListener('test', Re, Re);
          } catch (ce) {
            Oe = !1;
          }
        function Me(e, n, t, r, l, a, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            n.apply(t, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          Ie = null,
          De = !1,
          Ue = null,
          Ve = {
            onError: function (e) {
              (Fe = !0), (Ie = e);
            },
          };
        function We(e, n, t, r, l, a, o, i, u) {
          (Fe = !1), (Ie = null), Me.apply(Ve, arguments);
        }
        function Ae(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return; ) n = n.return;
          else {
            e = n;
            do {
              0 !== (4098 & (n = e).flags) && (t = n.return), (e = n.return);
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if (
              (null === n &&
                null !== (e = e.alternate) &&
                (n = e.memoizedState),
              null !== n)
            )
              return n.dehydrated;
          }
          return null;
        }
        function $e(e) {
          if (Ae(e) !== e) throw Error(a(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var n = e.alternate;
              if (!n) {
                if (null === (n = Ae(e))) throw Error(a(188));
                return n !== e ? null : e;
              }
              for (var t = e, r = n; ; ) {
                var l = t.return;
                if (null === l) break;
                var o = l.alternate;
                if (null === o) {
                  if (null !== (r = l.return)) {
                    t = r;
                    continue;
                  }
                  break;
                }
                if (l.child === o.child) {
                  for (o = l.child; o; ) {
                    if (o === t) return $e(l), e;
                    if (o === r) return $e(l), n;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (t.return !== r.return) (t = l), (r = o);
                else {
                  for (var i = !1, u = l.child; u; ) {
                    if (u === t) {
                      (i = !0), (t = l), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = l), (t = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === t) {
                        (i = !0), (t = o), (r = l);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (t = l);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(a(189));
                  }
                }
                if (t.alternate !== r) throw Error(a(190));
              }
              if (3 !== t.tag) throw Error(a(188));
              return t.stateNode.current === t ? e : n;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var n = Qe(e);
            if (null !== n) return n;
            e = e.sibling;
          }
          return null;
        }
        var qe = l.unstable_scheduleCallback,
          Ke = l.unstable_cancelCallback,
          Ye = l.unstable_shouldYield,
          Xe = l.unstable_requestPaint,
          Ge = l.unstable_now,
          Ze = l.unstable_getCurrentPriorityLevel,
          Je = l.unstable_ImmediatePriority,
          en = l.unstable_UserBlockingPriority,
          nn = l.unstable_NormalPriority,
          tn = l.unstable_LowPriority,
          rn = l.unstable_IdlePriority,
          ln = null,
          an = null;
        var on = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((un(e) / sn) | 0)) | 0;
              },
          un = Math.log,
          sn = Math.LN2;
        var cn = 64,
          fn = 4194304;
        function dn(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pn(e, n) {
          var t = e.pendingLanes;
          if (0 === t) return 0;
          var r = 0,
            l = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & t;
          if (0 !== o) {
            var i = o & ~l;
            0 !== i ? (r = dn(i)) : 0 !== (a &= o) && (r = dn(a));
          } else 0 !== (o = t & ~l) ? (r = dn(o)) : 0 !== a && (r = dn(a));
          if (0 === r) return 0;
          if (
            0 !== n &&
            n !== r &&
            0 === (n & l) &&
            ((l = r & -r) >= (a = n & -n) || (16 === l && 0 !== (4194240 & a)))
          )
            return n;
          if ((0 !== (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
            for (e = e.entanglements, n &= r; 0 < n; )
              (l = 1 << (t = 31 - on(n))), (r |= e[t]), (n &= ~l);
          return r;
        }
        function mn(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return n + 5e3;
            default:
              return -1;
          }
        }
        function hn(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vn() {
          var e = cn;
          return 0 === (4194240 & (cn <<= 1)) && (cn = 64), e;
        }
        function gn(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function yn(e, n, t) {
          (e.pendingLanes |= n),
            536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(n = 31 - on(n))] = t);
        }
        function bn(e, n) {
          var t = (e.entangledLanes |= n);
          for (e = e.entanglements; t; ) {
            var r = 31 - on(t),
              l = 1 << r;
            (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
          }
        }
        var kn = 0;
        function wn(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var Sn,
          xn,
          En,
          Cn,
          _n,
          Nn = !1,
          Pn = [],
          zn = null,
          Ln = null,
          jn = null,
          Tn = new Map(),
          On = new Map(),
          Rn = [],
          Mn =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Fn(e, n) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              zn = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Ln = null;
              break;
            case 'mouseover':
            case 'mouseout':
              jn = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Tn.delete(n.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              On.delete(n.pointerId);
          }
        }
        function In(e, n, t, r, l, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: n,
                domEventName: t,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [l],
              }),
              null !== n && null !== (n = bl(n)) && xn(n),
              e)
            : ((e.eventSystemFlags |= r),
              (n = e.targetContainers),
              null !== l && -1 === n.indexOf(l) && n.push(l),
              e);
        }
        function Dn(e) {
          var n = yl(e.target);
          if (null !== n) {
            var t = Ae(n);
            if (null !== t)
              if (13 === (n = t.tag)) {
                if (null !== (n = Be(t)))
                  return (
                    (e.blockedOn = n),
                    void _n(e.priority, function () {
                      En(t);
                    })
                  );
              } else if (
                3 === n &&
                t.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === t.tag ? t.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Un(e) {
          if (null !== e.blockedOn) return !1;
          for (var n = e.targetContainers; 0 < n.length; ) {
            var t = Xn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (null !== t)
              return null !== (n = bl(t)) && xn(n), (e.blockedOn = t), !1;
            var r = new (t = e.nativeEvent).constructor(t.type, t);
            (ke = r), t.target.dispatchEvent(r), (ke = null), n.shift();
          }
          return !0;
        }
        function Vn(e, n, t) {
          Un(e) && t.delete(n);
        }
        function Wn() {
          (Nn = !1),
            null !== zn && Un(zn) && (zn = null),
            null !== Ln && Un(Ln) && (Ln = null),
            null !== jn && Un(jn) && (jn = null),
            Tn.forEach(Vn),
            On.forEach(Vn);
        }
        function An(e, n) {
          e.blockedOn === n &&
            ((e.blockedOn = null),
            Nn ||
              ((Nn = !0),
              l.unstable_scheduleCallback(l.unstable_NormalPriority, Wn)));
        }
        function Bn(e) {
          function n(n) {
            return An(n, e);
          }
          if (0 < Pn.length) {
            An(Pn[0], e);
            for (var t = 1; t < Pn.length; t++) {
              var r = Pn[t];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== zn && An(zn, e),
              null !== Ln && An(Ln, e),
              null !== jn && An(jn, e),
              Tn.forEach(n),
              On.forEach(n),
              t = 0;
            t < Rn.length;
            t++
          )
            (r = Rn[t]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rn.length && null === (t = Rn[0]).blockedOn; )
            Dn(t), null === t.blockedOn && Rn.shift();
        }
        var $n = k.ReactCurrentBatchConfig,
          Hn = !0;
        function Qn(e, n, t, r) {
          var l = kn,
            a = $n.transition;
          $n.transition = null;
          try {
            (kn = 1), Kn(e, n, t, r);
          } finally {
            (kn = l), ($n.transition = a);
          }
        }
        function qn(e, n, t, r) {
          var l = kn,
            a = $n.transition;
          $n.transition = null;
          try {
            (kn = 4), Kn(e, n, t, r);
          } finally {
            (kn = l), ($n.transition = a);
          }
        }
        function Kn(e, n, t, r) {
          if (Hn) {
            var l = Xn(e, n, t, r);
            if (null === l) $r(e, n, r, Yn, t), Fn(e, r);
            else if (
              (function (e, n, t, r, l) {
                switch (n) {
                  case 'focusin':
                    return (zn = In(zn, e, n, t, r, l)), !0;
                  case 'dragenter':
                    return (Ln = In(Ln, e, n, t, r, l)), !0;
                  case 'mouseover':
                    return (jn = In(jn, e, n, t, r, l)), !0;
                  case 'pointerover':
                    var a = l.pointerId;
                    return Tn.set(a, In(Tn.get(a) || null, e, n, t, r, l)), !0;
                  case 'gotpointercapture':
                    return (
                      (a = l.pointerId),
                      On.set(a, In(On.get(a) || null, e, n, t, r, l)),
                      !0
                    );
                }
                return !1;
              })(l, e, n, t, r)
            )
              r.stopPropagation();
            else if ((Fn(e, r), 4 & n && -1 < Mn.indexOf(e))) {
              for (; null !== l; ) {
                var a = bl(l);
                if (
                  (null !== a && Sn(a),
                  null === (a = Xn(e, n, t, r)) && $r(e, n, r, Yn, t),
                  a === l)
                )
                  break;
                l = a;
              }
              null !== l && r.stopPropagation();
            } else $r(e, n, r, null, t);
          }
        }
        var Yn = null;
        function Xn(e, n, t, r) {
          if (((Yn = null), null !== (e = yl((e = we(r))))))
            if (null === (n = Ae(e))) e = null;
            else if (13 === (t = n.tag)) {
              if (null !== (e = Be(n))) return e;
              e = null;
            } else if (3 === t) {
              if (n.stateNode.current.memoizedState.isDehydrated)
                return 3 === n.tag ? n.stateNode.containerInfo : null;
              e = null;
            } else n !== e && (e = null);
          return (Yn = e), null;
        }
        function Gn(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Ze()) {
                case Je:
                  return 1;
                case en:
                  return 4;
                case nn:
                case tn:
                  return 16;
                case rn:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zn = null,
          Jn = null,
          et = null;
        function nt() {
          if (et) return et;
          var e,
            n,
            t = Jn,
            r = t.length,
            l = 'value' in Zn ? Zn.value : Zn.textContent,
            a = l.length;
          for (e = 0; e < r && t[e] === l[e]; e++);
          var o = r - e;
          for (n = 1; n <= o && t[r - n] === l[a - n]; n++);
          return (et = l.slice(e, 1 < n ? 1 - n : void 0));
        }
        function tt(e) {
          var n = e.keyCode;
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === n && (e = 13)
              : (e = n),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rt() {
          return !0;
        }
        function lt() {
          return !1;
        }
        function at(e) {
          function n(n, t, r, l, a) {
            for (var o in ((this._reactName = n),
            (this._targetInst = r),
            (this.type = t),
            (this.nativeEvent = l),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
            return (
              (this.isDefaultPrevented = (
                null != l.defaultPrevented
                  ? l.defaultPrevented
                  : !1 === l.returnValue
              )
                ? rt
                : lt),
              (this.isPropagationStopped = lt),
              this
            );
          }
          return (
            I(n.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = rt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rt));
              },
              persist: function () {},
              isPersistent: rt,
            }),
            n
          );
        }
        var ot,
          it,
          ut,
          st = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ct = at(st),
          ft = I({}, st, { view: 0, detail: 0 }),
          dt = at(ft),
          pt = I({}, ft, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Ct,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== ut &&
                    (ut && 'mousemove' === e.type
                      ? ((ot = e.screenX - ut.screenX),
                        (it = e.screenY - ut.screenY))
                      : (it = ot = 0),
                    (ut = e)),
                  ot);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : it;
            },
          }),
          mt = at(pt),
          ht = at(I({}, pt, { dataTransfer: 0 })),
          vt = at(I({}, ft, { relatedTarget: 0 })),
          gt = at(
            I({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yt = I({}, st, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bt = at(yt),
          kt = at(I({}, st, { data: 0 })),
          wt = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          St = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          xt = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function Et(e) {
          var n = this.nativeEvent;
          return n.getModifierState
            ? n.getModifierState(e)
            : !!(e = xt[e]) && !!n[e];
        }
        function Ct() {
          return Et;
        }
        var _t = I({}, ft, {
            key: function (e) {
              if (e.key) {
                var n = wt[e.key] || e.key;
                if ('Unidentified' !== n) return n;
              }
              return 'keypress' === e.type
                ? 13 === (e = tt(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? St[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Ct,
            charCode: function (e) {
              return 'keypress' === e.type ? tt(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tt(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nt = at(_t),
          Pt = at(
            I({}, pt, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          zt = at(
            I({}, ft, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Ct,
            })
          ),
          Lt = at(
            I({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          jt = I({}, pt, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tt = at(jt),
          Ot = [9, 13, 27, 32],
          Rt = c && 'CompositionEvent' in window,
          Mt = null;
        c && 'documentMode' in document && (Mt = document.documentMode);
        var Ft = c && 'TextEvent' in window && !Mt,
          It = c && (!Rt || (Mt && 8 < Mt && 11 >= Mt)),
          Dt = String.fromCharCode(32),
          Ut = !1;
        function Vt(e, n) {
          switch (e) {
            case 'keyup':
              return -1 !== Ot.indexOf(n.keyCode);
            case 'keydown':
              return 229 !== n.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Wt(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null;
        }
        var At = !1;
        var Bt = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function $t(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === n ? !!Bt[e.type] : 'textarea' === n;
        }
        function Ht(e, n, t, r) {
          _e(r),
            0 < (n = Qr(n, 'onChange')).length &&
              ((t = new ct('onChange', 'change', null, t, r)),
              e.push({ event: t, listeners: n }));
        }
        var Qt = null,
          qt = null;
        function Kt(e) {
          Dr(e, 0);
        }
        function Yt(e) {
          if (q(kl(e))) return e;
        }
        function Xt(e, n) {
          if ('change' === e) return n;
        }
        var Gt = !1;
        if (c) {
          var Zt;
          if (c) {
            var Jt = 'oninput' in document;
            if (!Jt) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'),
                (Jt = 'function' === typeof er.oninput);
            }
            Zt = Jt;
          } else Zt = !1;
          Gt = Zt && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {
          Qt && (Qt.detachEvent('onpropertychange', tr), (qt = Qt = null));
        }
        function tr(e) {
          if ('value' === e.propertyName && Yt(qt)) {
            var n = [];
            Ht(n, qt, e, we(e)), je(Kt, n);
          }
        }
        function rr(e, n, t) {
          'focusin' === e
            ? (nr(), (qt = t), (Qt = n).attachEvent('onpropertychange', tr))
            : 'focusout' === e && nr();
        }
        function lr(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Yt(qt);
        }
        function ar(e, n) {
          if ('click' === e) return Yt(n);
        }
        function or(e, n) {
          if ('input' === e || 'change' === e) return Yt(n);
        }
        var ir =
          'function' === typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e === 1 / n)) ||
                  (e !== e && n !== n)
                );
              };
        function ur(e, n) {
          if (ir(e, n)) return !0;
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof n ||
            null === n
          )
            return !1;
          var t = Object.keys(e),
            r = Object.keys(n);
          if (t.length !== r.length) return !1;
          for (r = 0; r < t.length; r++) {
            var l = t[r];
            if (!f.call(n, l) || !ir(e[l], n[l])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, n) {
          var t,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((t = e + r.textContent.length), e <= n && t >= n))
                return { node: r, offset: n - e };
              e = t;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? fr(e, n.parentNode)
                  : 'contains' in e
                  ? e.contains(n)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(n)))))
          );
        }
        function dr() {
          for (var e = window, n = K(); n instanceof e.HTMLIFrameElement; ) {
            try {
              var t = 'string' === typeof n.contentWindow.location.href;
            } catch (r) {
              t = !1;
            }
            if (!t) break;
            n = K((e = n.contentWindow).document);
          }
          return n;
        }
        function pr(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            n &&
            (('input' === n &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === n ||
              'true' === e.contentEditable)
          );
        }
        function mr(e) {
          var n = dr(),
            t = e.focusedElem,
            r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            fr(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && pr(t))
              if (
                ((n = r.start),
                void 0 === (e = r.end) && (e = n),
                'selectionStart' in t)
              )
                (t.selectionStart = n),
                  (t.selectionEnd = Math.min(e, t.value.length));
              else if (
                (e =
                  ((n = t.ownerDocument || document) && n.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var l = t.textContent.length,
                  a = Math.min(r.start, l);
                (r = void 0 === r.end ? a : Math.min(r.end, l)),
                  !e.extend && a > r && ((l = r), (r = a), (a = l)),
                  (l = cr(t, a));
                var o = cr(t, r);
                l &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== l.node ||
                    e.anchorOffset !== l.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((n = n.createRange()).setStart(l.node, l.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(n), e.extend(o.node, o.offset))
                    : (n.setEnd(o.node, o.offset), e.addRange(n)));
              }
            for (n = [], e = t; (e = e.parentNode); )
              1 === e.nodeType &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              'function' === typeof t.focus && t.focus(), t = 0;
              t < n.length;
              t++
            )
              ((e = n[t]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = c && 'documentMode' in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function kr(e, n, t) {
          var r =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
            ('selectionStart' in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, 'onSelect')).length &&
                ((n = new ct('onSelect', 'select', null, n, t)),
                e.push({ event: n, listeners: r }),
                (n.target = vr))));
        }
        function wr(e, n) {
          var t = {};
          return (
            (t[e.toLowerCase()] = n.toLowerCase()),
            (t['Webkit' + e] = 'webkit' + n),
            (t['Moz' + e] = 'moz' + n),
            t
          );
        }
        var Sr = {
            animationend: wr('Animation', 'AnimationEnd'),
            animationiteration: wr('Animation', 'AnimationIteration'),
            animationstart: wr('Animation', 'AnimationStart'),
            transitionend: wr('Transition', 'TransitionEnd'),
          },
          xr = {},
          Er = {};
        function Cr(e) {
          if (xr[e]) return xr[e];
          if (!Sr[e]) return e;
          var n,
            t = Sr[e];
          for (n in t)
            if (t.hasOwnProperty(n) && n in Er) return (xr[e] = t[n]);
          return e;
        }
        c &&
          ((Er = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          'TransitionEvent' in window || delete Sr.transitionend.transition);
        var _r = Cr('animationend'),
          Nr = Cr('animationiteration'),
          Pr = Cr('animationstart'),
          zr = Cr('transitionend'),
          Lr = new Map(),
          jr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Tr(e, n) {
          Lr.set(e, n), u(n, [e]);
        }
        for (var Or = 0; Or < jr.length; Or++) {
          var Rr = jr[Or];
          Tr(Rr.toLowerCase(), 'on' + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Tr(_r, 'onAnimationEnd'),
          Tr(Nr, 'onAnimationIteration'),
          Tr(Pr, 'onAnimationStart'),
          Tr('dblclick', 'onDoubleClick'),
          Tr('focusin', 'onFocus'),
          Tr('focusout', 'onBlur'),
          Tr(zr, 'onTransitionEnd'),
          s('onMouseEnter', ['mouseout', 'mouseover']),
          s('onMouseLeave', ['mouseout', 'mouseover']),
          s('onPointerEnter', ['pointerout', 'pointerover']),
          s('onPointerLeave', ['pointerout', 'pointerover']),
          u(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          u(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          u('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          u(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          u(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          u(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Mr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Fr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Mr)
          );
        function Ir(e, n, t) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = t),
            (function (e, n, t, r, l, o, i, u, s) {
              if ((We.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(a(198));
                var c = Ie;
                (Fe = !1), (Ie = null), De || ((De = !0), (Ue = c));
              }
            })(r, n, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, n) {
          n = 0 !== (4 & n);
          for (var t = 0; t < e.length; t++) {
            var r = e[t],
              l = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (n)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== a && l.isPropagationStopped()))
                    break e;
                  Ir(l, i, s), (a = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== a && l.isPropagationStopped())
                  )
                    break e;
                  Ir(l, i, s), (a = u);
                }
            }
          }
          if (De) throw ((e = Ue), (De = !1), (Ue = null), e);
        }
        function Ur(e, n) {
          var t = n[hl];
          void 0 === t && (t = n[hl] = new Set());
          var r = e + '__bubble';
          t.has(r) || (Br(n, e, 2, !1), t.add(r));
        }
        function Vr(e, n, t) {
          var r = 0;
          n && (r |= 4), Br(t, e, r, n);
        }
        var Wr = '_reactListening' + Math.random().toString(36).slice(2);
        function Ar(e) {
          if (!e[Wr]) {
            (e[Wr] = !0),
              o.forEach(function (n) {
                'selectionchange' !== n &&
                  (Fr.has(n) || Vr(n, !1, e), Vr(n, !0, e));
              });
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[Wr] || ((n[Wr] = !0), Vr('selectionchange', !1, n));
          }
        }
        function Br(e, n, t, r) {
          switch (Gn(n)) {
            case 1:
              var l = Qn;
              break;
            case 4:
              l = qn;
              break;
            default:
              l = Kn;
          }
          (t = l.bind(null, n, t, e)),
            (l = void 0),
            !Oe ||
              ('touchstart' !== n && 'touchmove' !== n && 'wheel' !== n) ||
              (l = !0),
            r
              ? void 0 !== l
                ? e.addEventListener(n, t, { capture: !0, passive: l })
                : e.addEventListener(n, t, !0)
              : void 0 !== l
              ? e.addEventListener(n, t, { passive: l })
              : e.addEventListener(n, t, !1);
        }
        function $r(e, n, t, r, l) {
          var a = r;
          if (0 === (1 & n) && 0 === (2 & n) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === l || (8 === i.nodeType && i.parentNode === l)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === l ||
                        (8 === u.nodeType && u.parentNode === l))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = yl(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = a = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          je(function () {
            var r = a,
              l = we(t),
              o = [];
            e: {
              var i = Lr.get(e);
              if (void 0 !== i) {
                var u = ct,
                  s = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tt(t)) break e;
                  case 'keydown':
                  case 'keyup':
                    u = Nt;
                    break;
                  case 'focusin':
                    (s = 'focus'), (u = vt);
                    break;
                  case 'focusout':
                    (s = 'blur'), (u = vt);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    u = vt;
                    break;
                  case 'click':
                    if (2 === t.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    u = mt;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    u = ht;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    u = zt;
                    break;
                  case _r:
                  case Nr:
                  case Pr:
                    u = gt;
                    break;
                  case zr:
                    u = Lt;
                    break;
                  case 'scroll':
                    u = dt;
                    break;
                  case 'wheel':
                    u = Tt;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    u = bt;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    u = Pt;
                }
                var c = 0 !== (4 & n),
                  f = !c && 'scroll' === e,
                  d = c ? (null !== i ? i + 'Capture' : null) : i;
                c = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== d &&
                        null != (h = Te(m, d)) &&
                        c.push(Hr(m, h, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, t, l)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & n)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  t === ke ||
                  !(s = t.relatedTarget || t.fromElement) ||
                  (!yl(s) && !s[ml])) &&
                  (u || i) &&
                  ((i =
                    l.window === l
                      ? l
                      : (i = l.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = t.relatedTarget || t.toElement)
                          ? yl(s)
                          : null) &&
                        (s !== (f = Ae(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = mt),
                  (h = 'onMouseLeave'),
                  (d = 'onMouseEnter'),
                  (m = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = Pt),
                    (h = 'onPointerLeave'),
                    (d = 'onPointerEnter'),
                    (m = 'pointer')),
                  (f = null == u ? i : kl(u)),
                  (p = null == s ? i : kl(s)),
                  ((i = new c(h, m + 'leave', u, t, l)).target = f),
                  (i.relatedTarget = p),
                  (h = null),
                  yl(l) === r &&
                    (((c = new c(d, m + 'enter', s, t, l)).target = p),
                    (c.relatedTarget = f),
                    (h = c)),
                  (f = h),
                  u && s)
                )
                  e: {
                    for (d = s, m = 0, p = c = u; p; p = qr(p)) m++;
                    for (p = 0, h = d; h; h = qr(h)) p++;
                    for (; 0 < m - p; ) (c = qr(c)), m--;
                    for (; 0 < p - m; ) (d = qr(d)), p--;
                    for (; m--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(o, i, u, c, !1),
                  null !== s && null !== f && Kr(o, f, s, c, !0);
              }
              if (
                'select' ===
                  (u =
                    (i = r ? kl(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
              )
                var v = Xt;
              else if ($t(i))
                if (Gt) v = or;
                else {
                  v = lr;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (v = ar);
              switch (
                (v && (v = v(e, r))
                  ? Ht(o, v, t, l)
                  : (g && g(e, i, r),
                    'focusout' === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      'number' === i.type &&
                      ee(i, 'number', i.value)),
                (g = r ? kl(r) : window),
                e)
              ) {
                case 'focusin':
                  ($t(g) || 'true' === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case 'focusout':
                  yr = gr = vr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), kr(o, t, l);
                  break;
                case 'selectionchange':
                  if (hr) break;
                case 'keydown':
                case 'keyup':
                  kr(o, t, l);
              }
              var y;
              if (Rt)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                At
                  ? Vt(e, t) && (b = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === t.keyCode &&
                    (b = 'onCompositionStart');
              b &&
                (It &&
                  'ko' !== t.locale &&
                  (At || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && At && (y = nt())
                    : ((Jn = 'value' in (Zn = l) ? Zn.value : Zn.textContent),
                      (At = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new kt(b, e, null, t, l)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Wt(t)) && (b.data = y))),
                (y = Ft
                  ? (function (e, n) {
                      switch (e) {
                        case 'compositionend':
                          return Wt(n);
                        case 'keypress':
                          return 32 !== n.which ? null : ((Ut = !0), Dt);
                        case 'textInput':
                          return (e = n.data) === Dt && Ut ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {
                      if (At)
                        return 'compositionend' === e || (!Rt && Vt(e, n))
                          ? ((e = nt()), (et = Jn = Zn = null), (At = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(n.ctrlKey || n.altKey || n.metaKey) ||
                            (n.ctrlKey && n.altKey)
                          ) {
                            if (n.char && 1 < n.char.length) return n.char;
                            if (n.which) return String.fromCharCode(n.which);
                          }
                          return null;
                        case 'compositionend':
                          return It && 'ko' !== n.locale ? null : n.data;
                      }
                    })(e, t)) &&
                  0 < (r = Qr(r, 'onBeforeInput')).length &&
                  ((l = new kt('onBeforeInput', 'beforeinput', null, t, l)),
                  o.push({ event: l, listeners: r }),
                  (l.data = y));
            }
            Dr(o, n);
          });
        }
        function Hr(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function Qr(e, n) {
          for (var t = n + 'Capture', r = []; null !== e; ) {
            var l = e,
              a = l.stateNode;
            5 === l.tag &&
              null !== a &&
              ((l = a),
              null != (a = Te(e, t)) && r.unshift(Hr(e, a, l)),
              null != (a = Te(e, n)) && r.push(Hr(e, a, l))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, n, t, r, l) {
          for (var a = n._reactName, o = []; null !== t && t !== r; ) {
            var i = t,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              l
                ? null != (u = Te(t, a)) && o.unshift(Hr(t, u, i))
                : l || (null != (u = Te(t, a)) && o.push(Hr(t, u, i)))),
              (t = t.return);
          }
          0 !== o.length && e.push({ event: n, listeners: o });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(Yr, '\n')
            .replace(Xr, '');
        }
        function Zr(e, n, t) {
          if (((n = Gr(n)), Gr(e) !== n && t)) throw Error(a(425));
        }
        function Jr() {}
        var el = null,
          nl = null;
        function tl(e, n) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof n.children ||
            'number' === typeof n.children ||
            ('object' === typeof n.dangerouslySetInnerHTML &&
              null !== n.dangerouslySetInnerHTML &&
              null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var rl = 'function' === typeof setTimeout ? setTimeout : void 0,
          ll = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          al = 'function' === typeof Promise ? Promise : void 0,
          ol =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof al
              ? function (e) {
                  return al.resolve(null).then(e).catch(il);
                }
              : rl;
        function il(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ul(e, n) {
          var t = n,
            r = 0;
          do {
            var l = t.nextSibling;
            if ((e.removeChild(t), l && 8 === l.nodeType))
              if ('/$' === (t = l.data)) {
                if (0 === r) return e.removeChild(l), void Bn(n);
                r--;
              } else ('$' !== t && '$?' !== t && '$!' !== t) || r++;
            t = l;
          } while (t);
          Bn(n);
        }
        function sl(e) {
          for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n) break;
            if (8 === n) {
              if ('$' === (n = e.data) || '$!' === n || '$?' === n) break;
              if ('/$' === n) return null;
            }
          }
          return e;
        }
        function cl(e) {
          e = e.previousSibling;
          for (var n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ('$' === t || '$!' === t || '$?' === t) {
                if (0 === n) return e;
                n--;
              } else '/$' === t && n++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fl = Math.random().toString(36).slice(2),
          dl = '__reactFiber$' + fl,
          pl = '__reactProps$' + fl,
          ml = '__reactContainer$' + fl,
          hl = '__reactEvents$' + fl,
          vl = '__reactListeners$' + fl,
          gl = '__reactHandles$' + fl;
        function yl(e) {
          var n = e[dl];
          if (n) return n;
          for (var t = e.parentNode; t; ) {
            if ((n = t[ml] || t[dl])) {
              if (
                ((t = n.alternate),
                null !== n.child || (null !== t && null !== t.child))
              )
                for (e = cl(e); null !== e; ) {
                  if ((t = e[dl])) return t;
                  e = cl(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function bl(e) {
          return !(e = e[dl] || e[ml]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function kl(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function wl(e) {
          return e[pl] || null;
        }
        var Sl = [],
          xl = -1;
        function El(e) {
          return { current: e };
        }
        function Cl(e) {
          0 > xl || ((e.current = Sl[xl]), (Sl[xl] = null), xl--);
        }
        function _l(e, n) {
          xl++, (Sl[xl] = e.current), (e.current = n);
        }
        var Nl = {},
          Pl = El(Nl),
          zl = El(!1),
          Ll = Nl;
        function jl(e, n) {
          var t = e.type.contextTypes;
          if (!t) return Nl;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
            return r.__reactInternalMemoizedMaskedChildContext;
          var l,
            a = {};
          for (l in t) a[l] = n[l];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                n),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Tl(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ol() {
          Cl(zl), Cl(Pl);
        }
        function Rl(e, n, t) {
          if (Pl.current !== Nl) throw Error(a(168));
          _l(Pl, n), _l(zl, t);
        }
        function Ml(e, n, t) {
          var r = e.stateNode;
          if (
            ((n = n.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return t;
          for (var l in (r = r.getChildContext()))
            if (!(l in n)) throw Error(a(108, B(e) || 'Unknown', l));
          return I({}, t, r);
        }
        function Fl(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Nl),
            (Ll = Pl.current),
            _l(Pl, e),
            _l(zl, zl.current),
            !0
          );
        }
        function Il(e, n, t) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          t
            ? ((e = Ml(e, n, Ll)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Cl(zl),
              Cl(Pl),
              _l(Pl, e))
            : Cl(zl),
            _l(zl, t);
        }
        var Dl = null,
          Ul = !1,
          Vl = !1;
        function Wl(e) {
          null === Dl ? (Dl = [e]) : Dl.push(e);
        }
        function Al() {
          if (!Vl && null !== Dl) {
            Vl = !0;
            var e = 0,
              n = kn;
            try {
              var t = Dl;
              for (kn = 1; e < t.length; e++) {
                var r = t[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Dl = null), (Ul = !1);
            } catch (l) {
              throw (null !== Dl && (Dl = Dl.slice(e + 1)), qe(Je, Al), l);
            } finally {
              (kn = n), (Vl = !1);
            }
          }
          return null;
        }
        var Bl = [],
          $l = 0,
          Hl = null,
          Ql = 0,
          ql = [],
          Kl = 0,
          Yl = null,
          Xl = 1,
          Gl = '';
        function Zl(e, n) {
          (Bl[$l++] = Ql), (Bl[$l++] = Hl), (Hl = e), (Ql = n);
        }
        function Jl(e, n, t) {
          (ql[Kl++] = Xl), (ql[Kl++] = Gl), (ql[Kl++] = Yl), (Yl = e);
          var r = Xl;
          e = Gl;
          var l = 32 - on(r) - 1;
          (r &= ~(1 << l)), (t += 1);
          var a = 32 - on(n) + l;
          if (30 < a) {
            var o = l - (l % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (l -= o),
              (Xl = (1 << (32 - on(n) + l)) | (t << l) | r),
              (Gl = a + e);
          } else (Xl = (1 << a) | (t << l) | r), (Gl = e);
        }
        function ea(e) {
          null !== e.return && (Zl(e, 1), Jl(e, 1, 0));
        }
        function na(e) {
          for (; e === Hl; )
            (Hl = Bl[--$l]), (Bl[$l] = null), (Ql = Bl[--$l]), (Bl[$l] = null);
          for (; e === Yl; )
            (Yl = ql[--Kl]),
              (ql[Kl] = null),
              (Gl = ql[--Kl]),
              (ql[Kl] = null),
              (Xl = ql[--Kl]),
              (ql[Kl] = null);
        }
        var ta = null,
          ra = null,
          la = !1,
          aa = null;
        function oa(e, n) {
          var t = Ts(5, null, null, 0);
          (t.elementType = 'DELETED'),
            (t.stateNode = n),
            (t.return = e),
            null === (n = e.deletions)
              ? ((e.deletions = [t]), (e.flags |= 16))
              : n.push(t);
        }
        function ia(e, n) {
          switch (e.tag) {
            case 5:
              var t = e.type;
              return (
                null !==
                  (n =
                    1 !== n.nodeType ||
                    t.toLowerCase() !== n.nodeName.toLowerCase()
                      ? null
                      : n) &&
                ((e.stateNode = n), (ta = e), (ra = sl(n.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (n = '' === e.pendingProps || 3 !== n.nodeType ? null : n) &&
                ((e.stateNode = n), (ta = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (n = 8 !== n.nodeType ? null : n) &&
                ((t = null !== Yl ? { id: Xl, overflow: Gl } : null),
                (e.memoizedState = {
                  dehydrated: n,
                  treeContext: t,
                  retryLane: 1073741824,
                }),
                ((t = Ts(18, null, null, 0)).stateNode = n),
                (t.return = e),
                (e.child = t),
                (ta = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function sa(e) {
          if (la) {
            var n = ra;
            if (n) {
              var t = n;
              if (!ia(e, n)) {
                if (ua(e)) throw Error(a(418));
                n = sl(t.nextSibling);
                var r = ta;
                n && ia(e, n)
                  ? oa(r, t)
                  : ((e.flags = (-4097 & e.flags) | 2), (la = !1), (ta = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (la = !1), (ta = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ta = e;
        }
        function fa(e) {
          if (e !== ta) return !1;
          if (!la) return ca(e), (la = !0), !1;
          var n;
          if (
            ((n = 3 !== e.tag) &&
              !(n = 5 !== e.tag) &&
              (n =
                'head' !== (n = e.type) &&
                'body' !== n &&
                !tl(e.type, e.memoizedProps)),
            n && (n = ra))
          ) {
            if (ua(e)) throw (da(), Error(a(418)));
            for (; n; ) oa(e, n), (n = sl(n.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType) {
                  var t = e.data;
                  if ('/$' === t) {
                    if (0 === n) {
                      ra = sl(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ('$' !== t && '$!' !== t && '$?' !== t) || n++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = ta ? sl(e.stateNode.nextSibling) : null;
          return !0;
        }
        function da() {
          for (var e = ra; e; ) e = sl(e.nextSibling);
        }
        function pa() {
          (ra = ta = null), (la = !1);
        }
        function ma(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var ha = k.ReactCurrentBatchConfig;
        function va(e, n) {
          if (e && e.defaultProps) {
            for (var t in ((n = I({}, n)), (e = e.defaultProps)))
              void 0 === n[t] && (n[t] = e[t]);
            return n;
          }
          return n;
        }
        var ga = El(null),
          ya = null,
          ba = null,
          ka = null;
        function wa() {
          ka = ba = ya = null;
        }
        function Sa(e) {
          var n = ga.current;
          Cl(ga), (e._currentValue = n);
        }
        function xa(e, n, t) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
                : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
              e === t)
            )
              break;
            e = e.return;
          }
        }
        function Ea(e, n) {
          (ya = e),
            (ka = ba = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & n) && (ki = !0), (e.firstContext = null));
        }
        function Ca(e) {
          var n = e._currentValue;
          if (ka !== e)
            if (
              ((e = { context: e, memoizedValue: n, next: null }), null === ba)
            ) {
              if (null === ya) throw Error(a(308));
              (ba = e), (ya.dependencies = { lanes: 0, firstContext: e });
            } else ba = ba.next = e;
          return n;
        }
        var _a = null;
        function Na(e) {
          null === _a ? (_a = [e]) : _a.push(e);
        }
        function Pa(e, n, t, r) {
          var l = n.interleaved;
          return (
            null === l
              ? ((t.next = t), Na(n))
              : ((t.next = l.next), (l.next = t)),
            (n.interleaved = t),
            za(e, r)
          );
        }
        function za(e, n) {
          e.lanes |= n;
          var t = e.alternate;
          for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
            (e.childLanes |= n),
              null !== (t = e.alternate) && (t.childLanes |= n),
              (t = e),
              (e = e.return);
          return 3 === t.tag ? t.stateNode : null;
        }
        var La = !1;
        function ja(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ta(e, n) {
          (e = e.updateQueue),
            n.updateQueue === e &&
              (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Oa(e, n) {
          return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ra(e, n, t) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & zu))) {
            var l = r.pending;
            return (
              null === l ? (n.next = n) : ((n.next = l.next), (l.next = n)),
              (r.pending = n),
              za(e, t)
            );
          }
          return (
            null === (l = r.interleaved)
              ? ((n.next = n), Na(r))
              : ((n.next = l.next), (l.next = n)),
            (r.interleaved = n),
            za(e, t)
          );
        }
        function Ma(e, n, t) {
          if (
            null !== (n = n.updateQueue) &&
            ((n = n.shared), 0 !== (4194240 & t))
          ) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        function Fa(e, n) {
          var t = e.updateQueue,
            r = e.alternate;
          if (null !== r && t === (r = r.updateQueue)) {
            var l = null,
              a = null;
            if (null !== (t = t.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: t.eventTime,
                  lane: t.lane,
                  tag: t.tag,
                  payload: t.payload,
                  callback: t.callback,
                  next: null,
                };
                null === a ? (l = a = o) : (a = a.next = o), (t = t.next);
              } while (null !== t);
              null === a ? (l = a = n) : (a = a.next = n);
            } else l = a = n;
            return (
              (t = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = t)
            );
          }
          null === (e = t.lastBaseUpdate)
            ? (t.firstBaseUpdate = n)
            : (e.next = n),
            (t.lastBaseUpdate = n);
        }
        function Ia(e, n, t, r) {
          var l = e.updateQueue;
          La = !1;
          var a = l.firstBaseUpdate,
            o = l.lastBaseUpdate,
            i = l.shared.pending;
          if (null !== i) {
            l.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (a = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var f = l.baseState;
            for (o = 0, c = s = u = null, i = a; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = i;
                  switch (((d = n), (p = t), h.tag)) {
                    case 1:
                      if ('function' === typeof (m = h.payload)) {
                        f = m.call(p, f, d);
                        break e;
                      }
                      f = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            'function' === typeof (m = h.payload)
                              ? m.call(p, f, d)
                              : m) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      La = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = l.effects) ? (l.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = l.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (l.lastBaseUpdate = d),
                  (l.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (l.baseState = u),
              (l.firstBaseUpdate = s),
              (l.lastBaseUpdate = c),
              null !== (n = l.shared.interleaved))
            ) {
              l = n;
              do {
                (o |= l.lane), (l = l.next);
              } while (l !== n);
            } else null === a && (l.shared.lanes = 0);
            (Iu |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Da(e, n, t) {
          if (((e = n.effects), (n.effects = null), null !== e))
            for (n = 0; n < e.length; n++) {
              var r = e[n],
                l = r.callback;
              if (null !== l) {
                if (((r.callback = null), (r = t), 'function' !== typeof l))
                  throw Error(a(191, l));
                l.call(r);
              }
            }
        }
        var Ua = new r.Component().refs;
        function Va(e, n, t, r) {
          (t =
            null === (t = t(r, (n = e.memoizedState))) || void 0 === t
              ? n
              : I({}, n, t)),
            (e.memoizedState = t),
            0 === e.lanes && (e.updateQueue.baseState = t);
        }
        var Wa = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ae(e) === e;
          },
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var r = ns(),
              l = ts(e),
              a = Oa(r, l);
            (a.payload = n),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (n = Ra(e, a, l)) && (rs(n, e, l, r), Ma(n, e, l));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var r = ns(),
              l = ts(e),
              a = Oa(r, l);
            (a.tag = 1),
              (a.payload = n),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (n = Ra(e, a, l)) && (rs(n, e, l, r), Ma(n, e, l));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = ns(),
              r = ts(e),
              l = Oa(t, r);
            (l.tag = 2),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (n = Ra(e, l, r)) && (rs(n, e, r, t), Ma(n, e, r));
          },
        };
        function Aa(e, n, t, r, l, a, o) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !n.prototype ||
                !n.prototype.isPureReactComponent ||
                !ur(t, r) ||
                !ur(l, a);
        }
        function Ba(e, n, t) {
          var r = !1,
            l = Nl,
            a = n.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = Ca(a))
              : ((l = Tl(n) ? Ll : Pl.current),
                (a = (r = null !== (r = n.contextTypes) && void 0 !== r)
                  ? jl(e, l)
                  : Nl)),
            (n = new n(t, a)),
            (e.memoizedState =
              null !== n.state && void 0 !== n.state ? n.state : null),
            (n.updater = Wa),
            (e.stateNode = n),
            (n._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                l),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            n
          );
        }
        function $a(e, n, t, r) {
          (e = n.state),
            'function' === typeof n.componentWillReceiveProps &&
              n.componentWillReceiveProps(t, r),
            'function' === typeof n.UNSAFE_componentWillReceiveProps &&
              n.UNSAFE_componentWillReceiveProps(t, r),
            n.state !== e && Wa.enqueueReplaceState(n, n.state, null);
        }
        function Ha(e, n, t, r) {
          var l = e.stateNode;
          (l.props = t), (l.state = e.memoizedState), (l.refs = Ua), ja(e);
          var a = n.contextType;
          'object' === typeof a && null !== a
            ? (l.context = Ca(a))
            : ((a = Tl(n) ? Ll : Pl.current), (l.context = jl(e, a))),
            (l.state = e.memoizedState),
            'function' === typeof (a = n.getDerivedStateFromProps) &&
              (Va(e, n, a, t), (l.state = e.memoizedState)),
            'function' === typeof n.getDerivedStateFromProps ||
              'function' === typeof l.getSnapshotBeforeUpdate ||
              ('function' !== typeof l.UNSAFE_componentWillMount &&
                'function' !== typeof l.componentWillMount) ||
              ((n = l.state),
              'function' === typeof l.componentWillMount &&
                l.componentWillMount(),
              'function' === typeof l.UNSAFE_componentWillMount &&
                l.UNSAFE_componentWillMount(),
              n !== l.state && Wa.enqueueReplaceState(l, l.state, null),
              Ia(e, t, l, r),
              (l.state = e.memoizedState)),
            'function' === typeof l.componentDidMount && (e.flags |= 4194308);
        }
        function Qa(e, n, t) {
          if (
            null !== (e = t.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (t._owner) {
              if ((t = t._owner)) {
                if (1 !== t.tag) throw Error(a(309));
                var r = t.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var l = r,
                o = '' + e;
              return null !== n &&
                null !== n.ref &&
                'function' === typeof n.ref &&
                n.ref._stringRef === o
                ? n.ref
                : ((n = function (e) {
                    var n = l.refs;
                    n === Ua && (n = l.refs = {}),
                      null === e ? delete n[o] : (n[o] = e);
                  }),
                  (n._stringRef = o),
                  n);
            }
            if ('string' !== typeof e) throw Error(a(284));
            if (!t._owner) throw Error(a(290, e));
          }
          return e;
        }
        function qa(e, n) {
          throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
              a(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(n).join(', ') + '}'
                  : e
              )
            ))
          );
        }
        function Ka(e) {
          return (0, e._init)(e._payload);
        }
        function Ya(e) {
          function n(n, t) {
            if (e) {
              var r = n.deletions;
              null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
            }
          }
          function t(t, r) {
            if (!e) return null;
            for (; null !== r; ) n(t, r), (r = r.sibling);
            return null;
          }
          function r(e, n) {
            for (e = new Map(); null !== n; )
              null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                (n = n.sibling);
            return e;
          }
          function l(e, n) {
            return ((e = Rs(e, n)).index = 0), (e.sibling = null), e;
          }
          function o(n, t, r) {
            return (
              (n.index = r),
              e
                ? null !== (r = n.alternate)
                  ? (r = r.index) < t
                    ? ((n.flags |= 2), t)
                    : r
                  : ((n.flags |= 2), t)
                : ((n.flags |= 1048576), t)
            );
          }
          function i(n) {
            return e && null === n.alternate && (n.flags |= 2), n;
          }
          function u(e, n, t, r) {
            return null === n || 6 !== n.tag
              ? (((n = Ds(t, e.mode, r)).return = e), n)
              : (((n = l(n, t)).return = e), n);
          }
          function s(e, n, t, r) {
            var a = t.type;
            return a === x
              ? f(e, n, t.props.children, r, t.key)
              : null !== n &&
                (n.elementType === a ||
                  ('object' === typeof a &&
                    null !== a &&
                    a.$$typeof === T &&
                    Ka(a) === n.type))
              ? (((r = l(n, t.props)).ref = Qa(e, n, t)), (r.return = e), r)
              : (((r = Ms(t.type, t.key, t.props, null, e.mode, r)).ref = Qa(
                  e,
                  n,
                  t
                )),
                (r.return = e),
                r);
          }
          function c(e, n, t, r) {
            return null === n ||
              4 !== n.tag ||
              n.stateNode.containerInfo !== t.containerInfo ||
              n.stateNode.implementation !== t.implementation
              ? (((n = Us(t, e.mode, r)).return = e), n)
              : (((n = l(n, t.children || [])).return = e), n);
          }
          function f(e, n, t, r, a) {
            return null === n || 7 !== n.tag
              ? (((n = Fs(t, e.mode, r, a)).return = e), n)
              : (((n = l(n, t)).return = e), n);
          }
          function d(e, n, t) {
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return ((n = Ds('' + n, e.mode, t)).return = e), n;
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return (
                    ((t = Ms(n.type, n.key, n.props, null, e.mode, t)).ref = Qa(
                      e,
                      null,
                      n
                    )),
                    (t.return = e),
                    t
                  );
                case S:
                  return ((n = Us(n, e.mode, t)).return = e), n;
                case T:
                  return d(e, (0, n._init)(n._payload), t);
              }
              if (ne(n) || M(n))
                return ((n = Fs(n, e.mode, t, null)).return = e), n;
              qa(e, n);
            }
            return null;
          }
          function p(e, n, t, r) {
            var l = null !== n ? n.key : null;
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return null !== l ? null : u(e, n, '' + t, r);
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return t.key === l ? s(e, n, t, r) : null;
                case S:
                  return t.key === l ? c(e, n, t, r) : null;
                case T:
                  return p(e, n, (l = t._init)(t._payload), r);
              }
              if (ne(t) || M(t)) return null !== l ? null : f(e, n, t, r, null);
              qa(e, t);
            }
            return null;
          }
          function m(e, n, t, r, l) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return u(n, (e = e.get(t) || null), '' + r, l);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    l
                  );
                case S:
                  return c(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    l
                  );
                case T:
                  return m(e, n, t, (0, r._init)(r._payload), l);
              }
              if (ne(r) || M(r))
                return f(n, (e = e.get(t) || null), r, l, null);
              qa(n, r);
            }
            return null;
          }
          function h(l, a, i, u) {
            for (
              var s = null, c = null, f = a, h = (a = 0), v = null;
              null !== f && h < i.length;
              h++
            ) {
              f.index > h ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(l, f, i[h], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && n(l, f),
                (a = o(g, a, h)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (h === i.length) return t(l, f), la && Zl(l, h), s;
            if (null === f) {
              for (; h < i.length; h++)
                null !== (f = d(l, i[h], u)) &&
                  ((a = o(f, a, h)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return la && Zl(l, h), s;
            }
            for (f = r(l, f); h < i.length; h++)
              null !== (v = m(f, l, h, i[h], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? h : v.key),
                (a = o(v, a, h)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return n(l, e);
                }),
              la && Zl(l, h),
              s
            );
          }
          function v(l, i, u, s) {
            var c = M(u);
            if ('function' !== typeof c) throw Error(a(150));
            if (null == (u = c.call(u))) throw Error(a(151));
            for (
              var f = (c = null), h = i, v = (i = 0), g = null, y = u.next();
              null !== h && !y.done;
              v++, y = u.next()
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
              var b = p(l, h, y.value, s);
              if (null === b) {
                null === h && (h = g);
                break;
              }
              e && h && null === b.alternate && n(l, h),
                (i = o(b, i, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (h = g);
            }
            if (y.done) return t(l, h), la && Zl(l, v), c;
            if (null === h) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(l, y.value, s)) &&
                  ((i = o(y, i, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return la && Zl(l, v), c;
            }
            for (h = r(l, h); !y.done; v++, y = u.next())
              null !== (y = m(h, l, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? v : y.key),
                (i = o(y, i, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                h.forEach(function (e) {
                  return n(l, e);
                }),
              la && Zl(l, v),
              c
            );
          }
          return function e(r, a, o, u) {
            if (
              ('object' === typeof o &&
                null !== o &&
                o.type === x &&
                null === o.key &&
                (o = o.props.children),
              'object' === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var s = o.key, c = a; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === x) {
                          if (7 === c.tag) {
                            t(r, c.sibling),
                              ((a = l(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === T &&
                            Ka(s) === c.type)
                        ) {
                          t(r, c.sibling),
                            ((a = l(c, o.props)).ref = Qa(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        t(r, c);
                        break;
                      }
                      n(r, c), (c = c.sibling);
                    }
                    o.type === x
                      ? (((a = Fs(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = a))
                      : (((u = Ms(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Qa(r, a, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case S:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          t(r, a.sibling),
                            ((a = l(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        t(r, a);
                        break;
                      }
                      n(r, a), (a = a.sibling);
                    }
                    ((a = Us(o, r.mode, u)).return = r), (r = a);
                  }
                  return i(r);
                case T:
                  return e(r, a, (c = o._init)(o._payload), u);
              }
              if (ne(o)) return h(r, a, o, u);
              if (M(o)) return v(r, a, o, u);
              qa(r, o);
            }
            return ('string' === typeof o && '' !== o) || 'number' === typeof o
              ? ((o = '' + o),
                null !== a && 6 === a.tag
                  ? (t(r, a.sibling), ((a = l(a, o)).return = r), (r = a))
                  : (t(r, a), ((a = Ds(o, r.mode, u)).return = r), (r = a)),
                i(r))
              : t(r, a);
          };
        }
        var Xa = Ya(!0),
          Ga = Ya(!1),
          Za = {},
          Ja = El(Za),
          eo = El(Za),
          no = El(Za);
        function to(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function ro(e, n) {
          switch ((_l(no, n), _l(eo, e), _l(Ja, Za), (e = n.nodeType))) {
            case 9:
            case 11:
              n = (n = n.documentElement) ? n.namespaceURI : ue(null, '');
              break;
            default:
              n = ue(
                (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Cl(Ja), _l(Ja, n);
        }
        function lo() {
          Cl(Ja), Cl(eo), Cl(no);
        }
        function ao(e) {
          to(no.current);
          var n = to(Ja.current),
            t = ue(n, e.type);
          n !== t && (_l(eo, e), _l(Ja, t));
        }
        function oo(e) {
          eo.current === e && (Cl(Ja), Cl(eo));
        }
        var io = El(0);
        function uo(e) {
          for (var n = e; null !== n; ) {
            if (13 === n.tag) {
              var t = n.memoizedState;
              if (
                null !== t &&
                (null === (t = t.dehydrated) ||
                  '$?' === t.data ||
                  '$!' === t.data)
              )
                return n;
            } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
              if (0 !== (128 & n.flags)) return n;
            } else if (null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return null;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
          return null;
        }
        var so = [];
        function co() {
          for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null;
          so.length = 0;
        }
        var fo = k.ReactCurrentDispatcher,
          po = k.ReactCurrentBatchConfig,
          mo = 0,
          ho = null,
          vo = null,
          go = null,
          yo = !1,
          bo = !1,
          ko = 0,
          wo = 0;
        function So() {
          throw Error(a(321));
        }
        function xo(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++)
            if (!ir(e[t], n[t])) return !1;
          return !0;
        }
        function Eo(e, n, t, r, l, o) {
          if (
            ((mo = o),
            (ho = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : ui),
            (e = t(r, l)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (ko = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (go = vo = null),
                (n.updateQueue = null),
                (fo.current = si),
                (e = t(r, l));
            } while (bo);
          }
          if (
            ((fo.current = oi),
            (n = null !== vo && null !== vo.next),
            (mo = 0),
            (go = vo = ho = null),
            (yo = !1),
            n)
          )
            throw Error(a(300));
          return e;
        }
        function Co() {
          var e = 0 !== ko;
          return (ko = 0), e;
        }
        function _o() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (ho.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function No() {
          if (null === vo) {
            var e = ho.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vo.next;
          var n = null === go ? ho.memoizedState : go.next;
          if (null !== n) (go = n), (vo = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (vo = e).memoizedState,
              baseState: vo.baseState,
              baseQueue: vo.baseQueue,
              queue: vo.queue,
              next: null,
            }),
              null === go ? (ho.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function Po(e, n) {
          return 'function' === typeof n ? n(e) : n;
        }
        function zo(e) {
          var n = No(),
            t = n.queue;
          if (null === t) throw Error(a(311));
          t.lastRenderedReducer = e;
          var r = vo,
            l = r.baseQueue,
            o = t.pending;
          if (null !== o) {
            if (null !== l) {
              var i = l.next;
              (l.next = o.next), (o.next = i);
            }
            (r.baseQueue = l = o), (t.pending = null);
          }
          if (null !== l) {
            (o = l.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = o;
            do {
              var f = c.lane;
              if ((mo & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (ho.lanes |= f),
                  (Iu |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = u),
              ir(r, n.memoizedState) || (ki = !0),
              (n.memoizedState = r),
              (n.baseState = i),
              (n.baseQueue = s),
              (t.lastRenderedState = r);
          }
          if (null !== (e = t.interleaved)) {
            l = e;
            do {
              (o = l.lane), (ho.lanes |= o), (Iu |= o), (l = l.next);
            } while (l !== e);
          } else null === l && (t.lanes = 0);
          return [n.memoizedState, t.dispatch];
        }
        function Lo(e) {
          var n = No(),
            t = n.queue;
          if (null === t) throw Error(a(311));
          t.lastRenderedReducer = e;
          var r = t.dispatch,
            l = t.pending,
            o = n.memoizedState;
          if (null !== l) {
            t.pending = null;
            var i = (l = l.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== l);
            ir(o, n.memoizedState) || (ki = !0),
              (n.memoizedState = o),
              null === n.baseQueue && (n.baseState = o),
              (t.lastRenderedState = o);
          }
          return [o, r];
        }
        function jo() {}
        function To(e, n) {
          var t = ho,
            r = No(),
            l = n(),
            o = !ir(r.memoizedState, l);
          if (
            (o && ((r.memoizedState = l), (ki = !0)),
            (r = r.queue),
            $o(Mo.bind(null, t, r, e), [e]),
            r.getSnapshot !== n ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((t.flags |= 2048),
              Uo(9, Ro.bind(null, t, r, l, n), void 0, null),
              null === Lu)
            )
              throw Error(a(349));
            0 !== (30 & mo) || Oo(t, n, l);
          }
          return l;
        }
        function Oo(e, n, t) {
          (e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            null === (n = ho.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (ho.updateQueue = n),
                (n.stores = [e]))
              : null === (t = n.stores)
              ? (n.stores = [e])
              : t.push(e);
        }
        function Ro(e, n, t, r) {
          (n.value = t), (n.getSnapshot = r), Fo(n) && Io(e);
        }
        function Mo(e, n, t) {
          return t(function () {
            Fo(n) && Io(e);
          });
        }
        function Fo(e) {
          var n = e.getSnapshot;
          e = e.value;
          try {
            var t = n();
            return !ir(e, t);
          } catch (r) {
            return !0;
          }
        }
        function Io(e) {
          var n = za(e, 1);
          null !== n && rs(n, e, 1, -1);
        }
        function Do(e) {
          var n = _o();
          return (
            'function' === typeof e && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Po,
              lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = ti.bind(null, ho, e)),
            [n.memoizedState, e]
          );
        }
        function Uo(e, n, t, r) {
          return (
            (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
            null === (n = ho.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (ho.updateQueue = n),
                (n.lastEffect = e.next = e))
              : null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
            e
          );
        }
        function Vo() {
          return No().memoizedState;
        }
        function Wo(e, n, t, r) {
          var l = _o();
          (ho.flags |= e),
            (l.memoizedState = Uo(1 | n, t, void 0, void 0 === r ? null : r));
        }
        function Ao(e, n, t, r) {
          var l = No();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== vo) {
            var o = vo.memoizedState;
            if (((a = o.destroy), null !== r && xo(r, o.deps)))
              return void (l.memoizedState = Uo(n, t, a, r));
          }
          (ho.flags |= e), (l.memoizedState = Uo(1 | n, t, a, r));
        }
        function Bo(e, n) {
          return Wo(8390656, 8, e, n);
        }
        function $o(e, n) {
          return Ao(2048, 8, e, n);
        }
        function Ho(e, n) {
          return Ao(4, 2, e, n);
        }
        function Qo(e, n) {
          return Ao(4, 4, e, n);
        }
        function qo(e, n) {
          return 'function' === typeof n
            ? ((e = e()),
              n(e),
              function () {
                n(null);
              })
            : null !== n && void 0 !== n
            ? ((e = e()),
              (n.current = e),
              function () {
                n.current = null;
              })
            : void 0;
        }
        function Ko(e, n, t) {
          return (
            (t = null !== t && void 0 !== t ? t.concat([e]) : null),
            Ao(4, 4, qo.bind(null, n, e), t)
          );
        }
        function Yo() {}
        function Xo(e, n) {
          var t = No();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && xo(n, r[1])
            ? r[0]
            : ((t.memoizedState = [e, n]), e);
        }
        function Go(e, n) {
          var t = No();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && xo(n, r[1])
            ? r[0]
            : ((e = e()), (t.memoizedState = [e, n]), e);
        }
        function Zo(e, n, t) {
          return 0 === (21 & mo)
            ? (e.baseState && ((e.baseState = !1), (ki = !0)),
              (e.memoizedState = t))
            : (ir(t, n) ||
                ((t = vn()), (ho.lanes |= t), (Iu |= t), (e.baseState = !0)),
              n);
        }
        function Jo(e, n) {
          var t = kn;
          (kn = 0 !== t && 4 > t ? t : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), n();
          } finally {
            (kn = t), (po.transition = r);
          }
        }
        function ei() {
          return No().memoizedState;
        }
        function ni(e, n, t) {
          var r = ts(e);
          if (
            ((t = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            li(n, t);
          else if (null !== (t = Pa(e, n, t, r))) {
            rs(t, e, r, ns()), ai(t, n, r);
          }
        }
        function ti(e, n, t) {
          var r = ts(e),
            l = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) li(n, l);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = n.lastRenderedReducer)
            )
              try {
                var o = n.lastRenderedState,
                  i = a(o, t);
                if (((l.hasEagerState = !0), (l.eagerState = i), ir(i, o))) {
                  var u = n.interleaved;
                  return (
                    null === u
                      ? ((l.next = l), Na(n))
                      : ((l.next = u.next), (u.next = l)),
                    void (n.interleaved = l)
                  );
                }
              } catch (s) {}
            null !== (t = Pa(e, n, l, r)) &&
              (rs(t, e, r, (l = ns())), ai(t, n, r));
          }
        }
        function ri(e) {
          var n = e.alternate;
          return e === ho || (null !== n && n === ho);
        }
        function li(e, n) {
          bo = yo = !0;
          var t = e.pending;
          null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
            (e.pending = n);
        }
        function ai(e, n, t) {
          if (0 !== (4194240 & t)) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        var oi = {
            readContext: Ca,
            useCallback: So,
            useContext: So,
            useEffect: So,
            useImperativeHandle: So,
            useInsertionEffect: So,
            useLayoutEffect: So,
            useMemo: So,
            useReducer: So,
            useRef: So,
            useState: So,
            useDebugValue: So,
            useDeferredValue: So,
            useTransition: So,
            useMutableSource: So,
            useSyncExternalStore: So,
            useId: So,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Ca,
            useCallback: function (e, n) {
              return (_o().memoizedState = [e, void 0 === n ? null : n]), e;
            },
            useContext: Ca,
            useEffect: Bo,
            useImperativeHandle: function (e, n, t) {
              return (
                (t = null !== t && void 0 !== t ? t.concat([e]) : null),
                Wo(4194308, 4, qo.bind(null, n, e), t)
              );
            },
            useLayoutEffect: function (e, n) {
              return Wo(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              return Wo(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = _o();
              return (
                (n = void 0 === n ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
              );
            },
            useReducer: function (e, n, t) {
              var r = _o();
              return (
                (n = void 0 !== t ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = ni.bind(null, ho, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (_o().memoizedState = e);
            },
            useState: Do,
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return (_o().memoizedState = e);
            },
            useTransition: function () {
              var e = Do(!1),
                n = e[0];
              return (
                (e = Jo.bind(null, e[1])), (_o().memoizedState = e), [n, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
              var r = ho,
                l = _o();
              if (la) {
                if (void 0 === t) throw Error(a(407));
                t = t();
              } else {
                if (((t = n()), null === Lu)) throw Error(a(349));
                0 !== (30 & mo) || Oo(r, n, t);
              }
              l.memoizedState = t;
              var o = { value: t, getSnapshot: n };
              return (
                (l.queue = o),
                Bo(Mo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Uo(9, Ro.bind(null, r, o, t, n), void 0, null),
                t
              );
            },
            useId: function () {
              var e = _o(),
                n = Lu.identifierPrefix;
              if (la) {
                var t = Gl;
                (n =
                  ':' +
                  n +
                  'R' +
                  (t = (Xl & ~(1 << (32 - on(Xl) - 1))).toString(32) + t)),
                  0 < (t = ko++) && (n += 'H' + t.toString(32)),
                  (n += ':');
              } else n = ':' + n + 'r' + (t = wo++).toString(32) + ':';
              return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Ca,
            useCallback: Xo,
            useContext: Ca,
            useEffect: $o,
            useImperativeHandle: Ko,
            useInsertionEffect: Ho,
            useLayoutEffect: Qo,
            useMemo: Go,
            useReducer: zo,
            useRef: Vo,
            useState: function () {
              return zo(Po);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              return Zo(No(), vo.memoizedState, e);
            },
            useTransition: function () {
              return [zo(Po)[0], No().memoizedState];
            },
            useMutableSource: jo,
            useSyncExternalStore: To,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: Ca,
            useCallback: Xo,
            useContext: Ca,
            useEffect: $o,
            useImperativeHandle: Ko,
            useInsertionEffect: Ho,
            useLayoutEffect: Qo,
            useMemo: Go,
            useReducer: Lo,
            useRef: Vo,
            useState: function () {
              return Lo(Po);
            },
            useDebugValue: Yo,
            useDeferredValue: function (e) {
              var n = No();
              return null === vo
                ? (n.memoizedState = e)
                : Zo(n, vo.memoizedState, e);
            },
            useTransition: function () {
              return [Lo(Po)[0], No().memoizedState];
            },
            useMutableSource: jo,
            useSyncExternalStore: To,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, n) {
          try {
            var t = '',
              r = n;
            do {
              (t += W(r)), (r = r.return);
            } while (r);
            var l = t;
          } catch (a) {
            l = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: e, source: n, stack: l, digest: null };
        }
        function fi(e, n, t) {
          return {
            value: e,
            source: null,
            stack: null != t ? t : null,
            digest: null != n ? n : null,
          };
        }
        function di(e, n) {
          try {
            console.error(n.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var pi = 'function' === typeof WeakMap ? WeakMap : Map;
        function mi(e, n, t) {
          ((t = Oa(-1, t)).tag = 3), (t.payload = { element: null });
          var r = n.value;
          return (
            (t.callback = function () {
              Hu || ((Hu = !0), (Qu = r)), di(0, n);
            }),
            t
          );
        }
        function hi(e, n, t) {
          (t = Oa(-1, t)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var l = n.value;
            (t.payload = function () {
              return r(l);
            }),
              (t.callback = function () {
                di(0, n);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (t.callback = function () {
                di(0, n),
                  'function' !== typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this));
                var e = n.stack;
                this.componentDidCatch(n.value, {
                  componentStack: null !== e ? e : '',
                });
              }),
            t
          );
        }
        function vi(e, n, t) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var l = new Set();
            r.set(n, l);
          } else void 0 === (l = r.get(n)) && ((l = new Set()), r.set(n, l));
          l.has(t) || (l.add(t), (e = _s.bind(null, e, n, t)), n.then(e, e));
        }
        function gi(e) {
          do {
            var n;
            if (
              ((n = 13 === e.tag) &&
                (n = null === (n = e.memoizedState) || null !== n.dehydrated),
              n)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yi(e, n, t, r, l) {
          return 0 === (1 & e.mode)
            ? (e === n
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (t.flags |= 131072),
                  (t.flags &= -52805),
                  1 === t.tag &&
                    (null === t.alternate
                      ? (t.tag = 17)
                      : (((n = Oa(-1, 1)).tag = 2), Ra(t, n, 1))),
                  (t.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = l), e);
        }
        var bi = k.ReactCurrentOwner,
          ki = !1;
        function wi(e, n, t, r) {
          n.child = null === e ? Ga(n, null, t, r) : Xa(n, e.child, t, r);
        }
        function Si(e, n, t, r, l) {
          t = t.render;
          var a = n.ref;
          return (
            Ea(n, l),
            (r = Eo(e, n, t, r, a, l)),
            (t = Co()),
            null === e || ki
              ? (la && t && ea(n), (n.flags |= 1), wi(e, n, r, l), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~l),
                Hi(e, n, l))
          );
        }
        function xi(e, n, t, r, l) {
          if (null === e) {
            var a = t.type;
            return 'function' !== typeof a ||
              Os(a) ||
              void 0 !== a.defaultProps ||
              null !== t.compare ||
              void 0 !== t.defaultProps
              ? (((e = Ms(t.type, null, r, n, n.mode, l)).ref = n.ref),
                (e.return = n),
                (n.child = e))
              : ((n.tag = 15), (n.type = a), Ei(e, n, a, r, l));
          }
          if (((a = e.child), 0 === (e.lanes & l))) {
            var o = a.memoizedProps;
            if (
              (t = null !== (t = t.compare) ? t : ur)(o, r) &&
              e.ref === n.ref
            )
              return Hi(e, n, l);
          }
          return (
            (n.flags |= 1),
            ((e = Rs(a, r)).ref = n.ref),
            (e.return = n),
            (n.child = e)
          );
        }
        function Ei(e, n, t, r, l) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === n.ref) {
              if (((ki = !1), (n.pendingProps = r = a), 0 === (e.lanes & l)))
                return (n.lanes = e.lanes), Hi(e, n, l);
              0 !== (131072 & e.flags) && (ki = !0);
            }
          }
          return Ni(e, n, t, r, l);
        }
        function Ci(e, n, t) {
          var r = n.pendingProps,
            l = r.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & n.mode))
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _l(Ru, Ou),
                (Ou |= t);
            else {
              if (0 === (1073741824 & t))
                return (
                  (e = null !== a ? a.baseLanes | t : t),
                  (n.lanes = n.childLanes = 1073741824),
                  (n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (n.updateQueue = null),
                  _l(Ru, Ou),
                  (Ou |= e),
                  null
                );
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : t),
                _l(Ru, Ou),
                (Ou |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | t), (n.memoizedState = null))
              : (r = t),
              _l(Ru, Ou),
              (Ou |= r);
          return wi(e, n, l, t), n.child;
        }
        function _i(e, n) {
          var t = n.ref;
          ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
            ((n.flags |= 512), (n.flags |= 2097152));
        }
        function Ni(e, n, t, r, l) {
          var a = Tl(t) ? Ll : Pl.current;
          return (
            (a = jl(n, a)),
            Ea(n, l),
            (t = Eo(e, n, t, r, a, l)),
            (r = Co()),
            null === e || ki
              ? (la && r && ea(n), (n.flags |= 1), wi(e, n, t, l), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~l),
                Hi(e, n, l))
          );
        }
        function Pi(e, n, t, r, l) {
          if (Tl(t)) {
            var a = !0;
            Fl(n);
          } else a = !1;
          if ((Ea(n, l), null === n.stateNode))
            $i(e, n), Ba(n, t, r), Ha(n, t, r, l), (r = !0);
          else if (null === e) {
            var o = n.stateNode,
              i = n.memoizedProps;
            o.props = i;
            var u = o.context,
              s = t.contextType;
            'object' === typeof s && null !== s
              ? (s = Ca(s))
              : (s = jl(n, (s = Tl(t) ? Ll : Pl.current)));
            var c = t.getDerivedStateFromProps,
              f =
                'function' === typeof c ||
                'function' === typeof o.getSnapshotBeforeUpdate;
            f ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && $a(n, o, r, s)),
              (La = !1);
            var d = n.memoizedState;
            (o.state = d),
              Ia(n, r, o, l),
              (u = n.memoizedState),
              i !== r || d !== u || zl.current || La
                ? ('function' === typeof c &&
                    (Va(n, t, c, r), (u = n.memoizedState)),
                  (i = La || Aa(n, t, i, r, d, u, s))
                    ? (f ||
                        ('function' !== typeof o.UNSAFE_componentWillMount &&
                          'function' !== typeof o.componentWillMount) ||
                        ('function' === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        'function' === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      'function' === typeof o.componentDidMount &&
                        (n.flags |= 4194308))
                    : ('function' === typeof o.componentDidMount &&
                        (n.flags |= 4194308),
                      (n.memoizedProps = r),
                      (n.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ('function' === typeof o.componentDidMount &&
                    (n.flags |= 4194308),
                  (r = !1));
          } else {
            (o = n.stateNode),
              Ta(e, n),
              (i = n.memoizedProps),
              (s = n.type === n.elementType ? i : va(n.type, i)),
              (o.props = s),
              (f = n.pendingProps),
              (d = o.context),
              'object' === typeof (u = t.contextType) && null !== u
                ? (u = Ca(u))
                : (u = jl(n, (u = Tl(t) ? Ll : Pl.current)));
            var p = t.getDerivedStateFromProps;
            (c =
              'function' === typeof p ||
              'function' === typeof o.getSnapshotBeforeUpdate) ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((i !== f || d !== u) && $a(n, o, r, u)),
              (La = !1),
              (d = n.memoizedState),
              (o.state = d),
              Ia(n, r, o, l);
            var m = n.memoizedState;
            i !== f || d !== m || zl.current || La
              ? ('function' === typeof p &&
                  (Va(n, t, p, r), (m = n.memoizedState)),
                (s = La || Aa(n, t, s, r, d, m, u) || !1)
                  ? (c ||
                      ('function' !== typeof o.UNSAFE_componentWillUpdate &&
                        'function' !== typeof o.componentWillUpdate) ||
                      ('function' === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, m, u),
                      'function' === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, m, u)),
                    'function' === typeof o.componentDidUpdate &&
                      (n.flags |= 4),
                    'function' === typeof o.getSnapshotBeforeUpdate &&
                      (n.flags |= 1024))
                  : ('function' !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 4),
                    'function' !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = m)),
                (o.props = r),
                (o.state = m),
                (o.context = u),
                (r = s))
              : ('function' !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 4),
                'function' !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 1024),
                (r = !1));
          }
          return zi(e, n, t, r, a, l);
        }
        function zi(e, n, t, r, l, a) {
          _i(e, n);
          var o = 0 !== (128 & n.flags);
          if (!r && !o) return l && Il(n, t, !1), Hi(e, n, a);
          (r = n.stateNode), (bi.current = n);
          var i =
            o && 'function' !== typeof t.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (n.flags |= 1),
            null !== e && o
              ? ((n.child = Xa(n, e.child, null, a)),
                (n.child = Xa(n, null, i, a)))
              : wi(e, n, i, a),
            (n.memoizedState = r.state),
            l && Il(n, t, !0),
            n.child
          );
        }
        function Li(e) {
          var n = e.stateNode;
          n.pendingContext
            ? Rl(0, n.pendingContext, n.pendingContext !== n.context)
            : n.context && Rl(0, n.context, !1),
            ro(e, n.containerInfo);
        }
        function ji(e, n, t, r, l) {
          return pa(), ma(l), (n.flags |= 256), wi(e, n, t, r), n.child;
        }
        var Ti,
          Oi,
          Ri,
          Mi,
          Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ii(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Di(e, n, t) {
          var r,
            l = n.pendingProps,
            o = io.current,
            i = !1,
            u = 0 !== (128 & n.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (n.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            _l(io, 1 & o),
            null === e)
          )
            return (
              sa(n),
              null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & n.mode)
                    ? (n.lanes = 1)
                    : '$!' === e.data
                    ? (n.lanes = 8)
                    : (n.lanes = 1073741824),
                  null)
                : ((u = l.children),
                  (e = l.fallback),
                  i
                    ? ((l = n.mode),
                      (i = n.child),
                      (u = { mode: 'hidden', children: u }),
                      0 === (1 & l) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Is(u, l, 0, null)),
                      (e = Fs(e, l, t, null)),
                      (i.return = n),
                      (e.return = n),
                      (i.sibling = e),
                      (n.child = i),
                      (n.child.memoizedState = Ii(t)),
                      (n.memoizedState = Fi),
                      e)
                    : Ui(n, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, n, t, r, l, o, i) {
              if (t)
                return 256 & n.flags
                  ? ((n.flags &= -257), Vi(e, n, i, (r = fi(Error(a(422))))))
                  : null !== n.memoizedState
                  ? ((n.child = e.child), (n.flags |= 128), null)
                  : ((o = r.fallback),
                    (l = n.mode),
                    (r = Is(
                      { mode: 'visible', children: r.children },
                      l,
                      0,
                      null
                    )),
                    ((o = Fs(o, l, i, null)).flags |= 2),
                    (r.return = n),
                    (o.return = n),
                    (r.sibling = o),
                    (n.child = r),
                    0 !== (1 & n.mode) && Xa(n, e.child, null, i),
                    (n.child.memoizedState = Ii(i)),
                    (n.memoizedState = Fi),
                    o);
              if (0 === (1 & n.mode)) return Vi(e, n, i, null);
              if ('$!' === l.data) {
                if ((r = l.nextSibling && l.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Vi(e, n, i, (r = fi((o = Error(a(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), ki || u)) {
                if (null !== (r = Lu)) {
                  switch (i & -i) {
                    case 4:
                      l = 2;
                      break;
                    case 16:
                      l = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      l = 32;
                      break;
                    case 536870912:
                      l = 268435456;
                      break;
                    default:
                      l = 0;
                  }
                  0 !== (l = 0 !== (l & (r.suspendedLanes | i)) ? 0 : l) &&
                    l !== o.retryLane &&
                    ((o.retryLane = l), za(e, l), rs(r, e, l, -1));
                }
                return vs(), Vi(e, n, i, (r = fi(Error(a(421)))));
              }
              return '$?' === l.data
                ? ((n.flags |= 128),
                  (n.child = e.child),
                  (n = Ps.bind(null, e)),
                  (l._reactRetry = n),
                  null)
                : ((e = o.treeContext),
                  (ra = sl(l.nextSibling)),
                  (ta = n),
                  (la = !0),
                  (aa = null),
                  null !== e &&
                    ((ql[Kl++] = Xl),
                    (ql[Kl++] = Gl),
                    (ql[Kl++] = Yl),
                    (Xl = e.id),
                    (Gl = e.overflow),
                    (Yl = n)),
                  (n = Ui(n, r.children)),
                  (n.flags |= 4096),
                  n);
            })(e, n, u, l, r, o, t);
          if (i) {
            (i = l.fallback), (u = n.mode), (r = (o = e.child).sibling);
            var s = { mode: 'hidden', children: l.children };
            return (
              0 === (1 & u) && n.child !== o
                ? (((l = n.child).childLanes = 0),
                  (l.pendingProps = s),
                  (n.deletions = null))
                : ((l = Rs(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Rs(r, i))
                : ((i = Fs(i, u, t, null)).flags |= 2),
              (i.return = n),
              (l.return = n),
              (l.sibling = i),
              (n.child = l),
              (l = i),
              (i = n.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ii(t)
                  : {
                      baseLanes: u.baseLanes | t,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~t),
              (n.memoizedState = Fi),
              l
            );
          }
          return (
            (e = (i = e.child).sibling),
            (l = Rs(i, { mode: 'visible', children: l.children })),
            0 === (1 & n.mode) && (l.lanes = t),
            (l.return = n),
            (l.sibling = null),
            null !== e &&
              (null === (t = n.deletions)
                ? ((n.deletions = [e]), (n.flags |= 16))
                : t.push(e)),
            (n.child = l),
            (n.memoizedState = null),
            l
          );
        }
        function Ui(e, n) {
          return (
            ((n = Is(
              { mode: 'visible', children: n },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = n)
          );
        }
        function Vi(e, n, t, r) {
          return (
            null !== r && ma(r),
            Xa(n, e.child, null, t),
            ((e = Ui(n, n.pendingProps.children)).flags |= 2),
            (n.memoizedState = null),
            e
          );
        }
        function Wi(e, n, t) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n), xa(e.return, n, t);
        }
        function Ai(e, n, t, r, l) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: t,
                tailMode: l,
              })
            : ((a.isBackwards = n),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = t),
              (a.tailMode = l));
        }
        function Bi(e, n, t) {
          var r = n.pendingProps,
            l = r.revealOrder,
            a = r.tail;
          if ((wi(e, n, r.children, t), 0 !== (2 & (r = io.current))))
            (r = (1 & r) | 2), (n.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = n.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Wi(e, t, n);
                else if (19 === e.tag) Wi(e, t, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_l(io, r), 0 === (1 & n.mode))) n.memoizedState = null;
          else
            switch (l) {
              case 'forwards':
                for (t = n.child, l = null; null !== t; )
                  null !== (e = t.alternate) && null === uo(e) && (l = t),
                    (t = t.sibling);
                null === (t = l)
                  ? ((l = n.child), (n.child = null))
                  : ((l = t.sibling), (t.sibling = null)),
                  Ai(n, !1, l, t, a);
                break;
              case 'backwards':
                for (t = null, l = n.child, n.child = null; null !== l; ) {
                  if (null !== (e = l.alternate) && null === uo(e)) {
                    n.child = l;
                    break;
                  }
                  (e = l.sibling), (l.sibling = t), (t = l), (l = e);
                }
                Ai(n, !0, t, null, a);
                break;
              case 'together':
                Ai(n, !1, null, null, void 0);
                break;
              default:
                n.memoizedState = null;
            }
          return n.child;
        }
        function $i(e, n) {
          0 === (1 & n.mode) &&
            null !== e &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
        }
        function Hi(e, n, t) {
          if (
            (null !== e && (n.dependencies = e.dependencies),
            (Iu |= n.lanes),
            0 === (t & n.childLanes))
          )
            return null;
          if (null !== e && n.child !== e.child) throw Error(a(153));
          if (null !== n.child) {
            for (
              t = Rs((e = n.child), e.pendingProps), n.child = t, t.return = n;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((t = t.sibling = Rs(e, e.pendingProps)).return = n);
            t.sibling = null;
          }
          return n.child;
        }
        function Qi(e, n) {
          if (!la)
            switch (e.tailMode) {
              case 'hidden':
                n = e.tail;
                for (var t = null; null !== n; )
                  null !== n.alternate && (t = n), (n = n.sibling);
                null === t ? (e.tail = null) : (t.sibling = null);
                break;
              case 'collapsed':
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r
                  ? n || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qi(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            r = 0;
          if (n)
            for (var l = e.child; null !== l; )
              (t |= l.lanes | l.childLanes),
                (r |= 14680064 & l.subtreeFlags),
                (r |= 14680064 & l.flags),
                (l.return = e),
                (l = l.sibling);
          else
            for (l = e.child; null !== l; )
              (t |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = t), n;
        }
        function Ki(e, n, t) {
          var r = n.pendingProps;
          switch ((na(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qi(n), null;
            case 1:
            case 17:
              return Tl(n.type) && Ol(), qi(n), null;
            case 3:
              return (
                (r = n.stateNode),
                lo(),
                Cl(zl),
                Cl(Pl),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(n)
                    ? (n.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & n.flags)) ||
                      ((n.flags |= 1024),
                      null !== aa && (is(aa), (aa = null)))),
                Oi(e, n),
                qi(n),
                null
              );
            case 5:
              oo(n);
              var l = to(no.current);
              if (((t = n.type), null !== e && null != n.stateNode))
                Ri(e, n, t, r, l),
                  e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              else {
                if (!r) {
                  if (null === n.stateNode) throw Error(a(166));
                  return qi(n), null;
                }
                if (((e = to(Ja.current)), fa(n))) {
                  (r = n.stateNode), (t = n.type);
                  var o = n.memoizedProps;
                  switch (
                    ((r[dl] = n), (r[pl] = o), (e = 0 !== (1 & n.mode)), t)
                  ) {
                    case 'dialog':
                      Ur('cancel', r), Ur('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Ur('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (l = 0; l < Mr.length; l++) Ur(Mr[l], r);
                      break;
                    case 'source':
                      Ur('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Ur('error', r), Ur('load', r);
                      break;
                    case 'details':
                      Ur('toggle', r);
                      break;
                    case 'input':
                      X(r, o), Ur('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ur('invalid', r);
                      break;
                    case 'textarea':
                      le(r, o), Ur('invalid', r);
                  }
                  for (var u in (ye(t, o), (l = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      'children' === u
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (l = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (l = ['children', '' + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          'onScroll' === u &&
                          Ur('scroll', r);
                    }
                  switch (t) {
                    case 'input':
                      Q(r), J(r, o, !0);
                      break;
                    case 'textarea':
                      Q(r), oe(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = l), (n.updateQueue = r), null !== r && (n.flags |= 4);
                } else {
                  (u = 9 === l.nodeType ? l : l.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = ie(t)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === t
                        ? (((e = u.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = u.createElement(t, { is: r.is }))
                        : ((e = u.createElement(t)),
                          'select' === t &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, t)),
                    (e[dl] = n),
                    (e[pl] = r),
                    Ti(e, n, !1, !1),
                    (n.stateNode = e);
                  e: {
                    switch (((u = be(t, r)), t)) {
                      case 'dialog':
                        Ur('cancel', e), Ur('close', e), (l = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Ur('load', e), (l = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (l = 0; l < Mr.length; l++) Ur(Mr[l], e);
                        l = r;
                        break;
                      case 'source':
                        Ur('error', e), (l = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Ur('error', e), Ur('load', e), (l = r);
                        break;
                      case 'details':
                        Ur('toggle', e), (l = r);
                        break;
                      case 'input':
                        X(e, r), (l = Y(e, r)), Ur('invalid', e);
                        break;
                      case 'option':
                      default:
                        l = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (l = I({}, r, { value: void 0 })),
                          Ur('invalid', e);
                        break;
                      case 'textarea':
                        le(e, r), (l = re(e, r)), Ur('invalid', e);
                    }
                    for (o in (ye(t, l), (s = l)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        'style' === o
                          ? ve(e, c)
                          : 'dangerouslySetInnerHTML' === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : 'children' === o
                          ? 'string' === typeof c
                            ? ('textarea' !== t || '' !== c) && de(e, c)
                            : 'number' === typeof c && de(e, '' + c)
                          : 'suppressContentEditableWarning' !== o &&
                            'suppressHydrationWarning' !== o &&
                            'autoFocus' !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && 'onScroll' === o && Ur('scroll', e)
                              : null != c && b(e, o, c, u));
                      }
                    switch (t) {
                      case 'input':
                        Q(e), J(e, r, !1);
                        break;
                      case 'textarea':
                        Q(e), oe(e);
                        break;
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + $(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? te(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              te(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof l.onClick && (e.onclick = Jr);
                    }
                    switch (t) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (n.flags |= 4);
                }
                null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              }
              return qi(n), null;
            case 6:
              if (e && null != n.stateNode) Mi(e, n, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === n.stateNode)
                  throw Error(a(166));
                if (((t = to(no.current)), to(Ja.current), fa(n))) {
                  if (
                    ((r = n.stateNode),
                    (t = n.memoizedProps),
                    (r[dl] = n),
                    (o = r.nodeValue !== t) && null !== (e = ta))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, t, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, t, 0 !== (1 & e.mode));
                    }
                  o && (n.flags |= 4);
                } else
                  ((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(
                    r
                  ))[dl] = n),
                    (n.stateNode = r);
              }
              return qi(n), null;
            case 13:
              if (
                (Cl(io),
                (r = n.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  la &&
                  null !== ra &&
                  0 !== (1 & n.mode) &&
                  0 === (128 & n.flags)
                )
                  da(), pa(), (n.flags |= 98560), (o = !1);
                else if (((o = fa(n)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = n.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[dl] = n;
                  } else
                    pa(),
                      0 === (128 & n.flags) && (n.memoizedState = null),
                      (n.flags |= 4);
                  qi(n), (o = !1);
                } else null !== aa && (is(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & n.flags ? n : null;
              }
              return 0 !== (128 & n.flags)
                ? ((n.lanes = t), n)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((n.child.flags |= 8192),
                    0 !== (1 & n.mode) &&
                      (null === e || 0 !== (1 & io.current)
                        ? 0 === Mu && (Mu = 3)
                        : vs())),
                  null !== n.updateQueue && (n.flags |= 4),
                  qi(n),
                  null);
            case 4:
              return (
                lo(),
                Oi(e, n),
                null === e && Ar(n.stateNode.containerInfo),
                qi(n),
                null
              );
            case 10:
              return Sa(n.type._context), qi(n), null;
            case 19:
              if ((Cl(io), null === (o = n.memoizedState))) return qi(n), null;
              if (((r = 0 !== (128 & n.flags)), null === (u = o.rendering)))
                if (r) Qi(o, !1);
                else {
                  if (0 !== Mu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = n.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          n.flags |= 128,
                            Qi(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((n.updateQueue = r), (n.flags |= 4)),
                            n.subtreeFlags = 0,
                            r = t,
                            t = n.child;
                          null !== t;

                        )
                          (e = r),
                            ((o = t).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (t = t.sibling);
                        return _l(io, (1 & io.current) | 2), n.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Bu &&
                    ((n.flags |= 128),
                    (r = !0),
                    Qi(o, !1),
                    (n.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((n.flags |= 128),
                      (r = !0),
                      null !== (t = e.updateQueue) &&
                        ((n.updateQueue = t), (n.flags |= 4)),
                      Qi(o, !0),
                      null === o.tail &&
                        'hidden' === o.tailMode &&
                        !u.alternate &&
                        !la)
                    )
                      return qi(n), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Bu &&
                      1073741824 !== t &&
                      ((n.flags |= 128),
                      (r = !0),
                      Qi(o, !1),
                      (n.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = n.child), (n.child = u))
                  : (null !== (t = o.last) ? (t.sibling = u) : (n.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((n = o.tail),
                  (o.rendering = n),
                  (o.tail = n.sibling),
                  (o.renderingStartTime = Ge()),
                  (n.sibling = null),
                  (t = io.current),
                  _l(io, r ? (1 & t) | 2 : 1 & t),
                  n)
                : (qi(n), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== n.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (n.flags |= 8192),
                r && 0 !== (1 & n.mode)
                  ? 0 !== (1073741824 & Ou) &&
                    (qi(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                  : qi(n),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, n.tag));
        }
        function Yi(e, n) {
          switch ((na(n), n.tag)) {
            case 1:
              return (
                Tl(n.type) && Ol(),
                65536 & (e = n.flags)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 3:
              return (
                lo(),
                Cl(zl),
                Cl(Pl),
                co(),
                0 !== (65536 & (e = n.flags)) && 0 === (128 & e)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 5:
              return oo(n), null;
            case 13:
              if (
                (Cl(io),
                null !== (e = n.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === n.alternate) throw Error(a(340));
                pa();
              }
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 19:
              return Cl(io), null;
            case 4:
              return lo(), null;
            case 10:
              return Sa(n.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Ti = function (e, n) {
          for (var t = n.child; null !== t; ) {
            if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }),
          (Oi = function () {}),
          (Ri = function (e, n, t, r) {
            var l = e.memoizedProps;
            if (l !== r) {
              (e = n.stateNode), to(Ja.current);
              var a,
                o = null;
              switch (t) {
                case 'input':
                  (l = Y(e, l)), (r = Y(e, r)), (o = []);
                  break;
                case 'select':
                  (l = I({}, l, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case 'textarea':
                  (l = re(e, l)), (r = re(e, r)), (o = []);
                  break;
                default:
                  'function' !== typeof l.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(t, r), (t = null), l))
                if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
                  if ('style' === c) {
                    var u = l[c];
                    for (a in u)
                      u.hasOwnProperty(a) && (t || (t = {}), (t[a] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != l ? l[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ('style' === c)
                    if (u) {
                      for (a in u)
                        !u.hasOwnProperty(a) ||
                          (s && s.hasOwnProperty(a)) ||
                          (t || (t = {}), (t[a] = ''));
                      for (a in s)
                        s.hasOwnProperty(a) &&
                          u[a] !== s[a] &&
                          (t || (t = {}), (t[a] = s[a]));
                    } else t || (o || (o = []), o.push(c, t)), (t = s);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : 'children' === c
                      ? ('string' !== typeof s && 'number' !== typeof s) ||
                        (o = o || []).push(c, '' + s)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && 'onScroll' === c && Ur('scroll', e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s));
              }
              t && (o = o || []).push('style', t);
              var c = o;
              (n.updateQueue = c) && (n.flags |= 4);
            }
          }),
          (Mi = function (e, n, t, r) {
            t !== r && (n.flags |= 4);
          });
        var Xi = !1,
          Gi = !1,
          Zi = 'function' === typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function eu(e, n) {
          var t = e.ref;
          if (null !== t)
            if ('function' === typeof t)
              try {
                t(null);
              } catch (r) {
                Cs(e, n, r);
              }
            else t.current = null;
        }
        function nu(e, n, t) {
          try {
            t();
          } catch (r) {
            Cs(e, n, r);
          }
        }
        var tu = !1;
        function ru(e, n, t) {
          var r = n.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var l = (r = r.next);
            do {
              if ((l.tag & e) === e) {
                var a = l.destroy;
                (l.destroy = void 0), void 0 !== a && nu(n, t, a);
              }
              l = l.next;
            } while (l !== r);
          }
        }
        function lu(e, n) {
          if (
            null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)
          ) {
            var t = (n = n.next);
            do {
              if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
              }
              t = t.next;
            } while (t !== n);
          }
        }
        function au(e) {
          var n = e.ref;
          if (null !== n) {
            var t = e.stateNode;
            e.tag, (e = t), 'function' === typeof n ? n(e) : (n.current = e);
          }
        }
        function ou(e) {
          var n = e.alternate;
          null !== n && ((e.alternate = null), ou(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (n = e.stateNode) &&
              (delete n[dl],
              delete n[pl],
              delete n[hl],
              delete n[vl],
              delete n[gl]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              n
                ? 8 === t.nodeType
                  ? t.parentNode.insertBefore(e, n)
                  : t.insertBefore(e, n)
                : (8 === t.nodeType
                    ? (n = t.parentNode).insertBefore(e, t)
                    : (n = t).appendChild(e),
                  (null !== (t = t._reactRootContainer) && void 0 !== t) ||
                    null !== n.onclick ||
                    (n.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, n, t), e = e.sibling; null !== e; )
              su(e, n, t), (e = e.sibling);
        }
        function cu(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, n, t), e = e.sibling; null !== e; )
              cu(e, n, t), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, n, t) {
          for (t = t.child; null !== t; ) mu(e, n, t), (t = t.sibling);
        }
        function mu(e, n, t) {
          if (an && 'function' === typeof an.onCommitFiberUnmount)
            try {
              an.onCommitFiberUnmount(ln, t);
            } catch (i) {}
          switch (t.tag) {
            case 5:
              Gi || eu(t, n);
            case 6:
              var r = fu,
                l = du;
              (fu = null),
                pu(e, n, t),
                (du = l),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (t = t.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(t)
                        : e.removeChild(t))
                    : fu.removeChild(t.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (t = t.stateNode),
                    8 === e.nodeType
                      ? ul(e.parentNode, t)
                      : 1 === e.nodeType && ul(e, t),
                    Bn(e))
                  : ul(fu, t.stateNode));
              break;
            case 4:
              (r = fu),
                (l = du),
                (fu = t.stateNode.containerInfo),
                (du = !0),
                pu(e, n, t),
                (fu = r),
                (du = l);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gi &&
                null !== (r = t.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                l = r = r.next;
                do {
                  var a = l,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      nu(t, n, o),
                    (l = l.next);
                } while (l !== r);
              }
              pu(e, n, t);
              break;
            case 1:
              if (
                !Gi &&
                (eu(t, n),
                'function' === typeof (r = t.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = t.memoizedProps),
                    (r.state = t.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Cs(t, n, i);
                }
              pu(e, n, t);
              break;
            case 21:
              pu(e, n, t);
              break;
            case 22:
              1 & t.mode
                ? ((Gi = (r = Gi) || null !== t.memoizedState),
                  pu(e, n, t),
                  (Gi = r))
                : pu(e, n, t);
              break;
            default:
              pu(e, n, t);
          }
        }
        function hu(e) {
          var n = e.updateQueue;
          if (null !== n) {
            e.updateQueue = null;
            var t = e.stateNode;
            null === t && (t = e.stateNode = new Zi()),
              n.forEach(function (n) {
                var r = zs.bind(null, e, n);
                t.has(n) || (t.add(n), n.then(r, r));
              });
          }
        }
        function vu(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var l = t[r];
              try {
                var o = e,
                  i = n,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(a(160));
                mu(o, i, l), (fu = null), (du = !1);
                var s = l.alternate;
                null !== s && (s.return = null), (l.return = null);
              } catch (c) {
                Cs(l, n, c);
              }
            }
          if (12854 & n.subtreeFlags)
            for (n = n.child; null !== n; ) gu(n, e), (n = n.sibling);
        }
        function gu(e, n) {
          var t = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(n, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), lu(3, e);
                } catch (v) {
                  Cs(e, e.return, v);
                }
                try {
                  ru(5, e, e.return);
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              break;
            case 1:
              vu(n, e), yu(e), 512 & r && null !== t && eu(t, t.return);
              break;
            case 5:
              if (
                (vu(n, e),
                yu(e),
                512 & r && null !== t && eu(t, t.return),
                32 & e.flags)
              ) {
                var l = e.stateNode;
                try {
                  de(l, '');
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              if (4 & r && null != (l = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== t ? t.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    'input' === u &&
                      'radio' === o.type &&
                      null != o.name &&
                      G(l, o),
                      be(u, i);
                    var c = be(u, o);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      'style' === f
                        ? ve(l, d)
                        : 'dangerouslySetInnerHTML' === f
                        ? fe(l, d)
                        : 'children' === f
                        ? de(l, d)
                        : b(l, f, d, c);
                    }
                    switch (u) {
                      case 'input':
                        Z(l, o);
                        break;
                      case 'textarea':
                        ae(l, o);
                        break;
                      case 'select':
                        var p = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        null != m
                          ? te(l, !!o.multiple, m, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? te(l, !!o.multiple, o.defaultValue, !0)
                              : te(l, !!o.multiple, o.multiple ? [] : '', !1));
                    }
                    l[pl] = o;
                  } catch (v) {
                    Cs(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vu(n, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                  l.nodeValue = o;
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (vu(n, e),
                yu(e),
                4 & r && null !== t && t.memoizedState.isDehydrated)
              )
                try {
                  Bn(n.containerInfo);
                } catch (v) {
                  Cs(e, e.return, v);
                }
              break;
            case 4:
            default:
              vu(n, e), yu(e);
              break;
            case 13:
              vu(n, e),
                yu(e),
                8192 & (l = e.child).flags &&
                  ((o = null !== l.memoizedState),
                  (l.stateNode.isHidden = o),
                  !o ||
                    (null !== l.alternate &&
                      null !== l.alternate.memoizedState) ||
                    (Au = Ge())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== t && null !== t.memoizedState),
                1 & e.mode
                  ? ((Gi = (c = Gi) || f), vu(n, e), (Gi = c))
                  : vu(n, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Ji = e, f = e.child; null !== f; ) {
                    for (d = Ji = f; null !== Ji; ) {
                      switch (((m = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var h = p.stateNode;
                          if ('function' === typeof h.componentWillUnmount) {
                            (r = p), (t = p.return);
                            try {
                              (n = r),
                                (h.props = n.memoizedProps),
                                (h.state = n.memoizedState),
                                h.componentWillUnmount();
                            } catch (v) {
                              Cs(r, t, v);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Su(d);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Ji = m)) : Su(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (l = d.stateNode),
                          c
                            ? 'function' === typeof (o = l.style).setProperty
                              ? o.setProperty('display', 'none', 'important')
                              : (o.display = 'none')
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty('display')
                                  ? s.display
                                  : null),
                              (u.style.display = he('display', i)));
                      } catch (v) {
                        Cs(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? '' : d.memoizedProps;
                      } catch (v) {
                        Cs(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(n, e), yu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function yu(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (iu(t)) {
                    var r = t;
                    break e;
                  }
                  t = t.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var l = r.stateNode;
                  32 & r.flags && (de(l, ''), (r.flags &= -33)),
                    cu(e, uu(e), l);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  su(e, uu(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (i) {
              Cs(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function bu(e, n, t) {
          (Ji = e), ku(e, n, t);
        }
        function ku(e, n, t) {
          for (var r = 0 !== (1 & e.mode); null !== Ji; ) {
            var l = Ji,
              a = l.child;
            if (22 === l.tag && r) {
              var o = null !== l.memoizedState || Xi;
              if (!o) {
                var i = l.alternate,
                  u = (null !== i && null !== i.memoizedState) || Gi;
                i = Xi;
                var s = Gi;
                if (((Xi = o), (Gi = u) && !s))
                  for (Ji = l; null !== Ji; )
                    (u = (o = Ji).child),
                      22 === o.tag && null !== o.memoizedState
                        ? xu(l)
                        : null !== u
                        ? ((u.return = o), (Ji = u))
                        : xu(l);
                for (; null !== a; ) (Ji = a), ku(a, n, t), (a = a.sibling);
                (Ji = l), (Xi = i), (Gi = s);
              }
              wu(e);
            } else
              0 !== (8772 & l.subtreeFlags) && null !== a
                ? ((a.return = l), (Ji = a))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            if (0 !== (8772 & n.flags)) {
              var t = n.alternate;
              try {
                if (0 !== (8772 & n.flags))
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || lu(5, n);
                      break;
                    case 1:
                      var r = n.stateNode;
                      if (4 & n.flags && !Gi)
                        if (null === t) r.componentDidMount();
                        else {
                          var l =
                            n.elementType === n.type
                              ? t.memoizedProps
                              : va(n.type, t.memoizedProps);
                          r.componentDidUpdate(
                            l,
                            t.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = n.updateQueue;
                      null !== o && Da(n, o, r);
                      break;
                    case 3:
                      var i = n.updateQueue;
                      if (null !== i) {
                        if (((t = null), null !== n.child))
                          switch (n.child.tag) {
                            case 5:
                            case 1:
                              t = n.child.stateNode;
                          }
                        Da(n, i, t);
                      }
                      break;
                    case 5:
                      var u = n.stateNode;
                      if (null === t && 4 & n.flags) {
                        t = u;
                        var s = n.memoizedProps;
                        switch (n.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            s.autoFocus && t.focus();
                            break;
                          case 'img':
                            s.src && (t.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === n.memoizedState) {
                        var c = n.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bn(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Gi || (512 & n.flags && au(n));
              } catch (p) {
                Cs(n, n.return, p);
              }
            }
            if (n === e) {
              Ji = null;
              break;
            }
            if (null !== (t = n.sibling)) {
              (t.return = n.return), (Ji = t);
              break;
            }
            Ji = n.return;
          }
        }
        function Su(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            if (n === e) {
              Ji = null;
              break;
            }
            var t = n.sibling;
            if (null !== t) {
              (t.return = n.return), (Ji = t);
              break;
            }
            Ji = n.return;
          }
        }
        function xu(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            try {
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  var t = n.return;
                  try {
                    lu(4, n);
                  } catch (u) {
                    Cs(n, t, u);
                  }
                  break;
                case 1:
                  var r = n.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var l = n.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Cs(n, l, u);
                    }
                  }
                  var a = n.return;
                  try {
                    au(n);
                  } catch (u) {
                    Cs(n, a, u);
                  }
                  break;
                case 5:
                  var o = n.return;
                  try {
                    au(n);
                  } catch (u) {
                    Cs(n, o, u);
                  }
              }
            } catch (u) {
              Cs(n, n.return, u);
            }
            if (n === e) {
              Ji = null;
              break;
            }
            var i = n.sibling;
            if (null !== i) {
              (i.return = n.return), (Ji = i);
              break;
            }
            Ji = n.return;
          }
        }
        var Eu,
          Cu = Math.ceil,
          _u = k.ReactCurrentDispatcher,
          Nu = k.ReactCurrentOwner,
          Pu = k.ReactCurrentBatchConfig,
          zu = 0,
          Lu = null,
          ju = null,
          Tu = 0,
          Ou = 0,
          Ru = El(0),
          Mu = 0,
          Fu = null,
          Iu = 0,
          Du = 0,
          Uu = 0,
          Vu = null,
          Wu = null,
          Au = 0,
          Bu = 1 / 0,
          $u = null,
          Hu = !1,
          Qu = null,
          qu = null,
          Ku = !1,
          Yu = null,
          Xu = 0,
          Gu = 0,
          Zu = null,
          Ju = -1,
          es = 0;
        function ns() {
          return 0 !== (6 & zu) ? Ge() : -1 !== Ju ? Ju : (Ju = Ge());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & zu) && 0 !== Tu
            ? Tu & -Tu
            : null !== ha.transition
            ? (0 === es && (es = vn()), es)
            : 0 !== (e = kn)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gn(e.type));
        }
        function rs(e, n, t, r) {
          if (50 < Gu) throw ((Gu = 0), (Zu = null), Error(a(185)));
          yn(e, t, r),
            (0 !== (2 & zu) && e === Lu) ||
              (e === Lu && (0 === (2 & zu) && (Du |= t), 4 === Mu && us(e, Tu)),
              ls(e, r),
              1 === t &&
                0 === zu &&
                0 === (1 & n.mode) &&
                ((Bu = Ge() + 500), Ul && Al()));
        }
        function ls(e, n) {
          var t = e.callbackNode;
          !(function (e, n) {
            for (
              var t = e.suspendedLanes,
                r = e.pingedLanes,
                l = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - on(a),
                i = 1 << o,
                u = l[o];
              -1 === u
                ? (0 !== (i & t) && 0 === (i & r)) || (l[o] = mn(i, n))
                : u <= n && (e.expiredLanes |= i),
                (a &= ~i);
            }
          })(e, n);
          var r = pn(e, e === Lu ? Tu : 0);
          if (0 === r)
            null !== t && Ke(t),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((n = r & -r), e.callbackPriority !== n)) {
            if ((null != t && Ke(t), 1 === n))
              0 === e.tag
                ? (function (e) {
                    (Ul = !0), Wl(e);
                  })(ss.bind(null, e))
                : Wl(ss.bind(null, e)),
                ol(function () {
                  0 === (6 & zu) && Al();
                }),
                (t = null);
            else {
              switch (wn(r)) {
                case 1:
                  t = Je;
                  break;
                case 4:
                  t = en;
                  break;
                case 16:
                default:
                  t = nn;
                  break;
                case 536870912:
                  t = rn;
              }
              t = Ls(t, as.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = t);
          }
        }
        function as(e, n) {
          if (((Ju = -1), (es = 0), 0 !== (6 & zu))) throw Error(a(327));
          var t = e.callbackNode;
          if (xs() && e.callbackNode !== t) return null;
          var r = pn(e, e === Lu ? Tu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n) n = gs(e, r);
          else {
            n = r;
            var l = zu;
            zu |= 2;
            var o = hs();
            for (
              (Lu === e && Tu === n) ||
              (($u = null), (Bu = Ge() + 500), ps(e, n));
              ;

            )
              try {
                bs();
                break;
              } catch (u) {
                ms(e, u);
              }
            wa(),
              (_u.current = o),
              (zu = l),
              null !== ju ? (n = 0) : ((Lu = null), (Tu = 0), (n = Mu));
          }
          if (0 !== n) {
            if (
              (2 === n && 0 !== (l = hn(e)) && ((r = l), (n = os(e, l))),
              1 === n)
            )
              throw ((t = Fu), ps(e, 0), us(e, r), ls(e, Ge()), t);
            if (6 === n) us(e, r);
            else {
              if (
                ((l = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var n = e; ; ) {
                      if (16384 & n.flags) {
                        var t = n.updateQueue;
                        if (null !== t && null !== (t = t.stores))
                          for (var r = 0; r < t.length; r++) {
                            var l = t[r],
                              a = l.getSnapshot;
                            l = l.value;
                            try {
                              if (!ir(a(), l)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
                        (t.return = n), (n = t);
                      else {
                        if (n === e) break;
                        for (; null === n.sibling; ) {
                          if (null === n.return || n.return === e) return !0;
                          n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                      }
                    }
                    return !0;
                  })(l) &&
                  (2 === (n = gs(e, r)) &&
                    0 !== (o = hn(e)) &&
                    ((r = o), (n = os(e, o))),
                  1 === n))
              )
                throw ((t = Fu), ps(e, 0), us(e, r), ls(e, Ge()), t);
              switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Ss(e, Wu, $u);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (n = Au + 500 - Ge()))
                  ) {
                    if (0 !== pn(e, 0)) break;
                    if (((l = e.suspendedLanes) & r) !== r) {
                      ns(), (e.pingedLanes |= e.suspendedLanes & l);
                      break;
                    }
                    e.timeoutHandle = rl(Ss.bind(null, e, Wu, $u), n);
                    break;
                  }
                  Ss(e, Wu, $u);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (n = e.eventTimes, l = -1; 0 < r; ) {
                    var i = 31 - on(r);
                    (o = 1 << i), (i = n[i]) > l && (l = i), (r &= ~o);
                  }
                  if (
                    ((r = l),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = rl(Ss.bind(null, e, Wu, $u), r);
                    break;
                  }
                  Ss(e, Wu, $u);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ls(e, Ge()), e.callbackNode === t ? as.bind(null, e) : null;
        }
        function os(e, n) {
          var t = Vu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, n).flags |= 256),
            2 !== (e = gs(e, n)) && ((n = Wu), (Wu = t), null !== n && is(n)),
            e
          );
        }
        function is(e) {
          null === Wu ? (Wu = e) : Wu.push.apply(Wu, e);
        }
        function us(e, n) {
          for (
            n &= ~Uu,
              n &= ~Du,
              e.suspendedLanes |= n,
              e.pingedLanes &= ~n,
              e = e.expirationTimes;
            0 < n;

          ) {
            var t = 31 - on(n),
              r = 1 << t;
            (e[t] = -1), (n &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & zu)) throw Error(a(327));
          xs();
          var n = pn(e, 0);
          if (0 === (1 & n)) return ls(e, Ge()), null;
          var t = gs(e, n);
          if (0 !== e.tag && 2 === t) {
            var r = hn(e);
            0 !== r && ((n = r), (t = os(e, r)));
          }
          if (1 === t) throw ((t = Fu), ps(e, 0), us(e, n), ls(e, Ge()), t);
          if (6 === t) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = n),
            Ss(e, Wu, $u),
            ls(e, Ge()),
            null
          );
        }
        function cs(e, n) {
          var t = zu;
          zu |= 1;
          try {
            return e(n);
          } finally {
            0 === (zu = t) && ((Bu = Ge() + 500), Ul && Al());
          }
        }
        function fs(e) {
          null !== Yu && 0 === Yu.tag && 0 === (6 & zu) && xs();
          var n = zu;
          zu |= 1;
          var t = Pu.transition,
            r = kn;
          try {
            if (((Pu.transition = null), (kn = 1), e)) return e();
          } finally {
            (kn = r), (Pu.transition = t), 0 === (6 & (zu = n)) && Al();
          }
        }
        function ds() {
          (Ou = Ru.current), Cl(Ru);
        }
        function ps(e, n) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var t = e.timeoutHandle;
          if ((-1 !== t && ((e.timeoutHandle = -1), ll(t)), null !== ju))
            for (t = ju.return; null !== t; ) {
              var r = t;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ol();
                  break;
                case 3:
                  lo(), Cl(zl), Cl(Pl), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  lo();
                  break;
                case 13:
                case 19:
                  Cl(io);
                  break;
                case 10:
                  Sa(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              t = t.return;
            }
          if (
            ((Lu = e),
            (ju = e = Rs(e.current, null)),
            (Tu = Ou = n),
            (Mu = 0),
            (Fu = null),
            (Uu = Du = Iu = 0),
            (Wu = Vu = null),
            null !== _a)
          ) {
            for (n = 0; n < _a.length; n++)
              if (null !== (r = (t = _a[n]).interleaved)) {
                t.interleaved = null;
                var l = r.next,
                  a = t.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = l), (r.next = o);
                }
                t.pending = r;
              }
            _a = null;
          }
          return e;
        }
        function ms(e, n) {
          for (;;) {
            var t = ju;
            try {
              if ((wa(), (fo.current = oi), yo)) {
                for (var r = ho.memoizedState; null !== r; ) {
                  var l = r.queue;
                  null !== l && (l.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((mo = 0),
                (go = vo = ho = null),
                (bo = !1),
                (ko = 0),
                (Nu.current = null),
                null === t || null === t.return)
              ) {
                (Mu = 1), (Fu = n), (ju = null);
                break;
              }
              e: {
                var o = e,
                  i = t.return,
                  u = t,
                  s = n;
                if (
                  ((n = Tu),
                  (u.flags |= 32768),
                  null !== s &&
                    'object' === typeof s &&
                    'function' === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var m = gi(i);
                  if (null !== m) {
                    (m.flags &= -257),
                      yi(m, i, u, 0, n),
                      1 & m.mode && vi(o, c, n),
                      (s = c);
                    var h = (n = m).updateQueue;
                    if (null === h) {
                      var v = new Set();
                      v.add(s), (n.updateQueue = v);
                    } else h.add(s);
                    break e;
                  }
                  if (0 === (1 & n)) {
                    vi(o, c, n), vs();
                    break e;
                  }
                  s = Error(a(426));
                } else if (la && 1 & u.mode) {
                  var g = gi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, n),
                      ma(ci(s, u));
                    break e;
                  }
                }
                (o = s = ci(s, u)),
                  4 !== Mu && (Mu = 2),
                  null === Vu ? (Vu = [o]) : Vu.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (n &= -n),
                        (o.lanes |= n),
                        Fa(o, mi(0, s, n));
                      break e;
                    case 1:
                      u = s;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (n &= -n),
                          (o.lanes |= n),
                          Fa(o, hi(o, u, n));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ws(t);
            } catch (k) {
              (n = k), ju === t && null !== t && (ju = t = t.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = _u.current;
          return (_u.current = oi), null === e ? oi : e;
        }
        function vs() {
          (0 !== Mu && 3 !== Mu && 2 !== Mu) || (Mu = 4),
            null === Lu ||
              (0 === (268435455 & Iu) && 0 === (268435455 & Du)) ||
              us(Lu, Tu);
        }
        function gs(e, n) {
          var t = zu;
          zu |= 2;
          var r = hs();
          for ((Lu === e && Tu === n) || (($u = null), ps(e, n)); ; )
            try {
              ys();
              break;
            } catch (l) {
              ms(e, l);
            }
          if ((wa(), (zu = t), (_u.current = r), null !== ju))
            throw Error(a(261));
          return (Lu = null), (Tu = 0), Mu;
        }
        function ys() {
          for (; null !== ju; ) ks(ju);
        }
        function bs() {
          for (; null !== ju && !Ye(); ) ks(ju);
        }
        function ks(e) {
          var n = Eu(e.alternate, e, Ou);
          (e.memoizedProps = e.pendingProps),
            null === n ? ws(e) : (ju = n),
            (Nu.current = null);
        }
        function ws(e) {
          var n = e;
          do {
            var t = n.alternate;
            if (((e = n.return), 0 === (32768 & n.flags))) {
              if (null !== (t = Ki(t, n, Ou))) return void (ju = t);
            } else {
              if (null !== (t = Yi(t, n)))
                return (t.flags &= 32767), void (ju = t);
              if (null === e) return (Mu = 6), void (ju = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (n = n.sibling)) return void (ju = n);
            ju = n = e;
          } while (null !== n);
          0 === Mu && (Mu = 5);
        }
        function Ss(e, n, t) {
          var r = kn,
            l = Pu.transition;
          try {
            (Pu.transition = null),
              (kn = 1),
              (function (e, n, t, r) {
                do {
                  xs();
                } while (null !== Yu);
                if (0 !== (6 & zu)) throw Error(a(327));
                t = e.finishedWork;
                var l = e.finishedLanes;
                if (null === t) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  t === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = t.lanes | t.childLanes;
                if (
                  ((function (e, n) {
                    var t = e.pendingLanes & ~n;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= n),
                      (e.mutableReadLanes &= n),
                      (e.entangledLanes &= n),
                      (n = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < t; ) {
                      var l = 31 - on(t),
                        a = 1 << l;
                      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~a);
                    }
                  })(e, o),
                  e === Lu && ((ju = Lu = null), (Tu = 0)),
                  (0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags)) ||
                    Ku ||
                    ((Ku = !0),
                    Ls(nn, function () {
                      return xs(), null;
                    })),
                  (o = 0 !== (15990 & t.flags)),
                  0 !== (15990 & t.subtreeFlags) || o)
                ) {
                  (o = Pu.transition), (Pu.transition = null);
                  var i = kn;
                  kn = 1;
                  var u = zu;
                  (zu |= 4),
                    (Nu.current = null),
                    (function (e, n) {
                      if (((el = Hn), pr((e = dr())))) {
                        if ('selectionStart' in e)
                          var t = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (t =
                                ((t = e.ownerDocument) && t.defaultView) ||
                                window).getSelection && t.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              t = r.anchorNode;
                              var l = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                t.nodeType, o.nodeType;
                              } catch (w) {
                                t = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              n: for (;;) {
                                for (
                                  var m;
                                  d !== t ||
                                    (0 !== l && 3 !== d.nodeType) ||
                                    (u = i + l),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (m = d.firstChild);

                                )
                                  (p = d), (d = m);
                                for (;;) {
                                  if (d === e) break n;
                                  if (
                                    (p === t && ++c === l && (u = i),
                                    p === o && ++f === r && (s = i),
                                    null !== (m = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = m;
                              }
                              t =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else t = null;
                          }
                        t = t || { start: 0, end: 0 };
                      } else t = null;
                      for (
                        nl = { focusedElem: e, selectionRange: t },
                          Hn = !1,
                          Ji = n;
                        null !== Ji;

                      )
                        if (
                          ((e = (n = Ji).child),
                          0 !== (1028 & n.subtreeFlags) && null !== e)
                        )
                          (e.return = n), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            n = Ji;
                            try {
                              var h = n.alternate;
                              if (0 !== (1024 & n.flags))
                                switch (n.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var v = h.memoizedProps,
                                        g = h.memoizedState,
                                        y = n.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          n.elementType === n.type
                                            ? v
                                            : va(n.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var k = n.stateNode.containerInfo;
                                    1 === k.nodeType
                                      ? (k.textContent = '')
                                      : 9 === k.nodeType &&
                                        k.documentElement &&
                                        k.removeChild(k.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Cs(n, n.return, w);
                            }
                            if (null !== (e = n.sibling)) {
                              (e.return = n.return), (Ji = e);
                              break;
                            }
                            Ji = n.return;
                          }
                      (h = tu), (tu = !1);
                    })(e, t),
                    gu(t, e),
                    mr(nl),
                    (Hn = !!el),
                    (nl = el = null),
                    (e.current = t),
                    bu(t, e, l),
                    Xe(),
                    (zu = u),
                    (kn = i),
                    (Pu.transition = o);
                } else e.current = t;
                if (
                  (Ku && ((Ku = !1), (Yu = e), (Xu = l)),
                  (o = e.pendingLanes),
                  0 === o && (qu = null),
                  (function (e) {
                    if (an && 'function' === typeof an.onCommitFiberRoot)
                      try {
                        an.onCommitFiberRoot(
                          ln,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (n) {}
                  })(t.stateNode),
                  ls(e, Ge()),
                  null !== n)
                )
                  for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                    (l = n[t]),
                      r(l.value, { componentStack: l.stack, digest: l.digest });
                if (Hu) throw ((Hu = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Xu) && 0 !== e.tag && xs(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Zu
                      ? Gu++
                      : ((Gu = 0), (Zu = e))
                    : (Gu = 0),
                  Al();
              })(e, n, t, r);
          } finally {
            (Pu.transition = l), (kn = r);
          }
          return null;
        }
        function xs() {
          if (null !== Yu) {
            var e = wn(Xu),
              n = Pu.transition,
              t = kn;
            try {
              if (((Pu.transition = null), (kn = 16 > e ? 16 : e), null === Yu))
                var r = !1;
              else {
                if (((e = Yu), (Yu = null), (Xu = 0), 0 !== (6 & zu)))
                  throw Error(a(331));
                var l = zu;
                for (zu |= 4, Ji = e.current; null !== Ji; ) {
                  var o = Ji,
                    i = o.child;
                  if (0 !== (16 & Ji.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Ji = c; null !== Ji; ) {
                          var f = Ji;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Ji = d);
                          else
                            for (; null !== Ji; ) {
                              var p = (f = Ji).sibling,
                                m = f.return;
                              if ((ou(f), f === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Ji = p);
                                break;
                              }
                              Ji = m;
                            }
                        }
                      }
                      var h = o.alternate;
                      if (null !== h) {
                        var v = h.child;
                        if (null !== v) {
                          h.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Ji = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 !== (2048 & (o = Ji).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Ji = y);
                        break e;
                      }
                      Ji = o.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var k = (i = Ji).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== k)
                    (k.return = i), (Ji = k);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 !== (2048 & (u = Ji).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              lu(9, u);
                          }
                        } catch (S) {
                          Cs(u, u.return, S);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Ji = w);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (
                  ((zu = l),
                  Al(),
                  an && 'function' === typeof an.onPostCommitFiberRoot)
                )
                  try {
                    an.onPostCommitFiberRoot(ln, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (kn = t), (Pu.transition = n);
            }
          }
          return !1;
        }
        function Es(e, n, t) {
          (e = Ra(e, (n = mi(0, (n = ci(t, n)), 1)), 1)),
            (n = ns()),
            null !== e && (yn(e, 1, n), ls(e, n));
        }
        function Cs(e, n, t) {
          if (3 === e.tag) Es(e, e, t);
          else
            for (; null !== n; ) {
              if (3 === n.tag) {
                Es(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  'function' === typeof n.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  (n = Ra(n, (e = hi(n, (e = ci(t, e)), 1)), 1)),
                    (e = ns()),
                    null !== n && (yn(n, 1, e), ls(n, e));
                  break;
                }
              }
              n = n.return;
            }
        }
        function _s(e, n, t) {
          var r = e.pingCache;
          null !== r && r.delete(n),
            (n = ns()),
            (e.pingedLanes |= e.suspendedLanes & t),
            Lu === e &&
              (Tu & t) === t &&
              (4 === Mu ||
              (3 === Mu && (130023424 & Tu) === Tu && 500 > Ge() - Au)
                ? ps(e, 0)
                : (Uu |= t)),
            ls(e, n);
        }
        function Ns(e, n) {
          0 === n &&
            (0 === (1 & e.mode)
              ? (n = 1)
              : ((n = fn), 0 === (130023424 & (fn <<= 1)) && (fn = 4194304)));
          var t = ns();
          null !== (e = za(e, n)) && (yn(e, n, t), ls(e, t));
        }
        function Ps(e) {
          var n = e.memoizedState,
            t = 0;
          null !== n && (t = n.retryLane), Ns(e, t);
        }
        function zs(e, n) {
          var t = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                l = e.memoizedState;
              null !== l && (t = l.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(n), Ns(e, t);
        }
        function Ls(e, n) {
          return qe(e, n);
        }
        function js(e, n, t, r) {
          (this.tag = e),
            (this.key = t),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ts(e, n, t, r) {
          return new js(e, n, t, r);
        }
        function Os(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rs(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = Ts(e.tag, n, e.key, e.mode)).elementType =
                  e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
              : ((t.pendingProps = n),
                (t.type = e.type),
                (t.flags = 0),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
            (t.flags = 14680064 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies =
              null === n
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
          );
        }
        function Ms(e, n, t, r, l, o) {
          var i = 2;
          if (((r = e), 'function' === typeof e)) Os(e) && (i = 1);
          else if ('string' === typeof e) i = 5;
          else
            e: switch (e) {
              case x:
                return Fs(t.children, l, o, n);
              case E:
                (i = 8), (l |= 8);
                break;
              case C:
                return (
                  ((e = Ts(12, t, n, 2 | l)).elementType = C), (e.lanes = o), e
                );
              case z:
                return (
                  ((e = Ts(13, t, n, l)).elementType = z), (e.lanes = o), e
                );
              case L:
                return (
                  ((e = Ts(19, t, n, l)).elementType = L), (e.lanes = o), e
                );
              case O:
                return Is(t, l, o, n);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      i = 10;
                      break e;
                    case N:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case j:
                      i = 14;
                      break e;
                    case T:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ''));
            }
          return (
            ((n = Ts(i, t, n, l)).elementType = e),
            (n.type = r),
            (n.lanes = o),
            n
          );
        }
        function Fs(e, n, t, r) {
          return ((e = Ts(7, e, r, n)).lanes = t), e;
        }
        function Is(e, n, t, r) {
          return (
            ((e = Ts(22, e, r, n)).elementType = O),
            (e.lanes = t),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ds(e, n, t) {
          return ((e = Ts(6, e, null, n)).lanes = t), e;
        }
        function Us(e, n, t) {
          return (
            ((n = Ts(
              4,
              null !== e.children ? e.children : [],
              e.key,
              n
            )).lanes = t),
            (n.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            n
          );
        }
        function Vs(e, n, t, r, l) {
          (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gn(0)),
            (this.expirationTimes = gn(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gn(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = l),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ws(e, n, t, r, l, a, o, i, u) {
          return (
            (e = new Vs(e, n, t, i, u)),
            1 === n ? ((n = 1), !0 === a && (n |= 8)) : (n = 0),
            (a = Ts(3, null, null, n)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: t,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            ja(a),
            e
          );
        }
        function As(e) {
          if (!e) return Nl;
          e: {
            if (Ae((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var n = e;
            do {
              switch (n.tag) {
                case 3:
                  n = n.stateNode.context;
                  break e;
                case 1:
                  if (Tl(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              n = n.return;
            } while (null !== n);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var t = e.type;
            if (Tl(t)) return Ml(e, t, n);
          }
          return n;
        }
        function Bs(e, n, t, r, l, a, o, i, u) {
          return (
            ((e = Ws(t, r, !0, e, 0, a, 0, i, u)).context = As(null)),
            (t = e.current),
            ((a = Oa((r = ns()), (l = ts(t)))).callback =
              void 0 !== n && null !== n ? n : null),
            Ra(t, a, l),
            (e.current.lanes = l),
            yn(e, l, r),
            ls(e, r),
            e
          );
        }
        function $s(e, n, t, r) {
          var l = n.current,
            a = ns(),
            o = ts(l);
          return (
            (t = As(t)),
            null === n.context ? (n.context = t) : (n.pendingContext = t),
            ((n = Oa(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (n.callback = r),
            null !== (e = Ra(l, n, o)) && (rs(e, l, o, a), Ma(e, l, o)),
            o
          );
        }
        function Hs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qs(e, n) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
          }
        }
        function qs(e, n) {
          Qs(e, n), (e = e.alternate) && Qs(e, n);
        }
        Eu = function (e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps || zl.current) ki = !0;
            else {
              if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                return (
                  (ki = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        Li(n), pa();
                        break;
                      case 5:
                        ao(n);
                        break;
                      case 1:
                        Tl(n.type) && Fl(n);
                        break;
                      case 4:
                        ro(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = n.type._context,
                          l = n.memoizedProps.value;
                        _l(ga, r._currentValue), (r._currentValue = l);
                        break;
                      case 13:
                        if (null !== (r = n.memoizedState))
                          return null !== r.dehydrated
                            ? (_l(io, 1 & io.current), (n.flags |= 128), null)
                            : 0 !== (t & n.child.childLanes)
                            ? Di(e, n, t)
                            : (_l(io, 1 & io.current),
                              null !== (e = Hi(e, n, t)) ? e.sibling : null);
                        _l(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (t & n.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bi(e, n, t);
                          n.flags |= 128;
                        }
                        if (
                          (null !== (l = n.memoizedState) &&
                            ((l.rendering = null),
                            (l.tail = null),
                            (l.lastEffect = null)),
                          _l(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (n.lanes = 0), Ci(e, n, t);
                    }
                    return Hi(e, n, t);
                  })(e, n, t)
                );
              ki = 0 !== (131072 & e.flags);
            }
          else (ki = !1), la && 0 !== (1048576 & n.flags) && Jl(n, Ql, n.index);
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var r = n.type;
              $i(e, n), (e = n.pendingProps);
              var l = jl(n, Pl.current);
              Ea(n, t), (l = Eo(null, n, r, e, l, t));
              var o = Co();
              return (
                (n.flags |= 1),
                'object' === typeof l &&
                null !== l &&
                'function' === typeof l.render &&
                void 0 === l.$$typeof
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    Tl(r) ? ((o = !0), Fl(n)) : (o = !1),
                    (n.memoizedState =
                      null !== l.state && void 0 !== l.state ? l.state : null),
                    ja(n),
                    (l.updater = Wa),
                    (n.stateNode = l),
                    (l._reactInternals = n),
                    Ha(n, r, e, t),
                    (n = zi(null, n, r, !0, o, t)))
                  : ((n.tag = 0),
                    la && o && ea(n),
                    wi(null, n, l, t),
                    (n = n.child)),
                n
              );
            case 16:
              r = n.elementType;
              e: {
                switch (
                  ($i(e, n),
                  (e = n.pendingProps),
                  (r = (l = r._init)(r._payload)),
                  (n.type = r),
                  (l = n.tag =
                    (function (e) {
                      if ('function' === typeof e) return Os(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = va(r, e)),
                  l)
                ) {
                  case 0:
                    n = Ni(null, n, r, e, t);
                    break e;
                  case 1:
                    n = Pi(null, n, r, e, t);
                    break e;
                  case 11:
                    n = Si(null, n, r, e, t);
                    break e;
                  case 14:
                    n = xi(null, n, r, va(r.type, e), t);
                    break e;
                }
                throw Error(a(306, r, ''));
              }
              return n;
            case 0:
              return (
                (r = n.type),
                (l = n.pendingProps),
                Ni(e, n, r, (l = n.elementType === r ? l : va(r, l)), t)
              );
            case 1:
              return (
                (r = n.type),
                (l = n.pendingProps),
                Pi(e, n, r, (l = n.elementType === r ? l : va(r, l)), t)
              );
            case 3:
              e: {
                if ((Li(n), null === e)) throw Error(a(387));
                (r = n.pendingProps),
                  (l = (o = n.memoizedState).element),
                  Ta(e, n),
                  Ia(n, r, null, t);
                var i = n.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (n.updateQueue.baseState = o),
                    (n.memoizedState = o),
                    256 & n.flags)
                  ) {
                    n = ji(e, n, r, t, (l = ci(Error(a(423)), n)));
                    break e;
                  }
                  if (r !== l) {
                    n = ji(e, n, r, t, (l = ci(Error(a(424)), n)));
                    break e;
                  }
                  for (
                    ra = sl(n.stateNode.containerInfo.firstChild),
                      ta = n,
                      la = !0,
                      aa = null,
                      t = Ga(n, null, r, t),
                      n.child = t;
                    t;

                  )
                    (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
                } else {
                  if ((pa(), r === l)) {
                    n = Hi(e, n, t);
                    break e;
                  }
                  wi(e, n, r, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                ao(n),
                null === e && sa(n),
                (r = n.type),
                (l = n.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = l.children),
                tl(r, l)
                  ? (i = null)
                  : null !== o && tl(r, o) && (n.flags |= 32),
                _i(e, n),
                wi(e, n, i, t),
                n.child
              );
            case 6:
              return null === e && sa(n), null;
            case 13:
              return Di(e, n, t);
            case 4:
              return (
                ro(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                null === e ? (n.child = Xa(n, null, r, t)) : wi(e, n, r, t),
                n.child
              );
            case 11:
              return (
                (r = n.type),
                (l = n.pendingProps),
                Si(e, n, r, (l = n.elementType === r ? l : va(r, l)), t)
              );
            case 7:
              return wi(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12:
              return wi(e, n, n.pendingProps.children, t), n.child;
            case 10:
              e: {
                if (
                  ((r = n.type._context),
                  (l = n.pendingProps),
                  (o = n.memoizedProps),
                  (i = l.value),
                  _l(ga, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === l.children && !zl.current) {
                      n = Hi(e, n, t);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = n.child) && (o.return = n);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = Oa(-1, t & -t)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= t),
                              null !== (s = o.alternate) && (s.lanes |= t),
                              xa(o.return, t, n),
                              (u.lanes |= t);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === n.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(a(341));
                        (i.lanes |= t),
                          null !== (u = i.alternate) && (u.lanes |= t),
                          xa(i, t, n),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === n) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                wi(e, n, l.children, t), (n = n.child);
              }
              return n;
            case 9:
              return (
                (l = n.type),
                (r = n.pendingProps.children),
                Ea(n, t),
                (r = r((l = Ca(l)))),
                (n.flags |= 1),
                wi(e, n, r, t),
                n.child
              );
            case 14:
              return (
                (l = va((r = n.type), n.pendingProps)),
                xi(e, n, r, (l = va(r.type, l)), t)
              );
            case 15:
              return Ei(e, n, n.type, n.pendingProps, t);
            case 17:
              return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : va(r, l)),
                $i(e, n),
                (n.tag = 1),
                Tl(r) ? ((e = !0), Fl(n)) : (e = !1),
                Ea(n, t),
                Ba(n, r, l),
                Ha(n, r, l, t),
                zi(null, n, r, !0, e, t)
              );
            case 19:
              return Bi(e, n, t);
            case 22:
              return Ci(e, n, t);
          }
          throw Error(a(156, n.tag));
        };
        var Ks =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ys(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Js() {}
        function ec(e, n, t, r, l) {
          var a = t._reactRootContainer;
          if (a) {
            var o = a;
            if ('function' === typeof l) {
              var i = l;
              l = function () {
                var e = Hs(o);
                i.call(e);
              };
            }
            $s(n, o, e, l);
          } else
            o = (function (e, n, t, r, l) {
              if (l) {
                if ('function' === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Hs(o);
                    a.call(e);
                  };
                }
                var o = Bs(n, r, e, 0, null, !1, 0, '', Js);
                return (
                  (e._reactRootContainer = o),
                  (e[ml] = o.current),
                  Ar(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  o
                );
              }
              for (; (l = e.lastChild); ) e.removeChild(l);
              if ('function' === typeof r) {
                var i = r;
                r = function () {
                  var e = Hs(u);
                  i.call(e);
                };
              }
              var u = Ws(e, 0, !1, null, 0, !1, 0, '', Js);
              return (
                (e._reactRootContainer = u),
                (e[ml] = u.current),
                Ar(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  $s(n, u, t, r);
                }),
                u
              );
            })(t, n, e, l, r);
          return Hs(o);
        }
        (Xs.prototype.render = Ys.prototype.render =
          function (e) {
            var n = this._internalRoot;
            if (null === n) throw Error(a(409));
            $s(e, n, null, null);
          }),
          (Xs.prototype.unmount = Ys.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                fs(function () {
                  $s(null, e, null, null);
                }),
                  (n[ml] = null);
              }
            }),
          (Xs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var n = Cn();
              e = { blockedOn: null, target: e, priority: n };
              for (
                var t = 0;
                t < Rn.length && 0 !== n && n < Rn[t].priority;
                t++
              );
              Rn.splice(t, 0, e), 0 === t && Dn(e);
            }
          }),
          (Sn = function (e) {
            switch (e.tag) {
              case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                  var t = dn(n.pendingLanes);
                  0 !== t &&
                    (bn(n, 1 | t),
                    ls(n, Ge()),
                    0 === (6 & zu) && ((Bu = Ge() + 500), Al()));
                }
                break;
              case 13:
                fs(function () {
                  var n = za(e, 1);
                  if (null !== n) {
                    var t = ns();
                    rs(n, e, 1, t);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (xn = function (e) {
            if (13 === e.tag) {
              var n = za(e, 134217728);
              if (null !== n) rs(n, e, 134217728, ns());
              qs(e, 134217728);
            }
          }),
          (En = function (e) {
            if (13 === e.tag) {
              var n = ts(e),
                t = za(e, n);
              if (null !== t) rs(t, e, n, ns());
              qs(e, n);
            }
          }),
          (Cn = function () {
            return kn;
          }),
          (_n = function (e, n) {
            var t = kn;
            try {
              return (kn = e), n();
            } finally {
              kn = t;
            }
          }),
          (Se = function (e, n, t) {
            switch (n) {
              case 'input':
                if ((Z(e, t), (n = t.name), 'radio' === t.type && null != n)) {
                  for (t = e; t.parentNode; ) t = t.parentNode;
                  for (
                    t = t.querySelectorAll(
                      'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
                    ),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                      var l = wl(r);
                      if (!l) throw Error(a(90));
                      q(r), Z(r, l);
                    }
                  }
                }
                break;
              case 'textarea':
                ae(e, t);
                break;
              case 'select':
                null != (n = t.value) && te(e, !!t.multiple, n, !1);
            }
          }),
          (Pe = cs),
          (ze = fs);
        var nc = {
            usingClientEntryPoint: !1,
            Events: [bl, kl, wl, _e, Ne, cs],
          },
          tc = {
            findFiberByHostInstance: yl,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!lc.isDisabled && lc.supportsFiber)
            try {
              (ln = lc.inject(rc)), (an = lc);
            } catch (ce) {}
        }
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nc),
          (n.createPortal = function (e, n) {
            var t =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gs(n)) throw Error(a(200));
            return (function (e, n, t) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: n,
                implementation: t,
              };
            })(e, n, null, t);
          }),
          (n.createRoot = function (e, n) {
            if (!Gs(e)) throw Error(a(299));
            var t = !1,
              r = '',
              l = Ks;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (n = Ws(e, 1, !1, null, 0, t, 0, r, l)),
              (e[ml] = n.current),
              Ar(8 === e.nodeType ? e.parentNode : e),
              new Ys(n)
            );
          }),
          (n.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var n = e._reactInternals;
            if (void 0 === n) {
              if ('function' === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(',')), Error(a(268, e)));
            }
            return (e = null === (e = He(n)) ? null : e.stateNode);
          }),
          (n.flushSync = function (e) {
            return fs(e);
          }),
          (n.hydrate = function (e, n, t) {
            if (!Zs(n)) throw Error(a(200));
            return ec(null, e, n, !0, t);
          }),
          (n.hydrateRoot = function (e, n, t) {
            if (!Gs(e)) throw Error(a(405));
            var r = (null != t && t.hydratedSources) || null,
              l = !1,
              o = '',
              i = Ks;
            if (
              (null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (l = !0),
                void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (n = Bs(n, null, e, 1, null != t ? t : null, l, 0, o, i)),
              (e[ml] = n.current),
              Ar(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (l = (l = (t = r[e])._getVersion)(t._source)),
                  null == n.mutableSourceEagerHydrationData
                    ? (n.mutableSourceEagerHydrationData = [t, l])
                    : n.mutableSourceEagerHydrationData.push(t, l);
            return new Xs(n);
          }),
          (n.render = function (e, n, t) {
            if (!Zs(n)) throw Error(a(200));
            return ec(null, e, n, !1, t);
          }),
          (n.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ml] = null);
                });
              }),
              !0)
            );
          }),
          (n.unstable_batchedUpdates = cs),
          (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
            if (!Zs(t)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, n, t, !1, r);
          }),
          (n.version = '18.2.0-next-9e3b772b8-20220608');
      },
      250: function (e, n, t) {
        var r = t(164);
        (n.createRoot = r.createRoot), (n.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, n, t) {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (n) {
              console.error(n);
            }
        })(),
          (e.exports = t(463));
      },
      374: function (e, n, t) {
        var r = t(791),
          l = Symbol.for('react.element'),
          a = Symbol.for('react.fragment'),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, n, t) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== t && (s = '' + t),
          void 0 !== n.key && (s = '' + n.key),
          void 0 !== n.ref && (c = n.ref),
          n))
            o.call(n, r) && !u.hasOwnProperty(r) && (a[r] = n[r]);
          if (e && e.defaultProps)
            for (r in (n = e.defaultProps)) void 0 === a[r] && (a[r] = n[r]);
          return {
            $$typeof: l,
            type: e,
            key: s,
            ref: c,
            props: a,
            _owner: i.current,
          };
        }
        (n.jsx = s), (n.jsxs = s);
      },
      117: function (e, n) {
        var t = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          l = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          o = Symbol.for('react.profiler'),
          i = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          s = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          v = {};
        function g(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = v),
            (this.updater = t || m);
        }
        function y() {}
        function b(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = v),
            (this.updater = t || m);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, n) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, n, 'setState');
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (y.prototype = g.prototype);
        var k = (b.prototype = new y());
        (k.constructor = b), h(k, g.prototype), (k.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          x = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, n, r) {
          var l,
            a = {},
            o = null,
            i = null;
          if (null != n)
            for (l in (void 0 !== n.ref && (i = n.ref),
            void 0 !== n.key && (o = '' + n.key),
            n))
              S.call(n, l) && !E.hasOwnProperty(l) && (a[l] = n[l]);
          var u = arguments.length - 2;
          if (1 === u) a.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (l in (u = e.defaultProps)) void 0 === a[l] && (a[l] = u[l]);
          return {
            $$typeof: t,
            type: e,
            key: o,
            ref: i,
            props: a,
            _owner: x.current,
          };
        }
        function _(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === t;
        }
        var N = /\/+/g;
        function P(e, n) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var n = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return n[e];
                  })
                );
              })('' + e.key)
            : n.toString(36);
        }
        function z(e, n, l, a, o) {
          var i = typeof e;
          ('undefined' !== i && 'boolean' !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case 'string':
              case 'number':
                u = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case t:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = '' === a ? '.' + P(u, 0) : a),
              w(o)
                ? ((l = ''),
                  null != e && (l = e.replace(N, '$&/') + '/'),
                  z(o, n, l, '', function (e) {
                    return e;
                  }))
                : null != o &&
                  (_(o) &&
                    (o = (function (e, n) {
                      return {
                        $$typeof: t,
                        type: e.type,
                        key: n,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      l +
                        (!o.key || (u && u.key === o.key)
                          ? ''
                          : ('' + o.key).replace(N, '$&/') + '/') +
                        e
                    )),
                  n.push(o)),
              1
            );
          if (((u = 0), (a = '' === a ? '.' : a + ':'), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = a + P((i = e[s]), s);
              u += z(i, n, l, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += z((i = i.value), n, l, (c = a + P(i, s++)), o);
          else if ('object' === i)
            throw (
              ((n = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === n
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : n) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return u;
        }
        function L(e, n, t) {
          if (null == e) return e;
          var r = [],
            l = 0;
          return (
            z(e, r, '', '', function (e) {
              return n.call(t, e, l++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var n = e._result;
            (n = n()).then(
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = n));
              },
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = n));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = n));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          O = { transition: null },
          R = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: x,
          };
        (n.Children = {
          map: L,
          forEach: function (e, n, t) {
            L(
              e,
              function () {
                n.apply(this, arguments);
              },
              t
            );
          },
          count: function (e) {
            var n = 0;
            return (
              L(e, function () {
                n++;
              }),
              n
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return e;
          },
        }),
          (n.Component = g),
          (n.Fragment = l),
          (n.Profiler = o),
          (n.PureComponent = b),
          (n.StrictMode = a),
          (n.Suspense = c),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (n.cloneElement = function (e, n, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var l = h({}, e.props),
              a = e.key,
              o = e.ref,
              i = e._owner;
            if (null != n) {
              if (
                (void 0 !== n.ref && ((o = n.ref), (i = x.current)),
                void 0 !== n.key && (a = '' + n.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in n)
                S.call(n, s) &&
                  !E.hasOwnProperty(s) &&
                  (l[s] = void 0 === n[s] && void 0 !== u ? u[s] : n[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) l.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              l.children = u;
            }
            return {
              $$typeof: t,
              type: e.type,
              key: a,
              ref: o,
              props: l,
              _owner: i,
            };
          }),
          (n.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (n.createElement = C),
          (n.createFactory = function (e) {
            var n = C.bind(null, e);
            return (n.type = e), n;
          }),
          (n.createRef = function () {
            return { current: null };
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (n.isValidElement = _),
          (n.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (n.memo = function (e, n) {
            return { $$typeof: f, type: e, compare: void 0 === n ? null : n };
          }),
          (n.startTransition = function (e) {
            var n = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = n;
            }
          }),
          (n.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (n.useCallback = function (e, n) {
            return T.current.useCallback(e, n);
          }),
          (n.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (n.useEffect = function (e, n) {
            return T.current.useEffect(e, n);
          }),
          (n.useId = function () {
            return T.current.useId();
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return T.current.useImperativeHandle(e, n, t);
          }),
          (n.useInsertionEffect = function (e, n) {
            return T.current.useInsertionEffect(e, n);
          }),
          (n.useLayoutEffect = function (e, n) {
            return T.current.useLayoutEffect(e, n);
          }),
          (n.useMemo = function (e, n) {
            return T.current.useMemo(e, n);
          }),
          (n.useReducer = function (e, n, t) {
            return T.current.useReducer(e, n, t);
          }),
          (n.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (n.useState = function (e) {
            return T.current.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return T.current.useSyncExternalStore(e, n, t);
          }),
          (n.useTransition = function () {
            return T.current.useTransition();
          }),
          (n.version = '18.2.0');
      },
      791: function (e, n, t) {
        e.exports = t(117);
      },
      184: function (e, n, t) {
        e.exports = t(374);
      },
      813: function (e, n) {
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t; ) {
            var r = (t - 1) >>> 1,
              l = e[r];
            if (!(0 < a(l, n))) break e;
            (e[r] = n), (e[t] = l), (t = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function l(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var r = 0, l = e.length, o = l >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > a(u, t))
                s < l && 0 > a(c, u)
                  ? ((e[r] = c), (e[s] = t), (r = s))
                  : ((e[r] = u), (e[i] = t), (r = i));
              else {
                if (!(s < l && 0 > a(c, t))) break e;
                (e[r] = c), (e[s] = t), (r = s);
              }
            }
          }
          return n;
        }
        function a(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var o = performance;
          n.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          n.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          v = !1,
          g = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var n = r(c); null !== n; ) {
            if (null === n.callback) l(c);
            else {
              if (!(n.startTime <= e)) break;
              l(c), (n.sortIndex = n.expirationTime), t(s, n);
            }
            n = r(c);
          }
        }
        function w(e) {
          if (((v = !1), k(e), !h))
            if (null !== r(s)) (h = !0), O(S);
            else {
              var n = r(c);
              null !== n && R(w, n.startTime - e);
            }
        }
        function S(e, t) {
          (h = !1), v && ((v = !1), y(_), (_ = -1)), (m = !0);
          var a = p;
          try {
            for (
              k(t), d = r(s);
              null !== d && (!(d.expirationTime > t) || (e && !z()));

            ) {
              var o = d.callback;
              if ('function' === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var i = o(d.expirationTime <= t);
                (t = n.unstable_now()),
                  'function' === typeof i
                    ? (d.callback = i)
                    : d === r(s) && l(s),
                  k(t);
              } else l(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && R(w, f.startTime - t), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = a), (m = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          E = !1,
          C = null,
          _ = -1,
          N = 5,
          P = -1;
        function z() {
          return !(n.unstable_now() - P < N);
        }
        function L() {
          if (null !== C) {
            var e = n.unstable_now();
            P = e;
            var t = !0;
            try {
              t = C(!0, e);
            } finally {
              t ? x() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ('function' === typeof b)
          x = function () {
            b(L);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var j = new MessageChannel(),
            T = j.port2;
          (j.port1.onmessage = L),
            (x = function () {
              T.postMessage(null);
            });
        } else
          x = function () {
            g(L, 0);
          };
        function O(e) {
          (C = e), E || ((E = !0), x());
        }
        function R(e, t) {
          _ = g(function () {
            e(n.unstable_now());
          }, t);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            h || m || ((h = !0), O(S));
          }),
          (n.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (n.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = p;
            }
            var t = p;
            p = n;
            try {
              return e();
            } finally {
              p = t;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var t = p;
            p = e;
            try {
              return n();
            } finally {
              p = t;
            }
          }),
          (n.unstable_scheduleCallback = function (e, l, a) {
            var o = n.unstable_now();
            switch (
              ('object' === typeof a && null !== a
                ? (a = 'number' === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: l,
                priorityLevel: e,
                startTime: a,
                expirationTime: (i = a + i),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  t(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(_), (_ = -1)) : (v = !0), R(w, a - o)))
                : ((e.sortIndex = i), t(s, e), h || m || ((h = !0), O(S))),
              e
            );
          }),
          (n.unstable_shouldYield = z),
          (n.unstable_wrapCallback = function (e) {
            var n = p;
            return function () {
              var t = p;
              p = n;
              try {
                return e.apply(this, arguments);
              } finally {
                p = t;
              }
            };
          });
      },
      296: function (e, n, t) {
        e.exports = t(813);
      },
    },
    n = {};
  function t(r) {
    var l = n[r];
    if (void 0 !== l) return l.exports;
    var a = (n[r] = { exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.p = '/'),
    (function () {
      var e = t(791),
        n = t(250),
        r = t.p + 'static/media/doorOpened.71f00a12661f12058c81.jpg',
        l = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = e.createContext && e.createContext(l),
        o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                  for (var l in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
                return e;
              }),
            o.apply(this, arguments)
          );
        },
        i = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var l = 0;
            for (r = Object.getOwnPropertySymbols(e); l < r.length; l++)
              n.indexOf(r[l]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
                (t[r[l]] = e[r[l]]);
          }
          return t;
        };
      function u(n) {
        return (
          n &&
          n.map(function (n, t) {
            return e.createElement(n.tag, o({ key: t }, n.attr), u(n.child));
          })
        );
      }
      function s(n) {
        return function (t) {
          return e.createElement(c, o({ attr: o({}, n.attr) }, t), u(n.child));
        };
      }
      function c(n) {
        var t = function (t) {
          var r,
            l = n.attr,
            a = n.size,
            u = n.title,
            s = i(n, ['attr', 'size', 'title']),
            c = a || t.size || '1em';
          return (
            t.className && (r = t.className),
            n.className && (r = (r ? r + ' ' : '') + n.className),
            e.createElement(
              'svg',
              o(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                l,
                s,
                {
                  className: r,
                  style: o(o({ color: n.color || t.color }, t.style), n.style),
                  height: c,
                  width: c,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              u && e.createElement('title', null, u),
              n.children
            )
          );
        };
        return void 0 !== a
          ? e.createElement(a.Consumer, null, function (e) {
              return t(e);
            })
          : t(l);
      }
      function f(e) {
        return s({
          tag: 'svg',
          attr: { viewBox: '0 0 15 15', fill: 'none' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z',
                fill: 'currentColor',
              },
            },
          ],
        })(e);
      }
      var d = t(184),
        p = function (e) {
          var n = e.onClick;
          return (0, d.jsxs)('button', {
            className: 'freeConsultingButton',
            onClick: n,
            children: [
              (0, d.jsx)('div', { className: 'buttomLeftLine' }),
              (0, d.jsx)('div', {
                className: 'arrowInCercle',
                children: (0, d.jsx)(f, { color: '#d8a27d', fontSize: '60px' }),
              }),
              (0, d.jsxs)('span', {
                children: [
                  '\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ',
                  (0, d.jsx)('br', {}),
                  '\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e',
                ],
              }),
            ],
          });
        },
        m = function (e) {
          var n = e.anchorRef;
          return (0, d.jsxs)('div', {
            className: 'topLogoWrapper',
            children: [
              (0, d.jsxs)('div', {
                className: 'topWrapperLeftSide',
                children: [
                  (0, d.jsxs)('p', {
                    className: 'topVastuWord mobile',
                    children: [
                      'VASTU',
                      (0, d.jsx)('span', { children: 'SPACE' }),
                    ],
                  }),
                  (0, d.jsx)('img', {
                    src: r,
                    className: 'doorOpenedImg',
                    alt: 'doorOpenedImg',
                    width: '100%',
                    height: '700px',
                  }),
                ],
              }),
              (0, d.jsxs)('div', {
                className: 'topWrapperRightSide',
                children: [
                  (0, d.jsx)('p', {
                    className: 'topSpaceWord',
                    children: 'SPACE',
                  }),
                  (0, d.jsxs)('div', {
                    className: 'rightBottomSloganWrapper',
                    children: [
                      (0, d.jsx)('p', {
                        className: 'sloganText',
                        children:
                          '\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043c\u0435\u043d\u044f\u044e\u0449\u0438\u0435 \u0441\u043e\u0437\u043d\u0430\u043d\u0438\u0435',
                      }),
                      (0, d.jsx)(p, {
                        onClick: function () {
                          n.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest',
                          });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        h = t.p + 'static/media/pencil.2ef358bc6101fb68cad9.jpg',
        v = function () {
          return (0, d.jsxs)('div', {
            className: 'aboutUsWrapper',
            children: [
              (0, d.jsx)('h2', { children: '\u041e \u041d\u0410\u0421' }),
              (0, d.jsxs)('div', {
                className: 'aboutUsBody',
                children: [
                  (0, d.jsx)('div', {
                    className: 'leftSideContainer aboutUs tablet',
                    children: (0, d.jsxs)('p', {
                      className: 'leftSideText',
                      children: [
                        '\u0426\u0435\u043b\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 VASTUSPACE - \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0438 \u043b\u044e\u0434\u0435\u0439, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432. \u041a\u0430\u0436\u0434\u043e\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435 \u0437\u0434\u0430\u043d\u0438\u0435, \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0441\u0432\u043e\u0435\u0439 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u0435\u0439 \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u0445\u043e\u0440\u043e\u0448\u0435\u0435 \u0438\u043b\u0438 \u043f\u043b\u043e\u0445\u043e\u0435 \u0432\u043e\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043d\u0430 \u043b\u044e\u0434\u0435\u0439. \u0421\u043e\u043e\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u043f\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c \u0412\u0430\u0441\u0442\u0443 \u0448\u0430\u0441\u0442\u0440\u044b, \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u0431\u043b\u0430\u0433\u043e\u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0439 \u0440\u0438\u0442\u043c \u0432 \u0441\u0432\u043e\u0435\u0439 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0447\u0435\u043c\u0443 \u043d\u0430 \u0417\u0435\u043c\u043b\u0435 \u043f\u043e\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0442\u044f\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u043d\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u0438 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b \u0434\u0443\u0445\u043e\u0432\u043d\u043e.',
                        (0, d.jsx)('br', {}),
                        (0, d.jsx)('br', {}),
                        '\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0434\u043e\u043c\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u0445\u043e\u0442\u044f \u043b\u044e\u0434\u0438 \u0432\u0441\u0435 \u0447\u0430\u0449\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442 \u0437\u0430\u0434\u0443\u043c\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430, \u043d\u043e \u0438 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0436\u0438\u0432\u043e\u0439, \u0443\u044e\u0442\u043d\u044b\u0439 \u0438 \u0442\u0435\u043f\u043b\u044b\u0439 \u0434\u043e\u043c \u0434\u043b\u044f \u0432\u0441\u0435\u0439 \u0441\u0435\u043c\u044c\u0438. ',
                        (0, d.jsx)('br', {}),
                        (0, d.jsx)('br', {}),
                      ],
                    }),
                  }),
                  (0, d.jsx)('img', {
                    src: h,
                    alt: '',
                    width: '450px',
                    height: '590px',
                    className: 'pencilImage',
                  }),
                  (0, d.jsxs)('div', {
                    children: [
                      (0, d.jsxs)('div', {
                        children: [
                          (0, d.jsx)('div', { className: 'headerDecoration' }),
                          (0, d.jsx)('h3', {
                            children:
                              '\u0443\u043b\u0443\u0447\u0448\u0430\u0435\u043c \u0432\u0430\u0448\u0443 \u0436\u0438\u0437\u043d\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432',
                          }),
                          ' ',
                          (0, d.jsx)('div', { className: 'headerDecoration' }),
                        ],
                      }),
                      (0, d.jsx)('p', {
                        className: 'rightSideText',
                        children:
                          '\u041c\u044b \u0441\u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u0432 \u0440\u0435\u0448\u0435\u043d\u0438\u0438 \u044d\u0442\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438. \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u0435\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u0441 \u043c\u043d\u043e\u0433\u043e\u043b\u0435\u0442\u043d\u0438\u043c \u043e\u043f\u044b\u0442\u043e\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u0433\u043e\u0442\u043e\u0432\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, \u043e\u0442 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0434\u043e\u043c\u0430 \u0434\u043e \u0433\u0440\u0430\u0434\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043b\u0430\u043d\u0430 \u0436\u0438\u043b\u043e\u0433\u043e \u043f\u043e\u0441\u0435\u043b\u043a\u0430.',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        g = t.p + 'static/media/parushaBack.93227f6a3630f2c428ac.jpg',
        y = [
          {
            text: '\u0414\u043e\u043c, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043f\u043e \u0412\u0430\u0441\u0442\u0443, \u0431\u0443\u0434\u0435\u0442 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u0441\u043f\u043e\u0441\u043e\u0431\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0438 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u043d\u0438\u044e',
            id: 1,
          },
          {
            text: '\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0431\u043b\u0430\u0433\u043e\u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0439 \u044d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u043d, \u0433\u0434\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043c\u044b\u0441\u043b\u0435\u0439',
            id: 2,
          },
          {
            text: '\u0414\u043e\u043c \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043f\u043e \u0412\u0430\u0441\u0442\u0443, \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0440\u0443\u0435\u0442 \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\u043c \u0417\u0435\u043c\u043b\u0438 \u0438 \u0441 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430',
            id: 3,
          },
        ],
        b = function () {
          return (0, d.jsxs)('div', {
            className: 'whyVastuWrapper',
            children: [
              (0, d.jsx)('h2', {
                children:
                  '\u043f\u043e\u0447\u0435\u043c\u0443 \u0432\u0430\u0441\u0442\u0443',
              }),
              (0, d.jsxs)('div', {
                className: 'whyVastuContent',
                children: [
                  (0, d.jsxs)('div', {
                    className: 'whyVastuFirstContentSection',
                    children: [
                      (0, d.jsxs)('div', {
                        children: [
                          (0, d.jsxs)('p', {
                            children: [
                              '\xab\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0438\u043d\u0434\u0438\u0439\u0441\u043a\u0430\u044f \u043d\u0430\u0443\u043a\u0430 \u0435\u0441\u0442\u044c \u043d\u0430\u0443\u043a\u0430 \u043e \u041c\u0430\u0442\u0435\u0440\u0438\u0438 \u0438 \u042d\u043d\u0435\u0440\u0433\u0438\u0438. \u041d\u0430\u0443\u043a\u0430 \u043e \u0412\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435. \u041d\u0430\u0443\u043a\u0430 \u043e \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430\u0445 \u0438 \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0445. \u041d\u0430\u0443\u043a\u0430 \u0417\u0432\u0443\u043a\u0430 \u0438 \u0421\u0432\u0435\u0442\u0430. \u041d\u0430\u0443\u043a\u0430 \u043e \u0421\u043b\u043e\u0432\u0435 \u0438 \u0424\u043e\u0440\u043c\u0435. \u041d\u0430\u0443\u043a\u0430 \u043e \u0422\u043e\u043d\u043a\u043e\u0439 \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0438 \u0422\u044f\u0436\u0435\u043b\u043e\u0439 \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439. \u042d\u0442\u043e \u043d\u0435 \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f \u0438 \u043d\u0435 \u0440\u0435\u043b\u0438\u0433\u0438\u044f.\xbb',
                              (0, d.jsx)('span', {
                                children:
                                  ' \u0414\u043e\u043a\u0442\u043e\u0440 \u0413. \u0421\u0442\u0445\u0430\u043f\u0430\u0442\u0438 \xab\u0421\u0442\u0445\u0430\u043f\u0430\u0442\u044c\u044f \u0412\u0435\u0434\u0430\xbb',
                              }),
                            ],
                          }),
                          (0, d.jsx)('p', {
                            className: 'notQuote',
                            children:
                              '\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0412\u0430\u0441\u0442\u0443 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043e\u043d\u0430 \u0432\u044b\u0448\u043b\u0430 \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0443\u043a. \u0414\u043e \u044d\u0442\u043e\u0433\u043e \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u043b \u0434\u0443\u0445\u043e\u0432\u043d\u044b\u0439 \u043e\u043f\u044b\u0442, \u0441\u0447\u0430\u0441\u0442\u044c\u0435, \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u043d\u0438\u0435 \u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0431\u043b\u0430\u0433\u043e\u043f\u043e\u043b\u0443\u0447\u0438\u0435 \u0441 \u043d\u0430\u0443\u0447\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0438 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u0441\u043d\u043e\u0432.',
                          }),
                        ],
                      }),
                      (0, d.jsxs)('div', {
                        className: 'parushaWrapper',
                        children: [
                          (0, d.jsx)('img', { src: g, alt: '' }),
                          (0, d.jsx)('div', { className: 'parushaHolder' }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)('div', {
                    className: 'vastuPros',
                    children: y.map(function (e) {
                      var n = e.text,
                        t = e.id;
                      return (0,
                      d.jsxs)('div', { className: 'prosItem', children: [(0, d.jsxs)('div', { className: 'prosFlower', children: [(0, d.jsx)('div', { className: 'bl' }), (0, d.jsx)('div', { className: 'yel' }), (0, d.jsx)('div', { className: 'gra' }), (0, d.jsx)('div', { className: 'purp' })] }), (0, d.jsx)('p', { children: n })] }, t);
                    }),
                  }),
                ],
              }),
              ' ',
            ],
          });
        };
      function k(e) {
        return (
          (k =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          k(e)
        );
      }
      function w(e) {
        var n = (function (e, n) {
          if ('object' !== k(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, n || 'default');
            if ('object' !== k(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === n ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === k(n) ? n : String(n);
      }
      function S(e, n, t) {
        return (
          (n = w(n)) in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function x(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function E(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? x(Object(t), !0).forEach(function (n) {
                S(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var C = function (e) {
          var n = e.onClick;
          return (0, d.jsxs)('button', {
            className: 'freeConsultingButtonForServices',
            onClick: n,
            children: [
              (0, d.jsxs)('span', {
                children: [
                  '\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ',
                  (0, d.jsx)('br', {}),
                  '\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e',
                ],
              }),
              (0, d.jsx)('div', { className: 'buttomLeftLine' }),
              (0, d.jsx)('div', {
                className: 'arrowInCercle',
                children: (0, d.jsx)(f, { color: '#d8a27d', fontSize: '60px' }),
              }),
            ],
          });
        },
        _ = function (e) {
          var n = e.header,
            t = e.text,
            r = e.anchorRef;
          return (0, d.jsxs)('div', {
            className: 'serviceItemWrapper',
            children: [
              (0, d.jsx)('div', {
                className: 'headerContainer',
                children: (0, d.jsx)('h3', { children: n }),
              }),
              (0, d.jsx)('p', { className: 'itemUl', children: t }),
              (0, d.jsx)(C, {
                onClick: function () {
                  r.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                  });
                },
              }),
            ],
          });
        },
        N = t.p + 'static/media/family.cebc9022ab05f7b06bb6.jpg',
        P = [
          {
            header:
              '\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430 \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430',
            text: '\u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u044b \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u043d\u0430\u0448\u0435\u0439 \u0436\u0438\u0437\u043d\u0438, \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 \u0441\u043e\u0437\u043d\u0430\u043d\u0438\u0435, \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u043a \u0438 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u0441 \u043b\u044e\u0434\u044c\u043c\u0438. \u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043a\u0432\u0430\u0440\u0442\u0438\u0440 \u0438 \u0434\u043e\u043c\u043e\u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0438\u0441\u0445\u043e\u0434\u044f \u0438\u0437 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0446\u0435\u043b\u0435\u0441\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e\u0441\u0442\u0438, \u0430 \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430. \u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u044c, \u043a\u0430\u043a \u044d\u0442\u043e \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0445\u043e\u0437\u044f\u0435\u0432, \u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u043f\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430, \u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e \u043a \u043b\u0443\u0447\u0448\u0435\u043c\u0443.',
            id: 1,
          },
          {
            header:
              '\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435',
            text: '\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0412\u0430\u0441\u0442\u0443 \u2013 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e, \u043a\u0430\u043a \u043f\u043e\u0448\u0438\u0432 \u043a\u043e\u0441\u0442\u044e\u043c\u0430 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437. \u0412 \u0442\u0430\u043a\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043d\u043e \u0438 \u0442\u043e\u043d\u043a\u0438\u0439 \u043f\u043b\u0430\u043d. \u0414\u043e\u043c, \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043f\u043e - \u0412\u0430\u0441\u0442\u0443, \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0438 \u043f\u043e\u043b\u043d\u0435\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b \u0438 \u043f\u0440\u043e\u044f\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043b\u0443\u0447\u0448\u0438\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u043d\u0438\u0435, \u0445\u043e\u0440\u043e\u0448\u0435\u0435 \u0441\u0430\u043c\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0435, \u0434\u0443\u0448\u0435\u0432\u043d\u043e\u0435 \u0441\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u0434\u0443\u0445\u043e\u0432\u043d\u044b\u0439 \u0440\u043e\u0441\u0442 \u2013 \u0432\u0441\u0435 \u044d\u0442\u043e \u0437\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e \u0434\u043e\u043c\u0430.',
            id: 2,
          },
          {
            header:
              '\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f',
            text: '\u041f\u043e\u043f\u0430\u0434\u0430\u044f \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b, \u043e\u0444\u0438\u0441\u0430 \u0438\u043b\u0438 \u0434\u043e\u043c\u0430, \u043c\u044b \u0432\u0441\u0442\u0443\u043f\u0430\u0435\u043c \u0441 \u043d\u0438\u043c \u0432 \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u0431\u043c\u0435\u043d, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u043d\u0430\u043c \u043f\u0440\u0438\u044f\u0442\u043d\u043e, \u0430 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043a\u043e\u0440\u0435\u0435 \u0443\u0439\u0442\u0438. \u0422\u0430\u043a \u043c\u044b \u043e\u0449\u0443\u0449\u0430\u0435\u043c \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u044e \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c, \u0441 \u043d\u0430\u0448\u0435\u0439 \u043b\u0438\u0447\u043d\u043e\u0439 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u0435\u0439, \u0438\u043b\u0438 \u0432\u043e\u043e\u0431\u0449\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u043f\u0440\u0438\u0433\u043e\u0434\u043d\u0430 \u0434\u043b\u044f \u0436\u0438\u043b\u044c\u044f. \u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u0445 \u0432\u044b\u0431\u043e\u0440\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b, \u0434\u043e\u043c\u0430, \u0443\u0447\u0430\u0441\u0442\u043a\u0430 \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430, \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0433\u043e\u0442\u043e\u0432\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u043b\u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0412\u0430\u0441\u0442\u0443.',
            id: 3,
          },
        ],
        z = function (e) {
          var n = e.anchorRef;
          return (0, d.jsxs)('div', {
            className: 'servicesWrapper',
            children: [
              (0, d.jsx)('h2', {
                children: '\u0423\u0421\u041b\u0423\u0413\u0418',
              }),
              (0, d.jsx)('img', {
                src: N,
                alt: '',
                width: '100%',
                className: 'familyImage',
              }),
              (0, d.jsx)('div', {
                className: 'itemsWrapper',
                children: P.map(function (e) {
                  return (0, d.jsx)(_, E(E({}, e), {}, { anchorRef: n }), e.id);
                }),
              }),
            ],
          });
        },
        L = t.p + 'static/media/pr1.1685fcfa8b1ece346be9.jpg',
        j = t.p + 'static/media/pr2.c27f2e7abe701d8889f9.png',
        T = t.p + 'static/media/pr3.c10d01fc5f910b8690f9.jpg',
        O = function () {
          return (0, d.jsxs)('button', {
            className: 'freeConsultingButtonForPortfolio',
            onClick: function () {
              return {};
            },
            children: [
              (0, d.jsx)('span', {
                children:
                  '\u0412\u0441\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b',
              }),
              (0, d.jsx)('div', { className: 'buttomLeftLine' }),
              (0, d.jsx)('div', {
                className: 'arrowInCercle',
                children: (0, d.jsx)(f, { color: '#d8a27d', fontSize: '60px' }),
              }),
            ],
          });
        };
      function R(e) {
        return s({
          tag: 'svg',
          attr: { version: '1.1', viewBox: '0 0 17 17' },
          child: [
            { tag: 'g', attr: {}, child: [] },
            {
              tag: 'path',
              attr: {
                d: 'M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z',
              },
            },
          ],
        })(e);
      }
      var M = function () {
          return (0, d.jsxs)('button', {
            className: 'arrowOnlyBtn',
            onClick: function () {
              return {};
            },
            children: [
              (0, d.jsx)('div', { className: 'buttomLeftLine' }),
              (0, d.jsx)(R, { color: '#d8a27d', fontSize: '60px' }),
            ],
          });
        },
        F = [
          {
            description:
              '\u0414\u043e\u043c \u0438\u0437 \u043a\u043b\u0435\u0435\u043d\u043e\u0433\u043e \u0431\u0440\u0443\u0441\u0430, 234 \u043a\u0432.\u043c.',
            imageSrc: L,
            id: '1',
          },
          {
            description:
              '\u0414\u043e\u043c \u0441 \u0431\u0435\u043b\u044c\u0432\u0435\u0434\u0435\u0440\u043e\u043c, 321 \u043a\u0432.\u043c',
            imageSrc: j,
            id: '2',
          },
          {
            description:
              '\u041e\u0434\u043d\u043e\u044d\u0442\u0430\u0436\u043d\u044b\u0439 \u0436\u0438\u043b\u043e\u0439 \u0434\u043e\u043c, 160 \u043a\u0432. \u043c',
            imageSrc: T,
            id: '3',
          },
        ],
        I = function () {
          return (0, d.jsxs)('div', {
            className: 'portfolioWrapper',
            children: [
              (0, d.jsx)('h2', {
                children: '\u041f\u0440\u043e\u0435\u043a\u0442\u044b',
              }),
              (0, d.jsx)('div', {
                className: 'portfolioContent',
                children: F.map(function (e) {
                  var n = e.id,
                    t = e.description,
                    r = e.imageSrc;
                  return (0,
                  d.jsxs)('div', { className: 'portfolioItem', children: [(0, d.jsx)('img', { src: r, alt: '' }), (0, d.jsxs)('div', { className: 'textWithArrowButton', children: [(0, d.jsx)('p', { children: t }), (0, d.jsx)(M, {})] })] }, n);
                }),
              }),
              (0, d.jsx)('div', {
                className: 'portfolioBtnContainer',
                children: (0, d.jsx)(O, {}),
              }),
            ],
          });
        },
        D = [
          {
            id: '1',
            name: '\u041d\u0443\u0440\u0436\u0430\u0432\u0433\u0430\u043d',
            project:
              '\u041a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b',
            feedback:
              '\u041e\u0433\u0440\u043e\u043c\u043d\u0430\u044f \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c \u0421\u0435\u0440\u0433\u0435\u044e, \u0437\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u0443\u044e \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044e. \u041e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u043f\u043e \u043c\u043e\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0430\u043c \u0438 \u0446\u0435\u043b\u044f\u043c, \u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u0447\u0435\u0433\u043e \u0431\u044b\u043b\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0441\u0442\u0430\u043b\u0430 \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u044c \u043a\u0430\u043a \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043a \u0441\u0435\u0431\u0435, \u0438 \u043a \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u043e\u043c\u0443 \u043f\u043e\u043b\u0443. \u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0447\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0434\u0430\u043b\u044c\u0448\u0435, \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442\u0441\u044f.',
          },
          {
            id: '2',
            name: '\u042d\u0432\u0430, \u041f\u0440\u0430\u0433\u0430',
            project:
              '\u041a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b',
            feedback:
              '\u0412 \u0440\u0430\u0431\u043e\u0442\u0435 \u0421\u0435\u0440\u0433\u0435\u044f \u043c\u043d\u0435 \u0432\u0441\u0451 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c, \u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0445\u043e\u0447\u0443 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438, \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0437\u043d\u0430\u043d\u0438\u0439 \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0438\u0437\u043c. \u041c\u043e\u0433\u0443 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c - \u0431\u044b\u043b\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u043d\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e',
          },
          {
            id: '3',
            name: '\u0414\u043c\u0438\u0442\u0440\u0438\u0439, \u041c\u0430\u0439\u043a\u043e\u043f',
            project:
              '\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c \u0434\u043e\u043c\u0430',
            feedback:
              '\u042f \u0445\u043e\u0442\u0435\u043b \u0431\u044b \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u043c \u043e\u0442\u0437\u044b\u0432\u043e\u043c \u043e \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430 \u0412\u0430\u0441\u0442\u0443 \u0448\u0430\u0441\u0442\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u044f \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043f\u0440\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0434\u043e\u043c\u0430 \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0438\u043c\u0435\u043b \u043d\u0435\u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0437-\u0437\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u0433\u043e\u0440\u044b \u0441 \u0432\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b.\n    \u041f\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043e, \u044f \u0445\u043e\u0442\u0435\u043b \u0431\u044b \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0438\u0437\u043c \u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0435 \u0437\u043d\u0430\u043d\u0438\u044f \u0421\u0435\u0440\u0433\u0435\u044f, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u044f \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0441\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438. \u041e\u043d \u0431\u044b\u043b \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u0434\u0435\u0442\u0430\u043b\u044f\u043c \u0438 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0437\u0443\u0447\u0438\u043b \u0443\u0447\u0430\u0441\u0442\u043e\u043a, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0435\u0433\u043e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435. \u041e\u043d \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u043b \u0446\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u0432\u0435\u0442\u044b \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u043e\u043c \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u043d\u044b\u043c \u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0431\u043b\u0430\u0433\u043e\u043f\u0440\u0438\u044f\u0442\u043d\u0443\u044e \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a\u0443 \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435.\n    \u0421\u0435\u0440\u0433\u0435\u0439 \u043e\u0431\u0440\u0430\u0442\u0438\u043b \u043e\u0441\u043e\u0431\u043e\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043c\u0430, \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u0444\u0430\u0441\u0430\u0434\u043e\u0432 \u0438 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435. \u0421 \u0435\u0433\u043e \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u044b \u0441\u043c\u043e\u0433\u043b\u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u043c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c \u0412\u0430\u0441\u0442\u0443 \u0448\u0430\u0441\u0442\u0440\u0430 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u043b \u0433\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u043d\u0443\u044e \u0436\u0438\u0437\u043d\u044c \u0434\u043b\u044f \u043d\u0430\u0441.\n    \u041e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0432\u0430\u0436\u043d\u044b\u0445 \u0432\u0435\u0449\u0435\u0439 \u0431\u044b\u043b\u043e \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c \u0438 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f\u043c \u0412\u0430\u0441\u0442\u0443 \u0448\u0430\u0441\u0442\u0440\u0430 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043c\u0435\u043d\u044f \u043d\u043e \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u0432 \u043d\u0430\u0448\u0435\u0433\u043e \u0434\u043e\u043c\u0430. \n    \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438 \u0431\u044b\u043b\u0438 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u043c\u0438 \u0438 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u044f\u044e\u0449\u0438\u043c\u0438. \u042f \u0431\u044b\u043b \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d \u0442\u0435\u043c, \u043a\u0430\u043a\u0438\u0435 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0432\u043d\u0435\u0441\u0442\u0438, \u0441\u043b\u0435\u0434\u0443\u044f \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c \u0412\u0430\u0441\u0442\u0443 \u0448\u0430\u0441\u0442\u0440\u0430. \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0421\u0435\u0440\u0433\u0435\u044e \u0437\u0430 \u0435\u0433\u043e \u0446\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u0432\u0435\u0442\u044b \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0438\u0437\u043c',
          },
          {
            id: '4',
            name: '\u041c\u0438\u0445\u0430\u0438\u043b, \u041c\u043e\u0441\u043a\u0432\u0430',
            project:
              '\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f.',
            feedback:
              '\u0414\u043e\u043b\u0433\u043e \u0438\u0441\u043a\u0430\u043b\u0438 \u0445\u043e\u0440\u043e\u0448\u0443\u044e \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0443, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c \u0412\u0430\u0441\u0442\u0443, \u0421\u0435\u0440\u0433\u0435\u0439 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043b \u043d\u0430 \u0447\u0442\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435. \u041a\u043e\u0433\u0434\u0430 \u043d\u0430\u0448\u043b\u0438, (\u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0430\u0441\u044c) \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043d\u043e \u0438\u0445 \u043b\u0435\u0433\u043a\u043e \u0431\u044b\u043b\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0430 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0435\u043c\u043e\u043d\u0442\u0430. \u041f\u0440\u0438 \u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0443\u0437\u043d\u0430\u043b\u0438 \u0434\u043b\u044f \u0441\u0435\u0431\u044f \u043c\u043d\u043e\u0433\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0433\u043e. \u0418 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e, \u043f\u043e\u0441\u043b\u0435 \u0442\u0430\u043a\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043a \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0435, \u043a\u0430\u043a \u043a \u0436\u0438\u0432\u043e\u043c\u0443 \u0434\u043e\u043c\u0443.',
          },
        ],
        U = function (e) {
          var n = e.anchorRef;
          return (0, d.jsxs)('div', {
            className: 'feedbackSectionWrapper',
            children: [
              (0, d.jsx)('h2', {
                children:
                  '\u041e\u0442\u0437\u044b\u0432\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432',
              }),
              (0, d.jsx)('div', {
                className: 'feedbackItemsWrapper',
                children: D.map(function (e) {
                  var n = e.id,
                    t = e.feedback,
                    r = e.project,
                    l = e.name;
                  return (0,
                  d.jsxs)('div', { className: 'feedbackItem', children: [(0, d.jsx)('h4', { children: l }), (0, d.jsx)('p', { className: 'feedbackProjectName', children: r }), (0, d.jsx)('p', { className: 'feedbackBody', children: t })] }, n);
                }),
              }),
              (0, d.jsx)('div', { ref: n }),
            ],
          });
        };
      var V = function () {
        var n = (0, e.useRef)({});
        return (0, d.jsxs)('div', {
          className: 'sectionsWrapper',
          children: [
            (0, d.jsx)(m, { anchorRef: n }),
            (0, d.jsx)(v, {}),
            (0, d.jsx)(z, { anchorRef: n }),
            (0, d.jsx)(b, {}),
            (0, d.jsx)(I, {}),
            (0, d.jsx)(U, { anchorRef: n }),
          ],
        });
      };
      n.createRoot(document.getElementById('root')).render(
        (0, d.jsx)(e.StrictMode, { children: (0, d.jsx)(V, {}) })
      );
    })();
})();
//# sourceMappingURL=main.7fb0254c.js.map
