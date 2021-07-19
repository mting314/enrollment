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
    }, r.p = "", r(r.s = 31)
}({
    2: function (t, n, r) {
        "use strict";
        r.d(n, "a", (function () {
            return g
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
                        s = i <= 0,
                        l = !1;

                    function d() {
                        if (s) return o;
                        if (l) return l = !1, e;
                        var n, u, a = c;
                        if (34 === t.charCodeAt(a)) {
                            for (; c++ < i && 34 !== t.charCodeAt(c) || 34 === t.charCodeAt(++c););
                            return (n = c) >= i ? s = !0 : 10 === (u = t.charCodeAt(c++)) ? l = !0 : 13 === u && (l = !0, 10 === t.charCodeAt(c) && ++c), t.slice(a + 1, n - 1).replace(/""/g, '"')
                        }
                        for (; c < i;) {
                            if (10 === (u = t.charCodeAt(n = c++))) l = !0;
                            else if (13 === u) l = !0, 10 === t.charCodeAt(c) && ++c;
                            else if (u !== r) continue;
                            return t.slice(a, n)
                        }
                        return s = !0, t.slice(a, i)
                    }
                    for (10 === t.charCodeAt(i - 1) && --i, 13 === t.charCodeAt(i - 1) && --i;
                        (u = d()) !== o;) {
                        for (var p = []; u !== e && u !== o;) p.push(u), u = d();
                        n && null == (p = n(p, f++)) || a.push(p)
                    }
                    return a
                }

                function f(n, r) {
                    return n.map((function (n) {
                        return r.map((function (t) {
                            return l(n[t])
                        })).join(t)
                    }))
                }

                function s(n) {
                    return n.map(l).join(t)
                }

                function l(t) {
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
                        return null == r && (r = a(n)), [r.map(l).join(t)].concat(f(n, r)).join("\n")
                    },
                    formatBody: function (t, n) {
                        return null == n && (n = a(t)), f(t, n).join("\n")
                    },
                    formatRows: function (t) {
                        return t.map(s).join("\n")
                    },
                    formatRow: s,
                    formatValue: l
                }
            },
            s = f(","),
            l = s.parse,
            d = (s.parseRows, s.format, s.formatBody, s.formatRows, s.formatRow, s.formatValue, f("\t")),
            p = d.parse;
        d.parseRows, d.format, d.formatBody, d.formatRows, d.formatRow, d.formatValue;

        function m(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var h = function (t, n) {
            return fetch(t, n).then(m)
        };

        function v(t) {
            return function (n, r, e) {
                return 2 === arguments.length && "function" == typeof r && (e = r, r = void 0), h(n, r).then((function (n) {
                    return t(n, e)
                }))
            }
        }
        var g = v(l);
        v(p);

        function b(t) {
            return function (n, r) {
                return h(n, r).then((function (n) {
                    return (new DOMParser).parseFromString(n, t)
                }))
            }
        }
        b("application/xml"), b("text/html"), b("image/svg+xml")
    },
    31: function (t, n, r) {
        t.exports = r(32)
    },
    32: function (t, n, r) {
        "use strict";
        r.r(n);
        var e = r(2);
        Object(e.a)(`../../enrollment_data/online-courses.csv`).then(t => {
            const n = document.getElementById("online").getContext("2d");
            new Chart(n, {
                type: "bar",
                data: {
                    labels: t.map(t => t.term),
                    datasets: [{
                        label: "Number of Online Courses",
                        data: t.map(t => Number(t.count)),
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0
                            }
                        }]
                    }
                }
            })
        })
    }
});;
! function (t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = e, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function (e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 29)
}({
    2: function (t, e, r) {
        "use strict";
        r.d(e, "a", (function () {
            return g
        }));
        var n = {},
            o = {};

        function a(t) {
            return new Function("d", "return {" + t.map((function (t, e) {
                return JSON.stringify(t) + ": d[" + e + '] || ""'
            })).join(",") + "}")
        }

        function i(t) {
            var e = Object.create(null),
                r = [];
            return t.forEach((function (t) {
                for (var n in t) n in e || r.push(e[n] = n)
            })), r
        }

        function u(t, e) {
            var r = t + "",
                n = r.length;
            return n < e ? new Array(e - n + 1).join(0) + r : r
        }

        function c(t) {
            var e, r = t.getUTCHours(),
                n = t.getUTCMinutes(),
                o = t.getUTCSeconds(),
                a = t.getUTCMilliseconds();
            return isNaN(t) ? "Invalid Date" : ((e = t.getUTCFullYear()) < 0 ? "-" + u(-e, 6) : e > 9999 ? "+" + u(e, 6) : u(e, 4)) + "-" + u(t.getUTCMonth() + 1, 2) + "-" + u(t.getUTCDate(), 2) + (a ? "T" + u(r, 2) + ":" + u(n, 2) + ":" + u(o, 2) + "." + u(a, 3) + "Z" : o ? "T" + u(r, 2) + ":" + u(n, 2) + ":" + u(o, 2) + "Z" : n || r ? "T" + u(r, 2) + ":" + u(n, 2) + "Z" : "")
        }
        var s = function (t) {
                var e = new RegExp('["' + t + "\n\r]"),
                    r = t.charCodeAt(0);

                function u(t, e) {
                    var a, i = [],
                        u = t.length,
                        c = 0,
                        s = 0,
                        f = u <= 0,
                        l = !1;

                    function d() {
                        if (f) return o;
                        if (l) return l = !1, n;
                        var e, a, i = c;
                        if (34 === t.charCodeAt(i)) {
                            for (; c++ < u && 34 !== t.charCodeAt(c) || 34 === t.charCodeAt(++c););
                            return (e = c) >= u ? f = !0 : 10 === (a = t.charCodeAt(c++)) ? l = !0 : 13 === a && (l = !0, 10 === t.charCodeAt(c) && ++c), t.slice(i + 1, e - 1).replace(/""/g, '"')
                        }
                        for (; c < u;) {
                            if (10 === (a = t.charCodeAt(e = c++))) l = !0;
                            else if (13 === a) l = !0, 10 === t.charCodeAt(c) && ++c;
                            else if (a !== r) continue;
                            return t.slice(i, e)
                        }
                        return f = !0, t.slice(i, u)
                    }
                    for (10 === t.charCodeAt(u - 1) && --u, 13 === t.charCodeAt(u - 1) && --u;
                        (a = d()) !== o;) {
                        for (var m = []; a !== n && a !== o;) m.push(a), a = d();
                        e && null == (m = e(m, s++)) || i.push(m)
                    }
                    return i
                }

                function s(e, r) {
                    return e.map((function (e) {
                        return r.map((function (t) {
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
                        var r, n, o = u(t, (function (t, o) {
                            if (r) return r(t, o - 1);
                            n = t, r = e ? function (t, e) {
                                var r = a(t);
                                return function (n, o) {
                                    return e(r(n), o, t)
                                }
                            }(t, e) : a(t)
                        }));
                        return o.columns = n || [], o
                    },
                    parseRows: u,
                    format: function (e, r) {
                        return null == r && (r = i(e)), [r.map(l).join(t)].concat(s(e, r)).join("\n")
                    },
                    formatBody: function (t, e) {
                        return null == e && (e = i(t)), s(t, e).join("\n")
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
            m = d.parse;
        d.parseRows, d.format, d.formatBody, d.formatRows, d.formatRow, d.formatValue;

        function p(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var h = function (t, e) {
            return fetch(t, e).then(p)
        };

        function y(t) {
            return function (e, r, n) {
                return 2 === arguments.length && "function" == typeof r && (n = r, r = void 0), h(e, r).then((function (e) {
                    return t(e, n)
                }))
            }
        }
        var g = y(l);
        y(m);

        function v(t) {
            return function (e, r) {
                return h(e, r).then((function (e) {
                    return (new DOMParser).parseFromString(e, t)
                }))
            }
        }
        v("application/xml"), v("text/html"), v("image/svg+xml")
    },
    29: function (t, e, r) {
        t.exports = r(30)
    },
    30: function (t, e, r) {
        "use strict";
        r.r(e);
        var n = r(2);

        function o(t) {
            switch (t) {
                case "M":
                    return 1;
                case "T":
                    return 2;
                case "W":
                    return 3;
                case "R":
                    return 4;
                case "F":
                    return 5;
                case "S":
                    return 6;
                case "U":
                    return 7
            }
        }!async function () {
            const t = await Object(n.a)(`../../enrollment_data/moore100heatmap.csv`),
                e = t.map(e => ({
                    ...t,
                    days: JSON.parse(e.days),
                    locations: JSON.parse(e.locations),
                    times: JSON.parse(e.times),
                    enrollment_count: Number(e.enrollment_count)
                })),
                r = {
                    "8am": 0,
                    "9am": 0,
                    "10am": 0,
                    "11am": 0,
                    "12pm": 0,
                    "1pm": 0,
                    "2pm": 0,
                    "3pm": 0,
                    "4pm": 0,
                    "5pm": 0
                },
                a = {
                    M: {
                        ...r
                    },
                    T: {
                        ...r
                    },
                    W: {
                        ...r
                    },
                    R: {
                        ...r
                    },
                    F: {
                        ...r
                    }
                };
            for (const t of e) {
                const e = t.days[0].split(""),
                    [r, n] = t.times[0].split("-"),
                    o = moment(r, "h:mma"),
                    i = moment(n, "h:mma");
                for (const r of e) {
                    const e = o.clone();
                    let n = i.diff(e, "h");
                    for (a[r][e.format("ha")] += t.enrollment_count; n > 0;) e.add(n, "h"), a[r][e.format("ha")] += t.enrollment_count, n -= 1
                }
            }
            const i = Object.keys(a).map(t => Object.entries(a[t]).map(e => ({
                    x: e[0],
                    y: String(o(t)),
                    v: e[1]
                }))).flat(),
                u = document.getElementById("moore-heatmap").getContext("2d");
            new Chart(u, {
                type: "matrix",
                data: {
                    datasets: [{
                        data: i,
                        backgroundColor(t) {
                            const e = (t.dataset.data[t.dataIndex].v - 5) / 442;
                            return Color("green").alpha(e).rgbString()
                        },
                        borderWidth: 1,
                        borderSkipped: !1,
                        hoverBorderColor: "yellow"
                    }]
                },
                options: {
                    title: {
                        display: !0,
                        text: "Utilization of MS 4000A, Winter 2020"
                    },
                    legend: {
                        display: !1
                    },
                    tooltips: {
                        displayColors: !1,
                        callbacks: {
                            title: () => "",
                            label(t, e) {
                                const r = e.datasets[t.datasetIndex].data[t.index];
                                return [`Time: ${r.x}`, `${r.v} students`]
                            }
                        }
                    },
                    scales: {
                        xAxes: [{
                            type: "time",
                            position: "bottom",
                            offset: !0,
                            time: {
                                unit: "hour",
                                parser: "h:mma"
                            },
                            ticks: {
                                maxRotation: 0,
                                autoSkip: !0
                            },
                            gridLines: {
                                display: !1,
                                drawBorder: !1,
                                tickMarkLength: 0
                            }
                        }],
                        yAxes: [{
                            type: "time",
                            offset: !0,
                            position: "right",
                            time: {
                                unit: "day",
                                parser: "e",
                                displayFormats: {
                                    day: "ddd"
                                }
                            },
                            ticks: {
                                reverse: !0
                            },
                            gridLines: {
                                display: !1,
                                drawBorder: !1,
                                tickMarkLength: 0
                            }
                        }]
                    }
                }
            })
        }()
    }
});;
! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
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
            for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
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
    }, n.p = "", n(n.s = 33)
}({
    2: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return g
        }));
        var r = {},
            o = {};

        function u(t) {
            return new Function("d", "return {" + t.map((function (t, e) {
                return JSON.stringify(t) + ": d[" + e + '] || ""'
            })).join(",") + "}")
        }

        function i(t) {
            var e = Object.create(null),
                n = [];
            return t.forEach((function (t) {
                for (var r in t) r in e || n.push(e[r] = r)
            })), n
        }

        function a(t, e) {
            var n = t + "",
                r = n.length;
            return r < e ? new Array(e - r + 1).join(0) + n : n
        }

        function c(t) {
            var e, n = t.getUTCHours(),
                r = t.getUTCMinutes(),
                o = t.getUTCSeconds(),
                u = t.getUTCMilliseconds();
            return isNaN(t) ? "Invalid Date" : ((e = t.getUTCFullYear()) < 0 ? "-" + a(-e, 6) : e > 9999 ? "+" + a(e, 6) : a(e, 4)) + "-" + a(t.getUTCMonth() + 1, 2) + "-" + a(t.getUTCDate(), 2) + (u ? "T" + a(n, 2) + ":" + a(r, 2) + ":" + a(o, 2) + "." + a(u, 3) + "Z" : o ? "T" + a(n, 2) + ":" + a(r, 2) + ":" + a(o, 2) + "Z" : r || n ? "T" + a(n, 2) + ":" + a(r, 2) + "Z" : "")
        }
        var s = function (t) {
                var e = new RegExp('["' + t + "\n\r]"),
                    n = t.charCodeAt(0);

                function a(t, e) {
                    var u, i = [],
                        a = t.length,
                        c = 0,
                        s = 0,
                        f = a <= 0,
                        l = !1;

                    function m() {
                        if (f) return o;
                        if (l) return l = !1, r;
                        var e, u, i = c;
                        if (34 === t.charCodeAt(i)) {
                            for (; c++ < a && 34 !== t.charCodeAt(c) || 34 === t.charCodeAt(++c););
                            return (e = c) >= a ? f = !0 : 10 === (u = t.charCodeAt(c++)) ? l = !0 : 13 === u && (l = !0, 10 === t.charCodeAt(c) && ++c), t.slice(i + 1, e - 1).replace(/""/g, '"')
                        }
                        for (; c < a;) {
                            if (10 === (u = t.charCodeAt(e = c++))) l = !0;
                            else if (13 === u) l = !0, 10 === t.charCodeAt(c) && ++c;
                            else if (u !== n) continue;
                            return t.slice(i, e)
                        }
                        return f = !0, t.slice(i, a)
                    }
                    for (10 === t.charCodeAt(a - 1) && --a, 13 === t.charCodeAt(a - 1) && --a;
                        (u = m()) !== o;) {
                        for (var d = []; u !== r && u !== o;) d.push(u), u = m();
                        e && null == (d = e(d, s++)) || i.push(d)
                    }
                    return i
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
                        var n, r, o = a(t, (function (t, o) {
                            if (n) return n(t, o - 1);
                            r = t, n = e ? function (t, e) {
                                var n = u(t);
                                return function (r, o) {
                                    return e(n(r), o, t)
                                }
                            }(t, e) : u(t)
                        }));
                        return o.columns = r || [], o
                    },
                    parseRows: a,
                    format: function (e, n) {
                        return null == n && (n = i(e)), [n.map(l).join(t)].concat(s(e, n)).join("\n")
                    },
                    formatBody: function (t, e) {
                        return null == e && (e = i(t)), s(t, e).join("\n")
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
            m = (f.parseRows, f.format, f.formatBody, f.formatRows, f.formatRow, f.formatValue, s("\t")),
            d = m.parse;
        m.parseRows, m.format, m.formatBody, m.formatRows, m.formatRow, m.formatValue;

        function p(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var b = function (t, e) {
            return fetch(t, e).then(p)
        };

        function y(t) {
            return function (e, n, r) {
                return 2 === arguments.length && "function" == typeof n && (r = n, n = void 0), b(e, n).then((function (e) {
                    return t(e, r)
                }))
            }
        }
        var g = y(l);
        y(d);

        function h(t) {
            return function (e, n) {
                return b(e, n).then((function (e) {
                    return (new DOMParser).parseFromString(e, t)
                }))
            }
        }
        h("application/xml"), h("text/html"), h("image/svg+xml")
    },
    3: function (t, e, n) {
        "use strict";

        function r(t, e) {
            let n = Number(t.substring(0, 2)),
                r = Number(e.substring(0, 2));
            if (99 === n && (n = -1), 99 === r && (r = -1), n === r) {
                const n = t[2],
                    r = e[2],
                    o = {
                        W: 0,
                        S: 1,
                        F: 2
                    };
                return o[n] - o[r]
            }
            return n - r
        }

        function o(t) {
            const e = t.substring(0, 2),
                n = t[2];
            let r = "";
            return "F" === n ? r = "Fall" : "W" === n ? r = "Winter" : "S" === n && (r = "Spring"), `${r} ${"99"===e?"1999":`20${e}`}`
        }
        n.r(e), n.d(e, "sortByTerm", (function () {
            return r
        })), n.d(e, "shortTermToFullName", (function () {
            return o
        }))
    },
    33: function (t, e, n) {
        t.exports = n(34)
    },
    34: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(2),
            o = n(3);
        !async function () {
            let t = await Object(r.a)(`../../enrollment_data/sections-by-term.csv`);
            t.sort((t, e) => Object(o.sortByTerm)(t.term, e.term)), t = t.slice(5);
            let e = await Object(r.a)(`../../enrollment_data/enrollment-counts-by-quarter-apb.csv`);
            e.sort((t, e) => Object(o.sortByTerm)(t.term, e.term)), e = e.slice(5);
            const n = document.getElementById("sections-and-enrollment-by-term").getContext("2d");
            new Chart(n, {
                type: "line",
                data: {
                    labels: t.map(t => t.term),
                    datasets: [{
                        label: "Number of sections",
                        yAxisID: "A",
                        data: t.map(t => Number(t.count))
                    }, {
                        label: "Number of enrolled students",
                        yAxisID: "B",
                        data: e.map(t => Number(t.count))
                    }]
                },
                options: {
                    legend: {
                        display: !1
                    },
                    title: {
                        display: !0,
                        text: "Number of Sections vs Enrolled Students per Term"
                    },
                    tooltips: {
                        mode: "index",
                        callbacks: {
                            title: t => {
                                const {
                                    label: e
                                } = t[0];
                                return Object(o.shortTermToFullName)(e)
                            },
                            afterBody: t => `Student to course ratio: ${(t[1].yLabel/t[0].yLabel).toFixed(2)}`
                        }
                    },
                    scales: {
                        yAxes: [{
                            id: "A",
                            type: "linear",
                            position: "left",
                            ticks: {
                                min: 3e3,
                                max: 5e3
                            }
                        }, {
                            id: "B",
                            type: "linear",
                            position: "right",
                            ticks: {
                                min: 3e4,
                                max: 5e4
                            }
                        }]
                    }
                }
            })
        }()
    }
});;
! function (t) {
    var n = {};

    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    e.m = t, e.c = n, e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
        })
    }, e.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function (t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var o in t) e.d(r, o, function (n) {
                return t[n]
            }.bind(null, o));
        return r
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 35)
}({
    2: function (t, n, e) {
        "use strict";
        e.d(n, "a", (function () {
            return h
        }));
        var r = {},
            o = {};

        function u(t) {
            return new Function("d", "return {" + t.map((function (t, n) {
                return JSON.stringify(t) + ": d[" + n + '] || ""'
            })).join(",") + "}")
        }

        function a(t) {
            var n = Object.create(null),
                e = [];
            return t.forEach((function (t) {
                for (var r in t) r in n || e.push(n[r] = r)
            })), e
        }

        function i(t, n) {
            var e = t + "",
                r = e.length;
            return r < n ? new Array(n - r + 1).join(0) + e : e
        }

        function c(t) {
            var n, e = t.getUTCHours(),
                r = t.getUTCMinutes(),
                o = t.getUTCSeconds(),
                u = t.getUTCMilliseconds();
            return isNaN(t) ? "Invalid Date" : ((n = t.getUTCFullYear()) < 0 ? "-" + i(-n, 6) : n > 9999 ? "+" + i(n, 6) : i(n, 4)) + "-" + i(t.getUTCMonth() + 1, 2) + "-" + i(t.getUTCDate(), 2) + (u ? "T" + i(e, 2) + ":" + i(r, 2) + ":" + i(o, 2) + "." + i(u, 3) + "Z" : o ? "T" + i(e, 2) + ":" + i(r, 2) + ":" + i(o, 2) + "Z" : r || e ? "T" + i(e, 2) + ":" + i(r, 2) + "Z" : "")
        }
        var f = function (t) {
                var n = new RegExp('["' + t + "\n\r]"),
                    e = t.charCodeAt(0);

                function i(t, n) {
                    var u, a = [],
                        i = t.length,
                        c = 0,
                        f = 0,
                        l = i <= 0,
                        s = !1;

                    function d() {
                        if (l) return o;
                        if (s) return s = !1, r;
                        var n, u, a = c;
                        if (34 === t.charCodeAt(a)) {
                            for (; c++ < i && 34 !== t.charCodeAt(c) || 34 === t.charCodeAt(++c););
                            return (n = c) >= i ? l = !0 : 10 === (u = t.charCodeAt(c++)) ? s = !0 : 13 === u && (s = !0, 10 === t.charCodeAt(c) && ++c), t.slice(a + 1, n - 1).replace(/""/g, '"')
                        }
                        for (; c < i;) {
                            if (10 === (u = t.charCodeAt(n = c++))) s = !0;
                            else if (13 === u) s = !0, 10 === t.charCodeAt(c) && ++c;
                            else if (u !== e) continue;
                            return t.slice(a, n)
                        }
                        return l = !0, t.slice(a, i)
                    }
                    for (10 === t.charCodeAt(i - 1) && --i, 13 === t.charCodeAt(i - 1) && --i;
                        (u = d()) !== o;) {
                        for (var p = []; u !== r && u !== o;) p.push(u), u = d();
                        n && null == (p = n(p, f++)) || a.push(p)
                    }
                    return a
                }

                function f(n, e) {
                    return n.map((function (n) {
                        return e.map((function (t) {
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
                        var e, r, o = i(t, (function (t, o) {
                            if (e) return e(t, o - 1);
                            r = t, e = n ? function (t, n) {
                                var e = u(t);
                                return function (r, o) {
                                    return n(e(r), o, t)
                                }
                            }(t, n) : u(t)
                        }));
                        return o.columns = r || [], o
                    },
                    parseRows: i,
                    format: function (n, e) {
                        return null == e && (e = a(n)), [e.map(s).join(t)].concat(f(n, e)).join("\n")
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
            d = (l.parseRows, l.format, l.formatBody, l.formatRows, l.formatRow, l.formatValue, f("\t")),
            p = d.parse;
        d.parseRows, d.format, d.formatBody, d.formatRows, d.formatRow, d.formatValue;

        function m(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var y = function (t, n) {
            return fetch(t, n).then(m)
        };

        function v(t) {
            return function (n, e, r) {
                return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), y(n, e).then((function (n) {
                    return t(n, r)
                }))
            }
        }
        var h = v(s);
        v(p);

        function g(t) {
            return function (n, e) {
                return y(n, e).then((function (n) {
                    return (new DOMParser).parseFromString(n, t)
                }))
            }
        }
        g("application/xml"), g("text/html"), g("image/svg+xml")
    },
    35: function (t, n, e) {
        t.exports = e(36)
    },
    36: function (t, n, e) {
        "use strict";
        e.r(n);
        var r = e(2);
        !async function () {
            const t = await Object(r.a)(`../../enrollment_data/ucla-freshman-yield-apb.csv`),
                n = document.getElementById("yield-rate").getContext("2d");
            new Chart(n, {
                type: "line",
                data: {
                    labels: t.map(t => t.year),
                    datasets: [{
                        label: "Yield rate",
                        data: t.map(t => Number(t.yield)),
                        fill: !1
                    }]
                },
                options: {
                    legend: {
                        display: !1
                    },
                    title: {
                        display: !0,
                        text: "UCLA yield rate over time"
                    },
                    tooltips: {
                        callbacks: {
                            label: t => `${(100*t.yLabel).toFixed(1)}%`
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: t => `${100*t}%`
                            }
                        }]
                    }
                }
            })
        }()
    }
});;