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
    }, n.p = "", n(n.s = 27)
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

        function a(t) {
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
                o = t.getUTCSeconds(),
                u = t.getUTCMilliseconds();
            return isNaN(t) ? "Invalid Date" : ((e = t.getUTCFullYear()) < 0 ? "-" + i(-e, 6) : e > 9999 ? "+" + i(e, 6) : i(e, 4)) + "-" + i(t.getUTCMonth() + 1, 2) + "-" + i(t.getUTCDate(), 2) + (u ? "T" + i(n, 2) + ":" + i(r, 2) + ":" + i(o, 2) + "." + i(u, 3) + "Z" : o ? "T" + i(n, 2) + ":" + i(r, 2) + ":" + i(o, 2) + "Z" : r || n ? "T" + i(n, 2) + ":" + i(r, 2) + "Z" : "")
        }
        var s = function (t) {
                var e = new RegExp('["' + t + "\n\r]"),
                    n = t.charCodeAt(0);

                function i(t, e) {
                    var u, a = [],
                        i = t.length,
                        c = 0,
                        s = 0,
                        f = i <= 0,
                        l = !1;

                    function m() {
                        if (f) return o;
                        if (l) return l = !1, r;
                        var e, u, a = c;
                        if (34 === t.charCodeAt(a)) {
                            for (; c++ < i && 34 !== t.charCodeAt(c) || 34 === t.charCodeAt(++c););
                            return (e = c) >= i ? f = !0 : 10 === (u = t.charCodeAt(c++)) ? l = !0 : 13 === u && (l = !0, 10 === t.charCodeAt(c) && ++c), t.slice(a + 1, e - 1).replace(/""/g, '"')
                        }
                        for (; c < i;) {
                            if (10 === (u = t.charCodeAt(e = c++))) l = !0;
                            else if (13 === u) l = !0, 10 === t.charCodeAt(c) && ++c;
                            else if (u !== n) continue;
                            return t.slice(a, e)
                        }
                        return f = !0, t.slice(a, i)
                    }
                    for (10 === t.charCodeAt(i - 1) && --i, 13 === t.charCodeAt(i - 1) && --i;
                        (u = m()) !== o;) {
                        for (var d = []; u !== r && u !== o;) d.push(u), u = m();
                        e && null == (d = e(d, s++)) || a.push(d)
                    }
                    return a
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
                        var n, r, o = i(t, (function (t, o) {
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
                    parseRows: i,
                    format: function (e, n) {
                        return null == n && (n = a(e)), [n.map(l).join(t)].concat(s(e, n)).join("\n")
                    },
                    formatBody: function (t, e) {
                        return null == e && (e = a(t)), s(t, e).join("\n")
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
    27: function (t, e, n) {
        t.exports = n(28)
    },
    28: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(2),
            o = n(3);
        async function u(t, e) {
            const n = await Object(r.a)(`../enrollment_data/${t}.csv`),
                o = document.getElementById(t).getContext("2d");
            new Chart(o, {
                type: "horizontalBar",
                data: {
                    labels: n.map(t => t.name),
                    datasets: [{
                        data: n.map(t => Number(t.count))
                    }]
                },
                options: {
                    legend: {
                        display: !1
                    },
                    title: {
                        display: !0,
                        text: e
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
        async function a(t, e) {
            const n = (await Object(r.a)(`../enrollment_data/${t}.csv`)).reduce((t, {
                name: e,
                term: n,
                count: r
            }) => (t.hasOwnProperty(e) ? t[e].push({
                term: n,
                count: r
            }) : t[e] = [{
                term: n,
                count: r
            }], t), {});
            for (const t of Object.values(n)) t.sort((t, e) => Object(o.sortByTerm)(t.term, e.term));
            const u = document.getElementById(t).getContext("2d");
            new Chart(u, {
                type: "line",
                data: {
                    labels: n[Object.keys(n)[0]].map(t => t.term),
                    datasets: Object.entries(n).map(([t, e]) => ({
                        label: t,
                        fill: !1,
                        data: e.map(t => t.count)
                    }))
                },
                options: {
                    tooltips: {
                        mode: "index",
                        callbacks: {
                            title: t => {
                                const {
                                    label: e
                                } = t[0];
                                return Object(o.shortTermToFullName)(e)
                            }
                        }
                    },
                    legend: {
                        display: !1
                    },
                    title: {
                        display: !0,
                        text: e
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
        u("dept-size-subject-area", "Department Size by Subject Areas Offered"), u("dept-size-courses", "Department Size by Courses Offered from 1999-2020"), u("dept-size-sections", "Department Size by Sections Offered from 1999-2020"), u("dept-size-enrollment", "Department Size by Total Students Enrolled Across All Classes from 1999-2020"), a("dept-section-count-by-term", "Number of Sections by Department per Term"), a("dept-enrollment-count-by-term", "Number of Enrolled Students by Department per Term"), a("college-enrollment-by-division", "Number of Enrolled Students by Division")
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
    }
});;
({
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