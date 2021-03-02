// https://github.com/armedi/rescript-blurhash
var BlurHash = (() => {
  var X = Object.defineProperty,
    pr = (r) => X(r, "__esModule", { value: !0 }),
    dr = (r, e) => () => (e || ((e = { exports: {} }), r(e.exports, e)), e.exports),
    Er = (r, e) => {
      pr(r);
      for (var n in e) X(r, n, { get: e[n], enumerable: !0 });
    },
    _r = dr((Ir) => {
      Er(Ir, { decode: () => cr, encode: () => fr, toDataURL: () => D });
      // if (self.document) {
      //   if (
      //     (document.addEventListener("DOMContentLoaded", () => {
      //       document.querySelectorAll("img[data-blurhash]").forEach(sr);
      //     }),
      //     "MutationObsever" in window)
      //   ) {
      //     const r = new MutationObserver((e) => {
      //       for (const n of e)
      //         n.type === "childList" &&
      //           n.target === document.body &&
      //           n.addedNodes.forEach(
      //             (t) => t.tagName === "IMG" && t.hasAttribute("data-blurhash") && sr(t)
      //           );
      //     });
      //     r.observe(document.body || document.documentElement, { childList: !0, subtree: !0 });
      //   }
      //   function sr(r) {
      //     setTimeout(() => {
      //       const e = r.getAttribute("src"),
      //         n = new Image();
      //       n.setAttribute("src", e),
      //         n.addEventListener("load", () => r.setAttribute("src", e), { once: !0 });
      //       const t = D(r.dataset.blurhash, 32, 32);
      //       r.setAttribute("src", t);
      //     });
      //   }
      // }
    });
  function x(r) {
    return r === void 0
      ? { BS_PRIVATE_NESTED_SOME_NONE: 0 }
      : r !== null && r.BS_PRIVATE_NESTED_SOME_NONE !== void 0
      ? { BS_PRIVATE_NESTED_SOME_NONE: (r.BS_PRIVATE_NESTED_SOME_NONE + 1) | 0 }
      : r;
  }
  var L = { contents: 0 };
  function z(r) {
    return (L.contents = (L.contents + 1) | 0), r + ("/" + L.contents);
  }
  var F = z("Caml_js_exceptions.Error");
  function I(r) {
    throw new Error(r);
  }
  var Vr = F;
  function O(r, e, n) {
    for (var t = new Array(n), u = 0, i = e; u < n; )
      (t[u] = r[i]), (u = (u + 1) | 0), (i = (i + 1) | 0);
    return t;
  }
  function G(r, e) {
    for (;;) {
      var n = e,
        t = r,
        u = t.length,
        i = u === 0 ? 1 : u,
        l = n.length,
        a = (i - l) | 0;
      if (a === 0) return t.apply(null, n);
      if (a >= 0)
        return (function (o, c) {
          return function (p) {
            return G(o, c.concat([p]));
          };
        })(t, n);
      (e = O(n, i, -a | 0)), (r = t.apply(null, O(n, 0, i)));
      continue;
    }
  }
  function gr(r, e) {
    var n = r.length;
    if (n === 1) return r(e);
    switch (n) {
      case 1:
        return r(e);
      case 2:
        return function (t) {
          return r(e, t);
        };
      case 3:
        return function (t, u) {
          return r(e, t, u);
        };
      case 4:
        return function (t, u, i) {
          return r(e, t, u, i);
        };
      case 5:
        return function (t, u, i, l) {
          return r(e, t, u, i, l);
        };
      case 6:
        return function (t, u, i, l, a) {
          return r(e, t, u, i, l, a);
        };
      case 7:
        return function (t, u, i, l, a, o) {
          return r(e, t, u, i, l, a, o);
        };
      default:
        return G(r, [e]);
    }
  }
  function y(r) {
    var e = r.length;
    return e === 1
      ? r
      : function (n) {
          return gr(r, n);
        };
  }
  function P(r, e, n) {
    var t = r.length;
    if (t === 2) return r(e, n);
    switch (t) {
      case 1:
        return G(r(e), [n]);
      case 2:
        return r(e, n);
      case 3:
        return function (u) {
          return r(e, n, u);
        };
      case 4:
        return function (u, i) {
          return r(e, n, u, i);
        };
      case 5:
        return function (u, i, l) {
          return r(e, n, u, i, l);
        };
      case 6:
        return function (u, i, l, a) {
          return r(e, n, u, i, l, a);
        };
      case 7:
        return function (u, i, l, a, o) {
          return r(e, n, u, i, l, a, o);
        };
      default:
        return G(r, [e, n]);
    }
  }
  function J(r) {
    var e = r.length;
    return e === 2
      ? r
      : function (n, t) {
          return P(r, n, t);
        };
  }
  var V = 2147483647,
    k = -2147483648;
  function M(r) {
    return r > V ? V : r < k ? k : Math.floor(r);
  }
  var K = M;
  function Q(r, e) {
    return r > e ? r : e;
  }
  function Z(r, e) {
    if (e >= 0 && e < r.length) return x(r[e]);
  }
  function Y(r, e) {
    if (r <= 0) return [];
    for (var n = new Array(r), t = 0; t < r; ++t) n[t] = e;
    return n;
  }
  function $(r, e) {
    var n = (e - r) | 0;
    if (n < 0) return [];
    for (var t = new Array((n + 1) | 0), u = 0; u <= n; ++u) t[u] = (r + u) | 0;
    return t;
  }
  function rr(r, e) {
    for (
      var n = r.length, t = e < 0 ? Q((n + e) | 0, 0) : e, u = (n - t) | 0, i = new Array(u), l = 0;
      l < u;
      ++l
    )
      i[l] = r[(t + l) | 0];
    return i;
  }
  function yr(r, e) {
    for (var n = 0, t = r.length; n < t; ++n) e(r[n]);
  }
  function er(r, e) {
    return yr(r, y(e));
  }
  function Ar(r, e) {
    for (var n = r.length, t = new Array(n), u = 0; u < n; ++u) t[u] = e(r[u]);
    return t;
  }
  function nr(r, e) {
    return Ar(r, y(e));
  }
  function Br(r, e, n) {
    for (var t = e, u = 0, i = r.length; u < i; ++u) t = n(t, r[u]);
    return t;
  }
  function R(r, e, n) {
    return Br(r, e, J(n));
  }
  function wr(r, e) {
    return r.TAG ? { TAG: 1, _0: r._0 } : { TAG: 0, _0: e(r._0) };
  }
  function S(r, e) {
    return wr(r, y(e));
  }
  function Cr(r, e) {
    return r.TAG ? { TAG: 1, _0: r._0 } : e(r._0);
  }
  function H(r, e) {
    return Cr(r, y(e));
  }
  function tr(r, e, n) {
    const t = document.createElement("canvas");
    (t.width = e), (t.height = n);
    const u = t.getContext("2d"),
      i = u.createImageData(e, n);
    return i.data.set(r), u.putImageData(i, 0, 0), t.toDataURL();
  }
  function b(r) {
    var e = r / 255;
    return e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
  }
  function d(r) {
    var e = Math.max(Math.min(r, 1), 0);
    return e <= 0.0031308
      ? Math.round(e * 12.92 * 255 + 0.5) | 0
      : Math.round((1.055 * Math.pow(e, 1 / 2.4) - 0.055) * 255 + 0.5) | 0;
  }
  function W(r, e) {
    return Math.sign(r) * Math.pow(Math.abs(r), e);
  }
  var ur = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~";
  function U(r) {
    return R(r.split(""), 0, function (e, n) {
      return (Math.imul(e, 83) + ur.indexOf(n)) | 0;
    });
  }
  function A(r, e) {
    return R($(1, e), "", function (n, t) {
      var u = M((Math.floor(r) / Math.pow(83, (e - t) | 0)) % 83);
      return n + ur.charAt(u);
    });
  }
  var ir = function (r, e) {
    var n, t;
    t = e.length;
    var u = [];
    for (n = 0; n < t - 1; ++n) u.push(e[n]);
    var i = e[t - 1];
    for (n = 0; n < i.length; ++n) u.push(i[n]);
    return r.apply(null, u);
  };
  function Tr(r, e, n, t) {
    for (var u = 0, i = 0, l = 0, a = e << 2, o = 0; o < e; ++o)
      (function (p) {
        for (var m = 0; m < n; ++m) {
          var s = (function (v) {
            return function (_) {
              return P(t, p, v) * b(r[((((p << 2) + _) | 0) + Math.imul(v, a)) | 0]);
            };
          })(m);
          (u = u + s(0)), (i = i + s(1)), (l = l + s(2));
        }
      })(o);
    var c = 1 / Math.imul(e, n);
    return [u * c, i * c, l * c];
  }
  function lr(r, e) {
    return e >= 1 && e <= 9
      ? { TAG: 0, _0: r }
      : { TAG: 1, _0: { _0: "BlurHash must have between 1 and 9 components" } };
  }
  function Mr(r) {
    return ((((d(r[0]) << 16) + (d(r[1]) << 8)) | 0) + d(r[2])) | 0;
  }
  function Rr(r, e) {
    var n = function (t) {
      return M(Math.max(Math.min(Math.floor(W(t / e, 0.5) * 9 + 9.5), 18), 0));
    };
    return (((Math.imul(Math.imul(n(r[0]), 19), 19) + Math.imul(n(r[1]), 19)) | 0) + n(r[2])) | 0;
  }
  function ar(r, e, n, t, u) {
    return S(
      H(
        H(lr(r, t), function (i) {
          return lr(i, u);
        }),
        function (i) {
          return Math.imul(e, n) << 2 === i.length
            ? { TAG: 0, _0: i }
            : { TAG: 1, _0: { _0: "Width and height must match the pixels array" } };
        }
      ),
      function (i) {
        for (var l = [], a = 0; a < u; ++a)
          (function (f) {
            for (var h = 0; h < t; ++h) {
              var w = h === 0 && f === 0 ? 1 : 2;
              l.push(
                Tr(
                  i,
                  e,
                  n,
                  (function (C, E) {
                    return function (g, T) {
                      return E * Math.cos((Math.PI * C * g) / e) * Math.cos((Math.PI * f * T) / n);
                    };
                  })(h, w)
                )
              );
            }
          })(a);
        var o = l[0],
          c = rr(l, 1),
          p = ir(Math.max, [
            nr(c, function (f) {
              return Math.max(f[0], f[1], f[2]);
            }),
          ]),
          m = Math.max(Math.min(Math.floor(p * 166 - 0.5), 82), 0),
          s = c.length !== 0 ? (m + 1) / 166 : 1,
          v = A((((t - 1) | 0) + Math.imul((u - 1) | 0, 9)) | 0, 1),
          B = c.length !== 0 ? A(m, 1) : A(0, 1),
          _ = A(Mr(o), 4);
        return R(c, v + B + _, function (f, h) {
          return f + A(Rr(h, s), 2);
        });
      }
    );
  }
  function br(r, e) {
    return r.length >= e
      ? { TAG: 0, _0: r }
      : { TAG: 1, _0: { _0: "The blurhash string must be at least " + String(e) + " characters" } };
  }
  function Ur(r) {
    return [b(r >> 16), b((r >> 8) & 255), b(r & 255)];
  }
  function Nr(r, e) {
    var n = function (t) {
      return W((t - 9) / 9, 2) * e;
    };
    return [n((r / 361) | 0), n(((r / 19) | 0) % 19), n(r % 19)];
  }
  function j(r, e, n, t) {
    var u = U(r.charAt(0)),
      i = (K(u / 9) + 1) | 0,
      l = ((u % 9) + 1) | 0;
    return S(
      H(br(r, 6), function (a) {
        var o = (4 + Math.imul(l << 1, i)) | 0,
          c = a.length;
        return c === o
          ? { TAG: 0, _0: a }
          : {
              TAG: 1,
              _0: {
                _0:
                  "Blurhash length mismatch: length is " +
                  String(c) +
                  " but it should be " +
                  String(o),
              },
            };
      }),
      function (a) {
        for (
          var o = U(a.charAt(1)),
            c = ((o + 1) | 0) / 166,
            p = Math.imul(l, i),
            m = Y(p, [0, 0, 0]),
            s = 0;
          s < p;
          ++s
        )
          s !== 0
            ? (m[s] = Nr(U(a.substring((4 + (s << 1)) | 0, (6 + (s << 1)) | 0)), c * t))
            : (m[0] = Ur(U(a.substring(2, 6))));
        for (var v = e << 2, B = new Uint8ClampedArray(Math.imul(v, n)), _ = 0; _ < n; ++_)
          for (var f = 0; f < e; ++f) {
            for (var h = 0, w = 0, C = 0, E = 0; E < i; ++E)
              for (var g = 0; g < l; ++g) {
                var T = Math.cos((Math.PI * f * g) / e) * Math.cos((Math.PI * _ * E) / n),
                  N = Z(m, (g + Math.imul(E, l)) | 0);
                N !== void 0 && ((h = h + N[0] * T), (w = w + N[1] * T), (C = C + N[2] * T));
              }
            var mr = d(h),
              vr = d(w),
              hr = d(C);
            er(
              [
                [((((f << 2) + 0) | 0) + Math.imul(_, v)) | 0, mr],
                [((((f << 2) + 1) | 0) + Math.imul(_, v)) | 0, vr],
                [((((f << 2) + 2) | 0) + Math.imul(_, v)) | 0, hr],
                [((((f << 2) + 3) | 0) + Math.imul(_, v)) | 0, 255],
              ],
              function (q) {
                B[q[0]] = q[1];
              }
            );
          }
        return B;
      }
    );
  }
  function or(r, e, n) {
    return S(j(r, e, n, 1), function (t) {
      return tr(t, e, n);
    });
  }
  function fr(r, e, n, t, u) {
    var i = ar(r, e, n, t, u);
    return i.TAG ? I(i._0._0) : i._0;
  }
  function cr(r, e, n) {
    var t = j(r, e, n, 1);
    return t.TAG ? I(t._0._0) : t._0;
  }
  function D(r, e, n) {
    var t = or(r, e, n);
    return t.TAG ? I(t._0._0) : t._0;
  }
  return _r();
})();
