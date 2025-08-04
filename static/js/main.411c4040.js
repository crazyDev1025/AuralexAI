/*! For license information please see main.411c4040.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      4: (e, t, n) => {
        var r = n(853),
          a = n(43),
          i = n(950);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function s(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        var l = Symbol.for("react.element"),
          u = Symbol.for("react.transitional.element"),
          c = Symbol.for("react.portal"),
          d = Symbol.for("react.fragment"),
          f = Symbol.for("react.strict_mode"),
          h = Symbol.for("react.profiler"),
          p = Symbol.for("react.provider"),
          m = Symbol.for("react.consumer"),
          g = Symbol.for("react.context"),
          v = Symbol.for("react.forward_ref"),
          y = Symbol.for("react.suspense"),
          b = Symbol.for("react.suspense_list"),
          x = Symbol.for("react.memo"),
          w = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var S = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var k = Symbol.for("react.memo_cache_sentinel"),
          E = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (E && e[E]) || e["@@iterator"])
            ? e
            : null;
        }
        var T = Symbol.for("react.client.reference");
        function j(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === T ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case d:
              return "Fragment";
            case c:
              return "Portal";
            case h:
              return "Profiler";
            case f:
              return "StrictMode";
            case y:
              return "Suspense";
            case b:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case g:
                return (e.displayName || "Context") + ".Provider";
              case m:
                return (e._context.displayName || "Context") + ".Consumer";
              case v:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case x:
                return null !== (t = e.displayName || null)
                  ? t
                  : j(e.type) || "Memo";
              case w:
                (t = e._payload), (e = e._init);
                try {
                  return j(e(t));
                } catch (n) {}
            }
          return null;
        }
        var C,
          N,
          P = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          F = Object.assign;
        function R(e) {
          if (void 0 === C)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (C = (t && t[1]) || ""),
                (N =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + C + e + N;
        }
        var L = !1;
        function z(e, t) {
          if (!e || L) return "";
          L = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (a) {
                        var r = a;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (i) {
                        r = i;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (o) {
                      r = o;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (s) {
                  if (s && r && "string" === typeof s.stack)
                    return [s.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            a &&
              a.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var i = r.DetermineComponentFrameRoot(),
              o = i[0],
              s = i[1];
            if (o && s) {
              var l = o.split("\n"),
                u = s.split("\n");
              for (
                a = r = 0;
                r < l.length && !l[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                a < u.length && !u[a].includes("DetermineComponentFrameRoot");

              )
                a++;
              if (r === l.length || a === u.length)
                for (
                  r = l.length - 1, a = u.length - 1;
                  1 <= r && 0 <= a && l[r] !== u[a];

                )
                  a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (l[r] !== u[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || l[r] !== u[a])) {
                        var c = "\n" + l[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            (L = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? R(n) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return R(e.type);
            case 16:
              return R("Lazy");
            case 13:
              return R("Suspense");
            case 19:
              return R("SuspenseList");
            case 0:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function D(e) {
          try {
            var t = "";
            do {
              (t += V(e)), (e = e.return);
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function M(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function I(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function O(e) {
          if (M(e) !== e) throw Error(o(188));
        }
        function U(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = U(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var B = Array.isArray,
          W = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          q = { pending: !1, data: null, method: null, action: null },
          X = [],
          G = -1;
        function Q(e) {
          return { current: e };
        }
        function H(e) {
          0 > G || ((e.current = X[G]), (X[G] = null), G--);
        }
        function K(e, t) {
          G++, (X[G] = e.current), (e.current = t);
        }
        var Y = Q(null),
          J = Q(null),
          Z = Q(null),
          _ = Q(null);
        function $(e, t) {
          switch ((K(Z, t), K(J, e), K(Y, null), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) && (t = t.namespaceURI) ? Jc(t) : 0;
              break;
            default:
              if (
                ((t = (e = 8 === e ? t.parentNode : t).tagName),
                (e = e.namespaceURI))
              )
                t = Zc((e = Jc(e)), t);
              else
                switch (t) {
                  case "svg":
                    t = 1;
                    break;
                  case "math":
                    t = 2;
                    break;
                  default:
                    t = 0;
                }
          }
          H(Y), K(Y, t);
        }
        function ee() {
          H(Y), H(J), H(Z);
        }
        function te(e) {
          null !== e.memoizedState && K(_, e);
          var t = Y.current,
            n = Zc(t, e.type);
          t !== n && (K(J, e), K(Y, n));
        }
        function ne(e) {
          J.current === e && (H(Y), H(J)),
            _.current === e && (H(_), (Dd._currentValue = q));
        }
        var re = Object.prototype.hasOwnProperty,
          ae = r.unstable_scheduleCallback,
          ie = r.unstable_cancelCallback,
          oe = r.unstable_shouldYield,
          se = r.unstable_requestPaint,
          le = r.unstable_now,
          ue = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          de = r.unstable_UserBlockingPriority,
          fe = r.unstable_NormalPriority,
          he = r.unstable_LowPriority,
          pe = r.unstable_IdlePriority,
          me = r.log,
          ge = r.unstable_setDisableYieldValue,
          ve = null,
          ye = null;
        function be(e) {
          if (
            ("function" === typeof me && ge(e),
            ye && "function" === typeof ye.setStrictMode)
          )
            try {
              ye.setStrictMode(ve, e);
            } catch (t) {}
        }
        var xe = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((we(e) / Se) | 0)) | 0;
              },
          we = Math.log,
          Se = Math.LN2;
        var ke = 128,
          Ee = 4194304;
        function Ae(e) {
          var t = 42 & e;
          if (0 !== t) return t;
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
              return 64;
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
              return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function Te(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = e.warmLanes;
          e = 0 !== e.finishedLanes;
          var s = 134217727 & n;
          return (
            0 !== s
              ? 0 !== (n = s & ~a)
                ? (r = Ae(n))
                : 0 !== (i &= s)
                ? (r = Ae(i))
                : e || (0 !== (o = s & ~o) && (r = Ae(o)))
              : 0 !== (s = n & ~a)
              ? (r = Ae(s))
              : 0 !== i
              ? (r = Ae(i))
              : e || (0 !== (o = n & ~o) && (r = Ae(o))),
            0 === r
              ? 0
              : 0 !== t &&
                t !== r &&
                0 === (t & a) &&
                ((a = r & -r) >= (o = t & -t) ||
                  (32 === a && 0 !== (4194176 & o)))
              ? t
              : r
          );
        }
        function je(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Ce(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
              return t + 250;
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Ne() {
          var e = ke;
          return 0 === (4194176 & (ke <<= 1)) && (ke = 128), e;
        }
        function Pe() {
          var e = Ee;
          return 0 === (62914560 & (Ee <<= 1)) && (Ee = 4194304), e;
        }
        function Fe(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Re(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function Le(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - xe(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194218 & n));
        }
        function ze(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - xe(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        function Ve(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function De() {
          var e = W.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Zd(e.type);
        }
        var Me = Math.random().toString(36).slice(2),
          Ie = "__reactFiber$" + Me,
          Oe = "__reactProps$" + Me,
          Ue = "__reactContainer$" + Me,
          Be = "__reactEvents$" + Me,
          We = "__reactListeners$" + Me,
          qe = "__reactHandles$" + Me,
          Xe = "__reactResources$" + Me,
          Ge = "__reactMarker$" + Me;
        function Qe(e) {
          delete e[Ie], delete e[Oe], delete e[Be], delete e[We], delete e[qe];
        }
        function He(e) {
          var t = e[Ie];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Ue] || n[Ie])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ld(e); null !== e; ) {
                  if ((n = e[Ie])) return n;
                  e = ld(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ke(e) {
          if ((e = e[Ie] || e[Ue])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Ye(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(o(33));
        }
        function Je(e) {
          var t = e[Xe];
          return (
            t ||
              (t = e[Xe] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function Ze(e) {
          e[Ge] = !0;
        }
        var _e = new Set(),
          $e = {};
        function et(e, t) {
          tt(e, t), tt(e + "Capture", t);
        }
        function tt(e, t) {
          for ($e[e] = t, e = 0; e < t.length; e++) _e.add(t[e]);
        }
        var nt = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          rt = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          at = {},
          it = {};
        function ot(e, t, n) {
          if (
            ((a = t),
            re.call(it, a) ||
              (!re.call(at, a) &&
                (rt.test(a) ? (it[a] = !0) : ((at[a] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var a;
        }
        function st(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function lt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function ut(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ct(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function dt(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ct(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function ft(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function ht(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var pt = /[\n"\\]/g;
        function mt(e) {
          return e.replace(pt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, a, i, o, s) {
          (e.name = ""),
            null != o &&
            "function" !== typeof o &&
            "symbol" !== typeof o &&
            "boolean" !== typeof o
              ? (e.type = o)
              : e.removeAttribute("type"),
            null != t
              ? "number" === o
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + ut(t))
                : e.value !== "" + ut(t) && (e.value = "" + ut(t))
              : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
            null != t
              ? yt(e, o, ut(t))
              : null != n
              ? yt(e, o, ut(n))
              : null != r && e.removeAttribute("value"),
            null == a && null != i && (e.defaultChecked = !!i),
            null != a &&
              (e.checked =
                a && "function" !== typeof a && "symbol" !== typeof a),
            null != s &&
            "function" !== typeof s &&
            "symbol" !== typeof s &&
            "boolean" !== typeof s
              ? (e.name = "" + ut(s))
              : e.removeAttribute("name");
        }
        function vt(e, t, n, r, a, i, o, s) {
          if (
            (null != i &&
              "function" !== typeof i &&
              "symbol" !== typeof i &&
              "boolean" !== typeof i &&
              (e.type = i),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== i && "reset" !== i) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            (n = null != n ? "" + ut(n) : ""),
              (t = null != t ? "" + ut(t) : n),
              s || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : a) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = s ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.name = o);
        }
        function yt(e, t, n) {
          ("number" === t && ht(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + ut(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function xt(e, t, n) {
          null == t ||
          ((t = "" + ut(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + ut(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function wt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(o(92));
              if (B(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = ut(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var kt = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function Et(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || kt.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function At(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(o(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var a in t)
              (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Et(e, a, r);
          } else for (var i in t) t.hasOwnProperty(i) && Et(e, i, t[i]);
        }
        function Tt(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var jt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Ct =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Nt(e) {
          return Ct.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Pt = null;
        function Ft(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Rt = null,
          Lt = null;
        function zt(e) {
          var t = Ke(e);
          if (t && (e = t.stateNode)) {
            var n = e[Oe] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + mt("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = r[Oe] || null;
                      if (!a) throw Error(o(90));
                      gt(
                        r,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && ft(r);
                }
                break e;
              case "textarea":
                xt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var Vt = !1;
        function Dt(e, t, n) {
          if (Vt) return e(t, n);
          Vt = !0;
          try {
            return e(t);
          } finally {
            if (
              ((Vt = !1),
              (null !== Rt || null !== Lt) &&
                (Iu(), Rt && ((t = Rt), (e = Lt), (Lt = Rt = null), zt(t), e)))
            )
              for (t = 0; t < e.length; t++) zt(e[t]);
          }
        }
        function Mt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Oe] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var It = !1;
        if (nt)
          try {
            var Ot = {};
            Object.defineProperty(Ot, "passive", {
              get: function () {
                It = !0;
              },
            }),
              window.addEventListener("test", Ot, Ot),
              window.removeEventListener("test", Ot, Ot);
          } catch (Sf) {
            It = !1;
          }
        var Ut = null,
          Bt = null,
          Wt = null;
        function qt() {
          if (Wt) return Wt;
          var e,
            t,
            n = Bt,
            r = n.length,
            a = "value" in Ut ? Ut.value : Ut.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Wt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Xt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Gt() {
          return !0;
        }
        function Qt() {
          return !1;
        }
        function Ht(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? Gt
                : Qt),
              (this.isPropagationStopped = Qt),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = Gt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Gt));
              },
              persist: function () {},
              isPersistent: Gt,
            }),
            t
          );
        }
        var Kt,
          Yt,
          Jt,
          Zt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          _t = Ht(Zt),
          $t = F({}, Zt, { view: 0, detail: 0 }),
          en = Ht($t),
          tn = F({}, $t, {
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
            getModifierState: hn,
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
              return "movementX" in e
                ? e.movementX
                : (e !== Jt &&
                    (Jt && "mousemove" === e.type
                      ? ((Kt = e.screenX - Jt.screenX),
                        (Yt = e.screenY - Jt.screenY))
                      : (Yt = Kt = 0),
                    (Jt = e)),
                  Kt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Yt;
            },
          }),
          nn = Ht(tn),
          rn = Ht(F({}, tn, { dataTransfer: 0 })),
          an = Ht(F({}, $t, { relatedTarget: 0 })),
          on = Ht(
            F({}, Zt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          sn = Ht(
            F({}, Zt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          ln = Ht(F({}, Zt, { data: 0 })),
          un = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          cn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          dn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function fn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = dn[e]) && !!t[e];
        }
        function hn() {
          return fn;
        }
        var pn = Ht(
            F({}, $t, {
              key: function (e) {
                if (e.key) {
                  var t = un[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Xt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? cn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: hn,
              charCode: function (e) {
                return "keypress" === e.type ? Xt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Xt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          mn = Ht(
            F({}, tn, {
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
          gn = Ht(
            F({}, $t, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: hn,
            })
          ),
          vn = Ht(
            F({}, Zt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = Ht(
            F({}, tn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          bn = Ht(F({}, Zt, { newState: 0, oldState: 0 })),
          xn = [9, 13, 27, 32],
          wn = nt && "CompositionEvent" in window,
          Sn = null;
        nt && "documentMode" in document && (Sn = document.documentMode);
        var kn = nt && "TextEvent" in window && !Sn,
          En = nt && (!wn || (Sn && 8 < Sn && 11 >= Sn)),
          An = String.fromCharCode(32),
          Tn = !1;
        function jn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== xn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Cn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Nn = !1;
        var Pn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
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
        function Fn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Pn[e.type] : "textarea" === t;
        }
        function Rn(e, t, n, r) {
          Rt ? (Lt ? Lt.push(r) : (Lt = [r])) : (Rt = r),
            0 < (t = Dc(t, "onChange")).length &&
              ((n = new _t("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Ln = null,
          zn = null;
        function Vn(e) {
          Cc(e, 0);
        }
        function Dn(e) {
          if (ft(Ye(e))) return e;
        }
        function Mn(e, t) {
          if ("change" === e) return t;
        }
        var In = !1;
        if (nt) {
          var On;
          if (nt) {
            var Un = "oninput" in document;
            if (!Un) {
              var Bn = document.createElement("div");
              Bn.setAttribute("oninput", "return;"),
                (Un = "function" === typeof Bn.oninput);
            }
            On = Un;
          } else On = !1;
          In = On && (!document.documentMode || 9 < document.documentMode);
        }
        function Wn() {
          Ln && (Ln.detachEvent("onpropertychange", qn), (zn = Ln = null));
        }
        function qn(e) {
          if ("value" === e.propertyName && Dn(zn)) {
            var t = [];
            Rn(t, zn, e, Ft(e)), Dt(Vn, t);
          }
        }
        function Xn(e, t, n) {
          "focusin" === e
            ? (Wn(), (zn = n), (Ln = t).attachEvent("onpropertychange", qn))
            : "focusout" === e && Wn();
        }
        function Gn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Dn(zn);
        }
        function Qn(e, t) {
          if ("click" === e) return Dn(t);
        }
        function Hn(e, t) {
          if ("input" === e || "change" === e) return Dn(t);
        }
        var Kn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Yn(e, t) {
          if (Kn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!re.call(t, a) || !Kn(e[a], t[a])) return !1;
          }
          return !0;
        }
        function Jn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Zn(e, t) {
          var n,
            r = Jn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
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
            r = Jn(r);
          }
        }
        function _n(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? _n(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function $n(e) {
          for (
            var t = ht(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = ht((e = t.contentWindow).document);
          }
          return t;
        }
        function er(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function tr(e, t) {
          var n = $n(t);
          t = e.focusedElem;
          var r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            _n(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && er(t))
              if (
                ((e = r.start),
                void 0 === (n = r.end) && (n = e),
                "selectionStart" in t)
              )
                (t.selectionStart = e),
                  (t.selectionEnd = Math.min(n, t.value.length));
              else if (
                (n =
                  ((e = t.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                n = n.getSelection();
                var a = t.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !n.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = Zn(t, i));
                var o = Zn(t, r);
                a &&
                  o &&
                  (1 !== n.rangeCount ||
                    n.anchorNode !== a.node ||
                    n.anchorOffset !== a.offset ||
                    n.focusNode !== o.node ||
                    n.focusOffset !== o.offset) &&
                  ((e = e.createRange()).setStart(a.node, a.offset),
                  n.removeAllRanges(),
                  i > r
                    ? (n.addRange(e), n.extend(o.node, o.offset))
                    : (e.setEnd(o.node, o.offset), n.addRange(e)));
              }
            for (e = [], n = t; (n = n.parentNode); )
              1 === n.nodeType &&
                e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < e.length;
              t++
            )
              ((n = e[t]).element.scrollLeft = n.left),
                (n.element.scrollTop = n.top);
          }
        }
        var nr =
            nt && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          ar = null,
          ir = null,
          or = !1;
        function sr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          or ||
            null == rr ||
            rr !== ht(r) ||
            ("selectionStart" in (r = rr) && er(r)
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
            (ir && Yn(ir, r)) ||
              ((ir = r),
              0 < (r = Dc(ar, "onSelect")).length &&
                ((t = new _t("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = rr))));
        }
        function lr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var ur = {
            animationend: lr("Animation", "AnimationEnd"),
            animationiteration: lr("Animation", "AnimationIteration"),
            animationstart: lr("Animation", "AnimationStart"),
            transitionrun: lr("Transition", "TransitionRun"),
            transitionstart: lr("Transition", "TransitionStart"),
            transitioncancel: lr("Transition", "TransitionCancel"),
            transitionend: lr("Transition", "TransitionEnd"),
          },
          cr = {},
          dr = {};
        function fr(e) {
          if (cr[e]) return cr[e];
          if (!ur[e]) return e;
          var t,
            n = ur[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in dr) return (cr[e] = n[t]);
          return e;
        }
        nt &&
          ((dr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete ur.animationend.animation,
            delete ur.animationiteration.animation,
            delete ur.animationstart.animation),
          "TransitionEvent" in window || delete ur.transitionend.transition);
        var hr = fr("animationend"),
          pr = fr("animationiteration"),
          mr = fr("animationstart"),
          gr = fr("transitionrun"),
          vr = fr("transitionstart"),
          yr = fr("transitioncancel"),
          br = fr("transitionend"),
          xr = new Map(),
          wr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
              " "
            );
        function Sr(e, t) {
          xr.set(e, t), et(t, [e]);
        }
        var kr = [],
          Er = 0,
          Ar = 0;
        function Tr() {
          for (var e = Er, t = (Ar = Er = 0); t < e; ) {
            var n = kr[t];
            kr[t++] = null;
            var r = kr[t];
            kr[t++] = null;
            var a = kr[t];
            kr[t++] = null;
            var i = kr[t];
            if (((kr[t++] = null), null !== r && null !== a)) {
              var o = r.pending;
              null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
                (r.pending = a);
            }
            0 !== i && Pr(n, a, i);
          }
        }
        function jr(e, t, n, r) {
          (kr[Er++] = e),
            (kr[Er++] = t),
            (kr[Er++] = n),
            (kr[Er++] = r),
            (Ar |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Cr(e, t, n, r) {
          return jr(e, t, n, r), Fr(e);
        }
        function Nr(e, t) {
          return jr(e, null, null, t), Fr(e);
        }
        function Pr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, i = e.return; null !== i; )
            (i.childLanes |= n),
              null !== (r = i.alternate) && (r.childLanes |= n),
              22 === i.tag &&
                (null === (e = i.stateNode) || 1 & e._visibility || (a = !0)),
              (e = i),
              (i = i.return);
          a &&
            null !== t &&
            3 === e.tag &&
            ((i = e.stateNode),
            (a = 31 - xe(n)),
            null === (e = (i = i.hiddenUpdates)[a]) ? (i[a] = [t]) : e.push(t),
            (t.lane = 536870912 | n));
        }
        function Fr(e) {
          if (50 < Cu) throw ((Cu = 0), (Nu = null), Error(o(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Rr = {},
          Lr = new WeakMap();
        function zr(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = Lr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: D(t) }), Lr.set(e, t), t);
          }
          return { value: e, source: t, stack: D(t) };
        }
        var Vr = [],
          Dr = 0,
          Mr = null,
          Ir = 0,
          Or = [],
          Ur = 0,
          Br = null,
          Wr = 1,
          qr = "";
        function Xr(e, t) {
          (Vr[Dr++] = Ir), (Vr[Dr++] = Mr), (Mr = e), (Ir = t);
        }
        function Gr(e, t, n) {
          (Or[Ur++] = Wr), (Or[Ur++] = qr), (Or[Ur++] = Br), (Br = e);
          var r = Wr;
          e = qr;
          var a = 32 - xe(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - xe(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Wr = (1 << (32 - xe(t) + a)) | (n << a) | r),
              (qr = i + e);
          } else (Wr = (1 << i) | (n << a) | r), (qr = e);
        }
        function Qr(e) {
          null !== e.return && (Xr(e, 1), Gr(e, 1, 0));
        }
        function Hr(e) {
          for (; e === Mr; )
            (Mr = Vr[--Dr]), (Vr[Dr] = null), (Ir = Vr[--Dr]), (Vr[Dr] = null);
          for (; e === Br; )
            (Br = Or[--Ur]),
              (Or[Ur] = null),
              (qr = Or[--Ur]),
              (Or[Ur] = null),
              (Wr = Or[--Ur]),
              (Or[Ur] = null);
        }
        var Kr = null,
          Yr = null,
          Jr = !1,
          Zr = null,
          _r = !1,
          $r = Error(o(519));
        function ea(e) {
          throw (ia(zr(Error(o(418, "")), e)), $r);
        }
        function ta(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Ie] = e), (t[Oe] = r), n)) {
            case "dialog":
              Nc("cancel", t), Nc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Nc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Tc.length; n++) Nc(Tc[n], t);
              break;
            case "source":
              Nc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Nc("error", t), Nc("load", t);
              break;
            case "details":
              Nc("toggle", t);
              break;
            case "input":
              Nc("invalid", t),
                vt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                dt(t);
              break;
            case "select":
              Nc("invalid", t);
              break;
            case "textarea":
              Nc("invalid", t),
                wt(t, r.value, r.defaultValue, r.children),
                dt(t);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          Wc(t.textContent, n)
            ? (null != r.popover && (Nc("beforetoggle", t), Nc("toggle", t)),
              null != r.onScroll && Nc("scroll", t),
              null != r.onScrollEnd && Nc("scrollend", t),
              null != r.onClick && (t.onclick = qc),
              (t = !0))
            : (t = !1),
            t || ea(e);
        }
        function na(e) {
          for (Kr = e.return; Kr; )
            switch (Kr.tag) {
              case 3:
              case 27:
                return void (_r = !0);
              case 5:
              case 13:
                return void (_r = !1);
              default:
                Kr = Kr.return;
            }
        }
        function ra(e) {
          if (e !== Kr) return !1;
          if (!Jr) return na(e), (Jr = !0), !1;
          var t,
            n = !1;
          if (
            ((t = 3 !== e.tag && 27 !== e.tag) &&
              ((t = 5 === e.tag) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  _c(e.type, e.memoizedProps)),
              (t = !t)),
            t && (n = !0),
            n && Yr && ea(e),
            na(e),
            13 === e.tag)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      Yr = sd(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              Yr = null;
            }
          } else Yr = Kr ? sd(e.stateNode.nextSibling) : null;
          return !0;
        }
        function aa() {
          (Yr = Kr = null), (Jr = !1);
        }
        function ia(e) {
          null === Zr ? (Zr = [e]) : Zr.push(e);
        }
        var oa = Error(o(460)),
          sa = Error(o(474)),
          la = { then: function () {} };
        function ua(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function ca() {}
        function da(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(ca, ca), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              if ((e = t.reason) === oa) throw Error(o(483));
              throw e;
            default:
              if ("string" === typeof t.status) t.then(ca, ca);
              else {
                if (null !== (e = tu) && 100 < e.shellSuspendCounter)
                  throw Error(o(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  if ((e = t.reason) === oa) throw Error(o(483));
                  throw e;
              }
              throw ((fa = t), oa);
          }
        }
        var fa = null;
        function ha() {
          if (null === fa) throw Error(o(459));
          var e = fa;
          return (fa = null), e;
        }
        var pa = null,
          ma = 0;
        function ga(e) {
          var t = ma;
          return (ma += 1), null === pa && (pa = []), da(pa, e, t);
        }
        function va(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function ya(e, t) {
          if (t.$$typeof === l) throw Error(o(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ba(e) {
          return (0, e._init)(e._payload);
        }
        function xa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function a(e, t) {
            return ((e = Ml(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 33554434), n)
                    : r
                  : ((t.flags |= 33554434), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 33554434), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Wl(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n, r) {
            var i = n.type;
            return i === d
              ? p(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === w &&
                    ba(i) === t.type))
              ? (va((t = a(t, n.props)), n), (t.return = e), t)
              : (va((t = Ol(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function h(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = ql(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function p(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Ul(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function m(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = Wl("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case u:
                  return (
                    va((n = Ol(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case c:
                  return ((t = ql(t, e.mode, n)).return = e), t;
                case w:
                  return m(e, (t = (0, t._init)(t._payload)), n);
              }
              if (B(t) || A(t))
                return ((t = Ul(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return m(e, ga(t), n);
              if (t.$$typeof === g) return m(e, Ts(e, t), n);
              ya(e, t);
            }
            return null;
          }
          function v(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case u:
                  return n.key === a ? f(e, t, n, r) : null;
                case c:
                  return n.key === a ? h(e, t, n, r) : null;
                case w:
                  return v(e, t, (n = (a = n._init)(n._payload)), r);
              }
              if (B(n) || A(n)) return null !== a ? null : p(e, t, n, r, null);
              if ("function" === typeof n.then) return v(e, t, ga(n), r);
              if (n.$$typeof === g) return v(e, t, Ts(e, n), r);
              ya(e, n);
            }
            return null;
          }
          function y(e, t, n, r, a) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case u:
                  return f(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case c:
                  return h(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case w:
                  return y(e, t, n, (r = (0, r._init)(r._payload)), a);
              }
              if (B(r) || A(r)) return p(t, (e = e.get(n) || null), r, a, null);
              if ("function" === typeof r.then) return y(e, t, n, ga(r), a);
              if (r.$$typeof === g) return y(e, t, n, Ts(t, r), a);
              ya(t, r);
            }
            return null;
          }
          function b(l, f, h, p) {
            if (
              ("object" === typeof h &&
                null !== h &&
                h.type === d &&
                null === h.key &&
                (h = h.props.children),
              "object" === typeof h && null !== h)
            ) {
              switch (h.$$typeof) {
                case u:
                  e: {
                    for (var x = h.key; null !== f; ) {
                      if (f.key === x) {
                        if ((x = h.type) === d) {
                          if (7 === f.tag) {
                            n(l, f.sibling),
                              ((p = a(f, h.props.children)).return = l),
                              (l = p);
                            break e;
                          }
                        } else if (
                          f.elementType === x ||
                          ("object" === typeof x &&
                            null !== x &&
                            x.$$typeof === w &&
                            ba(x) === f.type)
                        ) {
                          n(l, f.sibling),
                            va((p = a(f, h.props)), h),
                            (p.return = l),
                            (l = p);
                          break e;
                        }
                        n(l, f);
                        break;
                      }
                      t(l, f), (f = f.sibling);
                    }
                    h.type === d
                      ? (((p = Ul(h.props.children, l.mode, p, h.key)).return =
                          l),
                        (l = p))
                      : (va(
                          (p = Ol(h.type, h.key, h.props, null, l.mode, p)),
                          h
                        ),
                        (p.return = l),
                        (l = p));
                  }
                  return s(l);
                case c:
                  e: {
                    for (x = h.key; null !== f; ) {
                      if (f.key === x) {
                        if (
                          4 === f.tag &&
                          f.stateNode.containerInfo === h.containerInfo &&
                          f.stateNode.implementation === h.implementation
                        ) {
                          n(l, f.sibling),
                            ((p = a(f, h.children || [])).return = l),
                            (l = p);
                          break e;
                        }
                        n(l, f);
                        break;
                      }
                      t(l, f), (f = f.sibling);
                    }
                    ((p = ql(h, l.mode, p)).return = l), (l = p);
                  }
                  return s(l);
                case w:
                  return b(l, f, (h = (x = h._init)(h._payload)), p);
              }
              if (B(h))
                return (function (a, o, s, l) {
                  for (
                    var u = null, c = null, d = o, f = (o = 0), h = null;
                    null !== d && f < s.length;
                    f++
                  ) {
                    d.index > f ? ((h = d), (d = null)) : (h = d.sibling);
                    var p = v(a, d, s[f], l);
                    if (null === p) {
                      null === d && (d = h);
                      break;
                    }
                    e && d && null === p.alternate && t(a, d),
                      (o = i(p, o, f)),
                      null === c ? (u = p) : (c.sibling = p),
                      (c = p),
                      (d = h);
                  }
                  if (f === s.length) return n(a, d), Jr && Xr(a, f), u;
                  if (null === d) {
                    for (; f < s.length; f++)
                      null !== (d = m(a, s[f], l)) &&
                        ((o = i(d, o, f)),
                        null === c ? (u = d) : (c.sibling = d),
                        (c = d));
                    return Jr && Xr(a, f), u;
                  }
                  for (d = r(d); f < s.length; f++)
                    null !== (h = y(d, a, f, s[f], l)) &&
                      (e &&
                        null !== h.alternate &&
                        d.delete(null === h.key ? f : h.key),
                      (o = i(h, o, f)),
                      null === c ? (u = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    Jr && Xr(a, f),
                    u
                  );
                })(l, f, h, p);
              if (A(h)) {
                if ("function" !== typeof (x = A(h))) throw Error(o(150));
                return (function (a, s, l, u) {
                  if (null == l) throw Error(o(151));
                  for (
                    var c = null,
                      d = null,
                      f = s,
                      h = (s = 0),
                      p = null,
                      g = l.next();
                    null !== f && !g.done;
                    h++, g = l.next()
                  ) {
                    f.index > h ? ((p = f), (f = null)) : (p = f.sibling);
                    var b = v(a, f, g.value, u);
                    if (null === b) {
                      null === f && (f = p);
                      break;
                    }
                    e && f && null === b.alternate && t(a, f),
                      (s = i(b, s, h)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (f = p);
                  }
                  if (g.done) return n(a, f), Jr && Xr(a, h), c;
                  if (null === f) {
                    for (; !g.done; h++, g = l.next())
                      null !== (g = m(a, g.value, u)) &&
                        ((s = i(g, s, h)),
                        null === d ? (c = g) : (d.sibling = g),
                        (d = g));
                    return Jr && Xr(a, h), c;
                  }
                  for (f = r(f); !g.done; h++, g = l.next())
                    null !== (g = y(f, a, h, g.value, u)) &&
                      (e &&
                        null !== g.alternate &&
                        f.delete(null === g.key ? h : g.key),
                      (s = i(g, s, h)),
                      null === d ? (c = g) : (d.sibling = g),
                      (d = g));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(a, e);
                      }),
                    Jr && Xr(a, h),
                    c
                  );
                })(l, f, (h = x.call(h)), p);
              }
              if ("function" === typeof h.then) return b(l, f, ga(h), p);
              if (h.$$typeof === g) return b(l, f, Ts(l, h), p);
              ya(l, h);
            }
            return ("string" === typeof h && "" !== h) ||
              "number" === typeof h ||
              "bigint" === typeof h
              ? ((h = "" + h),
                null !== f && 6 === f.tag
                  ? (n(l, f.sibling), ((p = a(f, h)).return = l), (l = p))
                  : (n(l, f), ((p = Wl(h, l.mode, p)).return = l), (l = p)),
                s(l))
              : n(l, f);
          }
          return function (e, t, n, r) {
            try {
              ma = 0;
              var a = b(e, t, n, r);
              return (pa = null), a;
            } catch (o) {
              if (o === oa) throw o;
              var i = Vl(29, o, null, e.mode);
              return (i.lanes = r), (i.return = e), i;
            }
          };
        }
        var wa = xa(!0),
          Sa = xa(!1),
          ka = Q(null),
          Ea = Q(0);
        function Aa(e, t) {
          K(Ea, (e = uu)), K(ka, t), (uu = e | t.baseLanes);
        }
        function Ta() {
          K(Ea, uu), K(ka, ka.current);
        }
        function ja() {
          (uu = Ea.current), H(ka), H(Ea);
        }
        var Ca = Q(null),
          Na = null;
        function Pa(e) {
          var t = e.alternate;
          K(za, 1 & za.current),
            K(Ca, e),
            null === Na &&
              (null === t || null !== ka.current || null !== t.memoizedState) &&
              (Na = e);
        }
        function Fa(e) {
          if (22 === e.tag) {
            if ((K(za, za.current), K(Ca, e), null === Na)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (Na = e);
            }
          } else Ra();
        }
        function Ra() {
          K(za, za.current), K(Ca, Ca.current);
        }
        function La(e) {
          H(Ca), Na === e && (Na = null), H(za);
        }
        var za = Q(0);
        function Va(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Da =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          Ma = r.unstable_scheduleCallback,
          Ia = r.unstable_NormalPriority,
          Oa = {
            $$typeof: g,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Ua() {
          return { controller: new Da(), data: new Map(), refCount: 0 };
        }
        function Ba(e) {
          e.refCount--,
            0 === e.refCount &&
              Ma(Ia, function () {
                e.controller.abort();
              });
        }
        var Wa = null,
          qa = 0,
          Xa = 0,
          Ga = null;
        function Qa() {
          if (0 === --qa && null !== Wa) {
            null !== Ga && (Ga.status = "fulfilled");
            var e = Wa;
            (Wa = null), (Xa = 0), (Ga = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Ha = P.S;
        P.S = function (e, t) {
          "object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === Wa) {
                var n = (Wa = []);
                (qa = 0),
                  (Xa = wc()),
                  (Ga = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              qa++, t.then(Qa, Qa);
            })(0, t),
            null !== Ha && Ha(e, t);
        };
        var Ka = Q(null);
        function Ya() {
          var e = Ka.current;
          return null !== e ? e : tu.pooledCache;
        }
        function Ja(e, t) {
          K(Ka, null === t ? Ka.current : t.pool);
        }
        function Za() {
          var e = Ya();
          return null === e ? null : { parent: Oa._currentValue, pool: e };
        }
        var _a = 0,
          $a = null,
          ei = null,
          ti = null,
          ni = !1,
          ri = !1,
          ai = !1,
          ii = 0,
          oi = 0,
          si = null,
          li = 0;
        function ui() {
          throw Error(o(321));
        }
        function ci(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Kn(e[n], t[n])) return !1;
          return !0;
        }
        function di(e, t, n, r, a, i) {
          return (
            (_a = i),
            ($a = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (P.H = null === e || null === e.memoizedState ? To : jo),
            (ai = !1),
            (i = n(r, a)),
            (ai = !1),
            ri && (i = hi(t, n, r, a)),
            fi(e),
            i
          );
        }
        function fi(e) {
          P.H = Ao;
          var t = null !== ei && null !== ei.next;
          if (
            ((_a = 0),
            (ti = ei = $a = null),
            (ni = !1),
            (oi = 0),
            (si = null),
            t)
          )
            throw Error(o(300));
          null === e ||
            Xo ||
            (null !== (e = e.dependencies) && ks(e) && (Xo = !0));
        }
        function hi(e, t, n, r) {
          $a = e;
          var a = 0;
          do {
            if ((ri && (si = null), (oi = 0), (ri = !1), 25 <= a))
              throw Error(o(301));
            if (((a += 1), (ti = ei = null), null != e.updateQueue)) {
              var i = e.updateQueue;
              (i.lastEffect = null),
                (i.events = null),
                (i.stores = null),
                null != i.memoCache && (i.memoCache.index = 0);
            }
            (P.H = Co), (i = t(n, r));
          } while (ri);
          return i;
        }
        function pi() {
          var e = P.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? xi(t) : t),
            (e = e.useState()[0]),
            (null !== ei ? ei.memoizedState : null) !== e && ($a.flags |= 1024),
            t
          );
        }
        function mi() {
          var e = 0 !== ii;
          return (ii = 0), e;
        }
        function gi(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function vi(e) {
          if (ni) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            ni = !1;
          }
          (_a = 0),
            (ti = ei = $a = null),
            (ri = !1),
            (oi = ii = 0),
            (si = null);
        }
        function yi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ti ? ($a.memoizedState = ti = e) : (ti = ti.next = e), ti
          );
        }
        function bi() {
          if (null === ei) {
            var e = $a.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ei.next;
          var t = null === ti ? $a.memoizedState : ti.next;
          if (null !== t) (ti = t), (ei = e);
          else {
            if (null === e) {
              if (null === $a.alternate) throw Error(o(467));
              throw Error(o(310));
            }
            (e = {
              memoizedState: (ei = e).memoizedState,
              baseState: ei.baseState,
              baseQueue: ei.baseQueue,
              queue: ei.queue,
              next: null,
            }),
              null === ti ? ($a.memoizedState = ti = e) : (ti = ti.next = e);
          }
          return ti;
        }
        function xi(e) {
          var t = oi;
          return (
            (oi += 1),
            null === si && (si = []),
            (e = da(si, e, t)),
            (t = $a),
            null === (null === ti ? t.memoizedState : ti.next) &&
              ((t = t.alternate),
              (P.H = null === t || null === t.memoizedState ? To : jo)),
            e
          );
        }
        function wi(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return xi(e);
            if (e.$$typeof === g) return As(e);
          }
          throw Error(o(438, String(e)));
        }
        function Si(e) {
          var t = null,
            n = $a.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = $a.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              ($a.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = k;
          return t.index++, n;
        }
        function ki(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ei(e) {
          return Ai(bi(), ei, e);
        }
        function Ai(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            i = r.pending;
          if (null !== i) {
            if (null !== a) {
              var s = a.next;
              (a.next = i.next), (i.next = s);
            }
            (t.baseQueue = a = i), (r.pending = null);
          }
          if (((i = e.baseState), null === a)) e.memoizedState = i;
          else {
            var l = (s = null),
              u = null,
              c = (t = a.next),
              d = !1;
            do {
              var f = -536870913 & c.lane;
              if (f !== c.lane ? (ru & f) === f : (_a & f) === f) {
                var h = c.revertLane;
                if (0 === h)
                  null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    f === Xa && (d = !0);
                else {
                  if ((_a & h) === h) {
                    (c = c.next), h === Xa && (d = !0);
                    continue;
                  }
                  (f = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === u ? ((l = u = f), (s = i)) : (u = u.next = f),
                    ($a.lanes |= h),
                    (du |= h);
                }
                (f = c.action),
                  ai && n(i, f),
                  (i = c.hasEagerState ? c.eagerState : n(i, f));
              } else
                (h = {
                  lane: f,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === u ? ((l = u = h), (s = i)) : (u = u.next = h),
                  ($a.lanes |= f),
                  (du |= f);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === u ? (s = i) : (u.next = l),
              !Kn(i, e.memoizedState) && ((Xo = !0), d && null !== (n = Ga)))
            )
              throw n;
            (e.memoizedState = i),
              (e.baseState = s),
              (e.baseQueue = u),
              (r.lastRenderedState = i);
          }
          return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function Ti(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== a);
            Kn(i, t.memoizedState) || (Xo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ji(e, t, n) {
          var r = $a,
            a = bi(),
            i = Jr;
          if (i) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else n = t();
          var s = !Kn((ei || a).memoizedState, n);
          if (
            (s && ((a.memoizedState = n), (Xo = !0)),
            (a = a.queue),
            _i(Pi.bind(null, r, a, e), [e]),
            a.getSnapshot !== t ||
              s ||
              (null !== ti && 1 & ti.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Hi(9, Ni.bind(null, r, a, n, t), { destroy: void 0 }, null),
              null === tu)
            )
              throw Error(o(349));
            i || 0 !== (60 & _a) || Ci(r, t, n);
          }
          return n;
        }
        function Ci(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = $a.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                ($a.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ni(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fi(t) && Ri(e);
        }
        function Pi(e, t, n) {
          return n(function () {
            Fi(t) && Ri(e);
          });
        }
        function Fi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Kn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ri(e) {
          var t = Nr(e, 2);
          null !== t && Ru(t, e, 2);
        }
        function Li(e) {
          var t = yi();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), ai)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ki,
              lastRenderedState: e,
            }),
            t
          );
        }
        function zi(e, t, n, r) {
          return (e.baseState = n), Ai(e, ei, "function" === typeof r ? r : ki);
        }
        function Vi(e, t, n, r, a) {
          if (So(e)) throw Error(o(485));
          if (null !== (e = t.action)) {
            var i = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                i.listeners.push(e);
              },
            };
            null !== P.T ? n(!0) : (i.isTransition = !1),
              r(i),
              null === (n = t.pending)
                ? ((i.next = t.pending = i), Di(t, i))
                : ((i.next = n.next), (t.pending = n.next = i));
          }
        }
        function Di(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var i = P.T,
              o = {};
            P.T = o;
            try {
              var s = n(a, r),
                l = P.S;
              null !== l && l(o, s), Mi(e, t, s);
            } catch (u) {
              Oi(e, t, u);
            } finally {
              P.T = i;
            }
          } else
            try {
              Mi(e, t, (i = n(a, r)));
            } catch (c) {
              Oi(e, t, c);
            }
        }
        function Mi(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  Ii(e, t, n);
                },
                function (n) {
                  return Oi(e, t, n);
                }
              )
            : Ii(e, t, n);
        }
        function Ii(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            Ui(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Di(e, n)));
        }
        function Oi(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), Ui(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function Ui(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Bi(e, t) {
          return t;
        }
        function Wi(e, t) {
          if (Jr) {
            var n = tu.formState;
            if (null !== n) {
              e: {
                var r = $a;
                if (Jr) {
                  if (Yr) {
                    t: {
                      for (var a = Yr, i = _r; 8 !== a.nodeType; ) {
                        if (!i) {
                          a = null;
                          break t;
                        }
                        if (null === (a = sd(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (i = a.data) || "F" === i ? a : null;
                    }
                    if (a) {
                      (Yr = sd(a.nextSibling)), (r = "F!" === a.data);
                      break e;
                    }
                  }
                  ea(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = yi()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Bi,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = bo.bind(null, $a, r)),
            (r.dispatch = n),
            (r = Li(!1)),
            (i = wo.bind(null, $a, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = yi()).queue = a),
            (n = Vi.bind(null, $a, a, i, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function qi(e) {
          return Xi(bi(), ei, e);
        }
        function Xi(e, t, n) {
          (t = Ai(e, t, Bi)[0]),
            (e = Ei(ki)[0]),
            (t =
              "object" === typeof t &&
              null !== t &&
              "function" === typeof t.then
                ? xi(t)
                : t);
          var r = bi(),
            a = r.queue,
            i = a.dispatch;
          return (
            n !== r.memoizedState &&
              (($a.flags |= 2048),
              Hi(9, Gi.bind(null, a, n), { destroy: void 0 }, null)),
            [t, i, e]
          );
        }
        function Gi(e, t) {
          e.action = t;
        }
        function Qi(e) {
          var t = bi(),
            n = ei;
          if (null !== n) return Xi(t, n, e);
          bi(), (t = t.memoizedState);
          var r = (n = bi()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function Hi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, inst: n, deps: r, next: null }),
            null === (t = $a.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              ($a.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ki() {
          return bi().memoizedState;
        }
        function Yi(e, t, n, r) {
          var a = yi();
          ($a.flags |= e),
            (a.memoizedState = Hi(
              1 | t,
              n,
              { destroy: void 0 },
              void 0 === r ? null : r
            ));
        }
        function Ji(e, t, n, r) {
          var a = bi();
          r = void 0 === r ? null : r;
          var i = a.memoizedState.inst;
          null !== ei && null !== r && ci(r, ei.memoizedState.deps)
            ? (a.memoizedState = Hi(t, n, i, r))
            : (($a.flags |= e), (a.memoizedState = Hi(1 | t, n, i, r)));
        }
        function Zi(e, t) {
          Yi(8390656, 8, e, t);
        }
        function _i(e, t) {
          Ji(2048, 8, e, t);
        }
        function $i(e, t) {
          return Ji(4, 2, e, t);
        }
        function eo(e, t) {
          return Ji(4, 4, e, t);
        }
        function to(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function no(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ji(4, 4, to.bind(null, t, e), n);
        }
        function ro() {}
        function ao(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && ci(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function io(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && ci(t, r[1])) return r[0];
          if (((r = e()), ai)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function oo(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & _a)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = Fu()),
              ($a.lanes |= e),
              (du |= e),
              n);
        }
        function so(e, t, n, r) {
          return Kn(n, t)
            ? n
            : null !== ka.current
            ? ((e = oo(e, n, r)), Kn(e, t) || (Xo = !0), e)
            : 0 === (42 & _a)
            ? ((Xo = !0), (e.memoizedState = n))
            : ((e = Fu()), ($a.lanes |= e), (du |= e), t);
        }
        function lo(e, t, n, r, a) {
          var i = W.p;
          W.p = 0 !== i && 8 > i ? i : 8;
          var o = P.T,
            s = {};
          (P.T = s), wo(e, !1, t, n);
          try {
            var l = a(),
              u = P.S;
            if (
              (null !== u && u(s, l),
              null !== l &&
                "object" === typeof l &&
                "function" === typeof l.then)
            )
              xo(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        (r.status = "fulfilled"), (r.value = t);
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      }
                    ),
                    r
                  );
                })(l, r),
                Pu()
              );
            else xo(e, t, r, Pu());
          } catch (c) {
            xo(
              e,
              t,
              { then: function () {}, status: "rejected", reason: c },
              Pu()
            );
          } finally {
            (W.p = i), (P.T = o);
          }
        }
        function uo() {}
        function co(e, t, n, r) {
          if (5 !== e.tag) throw Error(o(476));
          var a = fo(e).queue;
          lo(
            e,
            a,
            t,
            q,
            null === n
              ? uo
              : function () {
                  return ho(e), n(r);
                }
          );
        }
        function fo(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: q,
              baseState: q,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ki,
                lastRenderedState: q,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ki,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function ho(e) {
          xo(e, fo(e).next.queue, {}, Pu());
        }
        function po() {
          return As(Dd);
        }
        function mo() {
          return bi().memoizedState;
        }
        function go() {
          return bi().memoizedState;
        }
        function vo(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Pu(),
                  r = Rs(t, (e = Fs(n)), n);
                return (
                  null !== r && (Ru(r, t, n), Ls(r, t, n)),
                  (t = { cache: Ua() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function yo(e, t, n) {
          var r = Pu();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            So(e)
              ? ko(t, n)
              : null !== (n = Cr(e, t, n, r)) && (Ru(n, e, r), Eo(n, t, r));
        }
        function bo(e, t, n) {
          xo(e, t, n, Pu());
        }
        function xo(e, t, n, r) {
          var a = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (So(e)) ko(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), Kn(s, o)))
                  return jr(e, t, a, 0), null === tu && Tr(), !1;
              } catch (l) {}
            if (null !== (n = Cr(e, t, a, r)))
              return Ru(n, e, r), Eo(n, t, r), !0;
          }
          return !1;
        }
        function wo(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: wc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            So(e))
          ) {
            if (t) throw Error(o(479));
          } else null !== (t = Cr(e, n, r, 2)) && Ru(t, e, 2);
        }
        function So(e) {
          var t = e.alternate;
          return e === $a || (null !== t && t === $a);
        }
        function ko(e, t) {
          ri = ni = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Eo(e, t, n) {
          if (0 !== (4194176 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), ze(e, n);
          }
        }
        var Ao = {
          readContext: As,
          use: wi,
          useCallback: ui,
          useContext: ui,
          useEffect: ui,
          useImperativeHandle: ui,
          useLayoutEffect: ui,
          useInsertionEffect: ui,
          useMemo: ui,
          useReducer: ui,
          useRef: ui,
          useState: ui,
          useDebugValue: ui,
          useDeferredValue: ui,
          useTransition: ui,
          useSyncExternalStore: ui,
          useId: ui,
        };
        (Ao.useCacheRefresh = ui),
          (Ao.useMemoCache = ui),
          (Ao.useHostTransitionStatus = ui),
          (Ao.useFormState = ui),
          (Ao.useActionState = ui),
          (Ao.useOptimistic = ui);
        var To = {
          readContext: As,
          use: wi,
          useCallback: function (e, t) {
            return (yi().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: As,
          useEffect: Zi,
          useImperativeHandle: function (e, t, n) {
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              Yi(4194308, 4, to.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Yi(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Yi(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = yi();
            t = void 0 === t ? null : t;
            var r = e();
            if (ai) {
              be(!0);
              try {
                e();
              } finally {
                be(!1);
              }
            }
            return (n.memoizedState = [r, t]), r;
          },
          useReducer: function (e, t, n) {
            var r = yi();
            if (void 0 !== n) {
              var a = n(t);
              if (ai) {
                be(!0);
                try {
                  n(t);
                } finally {
                  be(!1);
                }
              }
            } else a = t;
            return (
              (r.memoizedState = r.baseState = a),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: a,
              }),
              (r.queue = e),
              (e = e.dispatch = yo.bind(null, $a, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (yi().memoizedState = e);
          },
          useState: function (e) {
            var t = (e = Li(e)).queue,
              n = bo.bind(null, $a, t);
            return (t.dispatch = n), [e.memoizedState, n];
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return oo(yi(), e, t);
          },
          useTransition: function () {
            var e = Li(!1);
            return (
              (e = lo.bind(null, $a, e.queue, !0, !1)),
              (yi().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = $a,
              a = yi();
            if (Jr) {
              if (void 0 === n) throw Error(o(407));
              n = n();
            } else {
              if (((n = t()), null === tu)) throw Error(o(349));
              0 !== (60 & ru) || Ci(r, t, n);
            }
            a.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
              (a.queue = i),
              Zi(Pi.bind(null, r, i, e), [e]),
              (r.flags |= 2048),
              Hi(9, Ni.bind(null, r, i, n, t), { destroy: void 0 }, null),
              n
            );
          },
          useId: function () {
            var e = yi(),
              t = tu.identifierPrefix;
            if (Jr) {
              var n = qr;
              (t =
                ":" +
                t +
                "R" +
                (n = (Wr & ~(1 << (32 - xe(Wr) - 1))).toString(32) + n)),
                0 < (n = ii++) && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = li++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          useCacheRefresh: function () {
            return (yi().memoizedState = vo.bind(null, $a));
          },
        };
        (To.useMemoCache = Si),
          (To.useHostTransitionStatus = po),
          (To.useFormState = Wi),
          (To.useActionState = Wi),
          (To.useOptimistic = function (e) {
            var t = yi();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = wo.bind(null, $a, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          });
        var jo = {
          readContext: As,
          use: wi,
          useCallback: ao,
          useContext: As,
          useEffect: _i,
          useImperativeHandle: no,
          useInsertionEffect: $i,
          useLayoutEffect: eo,
          useMemo: io,
          useReducer: Ei,
          useRef: Ki,
          useState: function () {
            return Ei(ki);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return so(bi(), ei.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Ei(ki)[0],
              t = bi().memoizedState;
            return ["boolean" === typeof e ? e : xi(e), t];
          },
          useSyncExternalStore: ji,
          useId: mo,
        };
        (jo.useCacheRefresh = go),
          (jo.useMemoCache = Si),
          (jo.useHostTransitionStatus = po),
          (jo.useFormState = qi),
          (jo.useActionState = qi),
          (jo.useOptimistic = function (e, t) {
            return zi(bi(), 0, e, t);
          });
        var Co = {
          readContext: As,
          use: wi,
          useCallback: ao,
          useContext: As,
          useEffect: _i,
          useImperativeHandle: no,
          useInsertionEffect: $i,
          useLayoutEffect: eo,
          useMemo: io,
          useReducer: Ti,
          useRef: Ki,
          useState: function () {
            return Ti(ki);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            var n = bi();
            return null === ei ? oo(n, e, t) : so(n, ei.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Ti(ki)[0],
              t = bi().memoizedState;
            return ["boolean" === typeof e ? e : xi(e), t];
          },
          useSyncExternalStore: ji,
          useId: mo,
        };
        function No(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        (Co.useCacheRefresh = go),
          (Co.useMemoCache = Si),
          (Co.useHostTransitionStatus = po),
          (Co.useFormState = Qi),
          (Co.useActionState = Qi),
          (Co.useOptimistic = function (e, t) {
            var n = bi();
            return null !== ei
              ? zi(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          });
        var Po = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && M(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Pu(),
              a = Fs(r);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Rs(e, a, r)) && (Ru(t, e, r), Ls(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Pu(),
              a = Fs(r);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Rs(e, a, r)) && (Ru(t, e, r), Ls(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Pu(),
              r = Fs(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = Rs(e, r, n)) && (Ru(t, e, n), Ls(t, e, n));
          },
        };
        function Fo(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Yn(n, r) ||
                !Yn(a, i);
        }
        function Ro(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Po.enqueueReplaceState(t, t.state, null);
        }
        function Lo(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var a in (n === t && (n = F({}, n)), e))
              void 0 === n[a] && (n[a] = e[a]);
          return n;
        }
        var zo =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function Vo(e) {
          zo(e);
        }
        function Do(e) {
          console.error(e);
        }
        function Mo(e) {
          zo(e);
        }
        function Io(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function Oo(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Uo(e, t, n) {
          return (
            ((n = Fs(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Io(e, t);
            }),
            n
          );
        }
        function Bo(e) {
          return ((e = Fs(e)).tag = 3), e;
        }
        function Wo(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var i = r.value;
            (e.payload = function () {
              return a(i);
            }),
              (e.callback = function () {
                Oo(t, n, r);
              });
          }
          var o = n.stateNode;
          null !== o &&
            "function" === typeof o.componentDidCatch &&
            (e.callback = function () {
              Oo(t, n, r),
                "function" !== typeof a &&
                  (null === Su ? (Su = new Set([this])) : Su.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var qo = Error(o(461)),
          Xo = !1;
        function Go(e, t, n, r) {
          t.child = null === e ? Sa(t, null, n, r) : wa(t, e.child, n, r);
        }
        function Qo(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          if ("ref" in r) {
            var o = {};
            for (var s in r) "ref" !== s && (o[s] = r[s]);
          } else o = r;
          return (
            Es(t),
            (r = di(e, t, n, o, i, a)),
            (s = mi()),
            null === e || Xo
              ? (Jr && s && Qr(t), (t.flags |= 1), Go(e, t, r, a), t.child)
              : (gi(e, t, a), fs(e, t, a))
          );
        }
        function Ho(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Dl(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare
              ? (((e = Ol(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Ko(e, t, i, r, a));
          }
          if (((i = e.child), !hs(e, a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Yn)(o, r) &&
              e.ref === t.ref
            )
              return fs(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ml(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ko(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (Yn(i, r) && e.ref === t.ref) {
              if (((Xo = !1), (t.pendingProps = r = i), !hs(e, a)))
                return (t.lanes = e.lanes), fs(e, t, a);
              0 !== (131072 & e.flags) && (Xo = !0);
            }
          }
          return _o(e, t, n, r, a);
        }
        function Yo(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = 0 !== (2 & t.stateNode._pendingVisibility),
            o = null !== e ? e.memoizedState : null;
          if ((Zo(e, t), "hidden" === r.mode || i)) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== o ? o.baseLanes | n : n), null !== e)) {
                for (a = t.child = e.child, i = 0; null !== a; )
                  (i = i | a.lanes | a.childLanes), (a = a.sibling);
                t.childLanes = i & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Jo(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Jo(e, t, null !== o ? o.baseLanes | n : n, n)
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Ja(0, null !== o ? o.cachePool : null),
              null !== o ? Aa(t, o) : Ta(),
              Fa(t);
          } else
            null !== o
              ? (Ja(0, o.cachePool), Aa(t, o), Ra(), (t.memoizedState = null))
              : (null !== e && Ja(0, null), Ta(), Ra());
          return Go(e, t, a, n), t.child;
        }
        function Jo(e, t, n, r) {
          var a = Ya();
          return (
            (a = null === a ? null : { parent: Oa._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && Ja(0, null),
            Ta(),
            Fa(t),
            null !== e && Ss(e, t, r, !0),
            null
          );
        }
        function Zo(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(o(284));
            (null !== e && e.ref === n) || (t.flags |= 2097664);
          }
        }
        function _o(e, t, n, r, a) {
          return (
            Es(t),
            (n = di(e, t, n, r, void 0, a)),
            (r = mi()),
            null === e || Xo
              ? (Jr && r && Qr(t), (t.flags |= 1), Go(e, t, n, a), t.child)
              : (gi(e, t, a), fs(e, t, a))
          );
        }
        function $o(e, t, n, r, a, i) {
          return (
            Es(t),
            (t.updateQueue = null),
            (n = hi(t, r, n, a)),
            fi(e),
            (r = mi()),
            null === e || Xo
              ? (Jr && r && Qr(t), (t.flags |= 1), Go(e, t, n, i), t.child)
              : (gi(e, t, i), fs(e, t, i))
          );
        }
        function es(e, t, n, r, a) {
          if ((Es(t), null === t.stateNode)) {
            var i = Rr,
              o = n.contextType;
            "object" === typeof o && null !== o && (i = As(o)),
              (i = new n(r, i)),
              (t.memoizedState =
                null !== i.state && void 0 !== i.state ? i.state : null),
              (i.updater = Po),
              (t.stateNode = i),
              (i._reactInternals = t),
              ((i = t.stateNode).props = r),
              (i.state = t.memoizedState),
              (i.refs = {}),
              Ns(t),
              (o = n.contextType),
              (i.context = "object" === typeof o && null !== o ? As(o) : Rr),
              (i.state = t.memoizedState),
              "function" === typeof (o = n.getDerivedStateFromProps) &&
                (No(t, n, o, r), (i.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof i.getSnapshotBeforeUpdate ||
                ("function" !== typeof i.UNSAFE_componentWillMount &&
                  "function" !== typeof i.componentWillMount) ||
                ((o = i.state),
                "function" === typeof i.componentWillMount &&
                  i.componentWillMount(),
                "function" === typeof i.UNSAFE_componentWillMount &&
                  i.UNSAFE_componentWillMount(),
                o !== i.state && Po.enqueueReplaceState(i, i.state, null),
                Ms(t, r, i, a),
                Ds(),
                (i.state = t.memoizedState)),
              "function" === typeof i.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            i = t.stateNode;
            var s = t.memoizedProps,
              l = Lo(n, s);
            i.props = l;
            var u = i.context,
              c = n.contextType;
            (o = Rr), "object" === typeof c && null !== c && (o = As(c));
            var d = n.getDerivedStateFromProps;
            (c =
              "function" === typeof d ||
              "function" === typeof i.getSnapshotBeforeUpdate),
              (s = t.pendingProps !== s),
              c ||
                ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof i.componentWillReceiveProps) ||
                ((s || u !== o) && Ro(t, i, r, o)),
              (Cs = !1);
            var f = t.memoizedState;
            (i.state = f),
              Ms(t, r, i, a),
              Ds(),
              (u = t.memoizedState),
              s || f !== u || Cs
                ? ("function" === typeof d &&
                    (No(t, n, d, r), (u = t.memoizedState)),
                  (l = Cs || Fo(t, n, l, r, f, u, o))
                    ? (c ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = o),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ps(e, t),
              (c = Lo(n, (o = t.memoizedProps))),
              (i.props = c),
              (d = t.pendingProps),
              (f = i.context),
              (u = n.contextType),
              (l = Rr),
              "object" === typeof u && null !== u && (l = As(u)),
              (u =
                "function" === typeof (s = n.getDerivedStateFromProps) ||
                "function" === typeof i.getSnapshotBeforeUpdate) ||
                ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof i.componentWillReceiveProps) ||
                ((o !== d || f !== l) && Ro(t, i, r, l)),
              (Cs = !1),
              (f = t.memoizedState),
              (i.state = f),
              Ms(t, r, i, a),
              Ds();
            var h = t.memoizedState;
            o !== d ||
            f !== h ||
            Cs ||
            (null !== e && null !== e.dependencies && ks(e.dependencies))
              ? ("function" === typeof s &&
                  (No(t, n, s, r), (h = t.memoizedState)),
                (c =
                  Cs ||
                  Fo(t, n, c, r, f, h, l) ||
                  (null !== e && null !== e.dependencies && ks(e.dependencies)))
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (i = r),
            Zo(e, t),
            (r = 0 !== (128 & t.flags)),
            i || r
              ? ((i = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : i.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = wa(t, e.child, null, a)),
                    (t.child = wa(t, null, n, a)))
                  : Go(e, t, n, a),
                (t.memoizedState = i.state),
                (e = t.child))
              : (e = fs(e, t, a)),
            e
          );
        }
        function ts(e, t, n, r) {
          return aa(), (t.flags |= 256), Go(e, t, n, r), t.child;
        }
        var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
        function rs(e) {
          return { baseLanes: e, cachePool: Za() };
        }
        function as(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= pu), e;
        }
        function is(e, t, n) {
          var r,
            a = t.pendingProps,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & za.current)),
            r && ((i = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (Jr) {
              if ((i ? Pa(t) : Ra(), Jr)) {
                var l,
                  u = Yr;
                if ((l = u)) {
                  e: {
                    for (l = u, u = _r; 8 !== l.nodeType; ) {
                      if (!u) {
                        u = null;
                        break e;
                      }
                      if (null === (l = sd(l.nextSibling))) {
                        u = null;
                        break e;
                      }
                    }
                    u = l;
                  }
                  null !== u
                    ? ((t.memoizedState = {
                        dehydrated: u,
                        treeContext:
                          null !== Br ? { id: Wr, overflow: qr } : null,
                        retryLane: 536870912,
                      }),
                      ((l = Vl(18, null, null, 0)).stateNode = u),
                      (l.return = t),
                      (t.child = l),
                      (Kr = t),
                      (Yr = null),
                      (l = !0))
                    : (l = !1);
                }
                l || ea(t);
              }
              if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                return (
                  "$!" === u.data ? (t.lanes = 16) : (t.lanes = 536870912), null
                );
              La(t);
            }
            return (
              (u = a.children),
              (a = a.fallback),
              i
                ? (Ra(),
                  (u = ss({ mode: "hidden", children: u }, (i = t.mode))),
                  (a = Ul(a, i, n, null)),
                  (u.return = t),
                  (a.return = t),
                  (u.sibling = a),
                  (t.child = u),
                  ((i = t.child).memoizedState = rs(n)),
                  (i.childLanes = as(e, r, n)),
                  (t.memoizedState = ns),
                  a)
                : (Pa(t), os(t, u))
            );
          }
          if (null !== (l = e.memoizedState) && null !== (u = l.dehydrated)) {
            if (s)
              256 & t.flags
                ? (Pa(t), (t.flags &= -257), (t = ls(e, t, n)))
                : null !== t.memoizedState
                ? (Ra(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (Ra(),
                  (i = a.fallback),
                  (u = t.mode),
                  (a = ss({ mode: "visible", children: a.children }, u)),
                  ((i = Ul(i, u, n, null)).flags |= 2),
                  (a.return = t),
                  (i.return = t),
                  (a.sibling = i),
                  (t.child = a),
                  wa(t, e.child, null, n),
                  ((a = t.child).memoizedState = rs(n)),
                  (a.childLanes = as(e, r, n)),
                  (t.memoizedState = ns),
                  (t = i));
            else if ((Pa(t), "$!" === u.data)) {
              if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((a = Error(o(419))).stack = ""),
                (a.digest = r),
                ia({ value: a, source: null, stack: null }),
                (t = ls(e, t, n));
            } else if (
              (Xo || Ss(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Xo || r)
            ) {
              if (null !== (r = tu)) {
                if (0 !== (42 & (a = n & -n))) a = 1;
                else
                  switch (a) {
                    case 2:
                      a = 1;
                      break;
                    case 8:
                      a = 4;
                      break;
                    case 32:
                      a = 16;
                      break;
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
                      a = 64;
                      break;
                    case 268435456:
                      a = 134217728;
                      break;
                    default:
                      a = 0;
                  }
                if (
                  0 !== (a = 0 !== (a & (r.suspendedLanes | n)) ? 0 : a) &&
                  a !== l.retryLane
                )
                  throw ((l.retryLane = a), Nr(e, a), Ru(r, e, a), qo);
              }
              "$?" === u.data || Xu(), (t = ls(e, t, n));
            } else
              "$?" === u.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = sc.bind(null, e)),
                  (u._reactRetry = t),
                  (t = null))
                : ((e = l.treeContext),
                  (Yr = sd(u.nextSibling)),
                  (Kr = t),
                  (Jr = !0),
                  (Zr = null),
                  (_r = !1),
                  null !== e &&
                    ((Or[Ur++] = Wr),
                    (Or[Ur++] = qr),
                    (Or[Ur++] = Br),
                    (Wr = e.id),
                    (qr = e.overflow),
                    (Br = t)),
                  ((t = os(t, a.children)).flags |= 4096));
            return t;
          }
          return i
            ? (Ra(),
              (i = a.fallback),
              (u = t.mode),
              (c = (l = e.child).sibling),
              ((a = Ml(l, {
                mode: "hidden",
                children: a.children,
              })).subtreeFlags = 31457280 & l.subtreeFlags),
              null !== c
                ? (i = Ml(c, i))
                : ((i = Ul(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              null === (u = e.child.memoizedState)
                ? (u = rs(n))
                : (null !== (l = u.cachePool)
                    ? ((c = Oa._currentValue),
                      (l = l.parent !== c ? { parent: c, pool: c } : l))
                    : (l = Za()),
                  (u = { baseLanes: u.baseLanes | n, cachePool: l })),
              (i.memoizedState = u),
              (i.childLanes = as(e, r, n)),
              (t.memoizedState = ns),
              a)
            : (Pa(t),
              (e = (n = e.child).sibling),
              ((n = Ml(n, { mode: "visible", children: a.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function os(e, t) {
          return (
            ((t = ss({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function ss(e, t) {
          return Bl(e, t, 0, null);
        }
        function ls(e, t, n) {
          return (
            wa(t, e.child, null, n),
            ((e = os(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xs(e.return, t, n);
        }
        function cs(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function ds(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((Go(e, t, r.children, n), 0 !== (2 & (r = za.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && us(e, n, t);
                else if (19 === e.tag) us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch ((K(za, r), a)) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Va(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                cs(t, !1, a, n, i);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Va(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              cs(t, !0, n, null, i);
              break;
            case "together":
              cs(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function fs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (du |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Ss(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ml((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ml(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function hs(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !ks(e))
          );
        }
        function ps(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Xo = !0;
            else {
              if (!hs(e, n) && 0 === (128 & t.flags))
                return (
                  (Xo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        $(t, t.stateNode.containerInfo),
                          ys(t, Oa, e.memoizedState.cache),
                          aa();
                        break;
                      case 27:
                      case 5:
                        te(t);
                        break;
                      case 4:
                        $(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        ys(t, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Pa(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? is(e, t, n)
                            : (Pa(t),
                              null !== (e = fs(e, t, n)) ? e.sibling : null);
                        Pa(t);
                        break;
                      case 19:
                        var a = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Ss(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          a)
                        ) {
                          if (r) return ds(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          K(za, za.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Yo(e, t, n);
                      case 24:
                        ys(t, Oa, e.memoizedState.cache);
                    }
                    return fs(e, t, n);
                  })(e, t, n)
                );
              Xo = 0 !== (131072 & e.flags);
            }
          else (Xo = !1), Jr && 0 !== (1048576 & t.flags) && Gr(t, Ir, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  a = r._init;
                if (
                  ((r = a(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((a = r.$$typeof) === v) {
                      (t.tag = 11), (t = Qo(null, t, r, e, n));
                      break e;
                    }
                    if (a === x) {
                      (t.tag = 14), (t = Ho(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = j(r) || r), Error(o(306, t, "")));
                }
                Dl(r)
                  ? ((e = Lo(r, e)), (t.tag = 1), (t = es(null, t, r, e, n)))
                  : ((t.tag = 0), (t = _o(null, t, r, e, n)));
              }
              return t;
            case 0:
              return _o(e, t, t.type, t.pendingProps, n);
            case 1:
              return es(e, t, (r = t.type), (a = Lo(r, t.pendingProps)), n);
            case 3:
              e: {
                if (($(t, t.stateNode.containerInfo), null === e))
                  throw Error(o(387));
                var i = t.pendingProps;
                (r = (a = t.memoizedState).element),
                  Ps(e, t),
                  Ms(t, i, null, n);
                var s = t.memoizedState;
                if (
                  ((i = s.cache),
                  ys(t, Oa, i),
                  i !== a.cache && ws(t, [Oa], n, !0),
                  Ds(),
                  (i = s.element),
                  a.isDehydrated)
                ) {
                  if (
                    ((a = { element: i, isDehydrated: !1, cache: s.cache }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = ts(e, t, i, n);
                    break e;
                  }
                  if (i !== r) {
                    ia((r = zr(Error(o(424)), t))), (t = ts(e, t, i, n));
                    break e;
                  }
                  for (
                    Yr = sd(t.stateNode.containerInfo.firstChild),
                      Kr = t,
                      Jr = !0,
                      Zr = null,
                      _r = !0,
                      n = Sa(t, null, i, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((aa(), i === r)) {
                    t = fs(e, t, n);
                    break e;
                  }
                  Go(e, t, i, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Zo(e, t),
                null === e
                  ? (n = gd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : Jr ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = Yc(Z.current).createElement(n))[Ie] = t),
                      (r[Oe] = e),
                      Qc(r, n, e),
                      Ze(r),
                      (t.stateNode = r))
                  : (t.memoizedState = gd(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                te(t),
                null === e &&
                  Jr &&
                  ((r = t.stateNode = ud(t.type, t.pendingProps, Z.current)),
                  (Kr = t),
                  (_r = !0),
                  (Yr = sd(r.firstChild))),
                (r = t.pendingProps.children),
                null !== e || Jr
                  ? Go(e, t, r, n)
                  : (t.child = wa(t, null, r, n)),
                Zo(e, t),
                t.child
              );
            case 5:
              return (
                null === e &&
                  Jr &&
                  ((a = r = Yr) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Ge])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (i = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  i !== a.rel ||
                                  e.getAttribute("href") !==
                                    (null == a.href ? null : a.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == a.crossOrigin
                                      ? null
                                      : a.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((i = e.getAttribute("src")) !==
                                    (null == a.src ? null : a.src) ||
                                    e.getAttribute("type") !==
                                      (null == a.type ? null : a.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == a.crossOrigin
                                        ? null
                                        : a.crossOrigin)) &&
                                  i &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var i = null == a.name ? null : "" + a.name;
                          if (
                            "hidden" === a.type &&
                            e.getAttribute("name") === i
                          )
                            return e;
                        }
                        if (null === (e = sd(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, _r))
                      ? ((t.stateNode = r),
                        (Kr = t),
                        (Yr = sd(r.firstChild)),
                        (_r = !1),
                        (a = !0))
                      : (a = !1)),
                  a || ea(t)),
                te(t),
                (a = t.type),
                (i = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (r = i.children),
                _c(a, i)
                  ? (r = null)
                  : null !== s && _c(a, s) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = di(e, t, pi, null, null, n)), (Dd._currentValue = a)),
                Zo(e, t),
                Go(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  Jr &&
                  ((e = n = Yr) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = sd(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, _r))
                      ? ((t.stateNode = n), (Kr = t), (Yr = null), (e = !0))
                      : (e = !1)),
                  e || ea(t)),
                null
              );
            case 13:
              return is(e, t, n);
            case 4:
              return (
                $(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wa(t, null, r, n)) : Go(e, t, r, n),
                t.child
              );
            case 11:
              return Qo(e, t, t.type, t.pendingProps, n);
            case 7:
              return Go(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Go(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                ys(t, t.type, r.value),
                Go(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                Es(t),
                (r = r((a = As(a)))),
                (t.flags |= 1),
                Go(e, t, r, n),
                t.child
              );
            case 14:
              return Ho(e, t, t.type, t.pendingProps, n);
            case 15:
              return Ko(e, t, t.type, t.pendingProps, n);
            case 19:
              return ds(e, t, n);
            case 22:
              return Yo(e, t, n);
            case 24:
              return (
                Es(t),
                (r = As(Oa)),
                null === e
                  ? (null === (a = Ya()) &&
                      ((a = tu),
                      (i = Ua()),
                      (a.pooledCache = i),
                      i.refCount++,
                      null !== i && (a.pooledCacheLanes |= n),
                      (a = i)),
                    (t.memoizedState = { parent: r, cache: a }),
                    Ns(t),
                    ys(t, Oa, a))
                  : (0 !== (e.lanes & n) &&
                      (Ps(e, t), Ms(t, null, null, n), Ds()),
                    (a = e.memoizedState),
                    (i = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }),
                        (t.memoizedState = a),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = a),
                        ys(t, Oa, r))
                      : ((r = i.cache),
                        ys(t, Oa, r),
                        r !== a.cache && ws(t, [Oa], n, !0))),
                Go(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(o(156, t.tag));
        }
        var ms = Q(null),
          gs = null,
          vs = null;
        function ys(e, t, n) {
          K(ms, t._currentValue), (t._currentValue = n);
        }
        function bs(e) {
          (e._currentValue = ms.current), H(ms);
        }
        function xs(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function ws(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var i = a.dependencies;
            if (null !== i) {
              var s = a.child;
              i = i.firstContext;
              e: for (; null !== i; ) {
                var l = i;
                i = a;
                for (var u = 0; u < t.length; u++)
                  if (l.context === t[u]) {
                    (i.lanes |= n),
                      null !== (l = i.alternate) && (l.lanes |= n),
                      xs(i.return, n, e),
                      r || (s = null);
                    break e;
                  }
                i = l.next;
              }
            } else if (18 === a.tag) {
              if (null === (s = a.return)) throw Error(o(341));
              (s.lanes |= n),
                null !== (i = s.alternate) && (i.lanes |= n),
                xs(s, n, e),
                (s = null);
            } else s = a.child;
            if (null !== s) s.return = a;
            else
              for (s = a; null !== s; ) {
                if (s === e) {
                  s = null;
                  break;
                }
                if (null !== (a = s.sibling)) {
                  (a.return = s.return), (s = a);
                  break;
                }
                s = s.return;
              }
            a = s;
          }
        }
        function Ss(e, t, n, r) {
          e = null;
          for (var a = t, i = !1; null !== a; ) {
            if (!i)
              if (0 !== (524288 & a.flags)) i = !0;
              else if (0 !== (262144 & a.flags)) break;
            if (10 === a.tag) {
              var s = a.alternate;
              if (null === s) throw Error(o(387));
              if (null !== (s = s.memoizedProps)) {
                var l = a.type;
                Kn(a.pendingProps.value, s.value) ||
                  (null !== e ? e.push(l) : (e = [l]));
              }
            } else if (a === _.current) {
              if (null === (s = a.alternate)) throw Error(o(387));
              s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(Dd) : (e = [Dd]));
            }
            a = a.return;
          }
          null !== e && ws(t, e, n, r), (t.flags |= 262144);
        }
        function ks(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Kn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Es(e) {
          (gs = e),
            (vs = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function As(e) {
          return js(gs, e);
        }
        function Ts(e, t) {
          return null === gs && Es(e), js(e, t);
        }
        function js(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === vs)
          ) {
            if (null === e) throw Error(o(308));
            (vs = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288);
          } else vs = vs.next = t;
          return n;
        }
        var Cs = !1;
        function Ns(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function Ps(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function Fs(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function Rs(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & eu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = Fr(e)),
              Pr(e, null, n),
              t
            );
          }
          return jr(e, r, t, n), Fr(e);
        }
        function Ls(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194176 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), ze(e, n);
          }
        }
        function zs(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var Vs = !1;
        function Ds() {
          if (Vs) {
            if (null !== Ga) throw Ga;
          }
        }
        function Ms(e, t, n, r) {
          Vs = !1;
          var a = e.updateQueue;
          Cs = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (i = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = u = l = null, s = i; ; ) {
              var f = -536870913 & s.lane,
                h = f !== s.lane;
              if (h ? (ru & f) === f : (r & f) === f) {
                0 !== f && f === Xa && (Vs = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var p = e,
                    m = s;
                  f = t;
                  var g = n;
                  switch (m.tag) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(g, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = m.payload)
                              ? p.call(g, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Cs = !0;
                  }
                }
                null !== (f = s.callback) &&
                  ((e.flags |= 64),
                  h && (e.flags |= 8192),
                  null === (h = a.callbacks) ? (a.callbacks = [f]) : h.push(f));
              } else
                (h = {
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
                  (o |= f);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (a.lastBaseUpdate = h),
                  (a.shared.pending = null);
              }
            }
            null === c && (l = d),
              (a.baseState = l),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null === i && (a.shared.lanes = 0),
              (du |= o),
              (e.lanes = o),
              (e.memoizedState = d);
          }
        }
        function Is(e, t) {
          if ("function" !== typeof e) throw Error(o(191, e));
          e.call(t);
        }
        function Os(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Is(n[e], t);
        }
        function Us(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var i = n.create,
                    o = n.inst;
                  (r = i()), (o.destroy = r);
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (s) {
            rc(t, t.return, s);
          }
        }
        function Bs(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var i = a.next;
              r = i;
              do {
                if ((r.tag & e) === e) {
                  var o = r.inst,
                    s = o.destroy;
                  if (void 0 !== s) {
                    (o.destroy = void 0), (a = t);
                    var l = n;
                    try {
                      s();
                    } catch (u) {
                      rc(a, l, u);
                    }
                  }
                }
                r = r.next;
              } while (r !== i);
            }
          } catch (u) {
            rc(t, t.return, u);
          }
        }
        function Ws(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Os(t, n);
            } catch (r) {
              rc(e, e.return, r);
            }
          }
        }
        function qs(e, t, n) {
          (n.props = Lo(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            rc(e, t, r);
          }
        }
        function Xs(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              var r = e.stateNode;
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var a = r;
                  break;
                default:
                  a = r;
              }
              "function" === typeof n ? (e.refCleanup = n(a)) : (n.current = a);
            }
          } catch (i) {
            rc(e, t, i);
          }
        }
        function Gs(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (a) {
                rc(e, t, a);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (i) {
                rc(e, t, i);
              }
            else n.current = null;
        }
        function Qs(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (a) {
            rc(e, e.return, a);
          }
        }
        function Hs(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var a = null,
                    i = null,
                    s = null,
                    l = null,
                    u = null,
                    c = null,
                    d = null;
                  for (p in n) {
                    var f = n[p];
                    if (n.hasOwnProperty(p) && null != f)
                      switch (p) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          u = f;
                        default:
                          r.hasOwnProperty(p) || Xc(e, t, p, null, r, f);
                      }
                  }
                  for (var h in r) {
                    var p = r[h];
                    if (
                      ((f = n[h]),
                      r.hasOwnProperty(h) && (null != p || null != f))
                    )
                      switch (h) {
                        case "type":
                          i = p;
                          break;
                        case "name":
                          a = p;
                          break;
                        case "checked":
                          c = p;
                          break;
                        case "defaultChecked":
                          d = p;
                          break;
                        case "value":
                          s = p;
                          break;
                        case "defaultValue":
                          l = p;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(o(137, t));
                          break;
                        default:
                          p !== f && Xc(e, t, h, p, r, f);
                      }
                  }
                  return void gt(e, s, l, u, c, d, i, a);
                case "select":
                  for (i in ((p = s = l = h = null), n))
                    if (((u = n[i]), n.hasOwnProperty(i) && null != u))
                      switch (i) {
                        case "value":
                          break;
                        case "multiple":
                          p = u;
                        default:
                          r.hasOwnProperty(i) || Xc(e, t, i, null, r, u);
                      }
                  for (a in r)
                    if (
                      ((i = r[a]),
                      (u = n[a]),
                      r.hasOwnProperty(a) && (null != i || null != u))
                    )
                      switch (a) {
                        case "value":
                          h = i;
                          break;
                        case "defaultValue":
                          l = i;
                          break;
                        case "multiple":
                          s = i;
                        default:
                          i !== u && Xc(e, t, a, i, r, u);
                      }
                  return (
                    (t = l),
                    (n = s),
                    (r = p),
                    void (null != h
                      ? bt(e, !!n, h, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (l in ((p = h = null), n))
                    if (
                      ((a = n[l]),
                      n.hasOwnProperty(l) && null != a && !r.hasOwnProperty(l))
                    )
                      switch (l) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Xc(e, t, l, null, r, a);
                      }
                  for (s in r)
                    if (
                      ((a = r[s]),
                      (i = n[s]),
                      r.hasOwnProperty(s) && (null != a || null != i))
                    )
                      switch (s) {
                        case "value":
                          h = a;
                          break;
                        case "defaultValue":
                          p = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(o(91));
                          break;
                        default:
                          a !== i && Xc(e, t, s, a, r, i);
                      }
                  return void xt(e, h, p);
                case "option":
                  for (var m in n)
                    if (
                      ((h = n[m]),
                      n.hasOwnProperty(m) && null != h && !r.hasOwnProperty(m))
                    )
                      if ("selected" === m) e.selected = !1;
                      else Xc(e, t, m, null, r, h);
                  for (u in r)
                    if (
                      ((h = r[u]),
                      (p = n[u]),
                      r.hasOwnProperty(u) &&
                        h !== p &&
                        (null != h || null != p))
                    )
                      if ("selected" === u)
                        e.selected =
                          h && "function" !== typeof h && "symbol" !== typeof h;
                      else Xc(e, t, u, h, r, p);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (h = n[g]),
                      n.hasOwnProperty(g) &&
                        null != h &&
                        !r.hasOwnProperty(g) &&
                        Xc(e, t, g, null, r, h);
                  for (c in r)
                    if (
                      ((h = r[c]),
                      (p = n[c]),
                      r.hasOwnProperty(c) &&
                        h !== p &&
                        (null != h || null != p))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(o(137, t));
                          break;
                        default:
                          Xc(e, t, c, h, r, p);
                      }
                  return;
                default:
                  if (Tt(t)) {
                    for (var v in n)
                      (h = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== h &&
                          !r.hasOwnProperty(v) &&
                          Gc(e, t, v, void 0, r, h);
                    for (d in r)
                      (h = r[d]),
                        (p = n[d]),
                        !r.hasOwnProperty(d) ||
                          h === p ||
                          (void 0 === h && void 0 === p) ||
                          Gc(e, t, d, h, r, p);
                    return;
                  }
              }
              for (var y in n)
                (h = n[y]),
                  n.hasOwnProperty(y) &&
                    null != h &&
                    !r.hasOwnProperty(y) &&
                    Xc(e, t, y, null, r, h);
              for (f in r)
                (h = r[f]),
                  (p = n[f]),
                  !r.hasOwnProperty(f) ||
                    h === p ||
                    (null == h && null == p) ||
                    Xc(e, t, f, h, r, p);
            })(r, e.type, n, t),
              (r[Oe] = t);
          } catch (a) {
            rc(e, e.return, a);
          }
        }
        function Ks(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            27 === e.tag ||
            4 === e.tag
          );
        }
        function Ys(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Ks(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Js(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = qc));
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Js(e, t, n), e = e.sibling; null !== e; )
              Js(e, t, n), (e = e.sibling);
        }
        function Zs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Zs(e, t, n), e = e.sibling; null !== e; )
              Zs(e, t, n), (e = e.sibling);
        }
        var _s = !1,
          $s = !1,
          el = !1,
          tl = "function" === typeof WeakSet ? WeakSet : Set,
          nl = null,
          rl = !1;
        function al(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              vl(e, n), 4 & r && Us(5, n);
              break;
            case 1:
              if ((vl(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (s) {
                    rc(n, n.return, s);
                  }
                else {
                  var a = Lo(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      a,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (l) {
                    rc(n, n.return, l);
                  }
                }
              64 & r && Ws(n), 512 & r && Xs(n, n.return);
              break;
            case 3:
              if ((vl(e, n), 64 & r && null !== (r = n.updateQueue))) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                try {
                  Os(r, e);
                } catch (s) {
                  rc(n, n.return, s);
                }
              }
              break;
            case 26:
              vl(e, n), 512 & r && Xs(n, n.return);
              break;
            case 27:
            case 5:
              vl(e, n),
                null === t && 4 & r && Qs(n),
                512 & r && Xs(n, n.return);
              break;
            case 12:
            default:
              vl(e, n);
              break;
            case 13:
              vl(e, n), 4 & r && cl(e, n);
              break;
            case 22:
              if (!(a = null !== n.memoizedState || _s)) {
                t = (null !== t && null !== t.memoizedState) || $s;
                var i = _s,
                  o = $s;
                (_s = a),
                  ($s = t) && !o
                    ? bl(e, n, 0 !== (8772 & n.subtreeFlags))
                    : vl(e, n),
                  (_s = i),
                  ($s = o);
              }
              512 & r &&
                ("manual" === n.memoizedProps.mode
                  ? Xs(n, n.return)
                  : Gs(n, n.return));
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Qe(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var ol = null,
          sl = !1;
        function ll(e, t, n) {
          for (n = n.child; null !== n; ) ul(e, t, n), (n = n.sibling);
        }
        function ul(e, t, n) {
          if (ye && "function" === typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ve, n);
            } catch (o) {}
          switch (n.tag) {
            case 26:
              $s || Gs(n, t),
                ll(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              $s || Gs(n, t);
              var r = ol,
                a = sl;
              for (
                ol = n.stateNode, ll(e, t, n), t = (n = n.stateNode).attributes;
                t.length;

              )
                n.removeAttributeNode(t[0]);
              Qe(n), (ol = r), (sl = a);
              break;
            case 5:
              $s || Gs(n, t);
            case 6:
              a = ol;
              var i = sl;
              if (((ol = null), ll(e, t, n), (sl = i), null !== (ol = a)))
                if (sl)
                  try {
                    (e = ol),
                      (r = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r);
                  } catch (s) {
                    rc(n, t, s);
                  }
                else
                  try {
                    ol.removeChild(n.stateNode);
                  } catch (s) {
                    rc(n, t, s);
                  }
              break;
            case 18:
              null !== ol &&
                (sl
                  ? ((t = ol),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? id(t.parentNode, n)
                      : 1 === t.nodeType && id(t, n),
                    gf(t))
                  : id(ol, n.stateNode));
              break;
            case 4:
              (r = ol),
                (a = sl),
                (ol = n.stateNode.containerInfo),
                (sl = !0),
                ll(e, t, n),
                (ol = r),
                (sl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              $s || Bs(2, n, t), $s || Bs(4, n, t), ll(e, t, n);
              break;
            case 1:
              $s ||
                (Gs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  qs(n, t, r)),
                ll(e, t, n);
              break;
            case 21:
              ll(e, t, n);
              break;
            case 22:
              $s || Gs(n, t),
                ($s = (r = $s) || null !== n.memoizedState),
                ll(e, t, n),
                ($s = r);
              break;
            default:
              ll(e, t, n);
          }
        }
        function cl(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              gf(e);
            } catch (n) {
              rc(t, t.return, n);
            }
        }
        function dl(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new tl()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new tl()),
                  t
                );
              default:
                throw Error(o(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = lc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function fl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                i = e,
                s = t,
                l = s;
              e: for (; null !== l; ) {
                switch (l.tag) {
                  case 27:
                  case 5:
                    (ol = l.stateNode), (sl = !1);
                    break e;
                  case 3:
                  case 4:
                    (ol = l.stateNode.containerInfo), (sl = !0);
                    break e;
                }
                l = l.return;
              }
              if (null === ol) throw Error(o(160));
              ul(i, s, a),
                (ol = null),
                (sl = !1),
                null !== (i = a.alternate) && (i.return = null),
                (a.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) pl(t, e), (t = t.sibling);
        }
        var hl = null;
        function pl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              fl(t, e),
                ml(e),
                4 & r && (Bs(3, e, e.return), Us(3, e), Bs(5, e, e.return));
              break;
            case 1:
              fl(t, e),
                ml(e),
                512 & r && ($s || null === n || Gs(n, n.return)),
                64 & r &&
                  _s &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var a = hl;
              if (
                (fl(t, e),
                ml(e),
                512 & r && ($s || null === n || Gs(n, n.return)),
                4 & r)
              ) {
                var i = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (a = a.ownerDocument || a);
                        t: switch (r) {
                          case "title":
                            (!(i = a.getElementsByTagName("title")[0]) ||
                              i[Ge] ||
                              i[Ie] ||
                              "http://www.w3.org/2000/svg" === i.namespaceURI ||
                              i.hasAttribute("itemprop")) &&
                              ((i = a.createElement(r)),
                              a.head.insertBefore(
                                i,
                                a.querySelector("head > title")
                              )),
                              Qc(i, r, n),
                              (i[Ie] = e),
                              Ze(i),
                              (r = i);
                            break e;
                          case "link":
                            var s = jd("link", "href", a).get(
                              r + (n.href || "")
                            );
                            if (s)
                              for (var l = 0; l < s.length; l++)
                                if (
                                  (i = s[l]).getAttribute("href") ===
                                    (null == n.href ? null : n.href) &&
                                  i.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  i.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  i.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  s.splice(l, 1);
                                  break t;
                                }
                            Qc((i = a.createElement(r)), r, n),
                              a.head.appendChild(i);
                            break;
                          case "meta":
                            if (
                              (s = jd("meta", "content", a).get(
                                r + (n.content || "")
                              ))
                            )
                              for (l = 0; l < s.length; l++)
                                if (
                                  (i = s[l]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  i.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  i.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  i.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  i.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  s.splice(l, 1);
                                  break t;
                                }
                            Qc((i = a.createElement(r)), r, n),
                              a.head.appendChild(i);
                            break;
                          default:
                            throw Error(o(468, r));
                        }
                        (i[Ie] = e), Ze(i), (r = i);
                      }
                      e.stateNode = r;
                    } else Cd(a, e.type, e.stateNode);
                  else e.stateNode = Sd(a, r, e.memoizedProps);
                else
                  i !== r
                    ? (null === i
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : i.count--,
                      null === r
                        ? Cd(a, e.type, e.stateNode)
                        : Sd(a, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      Hs(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              if (4 & r && null === e.alternate) {
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  for (var u = a.firstChild; u; ) {
                    var c = u.nextSibling,
                      d = u.nodeName;
                    u[Ge] ||
                      "HEAD" === d ||
                      "BODY" === d ||
                      "SCRIPT" === d ||
                      "STYLE" === d ||
                      ("LINK" === d && "stylesheet" === u.rel.toLowerCase()) ||
                      a.removeChild(u),
                      (u = c);
                  }
                  for (var f = e.type, h = a.attributes; h.length; )
                    a.removeAttributeNode(h[0]);
                  Qc(a, f, i), (a[Ie] = e), (a[Oe] = i);
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
            case 5:
              if (
                (fl(t, e),
                ml(e),
                512 & r && ($s || null === n || Gs(n, n.return)),
                32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  St(a, "");
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              4 & r &&
                null != e.stateNode &&
                Hs(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (el = !0);
              break;
            case 6:
              if ((fl(t, e), ml(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                ((Td = null),
                (a = hl),
                (hl = fd(t.containerInfo)),
                fl(t, e),
                (hl = a),
                ml(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  gf(t.containerInfo);
                } catch (m) {
                  rc(e, e.return, m);
                }
              el && ((el = !1), gl(e));
              break;
            case 4:
              (r = hl),
                (hl = fd(e.stateNode.containerInfo)),
                fl(t, e),
                ml(e),
                (hl = r);
              break;
            case 12:
              fl(t, e), ml(e);
              break;
            case 13:
              fl(t, e),
                ml(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (bu = le()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), dl(e, r));
              break;
            case 22:
              if (
                (512 & r && ($s || null === n || Gs(n, n.return)),
                (u = null !== e.memoizedState),
                (c = null !== n && null !== n.memoizedState),
                (_s = (d = _s) || u),
                ($s = (f = $s) || c),
                fl(t, e),
                ($s = f),
                (_s = d),
                ml(e),
                ((t = e.stateNode)._current = e),
                (t._visibility &= -3),
                (t._visibility |= 2 & t._pendingVisibility),
                8192 & r &&
                  ((t._visibility = u ? -2 & t._visibility : 1 | t._visibility),
                  u && ((t = _s || $s), null === n || c || t || yl(e)),
                  null === e.memoizedProps ||
                    "manual" !== e.memoizedProps.mode))
              )
                e: for (n = null, t = e; ; ) {
                  if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((a = c.stateNode), u))
                          "function" === typeof (i = a.style).setProperty
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none");
                        else {
                          s = c.stateNode;
                          var p =
                            void 0 !== (l = c.memoizedProps.style) &&
                            null !== l &&
                            l.hasOwnProperty("display")
                              ? l.display
                              : null;
                          s.style.display =
                            null == p || "boolean" === typeof p
                              ? ""
                              : ("" + p).trim();
                        }
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), dl(e, n));
              break;
            case 19:
              fl(t, e),
                ml(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), dl(e, r));
              break;
            case 21:
              break;
            default:
              fl(t, e), ml(e);
          }
        }
        function ml(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              if (27 !== e.tag) {
                e: {
                  for (var n = e.return; null !== n; ) {
                    if (Ks(n)) {
                      var r = n;
                      break e;
                    }
                    n = n.return;
                  }
                  throw Error(o(160));
                }
                switch (r.tag) {
                  case 27:
                    var a = r.stateNode;
                    Zs(e, Ys(e), a);
                    break;
                  case 5:
                    var i = r.stateNode;
                    32 & r.flags && (St(i, ""), (r.flags &= -33)),
                      Zs(e, Ys(e), i);
                    break;
                  case 3:
                  case 4:
                    var s = r.stateNode.containerInfo;
                    Js(e, Ys(e), s);
                    break;
                  default:
                    throw Error(o(161));
                }
              }
            } catch (l) {
              rc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gl(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              gl(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function vl(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              al(e, t.alternate, t), (t = t.sibling);
        }
        function yl(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bs(4, t, t.return), yl(t);
                break;
              case 1:
                Gs(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  qs(t, t.return, n),
                  yl(t);
                break;
              case 26:
              case 27:
              case 5:
                Gs(t, t.return), yl(t);
                break;
              case 22:
                Gs(t, t.return), null === t.memoizedState && yl(t);
                break;
              default:
                yl(t);
            }
            e = e.sibling;
          }
        }
        function bl(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              a = e,
              i = t,
              o = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                bl(a, i, n), Us(4, i);
                break;
              case 1:
                if (
                  (bl(a, i, n),
                  "function" ===
                    typeof (a = (r = i).stateNode).componentDidMount)
                )
                  try {
                    a.componentDidMount();
                  } catch (u) {
                    rc(r, r.return, u);
                  }
                if (null !== (a = (r = i).updateQueue)) {
                  var s = r.stateNode;
                  try {
                    var l = a.shared.hiddenCallbacks;
                    if (null !== l)
                      for (
                        a.shared.hiddenCallbacks = null, a = 0;
                        a < l.length;
                        a++
                      )
                        Is(l[a], s);
                  } catch (u) {
                    rc(r, r.return, u);
                  }
                }
                n && 64 & o && Ws(i), Xs(i, i.return);
                break;
              case 26:
              case 27:
              case 5:
                bl(a, i, n), n && null === r && 4 & o && Qs(i), Xs(i, i.return);
                break;
              case 12:
              default:
                bl(a, i, n);
                break;
              case 13:
                bl(a, i, n), n && 4 & o && cl(a, i);
                break;
              case 22:
                null === i.memoizedState && bl(a, i, n), Xs(i, i.return);
            }
            t = t.sibling;
          }
        }
        function xl(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ba(n));
        }
        function wl(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Ba(e));
        }
        function Sl(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) kl(e, t, n, r), (t = t.sibling);
        }
        function kl(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Sl(e, t, n, r), 2048 & a && Us(9, t);
              break;
            case 3:
              Sl(e, t, n, r),
                2048 & a &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Ba(e)));
              break;
            case 12:
              if (2048 & a) {
                Sl(e, t, n, r), (e = t.stateNode);
                try {
                  var i = t.memoizedProps,
                    o = i.id,
                    s = i.onPostCommit;
                  "function" === typeof s &&
                    s(
                      o,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (l) {
                  rc(t, t.return, l);
                }
              } else Sl(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (i = t.stateNode),
                null !== t.memoizedState
                  ? 4 & i._visibility
                    ? Sl(e, t, n, r)
                    : Al(e, t)
                  : 4 & i._visibility
                  ? Sl(e, t, n, r)
                  : ((i._visibility |= 4),
                    El(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & a && xl(t.alternate, t);
              break;
            case 24:
              Sl(e, t, n, r), 2048 & a && wl(t.alternate, t);
              break;
            default:
              Sl(e, t, n, r);
          }
        }
        function El(e, t, n, r, a) {
          for (
            a = a && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var i = e,
              o = t,
              s = n,
              l = r,
              u = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                El(i, o, s, l, a), Us(8, o);
                break;
              case 23:
                break;
              case 22:
                var c = o.stateNode;
                null !== o.memoizedState
                  ? 4 & c._visibility
                    ? El(i, o, s, l, a)
                    : Al(i, o)
                  : ((c._visibility |= 4), El(i, o, s, l, a)),
                  a && 2048 & u && xl(o.alternate, o);
                break;
              case 24:
                El(i, o, s, l, a), a && 2048 & u && wl(o.alternate, o);
                break;
              default:
                El(i, o, s, l, a);
            }
            t = t.sibling;
          }
        }
        function Al(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  Al(n, r), 2048 & a && xl(r.alternate, r);
                  break;
                case 24:
                  Al(n, r), 2048 & a && wl(r.alternate, r);
                  break;
                default:
                  Al(n, r);
              }
              t = t.sibling;
            }
        }
        var Tl = 8192;
        function jl(e) {
          if (e.subtreeFlags & Tl)
            for (e = e.child; null !== e; ) Cl(e), (e = e.sibling);
        }
        function Cl(e) {
          switch (e.tag) {
            case 26:
              jl(e),
                e.flags & Tl &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Pd) throw Error(o(475));
                    var r = Pd;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var a = vd(n.href),
                          i = e.querySelector(yd(a));
                        if (i)
                          return (
                            null !== (e = i._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = Rd.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = i),
                            void Ze(i)
                          );
                        (i = e.ownerDocument || e),
                          (n = bd(n)),
                          (a = cd.get(a)) && Ed(n, a),
                          Ze((i = i.createElement("link")));
                        var s = i;
                        (s._p = new Promise(function (e, t) {
                          (s.onload = e), (s.onerror = t);
                        })),
                          Qc(i, "link", n),
                          (t.instance = i);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = Rd.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(hl, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              jl(e);
              break;
            case 3:
            case 4:
              var t = hl;
              (hl = fd(e.stateNode.containerInfo)), jl(e), (hl = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = Tl), (Tl = 16777216), jl(e), (Tl = t))
                  : jl(e));
          }
        }
        function Nl(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Pl(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nl = r), Ll(r, e);
              }
            Nl(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) Fl(e), (e = e.sibling);
        }
        function Fl(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Pl(e), 2048 & e.flags && Bs(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Pl(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              4 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -5), Rl(e))
                : Pl(e);
          }
        }
        function Rl(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nl = r), Ll(r, e);
              }
            Nl(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                Bs(8, t, t.return), Rl(t);
                break;
              case 22:
                4 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -5), Rl(t));
                break;
              default:
                Rl(t);
            }
            e = e.sibling;
          }
        }
        function Ll(e, t) {
          for (; null !== nl; ) {
            var n = nl;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Bs(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ba(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (nl = r);
            else
              e: for (n = e; null !== nl; ) {
                var a = (r = nl).sibling,
                  i = r.return;
                if ((il(r), r === n)) {
                  nl = null;
                  break e;
                }
                if (null !== a) {
                  (a.return = i), (nl = a);
                  break e;
                }
                nl = i;
              }
          }
        }
        function zl(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
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
        function Vl(e, t, n, r) {
          return new zl(e, t, n, r);
        }
        function Dl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ml(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Vl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 31457280 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Il(e, t) {
          e.flags &= 31457282;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Ol(e, t, n, r, a, i) {
          var s = 0;
          if (((r = e), "function" === typeof e)) Dl(e) && (s = 1);
          else if ("string" === typeof e)
            s = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, Y.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case d:
                return Ul(n.children, a, i, t);
              case f:
                (s = 8), (a |= 24);
                break;
              case h:
                return (
                  ((e = Vl(12, n, t, 2 | a)).elementType = h), (e.lanes = i), e
                );
              case y:
                return (
                  ((e = Vl(13, n, t, a)).elementType = y), (e.lanes = i), e
                );
              case b:
                return (
                  ((e = Vl(19, n, t, a)).elementType = b), (e.lanes = i), e
                );
              case S:
                return Bl(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case p:
                    case g:
                      s = 10;
                      break e;
                    case m:
                      s = 9;
                      break e;
                    case v:
                      s = 11;
                      break e;
                    case x:
                      s = 14;
                      break e;
                    case w:
                      (s = 16), (r = null);
                      break e;
                  }
                (s = 29),
                  (n = Error(o(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = Vl(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ul(e, t, n, r) {
          return ((e = Vl(7, e, r, t)).lanes = n), e;
        }
        function Bl(e, t, n, r) {
          ((e = Vl(22, e, r, t)).elementType = S), (e.lanes = n);
          var a = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
              var e = a._current;
              if (null === e) throw Error(o(456));
              if (0 === (2 & a._pendingVisibility)) {
                var t = Nr(e, 2);
                null !== t && ((a._pendingVisibility |= 2), Ru(t, e, 2));
              }
            },
            attach: function () {
              var e = a._current;
              if (null === e) throw Error(o(456));
              if (0 !== (2 & a._pendingVisibility)) {
                var t = Nr(e, 2);
                null !== t && ((a._pendingVisibility &= -3), Ru(t, e, 2));
              }
            },
          };
          return (e.stateNode = a), e;
        }
        function Wl(e, t, n) {
          return ((e = Vl(6, e, null, t)).lanes = n), e;
        }
        function ql(e, t, n) {
          return (
            ((t = Vl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Xl(e) {
          e.flags |= 4;
        }
        function Gl(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Nd(t))) {
            if (
              null !== (t = Ca.current) &&
              ((4194176 & ru) === ru
                ? null !== Na
                : ((62914560 & ru) !== ru && 0 === (536870912 & ru)) ||
                  t !== Na)
            )
              throw ((fa = la), sa);
            e.flags |= 8192;
          }
        }
        function Ql(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Pe() : 536870912),
              (e.lanes |= t),
              (mu |= t));
        }
        function Hl(e, t) {
          if (!Jr)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Kl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 31457280 & a.subtreeFlags),
                (r |= 31457280 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch ((Hr(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return Kl(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                bs(Oa),
                ee(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ra(t)
                    ? Xl(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Zr && (zu(Zr), (Zr = null)))),
                Kl(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Xl(t),
                    null !== n
                      ? (Kl(t), Gl(t, n))
                      : (Kl(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Xl(t), Kl(t), Gl(t, n))
                    : (Kl(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Xl(t),
                    Kl(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              ne(t), (n = Z.current);
              var a = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Xl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Kl(t), null;
                }
                (e = Y.current),
                  ra(t) ? ta(t) : ((e = ud(a, r, n)), (t.stateNode = e), Xl(t));
              }
              return Kl(t), null;
            case 5:
              if ((ne(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Xl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Kl(t), null;
                }
                if (((e = Y.current), ra(t))) ta(t);
                else {
                  switch (((a = Yc(Z.current)), e)) {
                    case 1:
                      e = a.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = a.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = a.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = a.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = a.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" === typeof r.is
                              ? a.createElement("select", { is: r.is })
                              : a.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? a.createElement(n, { is: r.is })
                              : a.createElement(n);
                      }
                  }
                  (e[Ie] = t), (e[Oe] = r);
                  e: for (a = t.child; null !== a; ) {
                    if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                    else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                      (a.child.return = a), (a = a.child);
                      continue;
                    }
                    if (a === t) break e;
                    for (; null === a.sibling; ) {
                      if (null === a.return || a.return === t) break e;
                      a = a.return;
                    }
                    (a.sibling.return = a.return), (a = a.sibling);
                  }
                  t.stateNode = e;
                  e: switch ((Qc(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Xl(t);
                }
              }
              return Kl(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Xl(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((e = Z.current), ra(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (a = Kr))
                  )
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  (e[Ie] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      Wc(e.nodeValue, n)
                    )) || ea(t);
                } else
                  ((e = Yc(e).createTextNode(r))[Ie] = t), (t.stateNode = e);
              }
              return Kl(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((a = ra(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(o(317));
                    a[Ie] = t;
                  } else
                    aa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Kl(t), (a = !1);
                } else null !== Zr && (zu(Zr), (Zr = null)), (a = !0);
                if (!a) return 256 & t.flags ? (La(t), t) : (La(t), null);
              }
              if ((La(t), 0 !== (128 & t.flags))) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (a = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (a = r.alternate.memoizedState.cachePool.pool);
                var i = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (i = r.memoizedState.cachePool.pool),
                  i !== a && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                Ql(t, t.updateQueue),
                Kl(t),
                null
              );
            case 4:
              return (
                ee(), null === e && Rc(t.stateNode.containerInfo), Kl(t), null
              );
            case 10:
              return bs(t.type), Kl(t), null;
            case 19:
              if ((H(za), null === (a = t.memoizedState))) return Kl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (i = a.rendering)))
                if (r) Hl(a, !1);
                else {
                  if (0 !== cu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (i = Va(e))) {
                        for (
                          t.flags |= 128,
                            Hl(a, !1),
                            e = i.updateQueue,
                            t.updateQueue = e,
                            Ql(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Il(n, e), (n = n.sibling);
                        return K(za, (1 & za.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    le() > xu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Hl(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = Va(i))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      Ql(t, e),
                      Hl(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !i.alternate &&
                        !Jr)
                    )
                      return Kl(t), null;
                  } else
                    2 * le() - a.renderingStartTime > xu &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Hl(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((i.sibling = t.child), (t.child = i))
                  : (null !== (e = a.last) ? (e.sibling = i) : (t.child = i),
                    (a.last = i));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = le()),
                  (t.sibling = null),
                  (e = za.current),
                  K(za, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Kl(t), null);
            case 22:
            case 23:
              return (
                La(t),
                ja(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (Kl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Kl(t),
                null !== (n = t.updateQueue) && Ql(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && H(Ka),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                bs(Oa),
                Kl(t),
                null
              );
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Jl(e, t) {
          switch ((Hr(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                bs(Oa),
                ee(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return ne(t), null;
            case 13:
              if (
                (La(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                aa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return H(za), null;
            case 4:
              return ee(), null;
            case 10:
              return bs(t.type), null;
            case 22:
            case 23:
              return (
                La(t),
                ja(),
                null !== e && H(Ka),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return bs(Oa), null;
            default:
              return null;
          }
        }
        function Zl(e, t) {
          switch ((Hr(t), t.tag)) {
            case 3:
              bs(Oa), ee();
              break;
            case 26:
            case 27:
            case 5:
              ne(t);
              break;
            case 4:
              ee();
              break;
            case 13:
              La(t);
              break;
            case 19:
              H(za);
              break;
            case 10:
              bs(t.type);
              break;
            case 22:
            case 23:
              La(t), ja(), null !== e && H(Ka);
              break;
            case 24:
              bs(Oa);
          }
        }
        var _l = {
            getCacheForType: function (e) {
              var t = As(Oa),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          $l = "function" === typeof WeakMap ? WeakMap : Map,
          eu = 0,
          tu = null,
          nu = null,
          ru = 0,
          au = 0,
          iu = null,
          ou = !1,
          su = !1,
          lu = !1,
          uu = 0,
          cu = 0,
          du = 0,
          fu = 0,
          hu = 0,
          pu = 0,
          mu = 0,
          gu = null,
          vu = null,
          yu = !1,
          bu = 0,
          xu = 1 / 0,
          wu = null,
          Su = null,
          ku = !1,
          Eu = null,
          Au = 0,
          Tu = 0,
          ju = null,
          Cu = 0,
          Nu = null;
        function Pu() {
          if (0 !== (2 & eu) && 0 !== ru) return ru & -ru;
          if (null !== P.T) {
            return 0 !== Xa ? Xa : wc();
          }
          return De();
        }
        function Fu() {
          0 === pu && (pu = 0 === (536870912 & ru) || Jr ? Ne() : 536870912);
          var e = Ca.current;
          return null !== e && (e.flags |= 32), pu;
        }
        function Ru(e, t, n) {
          ((e === tu && 2 === au) || null !== e.cancelPendingCommit) &&
            (Uu(e, 0), Mu(e, ru, pu, !1)),
            Re(e, n),
            (0 !== (2 & eu) && e === tu) ||
              (e === tu &&
                (0 === (2 & eu) && (fu |= n), 4 === cu && Mu(e, ru, pu, !1)),
              mc(e));
        }
        function Lu(e, t, n) {
          if (0 !== (6 & eu)) throw Error(o(327));
          for (
            var r =
                (!n && 0 === (60 & t) && 0 === (t & e.expiredLanes)) ||
                je(e, t),
              a = r
                ? (function (e, t) {
                    var n = eu;
                    eu |= 2;
                    var r = Wu(),
                      a = qu();
                    tu !== e || ru !== t
                      ? ((wu = null), (xu = le() + 500), Uu(e, t))
                      : (su = je(e, t));
                    e: for (;;)
                      try {
                        if (0 !== au && null !== nu) {
                          t = nu;
                          var i = iu;
                          t: switch (au) {
                            case 1:
                              (au = 0), (iu = null), Ju(e, t, i, 1);
                              break;
                            case 2:
                              if (ua(i)) {
                                (au = 0), (iu = null), Yu(t);
                                break;
                              }
                              (t = function () {
                                2 === au && tu === e && (au = 7), mc(e);
                              }),
                                i.then(t, t);
                              break e;
                            case 3:
                              au = 7;
                              break e;
                            case 4:
                              au = 5;
                              break e;
                            case 7:
                              ua(i)
                                ? ((au = 0), (iu = null), Yu(t))
                                : ((au = 0), (iu = null), Ju(e, t, i, 7));
                              break;
                            case 5:
                              var s = null;
                              switch (nu.tag) {
                                case 26:
                                  s = nu.memoizedState;
                                case 5:
                                case 27:
                                  var l = nu;
                                  if (!s || Nd(s)) {
                                    (au = 0), (iu = null);
                                    var u = l.sibling;
                                    if (null !== u) nu = u;
                                    else {
                                      var c = l.return;
                                      null !== c
                                        ? ((nu = c), Zu(c))
                                        : (nu = null);
                                    }
                                    break t;
                                  }
                              }
                              (au = 0), (iu = null), Ju(e, t, i, 5);
                              break;
                            case 6:
                              (au = 0), (iu = null), Ju(e, t, i, 6);
                              break;
                            case 8:
                              Ou(), (cu = 6);
                              break e;
                            default:
                              throw Error(o(462));
                          }
                        }
                        Hu();
                        break;
                      } catch (d) {
                        Bu(e, d);
                      }
                    return (
                      (vs = gs = null),
                      (P.H = r),
                      (P.A = a),
                      (eu = n),
                      null !== nu ? 0 : ((tu = null), (ru = 0), Tr(), cu)
                    );
                  })(e, t)
                : Gu(e, t, !0),
              i = r;
            ;

          ) {
            if (0 === a) {
              su && !r && Mu(e, t, 0, !1);
              break;
            }
            if (6 === a) Mu(e, t, 0, !ou);
            else {
              if (((n = e.current.alternate), i && !Du(n))) {
                (a = Gu(e, t, !1)), (i = !1);
                continue;
              }
              if (2 === a) {
                if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
                else
                  s =
                    0 !== (s = -536870913 & e.pendingLanes)
                      ? s
                      : 536870912 & s
                      ? 536870912
                      : 0;
                if (0 !== s) {
                  t = s;
                  e: {
                    var l = e;
                    a = gu;
                    var u = l.current.memoizedState.isDehydrated;
                    if (
                      (u && (Uu(l, s).flags |= 256), 2 !== (s = Gu(l, s, !1)))
                    ) {
                      if (lu && !u) {
                        (l.errorRecoveryDisabledLanes |= i), (fu |= i), (a = 4);
                        break e;
                      }
                      (i = vu), (vu = a), null !== i && zu(i);
                    }
                    a = s;
                  }
                  if (((i = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                Uu(e, 0), Mu(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), a)) {
                  case 0:
                  case 1:
                    throw Error(o(345));
                  case 4:
                    if ((4194176 & t) === t) {
                      Mu(r, t, pu, !ou);
                      break e;
                    }
                    break;
                  case 2:
                    vu = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if (
                  ((r.finishedWork = n),
                  (r.finishedLanes = t),
                  (62914560 & t) === t && 10 < (i = bu + 300 - le()))
                ) {
                  if ((Mu(r, t, pu, !ou), 0 !== Te(r, 0))) break e;
                  r.timeoutHandle = ed(
                    Vu.bind(
                      null,
                      r,
                      n,
                      vu,
                      wu,
                      yu,
                      t,
                      pu,
                      fu,
                      mu,
                      ou,
                      2,
                      -0,
                      0
                    ),
                    i
                  );
                } else Vu(r, n, vu, wu, yu, t, pu, fu, mu, ou, 0, -0, 0);
              }
            }
            break;
          }
          mc(e);
        }
        function zu(e) {
          null === vu ? (vu = e) : vu.push.apply(vu, e);
        }
        function Vu(e, t, n, r, a, i, s, l, u, c, d, f, h) {
          var p = t.subtreeFlags;
          if (
            (8192 & p || 16785408 === (16785408 & p)) &&
            ((Pd = { stylesheets: null, count: 0, unsuspend: Fd }),
            Cl(t),
            null !==
              (t = (function () {
                if (null === Pd) throw Error(o(475));
                var e = Pd;
                return (
                  e.stylesheets && 0 === e.count && zd(e, e.stylesheets),
                  0 < e.count
                    ? function (t) {
                        var n = setTimeout(function () {
                          if (
                            (e.stylesheets && zd(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4);
                        return (
                          (e.unsuspend = t),
                          function () {
                            (e.unsuspend = null), clearTimeout(n);
                          }
                        );
                      }
                    : null
                );
              })()))
          )
            return (
              (e.cancelPendingCommit = t(
                $u.bind(null, e, n, r, a, s, l, u, 1, f, h)
              )),
              void Mu(e, i, s, !c)
            );
          $u(e, n, r, a, s, l, u, d, f, h);
        }
        function Du(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  i = a.getSnapshot;
                a = a.value;
                try {
                  if (!Kn(i(), a)) return !1;
                } catch (o) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function Mu(e, t, n, r) {
          (t &= ~hu),
            (t &= ~fu),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var a = t; 0 < a; ) {
            var i = 31 - xe(a),
              o = 1 << i;
            (r[i] = -1), (a &= ~o);
          }
          0 !== n && Le(e, n, t);
        }
        function Iu() {
          return 0 !== (6 & eu) || (gc(0, !1), !1);
        }
        function Ou() {
          if (null !== nu) {
            if (0 === au) var e = nu.return;
            else
              (vs = gs = null), vi((e = nu)), (pa = null), (ma = 0), (e = nu);
            for (; null !== e; ) Zl(e.alternate, e), (e = e.return);
            nu = null;
          }
        }
        function Uu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), td(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Ou(),
            (tu = e),
            (nu = n = Ml(e.current, null)),
            (ru = t),
            (au = 0),
            (iu = null),
            (ou = !1),
            (su = je(e, t)),
            (lu = !1),
            (mu = pu = hu = fu = du = cu = 0),
            (vu = gu = null),
            (yu = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - xe(r),
                i = 1 << a;
              (t |= e[a]), (r &= ~i);
            }
          return (uu = t), Tr(), n;
        }
        function Bu(e, t) {
          ($a = null),
            (P.H = Ao),
            t === oa
              ? ((t = ha()), (au = 3))
              : t === sa
              ? ((t = ha()), (au = 4))
              : (au =
                  t === qo
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (iu = t),
            null === nu && ((cu = 1), Io(e, zr(t, e.current)));
        }
        function Wu() {
          var e = P.H;
          return (P.H = Ao), null === e ? Ao : e;
        }
        function qu() {
          var e = P.A;
          return (P.A = _l), e;
        }
        function Xu() {
          (cu = 4),
            ou || ((4194176 & ru) !== ru && null !== Ca.current) || (su = !0),
            (0 === (134217727 & du) && 0 === (134217727 & fu)) ||
              null === tu ||
              Mu(tu, ru, pu, !1);
        }
        function Gu(e, t, n) {
          var r = eu;
          eu |= 2;
          var a = Wu(),
            i = qu();
          (tu === e && ru === t) || ((wu = null), Uu(e, t)), (t = !1);
          var o = cu;
          e: for (;;)
            try {
              if (0 !== au && null !== nu) {
                var s = nu,
                  l = iu;
                switch (au) {
                  case 8:
                    Ou(), (o = 6);
                    break e;
                  case 3:
                  case 2:
                  case 6:
                    null === Ca.current && (t = !0);
                    var u = au;
                    if (((au = 0), (iu = null), Ju(e, s, l, u), n && su)) {
                      o = 0;
                      break e;
                    }
                    break;
                  default:
                    (u = au), (au = 0), (iu = null), Ju(e, s, l, u);
                }
              }
              Qu(), (o = cu);
              break;
            } catch (c) {
              Bu(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (vs = gs = null),
            (eu = r),
            (P.H = a),
            (P.A = i),
            null === nu && ((tu = null), (ru = 0), Tr()),
            o
          );
        }
        function Qu() {
          for (; null !== nu; ) Ku(nu);
        }
        function Hu() {
          for (; null !== nu && !oe(); ) Ku(nu);
        }
        function Ku(e) {
          var t = ps(e.alternate, e, uu);
          (e.memoizedProps = e.pendingProps), null === t ? Zu(e) : (nu = t);
        }
        function Yu(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = $o(n, t, t.pendingProps, t.type, void 0, ru);
              break;
            case 11:
              t = $o(n, t, t.pendingProps, t.type.render, t.ref, ru);
              break;
            case 5:
              vi(t);
            default:
              Zl(n, t), (t = ps(n, (t = nu = Il(t, uu)), uu));
          }
          (e.memoizedProps = e.pendingProps), null === t ? Zu(e) : (nu = t);
        }
        function Ju(e, t, n, r) {
          (vs = gs = null), vi(t), (pa = null), (ma = 0);
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Ss(t, n, a, !0),
                    null !== (n = Ca.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === Na
                            ? Xu()
                            : null === n.alternate && 0 === cu && (cu = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === la
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              ac(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === la
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              ac(e, r, a)),
                          !1
                        );
                    }
                    throw Error(o(435, n.tag));
                  }
                  return ac(e, r, a), Xu(), !1;
                }
                if (Jr)
                  return (
                    null !== (t = Ca.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== $r &&
                          ia(zr((e = Error(o(422), { cause: r })), n)))
                      : (r !== $r &&
                          ia(zr((t = Error(o(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = zr(r, n)),
                        zs(e, (a = Uo(e.stateNode, r, a))),
                        4 !== cu && (cu = 2)),
                    !1
                  );
                var i = Error(o(520), { cause: r });
                if (
                  ((i = zr(i, n)),
                  null === gu ? (gu = [i]) : gu.push(i),
                  4 !== cu && (cu = 2),
                  null === t)
                )
                  return !0;
                (r = zr(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        zs(n, (e = Uo(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (i = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== i &&
                              "function" === typeof i.componentDidCatch &&
                              (null === Su || !Su.has(i)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          Wo((a = Bo(a)), e, n, r),
                          zs(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, ru)
            )
              return (cu = 1), Io(e, zr(n, e.current)), void (nu = null);
          } catch (i) {
            if (null !== a) throw ((nu = a), i);
            return (cu = 1), Io(e, zr(n, e.current)), void (nu = null);
          }
          32768 & t.flags
            ? (Jr || 1 === r
                ? (e = !0)
                : su || 0 !== (536870912 & ru)
                ? (e = !1)
                : ((ou = e = !0),
                  (2 === r || 3 === r || 6 === r) &&
                    null !== (r = Ca.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              _u(t, e))
            : Zu(t);
        }
        function Zu(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void _u(t, ou);
            e = t.return;
            var n = Yl(t.alternate, t, uu);
            if (null !== n) return void (nu = n);
            if (null !== (t = t.sibling)) return void (nu = t);
            nu = t = e;
          } while (null !== t);
          0 === cu && (cu = 5);
        }
        function _u(e, t) {
          do {
            var n = Jl(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (nu = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (nu = e);
            nu = e = n;
          } while (null !== e);
          (cu = 6), (nu = null);
        }
        function $u(e, t, n, r, a, i, s, l, u, c) {
          var d = P.T,
            f = W.p;
          try {
            (W.p = 2),
              (P.T = null),
              (function (e, t, n, r, a, i, s, l) {
                do {
                  tc();
                } while (null !== Eu);
                if (0 !== (6 & eu)) throw Error(o(327));
                var u = e.finishedWork;
                if (((r = e.finishedLanes), null === u)) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  u === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null),
                  (e.callbackPriority = 0),
                  (e.cancelPendingCommit = null);
                var c = u.lanes | u.childLanes;
                if (
                  ((function (e, t, n, r, a, i) {
                    var o = e.pendingLanes;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.warmLanes = 0),
                      (e.expiredLanes &= n),
                      (e.entangledLanes &= n),
                      (e.errorRecoveryDisabledLanes &= n),
                      (e.shellSuspendCounter = 0);
                    var s = e.entanglements,
                      l = e.expirationTimes,
                      u = e.hiddenUpdates;
                    for (n = o & ~n; 0 < n; ) {
                      var c = 31 - xe(n),
                        d = 1 << c;
                      (s[c] = 0), (l[c] = -1);
                      var f = u[c];
                      if (null !== f)
                        for (u[c] = null, c = 0; c < f.length; c++) {
                          var h = f[c];
                          null !== h && (h.lane &= -536870913);
                        }
                      n &= ~d;
                    }
                    0 !== r && Le(e, r, 0),
                      0 !== i &&
                        0 === a &&
                        0 !== e.tag &&
                        (e.suspendedLanes |= i & ~(o & ~t));
                  })(e, r, (c |= Ar), i, s, l),
                  e === tu && ((nu = tu = null), (ru = 0)),
                  (0 === (10256 & u.subtreeFlags) && 0 === (10256 & u.flags)) ||
                    ku ||
                    ((ku = !0),
                    (Tu = c),
                    (ju = n),
                    (function (e, t) {
                      ae(e, t);
                    })(fe, function () {
                      return tc(), null;
                    })),
                  (n = 0 !== (15990 & u.flags)),
                  0 !== (15990 & u.subtreeFlags) || n
                    ? ((n = P.T),
                      (P.T = null),
                      (i = W.p),
                      (W.p = 2),
                      (s = eu),
                      (eu |= 4),
                      (function (e, t) {
                        if (
                          ((e = e.containerInfo), (Hc = Xd), er((e = $n(e))))
                        ) {
                          if ("selectionStart" in e)
                            var n = {
                              start: e.selectionStart,
                              end: e.selectionEnd,
                            };
                          else
                            e: {
                              var r =
                                (n =
                                  ((n = e.ownerDocument) && n.defaultView) ||
                                  window).getSelection && n.getSelection();
                              if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset,
                                  i = r.focusNode;
                                r = r.focusOffset;
                                try {
                                  n.nodeType, i.nodeType;
                                } catch (g) {
                                  n = null;
                                  break e;
                                }
                                var s = 0,
                                  l = -1,
                                  u = -1,
                                  c = 0,
                                  d = 0,
                                  f = e,
                                  h = null;
                                t: for (;;) {
                                  for (
                                    var p;
                                    f !== n ||
                                      (0 !== a && 3 !== f.nodeType) ||
                                      (l = s + a),
                                      f !== i ||
                                        (0 !== r && 3 !== f.nodeType) ||
                                        (u = s + r),
                                      3 === f.nodeType &&
                                        (s += f.nodeValue.length),
                                      null !== (p = f.firstChild);

                                  )
                                    (h = f), (f = p);
                                  for (;;) {
                                    if (f === e) break t;
                                    if (
                                      (h === n && ++c === a && (l = s),
                                      h === i && ++d === r && (u = s),
                                      null !== (p = f.nextSibling))
                                    )
                                      break;
                                    h = (f = h).parentNode;
                                  }
                                  f = p;
                                }
                                n =
                                  -1 === l || -1 === u
                                    ? null
                                    : { start: l, end: u };
                              } else n = null;
                            }
                          n = n || { start: 0, end: 0 };
                        } else n = null;
                        for (
                          Kc = { focusedElem: e, selectionRange: n },
                            Xd = !1,
                            nl = t;
                          null !== nl;

                        )
                          if (
                            ((e = (t = nl).child),
                            0 !== (1028 & t.subtreeFlags) && null !== e)
                          )
                            (e.return = t), (nl = e);
                          else
                            for (; null !== nl; ) {
                              switch (
                                ((i = (t = nl).alternate), (e = t.flags), t.tag)
                              ) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 26:
                                case 27:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (0 !== (1024 & e) && null !== i) {
                                    (e = void 0),
                                      (n = t),
                                      (a = i.memoizedProps),
                                      (i = i.memoizedState),
                                      (r = n.stateNode);
                                    try {
                                      var m = Lo(
                                        n.type,
                                        a,
                                        (n.elementType, n.type)
                                      );
                                      (e = r.getSnapshotBeforeUpdate(m, i)),
                                        (r.__reactInternalSnapshotBeforeUpdate =
                                          e);
                                    } catch (v) {
                                      rc(n, n.return, v);
                                    }
                                  }
                                  break;
                                case 3:
                                  if (0 !== (1024 & e))
                                    if (
                                      9 ===
                                      (n = (e = t.stateNode.containerInfo)
                                        .nodeType)
                                    )
                                      od(e);
                                    else if (1 === n)
                                      switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                          od(e);
                                          break;
                                        default:
                                          e.textContent = "";
                                      }
                                  break;
                                default:
                                  if (0 !== (1024 & e)) throw Error(o(163));
                              }
                              if (null !== (e = t.sibling)) {
                                (e.return = t.return), (nl = e);
                                break;
                              }
                              nl = t.return;
                            }
                        (m = rl), (rl = !1);
                      })(e, u),
                      pl(u, e),
                      tr(Kc, e.containerInfo),
                      (Xd = !!Hc),
                      (Kc = Hc = null),
                      (e.current = u),
                      al(e, u.alternate, u),
                      se(),
                      (eu = s),
                      (W.p = i),
                      (P.T = n))
                    : (e.current = u),
                  ku ? ((ku = !1), (Eu = e), (Au = r)) : ec(e, c),
                  (c = e.pendingLanes),
                  0 === c && (Su = null),
                  (function (e) {
                    if (ye && "function" === typeof ye.onCommitFiberRoot)
                      try {
                        ye.onCommitFiberRoot(
                          ve,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(u.stateNode),
                  mc(e),
                  null !== t)
                )
                  for (a = e.onRecoverableError, u = 0; u < t.length; u++)
                    (c = t[u]), a(c.value, { componentStack: c.stack });
                0 !== (3 & Au) && tc(),
                  (c = e.pendingLanes),
                  0 !== (4194218 & r) && 0 !== (42 & c)
                    ? e === Nu
                      ? Cu++
                      : ((Cu = 0), (Nu = e))
                    : (Cu = 0),
                  gc(0, !1);
              })(e, t, n, r, f, a, i, s);
          } finally {
            (P.T = d), (W.p = f);
          }
        }
        function ec(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ba(t));
        }
        function tc() {
          if (null !== Eu) {
            var e = Eu,
              t = Tu;
            Tu = 0;
            var n = Ve(Au),
              r = P.T,
              a = W.p;
            try {
              if (((W.p = 32 > n ? 32 : n), (P.T = null), null === Eu))
                var i = !1;
              else {
                (n = ju), (ju = null);
                var s = Eu,
                  l = Au;
                if (((Eu = null), (Au = 0), 0 !== (6 & eu)))
                  throw Error(o(331));
                var u = eu;
                if (
                  ((eu |= 4),
                  Fl(s.current),
                  kl(s, s.current, l, n),
                  (eu = u),
                  gc(0, !1),
                  ye && "function" === typeof ye.onPostCommitFiberRoot)
                )
                  try {
                    ye.onPostCommitFiberRoot(ve, s);
                  } catch (c) {}
                i = !0;
              }
              return i;
            } finally {
              (W.p = a), (P.T = r), ec(e, t);
            }
          }
          return !1;
        }
        function nc(e, t, n) {
          (t = zr(n, t)),
            null !== (e = Rs(e, (t = Uo(e.stateNode, t, 2)), 2)) &&
              (Re(e, 2), mc(e));
        }
        function rc(e, t, n) {
          if (3 === e.tag) nc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                nc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Su || !Su.has(r)))
                ) {
                  (e = zr(n, e)),
                    null !== (r = Rs(t, (n = Bo(2)), 2)) &&
                      (Wo(n, r, t, e), Re(r, 2), mc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ac(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new $l();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) ||
            ((lu = !0), a.add(n), (e = ic.bind(null, e, t, n)), t.then(e, e));
        }
        function ic(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            tu === e &&
              (ru & n) === n &&
              (4 === cu ||
              (3 === cu && (62914560 & ru) === ru && 300 > le() - bu)
                ? 0 === (2 & eu) && Uu(e, 0)
                : (hu |= n),
              mu === ru && (mu = 0)),
            mc(e);
        }
        function oc(e, t) {
          0 === t && (t = Pe()), null !== (e = Nr(e, t)) && (Re(e, t), mc(e));
        }
        function sc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), oc(e, n);
        }
        function lc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), oc(e, n);
        }
        var uc = null,
          cc = null,
          dc = !1,
          fc = !1,
          hc = !1,
          pc = 0;
        function mc(e) {
          var t;
          e !== cc &&
            null === e.next &&
            (null === cc ? (uc = cc = e) : (cc = cc.next = e)),
            (fc = !0),
            dc ||
              ((dc = !0),
              (t = vc),
              rd(function () {
                0 !== (6 & eu) ? ae(ce, t) : t();
              }));
        }
        function gc(e, t) {
          if (!hc && fc) {
            hc = !0;
            do {
              for (var n = !1, r = uc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var i = 0;
                    else {
                      var o = r.suspendedLanes,
                        s = r.pingedLanes;
                      (i = (1 << (31 - xe(42 | e) + 1)) - 1),
                        (i =
                          201326677 & (i &= a & ~(o & ~s))
                            ? (201326677 & i) | 1
                            : i
                            ? 2 | i
                            : 0);
                    }
                    0 !== i && ((n = !0), xc(r, i));
                  } else
                    (i = ru),
                      0 === (3 & (i = Te(r, r === tu ? i : 0))) ||
                        je(r, i) ||
                        ((n = !0), xc(r, i));
                r = r.next;
              }
            } while (n);
            hc = !1;
          }
        }
        function vc() {
          fc = dc = !1;
          var e = 0;
          0 !== pc &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== $c && (($c = e), !0);
              return ($c = null), !1;
            })() && (e = pc),
            (pc = 0));
          for (var t = le(), n = null, r = uc; null !== r; ) {
            var a = r.next,
              i = yc(r, t);
            0 === i
              ? ((r.next = null),
                null === n ? (uc = a) : (n.next = a),
                null === a && (cc = n))
              : ((n = r), (0 !== e || 0 !== (3 & i)) && (fc = !0)),
              (r = a);
          }
          gc(e, !1);
        }
        function yc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              i = -62914561 & e.pendingLanes;
            0 < i;

          ) {
            var o = 31 - xe(i),
              s = 1 << o,
              l = a[o];
            -1 === l
              ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = Ce(s, t))
              : l <= t && (e.expiredLanes |= s),
              (i &= ~s);
          }
          if (
            ((n = ru),
            (n = Te(e, e === (t = tu) ? n : 0)),
            (r = e.callbackNode),
            0 === n || (e === t && 2 === au) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && ie(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || je(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && ie(r), Ve(n))) {
              case 2:
              case 8:
                n = de;
                break;
              case 32:
              default:
                n = fe;
                break;
              case 268435456:
                n = pe;
            }
            return (
              (r = bc.bind(null, e)),
              (n = ae(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && ie(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function bc(e, t) {
          var n = e.callbackNode;
          if (tc() && e.callbackNode !== n) return null;
          var r = ru;
          return 0 === (r = Te(e, e === tu ? r : 0))
            ? null
            : (Lu(e, r, t),
              yc(e, le()),
              null != e.callbackNode && e.callbackNode === n
                ? bc.bind(null, e)
                : null);
        }
        function xc(e, t) {
          if (tc()) return null;
          Lu(e, t, !0);
        }
        function wc() {
          return 0 === pc && (pc = Ne()), pc;
        }
        function Sc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : Nt("" + e);
        }
        function kc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Ec = 0; Ec < wr.length; Ec++) {
          var Ac = wr[Ec];
          Sr(Ac.toLowerCase(), "on" + (Ac[0].toUpperCase() + Ac.slice(1)));
        }
        Sr(hr, "onAnimationEnd"),
          Sr(pr, "onAnimationIteration"),
          Sr(mr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(gr, "onTransitionRun"),
          Sr(vr, "onTransitionStart"),
          Sr(yr, "onTransitionCancel"),
          Sr(br, "onTransitionEnd"),
          tt("onMouseEnter", ["mouseout", "mouseover"]),
          tt("onMouseLeave", ["mouseout", "mouseover"]),
          tt("onPointerEnter", ["pointerout", "pointerover"]),
          tt("onPointerLeave", ["pointerout", "pointerover"]),
          et(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          et(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          et("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          et(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Tc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          jc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Tc)
          );
        function Cc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== i && a.isPropagationStopped()))
                    break e;
                  (i = s), (a.currentTarget = u);
                  try {
                    i(a);
                  } catch (c) {
                    zo(c);
                  }
                  (a.currentTarget = null), (i = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  (i = s), (a.currentTarget = u);
                  try {
                    i(a);
                  } catch (c) {
                    zo(c);
                  }
                  (a.currentTarget = null), (i = l);
                }
            }
          }
        }
        function Nc(e, t) {
          var n = t[Be];
          void 0 === n && (n = t[Be] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Lc(t, e, 2, !1), n.add(r));
        }
        function Pc(e, t, n) {
          var r = 0;
          t && (r |= 4), Lc(n, e, r, t);
        }
        var Fc = "_reactListening" + Math.random().toString(36).slice(2);
        function Rc(e) {
          if (!e[Fc]) {
            (e[Fc] = !0),
              _e.forEach(function (t) {
                "selectionchange" !== t &&
                  (jc.has(t) || Pc(t, !1, e), Pc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Fc] || ((t[Fc] = !0), Pc("selectionchange", !1, t));
          }
        }
        function Lc(e, t, n, r) {
          switch (Zd(t)) {
            case 2:
              var a = Gd;
              break;
            case 8:
              a = Qd;
              break;
            default:
              a = Hd;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !It ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function zc(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = He(s))) return;
                  if (5 === (l = o.tag) || 6 === l || 26 === l || 27 === l) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Dt(function () {
            var r = i,
              a = Ft(n),
              o = [];
            e: {
              var s = xr.get(e);
              if (void 0 !== s) {
                var l = _t,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === Xt(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = pn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = an);
                    break;
                  case "focusout":
                    (u = "blur"), (l = an);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = an;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = nn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = rn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = gn;
                    break;
                  case hr:
                  case pr:
                  case mr:
                    l = on;
                    break;
                  case br:
                    l = vn;
                    break;
                  case "scroll":
                  case "scrollend":
                    l = en;
                    break;
                  case "wheel":
                    l = yn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = sn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = mn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    l = bn;
                }
                var c = 0 !== (4 & t),
                  d = !c && ("scroll" === e || "scrollend" === e),
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var m = p;
                  if (
                    ((h = m.stateNode),
                    (5 !== (m = m.tag) && 26 !== m && 27 !== m) ||
                      null === h ||
                      null === f ||
                      (null != (m = Mt(p, f)) && c.push(Vc(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, a)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === Pt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!He(u) && !u[Ue])) &&
                  (l || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? He(u)
                          : null) &&
                        ((d = M(u)),
                        (c = u.tag),
                        u !== d || (5 !== c && 27 !== c && 6 !== c)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = nn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = mn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : Ye(l)),
                  (h = null == u ? s : Ye(u)),
                  ((s = new c(m, p + "leave", l, n, a)).target = d),
                  (s.relatedTarget = h),
                  (m = null),
                  He(a) === r &&
                    (((c = new c(f, p + "enter", u, n, a)).target = h),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, p = 0, h = c = l; h; h = Mc(h)) p++;
                    for (h = 0, m = f; m; m = Mc(m)) h++;
                    for (; 0 < p - h; ) (c = Mc(c)), p--;
                    for (; 0 < h - p; ) (f = Mc(f)), h--;
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Mc(c)), (f = Mc(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Ic(o, s, l, c, !1),
                  null !== u && null !== d && Ic(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? Ye(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Mn;
              else if (Fn(s))
                if (In) g = Hn;
                else {
                  g = Gn;
                  var v = Xn;
                }
              else
                !(l = s.nodeName) ||
                "input" !== l.toLowerCase() ||
                ("checkbox" !== s.type && "radio" !== s.type)
                  ? r && Tt(r.elementType) && (g = Mn)
                  : (g = Qn);
              switch (
                (g && (g = g(e, r))
                  ? Rn(o, g, n, a)
                  : (v && v(e, s, r),
                    "focusout" === e &&
                      r &&
                      "number" === s.type &&
                      null != r.memoizedProps.value &&
                      yt(s, "number", s.value)),
                (v = r ? Ye(r) : window),
                e)
              ) {
                case "focusin":
                  (Fn(v) || "true" === v.contentEditable) &&
                    ((rr = v), (ar = r), (ir = null));
                  break;
                case "focusout":
                  ir = ar = rr = null;
                  break;
                case "mousedown":
                  or = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (or = !1), sr(o, n, a);
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  sr(o, n, a);
              }
              var y;
              if (wn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Nn
                  ? jn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (En &&
                  "ko" !== n.locale &&
                  (Nn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Nn && (y = qt())
                    : ((Bt = "value" in (Ut = a) ? Ut.value : Ut.textContent),
                      (Nn = !0))),
                0 < (v = Dc(r, b)).length &&
                  ((b = new ln(b, e, null, n, a)),
                  o.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Cn(n)) && (b.data = y))),
                (y = kn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Cn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Tn = !0), An);
                        case "textInput":
                          return (e = t.data) === An && Tn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Nn)
                        return "compositionend" === e || (!wn && jn(e, t))
                          ? ((e = qt()), (Wt = Bt = Ut = null), (Nn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return En && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (b = Dc(r, "onBeforeInput")).length &&
                  ((v = new ln("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: v, listeners: b }),
                  (v.data = y)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var i = Sc((a[Oe] || null).action),
                      o = r.submitter;
                    o &&
                      null !==
                        (t = (t = o[Oe] || null)
                          ? Sc(t.formAction)
                          : o.getAttribute("formAction")) &&
                      ((i = t), (o = null));
                    var s = new _t("action", "action", null, r, a);
                    e.push({
                      event: s,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== pc) {
                                var e = o ? kc(a, o) : new FormData(a);
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: i,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof i &&
                                (s.preventDefault(),
                                (e = o ? kc(a, o) : new FormData(a)),
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: i,
                                  },
                                  i,
                                  e
                                ));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(o, e, r, n, a);
            }
            Cc(o, t);
          });
        }
        function Vc(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Dc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            (5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
              null === i ||
              (null != (a = Mt(e, n)) && r.unshift(Vc(e, a, i)),
              null != (a = Mt(e, t)) && r.push(Vc(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function Mc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function Ic(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (((s = s.tag), null !== l && l === r)) break;
            (5 !== s && 26 !== s && 27 !== s) ||
              null === u ||
              ((l = u),
              a
                ? null != (u = Mt(n, i)) && o.unshift(Vc(n, u, l))
                : a || (null != (u = Mt(n, i)) && o.push(Vc(n, u, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Oc = /\r\n?/g,
          Uc = /\u0000|\uFFFD/g;
        function Bc(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Oc, "\n")
            .replace(Uc, "");
        }
        function Wc(e, t) {
          return (t = Bc(t)), Bc(e) === t;
        }
        function qc() {}
        function Xc(e, t, n, r, a, i) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  St(e, "" + r);
              break;
            case "className":
              st(e, "class", r);
              break;
            case "tabIndex":
              st(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              st(e, n, r);
              break;
            case "style":
              At(e, r, i);
              break;
            case "data":
              if ("object" !== t) {
                st(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Nt("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof i &&
                  ("formAction" === n
                    ? ("input" !== t && Xc(e, t, "name", a.name, a, null),
                      Xc(e, t, "formEncType", a.formEncType, a, null),
                      Xc(e, t, "formMethod", a.formMethod, a, null),
                      Xc(e, t, "formTarget", a.formTarget, a, null))
                    : (Xc(e, t, "encType", a.encType, a, null),
                      Xc(e, t, "method", a.method, a, null),
                      Xc(e, t, "target", a.target, a, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Nt("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = qc);
              break;
            case "onScroll":
              null != r && Nc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Nc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = Nt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              Nc("beforetoggle", e), Nc("toggle", e), ot(e, "popover", r);
              break;
            case "xlinkActuate":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              ot(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                ot(e, (n = jt.get(n) || n), r);
          }
        }
        function Gc(e, t, n, r, a, i) {
          switch (n) {
            case "style":
              At(e, r, i);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  St(e, "" + r);
              break;
            case "onScroll":
              null != r && Nc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Nc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = qc);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              $e.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" ===
                  typeof (i = null != (i = e[Oe] || null) ? i[n] : null) &&
                  e.removeEventListener(t, i, a),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : ot(e, n, r)
                  : ("function" !== typeof i &&
                      null !== i &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)));
          }
        }
        function Qc(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              Nc("error", e), Nc("load", e);
              var r,
                a = !1,
                i = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var s = n[r];
                  if (null != s)
                    switch (r) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        i = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                      default:
                        Xc(e, t, r, s, n, null);
                    }
                }
              return (
                i && Xc(e, t, "srcSet", n.srcSet, n, null),
                void (a && Xc(e, t, "src", n.src, n, null))
              );
            case "input":
              Nc("invalid", e);
              var l = (r = s = i = null),
                u = null,
                c = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var d = n[a];
                  if (null != d)
                    switch (a) {
                      case "name":
                        i = d;
                        break;
                      case "type":
                        s = d;
                        break;
                      case "checked":
                        u = d;
                        break;
                      case "defaultChecked":
                        c = d;
                        break;
                      case "value":
                        r = d;
                        break;
                      case "defaultValue":
                        l = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(o(137, t));
                        break;
                      default:
                        Xc(e, t, a, d, n, null);
                    }
                }
              return vt(e, r, l, u, c, s, i, !1), void dt(e);
            case "select":
              for (i in (Nc("invalid", e), (a = s = r = null), n))
                if (n.hasOwnProperty(i) && null != (l = n[i]))
                  switch (i) {
                    case "value":
                      r = l;
                      break;
                    case "defaultValue":
                      s = l;
                      break;
                    case "multiple":
                      a = l;
                    default:
                      Xc(e, t, i, l, n, null);
                  }
              return (
                (t = r),
                (n = s),
                (e.multiple = !!a),
                void (null != t
                  ? bt(e, !!a, t, !1)
                  : null != n && bt(e, !!a, n, !0))
              );
            case "textarea":
              for (s in (Nc("invalid", e), (r = i = a = null), n))
                if (n.hasOwnProperty(s) && null != (l = n[s]))
                  switch (s) {
                    case "value":
                      a = l;
                      break;
                    case "defaultValue":
                      i = l;
                      break;
                    case "children":
                      r = l;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != l) throw Error(o(91));
                      break;
                    default:
                      Xc(e, t, s, l, n, null);
                  }
              return wt(e, a, i, r), void dt(e);
            case "option":
              for (u in n)
                if (n.hasOwnProperty(u) && null != (a = n[u]))
                  if ("selected" === u)
                    e.selected =
                      a && "function" !== typeof a && "symbol" !== typeof a;
                  else Xc(e, t, u, a, n, null);
              return;
            case "dialog":
              Nc("cancel", e), Nc("close", e);
              break;
            case "iframe":
            case "object":
              Nc("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Tc.length; a++) Nc(Tc[a], e);
              break;
            case "image":
              Nc("error", e), Nc("load", e);
              break;
            case "details":
              Nc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Nc("error", e), Nc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, t));
                    default:
                      Xc(e, t, c, a, n, null);
                  }
              return;
            default:
              if (Tt(t)) {
                for (d in n)
                  n.hasOwnProperty(d) &&
                    void 0 !== (a = n[d]) &&
                    Gc(e, t, d, a, n, void 0);
                return;
              }
          }
          for (l in n)
            n.hasOwnProperty(l) &&
              null != (a = n[l]) &&
              Xc(e, t, l, a, n, null);
        }
        var Hc = null,
          Kc = null;
        function Yc(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function Jc(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Zc(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function _c(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var $c = null;
        var ed = "function" === typeof setTimeout ? setTimeout : void 0,
          td = "function" === typeof clearTimeout ? clearTimeout : void 0,
          nd = "function" === typeof Promise ? Promise : void 0,
          rd =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof nd
              ? function (e) {
                  return nd.resolve(null).then(e).catch(ad);
                }
              : ed;
        function ad(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function id(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void gf(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          gf(t);
        }
        function od(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                od(n), Qe(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function sd(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ld(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function ud(e, t, n) {
          switch (((t = Yc(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(o(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(o(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(o(454));
              return e;
            default:
              throw Error(o(451));
          }
        }
        var cd = new Map(),
          dd = new Set();
        function fd(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : e.ownerDocument;
        }
        var hd = W.d;
        W.d = {
          f: function () {
            var e = hd.f(),
              t = Iu();
            return e || t;
          },
          r: function (e) {
            var t = Ke(e);
            null !== t && 5 === t.tag && "form" === t.type ? ho(t) : hd.r(e);
          },
          D: function (e) {
            hd.D(e), md("dns-prefetch", e, null);
          },
          C: function (e, t) {
            hd.C(e, t), md("preconnect", e, t);
          },
          L: function (e, t, n) {
            hd.L(e, t, n);
            var r = pd;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + mt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + mt(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (a += '[imagesizes="' + mt(n.imageSizes) + '"]'))
                : (a += '[href="' + mt(e) + '"]');
              var i = a;
              switch (t) {
                case "style":
                  i = vd(e);
                  break;
                case "script":
                  i = xd(e);
              }
              cd.has(i) ||
                ((e = F(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                cd.set(i, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector(yd(i))) ||
                  ("script" === t && r.querySelector(wd(i))) ||
                  (Qc((t = r.createElement("link")), "link", e),
                  Ze(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            hd.m(e, t);
            var n = pd;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                a =
                  'link[rel="modulepreload"][as="' +
                  mt(r) +
                  '"][href="' +
                  mt(e) +
                  '"]',
                i = a;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  i = xd(e);
              }
              if (
                !cd.has(i) &&
                ((e = F({ rel: "modulepreload", href: e }, t)),
                cd.set(i, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(wd(i))) return;
                }
                Qc((r = n.createElement("link")), "link", e),
                  Ze(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            hd.X(e, t);
            var n = pd;
            if (n && e) {
              var r = Je(n).hoistableScripts,
                a = xd(e),
                i = r.get(a);
              i ||
                ((i = n.querySelector(wd(a))) ||
                  ((e = F({ src: e, async: !0 }, t)),
                  (t = cd.get(a)) && Ad(e, t),
                  Ze((i = n.createElement("script"))),
                  Qc(i, "link", e),
                  n.head.appendChild(i)),
                (i = { type: "script", instance: i, count: 1, state: null }),
                r.set(a, i));
            }
          },
          S: function (e, t, n) {
            hd.S(e, t, n);
            var r = pd;
            if (r && e) {
              var a = Je(r).hoistableStyles,
                i = vd(e);
              t = t || "default";
              var o = a.get(i);
              if (!o) {
                var s = { loading: 0, preload: null };
                if ((o = r.querySelector(yd(i)))) s.loading = 5;
                else {
                  (e = F(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n
                  )),
                    (n = cd.get(i)) && Ed(e, n);
                  var l = (o = r.createElement("link"));
                  Ze(l),
                    Qc(l, "link", e),
                    (l._p = new Promise(function (e, t) {
                      (l.onload = e), (l.onerror = t);
                    })),
                    l.addEventListener("load", function () {
                      s.loading |= 1;
                    }),
                    l.addEventListener("error", function () {
                      s.loading |= 2;
                    }),
                    (s.loading |= 4),
                    kd(o, t, r);
                }
                (o = { type: "stylesheet", instance: o, count: 1, state: s }),
                  a.set(i, o);
              }
            }
          },
          M: function (e, t) {
            hd.M(e, t);
            var n = pd;
            if (n && e) {
              var r = Je(n).hoistableScripts,
                a = xd(e),
                i = r.get(a);
              i ||
                ((i = n.querySelector(wd(a))) ||
                  ((e = F({ src: e, async: !0, type: "module" }, t)),
                  (t = cd.get(a)) && Ad(e, t),
                  Ze((i = n.createElement("script"))),
                  Qc(i, "link", e),
                  n.head.appendChild(i)),
                (i = { type: "script", instance: i, count: 1, state: null }),
                r.set(a, i));
            }
          },
        };
        var pd = "undefined" === typeof document ? null : document;
        function md(e, t, n) {
          var r = pd;
          if (r && "string" === typeof t && t) {
            var a = mt(t);
            (a = 'link[rel="' + e + '"][href="' + a + '"]'),
              "string" === typeof n && (a += '[crossorigin="' + n + '"]'),
              dd.has(a) ||
                (dd.add(a),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(a) &&
                  (Qc((t = r.createElement("link")), "link", e),
                  Ze(t),
                  r.head.appendChild(t)));
          }
        }
        function gd(e, t, n, r) {
          var a,
            i,
            s,
            l,
            u = (u = Z.current) ? fd(u) : null;
          if (!u) throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = vd(n.href)),
                  (r = (n = Je(u).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = vd(n.href);
                var c = Je(u).hoistableStyles,
                  d = c.get(e);
                if (
                  (d ||
                    ((u = u.ownerDocument || u),
                    (d = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, d),
                    (c = u.querySelector(yd(e))) &&
                      !c._p &&
                      ((d.instance = c), (d.state.loading = 5)),
                    cd.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      cd.set(e, n),
                      c ||
                        ((a = u),
                        (i = e),
                        (s = n),
                        (l = d.state),
                        a.querySelector(
                          'link[rel="preload"][as="style"][' + i + "]"
                        )
                          ? (l.loading = 1)
                          : ((i = a.createElement("link")),
                            (l.preload = i),
                            i.addEventListener("load", function () {
                              return (l.loading |= 1);
                            }),
                            i.addEventListener("error", function () {
                              return (l.loading |= 2);
                            }),
                            Qc(i, "link", s),
                            Ze(i),
                            a.head.appendChild(i))))),
                  t && null === r)
                )
                  throw Error(o(528, ""));
                return d;
              }
              if (t && null !== r) throw Error(o(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = xd(n)),
                    (r = (n = Je(u).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(o(444, e));
          }
        }
        function vd(e) {
          return 'href="' + mt(e) + '"';
        }
        function yd(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function bd(e) {
          return F({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function xd(e) {
          return '[src="' + mt(e) + '"]';
        }
        function wd(e) {
          return "script[async]" + e;
        }
        function Sd(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + mt(n.href) + '"]'
                );
                if (r) return (t.instance = r), Ze(r), r;
                var a = F({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Ze((r = (e.ownerDocument || e).createElement("style"))),
                  Qc(r, "style", a),
                  kd(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = vd(n.href);
                var i = e.querySelector(yd(a));
                if (i)
                  return (t.state.loading |= 4), (t.instance = i), Ze(i), i;
                (r = bd(n)),
                  (a = cd.get(a)) && Ed(r, a),
                  Ze((i = (e.ownerDocument || e).createElement("link")));
                var s = i;
                return (
                  (s._p = new Promise(function (e, t) {
                    (s.onload = e), (s.onerror = t);
                  })),
                  Qc(i, "link", r),
                  (t.state.loading |= 4),
                  kd(i, n.precedence, e),
                  (t.instance = i)
                );
              case "script":
                return (
                  (i = xd(n.src)),
                  (a = e.querySelector(wd(i)))
                    ? ((t.instance = a), Ze(a), a)
                    : ((r = n),
                      (a = cd.get(i)) && Ad((r = F({}, n)), a),
                      Ze(
                        (a = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      Qc(a, "link", r),
                      e.head.appendChild(a),
                      (t.instance = a))
                );
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              kd(r, n.precedence, e));
          return t.instance;
        }
        function kd(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              a = r.length ? r[r.length - 1] : null,
              i = a,
              o = 0;
            o < r.length;
            o++
          ) {
            var s = r[o];
            if (s.dataset.precedence === t) i = s;
            else if (i !== a) break;
          }
          i
            ? i.parentNode.insertBefore(e, i.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Ed(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function Ad(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Td = null;
        function jd(e, t, n) {
          if (null === Td) {
            var r = new Map(),
              a = (Td = new Map());
            a.set(n, r);
          } else (r = (a = Td).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), a = 0;
            a < n.length;
            a++
          ) {
            var i = n[a];
            if (
              !(
                i[Ge] ||
                i[Ie] ||
                ("link" === e && "stylesheet" === i.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== i.namespaceURI
            ) {
              var o = i.getAttribute(t) || "";
              o = e + o;
              var s = r.get(o);
              s ? s.push(i) : r.set(o, [i]);
            }
          }
          return r;
        }
        function Cd(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function Nd(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var Pd = null;
        function Fd() {}
        function Rd() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) zd(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var Ld = null;
        function zd(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Ld = new Map()),
              t.forEach(Vd, e),
              (Ld = null),
              Rd.call(e));
        }
        function Vd(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Ld.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), Ld.set(e, n);
              for (
                var a = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  i = 0;
                i < a.length;
                i++
              ) {
                var o = a[i];
                ("LINK" !== o.nodeName &&
                  "not all" === o.getAttribute("media")) ||
                  (n.set(o.dataset.precedence, o), (r = o));
              }
              r && n.set(null, r);
            }
            (o = (a = t.instance).getAttribute("data-precedence")),
              (i = n.get(o) || r) === r && n.set(null, a),
              n.set(o, a),
              this.count++,
              (r = Rd.bind(this)),
              a.addEventListener("load", r),
              a.addEventListener("error", r),
              i
                ? i.parentNode.insertBefore(a, i.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    a,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Dd = {
          $$typeof: g,
          Provider: null,
          Consumer: null,
          _currentValue: q,
          _currentValue2: q,
          _threadCount: 0,
        };
        function Md(e, t, n, r, a, i, o, s) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Fe(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.finishedLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Fe(0)),
            (this.hiddenUpdates = Fe(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = a),
            (this.onCaughtError = i),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = s),
            (this.incompleteTransitions = new Map());
        }
        function Id(e, t, n, r, a, i, o, s, l, u, c, d) {
          return (
            (e = new Md(e, t, n, o, s, l, u, d)),
            (t = 1),
            !0 === i && (t |= 24),
            (i = Vl(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (t = Ua()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (i.memoizedState = { element: r, isDehydrated: n, cache: t }),
            Ns(i),
            e
          );
        }
        function Od(e) {
          return e ? (e = Rr) : Rr;
        }
        function Ud(e, t, n, r, a, i) {
          (a = Od(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = Fs(t)).payload = { element: n }),
            null !== (i = void 0 === i ? null : i) && (r.callback = i),
            null !== (n = Rs(e, r, t)) && (Ru(n, 0, t), Ls(n, e, t));
        }
        function Bd(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Wd(e, t) {
          Bd(e, t), (e = e.alternate) && Bd(e, t);
        }
        function qd(e) {
          if (13 === e.tag) {
            var t = Nr(e, 67108864);
            null !== t && Ru(t, 0, 67108864), Wd(e, 67108864);
          }
        }
        var Xd = !0;
        function Gd(e, t, n, r) {
          var a = P.T;
          P.T = null;
          var i = W.p;
          try {
            (W.p = 2), Hd(e, t, n, r);
          } finally {
            (W.p = i), (P.T = a);
          }
        }
        function Qd(e, t, n, r) {
          var a = P.T;
          P.T = null;
          var i = W.p;
          try {
            (W.p = 8), Hd(e, t, n, r);
          } finally {
            (W.p = i), (P.T = a);
          }
        }
        function Hd(e, t, n, r) {
          if (Xd) {
            var a = Kd(r);
            if (null === a) zc(e, t, r, Yd, n), sf(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return ($d = lf($d, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (ef = lf(ef, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (tf = lf(tf, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return nf.set(i, lf(nf.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      rf.set(i, lf(rf.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((sf(e, r), 4 & t && -1 < of.indexOf(e))) {
              for (; null !== a; ) {
                var i = Ke(a);
                if (null !== i)
                  switch (i.tag) {
                    case 3:
                      if (
                        (i = i.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var o = Ae(i.pendingLanes);
                        if (0 !== o) {
                          var s = i;
                          for (
                            s.pendingLanes |= 2, s.entangledLanes |= 2;
                            o;

                          ) {
                            var l = 1 << (31 - xe(o));
                            (s.entanglements[1] |= l), (o &= ~l);
                          }
                          mc(i),
                            0 === (6 & eu) && ((xu = le() + 500), gc(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (s = Nr(i, 2)) && Ru(s, 0, 2), Iu(), Wd(i, 2);
                  }
                if ((null === (i = Kd(r)) && zc(e, t, r, Yd, n), i === a))
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else zc(e, t, r, null, n);
          }
        }
        function Kd(e) {
          return Jd((e = Ft(e)));
        }
        var Yd = null;
        function Jd(e) {
          if (((Yd = null), null !== (e = He(e)))) {
            var t = M(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = I(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (Yd = e), null;
        }
        function Zd(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ue()) {
                case ce:
                  return 2;
                case de:
                  return 8;
                case fe:
                case he:
                  return 32;
                case pe:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var _d = !1,
          $d = null,
          ef = null,
          tf = null,
          nf = new Map(),
          rf = new Map(),
          af = [],
          of =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function sf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              $d = null;
              break;
            case "dragenter":
            case "dragleave":
              ef = null;
              break;
            case "mouseover":
            case "mouseout":
              tf = null;
              break;
            case "pointerover":
            case "pointerout":
              nf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              rf.delete(t.pointerId);
          }
        }
        function lf(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Ke(t)) && qd(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function uf(e) {
          var t = He(e.target);
          if (null !== t) {
            var n = M(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = I(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = W.p;
                      try {
                        return (W.p = e), t();
                      } finally {
                        W.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Pu(),
                          t = Nr(n, e);
                        null !== t && Ru(t, 0, e), Wd(n, e);
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function cf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kd(e.nativeEvent);
            if (null !== n)
              return null !== (t = Ke(n)) && qd(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Pt = r), n.target.dispatchEvent(r), (Pt = null), t.shift();
          }
          return !0;
        }
        function df(e, t, n) {
          cf(e) && n.delete(t);
        }
        function ff() {
          (_d = !1),
            null !== $d && cf($d) && ($d = null),
            null !== ef && cf(ef) && (ef = null),
            null !== tf && cf(tf) && (tf = null),
            nf.forEach(df),
            rf.forEach(df);
        }
        function hf(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            _d ||
              ((_d = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, ff)));
        }
        var pf = null;
        function mf(e) {
          pf !== e &&
            ((pf = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              pf === e && (pf = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === Jd(r || n)) continue;
                  break;
                }
                var i = Ke(n);
                null !== i &&
                  (e.splice(t, 3),
                  (t -= 3),
                  co(
                    i,
                    { pending: !0, data: a, method: n.method, action: r },
                    r,
                    a
                  ));
              }
            }));
        }
        function gf(e) {
          function t(t) {
            return hf(t, e);
          }
          null !== $d && hf($d, e),
            null !== ef && hf(ef, e),
            null !== tf && hf(tf, e),
            nf.forEach(t),
            rf.forEach(t);
          for (var n = 0; n < af.length; n++) {
            var r = af[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < af.length && null === (n = af[0]).blockedOn; )
            uf(n), null === n.blockedOn && af.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                i = n[r + 1],
                o = a[Oe] || null;
              if ("function" === typeof i) o || mf(n);
              else if (o) {
                var s = null;
                if (i && i.hasAttribute("formAction")) {
                  if (((a = i), (o = i[Oe] || null))) s = o.formAction;
                  else if (null !== Jd(a)) continue;
                } else s = o.action;
                "function" === typeof s
                  ? (n[r + 1] = s)
                  : (n.splice(r, 3), (r -= 3)),
                  mf(n);
              }
            }
        }
        function vf(e) {
          this._internalRoot = e;
        }
        function yf(e) {
          this._internalRoot = e;
        }
        (yf.prototype.render = vf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Ud(t.current, Pu(), e, t, null, null);
          }),
          (yf.prototype.unmount = vf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                0 === e.tag && tc(),
                  Ud(e.current, 2, null, e, null, null),
                  Iu(),
                  (t[Ue] = null);
              }
            }),
          (yf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = De();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < af.length && 0 !== t && t < af[n].priority;
                n++
              );
              af.splice(n, 0, e), 0 === n && uf(e);
            }
          });
        var bf = a.version;
        if ("19.0.0" !== bf) throw Error(o(527, bf, "19.0.0"));
        W.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = M(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return O(a), e;
                    if (i === r) return O(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var s = !1, l = a.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = a), (r = i);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = a), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = i), (r = a);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = i), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? U(e) : null) ? null : e.stateNode)
          );
        };
        var xf = {
          bundleType: 0,
          version: "19.0.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: P,
          findFiberByHostInstance: He,
          reconcilerVersion: "19.0.0",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!wf.isDisabled && wf.supportsFiber)
            try {
              (ve = wf.inject(xf)), (ye = wf);
            } catch (kf) {}
        }
        (t.createRoot = function (e, t) {
          if (!s(e)) throw Error(o(299));
          var n = !1,
            r = "",
            a = Vo,
            i = Do,
            l = Mo;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (i = t.onCaughtError),
              void 0 !== t.onRecoverableError && (l = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = Id(e, 1, !1, null, 0, n, r, a, i, l, 0, null)),
            (e[Ue] = t.current),
            Rc(8 === e.nodeType ? e.parentNode : e),
            new vf(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!s(e)) throw Error(o(299));
            var r = !1,
              a = "",
              i = Vo,
              l = Do,
              u = Mo,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (i = n.onUncaughtError),
                void 0 !== n.onCaughtError && (l = n.onCaughtError),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks &&
                  n.unstable_transitionCallbacks,
                void 0 !== n.formState && (c = n.formState)),
              ((t = Id(e, 1, !0, t, 0, r, a, i, l, u, 0, c)).context =
                Od(null)),
              (n = t.current),
              ((a = Fs((r = Pu()))).callback = null),
              Rs(n, a, r),
              (t.current.lanes = r),
              Re(t, r),
              mc(t),
              (e[Ue] = t.current),
              Rc(e),
              new yf(t)
            );
          }),
          (t.version = "19.0.0");
      },
      672: (e, t, n) => {
        var r = n(43);
        function a(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i() {}
        var o = {
            d: {
              f: i,
              r: function () {
                throw Error(a(522));
              },
              D: i,
              C: i,
              L: i,
              m: i,
              X: i,
              S: i,
              M: i,
            },
            p: 0,
            findDOMNode: null,
          },
          s = Symbol.for("react.portal");
        var l =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function u(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(a(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: s,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = l.T,
              n = o.p;
            try {
              if (((l.T = null), (o.p = 2), e)) return e();
            } finally {
              (l.T = t), (o.p = n), o.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              o.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && o.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = u(n, t.crossOrigin),
                a = "string" === typeof t.integrity ? t.integrity : void 0,
                i =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? o.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: a, fetchPriority: i }
                  )
                : "script" === n &&
                  o.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: i,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = u(t.as, t.crossOrigin);
                  o.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && o.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = u(n, t.crossOrigin);
              o.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = u(t.as, t.crossOrigin);
                o.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else o.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            o.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return l.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return l.H.useHostTransitionStatus();
          }),
          (t.version = "19.0.0");
      },
      391: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4));
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672));
      },
      358: (e, t) => {
        const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
          r = /^[\u0021-\u003A\u003C-\u007E]*$/,
          a =
            /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
          i = /^[\u0020-\u003A\u003D-\u007E]*$/,
          o = Object.prototype.toString,
          s = (() => {
            const e = function () {};
            return (e.prototype = Object.create(null)), e;
          })();
        function l(e, t, n) {
          do {
            const n = e.charCodeAt(t);
            if (32 !== n && 9 !== n) return t;
          } while (++t < n);
          return n;
        }
        function u(e, t, n) {
          for (; t > n; ) {
            const n = e.charCodeAt(--t);
            if (32 !== n && 9 !== n) return t + 1;
          }
          return n;
        }
        function c(e) {
          if (-1 === e.indexOf("%")) return e;
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        }
      },
      799: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.fragment");
        function a(e, t, r) {
          var a = null;
          if (
            (void 0 !== r && (a = "" + r),
            void 0 !== t.key && (a = "" + t.key),
            "key" in t)
          )
            for (var i in ((r = {}), t)) "key" !== i && (r[i] = t[i]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: a,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        (t.Fragment = r), (t.jsx = a), (t.jsxs = a);
      },
      288: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.consumer"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = { H: null, A: null, T: null, S: null },
          k = Object.prototype.hasOwnProperty;
        function E(e, t, r, a, i, o) {
          return (
            (r = o.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: o,
            }
          );
        }
        function A(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function C() {}
        function N(e, t, a, i, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l,
            u,
            c = !1;
          if (null === e) c = !0;
          else
            switch (s) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case f:
                    return N((c = e._init)(e._payload), t, a, i, o);
                }
            }
          if (c)
            return (
              (o = o(e)),
              (c = "" === i ? "." + j(e, 0) : i),
              w(o)
                ? ((a = ""),
                  null != c && (a = c.replace(T, "$&/") + "/"),
                  N(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (A(o) &&
                    ((l = o),
                    (u =
                      a +
                      (null == o.key || (e && e.key === o.key)
                        ? ""
                        : ("" + o.key).replace(T, "$&/") + "/") +
                      c),
                    (o = E(l.type, u, void 0, 0, 0, l.props))),
                  t.push(o)),
              1
            );
          c = 0;
          var d,
            p = "" === i ? "." : i + ":";
          if (w(e))
            for (var m = 0; m < e.length; m++)
              c += N((i = e[m]), t, a, (s = p + j(i, m)), o);
          else if (
            "function" ===
            typeof (m =
              null === (d = e) || "object" !== typeof d
                ? null
                : "function" === typeof (d = (h && d[h]) || d["@@iterator"])
                ? d
                : null)
          )
            for (e = m.call(e), m = 0; !(i = e.next()).done; )
              c += N((i = i.value), t, a, (s = p + j(i, m++)), o);
          else if ("object" === s) {
            if ("function" === typeof e.then)
              return N(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(C, C)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                a,
                i,
                o
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function F(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function L() {}
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!A(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (t.act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = m({}, e.props),
              a = e.key;
            if (null != t)
              for (i in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (a = "" + t.key),
              t))
                !k.call(t, i) ||
                  "key" === i ||
                  "__self" === i ||
                  "__source" === i ||
                  ("ref" === i && void 0 === t.ref) ||
                  (r[i] = t[i]);
            var i = arguments.length - 2;
            if (1 === i) r.children = n;
            else if (1 < i) {
              for (var o = Array(i), s = 0; s < i; s++) o[s] = arguments[s + 2];
              r.children = o;
            }
            return E(e.type, a, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: s, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              a = {},
              i = null;
            if (null != t)
              for (r in (void 0 !== t.key && (i = "" + t.key), t))
                k.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (a[r] = t[r]);
            var o = arguments.length - 2;
            if (1 === o) a.children = n;
            else if (1 < o) {
              for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
              a.children = s;
            }
            if (e && e.defaultProps)
              for (r in (o = e.defaultProps)) void 0 === a[r] && (a[r] = o[r]);
            return E(e, i, void 0, 0, 0, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = A),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: F,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = S.T,
              n = {};
            S.T = n;
            try {
              var r = e(),
                a = S.S;
              null !== a && a(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(L, R);
            } catch (i) {
              R(i);
            } finally {
              S.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return S.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return S.H.useEffect(e, t);
          }),
          (t.useId = function () {
            return S.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (t.useState = function (e) {
            return S.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return S.H.useTransition();
          }),
          (t.version = "19.0.0");
      },
      43: (e, t, n) => {
        e.exports = n(288);
      },
      579: (e, t, n) => {
        e.exports = n(799);
      },
      896: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(l, n))
                u < a && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), F();
            else {
              var t = r(c);
              null !== t && R(w, t.startTime - e);
            }
        }
        var S,
          k = !1,
          E = -1,
          A = 5,
          T = -1;
        function j() {
          return !(t.unstable_now() - T < A);
        }
        function C() {
          if (k) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              e: {
                (m = !1), g && ((g = !1), y(E), (E = -1)), (p = !0);
                var i = h;
                try {
                  t: {
                    for (
                      x(e), f = r(u);
                      null !== f && !(f.expirationTime > e && j());

                    ) {
                      var o = f.callback;
                      if ("function" === typeof o) {
                        (f.callback = null), (h = f.priorityLevel);
                        var s = o(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof s)) {
                          (f.callback = s), x(e), (n = !0);
                          break t;
                        }
                        f === r(u) && a(u), x(e);
                      } else a(u);
                      f = r(u);
                    }
                    if (null !== f) n = !0;
                    else {
                      var l = r(c);
                      null !== l && R(w, l.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (f = null), (h = i), (p = !1);
                }
                n = void 0;
              }
            } finally {
              n ? S() : (k = !1);
            }
          }
        }
        if ("function" === typeof b)
          S = function () {
            b(C);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            P = N.port2;
          (N.port1.onmessage = C),
            (S = function () {
              P.postMessage(null);
            });
        } else
          S = function () {
            v(C, 0);
          };
        function F() {
          k || ((k = !0), S());
        }
        function R(e, n) {
          E = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), F());
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (A = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
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
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(E), (E = -1)) : (g = !0), R(w, i - o)))
                : ((e.sortIndex = s), n(u, e), m || p || ((m = !0), F())),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(896);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".e75445ad.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "frontend:";
      n.l = (r, a, i, o) => {
        if (e[r]) e[r].push(a);
        else {
          var s, l;
          if (void 0 !== i)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + i),
            (s.src = r)),
            (e[r] = [a]);
          var f = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(h);
              var a = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            h = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = f.bind(null, s.onerror)),
            (s.onload = f.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var i = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = i));
            var o = n.p + n.u(t),
              s = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = o),
                    a[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            i,
            o = r[0],
            s = r[1],
            l = r[2],
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in s) n.o(s, a) && (n.m[a] = s[a]);
            if (l) l(n);
          }
          for (t && t(r); u < o.length; u++)
            (i = o[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self.webpackChunkfrontend = self.webpackChunkfrontend || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n(43),
    a = n(391);
  function i(e) {
    if ("undefined" === typeof Proxy) return e;
    const t = new Map();
    return new Proxy(
      function () {
        return e(...arguments);
      },
      {
        get: (n, r) =>
          "create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
      }
    );
  }
  function o(e) {
    return (
      (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      o(e)
    );
  }
  function s(e) {
    var t = (function (e, t) {
      if ("object" != o(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != o(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == o(t) ? t : t + "";
  }
  function l(e, t, n) {
    return (
      (t = s(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? u(Object(n), !0).forEach(function (t) {
            l(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : u(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function d(e) {
    return null !== e && "object" === typeof e && "function" === typeof e.start;
  }
  function f(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.includes(n) ||
            ({}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
  }
  const h = (e) => Array.isArray(e);
  function p(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
  }
  function m(e) {
    return "string" === typeof e || Array.isArray(e);
  }
  function g(e) {
    const t = [{}, {}];
    return (
      null === e ||
        void 0 === e ||
        e.values.forEach((e, n) => {
          (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
        }),
      t
    );
  }
  function v(e, t, n, r) {
    if ("function" === typeof t) {
      const [a, i] = g(r);
      t = t(void 0 !== n ? n : e.custom, a, i);
    }
    if (
      ("string" === typeof t && (t = e.variants && e.variants[t]),
      "function" === typeof t)
    ) {
      const [a, i] = g(r);
      t = t(void 0 !== n ? n : e.custom, a, i);
    }
    return t;
  }
  function y(e, t, n) {
    const r = e.getProps();
    return v(r, t, void 0 !== n ? n : r.custom, e);
  }
  const b = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    x = ["initial", ...b];
  function w(e) {
    let t;
    return () => (void 0 === t && (t = e()), t);
  }
  const S = w(() => void 0 !== window.ScrollTimeline);
  class k {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    get finished() {
      return Promise.all(
        this.animations.map((e) => ("finished" in e ? e.finished : e))
      );
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      const n = this.animations.map((n) =>
        S() && n.attachTimeline
          ? n.attachTimeline(e)
          : "function" === typeof t
          ? t(n)
          : void 0
      );
      return () => {
        n.forEach((e, t) => {
          e && e(), this.animations[t].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  class E extends k {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  }
  function A(e, t) {
    return e ? e[t] || e.default || e : void 0;
  }
  const T = 2e4;
  function j(e) {
    let t = 0;
    let n = e.next(t);
    for (; !n.done && t < T; ) (t += 50), (n = e.next(t));
    return t >= T ? 1 / 0 : t;
  }
  function C(e) {
    return "function" === typeof e;
  }
  function N(e, t) {
    (e.timeline = t), (e.onfinish = null);
  }
  const P = (e) => Array.isArray(e) && "number" === typeof e[0],
    F = { linearEasing: void 0 };
  function R(e, t) {
    const n = w(e);
    return () => {
      var e;
      return null !== (e = F[t]) && void 0 !== e ? e : n();
    };
  }
  const L = R(() => {
      try {
        document
          .createElement("div")
          .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch (e) {
        return !1;
      }
      return !0;
    }, "linearEasing"),
    z = (e, t, n) => {
      const r = t - e;
      return 0 === r ? 1 : (n - e) / r;
    },
    V = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = "";
      const a = Math.max(Math.round(t / n), 2);
      for (let i = 0; i < a; i++) r += e(z(0, a - 1, i)) + ", ";
      return "linear(".concat(r.substring(0, r.length - 2), ")");
    };
  function D(e) {
    return Boolean(
      ("function" === typeof e && L()) ||
        !e ||
        ("string" === typeof e && (e in I || L())) ||
        P(e) ||
        (Array.isArray(e) && e.every(D))
    );
  }
  const M = (e) => {
      let [t, n, r, a] = e;
      return "cubic-bezier("
        .concat(t, ", ")
        .concat(n, ", ")
        .concat(r, ", ")
        .concat(a, ")");
    },
    I = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: M([0, 0.65, 0.55, 1]),
      circOut: M([0.55, 0, 1, 0.45]),
      backIn: M([0.31, 0.01, 0.66, -0.59]),
      backOut: M([0.33, 1.53, 0.69, 0.99]),
    };
  function O(e, t) {
    return e
      ? "function" === typeof e && L()
        ? V(e, t)
        : P(e)
        ? M(e)
        : Array.isArray(e)
        ? e.map((e) => O(e, t) || I.easeOut)
        : I[e]
      : void 0;
  }
  const U = { x: !1, y: !1 };
  function B() {
    return U.x || U.y;
  }
  function W(e, t) {
    const n = (function (e, t, n) {
        var r;
        if (e instanceof Element) return [e];
        if ("string" === typeof e) {
          let a = document;
          t && (a = t.current);
          const i =
            null !== (r = null === n || void 0 === n ? void 0 : n[e]) &&
            void 0 !== r
              ? r
              : a.querySelectorAll(e);
          return i ? Array.from(i) : [];
        }
        return Array.from(e);
      })(e),
      r = new AbortController();
    return [
      n,
      c(c({ passive: !0 }, t), {}, { signal: r.signal }),
      () => r.abort(),
    ];
  }
  function q(e) {
    return (t) => {
      "touch" === t.pointerType || B() || e(t);
    };
  }
  const X = (e, t) => !!t && (e === t || X(e, t.parentElement)),
    G = (e) =>
      "mouse" === e.pointerType
        ? "number" !== typeof e.button || e.button <= 0
        : !1 !== e.isPrimary,
    Q = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  const H = new WeakSet();
  function K(e) {
    return (t) => {
      "Enter" === t.key && e(t);
    };
  }
  function Y(e, t) {
    e.dispatchEvent(
      new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
    );
  }
  function J(e) {
    return G(e) && !B();
  }
  function Z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const [r, a, i] = W(e, n),
      o = (e) => {
        const r = e.currentTarget;
        if (!J(e) || H.has(r)) return;
        H.add(r);
        const i = t(e),
          o = (e, t) => {
            window.removeEventListener("pointerup", s),
              window.removeEventListener("pointercancel", l),
              J(e) &&
                H.has(r) &&
                (H.delete(r), "function" === typeof i && i(e, { success: t }));
          },
          s = (e) => {
            o(e, n.useGlobalTarget || X(r, e.target));
          },
          l = (e) => {
            o(e, !1);
          };
        window.addEventListener("pointerup", s, a),
          window.addEventListener("pointercancel", l, a);
      };
    return (
      r.forEach((e) => {
        (function (e) {
          return Q.has(e.tagName) || -1 !== e.tabIndex;
        })(e) ||
          null !== e.getAttribute("tabindex") ||
          (e.tabIndex = 0);
        (n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, a),
          e.addEventListener(
            "focus",
            (e) =>
              ((e, t) => {
                const n = e.currentTarget;
                if (!n) return;
                const r = K(() => {
                  if (H.has(n)) return;
                  Y(n, "down");
                  const e = K(() => {
                    Y(n, "up");
                  });
                  n.addEventListener("keyup", e, t),
                    n.addEventListener("blur", () => Y(n, "cancel"), t);
                });
                n.addEventListener("keydown", r, t),
                  n.addEventListener(
                    "blur",
                    () => n.removeEventListener("keydown", r),
                    t
                  );
              })(e, a),
            a
          );
      }),
      i
    );
  }
  const _ = (e) => 1e3 * e,
    $ = (e) => e / 1e3,
    ee = (e) => e;
  const te = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    ne = new Set(te),
    re = new Set(["width", "height", "top", "left", "right", "bottom", ...te]),
    ae = !1,
    ie = !1;
  const oe = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
  function se(e, t) {
    let n = !1,
      r = !0;
    const a = { delta: 0, timestamp: 0, isProcessing: !1 },
      i = () => (n = !0),
      o = oe.reduce(
        (e, t) => (
          (e[t] = (function (e) {
            let t = new Set(),
              n = new Set(),
              r = !1,
              a = !1;
            const i = new WeakSet();
            let o = { delta: 0, timestamp: 0, isProcessing: !1 };
            function s(t) {
              i.has(t) && (l.schedule(t), e()), t(o);
            }
            const l = {
              schedule: function (e) {
                const a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2] &&
                  r
                    ? t
                    : n;
                return (
                  arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1] &&
                    i.add(e),
                  a.has(e) || a.add(e),
                  e
                );
              },
              cancel: (e) => {
                n.delete(e), i.delete(e);
              },
              process: (e) => {
                (o = e),
                  r
                    ? (a = !0)
                    : ((r = !0),
                      ([t, n] = [n, t]),
                      t.forEach(s),
                      t.clear(),
                      (r = !1),
                      a && ((a = !1), l.process(e)));
              },
            };
            return l;
          })(i)),
          e
        ),
        {}
      ),
      {
        read: s,
        resolveKeyframes: l,
        update: u,
        preRender: c,
        render: d,
        postRender: f,
      } = o,
      h = () => {
        const i = ie ? a.timestamp : performance.now();
        (n = !1),
          (a.delta = r ? 1e3 / 60 : Math.max(Math.min(i - a.timestamp, 40), 1)),
          (a.timestamp = i),
          (a.isProcessing = !0),
          s.process(a),
          l.process(a),
          u.process(a),
          c.process(a),
          d.process(a),
          f.process(a),
          (a.isProcessing = !1),
          n && t && ((r = !1), e(h));
      },
      p = oe.reduce((t, i) => {
        const s = o[i];
        return (
          (t[i] = function (t) {
            let i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              o =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              n || ((n = !0), (r = !0), a.isProcessing || e(h)),
              s.schedule(t, i, o)
            );
          }),
          t
        );
      }, {});
    return {
      schedule: p,
      cancel: (e) => {
        for (let t = 0; t < oe.length; t++) o[oe[t]].cancel(e);
      },
      state: a,
      steps: o,
    };
  }
  const {
    schedule: le,
    cancel: ue,
    state: ce,
    steps: de,
  } = se(
    "undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : ee,
    !0
  );
  let fe;
  function he() {
    fe = void 0;
  }
  const pe = {
    now: () => (
      void 0 === fe &&
        pe.set(ce.isProcessing || ie ? ce.timestamp : performance.now()),
      fe
    ),
    set: (e) => {
      (fe = e), queueMicrotask(he);
    },
  };
  function me(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }
  function ge(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class ve {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return me(this.subscriptions, e), () => ge(this.subscriptions, e);
    }
    notify(e, t, n) {
      const r = this.subscriptions.length;
      if (r)
        if (1 === r) this.subscriptions[0](e, t, n);
        else
          for (let a = 0; a < r; a++) {
            const r = this.subscriptions[a];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  function ye(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const be = { current: void 0 };
  class xe {
    constructor(e) {
      var t = this;
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.version = "11.18.2"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = function (e) {
          let n =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const r = pe.now();
          t.updatedAt !== r && t.setPrevFrameValue(),
            (t.prev = t.current),
            t.setCurrent(e),
            t.current !== t.prev &&
              t.events.change &&
              t.events.change.notify(t.current),
            n &&
              t.events.renderRequest &&
              t.events.renderRequest.notify(t.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = n.owner);
    }
    setCurrent(e) {
      var t;
      (this.current = e),
        (this.updatedAt = pe.now()),
        null === this.canTrackVelocity &&
          void 0 !== e &&
          (this.canTrackVelocity = ((t = this.current), !isNaN(parseFloat(t))));
    }
    setPrevFrameValue() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.current;
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new ve());
      const n = this.events[e].add(t);
      return "change" === e
        ? () => {
            n(),
              le.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (const e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      t && this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e, t);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return be.current && be.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const e = pe.now();
      if (
        !this.canTrackVelocity ||
        void 0 === this.prevFrameValue ||
        e - this.updatedAt > 30
      )
        return 0;
      const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return ye(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function we(e, t) {
    return new xe(e, t);
  }
  const Se = ["transitionEnd", "transition"];
  function ke(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, we(n));
  }
  const Ee = (e) => Boolean(e && e.getVelocity);
  function Ae(e, t) {
    const n = e.getValue("willChange");
    if (((r = n), Boolean(Ee(r) && r.add))) return n.add(t);
    var r;
  }
  const Te = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    je = "data-" + Te("framerAppearId");
  function Ce(e) {
    return e.props[je];
  }
  const Ne = !1,
    Pe = (e, t, n) =>
      (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
  function Fe(e, t, n, r) {
    if (e === t && n === r) return ee;
    const a = (t) =>
      (function (e, t, n, r, a) {
        let i,
          o,
          s = 0;
        do {
          (o = t + (n - t) / 2),
            (i = Pe(o, r, a) - e),
            i > 0 ? (n = o) : (t = o);
        } while (Math.abs(i) > 1e-7 && ++s < 12);
        return o;
      })(t, 0, 1, e, n);
    return (e) => (0 === e || 1 === e ? e : Pe(a(e), t, r));
  }
  const Re = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Le = (e) => (t) => 1 - e(1 - t),
    ze = Fe(0.33, 1.53, 0.69, 0.99),
    Ve = Le(ze),
    De = Re(Ve),
    Me = (e) =>
      (e *= 2) < 1 ? 0.5 * Ve(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    Ie = (e) => 1 - Math.sin(Math.acos(e)),
    Oe = Le(Ie),
    Ue = Re(Ie),
    Be = (e) =>
      /^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(
        e
      );
  const We = (e, t, n) => (n > t ? t : n < e ? e : n),
    qe = {
      test: (e) => "number" === typeof e,
      parse: parseFloat,
      transform: (e) => e,
    },
    Xe = c(c({}, qe), {}, { transform: (e) => We(0, 1, e) }),
    Ge = c(c({}, qe), {}, { default: 1 }),
    Qe = (e) => Math.round(1e5 * e) / 1e5,
    He = /-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
  const Ke =
      /^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i,
    Ye = (e, t) => (n) =>
      Boolean(
        ("string" === typeof n && Ke.test(n) && n.startsWith(e)) ||
          (t &&
            !(function (e) {
              return null == e;
            })(n) &&
            Object.prototype.hasOwnProperty.call(n, t))
      ),
    Je = (e, t, n) => (r) => {
      if ("string" !== typeof r) return r;
      const [a, i, o, s] = r.match(He);
      return {
        [e]: parseFloat(a),
        [t]: parseFloat(i),
        [n]: parseFloat(o),
        alpha: void 0 !== s ? parseFloat(s) : 1,
      };
    },
    Ze = c(
      c({}, qe),
      {},
      { transform: (e) => Math.round(((e) => We(0, 255, e))(e)) }
    ),
    _e = {
      test: Ye("rgb", "red"),
      parse: Je("red", "green", "blue"),
      transform: (e) => {
        let { red: t, green: n, blue: r, alpha: a = 1 } = e;
        return (
          "rgba(" +
          Ze.transform(t) +
          ", " +
          Ze.transform(n) +
          ", " +
          Ze.transform(r) +
          ", " +
          Qe(Xe.transform(a)) +
          ")"
        );
      },
    };
  const $e = {
      test: Ye("#"),
      parse: function (e) {
        let t = "",
          n = "",
          r = "",
          a = "";
        return (
          e.length > 5
            ? ((t = e.substring(1, 3)),
              (n = e.substring(3, 5)),
              (r = e.substring(5, 7)),
              (a = e.substring(7, 9)))
            : ((t = e.substring(1, 2)),
              (n = e.substring(2, 3)),
              (r = e.substring(3, 4)),
              (a = e.substring(4, 5)),
              (t += t),
              (n += n),
              (r += r),
              (a += a)),
          {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: a ? parseInt(a, 16) / 255 : 1,
          }
        );
      },
      transform: _e.transform,
    },
    et = (e) => ({
      test: (t) =>
        "string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
      parse: parseFloat,
      transform: (t) => "".concat(t).concat(e),
    }),
    tt = et("deg"),
    nt = et("%"),
    rt = et("px"),
    at = et("vh"),
    it = et("vw"),
    ot = c(
      c({}, nt),
      {},
      {
        parse: (e) => nt.parse(e) / 100,
        transform: (e) => nt.transform(100 * e),
      }
    ),
    st = {
      test: Ye("hsl", "hue"),
      parse: Je("hue", "saturation", "lightness"),
      transform: (e) => {
        let { hue: t, saturation: n, lightness: r, alpha: a = 1 } = e;
        return (
          "hsla(" +
          Math.round(t) +
          ", " +
          nt.transform(Qe(n)) +
          ", " +
          nt.transform(Qe(r)) +
          ", " +
          Qe(Xe.transform(a)) +
          ")"
        );
      },
    },
    lt = {
      test: (e) => _e.test(e) || $e.test(e) || st.test(e),
      parse: (e) =>
        _e.test(e) ? _e.parse(e) : st.test(e) ? st.parse(e) : $e.parse(e),
      transform: (e) =>
        "string" === typeof e
          ? e
          : e.hasOwnProperty("red")
          ? _e.transform(e)
          : st.transform(e),
    },
    ut =
      /(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
  const ct = "number",
    dt = "color",
    ft =
      /var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;
  function ht(e) {
    const t = e.toString(),
      n = [],
      r = { color: [], number: [], var: [] },
      a = [];
    let i = 0;
    const o = t
      .replace(
        ft,
        (e) => (
          lt.test(e)
            ? (r.color.push(i), a.push(dt), n.push(lt.parse(e)))
            : e.startsWith("var(")
            ? (r.var.push(i), a.push("var"), n.push(e))
            : (r.number.push(i), a.push(ct), n.push(parseFloat(e))),
          ++i,
          "${}"
        )
      )
      .split("${}");
    return { values: n, split: o, indexes: r, types: a };
  }
  function pt(e) {
    return ht(e).values;
  }
  function mt(e) {
    const { split: t, types: n } = ht(e),
      r = t.length;
    return (e) => {
      let a = "";
      for (let i = 0; i < r; i++)
        if (((a += t[i]), void 0 !== e[i])) {
          const t = n[i];
          a += t === ct ? Qe(e[i]) : t === dt ? lt.transform(e[i]) : e[i];
        }
      return a;
    };
  }
  const gt = (e) => ("number" === typeof e ? 0 : e);
  const vt = {
      test: function (e) {
        var t, n;
        return (
          isNaN(e) &&
          "string" === typeof e &&
          ((null === (t = e.match(He)) || void 0 === t ? void 0 : t.length) ||
            0) +
            ((null === (n = e.match(ut)) || void 0 === n ? void 0 : n.length) ||
              0) >
            0
        );
      },
      parse: pt,
      createTransformer: mt,
      getAnimatableNone: function (e) {
        const t = pt(e);
        return mt(e)(t.map(gt));
      },
    },
    yt = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function bt(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if ("drop-shadow" === t) return e;
    const [r] = n.match(He) || [];
    if (!r) return e;
    const a = n.replace(r, "");
    let i = yt.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + a + ")";
  }
  const xt =
      /\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g,
    wt = c(
      c({}, vt),
      {},
      {
        getAnimatableNone: (e) => {
          const t = e.match(xt);
          return t ? t.map(bt).join(" ") : e;
        },
      }
    ),
    St = {
      borderWidth: rt,
      borderTopWidth: rt,
      borderRightWidth: rt,
      borderBottomWidth: rt,
      borderLeftWidth: rt,
      borderRadius: rt,
      radius: rt,
      borderTopLeftRadius: rt,
      borderTopRightRadius: rt,
      borderBottomRightRadius: rt,
      borderBottomLeftRadius: rt,
      width: rt,
      maxWidth: rt,
      height: rt,
      maxHeight: rt,
      top: rt,
      right: rt,
      bottom: rt,
      left: rt,
      padding: rt,
      paddingTop: rt,
      paddingRight: rt,
      paddingBottom: rt,
      paddingLeft: rt,
      margin: rt,
      marginTop: rt,
      marginRight: rt,
      marginBottom: rt,
      marginLeft: rt,
      backgroundPositionX: rt,
      backgroundPositionY: rt,
    },
    kt = {
      rotate: tt,
      rotateX: tt,
      rotateY: tt,
      rotateZ: tt,
      scale: Ge,
      scaleX: Ge,
      scaleY: Ge,
      scaleZ: Ge,
      skew: tt,
      skewX: tt,
      skewY: tt,
      distance: rt,
      translateX: rt,
      translateY: rt,
      translateZ: rt,
      x: rt,
      y: rt,
      z: rt,
      perspective: rt,
      transformPerspective: rt,
      opacity: Xe,
      originX: ot,
      originY: ot,
      originZ: rt,
    },
    Et = c(c({}, qe), {}, { transform: Math.round }),
    At = c(
      c(c({}, St), kt),
      {},
      {
        zIndex: Et,
        size: rt,
        fillOpacity: Xe,
        strokeOpacity: Xe,
        numOctaves: Et,
      }
    ),
    Tt = c(
      c({}, At),
      {},
      {
        color: lt,
        backgroundColor: lt,
        outlineColor: lt,
        fill: lt,
        stroke: lt,
        borderColor: lt,
        borderTopColor: lt,
        borderRightColor: lt,
        borderBottomColor: lt,
        borderLeftColor: lt,
        filter: wt,
        WebkitFilter: wt,
      }
    ),
    jt = (e) => Tt[e];
  function Ct(e, t) {
    let n = jt(e);
    return (
      n !== wt && (n = vt),
      n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
  }
  const Nt = new Set(["auto", "none", "0"]);
  const Pt = (e) => e === qe || e === rt,
    Ft = (e, t) => parseFloat(e.split(", ")[t]),
    Rt = (e, t) => (n, r) => {
      let { transform: a } = r;
      if ("none" === a || !a) return 0;
      const i = a.match(
        /^matrix3d\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/
      );
      if (i) return Ft(i[1], t);
      {
        const t = a.match(
          /^matrix\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/
        );
        return t ? Ft(t[1], e) : 0;
      }
    },
    Lt = new Set(["x", "y", "z"]),
    zt = te.filter((e) => !Lt.has(e));
  const Vt = {
    width: (e, t) => {
      let { x: n } = e,
        { paddingLeft: r = "0", paddingRight: a = "0" } = t;
      return n.max - n.min - parseFloat(r) - parseFloat(a);
    },
    height: (e, t) => {
      let { y: n } = e,
        { paddingTop: r = "0", paddingBottom: a = "0" } = t;
      return n.max - n.min - parseFloat(r) - parseFloat(a);
    },
    top: (e, t) => {
      let { top: n } = t;
      return parseFloat(n);
    },
    left: (e, t) => {
      let { left: n } = t;
      return parseFloat(n);
    },
    bottom: (e, t) => {
      let { y: n } = e,
        { top: r } = t;
      return parseFloat(r) + (n.max - n.min);
    },
    right: (e, t) => {
      let { x: n } = e,
        { left: r } = t;
      return parseFloat(r) + (n.max - n.min);
    },
    x: Rt(4, 13),
    y: Rt(5, 14),
  };
  (Vt.translateX = Vt.x), (Vt.translateY = Vt.y);
  const Dt = new Set();
  let Mt = !1,
    It = !1;
  function Ot() {
    if (It) {
      const e = Array.from(Dt).filter((e) => e.needsMeasurement),
        t = new Set(e.map((e) => e.element)),
        n = new Map();
      t.forEach((e) => {
        const t = (function (e) {
          const t = [];
          return (
            zt.forEach((n) => {
              const r = e.getValue(n);
              void 0 !== r &&
                (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
            }),
            t
          );
        })(e);
        t.length && (n.set(e, t), e.render());
      }),
        e.forEach((e) => e.measureInitialState()),
        t.forEach((e) => {
          e.render();
          const t = n.get(e);
          t &&
            t.forEach((t) => {
              let [n, r] = t;
              var a;
              null === (a = e.getValue(n)) || void 0 === a || a.set(r);
            });
        }),
        e.forEach((e) => e.measureEndState()),
        e.forEach((e) => {
          void 0 !== e.suspendedScrollY &&
            window.scrollTo(0, e.suspendedScrollY);
        });
    }
    (It = !1), (Mt = !1), Dt.forEach((e) => e.complete()), Dt.clear();
  }
  function Ut() {
    Dt.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (It = !0);
    });
  }
  class Bt {
    constructor(e, t, n, r, a) {
      let i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = a),
        (this.isAsync = i);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (Dt.add(this),
            Mt || ((Mt = !0), le.read(Ut), le.resolveKeyframes(Ot)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let a = 0; a < e.length; a++)
        if (null === e[a])
          if (0 === a) {
            const a = null === r || void 0 === r ? void 0 : r.get(),
              i = e[e.length - 1];
            if (void 0 !== a) e[0] = a;
            else if (n && t) {
              const r = n.readValue(t, i);
              void 0 !== r && null !== r && (e[0] = r);
            }
            void 0 === e[0] && (e[0] = i), r && void 0 === a && r.set(e[0]);
          } else e[a] = e[a - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Dt.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), Dt.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  let Wt = ee,
    qt = ee;
  const Xt = (e) => /^-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(e),
    Gt = (e) => (t) => "string" === typeof t && t.startsWith(e),
    Qt = Gt("--"),
    Ht = Gt("var(--"),
    Kt = (e) => !!Ht(e) && Yt.test(e.split("/*")[0].trim()),
    Yt =
      /var\(--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i,
    Jt =
      /^var\(--(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;
  function Zt(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    qt(
      n <= 4,
      'Max CSS variable fallback depth detected in property "'.concat(
        e,
        '". This may indicate a circular fallback dependency.'
      )
    );
    const [r, a] = (function (e) {
      const t = Jt.exec(e);
      if (!t) return [,];
      const [, n, r, a] = t;
      return ["--".concat(null !== n && void 0 !== n ? n : r), a];
    })(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
      const e = i.trim();
      return Xt(e) ? parseFloat(e) : e;
    }
    return Kt(a) ? Zt(a, t, n + 1) : a;
  }
  const _t = (e) => (t) => t.test(e),
    $t = [
      qe,
      rt,
      nt,
      tt,
      it,
      at,
      { test: (e) => "auto" === e, parse: (e) => e },
    ],
    en = (e) => $t.find(_t(e));
  class tn extends Bt {
    constructor(e, t, n, r, a) {
      super(e, t, n, r, a, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let s = 0; s < e.length; s++) {
        let n = e[s];
        if ("string" === typeof n && ((n = n.trim()), Kt(n))) {
          const r = Zt(n, t.current);
          void 0 !== r && (e[s] = r),
            s === e.length - 1 && (this.finalKeyframe = n);
        }
      }
      if ((this.resolveNoneKeyframes(), !re.has(n) || 2 !== e.length)) return;
      const [r, a] = e,
        i = en(r),
        o = en(a);
      if (i !== o)
        if (Pt(i) && Pt(o))
          for (let s = 0; s < e.length; s++) {
            const t = e[s];
            "string" === typeof t && (e[s] = parseFloat(t));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let a = 0; a < e.length; a++)
        ("number" === typeof (r = e[a])
          ? 0 === r
          : null === r || "none" === r || "0" === r || Be(r)) && n.push(a);
      var r;
      n.length &&
        (function (e, t, n) {
          let r,
            a = 0;
          for (; a < e.length && !r; ) {
            const t = e[a];
            "string" === typeof t &&
              !Nt.has(t) &&
              ht(t).values.length &&
              (r = e[a]),
              a++;
          }
          if (r && n) for (const i of t) e[i] = Ct(n, r);
        })(e, n, t);
    }
    measureInitialState() {
      const { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      "height" === n && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = Vt[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current)
        )),
        (t[0] = this.measuredOrigin);
      const r = t[t.length - 1];
      void 0 !== r && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      var e;
      const { element: t, name: n, unresolvedKeyframes: r } = this;
      if (!t || !t.current) return;
      const a = t.getValue(n);
      a && a.jump(this.measuredOrigin, !1);
      const i = r.length - 1,
        o = r[i];
      (r[i] = Vt[n](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
        null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
        (null === (e = this.removedTransforms) || void 0 === e
          ? void 0
          : e.length) &&
          this.removedTransforms.forEach((e) => {
            let [n, r] = e;
            t.getValue(n).set(r);
          }),
        this.resolveNoneKeyframes();
    }
  }
  const nn = (e, t) =>
    "zIndex" !== t &&
    (!("number" !== typeof e && !Array.isArray(e)) ||
      !(
        "string" !== typeof e ||
        (!vt.test(e) && "0" !== e) ||
        e.startsWith("url(")
      ));
  function rn(e, t, n, r) {
    const a = e[0];
    if (null === a) return !1;
    if ("display" === t || "visibility" === t) return !0;
    const i = e[e.length - 1],
      o = nn(a, t),
      s = nn(i, t);
    return (
      Wt(
        o === s,
        "You are trying to animate "
          .concat(t, ' from "')
          .concat(a, '" to "')
          .concat(i, '". ')
          .concat(
            a,
            " is not an animatable value - to enable this animation set "
          )
          .concat(a, " to a value animatable to ")
          .concat(i, " via the `style` property.")
      ),
      !(!o || !s) &&
        ((function (e) {
          const t = e[0];
          if (1 === e.length) return !0;
          for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
        })(e) ||
          (("spring" === n || C(n)) && r))
    );
  }
  const an = (e) => null !== e;
  function on(e, t, n) {
    let { repeat: r, repeatType: a = "loop" } = t;
    const i = e.filter(an),
      o = r && "loop" !== a && r % 2 === 1 ? 0 : i.length - 1;
    return o && void 0 !== n ? n : i[o];
  }
  const sn = [
    "autoplay",
    "delay",
    "type",
    "repeat",
    "repeatDelay",
    "repeatType",
  ];
  class ln {
    constructor(e) {
      let {
          autoplay: t = !0,
          delay: n = 0,
          type: r = "keyframes",
          repeat: a = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
        } = e,
        s = f(e, sn);
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = pe.now()),
        (this.options = c(
          {
            autoplay: t,
            delay: n,
            type: r,
            repeat: a,
            repeatDelay: i,
            repeatType: o,
          },
          s
        )),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > 40
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        this._resolved || this.hasAttemptedResolve || (Ut(), Ot()),
        this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      (this.resolvedAt = pe.now()), (this.hasAttemptedResolve = !0);
      const {
        name: n,
        type: r,
        velocity: a,
        delay: i,
        onComplete: o,
        onUpdate: s,
        isGenerator: l,
      } = this.options;
      if (!l && !rn(e, n, r, a)) {
        if (Ne || !i)
          return (
            s && s(on(e, this.options, t)),
            o && o(),
            void this.resolveFinishedPromise()
          );
        this.options.duration = 0;
      }
      const u = this.initPlayback(e, t);
      !1 !== u &&
        ((this._resolved = c({ keyframes: e, finalKeyframe: t }, u)),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      (this.options.type = "keyframes"), (this.options.ease = "linear");
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  }
  const un = (e, t, n) => e + (t - e) * n;
  function cn(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + 6 * (t - e) * n
        : n < 0.5
        ? t
        : n < 2 / 3
        ? e + (t - e) * (2 / 3 - n) * 6
        : e
    );
  }
  function dn(e, t) {
    return (n) => (n > 0 ? t : e);
  }
  const fn = (e, t, n) => {
      const r = e * e,
        a = n * (t * t - r) + r;
      return a < 0 ? 0 : Math.sqrt(a);
    },
    hn = [$e, _e, st];
  function pn(e) {
    const t = ((n = e), hn.find((e) => e.test(n)));
    var n;
    if (
      (Wt(
        Boolean(t),
        "'".concat(
          e,
          "' is not an animatable color. Use the equivalent color code instead."
        )
      ),
      !Boolean(t))
    )
      return !1;
    let r = t.parse(e);
    return (
      t === st &&
        (r = (function (e) {
          let { hue: t, saturation: n, lightness: r, alpha: a } = e;
          (t /= 360), (n /= 100), (r /= 100);
          let i = 0,
            o = 0,
            s = 0;
          if (n) {
            const e = r < 0.5 ? r * (1 + n) : r + n - r * n,
              a = 2 * r - e;
            (i = cn(a, e, t + 1 / 3)),
              (o = cn(a, e, t)),
              (s = cn(a, e, t - 1 / 3));
          } else i = o = s = r;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * o),
            blue: Math.round(255 * s),
            alpha: a,
          };
        })(r)),
      r
    );
  }
  const mn = (e, t) => {
      const n = pn(e),
        r = pn(t);
      if (!n || !r) return dn(e, t);
      const a = c({}, n);
      return (e) => (
        (a.red = fn(n.red, r.red, e)),
        (a.green = fn(n.green, r.green, e)),
        (a.blue = fn(n.blue, r.blue, e)),
        (a.alpha = un(n.alpha, r.alpha, e)),
        _e.transform(a)
      );
    },
    gn = (e, t) => (n) => t(e(n)),
    vn = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.reduce(gn);
    },
    yn = new Set(["none", "hidden"]);
  function bn(e, t) {
    return (n) => un(e, t, n);
  }
  function xn(e) {
    return "number" === typeof e
      ? bn
      : "string" === typeof e
      ? Kt(e)
        ? dn
        : lt.test(e)
        ? mn
        : kn
      : Array.isArray(e)
      ? wn
      : "object" === typeof e
      ? lt.test(e)
        ? mn
        : Sn
      : dn;
  }
  function wn(e, t) {
    const n = [...e],
      r = n.length,
      a = e.map((e, n) => xn(e)(e, t[n]));
    return (e) => {
      for (let t = 0; t < r; t++) n[t] = a[t](e);
      return n;
    };
  }
  function Sn(e, t) {
    const n = c(c({}, e), t),
      r = {};
    for (const a in n)
      void 0 !== e[a] && void 0 !== t[a] && (r[a] = xn(e[a])(e[a], t[a]));
    return (e) => {
      for (const t in r) n[t] = r[t](e);
      return n;
    };
  }
  const kn = (e, t) => {
    const n = vt.createTransformer(t),
      r = ht(e),
      a = ht(t);
    return r.indexes.var.length === a.indexes.var.length &&
      r.indexes.color.length === a.indexes.color.length &&
      r.indexes.number.length >= a.indexes.number.length
      ? (yn.has(e) && !a.values.length) || (yn.has(t) && !r.values.length)
        ? (function (e, t) {
            return yn.has(e)
              ? (n) => (n <= 0 ? e : t)
              : (n) => (n >= 1 ? t : e);
          })(e, t)
        : vn(
            wn(
              (function (e, t) {
                var n;
                const r = [],
                  a = { color: 0, var: 0, number: 0 };
                for (let i = 0; i < t.values.length; i++) {
                  const o = t.types[i],
                    s = e.indexes[o][a[o]],
                    l = null !== (n = e.values[s]) && void 0 !== n ? n : 0;
                  (r[i] = l), a[o]++;
                }
                return r;
              })(r, a),
              a.values
            ),
            n
          )
      : (Wt(
          !0,
          "Complex values '"
            .concat(e, "' and '")
            .concat(
              t,
              "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
            )
        ),
        dn(e, t));
  };
  function En(e, t, n) {
    if ("number" === typeof e && "number" === typeof t && "number" === typeof n)
      return un(e, t, n);
    return xn(e)(e, t);
  }
  function An(e, t, n) {
    const r = Math.max(t - 5, 0);
    return ye(n - e(r), t - r);
  }
  const Tn = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: 0.3,
      visualDuration: 0.3,
      restSpeed: { granular: 0.01, default: 2 },
      restDelta: { granular: 0.005, default: 0.5 },
      minDuration: 0.01,
      maxDuration: 10,
      minDamping: 0.05,
      maxDamping: 1,
    },
    jn = 0.001;
  function Cn(e) {
    let t,
      n,
      {
        duration: r = Tn.duration,
        bounce: a = Tn.bounce,
        velocity: i = Tn.velocity,
        mass: o = Tn.mass,
      } = e;
    Wt(r <= _(Tn.maxDuration), "Spring duration must be 10 seconds or less");
    let s = 1 - a;
    (s = We(Tn.minDamping, Tn.maxDamping, s)),
      (r = We(Tn.minDuration, Tn.maxDuration, $(r))),
      s < 1
        ? ((t = (e) => {
            const t = e * s,
              n = t * r,
              a = t - i,
              o = Pn(e, s),
              l = Math.exp(-n);
            return jn - (a / o) * l;
          }),
          (n = (e) => {
            const n = e * s * r,
              a = n * i + i,
              o = Math.pow(s, 2) * Math.pow(e, 2) * r,
              l = Math.exp(-n),
              u = Pn(Math.pow(e, 2), s);
            return ((-t(e) + jn > 0 ? -1 : 1) * ((a - o) * l)) / u;
          }))
        : ((t = (e) => Math.exp(-e * r) * ((e - i) * r + 1) - 0.001),
          (n = (e) => Math.exp(-e * r) * (r * r * (i - e))));
    const l = (function (e, t, n) {
      let r = n;
      for (let a = 1; a < Nn; a++) r -= e(r) / t(r);
      return r;
    })(t, n, 5 / r);
    if (((r = _(r)), isNaN(l)))
      return { stiffness: Tn.stiffness, damping: Tn.damping, duration: r };
    {
      const e = Math.pow(l, 2) * o;
      return { stiffness: e, damping: 2 * s * Math.sqrt(o * e), duration: r };
    }
  }
  const Nn = 12;
  function Pn(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const Fn = ["duration", "bounce"],
    Rn = ["stiffness", "damping", "mass"];
  function Ln(e, t) {
    return t.some((t) => void 0 !== e[t]);
  }
  function zn() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : Tn.visualDuration,
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Tn.bounce;
    const n =
      "object" !== typeof e
        ? { visualDuration: e, keyframes: [0, 1], bounce: t }
        : e;
    let { restSpeed: r, restDelta: a } = n;
    const i = n.keyframes[0],
      o = n.keyframes[n.keyframes.length - 1],
      s = { done: !1, value: i },
      {
        stiffness: l,
        damping: u,
        mass: d,
        duration: f,
        velocity: h,
        isResolvedFromDuration: p,
      } = (function (e) {
        let t = c(
          {
            velocity: Tn.velocity,
            stiffness: Tn.stiffness,
            damping: Tn.damping,
            mass: Tn.mass,
            isResolvedFromDuration: !1,
          },
          e
        );
        if (!Ln(e, Rn) && Ln(e, Fn))
          if (e.visualDuration) {
            const n = e.visualDuration,
              r = (2 * Math.PI) / (1.2 * n),
              a = r * r,
              i = 2 * We(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
            t = c(c({}, t), {}, { mass: Tn.mass, stiffness: a, damping: i });
          } else {
            const n = Cn(e);
            (t = c(c(c({}, t), n), {}, { mass: Tn.mass })),
              (t.isResolvedFromDuration = !0);
          }
        return t;
      })(c(c({}, n), {}, { velocity: -$(n.velocity || 0) })),
      m = h || 0,
      g = u / (2 * Math.sqrt(l * d)),
      v = o - i,
      y = $(Math.sqrt(l / d)),
      b = Math.abs(v) < 5;
    let x;
    if (
      (r || (r = b ? Tn.restSpeed.granular : Tn.restSpeed.default),
      a || (a = b ? Tn.restDelta.granular : Tn.restDelta.default),
      g < 1)
    ) {
      const e = Pn(y, g);
      x = (t) => {
        const n = Math.exp(-g * y * t);
        return (
          o -
          n * (((m + g * y * v) / e) * Math.sin(e * t) + v * Math.cos(e * t))
        );
      };
    } else if (1 === g) x = (e) => o - Math.exp(-y * e) * (v + (m + y * v) * e);
    else {
      const e = y * Math.sqrt(g * g - 1);
      x = (t) => {
        const n = Math.exp(-g * y * t),
          r = Math.min(e * t, 300);
        return (
          o - (n * ((m + g * y * v) * Math.sinh(r) + e * v * Math.cosh(r))) / e
        );
      };
    }
    const w = {
      calculatedDuration: (p && f) || null,
      next: (e) => {
        const t = x(e);
        if (p) s.done = e >= f;
        else {
          let n = 0;
          g < 1 && (n = 0 === e ? _(m) : An(x, e, t));
          const i = Math.abs(n) <= r,
            l = Math.abs(o - t) <= a;
          s.done = i && l;
        }
        return (s.value = s.done ? o : t), s;
      },
      toString: () => {
        const e = Math.min(j(w), T),
          t = V((t) => w.next(e * t).value, e, 30);
        return e + "ms " + t;
      },
    };
    return w;
  }
  function Vn(e) {
    let {
      keyframes: t,
      velocity: n = 0,
      power: r = 0.8,
      timeConstant: a = 325,
      bounceDamping: i = 10,
      bounceStiffness: o = 500,
      modifyTarget: s,
      min: l,
      max: u,
      restDelta: c = 0.5,
      restSpeed: d,
    } = e;
    const f = t[0],
      h = { done: !1, value: f },
      p = (e) =>
        void 0 === l
          ? u
          : void 0 === u || Math.abs(l - e) < Math.abs(u - e)
          ? l
          : u;
    let m = r * n;
    const g = f + m,
      v = void 0 === s ? g : s(g);
    v !== g && (m = v - f);
    const y = (e) => -m * Math.exp(-e / a),
      b = (e) => v + y(e),
      x = (e) => {
        const t = y(e),
          n = b(e);
        (h.done = Math.abs(t) <= c), (h.value = h.done ? v : n);
      };
    let w, S;
    const k = (e) => {
      var t;
      ((t = h.value), (void 0 !== l && t < l) || (void 0 !== u && t > u)) &&
        ((w = e),
        (S = zn({
          keyframes: [h.value, p(h.value)],
          velocity: An(b, e, h.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: d,
        })));
    };
    return (
      k(0),
      {
        calculatedDuration: null,
        next: (e) => {
          let t = !1;
          return (
            S || void 0 !== w || ((t = !0), x(e), k(e)),
            void 0 !== w && e >= w ? S.next(e - w) : (!t && x(e), h)
          );
        },
      }
    );
  }
  const Dn = Fe(0.42, 0, 1, 1),
    Mn = Fe(0, 0, 0.58, 1),
    In = Fe(0.42, 0, 0.58, 1),
    On = {
      linear: ee,
      easeIn: Dn,
      easeInOut: In,
      easeOut: Mn,
      circIn: Ie,
      circInOut: Ue,
      circOut: Oe,
      backIn: Ve,
      backInOut: De,
      backOut: ze,
      anticipate: Me,
    },
    Un = (e) => {
      if (P(e)) {
        qt(
          4 === e.length,
          "Cubic bezier arrays must contain four numerical values."
        );
        const [t, n, r, a] = e;
        return Fe(t, n, r, a);
      }
      return "string" === typeof e
        ? (qt(void 0 !== On[e], "Invalid easing type '".concat(e, "'")), On[e])
        : e;
    };
  function Bn(e, t) {
    let {
      clamp: n = !0,
      ease: r,
      mixer: a,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i = e.length;
    if (
      (qt(
        i === t.length,
        "Both input and output ranges must be the same length"
      ),
      1 === i)
    )
      return () => t[0];
    if (2 === i && t[0] === t[1]) return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const s = (function (e, t, n) {
        const r = [],
          a = n || En,
          i = e.length - 1;
        for (let o = 0; o < i; o++) {
          let n = a(e[o], e[o + 1]);
          if (t) {
            const e = Array.isArray(t) ? t[o] || ee : t;
            n = vn(e, n);
          }
          r.push(n);
        }
        return r;
      })(t, r, a),
      l = s.length,
      u = (n) => {
        if (o && n < e[0]) return t[0];
        let r = 0;
        if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
        const a = z(e[r], e[r + 1], n);
        return s[r](a);
      };
    return n ? (t) => u(We(e[0], e[i - 1], t)) : u;
  }
  function Wn(e) {
    const t = [0];
    return (
      (function (e, t) {
        const n = e[e.length - 1];
        for (let r = 1; r <= t; r++) {
          const a = z(0, t, r);
          e.push(un(n, 1, a));
        }
      })(t, e.length - 1),
      t
    );
  }
  function qn(e) {
    let {
      duration: t = 300,
      keyframes: n,
      times: r,
      ease: a = "easeInOut",
    } = e;
    const i = ((e) => Array.isArray(e) && "number" !== typeof e[0])(a)
        ? a.map(Un)
        : Un(a),
      o = { done: !1, value: n[0] },
      s = (function (e, t) {
        return e.map((e) => e * t);
      })(r && r.length === n.length ? r : Wn(n), t),
      l = Bn(s, n, {
        ease: Array.isArray(i)
          ? i
          : ((u = n), (c = i), u.map(() => c || In).splice(0, u.length - 1)),
      });
    var u, c;
    return {
      calculatedDuration: t,
      next: (e) => ((o.value = l(e)), (o.done = e >= t), o),
    };
  }
  const Xn = (e) => {
      const t = (t) => {
        let { timestamp: n } = t;
        return e(n);
      };
      return {
        start: () => le.update(t, !0),
        stop: () => ue(t),
        now: () => (ce.isProcessing ? ce.timestamp : pe.now()),
      };
    },
    Gn = { decay: Vn, inertia: Vn, tween: qn, keyframes: qn, spring: zn },
    Qn = (e) => e / 100;
  class Hn extends ln {
    constructor(e) {
      super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.teardown();
          const { onStop: e } = this.options;
          e && e();
        });
      const {
          name: t,
          motionValue: n,
          element: r,
          keyframes: a,
        } = this.options,
        i = (null === r || void 0 === r ? void 0 : r.KeyframeResolver) || Bt;
      (this.resolver = new i(
        a,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes)
          );
    }
    initPlayback(e) {
      const {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: a,
          velocity: i = 0,
        } = this.options,
        o = C(t) ? t : Gn[t] || qn;
      let s, l;
      o !== qn &&
        "number" !== typeof e[0] &&
        ((s = vn(Qn, En(e[0], e[1]))), (e = [0, 100]));
      const u = o(c(c({}, this.options), {}, { keyframes: e }));
      "mirror" === a &&
        (l = o(
          c(
            c({}, this.options),
            {},
            { keyframes: [...e].reverse(), velocity: -i }
          )
        )),
        null === u.calculatedDuration && (u.calculatedDuration = j(u));
      const { calculatedDuration: d } = u,
        f = d + r;
      return {
        generator: u,
        mirroredGenerator: l,
        mapPercentToKeyframes: s,
        calculatedDuration: d,
        resolvedDuration: f,
        totalDuration: f * (n + 1) - r,
      };
    }
    onPostResolved() {
      const { autoplay: e = !0 } = this.options;
      this.play(),
        "paused" !== this.pendingPlayState && e
          ? (this.state = this.pendingPlayState)
          : this.pause();
    }
    tick(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const { resolved: n } = this;
      if (!n) {
        const { keyframes: e } = this.options;
        return { done: !0, value: e[e.length - 1] };
      }
      const {
        finalKeyframe: r,
        generator: a,
        mirroredGenerator: i,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: l,
        totalDuration: u,
        resolvedDuration: c,
      } = n;
      if (null === this.startTime) return a.next(0);
      const {
        delay: d,
        repeat: f,
        repeatType: h,
        repeatDelay: p,
        onUpdate: m,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - u / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : null !== this.holdTime
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        v = this.speed >= 0 ? g < 0 : g > u;
      (this.currentTime = Math.max(g, 0)),
        "finished" === this.state &&
          null === this.holdTime &&
          (this.currentTime = u);
      let y = this.currentTime,
        b = a;
      if (f) {
        const e = Math.min(this.currentTime, u) / c;
        let t = Math.floor(e),
          n = e % 1;
        !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, f + 1));
        Boolean(t % 2) &&
          ("reverse" === h
            ? ((n = 1 - n), p && (n -= p / c))
            : "mirror" === h && (b = i)),
          (y = We(0, 1, n) * c);
      }
      const x = v ? { done: !1, value: s[0] } : b.next(y);
      o && (x.value = o(x.value));
      let { done: w } = x;
      v ||
        null === l ||
        (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
      const S =
        null === this.holdTime &&
        ("finished" === this.state || ("running" === this.state && w));
      return (
        S && void 0 !== r && (x.value = on(s, this.options, r)),
        m && m(x.value),
        S && this.finish(),
        x
      );
    }
    get duration() {
      const { resolved: e } = this;
      return e ? $(e.calculatedDuration) : 0;
    }
    get time() {
      return $(this.currentTime);
    }
    set time(e) {
      (e = _(e)),
        (this.currentTime = e),
        null !== this.holdTime || 0 === this.speed
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      const t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = $(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      )
        return void (this.pendingPlayState = "running");
      if (this.isStopped) return;
      const { driver: e = Xn, onPlay: t, startTime: n } = this.options;
      this.driver || (this.driver = e((e) => this.tick(e))), t && t();
      const r = this.driver.now();
      null !== this.holdTime
        ? (this.startTime = r - this.holdTime)
        : this.startTime
        ? "finished" === this.state && (this.startTime = r)
        : (this.startTime =
            null !== n && void 0 !== n ? n : this.calcStartTime()),
        "finished" === this.state && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      this._resolved
        ? ((this.state = "paused"),
          (this.holdTime =
            null !== (e = this.currentTime) && void 0 !== e ? e : 0))
        : (this.pendingPlayState = "paused");
    }
    complete() {
      "running" !== this.state && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      const { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      null !== this.cancelTime && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  }
  const Kn = new Set(["opacity", "clipPath", "filter", "transform"]);
  const Yn = w(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Jn = ["onComplete", "onUpdate", "motionValue", "element"],
    Zn = ["motionValue", "onUpdate", "onComplete", "element"];
  const _n = { anticipate: Me, backInOut: De, circInOut: Ue };
  class $n extends ln {
    constructor(e) {
      super(e);
      const {
        name: t,
        motionValue: n,
        element: r,
        keyframes: a,
      } = this.options;
      (this.resolver = new tn(
        a,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve();
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: a,
        type: i,
        motionValue: o,
        name: s,
        startTime: l,
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      var u;
      if (
        ("string" === typeof a && L() && a in _n && (a = _n[a]),
        C((u = this.options).type) || "spring" === u.type || !D(u.ease))
      ) {
        const t = this.options,
          { onComplete: o, onUpdate: s, motionValue: l, element: u } = t,
          d = f(t, Jn),
          h = (function (e, t) {
            const n = new Hn(
              c(
                c({}, t),
                {},
                { keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }
              )
            );
            let r = { done: !1, value: e[0] };
            const a = [];
            let i = 0;
            for (; !r.done && i < 2e4; )
              (r = n.sample(i)), a.push(r.value), (i += 10);
            return {
              times: void 0,
              keyframes: a,
              duration: i - 10,
              ease: "linear",
            };
          })(e, d);
        1 === (e = h.keyframes).length && (e[1] = e[0]),
          (n = h.duration),
          (r = h.times),
          (a = h.ease),
          (i = "keyframes");
      }
      const d = (function (e, t, n) {
        let {
          delay: r = 0,
          duration: a = 300,
          repeat: i = 0,
          repeatType: o = "loop",
          ease: s = "easeInOut",
          times: l,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const u = { [t]: n };
        l && (u.offset = l);
        const c = O(s, a);
        return (
          Array.isArray(c) && (u.easing = c),
          e.animate(u, {
            delay: r,
            duration: a,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: i + 1,
            direction: "reverse" === o ? "alternate" : "normal",
          })
        );
      })(
        o.owner.current,
        s,
        e,
        c(c({}, this.options), {}, { duration: n, times: r, ease: a })
      );
      return (
        (d.startTime = null !== l && void 0 !== l ? l : this.calcStartTime()),
        this.pendingTimeline
          ? (N(d, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (d.onfinish = () => {
              const { onComplete: n } = this.options;
              o.set(on(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise();
            }),
        { animation: d, duration: n, times: r, type: i, ease: a, keyframes: e }
      );
    }
    get duration() {
      const { resolved: e } = this;
      if (!e) return 0;
      const { duration: t } = e;
      return $(t);
    }
    get time() {
      const { resolved: e } = this;
      if (!e) return 0;
      const { animation: t } = e;
      return $(t.currentTime || 0);
    }
    set time(e) {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.currentTime = _(e);
    }
    get speed() {
      const { resolved: e } = this;
      if (!e) return 1;
      const { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      const { resolved: e } = this;
      if (!e) return "idle";
      const { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      const { resolved: e } = this;
      if (!e) return null;
      const { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (this._resolved) {
        const { resolved: t } = this;
        if (!t) return ee;
        const { animation: n } = t;
        N(n, e);
      } else this.pendingTimeline = e;
      return ee;
    }
    play() {
      if (this.isStopped) return;
      const { resolved: e } = this;
      if (!e) return;
      const { animation: t } = e;
      "finished" === t.playState && this.updateFinishedPromise(), t.play();
    }
    pause() {
      const { resolved: e } = this;
      if (!e) return;
      const { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)
      )
        return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const { resolved: e } = this;
      if (!e) return;
      const {
        animation: t,
        keyframes: n,
        duration: r,
        type: a,
        ease: i,
        times: o,
      } = e;
      if ("idle" === t.playState || "finished" === t.playState) return;
      if (this.time) {
        const e = this.options,
          { motionValue: t, onUpdate: s, onComplete: l, element: u } = e,
          d = f(e, Zn),
          h = new Hn(
            c(
              c({}, d),
              {},
              {
                keyframes: n,
                duration: r,
                type: a,
                ease: i,
                times: o,
                isGenerator: !0,
              }
            )
          ),
          p = _(this.time);
        t.setWithVelocity(h.sample(p - 10).value, h.sample(p).value, 10);
      }
      const { onStop: s } = this.options;
      s && s(), this.cancel();
    }
    complete() {
      const { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      const { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: a,
        damping: i,
        type: o,
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
        return !1;
      const { onUpdate: s, transformTemplate: l } = t.owner.getProps();
      return (
        Yn() &&
        n &&
        Kn.has(n) &&
        !s &&
        !l &&
        !r &&
        "mirror" !== a &&
        0 !== i &&
        "inertia" !== o
      );
    }
  }
  const er = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    tr = { type: "keyframes", duration: 0.8 },
    nr = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    rr = (e, t) => {
      let { keyframes: n } = t;
      return n.length > 2
        ? tr
        : ne.has(e)
        ? e.startsWith("scale")
          ? {
              type: "spring",
              stiffness: 550,
              damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
              restSpeed: 10,
            }
          : er
        : nr;
    },
    ar = [
      "when",
      "delay",
      "delayChildren",
      "staggerChildren",
      "staggerDirection",
      "repeat",
      "repeatType",
      "repeatDelay",
      "from",
      "elapsed",
    ];
  const ir = function (e, t, n) {
      let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 ? arguments[4] : void 0,
        i = arguments.length > 5 ? arguments[5] : void 0;
      return (o) => {
        const s = A(r, e) || {},
          l = s.delay || r.delay || 0;
        let { elapsed: u = 0 } = r;
        u -= _(l);
        let d = c(
          c(
            {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: t.getVelocity(),
            },
            s
          ),
          {},
          {
            delay: -u,
            onUpdate: (e) => {
              t.set(e), s.onUpdate && s.onUpdate(e);
            },
            onComplete: () => {
              o(), s.onComplete && s.onComplete();
            },
            name: e,
            motionValue: t,
            element: i ? void 0 : a,
          }
        );
        (function (e) {
          let {
              when: t,
              delay: n,
              delayChildren: r,
              staggerChildren: a,
              staggerDirection: i,
              repeat: o,
              repeatType: s,
              repeatDelay: l,
              from: u,
              elapsed: c,
            } = e,
            d = f(e, ar);
          return !!Object.keys(d).length;
        })(s) || (d = c(c({}, d), rr(e, d))),
          d.duration && (d.duration = _(d.duration)),
          d.repeatDelay && (d.repeatDelay = _(d.repeatDelay)),
          void 0 !== d.from && (d.keyframes[0] = d.from);
        let h = !1;
        if (
          ((!1 === d.type || (0 === d.duration && !d.repeatDelay)) &&
            ((d.duration = 0), 0 === d.delay && (h = !0)),
          (Ne || ae) && ((h = !0), (d.duration = 0), (d.delay = 0)),
          h && !i && void 0 !== t.get())
        ) {
          const e = on(d.keyframes, s);
          if (void 0 !== e)
            return (
              le.update(() => {
                d.onUpdate(e), d.onComplete();
              }),
              new E([])
            );
        }
        return !i && $n.supports(d) ? new $n(d) : new Hn(d);
      };
    },
    or = ["transition", "transitionEnd"];
  function sr(e, t) {
    let { protectedKeys: n, needsAnimating: r } = e;
    const a = n.hasOwnProperty(t) && !0 !== r[t];
    return (r[t] = !1), a;
  }
  function lr(e, t) {
    let {
      delay: n = 0,
      transitionOverride: r,
      type: a,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var i;
    let { transition: o = e.getDefaultTransition(), transitionEnd: s } = t,
      l = f(t, or);
    r && (o = r);
    const u = [],
      d = a && e.animationState && e.animationState.getState()[a];
    for (const f in l) {
      const t = e.getValue(
          f,
          null !== (i = e.latestValues[f]) && void 0 !== i ? i : null
        ),
        r = l[f];
      if (void 0 === r || (d && sr(d, f))) continue;
      const a = c({ delay: n }, A(o || {}, f));
      let s = !1;
      if (window.MotionHandoffAnimation) {
        const t = Ce(e);
        if (t) {
          const e = window.MotionHandoffAnimation(t, f, le);
          null !== e && ((a.startTime = e), (s = !0));
        }
      }
      Ae(e, f),
        t.start(
          ir(
            f,
            t,
            r,
            e.shouldReduceMotion && re.has(f) ? { type: !1 } : a,
            e,
            s
          )
        );
      const h = t.animation;
      h && u.push(h);
    }
    return (
      s &&
        Promise.all(u).then(() => {
          le.update(() => {
            s &&
              (function (e, t) {
                let n = y(e, t) || {},
                  { transitionEnd: r = {}, transition: a = {} } = n,
                  i = f(n, Se);
                i = c(c({}, i), r);
                for (const s in i)
                  ke(e, s, ((o = i[s]), h(o) ? o[o.length - 1] || 0 : o));
                var o;
              })(e, s);
          });
        }),
      u
    );
  }
  function ur(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var r;
    const a = y(
      e,
      t,
      "exit" === n.type
        ? null === (r = e.presenceContext) || void 0 === r
          ? void 0
          : r.custom
        : void 0
    );
    let { transition: i = e.getDefaultTransition() || {} } = a || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = a ? () => Promise.all(lr(e, a, n)) : () => Promise.resolve(),
      s =
        e.variantChildren && e.variantChildren.size
          ? function () {
              let r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              const {
                delayChildren: a = 0,
                staggerChildren: o,
                staggerDirection: s,
              } = i;
              return (function (e, t) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 1,
                  i = arguments.length > 5 ? arguments[5] : void 0;
                const o = [],
                  s = (e.variantChildren.size - 1) * r,
                  l =
                    1 === a
                      ? function () {
                          return (
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0) * r
                          );
                        }
                      : function () {
                          return (
                            s -
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0) *
                              r
                          );
                        };
                return (
                  Array.from(e.variantChildren)
                    .sort(cr)
                    .forEach((e, r) => {
                      e.notify("AnimationStart", t),
                        o.push(
                          ur(e, t, c(c({}, i), {}, { delay: n + l(r) })).then(
                            () => e.notify("AnimationComplete", t)
                          )
                        );
                    }),
                  Promise.all(o)
                );
              })(e, t, a + r, o, s, n);
            }
          : () => Promise.resolve(),
      { when: l } = i;
    if (l) {
      const [e, t] = "beforeChildren" === l ? [o, s] : [s, o];
      return e().then(() => t());
    }
    return Promise.all([o(), s(n.delay)]);
  }
  function cr(e, t) {
    return e.sortNodePosition(t);
  }
  const dr = x.length;
  function fr(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
      const t = (e.parent && fr(e.parent)) || {};
      return void 0 !== e.props.initial && (t.initial = e.props.initial), t;
    }
    const t = {};
    for (let n = 0; n < dr; n++) {
      const r = x[n],
        a = e.props[r];
      (m(a) || !1 === a) && (t[r] = a);
    }
    return t;
  }
  const hr = ["transition", "transitionEnd"],
    pr = [...b].reverse(),
    mr = b.length;
  function gr(e) {
    return (t) =>
      Promise.all(
        t.map((t) => {
          let { animation: n, options: r } = t;
          return (function (e, t) {
            let n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            if ((e.notify("AnimationStart", t), Array.isArray(t))) {
              const a = t.map((t) => ur(e, t, r));
              n = Promise.all(a);
            } else if ("string" === typeof t) n = ur(e, t, r);
            else {
              const a = "function" === typeof t ? y(e, t, r.custom) : t;
              n = Promise.all(lr(e, a, r));
            }
            return n.then(() => {
              e.notify("AnimationComplete", t);
            });
          })(e, n, r);
        })
      );
  }
  function vr(e) {
    let t = gr(e),
      n = xr(),
      r = !0;
    const a = (t) => (n, r) => {
      var a;
      const i = y(
        e,
        r,
        "exit" === t
          ? null === (a = e.presenceContext) || void 0 === a
            ? void 0
            : a.custom
          : void 0
      );
      if (i) {
        const { transition: e, transitionEnd: t } = i,
          r = f(i, hr);
        n = c(c(c({}, n), r), t);
      }
      return n;
    };
    function i(i) {
      const { props: o } = e,
        s = fr(e.parent) || {},
        l = [],
        u = new Set();
      let f = {},
        g = 1 / 0;
      for (let t = 0; t < mr; t++) {
        const v = pr[t],
          y = n[v],
          b = void 0 !== o[v] ? o[v] : s[v],
          x = m(b),
          w = v === i ? y.isActive : null;
        !1 === w && (g = t);
        let S = b === s[v] && b !== o[v] && x;
        if (
          (S && r && e.manuallyAnimateOnMount && (S = !1),
          (y.protectedKeys = c({}, f)),
          (!y.isActive && null === w) ||
            (!b && !y.prevProp) ||
            d(b) ||
            "boolean" === typeof b)
        )
          continue;
        const k = yr(y.prevProp, b);
        let E = k || (v === i && y.isActive && !S && x) || (t > g && x),
          A = !1;
        const T = Array.isArray(b) ? b : [b];
        let j = T.reduce(a(v), {});
        !1 === w && (j = {});
        const { prevResolvedValues: C = {} } = y,
          N = c(c({}, C), j),
          P = (t) => {
            (E = !0),
              u.has(t) && ((A = !0), u.delete(t)),
              (y.needsAnimating[t] = !0);
            const n = e.getValue(t);
            n && (n.liveStyle = !1);
          };
        for (const e in N) {
          const t = j[e],
            n = C[e];
          if (f.hasOwnProperty(e)) continue;
          let r = !1;
          (r = h(t) && h(n) ? !p(t, n) : t !== n),
            r
              ? void 0 !== t && null !== t
                ? P(e)
                : u.add(e)
              : void 0 !== t && u.has(e)
              ? P(e)
              : (y.protectedKeys[e] = !0);
        }
        (y.prevProp = b),
          (y.prevResolvedValues = j),
          y.isActive && (f = c(c({}, f), j)),
          r && e.blockInitialAnimation && (E = !1);
        E &&
          (!(S && k) || A) &&
          l.push(...T.map((e) => ({ animation: e, options: { type: v } })));
      }
      if (u.size) {
        const t = {};
        u.forEach((n) => {
          const r = e.getBaseTarget(n),
            a = e.getValue(n);
          a && (a.liveStyle = !0),
            (t[n] = null !== r && void 0 !== r ? r : null);
        }),
          l.push({ animation: t });
      }
      let v = Boolean(l.length);
      return (
        !r ||
          (!1 !== o.initial && o.initial !== o.animate) ||
          e.manuallyAnimateOnMount ||
          (v = !1),
        (r = !1),
        v ? t(l) : Promise.resolve()
      );
    }
    return {
      animateChanges: i,
      setActive: function (t, r) {
        var a;
        if (n[t].isActive === r) return Promise.resolve();
        null === (a = e.variantChildren) ||
          void 0 === a ||
          a.forEach((e) => {
            var n;
            return null === (n = e.animationState) || void 0 === n
              ? void 0
              : n.setActive(t, r);
          }),
          (n[t].isActive = r);
        const o = i(t);
        for (const e in n) n[e].protectedKeys = {};
        return o;
      },
      setAnimateFunction: function (n) {
        t = n(e);
      },
      getState: () => n,
      reset: () => {
        (n = xr()), (r = !0);
      },
    };
  }
  function yr(e, t) {
    return "string" === typeof t ? t !== e : !!Array.isArray(t) && !p(t, e);
  }
  function br() {
    return {
      isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function xr() {
    return {
      animate: br(!0),
      whileInView: br(),
      whileHover: br(),
      whileTap: br(),
      whileDrag: br(),
      whileFocus: br(),
      exit: br(),
    };
  }
  class wr {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  }
  let Sr = 0;
  const kr = {
    animation: {
      Feature: class extends wr {
        constructor(e) {
          super(e), e.animationState || (e.animationState = vr(e));
        }
        updateAnimationControlsSubscription() {
          const { animate: e } = this.node.getProps();
          d(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          const { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      },
    },
    exit: {
      Feature: class extends wr {
        constructor() {
          super(...arguments), (this.id = Sr++);
        }
        update() {
          if (!this.node.presenceContext) return;
          const { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          const r = this.node.animationState.setActive("exit", !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          const { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      },
    },
  };
  function Er(e, t, n) {
    let r =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { passive: !0 };
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  function Ar(e) {
    return { point: { x: e.pageX, y: e.pageY } };
  }
  function Tr(e, t, n, r) {
    return Er(
      e,
      t,
      (
        (e) => (t) =>
          G(t) && e(t, Ar(t))
      )(n),
      r
    );
  }
  const jr = (e, t) => Math.abs(e - t);
  class Cr {
    constructor(e, t) {
      let {
        transformPagePoint: n,
        contextWindow: r,
        dragSnapToOrigin: a = !1,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
          const e = Fr(this.lastMoveEventInfo, this.history),
            t = null !== this.startEvent,
            n =
              (function (e, t) {
                const n = jr(e.x, t.x),
                  r = jr(e.y, t.y);
                return Math.sqrt(n ** 2 + r ** 2);
              })(e.offset, { x: 0, y: 0 }) >= 3;
          if (!t && !n) return;
          const { point: r } = e,
            { timestamp: a } = ce;
          this.history.push(c(c({}, r), {}, { timestamp: a }));
          const { onStart: i, onMove: o } = this.handlers;
          t ||
            (i && i(this.lastMoveEvent, e),
            (this.startEvent = this.lastMoveEvent)),
            o && o(this.lastMoveEvent, e);
        }),
        (this.handlePointerMove = (e, t) => {
          (this.lastMoveEvent = e),
            (this.lastMoveEventInfo = Nr(t, this.transformPagePoint)),
            le.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (e, t) => {
          this.end();
          const {
            onEnd: n,
            onSessionEnd: r,
            resumeAnimation: a,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && a && a(),
            !this.lastMoveEvent || !this.lastMoveEventInfo)
          )
            return;
          const i = Fr(
            "pointercancel" === e.type
              ? this.lastMoveEventInfo
              : Nr(t, this.transformPagePoint),
            this.history
          );
          this.startEvent && n && n(e, i), r && r(e, i);
        }),
        !G(e))
      )
        return;
      (this.dragSnapToOrigin = a),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || window);
      const i = Nr(Ar(e), this.transformPagePoint),
        { point: o } = i,
        { timestamp: s } = ce;
      this.history = [c(c({}, o), {}, { timestamp: s })];
      const { onSessionStart: l } = t;
      l && l(e, Fr(i, this.history)),
        (this.removeListeners = vn(
          Tr(this.contextWindow, "pointermove", this.handlePointerMove),
          Tr(this.contextWindow, "pointerup", this.handlePointerUp),
          Tr(this.contextWindow, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), ue(this.updatePoint);
    }
  }
  function Nr(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function Pr(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function Fr(e, t) {
    let { point: n } = e;
    return {
      point: n,
      delta: Pr(n, Lr(t)),
      offset: Pr(n, Rr(t)),
      velocity: zr(t, 0.1),
    };
  }
  function Rr(e) {
    return e[0];
  }
  function Lr(e) {
    return e[e.length - 1];
  }
  function zr(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
      r = null;
    const a = Lr(e);
    for (; n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > _(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const i = $(a.timestamp - r.timestamp);
    if (0 === i) return { x: 0, y: 0 };
    const o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
  }
  function Vr(e) {
    return (
      e &&
      "object" === typeof e &&
      Object.prototype.hasOwnProperty.call(e, "current")
    );
  }
  function Dr(e) {
    return e.max - e.min;
  }
  function Mr(e, t, n) {
    let r =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
    (e.origin = r),
      (e.originPoint = un(t.min, t.max, e.origin)),
      (e.scale = Dr(n) / Dr(t)),
      (e.translate = un(n.min, n.max, e.origin) - e.originPoint),
      ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
        (e.scale = 1),
      ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
        (e.translate = 0);
  }
  function Ir(e, t, n, r) {
    Mr(e.x, t.x, n.x, r ? r.originX : void 0),
      Mr(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function Or(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + Dr(t));
  }
  function Ur(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + Dr(t));
  }
  function Br(e, t, n) {
    Ur(e.x, t.x, n.x), Ur(e.y, t.y, n.y);
  }
  function Wr(e, t, n) {
    return {
      min: void 0 !== t ? e.min + t : void 0,
      max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
    };
  }
  function qr(e, t) {
    let n = t.min - e.min,
      r = t.max - e.max;
    return (
      t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
    );
  }
  const Xr = 0.35;
  function Gr(e, t, n) {
    return { min: Qr(e, t), max: Qr(e, n) };
  }
  function Qr(e, t) {
    return "number" === typeof e ? e : e[t] || 0;
  }
  const Hr = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
  function Kr(e) {
    return [e("x"), e("y")];
  }
  function Yr(e) {
    let { top: t, left: n, right: r, bottom: a } = e;
    return { x: { min: n, max: r }, y: { min: t, max: a } };
  }
  function Jr(e) {
    return void 0 === e || 1 === e;
  }
  function Zr(e) {
    let { scale: t, scaleX: n, scaleY: r } = e;
    return !Jr(t) || !Jr(n) || !Jr(r);
  }
  function _r(e) {
    return (
      Zr(e) ||
      $r(e) ||
      e.z ||
      e.rotate ||
      e.rotateX ||
      e.rotateY ||
      e.skewX ||
      e.skewY
    );
  }
  function $r(e) {
    return ea(e.x) || ea(e.y);
  }
  function ea(e) {
    return e && "0%" !== e;
  }
  function ta(e, t, n) {
    return n + t * (e - n);
  }
  function na(e, t, n, r, a) {
    return void 0 !== a && (e = ta(e, a, r)), ta(e, n, r) + t;
  }
  function ra(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      a = arguments.length > 4 ? arguments[4] : void 0;
    (e.min = na(e.min, t, n, r, a)), (e.max = na(e.max, t, n, r, a));
  }
  function aa(e, t) {
    let { x: n, y: r } = t;
    ra(e.x, n.translate, n.scale, n.originPoint),
      ra(e.y, r.translate, r.scale, r.originPoint);
  }
  const ia = 0.999999999999,
    oa = 1.0000000000001;
  function sa(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
  }
  function la(e, t, n, r) {
    let a =
      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5;
    ra(e, t, n, un(e.min, e.max, a), r);
  }
  function ua(e, t) {
    la(e.x, t.x, t.scaleX, t.scale, t.originX),
      la(e.y, t.y, t.scaleY, t.scale, t.originY);
  }
  function ca(e, t) {
    return Yr(
      (function (e, t) {
        if (!t) return e;
        const n = t({ x: e.left, y: e.top }),
          r = t({ x: e.right, y: e.bottom });
        return { top: n.y, left: n.x, bottom: r.y, right: r.x };
      })(e.getBoundingClientRect(), t)
    );
  }
  const da = (e) => {
      let { current: t } = e;
      return t ? t.ownerDocument.defaultView : null;
    },
    fa = new WeakMap();
  class ha {
    constructor(e) {
      (this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
        (this.visualElement = e);
    }
    start(e) {
      let { snapToCursor: t = !1 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const { presenceContext: n } = this.visualElement;
      if (n && !1 === n.isPresent) return;
      const { dragSnapToOrigin: r } = this.getProps();
      this.panSession = new Cr(
        e,
        {
          onSessionStart: (e) => {
            const { dragSnapToOrigin: n } = this.getProps();
            n ? this.pauseAnimation() : this.stopAnimation(),
              t && this.snapToCursor(Ar(e).point);
          },
          onStart: (e, t) => {
            const {
              drag: n,
              dragPropagation: r,
              onDragStart: a,
            } = this.getProps();
            if (
              n &&
              !r &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock =
                "x" === (i = n) || "y" === i
                  ? U[i]
                    ? null
                    : ((U[i] = !0),
                      () => {
                        U[i] = !1;
                      })
                  : U.x || U.y
                  ? null
                  : ((U.x = U.y = !0),
                    () => {
                      U.x = U.y = !1;
                    })),
              !this.openDragLock)
            )
              return;
            var i;
            (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              Kr((e) => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (nt.test(t)) {
                  const { projection: n } = this.visualElement;
                  if (n && n.layout) {
                    const r = n.layout.layoutBox[e];
                    if (r) {
                      t = Dr(r) * (parseFloat(t) / 100);
                    }
                  }
                }
                this.originPoint[e] = t;
              }),
              a && le.postRender(() => a(e, t)),
              Ae(this.visualElement, "transform");
            const { animationState: o } = this.visualElement;
            o && o.setActive("whileDrag", !0);
          },
          onMove: (e, t) => {
            const {
              dragPropagation: n,
              dragDirectionLock: r,
              onDirectionLock: a,
              onDrag: i,
            } = this.getProps();
            if (!n && !this.openDragLock) return;
            const { offset: o } = t;
            if (r && null === this.currentDirection)
              return (
                (this.currentDirection = (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 10,
                    n = null;
                  Math.abs(e.y) > t
                    ? (n = "y")
                    : Math.abs(e.x) > t && (n = "x");
                  return n;
                })(o)),
                void (
                  null !== this.currentDirection &&
                  a &&
                  a(this.currentDirection)
                )
              );
            this.updateAxis("x", t.point, o),
              this.updateAxis("y", t.point, o),
              this.visualElement.render(),
              i && i(e, t);
          },
          onSessionEnd: (e, t) => this.stop(e, t),
          resumeAnimation: () =>
            Kr((e) => {
              var t;
              return (
                "paused" === this.getAnimationState(e) &&
                (null === (t = this.getAxisMotionValue(e).animation) ||
                void 0 === t
                  ? void 0
                  : t.play())
              );
            }),
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: r,
          contextWindow: da(this.visualElement),
        }
      );
    }
    stop(e, t) {
      const n = this.isDragging;
      if ((this.cancel(), !n)) return;
      const { velocity: r } = t;
      this.startAnimation(r);
      const { onDragEnd: a } = this.getProps();
      a && le.postRender(() => a(e, t));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      const { dragPropagation: n } = this.getProps();
      !n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      const { drag: r } = this.getProps();
      if (!n || !pa(e, r, this.currentDirection)) return;
      const a = this.getAxisMotionValue(e);
      let i = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (i = (function (e, t, n) {
          let { min: r, max: a } = t;
          return (
            void 0 !== r && e < r
              ? (e = n ? un(r, e, n.min) : Math.max(e, r))
              : void 0 !== a &&
                e > a &&
                (e = n ? un(a, e, n.max) : Math.min(e, a)),
            e
          );
        })(i, this.constraints[e], this.elastic[e])),
        a.set(i);
    }
    resolveConstraints() {
      var e;
      const { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : null === (e = this.visualElement.projection) || void 0 === e
            ? void 0
            : e.layout,
        a = this.constraints;
      t && Vr(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : (this.constraints =
            !(!t || !r) &&
            (function (e, t) {
              let { top: n, left: r, bottom: a, right: i } = t;
              return { x: Wr(e.x, r, i), y: Wr(e.y, n, a) };
            })(r.layoutBox, t)),
        (this.elastic = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xr;
          return (
            !1 === e ? (e = 0) : !0 === e && (e = Xr),
            { x: Gr(e, "left", "right"), y: Gr(e, "top", "bottom") }
          );
        })(n)),
        a !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Kr((e) => {
            !1 !== this.constraints &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = (function (e, t) {
                const n = {};
                return (
                  void 0 !== t.min && (n.min = t.min - e.min),
                  void 0 !== t.max && (n.max = t.max - e.min),
                  n
                );
              })(r.layoutBox[e], this.constraints[e]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: t } =
        this.getProps();
      if (!e || !Vr(e)) return !1;
      const n = e.current;
      qt(
        null !== n,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      const { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      const a = (function (e, t, n) {
        const r = ca(e, n),
          { scroll: a } = t;
        return a && (sa(r.x, a.offset.x), sa(r.y, a.offset.y)), r;
      })(n, r.root, this.visualElement.getTransformPagePoint());
      let i = (function (e, t) {
        return { x: qr(e.x, t.x), y: qr(e.y, t.y) };
      })(r.layout.layoutBox, a);
      if (t) {
        const e = t(
          (function (e) {
            let { x: t, y: n } = e;
            return { top: n.min, right: t.max, bottom: n.max, left: t.min };
          })(i)
        );
        (this.hasMutatedConstraints = !!e), e && (i = Yr(e));
      }
      return i;
    }
    startAnimation(e) {
      const {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: a,
          dragSnapToOrigin: i,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        l = Kr((o) => {
          if (!pa(o, t, this.currentDirection)) return;
          let l = (s && s[o]) || {};
          i && (l = { min: 0, max: 0 });
          const u = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            f = c(
              c(
                {
                  type: "inertia",
                  velocity: n ? e[o] : 0,
                  bounceStiffness: u,
                  bounceDamping: d,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                },
                a
              ),
              l
            );
          return this.startAxisValueAnimation(o, f);
        });
      return Promise.all(l).then(o);
    }
    startAxisValueAnimation(e, t) {
      const n = this.getAxisMotionValue(e);
      return (
        Ae(this.visualElement, e),
        n.start(ir(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Kr((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      Kr((e) => {
        var t;
        return null === (t = this.getAxisMotionValue(e).animation) ||
          void 0 === t
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      const t = "_drag".concat(e.toUpperCase()),
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      Kr((t) => {
        const { drag: n } = this.getProps();
        if (!pa(t, n, this.currentDirection)) return;
        const { projection: r } = this.visualElement,
          a = this.getAxisMotionValue(t);
        if (r && r.layout) {
          const { min: n, max: i } = r.layout.layoutBox[t];
          a.set(e[t] - un(n, i, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Vr(t) || !n || !this.constraints) return;
      this.stopAnimation();
      const r = { x: 0, y: 0 };
      Kr((e) => {
        const t = this.getAxisMotionValue(e);
        if (t && !1 !== this.constraints) {
          const n = t.get();
          r[e] = (function (e, t) {
            let n = 0.5;
            const r = Dr(e),
              a = Dr(t);
            return (
              a > r
                ? (n = z(t.min, t.max - r, e.min))
                : r > a && (n = z(e.min, e.max - a, t.min)),
              We(0, 1, n)
            );
          })({ min: n, max: n }, this.constraints[e]);
        }
      });
      const { transformTemplate: a } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Kr((t) => {
          if (!pa(t, e, null)) return;
          const n = this.getAxisMotionValue(t),
            { min: a, max: i } = this.constraints[t];
          n.set(un(a, i, r[t]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      fa.set(this.visualElement, this);
      const e = Tr(this.visualElement.current, "pointerdown", (e) => {
          const { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        t = () => {
          const { dragConstraints: e } = this.getProps();
          Vr(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: n } = this.visualElement,
        r = n.addEventListener("measure", t);
      n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
        le.read(t);
      const a = Er(window, "resize", () =>
          this.scalePositionWithinConstraints()
        ),
        i = n.addEventListener("didUpdate", (e) => {
          let { delta: t, hasLayoutChanged: n } = e;
          this.isDragging &&
            n &&
            (Kr((e) => {
              const n = this.getAxisMotionValue(e);
              n &&
                ((this.originPoint[e] += t[e].translate),
                n.set(n.get() + t[e].translate));
            }),
            this.visualElement.render());
        });
      return () => {
        a(), e(), r(), i && i();
      };
    }
    getProps() {
      const e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: a = !1,
          dragElastic: i = Xr,
          dragMomentum: o = !0,
        } = e;
      return c(
        c({}, e),
        {},
        {
          drag: t,
          dragDirectionLock: n,
          dragPropagation: r,
          dragConstraints: a,
          dragElastic: i,
          dragMomentum: o,
        }
      );
    }
  }
  function pa(e, t, n) {
    return (!0 === t || t === e) && (null === n || n === e);
  }
  const ma = (e) => (t, n) => {
    e && le.postRender(() => e(t, n));
  };
  var ga = n(579);
  const va = (0, r.createContext)(null);
  function ya() {
    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    const t = (0, r.useContext)(va);
    if (null === t) return [!0, null];
    const { isPresent: n, onExitComplete: a, register: i } = t,
      o = (0, r.useId)();
    (0, r.useEffect)(() => {
      e && i(o);
    }, [e]);
    const s = (0, r.useCallback)(() => e && a && a(o), [o, a, e]);
    return !n && a ? [!1, s] : [!0];
  }
  const ba = (0, r.createContext)({}),
    xa = (0, r.createContext)({}),
    wa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function Sa(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
  }
  const ka = {
      correct: (e, t) => {
        if (!t.target) return e;
        if ("string" === typeof e) {
          if (!rt.test(e)) return e;
          e = parseFloat(e);
        }
        const n = Sa(e, t.target.x),
          r = Sa(e, t.target.y);
        return "".concat(n, "% ").concat(r, "%");
      },
    },
    Ea = {
      correct: (e, t) => {
        let { treeScale: n, projectionDelta: r } = t;
        const a = e,
          i = vt.parse(e);
        if (i.length > 5) return a;
        const o = vt.createTransformer(e),
          s = "number" !== typeof i[0] ? 1 : 0,
          l = r.x.scale * n.x,
          u = r.y.scale * n.y;
        (i[0 + s] /= l), (i[1 + s] /= u);
        const c = un(l, u, 0.5);
        return (
          "number" === typeof i[2 + s] && (i[2 + s] /= c),
          "number" === typeof i[3 + s] && (i[3 + s] /= c),
          o(i)
        );
      },
    },
    Aa = {};
  const { schedule: Ta, cancel: ja } = se(queueMicrotask, !1);
  class Ca extends r.Component {
    componentDidMount() {
      const {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: a } = e;
      var i;
      (i = Pa),
        Object.assign(Aa, i),
        a &&
          (t.group && t.group.add(a),
          n && n.register && r && n.register(a),
          a.root.didUpdate(),
          a.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          a.setOptions(
            c(
              c({}, a.options),
              {},
              { onExitComplete: () => this.safeToRemove() }
            )
          )),
        (wa.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      const {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: a,
        } = this.props,
        i = n.projection;
      return i
        ? ((i.isPresent = a),
          r || e.layoutDependency !== t || void 0 === t
            ? i.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== a &&
            (a
              ? i.promote()
              : i.relegate() ||
                le.postRender(() => {
                  const e = i.getStack();
                  (e && e.members.length) || this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        Ta.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  }
  function Na(e) {
    const [t, n] = ya(),
      a = (0, r.useContext)(ba);
    return (0, ga.jsx)(
      Ca,
      c(
        c({}, e),
        {},
        {
          layoutGroup: a,
          switchLayoutGroup: (0, r.useContext)(xa),
          isPresent: t,
          safeToRemove: n,
        }
      )
    );
  }
  const Pa = {
    borderRadius: c(
      c({}, ka),
      {},
      {
        applyTo: [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ],
      }
    ),
    borderTopLeftRadius: ka,
    borderTopRightRadius: ka,
    borderBottomLeftRadius: ka,
    borderBottomRightRadius: ka,
    boxShadow: Ea,
  };
  const Fa = (e, t) => e.depth - t.depth;
  class Ra {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      me(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      ge(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(Fa),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  }
  function La(e, t) {
    const n = pe.now(),
      r = (a) => {
        let { timestamp: i } = a;
        const o = i - n;
        o >= t && (ue(r), e(o - t));
      };
    return le.read(r, !0), () => ue(r);
  }
  function za(e) {
    const t = Ee(e) ? e.get() : e;
    return (
      (n = t),
      Boolean(n && "object" === typeof n && n.mix && n.toValue)
        ? t.toValue()
        : t
    );
    var n;
  }
  const Va = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Da = Va.length,
    Ma = (e) => ("string" === typeof e ? parseFloat(e) : e),
    Ia = (e) => "number" === typeof e || rt.test(e);
  function Oa(e, t) {
    return void 0 !== e[t] ? e[t] : e.borderRadius;
  }
  const Ua = Wa(0, 0.5, Oe),
    Ba = Wa(0.5, 0.95, ee);
  function Wa(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(z(e, t, r)));
  }
  function qa(e, t) {
    (e.min = t.min), (e.max = t.max);
  }
  function Xa(e, t) {
    qa(e.x, t.x), qa(e.y, t.y);
  }
  function Ga(e, t) {
    (e.translate = t.translate),
      (e.scale = t.scale),
      (e.originPoint = t.originPoint),
      (e.origin = t.origin);
  }
  function Qa(e, t, n, r, a) {
    return (
      (e = ta((e -= t), 1 / n, r)), void 0 !== a && (e = ta(e, 1 / a, r)), e
    );
  }
  function Ha(e, t, n, r, a) {
    let [i, o, s] = n;
    !(function (e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5,
        a = arguments.length > 4 ? arguments[4] : void 0,
        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
      nt.test(t) &&
        ((t = parseFloat(t)), (t = un(o.min, o.max, t / 100) - o.min));
      if ("number" !== typeof t) return;
      let s = un(i.min, i.max, r);
      e === i && (s -= t),
        (e.min = Qa(e.min, t, n, s, a)),
        (e.max = Qa(e.max, t, n, s, a));
    })(e, t[i], t[o], t[s], t.scale, r, a);
  }
  const Ka = ["x", "scaleX", "originX"],
    Ya = ["y", "scaleY", "originY"];
  function Ja(e, t, n, r) {
    Ha(e.x, t, Ka, n ? n.x : void 0, r ? r.x : void 0),
      Ha(e.y, t, Ya, n ? n.y : void 0, r ? r.y : void 0);
  }
  function Za(e) {
    return 0 === e.translate && 1 === e.scale;
  }
  function _a(e) {
    return Za(e.x) && Za(e.y);
  }
  function $a(e, t) {
    return e.min === t.min && e.max === t.max;
  }
  function ei(e, t) {
    return (
      Math.round(e.min) === Math.round(t.min) &&
      Math.round(e.max) === Math.round(t.max)
    );
  }
  function ti(e, t) {
    return ei(e.x, t.x) && ei(e.y, t.y);
  }
  function ni(e) {
    return Dr(e.x) / Dr(e.y);
  }
  function ri(e, t) {
    return (
      e.translate === t.translate &&
      e.scale === t.scale &&
      e.originPoint === t.originPoint
    );
  }
  class ai {
    constructor() {
      this.members = [];
    }
    add(e) {
      me(this.members, e), e.scheduleRender();
    }
    remove(e) {
      if (
        (ge(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        const e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      const t = this.members.findIndex((t) => e === t);
      if (0 === t) return !1;
      let n;
      for (let r = t; r >= 0; r--) {
        const e = this.members[r];
        if (!1 !== e.isPresent) {
          n = e;
          break;
        }
      }
      return !!n && (this.promote(n), !0);
    }
    promote(e, t) {
      const n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        n.instance && n.scheduleRender(),
          e.scheduleRender(),
          (e.resumeFrom = n),
          t && (e.resumeFrom.preserveOpacity = !0),
          n.snapshot &&
            ((e.snapshot = n.snapshot),
            (e.snapshot.latestValues = n.animationValues || n.latestValues)),
          e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
        const { crossfade: r } = e.options;
        !1 === r && n.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        const { options: t, resumingFrom: n } = e;
        t.onExitComplete && t.onExitComplete(),
          n && n.options.onExitComplete && n.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((e) => {
        e.instance && e.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  const ii = {
      type: "projectionFrame",
      totalNodes: 0,
      resolvedTargetDeltas: 0,
      recalculatedProjection: 0,
    },
    oi = "undefined" !== typeof window && void 0 !== window.MotionDebug,
    si = ["", "X", "Y", "Z"],
    li = { visibility: "hidden" };
  let ui = 0;
  function ci(e, t, n, r) {
    const { latestValues: a } = t;
    a[e] && ((n[e] = a[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
  }
  function di(e) {
    if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = Ce(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: t, layoutId: r } = e.options;
      window.MotionCancelOptimisedAnimation(n, "transform", le, !(t || r));
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && di(r);
  }
  function fi(e) {
    let {
      attachResizeListener: t,
      defaultParent: n,
      measureScroll: r,
      checkIsScrollRoot: a,
      resetTransform: i,
    } = e;
    return class {
      constructor() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null === n || void 0 === n
              ? void 0
              : n();
        (this.id = ui++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (this.projectionUpdateScheduled = !1),
              oi &&
                (ii.totalNodes =
                  ii.resolvedTargetDeltas =
                  ii.recalculatedProjection =
                    0),
              this.nodes.forEach(mi),
              this.nodes.forEach(Si),
              this.nodes.forEach(ki),
              this.nodes.forEach(gi),
              oi && window.MotionDebug.record(ii);
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = e),
          (this.root = t ? t.root || t : this),
          (this.path = t ? [...t.path, t] : []),
          (this.parent = t),
          (this.depth = t ? t.depth + 1 : 0);
        for (let n = 0; n < this.path.length; n++)
          this.path[n].shouldResetTransform = !0;
        this.root === this && (this.nodes = new Ra());
      }
      addEventListener(e, t) {
        return (
          this.eventHandlers.has(e) || this.eventHandlers.set(e, new ve()),
          this.eventHandlers.get(e).add(t)
        );
      }
      notifyListeners(e) {
        const t = this.eventHandlers.get(e);
        for (
          var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        t && t.notify(...r);
      }
      hasListeners(e) {
        return this.eventHandlers.has(e);
      }
      mount(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : this.root.hasTreeAnimated;
        if (this.instance) return;
        var r;
        (this.isSVG = (r = e) instanceof SVGElement && "svg" !== r.tagName),
          (this.instance = e);
        const { layoutId: a, layout: i, visualElement: o } = this.options;
        if (
          (o && !o.current && o.mount(e),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          n && (i || a) && (this.isLayoutDirty = !0),
          t)
        ) {
          let n;
          const r = () => (this.root.updateBlockedByResize = !1);
          t(e, () => {
            (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = La(r, 250)),
              wa.hasAnimatedSinceResize &&
                ((wa.hasAnimatedSinceResize = !1), this.nodes.forEach(wi));
          });
        }
        a && this.root.registerSharedNode(a, this),
          !1 !== this.options.animate &&
            o &&
            (a || i) &&
            this.addEventListener("didUpdate", (e) => {
              let {
                delta: t,
                hasLayoutChanged: n,
                hasRelativeTargetChanged: r,
                layout: a,
              } = e;
              if (this.isTreeAnimationBlocked())
                return (
                  (this.target = void 0), void (this.relativeTarget = void 0)
                );
              const i =
                  this.options.transition || o.getDefaultTransition() || Ni,
                { onLayoutAnimationStart: s, onLayoutAnimationComplete: l } =
                  o.getProps(),
                u = !this.targetLayout || !ti(this.targetLayout, a) || r,
                d = !n && r;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                d ||
                (n && (u || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(t, d);
                const e = c(
                  c({}, A(i, "layout")),
                  {},
                  { onPlay: s, onComplete: l }
                );
                (o.shouldReduceMotion || this.options.layoutRoot) &&
                  ((e.delay = 0), (e.type = !1)),
                  this.startAnimation(e);
              } else
                n || wi(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = a;
            });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const e = this.getStack();
        e && e.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          ue(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(Ei),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: e } = this.options;
        return e && e.getProps().transformTemplate;
      }
      willUpdate() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
          return void (
            this.options.onExitComplete && this.options.onExitComplete()
          );
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            di(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let a = 0; a < this.path.length; a++) {
          const e = this.path[a];
          (e.shouldResetTransform = !0),
            e.updateScroll("snapshot"),
            e.options.layoutRoot && e.willUpdate(!1);
        }
        const { layoutId: t, layout: n } = this.options;
        if (void 0 === t && !n) return;
        const r = this.getTransformTemplate();
        (this.prevTransformTemplateValue = r
          ? r(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          e && this.notifyListeners("willUpdate");
      }
      update() {
        this.updateScheduled = !1;
        if (this.isUpdateBlocked())
          return (
            this.unblockUpdate(),
            this.clearAllSnapshots(),
            void this.nodes.forEach(yi)
          );
        this.isUpdating || this.nodes.forEach(bi),
          (this.isUpdating = !1),
          this.nodes.forEach(xi),
          this.nodes.forEach(hi),
          this.nodes.forEach(pi),
          this.clearAllSnapshots();
        const e = pe.now();
        (ce.delta = We(0, 1e3 / 60, e - ce.timestamp)),
          (ce.timestamp = e),
          (ce.isProcessing = !0),
          de.update.process(ce),
          de.preRender.process(ce),
          de.render.process(ce),
          (ce.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), Ta.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(vi), this.sharedNodes.forEach(Ai);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          le.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        le.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot && this.instance && (this.snapshot = this.measure());
      }
      updateLayout() {
        if (!this.instance) return;
        if (
          (this.updateScroll(),
          (!this.options.alwaysMeasureLayout || !this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let n = 0; n < this.path.length; n++) {
            this.path[n].updateScroll();
          }
        const e = this.layout;
        (this.layout = this.measure(!1)),
          (this.layoutCorrected = {
            x: { min: 0, max: 0 },
            y: { min: 0, max: 0 },
          }),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: t } = this.options;
        t &&
          t.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            e ? e.layoutBox : void 0
          );
      }
      updateScroll() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "measure",
          t = Boolean(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === e &&
            (t = !1),
          t)
        ) {
          const t = a(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: e,
            isRoot: t,
            offset: r(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : t,
          };
        }
      }
      resetTransform() {
        if (!i) return;
        const e =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          t = this.projectionDelta && !_a(this.projectionDelta),
          n = this.getTransformTemplate(),
          r = n ? n(this.latestValues, "") : void 0,
          a = r !== this.prevTransformTemplateValue;
        e &&
          (t || _r(this.latestValues) || a) &&
          (i(this.instance, r),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const t = this.measurePageBox();
        let n = this.removeElementScroll(t);
        var r;
        return (
          e && (n = this.removeTransform(n)),
          Ri((r = n).x),
          Ri(r.y),
          {
            animationId: this.root.animationId,
            measuredBox: t,
            layoutBox: n,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var e;
        const { visualElement: t } = this.options;
        if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        const n = t.measureViewportBox();
        if (
          !(
            (null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) ||
            this.path.some(zi)
          )
        ) {
          const { scroll: e } = this.root;
          e && (sa(n.x, e.offset.x), sa(n.y, e.offset.y));
        }
        return n;
      }
      removeElementScroll(e) {
        var t;
        const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        if (
          (Xa(n, e),
          null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
        )
          return n;
        for (let r = 0; r < this.path.length; r++) {
          const t = this.path[r],
            { scroll: a, options: i } = t;
          t !== this.root &&
            a &&
            i.layoutScroll &&
            (a.wasRoot && Xa(n, e), sa(n.x, a.offset.x), sa(n.y, a.offset.y));
        }
        return n;
      }
      applyTransform(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        Xa(n, e);
        for (let r = 0; r < this.path.length; r++) {
          const e = this.path[r];
          !t &&
            e.options.layoutScroll &&
            e.scroll &&
            e !== e.root &&
            ua(n, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }),
            _r(e.latestValues) && ua(n, e.latestValues);
        }
        return _r(this.latestValues) && ua(n, this.latestValues), n;
      }
      removeTransform(e) {
        const t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        Xa(t, e);
        for (let n = 0; n < this.path.length; n++) {
          const e = this.path[n];
          if (!e.instance) continue;
          if (!_r(e.latestValues)) continue;
          Zr(e.latestValues) && e.updateSnapshot();
          const r = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          Xa(r, e.measurePageBox()),
            Ja(
              t,
              e.latestValues,
              e.snapshot ? e.snapshot.layoutBox : void 0,
              r
            );
        }
        return _r(this.latestValues) && Ja(t, this.latestValues), t;
      }
      setTargetDelta(e) {
        (this.targetDelta = e),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(e) {
        this.options = c(
          c(c({}, this.options), e),
          {},
          { crossfade: void 0 === e.crossfade || e.crossfade }
        );
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var t;
        const n = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = n.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
        const r = Boolean(this.resumingFrom) || this !== n;
        if (
          !(
            e ||
            (r && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (null === (t = this.parent) || void 0 === t
              ? void 0
              : t.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: a, layoutId: i } = this.options;
        if (this.layout && (a || i)) {
          if (
            ((this.resolvedRelativeTargetAt = ce.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const e = this.getClosestProjectingParent();
            e && e.layout && 1 !== this.animationProgress
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.relativeTargetOrigin = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                Br(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  e.layout.layoutBox
                ),
                Xa(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (this.relativeTarget || this.targetDelta) {
            var o, s, l;
            if (
              (this.target ||
                ((this.target = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.targetWithTransforms = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                })),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  (o = this.target),
                  (s = this.relativeTarget),
                  (l = this.relativeParent.target),
                  Or(o.x, s.x, l.x),
                  Or(o.y, s.y, l.y))
                : this.targetDelta
                ? (Boolean(this.resumingFrom)
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Xa(this.target, this.layout.layoutBox),
                  aa(this.target, this.targetDelta))
                : Xa(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
            ) {
              this.attemptToResolveRelativeTarget = !1;
              const e = this.getClosestProjectingParent();
              e &&
              Boolean(e.resumingFrom) === Boolean(this.resumingFrom) &&
              !e.options.layoutScroll &&
              e.target &&
              1 !== this.animationProgress
                ? ((this.relativeParent = e),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.relativeTargetOrigin = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  Br(this.relativeTargetOrigin, this.target, e.target),
                  Xa(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            oi && ii.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (
          this.parent &&
          !Zr(this.parent.latestValues) &&
          !$r(this.parent.latestValues)
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return Boolean(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
            this.layout
        );
      }
      calcProjection() {
        var e;
        const t = this.getLead(),
          n = Boolean(this.resumingFrom) || this !== t;
        let r = !0;
        if (
          ((this.isProjectionDirty ||
            (null === (e = this.parent) || void 0 === e
              ? void 0
              : e.isProjectionDirty)) &&
            (r = !1),
          n &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (r = !1),
          this.resolvedRelativeTargetAt === ce.timestamp && (r = !1),
          r)
        )
          return;
        const { layout: a, layoutId: i } = this.options;
        if (
          ((this.isTreeAnimating = Boolean(
            (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || (!a && !i))
        )
          return;
        Xa(this.layoutCorrected, this.layout.layoutBox);
        const o = this.treeScale.x,
          s = this.treeScale.y;
        !(function (e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const a = n.length;
          if (!a) return;
          let i, o;
          t.x = t.y = 1;
          for (let s = 0; s < a; s++) {
            (i = n[s]), (o = i.projectionDelta);
            const { visualElement: a } = i.options;
            (a && a.props.style && "contents" === a.props.style.display) ||
              (r &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                ua(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
              o && ((t.x *= o.x.scale), (t.y *= o.y.scale), aa(e, o)),
              r && _r(i.latestValues) && ua(e, i.latestValues));
          }
          t.x < oa && t.x > ia && (t.x = 1), t.y < oa && t.y > ia && (t.y = 1);
        })(this.layoutCorrected, this.treeScale, this.path, n),
          !t.layout ||
            t.target ||
            (1 === this.treeScale.x && 1 === this.treeScale.y) ||
            ((t.target = t.layout.layoutBox),
            (t.targetWithTransforms = {
              x: { min: 0, max: 0 },
              y: { min: 0, max: 0 },
            }));
        const { target: l } = t;
        l
          ? (this.projectionDelta && this.prevProjectionDelta
              ? (Ga(this.prevProjectionDelta.x, this.projectionDelta.x),
                Ga(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
            Ir(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
            (this.treeScale.x === o &&
              this.treeScale.y === s &&
              ri(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              ri(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", l)),
            oi && ii.recalculatedProjection++)
          : this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var t;
        if (
          (null === (t = this.options.visualElement) ||
            void 0 === t ||
            t.scheduleRender(),
          e)
        ) {
          const e = this.getStack();
          e && e.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        (this.prevProjectionDelta = {
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        }),
          (this.projectionDelta = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          }),
          (this.projectionDeltaWithTransform = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          });
      }
      setAnimationOrigin(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = this.snapshot,
          r = n ? n.latestValues : {},
          a = c({}, this.latestValues),
          i = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        (this.relativeParent && this.relativeParent.options.layoutRoot) ||
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !t);
        const o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
          s =
            (n ? n.source : void 0) !==
            (this.layout ? this.layout.source : void 0),
          l = this.getStack(),
          u = !l || l.members.length <= 1,
          d = Boolean(
            s && !u && !0 === this.options.crossfade && !this.path.some(Ci)
          );
        let f;
        (this.animationProgress = 0),
          (this.mixTargetDelta = (t) => {
            const n = t / 1e3;
            var l, c, h, p, m, g;
            Ti(i.x, e.x, n),
              Ti(i.y, e.y, n),
              this.setTargetDelta(i),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout &&
                (Br(
                  o,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox
                ),
                (h = this.relativeTarget),
                (p = this.relativeTargetOrigin),
                (m = o),
                (g = n),
                ji(h.x, p.x, m.x, g),
                ji(h.y, p.y, m.y, g),
                f &&
                  ((l = this.relativeTarget),
                  (c = f),
                  $a(l.x, c.x) && $a(l.y, c.y)) &&
                  (this.isProjectionDirty = !1),
                f || (f = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                Xa(f, this.relativeTarget)),
              s &&
                ((this.animationValues = a),
                (function (e, t, n, r, a, i) {
                  a
                    ? ((e.opacity = un(
                        0,
                        void 0 !== n.opacity ? n.opacity : 1,
                        Ua(r)
                      )),
                      (e.opacityExit = un(
                        void 0 !== t.opacity ? t.opacity : 1,
                        0,
                        Ba(r)
                      )))
                    : i &&
                      (e.opacity = un(
                        void 0 !== t.opacity ? t.opacity : 1,
                        void 0 !== n.opacity ? n.opacity : 1,
                        r
                      ));
                  for (let o = 0; o < Da; o++) {
                    const a = "border".concat(Va[o], "Radius");
                    let i = Oa(t, a),
                      s = Oa(n, a);
                    (void 0 === i && void 0 === s) ||
                      (i || (i = 0),
                      s || (s = 0),
                      0 === i || 0 === s || Ia(i) === Ia(s)
                        ? ((e[a] = Math.max(un(Ma(i), Ma(s), r), 0)),
                          (nt.test(s) || nt.test(i)) && (e[a] += "%"))
                        : (e[a] = s));
                  }
                  (t.rotate || n.rotate) &&
                    (e.rotate = un(t.rotate || 0, n.rotate || 0, r));
                })(a, r, this.latestValues, n, d, u)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = n);
          }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(e) {
        this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            (ue(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = le.update(() => {
            (wa.hasAnimatedSinceResize = !0),
              (this.currentAnimation = (function (e, t, n) {
                const r = Ee(e) ? e : we(e);
                return r.start(ir("", r, t, n)), r.animation;
              })(
                0,
                1e3,
                c(
                  c({}, e),
                  {},
                  {
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  }
                )
              )),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const e = this.getStack();
        e && e.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(1e3),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const e = this.getLead();
        let {
          targetWithTransforms: t,
          target: n,
          layout: r,
          latestValues: a,
        } = e;
        if (t && n && r) {
          if (
            this !== e &&
            this.layout &&
            r &&
            Li(this.options.animationType, this.layout.layoutBox, r.layoutBox)
          ) {
            n = this.target || { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            const t = Dr(this.layout.layoutBox.x);
            (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
            const r = Dr(this.layout.layoutBox.y);
            (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
          }
          Xa(t, n),
            ua(t, a),
            Ir(this.projectionDeltaWithTransform, this.layoutCorrected, t, a);
        }
      }
      registerSharedNode(e, t) {
        this.sharedNodes.has(e) || this.sharedNodes.set(e, new ai());
        this.sharedNodes.get(e).add(t);
        const n = t.options.initialPromotionConfig;
        t.promote({
          transition: n ? n.transition : void 0,
          preserveFollowOpacity:
            n && n.shouldPreserveFollowOpacity
              ? n.shouldPreserveFollowOpacity(t)
              : void 0,
        });
      }
      isLead() {
        const e = this.getStack();
        return !e || e.lead === this;
      }
      getLead() {
        var e;
        const { layoutId: t } = this.options;
        return (
          (t &&
            (null === (e = this.getStack()) || void 0 === e
              ? void 0
              : e.lead)) ||
          this
        );
      }
      getPrevLead() {
        var e;
        const { layoutId: t } = this.options;
        return t
          ? null === (e = this.getStack()) || void 0 === e
            ? void 0
            : e.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: e } = this.options;
        if (e) return this.root.sharedNodes.get(e);
      }
      promote() {
        let {
          needsReset: e,
          transition: t,
          preserveFollowOpacity: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const r = this.getStack();
        r && r.promote(this, n),
          e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          t && this.setOptions({ transition: t });
      }
      relegate() {
        const e = this.getStack();
        return !!e && e.relegate(this);
      }
      resetSkewAndRotation() {
        const { visualElement: e } = this.options;
        if (!e) return;
        let t = !1;
        const { latestValues: n } = e;
        if (
          ((n.z ||
            n.rotate ||
            n.rotateX ||
            n.rotateY ||
            n.rotateZ ||
            n.skewX ||
            n.skewY) &&
            (t = !0),
          !t)
        )
          return;
        const r = {};
        n.z && ci("z", e, r, this.animationValues);
        for (let a = 0; a < si.length; a++)
          ci("rotate".concat(si[a]), e, r, this.animationValues),
            ci("skew".concat(si[a]), e, r, this.animationValues);
        e.render();
        for (const a in r)
          e.setStaticValue(a, r[a]),
            this.animationValues && (this.animationValues[a] = r[a]);
        e.scheduleRender();
      }
      getProjectionStyles(e) {
        var t, n;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return li;
        const r = { visibility: "" },
          a = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (r.opacity = ""),
            (r.pointerEvents =
              za(null === e || void 0 === e ? void 0 : e.pointerEvents) || ""),
            (r.transform = a ? a(this.latestValues, "") : "none"),
            r
          );
        const i = this.getLead();
        if (!this.projectionDelta || !this.layout || !i.target) {
          const t = {};
          return (
            this.options.layoutId &&
              ((t.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (t.pointerEvents =
                za(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
                "")),
            this.hasProjected &&
              !_r(this.latestValues) &&
              ((t.transform = a ? a({}, "") : "none"),
              (this.hasProjected = !1)),
            t
          );
        }
        const o = i.animationValues || i.latestValues;
        this.applyTransformsToTarget(),
          (r.transform = (function (e, t, n) {
            let r = "";
            const a = e.x.translate / t.x,
              i = e.y.translate / t.y,
              o = (null === n || void 0 === n ? void 0 : n.z) || 0;
            if (
              ((a || i || o) &&
                (r = "translate3d("
                  .concat(a, "px, ")
                  .concat(i, "px, ")
                  .concat(o, "px) ")),
              (1 === t.x && 1 === t.y) ||
                (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
              n)
            ) {
              const {
                transformPerspective: e,
                rotate: t,
                rotateX: a,
                rotateY: i,
                skewX: o,
                skewY: s,
              } = n;
              e && (r = "perspective(".concat(e, "px) ").concat(r)),
                t && (r += "rotate(".concat(t, "deg) ")),
                a && (r += "rotateX(".concat(a, "deg) ")),
                i && (r += "rotateY(".concat(i, "deg) ")),
                o && (r += "skewX(".concat(o, "deg) ")),
                s && (r += "skewY(".concat(s, "deg) "));
            }
            const s = e.x.scale * t.x,
              l = e.y.scale * t.y;
            return (
              (1 === s && 1 === l) ||
                (r += "scale(".concat(s, ", ").concat(l, ")")),
              r || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, o)),
          a && (r.transform = a(o, r.transform));
        const { x: s, y: l } = this.projectionDelta;
        (r.transformOrigin = ""
          .concat(100 * s.origin, "% ")
          .concat(100 * l.origin, "% 0")),
          i.animationValues
            ? (r.opacity =
                i === this
                  ? null !==
                      (n =
                        null !== (t = o.opacity) && void 0 !== t
                          ? t
                          : this.latestValues.opacity) && void 0 !== n
                    ? n
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : o.opacityExit)
            : (r.opacity =
                i === this
                  ? void 0 !== o.opacity
                    ? o.opacity
                    : ""
                  : void 0 !== o.opacityExit
                  ? o.opacityExit
                  : 0);
        for (const u in Aa) {
          if (void 0 === o[u]) continue;
          const { correct: e, applyTo: t } = Aa[u],
            n = "none" === r.transform ? o[u] : e(o[u], i);
          if (t) {
            const e = t.length;
            for (let a = 0; a < e; a++) r[t[a]] = n;
          } else r[u] = n;
        }
        return (
          this.options.layoutId &&
            (r.pointerEvents =
              i === this
                ? za(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
                  ""
                : "none"),
          r
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((e) => {
          var t;
          return null === (t = e.currentAnimation) || void 0 === t
            ? void 0
            : t.stop();
        }),
          this.root.nodes.forEach(yi),
          this.root.sharedNodes.clear();
      }
    };
  }
  function hi(e) {
    e.updateLayout();
  }
  function pi(e) {
    var t;
    const n =
      (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
      e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: t, measuredBox: r } = e.layout,
        { animationType: a } = e.options,
        i = n.source !== e.layout.source;
      "size" === a
        ? Kr((e) => {
            const r = i ? n.measuredBox[e] : n.layoutBox[e],
              a = Dr(r);
            (r.min = t[e].min), (r.max = r.min + a);
          })
        : Li(a, n.layoutBox, t) &&
          Kr((r) => {
            const a = i ? n.measuredBox[r] : n.layoutBox[r],
              o = Dr(t[r]);
            (a.max = a.min + o),
              e.relativeTarget &&
                !e.currentAnimation &&
                ((e.isProjectionDirty = !0),
                (e.relativeTarget[r].max = e.relativeTarget[r].min + o));
          });
      const o = {
        x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
      };
      Ir(o, t, n.layoutBox);
      const s = {
        x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
      };
      i ? Ir(s, e.applyTransform(r, !0), n.measuredBox) : Ir(s, t, n.layoutBox);
      const l = !_a(o);
      let u = !1;
      if (!e.resumeFrom) {
        const r = e.getClosestProjectingParent();
        if (r && !r.resumeFrom) {
          const { snapshot: a, layout: i } = r;
          if (a && i) {
            const o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            Br(o, n.layoutBox, a.layoutBox);
            const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            Br(s, t, i.layoutBox),
              ti(o, s) || (u = !0),
              r.options.layoutRoot &&
                ((e.relativeTarget = s),
                (e.relativeTargetOrigin = o),
                (e.relativeParent = r));
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: t,
        snapshot: n,
        delta: s,
        layoutDelta: o,
        hasLayoutChanged: l,
        hasRelativeTargetChanged: u,
      });
    } else if (e.isLead()) {
      const { onExitComplete: t } = e.options;
      t && t();
    }
    e.options.transition = void 0;
  }
  function mi(e) {
    oi && ii.totalNodes++,
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = Boolean(
            e.isProjectionDirty ||
              e.parent.isProjectionDirty ||
              e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function gi(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function vi(e) {
    e.clearSnapshot();
  }
  function yi(e) {
    e.clearMeasurements();
  }
  function bi(e) {
    e.isLayoutDirty = !1;
  }
  function xi(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
      e.resetTransform();
  }
  function wi(e) {
    e.finishAnimation(),
      (e.targetDelta = e.relativeTarget = e.target = void 0),
      (e.isProjectionDirty = !0);
  }
  function Si(e) {
    e.resolveTargetDelta();
  }
  function ki(e) {
    e.calcProjection();
  }
  function Ei(e) {
    e.resetSkewAndRotation();
  }
  function Ai(e) {
    e.removeLeadSnapshot();
  }
  function Ti(e, t, n) {
    (e.translate = un(t.translate, 0, n)),
      (e.scale = un(t.scale, 1, n)),
      (e.origin = t.origin),
      (e.originPoint = t.originPoint);
  }
  function ji(e, t, n, r) {
    (e.min = un(t.min, n.min, r)), (e.max = un(t.max, n.max, r));
  }
  function Ci(e) {
    return e.animationValues && void 0 !== e.animationValues.opacityExit;
  }
  const Ni = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Pi = (e) =>
      "undefined" !== typeof navigator &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(e),
    Fi = Pi("applewebkit/") && !Pi("chrome/") ? Math.round : ee;
  function Ri(e) {
    (e.min = Fi(e.min)), (e.max = Fi(e.max));
  }
  function Li(e, t, n) {
    return (
      "position" === e ||
      ("preserve-aspect" === e &&
        ((r = ni(t)), (a = ni(n)), (i = 0.2), !(Math.abs(r - a) <= i)))
    );
    var r, a, i;
  }
  function zi(e) {
    var t;
    return (
      e !== e.root &&
      (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
    );
  }
  const Vi = fi({
      attachResizeListener: (e, t) => Er(e, "resize", t),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    Di = { current: void 0 },
    Mi = fi({
      measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
      defaultParent: () => {
        if (!Di.current) {
          const e = new Vi({});
          e.mount(window), e.setOptions({ layoutScroll: !0 }), (Di.current = e);
        }
        return Di.current;
      },
      resetTransform: (e, t) => {
        e.style.transform = void 0 !== t ? t : "none";
      },
      checkIsScrollRoot: (e) =>
        Boolean("fixed" === window.getComputedStyle(e).position),
    }),
    Ii = {
      pan: {
        Feature: class extends wr {
          constructor() {
            super(...arguments), (this.removePointerDownListener = ee);
          }
          onPointerDown(e) {
            this.session = new Cr(e, this.createPanHandlers(), {
              transformPagePoint: this.node.getTransformPagePoint(),
              contextWindow: da(this.node),
            });
          }
          createPanHandlers() {
            const {
              onPanSessionStart: e,
              onPanStart: t,
              onPan: n,
              onPanEnd: r,
            } = this.node.getProps();
            return {
              onSessionStart: ma(e),
              onStart: ma(t),
              onMove: n,
              onEnd: (e, t) => {
                delete this.session, r && le.postRender(() => r(e, t));
              },
            };
          }
          mount() {
            this.removePointerDownListener = Tr(
              this.node.current,
              "pointerdown",
              (e) => this.onPointerDown(e)
            );
          }
          update() {
            this.session &&
              this.session.updateHandlers(this.createPanHandlers());
          }
          unmount() {
            this.removePointerDownListener(),
              this.session && this.session.end();
          }
        },
      },
      drag: {
        Feature: class extends wr {
          constructor(e) {
            super(e),
              (this.removeGroupControls = ee),
              (this.removeListeners = ee),
              (this.controls = new ha(e));
          }
          mount() {
            const { dragControls: e } = this.node.getProps();
            e && (this.removeGroupControls = e.subscribe(this.controls)),
              (this.removeListeners = this.controls.addListeners() || ee);
          }
          unmount() {
            this.removeGroupControls(), this.removeListeners();
          }
        },
        ProjectionNode: Mi,
        MeasureLayout: Na,
      },
    };
  function Oi(e, t, n) {
    const { props: r } = e;
    e.animationState &&
      r.whileHover &&
      e.animationState.setActive("whileHover", "Start" === n);
    const a = r["onHover" + n];
    a && le.postRender(() => a(t, Ar(t)));
  }
  function Ui(e, t, n) {
    const { props: r } = e;
    e.animationState &&
      r.whileTap &&
      e.animationState.setActive("whileTap", "Start" === n);
    const a = r["onTap" + ("End" === n ? "" : n)];
    a && le.postRender(() => a(t, Ar(t)));
  }
  const Bi = ["root"],
    Wi = new WeakMap(),
    qi = new WeakMap(),
    Xi = (e) => {
      const t = Wi.get(e.target);
      t && t(e);
    },
    Gi = (e) => {
      e.forEach(Xi);
    };
  function Qi(e, t, n) {
    const r = (function (e) {
      let { root: t } = e,
        n = f(e, Bi);
      const r = t || document;
      qi.has(r) || qi.set(r, {});
      const a = qi.get(r),
        i = JSON.stringify(n);
      return (
        a[i] || (a[i] = new IntersectionObserver(Gi, c({ root: t }, n))), a[i]
      );
    })(t);
    return (
      Wi.set(e, n),
      r.observe(e),
      () => {
        Wi.delete(e), r.unobserve(e);
      }
    );
  }
  const Hi = { some: 0, all: 1 };
  const Ki = {
      inView: {
        Feature: class extends wr {
          constructor() {
            super(...arguments),
              (this.hasEnteredView = !1),
              (this.isInView = !1);
          }
          startObserver() {
            this.unmount();
            const { viewport: e = {} } = this.node.getProps(),
              { root: t, margin: n, amount: r = "some", once: a } = e,
              i = {
                root: t ? t.current : void 0,
                rootMargin: n,
                threshold: "number" === typeof r ? r : Hi[r],
              };
            return Qi(this.node.current, i, (e) => {
              const { isIntersecting: t } = e;
              if (this.isInView === t) return;
              if (((this.isInView = t), a && !t && this.hasEnteredView)) return;
              t && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", t);
              const { onViewportEnter: n, onViewportLeave: r } =
                  this.node.getProps(),
                i = t ? n : r;
              i && i(e);
            });
          }
          mount() {
            this.startObserver();
          }
          update() {
            if ("undefined" === typeof IntersectionObserver) return;
            const { props: e, prevProps: t } = this.node,
              n = ["amount", "margin", "root"].some(
                (function (e) {
                  let { viewport: t = {} } = e,
                    { viewport: n = {} } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (e) => t[e] !== n[e];
                })(e, t)
              );
            n && this.startObserver();
          }
          unmount() {}
        },
      },
      tap: {
        Feature: class extends wr {
          mount() {
            const { current: e } = this.node;
            e &&
              (this.unmount = Z(
                e,
                (e) => (
                  Ui(this.node, e, "Start"),
                  (e, t) => {
                    let { success: n } = t;
                    return Ui(this.node, e, n ? "End" : "Cancel");
                  }
                ),
                { useGlobalTarget: this.node.props.globalTapTarget }
              ));
          }
          unmount() {}
        },
      },
      focus: {
        Feature: class extends wr {
          constructor() {
            super(...arguments), (this.isActive = !1);
          }
          onFocus() {
            let e = !1;
            try {
              e = this.node.current.matches(":focus-visible");
            } catch (t) {
              e = !0;
            }
            e &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !0),
              (this.isActive = !0));
          }
          onBlur() {
            this.isActive &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !1),
              (this.isActive = !1));
          }
          mount() {
            this.unmount = vn(
              Er(this.node.current, "focus", () => this.onFocus()),
              Er(this.node.current, "blur", () => this.onBlur())
            );
          }
          unmount() {}
        },
      },
      hover: {
        Feature: class extends wr {
          mount() {
            const { current: e } = this.node;
            e &&
              (this.unmount = (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                const [r, a, i] = W(e, n),
                  o = q((e) => {
                    const { target: n } = e,
                      r = t(e);
                    if ("function" !== typeof r || !n) return;
                    const i = q((e) => {
                      r(e), n.removeEventListener("pointerleave", i);
                    });
                    n.addEventListener("pointerleave", i, a);
                  });
                return (
                  r.forEach((e) => {
                    e.addEventListener("pointerenter", o, a);
                  }),
                  i
                );
              })(
                e,
                (e) => (
                  Oi(this.node, e, "Start"), (e) => Oi(this.node, e, "End")
                )
              ));
          }
          unmount() {}
        },
      },
    },
    Yi = { layout: { ProjectionNode: Mi, MeasureLayout: Na } },
    Ji = (0, r.createContext)({ strict: !1 }),
    Zi = (0, r.createContext)({
      transformPagePoint: (e) => e,
      isStatic: !1,
      reducedMotion: "never",
    }),
    _i = (0, r.createContext)({});
  function $i(e) {
    return d(e.animate) || x.some((t) => m(e[t]));
  }
  function eo(e) {
    return Boolean($i(e) || e.variants);
  }
  function to(e) {
    const { initial: t, animate: n } = (function (e, t) {
      if ($i(e)) {
        const { initial: t, animate: n } = e;
        return {
          initial: !1 === t || m(t) ? t : void 0,
          animate: m(n) ? n : void 0,
        };
      }
      return !1 !== e.inherit ? t : {};
    })(e, (0, r.useContext)(_i));
    return (0, r.useMemo)(() => ({ initial: t, animate: n }), [no(t), no(n)]);
  }
  function no(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const ro = "undefined" !== typeof window,
    ao = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    io = {};
  for (const Yc in ao)
    io[Yc] = { isEnabled: (e) => ao[Yc].some((t) => !!e[t]) };
  const oo = Symbol.for("motionComponentSymbol");
  function so(e, t, n) {
    return (0, r.useCallback)(
      (r) => {
        r && e.onMount && e.onMount(r),
          t && (r ? t.mount(r) : t.unmount()),
          n && ("function" === typeof n ? n(r) : Vr(n) && (n.current = r));
      },
      [t]
    );
  }
  const lo = ro ? r.useLayoutEffect : r.useEffect;
  function uo(e, t, n, a, i) {
    var o, s;
    const { visualElement: l } = (0, r.useContext)(_i),
      u = (0, r.useContext)(Ji),
      c = (0, r.useContext)(va),
      d = (0, r.useContext)(Zi).reducedMotion,
      f = (0, r.useRef)(null);
    (a = a || u.renderer),
      !f.current &&
        a &&
        (f.current = a(e, {
          visualState: t,
          parent: l,
          props: n,
          presenceContext: c,
          blockInitialAnimation: !!c && !1 === c.initial,
          reducedMotionConfig: d,
        }));
    const h = f.current,
      p = (0, r.useContext)(xa);
    !h ||
      h.projection ||
      !i ||
      ("html" !== h.type && "svg" !== h.type) ||
      (function (e, t, n, r) {
        const {
          layoutId: a,
          layout: i,
          drag: o,
          dragConstraints: s,
          layoutScroll: l,
          layoutRoot: u,
        } = t;
        (e.projection = new n(
          e.latestValues,
          t["data-framer-portal-id"] ? void 0 : co(e.parent)
        )),
          e.projection.setOptions({
            layoutId: a,
            layout: i,
            alwaysMeasureLayout: Boolean(o) || (s && Vr(s)),
            visualElement: e,
            animationType: "string" === typeof i ? i : "both",
            initialPromotionConfig: r,
            layoutScroll: l,
            layoutRoot: u,
          });
      })(f.current, n, i, p);
    const m = (0, r.useRef)(!1);
    (0, r.useInsertionEffect)(() => {
      h && m.current && h.update(n, c);
    });
    const g = n[je],
      v = (0, r.useRef)(
        Boolean(g) &&
          !(null === (o = window.MotionHandoffIsComplete) || void 0 === o
            ? void 0
            : o.call(window, g)) &&
          (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s
            ? void 0
            : s.call(window, g))
      );
    return (
      lo(() => {
        h &&
          ((m.current = !0),
          (window.MotionIsMounted = !0),
          h.updateFeatures(),
          Ta.render(h.render),
          v.current && h.animationState && h.animationState.animateChanges());
      }),
      (0, r.useEffect)(() => {
        h &&
          (!v.current && h.animationState && h.animationState.animateChanges(),
          v.current &&
            (queueMicrotask(() => {
              var e;
              null === (e = window.MotionHandoffMarkAsComplete) ||
                void 0 === e ||
                e.call(window, g);
            }),
            (v.current = !1)));
      }),
      h
    );
  }
  function co(e) {
    if (e)
      return !1 !== e.options.allowProjection ? e.projection : co(e.parent);
  }
  function fo(e) {
    let {
      preloadedFeatures: t,
      createVisualElement: n,
      useRender: a,
      useVisualState: i,
      Component: o,
    } = e;
    var s, l;
    function u(e, t) {
      let s;
      const l = c(c(c({}, (0, r.useContext)(Zi)), e), {}, { layoutId: ho(e) }),
        { isStatic: u } = l,
        d = to(e),
        f = i(e, u);
      if (!u && ro) {
        !(function () {
          (0, r.useContext)(Ji).strict;
          0;
        })();
        const e = (function (e) {
          const { drag: t, layout: n } = io;
          if (!t && !n) return {};
          const r = c(c({}, t), n);
          return {
            MeasureLayout:
              (null === t || void 0 === t ? void 0 : t.isEnabled(e)) ||
              (null === n || void 0 === n ? void 0 : n.isEnabled(e))
                ? r.MeasureLayout
                : void 0,
            ProjectionNode: r.ProjectionNode,
          };
        })(l);
        (s = e.MeasureLayout),
          (d.visualElement = uo(o, f, l, n, e.ProjectionNode));
      }
      return (0, ga.jsxs)(_i.Provider, {
        value: d,
        children: [
          s && d.visualElement
            ? (0, ga.jsx)(s, c({ visualElement: d.visualElement }, l))
            : null,
          a(o, e, so(f, d.visualElement, t), f, u, d.visualElement),
        ],
      });
    }
    t &&
      (function (e) {
        for (const t in e) io[t] = c(c({}, io[t]), e[t]);
      })(t),
      (u.displayName = "motion.".concat(
        "string" === typeof o
          ? o
          : "create(".concat(
              null !==
                (l =
                  null !== (s = o.displayName) && void 0 !== s ? s : o.name) &&
                void 0 !== l
                ? l
                : "",
              ")"
            )
      ));
    const d = (0, r.forwardRef)(u);
    return (d[oo] = o), d;
  }
  function ho(e) {
    let { layoutId: t } = e;
    const n = (0, r.useContext)(ba).id;
    return n && void 0 !== t ? n + "-" + t : t;
  }
  const po = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function mo(e) {
    return (
      "string" === typeof e &&
      !e.includes("-") &&
      !!(po.indexOf(e) > -1 || /[A-Z]/.test(e))
    );
  }
  function go(e) {
    const t = (0, r.useRef)(null);
    return null === t.current && (t.current = e()), t.current;
  }
  const vo = ["transitionEnd", "transition"];
  const yo = (e) => (t, n) => {
    const a = (0, r.useContext)(_i),
      i = (0, r.useContext)(va),
      o = () =>
        (function (e, t, n, r) {
          let {
            scrapeMotionValuesFromProps: a,
            createRenderState: i,
            onUpdate: o,
          } = e;
          const s = { latestValues: bo(t, n, r, a), renderState: i() };
          return (
            o &&
              ((s.onMount = (e) => o(c({ props: t, current: e }, s))),
              (s.onUpdate = (e) => o(e))),
            s
          );
        })(e, t, a, i);
    return n ? o() : go(o);
  };
  function bo(e, t, n, r) {
    const a = {},
      i = r(e, {});
    for (const d in i) a[d] = za(i[d]);
    let { initial: o, animate: s } = e;
    const l = $i(e),
      u = eo(e);
    t &&
      u &&
      !l &&
      !1 !== e.inherit &&
      (void 0 === o && (o = t.initial), void 0 === s && (s = t.animate));
    let c = !!n && !1 === n.initial;
    c = c || !1 === o;
    const h = c ? s : o;
    if (h && "boolean" !== typeof h && !d(h)) {
      const t = Array.isArray(h) ? h : [h];
      for (let n = 0; n < t.length; n++) {
        const r = v(e, t[n]);
        if (r) {
          const { transitionEnd: e, transition: t } = r,
            n = f(r, vo);
          for (const r in n) {
            let e = n[r];
            if (Array.isArray(e)) {
              e = e[c ? e.length - 1 : 0];
            }
            null !== e && (a[r] = e);
          }
          for (const r in e) a[r] = e[r];
        }
      }
    }
    return a;
  }
  const xo = (e, t) => (t && "number" === typeof e ? t.transform(e) : e),
    wo = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    So = te.length;
  function ko(e, t, n) {
    const { style: r, vars: a, transformOrigin: i } = e;
    let o = !1,
      s = !1;
    for (const l in t) {
      const e = t[l];
      if (ne.has(l)) o = !0;
      else if (Qt(l)) a[l] = e;
      else {
        const t = xo(e, At[l]);
        l.startsWith("origin") ? ((s = !0), (i[l] = t)) : (r[l] = t);
      }
    }
    if (
      (t.transform ||
        (o || n
          ? (r.transform = (function (e, t, n) {
              let r = "",
                a = !0;
              for (let i = 0; i < So; i++) {
                const o = te[i],
                  s = e[o];
                if (void 0 === s) continue;
                let l = !0;
                if (
                  ((l =
                    "number" === typeof s
                      ? s === (o.startsWith("scale") ? 1 : 0)
                      : 0 === parseFloat(s)),
                  !l || n)
                ) {
                  const e = xo(s, At[o]);
                  l ||
                    ((a = !1),
                    (r += "".concat(wo[o] || o, "(").concat(e, ") "))),
                    n && (t[o] = e);
                }
              }
              return (
                (r = r.trim()),
                n ? (r = n(t, a ? "" : r)) : a && (r = "none"),
                r
              );
            })(t, e.transform, n))
          : r.transform && (r.transform = "none")),
      s)
    ) {
      const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = i;
      r.transformOrigin = "".concat(e, " ").concat(t, " ").concat(n);
    }
  }
  const Eo = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    Ao = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function To(e, t, n) {
    return "string" === typeof e ? e : rt.transform(t + n * e);
  }
  const jo = [
    "attrX",
    "attrY",
    "attrScale",
    "originX",
    "originY",
    "pathLength",
    "pathSpacing",
    "pathOffset",
  ];
  function Co(e, t, n, r) {
    let {
      attrX: a,
      attrY: i,
      attrScale: o,
      originX: s,
      originY: l,
      pathLength: u,
      pathSpacing: c = 1,
      pathOffset: d = 0,
    } = t;
    if ((ko(e, f(t, jo), r), n))
      return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
    (e.attrs = e.style), (e.style = {});
    const { attrs: h, style: p, dimensions: m } = e;
    h.transform && (m && (p.transform = h.transform), delete h.transform),
      m &&
        (void 0 !== s || void 0 !== l || p.transform) &&
        (p.transformOrigin = (function (e, t, n) {
          const r = To(t, e.x, e.width),
            a = To(n, e.y, e.height);
          return "".concat(r, " ").concat(a);
        })(m, void 0 !== s ? s : 0.5, void 0 !== l ? l : 0.5)),
      void 0 !== a && (h.x = a),
      void 0 !== i && (h.y = i),
      void 0 !== o && (h.scale = o),
      void 0 !== u &&
        (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            a =
              !(arguments.length > 4 && void 0 !== arguments[4]) ||
              arguments[4];
          e.pathLength = 1;
          const i = a ? Eo : Ao;
          e[i.offset] = rt.transform(-r);
          const o = rt.transform(t),
            s = rt.transform(n);
          e[i.array] = "".concat(o, " ").concat(s);
        })(h, u, c, d, !1);
  }
  const No = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    }),
    Po = () =>
      c(
        c({}, { style: {}, transform: {}, transformOrigin: {}, vars: {} }),
        {},
        { attrs: {} }
      ),
    Fo = (e) => "string" === typeof e && "svg" === e.toLowerCase();
  function Ro(e, t, n, r) {
    let { style: a, vars: i } = t;
    Object.assign(e.style, a, r && r.getProjectionStyles(n));
    for (const o in i) e.style.setProperty(o, i[o]);
  }
  const Lo = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]);
  function zo(e, t, n, r) {
    Ro(e, t, void 0, r);
    for (const a in t.attrs) e.setAttribute(Lo.has(a) ? a : Te(a), t.attrs[a]);
  }
  function Vo(e, t) {
    let { layout: n, layoutId: r } = t;
    return (
      ne.has(e) ||
      e.startsWith("origin") ||
      ((n || void 0 !== r) && (!!Aa[e] || "opacity" === e))
    );
  }
  function Do(e, t, n) {
    var r;
    const { style: a } = e,
      i = {};
    for (const o in a)
      (Ee(a[o]) ||
        (t.style && Ee(t.style[o])) ||
        Vo(o, e) ||
        void 0 !==
          (null === (r = null === n || void 0 === n ? void 0 : n.getValue(o)) ||
          void 0 === r
            ? void 0
            : r.liveStyle)) &&
        (i[o] = a[o]);
    return i;
  }
  function Mo(e, t, n) {
    const r = Do(e, t, n);
    for (const a in e)
      if (Ee(e[a]) || Ee(t[a])) {
        r[
          -1 !== te.indexOf(a)
            ? "attr" + a.charAt(0).toUpperCase() + a.substring(1)
            : a
        ] = e[a];
      }
    return r;
  }
  const Io = ["x", "y", "width", "height", "cx", "cy", "r"],
    Oo = {
      useVisualState: yo({
        scrapeMotionValuesFromProps: Mo,
        createRenderState: Po,
        onUpdate: (e) => {
          let {
            props: t,
            prevProps: n,
            current: r,
            renderState: a,
            latestValues: i,
          } = e;
          if (!r) return;
          let o = !!t.drag;
          if (!o)
            for (const l in i)
              if (ne.has(l)) {
                o = !0;
                break;
              }
          if (!o) return;
          let s = !n;
          if (n)
            for (let l = 0; l < Io.length; l++) {
              const e = Io[l];
              t[e] !== n[e] && (s = !0);
            }
          s &&
            le.read(() => {
              !(function (e, t) {
                try {
                  t.dimensions =
                    "function" === typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (n) {
                  t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              })(r, a),
                le.render(() => {
                  Co(a, i, Fo(r.tagName), t.transformTemplate), zo(r, a);
                });
            });
        },
      }),
    },
    Uo = {
      useVisualState: yo({
        scrapeMotionValuesFromProps: Do,
        createRenderState: No,
      }),
    };
  function Bo(e, t, n) {
    for (const r in t) Ee(t[r]) || Vo(r, n) || (e[r] = t[r]);
  }
  function Wo(e, t) {
    const n = {};
    return (
      Bo(n, e.style || {}, e),
      Object.assign(
        n,
        (function (e, t) {
          let { transformTemplate: n } = e;
          return (0, r.useMemo)(() => {
            const e = {
              style: {},
              transform: {},
              transformOrigin: {},
              vars: {},
            };
            return ko(e, t, n), Object.assign({}, e.vars, e.style);
          }, [t]);
        })(e, t)
      ),
      n
    );
  }
  function qo(e, t) {
    const n = {},
      r = Wo(e, t);
    return (
      e.drag &&
        !1 !== e.dragListener &&
        ((n.draggable = !1),
        (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
        (r.touchAction =
          !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x"))),
      void 0 === e.tabIndex &&
        (e.onTap || e.onTapStart || e.whileTap) &&
        (n.tabIndex = 0),
      (n.style = r),
      n
    );
  }
  const Xo = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
  function Go(e) {
    return (
      e.startsWith("while") ||
      (e.startsWith("drag") && "draggable" !== e) ||
      e.startsWith("layout") ||
      e.startsWith("onTap") ||
      e.startsWith("onPan") ||
      e.startsWith("onLayout") ||
      Xo.has(e)
    );
  }
  let Qo = (e) => !Go(e);
  try {
    (Ho = require("@emotion/is-prop-valid").default) &&
      (Qo = (e) => (e.startsWith("on") ? !Go(e) : Ho(e)));
  } catch (Hc) {}
  var Ho;
  function Ko(e, t, n, a) {
    const i = (0, r.useMemo)(() => {
      const n = Po();
      return (
        Co(n, t, Fo(a), e.transformTemplate),
        c(c({}, n.attrs), {}, { style: c({}, n.style) })
      );
    }, [t]);
    if (e.style) {
      const t = {};
      Bo(t, e.style, e), (i.style = c(c({}, t), i.style));
    }
    return i;
  }
  function Yo() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, a, i, o) => {
      let { latestValues: s } = i;
      const l = (mo(t) ? Ko : qo)(n, s, o, t),
        u = (function (e, t, n) {
          const r = {};
          for (const a in e)
            ("values" === a && "object" === typeof e.values) ||
              ((Qo(a) ||
                (!0 === n && Go(a)) ||
                (!t && !Go(a)) ||
                (e.draggable && a.startsWith("onDrag"))) &&
                (r[a] = e[a]));
          return r;
        })(n, "string" === typeof t, e),
        d = t !== r.Fragment ? c(c(c({}, u), l), {}, { ref: a }) : {},
        { children: f } = n,
        h = (0, r.useMemo)(() => (Ee(f) ? f.get() : f), [f]);
      return (0, r.createElement)(t, c(c({}, d), {}, { children: h }));
    };
  }
  function Jo(e, t) {
    return function (n) {
      let { forwardMotionProps: r } =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { forwardMotionProps: !1 };
      return fo(
        c(
          c({}, mo(n) ? Oo : Uo),
          {},
          {
            preloadedFeatures: e,
            useRender: Yo(r),
            createVisualElement: t,
            Component: n,
          }
        )
      );
    };
  }
  const Zo = { current: null },
    _o = { current: !1 };
  const $o = [...$t, lt, vt],
    es = new WeakMap();
  const ts = ["willChange"],
    ns = [
      "AnimationStart",
      "AnimationComplete",
      "Update",
      "BeforeLayoutMeasure",
      "LayoutMeasure",
      "LayoutAnimationStart",
      "LayoutAnimationComplete",
    ];
  class rs {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(e) {
      let {
          parent: t,
          props: n,
          presenceContext: r,
          reducedMotionConfig: a,
          blockInitialAnimation: i,
          visualState: o,
        } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Bt),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const e = pe.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), le.render(this.render, !1, !0));
        });
      const { latestValues: l, renderState: u, onUpdate: d } = o;
      (this.onUpdate = d),
        (this.latestValues = l),
        (this.baseTarget = c({}, l)),
        (this.initialValues = n.initial ? c({}, l) : {}),
        (this.renderState = u),
        (this.parent = t),
        (this.props = n),
        (this.presenceContext = r),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = a),
        (this.options = s),
        (this.blockInitialAnimation = Boolean(i)),
        (this.isControllingVariants = $i(n)),
        (this.isVariantNode = eo(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = Boolean(t && t.current));
      const h = this.scrapeMotionValuesFromProps(n, {}, this),
        { willChange: p } = h,
        m = f(h, ts);
      for (const c in m) {
        const e = m[c];
        void 0 !== l[c] && Ee(e) && e.set(l[c], !1);
      }
    }
    mount(e) {
      (this.current = e),
        es.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        _o.current ||
          (function () {
            if (((_o.current = !0), ro))
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => (Zo.current = e.matches);
                e.addListener(t), t();
              } else Zo.current = !1;
          })(),
        (this.shouldReduceMotion =
          "never" !== this.reducedMotionConfig &&
          ("always" === this.reducedMotionConfig || Zo.current)),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      es.delete(this.current),
        this.projection && this.projection.unmount(),
        ue(this.notifyUpdate),
        ue(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (const e in this.events) this.events[e].clear();
      for (const e in this.features) {
        const t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      const n = ne.has(e),
        r = t.on("change", (t) => {
          (this.latestValues[e] = t),
            this.props.onUpdate && le.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        a = t.on("renderRequest", this.scheduleRender);
      let i;
      window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          r(), a(), i && i(), t.owner && t.stop();
        });
    }
    sortNodePosition(e) {
      return this.current &&
        this.sortInstanceNodePosition &&
        this.type === e.type
        ? this.sortInstanceNodePosition(this.current, e.current)
        : 0;
    }
    updateFeatures() {
      let e = "animation";
      for (e in io) {
        const t = io[e];
        if (!t) continue;
        const { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          const t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < ns.length; n++) {
        const t = ns[n];
        this.propEventSubscriptions[t] &&
          (this.propEventSubscriptions[t](),
          delete this.propEventSubscriptions[t]);
        const r = e["on" + t];
        r && (this.propEventSubscriptions[t] = this.on(t, r));
      }
      (this.prevMotionValues = (function (e, t, n) {
        for (const r in t) {
          const a = t[r],
            i = n[r];
          if (Ee(a)) e.addValue(r, a);
          else if (Ee(i)) e.addValue(r, we(a, { owner: e }));
          else if (i !== a)
            if (e.hasValue(r)) {
              const t = e.getValue(r);
              !0 === t.liveStyle ? t.jump(a) : t.hasAnimated || t.set(a);
            } else {
              const t = e.getStaticValue(r);
              e.addValue(r, we(void 0 !== t ? t : a, { owner: e }));
            }
        }
        for (const r in n) void 0 === t[r] && e.removeValue(r);
        return t;
      })(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(e) {
      const t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      const n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      const t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        void 0 === n &&
          void 0 !== t &&
          ((n = we(null === t ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        void 0 === this.latestValues[e] && this.current
          ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
            void 0 !== n
            ? n
            : this.readValueFromInstance(this.current, e, this.options)
          : this.latestValues[e];
      var a;
      return (
        void 0 !== r &&
          null !== r &&
          ("string" === typeof r && (Xt(r) || Be(r))
            ? (r = parseFloat(r))
            : ((a = r), !$o.find(_t(a)) && vt.test(t) && (r = Ct(e, t))),
          this.setBaseTarget(e, Ee(r) ? r.get() : r)),
        Ee(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      const { initial: n } = this.props;
      let r;
      if ("string" === typeof n || "object" === typeof n) {
        const a = v(
          this.props,
          n,
          null === (t = this.presenceContext) || void 0 === t
            ? void 0
            : t.custom
        );
        a && (r = a[e]);
      }
      if (n && void 0 !== r) return r;
      const a = this.getBaseTargetFromProps(this.props, e);
      return void 0 === a || Ee(a)
        ? void 0 !== this.initialValues[e] && void 0 === r
          ? void 0
          : this.baseTarget[e]
        : a;
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new ve()), this.events[e].add(t)
      );
    }
    notify(e) {
      if (this.events[e]) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        this.events[e].notify(...n);
      }
    }
  }
  class as extends rs {
    constructor() {
      super(...arguments), (this.KeyframeResolver = tn);
    }
    sortInstanceNodePosition(e, t) {
      return 2 & e.compareDocumentPosition(t) ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, t) {
      let { vars: n, style: r } = t;
      delete n[e], delete r[e];
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: e } = this.props;
      Ee(e) &&
        (this.childSubscription = e.on("change", (e) => {
          this.current && (this.current.textContent = "".concat(e));
        }));
    }
  }
  class is extends as {
    constructor() {
      super(...arguments), (this.type = "html"), (this.renderInstance = Ro);
    }
    readValueFromInstance(e, t) {
      if (ne.has(t)) {
        const e = jt(t);
        return (e && e.default) || 0;
      }
      {
        const r = ((n = e), window.getComputedStyle(n)),
          a = (Qt(t) ? r.getPropertyValue(t) : r[t]) || 0;
        return "string" === typeof a ? a.trim() : a;
      }
      var n;
    }
    measureInstanceViewportBox(e, t) {
      let { transformPagePoint: n } = t;
      return ca(e, n);
    }
    build(e, t, n) {
      ko(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Do(e, t, n);
    }
  }
  class os extends as {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Hr);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (ne.has(t)) {
        const e = jt(t);
        return (e && e.default) || 0;
      }
      return (t = Lo.has(t) ? t : Te(t)), e.getAttribute(t);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Mo(e, t, n);
    }
    build(e, t, n) {
      Co(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      zo(e, t, 0, r);
    }
    mount(e) {
      (this.isSVGTag = Fo(e.tagName)), super.mount(e);
    }
  }
  const ss = (e, t) =>
      mo(e) ? new os(t) : new is(t, { allowProjection: e !== r.Fragment }),
    ls = i(Jo(c(c(c(c({}, kr), Ki), Ii), Yi), ss)),
    us = n.p + "static/media/auralex.430d9209c43fbf14c00b.png";
  n(358);
  const cs = ["page"],
    ds = ["page", "matches"],
    fs = [
      "onClick",
      "discover",
      "prefetch",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
      "viewTransition",
    ],
    hs = [
      "aria-current",
      "caseSensitive",
      "className",
      "end",
      "style",
      "to",
      "viewTransition",
      "children",
    ],
    ps = [
      "discover",
      "fetcherKey",
      "navigate",
      "reloadDocument",
      "replace",
      "state",
      "method",
      "action",
      "onSubmit",
      "relative",
      "preventScrollReset",
      "viewTransition",
    ];
  var ms = "popstate";
  function gs() {
    return ks(
      function (e, t) {
        let { pathname: n, search: r, hash: a } = e.location;
        return xs(
          "",
          { pathname: n, search: r, hash: a },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || "default"
        );
      },
      function (e, t) {
        return "string" === typeof t ? t : ws(t);
      },
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
    );
  }
  function vs(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function ys(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function bs(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function xs(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 ? arguments[3] : void 0;
    return c(
      c(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? Ss(t) : t
      ),
      {},
      {
        state: n,
        key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
      }
    );
  }
  function ws(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function Ss(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function ks(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      { window: a = document.defaultView, v5Compat: i = !1 } = r,
      o = a.history,
      s = "POP",
      l = null,
      u = d();
    function d() {
      return (o.state || { idx: null }).idx;
    }
    function f() {
      s = "POP";
      let e = d(),
        t = null == e ? null : e - u;
      (u = e), l && l({ action: s, location: p.location, delta: t });
    }
    function h(e) {
      let t =
          "null" !== a.location.origin ? a.location.origin : a.location.href,
        n = "string" === typeof e ? e : ws(e);
      return (
        (n = n.replace(/ $/, "%20")),
        vs(
          t,
          "No window.location.(origin|href) available to create URL for href: ".concat(
            n
          )
        ),
        new URL(n, t)
      );
    }
    null == u &&
      ((u = 0), o.replaceState(c(c({}, o.state), {}, { idx: u }), ""));
    let p = {
      get action() {
        return s;
      },
      get location() {
        return e(a, o);
      },
      listen(e) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(ms, f),
          (l = e),
          () => {
            a.removeEventListener(ms, f), (l = null);
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: h,
      encodeLocation(e) {
        let t = h(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        s = "PUSH";
        let r = xs(p.location, e, t);
        n && n(r, e), (u = d() + 1);
        let c = bs(r, u),
          f = p.createHref(r);
        try {
          o.pushState(c, "", f);
        } catch (h) {
          if (h instanceof DOMException && "DataCloneError" === h.name) throw h;
          a.location.assign(f);
        }
        i && l && l({ action: s, location: p.location, delta: 1 });
      },
      replace: function (e, t) {
        s = "REPLACE";
        let r = xs(p.location, e, t);
        n && n(r, e), (u = d());
        let a = bs(r, u),
          c = p.createHref(r);
        o.replaceState(a, "", c),
          i && l && l({ action: s, location: p.location, delta: 0 });
      },
      go: (e) => o.go(e),
    };
    return p;
  }
  function Es(e, t) {
    return As(
      e,
      t,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
      !1
    );
  }
  function As(e, t, n, r) {
    let a = Os(("string" === typeof t ? Ss(t) : t).pathname || "/", n);
    if (null == a) return null;
    let i = Ts(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(i);
    let o = null;
    for (let s = 0; null == o && s < i.length; ++s) {
      let e = Is(a);
      o = Ds(i[s], e, r);
    }
    return o;
  }
  function Ts(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      a = (e, a, i) => {
        let o = {
          relativePath: void 0 === i ? e.path || "" : i,
          caseSensitive: !0 === e.caseSensitive,
          childrenIndex: a,
          route: e,
        };
        o.relativePath.startsWith("/") &&
          (vs(
            o.relativePath.startsWith(r),
            'Absolute route path "'
              .concat(o.relativePath, '" nested under path "')
              .concat(
                r,
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              )
          ),
          (o.relativePath = o.relativePath.slice(r.length)));
        let s = Xs([r, o.relativePath]),
          l = n.concat(o);
        e.children &&
          e.children.length > 0 &&
          (vs(
            !0 !== e.index,
            'Index routes must not have child routes. Please remove all child routes from route path "'.concat(
              s,
              '".'
            )
          ),
          Ts(e.children, t, l, s)),
          (null != e.path || e.index) &&
            t.push({ path: s, score: Vs(s, e.index), routesMeta: l });
      };
    return (
      e.forEach((e, t) => {
        var n;
        if (
          "" !== e.path &&
          null !== (n = e.path) &&
          void 0 !== n &&
          n.includes("?")
        )
          for (let r of js(e.path)) a(e, t, r);
        else a(e, t);
      }),
      t
    );
  }
  function js(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      i = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [i, ""] : [i];
    let o = js(r.join("/")),
      s = [];
    return (
      s.push(...o.map((e) => ("" === e ? i : [i, e].join("/")))),
      a && s.push(...o),
      s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  var Cs = /^:[\w-]+$/,
    Ns = 3,
    Ps = 2,
    Fs = 1,
    Rs = 10,
    Ls = -2,
    zs = (e) => "*" === e;
  function Vs(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(zs) && (r += Ls),
      t && (r += Ps),
      n
        .filter((e) => !zs(e))
        .reduce((e, t) => e + (Cs.test(t) ? Ns : "" === t ? Fs : Rs), r)
    );
  }
  function Ds(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { routesMeta: r } = e,
      a = {},
      i = "/",
      o = [];
    for (let s = 0; s < r.length; ++s) {
      let e = r[s],
        l = s === r.length - 1,
        u = "/" === i ? t : t.slice(i.length) || "/",
        c = Ms(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
          u
        ),
        d = e.route;
      if (
        (!c &&
          l &&
          n &&
          !r[r.length - 1].route.index &&
          (c = Ms(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            u
          )),
        !c)
      )
        return null;
      Object.assign(a, c.params),
        o.push({
          params: a,
          pathname: Xs([i, c.pathname]),
          pathnameBase: Gs(Xs([i, c.pathnameBase])),
          route: d,
        }),
        "/" !== c.pathnameBase && (i = Xs([i, c.pathnameBase]));
    }
    return o;
  }
  function Ms(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        ys(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "'
            .concat(e, '" will be treated as if it were "')
            .concat(
              e.replace(/\*$/, "/*"),
              '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'
            )
            .concat(e.replace(/\*$/, "/*"), '".')
        );
        let r = [],
          a =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
        let i = new RegExp(a, t ? void 0 : "i");
        return [i, r];
      })(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let i = a[0],
      o = i.replace(/(.)\/+$/, "$1"),
      s = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = s[n] || "";
          o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const l = s[n];
        return (e[r] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: i,
      pathnameBase: o,
      pattern: e,
    };
  }
  function Is(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        ys(
          !1,
          'The URL path "'
            .concat(
              e,
              '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding ('
            )
            .concat(t, ").")
        ),
        e
      );
    }
  }
  function Os(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function Us(e, t, n, r) {
    return "Cannot include a '"
      .concat(e, "' character in a manually specified `to.")
      .concat(t, "` field [")
      .concat(JSON.stringify(r), "].  Please separate it out to the `to.")
      .concat(
        n,
        '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      );
  }
  function Bs(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function Ws(e) {
    let t = Bs(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function qs(e, t, n) {
    let r,
      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    "string" === typeof e
      ? (r = Ss(e))
      : ((r = c({}, e)),
        vs(
          !r.pathname || !r.pathname.includes("?"),
          Us("?", "pathname", "search", r)
        ),
        vs(
          !r.pathname || !r.pathname.includes("#"),
          Us("#", "pathname", "hash", r)
        ),
        vs(!r.search || !r.search.includes("#"), Us("#", "search", "hash", r)));
    let i,
      o = "" === e || "" === r.pathname,
      s = o ? "/" : r.pathname;
    if (null == s) i = n;
    else {
      let e = t.length - 1;
      if (!a && s.startsWith("..")) {
        let t = s.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        r.pathname = t.join("/");
      }
      i = e >= 0 ? t[e] : "/";
    }
    let l = (function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "/",
          {
            pathname: n,
            search: r = "",
            hash: a = "",
          } = "string" === typeof e ? Ss(e) : e,
          i = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: i, search: Qs(r), hash: Hs(a) };
      })(r, i),
      u = s && "/" !== s && s.endsWith("/"),
      d = (o || "." === s) && n.endsWith("/");
    return l.pathname.endsWith("/") || (!u && !d) || (l.pathname += "/"), l;
  }
  var Xs = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Gs = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Qs = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    Hs = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  function Ks(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  var Ys = ["POST", "PUT", "PATCH", "DELETE"],
    Js = (new Set(Ys), ["GET", ...Ys]);
  new Set(Js), Symbol("ResetLoaderData");
  var Zs = r.createContext(null);
  Zs.displayName = "DataRouter";
  var _s = r.createContext(null);
  _s.displayName = "DataRouterState";
  var $s = r.createContext({ isTransitioning: !1 });
  $s.displayName = "ViewTransition";
  var el = r.createContext(new Map());
  el.displayName = "Fetchers";
  var tl = r.createContext(null);
  tl.displayName = "Await";
  var nl = r.createContext(null);
  nl.displayName = "Navigation";
  var rl = r.createContext(null);
  rl.displayName = "Location";
  var al = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  al.displayName = "Route";
  var il = r.createContext(null);
  il.displayName = "RouteError";
  function ol() {
    return null != r.useContext(rl);
  }
  function sl() {
    return (
      vs(
        ol(),
        "useLocation() may be used only in the context of a <Router> component."
      ),
      r.useContext(rl).location
    );
  }
  var ll =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function ul(e) {
    r.useContext(nl).static || r.useLayoutEffect(e);
  }
  function cl() {
    let { isDataRoute: e } = r.useContext(al);
    return e
      ? (function () {
          let { router: e } = bl("useNavigate"),
            t = wl("useNavigate"),
            n = r.useRef(!1);
          ul(() => {
            n.current = !0;
          });
          let a = r.useCallback(
            async function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              ys(n.current, ll),
                n.current &&
                  ("number" === typeof r
                    ? e.navigate(r)
                    : await e.navigate(r, c({ fromRouteId: t }, a)));
            },
            [e, t]
          );
          return a;
        })()
      : (function () {
          vs(
            ol(),
            "useNavigate() may be used only in the context of a <Router> component."
          );
          let e = r.useContext(Zs),
            { basename: t, navigator: n } = r.useContext(nl),
            { matches: a } = r.useContext(al),
            { pathname: i } = sl(),
            o = JSON.stringify(Ws(a)),
            s = r.useRef(!1);
          ul(() => {
            s.current = !0;
          });
          let l = r.useCallback(
            function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((ys(s.current, ll), !s.current)) return;
              if ("number" === typeof r) return void n.go(r);
              let l = qs(r, JSON.parse(o), i, "path" === a.relative);
              null == e &&
                "/" !== t &&
                (l.pathname = "/" === l.pathname ? t : Xs([t, l.pathname])),
                (a.replace ? n.replace : n.push)(l, a.state, a);
            },
            [t, n, o, i, e]
          );
          return l;
        })();
  }
  r.createContext(null);
  function dl(e) {
    let { relative: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { matches: n } = r.useContext(al),
      { pathname: a } = sl(),
      i = JSON.stringify(Ws(n));
    return r.useMemo(() => qs(e, JSON.parse(i), a, "path" === t), [e, i, a, t]);
  }
  function fl(e, t, n, a) {
    vs(
      ol(),
      "useRoutes() may be used only in the context of a <Router> component."
    );
    let { navigator: i } = r.useContext(nl),
      { matches: o } = r.useContext(al),
      s = o[o.length - 1],
      l = s ? s.params : {},
      u = s ? s.pathname : "/",
      d = s ? s.pathnameBase : "/",
      f = s && s.route;
    {
      let e = (f && f.path) || "";
      El(
        u,
        !f || e.endsWith("*") || e.endsWith("*?"),
        'You rendered descendant <Routes> (or called `useRoutes()`) at "'
          .concat(u, '" (under <Route path="')
          .concat(
            e,
            '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="'
          )
          .concat(e, '"> to <Route path="')
          .concat("/" === e ? "*" : "".concat(e, "/*"), '">.')
      );
    }
    let h,
      p = sl();
    if (t) {
      var m;
      let e = "string" === typeof t ? Ss(t) : t;
      vs(
        "/" === d ||
          (null === (m = e.pathname) || void 0 === m
            ? void 0
            : m.startsWith(d)),
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'
          .concat(d, '" but pathname "')
          .concat(e.pathname, '" was given in the `location` prop.')
      ),
        (h = e);
    } else h = p;
    let g = h.pathname || "/",
      v = g;
    if ("/" !== d) {
      let e = d.replace(/^\//, "").split("/");
      v = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let y = Es(e, { pathname: v });
    ys(
      f || null != y,
      'No routes matched location "'
        .concat(h.pathname)
        .concat(h.search)
        .concat(h.hash, '" ')
    ),
      ys(
        null == y ||
          void 0 !== y[y.length - 1].route.element ||
          void 0 !== y[y.length - 1].route.Component ||
          void 0 !== y[y.length - 1].route.lazy,
        'Matched leaf route at location "'
          .concat(h.pathname)
          .concat(h.search)
          .concat(
            h.hash,
            '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
          )
      );
    let b = vl(
      y &&
        y.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, l, e.params),
            pathname: Xs([
              d,
              i.encodeLocation
                ? i.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? d
                : Xs([
                    d,
                    i.encodeLocation
                      ? i.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      a
    );
    return t && b
      ? r.createElement(
          rl.Provider,
          {
            value: {
              location: c(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                h
              ),
              navigationType: "POP",
            },
          },
          b
        )
      : b;
  }
  function hl() {
    let e = Sl(),
      t = Ks(e)
        ? "".concat(e.status, " ").concat(e.statusText)
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      a = "rgba(200,200,200, 0.5)",
      i = { padding: "0.5rem", backgroundColor: a },
      o = { padding: "2px 4px", backgroundColor: a },
      s = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", e),
      (s = r.createElement(
        r.Fragment,
        null,
        r.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
        r.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          r.createElement("code", { style: o }, "ErrorBoundary"),
          " or",
          " ",
          r.createElement("code", { style: o }, "errorElement"),
          " prop on your route."
        )
      )),
      r.createElement(
        r.Fragment,
        null,
        r.createElement("h2", null, "Unexpected Application Error!"),
        r.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? r.createElement("pre", { style: i }, n) : null,
        s
      )
    );
  }
  var pl = r.createElement(hl, null),
    ml = class extends r.Component {
      constructor(e) {
        super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          });
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          ("idle" !== t.revalidation && "idle" === e.revalidation)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: void 0 !== e.error ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        console.error(
          "React Router caught the following error during render",
          e,
          t
        );
      }
      render() {
        return void 0 !== this.state.error
          ? r.createElement(
              al.Provider,
              { value: this.props.routeContext },
              r.createElement(il.Provider, {
                value: this.state.error,
                children: this.props.component,
              })
            )
          : this.props.children;
      }
    };
  function gl(e) {
    let { routeContext: t, match: n, children: a } = e,
      i = r.useContext(Zs);
    return (
      i &&
        i.static &&
        i.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (i.staticContext._deepestRenderedBoundaryId = n.route.id),
      r.createElement(al.Provider, { value: t }, a)
    );
  }
  function vl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (0 !== t.length || n.initialized || !(n.matches.length > 0))
          return null;
        e = n.matches;
      }
    }
    let a = e,
      i = null === n || void 0 === n ? void 0 : n.errors;
    if (null != i) {
      let e = a.findIndex(
        (e) =>
          e.route.id &&
          void 0 !== (null === i || void 0 === i ? void 0 : i[e.route.id])
      );
      vs(
        e >= 0,
        "Could not find a matching route for errors on route IDs: ".concat(
          Object.keys(i).join(",")
        )
      ),
        (a = a.slice(0, Math.min(a.length, e + 1)));
    }
    let o = !1,
      s = -1;
    if (n)
      for (let r = 0; r < a.length; r++) {
        let e = a[r];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (s = r),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            i =
              e.route.loader &&
              !t.hasOwnProperty(e.route.id) &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || i) {
            (o = !0), (a = s >= 0 ? a.slice(0, s + 1) : [a[0]]);
            break;
          }
        }
      }
    return a.reduceRight((e, l, u) => {
      let c,
        d = !1,
        f = null,
        h = null;
      n &&
        ((c = i && l.route.id ? i[l.route.id] : void 0),
        (f = l.route.errorElement || pl),
        o &&
          (s < 0 && 0 === u
            ? (El(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration"
              ),
              (d = !0),
              (h = null))
            : s === u &&
              ((d = !0), (h = l.route.hydrateFallbackElement || null))));
      let p = t.concat(a.slice(0, u + 1)),
        m = () => {
          let t;
          return (
            (t = c
              ? f
              : d
              ? h
              : l.route.Component
              ? r.createElement(l.route.Component, null)
              : l.route.element
              ? l.route.element
              : e),
            r.createElement(gl, {
              match: l,
              routeContext: { outlet: e, matches: p, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (l.route.ErrorBoundary || l.route.errorElement || 0 === u)
        ? r.createElement(ml, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: c,
            children: m(),
            routeContext: { outlet: null, matches: p, isDataRoute: !0 },
          })
        : m();
    }, null);
  }
  function yl(e) {
    return "".concat(
      e,
      " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."
    );
  }
  function bl(e) {
    let t = r.useContext(Zs);
    return vs(t, yl(e)), t;
  }
  function xl(e) {
    let t = r.useContext(_s);
    return vs(t, yl(e)), t;
  }
  function wl(e) {
    let t = (function (e) {
        let t = r.useContext(al);
        return vs(t, yl(e)), t;
      })(e),
      n = t.matches[t.matches.length - 1];
    return (
      vs(
        n.route.id,
        "".concat(e, ' can only be used on routes that contain a unique "id"')
      ),
      n.route.id
    );
  }
  function Sl() {
    var e;
    let t = r.useContext(il),
      n = xl("useRouteError"),
      a = wl("useRouteError");
    return void 0 !== t
      ? t
      : null === (e = n.errors) || void 0 === e
      ? void 0
      : e[a];
  }
  var kl = {};
  function El(e, t, n) {
    t || kl[e] || ((kl[e] = !0), ys(!1, n));
  }
  r.memo(function (e) {
    let { routes: t, future: n, state: r } = e;
    return fl(t, void 0, r, n);
  });
  function Al(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: a,
      navigationType: i = "POP",
      navigator: o,
      static: s = !1,
    } = e;
    vs(
      !ol(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
    );
    let l = t.replace(/^\/*/, "/"),
      u = r.useMemo(
        () => ({ basename: l, navigator: o, static: s, future: {} }),
        [l, o, s]
      );
    "string" === typeof a && (a = Ss(a));
    let {
        pathname: c = "/",
        search: d = "",
        hash: f = "",
        state: h = null,
        key: p = "default",
      } = a,
      m = r.useMemo(() => {
        let e = Os(c, l);
        return null == e
          ? null
          : {
              location: { pathname: e, search: d, hash: f, state: h, key: p },
              navigationType: i,
            };
      }, [l, c, d, f, h, p, i]);
    return (
      ys(
        null != m,
        '<Router basename="'
          .concat(l, '"> is not able to match the URL "')
          .concat(c)
          .concat(d)
          .concat(
            f,
            "\" because it does not start with the basename, so the <Router> won't render anything."
          )
      ),
      null == m
        ? null
        : r.createElement(
            nl.Provider,
            { value: u },
            r.createElement(rl.Provider, { children: n, value: m })
          )
    );
  }
  r.Component;
  var Tl = "get",
    jl = "application/x-www-form-urlencoded";
  function Cl(e) {
    return null != e && "string" === typeof e.tagName;
  }
  var Nl = null;
  var Pl = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function Fl(e) {
    return null == e || Pl.has(e)
      ? e
      : (ys(
          !1,
          '"'
            .concat(
              e,
              '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "'
            )
            .concat(jl, '"')
        ),
        null);
  }
  function Rl(e, t) {
    let n, r, a, i, o;
    if (Cl((s = e)) && "form" === s.tagName.toLowerCase()) {
      let o = e.getAttribute("action");
      (r = o ? Os(o, t) : null),
        (n = e.getAttribute("method") || Tl),
        (a = Fl(e.getAttribute("enctype")) || jl),
        (i = new FormData(e));
    } else if (
      (function (e) {
        return Cl(e) && "button" === e.tagName.toLowerCase();
      })(e) ||
      ((function (e) {
        return Cl(e) && "input" === e.tagName.toLowerCase();
      })(e) &&
        ("submit" === e.type || "image" === e.type))
    ) {
      let o = e.form;
      if (null == o)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>'
        );
      let s = e.getAttribute("formaction") || o.getAttribute("action");
      if (
        ((r = s ? Os(s, t) : null),
        (n = e.getAttribute("formmethod") || o.getAttribute("method") || Tl),
        (a =
          Fl(e.getAttribute("formenctype")) ||
          Fl(o.getAttribute("enctype")) ||
          jl),
        (i = new FormData(o, e)),
        !(function () {
          if (null === Nl)
            try {
              new FormData(document.createElement("form"), 0), (Nl = !1);
            } catch (e) {
              Nl = !0;
            }
          return Nl;
        })())
      ) {
        let { name: t, type: n, value: r } = e;
        if ("image" === n) {
          let e = t ? "".concat(t, ".") : "";
          i.append("".concat(e, "x"), "0"), i.append("".concat(e, "y"), "0");
        } else t && i.append(t, r);
      }
    } else {
      if (Cl(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
        );
      (n = Tl), (r = null), (a = jl), (o = e);
    }
    var s;
    return (
      i && "text/plain" === a && ((o = i), (i = void 0)),
      { action: r, method: n.toLowerCase(), encType: a, formData: i, body: o }
    );
  }
  function Ll(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  async function zl(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return (t[e.id] = n), n;
    } catch (n) {
      return (
        console.error(
          "Error loading route module `".concat(
            e.module,
            "`, reloading page..."
          )
        ),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Vl(e) {
    return null != e && "string" === typeof e.page;
  }
  function Dl(e) {
    return (
      null != e &&
      (null == e.href
        ? "preload" === e.rel &&
          "string" === typeof e.imageSrcSet &&
          "string" === typeof e.imageSizes
        : "string" === typeof e.rel && "string" === typeof e.href)
    );
  }
  function Ml(e, t, n, r, a, i) {
    let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      s = (e, t) => {
        var r;
        return (
          n[t].pathname !== e.pathname ||
          ((null === (r = n[t].route.path) || void 0 === r
            ? void 0
            : r.endsWith("*")) &&
            n[t].params["*"] !== e.params["*"])
        );
      };
    return "assets" === i
      ? t.filter((e, t) => o(e, t) || s(e, t))
      : "data" === i
      ? t.filter((t, i) => {
          let l = r.routes[t.route.id];
          if (!l || !l.hasLoader) return !1;
          if (o(t, i) || s(t, i)) return !0;
          if (t.route.shouldRevalidate) {
            var u;
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin
              ),
              currentParams:
                (null === (u = n[0]) || void 0 === u ? void 0 : u.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if ("boolean" === typeof r) return r;
          }
          return !0;
        })
      : [];
  }
  function Il(e) {
    return [...new Set(e)];
  }
  function Ol(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, a) => {
      if (t && !Vl(a) && "script" === a.as && a.href && r.has(a.href)) return e;
      let i = JSON.stringify(
        (function (e) {
          let t = {},
            n = Object.keys(e).sort();
          for (let r of n) t[r] = e[r];
          return t;
        })(a)
      );
      return n.has(i) || (n.add(i), e.push({ key: i, link: a })), e;
    }, []);
  }
  function Ul(e) {
    return { __html: e };
  }
  Symbol("SingleFetchRedirect");
  function Bl(e) {
    let t =
      "string" === typeof e
        ? new URL(
            e,
            "undefined" === typeof window
              ? "server://singlefetch/"
              : window.location.origin
          )
        : e;
    return (
      "/" === t.pathname
        ? (t.pathname = "_root.data")
        : (t.pathname = "".concat(t.pathname.replace(/\/$/, ""), ".data")),
      t
    );
  }
  r.Component;
  function Wl(e) {
    let { error: t, isOutsideRemixApp: n } = e;
    console.error(t);
    let a,
      i = r.createElement("script", {
        dangerouslySetInnerHTML: {
          __html:
            '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      ',
        },
      });
    if (Ks(t))
      return r.createElement(
        ql,
        { title: "Unhandled Thrown Response!" },
        r.createElement(
          "h1",
          { style: { fontSize: "24px" } },
          t.status,
          " ",
          t.statusText
        ),
        i
      );
    if (t instanceof Error) a = t;
    else {
      let e =
        null == t
          ? "Unknown Error"
          : "object" === typeof t && "toString" in t
          ? t.toString()
          : JSON.stringify(t);
      a = new Error(e);
    }
    return r.createElement(
      ql,
      { title: "Application Error!", isOutsideRemixApp: n },
      r.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        "Application Error"
      ),
      r.createElement(
        "pre",
        {
          style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
          },
        },
        a.stack
      ),
      i
    );
  }
  function ql(e) {
    var t;
    let { title: n, renderScripts: a, isOutsideRemixApp: i, children: o } = e,
      { routeModules: s } = Kl();
    return null !== (t = s.root) && void 0 !== t && t.Layout && !i
      ? o
      : r.createElement(
          "html",
          { lang: "en" },
          r.createElement(
            "head",
            null,
            r.createElement("meta", { charSet: "utf-8" }),
            r.createElement("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1,viewport-fit=cover",
            }),
            r.createElement("title", null, n)
          ),
          r.createElement(
            "body",
            null,
            r.createElement(
              "main",
              {
                style: { fontFamily: "system-ui, sans-serif", padding: "2rem" },
              },
              o,
              a ? r.createElement(tu, null) : null
            )
          )
        );
  }
  function Xl(e) {
    return !e;
  }
  function Gl() {
    let e = r.useContext(Zs);
    return (
      Ll(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element"
      ),
      e
    );
  }
  function Ql() {
    let e = r.useContext(_s);
    return (
      Ll(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element"
      ),
      e
    );
  }
  var Hl = r.createContext(void 0);
  function Kl() {
    let e = r.useContext(Hl);
    return (
      Ll(e, "You must render this element inside a <HydratedRouter> element"), e
    );
  }
  function Yl(e, t) {
    return (n) => {
      e && e(n), n.defaultPrevented || t(n);
    };
  }
  function Jl(e, t, n) {
    if (n && !eu) return [e[0]];
    if (t) {
      let n = e.findIndex((e) => void 0 !== t[e.route.id]);
      return e.slice(0, n + 1);
    }
    return e;
  }
  function Zl(e) {
    let { page: t } = e,
      n = f(e, cs),
      { router: a } = Gl(),
      i = r.useMemo(
        () => Es(a.routes, t, a.basename),
        [a.routes, t, a.basename]
      );
    return i ? r.createElement($l, c({ page: t, matches: i }, n)) : null;
  }
  function _l(e) {
    let { manifest: t, routeModules: n } = Kl(),
      [a, i] = r.useState([]);
    return (
      r.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return Ol(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await zl(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  })
                )
              )
                .flat(1)
                .filter(Dl)
                .filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
                .map((e) =>
                  "stylesheet" === e.rel
                    ? c(c({}, e), {}, { rel: "prefetch", as: "style" })
                    : c(c({}, e), {}, { rel: "prefetch" })
                )
            );
          })(e, t, n).then((e) => {
            r || i(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      a
    );
  }
  function $l(e) {
    let { page: t, matches: n } = e,
      a = f(e, ds),
      i = sl(),
      { manifest: o, routeModules: s } = Kl(),
      { loaderData: l, matches: u } = Ql(),
      d = r.useMemo(() => Ml(t, n, u, o, i, "data"), [t, n, u, o, i]),
      h = r.useMemo(() => Ml(t, n, u, o, i, "assets"), [t, n, u, o, i]),
      p = r.useMemo(() => {
        if (t === i.pathname + i.search + i.hash) return [];
        let e = new Set(),
          r = !1;
        if (
          (n.forEach((t) => {
            var n;
            let a = o.routes[t.route.id];
            a &&
              a.hasLoader &&
              ((!d.some((e) => e.route.id === t.route.id) &&
                t.route.id in l &&
                null !== (n = s[t.route.id]) &&
                void 0 !== n &&
                n.shouldRevalidate) ||
              a.hasClientLoader
                ? (r = !0)
                : e.add(t.route.id));
          }),
          0 === e.size)
        )
          return [];
        let a = Bl(t);
        return (
          r &&
            e.size > 0 &&
            a.searchParams.set(
              "_routes",
              n
                .filter((t) => e.has(t.route.id))
                .map((e) => e.route.id)
                .join(",")
            ),
          [a.pathname + a.search]
        );
      }, [l, i, o, d, n, t, s]),
      m = r.useMemo(
        () =>
          (function (e, t) {
            return Il(
              e
                .map((e) => {
                  let n = t.routes[e.route.id];
                  if (!n) return [];
                  let r = [n.module];
                  return n.imports && (r = r.concat(n.imports)), r;
                })
                .flat(1)
            );
          })(h, o),
        [h, o]
      ),
      g = _l(h);
    return r.createElement(
      r.Fragment,
      null,
      p.map((e) =>
        r.createElement(
          "link",
          c({ key: e, rel: "prefetch", as: "fetch", href: e }, a)
        )
      ),
      m.map((e) =>
        r.createElement("link", c({ key: e, rel: "modulepreload", href: e }, a))
      ),
      g.map((e) => {
        let { key: t, link: n } = e;
        return r.createElement("link", c({ key: t }, n));
      })
    );
  }
  Hl.displayName = "FrameworkContext";
  var eu = !1;
  function tu(e) {
    let {
        manifest: t,
        serverHandoffString: n,
        isSpaMode: a,
        renderMeta: i,
      } = Kl(),
      { router: o, static: s, staticContext: l } = Gl(),
      { matches: u } = Ql(),
      d = Xl(a);
    i && (i.didRenderScripts = !0);
    let f = Jl(u, null, a);
    r.useEffect(() => {
      eu = !0;
    }, []);
    let h = r.useMemo(() => {
        var a;
        let i = l
            ? "window.__reactRouterContext = "
                .concat(n, ";")
                .concat(
                  "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());"
                )
            : " ",
          u = s
            ? ""
                .concat(
                  null !== (a = t.hmr) && void 0 !== a && a.runtime
                    ? "import ".concat(JSON.stringify(t.hmr.runtime), ";")
                    : ""
                )
                .concat(d ? "" : "import ".concat(JSON.stringify(t.url)), ";\n")
                .concat(
                  f
                    .map((e, n) =>
                      "import * as route"
                        .concat(n, " from ")
                        .concat(
                          JSON.stringify(t.routes[e.route.id].module),
                          ";"
                        )
                    )
                    .join("\n"),
                  "\n  "
                )
                .concat(
                  d
                    ? "window.__reactRouterManifest = ".concat(
                        JSON.stringify(
                          (function (e, t) {
                            let n = new Set(
                                t.state.matches.map((e) => e.route.id)
                              ),
                              r = t.state.location.pathname
                                .split("/")
                                .filter(Boolean),
                              a = ["/"];
                            for (r.pop(); r.length > 0; )
                              a.push("/".concat(r.join("/"))), r.pop();
                            a.forEach((e) => {
                              let r = Es(t.routes, e, t.basename);
                              r && r.forEach((e) => n.add(e.route.id));
                            });
                            let i = [...n].reduce(
                              (t, n) => Object.assign(t, { [n]: e.routes[n] }),
                              {}
                            );
                            return c(c({}, e), {}, { routes: i });
                          })(t, o),
                          null,
                          2
                        ),
                        ";"
                      )
                    : "",
                  "\n  window.__reactRouterRouteModules = {"
                )
                .concat(
                  f
                    .map((e, t) =>
                      "".concat(JSON.stringify(e.route.id), ":route").concat(t)
                    )
                    .join(","),
                  "};\n\nimport("
                )
                .concat(JSON.stringify(t.entry.module), ");")
            : " ";
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "script",
            c(
              c({}, e),
              {},
              {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: Ul(i),
                type: void 0,
              }
            )
          ),
          r.createElement(
            "script",
            c(
              c({}, e),
              {},
              {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: Ul(u),
                type: "module",
                async: !0,
              }
            )
          )
        );
      }, []),
      p = f
        .map((e) => {
          let n = t.routes[e.route.id];
          return n ? (n.imports || []).concat([n.module]) : [];
        })
        .flat(1),
      m = eu ? [] : t.entry.imports.concat(p);
    return eu
      ? null
      : r.createElement(
          r.Fragment,
          null,
          d
            ? null
            : r.createElement("link", {
                rel: "modulepreload",
                href: t.url,
                crossOrigin: e.crossOrigin,
              }),
          r.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
          }),
          ((g = m), [...new Set(g)]).map((t) =>
            r.createElement("link", {
              key: t,
              rel: "modulepreload",
              href: t,
              crossOrigin: e.crossOrigin,
            })
          ),
          h
        );
    var g;
  }
  function nu() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => {
      t.forEach((t) => {
        "function" === typeof t ? t(e) : null != t && (t.current = e);
      });
    };
  }
  var ru =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  try {
    ru && (window.__reactRouterVersion = "7.1.3");
  } catch (Kc) {}
  function au(e) {
    let { basename: t, children: n, window: a } = e,
      i = r.useRef();
    null == i.current && (i.current = gs({ window: a, v5Compat: !0 }));
    let o = i.current,
      [s, l] = r.useState({ action: o.action, location: o.location }),
      u = r.useCallback(
        (e) => {
          r.startTransition(() => l(e));
        },
        [l]
      );
    return (
      r.useLayoutEffect(() => o.listen(u), [o, u]),
      r.createElement(Al, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: o,
      })
    );
  }
  var iu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ou = r.forwardRef(function (e, t) {
      let n,
        {
          onClick: a,
          discover: i = "render",
          prefetch: o = "none",
          relative: s,
          reloadDocument: l,
          replace: u,
          state: d,
          target: h,
          to: p,
          preventScrollReset: m,
          viewTransition: g,
        } = e,
        v = f(e, fs),
        { basename: y } = r.useContext(nl),
        b = "string" === typeof p && iu.test(p),
        x = !1;
      if ("string" === typeof p && b && ((n = p), ru))
        try {
          let e = new URL(window.location.href),
            t = p.startsWith("//") ? new URL(e.protocol + p) : new URL(p),
            n = Os(t.pathname, y);
          t.origin === e.origin && null != n
            ? (p = n + t.search + t.hash)
            : (x = !0);
        } catch (Kc) {
          ys(
            !1,
            '<Link to="'.concat(
              p,
              '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'
            )
          );
        }
      let w = (function (e) {
          let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          vs(
            ol(),
            "useHref() may be used only in the context of a <Router> component."
          );
          let { basename: n, navigator: a } = r.useContext(nl),
            { hash: i, pathname: o, search: s } = dl(e, { relative: t }),
            l = o;
          return (
            "/" !== n && (l = "/" === o ? n : Xs([n, o])),
            a.createHref({ pathname: l, search: s, hash: i })
          );
        })(p, { relative: s }),
        [S, k, E] = (function (e, t) {
          let n = r.useContext(Hl),
            [a, i] = r.useState(!1),
            [o, s] = r.useState(!1),
            {
              onFocus: l,
              onBlur: u,
              onMouseEnter: c,
              onMouseLeave: d,
              onTouchStart: f,
            } = t,
            h = r.useRef(null);
          r.useEffect(() => {
            if (("render" === e && s(!0), "viewport" === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    s(e.isIntersecting);
                  });
                },
                { threshold: 0.5 }
              );
              return (
                h.current && e.observe(h.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            r.useEffect(() => {
              if (a) {
                let e = setTimeout(() => {
                  s(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [a]);
          let p = () => {
              i(!0);
            },
            m = () => {
              i(!1), s(!1);
            };
          return n
            ? "intent" !== e
              ? [o, h, {}]
              : [
                  o,
                  h,
                  {
                    onFocus: Yl(l, p),
                    onBlur: Yl(u, m),
                    onMouseEnter: Yl(c, p),
                    onMouseLeave: Yl(d, m),
                    onTouchStart: Yl(f, p),
                  },
                ]
            : [!1, h, {}];
        })(o, v),
        A = (function (e) {
          let {
              target: t,
              replace: n,
              state: a,
              preventScrollReset: i,
              relative: o,
              viewTransition: s,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            l = cl(),
            u = sl(),
            c = dl(e, { relative: o });
          return r.useCallback(
            (r) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(r, t)
              ) {
                r.preventDefault();
                let t = void 0 !== n ? n : ws(u) === ws(c);
                l(e, {
                  replace: t,
                  state: a,
                  preventScrollReset: i,
                  relative: o,
                  viewTransition: s,
                });
              }
            },
            [u, l, c, n, a, t, e, i, o, s]
          );
        })(p, {
          replace: u,
          state: d,
          target: h,
          preventScrollReset: m,
          relative: s,
          viewTransition: g,
        });
      let T = r.createElement(
        "a",
        c(
          c(c({}, v), E),
          {},
          {
            href: n || w,
            onClick:
              x || l
                ? a
                : function (e) {
                    a && a(e), e.defaultPrevented || A(e);
                  },
            ref: nu(t, k),
            target: h,
            "data-discover": b || "render" !== i ? void 0 : "true",
          }
        )
      );
      return S && !b
        ? r.createElement(r.Fragment, null, T, r.createElement(Zl, { page: w }))
        : T;
    });
  ou.displayName = "Link";
  var su = r.forwardRef(function (e, t) {
    let {
        "aria-current": n = "page",
        caseSensitive: a = !1,
        className: i = "",
        end: o = !1,
        style: s,
        to: l,
        viewTransition: u,
        children: d,
      } = e,
      h = f(e, hs),
      p = dl(l, { relative: h.relative }),
      m = sl(),
      g = r.useContext(_s),
      { navigator: v, basename: y } = r.useContext(nl),
      b =
        null != g &&
        (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = r.useContext($s);
          vs(
            null != n,
            "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
          );
          let { basename: a } = cu("useViewTransitionState"),
            i = dl(e, { relative: t.relative });
          if (!n.isTransitioning) return !1;
          let o =
              Os(n.currentLocation.pathname, a) || n.currentLocation.pathname,
            s = Os(n.nextLocation.pathname, a) || n.nextLocation.pathname;
          return null != Ms(i.pathname, s) || null != Ms(i.pathname, o);
        })(p) &&
        !0 === u,
      x = v.encodeLocation ? v.encodeLocation(p).pathname : p.pathname,
      w = m.pathname,
      S =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null;
    a ||
      ((w = w.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (x = x.toLowerCase())),
      S && y && (S = Os(S, y) || S);
    const k = "/" !== x && x.endsWith("/") ? x.length - 1 : x.length;
    let E,
      A = w === x || (!o && w.startsWith(x) && "/" === w.charAt(k)),
      T =
        null != S &&
        (S === x || (!o && S.startsWith(x) && "/" === S.charAt(x.length))),
      j = { isActive: A, isPending: T, isTransitioning: b },
      C = A ? n : void 0;
    E =
      "function" === typeof i
        ? i(j)
        : [
            i,
            A ? "active" : null,
            T ? "pending" : null,
            b ? "transitioning" : null,
          ]
            .filter(Boolean)
            .join(" ");
    let N = "function" === typeof s ? s(j) : s;
    return r.createElement(
      ou,
      c(
        c({}, h),
        {},
        {
          "aria-current": C,
          className: E,
          ref: t,
          style: N,
          to: l,
          viewTransition: u,
        }
      ),
      "function" === typeof d ? d(j) : d
    );
  });
  su.displayName = "NavLink";
  var lu = r.forwardRef((e, t) => {
    let {
        discover: n = "render",
        fetcherKey: a,
        navigate: i,
        reloadDocument: o,
        replace: s,
        state: l,
        method: u = Tl,
        action: d,
        onSubmit: h,
        relative: p,
        preventScrollReset: m,
        viewTransition: g,
      } = e,
      v = f(e, ps),
      y = hu(),
      b = (function (e) {
        let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { basename: n } = r.useContext(nl),
          a = r.useContext(al);
        vs(a, "useFormAction must be used inside a RouteContext");
        let [i] = a.matches.slice(-1),
          o = c({}, dl(e || ".", { relative: t })),
          s = sl();
        if (null == e) {
          o.search = s.search;
          let e = new URLSearchParams(o.search),
            t = e.getAll("index");
          if (t.some((e) => "" === e)) {
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let n = e.toString();
            o.search = n ? "?".concat(n) : "";
          }
        }
        (e && "." !== e) ||
          !i.route.index ||
          (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index");
        "/" !== n &&
          (o.pathname = "/" === o.pathname ? n : Xs([n, o.pathname]));
        return ws(o);
      })(d, { relative: p }),
      x = "get" === u.toLowerCase() ? "get" : "post",
      w = "string" === typeof d && iu.test(d);
    return r.createElement(
      "form",
      c(
        c(
          {
            ref: t,
            method: x,
            action: b,
            onSubmit: o
              ? h
              : (e) => {
                  if ((h && h(e), e.defaultPrevented)) return;
                  e.preventDefault();
                  let t = e.nativeEvent.submitter,
                    n =
                      (null === t || void 0 === t
                        ? void 0
                        : t.getAttribute("formmethod")) || u;
                  y(t || e.currentTarget, {
                    fetcherKey: a,
                    method: n,
                    navigate: i,
                    replace: s,
                    state: l,
                    relative: p,
                    preventScrollReset: m,
                    viewTransition: g,
                  });
                },
          },
          v
        ),
        {},
        { "data-discover": w || "render" !== n ? void 0 : "true" }
      )
    );
  });
  function uu(e) {
    return "".concat(
      e,
      " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."
    );
  }
  function cu(e) {
    let t = r.useContext(Zs);
    return vs(t, uu(e)), t;
  }
  lu.displayName = "Form";
  var du = 0,
    fu = () => "__".concat(String(++du), "__");
  function hu() {
    let { router: e } = cu("useSubmit"),
      { basename: t } = r.useContext(nl),
      n = wl("useRouteId");
    return r.useCallback(
      async function (r) {
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { action: i, method: o, encType: s, formData: l, body: u } = Rl(r, t);
        if (!1 === a.navigate) {
          let t = a.fetcherKey || fu();
          await e.fetch(t, n, a.action || i, {
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || o,
            formEncType: a.encType || s,
            flushSync: a.flushSync,
          });
        } else
          await e.navigate(a.action || i, {
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || o,
            formEncType: a.encType || s,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
      },
      [e, t, n]
    );
  }
  new TextEncoder();
  var pu = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    mu = r.createContext && r.createContext(pu),
    gu = ["attr", "size", "title"];
  function vu(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
  }
  function yu() {
    return (
      (yu = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      yu.apply(this, arguments)
    );
  }
  function bu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function xu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? bu(Object(n), !0).forEach(function (t) {
            wu(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function wu(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : t + "";
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Su(e) {
    return (
      e &&
      e.map((e, t) =>
        r.createElement(e.tag, xu({ key: t }, e.attr), Su(e.child))
      )
    );
  }
  function ku(e) {
    return (t) =>
      r.createElement(Eu, yu({ attr: xu({}, e.attr) }, t), Su(e.child));
  }
  function Eu(e) {
    var t = (t) => {
      var n,
        { attr: a, size: i, title: o } = e,
        s = vu(e, gu),
        l = i || t.size || "1em";
      return (
        t.className && (n = t.className),
        e.className && (n = (n ? n + " " : "") + e.className),
        r.createElement(
          "svg",
          yu(
            { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
            t.attr,
            a,
            s,
            {
              className: n,
              style: xu(xu({ color: e.color || t.color }, t.style), e.style),
              height: l,
              width: l,
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          o && r.createElement("title", null, o),
          e.children
        )
      );
    };
    return void 0 !== mu
      ? r.createElement(mu.Consumer, null, (e) => t(e))
      : t(pu);
  }
  function Au(e) {
    return ku({
      tag: "svg",
      attr: { viewBox: "0 0 448 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Tu(e) {
    return ku({
      tag: "svg",
      attr: {
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "2",
        stroke: "currentColor",
        "aria-hidden": "true",
      },
      child: [
        {
          tag: "path",
          attr: {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 8h16M4 16h16",
          },
          child: [],
        },
      ],
    })(e);
  }
  function ju(e) {
    return ku({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z",
          },
          child: [],
        },
      ],
    })(e);
  }
  var Cu = n(950);
  const Nu = ["message"];
  const Pu = Array(12).fill(0),
    Fu = (e) => {
      let { visible: t, className: n } = e;
      return r.createElement(
        "div",
        {
          className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
          "data-visible": t,
        },
        r.createElement(
          "div",
          { className: "sonner-spinner" },
          Pu.map((e, t) =>
            r.createElement("div", {
              className: "sonner-loading-bar",
              key: "spinner-bar-".concat(t),
            })
          )
        )
      );
    },
    Ru = r.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      r.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd",
      })
    ),
    Lu = r.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      r.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd",
      })
    ),
    zu = r.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      r.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd",
      })
    ),
    Vu = r.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      r.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd",
      })
    ),
    Du = r.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      r.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      r.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    );
  let Mu = 1;
  const Iu = new (class {
      constructor() {
        (this.subscribe = (e) => (
          this.subscribers.push(e),
          () => {
            const t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1);
          }
        )),
          (this.publish = (e) => {
            this.subscribers.forEach((t) => t(e));
          }),
          (this.addToast = (e) => {
            this.publish(e), (this.toasts = [...this.toasts, e]);
          }),
          (this.create = (e) => {
            var t;
            const { message: n } = e,
              r = f(e, Nu),
              a =
                "number" === typeof (null == e ? void 0 : e.id) ||
                (null == (t = e.id) ? void 0 : t.length) > 0
                  ? e.id
                  : Mu++,
              i = this.toasts.find((e) => e.id === a),
              o = void 0 === e.dismissible || e.dismissible;
            return (
              this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
              i
                ? (this.toasts = this.toasts.map((t) =>
                    t.id === a
                      ? (this.publish(
                          c(c(c({}, t), e), {}, { id: a, title: n })
                        ),
                        c(
                          c(c({}, t), e),
                          {},
                          { id: a, dismissible: o, title: n }
                        ))
                      : t
                  ))
                : this.addToast(
                    c(c({ title: n }, r), {}, { dismissible: o, id: a })
                  ),
              a
            );
          }),
          (this.dismiss = (e) => (
            e
              ? (this.dismissedToasts.add(e),
                requestAnimationFrame(() =>
                  this.subscribers.forEach((t) => t({ id: e, dismiss: !0 }))
                ))
              : this.toasts.forEach((e) => {
                  this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
                }),
            e
          )),
          (this.message = (e, t) =>
            this.create(c(c({}, t), {}, { message: e }))),
          (this.error = (e, t) =>
            this.create(c(c({}, t), {}, { message: e, type: "error" }))),
          (this.success = (e, t) =>
            this.create(c(c({}, t), {}, { type: "success", message: e }))),
          (this.info = (e, t) =>
            this.create(c(c({}, t), {}, { type: "info", message: e }))),
          (this.warning = (e, t) =>
            this.create(c(c({}, t), {}, { type: "warning", message: e }))),
          (this.loading = (e, t) =>
            this.create(c(c({}, t), {}, { type: "loading", message: e }))),
          (this.promise = (e, t) => {
            if (!t) return;
            let n;
            void 0 !== t.loading &&
              (n = this.create(
                c(
                  c({}, t),
                  {},
                  {
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description:
                      "function" !== typeof t.description
                        ? t.description
                        : void 0,
                  }
                )
              ));
            const a = Promise.resolve(e instanceof Function ? e() : e);
            let i,
              o = void 0 !== n;
            const s = a
                .then(async (e) => {
                  i = ["resolve", e];
                  if (r.isValidElement(e))
                    (o = !1),
                      this.create({ id: n, type: "default", message: e });
                  else if (Ou(e) && !e.ok) {
                    o = !1;
                    const a =
                        "function" === typeof t.error
                          ? await t.error(
                              "HTTP error! status: ".concat(e.status)
                            )
                          : t.error,
                      i =
                        "function" === typeof t.description
                          ? await t.description(
                              "HTTP error! status: ".concat(e.status)
                            )
                          : t.description,
                      s =
                        "object" === typeof a && !r.isValidElement(a)
                          ? a
                          : { message: a };
                    this.create(c({ id: n, type: "error", description: i }, s));
                  } else if (e instanceof Error) {
                    o = !1;
                    const a =
                        "function" === typeof t.error
                          ? await t.error(e)
                          : t.error,
                      i =
                        "function" === typeof t.description
                          ? await t.description(e)
                          : t.description,
                      s =
                        "object" === typeof a && !r.isValidElement(a)
                          ? a
                          : { message: a };
                    this.create(c({ id: n, type: "error", description: i }, s));
                  } else if (void 0 !== t.success) {
                    o = !1;
                    const a =
                        "function" === typeof t.success
                          ? await t.success(e)
                          : t.success,
                      i =
                        "function" === typeof t.description
                          ? await t.description(e)
                          : t.description,
                      s =
                        "object" === typeof a && !r.isValidElement(a)
                          ? a
                          : { message: a };
                    this.create(
                      c({ id: n, type: "success", description: i }, s)
                    );
                  }
                })
                .catch(async (e) => {
                  if (((i = ["reject", e]), void 0 !== t.error)) {
                    o = !1;
                    const a =
                        "function" === typeof t.error
                          ? await t.error(e)
                          : t.error,
                      i =
                        "function" === typeof t.description
                          ? await t.description(e)
                          : t.description,
                      s =
                        "object" === typeof a && !r.isValidElement(a)
                          ? a
                          : { message: a };
                    this.create(c({ id: n, type: "error", description: i }, s));
                  }
                })
                .finally(() => {
                  o && (this.dismiss(n), (n = void 0)),
                    null == t.finally || t.finally.call(t);
                }),
              l = () =>
                new Promise((e, t) =>
                  s.then(() => ("reject" === i[0] ? t(i[1]) : e(i[1]))).catch(t)
                );
            return "string" !== typeof n && "number" !== typeof n
              ? { unwrap: l }
              : Object.assign(n, { unwrap: l });
          }),
          (this.custom = (e, t) => {
            const n = (null == t ? void 0 : t.id) || Mu++;
            return this.create(c({ jsx: e(n), id: n }, t)), n;
          }),
          (this.getActiveToasts = () =>
            this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
          (this.subscribers = []),
          (this.toasts = []),
          (this.dismissedToasts = new Set());
      }
    })(),
    Ou = (e) =>
      e &&
      "object" === typeof e &&
      "ok" in e &&
      "boolean" === typeof e.ok &&
      "status" in e &&
      "number" === typeof e.status,
    Uu = (e, t) => {
      const n = (null == t ? void 0 : t.id) || Mu++;
      return Iu.addToast(c(c({ title: e }, t), {}, { id: n })), n;
    };
  Object.assign(
    Uu,
    {
      success: Iu.success,
      info: Iu.info,
      warning: Iu.warning,
      error: Iu.error,
      custom: Iu.custom,
      message: Iu.message,
      promise: Iu.promise,
      dismiss: Iu.dismiss,
      loading: Iu.loading,
    },
    { getHistory: () => Iu.toasts, getToasts: () => Iu.getActiveToasts() }
  );
  function Bu(e) {
    return void 0 !== e.label;
  }
  !(function (e) {
    if (!e || "undefined" == typeof document) return;
    let t = document.head || document.getElementsByTagName("head")[0],
      n = document.createElement("style");
    (n.type = "text/css"),
      t.appendChild(n),
      n.styleSheet
        ? (n.styleSheet.cssText = e)
        : n.appendChild(document.createTextNode(e));
  })(
    "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
  );
  const Wu = 3,
    qu = 14;
  function Xu() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t.filter(Boolean).join(" ");
  }
  const Gu = (e) => {
    var t, n, a, i, o, s, l, u, d;
    const {
        invert: f,
        toast: h,
        unstyled: p,
        interacting: m,
        setHeights: g,
        visibleToasts: v,
        heights: y,
        index: b,
        toasts: x,
        expanded: w,
        removeToast: S,
        defaultRichColors: k,
        closeButton: E,
        style: A,
        cancelButtonStyle: T,
        actionButtonStyle: j,
        className: C = "",
        descriptionClassName: N = "",
        duration: P,
        position: F,
        gap: R,
        expandByDefault: L,
        classNames: z,
        icons: V,
        closeButtonAriaLabel: D = "Close toast",
      } = e,
      [M, I] = r.useState(null),
      [O, U] = r.useState(null),
      [B, W] = r.useState(!1),
      [q, X] = r.useState(!1),
      [G, Q] = r.useState(!1),
      [H, K] = r.useState(!1),
      [Y, J] = r.useState(!1),
      [Z, _] = r.useState(0),
      [$, ee] = r.useState(0),
      te = r.useRef(h.duration || P || 4e3),
      ne = r.useRef(null),
      re = r.useRef(null),
      ae = 0 === b,
      ie = b + 1 <= v,
      oe = h.type,
      se = !1 !== h.dismissible,
      le = h.className || "",
      ue = h.descriptionClassName || "",
      ce = r.useMemo(
        () => y.findIndex((e) => e.toastId === h.id) || 0,
        [y, h.id]
      ),
      de = r.useMemo(() => {
        var e;
        return null != (e = h.closeButton) ? e : E;
      }, [h.closeButton, E]),
      fe = r.useMemo(() => h.duration || P || 4e3, [h.duration, P]),
      he = r.useRef(0),
      pe = r.useRef(0),
      me = r.useRef(0),
      ge = r.useRef(null),
      [ve, ye] = F.split("-"),
      be = r.useMemo(
        () => y.reduce((e, t, n) => (n >= ce ? e : e + t.height), 0),
        [y, ce]
      ),
      xe = (() => {
        const [e, t] = r.useState(document.hidden);
        return (
          r.useEffect(() => {
            const e = () => {
              t(document.hidden);
            };
            return (
              document.addEventListener("visibilitychange", e),
              () => window.removeEventListener("visibilitychange", e)
            );
          }, []),
          e
        );
      })(),
      we = h.invert || f,
      Se = "loading" === oe;
    (pe.current = r.useMemo(() => ce * R + be, [ce, be])),
      r.useEffect(() => {
        te.current = fe;
      }, [fe]),
      r.useEffect(() => {
        W(!0);
      }, []),
      r.useEffect(() => {
        const e = re.current;
        if (e) {
          const t = e.getBoundingClientRect().height;
          return (
            ee(t),
            g((e) => [
              { toastId: h.id, height: t, position: h.position },
              ...e,
            ]),
            () => g((e) => e.filter((e) => e.toastId !== h.id))
          );
        }
      }, [g, h.id]),
      r.useLayoutEffect(() => {
        if (!B) return;
        const e = re.current,
          t = e.style.height;
        e.style.height = "auto";
        const n = e.getBoundingClientRect().height;
        (e.style.height = t),
          ee(n),
          g((e) =>
            e.find((e) => e.toastId === h.id)
              ? e.map((e) =>
                  e.toastId === h.id ? c(c({}, e), {}, { height: n }) : e
                )
              : [{ toastId: h.id, height: n, position: h.position }, ...e]
          );
      }, [B, h.title, h.description, g, h.id]);
    const ke = r.useCallback(() => {
      X(!0),
        _(pe.current),
        g((e) => e.filter((e) => e.toastId !== h.id)),
        setTimeout(() => {
          S(h);
        }, 200);
    }, [h, S, g, pe]);
    r.useEffect(() => {
      if (
        (h.promise && "loading" === oe) ||
        h.duration === 1 / 0 ||
        "loading" === h.type
      )
        return;
      let e;
      return (
        w || m || xe
          ? (() => {
              if (me.current < he.current) {
                const e = new Date().getTime() - he.current;
                te.current = te.current - e;
              }
              me.current = new Date().getTime();
            })()
          : te.current !== 1 / 0 &&
            ((he.current = new Date().getTime()),
            (e = setTimeout(() => {
              null == h.onAutoClose || h.onAutoClose.call(h, h), ke();
            }, te.current))),
        () => clearTimeout(e)
      );
    }, [w, m, h, oe, xe, ke]),
      r.useEffect(() => {
        h.delete && ke();
      }, [ke, h.delete]);
    const Ee =
      h.icon ||
      (null == V ? void 0 : V[oe]) ||
      ((e) => {
        switch (e) {
          case "success":
            return Ru;
          case "info":
            return zu;
          case "warning":
            return Lu;
          case "error":
            return Vu;
          default:
            return null;
        }
      })(oe);
    var Ae, Te;
    return r.createElement(
      "li",
      {
        tabIndex: 0,
        ref: re,
        className: Xu(
          C,
          le,
          null == z ? void 0 : z.toast,
          null == h || null == (t = h.classNames) ? void 0 : t.toast,
          null == z ? void 0 : z.default,
          null == z ? void 0 : z[oe],
          null == h || null == (n = h.classNames) ? void 0 : n[oe]
        ),
        "data-sonner-toast": "",
        "data-rich-colors": null != (Ae = h.richColors) ? Ae : k,
        "data-styled": !Boolean(h.jsx || h.unstyled || p),
        "data-mounted": B,
        "data-promise": Boolean(h.promise),
        "data-swiped": Y,
        "data-removed": q,
        "data-visible": ie,
        "data-y-position": ve,
        "data-x-position": ye,
        "data-index": b,
        "data-front": ae,
        "data-swiping": G,
        "data-dismissible": se,
        "data-type": oe,
        "data-invert": we,
        "data-swipe-out": H,
        "data-swipe-direction": O,
        "data-expanded": Boolean(w || (L && B)),
        style: c(
          c(
            {
              "--index": b,
              "--toasts-before": b,
              "--z-index": x.length - b,
              "--offset": "".concat(q ? Z : pe.current, "px"),
              "--initial-height": L ? "auto" : "".concat($, "px"),
            },
            A
          ),
          h.style
        ),
        onDragEnd: () => {
          Q(!1), I(null), (ge.current = null);
        },
        onPointerDown: (e) => {
          !Se &&
            se &&
            ((ne.current = new Date()),
            _(pe.current),
            e.target.setPointerCapture(e.pointerId),
            "BUTTON" !== e.target.tagName &&
              (Q(!0), (ge.current = { x: e.clientX, y: e.clientY })));
        },
        onPointerUp: () => {
          var e, t, n;
          if (H || !se) return;
          ge.current = null;
          const r = Number(
              (null == (e = re.current)
                ? void 0
                : e.style
                    .getPropertyValue("--swipe-amount-x")
                    .replace("px", "")) || 0
            ),
            a = Number(
              (null == (t = re.current)
                ? void 0
                : t.style
                    .getPropertyValue("--swipe-amount-y")
                    .replace("px", "")) || 0
            ),
            i =
              new Date().getTime() -
              (null == (n = ne.current) ? void 0 : n.getTime()),
            o = "x" === M ? r : a,
            s = Math.abs(o) / i;
          if (Math.abs(o) >= 45 || s > 0.11)
            return (
              _(pe.current),
              null == h.onDismiss || h.onDismiss.call(h, h),
              U("x" === M ? (r > 0 ? "right" : "left") : a > 0 ? "down" : "up"),
              ke(),
              void K(!0)
            );
          var l, u;
          null == (l = re.current) ||
            l.style.setProperty("--swipe-amount-x", "0px"),
            null == (u = re.current) ||
              u.style.setProperty("--swipe-amount-y", "0px"),
            J(!1),
            Q(!1),
            I(null);
        },
        onPointerMove: (t) => {
          var n, r, a;
          if (!ge.current || !se) return;
          if (
            (null == (n = window.getSelection())
              ? void 0
              : n.toString().length) > 0
          )
            return;
          const i = t.clientY - ge.current.y,
            o = t.clientX - ge.current.x;
          var s;
          const l =
            null != (s = e.swipeDirections)
              ? s
              : (function (e) {
                  const [t, n] = e.split("-"),
                    r = [];
                  return t && r.push(t), n && r.push(n), r;
                })(F);
          !M &&
            (Math.abs(o) > 1 || Math.abs(i) > 1) &&
            I(Math.abs(o) > Math.abs(i) ? "x" : "y");
          let u = { x: 0, y: 0 };
          const c = (e) => 1 / (1.5 + Math.abs(e) / 20);
          if ("y" === M) {
            if (l.includes("top") || l.includes("bottom"))
              if (
                (l.includes("top") && i < 0) ||
                (l.includes("bottom") && i > 0)
              )
                u.y = i;
              else {
                const e = i * c(i);
                u.y = Math.abs(e) < Math.abs(i) ? e : i;
              }
          } else if ("x" === M && (l.includes("left") || l.includes("right")))
            if ((l.includes("left") && o < 0) || (l.includes("right") && o > 0))
              u.x = o;
            else {
              const e = o * c(o);
              u.x = Math.abs(e) < Math.abs(o) ? e : o;
            }
          (Math.abs(u.x) > 0 || Math.abs(u.y) > 0) && J(!0),
            null == (r = re.current) ||
              r.style.setProperty("--swipe-amount-x", "".concat(u.x, "px")),
            null == (a = re.current) ||
              a.style.setProperty("--swipe-amount-y", "".concat(u.y, "px"));
        },
      },
      de && !h.jsx && "loading" !== oe
        ? r.createElement(
            "button",
            {
              "aria-label": D,
              "data-disabled": Se,
              "data-close-button": !0,
              onClick:
                Se || !se
                  ? () => {}
                  : () => {
                      ke(), null == h.onDismiss || h.onDismiss.call(h, h);
                    },
              className: Xu(
                null == z ? void 0 : z.closeButton,
                null == h || null == (a = h.classNames) ? void 0 : a.closeButton
              ),
            },
            null != (Te = null == V ? void 0 : V.close) ? Te : Du
          )
        : null,
      (oe || h.icon || h.promise) &&
        null !== h.icon &&
        (null !== (null == V ? void 0 : V[oe]) || h.icon)
        ? r.createElement(
            "div",
            {
              "data-icon": "",
              className: Xu(
                null == z ? void 0 : z.icon,
                null == h || null == (i = h.classNames) ? void 0 : i.icon
              ),
            },
            h.promise || ("loading" === h.type && !h.icon)
              ? h.icon ||
                  (function () {
                    var e, t;
                    return (null == V ? void 0 : V.loading)
                      ? r.createElement(
                          "div",
                          {
                            className: Xu(
                              null == z ? void 0 : z.loader,
                              null == h || null == (t = h.classNames)
                                ? void 0
                                : t.loader,
                              "sonner-loader"
                            ),
                            "data-visible": "loading" === oe,
                          },
                          V.loading
                        )
                      : r.createElement(Fu, {
                          className: Xu(
                            null == z ? void 0 : z.loader,
                            null == h || null == (e = h.classNames)
                              ? void 0
                              : e.loader
                          ),
                          visible: "loading" === oe,
                        });
                  })()
              : null,
            "loading" !== h.type ? Ee : null
          )
        : null,
      r.createElement(
        "div",
        {
          "data-content": "",
          className: Xu(
            null == z ? void 0 : z.content,
            null == h || null == (o = h.classNames) ? void 0 : o.content
          ),
        },
        r.createElement(
          "div",
          {
            "data-title": "",
            className: Xu(
              null == z ? void 0 : z.title,
              null == h || null == (s = h.classNames) ? void 0 : s.title
            ),
          },
          h.jsx ? h.jsx : "function" === typeof h.title ? h.title() : h.title
        ),
        h.description
          ? r.createElement(
              "div",
              {
                "data-description": "",
                className: Xu(
                  N,
                  ue,
                  null == z ? void 0 : z.description,
                  null == h || null == (l = h.classNames)
                    ? void 0
                    : l.description
                ),
              },
              "function" === typeof h.description
                ? h.description()
                : h.description
            )
          : null
      ),
      r.isValidElement(h.cancel)
        ? h.cancel
        : h.cancel && Bu(h.cancel)
        ? r.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: h.cancelButtonStyle || T,
              onClick: (e) => {
                Bu(h.cancel) &&
                  se &&
                  (null == h.cancel.onClick ||
                    h.cancel.onClick.call(h.cancel, e),
                  ke());
              },
              className: Xu(
                null == z ? void 0 : z.cancelButton,
                null == h || null == (u = h.classNames)
                  ? void 0
                  : u.cancelButton
              ),
            },
            h.cancel.label
          )
        : null,
      r.isValidElement(h.action)
        ? h.action
        : h.action && Bu(h.action)
        ? r.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: h.actionButtonStyle || j,
              onClick: (e) => {
                Bu(h.action) &&
                  (null == h.action.onClick ||
                    h.action.onClick.call(h.action, e),
                  e.defaultPrevented || ke());
              },
              className: Xu(
                null == z ? void 0 : z.actionButton,
                null == h || null == (d = h.classNames)
                  ? void 0
                  : d.actionButton
              ),
            },
            h.action.label
          )
        : null
    );
  };
  function Qu() {
    if ("undefined" === typeof window) return "ltr";
    if ("undefined" === typeof document) return "ltr";
    const e = document.documentElement.getAttribute("dir");
    return "auto" !== e && e
      ? e
      : window.getComputedStyle(document.documentElement).direction;
  }
  function Hu(e, t) {
    const n = {};
    return (
      [e, t].forEach((e, t) => {
        const r = 1 === t,
          a = r ? "--mobile-offset" : "--offset",
          i = r ? "16px" : "24px";
        function o(e) {
          ["top", "right", "bottom", "left"].forEach((t) => {
            n["".concat(a, "-").concat(t)] =
              "number" === typeof e ? "".concat(e, "px") : e;
          });
        }
        "number" === typeof e || "string" === typeof e
          ? o(e)
          : "object" === typeof e
          ? ["top", "right", "bottom", "left"].forEach((t) => {
              void 0 === e[t]
                ? (n["".concat(a, "-").concat(t)] = i)
                : (n["".concat(a, "-").concat(t)] =
                    "number" === typeof e[t] ? "".concat(e[t], "px") : e[t]);
            })
          : o(i);
      }),
      n
    );
  }
  const Ku = r.forwardRef(function (e, t) {
    const {
        invert: n,
        position: a = "bottom-right",
        hotkey: i = ["altKey", "KeyT"],
        expand: o,
        closeButton: s,
        className: l,
        offset: u,
        mobileOffset: d,
        theme: f = "light",
        richColors: h,
        duration: p,
        style: m,
        visibleToasts: g = Wu,
        toastOptions: v,
        dir: y = Qu(),
        gap: b = qu,
        icons: x,
        containerAriaLabel: w = "Notifications",
      } = e,
      [S, k] = r.useState([]),
      E = r.useMemo(
        () =>
          Array.from(
            new Set(
              [a].concat(S.filter((e) => e.position).map((e) => e.position))
            )
          ),
        [S, a]
      ),
      [A, T] = r.useState([]),
      [j, C] = r.useState(!1),
      [N, P] = r.useState(!1),
      [F, R] = r.useState(
        "system" !== f
          ? f
          : "undefined" !== typeof window &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      ),
      L = r.useRef(null),
      z = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      V = r.useRef(null),
      D = r.useRef(!1),
      M = r.useCallback((e) => {
        k((t) => {
          var n;
          return (
            (null == (n = t.find((t) => t.id === e.id)) ? void 0 : n.delete) ||
              Iu.dismiss(e.id),
            t.filter((t) => {
              let { id: n } = t;
              return n !== e.id;
            })
          );
        });
      }, []);
    return (
      r.useEffect(
        () =>
          Iu.subscribe((e) => {
            e.dismiss
              ? requestAnimationFrame(() => {
                  k((t) =>
                    t.map((t) =>
                      t.id === e.id ? c(c({}, t), {}, { delete: !0 }) : t
                    )
                  );
                })
              : setTimeout(() => {
                  Cu.flushSync(() => {
                    k((t) => {
                      const n = t.findIndex((t) => t.id === e.id);
                      return -1 !== n
                        ? [
                            ...t.slice(0, n),
                            c(c({}, t[n]), e),
                            ...t.slice(n + 1),
                          ]
                        : [e, ...t];
                    });
                  });
                });
          }),
        [S]
      ),
      r.useEffect(() => {
        if ("system" !== f) return void R(f);
        if (
          ("system" === f &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? R("dark")
              : R("light")),
          "undefined" === typeof window)
        )
          return;
        const e = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          e.addEventListener("change", (e) => {
            let { matches: t } = e;
            R(t ? "dark" : "light");
          });
        } catch (t) {
          e.addListener((e) => {
            let { matches: t } = e;
            try {
              R(t ? "dark" : "light");
            } catch (Kc) {
              console.error(Kc);
            }
          });
        }
      }, [f]),
      r.useEffect(() => {
        S.length <= 1 && C(!1);
      }, [S]),
      r.useEffect(() => {
        const e = (e) => {
          var t;
          var n;
          i.every((t) => e[t] || e.code === t) &&
            (C(!0), null == (n = L.current) || n.focus());
          "Escape" !== e.code ||
            (document.activeElement !== L.current &&
              !(null == (t = L.current)
                ? void 0
                : t.contains(document.activeElement))) ||
            C(!1);
        };
        return (
          document.addEventListener("keydown", e),
          () => document.removeEventListener("keydown", e)
        );
      }, [i]),
      r.useEffect(() => {
        if (L.current)
          return () => {
            V.current &&
              (V.current.focus({ preventScroll: !0 }),
              (V.current = null),
              (D.current = !1));
          };
      }, [L.current]),
      r.createElement(
        "section",
        {
          ref: t,
          "aria-label": "".concat(w, " ").concat(z),
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        E.map((t, a) => {
          var i;
          const [f, w] = t.split("-");
          return S.length
            ? r.createElement(
                "ol",
                {
                  key: t,
                  dir: "auto" === y ? Qu() : y,
                  tabIndex: -1,
                  ref: L,
                  className: l,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": F,
                  "data-y-position": f,
                  "data-lifted": j && S.length > 1 && !o,
                  "data-x-position": w,
                  style: c(
                    c(
                      {
                        "--front-toast-height": "".concat(
                          (null == (i = A[0]) ? void 0 : i.height) || 0,
                          "px"
                        ),
                        "--width": "".concat(356, "px"),
                        "--gap": "".concat(b, "px"),
                      },
                      m
                    ),
                    Hu(u, d)
                  ),
                  onBlur: (e) => {
                    D.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((D.current = !1),
                      V.current &&
                        (V.current.focus({ preventScroll: !0 }),
                        (V.current = null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement &&
                      "false" === e.target.dataset.dismissible) ||
                      D.current ||
                      ((D.current = !0), (V.current = e.relatedTarget));
                  },
                  onMouseEnter: () => C(!0),
                  onMouseMove: () => C(!0),
                  onMouseLeave: () => {
                    N || C(!1);
                  },
                  onDragEnd: () => C(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement &&
                      "false" === e.target.dataset.dismissible) ||
                      P(!0);
                  },
                  onPointerUp: () => P(!1),
                },
                S.filter(
                  (e) => (!e.position && 0 === a) || e.position === t
                ).map((a, i) => {
                  var l, u;
                  return r.createElement(Gu, {
                    key: a.id,
                    icons: x,
                    index: i,
                    toast: a,
                    defaultRichColors: h,
                    duration:
                      null != (l = null == v ? void 0 : v.duration) ? l : p,
                    className: null == v ? void 0 : v.className,
                    descriptionClassName:
                      null == v ? void 0 : v.descriptionClassName,
                    invert: n,
                    visibleToasts: g,
                    closeButton:
                      null != (u = null == v ? void 0 : v.closeButton) ? u : s,
                    interacting: N,
                    position: t,
                    style: null == v ? void 0 : v.style,
                    unstyled: null == v ? void 0 : v.unstyled,
                    classNames: null == v ? void 0 : v.classNames,
                    cancelButtonStyle: null == v ? void 0 : v.cancelButtonStyle,
                    actionButtonStyle: null == v ? void 0 : v.actionButtonStyle,
                    closeButtonAriaLabel:
                      null == v ? void 0 : v.closeButtonAriaLabel,
                    removeToast: M,
                    toasts: S.filter((e) => e.position == a.position),
                    heights: A.filter((e) => e.position == a.position),
                    setHeights: T,
                    expandByDefault: o,
                    gap: b,
                    expanded: j,
                    swipeDirections: e.swipeDirections,
                  });
                })
              )
            : null;
        })
      )
    );
  });
  function Yu(e) {
    return ku({
      tag: "svg",
      attr: { viewBox: "0 0 640 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Ju(e) {
    return ku({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Zu() {
    const [e, t] = (0, r.useState)(!1);
    return (0, ga.jsxs)("div", {
      className:
        "max-w-[1440px] mx-auto relative z-[200] md:px-[2.5rem] px-[1rem]",
      children: [
        (0, ga.jsxs)("div", {
          className: "flex justify-between items-center h-[86px]",
          children: [
            (0, ga.jsx)("div", {
              className: "",
              children: (0, ga.jsx)("img", {
                className: "w-[70px]",
                src: us,
                alt: "auralex",
              }),
            }),
            (0, ga.jsxs)("nav", {
              className:
                "lg:flex hidden gap-[2rem] items-center text-sm text-[#C2C2C2] font-medium pb-1",
              children: [
                (0, ga.jsxs)("a", {
                  href: "#home",
                  className: "hover:text-white transition-colors duration-300",
                  children: [" ", (0, ga.jsx)("h5", { children: "Home" })],
                }),
                (0, ga.jsxs)("a", {
                  href: "#about",
                  className: "hover:text-white transition-colors duration-300",
                  children: [" ", (0, ga.jsx)("h5", { children: "About" })],
                }),
                (0, ga.jsxs)("a", {
                  href: "#feauture",
                  className: "hover:text-white transition-colors duration-300",
                  children: [" ", (0, ga.jsx)("h5", { children: "Feature" })],
                }),
                (0, ga.jsxs)("a", {
                  href: "#faq",
                  className: "hover:text-white transition-colors duration-300",
                  children: [" ", (0, ga.jsx)("h5", { children: "FAQ" })],
                }),
                (0, ga.jsx)(ou, {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  to: "https://auralex-ai.gitbook.io/auralex-ai",
                  className: "hover:text-white transition-colors duration-300",
                  children: (0, ga.jsx)("h5", { children: "Whitepaper" }),
                }),
                (0, ga.jsx)("a", {
                  className:
                    "cursor-pointer hover:text-white transition-colors duration-300",
                  href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, ga.jsx)("h5", { children: "Chart" }),
                }),
              ],
            }),
            (0, ga.jsx)("button", {
              className: "lg:hidden text-white",
              onClick: () => t(!e),
              children: e
                ? (0, ga.jsx)(ju, { size: 26 })
                : (0, ga.jsx)(Tu, { size: 26 }),
            }),
            (0, ga.jsxs)("div", {
              className:
                "md:flex hidden gap-4 items-center md:pb-0 pb-5 text-white",
              children: [
                (0, ga.jsx)("a", {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                  target: "_blank",
                  children: (0, ga.jsx)("button", {
                    className:
                      "bg-[#ffffff1f] hover:bg-[#ffffff3d] hover:scale-105 hover:shadow-lg backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium transition-all ease-linear duration-[250ms]",
                    children: "Buy Now",
                  }),
                }),
                (0, ga.jsx)("a", {
                  href: "https://x.com/Auralexaieth",
                  className:
                    "hover:text-[#ff6512] transition-colors duration-300 transform hover:scale-110",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, ga.jsx)(Ju, { size: 24 }),
                }),
                (0, ga.jsx)("a", {
                  href: "https://t.me/Auralexai",
                  className:
                    "hover:text-[#ff6512] transition-colors duration-300 transform hover:scale-110",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, ga.jsx)(Au, { size: 24 }),
                }),
              ],
            }),
          ],
        }),
        (0, ga.jsx)("div", {
          className:
            "lg:hidden absolute top-[86px] w-[200px] rounded-[24px] right-4 bg-[#1a1a1a] border-t border-[#ffffff1f] transform transition-all duration-300 ease-in-out ".concat(
              e
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            ),
          children: (0, ga.jsxs)("div", {
            className: "flex flex-col gap-4 p-4",
            children: [
              (0, ga.jsx)("a", {
                href: "#home",
                className: "text-[#C2C2C2] hover:text-white transition-colors",
                children: (0, ga.jsx)("h5", { children: "Home" }),
              }),
              (0, ga.jsx)("a", {
                href: "#about",
                className: "text-[#C2C2C2] hover:text-white transition-colors",
                children: (0, ga.jsx)("h5", { children: "About" }),
              }),
              (0, ga.jsx)("a", {
                href: "#feauture",
                className: "text-[#C2C2C2] hover:text-white transition-colors",
                children: (0, ga.jsx)("h5", { children: "Feature" }),
              }),
              (0, ga.jsx)("a", {
                href: "#faq",
                className: "text-[#C2C2C2] hover:text-white transition-colors",
                children: (0, ga.jsx)("h5", { children: "FAQ" }),
              }),
              (0, ga.jsx)(ou, {
                target: "_blank",
                rel: "noopener noreferrer",
                to: "https://auralex-ai.gitbook.io/auralex-ai",
                className: "text-[#C2C2C2] hover:text-white transition-colors",
                children: (0, ga.jsx)("h5", { children: "Whitepaper" }),
              }),
              (0, ga.jsx)("a", {
                className: "text-[#C2C2C2] hover:text-white transition-colors",
                href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, ga.jsx)("h5", { children: "Chart" }),
              }),
              (0, ga.jsxs)("div", {
                className: "flex gap-4 items-center md:pb-0 pb-5 text-white",
                children: [
                  (0, ga.jsx)("a", {
                    href: "https://x.com/Auralexaieth",
                    className:
                      "hover:text-[#ff6512] transition-colors duration-300 transform hover:scale-110",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, ga.jsx)(Ju, { size: 24 }),
                  }),
                  (0, ga.jsx)("a", {
                    href: "https://t.me/Auralexai",
                    className:
                      "hover:text-[#ff6512] transition-colors duration-300 transform hover:scale-110",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, ga.jsx)(Au, { size: 24 }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }
  const _u = n.p + "static/media/token1.94325798601c45345684.png",
    $u = n.p + "static/media/token2.c0dbeacb9025c3979531.png",
    ec = n.p + "static/media/dashboard.5294d390c5a4ea244521.png",
    tc = n.p + "static/media/CardBodyBlurEffects.037b73759e88c7b143fc.png",
    nc = n.p + "static/media/Gradient.9808f8bfe595e364b9df.avif";
  function rc() {
    return (0, ga.jsxs)("div", {
      id: "home",
      className: "relative  overflow-hidden ",
      children: [
        (0, ga.jsx)(Zu, {}),
        (0, ga.jsx)(ls.img, {
          initial: { opacity: 0, x: 100 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !1 },
          transition: { duration: 0.8, delay: 0.2 },
          className:
            "absolute md:w-[32rem] w-[90vw] top-[-10rem] rotate-[12deg] right-[-11rem] md:right-[-6rem]",
          src: _u,
        }),
        (0, ga.jsxs)("div", {
          className:
            "md:pt-[87px] pt-[40px] flex flex-col items-center relative z-[1] lg:px-0 px-[1rem] ",
          children: [
            (0, ga.jsxs)("div", {
              className: "flex flex-col items-center gap-[2.5rem]",
              children: [
                (0, ga.jsx)("div", {
                  className: "flex flex-col gap-[1rem] items-center",
                  children: (0, ga.jsxs)(ls.h1, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !1 },
                    transition: { duration: 0.8, ease: "easeOut" },
                    className:
                      "lg:text-[5rem] md:text-[4rem] text-[3rem] font-medium leading-[1] text-white text-center",
                    children: [
                      "Unleash the Future of ",
                      (0, ga.jsx)("br", { className: "" }),
                      " Crypto Trading with AI",
                    ],
                  }),
                }),
                (0, ga.jsxs)("div", {
                  className:
                    "flex md:flex-row items-center flex-col gap-4 justify-center",
                  children: [
                    (0, ga.jsx)("a", {
                      href: "https://app.auralexai.com",
                      target: "_blank",
                      children: (0, ga.jsx)(ls.button, {
                        whileHover: {
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 2px 15px 6px #ffb87666",
                        },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                        className:
                          "h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] text-[.875rem] font-medium text-black",
                        children: "Ignite your Trading: Enter Dapp",
                      }),
                    }),
                    (0, ga.jsx)("a", { href: "" }),
                  ],
                }),
                (0, ga.jsx)("div", { className: "md:mt-[4.25rem] mt-[4rem] " }),
                " ",
              ],
            }),
            (0, ga.jsxs)("div", {
              className: "relative rounded-[1.125rem]   ",
              children: [
                (0, ga.jsx)("div", {
                  className:
                    "absolute md:auto w-[40rem] inset-0 rounded-[1.125rem] z-[3] backdrop-blur-[64px] md:pl-0 pl-[3rem]",
                }),
                (0, ga.jsx)(ls.img, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !1 },
                  transition: { duration: 1, delay: 0.4 },
                  className:
                    "md:w-[1120px] w-[40rem] md:pl-0 pl-[3rem] relative z-[3] rounded-[1.125rem]",
                  src: ec,
                  alt: "dashboard",
                }),
                (0, ga.jsx)(ls.img, {
                  initial: { opacity: 0, x: -100 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !1 },
                  transition: { duration: 0.8, delay: 0.6 },
                  className:
                    "absolute md:w-[35.5rem] w-[70vw] rotate-[12rem] top-[10vw] md:top-[-5rem] md:left-[-20rem] left-[-26vw]",
                  src: $u,
                  alt: "coin1",
                }),
                (0, ga.jsx)(ls.img, {
                  initial: { opacity: 0, x: -50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !1 },
                  transition: { duration: 0.8, delay: 0.8 },
                  className:
                    "absolute md:w-[16.25rem] w-[9.25rem] md:top-[40%] top-[30%] md:left-[-5rem] left-0 z-[4] backdrop-blur-[64px]",
                  src: tc,
                  alt: "coin1",
                }),
                (0, ga.jsx)(ls.img, {
                  initial: { opacity: 0, x: 50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !1 },
                  transition: { duration: 0.4, delay: 0.2 },
                  className:
                    "md:flex hidden absolute w-[11.25rem] top-[15%] right-[-3rem] z-[4] backdrop-blur-[64px] ",
                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAADUCAMAAACh6si1AAACwVBMVEX///////////////8AAAD///////////////////////////////////////////////8BAQH///////////////////8BAQEFBQX///8ICAj///83NzcBAQEDAwM7OzsDAwMUFBQfHx8QEBD///8HBwcDAwP///8gICAhISEBAQEBAQERERH///8AAAAkJCQjIyNVVVUlJSUCAgIhISEhISEnJychISEKCgotLS3///9bNgpCJwcHBwcEBARzRQwgICAjIyMjIyP///8xMTH4kxvWgBaqZhIjIyPmihnmiRkRCwImJiYAAAD////3kxomoXv/ZgBNTU0gICCMjIw0NDQUFBQ5OTlDQ0M8PDuS0L0EBAQQEBAqKirk8++np6e+vr7/s3/YgRff398cHBwxMTEPCAELCwsfEgOu280ijWweHh4HBwf5rlPy8vI/Pz/v7++AgID4oTfU1NQYGBgCCgjfWQD4mijoihj816mgoKBgYGAkl3T95Mb7yYz6u3BISEgRRjaaXBCRkZEdeVz6tWEgDQD+8eP+69T95MX80Jq5bhQNDQ3/+PHo6OjNzc2amppwcHBQUFAVW0UFFA/93bj/n2BEREQKKB98Sg5dNwufQAC74tbPz89cuZwmJibj4+PJ5963t7avr693xa1UVFPJdxU+JQhPs5SFhYU0p4P5p0UTPTAdHR2LUw9sQAtNLghQIADx+ff+8eKNkY8iTD8TUD4TUD0hKCarZhjPUwCPOQBgJgBqv6RnaGjvXwCg1sXFxcVBrYv7wn8lkXAhgmQjaVMjX0y/TQD4+PiFyrWcnJz7wn54eHgdb1YMMiaAMwB/MwBAGgBfX18hMy0HHhcvGQOvRgDW7ebb29tPT082SUPokSeLUg/vYABwLQBgJwDX7ebu28N3tKEleV7vkFB8VyrYiCVONRZvLQBwLAAJPtBFAAAATXRSTlMFC2kRABQZFhgNEw9QEEQeN+9dCWMqPeCCBmNWFd+hJJI0JEQxcsEk78HRwVRK74KhFXKx4NBjsWNEXO/vc3Lv4LGSQzTv7+iw7+/vcy/AA8AAABduSURBVHja7NpRb5swFIbhc3B9bEMY1c5urN1O2tX+/98bjsmsgBYctVgt/Z4i+5D26pWVEin0sqbB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",
                  alt: "coin1",
                }),
                (0, ga.jsx)(ls.img, {
                  initial: { opacity: 0, filter: "blur(20px)" },
                  whileInView: { opacity: 1, filter: "blur(0px)" },
                  viewport: { once: !1 },
                  transition: { duration: 1.2, delay: 0.4 },
                  className: "absolute w-[39rem] -bottom-[20%] right-[-18%] ",
                  src: nc,
                  alt: "coin1",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  const ac =
      n.p + "static/media/1 Real-Time Trending Tokens.3993bc1d76f395bfed5a.png",
    ic = n.p + "static/media/2 Uncover.45db74e54dac5fea631e.png",
    oc =
      n.p + "static/media/3 Deep Dive Token Analytics.c686e083aa35d8f536e6.png",
    sc =
      n.p +
      "static/media/4 Smarter Trades, Guaranteed.683483a44f7131f182ea.png",
    lc = n.p + "static/media/5 AI Price Predictions.469a975fe5c7df2e1d01.png",
    uc =
      n.p +
      "static/media/6 Custom Watchlists & Real-Time Alerts.9884e8a2f3fa531f9d46.png",
    cc =
      n.p + "static/media/1 Real Time Trending Token.b37b81750f1e0565575a.mp4",
    dc =
      n.p +
      "static/media/Ai-Driven Deep Dive Token Analytics.5a7dcf4962c3bdb428b9.mp4",
    fc =
      n.p + "static/media/Smarter Trades, Guaranteed.1f9647499e91cfc91236.mp4",
    hc = n.p + "static/media/AI Price Predictions.eff0a4a780559c1776a1.mp4",
    pc =
      n.p +
      "static/media/Custom Watchlists & Real Time Alerts.76ae4885b66168ce577c.mp4",
    mc =
      n.p + "static/media/Uncover The Crypto Universe.8e2ab22894496167222c.mp4";
  function gc() {
    const [e, t] = (0, r.useState)(null),
      n = (e) => {
        t(e);
      },
      a = () => {
        t(null);
      },
      i = {
        initial: { scale: 0.8, opacity: 0.5 },
        animate: { scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] },
        transition: { duration: 3, ease: "easeInOut", repeat: 1 / 0 },
      },
      o = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !1 },
        transition: { duration: 0.5, ease: "easeOut" },
      },
      s = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !1 },
        transition: { duration: 0.5, ease: "easeOut" },
      },
      l = [
        {
          image: ac,
          video: cc,
          title: "Real-Time Trending Tokens",
          description:
            "Don't get left behind. Our dynamic carousel spotlights the hottest tokens, tracking 24-hour price surges, volume spikes, and social buzz. Catch the next moonshot before it takes off. CA:0xcomingsoon",
        },
        {
          image: ic,
          video: mc,
          title: "Uncover the Crypto Universe: Explore 10,000+ Tokens",
          description:
            "Dive deep into the crypto ocean. Filter by market cap, chains, price, and more. Sort by rank, price changes, and volume. Your data, your way. Includes data columns: Rank, Token Name & Symbol, Current Price, 24h/7d Change, Market Cap, 24h Volume, Circulating Supply.",
        },
        {
          image: oc,
          video: dc,
          title: "AI-Driven Deep Dive Token Analytics",
          description:
            "Go beyond the surface. Our dashboard integrates TradingView charts, key metrics, and on-chain data. Get the full picture, from technicals to social sentiment. The dashboard provides detailed insights, including token information such as contract details, descriptions, links, distribution, launch data, and supply metrics. It also offers technical analytics like RSI, MACD, moving averages, and volume profiles, combined with sentiment analytics.",
        },
        {
          image: sc,
          video: fc,
          title: "Smarter Trades, Guaranteed",
          listItems: [
            {
              subheading: "Pattern Recognition",
              description:
                "Detect and analyze Bull/Bear Flags, Double Tops/Bottoms, Head & Shoulders, and Support/Resistance levels to anticipate market moves.",
            },
            {
              subheading: "Candlestick Analysis",
              description:
                "Evaluate trend strength, volume dynamics, and reversal points to make informed decisions.",
            },
            {
              subheading: "Market Intelligence",
              description:
                "Leverage sentiment analysis and news impact to stay ahead of market trends.",
            },
          ],
          description:
            "Let our AI be your guide. Using advanced tools like real-time market intelligence and cutting-edge analytics, Auralex AI identifies opportunities and risks, so you can trade with confidence.",
        },
        {
          image: lc,
          title: "AI Price Predictions",
          video: hc,
          description:
            "Harness the power of predictive analytics. Our AI algorithms analyze historical data and market trends to provide you with potential price movements, giving you a strategic advantage.",
        },
        {
          image: uc,
          title: "Custom Watchlists & Real-Time Alerts",
          video: pc,
          description:
            "Never miss a beat. Create personalized watchlists and set up custom alerts for price movements, volume changes, and other key metrics. Stay on top of your portfolio, effortlessly.",
        },
      ];
    return (0, ga.jsxs)("div", {
      id: "feauture",
      className: "mt-[164px] ",
      children: [
        (0, ga.jsxs)(
          ls.div,
          c(
            c(
              {},
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !1 },
                transition: { duration: 0.5, ease: "easeOut" },
              }
            ),
            {},
            {
              className: "flex justify-center items-center relative",
              children: [
                (0, ga.jsxs)("h2", {
                  className:
                    "md:text-[3.25rem] text-[2.375rem] text-white leading-[1.2] md:max-w-[100%] max-w-[23rem] text-center relative z-[50]",
                  children: [
                    "Your Arsenal of Intelligent",
                    (0, ga.jsx)("br", { className: "md:flex hidden" }),
                    " Trading Tools",
                  ],
                }),
                (0, ga.jsx)(
                  ls.div,
                  c(
                    c({}, i),
                    {},
                    {
                      className:
                        "absolute top-0 bg-[#ff6512] blur-[100px] w-[200px] md:w-[500px] h-[70px] rounded-full z-[10000]",
                    }
                  )
                ),
              ],
            }
          )
        ),
        (0, ga.jsx)("div", {
          className: "max-w-[1440px] mx-auto mt-[6.5rem] overflow-hidden",
          children: (0, ga.jsx)("div", {
            className:
              "lg:px-[2.5rem] flex flex-col lg:gap-[150px] gap-16 px-[1rem]",
            children: l.map((e, t) =>
              (0, ga.jsxs)(
                "div",
                {
                  onMouseEnter: () => n(t),
                  onMouseLeave: a,
                  className:
                    "relative flex md:flex-row flex-col lg:items-start lg:gap-[5rem] md:gap-[2rem] gap-[3rem] ".concat(
                      t % 2 === 0 ? "md:flex-row-reverse" : ""
                    ),
                  children: [
                    (0, ga.jsxs)(
                      ls.div,
                      c(
                        c({}, t % 2 === 0 ? o : s),
                        {},
                        {
                          className:
                            "md:w-1/2 flex gap-2 items-start flex-col z-[3] relative text-white md:order-1",
                          children: [
                            (0, ga.jsx)("h3", {
                              className:
                                "lg:text-[3.25rem] text-[2.375rem] leading-[1.1] lg:w-[500px] w-full",
                              children: e.title,
                            }),
                            (0, ga.jsx)("p", {
                              className: "lg:w-[500px] w-full my-[1rem]",
                              children: e.description,
                            }),
                            e.listItems &&
                              (0, ga.jsx)("div", {
                                className: "flex flex-col gap-4 mb-[1rem]",
                                children: e.listItems.map((e, t) =>
                                  (0, ga.jsxs)(
                                    "div",
                                    {
                                      children: [
                                        (0, ga.jsx)("h4", {
                                          className: "font-bold",
                                          children: e.subheading,
                                        }),
                                        (0, ga.jsx)("p", {
                                          children: e.description,
                                        }),
                                      ],
                                    },
                                    t
                                  )
                                ),
                              }),
                            (0, ga.jsx)("a", {
                              href: "https://app.auralexai.com",
                              target: "_blank",
                              children: (0, ga.jsx)(ls.button, {
                                whileHover: {
                                  scale: 1.05,
                                  y: -2,
                                  boxShadow: "0 2px 15px 6px #ffb87666",
                                },
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                },
                                className:
                                  "h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] text-[.875rem]  text-black font-medium",
                                children: "Get Started Now",
                              }),
                            }),
                          ],
                        }
                      )
                    ),
                    (0, ga.jsx)(
                      ls.div,
                      c(
                        c({}, t % 2 === 0 ? s : o),
                        {},
                        {
                          onMouseEnter: () => n(t),
                          onMouseLeave: a,
                          className:
                            "md:w-1/2 relative rounded-[1.5rem] p-[1px] overflow-hidden cursor-pointer lg:h-[480px] md:h-[300px]",
                          children: (0, ga.jsx)("div", {
                            className: "w-full z-[3] rounded-[1.5rem] relative",
                            children: e.video
                              ? (0, ga.jsx)("video", {
                                  className: "rounded-[1.5rem] w-full h-full",
                                  src: e.video,
                                  autoPlay: !0,
                                  muted: !0,
                                  loop: !0,
                                })
                              : (0, ga.jsx)("img", {
                                  className: "rounded-[1.5rem] w-full h-full",
                                  src: e.image,
                                  alt: e.title,
                                }),
                          }),
                        }
                      )
                    ),
                  ],
                },
                t
              )
            ),
          }),
        }),
      ],
    });
  }
  const vc = n.p + "static/media/coin_animation.a64768a33b30ba6fde20.mov";
  function yc() {
    return (0, ga.jsxs)("div", {
      id: "about",
      className: "relative inline-block  mt-[5rem] w-full h-[600px] ",
      children: [
        (0, ga.jsx)("video", {
          src: vc,
          autoPlay: !0,
          loop: !0,
          muted: !0,
          className: "w-full h-auto",
        }),
        (0, ga.jsx)("div", {
          className:
            "absolute inset-0 items-center justify-center  text-white flex flex-col text-center ",
          children: (0, ga.jsxs)("div", {
            className:
              "md:max-w-[100%] max-w-[22rem] flex justify-center flex-col items-center",
            children: [
              (0, ga.jsxs)("h2", {
                className:
                  "lg:text-[5rem] text-[3rem] font-medium leading-[1.1]",
                children: [
                  " ",
                  "See What Others Miss ",
                  (0, ga.jsx)("br", { className: "md:flex hidden" }),
                  " Gain an Edge with",
                ],
              }),
              (0, ga.jsx)("p", {
                className: "text-[1rem] md:w-[600px] text-center mt-[2rem]",
                children:
                  "Auralex AI isn't just a tool it's your AI-powered co-pilot in the wild world of crypto. We cut through the noise, revealing hidden gems and giving you the edge you need to dominate the market.",
              }),
            ],
          }),
        }),
      ],
    });
  }
  const bc = n.p + "static/media/Image-9.5ddd07cb43da51554788.avif",
    xc =
      "data:image/png;base64,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";
  const wc = n.p + "static/media/X-logo.d73eee9660a7518cb2c4aff20470defe.svg",
    Sc =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAADAFBMVEU4LTE1Ki46LzNCNjpIOT5FODw9MjYqJCYoIiQyKCwxJipANDgsJihcT1cAAAEuKCpjVWJeUVplVmT+h1VRRkT+4MdhVF783MT8ilj+Zl3+h1lsWmtENTr74Mn82MJxaGZNRkROREBpYmH+dFxkWldUQ0FnXlz/aF/+gVj+iVT8XVb9zrb6Z173X1RXTkv90r7+bl5aUVBnWGj6iVRVSUb7xLD9fFmFgH9tZWRaT1tfTVX8ybP9lVRhVlORjIx+eXY0MDH8wK77aFbyV1WMiIiLhIL2b1z9YVvYalhJQUD6hln11cKemZiVkZF0bWz+eFlcVVMHBAT5yLjuzbx1ZXRpW2f3alb51Lv9z7rckZHyjF33jFbXXU/32sealZfjcmL5eV37klnhbFaIR0BXPz3749H2zbvNamn1aGPyYVzkdFVVSVFQSUvcioL7iF/wiVPKVlP8WFH2UExFPDn1wLHvu6uAeIB/bnntdF1jT1r6c1f5nFZOREijn57NjY56dHDVbm/6cmHwgF5gWlz6flnoV1bsc1S7ioWae3jwj2bnhmH9f15eSkzcU0hzS0h0PTnzxrP5uajaoqTVrKBwYG7JfWpuV2PNYlm2W1Xta1PnYFBmR0erpqbWnpnXpZbHe3t2b3XZgmWIamXbYmD2hFpzWFZaNjPnxbTOtrHosqjqm2v5qGfva2bYVleXWlHPTUdDPkD6r6O+kZKIgYe+a2SsV1b6697fsbK6rKzdqqnGm5CQgZCtiIKfgILbd2+UcGr4jmL1nF3ofVzvelnCXlhpTlJnOTbctqnerp7Kn521m5LSl4eMeHvVh3XwfmjiimflY1/7mF32elLpU0zZx8DWvLflqZffoIjKjYOvdnXjgG2zbGTLbV2/VFC2RkIPCwrmrJ+8mp/xpZrunJSjjInykYegaF7ouL3kvqqvjZXmlojypX99ZGbYdGL8TkubTUlhPjxJMS4iGhnp1s7Sqq2tmp70vJL1mm7EeWDIg1mFWFDxr6HHh3fVmHbqh3PHpp9XSd1NAAAXAUlEQVRo3qTUPcjTQBjAcdu00RrQ5cbTfJBkEU4CJwlKEocEDDYh1UFduli7mC2CiyFDBx1KFRwcrCKFKm4FHUQUJz9xdHGqiLjadnTRJ6Z+RJPXov83NH079Mdzd822Wm0bBC/r6r/E/ozjOMxyzVu+k4zH3fY48Z2IwQ2McbPJZDXzGlVtDAEVdRPH1W09TW23m8B1IRc2hgrVi/2EPD3Rbcn8nhzoblufMQzGTN4aav4fVJfGbqDKsqzCyzrVdsYhQJnxE8KVEEjV1PcdunWPl1TIM9UsOf8LLOsWi8ECCKR1/wxBknXeyEKy9GtG6vtBE4iNoJwq9hsV+rbM84ZECJ9lSoYB//JQ0PYHawj6X6iR2CFvGKbMSjykqnwAb/JSf3wWiA2gb9SWi1d3Usk0eEmOIz4IJEnLBZJLuuXUYY8KM0EVEFQGwTuAzvo20SVJVVjN9bN9gs1SNZdoRpbktAcYbwDVymYC4TvH1l1dS61AHV6Pw7armtNpduzgVCATDiJcuqsxP/pnCEpSwbLN4ehJT0148+nz63KWYAsh3EzZ5N3xbCMo7w/ouyS0Nc+ShosbEyXkzeGl/mhoQqJNQ7gRzQx5p9tkcEGqhKqPHmunHtK13pNzU0QIUa4ee6Ic1DSN8qEGEQS31PXx7xBcpRBUBkGuGiPTW7y4MkKEDpX+lZdLEDUqS0QFDz4kWuCOM6MAVU0ElUOWEcOXTc4dmwqE0ml/X3/hwWgiN1sFoUxFSikhuq2zxZNXvXRQKfQgZEUNPzzQnwgCJa+Pnug/2sm0VvNOpzPQ5FiMKRIJcXSdaxYeRaUQEFUzseOwhsjy3KFjl8QY0Q/Hn1+inc6ub+2OSEPxKBVFFFrdCxwsWGGfSieqgrhE3o3I9MqhfV8UHB+Oa/MOOHlzwRMZURQpRiA5Xj4SVAq1qqjcYhOjhrTJ8cfTD9wchF/rzDjh+qspQhSL1NDbHDyKqiFoayioe5FYa4ECTrFVrHyG35eAGp6IAtdm8Hqmcqi11eJx/mAFRkmwhCuv9/b9EwUpIotoqCcMxrj4zCtAW568KCpX5rtnLNfwFqfeTZQLitJoRDFJfRgorwqqnkmS/jRW8eSV1SajyRJNbtwciRfQ4tkyUgTiDIAoSJtDdtQpMjvkV3eOnjj6gVcevl32Lt69/6knoNsfb99WREFIMqAUarX+Qun6/MeezLfLH96c2bN3/8n9r1zl4bGXy0t37x+5dlkUep9OX14ogmAEHC6ecWgz6Csldh6TZBjHAbx7K2KhvAVB2PtWL4lJpJCGLbVSQkRl0bEShAGlkpillqldlB0YYhlTsSzKYWqjVrrKTsXQcmppWZlt5rJ1X6tll+tBa2Rgx3fj7w+/43neva9/0Ls+ZdScy8eEFAJhBXCWCo8ormUvPPW5pF2SL8t7k47oKqxmEwSHnD45INRf+v2GGHIgIBCU8k53QSzOoYjFFArBjcEQHnlRmz07SX4/T6ZUN1vkLFhhtprNJgTZNgk8MH7mfyBq1CxYgEnU1dwXE4S3xaE2yI1RW7kye/bMOw+4yh2W3UXMTyZIYcrSRetQViI/rldwBjlSdinQN0Aw/cB0VJ6Q9ySUQAkdO3YsgeC2lFGXnJTd0S5LSZEY9U3LS+UoqjCZynOtKDwpCjN8gsOWD/8bNCQseMo2vheAjlaEiseCUCjFxaGMuqTkko67z1R6fXJOcf2dxygEvU2US8ACsqbbJKfQwNTgQSH8AOqUICqAJA/uiim2eoQ5YjdGcmtha8fMhSUlBw+6iVdU7powDEYQnYSrU0BIABWM6X8hX18qVeEXPB1ACQn3xGOFOcmFoWAbpiWX3Ok2NhwsLBQSCJTiXX6s4Qj01ijJs6bDIWGgHmfQYPAbYMmH+AdPKcjKmsSScyUiUU25ULw0efbSpStXFrbObdCo27/cLRYLn1BCH/q5eCHDFHkWmVwBw7D/cIx9If4FGhEXFu5lrchiQbpLR0UibsJ9oZjBYCysq++YO/urUf1yWb1bcWHHE/H7RTgslj3sc5ulxoqEwMFxIxygUSP/QAX6B89h6aI/CzAmFYBkMm65cEVxh0q1Nyk7+5y+XXUouba1s3OuMOcp2RvHZheYq5VyBQQlbsQMtecfoDG+AXtMFZcuC9IVeq5MpkypllQcUj3r3JtdW7esnGv8smxhYWtXV2dd6FMyeTGO7VfQ3ZhrVSAwdbMjBCQQ55Igiorqasp3zfFjmW1n02JpbFd1dSbVFdY3Nd6o1hjvJtV3qLq6WmtvLyIvXozD+mW1ScCUQkLCHKAxIANuXlA4OEG55cHb5uzRSVIsarW6Wt/6paP+W9NyHieWu1zzzPi89GO1skeV88Gb7L14HLagXF1jTUeQWbNA8+z5AY0aqCb+xDjTa0neoylZ5hrRCZlIJtK2VZ65s5vHxPt4xhhk6is3y56XpaWtru5+v34/mezqhZVruHIUQeGgxH+GBo3c5u8FW2saK3aajeoUzlZpyvEYbc+5uiY8kRjP8fRs0RrylUql5mNaWlrZt52XX5C9XdgF3Zo8cLci4YKh/QJmZJuSc2ldwHRIl9DzWtUjTZVyUlO3GmJu6CsbluN5vGbO1pb5LS2xnp6eBm3RzbSqstJvR/Z7j8P6mTVcHYCgMMyE3yGQXsOhd1Hh4IF21KjvkfpETLZla8aN+5UaZmRkc2p+S4ZBmjlv6vjxdLrhCiipqurxaRzOBVtgVMtRGILDhjuF+pD+UhxfAJlquA3PLT5SaaZPRETE5IyMLQ1XeDz1Eg5niTSex4uY5zme7uFhUFaVlaV9OkzGjWMLzI3tJhiFTvr+MiIbNLKPcjxNgVGbwY2Q29bQFLE9cweP5+7jkxrbEntDKzLExsRwpO40vLvPZM+pHh4edK0aQKWPFrniXNhv9C+tMIrAQUMx/aCfcRhToP9mCJVzu1sbpRbw54lEknvqkrUgWnqLKH8HkUQE0uQZU8d70Ol0rQZA1wO8cRtc/D63yRGwd74YINmh0aPB1jmdUzp/Coy+Bp1rzG+WSnlMJsk9M38J3YO+JNU9noQnkvB4vHsEgBaAmuZrP5ZVfePvx43DgrNUoYAhSBCOwfyU7JAt/UsKDPD1Qt6CEfWIjksu9RQxaSQSqWg7x5Cfz6MRabQf0GSwDr3SidK0T2fX42ySTm+CIRQJHoqxv3AOGg3itHsjTwezUCuXG/0yetnDY/VFTDwIjRgfHw+auL25ryIwpBm90Jo187XLS28ddgUQ++pjKwyxYN8RmAl2aAyIcygqnIXKj+aWn7q4aMNtIy+ShKfRaExbYUUcTiaJSCT+gEDzALT2VUtuThTonYvLhoICFIJgf/s3NvsyOEIn+VRI8frBoYeurhvO1l8BrbJJTN52S3X0lhQSiRh5k0iyQVN7obVrX2VEX+OvByWx2S4YBEIQ6iQAYP4KTQxiQQr5zvVksrf/kyYmGAsRpJkTs2XTrkNqGnH3zUgA/agI1PPqxL6nuMPnXW0bjl01DECJQY4QMOwHt88K+t6onQA1cYVxAKe0Ra1mQpKRENKkHW0rhKTQpIAJDORAwimdAIFwQwdCiFwWwlEag4QbrQTkqggWGIESEagccoi2jMWi4kEVD6aKinc7xaNWO/bbjTQITfXvMM44wi/fe9++t/uWLZ9+WLkLVn8yefKJOcEcxiyxxE2m0hSODkktWW2PgqHG+YqgoA7NXQ4HM0CGdsBhMNkeMHYoBNF1nR5CoocUDh9Whg+QyZXkh38HQwdYEUpy4hrrZytxpbciEosc78AUEV5AtPv3tUoyDmPG9IdrFtnVcW8D5A2EHoIAoMvCzSl8y4fXBhRkkFraWDBonln09kbNLf9KvLwuY+SRdZE5wQogX1s+XZhyP6++GYfDmJL9FQBBRRg5SD6b3gUGooOWLYHQeK8pHRgYgH2zoqXotGVJllgcJ+0dxwcEBKQnZDy2hpGzstJ1HZ2WIlAVcnAYHN4f3w3dYIaBbPrii424lyDIQgidJ+wKbnjpXYDS8QH+XieyxKR1wrgfH/iTIfhCqVsbQFCQBazq6Axpu+QYGLkAf/YAEyQc1MT28NigMACtmIdA+sz591F/SAUZIDEJWks7Cx0IvWF6a1gc/OhOk5WVRQkyRSRGSp6ymY3hAERmD1Sg3QAQ5ou5hgXQsmXIIgRfkIVNvmZ8eybOFI9nMv39TvDX0fmy+iuVTBR6kCy2CGHBmqrrbiFjs1T5Fwd+NBPuhNIVpqgEUHbf/pXz0UHzwS6AuptvcDA4+CZ8xfMTfDqdr52tYCIJMBub4FtaAUSwgKXOFgrSPtvT9vk3CORfadaNh3aAsYP4yJdAOg2Qf4tyPlQ9isGxzUzxuMkT/DihQPWQ6Y9KZmPtNHsLFgGuIpgiaLm8+j+TnE7uG+XgmeRKuaKCia6skE9cVr6LIIhkCMK+d0P1DfxfHM6MMzkMHazVVEB1SDL74xhrAUIdGDmB9JfHSaeSTt4oDYCLm81OxyPtgDae60uQfvAW7hi5F6XNpajE6UvgkxjS52YBZqZIMpVxDL7lPESXNf7cdjj4VFLwyYvNcHWz5VARLENoRQ4oBJQeWkxhcwv7b0BJEM7DBDEpT5KeiYPykLW5II7GV7MIqONGb5zZ+d3hkKjg4uC2G83kAHx2NswRQEi6F0KLpRclrek7WPy5HP1c6ZI4mna2lAMdjMJT7UJGFoGgc9oTdhZ9dzjJqejPYqfDF5uZZDOMHCA2+p0+AOkCEJqlkOtXP53elw0SbrRZE0GTjp3/hsNGP2fmUCNJyPeFGzBb25z2hGdbQ6CiL4um9kQ5FT3ZXslErgodtMnlNSAsdmrPdpz8rdFvDhX0SgWSuquSv0oBgqG7pqKT+HxwcnLaJcpilg46tjPKySnp5L5KJp6JR7sOl7sRBD2kyyIIcm3fqBmmdG9aalr/zxN1P/HKng6OcuQ4NvuuJI5EItlCPVXn66pPE6IOn0oC6G8EOnXp2wozMzwOgwyzt8cSCLIEUnwLTToKxwl2rZqLvTvs7HhlrYe2l3I4cmU7fR1pnW3O8LNzl6bVLKcvEajwWbBTVLy5+xUXZxy0DCeTk6swXgpB9BB6Ne338QeI81zk6OjY/+BoKoB2vLS08q7BsXIpQMJaad3FiIyOIyFOXzolfRl89yBA25qqCrn74XhVDhU57zf5XwiChTlSKMimmWzMsVhrR0fR0Trw0Nil2vF2S2QkWp5UciAiP37a3dzJCaCibw8FR410jCQfgvdAclfnhk2Kz0xeB5K7KmBjgRbzCrK2to5NC7IGxRqNo6hOlZes1CS45wN0AaYmKunUk2OFxVFN04mXh+bfoX0CzhIIzQIIm/tVdwVA7MzRGK/AIBskO0Q2VOTvIGuRZlajKX96KTo/P3p6pw76c2iwOCp+emt1ug4CxHhRRYskBFrGDe/2x8MywMZsbwnz8qNCiF43qWhsghxF/bNpZRfco/Pjo6fPARSSdOpZA0Chl6MvfmRkAsJ8lkB6CZxVK9a7wg0aCn09RT3qRSQGEikUv70U3ZGTdVBaatn10Oj8jHj3A7+g0OECk8LircnJoVMexgAtlYyWL18kQbCrvlKQmQBBl/52ebcIfn4gETlt8qOgp2iUWDveVW1tfH5+RugUUlFSSNugceHJ0OrrMEWLXkobhiDv+/ijWz8HU3ogud5mNYRIXL06bC8c18X09MTE8jqHt9UgUMfUeRR6soHbdaSj4McD6UaGIMi/ygsK25AegAcIA+cGyR1SCgUcP0Si/rSXQunpCXMsm6kSbIv+IT+6o+sZ0t0jf8tNCkKnJ7/veus/XrQbgCDh6ZW6PWV0n3tH9RyFuJroBRCM4E0bKjVMZMfrVMnO1GZkuCe3HEearmjQ6OP6ywXPD4wjhEEIpfQa1mNXBR4qYkNB1Rmhl49SiJTVfsBAqDt2wHUFUCNj87bQI6EH5p5ERY0k7dzCvVtdvaugwMNoaUVolkIwci7p8NSLFJT9FxxidJynUAAiohDRZgeyFPFmJmjwjDlRNVUebB6VWDz4tvHggaHxGxvAeSWkj3c6LPTg4BQtF6Yjoi/GAERFIei5IGB4ZRfihJvvb+6YvlIwEhISXL+FK+9SrrkymG0M0nxeCa3vDmDiMzEQxQfnQ5MjzvcgkxSIQhQqrEU8XqeWTqLBnbC2/HhIiPnJY8bc8bvjW8Y3mugII0MQZMHYuaIPiJmY7PAV71y7NF21N4YSQ1kdSyRCa8dQrRHo+gSdJCQJBAJtfAirqOB9rlGf98qHPsaL3n8bhsBZZhIegEfvAJ33Y7H7Cy5X94RRYewCqasRKBBawa7sXpyQJlwnYDAE2xJHdrpwjY02Gec6vGH0OhD8AQYohwb0nhbX7YGFNWL8srTHC5kg6k2kojCk58pmovk0mlDGEPNpAm1CIfcNI8TgQowWWYshyCqTFWhvr/TxxyN7/sYGZCnH3k3WtnrZINJBgGICg4IceWWXtgJEP2Ob48Zn5FV/yzXS5/8hKGW/d1/fww0N3OXeDqZwN2qW67IMi6ywBROCYa9AKpFILL+JLqhwEd2OVzNoQrpbznBCI0Ms+/HQSqQcY72z0FoEZe+a84r1ejDu4+0KI2eKCQhHbpNhA/xZxtC2UhFodxo1kBoLTtm9RF8Gjb82K2d49oGKwZA1wsJjBGW9EgLJZdLLOkhUd0uRrkAf2bxhfqCgVd57+AyBygaRDtoEBlJh4Hi3I07zGcK1Jb627fV9LffiGIyqKybcN7gLIGODkHOMTVCsaPetigEysuFt/GSVLi13avgpoVeDgIqFzTUIWX3uwXMmw9dCDTfeE5orfqp2Rl7VEJe78F2QAQjSFybaHSvqhUctJnLj7LpqOeo4/HwuQgyf2CbQhhoLDNLaw0fUWbX5VgR7gOg/tij9VLIUQdWQsQHI+GXobOt5r5jUg5WwmoKzPld36XKP3Wm7kCHmT9wODAyys4Nr1a7stnuTOqumCT3YotPzJL1dczBPed9vgJkxSOmhsYQdMZTUrkq8KbL4dHuAA9m4uyjkSIabmH9PFGudlgaOXeeFxCZ1jdrTogQ5YaAzOiZb99Y1wumWUm5kSFo4R1fSbGJiAUIfodY0/IFWhH14LtEcjkvE4pqdIlEqzxEmqGqrpfqH0wQrC19wSCSxQDl2tUAiY6RsG/QwXJMecnjuJyo/egsjf3N9t8/6ZVh0v9h07A6LxfLMj8zi1yak2j1FJije094+v8SchZw9QkWkzcm9rZLZehlN0Dhu9GoI+vtsn8vHG12dXXI/wS7XzRB2vLyIxSJYedqv5YvdZ1LTeLzj8RZqe3t10wj8GzgkEj0lT1LeWd/bKJAJvs81BEEQaN5Cv1bB1/xW+3B3MAs9iAGpJuJ2K2/PEU9Ltdq36fEItMILCEr6dUYikdFS8rreNigBtDTzELflF4AsrOApUp0ldssYvrfVwuJ0RqR90+NEtBXQU877AommU9KvEgoF2qFFg6fXYOgMSLCQZ7ecC0EhOLmIrIVXBpFNFp6RtWstPR/PO+iRoKq3c0YJz0yCzfUfv/S2GCADFemDQIqWRyEsApxpgqaOdMtZmxVpb19TE0kwL0EeK+mQuDiZQJDc2995u1/a3i7IG1r8u1mvhiDOc488PVmJFlYQgmVkTUeOW47bthxLeE6GS4veHiFVavrrlBJNb//TGeWsUiNRDeKWbhivrsi551FiMAuOywgERForO5Pj5paXZQknM27tqvqxuZ6zZ1vOPijo6lWWweD1j022zO2ClWhhXqsih7N+P908d9ydQLCAc2hPX1vZGXFtXJZlSaStuwaQybMxYUTkKSa1rLNz5vr1hD6F81dvGSjpH+VzemJ51dDpAAAAAElFTkSuQmCC",
    kc =
      "data:image/png;base64,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",
    Ec =
      "data:image/png;base64,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",
    Ac =
      "data:image/png;base64,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";
  function Tc() {
    return (0, ga.jsxs)("div", {
      className:
        "w-full md:h-[780px] h-[542px] relative bg-[#090909] overflow-hidden",
      children: [
        (0, ga.jsx)("img", {
          className:
            "absolute md:w-[32rem] w-[24rem] md:-bottom-[12rem] bottom-[12rem] md:-left-[9rem] -left-[15rem]",
          src: bc,
          alt: "blur",
        }),
        (0, ga.jsxs)("div", {
          className: "grid md:grid-cols-2 grid-cols-1 gap-[2.5rem]",
          children: [
            (0, ga.jsx)("div", {
              className:
                "2xl:max-w-[1440px] 2xl:mx-auto px-[2.5rem] flex md:justify-start justify-center items-center md:items-start flex-col",
              children: (0, ga.jsx)(ls.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                className: "md:max-w-[100%] max-w-[23.75rem]",
                children: (0, ga.jsxs)("h2", {
                  className:
                    "md:text-[3.52rem] text-[2.375rem] leading-[1.2] text-white mt-[5rem] md:text-left text-center",
                  children: [
                    "Hear What Our ",
                    (0, ga.jsx)("br", { className: "md:flex hidden " }),
                    " Users Are Saying",
                  ],
                }),
              }),
            }),
            (0, ga.jsxs)(ls.div, {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.6 },
              className:
                "md:hidden flex gap-[1rem] px-[1rem] overflow-x-auto w-full",
              children: [
                (0, ga.jsx)(ls.div, {
                  children: (0, ga.jsxs)("div", {
                    className:
                      "w-[324px]  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f]  ",
                    children: [
                      (0, ga.jsx)("p", {
                        className: "text-[.875rem] text-[#c2c2c2]",
                        children:
                          "As someone who understands the tech behind it, I'm impressed by the sophistication of Auralex's AI algorithms. The risk management features are particularly impressive.",
                      }),
                      (0, ga.jsxs)("div", {
                        className:
                          " mt-[1rem] flex justify-between items-center",
                        children: [
                          (0, ga.jsxs)("div", {
                            className: " flex items-center gap-[.875rem] ",
                            children: [
                              (0, ga.jsx)("img", {
                                className: "w-[52px] rounded-full",
                                src: kc,
                                alt: "alt",
                              }),
                              (0, ga.jsxs)("div", {
                                className: "flex flex-col text-[#c2c2c2]",
                                children: [
                                  (0, ga.jsx)("h5", {
                                    className: "text-[.875rem]",
                                    children: "John D.",
                                  }),
                                  (0, ga.jsx)("h5", {
                                    className: "text-[.875rem]",
                                    children: "Crypto Trader",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, ga.jsx)("div", {
                            className:
                              "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                            children: (0, ga.jsx)("img", {
                              src: wc,
                              alt: "twitter",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, ga.jsx)(ls.div, {
                  children: (0, ga.jsxs)("div", {
                    className:
                      "w-[324px] h-[238px]  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f]  ",
                    children: [
                      (0, ga.jsx)("p", {
                        className: "text-[.875rem] text-[#c2c2c2]",
                        children:
                          "Auralex AI is a game-changer! The AI insights are spot-on, and the real-time data is invaluable. I've never felt more confident in my trades.",
                      }),
                      (0, ga.jsxs)("div", {
                        className:
                          " mt-[1rem] flex justify-between items-center",
                        children: [
                          (0, ga.jsxs)("div", {
                            className: " flex items-center gap-[.875rem] ",
                            children: [
                              (0, ga.jsx)("img", {
                                className: "w-[52px] rounded-full",
                                src: Sc,
                                alt: "alt",
                              }),
                              (0, ga.jsxs)("div", {
                                className: "flex flex-col text-[#c2c2c2]",
                                children: [
                                  (0, ga.jsx)("h5", {
                                    className: "text-[.875rem]",
                                    children: "James Walker",
                                  }),
                                  (0, ga.jsx)("h5", {
                                    className: "text-[.875rem]",
                                    children: "Someone",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, ga.jsx)("div", {
                            className:
                              "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                            children: (0, ga.jsx)("img", {
                              src: wc,
                              alt: "twitter",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, ga.jsx)(ls.div, {
                  children: (0, ga.jsxs)("div", {
                    className:
                      "w-[324px] h-[238px]  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f]  ",
                    children: [
                      (0, ga.jsx)("p", {
                        className: "text-[.875rem] text-[#c2c2c2]",
                        children:
                          "The Token Explorer is amazing! I can easily find new opportunities, and the analytics dashboard is top-notch. Auralex AI is now my go-to tool.",
                      }),
                      (0, ga.jsxs)("div", {
                        className:
                          " mt-[1rem] flex justify-between items-center",
                        children: [
                          (0, ga.jsxs)("div", {
                            className: " flex items-center gap-[.875rem] ",
                            children: [
                              (0, ga.jsx)("img", {
                                className: "w-[52px] rounded-full",
                                src: Ec,
                                alt: "alt",
                              }),
                              (0, ga.jsxs)("div", {
                                className: "flex flex-col text-[#c2c2c2]",
                                children: [
                                  (0, ga.jsx)("h5", {
                                    className: "text-[.875rem]",
                                    children: "Sarah L.",
                                  }),
                                  (0, ga.jsx)("h5", {
                                    className: "text-[.875rem]",
                                    children: "Defi Enthusiast",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, ga.jsx)("div", {
                            className:
                              "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                            children: (0, ga.jsx)("img", {
                              src: wc,
                              alt: "twitter",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, ga.jsxs)(ls.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.6, staggerChildren: 0.1 },
              className:
                "md:grid hidden grid-cols-[324px_324px_324px] gap-[1rem] relative h-[750px]",
              children: [
                (0, ga.jsx)("div", {
                  className: "absolute z-[4] -top-10 w-full h-[6.25rem] top",
                }),
                (0, ga.jsx)("div", {
                  className:
                    "absolute -bottom-10 w-full h-[6.25rem] bg-gradient-to-b from-[#10101000] to-[#000000]",
                }),
                (0, ga.jsxs)(ls.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6, delay: 0.1 },
                  className: "flex flex-col gap-[1rem] -mt-[3.75rem]",
                  children: [
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          "  bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px]  ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "This platform is everything a crypto user needs. The interface is clean, the process is smooth, and the privacy features are outstanding. The fact that I can trade without worrying about hidden fees is a game-changer. I'll definitely continue using it!",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              " mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px] rounded-full",
                                    src: "data:image/png;base64,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",
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Michael Carter",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Crypto entusiast",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          "  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f]  ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "As someone who understands the tech behind it, I'm impressed by the sophistication of Auralex's AI algorithms. The risk management features are particularly impressive.",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              " mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px] rounded-full",
                                    src: kc,
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "John D.",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Crypto Trader",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          "  bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "This platform is everything a crypto user needs. The interface is clean, the fffprocess is smooth, and the privacy features are outstanding. The fact that I can trade without worrying about hidden fees is a game-changer. I'll definitely continue using it!",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              " mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px]",
                                    src: xc,
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "James Walker",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Somone",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, ga.jsxs)(ls.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6, delay: 0.2 },
                  className: "flex flex-col gap-[1rem] -mt-[3.75rem]",
                  children: [
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          "  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f] blur-[4px] ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "This platform is everything a crypto user needs. The interface is clean, the process is smooth, and the privacy",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              "mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px] rounded-full",
                                    src: "data:image/png;base64,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",
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "James Walker",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Somone",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          " bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f] ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "Auralex AI is a game-changer! The AI insights are spot-on, and the real-time data is invaluable. I've never felt more confident in my trades.",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              "mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px] rounded-full",
                                    src: Sc,
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "James Walker",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Somone",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          "  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f] ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "The Token Explorer is amazing! I can easily find new opportunities, and the analytics dashboard is top-notch. Auralex AI is now my go-to tool.",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              "mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px] rounded-full",
                                    src: Ec,
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Sarah L.",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Defi Enthusiast",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          " bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "The platform is user-friendly and efficient. I appreciate the anonymity and transparency it offers. It's a game-changer for crypto enthusiasts!",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              "mt-[1rem] flex items-center gap-[.875rem] ",
                            children: [
                              (0, ga.jsx)("img", {
                                className: "w-[52px]",
                                src: xc,
                                alt: "alt",
                              }),
                              (0, ga.jsxs)("div", {
                                className: "flex flex-col text-[#c2c2c2]",
                                children: [
                                  (0, ga.jsx)("h5", {
                                    className: "text-[.875rem]",
                                    children: "James Walker",
                                  }),
                                  (0, ga.jsx)("h5", {
                                    className: "text-[.875rem]",
                                    children: "Somone",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, ga.jsxs)(ls.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6, delay: 0.3 },
                  className: "flex flex-col gap-[1rem]",
                  children: [
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          "  bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "This platform is everything a crypto user needs. The interface is clean, the process is smooth, and the privacy",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              "mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px]",
                                    src: "data:image/jpeg;base64,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",
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "James Walker",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Somone",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          " bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "RetoSwap sets the standard for cryptocurrency trading, what should have been the norm from the start: non-custodial, peer-to-peer, privacy-focused, and permission-less. Accessible to anyone with nothing more than an internet connection.",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              "mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px]",
                                    src: Ac,
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "James Walker",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Somone",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ga.jsx)(ls.div, {
                      whileHover: {
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 },
                      },
                      children: (0, ga.jsxs)("div", {
                        className:
                          "  bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ",
                        children: [
                          (0, ga.jsx)("p", {
                            className: "text-[.875rem] text-[#c2c2c2]",
                            children:
                              "The platform is user-friendly and efficient. I appreciate the anonymity and transparency it offers. It's a game-changer for crypto enthusiasts!",
                          }),
                          (0, ga.jsxs)("div", {
                            className:
                              "mt-[1rem] flex justify-between items-center",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: " flex items-center gap-[.875rem] ",
                                children: [
                                  (0, ga.jsx)("img", {
                                    className: "w-[52px]",
                                    src: Ac,
                                    alt: "alt",
                                  }),
                                  (0, ga.jsxs)("div", {
                                    className: "flex flex-col text-[#c2c2c2]",
                                    children: [
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "James Walker",
                                      }),
                                      (0, ga.jsx)("h5", {
                                        className: "text-[.875rem]",
                                        children: "Somone",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center",
                                children: (0, ga.jsx)("img", {
                                  src: wc,
                                  alt: "twitter",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  const jc = [
    {
      id: 1,
      title: "Real-Time Advantage",
      description: "Instant market data for lightning-fast decisions",
      img: n.p + "static/media/1 Real-Time Advantage1.605d4b454348435d3145.png",
    },
    {
      id: 2,
      title: "Advanced Insights",
      description: "Professional-grade analytics that go beyond the basics.",
      img: n.p + "static/media/2 Advanced Insights.ae8cc8417b57fa5ac717.png",
    },
    {
      id: 3,
      title: "AI-Powered Precision",
      description: "Let AI guide you to profitable opportunities.",
      img: n.p + "static/media/3 AI-Powered Precision.d4944fe484b4cb93ef3d.png",
    },
    {
      id: 4,
      title: "All-in-One Platform",
      description: "Everything you need, from discovery to deep analysis.",
      img: n.p + "static/media/4 All-in-One Platform.d43b4e7b1e5ffed4f22b.png",
    },
    {
      id: 5,
      title: " Intuitive Design",
      description: "Easy to use, powerful results.",
      img: n.p + "static/media/5 Intuitive Design.474c08dd69f2ab91edd4.png",
    },
    {
      id: 6,
      title: " Predictive Power",
      description: "AI-driven price predictions for strategic planning.",
      img: n.p + "static/media/6 Predictive Power.ca619b412a35f9794477.png",
    },
    {
      id: 7,
      title: "Personalized Experience",
      description: "Custom watchlists and alerts to stay informed.",
      img:
        n.p + "static/media/7 Personalized Experience.c4ee21c260201d7c0b6f.png",
    },
  ];
  function Cc() {
    const [e, t] = (0, r.useState)(null);
    return (0, ga.jsx)("div", {
      className:
        "relative min-h-screen isolate max-w-[1440px] mx-auto mb-[164px] mt-[6.25rem] lg:px-[2.5rem] px-[1rem]",
      children: (0, ga.jsxs)("div", {
        className: "relative min-h-screen isolate flex md:flex-row flex-col",
        children: [
          (0, ga.jsxs)("div", {
            className:
              "md:w-1/2 w-full h-full text-white md:sticky md:top-[6.25rem] mb-[4rem] md:mb-0 flex md:justify-start justify-center flex-col md:items-start items-center",
            children: [
              (0, ga.jsxs)("div", {
                className: "relative",
                children: [
                  (0, ga.jsx)("h2", {
                    className:
                      "lg:text-[3.25rem] md:text-[2.8rem] text-[2.375rem] leading-[1.2] md:text-left  text-center",
                    children: "Why Auralex AI is Your Ultimate Trading Partner",
                  }),
                  (0, ga.jsx)("div", {
                    className:
                      "absolute top-0 bg-[#ff6512] blur-[100px] w-[200px] md:w-[500px]  h-[70px] rounded-full",
                  }),
                ],
              }),
              (0, ga.jsx)("a", {
                href: "https://app.auralexai.com/",
                rel: "noreferrer",
                target: "_blank",
                children: (0, ga.jsx)(ls.button, {
                  whileHover: {
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 2px 15px 6px #ffb87666",
                  },
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                  className:
                    " mt-[4rem] h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] text-[.875rem] font-medium text-black font-medium",
                  children: "Get Started Now",
                }),
              }),
            ],
          }),
          (0, ga.jsx)("div", {
            className: "md:w-1/2 w-full h-full flex flex-col gap-[1.5rem]",
            children: jc.map((n, r) =>
              (0, ga.jsxs)(
                "div",
                {
                  onMouseEnter: () => t(r),
                  onMouseLeave: () => t(null),
                  className:
                    "relative p-[1px] overflow-hidden rounded-[1.5rem]",
                  children: [
                    (0, ga.jsxs)("div", {
                      className:
                        "bg-black w-full lg:h-[440px] md:h-[400px] h-[440px] z-[3] rounded-[1.5rem] relative  ",
                      children: [
                        (0, ga.jsx)("img", {
                          src: n.img,
                          alt: n.title,
                          className:
                            "absolute top-0 left-0 w-full h-full object-cover rounded-[1.5rem]",
                        }),
                        (0, ga.jsx)("div", {
                          className:
                            "absolute inset-0 flex items-start w-full text-white p-[2rem]",
                          children: (0, ga.jsxs)("div", {
                            className:
                              "flex md:flex-row flex-col-reverse w-full justify-between items-start md:gap-0 gap-[1.5rem]",
                            children: [
                              (0, ga.jsxs)("div", {
                                className: "flex flex-col gap-[.75rem]",
                                children: [
                                  (0, ga.jsx)("h4", {
                                    className:
                                      "md:text-[2rem] text-[1.75rem] leading-[1.25]",
                                    children: n.title,
                                  }),
                                  (0, ga.jsx)("p", {
                                    className:
                                      "text-[#c2c2c2] text-[1rem] max-w-[20rem]",
                                    children: n.description,
                                  }),
                                ],
                              }),
                              (0, ga.jsx)("div", {
                                className:
                                  "md:w-[3.75rem] w-[2.75rem] h-[2.75rem] md:h-[3.75rem] bg-[#191919] border border-[#ffffff0d] flex justify-center items-center rounded-full",
                                children: (0, ga.jsx)("h5", {
                                  className: "text-white",
                                  children: "0".concat(n.id),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, ga.jsx)("div", {
                      className: "stroke-rectangle absolute inset-0",
                    }),
                    e === r &&
                      (0, ga.jsx)("div", {
                        className: "stroke-rectangle is-gradient",
                      }),
                  ],
                },
                r
              )
            ),
          }),
        ],
      }),
    });
  }
  const Nc = n.p + "static/media/Group-48098168.5d797939ccf0462cde0c.avif",
    Pc = n.p + "static/media/Group-40275.914527802c55ae9c1727.avif";
  function Fc() {
    return (0, ga.jsx)("div", {
      className: "max-w-[1440px] mx-auto mt-[1rem] lg:px-[2.5rem] px-[1rem]",
      children: (0, ga.jsxs)("div", {
        className:
          "border relative border-[rgba(255,255,255,0.12)] bg-[#ffffff0d] rounded-[1.25rem] md:p-[2.5rem] p-[3.75rem] flex justify-center items-center flex-col overflow-hidden",
        children: [
          (0, ga.jsxs)("div", {
            className: "flex flex-col items-center gap-[1rem] text-center",
            children: [
              (0, ga.jsx)("h2", {
                className: "text-[3.25rem] leading-[1.2] text-white",
                children: "Ready to Trade Smarter?",
              }),
              (0, ga.jsx)("p", {
                className: "max-w-[28.75rem] text-center text-[#c2c2c2]",
                children:
                  "Join the future of crypto trading with Auralex AI. Start your free trial today and experience the difference.",
              }),
              (0, ga.jsx)("a", {
                href: "https://app.auralexai.com",
                target: "_blank",
                children: (0, ga.jsx)(ls.button, {
                  whileHover: {
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 2px 15px 6px #ffb87666",
                  },
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                  className:
                    "  h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] text-[.875rem] font-medium text-black font-medium",
                  children: "Get Started Now",
                }),
              }),
            ],
          }),
          (0, ga.jsx)("img", {
            className: "absolute bottom-[-14rem] left-[-15rem] w-[40rem]",
            src: Nc,
            alt: "blur",
          }),
          (0, ga.jsx)("img", {
            className: "absolute top-[-14rem] right-[-15rem] w-[40rem]",
            src: Pc,
            alt: "blur",
          }),
          (0, ga.jsx)("div", { className: "cta-prime-line" }),
        ],
      }),
    });
  }
  const Rc = n.p + "static/media/footer.8d496c348182e611f908.avif";
  const Lc = n.p + "static/media/X-logo.d73eee9660a7518cb2c4aff20470defe.svg";
  function zc(e) {
    return ku({
      tag: "svg",
      attr: { role: "img", viewBox: "0 0 24 24" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M12.513 1.097c-.645 0-1.233.34-2.407 1.017L3.675 5.82A7.233 7.233 0 0 0 0 12.063v.236a7.233 7.233 0 0 0 3.667 6.238L7.69 20.86c2.354 1.36 3.531 2.042 4.824 2.042 1.292.001 2.47-.678 4.825-2.038l4.251-2.453c1.177-.68 1.764-1.02 2.087-1.579.323-.56.324-1.24.323-2.6v-2.63a1.04 1.04 0 0 0-1.558-.903l-8.728 5.024c-.587.337-.88.507-1.201.507-.323 0-.616-.168-1.204-.506l-5.904-3.393c-.297-.171-.446-.256-.565-.271a.603.603 0 0 0-.634.368c-.045.111-.045.282-.043.625.002.252 0 .378.025.494.053.259.189.493.387.667.089.077.198.14.416.266l6.315 3.65c.589.34.884.51 1.207.51.324 0 .617-.17 1.206-.509l7.74-4.469c.202-.116.302-.172.377-.13.075.044.075.16.075.392v1.193c0 .34.001.51-.08.649-.08.14-.227.224-.522.394l-6.382 3.685c-1.178.68-1.767 1.02-2.413 1.02-.646 0-1.236-.34-2.412-1.022l-5.97-3.452-.043-.025a4.106 4.106 0 0 1-2.031-3.52V11.7c0-.801.427-1.541 1.12-1.944a1.979 1.979 0 0 1 1.982-.001l4.946 2.858c1.174.679 1.762 1.019 2.407 1.02.645 0 1.233-.34 2.41-1.017l7.482-4.306a1.091 1.091 0 0 0 0-1.891L14.92 2.11c-1.175-.675-1.762-1.013-2.406-1.013Z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Vc() {
    return (0, ga.jsx)("div", {
      className: " ",
      children: (0, ga.jsxs)("div", {
        className: "relative md:h-[300px]  md:mt-[164px] ",
        children: [
          (0, ga.jsx)("div", {
            className: " max-w-[1440px] mx-auto md:px-[2.75rem] px-[1rem]",
            children: (0, ga.jsxs)("div", {
              className: "w-full max-w-[80rem] relative z-[10] ",
              children: [
                (0, ga.jsx)("div", { className: "pt-[6.25rem]" }),
                (0, ga.jsxs)("div", {
                  children: [
                    (0, ga.jsxs)("div", {
                      className: "md:hidden flex flex-col gap-[1.5rem] w-full",
                      children: [
                        (0, ga.jsx)("div", {
                          className: "w-[160px]",
                          children: (0, ga.jsx)("h4", {
                            className:
                              "text-white font-bold uppercase text-[1.5rem]",
                            children: "Auralex AI",
                          }),
                        }),
                        (0, ga.jsxs)("div", {
                          className: "flex items-center gap-[.5rem]",
                          children: [
                            (0, ga.jsx)(ou, {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              to: "https://auralex-ai.gitbook.io/auralex-ai",
                              children: (0, ga.jsx)("button", {
                                className:
                                  "bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium",
                                children: (0, ga.jsx)(zc, {
                                  className: "text-[22px]",
                                }),
                              }),
                            }),
                            (0, ga.jsx)("button", {
                              className:
                                "bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium",
                              children: (0, ga.jsx)("img", {
                                src: Lc,
                                alt: "twitter",
                              }),
                            }),
                          ],
                        }),
                        (0, ga.jsxs)("nav", {
                          className:
                            "flex  justify-between items-center text-sm text-[#C2C2C2] font-medium pb-1 w-full",
                          children: [
                            (0, ga.jsxs)("a", {
                              href: "#home",
                              children: [
                                " ",
                                (0, ga.jsx)("h5", { children: "Home" }),
                              ],
                            }),
                            (0, ga.jsxs)("a", {
                              href: "#about",
                              children: [
                                " ",
                                (0, ga.jsx)("h5", { children: "About" }),
                              ],
                            }),
                            (0, ga.jsxs)("a", {
                              href: "#feauture",
                              children: [
                                " ",
                                (0, ga.jsx)("h5", { children: "Feauture" }),
                              ],
                            }),
                            (0, ga.jsxs)("a", {
                              href: "#faq",
                              children: [
                                " ",
                                (0, ga.jsx)("h5", { children: "FAQ" }),
                              ],
                            }),
                            (0, ga.jsx)(ou, {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              to: "https://auralex-ai.gitbook.io/auralex-ai",
                              children: (0, ga.jsx)("h5", {
                                children: "Whitepaper",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, ga.jsxs)("div", {
                      className:
                        "md:flex hidden justify-between items-center mt-10",
                      children: [
                        (0, ga.jsx)("div", {
                          className: "w-[160px]",
                          children: (0, ga.jsx)("h4", {
                            className:
                              "text-white font-bold uppercase text-[1.5rem]",
                            children: "Auralex AI",
                          }),
                        }),
                        (0, ga.jsxs)("nav", {
                          className:
                            "lg:flex hidden  gap-[2rem] items-center text-sm text-[#C2C2C2] font-medium pb-1",
                          children: [
                            (0, ga.jsxs)("a", {
                              href: "#home",
                              children: [
                                " ",
                                (0, ga.jsx)("h5", { children: "Home" }),
                              ],
                            }),
                            (0, ga.jsxs)("a", {
                              href: "#about",
                              children: [
                                " ",
                                (0, ga.jsx)("h5", { children: "About" }),
                              ],
                            }),
                            (0, ga.jsxs)("a", {
                              href: "#feauture",
                              children: [
                                " ",
                                (0, ga.jsx)("h5", { children: "Feauture" }),
                              ],
                            }),
                            (0, ga.jsxs)("a", {
                              href: "#faq",
                              children: [
                                " ",
                                (0, ga.jsx)("h5", { children: "FAQ" }),
                              ],
                            }),
                          ],
                        }),
                        (0, ga.jsxs)("div", {
                          className: "flex items-center gap-[.5rem]",
                          children: [
                            (0, ga.jsx)(ou, {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              to: "https://auralex-ai.gitbook.io/auralex-ai",
                              children: (0, ga.jsx)("button", {
                                className:
                                  "bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium",
                                children: (0, ga.jsx)(zc, {
                                  className: "text-[22px]",
                                }),
                              }),
                            }),
                            (0, ga.jsx)(ou, {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              to: "https://x.com/Auralexaieth",
                              children: (0, ga.jsx)("button", {
                                className:
                                  "bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium",
                                children: (0, ga.jsx)("img", {
                                  src: Lc,
                                  alt: "footer",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, ga.jsx)("div", {
                      className: " w-full h-[1px] bg-[#ffffff1f] my-[2rem]",
                    }),
                    (0, ga.jsx)("div", {
                      className:
                        "flex md:flex-row flex-col-reverse justify-between md:items-center md:gap-0 gap-[1.5rem]",
                      children: (0, ga.jsx)("h5", {
                        className: "text-[#838383] text-[.875rem]",
                        children: "@2025 Auralex. All rights reserved",
                      }),
                    }),
                  ],
                }),
                (0, ga.jsx)("div", { className: "pt-[2.125rem]" }),
              ],
            }),
          }),
          (0, ga.jsx)("div", {
            className: "absolute bottom-0 w-full h-full z-[2] ",
            children: (0, ga.jsx)("img", {
              className: "w-full h-full object-cover",
              src: Rc,
              alt: "footer",
            }),
          }),
          (0, ga.jsx)("div", {
            className: "absolute left-0  top-[5rem] w-full z-[1] ",
            children: (0, ga.jsx)("div", { className: "footer-glow" }),
          }),
        ],
      }),
    });
  }
  class Dc extends r.Component {
    getSnapshotBeforeUpdate(e) {
      const t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
        const e = this.props.sizeRef.current;
        (e.height = t.offsetHeight || 0),
          (e.width = t.offsetWidth || 0),
          (e.top = t.offsetTop),
          (e.left = t.offsetLeft);
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function Mc(e) {
    let { children: t, isPresent: n } = e;
    const a = (0, r.useId)(),
      i = (0, r.useRef)(null),
      o = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
      { nonce: s } = (0, r.useContext)(Zi);
    return (
      (0, r.useInsertionEffect)(() => {
        const { width: e, height: t, top: r, left: l } = o.current;
        if (n || !i.current || !e || !t) return;
        i.current.dataset.motionPopId = a;
        const u = document.createElement("style");
        return (
          s && (u.nonce = s),
          document.head.appendChild(u),
          u.sheet &&
            u.sheet.insertRule(
              '\n          [data-motion-pop-id="'
                .concat(
                  a,
                  '"] {\n            position: absolute !important;\n            width: '
                )
                .concat(e, "px !important;\n            height: ")
                .concat(t, "px !important;\n            top: ")
                .concat(r, "px !important;\n            left: ")
                .concat(l, "px !important;\n          }\n        ")
            ),
          () => {
            document.head.removeChild(u);
          }
        );
      }, [n]),
      (0, ga.jsx)(Dc, {
        isPresent: n,
        childRef: i,
        sizeRef: o,
        children: r.cloneElement(t, { ref: i }),
      })
    );
  }
  const Ic = (e) => {
    let {
      children: t,
      initial: n,
      isPresent: a,
      onExitComplete: i,
      custom: o,
      presenceAffectsLayout: s,
      mode: l,
    } = e;
    const u = go(Oc),
      c = (0, r.useId)(),
      d = (0, r.useCallback)(
        (e) => {
          u.set(e, !0);
          for (const t of u.values()) if (!t) return;
          i && i();
        },
        [u, i]
      ),
      f = (0, r.useMemo)(
        () => ({
          id: c,
          initial: n,
          isPresent: a,
          custom: o,
          onExitComplete: d,
          register: (e) => (u.set(e, !1), () => u.delete(e)),
        }),
        s ? [Math.random(), d] : [a, d]
      );
    return (
      (0, r.useMemo)(() => {
        u.forEach((e, t) => u.set(t, !1));
      }, [a]),
      r.useEffect(() => {
        !a && !u.size && i && i();
      }, [a]),
      "popLayout" === l && (t = (0, ga.jsx)(Mc, { isPresent: a, children: t })),
      (0, ga.jsx)(va.Provider, { value: f, children: t })
    );
  };
  function Oc() {
    return new Map();
  }
  const Uc = (e) => e.key || "";
  function Bc(e) {
    const t = [];
    return (
      r.Children.forEach(e, (e) => {
        (0, r.isValidElement)(e) && t.push(e);
      }),
      t
    );
  }
  const Wc = (e) => {
      let {
        children: t,
        custom: n,
        initial: a = !0,
        onExitComplete: i,
        presenceAffectsLayout: o = !0,
        mode: s = "sync",
        propagate: l = !1,
      } = e;
      const [u, c] = ya(l),
        d = (0, r.useMemo)(() => Bc(t), [t]),
        f = l && !u ? [] : d.map(Uc),
        h = (0, r.useRef)(!0),
        p = (0, r.useRef)(d),
        m = go(() => new Map()),
        [g, v] = (0, r.useState)(d),
        [y, b] = (0, r.useState)(d);
      lo(() => {
        (h.current = !1), (p.current = d);
        for (let e = 0; e < y.length; e++) {
          const t = Uc(y[e]);
          f.includes(t) ? m.delete(t) : !0 !== m.get(t) && m.set(t, !1);
        }
      }, [y, f.length, f.join("-")]);
      const x = [];
      if (d !== g) {
        let e = [...d];
        for (let t = 0; t < y.length; t++) {
          const n = y[t],
            r = Uc(n);
          f.includes(r) || (e.splice(t, 0, n), x.push(n));
        }
        return "wait" === s && x.length && (e = x), b(Bc(e)), void v(d);
      }
      const { forceRender: w } = (0, r.useContext)(ba);
      return (0, ga.jsx)(ga.Fragment, {
        children: y.map((e) => {
          const t = Uc(e),
            r = !(l && !u) && (d === y || f.includes(t));
          return (0, ga.jsx)(
            Ic,
            {
              isPresent: r,
              initial: !(h.current && !a) && void 0,
              custom: r ? void 0 : n,
              presenceAffectsLayout: o,
              mode: s,
              onExitComplete: r
                ? void 0
                : () => {
                    if (!m.has(t)) return;
                    m.set(t, !0);
                    let e = !0;
                    m.forEach((t) => {
                      t || (e = !1);
                    }),
                      e &&
                        (null === w || void 0 === w || w(),
                        b(p.current),
                        l && (null === c || void 0 === c || c()),
                        i && i());
                  },
              children: e,
            },
            t
          );
        }),
      });
    },
    qc = (e) => {
      let {
        title: t,
        answer: n,
        index: r,
        hoveredIndex: a,
        setHoveredIndex: i,
      } = e;
      const o = a === r;
      return (0, ga.jsxs)(ls.div, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.1 * r },
        viewport: { once: !1 },
        onMouseEnter: () => i(r),
        onMouseLeave: () => i(null),
        className: "relative p-[1px] overflow-hidden rounded-[1.25rem]",
        children: [
          (0, ga.jsx)("div", {
            className: "stroke-rectangle absolute inset-0",
          }),
          o &&
            (0, ga.jsx)("div", { className: "stroke-rectangle is-gradient" }),
          (0, ga.jsxs)("div", {
            className:
              "bg-[#141414] pb-[1.5rem] relative z-[10] rounded-[1.25rem] px-[1.5rem]",
            children: [
              (0, ga.jsxs)(ls.button, {
                className:
                  "flex justify-between items-center w-full pt-[1.5rem] text-left",
                whileHover: { scale: 1.01 },
                transition: { duration: 0.2 },
                children: [
                  (0, ga.jsx)("span", {
                    className: "lg:text-[1.5rem] text-[1.25rem] leading-[1.55]",
                    children: t,
                  }),
                  (0, ga.jsxs)(ls.svg, {
                    animate: { rotate: o ? 180 : 0 },
                    transition: { duration: 0.3 },
                    className: "fill-[white] shrink-0",
                    width: "16",
                    height: "16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, ga.jsx)("rect", {
                        y: "7",
                        width: "16",
                        height: "2",
                        rx: "1",
                        className:
                          "transform origin-center transition duration-200 ease-out",
                      }),
                      !o &&
                        (0, ga.jsx)("rect", {
                          x: "7",
                          width: "2",
                          height: "16",
                          rx: "1",
                          className:
                            "transform origin-center transition duration-200 ease-out",
                        }),
                    ],
                  }),
                ],
              }),
              (0, ga.jsx)(Wc, {
                children:
                  o &&
                  (0, ga.jsx)(ls.div, {
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: { duration: 0.3 },
                    className: "overflow-hidden text-[white]",
                    children: (0, ga.jsx)("div", {
                      className:
                        "pt-[1.5rem] pb-[1.5rem] text-[1rem] text-[#c2c2c2]",
                      children: n,
                    }),
                  }),
              }),
            ],
          }),
        ],
      });
    },
    Xc = () => {
      const [e, t] = (0, r.useState)(null);
      return (0, ga.jsx)("div", {
        id: "faq",
        className: "text-white lg:px-[2.5rem] px-[1rem]",
        children: (0, ga.jsx)("div", {
          className:
            "relative min-h-screen isolate max-w-[1440px] mx-auto mb-[164px] mt-[6.25rem]",
          children: (0, ga.jsxs)("div", {
            className:
              "relative min-h-screen isolate flex md:flex-row flex-col lg:gap-0 gap-[2.5rem] ",
            children: [
              (0, ga.jsx)("div", {
                className:
                  "md:w-1/2 w-full h-full text-white md:sticky md:top-[6.25rem]",
                children: (0, ga.jsxs)("h2", {
                  className:
                    "lg:text-[3.25rem] md:text-[2.78rem] text-[2.375rem] leading-[1.2] md:text-left text-center ",
                  children: [
                    "Answers to the most ",
                    (0, ga.jsx)("br", {}),
                    " frequent questions",
                  ],
                }),
              }),
              (0, ga.jsx)("div", {
                className: "md:w-1/2 w-full h-full flex flex-col gap-[0.5rem]",
                children: [
                  {
                    title: "What is Auralex AI?",
                    answer:
                      "Auralex AI is a cutting-edge crypto trading platform that leverages artificial intelligence to provide real-time market insights, advanced analytics, and AI-powered trading assistance. It's designed to help both novice and experienced traders make smarter, more profitable decisions in the volatile cryptocurrency market.",
                  },
                  {
                    title: "Who is Auralex AI for?",
                    answer:
                      "Auralex AI is for anyone interested in cryptocurrency trading, from beginners looking to learn the ropes to seasoned traders seeking an edge. Whether you're a casual investor or a day trader, Auralex AI provides the tools and insights you need to succeed.",
                  },
                  {
                    title: "How does Auralex AI use AI?",
                    answer:
                      "Auralex AI utilizes AI in several ways, including:\n- Pattern Recognition: Identifying key chart patterns like bull/bear flags, double tops/bottoms, and head and shoulders.\n- Candlestick Analysis: Interpreting Japanese candlestick patterns to analyze trend strength and potential reversal points.\n- Market Intelligence: Analyzing news sentiment and its potential impact on token prices.\n- Predictive Analysis: Using AI to predict bullish, bearish, or neutral outcomes based on various indicators.",
                  },
                  {
                    title: "What data sources does Auralex AI use?",
                    answer:
                      "Auralex AI integrates with reputable data providers such as CoinGecko and CoinMarketCap for token data and market metrics. We also use ForexFactory or similar APIs for financial news and sentiment analysis.",
                  },
                  {
                    title: "What is the Trending Tokens Carousel?",
                    answer:
                      "The Trending Tokens Carousel is a dynamic, auto-scrolling display that highlights the top 10-15 trending tokens in real-time. It tracks tokens based on 24-hour price changes, trading volume surges, market cap growth, and positive social sentiment.",
                  },
                  {
                    title: "How does the Token Explorer work?",
                    answer:
                      "The Token Explorer allows you to explore the top 10,000 tokens with powerful filtering and sorting options. You can filter by market cap, supported chains, price, and volume, and sort by rank, market cap, price changes, and more.",
                  },
                  {
                    title:
                      "What kind of data is available in the Token Analytics Dashboard?",
                    answer:
                      "The Token Analytics Dashboard provides a comprehensive view of individual tokens, including:\n- Token Info: Contract address, description, official links, token distribution, launch date, and total supply.\n- Technical Indicators: RSI, MACD, moving averages, and volume profile.\n- TradingView Chart Integration: Professional charts for in-depth technical analysis.",
                  },
                  {
                    title: "Can the AI Trading Assistant make trades for me?",
                    answer:
                      "No, the AI Trading Assistant does not execute trades directly. It provides insights and recommendations based on AI analysis, helping you make more informed trading decisions. You retain full control over your trades.",
                  },
                  {
                    title:
                      "What kind of chart patterns does the AI Trading Assistant recognize?",
                    answer:
                      "The AI Trading Assistant can automatically detect key chart patterns such as bull/bear flags, double tops/bottoms, head and shoulders, and support/resistance levels.",
                  },
                ].map((n, r) =>
                  (0, ga.jsx)(
                    qc,
                    {
                      index: r,
                      title: n.title,
                      answer: n.answer,
                      hoveredIndex: e,
                      setHoveredIndex: t,
                    },
                    r
                  )
                ),
              }),
            ],
          }),
        }),
      });
    };
  const Gc = function () {
      const [e, t] = (0, r.useState)(!0);
      (0, r.useEffect)(() => {
        (async () => {
          await Promise.all([n(), a(), i()]), t(!1);
        })();
      }, []);
      const n = () => {
          const e = Array.from(document.images).map(
            (e) =>
              new Promise((t) => {
                e.complete
                  ? t(!0)
                  : ((e.onload = () => t(!0)), (e.onerror = () => t(!0)));
              })
          );
          return Promise.all(e);
        },
        a = () => {
          const e = Array.from(document.getElementsByTagName("video")).map(
            (e) =>
              new Promise((t) => {
                (e.onloadeddata = () => t(!0)), (e.onerror = () => t(!0));
              })
          );
          return Promise.all(e);
        },
        i = () => document.fonts.ready;
      return (0, ga.jsxs)(au, {
        children: [
          (0, ga.jsx)(Ku, { position: "top-right" }),
          e
            ? (0, ga.jsx)("div", { className: "w-full h-dvh bg-black" })
            : (0, ga.jsxs)("div", {
                children: [
                  (0, ga.jsx)(rc, {}),
                  (0, ga.jsx)(gc, {}),
                  (0, ga.jsx)(yc, {}),
                  (0, ga.jsx)(Cc, {}),
                  (0, ga.jsx)(Tc, {}),
                  (0, ga.jsx)(Fc, {}),
                  (0, ga.jsx)(Xc, {}),
                  (0, ga.jsx)(Vc, {}),
                ],
              }),
        ],
      });
    },
    Qc = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(488)
          .then(n.bind(n, 488))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: a, getLCP: i, getTTFB: o } = t;
            n(e), r(e), a(e), i(e), o(e);
          });
    };
  a
    .createRoot(document.getElementById("root"))
    .render((0, ga.jsx)(r.StrictMode, { children: (0, ga.jsx)(Gc, {}) })),
    Qc();
})();
//# sourceMappingURL=main.411c4040.js.map
