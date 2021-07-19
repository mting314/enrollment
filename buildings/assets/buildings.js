! function (t) {
    var n = {};

    function r(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = t, r.c = n, r.d = function (t, n, e) {
        r.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, n) {
        if (1 & n && (t = r(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var i in t) r.d(e, i, function (n) {
                return t[n]
            }.bind(null, i));
        return e
    }, r.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(n, "a", n), n
    }, r.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "", r(r.s = 22)
}({
    2: function (t, n, r) {
        "use strict";
        r.d(n, "a", (function () {
            return b
        }));
        var e = {},
            i = {};

        function a(t) {
            return new Function("d", "return {" + t.map((function (t, n) {
                return JSON.stringify(t) + ": d[" + n + '] || ""'
            })).join(",") + "}")
        }

        function o(t) {
            var n = Object.create(null),
                r = [];
            return t.forEach((function (t) {
                for (var e in t) e in n || r.push(n[e] = e)
            })), r
        }

        function u(t, n) {
            var r = t + "",
                e = r.length;
            return e < n ? new Array(n - e + 1).join(0) + r : r
        }

        function c(t) {
            var n, r = t.getUTCHours(),
                e = t.getUTCMinutes(),
                i = t.getUTCSeconds(),
                a = t.getUTCMilliseconds();
            return isNaN(t) ? "Invalid Date" : ((n = t.getUTCFullYear()) < 0 ? "-" + u(-n, 6) : n > 9999 ? "+" + u(n, 6) : u(n, 4)) + "-" + u(t.getUTCMonth() + 1, 2) + "-" + u(t.getUTCDate(), 2) + (a ? "T" + u(r, 2) + ":" + u(e, 2) + ":" + u(i, 2) + "." + u(a, 3) + "Z" : i ? "T" + u(r, 2) + ":" + u(e, 2) + ":" + u(i, 2) + "Z" : e || r ? "T" + u(r, 2) + ":" + u(e, 2) + "Z" : "")
        }
        var s = function (t) {
                var n = new RegExp('["' + t + "\n\r]"),
                    r = t.charCodeAt(0);

                function u(t, n) {
                    var a, o = [],
                        u = t.length,
                        c = 0,
                        s = 0,
                        l = u <= 0,
                        f = !1;

                    function h() {
                        if (l) return i;
                        if (f) return f = !1, e;
                        var n, a, o = c;
                        if (34 === t.charCodeAt(o)) {
                            for (; c++ < u && 34 !== t.charCodeAt(c) || 34 === t.charCodeAt(++c););
                            return (n = c) >= u ? l = !0 : 10 === (a = t.charCodeAt(c++)) ? f = !0 : 13 === a && (f = !0, 10 === t.charCodeAt(c) && ++c), t.slice(o + 1, n - 1).replace(/""/g, '"')
                        }
                        for (; c < u;) {
                            if (10 === (a = t.charCodeAt(n = c++))) f = !0;
                            else if (13 === a) f = !0, 10 === t.charCodeAt(c) && ++c;
                            else if (a !== r) continue;
                            return t.slice(o, n)
                        }
                        return l = !0, t.slice(o, u)
                    }
                    for (10 === t.charCodeAt(u - 1) && --u, 13 === t.charCodeAt(u - 1) && --u;
                        (a = h()) !== i;) {
                        for (var d = []; a !== e && a !== i;) d.push(a), a = h();
                        n && null == (d = n(d, s++)) || o.push(d)
                    }
                    return o
                }

                function s(n, r) {
                    return n.map((function (n) {
                        return r.map((function (t) {
                            return f(n[t])
                        })).join(t)
                    }))
                }

                function l(n) {
                    return n.map(f).join(t)
                }

                function f(t) {
                    return null == t ? "" : t instanceof Date ? c(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                }
                return {
                    parse: function (t, n) {
                        var r, e, i = u(t, (function (t, i) {
                            if (r) return r(t, i - 1);
                            e = t, r = n ? function (t, n) {
                                var r = a(t);
                                return function (e, i) {
                                    return n(r(e), i, t)
                                }
                            }(t, n) : a(t)
                        }));
                        return i.columns = e || [], i
                    },
                    parseRows: u,
                    format: function (n, r) {
                        return null == r && (r = o(n)), [r.map(f).join(t)].concat(s(n, r)).join("\n")
                    },
                    formatBody: function (t, n) {
                        return null == n && (n = o(t)), s(t, n).join("\n")
                    },
                    formatRows: function (t) {
                        return t.map(l).join("\n")
                    },
                    formatRow: l,
                    formatValue: f
                }
            },
            l = s(","),
            f = l.parse,
            h = (l.parseRows, l.format, l.formatBody, l.formatRows, l.formatRow, l.formatValue, s("\t")),
            d = h.parse;
        h.parseRows, h.format, h.formatBody, h.formatRows, h.formatRow, h.formatValue;

        function g(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var p = function (t, n) {
            return fetch(t, n).then(g)
        };

        function m(t) {
            return function (n, r, e) {
                return 2 === arguments.length && "function" == typeof r && (e = r, r = void 0), p(n, r).then((function (n) {
                    return t(n, e)
                }))
            }
        }
        var b = m(f);
        m(d);

        function y(t) {
            return function (n, r) {
                return p(n, r).then((function (n) {
                    return (new DOMParser).parseFromString(n, t)
                }))
            }
        }
        y("application/xml"), y("text/html"), y("image/svg+xml")
    },
    22: function (t, n, r) {
        t.exports = r(37)
    },
    37: function (t, n, r) {
        "use strict";
        r.r(n);
        var e = r(2),
            i = function (t, n, r) {
                t.prototype = n.prototype = r, r.constructor = t
            };

        function a(t, n) {
            var r = Object.create(t.prototype);
            for (var e in n) r[e] = n[e];
            return r
        }

        function o() {}
        var u = "\\s*([+-]?\\d+)\\s*",
            c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            l = /^#([0-9a-f]{3,8})$/,
            f = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
            h = new RegExp("^rgb\\(" + [s, s, s] + "\\)$"),
            d = new RegExp("^rgba\\(" + [u, u, u, c] + "\\)$"),
            g = new RegExp("^rgba\\(" + [s, s, s, c] + "\\)$"),
            p = new RegExp("^hsl\\(" + [c, s, s] + "\\)$"),
            m = new RegExp("^hsla\\(" + [c, s, s, c] + "\\)$"),
            b = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function y() {
            return this.rgb().formatHex()
        }

        function v() {
            return this.rgb().formatRgb()
        }

        function w(t) {
            var n, r;
            return t = (t + "").trim().toLowerCase(), (n = l.exec(t)) ? (r = n[1].length, n = parseInt(n[1], 16), 6 === r ? M(n) : 3 === r ? new j(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === r ? new j(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === r ? new j(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = f.exec(t)) ? new j(n[1], n[2], n[3], 1) : (n = h.exec(t)) ? new j(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = d.exec(t)) ? x(n[1], n[2], n[3], n[4]) : (n = g.exec(t)) ? x(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = p.exec(t)) ? R(n[1], n[2] / 100, n[3] / 100, 1) : (n = m.exec(t)) ? R(n[1], n[2] / 100, n[3] / 100, n[4]) : b.hasOwnProperty(t) ? M(b[t]) : "transparent" === t ? new j(NaN, NaN, NaN, 0) : null
        }

        function M(t) {
            return new j(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function x(t, n, r, e) {
            return e <= 0 && (t = n = r = NaN), new j(t, n, r, e)
        }

        function k(t) {
            return t instanceof o || (t = w(t)), t ? new j((t = t.rgb()).r, t.g, t.b, t.opacity) : new j
        }

        function N(t, n, r, e) {
            return 1 === arguments.length ? k(t) : new j(t, n, r, null == e ? 1 : e)
        }

        function j(t, n, r, e) {
            this.r = +t, this.g = +n, this.b = +r, this.opacity = +e
        }

        function A() {
            return "#" + C(this.r) + C(this.g) + C(this.b)
        }

        function S() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }

        function C(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function R(t, n, r, e) {
            return e <= 0 ? t = n = r = NaN : r <= 0 || r >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new O(t, n, r, e)
        }

        function E(t) {
            if (t instanceof O) return new O(t.h, t.s, t.l, t.opacity);
            if (t instanceof o || (t = w(t)), !t) return new O;
            if (t instanceof O) return t;
            var n = (t = t.rgb()).r / 255,
                r = t.g / 255,
                e = t.b / 255,
                i = Math.min(n, r, e),
                a = Math.max(n, r, e),
                u = NaN,
                c = a - i,
                s = (a + i) / 2;
            return c ? (u = n === a ? (r - e) / c + 6 * (r < e) : r === a ? (e - n) / c + 2 : (n - r) / c + 4, c /= s < .5 ? a + i : 2 - a - i, u *= 60) : c = s > 0 && s < 1 ? 0 : u, new O(u, c, s, t.opacity)
        }

        function O(t, n, r, e) {
            this.h = +t, this.s = +n, this.l = +r, this.opacity = +e
        }

        function T(t, n, r) {
            return 255 * (t < 60 ? n + (r - n) * t / 60 : t < 180 ? r : t < 240 ? n + (r - n) * (240 - t) / 60 : n)
        }

        function $(t, n, r, e, i) {
            var a = t * t,
                o = a * t;
            return ((1 - 3 * t + 3 * a - o) * n + (4 - 6 * a + 3 * o) * r + (1 + 3 * t + 3 * a - 3 * o) * e + o * i) / 6
        }
        i(o, w, {
            copy: function (t) {
                return Object.assign(new this.constructor, this, t)
            },
            displayable: function () {
                return this.rgb().displayable()
            },
            hex: y,
            formatHex: y,
            formatHsl: function () {
                return E(this).formatHsl()
            },
            formatRgb: v,
            toString: v
        }), i(j, N, a(o, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new j(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new j(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function () {
                return this
            },
            displayable: function () {
                return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: A,
            formatHex: A,
            formatRgb: S,
            toString: S
        })), i(O, (function (t, n, r, e) {
            return 1 === arguments.length ? E(t) : new O(t, n, r, null == e ? 1 : e)
        }), a(o, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new O(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new O(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function () {
                var t = this.h % 360 + 360 * (this.h < 0),
                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    r = this.l,
                    e = r + (r < .5 ? r : 1 - r) * n,
                    i = 2 * r - e;
                return new j(T(t >= 240 ? t - 240 : t + 120, i, e), T(t, i, e), T(t < 120 ? t + 240 : t - 120, i, e), this.opacity)
            },
            displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            },
            formatHsl: function () {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
            }
        }));
        var z = function (t) {
            return function () {
                return t
            }
        };

        function q(t, n) {
            return function (r) {
                return t + r * n
            }
        }

        function P(t) {
            return 1 == (t = +t) ? Z : function (n, r) {
                return r - n ? function (t, n, r) {
                    return t = Math.pow(t, r), n = Math.pow(n, r) - t, r = 1 / r,
                        function (e) {
                            return Math.pow(t + e * n, r)
                        }
                }(n, r, t) : z(isNaN(n) ? r : n)
            }
        }

        function Z(t, n) {
            var r = n - t;
            return r ? q(t, r) : z(isNaN(t) ? n : t)
        }
        var I = function t(n) {
            var r = P(n);

            function e(t, n) {
                var e = r((t = N(t)).r, (n = N(n)).r),
                    i = r(t.g, n.g),
                    a = r(t.b, n.b),
                    o = Z(t.opacity, n.opacity);
                return function (n) {
                    return t.r = e(n), t.g = i(n), t.b = a(n), t.opacity = o(n), t + ""
                }
            }
            return e.gamma = t, e
        }(1);

        function U(t) {
            return function (n) {
                var r, e, i = n.length,
                    a = new Array(i),
                    o = new Array(i),
                    u = new Array(i);
                for (r = 0; r < i; ++r) e = N(n[r]), a[r] = e.r || 0, o[r] = e.g || 0, u[r] = e.b || 0;
                return a = t(a), o = t(o), u = t(u), e.opacity = 1,
                    function (t) {
                        return e.r = a(t), e.g = o(t), e.b = u(t), e + ""
                    }
            }
        }
        var _ = U((function (t) {
                var n = t.length - 1;
                return function (r) {
                    var e = r <= 0 ? r = 0 : r >= 1 ? (r = 1, n - 1) : Math.floor(r * n),
                        i = t[e],
                        a = t[e + 1],
                        o = e > 0 ? t[e - 1] : 2 * i - a,
                        u = e < n - 1 ? t[e + 2] : 2 * a - i;
                    return $((r - e / n) * n, o, i, a, u)
                }
            })),
            D = (U((function (t) {
                var n = t.length;
                return function (r) {
                    var e = Math.floor(((r %= 1) < 0 ? ++r : r) * n),
                        i = t[(e + n - 1) % n],
                        a = t[e % n],
                        o = t[(e + 1) % n],
                        u = t[(e + 2) % n];
                    return $((r - e / n) * n, i, a, o, u)
                }
            })), function (t, n) {
                n || (n = []);
                var r, e = t ? Math.min(n.length, t.length) : 0,
                    i = n.slice();
                return function (a) {
                    for (r = 0; r < e; ++r) i[r] = t[r] * (1 - a) + n[r] * a;
                    return i
                }
            });

        function F(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        }

        function B(t, n) {
            var r, e = n ? n.length : 0,
                i = t ? Math.min(e, t.length) : 0,
                a = new Array(i),
                o = new Array(e);
            for (r = 0; r < i; ++r) a[r] = G(t[r], n[r]);
            for (; r < e; ++r) o[r] = n[r];
            return function (t) {
                for (r = 0; r < i; ++r) o[r] = a[r](t);
                return o
            }
        }
        var H = function (t, n) {
                var r = new Date;
                return t = +t, n = +n,
                    function (e) {
                        return r.setTime(t * (1 - e) + n * e), r
                    }
            },
            V = function (t, n) {
                return t = +t, n = +n,
                    function (r) {
                        return t * (1 - r) + n * r
                    }
            },
            X = function (t, n) {
                var r, e = {},
                    i = {};
                for (r in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) r in t ? e[r] = G(t[r], n[r]) : i[r] = n[r];
                return function (t) {
                    for (r in e) i[r] = e[r](t);
                    return i
                }
            },
            Y = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            W = new RegExp(Y.source, "g");
        var J = function (t, n) {
                var r, e, i, a = Y.lastIndex = W.lastIndex = 0,
                    o = -1,
                    u = [],
                    c = [];
                for (t += "", n += "";
                    (r = Y.exec(t)) && (e = W.exec(n));)(i = e.index) > a && (i = n.slice(a, i), u[o] ? u[o] += i : u[++o] = i), (r = r[0]) === (e = e[0]) ? u[o] ? u[o] += e : u[++o] = e : (u[++o] = null, c.push({
                    i: o,
                    x: V(r, e)
                })), a = W.lastIndex;
                return a < n.length && (i = n.slice(a), u[o] ? u[o] += i : u[++o] = i), u.length < 2 ? c[0] ? function (t) {
                    return function (n) {
                        return t(n) + ""
                    }
                }(c[0].x) : function (t) {
                    return function () {
                        return t
                    }
                }(n) : (n = c.length, function (t) {
                    for (var r, e = 0; e < n; ++e) u[(r = c[e]).i] = r.x(t);
                    return u.join("")
                })
            },
            G = function (t, n) {
                var r, e = typeof n;
                return null == n || "boolean" === e ? z(n) : ("number" === e ? V : "string" === e ? (r = w(n)) ? (n = r, I) : J : n instanceof w ? I : n instanceof Date ? H : F(n) ? D : Array.isArray(n) ? B : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? X : V)(t, n)
            },
            K = function (t, n) {
                return t = +t, n = +n,
                    function (r) {
                        return Math.round(t * (1 - r) + n * r)
                    }
            },
            Q = function (t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            };
        var tt, nt;
        1 === (tt = Q).length && (nt = tt, tt = function (t, n) {
            return Q(nt(t), n)
        });

        function rt(t) {
            return t
        }

        function et(t, n) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    "function" == typeof t ? this.interpolator(t) : this.range(t);
                    break;
                default:
                    this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n)
            }
            return this
        }
        var it = Math.sqrt(50),
            at = Math.sqrt(10),
            ot = Math.sqrt(2),
            ut = function (t, n, r) {
                var e, i, a, o, u = -1;
                if (r = +r, (t = +t) === (n = +n) && r > 0) return [t];
                if ((e = n < t) && (i = t, t = n, n = i), 0 === (o = ct(t, n, r)) || !isFinite(o)) return [];
                if (o > 0)
                    for (t = Math.ceil(t / o), n = Math.floor(n / o), a = new Array(i = Math.ceil(n - t + 1)); ++u < i;) a[u] = (t + u) * o;
                else
                    for (t = Math.floor(t * o), n = Math.ceil(n * o), a = new Array(i = Math.ceil(t - n + 1)); ++u < i;) a[u] = (t - u) / o;
                return e && a.reverse(), a
            };

        function ct(t, n, r) {
            var e = (n - t) / Math.max(0, r),
                i = Math.floor(Math.log(e) / Math.LN10),
                a = e / Math.pow(10, i);
            return i >= 0 ? (a >= it ? 10 : a >= at ? 5 : a >= ot ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= it ? 10 : a >= at ? 5 : a >= ot ? 2 : 1)
        }
        var st = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function lt(t) {
            if (!(n = st.exec(t))) throw new Error("invalid format: " + t);
            var n;
            return new ft({
                fill: n[1],
                align: n[2],
                sign: n[3],
                symbol: n[4],
                zero: n[5],
                width: n[6],
                comma: n[7],
                precision: n[8] && n[8].slice(1),
                trim: n[9],
                type: n[10]
            })
        }

        function ft(t) {
            this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
        }
        lt.prototype = ft.prototype, ft.prototype.toString = function () {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        };
        var ht, dt, gt, pt, mt = function (t, n) {
                if ((r = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                var r, e = t.slice(0, r);
                return [e.length > 1 ? e[0] + e.slice(2) : e, +t.slice(r + 1)]
            },
            bt = function (t) {
                return (t = mt(Math.abs(t))) ? t[1] : NaN
            },
            yt = function (t, n) {
                var r = mt(t, n);
                if (!r) return t + "";
                var e = r[0],
                    i = r[1];
                return i < 0 ? "0." + new Array(-i).join("0") + e : e.length > i + 1 ? e.slice(0, i + 1) + "." + e.slice(i + 1) : e + new Array(i - e.length + 2).join("0")
            },
            vt = {
                "%": function (t, n) {
                    return (100 * t).toFixed(n)
                },
                b: function (t) {
                    return Math.round(t).toString(2)
                },
                c: function (t) {
                    return t + ""
                },
                d: function (t) {
                    return Math.round(t).toString(10)
                },
                e: function (t, n) {
                    return t.toExponential(n)
                },
                f: function (t, n) {
                    return t.toFixed(n)
                },
                g: function (t, n) {
                    return t.toPrecision(n)
                },
                o: function (t) {
                    return Math.round(t).toString(8)
                },
                p: function (t, n) {
                    return yt(100 * t, n)
                },
                r: yt,
                s: function (t, n) {
                    var r = mt(t, n);
                    if (!r) return t + "";
                    var e = r[0],
                        i = r[1],
                        a = i - (ht = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                        o = e.length;
                    return a === o ? e : a > o ? e + new Array(a - o + 1).join("0") : a > 0 ? e.slice(0, a) + "." + e.slice(a) : "0." + new Array(1 - a).join("0") + mt(t, Math.max(0, n + a - 1))[0]
                },
                X: function (t) {
                    return Math.round(t).toString(16).toUpperCase()
                },
                x: function (t) {
                    return Math.round(t).toString(16)
                }
            },
            wt = function (t) {
                return t
            },
            Mt = Array.prototype.map,
            xt = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        dt = function (t) {
            var n, r, e = void 0 === t.grouping || void 0 === t.thousands ? wt : (n = Mt.call(t.grouping, Number), r = t.thousands + "", function (t, e) {
                    for (var i = t.length, a = [], o = 0, u = n[0], c = 0; i > 0 && u > 0 && (c + u + 1 > e && (u = Math.max(1, e - c)), a.push(t.substring(i -= u, i + u)), !((c += u + 1) > e));) u = n[o = (o + 1) % n.length];
                    return a.reverse().join(r)
                }),
                i = void 0 === t.currency ? "" : t.currency[0] + "",
                a = void 0 === t.currency ? "" : t.currency[1] + "",
                o = void 0 === t.decimal ? "." : t.decimal + "",
                u = void 0 === t.numerals ? wt : function (t) {
                    return function (n) {
                        return n.replace(/[0-9]/g, (function (n) {
                            return t[+n]
                        }))
                    }
                }(Mt.call(t.numerals, String)),
                c = void 0 === t.percent ? "%" : t.percent + "",
                s = void 0 === t.minus ? "-" : t.minus + "",
                l = void 0 === t.nan ? "NaN" : t.nan + "";

            function f(t) {
                var n = (t = lt(t)).fill,
                    r = t.align,
                    f = t.sign,
                    h = t.symbol,
                    d = t.zero,
                    g = t.width,
                    p = t.comma,
                    m = t.precision,
                    b = t.trim,
                    y = t.type;
                "n" === y ? (p = !0, y = "g") : vt[y] || (void 0 === m && (m = 12), b = !0, y = "g"), (d || "0" === n && "=" === r) && (d = !0, n = "0", r = "=");
                var v = "$" === h ? i : "#" === h && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "",
                    w = "$" === h ? a : /[%p]/.test(y) ? c : "",
                    M = vt[y],
                    x = /[defgprs%]/.test(y);

                function k(t) {
                    var i, a, c, h = v,
                        k = w;
                    if ("c" === y) k = M(t) + k, t = "";
                    else {
                        var N = (t = +t) < 0;
                        if (t = isNaN(t) ? l : M(Math.abs(t), m), b && (t = function (t) {
                                t: for (var n, r = t.length, e = 1, i = -1; e < r; ++e) switch (t[e]) {
                                    case ".":
                                        i = n = e;
                                        break;
                                    case "0":
                                        0 === i && (i = e), n = e;
                                        break;
                                    default:
                                        if (!+t[e]) break t;
                                        i > 0 && (i = 0)
                                }
                                return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
                            }(t)), N && 0 == +t && (N = !1), h = (N ? "(" === f ? f : s : "-" === f || "(" === f ? "" : f) + h, k = ("s" === y ? xt[8 + ht / 3] : "") + k + (N && "(" === f ? ")" : ""), x)
                            for (i = -1, a = t.length; ++i < a;)
                                if (48 > (c = t.charCodeAt(i)) || c > 57) {
                                    k = (46 === c ? o + t.slice(i + 1) : t.slice(i)) + k, t = t.slice(0, i);
                                    break
                                }
                    }
                    p && !d && (t = e(t, 1 / 0));
                    var j = h.length + t.length + k.length,
                        A = j < g ? new Array(g - j + 1).join(n) : "";
                    switch (p && d && (t = e(A + t, A.length ? g - k.length : 1 / 0), A = ""), r) {
                        case "<":
                            t = h + t + k + A;
                            break;
                        case "=":
                            t = h + A + t + k;
                            break;
                        case "^":
                            t = A.slice(0, j = A.length >> 1) + h + t + k + A.slice(j);
                            break;
                        default:
                            t = A + h + t + k
                    }
                    return u(t)
                }
                return m = void 0 === m ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m)), k.toString = function () {
                    return t + ""
                }, k
            }
            return {
                format: f,
                formatPrefix: function (t, n) {
                    var r = f(((t = lt(t)).type = "f", t)),
                        e = 3 * Math.max(-8, Math.min(8, Math.floor(bt(n) / 3))),
                        i = Math.pow(10, -e),
                        a = xt[8 + e / 3];
                    return function (t) {
                        return r(i * t) + a
                    }
                }
            }
        }({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            minus: "-"
        }), gt = dt.format, pt = dt.formatPrefix;
        var kt = function (t, n, r, e) {
            var i, a = function (t, n, r) {
                var e = Math.abs(n - t) / Math.max(0, r),
                    i = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)),
                    a = e / i;
                return a >= it ? i *= 10 : a >= at ? i *= 5 : a >= ot && (i *= 2), n < t ? -i : i
            }(t, n, r);
            switch ((e = lt(null == e ? ",f" : e)).type) {
                case "s":
                    var o = Math.max(Math.abs(t), Math.abs(n));
                    return null != e.precision || isNaN(i = function (t, n) {
                        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(bt(n) / 3))) - bt(Math.abs(t)))
                    }(a, o)) || (e.precision = i), pt(e, o);
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                    null != e.precision || isNaN(i = function (t, n) {
                        return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, bt(n) - bt(t)) + 1
                    }(a, Math.max(Math.abs(t), Math.abs(n)))) || (e.precision = i - ("e" === e.type));
                    break;
                case "f":
                case "%":
                    null != e.precision || isNaN(i = function (t) {
                        return Math.max(0, -bt(Math.abs(t)))
                    }(a)) || (e.precision = i - 2 * ("%" === e.type))
            }
            return gt(e)
        };

        function Nt(t) {
            var n = t.domain;
            return t.ticks = function (t) {
                var r = n();
                return ut(r[0], r[r.length - 1], null == t ? 10 : t)
            }, t.tickFormat = function (t, r) {
                var e = n();
                return kt(e[0], e[e.length - 1], null == t ? 10 : t, r)
            }, t.nice = function (r) {
                null == r && (r = 10);
                var e, i = n(),
                    a = 0,
                    o = i.length - 1,
                    u = i[a],
                    c = i[o];
                return c < u && (e = u, u = c, c = e, e = a, a = o, o = e), (e = ct(u, c, r)) > 0 ? e = ct(u = Math.floor(u / e) * e, c = Math.ceil(c / e) * e, r) : e < 0 && (e = ct(u = Math.ceil(u * e) / e, c = Math.floor(c * e) / e, r)), e > 0 ? (i[a] = Math.floor(u / e) * e, i[o] = Math.ceil(c / e) * e, n(i)) : e < 0 && (i[a] = Math.ceil(u * e) / e, i[o] = Math.floor(c * e) / e, n(i)), t
            }, t
        }

        function jt() {
            var t, n, r, e, i, a = 0,
                o = 1,
                u = rt,
                c = !1;

            function s(n) {
                return isNaN(n = +n) ? i : u(0 === r ? .5 : (n = (e(n) - t) * r, c ? Math.max(0, Math.min(1, n)) : n))
            }

            function l(t) {
                return function (n) {
                    var r, e;
                    return arguments.length ? ([r, e] = n, u = t(r, e), s) : [u(0), u(1)]
                }
            }
            return s.domain = function (i) {
                    return arguments.length ? ([a, o] = i, t = e(a = +a), n = e(o = +o), r = t === n ? 0 : 1 / (n - t), s) : [a, o]
                }, s.clamp = function (t) {
                    return arguments.length ? (c = !!t, s) : c
                }, s.interpolator = function (t) {
                    return arguments.length ? (u = t, s) : u
                }, s.range = l(G), s.rangeRound = l(K), s.unknown = function (t) {
                    return arguments.length ? (i = t, s) : i
                },
                function (i) {
                    return e = i, t = i(a), n = i(o), r = t === n ? 0 : 1 / (n - t), s
                }
        }

        function At(t, n) {
            return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
        }
        var St, Ct = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map((function (t) {
                for (var n = t.length / 6 | 0, r = new Array(n), e = 0; e < n;) r[e] = "#" + t.slice(6 * e, 6 * ++e);
                return r
            })),
            Rt = _((St = Ct)[St.length - 1]);
        const Et = window.matchMedia("(prefers-color-scheme: dark)").matches,
            Ot = L.map("ucla-map", {
                center: [34.069444, -118.445278],
                zoom: 15,
                minZoom: 15,
                maxBounds: [
                    [34.07925, -118.45774],
                    [34.06, -118.4362]
                ]
            });
        L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: `mapbox/${Et?"dark":"light"}-v10`,
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "pk.eyJ1IjoibmF0ZWR1YiIsImEiOiJjazZzYXEzdnIwZXdjM2VycnZlZ2gwbTh0In0.uivXh_MZEBNmzSmU75MWDw"
        }).addTo(Ot);
        const Tt = function t() {
            var n = Nt(jt()(rt));
            return n.copy = function () {
                return At(n, t())
            }, et.apply(n, arguments)
        }(Rt).domain([0, 2e3]);
        !async function () {
            const t = await Object(e.a)(`../enrollment_data/buildings.csv`),
                n = await Object(e.a)(`../enrollment_data/rooms.csv`);
            t.forEach(t => {
                const r = n.filter(n => n.building === t.abbreviation),
                    e = r.reduce((t, n) => Number(n.capacity) + t, 0);
                if (e > 0) {
                    const n = `\n      <h1>${t.name}</h1>\n        <p>Number of classrooms: ${r.length}</p>\n        <p>Total capacity: ${e}</p>`,
                        i = t.coordinates.slice(1, -1).split(",");
                    L.circle(i, {
                        color: null,
                        fillColor: Tt(e),
                        fillOpacity: .5,
                        radius: 20
                    }).addTo(Ot).bindPopup(n)
                }
            })
        }()
    }
});;
! function (t) {
    var n = {};

    function r(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = n, r.d = function (t, n, e) {
        r.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, n) {
        if (1 & n && (t = r(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var o in t) r.d(e, o, function (n) {
                return t[n]
            }.bind(null, o));
        return e
    }, r.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(n, "a", n), n
    }, r.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "", r(r.s = 23)
}({
    2: function (t, n, r) {
        "use strict";
        r.d(n, "a", (function () {
            return v
        }));
        var e = {},
            o = {};

        function u(t) {
            return new Function("d", "return {" + t.map((function (t, n) {
                return JSON.stringify(t) + ": d[" + n + '] || ""'
            })).join(",") + "}")
        }

        function a(t) {
            var n = Object.create(null),
                r = [];
            return t.forEach((function (t) {
                for (var e in t) e in n || r.push(n[e] = e)
            })), r
        }

        function i(t, n) {
            var r = t + "",
                e = r.length;
            return e < n ? new Array(n - e + 1).join(0) + r : r
        }

        function c(t) {
            var n, r = t.getUTCHours(),
                e = t.getUTCMinutes(),
                o = t.getUTCSeconds(),
                u = t.getUTCMilliseconds();
            return isNaN(t) ? "Invalid Date" : ((n = t.getUTCFullYear()) < 0 ? "-" + i(-n, 6) : n > 9999 ? "+" + i(n, 6) : i(n, 4)) + "-" + i(t.getUTCMonth() + 1, 2) + "-" + i(t.getUTCDate(), 2) + (u ? "T" + i(r, 2) + ":" + i(e, 2) + ":" + i(o, 2) + "." + i(u, 3) + "Z" : o ? "T" + i(r, 2) + ":" + i(e, 2) + ":" + i(o, 2) + "Z" : e || r ? "T" + i(r, 2) + ":" + i(e, 2) + "Z" : "")
        }
        var f = function (t) {
                var n = new RegExp('["' + t + "\n\r]"),
                    r = t.charCodeAt(0);

                function i(t, n) {
                    var u, a = [],
                        i = t.length,
                        c = 0,
                        f = 0,
                        l = i <= 0,
                        s = !1;

                    function p() {
                        if (l) return o;
                        if (s) return s = !1, e;
                        var n, u, a = c;
                        if (34 === t.charCodeAt(a)) {
                            for (; c++ < i && 34 !== t.charCodeAt(c) || 34 === t.charCodeAt(++c););
                            return (n = c) >= i ? l = !0 : 10 === (u = t.charCodeAt(c++)) ? s = !0 : 13 === u && (s = !0, 10 === t.charCodeAt(c) && ++c), t.slice(a + 1, n - 1).replace(/""/g, '"')
                        }
                        for (; c < i;) {
                            if (10 === (u = t.charCodeAt(n = c++))) s = !0;
                            else if (13 === u) s = !0, 10 === t.charCodeAt(c) && ++c;
                            else if (u !== r) continue;
                            return t.slice(a, n)
                        }
                        return l = !0, t.slice(a, i)
                    }
                    for (10 === t.charCodeAt(i - 1) && --i, 13 === t.charCodeAt(i - 1) && --i;
                        (u = p()) !== o;) {
                        for (var d = []; u !== e && u !== o;) d.push(u), u = p();
                        n && null == (d = n(d, f++)) || a.push(d)
                    }
                    return a
                }

                function f(n, r) {
                    return n.map((function (n) {
                        return r.map((function (t) {
                            return s(n[t])
                        })).join(t)
                    }))
                }

                function l(n) {
                    return n.map(s).join(t)
                }

                function s(t) {
                    return null == t ? "" : t instanceof Date ? c(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                }
                return {
                    parse: function (t, n) {
                        var r, e, o = i(t, (function (t, o) {
                            if (r) return r(t, o - 1);
                            e = t, r = n ? function (t, n) {
                                var r = u(t);
                                return function (e, o) {
                                    return n(r(e), o, t)
                                }
                            }(t, n) : u(t)
                        }));
                        return o.columns = e || [], o
                    },
                    parseRows: i,
                    format: function (n, r) {
                        return null == r && (r = a(n)), [r.map(s).join(t)].concat(f(n, r)).join("\n")
                    },
                    formatBody: function (t, n) {
                        return null == n && (n = a(t)), f(t, n).join("\n")
                    },
                    formatRows: function (t) {
                        return t.map(l).join("\n")
                    },
                    formatRow: l,
                    formatValue: s
                }
            },
            l = f(","),
            s = l.parse,
            p = (l.parseRows, l.format, l.formatBody, l.formatRows, l.formatRow, l.formatValue, f("\t")),
            d = p.parse;
        p.parseRows, p.format, p.formatBody, p.formatRows, p.formatRow, p.formatValue;

        function m(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var h = function (t, n) {
            return fetch(t, n).then(m)
        };

        function g(t) {
            return function (n, r, e) {
                return 2 === arguments.length && "function" == typeof r && (e = r, r = void 0), h(n, r).then((function (n) {
                    return t(n, e)
                }))
            }
        }
        var v = g(s);
        g(d);

        function y(t) {
            return function (n, r) {
                return h(n, r).then((function (n) {
                    return (new DOMParser).parseFromString(n, t)
                }))
            }
        }
        y("application/xml"), y("text/html"), y("image/svg+xml")
    },
    23: function (t, n, r) {
        t.exports = r(24)
    },
    24: function (t, n, r) {
        "use strict";
        r.r(n);
        var e = r(2);
        async function o(t, n) {
            const r = await Object(e.a)(`../enrollment_data/${t}-depts.csv`),
                o = document.getElementById(`${t}-departments`).getContext("2d");
            new Chart(o, {
                type: "horizontalBar",
                data: {
                    labels: r.map(t => t.name),
                    datasets: [{
                        label: "Dataset 1",
                        data: r.map(t => Number(t.count))
                    }]
                },
                options: {
                    legend: {
                        display: !1
                    },
                    title: {
                        display: !0,
                        text: `Top Subject Areas of ${n}`
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: !0
                            }
                        }]
                    }
                }
            })
        }
        o("melnitz1409", "Melnitz Hall 1409"), o("moore100", "Moore Hall 100"), o("ms4000a", "Mathematical Sciences 4000A")
    }
});;
! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var a = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(r, a, function (e) {
                return t[e]
            }.bind(null, a));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 25)
}({
    2: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return h
        }));
        var r = {},
            a = {};

        function o(t) {
            return new Function("d", "return {" + t.map((function (t, e) {
                return JSON.stringify(t) + ": d[" + e + '] || ""'
            })).join(",") + "}")
        }

        function u(t) {
            var e = Object.create(null),
                n = [];
            return t.forEach((function (t) {
                for (var r in t) r in e || n.push(e[r] = r)
            })), n
        }

        function i(t, e) {
            var n = t + "",
                r = n.length;
            return r < e ? new Array(e - r + 1).join(0) + n : n
        }

        function c(t) {
            var e, n = t.getUTCHours(),
                r = t.getUTCMinutes(),
                a = t.getUTCSeconds(),
                o = t.getUTCMilliseconds();
            return isNaN(t) ? "Invalid Date" : ((e = t.getUTCFullYear()) < 0 ? "-" + i(-e, 6) : e > 9999 ? "+" + i(e, 6) : i(e, 4)) + "-" + i(t.getUTCMonth() + 1, 2) + "-" + i(t.getUTCDate(), 2) + (o ? "T" + i(n, 2) + ":" + i(r, 2) + ":" + i(a, 2) + "." + i(o, 3) + "Z" : a ? "T" + i(n, 2) + ":" + i(r, 2) + ":" + i(a, 2) + "Z" : r || n ? "T" + i(n, 2) + ":" + i(r, 2) + "Z" : "")
        }
        var s = function (t) {
                var e = new RegExp('["' + t + "\n\r]"),
                    n = t.charCodeAt(0);

                function i(t, e) {
                    var o, u = [],
                        i = t.length,
                        c = 0,
                        s = 0,
                        f = i <= 0,
                        l = !1;

                    function d() {
                        if (f) return a;
                        if (l) return l = !1, r;
                        var e, o, u = c;
                        if (34 === t.charCodeAt(u)) {
                            for (; c++ < i && 34 !== t.charCodeAt(c) || 34 === t.charCodeAt(++c););
                            return (e = c) >= i ? f = !0 : 10 === (o = t.charCodeAt(c++)) ? l = !0 : 13 === o && (l = !0, 10 === t.charCodeAt(c) && ++c), t.slice(u + 1, e - 1).replace(/""/g, '"')
                        }
                        for (; c < i;) {
                            if (10 === (o = t.charCodeAt(e = c++))) l = !0;
                            else if (13 === o) l = !0, 10 === t.charCodeAt(c) && ++c;
                            else if (o !== n) continue;
                            return t.slice(u, e)
                        }
                        return f = !0, t.slice(u, i)
                    }
                    for (10 === t.charCodeAt(i - 1) && --i, 13 === t.charCodeAt(i - 1) && --i;
                        (o = d()) !== a;) {
                        for (var p = []; o !== r && o !== a;) p.push(o), o = d();
                        e && null == (p = e(p, s++)) || u.push(p)
                    }
                    return u
                }

                function s(e, n) {
                    return e.map((function (e) {
                        return n.map((function (t) {
                            return l(e[t])
                        })).join(t)
                    }))
                }

                function f(e) {
                    return e.map(l).join(t)
                }

                function l(t) {
                    return null == t ? "" : t instanceof Date ? c(t) : e.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                }
                return {
                    parse: function (t, e) {
                        var n, r, a = i(t, (function (t, a) {
                            if (n) return n(t, a - 1);
                            r = t, n = e ? function (t, e) {
                                var n = o(t);
                                return function (r, a) {
                                    return e(n(r), a, t)
                                }
                            }(t, e) : o(t)
                        }));
                        return a.columns = r || [], a
                    },
                    parseRows: i,
                    format: function (e, n) {
                        return null == n && (n = u(e)), [n.map(l).join(t)].concat(s(e, n)).join("\n")
                    },
                    formatBody: function (t, e) {
                        return null == e && (e = u(t)), s(t, e).join("\n")
                    },
                    formatRows: function (t) {
                        return t.map(f).join("\n")
                    },
                    formatRow: f,
                    formatValue: l
                }
            },
            f = s(","),
            l = f.parse,
            d = (f.parseRows, f.format, f.formatBody, f.formatRows, f.formatRow, f.formatValue, s("\t")),
            p = d.parse;
        d.parseRows, d.format, d.formatBody, d.formatRows, d.formatRow, d.formatValue;

        function m(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var y = function (t, e) {
            return fetch(t, e).then(m)
        };

        function g(t) {
            return function (e, n, r) {
                return 2 === arguments.length && "function" == typeof n && (r = n, n = void 0), y(e, n).then((function (e) {
                    return t(e, r)
                }))
            }
        }
        var h = g(l);
        g(p);

        function b(t) {
            return function (e, n) {
                return y(e, n).then((function (e) {
                    return (new DOMParser).parseFromString(e, t)
                }))
            }
        }
        b("application/xml"), b("text/html"), b("image/svg+xml")
    },
    25: function (t, e, n) {
        t.exports = n(26)
    },
    26: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(2);
        !async function () {
            const t = await Object(r.a)(`../enrollment_data/20W-prime-time-counts.csv`),
                e = document.getElementById("prime-time-donut").getContext("2d");
            new Chart(e, {
                type: "doughnut",
                data: {
                    datasets: [{
                        data: t.map(t => Number(t.count))
                    }],
                    labels: t.map(t => t.type)
                },
                options: {
                    tooltips: {
                        callbacks: {
                            label(t, e) {
                                const n = e.datasets[t.datasetIndex],
                                    r = n._meta[Object.keys(n._meta)[0]],
                                    {
                                        total: a
                                    } = r,
                                    o = n.data[t.index];
                                return `${o} sections (${parseFloat((o/a*100).toFixed(1))}%)`
                            },
                            title: (t, e) => e.labels[t[0].index]
                        }
                    }
                }
            })
        }(), async function () {
            const t = (await Object(r.a)(`../enrollment_data/20W-day-counts.csv`)).slice(0, 5),
                e = document.getElementById("days-radar").getContext("2d");
            new Chart(e, {
                type: "radar",
                data: {
                    datasets: [{
                        data: t.map(t => Number(t.count))
                    }],
                    labels: t.map(t => function (t) {
                        switch (t) {
                            case "M":
                                return "Monday";
                            case "T":
                                return "Tuesday";
                            case "W":
                                return "Wednesday";
                            case "R":
                                return "Thursday";
                            case "F":
                                return "Friday";
                            case "S":
                                return "Saturday";
                            case "U":
                                return "Sunday"
                        }
                        throw new Error("Unrecognized abbreviation")
                    }(t.day))
                },
                options: {
                    legend: {
                        display: !1
                    },
                    scale: {
                        ticks: {
                            beginAtZero: !0
                        }
                    },
                    tooltips: {
                        callbacks: {
                            label(t, e) {
                                const n = e.datasets[t.datasetIndex],
                                    {
                                        data: r
                                    } = n,
                                    a = r.reduce((t, e) => t + e, 0),
                                    o = n.data[t.index];
                                return `${o} sections (${parseFloat((o/a*100).toFixed(1))}%)`
                            },
                            title: (t, e) => e.labels[t[0].index]
                        }
                    }
                }
            })
        }()
    }
});;