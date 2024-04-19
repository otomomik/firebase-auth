/*! @license Firebase v3.7.5
    Build: 3.7.5-rc.1
    Terms: https://firebase.google.com/terms/ */
var firebase = null
;(function () {
  var aa = function (a) {
      var b = 0
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
      }
    },
    ba =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a
            a[b] = c.value
            return a
          },
    ca = function (a) {
      a = [
        'object' == typeof globalThis && globalThis,
        a,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global,
      ]
      for (var b = 0; b < a.length; ++b) {
        var c = a[b]
        if (c && c.Math == Math) return c
      }
      throw Error('Cannot find global object')
    },
    da = ca(this),
    ea = function (a, b) {
      if (b)
        a: {
          var c = da
          a = a.split('.')
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d]
            if (!(e in c)) break a
            c = c[e]
          }
          a = a[a.length - 1]
          d = c[a]
          b = b(d)
          b != d &&
            null != b &&
            ba(c, a, { configurable: !0, writable: !0, value: b })
        }
    }
  ea('Symbol', function (a) {
    if (a) return a
    var b = function (g, k) {
      this.W = g
      ba(this, 'description', { configurable: !0, writable: !0, value: k })
    }
    b.prototype.toString = function () {
      return this.W
    }
    var c = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
      d = 0,
      e = function (g) {
        if (this instanceof e)
          throw new TypeError('Symbol is not a constructor')
        return new b(c + (g || '') + '_' + d++, g)
      }
    return e
  })
  var l = function (a) {
      var b =
        'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator]
      if (b) return b.call(a)
      if ('number' == typeof a.length) return { next: aa(a) }
      throw Error(String(a) + ' is not an iterable or ArrayLike')
    },
    fa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
      return c
    },
    ha = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c]
      return b
    } /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var n = this || self,
    ia = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    ja = function (a, b, c) {
      if (!a) throw Error()
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2)
        return function () {
          var e = Array.prototype.slice.call(arguments)
          Array.prototype.unshift.apply(e, d)
          return a.apply(b, e)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    },
    p = function (a, b, c) {
      p =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf('native code')
          ? ia
          : ja
      return p.apply(null, arguments)
    },
    ka = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    },
    q = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.ma = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.base = function (d, e, g) {
        for (
          var k = Array(arguments.length - 2), f = 2;
          f < arguments.length;
          f++
        )
          k[f - 2] = arguments[f]
        return b.prototype[e].apply(d, k)
      }
    }
  function r(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, r)
    else {
      var c = Error().stack
      c && (this.stack = c)
    }
    a && (this.message = String(a))
    void 0 !== b && (this.cause = b)
  }
  q(r, Error)
  r.prototype.name = 'CustomError'
  function t(a, b) {
    a = a.split('%s')
    for (var c = '', d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : '%s')
    r.call(this, c + a[d])
  }
  q(t, r)
  t.prototype.name = 'AssertionError'
  function u(a, b, c, d) {
    var e = 'Assertion failed'
    if (c) {
      e += ': ' + c
      var g = d
    } else a && ((e += ': ' + a), (g = b))
    throw new t('' + e, g || [])
  }
  var w = function (a, b, c) {
      a || u('', null, b, Array.prototype.slice.call(arguments, 2))
    },
    la = function (a, b, c) {
      null == a &&
        u(
          'Expected to exist: %s.',
          [a],
          b,
          Array.prototype.slice.call(arguments, 2)
        )
      return a
    },
    x = function (a, b, c) {
      if ('function' !== typeof a) {
        var d = typeof a
        d = 'object' != d ? d : a ? (Array.isArray(a) ? 'array' : d) : 'null'
        u(
          'Expected function but got %s: %s.',
          [d, a],
          b,
          Array.prototype.slice.call(arguments, 2)
        )
      }
    }
  var y = function (a, b) {
    this.ba = 100
    this.X = a
    this.ha = b
    this.F = 0
    this.D = null
  }
  y.prototype.get = function () {
    if (0 < this.F) {
      this.F--
      var a = this.D
      this.D = a.next
      a.next = null
    } else a = this.X()
    return a
  }
  y.prototype.put = function (a) {
    this.ha(a)
    this.F < this.ba && (this.F++, (a.next = this.D), (this.D = a))
  }
  var z, A
  a: {
    for (var ma = ['CLOSURE_FLAGS'], C = n, D = 0; D < ma.length; D++)
      if (((C = C[ma[D]]), null == C)) {
        A = null
        break a
      }
    A = C
  }
  var na = A && A[610401301]
  z = null != na ? na : !1
  function E() {
    var a = n.navigator
    return a && (a = a.userAgent) ? a : ''
  }
  var F,
    oa = n.navigator
  F = oa ? oa.userAgentData || null : null
  function G(a) {
    return -1 != E().indexOf(a)
  }
  function H() {
    return z ? !!F && 0 < F.brands.length : !1
  }
  function pa() {
    return H() ? !1 : G('Trident') || G('MSIE')
  }
  function I() {
    return z ? !!F && !!F.platform : !1
  }
  function qa() {
    return G('iPhone') && !G('iPod') && !G('iPad')
  }
  H() || G('Opera')
  pa()
  G('Edge')
  !G('Gecko') ||
    (-1 != E().toLowerCase().indexOf('webkit') && !G('Edge')) ||
    G('Trident') ||
    G('MSIE') ||
    G('Edge')
  ;-1 != E().toLowerCase().indexOf('webkit') && !G('Edge') && G('Mobile')
  I() || G('Macintosh')
  I() || G('Windows')
  ;(I() ? 'Linux' === F.platform : G('Linux')) || I() || G('CrOS')
  I() || G('Android')
  qa()
  G('iPad')
  G('iPod')
  qa() || G('iPad') || G('iPod')
  E().toLowerCase().indexOf('kaios')
  var J = function () {}
  var K = function (a) {
    if (ra !== ra) throw Error('SafeUrl is not meant to be built directly')
    this.ga = a
  }
  K.prototype.toString = function () {
    return this.ga.toString()
  }
  var ra = {}
  new K('about:invalid#zClosurez')
  new K('about:blank')
  var sa = {},
    ta = function () {
      if (sa !== sa) throw Error('SafeStyle is not meant to be built directly')
      this.fa = ''
    }
  ta.prototype.toString = function () {
    return this.fa.toString()
  }
  new ta()
  var ua = {},
    va = function () {
      if (ua !== ua)
        throw Error('SafeStyleSheet is not meant to be built directly')
      this.ea = ''
    }
  va.prototype.toString = function () {
    return this.ea.toString()
  }
  new va()
  var wa = {},
    xa = function () {
      var a = (n.trustedTypes && n.trustedTypes.emptyHTML) || ''
      if (wa !== wa) throw Error('SafeHtml is not meant to be built directly')
      this.da = a
    }
  xa.prototype.toString = function () {
    return this.da.toString()
  }
  new xa()
  var ya = function () {
    var a = document
    var b = 'IFRAME'
    'application/xhtml+xml' === a.contentType && (b = b.toLowerCase())
    return a.createElement(b)
  }
  var L,
    za = function () {
      var a = n.MessageChannel
      'undefined' === typeof a &&
        'undefined' !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !G('Presto') &&
        (a = function () {
          var e = ya()
          e.style.display = 'none'
          document.documentElement.appendChild(e)
          var g = e.contentWindow
          e = g.document
          e.open()
          e.close()
          var k = 'callImmediate' + Math.random(),
            f =
              'file:' == g.location.protocol
                ? '*'
                : g.location.protocol + '//' + g.location.host
          e = p(function (h) {
            if (('*' == f || h.origin == f) && h.data == k)
              this.port1.onmessage()
          }, this)
          g.addEventListener('message', e, !1)
          this.port1 = {}
          this.port2 = {
            postMessage: function () {
              g.postMessage(k, f)
            },
          }
        })
      if ('undefined' !== typeof a && !pa()) {
        var b = new a(),
          c = {},
          d = c
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next
            var e = c.M
            c.M = null
            e()
          }
        }
        return function (e) {
          d.next = { M: e }
          d = d.next
          b.port2.postMessage(0)
        }
      }
      return function (e) {
        n.setTimeout(e, 0)
      }
    }
  function Aa(a) {
    n.setTimeout(function () {
      throw a
    }, 0)
  }
  var M = function () {
    this.G = this.o = null
  }
  M.prototype.add = function (a, b) {
    var c = Ba.get()
    c.set(a, b)
    this.G ? (this.G.next = c) : (w(!this.o), (this.o = c))
    this.G = c
  }
  M.prototype.remove = function () {
    var a = null
    this.o &&
      ((a = this.o),
      (this.o = this.o.next),
      this.o || (this.G = null),
      (a.next = null))
    return a
  }
  var Ba = new y(
      function () {
        return new Ca()
      },
      function (a) {
        return a.reset()
      }
    ),
    Ca = function () {
      this.next = this.scope = this.fn = null
    }
  Ca.prototype.set = function (a, b) {
    this.fn = a
    this.scope = b
    this.next = null
  }
  Ca.prototype.reset = function () {
    this.next = this.scope = this.fn = null
  }
  var Da =
      n.console && n.console.createTask
        ? n.console.createTask.bind(n.console)
        : void 0,
    Ea = Da ? Symbol('consoleTask') : void 0
  function Fa(a, b) {
    function c() {
      var f = ha.apply(0, arguments),
        h = this
      return k.run(function () {
        return a.call.apply(a, [h].concat(f instanceof Array ? f : fa(l(f))))
      })
    }
    b = void 0 === b ? 'anonymous' : b
    if (Ea && a[Ea]) return a
    var d = a,
      e,
      g = null == (e = Ga) ? void 0 : e()
    a = function () {
      var f = ha.apply(0, arguments),
        h,
        m = null == (h = Ga) ? void 0 : h()
      if (g !== m)
        throw Error(
          b +
            " was scheduled in '" +
            g +
            "' but called in '" +
            m +
            "'.\nMake sure your test awaits all async calls.\n\nTIP: To help investigate, debug the test in Chrome and look at the async portion\nof the call stack to see what originally scheduled the callback.  Then, make the\ntest wait for the relevant asynchronous work to finish."
        )
      return d.call.apply(d, [this].concat(f instanceof Array ? f : fa(l(f))))
    }
    if (!Da) return a
    var k = Da(a.name || b)
    c[la(Ea)] = k
    return c
  }
  var Ga
  var N,
    Ha = !1,
    Ia = new M(),
    O = function (a, b) {
      N || Ja()
      Ha || (N(), (Ha = !0))
      a = Fa(a, 'goog.async.run')
      Ia.add(a, b)
    },
    Ja = function () {
      if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0)
        N = function () {
          a.then(Ka)
        }
      } else
        N = function () {
          var b = Ka
          'function' !== typeof n.setImmediate ||
          (n.Window &&
            n.Window.prototype &&
            (H() || !G('Edge')) &&
            n.Window.prototype.setImmediate == n.setImmediate)
            ? (L || (L = za()), L(b))
            : n.setImmediate(b)
        }
    },
    Ka = function () {
      for (var a; (a = Ia.remove()); ) {
        try {
          a.fn.call(a.scope)
        } catch (b) {
          Aa(b)
        }
        Ba.put(a)
      }
      Ha = !1
    }
  var R = function (a, b) {
      this.g = 0
      this.U = void 0
      this.s = this.i = this.m = null
      this.B = this.H = !1
      if (a != J)
        try {
          var c = this
          a.call(
            b,
            function (d) {
              P(c, 2, d)
            },
            function (d) {
              if (!(d instanceof Q))
                try {
                  if (d instanceof Error) throw d
                  throw Error('Promise rejected.')
                } catch (e) {}
              P(c, 3, d)
            }
          )
        } catch (d) {
          P(this, 3, d)
        }
    },
    La = function () {
      this.next = this.context = this.u = this.l = this.child = null
      this.v = !1
    }
  La.prototype.reset = function () {
    this.context = this.u = this.l = this.child = null
    this.v = !1
  }
  var Ma = new y(
      function () {
        return new La()
      },
      function (a) {
        a.reset()
      }
    ),
    Na = function (a, b, c) {
      var d = Ma.get()
      d.l = a
      d.u = b
      d.context = c
      return d
    },
    Pa = function (a, b, c) {
      Oa(a, b, c, null) || O(ka(b, a))
    }
  R.prototype.then = function (a, b, c) {
    null != a && x(a, 'opt_onFulfilled should be a function.')
    null != b &&
      x(
        b,
        'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?'
      )
    return Qa(
      this,
      'function' === typeof a ? a : null,
      'function' === typeof b ? b : null,
      c
    )
  }
  R.prototype.$goog_Thenable = !0
  R.prototype.V = function (a, b) {
    return Qa(this, null, a, b)
  }
  R.prototype.catch = R.prototype.V
  R.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new Q(a)
      O(function () {
        Ra(this, b)
      }, this)
    }
  }
  var Ra = function (a, b) {
      if (0 == a.g)
        if (a.m) {
          var c = a.m
          if (c.i) {
            for (
              var d = 0, e = null, g = null, k = c.i;
              k && (k.v || (d++, k.child == a && (e = k), !(e && 1 < d)));
              k = k.next
            )
              e || (g = k)
            e &&
              (0 == c.g && 1 == d
                ? Ra(c, b)
                : (g
                    ? ((d = g),
                      w(c.i),
                      w(null != d),
                      d.next == c.s && (c.s = d),
                      (d.next = d.next.next))
                    : Sa(c),
                  Ta(c, e, 3, b)))
          }
          a.m = null
        } else P(a, 3, b)
    },
    Va = function (a, b) {
      a.i || (2 != a.g && 3 != a.g) || Ua(a)
      w(null != b.l)
      a.s ? (a.s.next = b) : (a.i = b)
      a.s = b
    },
    Qa = function (a, b, c, d) {
      b && (b = Fa(b, 'goog.Promise.then'))
      c && (c = Fa(c, 'goog.Promise.then'))
      var e = Na(null, null, null)
      e.child = new R(function (g, k) {
        e.l = b
          ? function (f) {
              try {
                var h = b.call(d, f)
                g(h)
              } catch (m) {
                k(m)
              }
            }
          : g
        e.u = c
          ? function (f) {
              try {
                var h = c.call(d, f)
                void 0 === h && f instanceof Q ? k(f) : g(h)
              } catch (m) {
                k(m)
              }
            }
          : k
      })
      e.child.m = a
      Va(a, e)
      return e.child
    }
  R.prototype.ja = function (a) {
    w(1 == this.g)
    this.g = 0
    P(this, 2, a)
  }
  R.prototype.ka = function (a) {
    w(1 == this.g)
    this.g = 0
    P(this, 3, a)
  }
  var P = function (a, b, c) {
      0 == a.g &&
        (a === c &&
          ((b = 3), (c = new TypeError('Promise cannot resolve to itself'))),
        (a.g = 1),
        Oa(c, a.ja, a.ka, a) ||
          ((a.U = c),
          (a.g = b),
          (a.m = null),
          Ua(a),
          3 != b || c instanceof Q || Wa(a, c)))
    },
    Oa = function (a, b, c, d) {
      if (a instanceof R)
        return (
          null != b && x(b, 'opt_onFulfilled should be a function.'),
          null != c &&
            x(
              c,
              'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?'
            ),
          Va(a, Na(b || J, c || null, d)),
          !0
        )
      if (a)
        try {
          var e = !!a.$goog_Thenable
        } catch (k) {
          e = !1
        }
      else e = !1
      if (e) return a.then(b, c, d), !0
      e = typeof a
      if (('object' == e && null != a) || 'function' == e)
        try {
          var g = a.then
          if ('function' === typeof g) return Xa(a, g, b, c, d), !0
        } catch (k) {
          return c.call(d, k), !0
        }
      return !1
    },
    Xa = function (a, b, c, d, e) {
      var g = !1,
        k = function (h) {
          g || ((g = !0), c.call(e, h))
        },
        f = function (h) {
          g || ((g = !0), d.call(e, h))
        }
      try {
        b.call(a, k, f)
      } catch (h) {
        f(h)
      }
    },
    Ua = function (a) {
      a.H || ((a.H = !0), O(a.Y, a))
    },
    Sa = function (a) {
      var b = null
      a.i && ((b = a.i), (a.i = b.next), (b.next = null))
      a.i || (a.s = null)
      null != b && w(null != b.l)
      return b
    }
  R.prototype.Y = function () {
    for (var a; (a = Sa(this)); ) Ta(this, a, this.g, this.U)
    this.H = !1
  }
  var Ta = function (a, b, c, d) {
      if (3 == c && b.u && !b.v) for (; a && a.B; a = a.m) a.B = !1
      if (b.child) (b.child.m = null), Ya(b, c, d)
      else
        try {
          b.v ? b.l.call(b.context) : Ya(b, c, d)
        } catch (e) {
          Za.call(null, e)
        }
      Ma.put(b)
    },
    Ya = function (a, b, c) {
      2 == b ? a.l.call(a.context, c) : a.u && a.u.call(a.context, c)
    },
    Wa = function (a, b) {
      a.B = !0
      O(function () {
        a.B && Za.call(null, b)
      })
    },
    Za = Aa,
    Q = function (a) {
      r.call(this, a)
    }
  q(Q, r)
  Q.prototype.name = 'cancel'
  R.all = function (a) {
    return new R(function (b, c) {
      var d = a.length,
        e = []
      if (d)
        for (
          var g = function (m, v) {
              d--
              e[m] = v
              0 == d && b(e)
            },
            k = function (m) {
              c(m)
            },
            f = 0,
            h;
          f < a.length;
          f++
        )
          (h = a[f]), Pa(h, ka(g, f), k)
      else b(e)
    })
  }
  R.resolve = function (a) {
    if (a instanceof R) return a
    var b = new R(J)
    P(b, 2, a)
    return b
  }
  R.reject = function (a) {
    return new R(function (b, c) {
      c(a)
    })
  }
  R.prototype['catch'] = R.prototype.V
  var $a = R
  'undefined' !== typeof Promise && ($a = Promise)
  function S(a, b) {
    if (!(b instanceof Object)) return b
    switch (b.constructor) {
      case Date:
        return new Date(b.getTime())
      case Object:
        void 0 === a && (a = {})
        break
      case Array:
        a = []
        break
      default:
        return b
    }
    for (var c in b) b.hasOwnProperty(c) && (a[c] = S(a[c], b[c]))
    return a
  }
  var ab = Error.captureStackTrace,
    U = function (a, b) {
      this.code = a
      this.message = b
      if (ab) ab(this, T.prototype.create)
      else {
        var c = Error.apply(this, arguments)
        this.name = 'FirebaseError'
        Object.defineProperty(this, 'stack', {
          get: function () {
            return c.stack
          },
        })
      }
    }
  U.prototype = Object.create(Error.prototype)
  U.prototype.constructor = U
  U.prototype.name = 'FirebaseError'
  var T = function (a, b, c) {
    this.service = a
    this.ia = b
    this.errors = c
    this.pattern = /\{\$([^}]+)}/g
  }
  T.prototype.create = function (a, b) {
    void 0 === b && (b = {})
    var c = this.errors[a]
    a = this.service + '/' + a
    c =
      void 0 === c
        ? 'Error'
        : c.replace(this.pattern, function (e, g) {
            e = b[g]
            return void 0 !== e ? e.toString() : '<' + g + '?>'
          })
    c = this.ia + ': ' + c + ' (' + a + ').'
    c = new U(a, c)
    for (var d in b) b.hasOwnProperty(d) && '_' !== d.slice(-1) && (c[d] = b[d])
    return c
  }
  var bb = $a
  function cb(a, b) {
    a = new V(a, b)
    return a.subscribe.bind(a)
  }
  var V = function (a, b) {
    var c = this
    this.h = []
    this.T = 0
    this.task = bb.resolve()
    this.A = !1
    this.J = b
    this.task
      .then(function () {
        a(c)
      })
      .catch(function (d) {
        c.error(d)
      })
  }
  V.prototype.next = function (a) {
    db(this, function (b) {
      b.next(a)
    })
  }
  V.prototype.error = function (a) {
    db(this, function (b) {
      b.error(a)
    })
    this.close(a)
  }
  V.prototype.complete = function () {
    db(this, function (a) {
      a.complete()
    })
    this.close()
  }
  V.prototype.subscribe = function (a, b, c) {
    var d = this
    if (void 0 === a && void 0 === b && void 0 === c)
      throw Error('Missing Observer.')
    var e = eb(a) ? a : { next: a, error: b, complete: c }
    void 0 === e.next && (e.next = fb)
    void 0 === e.error && (e.error = fb)
    void 0 === e.complete && (e.complete = fb)
    a = this.la.bind(this, this.h.length)
    this.A &&
      this.task.then(function () {
        try {
          d.P ? e.error(d.P) : e.complete()
        } catch (g) {}
      })
    this.h.push(e)
    return a
  }
  V.prototype.la = function (a) {
    void 0 !== this.h &&
      void 0 !== this.h[a] &&
      (delete this.h[a],
      --this.T,
      0 === this.T && void 0 !== this.J && this.J(this))
  }
  var db = function (a, b) {
      if (!a.A) for (var c = 0; c < a.h.length; c++) gb(a, c, b)
    },
    gb = function (a, b, c) {
      a.task.then(function () {
        if (void 0 !== a.h && void 0 !== a.h[b])
          try {
            c(a.h[b])
          } catch (d) {
            'undefined' !== typeof console && console.error && console.error(d)
          }
      })
    }
  V.prototype.close = function (a) {
    var b = this
    this.A ||
      ((this.A = !0),
      void 0 !== a && (this.P = a),
      this.task.then(function () {
        b.h = void 0
        b.J = void 0
      }))
  }
  function eb(a) {
    if ('object' !== typeof a || null === a) return !1
    for (
      var b = l(['next', 'error', 'complete']), c = b.next();
      !c.done;
      c = b.next()
    )
      if (((c = c.value), c in a && 'function' === typeof a[c])) return !0
    return !1
  }
  function fb() {}
  var W = $a,
    X = function (a, b, c) {
      var d = this
      this.R = c
      this.S = !1
      this.j = {}
      this.I = b
      this.K = S(void 0, a)
      a = 'serviceAccount' in this.K
      ;('credential' in this.K || a) &&
        'undefined' !== typeof console &&
        console.log(
          "The '" +
            (a ? 'serviceAccount' : 'credential') +
            "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started."
        )
      Object.keys(c.INTERNAL.factories).forEach(function (e) {
        var g = c.INTERNAL.useAsService(d, e)
        null !== g && ((g = d.aa.bind(d, g)), (d[e] = g))
      })
    }
  X.prototype.delete = function () {
    var a = this
    return new W(function (b) {
      Y(a)
      b()
    })
      .then(function () {
        a.R.INTERNAL.removeApp(a.I)
        var b = []
        Object.keys(a.j).forEach(function (c) {
          Object.keys(a.j[c]).forEach(function (d) {
            b.push(a.j[c][d])
          })
        })
        return W.all(
          b
            .filter(function (c) {
              return 'INTERNAL' in c
            })
            .map(function (c) {
              return c.INTERNAL.delete()
            })
        )
      })
      .then(function () {
        a.S = !0
        a.j = {}
      })
  }
  X.prototype.aa = function (a, b) {
    Y(this)
    'undefined' === typeof this.j[a] && (this.j[a] = {})
    var c = b || '[DEFAULT]'
    return 'undefined' === typeof this.j[a][c]
      ? ((b = this.R.INTERNAL.factories[a](this, this.Z.bind(this), b)),
        (this.j[a][c] = b))
      : this.j[a][c]
  }
  X.prototype.Z = function (a) {
    S(this, a)
  }
  var Y = function (a) {
    a.S && Z('app-deleted', { name: a.I })
  }
  da.Object.defineProperties(X.prototype, {
    name: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        Y(this)
        return this.I
      },
    },
    options: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        Y(this)
        return this.K
      },
    },
  })
  ;(X.prototype.name && X.prototype.options) ||
    X.prototype.delete ||
    console.log('dc')
  function hb() {
    function a(f) {
      f = f || '[DEFAULT]'
      var h = d[f]
      void 0 === h && Z('no-app', { name: f })
      return h
    }
    function b(f, h) {
      Object.keys(e).forEach(function (m) {
        m = c(f, m)
        if (null !== m && g[m]) g[m](h, f)
      })
    }
    function c(f, h) {
      if ('serverAuth' === h) return null
      var m = h
      f = f.options
      'auth' === h &&
        (f.serviceAccount || f.credential) &&
        ((m = 'serverAuth'), 'serverAuth' in e || Z('sa-not-supported'))
      return m
    }
    var d = {},
      e = {},
      g = {},
      k = {
        __esModule: !0,
        initializeApp: function (f, h) {
          void 0 === h
            ? (h = '[DEFAULT]')
            : ('string' !== typeof h || '' === h) &&
              Z('bad-app-name', { name: h + '' })
          void 0 !== d[h] && Z('duplicate-app', { name: h })
          f = new X(f, h, k)
          d[h] = f
          b(f, 'create')
          ;(void 0 != f.INTERNAL && void 0 != f.INTERNAL.getToken) ||
            S(f, {
              INTERNAL: {
                getUid: function () {
                  return null
                },
                getToken: function () {
                  return W.resolve(null)
                },
                addAuthTokenListener: function () {},
                removeAuthTokenListener: function () {},
              },
            })
          return f
        },
        app: a,
        apps: null,
        Promise: W,
        SDK_VERSION: '0.0.0',
        INTERNAL: {
          registerService: function (f, h, m, v, ib) {
            e[f] && Z('duplicate-service', { name: f })
            e[f] = ib
              ? h
              : function (B, jb) {
                  return h(B, jb, '[DEFAULT]')
                }
            v && (g[f] = v)
            v = function (B) {
              void 0 === B && (B = a())
              'function' !== typeof B[f] &&
                Z('invalid-app-argument', { name: f })
              return B[f]()
            }
            void 0 !== m && S(v, m)
            return (k[f] = v)
          },
          createFirebaseNamespace: hb,
          extendNamespace: function (f) {
            S(k, f)
          },
          createSubscribe: cb,
          ErrorFactory: T,
          removeApp: function (f) {
            b(d[f], 'delete')
            delete d[f]
          },
          factories: e,
          useAsService: c,
          Promise: R,
          deepExtend: S,
        },
      }
    k['default'] = k
    Object.defineProperty(k, 'apps', {
      get: function () {
        return Object.keys(d).map(function (f) {
          return d[f]
        })
      },
    })
    a.App = X
    return k
  }
  function Z(a, b) {
    throw kb.create(a, b)
  }
  var kb = new T('app', 'Firebase', {
    'no-app':
      "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
    'bad-app-name': "Illegal App name: '{$name}",
    'duplicate-app': "Firebase App named '{$name}' already exists",
    'app-deleted': "Firebase App named '{$name}' already deleted",
    'duplicate-service': "Firebase service named '{$name}' already registered",
    'sa-not-supported':
      'Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain',
    'invalid-app-argument':
      'firebase.{$name}() takes either no argument or a Firebase App instance.',
  })
  'undefined' !== typeof firebase && (firebase = hb())
}).call(this)
firebase.SDK_VERSION = '3.7.5'
;(function () {
  var k,
    aa = function (a) {
      var b = 0
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
      }
    },
    ba =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a
            a[b] = c.value
            return a
          },
    ca = function (a) {
      a = [
        'object' == typeof globalThis && globalThis,
        a,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global,
      ]
      for (var b = 0; b < a.length; ++b) {
        var c = a[b]
        if (c && c.Math == Math) return c
      }
      throw Error('Cannot find global object')
    },
    da = ca(this),
    ea = function (a, b) {
      if (b)
        a: {
          var c = da
          a = a.split('.')
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d]
            if (!(e in c)) break a
            c = c[e]
          }
          a = a[a.length - 1]
          d = c[a]
          b = b(d)
          b != d &&
            null != b &&
            ba(c, a, { configurable: !0, writable: !0, value: b })
        }
    }
  ea('Symbol', function (a) {
    if (a) return a
    var b = function (f, g) {
      this.Pj = f
      ba(this, 'description', { configurable: !0, writable: !0, value: g })
    }
    b.prototype.toString = function () {
      return this.Pj
    }
    var c = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError('Symbol is not a constructor')
        return new b(c + (f || '') + '_' + d++, f)
      }
    return e
  })
  ea('Symbol.iterator', function (a) {
    if (a) return a
    a = Symbol('Symbol.iterator')
    for (
      var b =
          'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
            ' '
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = da[b[c]]
      'function' === typeof d &&
        'function' != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return fa(aa(this))
          },
        })
    }
    return a
  })
  var fa = function (a) {
      a = { next: a }
      a[Symbol.iterator] = function () {
        return this
      }
      return a
    },
    ha = function (a) {
      return (a.raw = a)
    },
    ia = function (a, b) {
      a.raw = b
      return a
    },
    ja = function (a) {
      var b =
        'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator]
      if (b) return b.call(a)
      if ('number' == typeof a.length) return { next: aa(a) }
      throw Error(String(a) + ' is not an iterable or ArrayLike')
    },
    ka = function (a) {
      if (!(a instanceof Array)) {
        a = ja(a)
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
        a = c
      }
      return a
    },
    la =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {}
            b.prototype = a
            return new b()
          },
    ma
  if ('function' == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf
  else {
    var na
    a: {
      var pa = { a: !0 },
        qa = {}
      try {
        qa.__proto__ = pa
        na = qa.a
        break a
      } catch (a) {}
      na = !1
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible')
          return a
        }
      : null
  }
  var ra = ma,
    p = function (a, b) {
      a.prototype = la(b.prototype)
      a.prototype.constructor = a
      if (ra) ra(a, b)
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c)
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c]
      a.aa = b.prototype
    },
    sa = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c]
      return b
    }
  ea('Promise', function (a) {
    function b() {
      this.Ab = null
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g)
          })
    }
    if (a) return a
    b.prototype.Dh = function (g) {
      if (null == this.Ab) {
        this.Ab = []
        var h = this
        this.Eh(function () {
          h.ik()
        })
      }
      this.Ab.push(g)
    }
    var d = da.setTimeout
    b.prototype.Eh = function (g) {
      d(g, 0)
    }
    b.prototype.ik = function () {
      for (; this.Ab && this.Ab.length; ) {
        var g = this.Ab
        this.Ab = []
        for (var h = 0; h < g.length; ++h) {
          var l = g[h]
          g[h] = null
          try {
            l()
          } catch (m) {
            this.Wj(m)
          }
        }
      }
      this.Ab = null
    }
    b.prototype.Wj = function (g) {
      this.Eh(function () {
        throw g
      })
    }
    var e = function (g) {
      this.W = 0
      this.ua = void 0
      this.Vc = []
      this.Ii = !1
      var h = this.jg()
      try {
        g(h.resolve, h.reject)
      } catch (l) {
        h.reject(l)
      }
    }
    e.prototype.jg = function () {
      function g(m) {
        return function (n) {
          l || ((l = !0), m.call(h, n))
        }
      }
      var h = this,
        l = !1
      return { resolve: g(this.Dl), reject: g(this.fh) }
    }
    e.prototype.Dl = function (g) {
      if (g === this)
        this.fh(new TypeError('A Promise cannot resolve to itself'))
      else if (g instanceof e) this.Rl(g)
      else {
        a: switch (typeof g) {
          case 'object':
            var h = null != g
            break a
          case 'function':
            h = !0
            break a
          default:
            h = !1
        }
        h ? this.Cl(g) : this.ki(g)
      }
    }
    e.prototype.Cl = function (g) {
      var h = void 0
      try {
        h = g.then
      } catch (l) {
        this.fh(l)
        return
      }
      'function' == typeof h ? this.Sl(h, g) : this.ki(g)
    }
    e.prototype.fh = function (g) {
      this.uj(2, g)
    }
    e.prototype.ki = function (g) {
      this.uj(1, g)
    }
    e.prototype.uj = function (g, h) {
      if (0 != this.W)
        throw Error(
          'Cannot settle(' +
            g +
            ', ' +
            h +
            '): Promise already settled in state' +
            this.W
        )
      this.W = g
      this.ua = h
      2 === this.W && this.Jl()
      this.kk()
    }
    e.prototype.Jl = function () {
      var g = this
      d(function () {
        if (g.il()) {
          var h = da.console
          'undefined' !== typeof h && h.error(g.ua)
        }
      }, 1)
    }
    e.prototype.il = function () {
      if (this.Ii) return !1
      var g = da.CustomEvent,
        h = da.Event,
        l = da.dispatchEvent
      if ('undefined' === typeof l) return !0
      'function' === typeof g
        ? (g = new g('unhandledrejection', { cancelable: !0 }))
        : 'function' === typeof h
          ? (g = new h('unhandledrejection', { cancelable: !0 }))
          : ((g = da.document.createEvent('CustomEvent')),
            g.initCustomEvent('unhandledrejection', !1, !0, g))
      g.promise = this
      g.reason = this.ua
      return l(g)
    }
    e.prototype.kk = function () {
      if (null != this.Vc) {
        for (var g = 0; g < this.Vc.length; ++g) f.Dh(this.Vc[g])
        this.Vc = null
      }
    }
    var f = new b()
    e.prototype.Rl = function (g) {
      var h = this.jg()
      g.we(h.resolve, h.reject)
    }
    e.prototype.Sl = function (g, h) {
      var l = this.jg()
      try {
        g.call(h, l.resolve, l.reject)
      } catch (m) {
        l.reject(m)
      }
    }
    e.prototype.then = function (g, h) {
      function l(u, C) {
        return 'function' == typeof u
          ? function (oa) {
              try {
                m(u(oa))
              } catch (Kb) {
                n(Kb)
              }
            }
          : C
      }
      var m,
        n,
        r = new e(function (u, C) {
          m = u
          n = C
        })
      this.we(l(g, m), l(h, n))
      return r
    }
    e.prototype.catch = function (g) {
      return this.then(void 0, g)
    }
    e.prototype.we = function (g, h) {
      function l() {
        switch (m.W) {
          case 1:
            g(m.ua)
            break
          case 2:
            h(m.ua)
            break
          default:
            throw Error('Unexpected state: ' + m.W)
        }
      }
      var m = this
      null == this.Vc ? f.Dh(l) : this.Vc.push(l)
      this.Ii = !0
    }
    e.resolve = c
    e.reject = function (g) {
      return new e(function (h, l) {
        l(g)
      })
    }
    e.race = function (g) {
      return new e(function (h, l) {
        for (var m = ja(g), n = m.next(); !n.done; n = m.next())
          c(n.value).we(h, l)
      })
    }
    e.all = function (g) {
      var h = ja(g),
        l = h.next()
      return l.done
        ? c([])
        : new e(function (m, n) {
            function r(oa) {
              return function (Kb) {
                u[oa] = Kb
                C--
                0 == C && m(u)
              }
            }
            var u = [],
              C = 0
            do
              u.push(void 0),
                C++,
                c(l.value).we(r(u.length - 1), n),
                (l = h.next())
            while (!l.done)
          })
    }
    return e
  })
  var ta = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    },
    ua =
      'function' == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c]
              if (d) for (var e in d) ta(d, e) && (a[e] = d[e])
            }
            return a
          }
  ea('Object.assign', function (a) {
    return a || ua
  })
  ea('Array.prototype.find', function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this
            d instanceof String && (d = String(d))
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f]
              if (b.call(c, g, f, d)) {
                b = g
                break a
              }
            }
            b = void 0
          }
          return b
        }
  })
  ea('WeakMap', function (a) {
    function b() {}
    function c(l) {
      var m = typeof l
      return ('object' === m && null !== l) || 'function' === m
    }
    function d(l) {
      if (!ta(l, f)) {
        var m = new b()
        ba(l, f, { value: m })
      }
    }
    function e(l) {
      var m = Object[l]
      m &&
        (Object[l] = function (n) {
          if (n instanceof b) return n
          Object.isExtensible(n) && d(n)
          return m(n)
        })
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1
        try {
          var l = Object.seal({}),
            m = Object.seal({}),
            n = new a([
              [l, 2],
              [m, 3],
            ])
          if (2 != n.get(l) || 3 != n.get(m)) return !1
          n.delete(l)
          n.set(m, 4)
          return !n.has(l) && 4 == n.get(m)
        } catch (r) {
          return !1
        }
      })()
    )
      return a
    var f = '$jscomp_hidden_' + Math.random()
    e('freeze')
    e('preventExtensions')
    e('seal')
    var g = 0,
      h = function (l) {
        this.Aa = (g += Math.random() + 1).toString()
        if (l) {
          l = ja(l)
          for (var m; !(m = l.next()).done; )
            (m = m.value), this.set(m[0], m[1])
        }
      }
    h.prototype.set = function (l, m) {
      if (!c(l)) throw Error('Invalid WeakMap key')
      d(l)
      if (!ta(l, f)) throw Error('WeakMap key fail: ' + l)
      l[f][this.Aa] = m
      return this
    }
    h.prototype.get = function (l) {
      return c(l) && ta(l, f) ? l[f][this.Aa] : void 0
    }
    h.prototype.has = function (l) {
      return c(l) && ta(l, f) && ta(l[f], this.Aa)
    }
    h.prototype.delete = function (l) {
      return c(l) && ta(l, f) && ta(l[f], this.Aa) ? delete l[f][this.Aa] : !1
    }
    return h
  })
  ea('Map', function (a) {
    if (
      (function () {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1
        try {
          var h = Object.seal({ x: 4 }),
            l = new a(ja([[h, 's']]))
          if (
            's' != l.get(h) ||
            1 != l.size ||
            l.get({ x: 4 }) ||
            l.set({ x: 4 }, 't') != l ||
            2 != l.size
          )
            return !1
          var m = l.entries(),
            n = m.next()
          if (n.done || n.value[0] != h || 's' != n.value[1]) return !1
          n = m.next()
          return n.done ||
            4 != n.value[0].x ||
            't' != n.value[1] ||
            !m.next().done
            ? !1
            : !0
        } catch (r) {
          return !1
        }
      })()
    )
      return a
    var b = new WeakMap(),
      c = function (h) {
        this[0] = {}
        this[1] = f()
        this.size = 0
        if (h) {
          h = ja(h)
          for (var l; !(l = h.next()).done; )
            (l = l.value), this.set(l[0], l[1])
        }
      }
    c.prototype.set = function (h, l) {
      h = 0 === h ? 0 : h
      var m = d(this, h)
      m.list || (m.list = this[0][m.id] = [])
      m.pa
        ? (m.pa.value = l)
        : ((m.pa = {
            next: this[1],
            vb: this[1].vb,
            head: this[1],
            key: h,
            value: l,
          }),
          m.list.push(m.pa),
          (this[1].vb.next = m.pa),
          (this[1].vb = m.pa),
          this.size++)
      return this
    }
    c.prototype.delete = function (h) {
      h = d(this, h)
      return h.pa && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.pa.vb.next = h.pa.next),
          (h.pa.next.vb = h.pa.vb),
          (h.pa.head = null),
          this.size--,
          !0)
        : !1
    }
    c.prototype.clear = function () {
      this[0] = {}
      this[1] = this[1].vb = f()
      this.size = 0
    }
    c.prototype.has = function (h) {
      return !!d(this, h).pa
    }
    c.prototype.get = function (h) {
      return (h = d(this, h).pa) && h.value
    }
    c.prototype.entries = function () {
      return e(this, function (h) {
        return [h.key, h.value]
      })
    }
    c.prototype.keys = function () {
      return e(this, function (h) {
        return h.key
      })
    }
    c.prototype.values = function () {
      return e(this, function (h) {
        return h.value
      })
    }
    c.prototype.forEach = function (h, l) {
      for (var m = this.entries(), n; !(n = m.next()).done; )
        (n = n.value), h.call(l, n[1], n[0], this)
    }
    c.prototype[Symbol.iterator] = c.prototype.entries
    var d = function (h, l) {
        var m = l && typeof l
        'object' == m || 'function' == m
          ? b.has(l)
            ? (m = b.get(l))
            : ((m = '' + ++g), b.set(l, m))
          : (m = 'p_' + l)
        var n = h[0][m]
        if (n && ta(h[0], m))
          for (h = 0; h < n.length; h++) {
            var r = n[h]
            if ((l !== l && r.key !== r.key) || l === r.key)
              return { id: m, list: n, index: h, pa: r }
          }
        return { id: m, list: n, index: -1, pa: void 0 }
      },
      e = function (h, l) {
        var m = h[1]
        return fa(function () {
          if (m) {
            for (; m.head != h[1]; ) m = m.vb
            for (; m.next != m.head; )
              return (m = m.next), { done: !1, value: l(m) }
            m = null
          }
          return { done: !0, value: void 0 }
        })
      },
      f = function () {
        var h = {}
        return (h.vb = h.next = h.head = h)
      },
      g = 0
    return c
  })
  ea('Math.log2', function (a) {
    return a
      ? a
      : function (b) {
          return Math.log(b) / Math.LN2
        }
  })
  ea('Object.values', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d
          for (d in b) ta(b, d) && c.push(b[d])
          return c
        }
  })
  ea('Object.is', function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
  })
  ea('Array.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this
          d instanceof String && (d = String(d))
          var e = d.length
          c = c || 0
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c]
            if (f === b || Object.is(f, b)) return !0
          }
          return !1
        }
  })
  ea('String.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.includes must not be null or undefined"
            )
          if (b instanceof RegExp)
            throw new TypeError(
              'First argument to String.prototype.includes must not be a regular expression'
            )
          return -1 !== (this + '').indexOf(b, c || 0)
        }
  })
  var va = function (a, b) {
    a instanceof String && (a += '')
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++
            return { value: b(f, a[f]), done: !1 }
          }
          d = !0
          return { done: !0, value: void 0 }
        },
      }
    e[Symbol.iterator] = function () {
      return e
    }
    return e
  }
  ea('Array.prototype.entries', function (a) {
    return a
      ? a
      : function () {
          return va(this, function (b, c) {
            return [b, c]
          })
        }
  })
  ea('Array.prototype.keys', function (a) {
    return a
      ? a
      : function () {
          return va(this, function (b) {
            return b
          })
        }
  })
  ea('Array.prototype.values', function (a) {
    return a
      ? a
      : function () {
          return va(this, function (b, c) {
            return c
          })
        }
  })
  ea('Array.from', function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h
                }
          var e = [],
            f =
              'undefined' != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator]
          if ('function' == typeof f) {
            b = f.call(b)
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++))
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g))
          return e
        }
  })
  ea('Object.entries', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d
          for (d in b) ta(b, d) && c.push([d, b[d]])
          return c
        }
  }) /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var wa = wa || {},
    q = this || self,
    xa = function (a, b) {
      a = a.split('.')
      var c = q
      a[0] in c ||
        'undefined' == typeof c.execScript ||
        c.execScript('var ' + a[0])
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
          : (c[d] = b)
    },
    ya = function (a) {
      var b = typeof a
      return 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null'
    },
    za = function (a) {
      var b = ya(a)
      return 'array' == b || ('object' == b && 'number' == typeof a.length)
    },
    t = function (a) {
      var b = typeof a
      return ('object' == b && null != a) || 'function' == b
    },
    Aa = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    Ba = function (a, b, c) {
      if (!a) throw Error()
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2)
        return function () {
          var e = Array.prototype.slice.call(arguments)
          Array.prototype.unshift.apply(e, d)
          return a.apply(b, e)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    },
    v = function (a, b, c) {
      v =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf('native code')
          ? Aa
          : Ba
      return v.apply(null, arguments)
    },
    Ca = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return function () {
        var d = c.slice()
        d.push.apply(d, arguments)
        return a.apply(this, d)
      }
    },
    w = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.aa = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.Km = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h]
        return b.prototype[e].apply(d, g)
      }
    },
    Ea = function (a) {
      return a
    }
  function Fa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Fa)
    else {
      var c = Error().stack
      c && (this.stack = c)
    }
    a && (this.message = String(a))
    void 0 !== b && (this.cause = b)
  }
  w(Fa, Error)
  Fa.prototype.name = 'CustomError'
  var Ga
  function Ha(a, b) {
    a = a.split('%s')
    for (var c = '', d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : '%s')
    Fa.call(this, c + a[d])
  }
  w(Ha, Fa)
  Ha.prototype.name = 'AssertionError'
  function Ia(a, b, c, d) {
    var e = 'Assertion failed'
    if (c) {
      e += ': ' + c
      var f = d
    } else a && ((e += ': ' + a), (f = b))
    throw new Ha('' + e, f || [])
  }
  var x = function (a, b, c) {
      a || Ia('', null, b, Array.prototype.slice.call(arguments, 2))
      return a
    },
    Ja = function (a, b, c) {
      null == a &&
        Ia(
          'Expected to exist: %s.',
          [a],
          b,
          Array.prototype.slice.call(arguments, 2)
        )
      return a
    },
    Ka = function (a, b) {
      throw new Ha(
        'Failure' + (a ? ': ' + a : ''),
        Array.prototype.slice.call(arguments, 1)
      )
    },
    La = function (a, b, c) {
      'number' !== typeof a &&
        Ia(
          'Expected number but got %s: %s.',
          [ya(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        )
      return a
    },
    Ma = function (a, b, c) {
      'string' !== typeof a &&
        Ia(
          'Expected string but got %s: %s.',
          [ya(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        )
    },
    Na = function (a, b, c) {
      'function' !== typeof a &&
        Ia(
          'Expected function but got %s: %s.',
          [ya(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        )
    },
    Oa = function (a, b, c) {
      Array.isArray(a) ||
        Ia(
          'Expected array but got %s: %s.',
          [ya(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        )
    }
  function Pa(a) {
    q.setTimeout(function () {
      throw a
    }, 0)
  }
  var Qa = function (a) {
    return Array.prototype.map
      .call(a, function (b) {
        b = b.toString(16)
        return 1 < b.length ? b : '0' + b
      })
      .join('')
  }
  var Ra = String.prototype.trim
      ? function (a) {
          return a.trim()
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
    Za = function (a) {
      if (!Sa.test(a)) return a
      ;-1 != a.indexOf('&') && (a = a.replace(Ta, '&amp;'))
      ;-1 != a.indexOf('<') && (a = a.replace(Ua, '&lt;'))
      ;-1 != a.indexOf('>') && (a = a.replace(Va, '&gt;'))
      ;-1 != a.indexOf('"') && (a = a.replace(Wa, '&quot;'))
      ;-1 != a.indexOf("'") && (a = a.replace(Xa, '&#39;'))
      ;-1 != a.indexOf('\x00') && (a = a.replace(Ya, '&#0;'))
      return a
    },
    Ta = /&/g,
    Ua = /</g,
    Va = />/g,
    Wa = /"/g,
    Xa = /'/g,
    Ya = /\x00/g,
    Sa = /[\x00&<>"']/,
    y = function (a, b) {
      return -1 != a.indexOf(b)
    }
  var $a, ab
  a: {
    for (var bb = ['CLOSURE_FLAGS'], cb = q, db = 0; db < bb.length; db++)
      if (((cb = cb[bb[db]]), null == cb)) {
        ab = null
        break a
      }
    ab = cb
  }
  var eb = ab && ab[610401301]
  $a = null != eb ? eb : !1
  function fb() {
    var a = q.navigator
    return a && (a = a.userAgent) ? a : ''
  }
  var gb,
    hb = q.navigator
  gb = hb ? hb.userAgentData || null : null
  function ib(a) {
    return $a
      ? gb
        ? gb.brands.some(function (b) {
            return (b = b.brand) && y(b, a)
          })
        : !1
      : !1
  }
  function z(a) {
    return y(fb(), a)
  }
  function jb() {
    return $a ? !!gb && 0 < gb.brands.length : !1
  }
  function kb() {
    return jb() ? !1 : z('Trident') || z('MSIE')
  }
  function lb() {
    return jb()
      ? ib('Chromium')
      : ((z('Chrome') || z('CriOS')) && !(jb() ? 0 : z('Edge'))) || z('Silk')
  }
  var mb = Array.prototype.indexOf
      ? function (a, b) {
          x(null != a.length)
          return Array.prototype.indexOf.call(a, b, void 0)
        }
      : function (a, b) {
          if ('string' === typeof a)
            return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0)
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c
          return -1
        },
    A = Array.prototype.forEach
      ? function (a, b) {
          x(null != a.length)
          Array.prototype.forEach.call(a, b, void 0)
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = 'string' === typeof a ? a.split('') : a,
              e = 0;
            e < c;
            e++
          )
            e in d && b.call(void 0, d[e], e, a)
        }
  function nb(a, b) {
    for (
      var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1;
      0 <= d;
      --d
    )
      d in c && b.call(void 0, c[d], d, a)
  }
  var ob = Array.prototype.filter
      ? function (a, b) {
          x(null != a.length)
          return Array.prototype.filter.call(a, b, void 0)
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = [],
              e = 0,
              f = 'string' === typeof a ? a.split('') : a,
              g = 0;
            g < c;
            g++
          )
            if (g in f) {
              var h = f[g]
              b.call(void 0, h, g, a) && (d[e++] = h)
            }
          return d
        },
    pb = Array.prototype.map
      ? function (a, b) {
          x(null != a.length)
          return Array.prototype.map.call(a, b, void 0)
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = Array(c),
              e = 'string' === typeof a ? a.split('') : a,
              f = 0;
            f < c;
            f++
          )
            f in e && (d[f] = b.call(void 0, e[f], f, a))
          return d
        },
    qb = Array.prototype.some
      ? function (a, b) {
          x(null != a.length)
          return Array.prototype.some.call(a, b, void 0)
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = 'string' === typeof a ? a.split('') : a,
              e = 0;
            e < c;
            e++
          )
            if (e in d && b.call(void 0, d[e], e, a)) return !0
          return !1
        }
  function rb(a, b) {
    return 0 <= mb(a, b)
  }
  function sb(a, b) {
    b = mb(a, b)
    var c
    ;(c = 0 <= b) && tb(a, b)
    return c
  }
  function tb(a, b) {
    x(null != a.length)
    return 1 == Array.prototype.splice.call(a, b, 1).length
  }
  function ub(a, b) {
    var c = 0
    nb(a, function (d, e) {
      b.call(void 0, d, e, a) && tb(a, e) && c++
    })
  }
  function vb(a) {
    var b = a.length
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]
      return c
    }
    return []
  }
  var wb = function (a) {
    wb[' '](a)
    return a
  }
  wb[' '] = function () {}
  var xb = jb() ? !1 : z('Opera'),
    yb = kb(),
    zb = z('Edge'),
    Ab = zb || yb,
    Bb =
      z('Gecko') &&
      !(y(fb().toLowerCase(), 'webkit') && !z('Edge')) &&
      !(z('Trident') || z('MSIE')) &&
      !z('Edge'),
    Cb = y(fb().toLowerCase(), 'webkit') && !z('Edge'),
    Db = $a && gb && gb.platform ? 'macOS' === gb.platform : z('Macintosh'),
    Eb = function () {
      var a = q.document
      return a ? a.documentMode : void 0
    },
    Fb
  a: {
    var Gb = '',
      Hb = (function () {
        var a = fb()
        if (Bb) return /rv:([^\);]+)(\)|;)/.exec(a)
        if (zb) return /Edge\/([\d\.]+)/.exec(a)
        if (yb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        if (Cb) return /WebKit\/(\S+)/.exec(a)
        if (xb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      })()
    Hb && (Gb = Hb ? Hb[1] : '')
    if (yb) {
      var Ib = Eb()
      if (null != Ib && Ib > parseFloat(Gb)) {
        Fb = String(Ib)
        break a
      }
    }
    Fb = Gb
  }
  var Jb = Fb,
    Lb
  if (q.document && yb) {
    var Mb = Eb()
    Lb = Mb ? Mb : parseInt(Jb, 10) || void 0
  } else Lb = void 0
  var Nb = Lb
  !z('Android') || lb()
  lb()
  z('Safari') &&
    (lb() ||
      (jb() ? 0 : z('Coast')) ||
      (jb() ? 0 : z('Opera')) ||
      (jb() ? 0 : z('Edge')) ||
      (jb() ? ib('Microsoft Edge') : z('Edg/')) ||
      (jb() && ib('Opera')))
  var Ob = null,
    Qb = function (a) {
      var b = []
      Pb(a, function (c) {
        b.push(c)
      })
      return b
    },
    Pb = function (a, b) {
      function c(l) {
        for (; d < a.length; ) {
          var m = a.charAt(d++),
            n = Ob[m]
          if (null != n) return n
          if (!/^[\s\xa0]*$/.test(m))
            throw Error('Unknown base64 encoding at char: ' + m)
        }
        return l
      }
      Rb()
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64)
        if (64 === h && -1 === e) break
        b((e << 2) | (f >> 4))
        64 != g &&
          (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h))
      }
    },
    Rb = function () {
      if (!Ob) {
        Ob = {}
        for (
          var a =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                ''
              ),
            b = ['+/=', '+/', '-_=', '-_.', '-_'],
            c = 0;
          5 > c;
          c++
        )
          for (var d = a.concat(b[c].split('')), e = 0; e < d.length; e++) {
            var f = d[e],
              g = Ob[f]
            void 0 === g ? (Ob[f] = e) : x(g === e)
          }
      }
    }
  x(!0)
  var Sb
  Sb =
    'function' === typeof Symbol && 'symbol' === typeof Symbol()
      ? Symbol('INTERNAL_ARRAY_STATE')
      : void 0
  x(
    13 ===
      Math.round(
        Math.log2(
          Math.max.apply(
            Math,
            ka(
              Object.values({
                xm: 1,
                vm: 2,
                um: 4,
                Am: 8,
                zm: 16,
                ym: 32,
                jm: 64,
                Im: 128,
                sm: 256,
                rm: 512,
                wm: 1024,
                nm: 2048,
                Gm: 4096,
                om: 8192,
              })
            )
          )
        )
      )
  )
  var Tb = Object.getOwnPropertyDescriptor(Array.prototype, 'Yk')
  Object.defineProperties(Array.prototype, {
    Yk: {
      get: function () {
        function a(e, f) {
          e & b && c.push(f)
        }
        var b = Ub(this),
          c = []
        a(1, 'IS_REPEATED_FIELD')
        a(2, 'IS_IMMUTABLE_ARRAY')
        a(4, 'IS_API_FORMATTED')
        a(4096, 'STRING_FORMATTED')
        a(8192, 'GBIGINT_FORMATTED')
        a(8, 'ONLY_MUTABLE_VALUES')
        a(32, 'MUTABLE_REFERENCES_ARE_OWNED')
        a(64, 'CONSTRUCTED')
        a(128, 'TRANSFERRED')
        a(256, 'HAS_SPARSE_OBJECT')
        a(512, 'HAS_MESSAGE_ID')
        a(2048, 'FROZEN_ARRAY')
        var d = Vb(b)
        536870912 !== d && c.push('pivot: ' + d)
        d = c.join(',')
        return Tb ? Tb.get.call(this) + '|' + d : d
      },
      configurable: !0,
      enumerable: !1,
    },
  })
  var Ub = Sb
    ? function (a) {
        Oa(a, 'state is only maintained on arrays.')
        return a[Sb] | 0
      }
    : function (a) {
        Oa(a, 'state is only maintained on arrays.')
        return a.Ym | 0
      }
  function Vb(a) {
    a = (a >> 14) & 1023
    return 0 === a ? 536870912 : a
  }
  var Wb =
    'undefined' != typeof Symbol && 'undefined' != typeof Symbol.hasInstance
  Object.freeze(new (function () {})())
  Object.freeze(new (function () {})())
  var Xb = function () {
    throw Error('please construct maps as mutable then call toImmutable')
  }
  if (Wb) {
    var Yb = function () {
        throw Error(
          'Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information'
        )
      },
      Zb = {}
    Object.defineProperties(
      Xb,
      ((Zb[Symbol.hasInstance] = {
        value: Yb,
        configurable: !1,
        writable: !1,
        enumerable: !1,
      }),
      Zb)
    )
    x(
      Xb[Symbol.hasInstance] === Yb,
      'defineProperties did not work: was it monkey-patched?'
    )
  }
  if ('undefined' !== typeof Proxy) {
    var ac = $b
    new Proxy(
      {},
      {
        getPrototypeOf: ac,
        setPrototypeOf: ac,
        isExtensible: ac,
        preventExtensions: ac,
        getOwnPropertyDescriptor: ac,
        defineProperty: ac,
        has: ac,
        get: ac,
        set: ac,
        deleteProperty: ac,
        apply: ac,
        construct: ac,
      }
    )
  }
  function $b() {
    throw Error(
      'this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array'
    )
    throw Error()
  }
  function bc() {}
  ;(function () {
    var a = q.jspbGetTypeName
    q.jspbGetTypeName = a
      ? function (b) {
          return a(b) || void 0
        }
      : bc
  })() /*
 SPDX-License-Identifier: Apache-2.0
*/
  ;(function () {}).prototype = Object.create(null)
  var cc = function (a, b) {
    if (
      !t(a) ||
      !t(a) ||
      !t(a) ||
      1 !== a.nodeType ||
      (a.namespaceURI && 'http://www.w3.org/1999/xhtml' !== a.namespaceURI) ||
      a.tagName.toUpperCase() !== b.toString()
    ) {
      b = b.toString() + '; got: '
      if (t(a))
        try {
          var c =
            a.constructor.displayName ||
            a.constructor.name ||
            Object.prototype.toString.call(a)
        } catch (d) {
          c = '<object could not be stringified>'
        }
      else c = void 0 === a ? 'undefined' : null === a ? 'null' : typeof a
      Ka('Argument is not an HTML Element with tag name ' + (b + c))
    }
  }
  var dc = function () {},
    ec = function (a) {
      return 'function' === typeof a
    }
  function fc(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }
  function gc(a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0
    return !1
  }
  function hc(a) {
    for (var b in a) return !1
    return !0
  }
  function ic(a) {
    var b = {},
      c
    for (c in a) b[c] = a[c]
    return b
  }
  var jc =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    )
  function kc(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e]
      for (c in d) a[c] = d[c]
      for (var f = 0; f < jc.length; f++)
        (c = jc[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
  var lc,
    mc = function () {
      if (void 0 === lc) {
        var a = null,
          b = q.trustedTypes
        if (b && b.createPolicy)
          try {
            a = b.createPolicy('goog#html', {
              createHTML: Ea,
              createScript: Ea,
              createScriptURL: Ea,
            })
          } catch (c) {
            q.console && q.console.error(c.message)
          }
        lc = a
      }
      return lc
    }
  var pc = function (a, b) {
    this.Aj = (a === nc && b) || ''
    this.Sj = oc
  }
  pc.prototype.toString = function () {
    return this.Aj
  }
  var qc = function (a) {
      if (a instanceof pc && a.constructor === pc && a.Sj === oc) return a.Aj
      Ka("expected object of type Const, got '" + a + "'")
      return 'type_error:Const'
    },
    oc = {},
    nc = {}
  var sc = function (a, b) {
    if (b !== rc)
      throw Error('TrustedResourceUrl is not meant to be built directly')
    this.gj = a
  }
  sc.prototype.toString = function () {
    return this.gj + ''
  }
  var tc = function (a) {
      if (a instanceof sc && a.constructor === sc) return a.gj
      Ka(
        "expected object of type TrustedResourceUrl, got '%s' of type %s",
        a,
        ya(a)
      )
      return 'type_error:TrustedResourceUrl'
    },
    rc = {},
    uc = function (a) {
      var b = mc()
      a = b ? b.createScriptURL(a) : a
      return new sc(a, rc)
    }
  var wc = function (a, b) {
    if (b !== vc) throw Error('SafeUrl is not meant to be built directly')
    this.fj = a
  }
  wc.prototype.toString = function () {
    return this.fj.toString()
  }
  var xc = function (a) {
      if (a instanceof wc && a.constructor === wc) return a.fj
      Ka("expected object of type SafeUrl, got '" + a + "' of type " + ya(a))
      return 'type_error:SafeUrl'
    },
    yc
  try {
    new URL('s://g'), (yc = !0)
  } catch (a) {
    yc = !1
  }
  var zc = yc,
    Ac = function (a) {
      if (a instanceof wc) return a
      a = String(a)
      a: {
        var b = a
        if (zc) {
          try {
            var c = new URL(b)
          } catch (d) {
            b = 'https:'
            break a
          }
          b = c.protocol
        } else
          b: {
            c = document.createElement('a')
            try {
              c.href = b
            } catch (d) {
              b = void 0
              break b
            }
            b = c.protocol
            b = ':' === b || '' === b ? 'https:' : b
          }
      }
      x('javascript:' !== b, '%s is a javascript: URL', a) ||
        (a = 'about:invalid#zClosurez')
      return new wc(a, vc)
    },
    vc = {},
    Bc = new wc('about:invalid#zClosurez', vc)
  new wc('about:blank', vc)
  var Cc = {},
    Dc = function () {
      if (Cc !== Cc) throw Error('SafeStyle is not meant to be built directly')
      this.ul = ''
    }
  Dc.prototype.toString = function () {
    return this.ul.toString()
  }
  new Dc()
  var Ec = {},
    Fc = function (a, b) {
      if (b !== Ec)
        throw Error('SafeStyleSheet is not meant to be built directly')
      this.ej = a
    }
  Fc.prototype.toString = function () {
    return this.ej.toString()
  }
  var Hc = function (a) {
      a = qc(a)
      if (0 === a.length) return Gc
      x(!y(a, '<'), "Forbidden '<' character in style sheet string: " + a)
      return new Fc(a, Ec)
    },
    Gc = new Fc('', Ec)
  var Ic = {},
    Jc = function (a, b) {
      if (b !== Ic) throw Error('SafeHtml is not meant to be built directly')
      this.dj = a
    }
  Jc.prototype.toString = function () {
    return this.dj.toString()
  }
  var Kc = function (a) {
      if (a instanceof Jc && a.constructor === Jc) return a.dj
      Ka("expected object of type SafeHtml, got '" + a + "' of type " + ya(a))
      return 'type_error:SafeHtml'
    },
    Mc = function (a) {
      return a instanceof Jc ? a : Lc(Za(String(a)))
    },
    Lc = function (a) {
      var b = mc()
      a = b ? b.createHTML(a) : a
      return new Jc(a, Ic)
    },
    Nc = new Jc((q.trustedTypes && q.trustedTypes.emptyHTML) || '', Ic) /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Oc = {}
  function Pc(a) {
    if ('string' !== typeof a || '' === a.trim())
      throw Error(
        'Calls to uncheckedconversion functions must go through security review. A justification must be provided to capture what security assumptions are being made. See go/unchecked-conversions'
      )
  }
  var Qc = (function (a) {
      var b = !1,
        c
      return function () {
        b || ((c = a()), (b = !0))
        return c
      }
    })(function () {
      if ('undefined' === typeof document) return !1
      var a = document.createElement('div'),
        b = document.createElement('div')
      b.appendChild(document.createElement('div'))
      a.appendChild(b)
      if (!a.firstChild) return !1
      b = a.firstChild.firstChild
      a.innerHTML = Kc(Nc)
      return !b.parentElement
    }),
    Sc = function (a, b) {
      cc(a, 'SCRIPT')
      var c = Rc(
        'script[nonce]',
        a.ownerDocument && a.ownerDocument.defaultView
      )
      c && a.setAttribute('nonce', c)
      a.src = tc(b)
    },
    Tc = function (a, b, c, d) {
      a = a instanceof wc ? a : Ac(a)
      b = b || q
      c = c instanceof pc ? qc(c) : c || ''
      return void 0 !== d ? b.open(xc(a), c, d) : b.open(xc(a), c)
    },
    Uc = /^[\w+/_-]+[=]{0,2}$/,
    Rc = function (a, b) {
      b = (b || q).document
      return b.querySelector
        ? (a = b.querySelector(a)) &&
          (a = a.nonce || a.getAttribute('nonce')) &&
          Uc.test(a)
          ? a
          : ''
        : ''
    }
  var Vc = RegExp(
    '^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)',
    'i'
  )
  var Wc = function (a, b) {
    for (
      var c = a.split('%s'),
        d = '',
        e = Array.prototype.slice.call(arguments, 1);
      e.length && 1 < c.length;

    )
      d += c.shift() + e.shift()
    return d + c.join('%s')
  }
  var Xc = function (a) {
      if (a.Db && 'function' == typeof a.Db) return a.Db()
      if (
        ('undefined' !== typeof Map && a instanceof Map) ||
        ('undefined' !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values())
      if ('string' === typeof a) return a.split('')
      if (za(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d])
        return b
      }
      b = []
      c = 0
      for (d in a) b[c++] = a[d]
      return b
    },
    Yc = function (a) {
      if (a.Je && 'function' == typeof a.Je) return a.Je()
      if (!a.Db || 'function' != typeof a.Db) {
        if ('undefined' !== typeof Map && a instanceof Map)
          return Array.from(a.keys())
        if (!('undefined' !== typeof Set && a instanceof Set)) {
          if (za(a) || 'string' === typeof a) {
            var b = []
            a = a.length
            for (var c = 0; c < a; c++) b.push(c)
            return b
          }
          b = []
          c = 0
          for (var d in a) b[c++] = d
          return b
        }
      }
    },
    Zc = function (a, b, c) {
      if (a.forEach && 'function' == typeof a.forEach) a.forEach(b, c)
      else if (za(a) || 'string' === typeof a)
        Array.prototype.forEach.call(a, b, c)
      else
        for (var d = Yc(a), e = Xc(a), f = e.length, g = 0; g < f; g++)
          b.call(c, e[g], d && d[g], a)
    }
  var $c = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
    ),
    ad = function (a, b) {
      if (a) {
        a = a.split('&')
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf('='),
            e = null
          if (0 <= d) {
            var f = a[c].substring(0, d)
            e = a[c].substring(d + 1)
          } else f = a[c]
          b(f, e ? decodeURIComponent(e.replace(/\+/g, ' ')) : '')
        }
      }
    },
    bd = function (a) {
      var b = a.indexOf('#')
      0 > b && (b = a.length)
      var c = a.indexOf('?')
      if (0 > c || c > b) {
        c = b
        var d = ''
      } else d = a.substring(c + 1, b)
      return [a.slice(0, c), d, a.slice(b)]
    },
    cd = function (a, b) {
      return b ? (a ? a + '&' + b : b) : a
    },
    dd = function (a, b, c) {
      Ma(a)
      if (Array.isArray(b)) {
        Oa(b)
        for (var d = 0; d < b.length; d++) dd(a, String(b[d]), c)
      } else
        null != b &&
          c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))))
    },
    ed = function (a) {
      var b = [],
        c
      for (c in a) dd(c, a[c], b)
      return b.join('&')
    },
    fd = /#|$/,
    gd = function (a, b) {
      a = bd(a)
      var c = a[1],
        d = []
      c &&
        c.split('&').forEach(function (e) {
          var f = e.indexOf('=')
          b.hasOwnProperty(0 <= f ? e.slice(0, f) : e) || d.push(e)
        })
      a[1] = cd(d.join('&'), ed(b))
      return a[0] + (a[1] ? '?' + a[1] : '') + a[2]
    }
  var hd = function (a) {
    this.ga = this.tc = this.ma = ''
    this.gb = null
    this.Hc = this.tb = ''
    this.Na = this.Vk = !1
    if (a instanceof hd) {
      this.Na = a.Na
      id(this, a.ma)
      var b = a.tc
      jd(this)
      this.tc = b
      kd(this, a.ga)
      ld(this, a.gb)
      md(this, a.tb)
      nd(this, a.Ia.clone())
      od(this, a.Hc)
    } else
      a && (b = String(a).match($c))
        ? ((this.Na = !1),
          id(this, b[1] || '', !0),
          (a = b[2] || ''),
          jd(this),
          (this.tc = pd(a)),
          kd(this, b[3] || '', !0),
          ld(this, b[4]),
          md(this, b[5] || '', !0),
          nd(this, b[6] || '', !0),
          od(this, b[7] || '', !0))
        : ((this.Na = !1), (this.Ia = new qd(null, this.Na)))
  }
  hd.prototype.toString = function () {
    var a = [],
      b = this.ma
    b && a.push(rd(b, sd, !0), ':')
    var c = this.ga
    if (c || 'file' == b)
      a.push('//'),
        (b = this.tc) && a.push(rd(b, sd, !0), '@'),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (c = this.gb),
        null != c && a.push(':', String(c))
    if ((c = this.tb))
      this.ga && '/' != c.charAt(0) && a.push('/'),
        a.push(rd(c, '/' == c.charAt(0) ? td : ud, !0))
    ;(c = this.Ia.toString()) && a.push('?', c)
    ;(c = this.Hc) && a.push('#', rd(c, vd))
    return a.join('')
  }
  hd.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.ma
    c ? id(b, a.ma) : (c = !!a.tc)
    if (c) {
      var d = a.tc
      jd(b)
      b.tc = d
    } else c = !!a.ga
    c ? kd(b, a.ga) : (c = null != a.gb)
    d = a.tb
    if (c) ld(b, a.gb)
    else if ((c = !!a.tb)) {
      if ('/' != d.charAt(0))
        if (this.ga && !this.tb) d = '/' + d
        else {
          var e = b.tb.lastIndexOf('/')
          ;-1 != e && (d = b.tb.slice(0, e + 1) + d)
        }
      e = d
      if ('..' == e || '.' == e) d = ''
      else if (y(e, './') || y(e, '/.')) {
        d = 0 == e.lastIndexOf('/', 0)
        e = e.split('/')
        for (var f = [], g = 0; g < e.length; ) {
          var h = e[g++]
          '.' == h
            ? d && g == e.length && f.push('')
            : '..' == h
              ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(),
                d && g == e.length && f.push(''))
              : (f.push(h), (d = !0))
        }
        d = f.join('/')
      } else d = e
    }
    c ? md(b, d) : (c = '' !== a.Ia.toString())
    c ? nd(b, a.Ia.clone()) : (c = !!a.Hc)
    c && od(b, a.Hc)
    return b
  }
  hd.prototype.clone = function () {
    return new hd(this)
  }
  var id = function (a, b, c) {
      jd(a)
      a.ma = c ? pd(b, !0) : b
      a.ma && (a.ma = a.ma.replace(/:$/, ''))
    },
    kd = function (a, b, c) {
      jd(a)
      a.ga = c ? pd(b, !0) : b
    },
    ld = function (a, b) {
      jd(a)
      if (b) {
        b = Number(b)
        if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b)
        a.gb = b
      } else a.gb = null
    },
    md = function (a, b, c) {
      jd(a)
      a.tb = c ? pd(b, !0) : b
      return a
    },
    nd = function (a, b, c) {
      jd(a)
      b instanceof qd
        ? ((a.Ia = b), a.Ia.mh(a.Na))
        : (c || (b = rd(b, wd)), (a.Ia = new qd(b, a.Na)))
      return a
    }
  hd.prototype.getQuery = function () {
    return this.Ia.toString()
  }
  var B = function (a, b, c) {
      jd(a)
      a.Ia.set(b, c)
    },
    D = function (a, b) {
      return a.Ia.get(b)
    },
    od = function (a, b, c) {
      jd(a)
      a.Hc = c ? pd(b) : b
      return a
    }
  hd.prototype.removeParameter = function (a) {
    jd(this)
    this.Ia.remove(a)
    return this
  }
  var jd = function (a) {
    if (a.Vk) throw Error('Tried to modify a read-only Uri')
  }
  hd.prototype.mh = function (a) {
    this.Na = a
    this.Ia && this.Ia.mh(a)
  }
  var E = function (a) {
      return a instanceof hd ? a.clone() : new hd(a)
    },
    xd = function (a, b, c, d, e, f) {
      var g = new hd(null)
      a && id(g, a)
      b && kd(g, b)
      c && ld(g, c)
      d && md(g, d)
      e && nd(g, e)
      f && od(g, f)
      return g
    },
    pd = function (a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, '%2525'))
          : decodeURIComponent(a)
        : ''
    },
    rd = function (a, b, c) {
      return 'string' === typeof a
        ? ((a = encodeURI(a).replace(b, yd)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
          a)
        : null
    },
    yd = function (a) {
      a = a.charCodeAt(0)
      return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16)
    },
    sd = /[#\/\?@]/g,
    ud = /[#\?:]/g,
    td = /[#\?]/g,
    wd = /[#\?@]/g,
    vd = /#/g,
    qd = function (a, b) {
      this.na = this.R = null
      this.Fa = a || null
      this.Na = !!b
    },
    zd = function (a) {
      a.R ||
        ((a.R = new Map()),
        (a.na = 0),
        a.Fa &&
          ad(a.Fa, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, ' ')), c)
          }))
    },
    Bd = function (a) {
      var b = Yc(a)
      if ('undefined' == typeof b) throw Error('Keys are undefined')
      var c = new qd(null)
      a = Xc(a)
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d]
        Array.isArray(f) ? Ad(c, e, f) : c.add(e, f)
      }
      return c
    }
  k = qd.prototype
  k.add = function (a, b) {
    zd(this)
    this.Fa = null
    a = this.Ga(a)
    var c = this.R.get(a)
    c || this.R.set(a, (c = []))
    c.push(b)
    this.na = La(this.na) + 1
    return this
  }
  k.remove = function (a) {
    zd(this)
    a = this.Ga(a)
    return this.R.has(a)
      ? ((this.Fa = null),
        (this.na = La(this.na) - this.R.get(a).length),
        this.R.delete(a))
      : !1
  }
  k.clear = function () {
    this.R = this.Fa = null
    this.na = 0
  }
  k.Gi = function () {
    zd(this)
    return 0 == this.na
  }
  k.pd = function (a) {
    zd(this)
    a = this.Ga(a)
    return this.R.has(a)
  }
  k.forEach = function (a, b) {
    zd(this)
    this.R.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  }
  k.Je = function () {
    zd(this)
    for (
      var a = Array.from(this.R.values()),
        b = Array.from(this.R.keys()),
        c = [],
        d = 0;
      d < b.length;
      d++
    )
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d])
    return c
  }
  k.Db = function (a) {
    zd(this)
    var b = []
    if ('string' === typeof a)
      this.pd(a) && (b = b.concat(this.R.get(this.Ga(a))))
    else {
      a = Array.from(this.R.values())
      for (var c = 0; c < a.length; c++) b = b.concat(a[c])
    }
    return b
  }
  k.set = function (a, b) {
    zd(this)
    this.Fa = null
    a = this.Ga(a)
    this.pd(a) && (this.na = La(this.na) - this.R.get(a).length)
    this.R.set(a, [b])
    this.na = La(this.na) + 1
    return this
  }
  k.get = function (a, b) {
    if (!a) return b
    a = this.Db(a)
    return 0 < a.length ? String(a[0]) : b
  }
  var Ad = function (a, b, c) {
    a.remove(b)
    0 < c.length &&
      ((a.Fa = null), a.R.set(a.Ga(b), vb(c)), (a.na = La(a.na) + c.length))
  }
  k = qd.prototype
  k.toString = function () {
    if (this.Fa) return this.Fa
    if (!this.R) return ''
    for (var a = [], b = Array.from(this.R.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d))
      d = this.Db(d)
      for (var f = 0; f < d.length; f++) {
        var g = e
        '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])))
        a.push(g)
      }
    }
    return (this.Fa = a.join('&'))
  }
  k.clone = function () {
    var a = new qd()
    a.Fa = this.Fa
    this.R && ((a.R = new Map(this.R)), (a.na = this.na))
    return a
  }
  k.Ga = function (a) {
    a = String(a)
    this.Na && (a = a.toLowerCase())
    return a
  }
  k.mh = function (a) {
    a &&
      !this.Na &&
      (zd(this),
      (this.Fa = null),
      this.R.forEach(function (b, c) {
        var d = c.toLowerCase()
        c != d && (this.remove(c), Ad(this, d, b))
      }, this))
    this.Na = a
  }
  k.extend = function (a) {
    for (var b = 0; b < arguments.length; b++)
      Zc(
        arguments[b],
        function (c, d) {
          this.add(d, c)
        },
        this
      )
  }
  var Cd =
    'src srcdoc codebase data href rel action formaction sandbox cite poster icon'.split(
      ' '
    )
  var Dd = function () {},
    Ed = function (a, b) {
      if (b !== Oc) throw Error('Bad secret')
      this.vl = a
    }
  p(Ed, Dd)
  Ed.prototype.toString = function () {
    return this.vl
  }
  var Fd = ha(['']),
    Gd = ia(['\x00'], ['\\0']),
    Hd = ia(['\n'], ['\\n']),
    Id = ia(['\x00'], ['\\u0000']),
    Jd = ha(['']),
    Kd = ia(['\x00'], ['\\0']),
    Ld = ia(['\n'], ['\\n']),
    Md = ia(['\x00'], ['\\u0000'])
  function Nd(a, b) {
    if (
      !Array.isArray(a) ||
      !Array.isArray(a.raw) ||
      a.length !== a.raw.length ||
      (!Od && a === a.raw) ||
      !((Od && !Pd) || Qd(a)) ||
      b + 1 !== a.length
    )
      throw new TypeError(
        '\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################'
      )
  }
  function Qd(a) {
    return Object.isFrozen(a) && Object.isFrozen(a.raw)
  }
  function Rd(a) {
    return -1 === a.toString().indexOf('`')
  }
  var Od =
      Rd(function (a) {
        return a(Fd)
      }) ||
      Rd(function (a) {
        return a(Gd)
      }) ||
      Rd(function (a) {
        return a(Hd)
      }) ||
      Rd(function (a) {
        return a(Id)
      }),
    Pd = Qd(Jd) && Qd(Kd) && Qd(Ld) && Qd(Md)
  var Sd = function (a) {
    this.Xk = a
  }
  function Td(a) {
    return new Sd(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ':'
    })
  }
  var Ud = [
    Td('data'),
    Td('http'),
    Td('https'),
    Td('mailto'),
    Td('ftp'),
    new Sd(function (a) {
      return /^[^:]*([/?#]|$)/.test(a)
    }),
  ]
  function Vd(a) {
    var b = void 0 === b ? Ud : b
    a: if (((b = void 0 === b ? Ud : b), a instanceof wc)) b = a
    else {
      for (var c = 0; c < b.length; ++c) {
        var d = b[c]
        if (d instanceof Sd && d.Xk(a)) {
          b = new wc(a, vc)
          break a
        }
      }
      b = void 0
    }
    void 0 === b && Wd(a.toString())
    return b || Bc
  }
  var Xd = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i,
    Yd = [],
    Wd = function () {}
  Zd(function (a) {
    console.warn("A URL with content '" + a + "' was sanitized away.")
  })
  function Zd(a) {
    ;-1 === Yd.indexOf(a) && Yd.push(a)
    Wd = function (b) {
      Yd.forEach(function (c) {
        c(b)
      })
    }
  }
  function $d(a) {
    var b = sa.apply(1, arguments)
    Nd(a, b.length)
    if (0 === b.length) return uc(a[0])
    var c = a[0].toLowerCase()
    if (/^data:/.test(c))
      throw Error(
        'Data URLs cannot have expressions in the template literal input.'
      )
    if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
      var d = c.indexOf('//') + 2
      var e = c.indexOf('/', d)
      if (e <= d)
        throw Error(
          "Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'."
        )
      d = c.substring(d, e)
      if (!/^[0-9a-z.:-]+$/i.test(d))
        throw Error('The origin contains unsupported characters.')
      if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error('Invalid port number.')
      if (!/(^|\.)[a-z][^.]*$/i.test(d))
        throw Error('The top-level domain must start with a letter.')
      d = !0
    } else d = !1
    if (!d)
      if (/^\//.test(c))
        if ('/' === c || (1 < c.length && '/' !== c[1] && '\\' !== c[1])) d = !0
        else throw Error('The path start in the url is invalid.')
      else d = !1
    if (!(d = d || RegExp('^[^:\\s\\\\/]+/').test(c)))
      if (/^about:blank/.test(c)) {
        if ('about:blank' !== c && !/^about:blank#/.test(c))
          throw Error('The about url is invalid.')
        d = !0
      } else d = !1
    if (!d)
      throw Error(
        'Trying to interpolate expressions in an unsupported url format.'
      )
    c = a[0]
    for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1]
    return uc(c)
  }
  var ae = { an: !0 },
    be = function () {
      throw Error('Do not instantiate directly')
    }
  be.prototype.Qh = null
  be.prototype.toString = function () {
    return this.content
  }
  be.prototype.Cj = function () {
    if (this.Rh !== ae) throw Error('Sanitized content was not of kind HTML.')
    var a = this.toString()
    Pc(
      'Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.'
    )
    return Lc(a)
  }
  var ce = function () {
    be.call(this)
  }
  w(ce, be)
  ce.prototype.Rh = ae
  var de = function (a) {
    var b = null != a && a.Rh === ae
    b && x(a.constructor === ce)
    return b
  }
  var ee =
    Object.freeze ||
    function (a) {
      return a
    }
  var fe = function (a) {
      if (null != a)
        switch (a.Qh) {
          case 1:
            return 1
          case -1:
            return -1
          case 0:
            return 0
        }
      return null
    },
    ie = function (a) {
      return de(a)
        ? a
        : a instanceof Jc
          ? F(Kc(a).toString())
          : F(String(String(a)).replace(ge, he), fe(a))
    },
    F = (function (a) {
      function b(c) {
        this.content = c
      }
      b.prototype = a.prototype
      return function (c, d) {
        c = new b(String(c))
        void 0 !== d && (c.Qh = d)
        return c
      }
    })(ce),
    G = {},
    je = function (a) {
      return a instanceof be ? !!a.content : !!a
    },
    ne = function (a) {
      if (de(a)) {
        var b = String
        a = String(a.content).replace(ke, '').replace(le, '&lt;')
        b = b(a).replace(me, he)
      } else b = String(a).replace(ge, he)
      return b
    },
    H = function (a, b, c, d) {
      a ||
        ((a =
          c instanceof Function
            ? c.displayName || c.name || 'unknown type name'
            : c instanceof Object
              ? c.constructor.displayName ||
                c.constructor.name ||
                Object.prototype.toString.call(c)
              : null === c
                ? 'null'
                : typeof c),
        Ka('expected @param ' + b + ' of type ' + d + ', but got ' + a + '.'),
        Ka('parameter type error. Enable DEBUG to see details.'))
      return c
    },
    oe = {},
    pe = function () {
      x(
        oe === oe,
        'found an incorrect call marker, was an internal function called from the top level?'
      )
    },
    qe = {
      '\x00': '&#0;',
      '\t': '&#9;',
      '\n': '&#10;',
      '\v': '&#11;',
      '\f': '&#12;',
      '\r': '&#13;',
      ' ': '&#32;',
      '"': '&quot;',
      '&': '&amp;',
      "'": '&#39;',
      '-': '&#45;',
      '/': '&#47;',
      '<': '&lt;',
      '=': '&#61;',
      '>': '&gt;',
      '`': '&#96;',
      '\u0085': '&#133;',
      '\u00a0': '&#160;',
      '\u2028': '&#8232;',
      '\u2029': '&#8233;',
    },
    he = function (a) {
      return qe[a]
    },
    ge = /[\x00\x22\x26\x27\x3c\x3e]/g,
    me = /[\x00\x22\x27\x3c\x3e]/g,
    ke = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]+|"[^"]*"|'[^']*')*>/g,
    le = /</g
  var re = function (a, b) {
    this.name = a
    this.value = b
  }
  re.prototype.toString = function () {
    return this.name
  }
  var se = new re('OFF', Infinity),
    te = new re('SEVERE', 1e3),
    ue = new re('WARNING', 900),
    ve = new re('CONFIG', 700),
    we = new re('FINE', 500),
    xe = function () {
      this.xe = 0
      this.clear()
    },
    ye
  xe.prototype.clear = function () {
    this.Hh = Array(this.xe)
    this.Uh = -1
    this.Hi = !1
  }
  var ze = function (a, b, c) {
    this.reset(a || se, b, c, void 0, void 0)
  }
  ze.prototype.reset = function () {}
  var Ae = function (a, b) {
      this.level = null
      this.Hk = []
      this.parent = (void 0 === b ? null : b) || null
      this.children = []
      this.Oi = {
        getName: function () {
          return a
        },
      }
    },
    Be = function (a) {
      if (a.level) return a.level
      if (a.parent) return Be(a.parent)
      Ka('Root logger has no level set.')
      return se
    },
    Ce = function (a, b) {
      for (; a; )
        a.Hk.forEach(function (c) {
          c(b)
        }),
          (a = a.parent)
    },
    De = function () {
      this.entries = {}
      var a = new Ae('')
      a.level = ve
      this.entries[''] = a
    },
    Ee,
    Fe = function (a, b) {
      var c = a.entries[b]
      if (c) return c
      c = Fe(a, b.slice(0, Math.max(b.lastIndexOf('.'), 0)))
      var d = new Ae(b, c)
      a.entries[b] = d
      c.children.push(d)
      return d
    },
    Ge = function () {
      Ee || (Ee = new De())
      return Ee
    },
    He = function (a, b, c) {
      var d
      if ((d = a))
        if ((d = a && b)) {
          d = b.value
          var e = a ? Be(Fe(Ge(), a.getName())) : se
          d = d >= e.value
        }
      if (d) {
        b = b || se
        d = Fe(Ge(), a.getName())
        'function' === typeof c && (c = c())
        ye || (ye = new xe())
        e = ye
        a = a.getName()
        if (0 < e.xe) {
          var f = (e.Uh + 1) % e.xe
          e.Uh = f
          e.Hi
            ? ((e = e.Hh[f]), e.reset(b, c, a), (a = e))
            : ((e.Hi = f == e.xe - 1), (a = e.Hh[f] = new ze(b, c, a)))
        } else a = new ze(b, c, a)
        Ce(d, a)
      }
    },
    Ie = function (a, b) {
      a && He(a, te, b)
    },
    Je = function (a, b) {
      a && He(a, we, b)
    }
  var Ke = ha(['data-soyloggingfunction-'])
  ;(function (a) {
    Nd(a, 0)
    var b = a[0].toLowerCase()
    if (0 === b.indexOf('on') || 0 === 'on'.indexOf(b))
      throw Error(
        "Prefix '" +
          a[0] +
          "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers."
      )
    Cd.forEach(function (c) {
      if (0 === c.indexOf(b))
        throw Error(
          "Prefix '" +
            a[0] +
            "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" +
            (c + "'. Please use native or safe DOM APIs to set the attribute.")
        )
    })
    return new Ed(b, Oc)
  })(Ke)
  try {
    new self.OffscreenCanvas(0, 0).getContext('2d')
  } catch (a) {}
  var Ne = function (a) {
      return a ? new Le(Me(a)) : Ga || (Ga = new Le())
    },
    Pe = function (a) {
      return Oe(document, a)
    },
    Oe = function (a, b) {
      return 'string' === typeof b ? a.getElementById(b) : b
    },
    Re = function (a, b) {
      var c = b || document
      return c.querySelectorAll && c.querySelector
        ? c.querySelectorAll('.' + a)
        : Qe(document, '*', a, b)
    },
    Se = function (a, b) {
      var c = b || document
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0]
      else {
        c = document
        var d = b || c
        a =
          d.querySelectorAll && d.querySelector && a
            ? d.querySelector(a ? '.' + a : '')
            : Qe(c, '*', a, b)[0] || null
      }
      return a || null
    },
    Qe = function (a, b, c, d) {
      a = d || a
      b = b && '*' != b ? String(b).toUpperCase() : ''
      if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? '.' + c : ''))
      if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c)
        if (b) {
          d = {}
          for (var e = 0, f = 0, g; (g = a[f]); f++)
            b == g.nodeName && (d[e++] = g)
          d.length = e
          return d
        }
        return a
      }
      a = a.getElementsByTagName(b || '*')
      if (c) {
        d = {}
        for (f = e = 0; (g = a[f]); f++)
          (b = g.className),
            'function' == typeof b.split &&
              rb(b.split(/\s+/), c) &&
              (d[e++] = g)
        d.length = e
        return d
      }
      return a
    },
    Ue = function (a, b) {
      fc(b, function (c, d) {
        'style' == d
          ? (a.style.cssText = c)
          : 'class' == d
            ? (a.className = c)
            : 'for' == d
              ? (a.htmlFor = c)
              : Te.hasOwnProperty(d)
                ? a.setAttribute(Te[d], c)
                : 0 == d.lastIndexOf('aria-', 0) ||
                    0 == d.lastIndexOf('data-', 0)
                  ? a.setAttribute(d, c)
                  : (a[d] = c)
      })
    },
    Te = {
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      colspan: 'colSpan',
      frameborder: 'frameBorder',
      height: 'height',
      maxlength: 'maxLength',
      nonce: 'nonce',
      role: 'role',
      rowspan: 'rowSpan',
      type: 'type',
      usemap: 'useMap',
      valign: 'vAlign',
      width: 'width',
    },
    We = function (a, b, c) {
      return Ve(document, arguments)
    },
    Ve = function (a, b) {
      var c = b[1],
        d = Xe(a, String(b[0]))
      c &&
        ('string' === typeof c
          ? (d.className = c)
          : Array.isArray(c)
            ? (d.className = c.join(' '))
            : Ue(d, c))
      2 < b.length && Ye(a, d, b, 2)
      return d
    },
    Ye = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h)
      }
      for (; d < c.length; d++) {
        var f = c[d]
        if (!za(f) || (t(f) && 0 < f.nodeType)) e(f)
        else {
          a: {
            if (f && 'number' == typeof f.length) {
              if (t(f)) {
                var g = 'function' == typeof f.item || 'string' == typeof f.item
                break a
              }
              if ('function' === typeof f) {
                g = 'function' == typeof f.item
                break a
              }
            }
            g = !1
          }
          A(g ? vb(f) : f, e)
        }
      }
    },
    Xe = function (a, b) {
      b = String(b)
      'application/xhtml+xml' === a.contentType && (b = b.toLowerCase())
      return a.createElement(b)
    },
    Ze = function (a, b) {
      x(
        null != a && null != b,
        'goog.dom.appendChild expects non-null arguments'
      )
      a.appendChild(b)
    },
    $e = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b)
    },
    af = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null
    },
    cf = function () {
      var a = document.body
      return void 0 !== a.lastElementChild
        ? a.lastElementChild
        : bf(a.lastChild, !1)
    },
    bf = function (a, b) {
      for (; a && 1 != a.nodeType; ) a = b ? a.nextSibling : a.previousSibling
      return a
    },
    Me = function (a) {
      x(a, 'Node cannot be null or undefined.')
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    },
    df = function (a, b) {
      x(null != a, 'goog.dom.setTextContent expects a non-null value for node')
      if ('textContent' in a) a.textContent = b
      else if (3 == a.nodeType) a.data = String(b)
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(x(a.lastChild))
        a.firstChild.data = String(b)
      } else {
        $e(a)
        var c = Me(a)
        a.appendChild(c.createTextNode(String(b)))
      }
    },
    ef = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    ff = { IMG: ' ', BR: '\n' },
    hf = function (a) {
      var b = []
      gf(a, b, !0)
      a = b.join('')
      a = a.replace(/ \xAD /g, ' ').replace(/\xAD/g, '')
      a = a.replace(/\u200B/g, '')
      a = a.replace(/ +/g, ' ')
      ' ' != a && (a = a.replace(/^\s*/, ''))
      return a
    },
    gf = function (a, b, c) {
      if (!(a.nodeName in ef))
        if (3 == a.nodeType)
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ''))
            : b.push(a.nodeValue)
        else if (a.nodeName in ff) b.push(ff[a.nodeName])
        else for (a = a.firstChild; a; ) gf(a, b, c), (a = a.nextSibling)
    },
    kf = function (a) {
      return jf(a, function (b) {
        return (
          'string' === typeof b.className &&
          rb(b.className.split(/\s+/), 'firebaseui-textfield')
        )
      })
    },
    jf = function (a, b) {
      for (var c = 0; a; ) {
        x('parentNode' != a.name)
        if (b(a)) return a
        a = a.parentNode
        c++
      }
      return null
    },
    Le = function (a) {
      this.xa = a || q.document || document
    }
  k = Le.prototype
  k.Ad = Ne
  k.Ma = function () {
    return Oe(this.xa)
  }
  k.getElementsByTagName = function (a, b) {
    return (b || this.xa).getElementsByTagName(String(a))
  }
  k.za = function (a, b) {
    return Se(a, b || this.xa)
  }
  k.qd = function (a, b, c) {
    return Ve(this.xa, arguments)
  }
  k.createElement = function (a) {
    return Xe(this.xa, a)
  }
  k.createTextNode = function (a) {
    return this.xa.createTextNode(String(a))
  }
  k.getWindow = function () {
    var a = this.xa
    return a.parentWindow || a.defaultView
  }
  k.appendChild = Ze
  k.append = function (a, b) {
    Ye(Me(a), a, arguments, 1)
  }
  k.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1
    switch (a.tagName) {
      case 'APPLET':
      case 'AREA':
      case 'BASE':
      case 'BR':
      case 'COL':
      case 'COMMAND':
      case 'EMBED':
      case 'FRAME':
      case 'HR':
      case 'IMG':
      case 'INPUT':
      case 'IFRAME':
      case 'ISINDEX':
      case 'KEYGEN':
      case 'LINK':
      case 'NOFRAMES':
      case 'NOSCRIPT':
      case 'META':
      case 'OBJECT':
      case 'PARAM':
      case 'SCRIPT':
      case 'SOURCE':
      case 'STYLE':
      case 'TRACK':
      case 'WBR':
        return !1
    }
    return !0
  }
  k.removeNode = af
  k.contains = function (a, b) {
    if (!a || !b) return !1
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b)
    if ('undefined' != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16)
    for (; b && a != b; ) b = b.parentNode
    return b == a
  } /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  function lf(a, b, c, d) {
    a = a(b || mf, c)
    d = d || Ne()
    if (a && a.zl) d = a.zl()
    else {
      d = d.createElement('DIV')
      b: if (t(a)) {
        if (a.Cj && ((b = a.Cj()), b instanceof Jc)) {
          a = b
          break b
        }
        Ka('Soy template output is unsafe for use as HTML: ' + a)
        a = Mc('zSoyz')
      } else a = Mc(String(a))
      b = a.toString()
      c = b.match(nf)
      x(
        !c,
        'This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s',
        c && c[0],
        b
      )
      b = d
      if (Qc()) for (; b.lastChild; ) b.removeChild(b.lastChild)
      b.innerHTML = Kc(a)
    }
    1 == d.childNodes.length && ((a = d.firstChild), 1 == a.nodeType && (d = a))
    return d
  }
  var nf =
      /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
    mf = {}
  Fe(Ge(), 'api_idom')
  var of = function (a, b) {
      return G['fireauth.oauthhelper.ui.soy.pendingScreen']
        ? G['fireauth.oauthhelper.ui.soy.pendingScreen'](a, b)
        : F(
            '<div id="pending-screen"><div id="progressBar" class="' +
              ne('mdl-progress') +
              ' ' +
              ne('mdl-js-progress') +
              ' ' +
              ne('mdl-progress__indeterminate') +
              ' ' +
              ne('firebase-progress-bar') +
              '"></div></div>'
          )
    },
    pf = function (a, b) {
      a = a || {}
      a = a.appName
      pe()
      G['fireauth.oauthhelper.ui.soy.continueScreen']
        ? (b = G['fireauth.oauthhelper.ui.soy.continueScreen'](
            { appName: a },
            b
          ))
        : ((a = H(
            null == a || 'string' === typeof a,
            'appName',
            a,
            'null|string|undefined'
          )),
          (b =
            '<div id="continue-screen" class="' +
            ne('mdl-card') +
            ' ' +
            ne('mdl-shadow--2dp') +
            ' ' +
            ne('firebase-container') +
            '"><button id="continue" class="' +
            ne('mdl-button') +
            ' ' +
            ne('mdl-button--raised') +
            ' ' +
            ne('mdl-button--colored') +
            '">'),
          a
            ? ((a = 'Continue to ' + ie(a)), (b += a))
            : (b += 'Continue to the app'),
          (b = F(b + '</button></div>')))
      return b
    },
    qf = function (a, b) {
      a = a.errorMessage
      pe()
      G['fireauth.oauthhelper.ui.soy.errorScreen']
        ? (b = G['fireauth.oauthhelper.ui.soy.errorScreen'](
            { errorMessage: a },
            b
          ))
        : ((b = H('string' === typeof a, 'errorMessage', a, 'string')),
          (b = F(
            '<div id="error-screen" class="' +
              ne('mdl-card') +
              ' ' +
              ne('mdl-shadow--2dp') +
              ' ' +
              ne('firebase-container') +
              '">' +
              ie(b) +
              '</div>'
          )))
      return b
    },
    rf = function (a, b) {
      if (G['fireauth.oauthhelper.ui.soy.appVerificationScreen'])
        return G['fireauth.oauthhelper.ui.soy.appVerificationScreen'](a, b)
      a =
        '<div id="app-verification-screen" class="' +
        ne('mdl-card') +
        ' ' +
        ne('mdl-shadow--2dp') +
        ' ' +
        ne('firebase-container') +
        '"><button id="verify" class="' +
        ne('mdl-button') +
        ' ' +
        ne('firebase-hidden-button') +
        '">'
      return F(
        a +
          'Verify</button><div id="status-container"><h1 class="firebase-title" id="status-container-label">Verifying you\'re not a robot...</h1><div id="app-verification-progress-bar" class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebase-middle-progress-bar"></div></div></div>'
      )
    }
  var sf = function () {
    this.xa = ('undefined' == typeof document ? null : document) || {
      cookie: '',
    }
  }
  k = sf.prototype
  k.isEnabled = function () {
    if (!q.navigator.cookieEnabled) return !1
    if (!this.Gi()) return !0
    this.set('TESTCOOKIESENABLED', '1', { Pg: 60 })
    if ('1' !== this.get('TESTCOOKIESENABLED')) return !1
    this.remove('TESTCOOKIESENABLED')
    return !0
  }
  k.set = function (a, b, c) {
    var d = !1
    if ('object' === typeof c) {
      var e = c.Zm
      d = c.Ll || !1
      var f = c.domain || void 0
      var g = c.path || void 0
      var h = c.Pg
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"')
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"')
    void 0 === h && (h = -1)
    this.jh(
      a +
        '=' +
        b +
        (f ? ';domain=' + f : '') +
        (g ? ';path=' + g : '') +
        (0 > h
          ? ''
          : 0 == h
            ? ';expires=' + new Date(1970, 1, 1).toUTCString()
            : ';expires=' + new Date(Date.now() + 1e3 * h).toUTCString()) +
        (d ? ';secure' : '') +
        (null != e ? ';samesite=' + e : '')
    )
  }
  k.get = function (a, b) {
    for (
      var c = a + '=', d = (this.zd() || '').split(';'), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Ra(d[e])
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length)
      if (f == a) return ''
    }
    return b
  }
  k.remove = function (a, b, c) {
    var d = this.pd(a)
    this.set(a, '', { Pg: 0, path: b, domain: c })
    return d
  }
  k.Je = function () {
    return tf(this).keys
  }
  k.Db = function () {
    return tf(this).values
  }
  k.Gi = function () {
    return !this.zd()
  }
  k.pd = function (a) {
    return void 0 !== this.get(a)
  }
  k.clear = function () {
    for (var a = tf(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
  }
  k.jh = function (a) {
    this.xa.cookie = a
  }
  k.zd = function () {
    return this.xa.cookie
  }
  var tf = function (a) {
      a = (a.zd() || '').split(';')
      for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
        (e = Ra(a[f])),
          (d = e.indexOf('=')),
          -1 == d
            ? (b.push(''), c.push(e))
            : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
      return { keys: b, values: c }
    },
    uf = new sf()
  var wf = /\.(firebaseapp\-staging\.com|staging\-web\.app)$/
  var xf = function () {
    var a = q.EXPERIMENTS || {}
    this.P = {}
    var b
    for (b in a) {
      var c = '' + a[b].id
      this.P[c] = a[b]
      'undefined' !== typeof this.P[c].stagingRollout &&
        (0 > this.P[c].stagingRollout && (this.P[c].stagingRollout = 0),
        1 < this.P[c].stagingRollout && (this.P[c].stagingRollout = 1))
      'undefined' !== typeof this.P[c].rollout &&
        (0 > this.P[c].rollout && (this.P[c].rollout = 0),
        1 < this.P[c].rollout && (this.P[c].rollout = 1))
    }
  }
  xf.prototype.isEnabled = function (a) {
    var b = a.id
    a = a.id.toString()
    if ('undefined' !== typeof this.P[a]) {
      var c = void 0 === c ? q.window : c
      if (
        !(c && c.navigator && c.navigator.cookieEnabled) ||
        (this.P[a].expiration && this.P[a].expiration.getTime() <= Date.now())
      )
        return !!this.P[a].defaultValue
      var d
      c = this.zd('e_gcip_' + b)
      null === c &&
        ((c = parseInt(1e4 * Math.random(), 10) / 1e4),
        this.P[b.toString()].expiration &&
          (d = parseInt(
            (this.P[b.toString()].expiration.getTime() - Date.now()) / 1e3,
            10
          )),
        this.jh('e_gcip_' + b, c.toString(), d))
      b = parseFloat(c)
      var e
      return (e = void 0 === e ? q.window : e) &&
        e.location &&
        e.location.hostname &&
        wf.test(e.location.hostname) &&
        'undefined' !== typeof this.P[a].stagingRollout
        ? (console.log('Evaluating experiment for staging domain'),
          1 === this.P[a].stagingRollout
            ? !0
            : 0 === b
              ? !1
              : b <= this.P[a].stagingRollout)
        : 'undefined' !== typeof this.P[a].rollout
          ? 0 === b
            ? !1
            : b <= this.P[a].rollout
          : !!this.P[a].defaultValue
    }
    return !1
  }
  xf.prototype.jh = function (a, b, c) {
    uf.set(a, b, {
      Pg: c ? c : 2592e3,
      path: '/__/auth/',
      domain: q.window.location.hostname,
      Ll: !0,
    })
  }
  xf.prototype.zd = function (a) {
    return uf.get(a) || null
  }
  var yf = function () {
    this.wd = new xf()
  }
  k = yf.prototype
  k.Sk = function () {
    var a = (q.EXPERIMENTS || {}).DISPLAY_CONTINUE_BUTTON_IF_NOT_REDIRECT
    return 'undefined' === typeof a ? !1 : this.wd.isEnabled(a)
  }
  k.Rk = function () {
    var a = (q.EXPERIMENTS || {}).CHECK_CONTINUE_URL_IS_AUTHORIZED
    return 'undefined' === typeof a ? !1 : this.wd.isEnabled(a)
  }
  k.Uk = function () {
    var a = (q.EXPERIMENTS || {}).POPUP_POST_MESSAGE_TO_IFRAME
    return 'undefined' === typeof a ? !1 : this.wd.isEnabled(a)
  }
  k.Qk = function () {
    var a = (q.EXPERIMENTS || {}).CHECK_OAUTH_STATE_STORED_BEFORE_REDIRECT
    return 'undefined' === typeof a ? !1 : this.wd.isEnabled(a)
  }
  k.Wk = function () {
    var a = (q.EXPERIMENTS || {}).CHECK_REDIRECT_URL_IS_AUTHORIZED
    return 'undefined' === typeof a ? !1 : this.wd.isEnabled(a)
  }
  var zf = new yf(),
    Af = zf.Sk.bind(zf),
    Bf = zf.Rk.bind(zf),
    Cf = zf.Uk.bind(zf),
    Df = zf.Qk.bind(zf),
    Ef = zf.Wk.bind(zf)
  var Ff = function (a) {
      return 'string' == typeof a.className
        ? a.className
        : (a.getAttribute && a.getAttribute('class')) || ''
    },
    Gf = function (a, b) {
      'string' == typeof a.className
        ? (a.className = b)
        : a.setAttribute && a.setAttribute('class', b)
    },
    Hf = function (a, b) {
      return a.classList
        ? a.classList.contains(b)
        : rb(a.classList ? a.classList : Ff(a).match(/\S+/g) || [], b)
    },
    If = function (a, b) {
      if (a.classList) a.classList.add(b)
      else if (!Hf(a, b)) {
        var c = Ff(a)
        Gf(a, c + (0 < c.length ? ' ' + b : b))
      }
    },
    Jf = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : Hf(a, b) &&
          Gf(
            a,
            Array.prototype.filter
              .call(
                a.classList ? a.classList : Ff(a).match(/\S+/g) || [],
                function (c) {
                  return c != b
                }
              )
              .join(' ')
          )
    }
  var Kf = function (a) {
    var b = a.type
    if ('string' === typeof b)
      switch (b.toLowerCase()) {
        case 'checkbox':
        case 'radio':
          return a.checked ? a.value : null
        case 'select-one':
          return (b = a.selectedIndex), 0 <= b ? a.options[b].value : null
        case 'select-multiple':
          b = []
          for (var c, d = 0; (c = a.options[d]); d++)
            c.selected && b.push(c.value)
          return b.length ? b : null
      }
    return null != a.value ? a.value : null
  }
  function Lf(a) {
    a && 'function' == typeof a.oa && a.oa()
  }
  var Mf = function () {
    this.Ec = this.Ec
    this.jc = this.jc
  }
  Mf.prototype.Ec = !1
  Mf.prototype.isDisposed = function () {
    return this.Ec
  }
  Mf.prototype.oa = function () {
    this.Ec || ((this.Ec = !0), this.I())
  }
  var Nf = function (a, b) {
    a.Ec ? b() : (a.jc || (a.jc = []), a.jc.push(b))
  }
  Mf.prototype.I = function () {
    if (this.jc) for (; this.jc.length; ) this.jc.shift()()
  }
  var Of = function (a, b) {
    this.type = a
    this.currentTarget = this.target = b
    this.defaultPrevented = this.Sd = !1
  }
  Of.prototype.stopPropagation = function () {
    this.Sd = !0
  }
  Of.prototype.preventDefault = function () {
    this.defaultPrevented = !0
  }
  var Pf = (function () {
    if (!q.addEventListener || !Object.defineProperty) return !1
    var a = !1,
      b = Object.defineProperty({}, 'passive', {
        get: function () {
          a = !0
        },
      })
    try {
      var c = function () {}
      q.addEventListener('test', c, b)
      q.removeEventListener('test', c, b)
    } catch (d) {}
    return a
  })()
  var Qf = function (a, b) {
    Of.call(this, a ? a.type : '')
    this.relatedTarget = this.currentTarget = this.target = null
    this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0
    this.key = ''
    this.charCode = this.keyCode = 0
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1
    this.state = null
    this.pointerId = 0
    this.pointerType = ''
    this.timeStamp = 0
    this.Y = null
    a && this.init(a, b)
  }
  w(Qf, Of)
  var Rf = ee({ 2: 'touch', 3: 'pen', 4: 'mouse' })
  Qf.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null
    this.target = a.target || a.srcElement
    this.currentTarget = b
    if ((b = a.relatedTarget)) {
      if (Bb) {
        a: {
          try {
            wb(b.nodeName)
            var e = !0
            break a
          } catch (f) {}
          e = !1
        }
        e || (b = null)
      }
    } else
      'mouseover' == c
        ? (b = a.fromElement)
        : 'mouseout' == c && (b = a.toElement)
    this.relatedTarget = b
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.offsetX = Cb || void 0 !== a.offsetX ? a.offsetX : a.layerX),
        (this.offsetY = Cb || void 0 !== a.offsetY ? a.offsetY : a.layerY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0))
    this.button = a.button
    this.keyCode = a.keyCode || 0
    this.key = a.key || ''
    this.charCode = a.charCode || ('keypress' == c ? a.keyCode : 0)
    this.ctrlKey = a.ctrlKey
    this.altKey = a.altKey
    this.shiftKey = a.shiftKey
    this.metaKey = a.metaKey
    this.pointerId = a.pointerId || 0
    this.pointerType =
      'string' === typeof a.pointerType
        ? a.pointerType
        : Rf[a.pointerType] || ''
    this.state = a.state
    this.timeStamp = a.timeStamp
    this.Y = a
    a.defaultPrevented && Qf.aa.preventDefault.call(this)
  }
  Qf.prototype.stopPropagation = function () {
    Qf.aa.stopPropagation.call(this)
    this.Y.stopPropagation
      ? this.Y.stopPropagation()
      : (this.Y.cancelBubble = !0)
  }
  Qf.prototype.preventDefault = function () {
    Qf.aa.preventDefault.call(this)
    var a = this.Y
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
  }
  Qf.prototype.nk = function () {
    return this.Y
  }
  var Sf = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    Tf = function (a) {
      return !(!a || !a[Sf])
    }
  var Uf = 0
  var Vf = function (a, b, c, d, e) {
      this.listener = a
      this.proxy = null
      this.src = b
      this.type = c
      this.capture = !!d
      this.Ne = e
      this.key = ++Uf
      this.Yd = this.ve = !1
    },
    Wf = function (a) {
      a.Yd = !0
      a.listener = null
      a.proxy = null
      a.src = null
      a.Ne = null
    }
  var Xf = function (a) {
    this.src = a
    this.ra = {}
    this.ke = 0
  }
  Xf.prototype.add = function (a, b, c, d, e) {
    var f = a.toString()
    a = this.ra[f]
    a || ((a = this.ra[f] = []), this.ke++)
    var g = Yf(a, b, d, e)
    ;-1 < g
      ? ((b = a[g]), c || (b.ve = !1))
      : ((b = new Vf(b, this.src, f, !!d, e)), (b.ve = c), a.push(b))
    return b
  }
  Xf.prototype.remove = function (a, b, c, d) {
    a = a.toString()
    if (!(a in this.ra)) return !1
    var e = this.ra[a]
    b = Yf(e, b, c, d)
    return -1 < b
      ? (Wf(e[b]),
        tb(e, b),
        0 == e.length && (delete this.ra[a], this.ke--),
        !0)
      : !1
  }
  var Zf = function (a, b) {
    var c = b.type
    c in a.ra &&
      sb(a.ra[c], b) &&
      (Wf(b), 0 == a.ra[c].length && (delete a.ra[c], a.ke--))
  }
  Xf.prototype.sf = function () {
    var a = 0,
      b
    for (b in this.ra) {
      for (var c = this.ra[b], d = 0; d < c.length; d++) ++a, Wf(c[d])
      delete this.ra[b]
      this.ke--
    }
  }
  Xf.prototype.Bd = function (a, b, c, d) {
    a = this.ra[a.toString()]
    var e = -1
    a && (e = Yf(a, b, c, d))
    return -1 < e ? a[e] : null
  }
  Xf.prototype.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : '',
      e = void 0 !== b
    return gc(this.ra, function (f) {
      for (var g = 0; g < f.length; ++g)
        if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0
      return !1
    })
  }
  var Yf = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e]
      if (!f.Yd && f.listener == b && f.capture == !!c && f.Ne == d) return e
    }
    return -1
  }
  var $f = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    ag = {},
    bg = 0,
    I = function (a, b, c, d, e) {
      if (d && d.once) return cg(a, b, c, d, e)
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) I(a, b[f], c, d, e)
        return null
      }
      c = dg(c)
      return Tf(a)
        ? a.listen(b, c, t(d) ? !!d.capture : !!d, e)
        : eg(a, b, c, !1, d, e)
    },
    eg = function (a, b, c, d, e, f) {
      if (!b) throw Error('Invalid event type')
      var g = t(e) ? !!e.capture : !!e,
        h = fg(a)
      h || (a[$f] = h = new Xf(a))
      c = h.add(b, c, d, g, f)
      if (c.proxy) return c
      d = gg()
      c.proxy = d
      d.src = a
      d.listener = c
      if (a.addEventListener)
        Pf || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e)
      else if (a.attachEvent) a.attachEvent(hg(b.toString()), d)
      else if (a.addListener && a.removeListener)
        x('change' === b, 'MediaQueryList only has a change event'),
          a.addListener(d)
      else throw Error('addEventListener and attachEvent are unavailable.')
      bg++
      return c
    },
    gg = function () {
      var a = ig,
        b = function (c) {
          return a.call(b.src, b.listener, c)
        }
      return b
    },
    cg = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) cg(a, b[f], c, d, e)
        return null
      }
      c = dg(c)
      return Tf(a)
        ? a.Tc(b, c, t(d) ? !!d.capture : !!d, e)
        : eg(a, b, c, !0, d, e)
    },
    jg = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) jg(a, b[f], c, d, e)
      else
        (d = t(d) ? !!d.capture : !!d),
          (c = dg(c)),
          Tf(a)
            ? a.yh(b, c, d, e)
            : a && (a = fg(a)) && (b = a.Bd(b, c, d, e)) && kg(b)
    },
    kg = function (a) {
      if ('number' !== typeof a && a && !a.Yd) {
        var b = a.src
        if (Tf(b)) Zf(b.Pa, a)
        else {
          var c = a.type,
            d = a.proxy
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
              ? b.detachEvent(hg(c), d)
              : b.addListener && b.removeListener && b.removeListener(d)
          bg--
          ;(c = fg(b))
            ? (Zf(c, a), 0 == c.ke && ((c.src = null), (b[$f] = null)))
            : Wf(a)
        }
      }
    },
    hg = function (a) {
      return a in ag ? ag[a] : (ag[a] = 'on' + a)
    },
    ig = function (a, b) {
      if (a.Yd) a = !0
      else {
        b = new Qf(b, this)
        var c = a.listener,
          d = a.Ne || a.src
        a.ve && kg(a)
        a = c.call(d, b)
      }
      return a
    },
    fg = function (a) {
      a = a[$f]
      return a instanceof Xf ? a : null
    },
    lg = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0),
    dg = function (a) {
      x(a, 'Listener can not be null.')
      if ('function' === typeof a) return a
      x(a.handleEvent, 'An object listener must have handleEvent method.')
      a[lg] ||
        (a[lg] = function (b) {
          return a.handleEvent(b)
        })
      return a[lg]
    }
  var J = function () {
    Mf.call(this)
    this.Pa = new Xf(this)
    this.Tj = this
    this.lf = null
  }
  w(J, Mf)
  J.prototype[Sf] = !0
  k = J.prototype
  k.nh = function (a) {
    this.lf = a
  }
  k.addEventListener = function (a, b, c, d) {
    I(this, a, b, c, d)
  }
  k.removeEventListener = function (a, b, c, d) {
    jg(this, a, b, c, d)
  }
  k.dispatchEvent = function (a) {
    mg(this)
    var b = this.lf
    if (b) {
      var c = []
      for (var d = 1; b; b = b.lf) c.push(b), x(1e3 > ++d, 'infinite loop')
    }
    b = this.Tj
    d = a.type || a
    if ('string' === typeof a) a = new Of(a, b)
    else if (a instanceof Of) a.target = a.target || b
    else {
      var e = a
      a = new Of(d, b)
      kc(a, e)
    }
    e = !0
    if (c)
      for (var f = c.length - 1; !a.Sd && 0 <= f; f--) {
        var g = (a.currentTarget = c[f])
        e = ng(g, d, !0, a) && e
      }
    a.Sd ||
      ((g = a.currentTarget = b),
      (e = ng(g, d, !0, a) && e),
      a.Sd || (e = ng(g, d, !1, a) && e))
    if (c)
      for (f = 0; !a.Sd && f < c.length; f++)
        (g = a.currentTarget = c[f]), (e = ng(g, d, !1, a) && e)
    return e
  }
  k.I = function () {
    J.aa.I.call(this)
    this.Pa && this.Pa.sf()
    this.lf = null
  }
  k.listen = function (a, b, c, d) {
    mg(this)
    return this.Pa.add(String(a), b, !1, c, d)
  }
  k.Tc = function (a, b, c, d) {
    return this.Pa.add(String(a), b, !0, c, d)
  }
  k.yh = function (a, b, c, d) {
    this.Pa.remove(String(a), b, c, d)
  }
  var ng = function (a, b, c, d) {
    b = a.Pa.ra[String(b)]
    if (!b) return !0
    b = b.concat()
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f]
      if (g && !g.Yd && g.capture == c) {
        var h = g.listener,
          l = g.Ne || g.src
        g.ve && Zf(a.Pa, g)
        e = !1 !== h.call(l, d) && e
      }
    }
    return e && !d.defaultPrevented
  }
  J.prototype.Bd = function (a, b, c, d) {
    return this.Pa.Bd(String(a), b, c, d)
  }
  J.prototype.hasListener = function (a, b) {
    return this.Pa.hasListener(void 0 !== a ? String(a) : void 0, b)
  }
  var mg = function (a) {
    x(
      a.Pa,
      'Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?'
    )
  }
  var pg = function (a) {
      if (
        (a.altKey && !a.ctrlKey) ||
        a.metaKey ||
        (112 <= a.keyCode && 123 >= a.keyCode)
      )
        return !1
      if (og(a.keyCode)) return !0
      switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
          return !1
        case 0:
          return !Bb
        default:
          return 166 > a.keyCode || 183 < a.keyCode
      }
    },
    rg = function (a, b, c, d, e, f) {
      if (Db && e) return og(a)
      if (e && !d) return !1
      if (!Bb) {
        'number' === typeof b && (b = qg(b))
        var g = 17 == b || 18 == b || (Db && 91 == b)
        if (((!c || Db) && g) || (Db && 16 == b && (d || f))) return !1
      }
      if ((Cb || zb) && d && c)
        switch (a) {
          case 220:
          case 219:
          case 221:
          case 192:
          case 186:
          case 189:
          case 187:
          case 188:
          case 190:
          case 191:
          case 192:
          case 222:
            return !1
        }
      if (yb && d && b == a) return !1
      switch (a) {
        case 13:
          return Bb ? (f || e ? !1 : !(c && d)) : !0
        case 27:
          return !(Cb || zb || Bb)
      }
      return Bb && (d || e || f) ? !1 : og(a)
    },
    og = function (a) {
      if (
        (48 <= a && 57 >= a) ||
        (96 <= a && 106 >= a) ||
        (65 <= a && 90 >= a) ||
        ((Cb || zb) && 0 == a)
      )
        return !0
      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
        case 58:
          return !0
        case 173:
        case 171:
          return Bb
        default:
          return !1
      }
    },
    qg = function (a) {
      if (Bb) a = sg(a)
      else if (Db && Cb)
        switch (a) {
          case 93:
            a = 91
        }
      return a
    },
    sg = function (a) {
      switch (a) {
        case 61:
          return 187
        case 59:
          return 186
        case 173:
          return 189
        case 224:
          return 91
        case 0:
          return 224
        default:
          return a
      }
    }
  var tg = function (a) {
    J.call(this)
    this.i = a
    I(a, 'keydown', this.Le, !1, this)
    I(a, 'click', this.ui, !1, this)
  }
  w(tg, J)
  tg.prototype.Le = function (a) {
    ;(13 == a.keyCode || (Cb && 3 == a.keyCode)) && ug(this, a)
  }
  tg.prototype.ui = function (a) {
    ug(this, a)
  }
  var ug = function (a, b) {
    var c = new vg(b)
    if (a.dispatchEvent(c)) {
      c = new wg(b)
      try {
        a.dispatchEvent(c)
      } finally {
        b.stopPropagation()
      }
    }
  }
  tg.prototype.I = function () {
    tg.aa.I.call(this)
    jg(this.i, 'keydown', this.Le, !1, this)
    jg(this.i, 'click', this.ui, !1, this)
    delete this.i
  }
  var wg = function (a) {
    Qf.call(this, a.Y)
    this.type = 'action'
  }
  w(wg, Qf)
  var vg = function (a) {
    Qf.call(this, a.Y)
    this.type = 'beforeaction'
  }
  w(vg, Qf)
  var xg = function (a) {
    J.call(this)
    this.i = a
    a = yb ? 'focusout' : 'blur'
    this.bl = I(this.i, yb ? 'focusin' : 'focus', this, !yb)
    this.cl = I(this.i, a, this, !yb)
  }
  w(xg, J)
  xg.prototype.handleEvent = function (a) {
    var b = new Qf(a.Y)
    b.type = 'focusin' == a.type || 'focus' == a.type ? 'focusin' : 'focusout'
    this.dispatchEvent(b)
  }
  xg.prototype.I = function () {
    xg.aa.I.call(this)
    kg(this.bl)
    kg(this.cl)
    delete this.i
  }
  var yg = function (a) {
    Mf.call(this)
    this.Bg = a
    this.Rc = {}
  }
  w(yg, Mf)
  var zg = []
  yg.prototype.listen = function (a, b, c, d) {
    Array.isArray(b) || (b && (zg[0] = b.toString()), (b = zg))
    for (var e = 0; e < b.length; e++) {
      var f = I(a, b[e], c || this.handleEvent, d || !1, this.Bg || this)
      if (!f) break
      this.Rc[f.key] = f
    }
    return this
  }
  yg.prototype.Tc = function (a, b, c, d) {
    return Ag(this, a, b, c, d)
  }
  var Ag = function (a, b, c, d, e, f) {
    if (Array.isArray(c))
      for (var g = 0; g < c.length; g++) Ag(a, b, c[g], d, e, f)
    else {
      b = cg(b, c, d || a.handleEvent, e, f || a.Bg || a)
      if (!b) return a
      a.Rc[b.key] = b
    }
    return a
  }
  yg.prototype.yh = function (a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) this.yh(a, b[f], c, d, e)
    else
      (c = c || this.handleEvent),
        (d = t(d) ? !!d.capture : !!d),
        (e = e || this.Bg || this),
        (c = dg(c)),
        (d = !!d),
        (b = Tf(a)
          ? a.Bd(b, c, d, e)
          : a
            ? (a = fg(a))
              ? a.Bd(b, c, d, e)
              : null
            : null),
        b && (kg(b), delete this.Rc[b.key])
  }
  yg.prototype.sf = function () {
    fc(
      this.Rc,
      function (a, b) {
        this.Rc.hasOwnProperty(b) && kg(a)
      },
      this
    )
    this.Rc = {}
  }
  yg.prototype.I = function () {
    yg.aa.I.call(this)
    this.sf()
  }
  yg.prototype.handleEvent = function () {
    throw Error('EventHandler.handleEvent not implemented')
  }
  var Bg = function (a, b) {
    this.al = 100
    this.dk = a
    this.Bl = b
    this.hf = 0
    this.Oe = null
  }
  Bg.prototype.get = function () {
    if (0 < this.hf) {
      this.hf--
      var a = this.Oe
      this.Oe = a.next
      a.next = null
    } else a = this.dk()
    return a
  }
  Bg.prototype.put = function (a) {
    this.Bl(a)
    this.hf < this.al && (this.hf++, (a.next = this.Oe), (this.Oe = a))
  }
  var Cg,
    Dg = function () {
      var a = q.MessageChannel
      'undefined' === typeof a &&
        'undefined' !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !z('Presto') &&
        (a = function () {
          var e = Xe(document, 'IFRAME')
          e.style.display = 'none'
          document.documentElement.appendChild(e)
          var f = e.contentWindow
          e = f.document
          e.open()
          e.close()
          var g = 'callImmediate' + Math.random(),
            h =
              'file:' == f.location.protocol
                ? '*'
                : f.location.protocol + '//' + f.location.host
          e = v(function (l) {
            if (('*' == h || l.origin == h) && l.data == g)
              this.port1.onmessage()
          }, this)
          f.addEventListener('message', e, !1)
          this.port1 = {}
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, h)
            },
          }
        })
      if ('undefined' !== typeof a && !kb()) {
        var b = new a(),
          c = {},
          d = c
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next
            var e = c.Mh
            c.Mh = null
            e()
          }
        }
        return function (e) {
          d.next = { Mh: e }
          d = d.next
          b.port2.postMessage(0)
        }
      }
      return function (e) {
        q.setTimeout(e, 0)
      }
    }
  var Eg = function () {
    this.Qf = this.vc = null
  }
  Eg.prototype.add = function (a, b) {
    var c = Fg.get()
    c.set(a, b)
    this.Qf ? (this.Qf.next = c) : (x(!this.vc), (this.vc = c))
    this.Qf = c
  }
  Eg.prototype.remove = function () {
    var a = null
    this.vc &&
      ((a = this.vc),
      (this.vc = this.vc.next),
      this.vc || (this.Qf = null),
      (a.next = null))
    return a
  }
  var Fg = new Bg(
      function () {
        return new Gg()
      },
      function (a) {
        return a.reset()
      }
    ),
    Gg = function () {
      this.next = this.scope = this.ug = null
    }
  Gg.prototype.set = function (a, b) {
    this.ug = a
    this.scope = b
    this.next = null
  }
  Gg.prototype.reset = function () {
    this.next = this.scope = this.ug = null
  }
  var Hg =
      q.console && q.console.createTask
        ? q.console.createTask.bind(q.console)
        : void 0,
    Ig = Hg ? Symbol('consoleTask') : void 0
  function Jg(a, b) {
    function c() {
      var h = sa.apply(0, arguments),
        l = this
      return g.run(function () {
        return a.call.apply(a, [l].concat(ka(h)))
      })
    }
    b = void 0 === b ? 'anonymous' : b
    if (Ig && a[Ig]) return a
    var d = a,
      e,
      f = null == (e = Kg) ? void 0 : e()
    a = function () {
      var h = sa.apply(0, arguments),
        l,
        m = null == (l = Kg) ? void 0 : l()
      if (f !== m)
        throw Error(
          b +
            " was scheduled in '" +
            f +
            "' but called in '" +
            m +
            "'.\nMake sure your test awaits all async calls.\n\nTIP: To help investigate, debug the test in Chrome and look at the async portion\nof the call stack to see what originally scheduled the callback.  Then, make the\ntest wait for the relevant asynchronous work to finish."
        )
      return d.call.apply(d, [this].concat(ka(h)))
    }
    if (!Hg) return a
    var g = Hg(a.name || b)
    c[Ja(Ig)] = g
    return c
  }
  var Kg
  var Lg,
    Mg = !1,
    Ng = new Eg(),
    Pg = function (a, b) {
      Lg || Og()
      Mg || (Lg(), (Mg = !0))
      a = Jg(a, 'goog.async.run')
      Ng.add(a, b)
    },
    Og = function () {
      if (q.Promise && q.Promise.resolve) {
        var a = q.Promise.resolve(void 0)
        Lg = function () {
          a.then(Qg)
        }
      } else
        Lg = function () {
          var b = Qg
          'function' !== typeof q.setImmediate ||
          (q.Window &&
            q.Window.prototype &&
            (jb() || !z('Edge')) &&
            q.Window.prototype.setImmediate == q.setImmediate)
            ? (Cg || (Cg = Dg()), Cg(b))
            : q.setImmediate(b)
        }
    },
    Qg = function () {
      for (var a; (a = Ng.remove()); ) {
        try {
          a.ug.call(a.scope)
        } catch (b) {
          Pa(b)
        }
        Fg.put(a)
      }
      Mg = !1
    }
  var Rg = function (a) {
    if (!a) return !1
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  }
  var K = function (a, b) {
      this.W = 0
      this.ua = void 0
      this.zc = this.nb = this.T = null
      this.Ke = this.rg = !1
      if (a != dc)
        try {
          var c = this
          a.call(
            b,
            function (d) {
              Sg(c, 2, d)
            },
            function (d) {
              if (!(d instanceof Tg))
                try {
                  if (d instanceof Error) throw d
                  throw Error('Promise rejected.')
                } catch (e) {}
              Sg(c, 3, d)
            }
          )
        } catch (d) {
          Sg(this, 3, d)
        }
    },
    Ug = function () {
      this.next = this.context = this.Uc = this.kc = this.child = null
      this.nd = !1
    }
  Ug.prototype.reset = function () {
    this.context = this.Uc = this.kc = this.child = null
    this.nd = !1
  }
  var Vg = new Bg(
      function () {
        return new Ug()
      },
      function (a) {
        a.reset()
      }
    ),
    Wg = function (a, b, c) {
      var d = Vg.get()
      d.kc = a
      d.Uc = b
      d.context = c
      return d
    },
    L = function (a) {
      if (a instanceof K) return a
      var b = new K(dc)
      Sg(b, 2, a)
      return b
    },
    M = function (a) {
      return new K(function (b, c) {
        c(a)
      })
    },
    Yg = function (a, b, c) {
      Xg(a, b, c, null) || Pg(Ca(b, a))
    },
    Zg = function (a) {
      return new K(function (b, c) {
        var d = a.length,
          e = []
        if (d)
          for (
            var f = function (m, n) {
                d--
                e[m] = n
                0 == d && b(e)
              },
              g = function (m) {
                c(m)
              },
              h = 0,
              l;
            h < a.length;
            h++
          )
            (l = a[h]), Yg(l, Ca(f, h), g)
        else b(e)
      })
    },
    $g = function (a) {
      return new K(function (b) {
        var c = a.length,
          d = []
        if (c)
          for (
            var e = function (h, l, m) {
                c--
                d[h] = l ? { li: !0, value: m } : { li: !1, reason: m }
                0 == c && b(d)
              },
              f = 0,
              g;
            f < a.length;
            f++
          )
            (g = a[f]), Yg(g, Ca(e, f, !0), Ca(e, f, !1))
        else b(d)
      })
    },
    ah = function (a) {
      return new K(function (b, c) {
        var d = a.length,
          e = []
        if (d)
          for (
            var f = function (m) {
                b(m)
              },
              g = function (m, n) {
                d--
                e[m] = n
                0 == d && c(e)
              },
              h = 0,
              l;
            h < a.length;
            h++
          )
            (l = a[h]), Yg(l, f, Ca(g, h))
        else b(void 0)
      })
    }
  K.prototype.then = function (a, b, c) {
    null != a && Na(a, 'opt_onFulfilled should be a function.')
    null != b &&
      Na(
        b,
        'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?'
      )
    return bh(
      this,
      'function' === typeof a ? a : null,
      'function' === typeof b ? b : null,
      c
    )
  }
  K.prototype.$goog_Thenable = !0
  K.prototype.Ob = function (a, b) {
    a = Wg(a, a, b)
    a.nd = !0
    ch(this, a)
    return this
  }
  K.prototype.h = function (a, b) {
    return bh(this, null, a, b)
  }
  K.prototype.catch = K.prototype.h
  K.prototype.cancel = function (a) {
    if (0 == this.W) {
      var b = new Tg(a)
      Pg(function () {
        dh(this, b)
      }, this)
    }
  }
  var dh = function (a, b) {
      if (0 == a.W)
        if (a.T) {
          var c = a.T
          if (c.nb) {
            for (
              var d = 0, e = null, f = null, g = c.nb;
              g && (g.nd || (d++, g.child == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g)
            e &&
              (0 == c.W && 1 == d
                ? dh(c, b)
                : (f
                    ? ((d = f),
                      x(c.nb),
                      x(null != d),
                      d.next == c.zc && (c.zc = d),
                      (d.next = d.next.next))
                    : eh(c),
                  fh(c, e, 3, b)))
          }
          a.T = null
        } else Sg(a, 3, b)
    },
    ch = function (a, b) {
      a.nb || (2 != a.W && 3 != a.W) || gh(a)
      x(null != b.kc)
      a.zc ? (a.zc.next = b) : (a.nb = b)
      a.zc = b
    },
    bh = function (a, b, c, d) {
      b && (b = Jg(b, 'goog.Promise.then'))
      c && (c = Jg(c, 'goog.Promise.then'))
      var e = Wg(null, null, null)
      e.child = new K(function (f, g) {
        e.kc = b
          ? function (h) {
              try {
                var l = b.call(d, h)
                f(l)
              } catch (m) {
                g(m)
              }
            }
          : f
        e.Uc = c
          ? function (h) {
              try {
                var l = c.call(d, h)
                void 0 === l && h instanceof Tg ? g(h) : f(l)
              } catch (m) {
                g(m)
              }
            }
          : g
      })
      e.child.T = a
      ch(a, e)
      return e.child
    }
  K.prototype.Xl = function (a) {
    x(1 == this.W)
    this.W = 0
    Sg(this, 2, a)
  }
  K.prototype.Yl = function (a) {
    x(1 == this.W)
    this.W = 0
    Sg(this, 3, a)
  }
  var Sg = function (a, b, c) {
      0 == a.W &&
        (a === c &&
          ((b = 3), (c = new TypeError('Promise cannot resolve to itself'))),
        (a.W = 1),
        Xg(c, a.Xl, a.Yl, a) ||
          ((a.ua = c),
          (a.W = b),
          (a.T = null),
          gh(a),
          3 != b || c instanceof Tg || hh(a, c)))
    },
    Xg = function (a, b, c, d) {
      if (a instanceof K)
        return (
          null != b && Na(b, 'opt_onFulfilled should be a function.'),
          null != c &&
            Na(
              c,
              'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?'
            ),
          ch(a, Wg(b || dc, c || null, d)),
          !0
        )
      if (Rg(a)) return a.then(b, c, d), !0
      if (t(a))
        try {
          var e = a.then
          if ('function' === typeof e) return ih(a, e, b, c, d), !0
        } catch (f) {
          return c.call(d, f), !0
        }
      return !1
    },
    ih = function (a, b, c, d, e) {
      var f = !1,
        g = function (l) {
          f || ((f = !0), c.call(e, l))
        },
        h = function (l) {
          f || ((f = !0), d.call(e, l))
        }
      try {
        b.call(a, g, h)
      } catch (l) {
        h(l)
      }
    },
    gh = function (a) {
      a.rg || ((a.rg = !0), Pg(a.jk, a))
    },
    eh = function (a) {
      var b = null
      a.nb && ((b = a.nb), (a.nb = b.next), (b.next = null))
      a.nb || (a.zc = null)
      null != b && x(null != b.kc)
      return b
    }
  K.prototype.jk = function () {
    for (var a; (a = eh(this)); ) fh(this, a, this.W, this.ua)
    this.rg = !1
  }
  var fh = function (a, b, c, d) {
      if (3 == c && b.Uc && !b.nd) for (; a && a.Ke; a = a.T) a.Ke = !1
      if (b.child) (b.child.T = null), jh(b, c, d)
      else
        try {
          b.nd ? b.kc.call(b.context) : jh(b, c, d)
        } catch (e) {
          kh.call(null, e)
        }
      Vg.put(b)
    },
    jh = function (a, b, c) {
      2 == b ? a.kc.call(a.context, c) : a.Uc && a.Uc.call(a.context, c)
    },
    hh = function (a, b) {
      a.Ke = !0
      Pg(function () {
        a.Ke && kh.call(null, b)
      })
    },
    kh = Pa,
    Tg = function (a) {
      Fa.call(this, a)
    }
  w(Tg, Fa)
  Tg.prototype.name = 'cancel'
  var lh = function (a, b, c) {
      if ('function' === typeof a) c && (a = v(a, c))
      else if (a && 'function' == typeof a.handleEvent) a = v(a.handleEvent, a)
      else throw Error('Invalid listener argument')
      return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0)
    },
    mh = function (a) {
      var b = null
      return new K(function (c, d) {
        b = lh(function () {
          c(void 0)
        }, a)
        ;-1 == b && d(Error('Failed to schedule timer.'))
      }).h(function (c) {
        q.clearTimeout(b)
        throw c
      })
    }
  var nh = function (a) {
    J.call(this)
    this.je = null
    this.i = a
    a = yb || zb
    this.ci = new yg(this)
    this.ci.listen(
      this.i,
      a ? ['keydown', 'paste', 'cut', 'drop', 'input'] : 'input',
      this
    )
  }
  w(nh, J)
  nh.prototype.handleEvent = function (a) {
    if ('input' == a.type)
      (yb && 0 == a.keyCode && 0 == a.charCode) ||
        (oh(this), this.dispatchEvent(ph(a)))
    else if ('keydown' != a.type || pg(a)) {
      var b = 'keydown' == a.type ? this.i.value : null
      yb && 229 == a.keyCode && (b = null)
      var c = ph(a)
      oh(this)
      this.je = lh(
        function () {
          this.je = null
          this.i.value != b && this.dispatchEvent(c)
        },
        0,
        this
      )
    }
  }
  var oh = function (a) {
      null != a.je && (q.clearTimeout(a.je), (a.je = null))
    },
    ph = function (a) {
      a = new Qf(a.Y)
      a.type = 'input'
      return a
    }
  nh.prototype.I = function () {
    nh.aa.I.call(this)
    this.ci.oa()
    oh(this)
    delete this.i
  }
  var qh = function (a, b, c, d) {
    Qf.call(this, d)
    this.type = 'key'
    this.keyCode = a
    this.charCode = b
    this.repeat = c
  }
  w(qh, Qf)
  var rh = function (a, b) {
    J.call(this)
    a &&
      (this.af && this.detach(),
      (this.i = a),
      (this.Ze = I(this.i, 'keypress', this, b)),
      (this.Ig = I(this.i, 'keydown', this.Le, b, this)),
      (this.af = I(this.i, 'keyup', this.xk, b, this)))
  }
  w(rh, J)
  k = rh.prototype
  k.i = null
  k.Ze = null
  k.Ig = null
  k.af = null
  k.Ba = -1
  k.rb = -1
  k.Uf = !1
  var sh = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45,
    },
    th = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      'U+007F': 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45,
    },
    uh = Db && Bb
  k = rh.prototype
  k.Le = function (a) {
    if (Cb || zb)
      if (
        (17 == this.Ba && !a.ctrlKey) ||
        (18 == this.Ba && !a.altKey) ||
        (Db && 91 == this.Ba && !a.metaKey)
      )
        this.rb = this.Ba = -1
    ;-1 == this.Ba &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.Ba = 17)
        : a.altKey && 18 != a.keyCode
          ? (this.Ba = 18)
          : a.metaKey && 91 != a.keyCode && (this.Ba = 91))
    rg(a.keyCode, this.Ba, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? ((this.rb = qg(a.keyCode)), uh && (this.Uf = a.altKey))
      : this.handleEvent(a)
  }
  k.xk = function (a) {
    this.rb = this.Ba = -1
    this.Uf = a.altKey
  }
  k.handleEvent = function (a) {
    var b = a.Y,
      c = b.altKey
    if (yb && 'keypress' == a.type) {
      var d = this.rb
      var e = 13 != d && 27 != d ? b.keyCode : 0
    } else
      (Cb || zb) && 'keypress' == a.type
        ? ((d = this.rb),
          (e = 0 <= b.charCode && 63232 > b.charCode && og(d) ? b.charCode : 0))
        : ('keypress' == a.type
            ? (uh && (c = this.Uf),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.rb), (e = b.charCode))
                : ((d = b.keyCode || this.rb), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.rb), (e = b.charCode || 0)),
          Db && 63 == e && 224 == d && (d = 191))
    var f = (d = qg(d))
    d
      ? 63232 <= d && d in sh
        ? (f = sh[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier && b.keyIdentifier in th && (f = th[b.keyIdentifier])
    if (
      !Bb ||
      'keypress' != a.type ||
      rg(f, this.Ba, a.shiftKey, a.ctrlKey, c, a.metaKey)
    )
      (a = f == this.Ba),
        (this.Ba = f),
        (b = new qh(f, e, a, b)),
        (b.altKey = c),
        this.dispatchEvent(b)
  }
  k.Ma = function () {
    return this.i
  }
  k.detach = function () {
    this.Ze &&
      (kg(this.Ze),
      kg(this.Ig),
      kg(this.af),
      (this.af = this.Ig = this.Ze = null))
    this.i = null
    this.rb = this.Ba = -1
  }
  k.I = function () {
    rh.aa.I.call(this)
    this.detach()
  }
  var wh = function (a) {
      var b = Ne(void 0),
        c = b.xa
      if (yb && c.createStyleSheet) (b = c.createStyleSheet()), vh(b, a)
      else {
        c = Qe(b.xa, 'HEAD')[0]
        if (!c) {
          var d = Qe(b.xa, 'BODY')[0]
          c = b.qd('HEAD')
          d.parentNode.insertBefore(c, d)
        }
        d = b.qd('STYLE')
        var e
        ;(e = Rc('style[nonce],link[rel="stylesheet"][nonce]')) &&
          d.setAttribute('nonce', e)
        vh(d, a)
        b.appendChild(c, d)
      }
    },
    vh = function (a, b) {
      b instanceof Fc && b.constructor === Fc
        ? (b = b.ej)
        : (Ka(
            "expected object of type SafeStyleSheet, got '" +
              b +
              "' of type " +
              ya(b)
          ),
          (b = 'type_error:SafeStyleSheet'))
      yb && void 0 !== a.cssText
        ? (a.cssText = b)
        : q.trustedTypes
          ? df(a, b)
          : (a.innerHTML = b)
    }
  var xh = function () {}
  xh.Gg = void 0
  xh.qk = function () {
    return xh.Gg ? xh.Gg : (xh.Gg = new xh())
  }
  xh.prototype.hl = 0
  xh.prototype.Kk = ''
  var yh = function (a) {
    J.call(this)
    this.Ce = a || Ne()
    this.Aa = null
    this.dc = !1
    this.i = null
    this.Eb = void 0
    this.ze = this.Ac = this.T = null
    this.dm = !1
  }
  w(yh, J)
  k = yh.prototype
  k.Jk = xh.qk()
  k.getId = function () {
    var a
    ;(a = this.Aa) ||
      ((a = this.Jk), (a = this.Aa = a.Kk + ':' + (a.hl++).toString(36)))
    return a
  }
  k.Ma = function () {
    return this.i
  }
  k.za = function (a) {
    return this.i ? this.Ce.za(a, this.i) : null
  }
  k.Ic = function () {
    this.Eb || (this.Eb = new yg(this))
    return x(this.Eb)
  }
  k.getParent = function () {
    return this.T
  }
  k.nh = function (a) {
    if (this.T && this.T != a) throw Error('Method not supported')
    yh.aa.nh.call(this, a)
  }
  k.Ad = function () {
    return this.Ce
  }
  k.qd = function () {
    this.i = this.Ce.createElement('DIV')
  }
  k.render = function (a) {
    if (this.dc) throw Error('Component already rendered')
    this.i || this.qd()
    a ? a.insertBefore(this.i, null) : this.Ce.xa.body.appendChild(this.i)
    ;(this.T && !this.T.dc) || this.La()
  }
  k.La = function () {
    this.dc = !0
    zh(this, function (a) {
      !a.dc && a.Ma() && a.La()
    })
  }
  k.vd = function () {
    zh(this, function (a) {
      a.dc && a.vd()
    })
    this.Eb && this.Eb.sf()
    this.dc = !1
  }
  k.I = function () {
    this.dc && this.vd()
    this.Eb && (this.Eb.oa(), delete this.Eb)
    zh(this, function (a) {
      a.oa()
    })
    !this.dm && this.i && af(this.i)
    this.T = this.i = this.ze = this.Ac = null
    yh.aa.I.call(this)
  }
  k.hasChildren = function () {
    return !!this.Ac && 0 != this.Ac.length
  }
  var zh = function (a, b) {
    a.Ac && a.Ac.forEach(b, void 0)
  }
  yh.prototype.removeChild = function (a, b) {
    if (a) {
      var c = 'string' === typeof a ? a : a.getId()
      this.ze && c
        ? ((a = this.ze), (a = (null !== a && c in a ? a[c] : void 0) || null))
        : (a = null)
      if (c && a) {
        var d = this.ze
        c in d && delete d[c]
        sb(this.Ac, a)
        b && (a.vd(), a.i && af(a.i))
        b = a
        if (null == b) throw Error('Unable to set parent component')
        b.T = null
        yh.aa.nh.call(b, null)
      }
    }
    if (!a) throw Error('Child is not in parent component')
    return a
  }
  var Ah = function (a, b) {
      var c = kf(a)
      b
        ? (Jf(a, 'firebaseui-input-invalid'),
          If(a, 'firebaseui-input'),
          c && Jf(c, 'firebaseui-textfield-invalid'))
        : (Jf(a, 'firebaseui-input'),
          If(a, 'firebaseui-input-invalid'),
          c && If(c, 'firebaseui-textfield-invalid'))
    },
    Bh = function (a, b, c) {
      b = new nh(b)
      Nf(a, Ca(Lf, b))
      a.Ic().listen(b, 'input', c)
    },
    Ch = function (a, b, c) {
      b = new rh(b)
      Nf(a, Ca(Lf, b))
      a.Ic().listen(b, 'key', function (d) {
        13 == d.keyCode && (d.stopPropagation(), d.preventDefault(), c(d))
      })
    },
    Dh = function (a, b, c) {
      b = new xg(b)
      Nf(a, Ca(Lf, b))
      a.Ic().listen(b, 'focusin', c)
    },
    Eh = function (a, b, c) {
      b = new xg(b)
      Nf(a, Ca(Lf, b))
      a.Ic().listen(b, 'focusout', c)
    },
    Fh = function (a, b, c) {
      b = new tg(b)
      Nf(a, Ca(Lf, b))
      a.Ic().listen(b, 'action', function (d) {
        d.stopPropagation()
        d.preventDefault()
        c(d)
      })
    },
    Gh = function (a, b) {
      b && df(a, b)
      Jf(a, 'firebaseui-hidden')
    }
  var Ih = function (a) {
      Hh(a, 'upgradeElement')
    },
    Jh = function (a) {
      Hh(a, 'downgradeElements')
    },
    Kh = [
      'mdl-js-textfield',
      'mdl-js-progress',
      'mdl-js-spinner',
      'mdl-js-button',
    ],
    Hh = function (a, b) {
      a &&
        window.componentHandler &&
        window.componentHandler[b] &&
        Kh.forEach(function (c) {
          if (Hf(a, c)) window.componentHandler[b](a)
          c = Re(c, a)
          A(c, function (d) {
            window.componentHandler[b](d)
          })
        })
    }
  var Mh = function (a) {
      Lh.call(this)
      document.body.appendChild(a)
      a.showModal || window.dialogPolyfill.registerDialog(a)
      a.showModal()
      Ih(a)
      var b = this.Ma().parentElement || this.Ma().parentNode
      if (b) {
        var c = this
        this.Td = function () {
          if (a.open) {
            var d = a.getBoundingClientRect().height,
              e = b.getBoundingClientRect().height,
              f =
                b.getBoundingClientRect().top -
                document.body.getBoundingClientRect().top,
              g =
                b.getBoundingClientRect().left -
                document.body.getBoundingClientRect().left,
              h = a.getBoundingClientRect().width,
              l = b.getBoundingClientRect().width
            a.style.top = (f + (e - d) / 2).toString() + 'px'
            d = g + (l - h) / 2
            a.style.left = d.toString() + 'px'
            a.style.right =
              (document.body.getBoundingClientRect().width - d - h).toString() +
              'px'
          } else window.removeEventListener('resize', c.Td)
        }
        this.Td()
        window.addEventListener('resize', this.Td, !1)
      }
    },
    Lh = function () {
      var a = Nh.call(this)
      a &&
        (Jh(a),
        a.open && a.close(),
        af(a),
        this.Td && window.removeEventListener('resize', this.Td))
    },
    Nh = function () {
      return Se('firebaseui-id-dialog')
    }
  var Oh = function (a, b) {
      pe()
      if (G['firebaseui.auth.soy2.element.submitButton'])
        return G['firebaseui.auth.soy2.element.submitButton']({ label: b }, a)
      a = H(
        null == b || 'string' === typeof b,
        'label',
        b,
        'null|string|undefined'
      )
      b =
        '<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">'
      b = a ? b + ie(a) : b + 'Next'
      return F(b + '</button>')
    },
    Ph = function (a) {
      if (G['firebaseui.auth.soy2.element.continueButton'])
        return G['firebaseui.auth.soy2.element.continueButton'](null, a)
      a = '' + Oh(a, 'Continue')
      return F(a)
    },
    Qh = function (a, b) {
      a = a.message
      pe()
      G['firebaseui.auth.soy2.element.infoBar']
        ? (b = G['firebaseui.auth.soy2.element.infoBar']({ message: a }, b))
        : ((b = H('string' === typeof a, 'message', a, 'string')),
          (b =
            '<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">' +
            ie(b) +
            '&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">'),
          (b = F(b + 'Dismiss</a></p></div>')))
      return b
    },
    Rh = function (a, b) {
      var c = a.Ai,
        d = a.message
      pe()
      G['firebaseui.auth.soy2.element.progressDialog']
        ? (b = G['firebaseui.auth.soy2.element.progressDialog'](
            { Ai: c, message: d },
            b
          ))
        : ((a = H('string' === typeof c, 'iconClass', c, 'string')),
          (d = H('string' === typeof d, 'message', d, 'string')),
          (c = F),
          (a = F(
            '<div class="firebaseui-dialog-icon-wrapper"><div class="' +
              ne(a) +
              ' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">' +
              ie(d) +
              '</div>'
          )),
          pe(),
          G['firebaseui.auth.soy2.element.dialog']
            ? (b = G['firebaseui.auth.soy2.element.dialog'](
                { content: a, Lm: void 0 },
                b
              ))
            : ((b = H(
                'string' === typeof a || a instanceof ce || a instanceof Jc,
                'content',
                a,
                '!goog.soy.data.SanitizedHtml|!safevalues.SafeHtml|!soy.$$EMPTY_STRING_|string'
              )),
              (a = H(!0, 'classes', void 0, 'null|string|undefined')),
              (b = F(
                '<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog' +
                  (a ? ' ' + ne(a) : '') +
                  '">' +
                  ie(b) +
                  '</dialog>'
              ))),
          (b = c(b)))
      return b
    },
    Th = function (a, b) {
      a = a || {}
      return Sh(b, a.Ij)
    },
    Sh = function (a, b) {
      pe()
      if (G['firebaseui.auth.soy2.element.busyIndicator'])
        return G['firebaseui.auth.soy2.element.busyIndicator']({ Ij: b }, a)
      a = H(
        null == b || 'boolean' === typeof b,
        'useSpinner',
        b,
        'boolean|null|undefined'
      )
      return F(
        a
          ? '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>'
          : '<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>'
      )
    }
  var Vh = function () {
      af(Uh.call(this))
    },
    Uh = function () {
      return this.za('firebaseui-id-info-bar')
    },
    Wh = function () {
      return this.za('firebaseui-id-dismiss-info-bar')
    }
  var Xh = {},
    Yh = 0,
    Zh = function (a, b) {
      if (!a) throw Error('Event target element must be provided!')
      'undefined' === typeof a.Zh && ((a.Zh = Yh), Yh++)
      a = a.Zh
      if (Xh[a] && Xh[a].length)
        for (var c = 0; c < Xh[a].length; c++) Xh[a][c].dispatchEvent(b)
    }
  var $h = {
      Om: {
        'google.com':
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg',
        'github.com':
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg',
        'facebook.com':
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg',
        'twitter.com':
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg',
        password:
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg',
        phone:
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg',
        anonymous:
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png',
        'microsoft.com':
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg',
        'yahoo.com':
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg',
        'apple.com':
          'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png',
        saml: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg',
        oidc: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg',
      },
      Nm: {
        'google.com': '#ffffff',
        'github.com': '#333333',
        'facebook.com': '#3b5998',
        'twitter.com': '#55acee',
        password: '#db4437',
        phone: '#02bd7e',
        anonymous: '#f4b400',
        'microsoft.com': '#2F2F2F',
        'yahoo.com': '#720E9E',
        'apple.com': '#000000',
        saml: '#007bff',
        oidc: '#007bff',
      },
      Pm: {
        'google.com': 'Google',
        'github.com': 'GitHub',
        'facebook.com': 'Facebook',
        'twitter.com': 'Twitter',
        password: 'Password',
        phone: 'Phone',
        anonymous: 'Guest',
        'microsoft.com': 'Microsoft',
        'yahoo.com': 'Yahoo',
        'apple.com': 'Apple',
      },
    },
    ai = function (a, b, c) {
      Of.call(this, a, b)
      for (var d in c) this[d] = c[d]
    }
  w(ai, Of)
  var N = function (a, b, c, d, e) {
    yh.call(this, c)
    this.Gf = a
    this.Ff = b
    this.Te = !1
    this.bj = d || null
    this.mb = this.ce = null
    this.Qc = ic($h)
    kc(this.Qc, e || {})
  }
  w(N, yh)
  N.prototype.qd = function () {
    var a = lf(this.Gf, this.Ff, this.Qc, this.Ad())
    Ih(a)
    this.i = a
  }
  N.prototype.La = function () {
    N.aa.La.call(this)
    Zh(this.ac(), new ai('pageEnter', this.ac(), { pageId: this.bj }))
    if (this.si() && this.Qc.vh) {
      var a = this.Qc.vh
      Fh(this, this.si(), function () {
        a()
      })
    }
    if (this.pi() && this.Qc.Zg) {
      var b = this.Qc.Zg
      Fh(this, this.pi(), function () {
        b()
      })
    }
  }
  N.prototype.vd = function () {
    Zh(this.ac(), new ai('pageExit', this.ac(), { pageId: this.bj }))
    N.aa.vd.call(this)
  }
  N.prototype.I = function () {
    window.clearTimeout(this.ce)
    this.Ff = this.Gf = this.ce = null
    this.Te = !1
    this.mb = null
    Jh(this.Ma())
    N.aa.I.call(this)
  }
  var bi = function (a) {
    a.Te = !0
    var b = Hf(a.Ma(), 'firebaseui-use-spinner')
    a.ce = window.setTimeout(function () {
      a.Ma() &&
        null === a.mb &&
        ((a.mb = lf(Th, { Ij: b }, null, a.Ad())),
        a.Ma().appendChild(a.mb),
        Ih(a.mb))
    }, 500)
  }
  N.prototype.Fe = function (a, b, c, d) {
    var e = this
    if (!e.Te) {
      bi(e)
      var f = function () {
        if (e.isDisposed()) return null
        e.Te = !1
        window.clearTimeout(e.ce)
        e.ce = null
        e.mb && (Jh(e.mb), af(e.mb), (e.mb = null))
      }
      a.apply(null, b).then(c, d).then(f, f)
    }
  }
  N.prototype.ac = function () {
    return this.Ma().parentElement || this.Ma().parentNode
  }
  var ci = function (a, b, c) {
    Ch(a, b, function () {
      c()
    })
  }
  Object.assign(N.prototype, {
    Cf: function (a) {
      Vh.call(this)
      var b = lf(Qh, { message: a }, null, this.Ad())
      this.Ma().appendChild(b)
      Fh(this, Wh.call(this), function () {
        af(b)
      })
    },
    Rm: Vh,
    Um: Uh,
    Tm: Wh,
    bn: function (a, b) {
      a = lf(Rh, { Ai: a, message: b }, null, this.Ad())
      Mh.call(this, a)
    },
    Qm: Lh,
    Sm: Nh,
    Wm: function () {
      return this.za('firebaseui-tos')
    },
    si: function () {
      return this.za('firebaseui-tos-link')
    },
    pi: function () {
      return this.za('firebaseui-pp-link')
    },
    Xm: function () {
      return this.za('firebaseui-tos-list')
    },
  })
  var di = function (a, b) {
      if (G['firebaseui.auth.soy2.page.passwordRecoveryEmailSent'])
        return G['firebaseui.auth.soy2.page.passwordRecoveryEmailSent'](a, b)
      var c = H('string' === typeof a.email, 'email', a.email, 'string'),
        d = H(
          null == a.B || 'boolean' === typeof a.B,
          'allowContinue',
          a.B,
          'boolean|null|undefined'
        )
      var e =
        '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'
      c =
        'Follow the instructions sent to <strong>' +
        ie(c) +
        '</strong> to recover your password'
      e = e + c + '</p></div><div class="firebaseui-card-actions">'
      d &&
        ((e = e + '<div class="firebaseui-form-actions">' + Oh(b, 'Done')),
        (e += '</div>'))
      d = e
      G['firebaseui.auth.soy2.element.tosPpLink']
        ? (b = G['firebaseui.auth.soy2.element.tosPpLink'](a, b))
        : ((a = b.Zg),
          (e = ''),
          je(b.vh) &&
            je(a) &&
            (e +=
              '<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),
          (b = F(e)))
      return F(
        d + ('</div><div class="firebaseui-card-footer">' + b + '</div></div>')
      )
    },
    ei = function (a, b) {
      return G['firebaseui.auth.soy2.page.callback']
        ? G['firebaseui.auth.soy2.page.callback'](a, b)
        : F(
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">' +
              Sh(b) +
              '</div></div>'
          )
    },
    fi = function (a, b) {
      if (G['firebaseui.auth.soy2.page.passwordReset'])
        return G['firebaseui.auth.soy2.page.passwordReset'](a, b)
      var c = H('string' === typeof a.email, 'email', a.email, 'string')
      c =
        '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">for <strong>' +
        (ie(c) + '</strong></p>')
      var d = { label: 'New password' }
      for (e in a) e in d || (d[e] = a[e])
      a = (d || {}).label
      pe()
      if (G['firebaseui.auth.soy2.element.newPassword'])
        a = G['firebaseui.auth.soy2.element.newPassword']({ label: a }, b)
      else {
        a = H(
          null == a || 'string' === typeof a,
          'label',
          a,
          'null|string|undefined'
        )
        var e =
          '<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="newPassword">'
        e = a ? e + ie(a) : e + 'Choose password'
        a = F(
          e +
            '</label><input type="password" name="newPassword" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>'
        )
      }
      c += a
      G['firebaseui.auth.soy2.element.saveButton']
        ? (b = G['firebaseui.auth.soy2.element.saveButton'](null, b))
        : ((b = '' + Oh(b, 'Save')), (b = F(b)))
      return F(
        c +
          ('</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            b +
            '</div></div></form></div>')
      )
    },
    gi = function (a, b) {
      a = a || {}
      a = a.B
      pe()
      G['firebaseui.auth.soy2.page.passwordResetSuccess']
        ? (b = G['firebaseui.auth.soy2.page.passwordResetSuccess']({ B: a }, b))
        : ((b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">' +
            ((H(
              null == a || 'boolean' === typeof a,
              'allowContinue',
              a,
              'boolean|null|undefined'
            )
              ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
              : '') +
              '</div></div>')),
          (b = F(b)))
      return b
    },
    hi = function (a, b) {
      a = a || {}
      a = a.B
      pe()
      G['firebaseui.auth.soy2.page.passwordResetFailure']
        ? (b = G['firebaseui.auth.soy2.page.passwordResetFailure']({ B: a }, b))
        : ((b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' +
            ((H(
              null == a || 'boolean' === typeof a,
              'allowContinue',
              a,
              'boolean|null|undefined'
            )
              ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
              : '') +
              '</div></div>')),
          (b = F(b)))
      return b
    },
    ii = function (a, b) {
      var c = a.email
      a = a.B
      pe()
      if (G['firebaseui.auth.soy2.page.emailChangeRevokeSuccess'])
        b = G['firebaseui.auth.soy2.page.emailChangeRevokeSuccess'](
          { email: c, B: a },
          b
        )
      else {
        c = H('string' === typeof c, 'email', c, 'string')
        a = H(
          null == a || 'boolean' === typeof a,
          'allowContinue',
          a,
          'boolean|null|undefined'
        )
        var d =
          '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'
        c =
          'Your sign-in email address has been changed back to <strong>' +
          ie(c) +
          '</strong>.'
        d =
          d +
          c +
          '</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.'
        d +=
          '</p></div><div class="firebaseui-card-actions">' +
          (a
            ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
            : '') +
          '</div></form></div>'
        b = F(d)
      }
      return b
    },
    ji = function (a, b) {
      a = a || {}
      a = a.B
      pe()
      G['firebaseui.auth.soy2.page.emailChangeRevokeFailure']
        ? (b = G['firebaseui.auth.soy2.page.emailChangeRevokeFailure'](
            { B: a },
            b
          ))
        : ((b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">' +
            ((H(
              null == a || 'boolean' === typeof a,
              'allowContinue',
              a,
              'boolean|null|undefined'
            )
              ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
              : '') +
              '</div></div>')),
          (b = F(b)))
      return b
    },
    ki = function (a, b) {
      a = a || {}
      a = a.B
      pe()
      G['firebaseui.auth.soy2.page.emailVerificationSuccess']
        ? (b = G['firebaseui.auth.soy2.page.emailVerificationSuccess'](
            { B: a },
            b
          ))
        : ((b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">' +
            ((H(
              null == a || 'boolean' === typeof a,
              'allowContinue',
              a,
              'boolean|null|undefined'
            )
              ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
              : '') +
              '</div></div>')),
          (b = F(b)))
      return b
    },
    li = function (a, b) {
      a = a || {}
      a = a.B
      pe()
      G['firebaseui.auth.soy2.page.emailVerificationFailure']
        ? (b = G['firebaseui.auth.soy2.page.emailVerificationFailure'](
            { B: a },
            b
          ))
        : ((b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' +
            ((H(
              null == a || 'boolean' === typeof a,
              'allowContinue',
              a,
              'boolean|null|undefined'
            )
              ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
              : '') +
              '</div></div>')),
          (b = F(b)))
      return b
    },
    mi = function (a, b) {
      var c = a.email
      a = a.B
      pe()
      if (G['firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess'])
        b = G['firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess'](
          { email: c, B: a },
          b
        )
      else {
        c = H('string' === typeof c, 'email', c, 'string')
        a = H(
          null == a || 'boolean' === typeof a,
          'allowContinue',
          a,
          'boolean|null|undefined'
        )
        var d =
          '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'
        c =
          'You can now sign in with your new email <strong>' +
          ie(c) +
          '</strong>.'
        d =
          d +
          c +
          ('</p></div><div class="firebaseui-card-actions">' +
            (a
              ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
              : '') +
            '</div></div>')
        b = F(d)
      }
      return b
    },
    ni = function (a, b) {
      a = a || {}
      a = a.B
      pe()
      G['firebaseui.auth.soy2.page.verifyAndChangeEmailFailure']
        ? (b = G['firebaseui.auth.soy2.page.verifyAndChangeEmailFailure'](
            { B: a },
            b
          ))
        : ((b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">' +
            ((H(
              null == a || 'boolean' === typeof a,
              'allowContinue',
              a,
              'boolean|null|undefined'
            )
              ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
              : '') +
              '</div></div>')),
          (b = F(b)))
      return b
    },
    oi = function (a, b) {
      var c = a.factorId,
        d = a.phoneNumber
      a = a.B
      pe()
      if (G['firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess'])
        b = G['firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess'](
          { factorId: c, phoneNumber: d, B: a },
          b
        )
      else {
        c = H('string' === typeof c, 'factorId', c, 'string')
        d = H(
          null == d || 'string' === typeof d,
          'phoneNumber',
          d,
          'null|string|undefined'
        )
        a = H(
          null == a || 'boolean' === typeof a,
          'allowContinue',
          a,
          'boolean|null|undefined'
        )
        var e =
          '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'
        switch (t(c) ? c.toString() : c) {
          case 'phone':
            c =
              'The <strong>' +
              ie(c) +
              ' ' +
              ie(d) +
              '</strong> was removed as a second authentication step.'
            e += c
            break
          default:
            e +=
              'The device or app was removed as a second authentication step.'
        }
        e =
          e +
          '</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">' +
          ((a
            ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
            : '') +
            '</div></form></div>')
        b = F(e)
      }
      return b
    },
    pi = function (a, b) {
      a = a || {}
      a = a.B
      pe()
      G['firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure']
        ? (b = G['firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure'](
            { B: a },
            b
          ))
        : ((b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">' +
            ((H(
              null == a || 'boolean' === typeof a,
              'allowContinue',
              a,
              'boolean|null|undefined'
            )
              ? '<div class="firebaseui-form-actions">' + Ph(b) + '</div>'
              : '') +
              '</div></div>')),
          (b = F(b)))
      return b
    },
    qi = function (a, b) {
      a = a.errorMessage
      pe()
      G['firebaseui.auth.soy2.page.unrecoverableError']
        ? (b = G['firebaseui.auth.soy2.page.unrecoverableError'](
            { errorMessage: a },
            b
          ))
        : ((b = H('string' === typeof a, 'errorMessage', a, 'string')),
          (b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' +
            (ie(b) + '</p></div></div>')),
          (b = F(b)))
      return b
    }
  var ri = function (a) {
    N.call(this, ei, void 0, a, 'callback')
  }
  p(ri, N)
  ri.prototype.Fe = function (a, b, c, d) {
    a.apply(null, b).then(c, d)
  }
  var si = function () {
      return this.za('firebaseui-id-submit')
    },
    ti = function () {
      return this.za('firebaseui-id-secondary-link')
    },
    ui = function (a, b) {
      var c = si.call(this)
      Fh(this, c, function (d) {
        a(d)
      })
      ;(c = ti.call(this)) &&
        b &&
        Fh(this, c, function (d) {
          b(d)
        })
    }
  var vi = function (a, b, c, d) {
    N.call(this, ii, { email: a, B: !!c }, d, 'emailChangeRevoke')
    this.Ld = b
    this.Ra = c || null
  }
  p(vi, N)
  vi.prototype.La = function () {
    var a = this
    Fh(this, wi(this), function () {
      a.Ld()
    })
    this.Ra && (this.ec(this.Ra), this.Mc().focus())
    N.prototype.La.call(this)
  }
  vi.prototype.I = function () {
    this.Ld = this.Ra = null
    N.prototype.I.call(this)
  }
  var wi = function (a) {
    return a.za('firebaseui-id-reset-password-link')
  }
  Object.assign(vi.prototype, { Mc: si, wg: ti, ec: ui })
  var O = function (a, b, c, d, e, f) {
    N.call(this, a, b, d, e || 'notice', f)
    this.Ra = c || null
  }
  w(O, N)
  O.prototype.La = function () {
    this.Ra && (this.ec(this.Ra), this.Mc().focus())
    O.aa.La.call(this)
  }
  O.prototype.I = function () {
    this.Ra = null
    O.aa.I.call(this)
  }
  Object.assign(O.prototype, { Mc: si, wg: ti, ec: ui })
  var xi = function (a, b, c, d, e) {
    O.call(this, di, { email: a, B: !!b }, b, e, 'passwordRecoveryEmailSent', {
      vh: c,
      Zg: d,
    })
  }
  w(xi, O)
  var yi = function (a, b) {
    O.call(this, ki, { B: !!a }, a, b, 'emailVerificationSuccess')
  }
  w(yi, O)
  var zi = function (a, b) {
    O.call(this, li, { B: !!a }, a, b, 'emailVerificationFailure')
  }
  w(zi, O)
  var Ai = function (a, b, c) {
    O.call(this, mi, { email: a, B: !!b }, b, c, 'verifyAndChangeEmailSuccess')
  }
  w(Ai, O)
  var Bi = function (a, b) {
    O.call(this, ni, { B: !!a }, a, b, 'verifyAndChangeEmailFailure')
  }
  w(Bi, O)
  var Ci = function (a, b) {
    O.call(this, pi, { B: !!a }, a, b, 'revertSecondFactorAdditionFailure')
  }
  w(Ci, O)
  var Di = function (a, b) {
    O.call(this, gi, { B: !!a }, a, b, 'passwordResetSuccess')
  }
  w(Di, O)
  var Ei = function (a, b) {
    O.call(this, hi, { B: !!a }, a, b, 'passwordResetFailure')
  }
  w(Ei, O)
  var Fi = function (a, b) {
    O.call(this, ji, { B: !!a }, a, b, 'emailChangeRevokeFailure')
  }
  w(Fi, O)
  var Gi = function (a, b) {
    O.call(this, qi, { errorMessage: a }, void 0, b, 'unrecoverableError')
  }
  w(Gi, O)
  var Hi = function () {
      return G['firebaseui.auth.soy2.strings.errorSendPasswordReset']
        ? G['firebaseui.auth.soy2.strings.errorSendPasswordReset'](
            void 0,
            void 0
          )
        : 'Unable to send password reset code to specified email'
    },
    Ii = function () {
      return G['firebaseui.auth.soy2.strings.errorLoginAgain_']
        ? G['firebaseui.auth.soy2.strings.errorLoginAgain_'](null, void 0)
        : 'Please login again to perform this operation'
    }
  var Ji = function () {
      return this.za('firebaseui-id-new-password')
    },
    Ki = function () {
      return this.za('firebaseui-id-password-toggle')
    },
    Li = function () {
      this.Hg = !this.Hg
      var a = Ki.call(this),
        b = Ji.call(this)
      this.Hg
        ? ((b.type = 'text'),
          If(a, 'firebaseui-input-toggle-off'),
          Jf(a, 'firebaseui-input-toggle-on'))
        : ((b.type = 'password'),
          If(a, 'firebaseui-input-toggle-on'),
          Jf(a, 'firebaseui-input-toggle-off'))
      b.focus()
    },
    Mi = function () {
      return this.za('firebaseui-id-new-password-error')
    }
  var Pi = function (a, b, c) {
    N.call(this, fi, { email: a }, c, 'passwordReset')
    this.Ug = b
  }
  p(Pi, N)
  Pi.prototype.La = function () {
    this.Nk()
    this.ec(this.Ug)
    ci(this, this.Jc(), this.Ug)
    this.Jc().focus()
    N.prototype.La.call(this)
  }
  Pi.prototype.I = function () {
    this.Ug = null
    N.prototype.I.call(this)
  }
  Object.assign(Pi.prototype, {
    Jc: Ji,
    oi: Mi,
    Vm: Ki,
    Nk: function () {
      this.Hg = !1
      var a = Ji.call(this)
      a.type = 'password'
      var b = Mi.call(this)
      Bh(this, a, function () {
        Hf(b, 'firebaseui-hidden') ||
          'none' == b.style.display ||
          (Ah(a, !0), If(b, 'firebaseui-hidden'))
      })
      var c = Ki.call(this)
      If(c, 'firebaseui-input-toggle-on')
      Jf(c, 'firebaseui-input-toggle-off')
      Dh(this, a, function () {
        If(c, 'firebaseui-input-toggle-focus')
        Jf(c, 'firebaseui-input-toggle-blur')
      })
      Eh(this, a, function () {
        If(c, 'firebaseui-input-toggle-blur')
        Jf(c, 'firebaseui-input-toggle-focus')
      })
      Fh(this, c, v(Li, this))
    },
    Yj: function () {
      var a = Ji.call(this),
        b = Mi.call(this)
      Kf(a)
        ? (Ah(a, !0), If(b, 'firebaseui-hidden'), (b = !0))
        : (Ah(a, !1),
          Gh(
            b,
            (G['firebaseui.auth.soy2.strings.errorMissingPassword']
              ? G['firebaseui.auth.soy2.strings.errorMissingPassword'](
                  void 0,
                  void 0
                )
              : 'Enter your password'
            ).toString()
          ),
          (b = !1))
      return b ? Kf(a) : null
    },
    Mc: si,
    wg: ti,
    ec: ui,
  })
  var Qi = function (a, b, c, d, e) {
    N.call(
      this,
      oi,
      { factorId: a, phoneNumber: c || null, B: !!d },
      e,
      'revertSecondFactorAdditionSuccess'
    )
    this.Ld = b
    this.Ra = d || null
  }
  p(Qi, N)
  Qi.prototype.La = function () {
    var a = this
    Fh(this, wi(this), function () {
      a.Ld()
    })
    this.Ra && (this.ec(this.Ra), this.Mc().focus())
    N.prototype.La.call(this)
  }
  Qi.prototype.I = function () {
    this.Ld = this.Ra = null
    N.prototype.I.call(this)
  }
  Object.assign(Qi.prototype, { Mc: si, wg: ti, ec: ui })
  var Ri = function () {
    this.blockSize = -1
  }
  var Ui = function (a, b) {
      this.blockSize = -1
      this.blockSize = 64
      this.Ae = q.Uint8Array
        ? new Uint8Array(this.blockSize)
        : Array(this.blockSize)
      this.Lf = this.Oc = 0
      this.J = []
      this.jl = a
      this.Ei = b
      this.cm = q.Int32Array ? new Int32Array(64) : Array(64)
      void 0 === Si && (Si = q.Int32Array ? new Int32Array(Ti) : Ti)
      this.reset()
    },
    Si
  w(Ui, Ri)
  for (var Vi = [], Wi = 0; 63 > Wi; Wi++) Vi[Wi] = 0
  var Xi = [].concat(128, Vi)
  Ui.prototype.reset = function () {
    this.Lf = this.Oc = 0
    this.J = q.Int32Array ? new Int32Array(this.Ei) : vb(this.Ei)
  }
  var Yi = function (a) {
    var b = a.Ae
    x(b.length == a.blockSize)
    for (var c = a.cm, d = 0, e = 0; e < b.length; )
      (c[d++] = (b[e] << 24) | (b[e + 1] << 16) | (b[e + 2] << 8) | b[e + 3]),
        (e = 4 * d)
    for (b = 16; 64 > b; b++) {
      e = c[b - 15] | 0
      d = c[b - 2] | 0
      var f =
          ((c[b - 16] | 0) +
            (((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3))) |
          0,
        g =
          ((c[b - 7] | 0) +
            (((d >>> 17) | (d << 15)) ^
              ((d >>> 19) | (d << 13)) ^
              (d >>> 10))) |
          0
      c[b] = (f + g) | 0
    }
    d = a.J[0] | 0
    e = a.J[1] | 0
    var h = a.J[2] | 0,
      l = a.J[3] | 0,
      m = a.J[4] | 0,
      n = a.J[5] | 0,
      r = a.J[6] | 0
    f = a.J[7] | 0
    for (b = 0; 64 > b; b++) {
      var u =
        ((((d >>> 2) | (d << 30)) ^
          ((d >>> 13) | (d << 19)) ^
          ((d >>> 22) | (d << 10))) +
          ((d & e) ^ (d & h) ^ (e & h))) |
        0
      g = (m & n) ^ (~m & r)
      f =
        (f +
          (((m >>> 6) | (m << 26)) ^
            ((m >>> 11) | (m << 21)) ^
            ((m >>> 25) | (m << 7)))) |
        0
      g = (g + (Si[b] | 0)) | 0
      g = (f + ((g + (c[b] | 0)) | 0)) | 0
      f = r
      r = n
      n = m
      m = (l + g) | 0
      l = h
      h = e
      e = d
      d = (g + u) | 0
    }
    a.J[0] = (a.J[0] + d) | 0
    a.J[1] = (a.J[1] + e) | 0
    a.J[2] = (a.J[2] + h) | 0
    a.J[3] = (a.J[3] + l) | 0
    a.J[4] = (a.J[4] + m) | 0
    a.J[5] = (a.J[5] + n) | 0
    a.J[6] = (a.J[6] + r) | 0
    a.J[7] = (a.J[7] + f) | 0
  }
  Ui.prototype.update = function (a, b) {
    void 0 === b && (b = a.length)
    var c = 0,
      d = this.Oc
    if ('string' === typeof a)
      for (; c < b; )
        (this.Ae[d++] = a.charCodeAt(c++)),
          d == this.blockSize && (Yi(this), (d = 0))
    else if (za(a))
      for (; c < b; ) {
        var e = a[c++]
        if (!('number' == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
          throw Error('message must be a byte array')
        this.Ae[d++] = e
        d == this.blockSize && (Yi(this), (d = 0))
      }
    else throw Error('message must be string or array')
    this.Oc = d
    this.Lf += b
  }
  Ui.prototype.digest = function () {
    var a = [],
      b = 8 * this.Lf
    56 > this.Oc
      ? this.update(Xi, 56 - this.Oc)
      : this.update(Xi, this.blockSize - (this.Oc - 56))
    for (var c = 63; 56 <= c; c--) (this.Ae[c] = b & 255), (b /= 256)
    Yi(this)
    for (c = b = 0; c < this.jl; c++)
      for (var d = 24; 0 <= d; d -= 8) a[b++] = (this.J[c] >> d) & 255
    return a
  }
  var Ti = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]
  var $i = function () {
    Ui.call(this, 8, Zi)
  }
  w($i, Ui)
  var Zi = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ]
  var aj = function () {}
  aj.prototype.Jh = null
  var bj = function (a) {
    return a.Jh || (a.Jh = a.Ve())
  }
  var cj,
    dj = function () {}
  w(dj, aj)
  dj.prototype.rd = function () {
    var a = ej(this)
    return a ? new ActiveXObject(a) : new XMLHttpRequest()
  }
  dj.prototype.Ve = function () {
    var a = {}
    ej(this) && ((a[0] = !0), (a[1] = !0))
    return a
  }
  var ej = function (a) {
    if (
      !a.Ci &&
      'undefined' == typeof XMLHttpRequest &&
      'undefined' != typeof ActiveXObject
    ) {
      for (
        var b = [
            'MSXML2.XMLHTTP.6.0',
            'MSXML2.XMLHTTP.3.0',
            'MSXML2.XMLHTTP',
            'Microsoft.XMLHTTP',
          ],
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c]
        try {
          return new ActiveXObject(d), (a.Ci = d)
        } catch (e) {}
      }
      throw Error(
        'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
      )
    }
    return a.Ci
  }
  cj = new dj()
  var fj = function () {}
  w(fj, aj)
  fj.prototype.rd = function () {
    var a = new XMLHttpRequest()
    if ('withCredentials' in a) return a
    if ('undefined' != typeof XDomainRequest) return new gj()
    throw Error('Unsupported browser')
  }
  fj.prototype.Ve = function () {
    return {}
  }
  var gj = function () {
    this.Za = new XDomainRequest()
    this.readyState = 0
    this.onreadystatechange = null
    this.responseType = this.responseText = this.response = ''
    this.status = -1
    this.responseXML = null
    this.statusText = ''
    this.Za.onload = v(this.yk, this)
    this.Za.onerror = v(this.wi, this)
    this.Za.onprogress = v(this.zk, this)
    this.Za.ontimeout = v(this.Dk, this)
  }
  k = gj.prototype
  k.open = function (a, b, c) {
    if (null != c && !c) throw Error('Only async requests are supported.')
    this.Za.open(a, b)
  }
  k.send = function (a) {
    if (a)
      if ('string' == typeof a) this.Za.send(a)
      else throw Error('Only string data is supported')
    else this.Za.send()
  }
  k.abort = function () {
    this.Za.abort()
  }
  k.setRequestHeader = function () {}
  k.getResponseHeader = function (a) {
    return 'content-type' == a.toLowerCase() ? this.Za.contentType : ''
  }
  k.yk = function () {
    this.status = 200
    this.response = this.responseText = this.Za.responseText
    hj(this, 4)
  }
  k.wi = function () {
    this.status = 500
    this.response = this.responseText = ''
    hj(this, 4)
  }
  k.Dk = function () {
    this.wi()
  }
  k.zk = function () {
    this.status = 200
    hj(this, 1)
  }
  var hj = function (a, b) {
    a.readyState = b
    if (a.onreadystatechange) a.onreadystatechange()
  }
  gj.prototype.getAllResponseHeaders = function () {
    return 'content-type: ' + this.Za.contentType
  }
  var ij = function (a) {
    this.ne = a.fm || null
    this.fe = a.cn || !1
    this.yc = this.Ub = void 0
  }
  w(ij, aj)
  ij.prototype.rd = function () {
    var a = new jj(this.ne, this.fe)
    this.Ub && a.kh(this.Ub)
    this.yc && a.sj(this.yc)
    return a
  }
  ij.prototype.Ve = (function (a) {
    return function () {
      return a
    }
  })({})
  ij.prototype.kh = function (a) {
    this.Ub = a
  }
  ij.prototype.sj = function (a) {
    this.yc = a
  }
  var jj = function (a, b) {
    J.call(this)
    this.ne = a
    this.fe = b
    this.yc = this.Ub = void 0
    this.status = this.readyState = 0
    this.responseType = this.responseText = this.response = this.statusText = ''
    this.onreadystatechange = this.responseXML = null
    this.gh = new Headers()
    this.fd = null
    this.Qi = 'GET'
    this.sc = ''
    this.eb = !1
    this.U = Fe(Ge(), 'goog.net.FetchXmlHttp').Oi
    this.uh = this.sd = this.Ge = null
  }
  w(jj, J)
  jj.prototype.open = function (a, b, c) {
    x(!!c, 'Only async requests are supported.')
    if (0 != this.readyState)
      throw (this.abort(), Error('Error reopening a connection'))
    this.Qi = a
    this.sc = b
    this.readyState = 1
    kj(this)
  }
  jj.prototype.send = function (a) {
    if (1 != this.readyState)
      throw (this.abort(), Error('need to call open() first. '))
    this.eb = !0
    var b = {
      headers: this.gh,
      method: this.Qi,
      credentials: this.Ub,
      cache: this.yc,
    }
    a && (b.body = a)
    ;(this.ne || q)
      .fetch(new Request(this.sc, b))
      .then(this.Ck.bind(this), this.Me.bind(this))
  }
  jj.prototype.abort = function () {
    var a = this
    this.response = this.responseText = ''
    this.gh = new Headers()
    this.status = 0
    this.sd &&
      this.sd.cancel('Request was aborted.').catch(function () {
        var b = a.U
        b && He(b, ue, 'Fetch reader cancellation error.')
      })
    1 <= this.readyState &&
      this.eb &&
      4 != this.readyState &&
      ((this.eb = !1), lj(this))
    this.readyState = 0
  }
  jj.prototype.Ck = function (a) {
    if (
      this.eb &&
      ((this.Ge = a),
      this.fd ||
        ((this.status = this.Ge.status),
        (this.statusText = this.Ge.statusText),
        (this.fd = a.headers),
        (this.readyState = 2),
        kj(this)),
      this.eb && ((this.readyState = 3), kj(this), this.eb))
    )
      if ('arraybuffer' === this.responseType)
        a.arrayBuffer().then(this.Ak.bind(this), this.Me.bind(this))
      else if ('undefined' !== typeof q.ReadableStream && 'body' in a) {
        this.sd = a.body.getReader()
        if (this.fe) {
          if (this.responseType)
            throw Error(
              'responseType must be empty for "streamBinaryChunks" mode responses.'
            )
          this.response = []
        } else
          (this.response = this.responseText = ''),
            (this.uh = new TextDecoder())
        mj(this)
      } else a.text().then(this.Bk.bind(this), this.Me.bind(this))
  }
  var mj = function (a) {
    a.sd.read().then(a.vk.bind(a)).catch(a.Me.bind(a))
  }
  jj.prototype.vk = function (a) {
    if (this.eb) {
      if (this.fe && a.value) this.response.push(a.value)
      else if (!this.fe) {
        var b = a.value ? a.value : new Uint8Array(0)
        if ((b = this.uh.decode(b, { stream: !a.done })))
          this.response = this.responseText += b
      }
      a.done ? lj(this) : kj(this)
      3 == this.readyState && mj(this)
    }
  }
  jj.prototype.Bk = function (a) {
    this.eb && ((this.response = this.responseText = a), lj(this))
  }
  jj.prototype.Ak = function (a) {
    this.eb && ((this.response = a), lj(this))
  }
  jj.prototype.Me = function () {
    var a = this.U
    a && He(a, ue, 'Failed to fetch url ' + this.sc)
    this.eb && lj(this)
  }
  var lj = function (a) {
    a.readyState = 4
    a.Ge = null
    a.sd = null
    a.uh = null
    kj(a)
  }
  k = jj.prototype
  k.setRequestHeader = function (a, b) {
    this.gh.append(a, b)
  }
  k.getResponseHeader = function (a) {
    return this.fd
      ? this.fd.get(a.toLowerCase()) || ''
      : ((a = this.U) &&
          He(
            a,
            ue,
            'Attempting to get response header but no headers have been received for url: ' +
              this.sc
          ),
        '')
  }
  k.getAllResponseHeaders = function () {
    if (!this.fd) {
      var a = this.U
      a &&
        He(
          a,
          ue,
          'Attempting to get all response headers but no headers have been received for url: ' +
            this.sc
        )
      return ''
    }
    a = []
    for (var b = this.fd.entries(), c = b.next(); !c.done; )
      (c = c.value), a.push(c[0] + ': ' + c[1]), (c = b.next())
    return a.join('\r\n')
  }
  k.kh = function (a) {
    this.Ub = a
  }
  k.sj = function (a) {
    this.yc = a
  }
  var kj = function (a) {
    a.onreadystatechange && a.onreadystatechange.call(a)
  }
  Object.defineProperty(jj.prototype, 'withCredentials', {
    get: function () {
      return 'include' === this.Ub
    },
    set: function (a) {
      this.kh(a ? 'include' : 'same-origin')
    },
  })
  function nj() {} /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
  var oj = function (a, b) {
    this.Bf = []
    this.Ti = a
    this.Yh = b || null
    this.Ed = this.Gc = !1
    this.ua = void 0
    this.qh = this.Gh = this.cg = !1
    this.Mf = 0
    this.T = null
    this.dg = 0
  }
  w(oj, nj)
  oj.prototype.cancel = function (a) {
    if (this.Gc) this.ua instanceof oj && this.ua.cancel()
    else {
      if (this.T) {
        var b = this.T
        delete this.T
        a ? b.cancel(a) : (b.dg--, 0 >= b.dg && b.cancel())
      }
      this.Ti ? this.Ti.call(this.Yh, this) : (this.qh = !0)
      this.Gc || pj(this, new qj(this))
    }
  }
  oj.prototype.Sh = function (a, b) {
    this.cg = !1
    rj(this, a, b)
  }
  var rj = function (a, b, c) {
      a.Gc = !0
      a.ua = c
      a.Ed = !b
      sj(a)
    },
    uj = function (a) {
      if (a.Gc) {
        if (!a.qh) throw new tj(a)
        a.qh = !1
      }
    }
  oj.prototype.callback = function (a) {
    uj(this)
    vj(a)
    rj(this, !0, a)
  }
  var pj = function (a, b) {
      uj(a)
      vj(b)
      rj(a, !1, b)
    },
    vj = function (a) {
      x(
        !(a instanceof oj),
        'An execution sequence may not be initiated with a blocking Deferred.'
      )
    }
  oj.prototype.addCallback = function (a, b) {
    return wj(this, a, null, b)
  }
  var xj = function (a, b) {
      wj(a, null, b)
    },
    wj = function (a, b, c, d) {
      x(!a.Gh, 'Blocking Deferreds can not be re-used')
      a.Bf.push([b, c, d])
      a.Gc && sj(a)
      return a
    }
  oj.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new K(function (g, h) {
        e = g
        d = h
      })
    wj(
      this,
      e,
      function (g) {
        g instanceof qj ? f.cancel() : d(g)
        return yj
      },
      this
    )
    return f.then(a, b, c)
  }
  oj.prototype.$goog_Thenable = !0
  var zj = function (a) {
      return qb(a.Bf, function (b) {
        return 'function' === typeof b[1]
      })
    },
    yj = {},
    sj = function (a) {
      if (a.Mf && a.Gc && zj(a)) {
        var b = a.Mf,
          c = Aj[b]
        c && (q.clearTimeout(c.Aa), delete Aj[b])
        a.Mf = 0
      }
      a.T && (a.T.dg--, delete a.T)
      b = a.ua
      for (var d = (c = !1); a.Bf.length && !a.cg; ) {
        var e = a.Bf.shift(),
          f = e[0],
          g = e[1]
        e = e[2]
        if ((f = a.Ed ? g : f))
          try {
            var h = f.call(e || a.Yh, b)
            h === yj && (h = void 0)
            void 0 !== h &&
              ((a.Ed = a.Ed && (h == b || h instanceof Error)), (a.ua = b = h))
            if (
              Rg(b) ||
              ('function' === typeof q.Promise && b instanceof q.Promise)
            )
              (d = !0), (a.cg = !0)
          } catch (l) {
            ;(b = l), (a.Ed = !0), zj(a) || (c = !0)
          }
      }
      a.ua = b
      d &&
        ((h = v(a.Sh, a, !0)),
        (d = v(a.Sh, a, !1)),
        b instanceof oj ? (wj(b, h, d), (b.Gh = !0)) : b.then(h, d))
      c && ((b = new Bj(b)), (Aj[b.Aa] = b), (a.Mf = b.Aa))
    },
    tj = function () {
      Fa.call(this)
    }
  w(tj, Fa)
  tj.prototype.message = 'Deferred has already fired'
  tj.prototype.name = 'AlreadyCalledError'
  var qj = function () {
    Fa.call(this)
  }
  w(qj, Fa)
  qj.prototype.message = 'Deferred was canceled'
  qj.prototype.name = 'CanceledError'
  var Bj = function (a) {
    this.Aa = q.setTimeout(v(this.Wl, this), 0)
    this.ha = a
  }
  Bj.prototype.Wl = function () {
    x(Aj[this.Aa], 'Cannot throw an error that is not scheduled.')
    delete Aj[this.Aa]
    throw this.ha
  }
  var Aj = {}
  var Gj = function (a) {
      var b = {},
        c = b.document || document,
        d = tc(a).toString(),
        e = new Le(c).createElement('SCRIPT'),
        f = { nj: e, ie: void 0 },
        g = new oj(Cj, f),
        h = null,
        l = null != b.timeout ? b.timeout : 5e3
      0 < l &&
        ((h = window.setTimeout(function () {
          Dj(e, !0)
          pj(g, new Ej(1, 'Timeout reached for loading script ' + d))
        }, l)),
        (f.ie = h))
      e.onload = e.onreadystatechange = function () {
        ;(e.readyState &&
          'loaded' != e.readyState &&
          'complete' != e.readyState) ||
          (Dj(e, b.Mm || !1, h), g.callback(null))
      }
      e.onerror = function () {
        Dj(e, !0, h)
        pj(g, new Ej(0, 'Error while loading script ' + d))
      }
      f = b.attributes || {}
      kc(f, { type: 'text/javascript', charset: 'UTF-8' })
      Ue(e, f)
      Sc(e, a)
      Fj(c).appendChild(e)
      return g
    },
    Fj = function (a) {
      var b = (a || document).getElementsByTagName('HEAD')
      return b && 0 !== b.length ? b[0] : a.documentElement
    },
    Cj = function () {
      if (this && this.nj) {
        var a = this.nj
        a && 'SCRIPT' == a.tagName && Dj(a, !0, this.ie)
      }
    },
    Dj = function (a, b, c) {
      null != c && q.clearTimeout(c)
      a.onload = function () {}
      a.onerror = function () {}
      a.onreadystatechange = function () {}
      b &&
        window.setTimeout(function () {
          af(a)
        }, 0)
    },
    Ej = function (a, b) {
      var c = 'Jsloader error (code #' + a + ')'
      b && (c += ': ' + b)
      Fa.call(this, c)
      this.code = a
    }
  w(Ej, Fa)
  var Hj = function (a) {
    J.call(this)
    this.headers = new Map()
    this.Sf = a || null
    this.yb = !1
    this.Rf = this.l = null
    this.Jd = this.Mi = this.bf = ''
    this.cc = this.Dg = this.Ue = this.pg = !1
    this.rc = 0
    this.Jf = null
    this.vf = ''
    this.Nf = this.wl = this.Oj = !1
    this.Yf = this.wh = null
  }
  w(Hj, J)
  Hj.prototype.U = Fe(Ge(), 'goog.net.XhrIo').Oi
  var Ij = /^https?$/i,
    Jj = ['POST', 'PUT']
  Hj.prototype.setTrustToken = function (a) {
    this.wh = a
  }
  Hj.prototype.setAttributionReporting = function (a) {
    this.Yf = a
  }
  Hj.prototype.send = function (a, b, c, d) {
    if (this.l)
      throw Error(
        '[goog.net.XhrIo] Object is active with another request=' +
          this.bf +
          '; newUri=' +
          a
      )
    b = b ? b.toUpperCase() : 'GET'
    this.bf = a
    this.Jd = ''
    this.Mi = b
    this.pg = !1
    this.yb = !0
    this.l = this.Sf ? this.Sf.rd() : cj.rd()
    this.Rf = this.Sf ? bj(this.Sf) : bj(cj)
    this.l.onreadystatechange = v(this.aj, this)
    this.wl &&
      'onprogress' in this.l &&
      ((this.l.onprogress = v(function (g) {
        this.Zi(g, !0)
      }, this)),
      this.l.upload && (this.l.upload.onprogress = v(this.Zi, this)))
    try {
      Je(this.U, Kj(this, 'Opening Xhr')),
        (this.Dg = !0),
        this.l.open(b, String(a), !0),
        (this.Dg = !1)
    } catch (g) {
      Je(this.U, Kj(this, 'Error opening Xhr: ' + g.message))
      this.ha(5, g)
      return
    }
    a = c || ''
    c = new Map(this.headers)
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype)
        for (var e in d) c.set(e, d[e])
      else if ('function' === typeof d.keys && 'function' === typeof d.get) {
        e = ja(d.keys())
        for (var f = e.next(); !f.done; f = e.next())
          (f = f.value), c.set(f, d.get(f))
      } else throw Error('Unknown input type for opt_headers: ' + String(d))
    d = Array.from(c.keys()).find(function (g) {
      return 'content-type' == g.toLowerCase()
    })
    e = q.FormData && a instanceof q.FormData
    !rb(Jj, b) ||
      d ||
      e ||
      c.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
    b = ja(c)
    for (d = b.next(); !d.done; d = b.next())
      (c = ja(d.value)),
        (d = c.next().value),
        (c = c.next().value),
        this.l.setRequestHeader(d, c)
    this.vf && (this.l.responseType = this.vf)
    'withCredentials' in this.l &&
      this.l.withCredentials !== this.Oj &&
      (this.l.withCredentials = this.Oj)
    if ('setTrustToken' in this.l && this.wh)
      try {
        this.l.setTrustToken(this.wh)
      } catch (g) {
        Je(this.U, Kj(this, 'Error SetTrustToken: ' + g.message))
      }
    if ('setAttributionReporting' in this.l && this.Yf)
      try {
        this.l.setAttributionReporting(this.Yf)
      } catch (g) {
        Je(this.U, Kj(this, 'Error SetAttributionReporting: ' + g.message))
      }
    try {
      Lj(this),
        0 < this.rc &&
          ((this.Nf = Mj(this.l)),
          Je(
            this.U,
            Kj(
              this,
              'Will abort after ' +
                this.rc +
                'ms if incomplete, xhr2 ' +
                this.Nf
            )
          ),
          this.Nf
            ? ((this.l.timeout = this.rc),
              (this.l.ontimeout = v(this.ie, this)))
            : (this.Jf = lh(this.ie, this.rc, this))),
        Je(this.U, Kj(this, 'Sending request')),
        (this.Ue = !0),
        this.l.send(a),
        (this.Ue = !1)
    } catch (g) {
      Je(this.U, Kj(this, 'Send error: ' + g.message)), this.ha(5, g)
    }
  }
  var Mj = function (a) {
    return yb && 'number' === typeof a.timeout && void 0 !== a.ontimeout
  }
  Hj.prototype.ie = function () {
    'undefined' != typeof wa &&
      this.l &&
      ((this.Jd = 'Timed out after ' + this.rc + 'ms, aborting'),
      Je(this.U, Kj(this, this.Jd)),
      this.dispatchEvent('timeout'),
      this.abort(8))
  }
  Hj.prototype.ha = function (a, b) {
    this.yb = !1
    this.l && ((this.cc = !0), this.l.abort(), (this.cc = !1))
    this.Jd = b
    Nj(this)
    Oj(this)
  }
  var Nj = function (a) {
    a.pg || ((a.pg = !0), a.dispatchEvent('complete'), a.dispatchEvent('error'))
  }
  Hj.prototype.abort = function () {
    this.l &&
      this.yb &&
      (Je(this.U, Kj(this, 'Aborting')),
      (this.yb = !1),
      (this.cc = !0),
      this.l.abort(),
      (this.cc = !1),
      this.dispatchEvent('complete'),
      this.dispatchEvent('abort'),
      Oj(this))
  }
  Hj.prototype.I = function () {
    this.l &&
      (this.yb &&
        ((this.yb = !1), (this.cc = !0), this.l.abort(), (this.cc = !1)),
      Oj(this, !0))
    Hj.aa.I.call(this)
  }
  Hj.prototype.aj = function () {
    this.isDisposed() || (this.Dg || this.Ue || this.cc ? Pj(this) : this.ml())
  }
  Hj.prototype.ml = function () {
    Pj(this)
  }
  var Pj = function (a) {
    if (a.yb && 'undefined' != typeof wa)
      if (a.Rf[1] && 4 == Qj(a) && 2 == Rj(a))
        Je(a.U, Kj(a, 'Local request error detected and ignored'))
      else if (a.Ue && 4 == Qj(a)) lh(a.aj, 0, a)
      else if ((a.dispatchEvent('readystatechange'), 4 == Qj(a))) {
        Je(a.U, Kj(a, 'Request complete'))
        a.yb = !1
        try {
          var b = Rj(a)
          a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0
              break a
            default:
              c = !1
          }
          var d
          if (!(d = c)) {
            var e
            if ((e = 0 === b)) {
              var f = String(a.bf).match($c)[1] || null
              !f &&
                q.self &&
                q.self.location &&
                (f = q.self.location.protocol.slice(0, -1))
              e = !Ij.test(f ? f.toLowerCase() : '')
            }
            d = e
          }
          if (d) a.dispatchEvent('complete'), a.dispatchEvent('success')
          else {
            try {
              var g = 2 < Qj(a) ? a.l.statusText : ''
            } catch (h) {
              Je(a.U, 'Can not get status: ' + h.message), (g = '')
            }
            a.Jd = g + ' [' + Rj(a) + ']'
            Nj(a)
          }
        } finally {
          Oj(a)
        }
      }
  }
  Hj.prototype.Zi = function (a, b) {
    x(
      'progress' === a.type,
      'goog.net.EventType.PROGRESS is of the same type as raw XHR progress.'
    )
    this.dispatchEvent(Sj(a, 'progress'))
    this.dispatchEvent(Sj(a, b ? 'downloadprogress' : 'uploadprogress'))
  }
  var Sj = function (a, b) {
      return {
        type: b,
        lengthComputable: a.lengthComputable,
        loaded: a.loaded,
        total: a.total,
      }
    },
    Oj = function (a, b) {
      if (a.l) {
        Lj(a)
        var c = a.l,
          d = a.Rf[0] ? function () {} : null
        a.l = null
        a.Rf = null
        b || a.dispatchEvent('ready')
        try {
          c.onreadystatechange = d
        } catch (e) {
          Ie(
            a.U,
            'Problem encountered resetting onreadystatechange: ' + e.message
          )
        }
      }
    },
    Lj = function (a) {
      a.l && a.Nf && (a.l.ontimeout = null)
      a.Jf && (q.clearTimeout(a.Jf), (a.Jf = null))
    }
  Hj.prototype.isActive = function () {
    return !!this.l
  }
  var Qj = function (a) {
      return a.l ? a.l.readyState : 0
    },
    Rj = function (a) {
      try {
        return 2 < Qj(a) ? a.l.status : -1
      } catch (b) {
        return -1
      }
    },
    Tj = function (a) {
      try {
        return a.l ? a.l.responseText : ''
      } catch (b) {
        return Je(a.U, 'Can not get responseText: ' + b.message), ''
      }
    }
  Hj.prototype.getResponse = function () {
    try {
      if (!this.l) return null
      if ('response' in this.l) return this.l.response
      switch (this.vf) {
        case '':
        case 'text':
          return this.l.responseText
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in this.l)
            return this.l.mozResponseArrayBuffer
      }
      Ie(
        this.U,
        'Response type ' + this.vf + ' is not supported on this browser'
      )
      return null
    } catch (a) {
      return Je(this.U, 'Can not get response: ' + a.message), null
    }
  }
  Hj.prototype.getResponseHeader = function (a) {
    if (this.l && 4 == Qj(this))
      return (a = this.l.getResponseHeader(a)), null === a ? void 0 : a
  }
  Hj.prototype.getAllResponseHeaders = function () {
    return this.l && 2 <= Qj(this) ? this.l.getAllResponseHeaders() || '' : ''
  }
  var Kj = function (a, b) {
    return b + ' [' + a.Mi + ' ' + a.bf + ' ' + Rj(a) + ']'
  }
  var Uj = {
      im: {
        He: 'https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
        xf: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
        Qe: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
        id: 'b',
      },
      Bm: {
        He: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
        xf: 'https://securetoken.googleapis.com/v1/token',
        Qe: 'https://identitytoolkit.googleapis.com/v2/',
        id: 'p',
      },
      Fm: {
        He: 'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
        xf: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
        Qe: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
        id: 's',
      },
      Hm: {
        He: 'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
        xf: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
        Qe: 'https://test-identitytoolkit.sandbox.googleapis.com/v2/',
        id: 't',
      },
    },
    Vj = function (a) {
      for (var b in Uj)
        if (Uj[b].id === a)
          return (
            (a = Uj[b]),
            {
              firebaseEndpoint: a.He,
              secureTokenEndpoint: a.xf,
              identityPlatformEndpoint: a.Qe,
            }
          )
      return null
    },
    Wj
  Wj = Vj('__EID__') ? '__EID__' : void 0
  var Yj = function () {
      var a = Xj()
      return (yb && !!Nb && 11 == Nb) || /Edge\/\d+/.test(a)
    },
    Zj = function () {
      return (
        (q.window && q.window.location.href) ||
        (self && self.location && self.location.href) ||
        ''
      )
    },
    ak = function (a, b) {
      b = b || q.window
      var c = 'about:blank'
      a && (c = xc(Vd(a)))
      b.location.href = c
    },
    bk = function (a, b, c) {
      b = b || q.window
      c ? b.location.replace(a) : b.location.replace(xc(Vd(a)))
    },
    ck = function (a, b) {
      var c = [],
        d
      for (d in a)
        d in b
          ? typeof a[d] != typeof b[d]
            ? c.push(d)
            : 'object' == typeof a[d] && null != a[d] && null != b[d]
              ? 0 < ck(a[d], b[d]).length && c.push(d)
              : a[d] !== b[d] && c.push(d)
          : c.push(d)
      for (var e in b) e in a || c.push(e)
      return c
    },
    ek = function () {
      var a = Xj()
      a =
        'Chrome' != dk(a)
          ? null
          : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length
            ? parseInt(a[1], 10)
            : null
      return a && 30 > a ? !1 : !yb || !Nb || 9 < Nb
    },
    fk = function (a) {
      a = (a || Xj()).toLowerCase()
      return a.match(/android/) ||
        a.match(/webos/) ||
        a.match(/iphone|ipad|ipod/) ||
        a.match(/blackberry/) ||
        a.match(/windows phone/) ||
        a.match(/iemobile/)
        ? !0
        : !1
    },
    gk = function (a) {
      a = a || q.window
      try {
        a.close()
      } catch (b) {}
    },
    hk = function (a, b, c) {
      var d = Math.floor(1e9 * Math.random()).toString()
      b = b || 500
      c = c || 600
      var e = (window.screen.availHeight - c) / 2,
        f = (window.screen.availWidth - b) / 2
      b = {
        width: b,
        height: c,
        top: 0 < e ? e : 0,
        left: 0 < f ? f : 0,
        location: !0,
        resizable: !0,
        statusbar: !0,
        toolbar: !1,
      }
      c = Xj().toLowerCase()
      d && ((b.target = d), y(c, 'crios/') && (b.target = '_blank'))
      'Firefox' == dk(Xj()) &&
        ((a = a || 'http://localhost'), (b.scrollbars = !0))
      e = a || ''
      b || (b = {})
      a = window
      d =
        e instanceof wc
          ? e
          : Vd('undefined' != typeof e.href ? e.href : String(e))
      f = void 0 !== self.crossOriginIsolated
      c = 'strict-origin-when-cross-origin'
      window.Request && (c = new Request('/').referrerPolicy)
      var g = 'unsafe-url' === c
      c = b.noreferrer
      if (f && c) {
        if (g)
          throw Error(
            'Cannot use the noreferrer option on a page that sets a referrer-policy of `unsafe-url` in modern browsers!'
          )
        c = !1
      }
      e = b.target || e.target
      f = []
      for (h in b)
        switch (h) {
          case 'width':
          case 'height':
          case 'top':
          case 'left':
            f.push(h + '=' + b[h])
            break
          case 'target':
          case 'noopener':
          case 'noreferrer':
            break
          default:
            f.push(h + '=' + (b[h] ? 1 : 0))
        }
      var h = f.join(',')
      ;((z('iPhone') && !z('iPod') && !z('iPad')) || z('iPad') || z('iPod')) &&
      a.navigator &&
      a.navigator.standalone &&
      e &&
      '_self' != e
        ? ((h = Xe(document, 'A')),
          cc(h, 'A'),
          (d = d instanceof wc ? d : Ac(d)),
          (h.href = xc(d)),
          (h.target = e),
          c && (h.rel = 'noreferrer'),
          (d = document.createEvent('MouseEvent')),
          d.initMouseEvent('click', !0, !0, a, 1),
          h.dispatchEvent(d),
          (h = {}))
        : c
          ? ((h = Tc('', a, e, h)),
            (a = xc(d)),
            h &&
              (Ab && y(a, ';') && (a = "'" + a.replace(/'/g, '%27') + "'"),
              (h.opener = null),
              '' === a && (a = "javascript:''"),
              (a =
                '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                Za(a) +
                '">'),
              Pc('b/12014412, meta tag with sanitized URL'),
              (a = Lc(a)),
              (d = h.document) && d.write && (d.write(Kc(a)), d.close())))
          : ((h = Tc(d, a, e, h)) && b.noopener && (h.opener = null),
            h && b.noreferrer && (h.opener = null))
      if (h)
        try {
          h.focus()
        } catch (l) {}
      return h
    },
    ik = function () {
      var a = Xj().match(/OS (\d+)_.*CriOS\/(\d+)\./i)
      return a && 2 < a.length
        ? 10 <= parseInt(a[1], 10) && 55 <= parseInt(a[2], 10)
        : !1
    },
    jk = function (a) {
      return new K(function (b) {
        var c = function () {
          mh(2e3).then(function () {
            if (!a || a.closed) b()
            else return c()
          })
        }
        return c()
      })
    },
    lk = function (a, b) {
      var c = E(b)
      b = c.ma
      c = c.ga
      for (var d = 0; d < a.length; d++) {
        var e = a[d]
        0 == e.indexOf('chrome-extension://')
          ? (e = E(e).ga == c && 'chrome-extension' == b)
          : 'http' != b && 'https' != b
            ? (e = !1)
            : kk.test(e)
              ? (e = c == e)
              : ((e = e.split('.').join('\\.')),
                (e = new RegExp('^(.+\\.' + e + '|' + e + ')$', 'i').test(c)))
        if (e) return !0
      }
      return !1
    },
    kk = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    mk = /^[^@]+@[^@]+$/,
    nk = function () {
      var a = null
      return new K(function (b) {
        'complete' == q.document.readyState
          ? b()
          : ((a = function () {
              b()
            }),
            cg(window, 'load', a))
      }).h(function (b) {
        jg(window, 'load', a)
        throw b
      })
    },
    pk = function () {
      return ok()
        ? nk().then(function () {
            return new K(function (a, b) {
              var c = q.document,
                d = setTimeout(function () {
                  b(Error('Cordova framework is not ready.'))
                }, 1e3)
              c.addEventListener(
                'deviceready',
                function () {
                  clearTimeout(d)
                  a()
                },
                !1
              )
            })
          })
        : M(Error('Cordova must run in an Android or iOS file scheme.'))
    },
    ok = function () {
      var a = Xj()
      return !(
        ('file:' !== qk() && 'ionic:' !== qk()) ||
        !a.toLowerCase().match(/iphone|ipad|ipod|android/)
      )
    },
    rk = function (a) {
      a = a || q.window
      try {
        return !(!a || a == a.top)
      } catch (b) {
        return !1
      }
    },
    sk = function () {
      var a = q.window
      try {
        var b = a && a.opener
        return !(!b || !rk(b))
      } catch (c) {
        return !1
      }
    },
    tk = function () {
      return (
        'undefined' !== typeof q.WorkerGlobalScope &&
        'function' === typeof q.importScripts
      )
    },
    uk = function () {
      return firebase.INTERNAL.hasOwnProperty('reactNative')
        ? 'ReactNative'
        : firebase.INTERNAL.hasOwnProperty('node')
          ? 'Node'
          : tk()
            ? 'Worker'
            : 'Browser'
    },
    vk = function () {
      var a = uk()
      return 'ReactNative' === a || 'Node' === a
    },
    wk = function () {
      for (var a = 50, b = []; 0 < a; )
        b.push(
          '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
            Math.floor(62 * Math.random())
          )
        ),
          a--
      return b.join('')
    },
    dk = function (a) {
      var b = a.toLowerCase()
      if (y(b, 'opera/') || y(b, 'opr/') || y(b, 'opios/')) return 'Opera'
      if (y(b, 'iemobile')) return 'IEMobile'
      if (y(b, 'msie') || y(b, 'trident/')) return 'IE'
      if (y(b, 'edge/')) return 'Edge'
      if (y(b, 'firefox/')) return 'Firefox'
      if (y(b, 'silk/')) return 'Silk'
      if (y(b, 'blackberry')) return 'Blackberry'
      if (y(b, 'webos')) return 'Webos'
      if (
        !y(b, 'safari/') ||
        y(b, 'chrome/') ||
        y(b, 'crios/') ||
        y(b, 'android')
      )
        if ((!y(b, 'chrome/') && !y(b, 'crios/')) || y(b, 'edge/')) {
          if (y(b, 'android')) return 'Android'
          if (
            (a = a.match(RegExp('([a-zA-Z\\d\\.]+)/[a-zA-Z\\d\\.]*$'))) &&
            2 == a.length
          )
            return a[1]
        } else return 'Chrome'
      else return 'Safari'
      return 'Other'
    },
    xk = { km: 'FirebaseCore-web', mm: 'FirebaseUI-web', tm: 'gcip-iap' },
    yk = function (a, b, c) {
      c = c || []
      var d = [],
        e = {},
        f
      for (f in xk) e[xk[f]] = !0
      for (f = 0; f < c.length; f++)
        'undefined' !== typeof e[c[f]] && (delete e[c[f]], d.push(c[f]))
      d.sort()
      c = d
      c.length || (c = ['FirebaseCore-web'])
      d = uk()
      return (
        ('Browser' === d ? dk(Xj()) : 'Worker' === d ? dk(Xj()) + '-' + d : d) +
        '/' +
        a +
        '/' +
        b +
        '/' +
        c.join(',')
      )
    },
    Xj = function () {
      return (q.navigator && q.navigator.userAgent) || ''
    },
    P = function (a, b) {
      a = a.split('.')
      b = b || q
      var c
      for (c = 0; c < a.length && 'object' == typeof b && null != b; c++)
        b = b[a[c]]
      c != a.length && (b = void 0)
      return b
    },
    Ak = function () {
      try {
        var a = q.localStorage,
          b = zk()
        if (a)
          return a.setItem(b, '1'), a.removeItem(b), Yj() ? !!q.indexedDB : !0
      } catch (c) {
        return tk() && !!q.indexedDB
      }
      return !1
    },
    Ck = function () {
      return (
        (Bk() || 'chrome-extension:' === qk() || ok()) && !vk() && Ak() && !tk()
      )
    },
    Bk = function () {
      return 'http:' === qk() || 'https:' === qk()
    },
    qk = function () {
      return (q.location && q.location.protocol) || null
    },
    Dk = function (a) {
      a = a || Xj()
      return fk(a) || 'Firefox' == dk(a) ? !1 : !0
    },
    Ek = function (a) {
      return 'undefined' === typeof a ? null : JSON.stringify(a)
    },
    Fk = function (a) {
      var b = {},
        c
      for (c in a)
        a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c])
      return b
    },
    Gk = function (a, b) {
      a = ic(a)
      for (var c = 0; c < b.length; c++) {
        var d = b[c]
        d in a && delete a[d]
      }
      return a
    },
    Hk = function (a) {
      if (null !== a) return JSON.parse(a)
    },
    zk = function (a) {
      return a ? a : '' + Math.floor(1e9 * Math.random()).toString()
    },
    Ik = function (a) {
      a = a || Xj()
      return 'Safari' == dk(a) || a.toLowerCase().match(/iphone|ipad|ipod/)
        ? !1
        : !0
    },
    Jk = function () {
      var a = q.___jsl
      if (a && a.H)
        for (var b in a.H)
          if (
            ((a.H[b].r = a.H[b].r || []),
            (a.H[b].L = a.H[b].L || []),
            (a.H[b].r = a.H[b].L.concat()),
            a.CP)
          )
            for (var c = 0; c < a.CP.length; c++) a.CP[c] = null
    },
    Kk = function (a, b) {
      if (a > b) throw Error('Short delay should be less than long delay!')
      this.wj = a
      this.gl = b
      a = Xj()
      b = uk()
      this.Tk = fk(a) || 'ReactNative' === b
    }
  Kk.prototype.get = function () {
    var a = q.navigator
    return (
      a &&
      'boolean' === typeof a.onLine &&
      (Bk() ||
        'chrome-extension:' === qk() ||
        'undefined' !== typeof a.connection)
        ? a.onLine
        : 1
    )
      ? this.Tk
        ? this.gl
        : this.wj
      : Math.min(5e3, this.wj)
  }
  var Lk = function () {
      var a = q.document
      return a && 'undefined' !== typeof a.visibilityState
        ? 'visible' == a.visibilityState
        : !0
    },
    Mk = function () {
      var a = q.document,
        b = null
      return Lk() || !a
        ? L()
        : new K(function (c) {
            b = function () {
              Lk() && (a.removeEventListener('visibilitychange', b, !1), c())
            }
            a.addEventListener('visibilitychange', b, !1)
          }).h(function (c) {
            a.removeEventListener('visibilitychange', b, !1)
            throw c
          })
    },
    Nk = function (a) {
      'undefined' !== typeof console &&
        'function' === typeof console.error &&
        console.error(a)
    },
    Ok = function (a) {
      try {
        var b = new Date(parseInt(a, 10))
        if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString()
      } catch (c) {}
      return null
    },
    Pk = function () {
      return !(!P('fireauth.oauthhelper', q) && !P('fireauth.iframe', q))
    },
    Qk = function () {
      if (q.document)
        try {
          var a = We('META', { name: 'referrer', content: 'no-referrer' }),
            b = document.getElementsByTagName('HEAD')
          b.length && b[0].appendChild(a)
        } catch (c) {}
    },
    Rk = function () {
      var a = q.navigator
      return (a && a.serviceWorker && a.serviceWorker.controller) || null
    },
    Sk = function () {
      var a = q.navigator
      return a && a.serviceWorker
        ? L()
            .then(function () {
              return a.serviceWorker.ready
            })
            .then(function (b) {
              return b.active || null
            })
            .h(function () {
              return null
            })
        : L(null)
    },
    Tk = function (a) {
      var b = {}
      a.split('&').forEach(function (c) {
        c = c.split('=')
        1 < c.length && (b[decodeURIComponent(c[0])] = decodeURIComponent(c[1]))
      })
      return b
    }
  var Uk = {},
    Vk = function (a) {
      Uk[a] ||
        ((Uk[a] = !0),
        'undefined' !== typeof console &&
          'function' === typeof console.warn &&
          console.warn(a))
    }
  var Wk
  try {
    var Xk = {}
    Object.defineProperty(Xk, 'abcd', {
      configurable: !0,
      enumerable: !0,
      value: 1,
    })
    Object.defineProperty(Xk, 'abcd', {
      configurable: !0,
      enumerable: !0,
      value: 2,
    })
    Wk = 2 == Xk.abcd
  } catch (a) {
    Wk = !1
  }
  var Q = function (a, b, c) {
      Wk
        ? Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            value: c,
          })
        : (a[b] = c)
    },
    Yk = function (a, b) {
      if (b) for (var c in b) b.hasOwnProperty(c) && Q(a, c, b[c])
    },
    Zk = function (a) {
      var b = {}
      Yk(b, a)
      return b
    },
    $k = function (a, b) {
      if (!b || !b.length) return !0
      if (!a) return !1
      for (var c = 0; c < b.length; c++) {
        var d = a[b[c]]
        if (void 0 === d || null === d || '' === d) return !1
      }
      return !0
    },
    al = function (a) {
      var b = a
      if ('object' == typeof a && null != a) {
        b = 'length' in a ? [] : {}
        for (var c in a) Q(b, c, al(a[c]))
      }
      return b
    }
  var bl =
      'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
        ' '
      ),
    cl = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state'],
    dl = {
      lm: {
        Id: 'locale',
        Yc: 700,
        Xc: 600,
        providerId: 'facebook.com',
        Zd: cl,
      },
      pm: { Id: null, Yc: 500, Xc: 750, providerId: 'github.com', Zd: cl },
      qm: { Id: 'hl', Yc: 515, Xc: 680, providerId: 'google.com', Zd: cl },
      Jm: { Id: 'lang', Yc: 485, Xc: 705, providerId: 'twitter.com', Zd: bl },
      hm: { Id: 'locale', Yc: 640, Xc: 600, providerId: 'apple.com', Zd: [] },
    },
    el = function (a) {
      for (var b in dl) if (dl[b].providerId == a) return dl[b]
      return null
    },
    fl = function (a) {
      return ((a = el(a)) && a.Zd) || []
    },
    gl = function (a) {
      return 'string' === typeof a && 0 == a.indexOf('saml.')
    }
  var R = function (a, b, c) {
    this.code = 'auth/' + a
    this.message = b || hl[a] || ''
    this.pj = c || null
  }
  w(R, Error)
  R.prototype.o = function () {
    var a = { code: this.code, message: this.message }
    this.pj && (a.serverResponse = this.pj)
    return a
  }
  R.prototype.toJSON = function () {
    return this.o()
  }
  var il = function (a) {
      var b = a && a.code
      return b ? new R(b.substring(5), a.message, a.serverResponse) : null
    },
    hl = {
      'api-key-service-blocked':
        'The request is denied because it violates [API key HTTP restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_http_restrictions).',
      'admin-restricted-operation':
        'This operation is restricted to administrators only.',
      'argument-error': '',
      'app-not-authorized':
        "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
      'app-not-installed':
        'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
      'bad-request': 'The requested action is invalid.',
      'captcha-check-failed':
        'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
      'code-expired':
        'The SMS code has expired. Please re-send the verification code to try again.',
      'cordova-not-ready': 'Cordova framework is not ready.',
      'cors-unsupported': 'This browser is not supported.',
      'credential-already-in-use':
        'This credential is already associated with a different user account.',
      'custom-token-mismatch':
        'The custom token corresponds to a different audience.',
      'requires-recent-login':
        'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
      'dynamic-link-not-activated':
        'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
      'email-change-needs-verification':
        'Multi-factor users must always have a verified email.',
      'email-already-in-use':
        'The email address is already in use by another account.',
      'expired-action-code': 'The action code has expired. ',
      'cancelled-popup-request':
        'This operation has been cancelled due to another conflicting popup being opened.',
      'internal-error': 'An internal error has occurred.',
      'invalid-app-credential':
        'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
      'invalid-app-id':
        'The mobile app identifier is not registed for the current project.',
      'invalid-user-token':
        "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
      'invalid-auth-event': 'An internal error has occurred.',
      'invalid-verification-code':
        'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.',
      'invalid-continue-uri':
        'The continue URL provided in the request is invalid.',
      'invalid-cordova-configuration':
        'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
      'invalid-custom-token':
        'The custom token format is incorrect. Please check the documentation.',
      'invalid-dynamic-link-domain':
        'The provided dynamic link domain is not configured or authorized for the current project.',
      'invalid-email': 'The email address is badly formatted.',
      'invalid-api-key':
        'Your API key is invalid, please check you have copied it correctly.',
      'invalid-cert-hash': 'The SHA-1 certificate hash provided is invalid.',
      'invalid-credential':
        'The supplied auth credential is malformed or has expired.',
      'invalid-message-payload':
        'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
      'invalid-multi-factor-session':
        'The request does not contain a valid proof of first factor successful sign-in.',
      'invalid-oauth-provider':
        'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
      'invalid-oauth-client-id':
        'The OAuth client ID provided is either invalid or does not match the specified API key.',
      'unauthorized-domain':
        'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
      'invalid-action-code':
        'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
      'wrong-password':
        'The password is invalid or the user does not have a password.',
      'invalid-persistence-type':
        'The specified persistence type is invalid. It can only be local, session or none.',
      'invalid-phone-number':
        'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
      'invalid-provider-id': 'The specified provider ID is invalid.',
      'invalid-recipient-email':
        'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
      'invalid-sender':
        'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
      'invalid-verification-id':
        'The verification ID used to create the phone auth credential is invalid.',
      'invalid-tenant-id': "The Auth instance's tenant ID is invalid.",
      'multi-factor-info-not-found':
        'The user does not have a second factor matching the identifier provided.',
      'multi-factor-auth-required':
        'Proof of ownership of a second factor is required to complete sign-in.',
      'missing-android-pkg-name':
        'An Android Package Name must be provided if the Android App is required to be installed.',
      'auth-domain-config-required':
        'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
      'missing-app-credential':
        'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
      'missing-verification-code':
        'The phone auth credential was created with an empty SMS verification code.',
      'missing-continue-uri': 'A continue URL must be provided in the request.',
      'missing-iframe-start': 'An internal error has occurred.',
      'missing-ios-bundle-id':
        'An iOS Bundle ID must be provided if an App Store ID is provided.',
      'missing-multi-factor-info': 'No second factor identifier is provided.',
      'missing-multi-factor-session':
        'The request is missing proof of first factor successful sign-in.',
      'missing-or-invalid-nonce':
        'The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.',
      'missing-phone-number':
        'To send verification codes, provide a phone number for the recipient.',
      'missing-verification-id':
        'The phone auth credential was created with an empty verification ID.',
      'app-deleted': 'This instance of FirebaseApp has been deleted.',
      'account-exists-with-different-credential':
        'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
      'network-request-failed':
        'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
      'no-auth-event': 'An internal error has occurred.',
      'no-such-provider':
        'User was not linked to an account with the given provider.',
      'null-user':
        'A null user object was provided as the argument for an operation which requires a non-null user object.',
      'operation-not-allowed':
        'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
      'operation-not-supported-in-this-environment':
        'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      'password-does-not-meet-requirements':
        'The provided password does not meet the configured requirements.',
      'popup-blocked':
        'Unable to establish a connection with the popup. It may have been blocked by the browser.',
      'popup-closed-by-user':
        'The popup has been closed by the user before finalizing the operation.',
      'provider-already-linked':
        'User can only be linked to one identity for the given provider.',
      'quota-exceeded':
        "The project's quota for this operation has been exceeded.",
      'redirect-cancelled-by-user':
        'The redirect operation has been cancelled by the user before finalizing.',
      'redirect-operation-pending':
        'A redirect sign-in operation is already pending.',
      'rejected-credential':
        'The request contains malformed or mismatching credentials.',
      'second-factor-already-in-use':
        'The second factor is already enrolled on this account.',
      'maximum-second-factor-count-exceeded':
        'The maximum allowed number of second factors on a user has been exceeded.',
      'tenant-id-mismatch':
        "The provided tenant ID does not match the Auth instance's tenant ID",
      timeout: 'The operation has timed out.',
      'user-token-expired':
        "The user's credential is no longer valid. The user must sign in again.",
      'too-many-requests':
        'We have blocked all requests from this device due to unusual activity. Try again later.',
      'unauthorized-continue-uri':
        'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
      'unsupported-first-factor':
        'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
      'unsupported-persistence-type':
        'The current environment does not support the specified persistence type.',
      'unsupported-tenant-operation':
        'This operation is not supported in a multi-tenant context.',
      'unverified-email': 'The operation requires a verified email.',
      'user-cancelled':
        'The user did not grant your application the permissions it requested.',
      'user-not-found':
        'There is no user record corresponding to this identifier. The user may have been deleted.',
      'user-disabled':
        'The user account has been disabled by an administrator.',
      'user-mismatch':
        'The supplied credentials do not correspond to the previously signed in user.',
      'user-signed-out': '',
      'weak-password': 'The password must be 6 characters long or more.',
      'web-storage-unsupported':
        'This browser is not supported or 3rd party cookies and data may be disabled.',
    }
  var jl = function (a, b, c, d, e, f, g) {
    this.jd = a
    this.X = b || null
    this.kb = c || null
    this.be = d || null
    this.Yg = f || null
    this.M = g || null
    this.ha = e || null
    if (this.kb || this.ha) {
      if (this.kb && this.ha) throw new R('invalid-auth-event')
      if (this.kb && !this.be) throw new R('invalid-auth-event')
    } else throw new R('invalid-auth-event')
  }
  k = jl.prototype
  k.getType = function () {
    return this.jd
  }
  k.getUid = function () {
    var a = []
    a.push(this.jd)
    this.X && a.push(this.X)
    this.be && a.push(this.be)
    this.M && a.push(this.M)
    return a.join('-')
  }
  k.Kc = function () {
    return this.be
  }
  k.qa = function () {
    return this.M
  }
  k.getError = function () {
    return this.ha
  }
  k.o = function () {
    return {
      type: this.jd,
      eventId: this.X,
      urlResponse: this.kb,
      sessionId: this.be,
      postBody: this.Yg,
      tenantId: this.M,
      error: this.ha && this.ha.o(),
    }
  }
  var kl = function (a) {
    a = a || {}
    return a.type
      ? new jl(
          a.type,
          a.eventId,
          a.urlResponse,
          a.sessionId,
          a.error && il(a.error),
          a.postBody,
          a.tenantId
        )
      : null
  }
  var ll = function (a, b, c, d, e, f, g, h, l, m, n, r, u, C, oa, Kb, Da) {
    this.G = a
    this.D = b
    this.jd = c
    this.X = d || null
    this.dd = e || null
    this.bb = f || null
    this.mg = g || null
    this.xc = h || null
    this.Fd = l || null
    this.bi = m || null
    this.Z = n || []
    this.Tb = r || null
    this.vj = u || null
    this.M = C || null
    this.ad = oa || null
    this.Xb = Kb || null
    this.jj = Da || null
  }
  ll.prototype.getType = function () {
    return this.jd
  }
  ll.prototype.cb = function () {
    return this.G
  }
  ll.prototype.qa = function () {
    return this.M
  }
  ll.prototype.o = function () {
    return {
      apiKey: this.G,
      appName: this.D,
      type: this.jd,
      eventId: this.X,
      redirectUrl: this.dd,
      clientVersion: this.bb,
      displayName: this.mg,
      apn: this.xc,
      ibi: this.Fd,
      eid: this.bi,
      fw: this.Z,
      clientId: this.Tb,
      sha1Cert: this.vj,
      tenantId: this.M,
      providerId: this.ad,
      appId: this.Xb,
      publicKey: this.jj,
    }
  }
  var ml = function (a, b) {
    if (!b || !a || !a.mfaEnrollmentId)
      throw new R(
        'internal-error',
        'Internal assert: invalid MultiFactorInfo object'
      )
    Q(this, 'uid', a.mfaEnrollmentId)
    Q(this, 'displayName', a.displayName || null)
    Q(
      this,
      'enrollmentTime',
      a.enrolledAt ? new Date(a.enrolledAt).toUTCString() : null
    )
    Q(this, 'factorId', b)
  }
  ml.prototype.o = function () {
    return {
      uid: this.uid,
      displayName: this.displayName,
      factorId: this.factorId,
      enrollmentTime: this.enrollmentTime,
    }
  }
  var pl = function (a) {
      try {
        if (a.phoneInfo) return new nl(a)
        if (a.totpInfo) return new ol(a)
      } catch (b) {}
      return null
    },
    nl = function (a) {
      var b = a.phoneInfo
      if (!b)
        throw new R(
          'internal-error',
          'Internal assert: invalid Phone MultiFactorInfo object'
        )
      ml.call(this, a, 'phone')
      Q(this, 'phoneNumber', b)
    }
  p(nl, ml)
  nl.prototype.o = function () {
    var a = ml.prototype.o.call(this)
    a.phoneNumber = this.phoneNumber
    return a
  }
  var ol = function (a) {
    var b = a.totpInfo
    if (!b)
      throw new R(
        'internal-error',
        'Internal assert: invalid TOTP MultiFactorInfo object'
      )
    ml.call(this, a, 'totp')
    Q(this, 'totpInfo', b)
  }
  p(ol, ml)
  ol.prototype.o = function () {
    var a = ml.prototype.o.call(this)
    a.totpInfo = this.totpInfo
    return a
  }
  var ql = function (a) {
    var b = {},
      c = a.email,
      d = a.newEmail,
      e = a.requestType
    a = pl(a.mfaInfo)
    if (
      !e ||
      ('EMAIL_SIGNIN' != e && 'VERIFY_AND_CHANGE_EMAIL' != e && !c) ||
      ('VERIFY_AND_CHANGE_EMAIL' == e && !d) ||
      ('REVERT_SECOND_FACTOR_ADDITION' == e && !a)
    )
      throw Error('Invalid checkActionCode response!')
    'VERIFY_AND_CHANGE_EMAIL' == e
      ? ((b.fromEmail = c || null),
        (b.previousEmail = c || null),
        (b.email = d))
      : ((b.fromEmail = d || null),
        (b.previousEmail = d || null),
        (b.email = c || null))
    b.multiFactorInfo = a || null
    Q(this, 'operation', e)
    Q(this, 'data', al(b))
  }
  var sl = function (a) {
      a = E(a)
      var b = D(a, 'apiKey') || null,
        c = D(a, 'oobCode') || null,
        d = D(a, 'mode') || null
      d = d ? rl[d] || null : null
      if (!b || !c || !d)
        throw new R(
          'argument-error',
          'apiKey, oobCodeand mode are required in a valid action code URL.'
        )
      Yk(this, {
        apiKey: b,
        operation: d,
        code: c,
        continueUrl: D(a, 'continueUrl') || null,
        languageCode: D(a, 'languageCode') || null,
        tenantId: D(a, 'tenantId') || null,
      })
    },
    tl = function (a) {
      try {
        return new sl(a)
      } catch (b) {
        return null
      }
    },
    rl = {
      recoverEmail: 'RECOVER_EMAIL',
      resetPassword: 'PASSWORD_RESET',
      revertSecondFactorAddition: 'REVERT_SECOND_FACTOR_ADDITION',
      signIn: 'EMAIL_SIGNIN',
      verifyAndChangeEmail: 'VERIFY_AND_CHANGE_EMAIL',
      verifyEmail: 'VERIFY_EMAIL',
    }
  var ul = function (a, b, c, d, e, f, g) {
      this.ei =
        'https://' +
        d +
        '/__/auth/handler?firebaseError=' +
        encodeURIComponent(Ek(new R('app-not-installed').o()))
      Q(this, 'fallbackUrl', this.ei)
      this.tg = a
      Q(this, 'fdlDomain', a)
      this.nf = b
      Q(this, 'platform', b)
      this.qe = c
      Q(this, 'appIdentifier', c)
      this.O = d
      Q(this, 'authDomain', d)
      this.cf = e
      Q(this, 'payload', e)
      this.D = null
      Q(this, 'appName', null)
      this.Tb = f || null
      Q(this, 'clientId', this.Tb)
      this.Xb = g || null
      Q(this, 'firebaseAppId', this.Xb)
    },
    vl = function (a, b) {
      a.D = b || null
      Q(a, 'appName', b)
    },
    wl = function (a) {
      var b = E(a)
      a = D(b, 'fdlDomain')
      var c = D(b, 'platform'),
        d = D(b, 'appIdentifier'),
        e = D(b, 'authDomain'),
        f = D(b, 'link')
      b = D(b, 'appName')
      return a && c && d && e && f && b
        ? ((a = new ul(a, c, d, e, f)), vl(a, b), a)
        : null
    },
    xl = function (a) {
      var b = E(a),
        c = D(b, 'link'),
        d = D(E(c), 'link')
      b = D(b, 'deep_link_id')
      return D(E(b), 'link') || b || d || c || a
    },
    yl = function (a, b) {
      var c = xd('https', a.tg, null, '/')
      'android' == a.nf
        ? (B(c, 'apn', a.qe), B(c, 'afl', b))
        : 'ios' == a.nf && (B(c, 'ibi', a.qe), B(c, 'ifl', b))
      return c
    }
  ul.prototype.toString = function (a) {
    if ('android_non_gmscore' == this.nf) a = this.cf
    else if (this.tg)
      if (a) {
        a = xd('https', this.O, null, '/__/auth/callback')
        B(a, 'fdlDomain', this.tg)
        B(a, 'platform', this.nf)
        B(a, 'appIdentifier', this.qe)
        B(a, 'authDomain', this.O)
        B(a, 'link', this.cf)
        B(a, 'appName', this.D || '')
        var b = yl(this, a.toString())
        B(b, 'link', a.toString())
        a = b.toString()
      } else (a = yl(this, this.ei)), B(a, 'link', this.cf), (a = a.toString())
    else
      (a = this.Tb
        ? this.Tb.split('.').reverse().join('.')
        : this.Xb
          ? 'app-' + this.Xb.replace(/:/g, '-')
          : this.qe),
        (a = xd(
          a,
          this.Tb || this.Xb ? 'firebaseauth' : 'google',
          null,
          '/link'
        )),
        B(a, 'deep_link_id', this.cf),
        (a = a.toString())
    return a
  }
  var zl = function (a) {
    var b = 'unauthorized-domain',
      c = void 0,
      d = E(a)
    a = d.ga
    d = d.ma
    'chrome-extension' == d
      ? (c = Wc(
          'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. If you are the app developer, add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
          a
        ))
      : 'http' == d || 'https' == d
        ? (c = Wc(
            'This domain (%s) is not authorized to run this operation. If you are the app developer, add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
            a
          ))
        : (b = 'operation-not-supported-in-this-environment')
    R.call(this, b, c)
  }
  p(zl, R)
  var Bl = function (a) {
    var b = Al(a)
    if (!(b && b.sub && b.iss && b.aud && b.exp)) throw Error('Invalid JWT')
    this.Zk = a
    this.sg = b.exp
    this.dl = b.sub
    a = Date.now() / 1e3
    this.Ik = b.iat || (a > this.sg ? this.sg : a)
    this.Vb = b.email || null
    this.ad =
      b.provider_id || (b.firebase && b.firebase.sign_in_provider) || null
    this.M = (b.firebase && b.firebase.tenant) || null
    this.Vj = !!b.is_anonymous || 'anonymous' == this.ad
    this.mg = b.display_name || null
  }
  Bl.prototype.getEmail = function () {
    return this.Vb
  }
  Bl.prototype.qa = function () {
    return this.M
  }
  Bl.prototype.isAnonymous = function () {
    return this.Vj
  }
  Bl.prototype.toString = function () {
    return this.Zk
  }
  var Cl = function (a) {
      try {
        return new Bl(a)
      } catch (b) {
        return null
      }
    },
    Al = function (a) {
      if (!a) return null
      a = a.split('.')
      if (3 != a.length) return null
      a = a[1]
      for (var b = (4 - (a.length % 4)) % 4, c = 0; c < b; c++) a += '.'
      try {
        var d = Qb(a)
        a = []
        for (c = b = 0; b < d.length; ) {
          var e = d[b++]
          if (128 > e) a[c++] = String.fromCharCode(e)
          else if (191 < e && 224 > e) {
            var f = d[b++]
            a[c++] = String.fromCharCode(((e & 31) << 6) | (f & 63))
          } else if (239 < e && 365 > e) {
            f = d[b++]
            var g = d[b++],
              h = d[b++],
              l =
                (((e & 7) << 18) |
                  ((f & 63) << 12) |
                  ((g & 63) << 6) |
                  (h & 63)) -
                65536
            a[c++] = String.fromCharCode(55296 + (l >> 10))
            a[c++] = String.fromCharCode(56320 + (l & 1023))
          } else
            (f = d[b++]),
              (g = d[b++]),
              (a[c++] = String.fromCharCode(
                ((e & 15) << 12) | ((f & 63) << 6) | (g & 63)
              ))
        }
        return JSON.parse(a.join(''))
      } catch (m) {}
      return null
    }
  var Dl = function (a) {
    var b = Al(a)
    if (!(b && b.exp && b.auth_time && b.iat))
      throw new R(
        'internal-error',
        'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.'
      )
    Yk(this, {
      token: a,
      expirationTime: Ok(1e3 * b.exp),
      authTime: Ok(1e3 * b.auth_time),
      issuedAtTime: Ok(1e3 * b.iat),
      signInProvider:
        b.firebase && b.firebase.sign_in_provider
          ? b.firebase.sign_in_provider
          : null,
      signInSecondFactor:
        b.firebase && b.firebase.sign_in_second_factor
          ? b.firebase.sign_in_second_factor
          : null,
      claims: b,
    })
  }
  var El = function (a, b) {
    if (!a && !b)
      throw new R(
        'internal-error',
        'Internal assert: no raw session string available'
      )
    if (a && b)
      throw new R(
        'internal-error',
        'Internal assert: unable to determine the session type'
      )
    this.Pe = a || null
    this.Ri = b || null
    this.type = this.Pe ? 'enroll' : 'signin'
  }
  El.prototype.Cd = function () {
    return this.Pe ? L(this.Pe) : L(this.Ri)
  }
  El.prototype.o = function () {
    return 'enroll' == this.type
      ? { multiFactorSession: { idToken: this.Pe } }
      : { multiFactorSession: { pendingCredential: this.Ri } }
  }
  var Fl = function () {}
  Fl.prototype.bc = function () {}
  Fl.prototype.Sc = function () {}
  Fl.prototype.Kd = function () {}
  Fl.prototype.o = function () {}
  var Gl = function (a, b) {
      return a
        .then(function (c) {
          if (c.idToken) {
            var d = Cl(c.idToken)
            if (!d || b != d.dl) throw new R('user-mismatch')
            return c
          }
          throw new R('user-mismatch')
        })
        .h(function (c) {
          throw c && c.code && 'auth/user-not-found' == c.code
            ? new R('user-mismatch')
            : c
        })
    },
    Hl = function (a, b) {
      if (b) this.ub = b
      else throw new R('internal-error', 'failed to construct a credential')
      Q(this, 'providerId', a)
      Q(this, 'signInMethod', a)
    }
  k = Hl.prototype
  k.bc = function (a) {
    return Il(a, this.hc())
  }
  k.Sc = function (a, b) {
    var c = this.hc()
    c.idToken = b
    return Jl(a, c)
  }
  k.Kd = function (a, b) {
    var c = this.hc()
    return Gl(Kl(a, c), b)
  }
  k.hc = function () {
    return { pendingToken: this.ub, requestUri: 'http://localhost' }
  }
  k.o = function () {
    return {
      providerId: this.providerId,
      signInMethod: this.signInMethod,
      pendingToken: this.ub,
    }
  }
  var Ll = function (a) {
      if (
        a &&
        a.providerId &&
        a.signInMethod &&
        0 == a.providerId.indexOf('saml.') &&
        a.pendingToken
      )
        try {
          return new Hl(a.providerId, a.pendingToken)
        } catch (b) {}
      return null
    },
    Ml = function (a, b, c) {
      this.ub = null
      if (b.idToken || b.accessToken)
        b.idToken && Q(this, 'idToken', b.idToken),
          b.accessToken && Q(this, 'accessToken', b.accessToken),
          b.nonce && !b.pendingToken && Q(this, 'nonce', b.nonce),
          b.pendingToken && (this.ub = b.pendingToken)
      else if (b.oauthToken && b.oauthTokenSecret)
        Q(this, 'accessToken', b.oauthToken),
          Q(this, 'secret', b.oauthTokenSecret)
      else throw new R('internal-error', 'failed to construct a credential')
      Q(this, 'providerId', a)
      Q(this, 'signInMethod', c)
    }
  k = Ml.prototype
  k.bc = function (a) {
    return Il(a, this.hc())
  }
  k.Sc = function (a, b) {
    var c = this.hc()
    c.idToken = b
    return Jl(a, c)
  }
  k.Kd = function (a, b) {
    var c = this.hc()
    return Gl(Kl(a, c), b)
  }
  k.hc = function () {
    var a = {}
    this.idToken && (a.id_token = this.idToken)
    this.accessToken && (a.access_token = this.accessToken)
    this.secret && (a.oauth_token_secret = this.secret)
    a.providerId = this.providerId
    this.nonce && !this.ub && (a.nonce = this.nonce)
    a = { postBody: Bd(a).toString(), requestUri: 'http://localhost' }
    this.ub && (delete a.postBody, (a.pendingToken = this.ub))
    return a
  }
  k.o = function () {
    var a = { providerId: this.providerId, signInMethod: this.signInMethod }
    this.idToken && (a.oauthIdToken = this.idToken)
    this.accessToken && (a.oauthAccessToken = this.accessToken)
    this.secret && (a.oauthTokenSecret = this.secret)
    this.nonce && (a.nonce = this.nonce)
    this.ub && (a.pendingToken = this.ub)
    return a
  }
  var Nl = function (a) {
      if (a && a.providerId && a.signInMethod) {
        var b = {
          idToken: a.oauthIdToken,
          accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
          oauthTokenSecret: a.oauthTokenSecret,
          oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
          nonce: a.nonce,
          pendingToken: a.pendingToken,
        }
        try {
          return new Ml(a.providerId, b, a.signInMethod)
        } catch (c) {}
      }
      return null
    },
    Ol = function (a, b) {
      this.Al = b || []
      Yk(this, { providerId: a, isOAuthProvider: !0 })
      this.Wh = {}
      this.Kg = (el(a) || {}).Id || null
      this.lg = null
    }
  Ol.prototype.setCustomParameters = function (a) {
    this.Wh = ic(a)
    return this
  }
  var Pl = function (a) {
    if (!gl(a))
      throw new R(
        'argument-error',
        'SAML provider IDs must be prefixed with "saml."'
      )
    Ol.call(this, a, [])
  }
  w(Pl, Ol)
  var Ql = function (a) {
    Ol.call(this, a, cl)
    this.hh = []
  }
  w(Ql, Ol)
  Ql.prototype.addScope = function (a) {
    rb(this.hh, a) || this.hh.push(a)
    return this
  }
  Ql.prototype.ri = function () {
    return vb(this.hh)
  }
  Ql.prototype.credential = function (a, b) {
    a = t(a)
      ? {
          idToken: a.idToken || null,
          accessToken: a.accessToken || null,
          nonce: a.rawNonce || null,
        }
      : { idToken: a || null, accessToken: b || null }
    if (!a.idToken && !a.accessToken)
      throw new R(
        'argument-error',
        'credential failed: must provide the ID token and/or the access token.'
      )
    return new Ml(this.providerId, a, this.providerId)
  }
  var Rl = function () {
    Ql.call(this, 'facebook.com')
  }
  w(Rl, Ql)
  Q(Rl, 'PROVIDER_ID', 'facebook.com')
  Q(Rl, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com')
  var Sl = function (a) {
      if (!a)
        throw new R(
          'argument-error',
          'credential failed: expected 1 argument (the OAuth access token).'
        )
      var b = a
      t(a) && (b = a.accessToken)
      return new Rl().credential({ accessToken: b })
    },
    Tl = function () {
      Ql.call(this, 'github.com')
    }
  w(Tl, Ql)
  Q(Tl, 'PROVIDER_ID', 'github.com')
  Q(Tl, 'GITHUB_SIGN_IN_METHOD', 'github.com')
  var Ul = function (a) {
      if (!a)
        throw new R(
          'argument-error',
          'credential failed: expected 1 argument (the OAuth access token).'
        )
      var b = a
      t(a) && (b = a.accessToken)
      return new Tl().credential({ accessToken: b })
    },
    Vl = function () {
      Ql.call(this, 'google.com')
      this.addScope('profile')
    }
  w(Vl, Ql)
  Q(Vl, 'PROVIDER_ID', 'google.com')
  Q(Vl, 'GOOGLE_SIGN_IN_METHOD', 'google.com')
  var Wl = function (a, b) {
      var c = a
      t(a) && ((c = a.idToken), (b = a.accessToken))
      return new Vl().credential({ idToken: c, accessToken: b })
    },
    Xl = function () {
      Ol.call(this, 'twitter.com', bl)
    }
  w(Xl, Ol)
  Q(Xl, 'PROVIDER_ID', 'twitter.com')
  Q(Xl, 'TWITTER_SIGN_IN_METHOD', 'twitter.com')
  var Yl = function (a, b) {
      var c = a
      t(c) || (c = { oauthToken: a, oauthTokenSecret: b })
      if (!c.oauthToken || !c.oauthTokenSecret)
        throw new R(
          'argument-error',
          'credential failed: expected 2 arguments (the OAuth access token and secret).'
        )
      return new Ml('twitter.com', c, 'twitter.com')
    },
    $l = function (a, b, c) {
      this.Vb = a
      this.Md = b
      Q(this, 'providerId', 'password')
      Q(
        this,
        'signInMethod',
        c === Zl.EMAIL_LINK_SIGN_IN_METHOD
          ? Zl.EMAIL_LINK_SIGN_IN_METHOD
          : Zl.EMAIL_PASSWORD_SIGN_IN_METHOD
      )
    }
  $l.prototype.bc = function (a) {
    return this.signInMethod == Zl.EMAIL_LINK_SIGN_IN_METHOD
      ? S(a, am, { email: this.Vb, oobCode: this.Md })
      : S(a, bm, { email: this.Vb, password: this.Md })
  }
  $l.prototype.Sc = function (a, b) {
    return this.signInMethod == Zl.EMAIL_LINK_SIGN_IN_METHOD
      ? S(a, cm, { idToken: b, email: this.Vb, oobCode: this.Md })
      : S(a, dm, { idToken: b, email: this.Vb, password: this.Md })
  }
  $l.prototype.Kd = function (a, b) {
    return Gl(this.bc(a), b)
  }
  $l.prototype.o = function () {
    return {
      email: this.Vb,
      password: this.Md,
      signInMethod: this.signInMethod,
    }
  }
  var em = function (a) {
      return a && a.email && a.password
        ? new $l(a.email, a.password, a.signInMethod)
        : null
    },
    Zl = function () {
      Yk(this, { providerId: 'password', isOAuthProvider: !1 })
    },
    gm = function (a, b) {
      b = fm(b)
      if (!b) throw new R('argument-error', 'Invalid email link!')
      return new $l(a, b.code, Zl.EMAIL_LINK_SIGN_IN_METHOD)
    },
    fm = function (a) {
      a = xl(a)
      return (a = tl(a)) && 'EMAIL_SIGNIN' === a.operation ? a : null
    }
  Yk(Zl, { PROVIDER_ID: 'password' })
  Yk(Zl, { EMAIL_LINK_SIGN_IN_METHOD: 'emailLink' })
  Yk(Zl, { EMAIL_PASSWORD_SIGN_IN_METHOD: 'password' })
  var hm = function (a) {
    if (!((a.verificationId && a.Of) || (a.he && a.phoneNumber)))
      throw new R('internal-error')
    this.v = a
    Q(this, 'providerId', 'phone')
    this.providerId = 'phone'
    Q(this, 'signInMethod', 'phone')
  }
  hm.prototype.bc = function (a) {
    return a.verifyPhoneNumber(im(this))
  }
  hm.prototype.Sc = function (a, b) {
    var c = im(this)
    c.idToken = b
    return S(a, jm, c)
  }
  hm.prototype.Kd = function (a, b) {
    var c = im(this)
    c.operation = 'REAUTH'
    a = S(a, km, c)
    return Gl(a, b)
  }
  hm.prototype.o = function () {
    var a = { providerId: 'phone' }
    this.v.verificationId && (a.verificationId = this.v.verificationId)
    this.v.Of && (a.verificationCode = this.v.Of)
    this.v.he && (a.temporaryProof = this.v.he)
    this.v.phoneNumber && (a.phoneNumber = this.v.phoneNumber)
    return a
  }
  var lm = function (a) {
      if (
        a &&
        'phone' === a.providerId &&
        ((a.verificationId && a.verificationCode) ||
          (a.temporaryProof && a.phoneNumber))
      ) {
        var b = {}
        A(
          [
            'verificationId',
            'verificationCode',
            'temporaryProof',
            'phoneNumber',
          ],
          function (c) {
            a[c] && (b[c] = a[c])
          }
        )
        return new hm(b)
      }
      return null
    },
    im = function (a) {
      return a.v.he && a.v.phoneNumber
        ? { temporaryProof: a.v.he, phoneNumber: a.v.phoneNumber }
        : { sessionInfo: a.v.verificationId, code: a.v.Of }
    },
    mm = function (a) {
      try {
        this.Sb = a || firebase.auth()
      } catch (b) {
        throw new R(
          'argument-error',
          'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().'
        )
      }
      Yk(this, { providerId: 'phone', isOAuthProvider: !1 })
    }
  mm.prototype.verifyPhoneNumber = function (a, b) {
    var c = this.Sb.j
    return L(b.verify()).then(function (d) {
      if ('string' !== typeof d)
        throw new R(
          'argument-error',
          'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.'
        )
      switch (b.type) {
        case 'recaptcha':
          var e = t(a) ? a.session : null,
            f = t(a) ? a.phoneNumber : a
          return (
            e && 'enroll' == e.type
              ? e.Cd().then(function (g) {
                  return nm(c, {
                    idToken: g,
                    phoneEnrollmentInfo: { phoneNumber: f, recaptchaToken: d },
                  })
                })
              : e && 'signin' == e.type
                ? e.Cd().then(function (g) {
                    return om(c, {
                      mfaPendingCredential: g,
                      mfaEnrollmentId:
                        (a.multiFactorHint && a.multiFactorHint.uid) ||
                        a.multiFactorUid,
                      phoneSignInInfo: { recaptchaToken: d },
                    })
                  })
                : pm(c, { phoneNumber: f, recaptchaToken: d })
          ).then(
            function (g) {
              'function' === typeof b.reset && b.reset()
              return g
            },
            function (g) {
              'function' === typeof b.reset && b.reset()
              throw g
            }
          )
        default:
          throw new R(
            'argument-error',
            'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
          )
      }
    })
  }
  var qm = function (a, b) {
    if (!a) throw new R('missing-verification-id')
    if (!b) throw new R('missing-verification-code')
    return new hm({ verificationId: a, Of: b })
  }
  Yk(mm, { PROVIDER_ID: 'phone' })
  Yk(mm, { PHONE_SIGN_IN_METHOD: 'phone' })
  var rm = function (a) {
      if (a.temporaryProof && a.phoneNumber)
        return new hm({ he: a.temporaryProof, phoneNumber: a.phoneNumber })
      var b = a && a.providerId
      if (!b || 'password' === b) return null
      var c = a && a.oauthAccessToken,
        d = a && a.oauthTokenSecret,
        e = a && a.nonce,
        f = a && a.oauthIdToken,
        g = a && a.pendingToken
      try {
        switch (b) {
          case 'google.com':
            return Wl(f, c)
          case 'facebook.com':
            return Sl(c)
          case 'github.com':
            return Ul(c)
          case 'twitter.com':
            return Yl(c, d)
          default:
            return c || d || f || g
              ? g
                ? 0 == b.indexOf('saml.')
                  ? new Hl(b, g)
                  : new Ml(
                      b,
                      {
                        pendingToken: g,
                        idToken: a.oauthIdToken,
                        accessToken: a.oauthAccessToken,
                      },
                      b
                    )
                : new Ql(b).credential({
                    idToken: f,
                    accessToken: c,
                    rawNonce: e,
                  })
              : null
        }
      } catch (h) {
        return null
      }
    },
    sm = function (a) {
      if (!a.isOAuthProvider) throw new R('invalid-oauth-provider')
    }
  var tm = function (a, b, c) {
    R.call(this, a, c)
    a = b || {}
    a.email && Q(this, 'email', a.email)
    a.phoneNumber && Q(this, 'phoneNumber', a.phoneNumber)
    a.credential && Q(this, 'credential', a.credential)
    a.tenantId && Q(this, 'tenantId', a.tenantId)
  }
  p(tm, R)
  tm.prototype.o = function () {
    var a = { code: this.code, message: this.message }
    this.email && (a.email = this.email)
    this.phoneNumber && (a.phoneNumber = this.phoneNumber)
    this.tenantId && (a.tenantId = this.tenantId)
    var b = this.credential && this.credential.o()
    b && kc(a, b)
    return a
  }
  tm.prototype.toJSON = function () {
    return this.o()
  }
  var um = function (a) {
    if (a.code) {
      var b = a.code || ''
      0 == b.indexOf('auth/') && (b = b.substring(5))
      var c = { credential: rm(a), tenantId: a.tenantId }
      if (a.email) c.email = a.email
      else if (a.phoneNumber) c.phoneNumber = a.phoneNumber
      else if (!c.credential) return new R(b, a.message || void 0)
      return new tm(b, c, a.message)
    }
    return null
  }
  var vm = ha(['https://apis.google.com/js/client.js?onload=', '']),
    wm = function (a) {
      this.gm = a
    }
  p(wm, aj)
  wm.prototype.rd = function () {
    return new this.gm()
  }
  wm.prototype.Ve = function () {
    return {}
  }
  var Bm = function (a, b, c, d) {
      this.G = a
      b = b || {}
      this.oj =
        b.secureTokenEndpoint || 'https://securetoken.googleapis.com/v1/token'
      this.Ml = b.secureTokenTimeout || xm
      this.yf = ic(b.secureTokenHeaders || ym)
      this.ji =
        b.firebaseEndpoint ||
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'
      this.Bi =
        b.identityPlatformEndpoint ||
        'https://identitytoolkit.googleapis.com/v2/'
      this.mk = b.firebaseTimeout || zm
      this.Yb = ic(b.firebaseHeaders || Am)
      c &&
        ((this.Yb['X-Client-Version'] = c), (this.yf['X-Client-Version'] = c))
      d && (this.Yb['X-Firebase-AppCheck'] = d)
      a = 'Node' == uk()
      a =
        q.XMLHttpRequest ||
        (a && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest)
      if (!a && !tk())
        throw new R(
          'internal-error',
          'The XMLHttpRequest compatibility library was not found.'
        )
      this.wf = void 0
      tk()
        ? (this.wf = new ij({ fm: self }))
        : vk()
          ? (this.wf = new wm(a))
          : (this.wf = new fj())
      this.M = null
    },
    Cm
  Bm.prototype.cb = function () {
    return this.G
  }
  var Dm = function (a, b) {
      b ? (a.Yb['X-Firebase-Locale'] = b) : delete a.Yb['X-Firebase-Locale']
    },
    Fm = function (a, b) {
      b &&
        ((a.oj = Em('https://securetoken.googleapis.com/v1/token', b)),
        (a.ji = Em(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
          b
        )),
        (a.Bi = Em('https://identitytoolkit.googleapis.com/v2/', b)))
    },
    Em = function (a, b) {
      a = E(a)
      b = E(b.url)
      md(a, a.ga + a.tb)
      id(a, b.ma)
      kd(a, b.ga)
      ld(a, b.gb)
      return a.toString()
    },
    Gm = function (a, b) {
      b
        ? ((a.Yb['X-Client-Version'] = b), (a.yf['X-Client-Version'] = b))
        : (delete a.Yb['X-Client-Version'], delete a.yf['X-Client-Version'])
    }
  Bm.prototype.qa = function () {
    return this.M
  }
  Bm.prototype.zf = function (a, b, c, d, e, f) {
    if (ek() || tk()) var g = v(this.Ol, this)
    else
      Cm ||
        (Cm = new K(function (h, l) {
          Hm(h, l)
        })),
        (g = v(this.Nl, this))
    g(a, b, c, d, e, f)
  }
  Bm.prototype.Ol = function (a, b, c, d, e, f) {
    if (
      tk() &&
      ('undefined' === typeof q.fetch ||
        'undefined' === typeof q.Headers ||
        'undefined' === typeof q.Request)
    )
      throw new R(
        'operation-not-supported-in-this-environment',
        'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.'
      )
    var g = new Hj(this.wf)
    if (f) {
      g.rc = Math.max(0, f)
      var h = setTimeout(function () {
        g.dispatchEvent('timeout')
      }, f)
    }
    g.listen('complete', function () {
      h && clearTimeout(h)
      var l = null
      try {
        l = JSON.parse(Tj(this)) || null
      } catch (m) {
        l = null
      }
      b && b(l)
    })
    g.Tc('ready', function () {
      h && clearTimeout(h)
      this.oa()
    })
    g.Tc('timeout', function () {
      h && clearTimeout(h)
      this.oa()
      b && b(null)
    })
    g.send(a, c, d, e)
  }
  var Hm = function (a, b) {
    if (((window.gapi || {}).client || {}).request) a()
    else {
      q[Im] = function () {
        ;((window.gapi || {}).client || {}).request
          ? a()
          : b(Error('CORS_UNSUPPORTED'))
      }
      var c = $d(vm, Im)
      xj(Gj(c), function () {
        b(Error('CORS_UNSUPPORTED'))
      })
    }
  }
  Bm.prototype.Nl = function (a, b, c, d, e) {
    var f = this
    Cm.then(function () {
      window.gapi.client.setApiKey(f.cb())
      var g = window.gapi.auth.getToken()
      window.gapi.auth.setToken(null)
      window.gapi.client.request({
        path: a,
        method: c,
        body: d,
        headers: e,
        authType: 'none',
        callback: function (h) {
          window.gapi.auth.setToken(g)
          b && b(h)
        },
      })
    }).h(function (g) {
      b && b({ error: { message: (g && g.message) || 'CORS_UNSUPPORTED' } })
    })
  }
  var Km = function (a, b) {
      return new K(function (c, d) {
        ;('refresh_token' == b.grant_type && b.refresh_token) ||
        ('authorization_code' == b.grant_type && b.code)
          ? a.zf(
              a.oj + '?key=' + encodeURIComponent(a.cb()),
              function (e) {
                e
                  ? e.error
                    ? d(Jm(e))
                    : e.access_token && e.refresh_token
                      ? c(e)
                      : d(new R('internal-error'))
                  : d(new R('network-request-failed'))
              },
              'POST',
              Bd(b).toString(),
              a.yf,
              a.Ml.get()
            )
          : d(new R('internal-error'))
      })
    },
    Lm = function (a, b, c, d, e, f, g) {
      var h = E(b + c)
      B(h, 'key', a.cb())
      g && B(h, 'cb', Date.now().toString())
      var l = 'GET' == d
      if (l) for (var m in e) e.hasOwnProperty(m) && B(h, m, e[m])
      return new K(function (n, r) {
        a.zf(
          h.toString(),
          function (u) {
            u
              ? u.error
                ? r(Jm(u, f || {}))
                : n(u)
              : r(new R('network-request-failed'))
          },
          d,
          l ? void 0 : JSON.stringify(Fk(e)),
          a.Yb,
          a.mk.get()
        )
      })
    },
    Mm = function (a) {
      a = a.email
      if ('string' !== typeof a || !mk.test(a)) throw new R('invalid-email')
    },
    Nm = function (a) {
      'email' in a && Mm(a)
    },
    Pm = function (a, b, c, d, e, f) {
      var g = gl(b)
      var h = {}
      e && e.length
        ? ((h[b] = e.join(',')), (e = JSON.stringify(h)))
        : (e = null)
      c = {
        identifier: null,
        providerId: b,
        continueUri: c,
        customParameter: d || {},
        oauthScope: e,
        sessionId: f,
      }
      g && (delete c.customParameter, delete c.oauthScope)
      f && 'google.com' == b && (c.authFlowType = 'CODE_FLOW')
      return S(a, Om, c)
    },
    Rm = function (a, b) {
      return S(a, Qm, {
        identifier: b,
        continueUri: Bk() ? Zj() : 'http://localhost',
      }).then(function (c) {
        return c.signinMethods || []
      })
    },
    Tm = function (a) {
      return S(a, Sm, {}).then(function (b) {
        return b.authorizedDomains || []
      })
    },
    Um = function (a) {
      return S(a, Sm, {}).then(function (b) {
        return b.projectId || ''
      })
    },
    Vm = function (a, b) {
      return S(a, Sm, { iosBundleId: b }).then(function () {})
    },
    Wm = function (a, b, c) {
      b = { androidPackageName: b }
      c && (b.sha1Cert = c)
      return S(a, Sm, b).then(function () {})
    },
    Xm = function (a, b) {
      return S(a, Sm, { clientId: b }).then(function () {})
    },
    Ym = function (a, b) {
      return S(a, Sm, { firebaseAppId: b }).then(function () {})
    },
    Zm = function (a) {
      if (!a.idToken) {
        if (a.mfaPendingCredential)
          throw new R('multi-factor-auth-required', null, ic(a))
        throw new R('internal-error')
      }
    },
    $m = function (a) {
      if (a.phoneNumber || a.temporaryProof) {
        if (!a.phoneNumber || !a.temporaryProof) throw new R('internal-error')
      } else {
        if (!a.sessionInfo) throw new R('missing-verification-id')
        if (!a.code) throw new R('missing-verification-code')
      }
    }
  k = Bm.prototype
  k.signInAnonymously = function () {
    return S(this, an, {})
  }
  k.updateEmail = function (a, b) {
    return S(this, bn, { idToken: a, email: b })
  }
  k.updatePassword = function (a, b) {
    return S(this, dm, { idToken: a, password: b })
  }
  k.updateProfile = function (a, b) {
    var c = { idToken: a },
      d = []
    fc(cn, function (e, f) {
      var g = b[f]
      null === g ? d.push(e) : f in b && (c[f] = g)
    })
    d.length && (c.deleteAttribute = d)
    return S(this, bn, c)
  }
  k.sendPasswordResetEmail = function (a, b) {
    a = { requestType: 'PASSWORD_RESET', email: a }
    kc(a, b)
    return S(this, dn, a)
  }
  k.sendSignInLinkToEmail = function (a, b) {
    a = { requestType: 'EMAIL_SIGNIN', email: a }
    kc(a, b)
    return S(this, en, a)
  }
  k.sendEmailVerification = function (a, b) {
    a = { requestType: 'VERIFY_EMAIL', idToken: a }
    kc(a, b)
    return S(this, fn, a)
  }
  k.verifyBeforeUpdateEmail = function (a, b, c) {
    a = { requestType: 'VERIFY_AND_CHANGE_EMAIL', idToken: a, newEmail: b }
    kc(a, c)
    return S(this, gn, a)
  }
  var pm = function (a, b) {
    return S(a, hn, b)
  }
  Bm.prototype.verifyPhoneNumber = function (a) {
    return S(this, jn, a)
  }
  var nm = function (a, b) {
      return S(a, kn, b).then(function (c) {
        return c.phoneSessionInfo.sessionInfo
      })
    },
    ln = function (a) {
      if (!a.phoneVerificationInfo) throw new R('internal-error')
      if (!a.phoneVerificationInfo.sessionInfo)
        throw new R('missing-verification-id')
      if (!a.phoneVerificationInfo.code)
        throw new R('missing-verification-code')
    },
    om = function (a, b) {
      return S(a, mn, b).then(function (c) {
        return c.phoneResponseInfo.sessionInfo
      })
    },
    on = function (a, b, c) {
      return S(a, nn, { idToken: b, deleteProvider: c })
    },
    pn = function (a) {
      if (!a.requestUri || (!a.sessionId && !a.postBody && !a.pendingToken))
        throw new R('internal-error')
    },
    qn = function (a, b) {
      b.oauthIdToken &&
        b.providerId &&
        0 == b.providerId.indexOf('oidc.') &&
        !b.pendingToken &&
        (a.sessionId
          ? (b.nonce = a.sessionId)
          : a.postBody &&
            ((a = new qd(a.postBody)),
            a.pd('nonce') && (b.nonce = a.get('nonce'))))
      return b
    },
    sn = function (a) {
      var b = null
      a.needConfirmation
        ? ((a.code = 'account-exists-with-different-credential'), (b = um(a)))
        : 'FEDERATED_USER_ID_ALREADY_LINKED' == a.errorMessage
          ? ((a.code = 'credential-already-in-use'), (b = um(a)))
          : 'EMAIL_EXISTS' == a.errorMessage
            ? ((a.code = 'email-already-in-use'), (b = um(a)))
            : a.errorMessage && (b = rn(a.errorMessage))
      if (b) throw b
      Zm(a)
    },
    Il = function (a, b) {
      b.returnIdpCredential = !0
      return S(a, tn, b)
    },
    Jl = function (a, b) {
      b.returnIdpCredential = !0
      return S(a, un, b)
    },
    Kl = function (a, b) {
      b.returnIdpCredential = !0
      b.autoCreate = !1
      return S(a, vn, b)
    },
    wn = function (a) {
      if (!a.oobCode) throw new R('invalid-action-code')
    }
  Bm.prototype.confirmPasswordReset = function (a, b) {
    return S(this, xn, { oobCode: a, newPassword: b })
  }
  Bm.prototype.checkActionCode = function (a) {
    return S(this, yn, { oobCode: a })
  }
  Bm.prototype.applyActionCode = function (a) {
    return S(this, zn, { oobCode: a })
  }
  var S = function (a, b, c) {
      if (!$k(c, b.la)) return M(new R('internal-error'))
      var d = !!b.le,
        e = b.httpMethod || 'POST',
        f
      return L(c)
        .then(b.K)
        .then(function () {
          b.Va && (c.returnSecureToken = !0)
          b.N && a.M && 'undefined' === typeof c.tenantId && (c.tenantId = a.M)
          return d
            ? Lm(a, a.Bi, b.endpoint, e, c, b.Vh, b.ue || !1)
            : Lm(a, a.ji, b.endpoint, e, c, b.Vh, b.ue || !1)
        })
        .then(function (g) {
          f = g
          return b.tf ? b.tf(c, f) : f
        })
        .then(b.V)
        .then(function () {
          if (!b.hb) return f
          if (!(b.hb in f)) throw new R('internal-error')
          return f[b.hb]
        })
    },
    rn = function (a) {
      return Jm({ error: { errors: [{ message: a }], code: 400, reason: a } })
    },
    Jm = function (a, b) {
      var c =
        ((a.error && a.error.errors && a.error.errors[0]) || {}).reason || ''
      var d = {
        keyInvalid: 'invalid-api-key',
        ipRefererBlocked: 'app-not-authorized',
      }
      if ((c = d[c] ? new R(d[c]) : null)) return c
      c = (a.error && (a.error.reason || a.error.message)) || ''
      d = {
        INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
        CREDENTIAL_MISMATCH: 'custom-token-mismatch',
        MISSING_CUSTOM_TOKEN: 'internal-error',
        INVALID_IDENTIFIER: 'invalid-email',
        MISSING_CONTINUE_URI: 'internal-error',
        INVALID_EMAIL: 'invalid-email',
        INVALID_PASSWORD: 'wrong-password',
        USER_DISABLED: 'user-disabled',
        MISSING_PASSWORD: 'internal-error',
        EMAIL_EXISTS: 'email-already-in-use',
        PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
        INVALID_IDP_RESPONSE: 'invalid-credential',
        INVALID_PENDING_TOKEN: 'invalid-credential',
        FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
        MISSING_OR_INVALID_NONCE: 'missing-or-invalid-nonce',
        INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
        INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
        INVALID_SENDER: 'invalid-sender',
        EMAIL_NOT_FOUND: 'user-not-found',
        RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
        EXPIRED_OOB_CODE: 'expired-action-code',
        INVALID_OOB_CODE: 'invalid-action-code',
        MISSING_OOB_CODE: 'internal-error',
        INVALID_PROVIDER_ID: 'invalid-provider-id',
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
        INVALID_ID_TOKEN: 'invalid-user-token',
        TOKEN_EXPIRED: 'user-token-expired',
        USER_NOT_FOUND: 'user-token-expired',
        CORS_UNSUPPORTED: 'cors-unsupported',
        DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
        INVALID_APP_ID: 'invalid-app-id',
        TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
        WEAK_PASSWORD: 'weak-password',
        PASSWORD_DOES_NOT_MEET_REQUIREMENTS:
          'password-does-not-meet-requirements',
        OPERATION_NOT_ALLOWED: 'operation-not-allowed',
        USER_CANCELLED: 'user-cancelled',
        CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
        INVALID_APP_CREDENTIAL: 'invalid-app-credential',
        INVALID_CODE: 'invalid-verification-code',
        INVALID_PHONE_NUMBER: 'invalid-phone-number',
        INVALID_SESSION_INFO: 'invalid-verification-id',
        INVALID_TEMPORARY_PROOF: 'invalid-credential',
        INVALID_TENANT_ID: 'invalid-tenant-id',
        MISSING_APP_CREDENTIAL: 'missing-app-credential',
        MISSING_CODE: 'missing-verification-code',
        MISSING_PHONE_NUMBER: 'missing-phone-number',
        MISSING_SESSION_INFO: 'missing-verification-id',
        QUOTA_EXCEEDED: 'quota-exceeded',
        SESSION_EXPIRED: 'code-expired',
        REJECTED_CREDENTIAL: 'rejected-credential',
        INVALID_CONTINUE_URI: 'invalid-continue-uri',
        MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
        MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
        UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
        INVALID_DYNAMIC_LINK_DOMAIN: 'invalid-dynamic-link-domain',
        INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
        INVALID_CERT_HASH: 'invalid-cert-hash',
        UNSUPPORTED_TENANT_OPERATION: 'unsupported-tenant-operation',
        TENANT_ID_MISMATCH: 'tenant-id-mismatch',
        ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
        INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
        MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
        MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
        MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
        EMAIL_CHANGE_NEEDS_VERIFICATION: 'email-change-needs-verification',
        SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
        SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
        UNSUPPORTED_FIRST_FACTOR: 'unsupported-first-factor',
        UNVERIFIED_EMAIL: 'unverified-email',
        API_KEY_SERVICE_BLOCKED: 'api-key-service-blocked',
      }
      b = b || {}
      kc(d, b)
      b =
        (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length
          ? b[1]
          : void 0
      for (var e in d) if (0 === c.indexOf(e)) return new R(d[e], b)
      !b && a && (b = Ek(a))
      return new R('internal-error', b)
    },
    xm = new Kk(3e4, 6e4),
    ym = { 'Content-Type': 'application/x-www-form-urlencoded' },
    zm = new Kk(3e4, 6e4),
    Am = { 'Content-Type': 'application/json' },
    Im = '__fcb' + Math.floor(1e6 * Math.random()).toString(),
    cn = { displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL' },
    zn = { endpoint: 'setAccountInfo', K: wn, hb: 'email', N: !0 },
    yn = {
      endpoint: 'resetPassword',
      K: wn,
      V: function (a) {
        var b = a.requestType
        if (
          !b ||
          (!a.email && 'EMAIL_SIGNIN' != b && 'VERIFY_AND_CHANGE_EMAIL' != b)
        )
          throw new R('internal-error')
      },
      N: !0,
    },
    An = {
      endpoint: 'signupNewUser',
      K: function (a) {
        Mm(a)
        if (!a.password) throw new R('weak-password')
      },
      V: Zm,
      Va: !0,
      N: !0,
    },
    Qm = { endpoint: 'createAuthUri', N: !0 },
    Bn = { endpoint: 'deleteAccount', la: ['idToken'] },
    nn = {
      endpoint: 'setAccountInfo',
      la: ['idToken', 'deleteProvider'],
      K: function (a) {
        if (!Array.isArray(a.deleteProvider)) throw new R('internal-error')
      },
    },
    am = {
      endpoint: 'emailLinkSignin',
      la: ['email', 'oobCode'],
      K: Mm,
      V: Zm,
      Va: !0,
      N: !0,
    },
    cm = {
      endpoint: 'emailLinkSignin',
      la: ['idToken', 'email', 'oobCode'],
      K: Mm,
      V: Zm,
      Va: !0,
    },
    Cn = {
      endpoint: 'accounts/mfaEnrollment:finalize',
      la: ['idToken', 'phoneVerificationInfo'],
      K: ln,
      V: Zm,
      N: !0,
      le: !0,
    },
    Dn = {
      endpoint: 'accounts/mfaSignIn:finalize',
      la: ['mfaPendingCredential', 'phoneVerificationInfo'],
      K: ln,
      V: Zm,
      N: !0,
      le: !0,
    },
    En = { endpoint: 'getAccountInfo' },
    Om = {
      endpoint: 'createAuthUri',
      K: function (a) {
        if (!a.continueUri) throw new R('missing-continue-uri')
        if (!a.providerId)
          throw new R(
            'internal-error',
            'A provider ID must be provided in the request.'
          )
      },
      V: function (a) {
        if (!a.authUri)
          throw new R(
            'internal-error',
            'Unable to determine the authorization endpoint for the specified provider. This may be an issue in the provider configuration.'
          )
        if (!a.sessionId) throw new R('internal-error')
      },
      N: !0,
    },
    en = {
      endpoint: 'getOobConfirmationCode',
      la: ['requestType'],
      K: function (a) {
        if ('EMAIL_SIGNIN' != a.requestType) throw new R('internal-error')
        Mm(a)
      },
      hb: 'email',
      N: !0,
    },
    fn = {
      endpoint: 'getOobConfirmationCode',
      la: ['idToken', 'requestType'],
      K: function (a) {
        if ('VERIFY_EMAIL' != a.requestType) throw new R('internal-error')
      },
      hb: 'email',
      N: !0,
    },
    gn = {
      endpoint: 'getOobConfirmationCode',
      la: ['idToken', 'newEmail', 'requestType'],
      K: function (a) {
        if ('VERIFY_AND_CHANGE_EMAIL' != a.requestType)
          throw new R('internal-error')
      },
      hb: 'email',
      N: !0,
    },
    dn = {
      endpoint: 'getOobConfirmationCode',
      la: ['requestType'],
      K: function (a) {
        if ('PASSWORD_RESET' != a.requestType) throw new R('internal-error')
        Mm(a)
      },
      hb: 'email',
      N: !0,
    },
    Sm = { ue: !0, endpoint: 'getProjectConfig', httpMethod: 'GET' },
    Fn = {
      ue: !0,
      endpoint: 'getRecaptchaParam',
      httpMethod: 'GET',
      V: function (a) {
        if (!a.recaptchaSiteKey) throw new R('internal-error')
      },
    },
    xn = { endpoint: 'resetPassword', K: wn, hb: 'email', N: !0 },
    Gn = {
      ue: !0,
      endpoint: 'getProjectConfig',
      httpMethod: 'GET',
      hb: 'dynamicLinksDomain',
    },
    hn = {
      endpoint: 'sendVerificationCode',
      la: ['phoneNumber', 'recaptchaToken'],
      hb: 'sessionInfo',
      N: !0,
    },
    bn = { endpoint: 'setAccountInfo', la: ['idToken'], K: Nm, Va: !0 },
    dm = {
      endpoint: 'setAccountInfo',
      la: ['idToken'],
      K: function (a) {
        Nm(a)
        if (!a.password) throw new R('weak-password')
      },
      V: Zm,
      Va: !0,
    },
    an = { endpoint: 'signupNewUser', V: Zm, Va: !0, N: !0 },
    kn = {
      endpoint: 'accounts/mfaEnrollment:start',
      la: ['idToken', 'phoneEnrollmentInfo'],
      K: function (a) {
        if (!a.phoneEnrollmentInfo) throw new R('internal-error')
        if (!a.phoneEnrollmentInfo.phoneNumber)
          throw new R('missing-phone-number')
        if (!a.phoneEnrollmentInfo.recaptchaToken)
          throw new R('missing-app-credential')
      },
      V: function (a) {
        if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
          throw new R('internal-error')
      },
      N: !0,
      le: !0,
    },
    mn = {
      endpoint: 'accounts/mfaSignIn:start',
      la: ['mfaPendingCredential', 'mfaEnrollmentId', 'phoneSignInInfo'],
      K: function (a) {
        if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
          throw new R('missing-app-credential')
      },
      V: function (a) {
        if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
          throw new R('internal-error')
      },
      N: !0,
      le: !0,
    },
    tn = { endpoint: 'verifyAssertion', K: pn, tf: qn, V: sn, Va: !0, N: !0 },
    vn = {
      endpoint: 'verifyAssertion',
      K: pn,
      tf: qn,
      V: function (a) {
        if (a.errorMessage && 'USER_NOT_FOUND' == a.errorMessage)
          throw new R('user-not-found')
        if (a.errorMessage) throw rn(a.errorMessage)
        Zm(a)
      },
      Va: !0,
      N: !0,
    },
    un = {
      endpoint: 'verifyAssertion',
      K: function (a) {
        pn(a)
        if (!a.idToken) throw new R('internal-error')
      },
      tf: qn,
      V: sn,
      Va: !0,
    },
    Hn = {
      endpoint: 'verifyCustomToken',
      K: function (a) {
        if (!a.token) throw new R('invalid-custom-token')
      },
      V: Zm,
      Va: !0,
      N: !0,
    },
    bm = {
      endpoint: 'verifyPassword',
      K: function (a) {
        Mm(a)
        if (!a.password) throw new R('wrong-password')
      },
      V: Zm,
      Va: !0,
      N: !0,
    },
    jn = { endpoint: 'verifyPhoneNumber', K: $m, V: Zm, N: !0 },
    jm = {
      endpoint: 'verifyPhoneNumber',
      K: function (a) {
        if (!a.idToken) throw new R('internal-error')
        $m(a)
      },
      V: function (a) {
        if (a.temporaryProof)
          throw ((a.code = 'credential-already-in-use'), um(a))
        Zm(a)
      },
    },
    km = {
      Vh: { USER_NOT_FOUND: 'user-not-found' },
      endpoint: 'verifyPhoneNumber',
      K: $m,
      V: Zm,
      N: !0,
    },
    In = {
      endpoint: 'accounts/mfaEnrollment:withdraw',
      la: ['idToken', 'mfaEnrollmentId'],
      V: function (a) {
        if (!!a.idToken ^ !!a.refreshToken) throw new R('internal-error')
      },
      N: !0,
      le: !0,
    }
  var Jn = ha(['https://apis.google.com/js/api.js?onload=', '']),
    Ln = function (a) {
      this.sc = a
      this.Se = null
      this.Sg = Kn(this)
    },
    Kn = function (a) {
      return Mn().then(function () {
        return new K(function (b, c) {
          P('gapi.iframes.getContext')().open(
            {
              where: document.body,
              url: a.sc,
              messageHandlersFilter: P(
                'gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'
              ),
              attributes: {
                style: {
                  position: 'absolute',
                  top: '-100px',
                  width: '1px',
                  height: '1px',
                },
              },
              dontclear: !0,
            },
            function (d) {
              a.Se = d
              a.Se.restyle({ setHideOnLeave: !1 })
              var e = setTimeout(function () {
                  c(Error('Network Error'))
                }, Nn.get()),
                f = function () {
                  clearTimeout(e)
                  b()
                }
              d.ping(f).then(f, function () {
                c(Error('Network Error'))
              })
            }
          )
        })
      })
    }
  Ln.prototype.sendMessage = function (a) {
    var b = this
    return this.Sg.then(function () {
      return new K(function (c) {
        b.Se.send(a.type, a, c, P('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'))
      })
    })
  }
  var On = function (a, b) {
      a.Sg.then(function () {
        a.Se.register(
          'authEvent',
          b,
          P('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER')
        )
      })
    },
    Mn = function () {
      return Pn
        ? Pn
        : (Pn = new K(function (a, b) {
            var c = function () {
              Jk()
              P('gapi.load')('gapi.iframes', {
                callback: a,
                ontimeout: function () {
                  Jk()
                  b(Error('Network Error'))
                },
                timeout: Qn.get(),
              })
            }
            if (P('gapi.iframes.Iframe')) a()
            else if (P('gapi.load')) c()
            else {
              var d = '__iframefcb' + Math.floor(1e6 * Math.random()).toString()
              q[d] = function () {
                P('gapi.load') ? c() : b(Error('Network Error'))
              }
              d = $d(Jn, d)
              L(Gj(d)).h(function () {
                b(Error('Network Error'))
              })
            }
          }).h(function (a) {
            Pn = null
            throw a
          }))
    },
    Qn = new Kk(3e4, 6e4),
    Nn = new Kk(5e3, 15e3),
    Pn = null
  var Rn = function (a, b, c, d) {
    this.O = a
    this.G = b
    this.D = c
    this.u = d
    this.uc = null
    this.u
      ? ((a = E(this.u.url)),
        (a = xd(a.ma, a.ga, a.gb, '/emulator/auth/iframe', null, null)))
      : (a = xd('https', this.O, null, '/__/auth/iframe', null, null))
    this.wb = a
    B(this.wb, 'apiKey', this.G)
    B(this.wb, 'appName', this.D)
    this.ya = null
    this.Z = []
  }
  Rn.prototype.ph = function (a) {
    this.uc = a
    return this
  }
  Rn.prototype.lh = function (a) {
    this.ya = a
    return this
  }
  Rn.prototype.toString = function () {
    this.uc ? B(this.wb, 'v', this.uc) : this.wb.removeParameter('v')
    this.ya ? B(this.wb, 'eid', this.ya) : this.wb.removeParameter('eid')
    this.Z.length
      ? B(this.wb, 'fw', this.Z.join(','))
      : this.wb.removeParameter('fw')
    return this.wb.toString()
  }
  var Sn = function (a, b, c, d, e, f) {
    this.O = a
    this.G = b
    this.D = c
    this.Xj = d
    this.u = f
    this.uc = this.X = this.dd = null
    this.bd = e
    this.M = this.ya = null
  }
  Sn.prototype.oh = function (a) {
    this.M = a
    return this
  }
  Sn.prototype.ph = function (a) {
    this.uc = a
    return this
  }
  Sn.prototype.lh = function (a) {
    this.ya = a
    return this
  }
  Sn.prototype.toString = function () {
    if (this.u) {
      var a = E(this.u.url)
      a = xd(a.ma, a.ga, a.gb, '/emulator/auth/handler', null, null)
    } else a = xd('https', this.O, null, '/__/auth/handler', null, null)
    B(a, 'apiKey', this.G)
    B(a, 'appName', this.D)
    B(a, 'authType', this.Xj)
    if (this.bd.isOAuthProvider) {
      var b = this.bd
      try {
        var c = firebase.app(this.D).auth().Qa
      } catch (f) {
        c = null
      }
      b.lg = c
      B(a, 'providerId', this.bd.providerId)
      c = this.bd
      b = Fk(c.Wh)
      for (var d in b) b[d] = b[d].toString()
      d = Gk(b, c.Al)
      c.Kg && c.lg && !d[c.Kg] && (d[c.Kg] = c.lg)
      hc(d) || B(a, 'customParameters', Ek(d))
    }
    'function' === typeof this.bd.ri &&
      ((d = this.bd.ri()), d.length && B(a, 'scopes', d.join(',')))
    this.dd ? B(a, 'redirectUrl', this.dd) : a.removeParameter('redirectUrl')
    this.X ? B(a, 'eventId', this.X) : a.removeParameter('eventId')
    this.uc ? B(a, 'v', this.uc) : a.removeParameter('v')
    if (this.oe)
      for (var e in this.oe)
        this.oe.hasOwnProperty(e) && !D(a, e) && B(a, e, this.oe[e])
    this.M ? B(a, 'tid', this.M) : a.removeParameter('tid')
    this.ya ? B(a, 'eid', this.ya) : a.removeParameter('eid')
    e = Tn(this.D)
    e.length && B(a, 'fw', e.join(','))
    return a.toString()
  }
  var Tn = function (a) {
      try {
        return vb(firebase.app(a).auth().Z)
      } catch (b) {
        return []
      }
    },
    Un = function (a, b, c, d, e, f) {
      this.O = a
      this.G = b
      this.D = c
      this.u = f
      this.bb = d || null
      this.ya = e || null
      this.j = this.Cg = this.mi = null
      this.lb = []
      this.We = this.sb = null
    },
    Vn = function (a) {
      var b = b || Zj()
      return Tm(a).then(function (c) {
        if (!lk(c, b)) throw new zl(Zj())
      })
    }
  k = Un.prototype
  k.initialize = function () {
    if (this.We) return this.We
    var a = this
    return (this.We = nk().then(function () {
      if (!a.Cg) {
        var b = a.O,
          c = a.G,
          d = a.D,
          e = a.bb,
          f = a.ya,
          g = Tn(a.D)
        b = new Rn(b, c, d, a.u).ph(e).lh(f)
        b.Z = vb(g || [])
        a.Cg = b.toString()
      }
      a.Re = new Ln(a.Cg)
      Wn(a)
    }))
  }
  k.ee = function (a, b, c) {
    var d = new R('popup-closed-by-user'),
      e = new R('web-storage-unsupported'),
      f = this,
      g = !1
    return this.fc()
      .then(function () {
        Xn(f).then(function (h) {
          h || (a && gk(a), b(e), (g = !0))
        })
      })
      .h(function () {})
      .then(function () {
        if (!g) return jk(a)
      })
      .then(function () {
        if (!g)
          return mh(c).then(function () {
            b(d)
          })
      })
  }
  k.xj = function () {
    var a = Xj()
    return !Dk(a) && !Ik(a)
  }
  k.xi = function () {
    return !1
  }
  k.Qd = function (a, b, c, d, e, f, g, h) {
    if (!a) return M(new R('popup-blocked'))
    if (g && !Dk())
      return (
        this.fc().h(function (m) {
          gk(a)
          e(m)
        }),
        d(),
        L()
      )
    this.sb || (this.sb = Vn(Yn(this)))
    var l = this
    return this.sb
      .then(function () {
        var m = l.fc().h(function (n) {
          gk(a)
          e(n)
          throw n
        })
        d()
        return m
      })
      .then(function () {
        sm(c)
        if (!g) {
          var m = Zn(l.O, l.G, l.D, b, c, null, f, l.bb, void 0, l.ya, h, l.u)
          ak(m, a)
        }
      })
      .h(function (m) {
        'auth/network-request-failed' == m.code && (l.sb = null)
        throw m
      })
  }
  var Yn = function (a) {
    a.j ||
      ((a.mi = a.bb ? yk('JsCore', a.bb, Tn(a.D)) : null),
      (a.j = new Bm(a.G, Vj(a.ya), a.mi)),
      a.u && Fm(a.j, a.u))
    return a.j
  }
  Un.prototype.Rd = function (a, b, c, d) {
    this.sb || (this.sb = Vn(Yn(this)))
    var e = this
    return this.sb
      .then(function () {
        sm(b)
        var f = Zn(e.O, e.G, e.D, a, b, Zj(), c, e.bb, void 0, e.ya, d, e.u)
        ak(f)
      })
      .h(function (f) {
        'auth/network-request-failed' == f.code && (e.sb = null)
        throw f
      })
  }
  Un.prototype.fc = function () {
    var a = this
    return this.initialize()
      .then(function () {
        return a.Re.Sg
      })
      .h(function () {
        a.sb = null
        throw new R('network-request-failed')
      })
  }
  Un.prototype.Dj = function () {
    return !0
  }
  var Zn = function (a, b, c, d, e, f, g, h, l, m, n, r) {
      a = new Sn(a, b, c, d, e, r)
      a.dd = f
      a.X = g
      f = a.ph(h)
      f.oe = ic(l || null)
      return f.lh(m).oh(n).toString()
    },
    Wn = function (a) {
      if (!a.Re) throw Error('IfcHandler must be initialized!')
      On(a.Re, function (b) {
        var c = {}
        if (b && b.authEvent) {
          var d = !1
          b = kl(b.authEvent)
          for (c = 0; c < a.lb.length; c++) d = a.lb[c](b) || d
          c = {}
          c.status = d ? 'ACK' : 'ERROR'
          return L(c)
        }
        c.status = 'ERROR'
        return L(c)
      })
    },
    Xn = function (a) {
      var b = { type: 'webStorageSupport' }
      return a
        .initialize()
        .then(function () {
          return a.Re.sendMessage(b)
        })
        .then(function (c) {
          if (c && c.length && 'undefined' !== typeof c[0].webStorageSupport)
            return c[0].webStorageSupport
          throw Error()
        })
    }
  Un.prototype.wc = function (a) {
    this.lb.push(a)
  }
  Un.prototype.Xd = function (a) {
    ub(this.lb, function (b) {
      return b == a
    })
  }
  function $n() {}
  $n.prototype.render = function () {}
  $n.prototype.reset = function () {}
  $n.prototype.getResponse = function () {}
  $n.prototype.execute = function () {}
  var ao = ha([
      'https://www.google.com/recaptcha/api.js?trustedtypes=true&onload=',
      '&render=explicit&hl=',
      '',
    ]),
    bo = function () {
      this.Dc = q.grecaptcha ? Infinity : 0
      this.Nc = null
      this.gg = '__rcb' + Math.floor(1e6 * Math.random()).toString()
    }
  bo.prototype.Ni = function (a) {
    var b = this
    return new K(function (c, d) {
      var e = setTimeout(function () {
        d(new R('network-request-failed'))
      }, co.get())
      if (!q.grecaptcha || (a !== b.Nc && !b.Dc)) {
        q[b.gg] = function () {
          if (q.grecaptcha) {
            b.Nc = a
            var g = q.grecaptcha.render
            q.grecaptcha.render = function (h, l) {
              h = g(h, l)
              b.Dc++
              return h
            }
            clearTimeout(e)
            c(q.grecaptcha)
          } else clearTimeout(e), d(new R('internal-error'))
          delete q[b.gg]
        }
        var f = $d(ao, b.gg, a || '')
        L(Gj(f)).h(function () {
          clearTimeout(e)
          d(
            new R(
              'internal-error',
              'Unable to load external reCAPTCHA dependencies!'
            )
          )
        })
      } else clearTimeout(e), c(q.grecaptcha)
    })
  }
  bo.prototype.Nh = function () {
    this.Dc--
  }
  var co = new Kk(3e4, 6e4),
    eo = null
  var fo = function () {
    this.Ng = {}
    this.Dc = 1e12
  }
  fo.prototype.render = function (a, b) {
    this.Ng[this.Dc.toString()] = new go(a, b)
    return this.Dc++
  }
  fo.prototype.reset = function (a) {
    var b = ho(this, a)
    a = io(a)
    b && a && (b.delete(), delete this.Ng[a])
  }
  fo.prototype.getResponse = function (a) {
    return (a = ho(this, a)) ? a.getResponse() : null
  }
  fo.prototype.execute = function (a) {
    ;(a = ho(this, a)) && a.execute()
  }
  var ho = function (a, b) {
      return (b = io(b)) ? a.Ng[b] || null : null
    },
    io = function (a) {
      return (a = 'undefined' === typeof a ? 1e12 : a) ? a.toString() : null
    },
    jo = null,
    go = function (a, b) {
      this.Ka = !1
      this.v = b
      this.hd = this.uf = null
      this.Ji = 'invisible' !== this.v.size
      this.i = Pe(a)
      var c = this
      this.Ui = function () {
        c.execute()
      }
      this.Ji ? this.execute() : I(this.i, 'click', this.Ui)
    }
  go.prototype.getResponse = function () {
    ko(this)
    return this.uf
  }
  go.prototype.execute = function () {
    ko(this)
    var a = this
    this.hd ||
      (this.hd = setTimeout(function () {
        a.uf = wk()
        var b = a.v.callback,
          c = a.v['expired-callback']
        if (b)
          try {
            b(a.uf)
          } catch (d) {}
        a.hd = setTimeout(function () {
          a.hd = null
          a.uf = null
          if (c)
            try {
              c()
            } catch (d) {}
          a.Ji && a.execute()
        }, 6e4)
      }, 500))
  }
  go.prototype.delete = function () {
    ko(this)
    this.Ka = !0
    clearTimeout(this.hd)
    this.hd = null
    jg(this.i, 'click', this.Ui)
  }
  var ko = function (a) {
    if (a.Ka) throw Error('reCAPTCHA mock was already deleted!')
  }
  var lo = function () {}
  lo.prototype.Ni = function () {
    jo || (jo = new fo())
    return L(jo)
  }
  lo.prototype.Nh = function () {}
  var mo = null
  var no = function (a, b, c, d, e, f, g) {
    Q(this, 'type', 'recaptcha')
    this.md = this.od = null
    this.td = !1
    this.pb = b
    this.Dd = null
    g ? (mo || (mo = new lo()), (g = mo)) : (eo || (eo = new bo()), (g = eo))
    this.kj = g
    this.fb = c || { theme: 'light', type: 'image' }
    this.ia = []
    if (this.fb.sitekey)
      throw new R(
        'argument-error',
        'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.'
      )
    this.Xe = 'invisible' === this.fb.size
    if (!q.document)
      throw new R(
        'operation-not-supported-in-this-environment',
        'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.'
      )
    if (!Pe(b) || (!this.Xe && Pe(b).hasChildNodes()))
      throw new R(
        'argument-error',
        'reCAPTCHA container is either not found or already contains inner elements!'
      )
    this.j = new Bm(a, f || null, e || null)
    this.rk =
      d ||
      function () {
        return null
      }
    var h = this
    this.Kf = []
    var l = this.fb.callback
    this.fb.callback = function (n) {
      h.ud(n)
      if ('function' === typeof l) l(n)
      else if ('string' === typeof l) {
        var r = P(l, q)
        'function' === typeof r && r(n)
      }
    }
    var m = this.fb['expired-callback']
    this.fb['expired-callback'] = function () {
      h.ud(null)
      if ('function' === typeof m) m()
      else if ('string' === typeof m) {
        var n = P(m, q)
        'function' === typeof n && n()
      }
    }
  }
  no.prototype.ud = function (a) {
    for (var b = 0; b < this.Kf.length; b++)
      try {
        this.Kf[b](a)
      } catch (c) {}
  }
  var oo = function (a, b) {
    ub(a.Kf, function (c) {
      return c == b
    })
  }
  k = no.prototype
  k.m = function (a) {
    var b = this
    this.ia.push(a)
    a.Ob(function () {
      sb(b.ia, a)
    })
    return a
  }
  k.Hd = function () {
    var a = this
    return this.od
      ? this.od
      : (this.od = this.m(
          L()
            .then(function () {
              if (Bk() && !tk()) return nk()
              throw new R(
                'operation-not-supported-in-this-environment',
                'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.'
              )
            })
            .then(function () {
              return a.kj.Ni(a.rk())
            })
            .then(function (b) {
              a.Dd = b
              return S(a.j, Fn, {})
            })
            .then(function (b) {
              a.fb.sitekey = b.recaptchaSiteKey
            })
            .h(function (b) {
              a.od = null
              throw b
            })
        ))
  }
  k.render = function () {
    po(this)
    var a = this
    return this.m(
      this.Hd().then(function () {
        if (null === a.md) {
          var b = a.pb
          if (!a.Xe) {
            var c = Pe(b)
            b = We('DIV')
            c.appendChild(b)
          }
          a.md = a.Dd.render(b, a.fb)
        }
        return a.md
      })
    )
  }
  k.verify = function () {
    po(this)
    var a = this
    return this.m(
      this.render().then(function (b) {
        return new K(function (c) {
          var d = a.Dd.getResponse(b)
          if (d) c(d)
          else {
            var e = function (f) {
              f && (oo(a, e), c(f))
            }
            a.Kf.push(e)
            a.Xe && a.Dd.execute(a.md)
          }
        })
      })
    )
  }
  k.reset = function () {
    po(this)
    null !== this.md && this.Dd.reset(this.md)
  }
  var po = function (a) {
    if (a.td)
      throw new R(
        'internal-error',
        'RecaptchaVerifier instance has been destroyed.'
      )
  }
  no.prototype.clear = function () {
    po(this)
    this.td = !0
    this.kj.Nh()
    for (var a = 0; a < this.ia.length; a++)
      this.ia[a].cancel('RecaptchaVerifier instance has been destroyed.')
    this.Xe || $e(Pe(this.pb))
  }
  var qo = function (a, b, c) {
    var d = !1
    try {
      this.A = c || firebase.app()
    } catch (g) {
      throw new R(
        'argument-error',
        'No firebase.app.App instance is currently initialized.'
      )
    }
    if (this.A.options && this.A.options.apiKey) c = this.A.options.apiKey
    else throw new R('invalid-api-key')
    var e = this,
      f = null
    try {
      f = vb(this.A.auth().Z)
    } catch (g) {}
    try {
      d = this.A.auth().settings.appVerificationDisabledForTesting
    } catch (g) {}
    f = firebase.SDK_VERSION ? yk('JsCore', firebase.SDK_VERSION, f) : null
    no.call(
      this,
      c,
      a,
      b,
      function () {
        try {
          var g = e.A.auth().Qa
        } catch (h) {
          g = null
        }
        return g
      },
      f,
      Vj(Wj),
      d
    )
  }
  w(qo, no)
  var ro = function (a, b) {
    this.em = a
    this.Vl = b || '*'
  }
  ro.prototype.postMessage = function (a, b) {
    this.em.postMessage(a, this.Vl, b)
  }
  var so = function (a) {
    this.ne = a
  }
  so.prototype.postMessage = function (a, b) {
    this.ne.postMessage(a, b)
  }
  var to = function (a) {
      this.tl = a
      this.Oh = !1
      this.ef = []
    },
    uo = function (a, b, c, d) {
      var e = Date.now()
      return a.send(b, c).h(function (f) {
        if (f && 'connection_unavailable' === f.message) throw f
        var g = Date.now() - e
        if (g > d) throw f
        return uo(a, b, c, d - g)
      })
    }
  to.prototype.send = function (a, b, c) {
    b = void 0 === b ? null : b
    c = void 0 === c ? !1 : c
    var d = this,
      e
    b = b || {}
    var f,
      g,
      h,
      l = null
    if (this.Oh) return M(Error('connection_unavailable'))
    var m = c ? 800 : 50,
      n = 'undefined' !== typeof MessageChannel ? new MessageChannel() : null
    return new K(function (r, u) {
      n
        ? ((e = '' + Math.floor(Math.random() * Math.pow(10, 20)).toString()),
          n.port1.start(),
          (g = setTimeout(function () {
            u(Error('unsupported_event'))
          }, m)),
          (f = function (C) {
            C.data.eventId === e &&
              ('ack' === C.data.status
                ? (clearTimeout(g),
                  (h = setTimeout(function () {
                    u(Error('timeout'))
                  }, 3e3)))
                : 'done' === C.data.status
                  ? (clearTimeout(h),
                    'undefined' !== typeof C.data.response
                      ? r(C.data.response)
                      : u(Error('unknown_error')))
                  : (clearTimeout(g),
                    clearTimeout(h),
                    u(Error('invalid_response'))))
          }),
          (l = { messageChannel: n, onMessage: f }),
          d.ef.push(l),
          n.port1.addEventListener('message', f),
          d.tl.postMessage({ eventType: a, eventId: e, data: b }, [n.port2]))
        : u(Error('connection_unavailable'))
    })
      .then(function (r) {
        vo(d, l)
        return r
      })
      .h(function (r) {
        vo(d, l)
        throw r
      })
  }
  var vo = function (a, b) {
    if (b) {
      var c = b.messageChannel,
        d = b.onMessage
      c && (c.port1.removeEventListener('message', d), c.port1.close())
      ub(a.ef, function (e) {
        return e == b
      })
    }
  }
  to.prototype.close = function () {
    for (; 0 < this.ef.length; ) vo(this, this.ef[0])
    this.Oh = !0
  }
  var wo = function (a) {
      this.qg = a
      this.Oa = {}
      this.Pi = v(this.wk, this)
    },
    yo = function () {
      var a = tk() ? self : null
      A(xo, function (c) {
        c.qg == a && (b = c)
      })
      if (!b) {
        var b = new wo(a)
        xo.push(b)
      }
      return b
    }
  wo.prototype.wk = function (a) {
    var b = a.data.eventType,
      c = a.data.eventId,
      d = this.Oa[b]
    if (d && 0 < d.length) {
      a.ports[0].postMessage({
        status: 'ack',
        eventId: c,
        eventType: b,
        response: null,
      })
      var e = []
      A(d, function (f) {
        e.push(
          L().then(function () {
            return f(a.origin, a.data.data)
          })
        )
      })
      $g(e).then(function (f) {
        var g = []
        A(f, function (h) {
          g.push({
            fulfilled: h.li,
            value: h.value,
            reason: h.reason ? h.reason.message : void 0,
          })
        })
        A(g, function (h) {
          for (var l in h) 'undefined' === typeof h[l] && delete h[l]
        })
        a.ports[0].postMessage({
          status: 'done',
          eventId: c,
          eventType: b,
          response: g,
        })
      })
    }
  }
  wo.prototype.subscribe = function (a, b) {
    hc(this.Oa) && this.qg.addEventListener('message', this.Pi)
    'undefined' === typeof this.Oa[a] && (this.Oa[a] = [])
    this.Oa[a].push(b)
  }
  wo.prototype.unsubscribe = function (a, b) {
    'undefined' !== typeof this.Oa[a] && b
      ? (ub(this.Oa[a], function (c) {
          return c == b
        }),
        0 == this.Oa[a].length && delete this.Oa[a])
      : b || delete this.Oa[a]
    hc(this.Oa) && this.qg.removeEventListener('message', this.Pi)
  }
  var xo = []
  var zo = function (a) {
    this.Ja =
      a ||
      (firebase.INTERNAL.reactNative &&
        firebase.INTERNAL.reactNative.AsyncStorage)
    if (!this.Ja)
      throw new R(
        'internal-error',
        'The React Native compatibility library was not found.'
      )
    this.type = 'asyncStorage'
  }
  k = zo.prototype
  k.get = function (a) {
    return L(this.Ja.getItem(a)).then(function (b) {
      return b && Hk(b)
    })
  }
  k.set = function (a, b) {
    return L(this.Ja.setItem(a, Ek(b)))
  }
  k.remove = function (a) {
    return L(this.Ja.removeItem(a))
  }
  k.zb = function () {}
  k.Mb = function () {}
  function Ao() {
    this.storage = {}
    this.type = 'inMemory'
  }
  k = Ao.prototype
  k.get = function (a) {
    return L(this.storage[a])
  }
  k.set = function (a, b) {
    this.storage[a] = b
    return L()
  }
  k.remove = function (a) {
    delete this.storage[a]
    return L()
  }
  k.zb = function () {}
  k.Mb = function () {}
  var Do = function () {
      if (!Bo()) {
        if ('Node' == uk())
          throw new R(
            'internal-error',
            'The LocalStorage compatibility library was not found.'
          )
        throw new R('web-storage-unsupported')
      }
      this.Ja = Co() || firebase.INTERNAL.node.localStorage
      this.type = 'localStorage'
    },
    Co = function () {
      try {
        var a = q.localStorage,
          b = zk()
        a && (a.setItem(b, '1'), a.removeItem(b))
        return a
      } catch (c) {
        return null
      }
    },
    Bo = function () {
      var a = 'Node' == uk()
      a =
        Co() ||
        (a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage)
      if (!a) return !1
      try {
        return a.setItem('__sak', '1'), a.removeItem('__sak'), !0
      } catch (b) {
        return !1
      }
    }
  k = Do.prototype
  k.get = function (a) {
    var b = this
    return L().then(function () {
      var c = b.Ja.getItem(a)
      return Hk(c)
    })
  }
  k.set = function (a, b) {
    var c = this
    return L().then(function () {
      var d = Ek(b)
      null === d ? c.remove(a) : c.Ja.setItem(a, d)
    })
  }
  k.remove = function (a) {
    var b = this
    return L().then(function () {
      b.Ja.removeItem(a)
    })
  }
  k.zb = function (a) {
    q.window && I(q.window, 'storage', a)
  }
  k.Mb = function (a) {
    q.window && jg(q.window, 'storage', a)
  }
  var Eo = function () {
    this.Ja = {}
    this.type = 'nullStorage'
  }
  k = Eo.prototype
  k.get = function () {
    return L(null)
  }
  k.set = function () {
    return L()
  }
  k.remove = function () {
    return L()
  }
  k.zb = function () {}
  k.Mb = function () {}
  var Ho = function () {
      if (!Fo()) {
        if ('Node' == uk())
          throw new R(
            'internal-error',
            'The SessionStorage compatibility library was not found.'
          )
        throw new R('web-storage-unsupported')
      }
      this.Ja = Go() || firebase.INTERNAL.node.sessionStorage
      this.type = 'sessionStorage'
    },
    Go = function () {
      try {
        var a = q.sessionStorage,
          b = zk()
        a && (a.setItem(b, '1'), a.removeItem(b))
        return a
      } catch (c) {
        return null
      }
    },
    Fo = function () {
      var a = 'Node' == uk()
      a =
        Go() ||
        (a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage)
      if (!a) return !1
      try {
        return a.setItem('__sak', '1'), a.removeItem('__sak'), !0
      } catch (b) {
        return !1
      }
    }
  k = Ho.prototype
  k.get = function (a) {
    var b = this
    return L().then(function () {
      var c = b.Ja.getItem(a)
      return Hk(c)
    })
  }
  k.set = function (a, b) {
    var c = this
    return L().then(function () {
      var d = Ek(b)
      null === d ? c.remove(a) : c.Ja.setItem(a, d)
    })
  }
  k.remove = function (a) {
    var b = this
    return L().then(function () {
      b.Ja.removeItem(a)
    })
  }
  k.zb = function () {}
  k.Mb = function () {}
  var Ko = function () {
      if (!Io()) throw new R('web-storage-unsupported')
      this.Xh = 'firebaseLocalStorageDb'
      this.gf = 'firebaseLocalStorage'
      this.kg = 'fbase_key'
      this.Mj = 'value'
      this.bm = 1
      this.sa = {}
      this.jb = []
      this.Nd = 0
      this.Di = q.indexedDB
      this.type = 'indexedDB'
      this.Af = this.eh = this.pf = this.Wg = null
      this.qj = !1
      this.Tf = null
      var a = this
      tk() && self
        ? ((this.eh = yo()),
          this.eh.subscribe('keyChanged', function (b, c) {
            return Jo(a).then(function (d) {
              0 < d.length &&
                A(a.jb, function (e) {
                  e(d)
                })
              return { keyProcessed: rb(d, c.key) }
            })
          }),
          this.eh.subscribe('ping', function () {
            return L(['keyChanged'])
          }))
        : Sk().then(function (b) {
            if ((a.Tf = b))
              (a.Af = new to(new so(b))),
                a.Af.send('ping', null, !0)
                  .then(function (c) {
                    c[0].fulfilled &&
                      rb(c[0].value, 'keyChanged') &&
                      (a.qj = !0)
                  })
                  .h(function () {})
          })
    },
    Lo,
    Mo = function (a) {
      return new K(function (b, c) {
        var d = a.Di.deleteDatabase(a.Xh)
        d.onsuccess = function () {
          b()
        }
        d.onerror = function (e) {
          c(Error(e.target.error))
        }
      })
    },
    No = function (a) {
      return new K(function (b, c) {
        var d = a.Di.open(a.Xh, a.bm)
        d.onerror = function (e) {
          try {
            e.preventDefault()
          } catch (f) {}
          c(Error(e.target.error))
        }
        d.onupgradeneeded = function (e) {
          e = e.target.result
          try {
            e.createObjectStore(a.gf, { keyPath: a.kg })
          } catch (f) {
            c(f)
          }
        }
        d.onsuccess = function (e) {
          e = e.target.result
          e.objectStoreNames.contains(a.gf)
            ? b(e)
            : Mo(a)
                .then(function () {
                  return No(a)
                })
                .then(function (f) {
                  b(f)
                })
                .h(function (f) {
                  c(f)
                })
        }
      })
    },
    Oo = function (a) {
      a.Eg || (a.Eg = No(a))
      return a.Eg
    },
    Po = function (a, b) {
      var c = 0,
        d = function (e, f) {
          Oo(a)
            .then(b)
            .then(e)
            .h(function (g) {
              if (3 < ++c) f(g)
              else
                return Oo(a)
                  .then(function (h) {
                    h.close()
                    a.Eg = void 0
                    return d(e, f)
                  })
                  .h(function (h) {
                    f(h)
                  })
            })
        }
      return new K(d)
    },
    Io = function () {
      try {
        return !!q.indexedDB
      } catch (a) {
        return !1
      }
    },
    Qo = function (a, b) {
      return b.objectStore(a.gf)
    },
    Ro = function (a, b, c) {
      return b.transaction([a.gf], c ? 'readwrite' : 'readonly')
    },
    So = function (a) {
      return new K(function (b, c) {
        a.onsuccess = function (d) {
          d && d.target ? b(d.target.result) : b()
        }
        a.onerror = function (d) {
          c(d.target.error)
        }
      })
    }
  Ko.prototype.set = function (a, b) {
    var c = this,
      d = !1
    return Po(this, function (e) {
      e = Qo(c, Ro(c, e, !0))
      return So(e.get(a))
    })
      .then(function (e) {
        return Po(c, function (f) {
          f = Qo(c, Ro(c, f, !0))
          if (e) return (e.value = b), So(f.put(e))
          c.Nd++
          d = !0
          var g = {}
          g[c.kg] = a
          g[c.Mj] = b
          return So(f.add(g))
        })
      })
      .then(function () {
        c.sa[a] = b
        return To(c, a)
      })
      .Ob(function () {
        d && c.Nd--
      })
  }
  var To = function (a, b) {
    return a.Af && a.Tf && Rk() === a.Tf
      ? a.Af.send('keyChanged', { key: b }, a.qj)
          .then(function () {})
          .h(function () {})
      : L()
  }
  Ko.prototype.get = function (a) {
    var b = this
    return Po(this, function (c) {
      return So(Qo(b, Ro(b, c, !1)).get(a))
    }).then(function (c) {
      return c && c.value
    })
  }
  Ko.prototype.remove = function (a) {
    var b = !1,
      c = this
    return Po(this, function (d) {
      b = !0
      c.Nd++
      return So(Qo(c, Ro(c, d, !0))['delete'](a))
    })
      .then(function () {
        delete c.sa[a]
        return To(c, a)
      })
      .Ob(function () {
        b && c.Nd--
      })
  }
  var Jo = function (a) {
    return Oo(a)
      .then(function (b) {
        var c = Qo(a, Ro(a, b, !1))
        return c.getAll
          ? So(c.getAll())
          : new K(function (d, e) {
              var f = [],
                g = c.openCursor()
              g.onsuccess = function (h) {
                ;(h = h.target.result)
                  ? (f.push(h.value), h['continue']())
                  : d(f)
              }
              g.onerror = function (h) {
                e(h.target.error)
              }
            })
      })
      .then(function (b) {
        var c = {},
          d = []
        if (0 == a.Nd) {
          for (d = 0; d < b.length; d++) c[b[d][a.kg]] = b[d][a.Mj]
          d = ck(a.sa, c)
          a.sa = c
        }
        return d
      })
  }
  Ko.prototype.zb = function (a) {
    0 == this.jb.length && this.rh()
    this.jb.push(a)
  }
  Ko.prototype.Mb = function (a) {
    ub(this.jb, function (b) {
      return b == a
    })
    0 == this.jb.length && this.Ef()
  }
  Ko.prototype.rh = function () {
    var a = this
    this.Ef()
    var b = function () {
      a.pf = setTimeout(function () {
        a.Wg = Jo(a)
          .then(function (c) {
            0 < c.length &&
              A(a.jb, function (d) {
                d(c)
              })
          })
          .then(function () {
            b()
          })
          .h(function (c) {
            'STOP_EVENT' != c.message && b()
          })
      }, 800)
    }
    b()
  }
  Ko.prototype.Ef = function () {
    this.Wg && this.Wg.cancel('STOP_EVENT')
    this.pf && (clearTimeout(this.pf), (this.pf = null))
  }
  function Uo(a) {
    var b = this,
      c = null
    this.jb = []
    this.type = 'indexedDB'
    this.di = a
    this.xh = L()
      .then(function () {
        if (Io()) {
          var d = zk(),
            e = '__sak' + d
          Lo || (Lo = new Ko())
          c = Lo
          return c
            .set(e, d)
            .then(function () {
              return c.get(e)
            })
            .then(function (f) {
              if (f !== d) throw Error('indexedDB not supported!')
              return c.remove(e)
            })
            .then(function () {
              return c
            })
            .h(function () {
              return b.di
            })
        }
        return b.di
      })
      .then(function (d) {
        b.type = d.type
        d.zb(function (e) {
          A(b.jb, function (f) {
            f(e)
          })
        })
        return d
      })
  }
  k = Uo.prototype
  k.get = function (a) {
    return this.xh.then(function (b) {
      return b.get(a)
    })
  }
  k.set = function (a, b) {
    return this.xh.then(function (c) {
      return c.set(a, b)
    })
  }
  k.remove = function (a) {
    return this.xh.then(function (b) {
      return b.remove(a)
    })
  }
  k.zb = function (a) {
    this.jb.push(a)
  }
  k.Mb = function (a) {
    ub(this.jb, function (b) {
      return b == a
    })
  }
  var Zo = function () {
      this.og = { Browser: Vo, Node: Wo, ReactNative: Xo, Worker: Yo }[uk()]
    },
    $o,
    Vo = { S: Do, Hf: Ho },
    Wo = { S: Do, Hf: Ho },
    Xo = { S: zo, Hf: Eo },
    Yo = { S: Do, Hf: Eo }
  var ap = function () {
    this.Wf = !1
    Object.defineProperty(this, 'appVerificationDisabled', {
      get: function () {
        return this.Wf
      },
      set: function (a) {
        this.Wf = a
      },
      enumerable: !1,
    })
  }
  var bp = function (a) {
    this.qb(a)
  }
  bp.prototype.qb = function (a) {
    var b = a.url
    if ('undefined' === typeof b) throw new R('missing-continue-uri')
    if ('string' !== typeof b || ('string' === typeof b && !b.length))
      throw new R('invalid-continue-uri')
    this.Cc = b
    this.Bh = this.xc = null
    this.Fi = !1
    var c = a.android
    if (c && 'object' === typeof c) {
      b = c.packageName
      var d = c.installApp
      c = c.minimumVersion
      if ('string' === typeof b && b.length) {
        this.xc = b
        if ('undefined' !== typeof d && 'boolean' !== typeof d)
          throw new R(
            'argument-error',
            'installApp property must be a boolean when specified.'
          )
        this.Fi = !!d
        if (
          'undefined' !== typeof c &&
          ('string' !== typeof c || ('string' === typeof c && !c.length))
        )
          throw new R(
            'argument-error',
            'minimumVersion property must be a non empty string when specified.'
          )
        this.Bh = c || null
      } else {
        if ('undefined' !== typeof b)
          throw new R(
            'argument-error',
            'packageName property must be a non empty string when specified.'
          )
        if ('undefined' !== typeof d || 'undefined' !== typeof c)
          throw new R('missing-android-pkg-name')
      }
    } else if ('undefined' !== typeof c)
      throw new R(
        'argument-error',
        'android property must be a non null object when specified.'
      )
    this.Fd = null
    if ((b = a.iOS) && 'object' === typeof b)
      if (((b = b.bundleId), 'string' === typeof b && b.length)) this.Fd = b
      else {
        if ('undefined' !== typeof b)
          throw new R(
            'argument-error',
            'bundleId property must be a non empty string when specified.'
          )
      }
    else if ('undefined' !== typeof b)
      throw new R(
        'argument-error',
        'iOS property must be a non null object when specified.'
      )
    b = a.handleCodeInApp
    if ('undefined' !== typeof b && 'boolean' !== typeof b)
      throw new R(
        'argument-error',
        'handleCodeInApp property must be a boolean when specified.'
      )
    this.Lh = !!b
    a = a.dynamicLinkDomain
    if (
      'undefined' !== typeof a &&
      ('string' !== typeof a || ('string' === typeof a && !a.length))
    )
      throw new R(
        'argument-error',
        'dynamicLinkDomain property must be a non empty string when specified.'
      )
    this.fk = a || null
  }
  var cp = function (a) {
    var b = {}
    b.continueUrl = a.Cc
    b.canHandleCodeInApp = a.Lh
    if ((b.androidPackageName = a.xc))
      (b.androidMinimumVersion = a.Bh), (b.androidInstallApp = a.Fi)
    b.iOSBundleId = a.Fd
    b.dynamicLinkDomain = a.fk
    for (var c in b) null === b[c] && delete b[c]
    return b
  }
  var dp = function (a, b) {
    this.ek = b
    Q(this, 'verificationId', a)
  }
  dp.prototype.confirm = function (a) {
    a = qm(this.verificationId, a)
    return this.ek(a)
  }
  var ep = function (a, b, c, d) {
    return new mm(a).verifyPhoneNumber(b, c).then(function (e) {
      return new dp(e, d)
    })
  }
  var fp = function (a, b, c) {
    this.ql = a
    this.Fl = b
    this.tk = c
    this.df = 3e4
    this.Ah = 96e4
    this.Gl = !1
    this.Wc = null
    this.ic = this.df
    if (this.Ah < this.df)
      throw Error('Proactive refresh lower bound greater than upper bound!')
  }
  fp.prototype.start = function () {
    this.ic = this.df
    gp(this, !0)
  }
  var hp = function (a, b) {
      if (b) return (a.ic = a.df), a.tk()
      b = a.ic
      a.ic *= 2
      a.ic > a.Ah && (a.ic = a.Ah)
      return b
    },
    gp = function (a, b) {
      a.stop()
      a.Wc = mh(hp(a, b))
        .then(function () {
          return a.Gl ? L() : Mk()
        })
        .then(function () {
          return a.ql()
        })
        .then(function () {
          gp(a, !0)
        })
        .h(function (c) {
          a.Fl(c) && gp(a, !1)
        })
    }
  fp.prototype.stop = function () {
    this.Wc && (this.Wc.cancel(), (this.Wc = null))
  }
  var op = function (a) {
      var b = {}
      b['facebook.com'] = ip
      b['google.com'] = jp
      b['github.com'] = kp
      b['twitter.com'] = lp
      var c = a && a.providerId
      try {
        if (c) return b[c] ? new b[c](a) : new mp(a)
        if ('undefined' !== typeof a.idToken) return new np(a)
      } catch (d) {}
      return null
    },
    np = function (a) {
      var b = a.providerId
      if (!b && a.idToken) {
        var c = Cl(a.idToken)
        c && c.ad && (b = c.ad)
      }
      if (!b) throw Error('Invalid additional user info!')
      if ('anonymous' == b || 'custom' == b) b = null
      c = !1
      'undefined' !== typeof a.isNewUser
        ? (c = !!a.isNewUser)
        : 'identitytoolkit#SignupNewUserResponse' === a.kind && (c = !0)
      Q(this, 'providerId', b)
      Q(this, 'isNewUser', c)
    },
    mp = function (a) {
      np.call(this, a)
      a = Hk(a.rawUserInfo || '{}')
      Q(this, 'profile', al(a || {}))
    }
  p(mp, np)
  var ip = function (a) {
    mp.call(this, a)
    if ('facebook.com' != this.providerId) throw Error('Invalid provider ID!')
  }
  p(ip, mp)
  var kp = function (a) {
    mp.call(this, a)
    if ('github.com' != this.providerId) throw Error('Invalid provider ID!')
    Q(this, 'username', (this.profile && this.profile.login) || null)
  }
  p(kp, mp)
  var jp = function (a) {
    mp.call(this, a)
    if ('google.com' != this.providerId) throw Error('Invalid provider ID!')
  }
  p(jp, mp)
  var lp = function (a) {
    mp.call(this, a)
    if ('twitter.com' != this.providerId) throw Error('Invalid provider ID!')
    Q(this, 'username', a.screenName || null)
  }
  p(lp, mp)
  var pp = { LOCAL: 'local', NONE: 'none', SESSION: 'session' },
    qp = function (a) {
      var b = new R('invalid-persistence-type'),
        c = new R('unsupported-persistence-type')
      a: {
        for (d in pp)
          if (pp[d] == a) {
            var d = !0
            break a
          }
        d = !1
      }
      if (!d || 'string' !== typeof a) throw b
      switch (uk()) {
        case 'ReactNative':
          if ('session' === a) throw c
          break
        case 'Node':
          if ('none' !== a) throw c
          break
        case 'Worker':
          if ('session' === a || (!Io() && 'none' !== a)) throw c
          break
        default:
          if (!Ak() && 'none' !== a) throw c
      }
    },
    rp = function () {
      var a = !Ik(Xj()) && rk() ? !0 : !1,
        b = Dk(),
        c = Ak()
      this.Si = 'firebase'
      this.ih = ':'
      this.Hl = a
      this.mj = b
      this.Nj = c
      this.Ca = {}
      $o || ($o = new Zo())
      a = $o
      try {
        this.cj =
          (!Yj() && Pk()) || !q.indexedDB
            ? new a.og.S()
            : new Uo(tk() ? new Ao() : new a.og.S())
      } catch (d) {
        ;(this.cj = new Ao()), (this.mj = !0)
      }
      try {
        this.Bj = new a.og.Hf()
      } catch (d) {
        this.Bj = new Ao()
      }
      this.Lk = new Ao()
      this.sh = v(this.yj, this)
      this.sa = {}
    },
    sp,
    tp = function () {
      sp || (sp = new rp())
      return sp
    },
    up = function (a, b) {
      switch (b) {
        case 'session':
          return a.Bj
        case 'none':
          return a.Lk
        default:
          return a.cj
      }
    }
  rp.prototype.Ga = function (a, b) {
    return this.Si + this.ih + a.name + (b ? this.ih + b : '')
  }
  var vp = function (a, b, c) {
    var d = a.Ga(b, c),
      e = up(a, b.S)
    return a.get(b, c).then(function (f) {
      var g = null
      try {
        g = Hk(q.localStorage.getItem(d))
      } catch (h) {}
      if (g && !f) return q.localStorage.removeItem(d), a.set(b, g, c)
      g && f && 'localStorage' != e.type && q.localStorage.removeItem(d)
    })
  }
  k = rp.prototype
  k.get = function (a, b) {
    return up(this, a.S).get(this.Ga(a, b))
  }
  k.remove = function (a, b) {
    b = this.Ga(a, b)
    'local' == a.S && (this.sa[b] = null)
    return up(this, a.S).remove(b)
  }
  k.set = function (a, b, c) {
    var d = this.Ga(a, c),
      e = this,
      f = up(this, a.S)
    return f
      .set(d, b)
      .then(function () {
        return f.get(d)
      })
      .then(function (g) {
        'local' == a.S && (e.sa[d] = g)
      })
  }
  k.addListener = function (a, b, c) {
    a = this.Ga(a, b)
    this.Nj && (this.sa[a] = q.localStorage.getItem(a))
    hc(this.Ca) && this.rh()
    this.Ca[a] || (this.Ca[a] = [])
    this.Ca[a].push(c)
  }
  k.removeListener = function (a, b, c) {
    a = this.Ga(a, b)
    this.Ca[a] &&
      (ub(this.Ca[a], function (d) {
        return d == c
      }),
      0 == this.Ca[a].length && delete this.Ca[a])
    hc(this.Ca) && this.Ef()
  }
  k.rh = function () {
    up(this, 'local').zb(this.sh)
    this.mj || ((Yj() || !Pk()) && q.indexedDB) || !this.Nj || wp(this)
  }
  var wp = function (a) {
      xp(a)
      a.Mg = setInterval(function () {
        for (var b in a.Ca) {
          var c = q.localStorage.getItem(b),
            d = a.sa[b]
          c != d &&
            ((a.sa[b] = c),
            (c = new Qf({
              type: 'storage',
              key: b,
              target: window,
              oldValue: d,
              newValue: c,
              Vg: !0,
            })),
            a.yj(c))
        }
      }, 1e3)
    },
    xp = function (a) {
      a.Mg && (clearInterval(a.Mg), (a.Mg = null))
    }
  rp.prototype.Ef = function () {
    up(this, 'local').Mb(this.sh)
    xp(this)
  }
  rp.prototype.yj = function (a) {
    if (a && a.nk) {
      var b = a.Y.key
      if (null == b)
        for (var c in this.Ca) {
          var d = this.sa[c]
          'undefined' === typeof d && (d = null)
          var e = q.localStorage.getItem(c)
          e !== d && ((this.sa[c] = e), this.eg(c))
        }
      else if (0 == b.indexOf(this.Si + this.ih) && this.Ca[b]) {
        'undefined' !== typeof a.Y.Vg ? up(this, 'local').Mb(this.sh) : xp(this)
        if (this.Hl)
          if (((c = q.localStorage.getItem(b)), (d = a.Y.newValue), d !== c))
            null !== d
              ? q.localStorage.setItem(b, d)
              : q.localStorage.removeItem(b)
          else if (this.sa[b] === d && 'undefined' === typeof a.Y.Vg) return
        var f = this
        c = function () {
          if (
            'undefined' !== typeof a.Y.Vg ||
            f.sa[b] !== q.localStorage.getItem(b)
          )
            (f.sa[b] = q.localStorage.getItem(b)), f.eg(b)
        }
        yb &&
        Nb &&
        10 == Nb &&
        q.localStorage.getItem(b) !== a.Y.newValue &&
        a.Y.newValue !== a.Y.oldValue
          ? setTimeout(c, 10)
          : c()
      }
    } else A(a, v(this.eg, this))
  }
  rp.prototype.eg = function (a) {
    this.Ca[a] &&
      A(this.Ca[a], function (b) {
        b()
      })
  }
  var yp = function (a) {
      this.F = a
      this.s = tp()
    },
    Ap = function (a) {
      return a.s.get(zp, a.F).then(function (b) {
        return kl(b)
      })
    }
  yp.prototype.wc = function (a) {
    this.s.addListener(zp, this.F, a)
  }
  yp.prototype.Xd = function (a) {
    this.s.removeListener(zp, this.F, a)
  }
  var zp = { name: 'authEvent', S: 'local' },
    Bp = { name: 'redirectEvent', S: 'session' }
  var Cp = function () {
    this.s = tp()
  }
  Cp.prototype.Kc = function (a) {
    return this.s.get(Dp, a)
  }
  var Fp = function (a) {
      return a.s.get(Ep).then(function (b) {
        b = b || {}
        return b.type && b.apiKey
          ? new ll(
              b.apiKey,
              b.appName || '',
              b.type,
              b.eventId,
              b.redirectUrl,
              b.clientVersion,
              b.displayName,
              b.apn,
              b.ibi,
              b.eid,
              b.fw,
              b.clientId,
              b.sha1Cert,
              b.tenantId,
              b.providerId,
              b.appId,
              b.publicKey
            )
          : null
      })
    },
    Gp = function (a, b, c) {
      return a.s.set(zp, c.o(), b)
    },
    Ep = { name: 'oauthHelperState', S: 'session' },
    Dp = { name: 'sessionId', S: 'session' }
  var Hp = function () {
    this.Og = null
    this.ye = []
  }
  Hp.prototype.subscribe = function (a) {
    var b = this
    this.ye.push(a)
    this.Og ||
      ((this.Og = function (c) {
        for (var d = 0; d < b.ye.length; d++) b.ye[d](c)
      }),
      (a = P('universalLinks.subscribe', q)),
      'function' === typeof a && a(null, this.Og))
  }
  Hp.prototype.unsubscribe = function (a) {
    ub(this.ye, function (b) {
      return b == a
    })
  }
  var Ip = null
  var Jp = function (a, b, c, d, e, f) {
      this.O = a
      this.G = b
      this.D = c
      this.u = f
      this.bb = d || null
      this.ya = e || null
      this.zj = b + ':' + c
      this.Il = new Cp()
      this.ni = new yp(this.zj)
      this.Fg = null
      this.lb = []
      this.Pk = 500
      this.xl = 2e3
      this.Gd = this.mf = null
    },
    Kp = function (a) {
      return new R('invalid-cordova-configuration', a)
    }
  Jp.prototype.fc = function () {
    return this.Hd
      ? this.Hd
      : (this.Hd = pk().then(
          function () {
            if ('function' !== typeof P('universalLinks.subscribe', q))
              throw Kp('cordova-universal-links-plugin-fix is not installed')
            if ('undefined' === typeof P('BuildInfo.packageName', q))
              throw Kp('cordova-plugin-buildinfo is not installed')
            if (
              'function' !== typeof P('cordova.plugins.browsertab.openUrl', q)
            )
              throw Kp('cordova-plugin-browsertab is not installed')
            if ('function' !== typeof P('cordova.InAppBrowser.open', q))
              throw Kp('cordova-plugin-inappbrowser is not installed')
          },
          function () {
            throw new R('cordova-not-ready')
          }
        ))
  }
  var Lp = function () {
      for (var a = 20, b = []; 0 < a; )
        b.push(
          '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
            Math.floor(62 * Math.random())
          )
        ),
          a--
      return b.join('')
    },
    Mp = function (a) {
      var b = new $i()
      b.update(a)
      return Qa(b.digest())
    }
  k = Jp.prototype
  k.ee = function (a, b) {
    b(new R('operation-not-supported-in-this-environment'))
    return L()
  }
  k.Qd = function () {
    return M(new R('operation-not-supported-in-this-environment'))
  }
  k.Dj = function () {
    return !1
  }
  k.xj = function () {
    return !0
  }
  k.xi = function () {
    return !0
  }
  k.Rd = function (a, b, c, d) {
    if (this.mf) return M(new R('redirect-operation-pending'))
    var e = this,
      f = q.document,
      g = null,
      h = null,
      l = null,
      m = null
    return (this.mf = L()
      .then(function () {
        sm(b)
        return Np(e)
      })
      .then(function () {
        return Op(e, a, b, c, d)
      })
      .then(function () {
        return new K(function (n, r) {
          h = function () {
            var u = P('cordova.plugins.browsertab.close', q)
            n()
            'function' === typeof u && u()
            e.Gd &&
              'function' === typeof e.Gd.close &&
              (e.Gd.close(), (e.Gd = null))
            return !1
          }
          e.wc(h)
          l = function () {
            g ||
              (g = mh(e.xl).then(function () {
                r(new R('redirect-cancelled-by-user'))
              }))
          }
          m = function () {
            Lk() && l()
          }
          f.addEventListener('resume', l, !1)
          Xj()
            .toLowerCase()
            .match(/android/) || f.addEventListener('visibilitychange', m, !1)
        }).h(function (n) {
          return Pp(e).then(function () {
            throw n
          })
        })
      })
      .Ob(function () {
        l && f.removeEventListener('resume', l, !1)
        m && f.removeEventListener('visibilitychange', m, !1)
        g && g.cancel()
        h && e.Xd(h)
        e.mf = null
      }))
  }
  var Op = function (a, b, c, d, e) {
    var f = Lp(),
      g = new jl(b, d, null, f, new R('no-auth-event'), null, e),
      h = P('BuildInfo.packageName', q)
    if ('string' !== typeof h) throw new R('invalid-cordova-configuration')
    var l = P('BuildInfo.displayName', q),
      m = {}
    if (
      Xj()
        .toLowerCase()
        .match(/iphone|ipad|ipod/)
    )
      m.ibi = h
    else if (
      Xj()
        .toLowerCase()
        .match(/android/)
    )
      m.apn = h
    else return M(new R('operation-not-supported-in-this-environment'))
    l && (m.appDisplayName = l)
    f = Mp(f)
    m.sessionId = f
    var n = Zn(a.O, a.G, a.D, b, c, null, d, a.bb, m, a.ya, e, a.u)
    return a
      .fc()
      .then(function () {
        return Gp(a.Il, a.zj, g)
      })
      .then(function () {
        var r = P('cordova.plugins.browsertab.isAvailable', q)
        if ('function' !== typeof r)
          throw new R('invalid-cordova-configuration')
        var u = null
        r(function (C) {
          if (C) {
            u = P('cordova.plugins.browsertab.openUrl', q)
            if ('function' !== typeof u)
              throw new R('invalid-cordova-configuration')
            u(n)
          } else {
            u = P('cordova.InAppBrowser.open', q)
            if ('function' !== typeof u)
              throw new R('invalid-cordova-configuration')
            C = u
            var oa = Xj()
            oa = !(
              !oa.match(/(iPad|iPhone|iPod).*OS 7_\d/i) &&
              !oa.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
            )
            a.Gd = C(n, oa ? '_blank' : '_system', 'location=yes')
          }
        })
      })
  }
  Jp.prototype.ud = function (a) {
    for (var b = 0; b < this.lb.length; b++)
      try {
        this.lb[b](a)
      } catch (c) {}
  }
  var Np = function (a) {
      a.Fg ||
        (a.Fg = a.fc().then(function () {
          return new K(function (b) {
            var c = function (d) {
              b(d)
              a.Xd(c)
              return !1
            }
            a.wc(c)
            Qp(a)
          })
        }))
      return a.Fg
    },
    Pp = function (a) {
      var b = null
      return Ap(a.ni)
        .then(function (c) {
          b = c
          c = a.ni
          return c.s.remove(zp, c.F)
        })
        .then(function () {
          return b
        })
    },
    Qp = function (a) {
      var b = new jl('unknown', null, null, null, new R('no-auth-event')),
        c = !1,
        d = mh(a.Pk).then(function () {
          return Pp(a).then(function () {
            c || a.ud(b)
          })
        }),
        e = function (g) {
          c = !0
          d && d.cancel()
          Pp(a).then(function (h) {
            var l = b
            if (h && g && g.url) {
              var m = null
              l = xl(g.url)
              ;-1 != l.indexOf('/__/auth/callback') &&
                ((m = E(l)),
                (m = Hk(D(m, 'firebaseError') || null)),
                (m = (m = 'object' === typeof m ? il(m) : null)
                  ? new jl(h.getType(), h.X, null, null, m, null, h.qa())
                  : new jl(h.getType(), h.X, l, h.Kc(), null, null, h.qa())))
              l = m || b
            }
            a.ud(l)
          })
        },
        f = q.handleOpenURL
      q.handleOpenURL = function (g) {
        0 ==
          g
            .toLowerCase()
            .indexOf(P('BuildInfo.packageName', q).toLowerCase() + '://') &&
          e({ url: g })
        if ('function' === typeof f)
          try {
            f(g)
          } catch (h) {
            console.error(h)
          }
      }
      Ip || (Ip = new Hp())
      Ip.subscribe(e)
    }
  Jp.prototype.wc = function (a) {
    this.lb.push(a)
    Np(this).h(function (b) {
      'auth/invalid-cordova-configuration' === b.code &&
        ((b = new jl('unknown', null, null, null, new R('no-auth-event'))),
        a(b))
    })
  }
  Jp.prototype.Xd = function (a) {
    ub(this.lb, function (b) {
      return b == a
    })
  }
  var Rp = function (a) {
      this.F = a
      this.s = tp()
    },
    Tp = function (a) {
      return a.s.set(Sp, 'pending', a.F)
    },
    Up = function (a) {
      return a.s.remove(Sp, a.F)
    },
    Vp = function (a) {
      return a.s.get(Sp, a.F).then(function (b) {
        return 'pending' == b
      })
    },
    Sp = { name: 'pendingRedirect', S: 'session' }
  var $p = function (a, b, c, d) {
      this.rf = {}
      this.Lg = 0
      this.O = a
      this.G = b
      this.D = c
      this.u = d
      this.ge = []
      this.Pc = !1
      this.Zf = v(this.yg, this)
      this.Ib = new Wp(this)
      this.Xg = new Xp(this)
      this.Od = new Rp(Yp(this.G, this.D))
      this.Pb = {}
      this.Pb.unknown = this.Ib
      this.Pb.signInViaRedirect = this.Ib
      this.Pb.linkViaRedirect = this.Ib
      this.Pb.reauthViaRedirect = this.Ib
      this.Pb.signInViaPopup = this.Xg
      this.Pb.linkViaPopup = this.Xg
      this.Pb.reauthViaPopup = this.Xg
      this.Ha = Zp(this.O, this.G, this.D, Wj, this.u)
    },
    Zp = function (a, b, c, d, e) {
      var f = firebase.SDK_VERSION || null
      return ok() ? new Jp(a, b, c, f, d, e) : new Un(a, b, c, f, d, e)
    }
  $p.prototype.reset = function () {
    this.Pc = !1
    this.Ha.Xd(this.Zf)
    this.Ha = Zp(this.O, this.G, this.D, null, this.u)
    this.rf = {}
  }
  $p.prototype.Bc = function () {
    this.Ib.Bc()
  }
  $p.prototype.initialize = function () {
    var a = this
    this.Pc || ((this.Pc = !0), this.Ha.wc(this.Zf))
    var b = this.Ha
    return this.Ha.fc().h(function (c) {
      a.Ha == b && a.reset()
      throw c
    })
  }
  var cq = function (a) {
    a.Ha.xj() &&
      a.initialize().h(function (b) {
        var c = new jl(
          'unknown',
          null,
          null,
          null,
          new R('operation-not-supported-in-this-environment')
        )
        aq(b) && a.yg(c)
      })
    a.Ha.xi() || bq(a.Ib)
  }
  k = $p.prototype
  k.subscribe = function (a) {
    rb(this.ge, a) || this.ge.push(a)
    if (!this.Pc) {
      var b = this
      Vp(this.Od)
        .then(function (c) {
          c
            ? Up(b.Od).then(function () {
                b.initialize().h(function (d) {
                  var e = new jl(
                    'unknown',
                    null,
                    null,
                    null,
                    new R('operation-not-supported-in-this-environment')
                  )
                  aq(d) && b.yg(e)
                })
              })
            : cq(b)
        })
        .h(function () {
          cq(b)
        })
    }
  }
  k.unsubscribe = function (a) {
    ub(this.ge, function (b) {
      return b == a
    })
  }
  k.yg = function (a) {
    if (!a) throw new R('invalid-auth-event')
    6e5 <= Date.now() - this.Lg && ((this.rf = {}), (this.Lg = 0))
    if (a && a.getUid() && this.rf.hasOwnProperty(a.getUid())) return !1
    for (var b = !1, c = 0; c < this.ge.length; c++) {
      var d = this.ge[c]
      if (d.Kh(a.getType(), a.X)) {
        if ((b = this.Pb[a.getType()]))
          b.hj(a, d),
            a &&
              (a.Kc() || a.X) &&
              ((this.rf[a.getUid()] = !0), (this.Lg = Date.now()))
        b = !0
        break
      }
    }
    bq(this.Ib)
    return b
  }
  k.getRedirectResult = function () {
    return this.Ib.getRedirectResult()
  }
  k.Qd = function (a, b, c, d, e, f) {
    var g = this
    return this.Ha.Qd(
      a,
      b,
      c,
      function () {
        g.Pc || ((g.Pc = !0), g.Ha.wc(g.Zf))
      },
      function () {
        g.reset()
      },
      d,
      e,
      f
    )
  }
  var aq = function (a) {
    return a && 'auth/cordova-not-ready' == a.code ? !0 : !1
  }
  $p.prototype.Rd = function (a, b, c, d) {
    var e = this,
      f
    return Tp(this.Od).then(function () {
      return e.Ha.Rd(a, b, c, d)
        .h(function (g) {
          if (aq(g)) throw new R('operation-not-supported-in-this-environment')
          f = g
          return Up(e.Od).then(function () {
            throw f
          })
        })
        .then(function () {
          return e.Ha.Dj()
            ? new K(function () {})
            : Up(e.Od)
                .then(function () {
                  return e.getRedirectResult()
                })
                .then(function () {})
                .h(function () {})
        })
    })
  }
  $p.prototype.ee = function (a, b, c, d) {
    return this.Ha.ee(
      c,
      function (e) {
        a.pc(b, null, e, d)
      },
      dq.get()
    )
  }
  var Yp = function (a, b, c) {
      a = a + ':' + b
      c && (a = a + ':' + c.url)
      return a
    },
    fq = function (a, b, c, d) {
      var e = Yp(b, c, d)
      eq[e] || (eq[e] = new $p(a, b, c, d))
      return eq[e]
    },
    dq = new Kk(2e3, 1e4),
    gq = new Kk(3e4, 6e4),
    eq = {},
    Wp = function (a) {
      this.s = a
      this.ed = null
      this.Vd = []
      this.Ud = []
      this.cd = null
      this.Ej = this.Wd = !1
    }
  Wp.prototype.reset = function () {
    this.ed = null
    this.cd && (this.cd.cancel(), (this.cd = null))
  }
  Wp.prototype.hj = function (a, b) {
    if (a) {
      this.reset()
      this.Wd = !0
      var c = a.getType(),
        d = a.X,
        e = a.getError() && 'auth/web-storage-unsupported' == a.getError().code,
        f =
          a.getError() &&
          'auth/operation-not-supported-in-this-environment' ==
            a.getError().code
      this.Ej = !(!e && !f)
      'unknown' != c || e || f
        ? a.ha
          ? this.ah(a, b)
          : b.yd(c, d)
            ? this.bh(a, b)
            : M(new R('invalid-auth-event'))
        : (hq(this, !1, null, null), L())
    } else M(new R('invalid-auth-event'))
  }
  var bq = function (a) {
    a.Wd || ((a.Wd = !0), hq(a, !1, null, null))
  }
  Wp.prototype.Bc = function () {
    this.Wd && !this.Ej && hq(this, !1, null, null)
  }
  Wp.prototype.ah = function (a) {
    hq(this, !0, null, a.getError())
    L()
  }
  Wp.prototype.bh = function (a, b) {
    var c = this,
      d = a.X,
      e = a.getType()
    b = b.yd(e, d)
    d = a.kb
    e = a.Kc()
    var f = a.Yg,
      g = a.qa(),
      h = !!a.getType().match(/Redirect$/)
    b(d, e, g, f)
      .then(function (l) {
        hq(c, h, l, null)
      })
      .h(function (l) {
        hq(c, h, null, l)
      })
  }
  var iq = function (a, b) {
      a.ed = function () {
        return M(b)
      }
      if (a.Ud.length) for (var c = 0; c < a.Ud.length; c++) a.Ud[c](b)
    },
    jq = function (a, b) {
      a.ed = function () {
        return L(b)
      }
      if (a.Vd.length) for (var c = 0; c < a.Vd.length; c++) a.Vd[c](b)
    },
    hq = function (a, b, c, d) {
      b ? (d ? iq(a, d) : jq(a, c)) : jq(a, { user: null })
      a.Vd = []
      a.Ud = []
    }
  Wp.prototype.getRedirectResult = function () {
    var a = this
    return new K(function (b, c) {
      a.ed ? a.ed().then(b, c) : (a.Vd.push(b), a.Ud.push(c), kq(a))
    })
  }
  var kq = function (a) {
      var b = new R('timeout')
      a.cd && a.cd.cancel()
      a.cd = mh(gq.get()).then(function () {
        a.ed || ((a.Wd = !0), hq(a, !0, null, b))
      })
    },
    Xp = function (a) {
      this.s = a
    }
  Xp.prototype.hj = function (a, b) {
    if (a) {
      var c = a.getType(),
        d = a.X
      a.ha
        ? this.ah(a, b)
        : b.yd(c, d)
          ? this.bh(a, b)
          : M(new R('invalid-auth-event'))
    } else M(new R('invalid-auth-event'))
  }
  Xp.prototype.ah = function (a, b) {
    var c = a.X,
      d = a.getType()
    b.pc(d, null, a.getError(), c)
    L()
  }
  Xp.prototype.bh = function (a, b) {
    var c = a.X,
      d = a.getType(),
      e = b.yd(d, c),
      f = a.kb,
      g = a.Kc()
    e(f, g, a.qa(), a.Yg)
      .then(function (h) {
        b.pc(d, h, null, c)
      })
      .h(function (h) {
        b.pc(d, null, h, c)
      })
  }
  var lq = function (a, b, c) {
    var d = b && b.mfaPendingCredential
    if (!d)
      throw new R(
        'argument-error',
        'Internal assert: Invalid MultiFactorResolver'
      )
    this.Sb = a
    this.gk = ic(b)
    this.ll = c
    this.rj = new El(null, d)
    this.yi = []
    var e = this
    A(b.mfaInfo || [], function (f) {
      ;(f = pl(f)) && e.yi.push(f)
    })
    Q(this, 'auth', this.Sb)
    Q(this, 'session', this.rj)
    Q(this, 'hints', this.yi)
  }
  lq.prototype.resolveSignIn = function (a) {
    var b = this
    return a.process(this.Sb.j, this.rj).then(function (c) {
      var d = ic(b.gk)
      delete d.mfaInfo
      delete d.mfaPendingCredential
      kc(d, c)
      return b.ll(d)
    })
  }
  var mq = function (a, b, c, d) {
    R.call(this, 'multi-factor-auth-required', d, b)
    this.El = new lq(a, b, c)
    Q(this, 'resolver', this.El)
  }
  p(mq, R)
  var nq = function (a, b, c) {
    if (
      a &&
      t(a.serverResponse) &&
      'auth/multi-factor-auth-required' === a.code
    )
      try {
        return new mq(b, a.serverResponse, c, a.message)
      } catch (d) {}
    return null
  }
  var oq = function () {}
  oq.prototype.process = function (a, b, c) {
    return 'enroll' == b.type ? pq(this, a, b, c) : qq(this, a, b)
  }
  var pq = function (a, b, c, d) {
      return c.Cd().then(function (e) {
        e = { idToken: e }
        'undefined' !== typeof d && (e.displayName = d)
        kc(e, { phoneVerificationInfo: im(a.Qg) })
        return S(b, Cn, e)
      })
    },
    qq = function (a, b, c) {
      return c.Cd().then(function (d) {
        d = { mfaPendingCredential: d }
        kc(d, { phoneVerificationInfo: im(a.Qg) })
        return S(b, Dn, d)
      })
    },
    rq = function (a) {
      Q(this, 'factorId', a.providerId)
      this.Qg = a
    }
  w(rq, oq)
  var sq = function (a) {
    rq.call(this, a)
    if (this.Qg.providerId != mm.PROVIDER_ID)
      throw new R(
        'argument-error',
        'firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential'
      )
  }
  w(sq, rq)
  var tq = function (a, b) {
    Of.call(this, a)
    for (var c in b) this[c] = b[c]
  }
  p(tq, Of)
  var vq = function (a, b) {
      this.xb = a
      this.Ee = []
      this.Zl = v(this.Gk, this)
      I(this.xb, 'userReloaded', this.Zl)
      var c = []
      b &&
        b.multiFactor &&
        b.multiFactor.enrolledFactors &&
        A(b.multiFactor.enrolledFactors, function (d) {
          var e = null,
            f = {}
          if (d) {
            d.uid && (f.mfaEnrollmentId = d.uid)
            d.displayName && (f.displayName = d.displayName)
            d.enrollmentTime &&
              (f.enrolledAt = new Date(d.enrollmentTime).toISOString())
            if (d.phoneNumber) {
              f.phoneInfo = d.phoneNumber
              try {
                e = new nl(f)
              } catch (g) {}
            } else if (d.totpInfo) {
              f.totpInfo = d.totpInfo
              try {
                e = new ol(f)
              } catch (g) {}
            } else e = null
            d = e
          } else d = null
          d && c.push(d)
        })
      uq(this, c)
    },
    wq = function (a) {
      var b = []
      A(a.mfaInfo || [], function (c) {
        ;(c = pl(c)) && b.push(c)
      })
      return b
    }
  vq.prototype.Gk = function (a) {
    uq(this, wq(a.am))
  }
  var uq = function (a, b) {
    a.Ee = b
    Q(a, 'enrolledFactors', b)
  }
  k = vq.prototype
  k.copy = function (a) {
    uq(this, a.Ee)
  }
  k.getSession = function () {
    return this.xb.getIdToken().then(function (a) {
      return new El(a, null)
    })
  }
  k.enroll = function (a, b) {
    var c = this,
      d = this.xb.j
    return this.getSession()
      .then(function (e) {
        return a.process(d, e, b)
      })
      .then(function (e) {
        xq(c.xb, e)
        return c.xb.reload()
      })
  }
  k.unenroll = function (a) {
    var b = this,
      c = 'string' === typeof a ? a : a.uid,
      d = this.xb.j
    return this.xb
      .getIdToken()
      .then(function (e) {
        return S(d, In, { idToken: e, mfaEnrollmentId: c })
      })
      .then(function (e) {
        var f = ob(b.Ee, function (g) {
          return g.uid != c
        })
        uq(b, f)
        xq(b.xb, e)
        return b.xb.reload().h(function (g) {
          if ('auth/user-token-expired' != g.code) throw g
        })
      })
  }
  k.o = function () {
    return {
      multiFactor: {
        enrolledFactors: pb(this.Ee, function (a) {
          return a.o()
        }),
      },
    }
  }
  var yq = function (a) {
    this.j = a
    this.va = this.ta = null
    this.Fc = Date.now()
  }
  yq.prototype.o = function () {
    return {
      apiKey: this.j.cb(),
      refreshToken: this.ta,
      accessToken: this.va && this.va.toString(),
      expirationTime: this.Fc,
    }
  }
  var zq = function (a, b) {
      'undefined' === typeof b &&
        (a.va ? ((b = a.va), (b = b.sg - b.Ik)) : (b = 0))
      a.Fc = Date.now() + 1e3 * b
    },
    Aq = function (a, b) {
      a.va = Cl(b.idToken || '')
      a.ta = b.refreshToken
      b = b.expiresIn
      zq(a, 'undefined' !== typeof b ? Number(b) : void 0)
    }
  yq.prototype.copy = function (a) {
    this.va = a.va
    this.ta = a.ta
    this.Fc = a.Fc
  }
  var Bq = function (a, b) {
    return Km(a.j, b)
      .then(function (c) {
        a.va = Cl(c.access_token)
        a.ta = c.refresh_token
        zq(a, c.expires_in)
        return { accessToken: a.va.toString(), refreshToken: a.ta }
      })
      .h(function (c) {
        'auth/user-token-expired' == c.code && (a.ta = null)
        throw c
      })
  }
  yq.prototype.getToken = function (a) {
    a = !!a
    return this.va && !this.ta
      ? M(new R('user-token-expired'))
      : a || !this.va || Date.now() > this.Fc - 3e4
        ? this.ta
          ? Bq(this, { grant_type: 'refresh_token', refresh_token: this.ta })
          : L(null)
        : L({ accessToken: this.va.toString(), refreshToken: this.ta })
  }
  var Cq = function (a, b) {
    this.Th = a || null
    this.Li = b || null
    Yk(this, { lastSignInTime: Ok(b || null), creationTime: Ok(a || null) })
  }
  Cq.prototype.clone = function () {
    return new Cq(this.Th, this.Li)
  }
  Cq.prototype.o = function () {
    return { lastLoginAt: this.Li, createdAt: this.Th }
  }
  var Dq = function (a, b, c, d, e, f) {
      Yk(this, {
        uid: a,
        displayName: d || null,
        photoURL: e || null,
        email: c || null,
        phoneNumber: f || null,
        providerId: b,
      })
    },
    T = function (a, b, c) {
      J.call(this)
      this.ia = []
      this.G = a.apiKey
      this.D = a.appName
      this.O = a.authDomain || null
      var d = firebase.SDK_VERSION ? yk('JsCore', firebase.SDK_VERSION) : null
      this.j = new Bm(this.G, Vj(Wj), d)
      ;(this.u = a.emulatorConfig || null) && Fm(this.j, this.u)
      this.Wa = new yq(this.j)
      Eq(this, b.idToken)
      Aq(this.Wa, b)
      Q(this, 'refreshToken', this.Wa.ta)
      Fq(this, c || {})
      this.Pd = !1
      this.O && Ck() && (this.C = fq(this.O, this.G, this.D, this.u))
      this.Df = []
      this.Xa = null
      this.Zc = Gq(this)
      this.ld = v(this.Ag, this)
      var e = this
      this.Qa = null
      this.Xi = function (f) {
        e.gd(f.languageCode)
      }
      this.Jg = null
      this.Vi = function (f) {
        Hq(e, f.emulatorConfig)
      }
      this.ng = null
      this.Z = []
      this.Wi = function (f) {
        Iq(e, f.xd)
      }
      this.vg = null
      this.ff = new vq(this, c)
      Q(this, 'multiFactor', this.ff)
    }
  p(T, J)
  T.prototype.gd = function (a) {
    this.Qa = a
    Dm(this.j, a)
  }
  var Hq = function (a, b) {
      a.u = b
      Fm(a.j, b)
      a.C &&
        ((b = a.C),
        (a.C = fq(a.O, a.G, a.D, a.u)),
        a.Pd && (b.unsubscribe(a), a.C.subscribe(a)))
    },
    Jq = function (a, b) {
      a.Jg && jg(a.Jg, 'languageCodeChanged', a.Xi)
      ;(a.Jg = b) && I(b, 'languageCodeChanged', a.Xi)
    },
    Kq = function (a, b) {
      a.ng && jg(a.ng, 'emulatorConfigChanged', a.Vi)
      ;(a.ng = b) && I(b, 'emulatorConfigChanged', a.Vi)
    },
    Iq = function (a, b) {
      a.Z = b
      Gm(
        a.j,
        firebase.SDK_VERSION ? yk('JsCore', firebase.SDK_VERSION, a.Z) : null
      )
    },
    Lq = function (a, b) {
      a.vg && jg(a.vg, 'frameworkChanged', a.Wi)
      ;(a.vg = b) && I(b, 'frameworkChanged', a.Wi)
    }
  T.prototype.Ag = function () {
    this.Zc.Wc && (this.Zc.stop(), this.Zc.start())
  }
  var Mq = function (a) {
    try {
      return firebase.app(a.D).auth()
    } catch (b) {
      throw new R(
        'internal-error',
        "No firebase.auth.Auth instance is available for the Firebase App '" +
          a.D +
          "'!"
      )
    }
  }
  T.prototype.cb = function () {
    return this.G
  }
  var Gq = function (a) {
      return new fp(
        function () {
          return a.getIdToken(!0)
        },
        function (b) {
          return b && 'auth/network-request-failed' == b.code ? !0 : !1
        },
        function () {
          var b = a.Wa.Fc - Date.now() - 3e5
          return 0 < b ? b : 0
        }
      )
    },
    Nq = function (a) {
      a.td ||
        a.Zc.Wc ||
        (a.Zc.start(), jg(a, 'tokenChanged', a.ld), I(a, 'tokenChanged', a.ld))
    },
    Oq = function (a) {
      jg(a, 'tokenChanged', a.ld)
      a.Zc.stop()
    },
    Eq = function (a, b) {
      a.Ki = b
      Q(a, '_lat', b)
    },
    Pq = function (a, b) {
      ub(a.Df, function (c) {
        return c == b
      })
    },
    Qq = function (a) {
      for (var b = [], c = 0; c < a.Df.length; c++) b.push(a.Df[c](a))
      return $g(b).then(function () {
        return a
      })
    },
    Rq = function (a) {
      a.C && !a.Pd && ((a.Pd = !0), a.C.subscribe(a))
    },
    Fq = function (a, b) {
      Yk(a, {
        uid: b.uid,
        displayName: b.displayName || null,
        photoURL: b.photoURL || null,
        email: b.email || null,
        emailVerified: b.emailVerified || !1,
        phoneNumber: b.phoneNumber || null,
        isAnonymous: b.isAnonymous || !1,
        tenantId: b.tenantId || null,
        metadata: new Cq(b.createdAt, b.lastLoginAt),
        providerData: [],
      })
      a.j.M = a.tenantId
    },
    Sq = function () {},
    Tq = function (a) {
      return L().then(function () {
        if (a.td) throw new R('app-deleted')
      })
    },
    Uq = function (a) {
      return pb(a.providerData, function (b) {
        return b.providerId
      })
    },
    Wq = function (a, b) {
      b && (Vq(a, b.providerId), a.providerData.push(b))
    },
    Vq = function (a, b) {
      ub(a.providerData, function (c) {
        return c.providerId == b
      })
    },
    Xq = function (a, b, c) {
      ;('uid' != b || c) && a.hasOwnProperty(b) && Q(a, b, c)
    }
  T.prototype.copy = function (a) {
    var b = this
    b != a &&
      (Yk(this, {
        uid: a.uid,
        displayName: a.displayName,
        photoURL: a.photoURL,
        email: a.email,
        emailVerified: a.emailVerified,
        phoneNumber: a.phoneNumber,
        isAnonymous: a.isAnonymous,
        tenantId: a.tenantId,
        providerData: [],
      }),
      a.metadata
        ? Q(this, 'metadata', a.metadata.clone())
        : Q(this, 'metadata', new Cq()),
      A(a.providerData, function (c) {
        Wq(b, c)
      }),
      this.Wa.copy(a.Wa),
      Q(this, 'refreshToken', this.Wa.ta),
      this.ff.copy(a.ff))
  }
  T.prototype.reload = function () {
    var a = this
    return this.m(
      Tq(this).then(function () {
        return Yq(a)
          .then(function () {
            return Qq(a)
          })
          .then(Sq)
      })
    )
  }
  var Yq = function (a) {
    return a.getIdToken().then(function (b) {
      var c = a.isAnonymous
      return S(a.j, En, { idToken: b })
        .then(v(a.rl, a))
        .then(function () {
          c || Xq(a, 'isAnonymous', !1)
          return b
        })
    })
  }
  T.prototype.getIdTokenResult = function (a) {
    return this.getIdToken(a).then(function (b) {
      return new Dl(b)
    })
  }
  T.prototype.getIdToken = function (a) {
    var b = this
    return this.m(
      Tq(this)
        .then(function () {
          return b.Wa.getToken(a)
        })
        .then(function (c) {
          if (!c) throw new R('internal-error')
          c.accessToken != b.Ki && (Eq(b, c.accessToken), b.Hb())
          Xq(b, 'refreshToken', c.refreshToken)
          return c.accessToken
        })
    )
  }
  var xq = function (a, b) {
    b.idToken &&
      a.Ki != b.idToken &&
      (Aq(a.Wa, b), a.Hb(), Eq(a, b.idToken), Xq(a, 'refreshToken', a.Wa.ta))
  }
  T.prototype.Hb = function () {
    this.dispatchEvent(new tq('tokenChanged'))
  }
  T.prototype.rl = function (a) {
    a = a.users
    if (!a || !a.length) throw new R('internal-error')
    a = a[0]
    Fq(this, {
      uid: a.localId,
      displayName: a.displayName,
      photoURL: a.photoUrl,
      email: a.email,
      emailVerified: !!a.emailVerified,
      phoneNumber: a.phoneNumber,
      lastLoginAt: a.lastLoginAt,
      createdAt: a.createdAt,
      tenantId: a.tenantId,
    })
    for (var b = Zq(a), c = 0; c < b.length; c++) Wq(this, b[c])
    Xq(
      this,
      'isAnonymous',
      !(this.email && a.passwordHash) &&
        !(this.providerData && this.providerData.length)
    )
    this.dispatchEvent(new tq('userReloaded', { am: a }))
  }
  var Zq = function (a) {
    return (a = a.providerUserInfo) && a.length
      ? pb(a, function (b) {
          return new Dq(
            b.rawId,
            b.providerId,
            b.email,
            b.displayName,
            b.photoUrl,
            b.phoneNumber
          )
        })
      : []
  }
  T.prototype.reauthenticateAndRetrieveDataWithCredential = function (a) {
    Vk(
      'firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.'
    )
    return this.reauthenticateWithCredential(a)
  }
  T.prototype.reauthenticateWithCredential = function (a) {
    var b = this,
      c = null
    return this.m(
      a
        .Kd(this.j, this.uid)
        .then(function (d) {
          xq(b, d)
          c = $q(b, d, 'reauthenticate')
          b.Xa = null
          return b.reload()
        })
        .then(function () {
          return c
        }),
      !0
    )
  }
  var ar = function (a, b) {
    return Yq(a).then(function () {
      if (rb(Uq(a), b))
        return Qq(a).then(function () {
          throw new R('provider-already-linked')
        })
    })
  }
  T.prototype.linkAndRetrieveDataWithCredential = function (a) {
    Vk(
      'firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.'
    )
    return this.linkWithCredential(a)
  }
  T.prototype.linkWithCredential = function (a) {
    var b = this,
      c = null
    return this.m(
      ar(this, a.providerId)
        .then(function () {
          return b.getIdToken()
        })
        .then(function (d) {
          return a.Sc(b.j, d)
        })
        .then(function (d) {
          c = $q(b, d, 'link')
          return br(b, d)
        })
        .then(function () {
          return c
        })
    )
  }
  T.prototype.linkWithPhoneNumber = function (a, b) {
    var c = this
    return this.m(
      ar(this, 'phone').then(function () {
        return ep(Mq(c), a, b, v(c.linkWithCredential, c))
      })
    )
  }
  T.prototype.reauthenticateWithPhoneNumber = function (a, b) {
    var c = this
    return this.m(
      L().then(function () {
        return ep(Mq(c), a, b, v(c.reauthenticateWithCredential, c))
      }),
      !0
    )
  }
  var $q = function (a, b, c) {
      var d = rm(b)
      b = op(b)
      return Zk({
        user: a,
        credential: d,
        additionalUserInfo: b,
        operationType: c,
      })
    },
    br = function (a, b) {
      xq(a, b)
      return a.reload().then(function () {
        return a
      })
    }
  k = T.prototype
  k.updateEmail = function (a) {
    var b = this
    return this.m(
      this.getIdToken()
        .then(function (c) {
          return b.j.updateEmail(c, a)
        })
        .then(function (c) {
          xq(b, c)
          return b.reload()
        })
    )
  }
  k.updatePhoneNumber = function (a) {
    var b = this
    return this.m(
      this.getIdToken()
        .then(function (c) {
          return a.Sc(b.j, c)
        })
        .then(function (c) {
          xq(b, c)
          return b.reload()
        })
    )
  }
  k.updatePassword = function (a) {
    var b = this
    return this.m(
      this.getIdToken()
        .then(function (c) {
          return b.j.updatePassword(c, a)
        })
        .then(function (c) {
          xq(b, c)
          return b.reload()
        })
    )
  }
  k.updateProfile = function (a) {
    if (void 0 === a.displayName && void 0 === a.photoURL) return Tq(this)
    var b = this
    return this.m(
      this.getIdToken()
        .then(function (c) {
          return b.j.updateProfile(c, {
            displayName: a.displayName,
            photoUrl: a.photoURL,
          })
        })
        .then(function (c) {
          xq(b, c)
          Xq(b, 'displayName', c.displayName || null)
          Xq(b, 'photoURL', c.photoUrl || null)
          A(b.providerData, function (d) {
            'password' === d.providerId &&
              (Q(d, 'displayName', b.displayName), Q(d, 'photoURL', b.photoURL))
          })
          return Qq(b)
        })
        .then(Sq)
    )
  }
  k.unlink = function (a) {
    var b = this
    return this.m(
      Yq(this).then(function (c) {
        return rb(Uq(b), a)
          ? on(b.j, c, [a]).then(function (d) {
              var e = {}
              A(d.providerUserInfo || [], function (f) {
                e[f.providerId] = !0
              })
              A(Uq(b), function (f) {
                e[f] || Vq(b, f)
              })
              e[mm.PROVIDER_ID] || Q(b, 'phoneNumber', null)
              return Qq(b)
            })
          : Qq(b).then(function () {
              throw new R('no-such-provider')
            })
      })
    )
  }
  k.delete = function () {
    var a = this
    return this.m(
      this.getIdToken()
        .then(function (b) {
          return S(a.j, Bn, { idToken: b })
        })
        .then(function () {
          a.dispatchEvent(new tq('userDeleted'))
        })
    ).then(function () {
      for (var b = 0; b < a.ia.length; b++) a.ia[b].cancel('app-deleted')
      Jq(a, null)
      Kq(a, null)
      Lq(a, null)
      a.ia = []
      a.td = !0
      Oq(a)
      Q(a, 'refreshToken', null)
      a.C && a.C.unsubscribe(a)
    })
  }
  k.Kh = function (a, b) {
    return ('linkViaPopup' == a && (this.Ta || null) == b && this.Sa) ||
      ('reauthViaPopup' == a && (this.Ta || null) == b && this.Sa) ||
      ('linkViaRedirect' == a && (this.Jb || null) == b) ||
      ('reauthViaRedirect' == a && (this.Jb || null) == b)
      ? !0
      : !1
  }
  k.pc = function (a, b, c, d) {
    ;('linkViaPopup' != a && 'reauthViaPopup' != a) ||
      d != (this.Ta || null) ||
      (c && this.mc ? this.mc(c) : b && !c && this.Sa && this.Sa(b),
      this.ka && (this.ka.cancel(), (this.ka = null)),
      delete this.Sa,
      delete this.mc)
  }
  k.yd = function (a, b) {
    return 'linkViaPopup' == a && b == (this.Ta || null)
      ? v(this.gi, this)
      : 'reauthViaPopup' == a && b == (this.Ta || null)
        ? v(this.ii, this)
        : 'linkViaRedirect' == a && (this.Jb || null) == b
          ? v(this.gi, this)
          : 'reauthViaRedirect' == a && (this.Jb || null) == b
            ? v(this.ii, this)
            : null
  }
  k.Ie = function () {
    return zk(this.uid + ':::')
  }
  k.linkWithPopup = function (a) {
    var b = this
    return cr(
      this,
      'linkViaPopup',
      a,
      function () {
        return ar(b, a.providerId).then(function () {
          return Qq(b)
        })
      },
      !1
    )
  }
  k.reauthenticateWithPopup = function (a) {
    return cr(
      this,
      'reauthViaPopup',
      a,
      function () {
        return L()
      },
      !0
    )
  }
  var cr = function (a, b, c, d, e) {
    if (!Ck()) return M(new R('operation-not-supported-in-this-environment'))
    if (a.Xa && !e) return M(a.Xa)
    var f = el(c.providerId),
      g = a.Ie(),
      h = null
    ;(!Dk() || rk()) &&
      a.O &&
      c.isOAuthProvider &&
      (h = Zn(
        a.O,
        a.G,
        a.D,
        b,
        c,
        null,
        g,
        firebase.SDK_VERSION || null,
        null,
        null,
        a.tenantId,
        a.u
      ))
    var l = hk(h, f && f.Yc, f && f.Xc)
    d = d()
      .then(function () {
        dr(a)
        if (!e) return a.getIdToken().then(function () {})
      })
      .then(function () {
        return a.C.Qd(l, b, c, g, !!h, a.tenantId)
      })
      .then(function () {
        return new K(function (m, n) {
          a.pc(b, null, new R('cancelled-popup-request'), a.Ta || null)
          a.Sa = m
          a.mc = n
          a.Ta = g
          a.ka = a.C.ee(a, b, l, g)
        })
      })
      .then(function (m) {
        l && gk(l)
        return m ? Zk(m) : null
      })
      .h(function (m) {
        l && gk(l)
        throw m
      })
    return a.m(d, e)
  }
  T.prototype.linkWithRedirect = function (a) {
    var b = this
    return er(
      this,
      'linkViaRedirect',
      a,
      function () {
        return ar(b, a.providerId)
      },
      !1
    )
  }
  T.prototype.reauthenticateWithRedirect = function (a) {
    return er(
      this,
      'reauthViaRedirect',
      a,
      function () {
        return L()
      },
      !0
    )
  }
  var er = function (a, b, c, d, e) {
      if (!Ck()) return M(new R('operation-not-supported-in-this-environment'))
      if (a.Xa && !e) return M(a.Xa)
      var f = null,
        g = a.Ie()
      d = d()
        .then(function () {
          dr(a)
          if (!e) return a.getIdToken().then(function () {})
        })
        .then(function () {
          a.Jb = g
          return Qq(a)
        })
        .then(function (h) {
          a.Kb && ((h = a.Kb), (h = h.s.set(fr, a.o(), h.F)))
          return h
        })
        .then(function () {
          return a.C.Rd(b, c, g, a.tenantId)
        })
        .h(function (h) {
          f = h
          if (a.Kb) return gr(a.Kb)
          throw f
        })
        .then(function () {
          if (f) throw f
        })
      return a.m(d, e)
    },
    dr = function (a) {
      if (!a.C || !a.Pd) {
        if (a.C && !a.Pd) throw new R('internal-error')
        throw new R('auth-domain-config-required')
      }
    }
  k = T.prototype
  k.gi = function (a, b, c, d) {
    var e = this
    this.ka && (this.ka.cancel(), (this.ka = null))
    var f = null
    c = this.getIdToken()
      .then(function (g) {
        return Jl(e.j, { requestUri: a, postBody: d, sessionId: b, idToken: g })
      })
      .then(function (g) {
        f = $q(e, g, 'link')
        return br(e, g)
      })
      .then(function () {
        return f
      })
    return this.m(c)
  }
  k.ii = function (a, b, c, d) {
    var e = this
    this.ka && (this.ka.cancel(), (this.ka = null))
    var f = null,
      g = L()
        .then(function () {
          return Gl(
            Kl(e.j, { requestUri: a, sessionId: b, postBody: d, tenantId: c }),
            e.uid
          )
        })
        .then(function (h) {
          f = $q(e, h, 'reauthenticate')
          xq(e, h)
          e.Xa = null
          return e.reload()
        })
        .then(function () {
          return f
        })
    return this.m(g, !0)
  }
  k.sendEmailVerification = function (a) {
    var b = this,
      c = null
    return this.m(
      this.getIdToken()
        .then(function (d) {
          c = d
          return 'undefined' === typeof a || hc(a) ? {} : cp(new bp(a))
        })
        .then(function (d) {
          return b.j.sendEmailVerification(c, d)
        })
        .then(function (d) {
          if (b.email != d) return b.reload()
        })
        .then(function () {})
    )
  }
  k.verifyBeforeUpdateEmail = function (a, b) {
    var c = this,
      d = null
    return this.m(
      this.getIdToken()
        .then(function (e) {
          d = e
          return 'undefined' === typeof b || hc(b) ? {} : cp(new bp(b))
        })
        .then(function (e) {
          return c.j.verifyBeforeUpdateEmail(d, a, e)
        })
        .then(function (e) {
          if (c.email != e) return c.reload()
        })
        .then(function () {})
    )
  }
  k.m = function (a, b) {
    var c = this,
      d = hr(this, a, b)
    this.ia.push(d)
    d.Ob(function () {
      sb(c.ia, d)
    })
    return d.h(function (e) {
      var f = null
      e &&
        'auth/multi-factor-auth-required' === e.code &&
        (f = nq(e.o(), Mq(c), v(c.zg, c)))
      throw f || e
    })
  }
  k.zg = function (a) {
    var b = null,
      c = this
    a = Gl(L(a), c.uid)
      .then(function (d) {
        b = $q(c, d, 'reauthenticate')
        xq(c, d)
        c.Xa = null
        return c.reload()
      })
      .then(function () {
        return b
      })
    return this.m(a, !0)
  }
  var hr = function (a, b, c) {
    return a.Xa && !c
      ? (b.cancel(), M(a.Xa))
      : b.h(function (d) {
          !d ||
            ('auth/user-disabled' != d.code &&
              'auth/user-token-expired' != d.code) ||
            (a.Xa || a.dispatchEvent(new tq('userInvalidated')), (a.Xa = d))
          throw d
        })
  }
  T.prototype.toJSON = function () {
    return this.o()
  }
  T.prototype.o = function () {
    var a = {
      uid: this.uid,
      displayName: this.displayName,
      photoURL: this.photoURL,
      email: this.email,
      emailVerified: this.emailVerified,
      phoneNumber: this.phoneNumber,
      isAnonymous: this.isAnonymous,
      tenantId: this.tenantId,
      providerData: [],
      apiKey: this.G,
      appName: this.D,
      authDomain: this.O,
      stsTokenManager: this.Wa.o(),
      redirectEventId: this.Jb || null,
    }
    this.metadata && kc(a, this.metadata.o())
    A(this.providerData, function (b) {
      var c = a.providerData,
        d = c.push,
        e = {},
        f
      for (f in b) b.hasOwnProperty(f) && (e[f] = b[f])
      d.call(c, e)
    })
    kc(a, this.ff.o())
    return a
  }
  var ir = function (a) {
      if (!a.apiKey) return null
      var b = {
          apiKey: a.apiKey,
          authDomain: a.authDomain,
          appName: a.appName,
          emulatorConfig: a.emulatorConfig,
        },
        c = {}
      if (a.stsTokenManager && a.stsTokenManager.accessToken) {
        c.idToken = a.stsTokenManager.accessToken
        c.refreshToken = a.stsTokenManager.refreshToken || null
        var d = a.stsTokenManager.expirationTime
        d && (c.expiresIn = (d - Date.now()) / 1e3)
      } else return null
      var e = new T(b, c, a)
      a.providerData &&
        A(a.providerData, function (f) {
          f && Wq(e, Zk(f))
        })
      a.redirectEventId && (e.Jb = a.redirectEventId)
      return e
    },
    jr = function (a, b, c, d) {
      var e = new T(a, b)
      c && (e.Kb = c)
      d && Iq(e, d)
      return e.reload().then(function () {
        return e
      })
    },
    kr = function (a, b, c, d) {
      b = b || { apiKey: a.G, authDomain: a.O, appName: a.D }
      var e = a.Wa,
        f = {}
      f.idToken = e.va && e.va.toString()
      f.refreshToken = e.ta
      b = new T(b, f)
      c && (b.Kb = c)
      d && Iq(b, d)
      b.copy(a)
      return b
    }
  Q(T.prototype, 'providerId', 'firebase')
  var lr = function (a) {
      this.F = a
      this.s = tp()
    },
    gr = function (a) {
      return a.s.remove(fr, a.F)
    },
    mr = function (a, b) {
      return a.s.get(fr, a.F).then(function (c) {
        c && b && (c.authDomain = b)
        return ir(c || {})
      })
    },
    fr = { name: 'redirectUser', S: 'session' }
  var or = function (a) {
    this.F = a
    this.s = tp()
    this.wa = null
    this.Tg = this.qb()
    this.s.addListener(nr('local'), this.F, v(this.Tl, this))
  }
  or.prototype.Tl = function () {
    var a = this,
      b = nr('local')
    pr(this, function () {
      return L()
        .then(function () {
          return a.wa && 'local' != a.wa.S ? a.s.get(b, a.F) : null
        })
        .then(function (c) {
          if (c)
            return qr(a, 'local').then(function () {
              a.wa = b
            })
        })
    })
  }
  var qr = function (a, b) {
    var c = [],
      d
    for (d in pp) pp[d] !== b && c.push(a.s.remove(nr(pp[d]), a.F))
    c.push(a.s.remove(rr, a.F))
    return Zg(c)
  }
  or.prototype.qb = function () {
    var a = this,
      b = nr('local'),
      c = nr('session'),
      d = nr('none')
    return vp(this.s, b, this.F)
      .then(function () {
        return a.s.get(c, a.F)
      })
      .then(function (e) {
        return e
          ? c
          : a.s.get(d, a.F).then(function (f) {
              return f
                ? d
                : a.s.get(b, a.F).then(function (g) {
                    return g
                      ? b
                      : a.s.get(rr, a.F).then(function (h) {
                          return h ? nr(h) : b
                        })
                  })
            })
      })
      .then(function (e) {
        a.wa = e
        return qr(a, e.S)
      })
      .h(function () {
        a.wa || (a.wa = b)
      })
  }
  var nr = function (a) {
    return { name: 'authUser', S: a }
  }
  or.prototype.setPersistence = function (a) {
    var b = null,
      c = this
    qp(a)
    return pr(this, function () {
      return a != c.wa.S
        ? c.s
            .get(c.wa, c.F)
            .then(function (d) {
              b = d
              return qr(c, a)
            })
            .then(function () {
              c.wa = nr(a)
              if (b) return c.s.set(c.wa, b, c.F)
            })
        : L()
    })
  }
  var sr = function (a) {
      return pr(a, function () {
        return a.s.set(rr, a.wa.S, a.F)
      })
    },
    tr = function (a, b) {
      return pr(a, function () {
        return a.s.set(a.wa, b.o(), a.F)
      })
    },
    ur = function (a) {
      return pr(a, function () {
        return a.s.remove(a.wa, a.F)
      })
    },
    vr = function (a, b, c) {
      return pr(a, function () {
        return a.s.get(a.wa, a.F).then(function (d) {
          d && b && (d.authDomain = b)
          d && c && (d.emulatorConfig = c)
          return ir(d || {})
        })
      })
    },
    pr = function (a, b) {
      a.Tg = a.Tg.then(b, b)
      return a.Tg
    },
    rr = { name: 'persistence', S: 'session' }
  var U = function (a) {
    J.call(this)
    this.Ka = !1
    this.tj = new ap()
    Q(this, 'settings', this.tj)
    Q(this, 'app', a)
    if (this.A().options && this.A().options.apiKey)
      (a = firebase.SDK_VERSION ? yk('JsCore', firebase.SDK_VERSION) : null),
        (this.j = new Bm(
          this.A().options && this.A().options.apiKey,
          Vj(Wj),
          a
        ))
    else throw new R('invalid-api-key')
    this.ia = []
    this.Rb = []
    this.kd = []
    this.kl = firebase.INTERNAL.createSubscribe(v(this.Mk, this))
    this.me = void 0
    this.ol = firebase.INTERNAL.createSubscribe(v(this.Ok, this))
    wr(this, null)
    this.Ya = new or(this.Lc())
    this.oc = new lr(this.Lc())
    this.se = this.m(xr(this))
    this.Ua = this.m(yr(this))
    this.Ye = !1
    this.xg = v(this.Ul, this)
    this.Lj = v(this.Fb, this)
    this.ld = v(this.Ag, this)
    this.Jj = v(this.Ek, this)
    this.Kj = v(this.Fk, this)
    this.C = null
    zr(this)
    this.INTERNAL = {}
    this.INTERNAL['delete'] = v(this.delete, this)
    this.INTERNAL.logFramework = v(this.fl, this)
    this.Zb = 0
    Ar(this)
    this.Z = []
    this.u = null
  }
  p(U, J)
  U.prototype.setPersistence = function (a) {
    a = this.Ya.setPersistence(a)
    return this.m(a)
  }
  U.prototype.gd = function (a) {
    this.Qa === a ||
      this.Ka ||
      ((this.Qa = a), Dm(this.j, this.Qa), this.dispatchEvent(new Br(this.Qa)))
  }
  U.prototype.useDeviceLanguage = function () {
    var a = q.navigator
    this.gd(
      a
        ? (a.languages && a.languages[0]) ||
            a.language ||
            a.userLanguage ||
            null
        : null
    )
  }
  U.prototype.useEmulator = function (a, b) {
    if (!this.u) {
      if (this.C)
        throw new R(
          'argument-error',
          'useEmulator() must be called immediately following firebase.auth() initialization.'
        )
      b = b ? !!b.disableWarnings : !1
      Cr(b)
      this.u = { url: a, disableWarnings: b }
      this.tj.Wf = !0
      Fm(this.j, this.u)
      this.dispatchEvent(new Dr(this.u))
    }
  }
  var Cr = function (a) {
    'undefined' !== typeof console &&
      'function' === typeof console.info &&
      console.info(
        'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
      )
    q.document &&
      !a &&
      nk().then(function () {
        var b = q.document.createElement('p')
        b.innerText =
          'Running in emulator mode. Do not use with production credentials.'
        b.style.position = 'fixed'
        b.style.width = '100%'
        b.style.backgroundColor = '#ffffff'
        b.style.border = '.1em solid #000000'
        b.style.color = '#b50000'
        b.style.bottom = '0px'
        b.style.left = '0px'
        b.style.margin = '0px'
        b.style.zIndex = 1e4
        b.style.textAlign = 'center'
        b.classList.add('firebase-emulator-warning')
        q.document.body.appendChild(b)
      })
  }
  U.prototype.fl = function (a) {
    this.Z.push(a)
    Gm(
      this.j,
      firebase.SDK_VERSION ? yk('JsCore', firebase.SDK_VERSION, this.Z) : null
    )
    this.dispatchEvent(new Er(this.Z))
  }
  U.prototype.oh = function (a) {
    this.M === a || this.Ka || ((this.M = a), (this.j.M = this.M))
  }
  U.prototype.qa = function () {
    return this.M
  }
  var Ar = function (a) {
    Object.defineProperty(a, 'lc', {
      get: function () {
        return this.Qa
      },
      set: function (b) {
        this.gd(b)
      },
      enumerable: !1,
    })
    a.Qa = null
    Object.defineProperty(a, 'ti', {
      get: function () {
        return this.qa()
      },
      set: function (b) {
        this.oh(b)
      },
      enumerable: !1,
    })
    a.M = null
    Object.defineProperty(a, 'emulatorConfig', {
      get: function () {
        if (this.u) {
          var b = E(this.u.url)
          b = Zk({
            protocol: b.ma,
            host: b.ga,
            port: b.gb,
            options: Zk({ disableWarnings: this.u.disableWarnings }),
          })
        } else b = null
        return b
      },
      enumerable: !1,
    })
  }
  U.prototype.toJSON = function () {
    return {
      apiKey: this.A().options.apiKey,
      authDomain: this.A().options.authDomain,
      appName: this.A().name,
      currentUser: V(this) && V(this).o(),
    }
  }
  var Fr = function (a) {
      return a.hk || M(new R('auth-domain-config-required'))
    },
    zr = function (a) {
      var b = a.A().options.authDomain,
        c = a.A().options.apiKey
      b &&
        Ck() &&
        (a.hk = a.se.then(function () {
          if (!a.Ka) {
            a.C = fq(b, c, a.A().name, a.u)
            a.C.subscribe(a)
            V(a) && Rq(V(a))
            if (a.Lb) {
              Rq(a.Lb)
              var d = a.Lb
              d.gd(a.Qa)
              Jq(d, a)
              d = a.Lb
              Iq(d, a.Z)
              Lq(d, a)
              d = a.Lb
              Hq(d, a.u)
              Kq(d, a)
              a.Lb = null
            }
            return a.C
          }
        }))
    }
  k = U.prototype
  k.Kh = function (a, b) {
    switch (a) {
      case 'unknown':
      case 'signInViaRedirect':
        return !0
      case 'signInViaPopup':
        return this.Ta == b && !!this.Sa
      default:
        return !1
    }
  }
  k.pc = function (a, b, c, d) {
    'signInViaPopup' == a &&
      this.Ta == d &&
      (c && this.mc ? this.mc(c) : b && !c && this.Sa && this.Sa(b),
      this.ka && (this.ka.cancel(), (this.ka = null)),
      delete this.Sa,
      delete this.mc)
  }
  k.yd = function (a, b) {
    return 'signInViaRedirect' == a ||
      ('signInViaPopup' == a && this.Ta == b && this.Sa)
      ? v(this.lk, this)
      : null
  }
  k.lk = function (a, b, c, d) {
    var e = this,
      f = { requestUri: a, postBody: d, sessionId: b, tenantId: c }
    this.ka && (this.ka.cancel(), (this.ka = null))
    return e.se.then(function () {
      return Gr(e, Il(e.j, f))
    })
  }
  k.Ie = function () {
    return zk()
  }
  k.signInWithPopup = function (a) {
    if (!Ck()) return M(new R('operation-not-supported-in-this-environment'))
    var b = this,
      c = el(a.providerId),
      d = this.Ie(),
      e = null
    ;(!Dk() || rk()) &&
      this.A().options.authDomain &&
      a.isOAuthProvider &&
      (e = Zn(
        this.A().options.authDomain,
        this.A().options.apiKey,
        this.A().name,
        'signInViaPopup',
        a,
        null,
        d,
        firebase.SDK_VERSION || null,
        null,
        null,
        this.qa(),
        this.u
      ))
    var f = hk(e, c && c.Yc, c && c.Xc)
    c = Fr(this)
      .then(function (g) {
        return g.Qd(f, 'signInViaPopup', a, d, !!e, b.qa())
      })
      .then(function () {
        return new K(function (g, h) {
          b.pc('signInViaPopup', null, new R('cancelled-popup-request'), b.Ta)
          b.Sa = g
          b.mc = h
          b.Ta = d
          b.ka = b.C.ee(b, 'signInViaPopup', f, d)
        })
      })
      .then(function (g) {
        f && gk(f)
        return g ? Zk(g) : null
      })
      .h(function (g) {
        f && gk(f)
        throw g
      })
    return this.m(c)
  }
  k.signInWithRedirect = function (a) {
    if (!Ck()) return M(new R('operation-not-supported-in-this-environment'))
    var b = this,
      c = Fr(this)
        .then(function () {
          return sr(b.Ya)
        })
        .then(function () {
          return b.C.Rd('signInViaRedirect', a, void 0, b.qa())
        })
    return this.m(c)
  }
  var Hr = function (a) {
    if (!Ck()) return M(new R('operation-not-supported-in-this-environment'))
    var b = Fr(a)
      .then(function () {
        return a.C.getRedirectResult()
      })
      .then(function (c) {
        return c ? Zk(c) : null
      })
    return a.m(b)
  }
  U.prototype.getRedirectResult = function () {
    var a = this
    return Hr(this)
      .then(function (b) {
        a.C && a.C.Bc()
        return b
      })
      .h(function (b) {
        a.C && a.C.Bc()
        throw b
      })
  }
  U.prototype.updateCurrentUser = function (a) {
    if (!a) return M(new R('null-user'))
    if (this.M != a.tenantId) return M(new R('tenant-id-mismatch'))
    var b = this,
      c = {}
    c.apiKey = this.A().options.apiKey
    c.authDomain = this.A().options.authDomain
    c.appName = this.A().name
    var d = kr(a, c, b.oc, vb(b.Z))
    return this.m(
      this.Ua.then(function () {
        if (b.A().options.apiKey != a.cb()) return d.reload()
      })
        .then(function () {
          if (V(b) && a.uid == V(b).uid) return V(b).copy(a), b.Fb(a)
          wr(b, d)
          Rq(d)
          return b.Fb(d)
        })
        .then(function () {
          b.Hb()
        })
    )
  }
  var Ir = function (a, b) {
      var c = {}
      c.apiKey = a.A().options.apiKey
      c.authDomain = a.A().options.authDomain
      c.appName = a.A().name
      a.u && (c.emulatorConfig = a.u)
      return a.se
        .then(function () {
          return jr(c, b, a.oc, vb(a.Z))
        })
        .then(function (d) {
          if (V(a) && d.uid == V(a).uid) return V(a).copy(d), a.Fb(d)
          wr(a, d)
          Rq(d)
          return a.Fb(d)
        })
        .then(function () {
          a.Hb()
        })
    },
    wr = function (a, b) {
      V(a) &&
        (Pq(V(a), a.Lj),
        jg(V(a), 'tokenChanged', a.ld),
        jg(V(a), 'userDeleted', a.Jj),
        jg(V(a), 'userInvalidated', a.Kj),
        Oq(V(a)))
      b &&
        (b.Df.push(a.Lj),
        I(b, 'tokenChanged', a.ld),
        I(b, 'userDeleted', a.Jj),
        I(b, 'userInvalidated', a.Kj),
        0 < a.Zb && Nq(b))
      Q(a, 'currentUser', b)
      b && (b.gd(a.Qa), Jq(b, a), Iq(b, a.Z), Lq(b, a), Hq(b, a.u), Kq(b, a))
    }
  U.prototype.signOut = function () {
    var a = this,
      b = this.Ua.then(function () {
        a.C && a.C.Bc()
        if (!V(a)) return L()
        wr(a, null)
        return ur(a.Ya).then(function () {
          a.Hb()
        })
      })
    return this.m(b)
  }
  var Jr = function (a) {
      var b = a.A().options.authDomain
      b = mr(a.oc, b).then(function (c) {
        if ((a.Lb = c)) c.Kb = a.oc
        return gr(a.oc)
      })
      return a.m(b)
    },
    xr = function (a) {
      var b = a.A().options.authDomain,
        c = Jr(a)
          .then(function () {
            return vr(a.Ya, b, a.u)
          })
          .then(function (d) {
            return d
              ? ((d.Kb = a.oc),
                a.Lb && (a.Lb.Jb || null) == (d.Jb || null)
                  ? d
                  : d
                      .reload()
                      .then(function () {
                        return tr(a.Ya, d).then(function () {
                          return d
                        })
                      })
                      .h(function (e) {
                        return 'auth/network-request-failed' == e.code
                          ? d
                          : ur(a.Ya)
                      }))
              : null
          })
          .then(function (d) {
            wr(a, d || null)
          })
      return a.m(c)
    },
    yr = function (a) {
      return a.se
        .then(function () {
          return Hr(a)
        })
        .h(function () {})
        .then(function () {
          if (!a.Ka) return a.xg()
        })
        .h(function () {})
        .then(function () {
          if (!a.Ka) {
            a.Ye = !0
            var b = a.Ya
            b.s.addListener(nr('local'), b.F, a.xg)
          }
        })
    }
  k = U.prototype
  k.Ul = function () {
    var a = this,
      b = this.A().options.authDomain
    return vr(this.Ya, b).then(function (c) {
      if (!a.Ka) {
        var d
        if ((d = V(a) && c)) {
          d = V(a).uid
          var e = c.uid
          d =
            void 0 === d ||
            null === d ||
            '' === d ||
            void 0 === e ||
            null === e ||
            '' === e
              ? !1
              : d == e
        }
        if (d) return V(a).copy(c), V(a).getIdToken()
        if (V(a) || c)
          wr(a, c), c && (Rq(c), (c.Kb = a.oc)), a.C && a.C.subscribe(a), a.Hb()
      }
    })
  }
  k.Fb = function (a) {
    return tr(this.Ya, a)
  }
  k.Ag = function () {
    this.Hb()
    this.Fb(V(this))
  }
  k.Ek = function () {
    this.signOut()
  }
  k.Fk = function () {
    this.signOut()
  }
  var Gr = function (a, b) {
    var c = null,
      d = null
    return a.m(
      b
        .then(
          function (e) {
            c = rm(e)
            d = op(e)
            return Ir(a, e)
          },
          function (e) {
            var f = null
            e &&
              'auth/multi-factor-auth-required' === e.code &&
              (f = nq(e.o(), a, v(a.zg, a)))
            throw f || e
          }
        )
        .then(function () {
          return Zk({
            user: V(a),
            credential: c,
            additionalUserInfo: d,
            operationType: 'signIn',
          })
        })
    )
  }
  k = U.prototype
  k.zg = function (a) {
    var b = this
    return this.Ua.then(function () {
      return Gr(b, L(a))
    })
  }
  k.Mk = function (a) {
    var b = this
    this.addAuthTokenListener(function () {
      a.next(V(b))
    })
  }
  k.Ok = function (a) {
    var b = this
    Kr(this, function () {
      a.next(V(b))
    })
  }
  k.onIdTokenChanged = function (a, b, c) {
    var d = this
    this.Ye &&
      firebase.Promise.resolve().then(function () {
        'function' === typeof a
          ? a(V(d))
          : 'function' === typeof a.next && a.next(V(d))
      })
    return this.kl(a, b, c)
  }
  k.onAuthStateChanged = function (a, b, c) {
    var d = this
    this.Ye &&
      firebase.Promise.resolve().then(function () {
        d.me = d.getUid()
        'function' === typeof a
          ? a(V(d))
          : 'function' === typeof a.next && a.next(V(d))
      })
    return this.ol(a, b, c)
  }
  k.pk = function (a) {
    var b = this,
      c = this.Ua.then(function () {
        return V(b)
          ? V(b)
              .getIdToken(a)
              .then(function (d) {
                return { accessToken: d }
              })
          : null
      })
    return this.m(c)
  }
  k.signInWithCustomToken = function (a) {
    var b = this
    return this.Ua.then(function () {
      return Gr(b, S(b.j, Hn, { token: a }))
    }).then(function (c) {
      var d = c.user
      Xq(d, 'isAnonymous', !1)
      b.Fb(d)
      return c
    })
  }
  k.signInWithEmailAndPassword = function (a, b) {
    var c = this
    return this.Ua.then(function () {
      return Gr(c, S(c.j, bm, { email: a, password: b }))
    })
  }
  k.createUserWithEmailAndPassword = function (a, b) {
    var c = this
    return this.Ua.then(function () {
      return Gr(c, S(c.j, An, { email: a, password: b }))
    })
  }
  k.signInWithCredential = function (a) {
    var b = this
    return this.Ua.then(function () {
      return Gr(b, a.bc(b.j))
    })
  }
  k.signInAndRetrieveDataWithCredential = function (a) {
    Vk(
      'firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.'
    )
    return this.signInWithCredential(a)
  }
  k.signInAnonymously = function () {
    var a = this
    return this.Ua.then(function () {
      var b = V(a)
      if (b && b.isAnonymous) {
        var c = Zk({ providerId: null, isNewUser: !1 })
        return Zk({
          user: b,
          credential: null,
          additionalUserInfo: c,
          operationType: 'signIn',
        })
      }
      return Gr(a, a.j.signInAnonymously()).then(function (d) {
        var e = d.user
        Xq(e, 'isAnonymous', !0)
        a.Fb(e)
        return d
      })
    })
  }
  k.Lc = function () {
    var a = this.A().options.apiKey,
      b = this.A().name
    return a + ':' + b
  }
  k.A = function () {
    return this.app
  }
  var V = function (a) {
    return a.currentUser
  }
  U.prototype.getUid = function () {
    return (V(this) && V(this).uid) || null
  }
  var Lr = function (a) {
    return (V(a) && V(a)._lat) || null
  }
  k = U.prototype
  k.Hb = function () {
    if (this.Ye) {
      for (var a = 0; a < this.Rb.length; a++)
        if (this.Rb[a]) this.Rb[a](Lr(this))
      if (this.me !== this.getUid() && this.kd.length)
        for (this.me = this.getUid(), a = 0; a < this.kd.length; a++)
          if (this.kd[a]) this.kd[a](Lr(this))
    }
  }
  k.Uj = function (a) {
    this.addAuthTokenListener(a)
    this.Zb++
    0 < this.Zb && V(this) && Nq(V(this))
  }
  k.yl = function (a) {
    var b = this
    A(this.Rb, function (c) {
      c == a && b.Zb--
    })
    0 > this.Zb && (this.Zb = 0)
    0 == this.Zb && V(this) && Oq(V(this))
    this.removeAuthTokenListener(a)
  }
  k.addAuthTokenListener = function (a) {
    var b = this
    this.Rb.push(a)
    this.m(
      this.Ua.then(function () {
        b.Ka || (rb(b.Rb, a) && a(Lr(b)))
      })
    )
  }
  k.removeAuthTokenListener = function (a) {
    ub(this.Rb, function (b) {
      return b == a
    })
  }
  var Kr = function (a, b) {
    a.kd.push(b)
    a.m(
      a.Ua.then(function () {
        !a.Ka &&
          rb(a.kd, b) &&
          a.me !== a.getUid() &&
          ((a.me = a.getUid()), b(Lr(a)))
      })
    )
  }
  k = U.prototype
  k.delete = function () {
    this.Ka = !0
    for (var a = 0; a < this.ia.length; a++) this.ia[a].cancel('app-deleted')
    this.ia = []
    this.Ya && ((a = this.Ya), a.s.removeListener(nr('local'), a.F, this.xg))
    this.C && (this.C.unsubscribe(this), this.C.Bc())
    return firebase.Promise.resolve()
  }
  k.m = function (a) {
    var b = this
    this.ia.push(a)
    a.Ob(function () {
      sb(b.ia, a)
    })
    return a
  }
  k.fetchSignInMethodsForEmail = function (a) {
    return this.m(Rm(this.j, a))
  }
  k.isSignInWithEmailLink = function (a) {
    return !!fm(a)
  }
  k.sendSignInLinkToEmail = function (a, b) {
    var c = this
    return this.m(
      L()
        .then(function () {
          var d = new bp(b)
          if (!d.Lh)
            throw new R(
              'argument-error',
              'handleCodeInApp must be true when sending sign in link to email'
            )
          return cp(d)
        })
        .then(function (d) {
          return c.j.sendSignInLinkToEmail(a, d)
        })
        .then(function () {})
    )
  }
  k.verifyPasswordResetCode = function (a) {
    return this.checkActionCode(a).then(function (b) {
      return b.data.email
    })
  }
  k.confirmPasswordReset = function (a, b) {
    return this.m(this.j.confirmPasswordReset(a, b).then(function () {}))
  }
  k.checkActionCode = function (a) {
    return this.m(
      this.j.checkActionCode(a).then(function (b) {
        return new ql(b)
      })
    )
  }
  k.applyActionCode = function (a) {
    return this.m(this.j.applyActionCode(a).then(function () {}))
  }
  k.sendPasswordResetEmail = function (a, b) {
    var c = this
    return this.m(
      L()
        .then(function () {
          return 'undefined' === typeof b || hc(b) ? {} : cp(new bp(b))
        })
        .then(function (d) {
          return c.j.sendPasswordResetEmail(a, d)
        })
        .then(function () {})
    )
  }
  k.signInWithPhoneNumber = function (a, b) {
    return this.m(ep(this, a, b, v(this.signInWithCredential, this)))
  }
  k.signInWithEmailLink = function (a, b) {
    var c = this
    return this.m(
      L().then(function () {
        b = b || Zj()
        var d = gm(a, b),
          e = fm(b)
        if (!e) throw new R('argument-error', 'Invalid email link!')
        if (e.tenantId !== c.qa()) throw new R('tenant-id-mismatch')
        return c.signInWithCredential(d)
      })
    )
  }
  var Br = function (a) {
    Of.call(this, 'languageCodeChanged')
    this.languageCode = a
  }
  p(Br, Of)
  var Dr = function (a) {
    Of.call(this, 'emulatorConfigChanged')
    this.emulatorConfig = a
  }
  p(Dr, Of)
  var Er = function (a) {
    Of.call(this, 'frameworkChanged')
    this.xd = a
  }
  p(Er, Of)
  var Nr = function (a, b, c, d) {
      a: {
        c = Array.prototype.slice.call(c)
        var e = 0
        for (var f = !1, g = 0; g < b.length; g++)
          if (b[g].optional) f = !0
          else {
            if (f)
              throw new R(
                'internal-error',
                'Argument validator encountered a required argument after an optional argument.'
              )
            e++
          }
        f = b.length
        if (c.length < e || f < c.length)
          d =
            'Expected ' +
            (e == f
              ? 1 == e
                ? '1 argument'
                : e + ' arguments'
              : e + '-' + f + ' arguments') +
            ' but got ' +
            c.length +
            '.'
        else {
          for (e = 0; e < c.length; e++)
            if (
              ((f = b[e].optional && void 0 === c[e]), !b[e].ea(c[e]) && !f)
            ) {
              c = e
              b = b[e]
              if (0 > c || c >= Mr.length)
                throw new R(
                  'internal-error',
                  'Argument validator received an unsupported number of arguments.'
                )
              c = Mr[c]
              d =
                (d ? '' : c + ' argument ') +
                (b.name ? '"' + b.name + '" ' : '') +
                'must be ' +
                b.ba +
                '.'
              break a
            }
          d = null
        }
      }
      if (d) throw new R('argument-error', a + ' failed: ' + d)
    },
    Mr = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(
      ' '
    ),
    W = function (a, b) {
      return {
        name: a || '',
        ba: 'a valid string',
        optional: !!b,
        ea: function (c) {
          return 'string' === typeof c
        },
      }
    },
    Or = function (a, b) {
      return {
        name: a || '',
        ba: 'a boolean',
        optional: !!b,
        ea: function (c) {
          return 'boolean' === typeof c
        },
      }
    },
    Pr = function (a, b) {
      return { name: a || '', ba: 'a valid object', optional: !!b, ea: t }
    },
    Qr = function (a, b) {
      return { name: a || '', ba: 'a function', optional: !!b, ea: ec }
    },
    Rr = function (a, b) {
      return {
        name: a || '',
        ba: 'null',
        optional: !!b,
        ea: function (c) {
          return null === c
        },
      }
    },
    Sr = function () {
      return {
        name: '',
        ba: 'an HTML element',
        optional: !1,
        ea: function (a) {
          return !!(a && a instanceof Element)
        },
      }
    },
    Tr = function () {
      return {
        name: 'auth',
        ba: 'an instance of Firebase Auth',
        optional: !0,
        ea: function (a) {
          return !!(a && a instanceof U)
        },
      }
    },
    Ur = function () {
      return {
        name: 'app',
        ba: 'an instance of Firebase App',
        optional: !0,
        ea: function (a) {
          return !!(a && a instanceof firebase.app.App)
        },
      }
    },
    Vr = function (a) {
      return {
        name: a ? a + 'Credential' : 'credential',
        ba: a ? 'a valid ' + a + ' credential' : 'a valid credential',
        optional: !1,
        ea: function (b) {
          if (!b) return !1
          var c = !a || b.providerId === a
          return !(!b.bc || !c)
        },
      }
    },
    Wr = function () {
      return {
        name: 'multiFactorAssertion',
        ba: 'a valid multiFactorAssertion',
        optional: !1,
        ea: function (a) {
          return a ? !!a.process : !1
        },
      }
    },
    Xr = function () {
      return {
        name: 'authProvider',
        ba: 'a valid Auth provider',
        optional: !1,
        ea: function (a) {
          return !!(
            a &&
            a.providerId &&
            a.hasOwnProperty &&
            a.hasOwnProperty('isOAuthProvider')
          )
        },
      }
    },
    Yr = function (a, b) {
      return (
        t(a) &&
        'string' === typeof a.type &&
        a.type === b &&
        'function' === typeof a.Cd
      )
    },
    Zr = function (a) {
      return t(a) && 'string' === typeof a.uid
    },
    $r = function () {
      return {
        name: 'applicationVerifier',
        ba: 'an implementation of firebase.auth.ApplicationVerifier',
        optional: !1,
        ea: function (a) {
          return !(
            !a ||
            'string' !== typeof a.type ||
            'function' !== typeof a.verify
          )
        },
      }
    },
    X = function (a, b, c, d) {
      return {
        name: c || '',
        ba: a.ba + ' or ' + b.ba,
        optional: !!d,
        ea: function (e) {
          return a.ea(e) || b.ea(e)
        },
      }
    }
  var Y = function (a, b) {
      for (var c in b) {
        var d = b[c].name
        a[d] = as(d, a[c], b[c].g)
      }
    },
    bs = function (a, b) {
      for (var c in b) {
        var d = b[c].name
        d !== c &&
          Object.defineProperty(a, d, {
            get: Ca(function (e) {
              return this[e]
            }, c),
            set: Ca(
              function (e, f, g, h) {
                Nr(e, [g], [h], !0)
                this[f] = h
              },
              d,
              c,
              b[c].Xf
            ),
            enumerable: !0,
          })
      }
    },
    Z = function (a, b, c, d) {
      a[b] = as(b, c, d)
    },
    as = function (a, b, c) {
      if (!c) return b
      var d = cs(a)
      a = function () {
        var g = Array.prototype.slice.call(arguments)
        Nr(d, c, g)
        return b.apply(this, g)
      }
      for (var e in b) a[e] = b[e]
      for (var f in b.prototype) a.prototype[f] = b.prototype[f]
      return a
    },
    cs = function (a) {
      a = a.split('.')
      return a[a.length - 1]
    }
  function ds() {}
  Q(ds, 'FACTOR_ID', 'phone')
  Y(U.prototype, {
    applyActionCode: { name: 'applyActionCode', g: [W('code')] },
    checkActionCode: { name: 'checkActionCode', g: [W('code')] },
    confirmPasswordReset: {
      name: 'confirmPasswordReset',
      g: [W('code'), W('newPassword')],
    },
    createUserWithEmailAndPassword: {
      name: 'createUserWithEmailAndPassword',
      g: [W('email'), W('password')],
    },
    fetchSignInMethodsForEmail: {
      name: 'fetchSignInMethodsForEmail',
      g: [W('email')],
    },
    getRedirectResult: { name: 'getRedirectResult', g: [] },
    isSignInWithEmailLink: {
      name: 'isSignInWithEmailLink',
      g: [W('emailLink')],
    },
    onAuthStateChanged: {
      name: 'onAuthStateChanged',
      g: [
        X(Pr(), Qr(), 'nextOrObserver'),
        Qr('opt_error', !0),
        Qr('opt_completed', !0),
      ],
    },
    onIdTokenChanged: {
      name: 'onIdTokenChanged',
      g: [
        X(Pr(), Qr(), 'nextOrObserver'),
        Qr('opt_error', !0),
        Qr('opt_completed', !0),
      ],
    },
    sendPasswordResetEmail: {
      name: 'sendPasswordResetEmail',
      g: [
        W('email'),
        X(
          Pr('opt_actionCodeSettings', !0),
          Rr(null, !0),
          'opt_actionCodeSettings',
          !0
        ),
      ],
    },
    sendSignInLinkToEmail: {
      name: 'sendSignInLinkToEmail',
      g: [W('email'), Pr('actionCodeSettings')],
    },
    setPersistence: { name: 'setPersistence', g: [W('persistence')] },
    signInAndRetrieveDataWithCredential: {
      name: 'signInAndRetrieveDataWithCredential',
      g: [Vr()],
    },
    signInAnonymously: { name: 'signInAnonymously', g: [] },
    signInWithCredential: { name: 'signInWithCredential', g: [Vr()] },
    signInWithCustomToken: { name: 'signInWithCustomToken', g: [W('token')] },
    signInWithEmailAndPassword: {
      name: 'signInWithEmailAndPassword',
      g: [W('email'), W('password')],
    },
    signInWithEmailLink: {
      name: 'signInWithEmailLink',
      g: [W('email'), W('emailLink', !0)],
    },
    signInWithPhoneNumber: {
      name: 'signInWithPhoneNumber',
      g: [W('phoneNumber'), $r()],
    },
    signInWithPopup: { name: 'signInWithPopup', g: [Xr()] },
    signInWithRedirect: { name: 'signInWithRedirect', g: [Xr()] },
    updateCurrentUser: {
      name: 'updateCurrentUser',
      g: [
        X(
          (function (a) {
            return {
              name: 'user',
              ba: 'an instance of Firebase User',
              optional: !!a,
              ea: function (b) {
                return !!(b && b instanceof T)
              },
            }
          })(),
          Rr(),
          'user'
        ),
      ],
    },
    signOut: { name: 'signOut', g: [] },
    toJSON: { name: 'toJSON', g: [W(null, !0)] },
    useDeviceLanguage: { name: 'useDeviceLanguage', g: [] },
    useEmulator: { name: 'useEmulator', g: [W('url'), Pr('options', !0)] },
    verifyPasswordResetCode: {
      name: 'verifyPasswordResetCode',
      g: [W('code')],
    },
  })
  bs(U.prototype, {
    lc: { name: 'languageCode', Xf: X(W(), Rr(), 'languageCode') },
    ti: { name: 'tenantId', Xf: X(W(), Rr(), 'tenantId') },
  })
  U.Persistence = pp
  U.Persistence.LOCAL = 'local'
  U.Persistence.SESSION = 'session'
  U.Persistence.NONE = 'none'
  Y(T.prototype, {
    delete: { name: 'delete', g: [] },
    getIdTokenResult: {
      name: 'getIdTokenResult',
      g: [Or('opt_forceRefresh', !0)],
    },
    getIdToken: { name: 'getIdToken', g: [Or('opt_forceRefresh', !0)] },
    linkAndRetrieveDataWithCredential: {
      name: 'linkAndRetrieveDataWithCredential',
      g: [Vr()],
    },
    linkWithCredential: { name: 'linkWithCredential', g: [Vr()] },
    linkWithPhoneNumber: {
      name: 'linkWithPhoneNumber',
      g: [W('phoneNumber'), $r()],
    },
    linkWithPopup: { name: 'linkWithPopup', g: [Xr()] },
    linkWithRedirect: { name: 'linkWithRedirect', g: [Xr()] },
    reauthenticateAndRetrieveDataWithCredential: {
      name: 'reauthenticateAndRetrieveDataWithCredential',
      g: [Vr()],
    },
    reauthenticateWithCredential: {
      name: 'reauthenticateWithCredential',
      g: [Vr()],
    },
    reauthenticateWithPhoneNumber: {
      name: 'reauthenticateWithPhoneNumber',
      g: [W('phoneNumber'), $r()],
    },
    reauthenticateWithPopup: { name: 'reauthenticateWithPopup', g: [Xr()] },
    reauthenticateWithRedirect: {
      name: 'reauthenticateWithRedirect',
      g: [Xr()],
    },
    reload: { name: 'reload', g: [] },
    sendEmailVerification: {
      name: 'sendEmailVerification',
      g: [
        X(
          Pr('opt_actionCodeSettings', !0),
          Rr(null, !0),
          'opt_actionCodeSettings',
          !0
        ),
      ],
    },
    toJSON: { name: 'toJSON', g: [W(null, !0)] },
    unlink: { name: 'unlink', g: [W('provider')] },
    updateEmail: { name: 'updateEmail', g: [W('email')] },
    updatePassword: { name: 'updatePassword', g: [W('password')] },
    updatePhoneNumber: { name: 'updatePhoneNumber', g: [Vr('phone')] },
    updateProfile: { name: 'updateProfile', g: [Pr('profile')] },
    verifyBeforeUpdateEmail: {
      name: 'verifyBeforeUpdateEmail',
      g: [
        W('email'),
        X(
          Pr('opt_actionCodeSettings', !0),
          Rr(null, !0),
          'opt_actionCodeSettings',
          !0
        ),
      ],
    },
  })
  Y(fo.prototype, {
    execute: { name: 'execute' },
    render: { name: 'render' },
    reset: { name: 'reset' },
    getResponse: { name: 'getResponse' },
  })
  Y($n.prototype, {
    execute: { name: 'execute' },
    render: { name: 'render' },
    reset: { name: 'reset' },
    getResponse: { name: 'getResponse' },
  })
  Y(K.prototype, {
    Ob: { name: 'finally' },
    h: { name: 'catch' },
    then: { name: 'then' },
  })
  bs(ap.prototype, {
    appVerificationDisabled: {
      name: 'appVerificationDisabledForTesting',
      Xf: Or('appVerificationDisabledForTesting'),
    },
  })
  Y(dp.prototype, { confirm: { name: 'confirm', g: [W('verificationCode')] } })
  Z(
    Fl,
    'fromJSON',
    function (a) {
      a = 'string' === typeof a ? JSON.parse(a) : a
      for (var b, c = [Nl, em, lm, Ll], d = 0; d < c.length; d++)
        if ((b = c[d](a))) return b
      return null
    },
    [X(W(), Pr(), 'json')]
  )
  Z(
    Zl,
    'credential',
    function (a, b) {
      return new $l(a, b)
    },
    [W('email'), W('password')]
  )
  Y($l.prototype, { o: { name: 'toJSON', g: [W(null, !0)] } })
  Y(Rl.prototype, {
    addScope: { name: 'addScope', g: [W('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      g: [Pr('customOAuthParameters')],
    },
  })
  Z(Rl, 'credential', Sl, [X(W(), Pr(), 'token')])
  Z(Zl, 'credentialWithLink', gm, [W('email'), W('emailLink')])
  Y(Tl.prototype, {
    addScope: { name: 'addScope', g: [W('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      g: [Pr('customOAuthParameters')],
    },
  })
  Z(Tl, 'credential', Ul, [X(W(), Pr(), 'token')])
  Y(Vl.prototype, {
    addScope: { name: 'addScope', g: [W('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      g: [Pr('customOAuthParameters')],
    },
  })
  Z(Vl, 'credential', Wl, [
    X(W(), X(Pr(), Rr()), 'idToken'),
    X(W(), Rr(), 'accessToken', !0),
  ])
  Y(Xl.prototype, {
    setCustomParameters: {
      name: 'setCustomParameters',
      g: [Pr('customOAuthParameters')],
    },
  })
  Z(Xl, 'credential', Yl, [X(W(), Pr(), 'token'), W('secret', !0)])
  Y(Ql.prototype, {
    addScope: { name: 'addScope', g: [W('scope')] },
    credential: {
      name: 'credential',
      g: [
        X(W(), X(Pr(), Rr()), 'optionsOrIdToken'),
        X(W(), Rr(), 'accessToken', !0),
      ],
    },
    setCustomParameters: {
      name: 'setCustomParameters',
      g: [Pr('customOAuthParameters')],
    },
  })
  Y(Ml.prototype, { o: { name: 'toJSON', g: [W(null, !0)] } })
  Y(Hl.prototype, { o: { name: 'toJSON', g: [W(null, !0)] } })
  Z(mm, 'credential', qm, [W('verificationId'), W('verificationCode')])
  Y(mm.prototype, {
    verifyPhoneNumber: {
      name: 'verifyPhoneNumber',
      g: [
        X(
          W(),
          (function (a, b) {
            return {
              name: a || 'phoneInfoOptions',
              ba: 'valid phone info options',
              optional: !!b,
              ea: function (c) {
                return c
                  ? c.session && c.phoneNumber
                    ? Yr(c.session, 'enroll') &&
                      'string' === typeof c.phoneNumber
                    : c.session && c.multiFactorHint
                      ? Yr(c.session, 'signin') && Zr(c.multiFactorHint)
                      : c.session && c.multiFactorUid
                        ? Yr(c.session, 'signin') &&
                          'string' === typeof c.multiFactorUid
                        : c.phoneNumber
                          ? 'string' === typeof c.phoneNumber
                          : !1
                  : !1
              },
            }
          })(),
          'phoneInfoOptions'
        ),
        $r(),
      ],
    },
  })
  Y(hm.prototype, { o: { name: 'toJSON', g: [W(null, !0)] } })
  Y(R.prototype, { toJSON: { name: 'toJSON', g: [W(null, !0)] } })
  Y(tm.prototype, { toJSON: { name: 'toJSON', g: [W(null, !0)] } })
  Y(zl.prototype, { toJSON: { name: 'toJSON', g: [W(null, !0)] } })
  Y(mq.prototype, { toJSON: { name: 'toJSON', g: [W(null, !0)] } })
  Y(lq.prototype, { resolveSignIn: { name: 'resolveSignIn', g: [Wr()] } })
  Y(vq.prototype, {
    getSession: { name: 'getSession', g: [] },
    enroll: { name: 'enroll', g: [Wr(), W('displayName', !0)] },
    unenroll: {
      name: 'unenroll',
      g: [
        X(
          {
            name: 'multiFactorInfo',
            ba: 'a valid multiFactorInfo',
            optional: !1,
            ea: Zr,
          },
          W(),
          'multiFactorInfoIdentifier'
        ),
      ],
    },
  })
  Y(qo.prototype, {
    clear: { name: 'clear', g: [] },
    render: { name: 'render', g: [] },
    verify: { name: 'verify', g: [] },
  })
  Z(sl, 'parseLink', tl, [W('link')])
  Z(
    ds,
    'assertion',
    function (a) {
      return new sq(a)
    },
    [Vr('phone')]
  )
  ;(function () {
    if (
      'undefined' !== typeof firebase &&
      firebase.INTERNAL &&
      firebase.INTERNAL.registerService
    ) {
      var a = {
        ActionCodeInfo: {
          Operation: {
            EMAIL_SIGNIN: 'EMAIL_SIGNIN',
            PASSWORD_RESET: 'PASSWORD_RESET',
            RECOVER_EMAIL: 'RECOVER_EMAIL',
            REVERT_SECOND_FACTOR_ADDITION: 'REVERT_SECOND_FACTOR_ADDITION',
            VERIFY_AND_CHANGE_EMAIL: 'VERIFY_AND_CHANGE_EMAIL',
            VERIFY_EMAIL: 'VERIFY_EMAIL',
          },
        },
        Auth: U,
        AuthCredential: Fl,
        Error: R,
      }
      Z(a, 'EmailAuthProvider', Zl, [])
      Z(a, 'FacebookAuthProvider', Rl, [])
      Z(a, 'GithubAuthProvider', Tl, [])
      Z(a, 'GoogleAuthProvider', Vl, [])
      Z(a, 'TwitterAuthProvider', Xl, [])
      Z(a, 'OAuthProvider', Ql, [W('providerId')])
      Z(a, 'SAMLAuthProvider', Pl, [W('providerId')])
      Z(a, 'PhoneAuthProvider', mm, [Tr()])
      Z(a, 'RecaptchaVerifier', qo, [
        X(W(), Sr(), 'recaptchaContainer'),
        Pr('recaptchaParameters', !0),
        Ur(),
      ])
      Z(a, 'ActionCodeURL', sl, [])
      Z(a, 'PhoneMultiFactorGenerator', ds, [])
      firebase.INTERNAL.registerService(
        'auth',
        function (b, c) {
          b = new U(b)
          c({
            INTERNAL: {
              getUid: v(b.getUid, b),
              getToken: v(b.pk, b),
              addAuthTokenListener: v(b.Uj, b),
              removeAuthTokenListener: v(b.yl, b),
            },
          })
          return b
        },
        a,
        function (b, c) {
          if ('create' === b)
            try {
              c.auth()
            } catch (d) {}
        }
      )
      firebase.INTERNAL.extendNamespace({ User: T })
    } else
      throw Error(
        'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.'
      )
  })()
  var es = function () {
    this.bk = '/__/firebase/init.json'
    this.ck = new fj()
  }
  es.prototype.zf = function (a, b, c, d, e, f) {
    return new K(function (g, h) {
      try {
        if (f) {
          a.rc = Math.max(0, f)
          var l = setTimeout(function () {
            a.dispatchEvent('timeout')
          }, f)
        }
        a.listen('complete', function () {
          l && clearTimeout(l)
          var m = null,
            n = Tj(a)
          if (200 === Rj(a))
            try {
              ;(m = JSON.parse(n) || null), g(m || null)
            } catch (r) {
              h(Error(n))
            }
          else 404 === Rj(a) ? h(Error('resource-not-found')) : h(Error(n))
        })
        a.Tc('ready', function () {
          l && clearTimeout(l)
          a.oa()
        })
        a.Tc('timeout', function () {
          l && clearTimeout(l)
          a.oa()
          h(Error('Request timed out'))
        })
        a.send(b, c, d, e)
      } catch (m) {
        h(m)
      }
    })
  }
  var fs = function (a) {
    return a.zf(
      new Hj(a.ck),
      a.bk,
      'GET',
      null,
      { 'Content-type': 'application/json' },
      1e4
    )
  }
  function gs(a) {
    var b = q.window.location
    a = Vd(a)
    a instanceof wc ? (a = xc(a)) : Xd.test(a) || (Wd(a), (a = void 0))
    void 0 !== a && b.assign(a)
  }
  function hs() {
    var a = q.window
    var b = a || q.window
    try {
      var c = !(!b || b == b.top)
    } catch (d) {
      c = !1
    }
    if (c)
      try {
        return !(
          a.parent.location.hostname == a.location.hostname &&
          a.parent.location.protocol == a.location.protocol
        )
      } catch (d) {
        return !0
      }
    return !1
  }
  function is(a) {
    a = (a || 'en').toLowerCase().split(/[\-_]/)
    return (
      0 < a.length &&
      ('en' != a[0] || (1 < a.length && 'en' == a[0] && 'xa' == a[1]))
    )
  }
  var js = function (a) {
    this.pb = a
  }
  js.prototype.render = function (a) {
    this.clear()
    this.Ea = a
    this.Ea.render(this.pb)
  }
  js.prototype.clear = function () {
    this.Ea && this.Ea.oa()
  }
  js.prototype.ac = function () {
    return this.pb
  }
  js.prototype.Cf = function (a) {
    this.Ea && this.Ea.Cf(a)
  }
  function ks(a, b) {
    b = new Gi(b)
    a.render(b)
  }
  function ls(a, b, c) {
    var d = null
    b.checkActionCode(c)
      .then(function (e) {
        d = e.data.email
        return b.applyActionCode(c)
      })
      .then(
        function () {
          ms(a, b, d)
        },
        function () {
          var e = new Fi()
          a.render(e)
        }
      )
  }
  var ms = function (a, b, c) {
    var d = new vi(c, function () {
      d.Fe(
        v(b.sendPasswordResetEmail, b),
        [c],
        function () {
          a.clear()
          var e = new xi(c)
          a.render(e)
        },
        function () {
          a.Cf(Hi().toString())
        }
      )
    })
    a.render(d)
  }
  function ns(a, b, c, d) {
    var e = d
      ? function () {
          gs(d)
        }
      : void 0
    b.verifyPasswordResetCode(c).then(
      function (f) {
        f = new Pi(f, function () {
          os(a, b, c, e)
        })
        a.render(f)
      },
      function (f) {
        ps(a, f)
      }
    )
  }
  var os = function (a, b, c, d) {
      var e = a.Ea.Yj()
      e &&
        a.Ea.Fe(
          v(b.confirmPasswordReset, b),
          [c, e],
          function () {
            var f = new Di(d)
            a.render(f)
          },
          function (f) {
            ps(a, f)
          }
        )
    },
    ps = function (a, b) {
      var c = b.code
      if ('auth/weak-password' === c) {
        Ah(a.Ea.Jc(), !1)
        c = a.Ea.oi()
        b = b = { code: b.code }
        var d = b.code
        pe()
        if (G['firebaseui.auth.soy2.strings.error'])
          b = G['firebaseui.auth.soy2.strings.error']({ code: d }, void 0)
        else
          switch (
            ((b = ''),
            (d = H(
              null == d || 'string' === typeof d,
              'code',
              d,
              'null|string|undefined'
            )),
            t(d) ? d.toString() : d)
          ) {
            case 'auth/email-already-in-use':
              b += 'The email address is already used by another account'
              break
            case 'auth/requires-recent-login':
              b += Ii()
              break
            case 'auth/too-many-requests':
              b +=
                'You have entered an incorrect password too many times. Please try again in a few minutes.'
              break
            case 'auth/user-cancelled':
              b +=
                'Please authorize the required permissions to sign in to the application'
              break
            case 'auth/user-not-found':
              b += "That email address doesn't match an existing account"
              break
            case 'auth/user-token-expired':
              b += Ii()
              break
            case 'auth/weak-password':
              b += 'The password must be at least 6 characters long'
              break
            case 'auth/wrong-password':
              b += "The email and password you entered don't match"
              break
            case 'auth/network-request-failed':
              b += 'A network error has occurred'
              break
            case 'auth/invalid-phone-number':
              d = G['firebaseui.auth.soy2.strings.errorInvalidPhoneNumber']
                ? G['firebaseui.auth.soy2.strings.errorInvalidPhoneNumber'](
                    null,
                    void 0
                  )
                : 'Enter a valid phone number'
              b += d
              break
            case 'auth/invalid-verification-code':
              d = G['firebaseui.auth.soy2.strings.errorInvalidConfirmationCode']
                ? G[
                    'firebaseui.auth.soy2.strings.errorInvalidConfirmationCode'
                  ](null, void 0)
                : 'Wrong code. Try again.'
              b += d
              break
            case 'auth/code-expired':
              b += 'This code is no longer valid'
              break
            case 'auth/expired-action-code':
              b += 'This code has expired.'
              break
            case 'auth/invalid-action-code':
              b +=
                'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.'
              break
            case 'auth/password-does-not-meet-requirements':
              b += 'Missing password requirements:'
          }
        Gh(c, b.toString())
        a.Ea.Jc().focus()
      } else
        'auth/password-does-not-meet-requirements' === c
          ? (Ah(a.Ea.Jc(), !1), Gh(a.Ea.oi(), b.message), a.Ea.Jc().focus())
          : ((c = new Ei()), a.render(c))
    }
  function qs(a, b, c, d) {
    var e = d
        ? function () {
            gs(d)
          }
        : void 0,
      f = null
    b.checkActionCode(c)
      .then(function (g) {
        f = g.data.email
        return b.applyActionCode(c)
      })
      .then(
        function () {
          var g = new Ai(f, e)
          a.render(g)
        },
        function () {
          var g = new Bi()
          a.render(g)
        }
      )
  }
  function rs(a, b, c, d) {
    var e = d
      ? function () {
          gs(d)
        }
      : void 0
    b.applyActionCode(c).then(
      function () {
        var f = new yi(e)
        a.render(f)
      },
      function () {
        var f = new zi()
        a.render(f)
      }
    )
  }
  function ss(a, b, c) {
    var d = null,
      e = null
    b.checkActionCode(c)
      .then(function (f) {
        d = f.data.email
        e = f.data.multiFactorInfo
        return b.applyActionCode(c)
      })
      .then(
        function () {
          ts(a, b, d, e)
        },
        function () {
          var f = new Ci()
          a.render(f)
        }
      )
  }
  var ts = function (a, b, c, d) {
    var e = new Qi(
      d.factorId,
      function () {
        e.Fe(
          v(b.sendPasswordResetEmail, b),
          [c],
          function () {
            a.clear()
            var f = new xi(c)
            a.render(f)
          },
          function () {
            a.Cf(Hi().toString())
          }
        )
      },
      d.phoneNumber
    )
    a.render(e)
  }
  var us = ha([
      'https://www.gstatic.com/firebasejs/ui/',
      '/firebase-ui-auth__',
      '.js',
    ]),
    vs = ha([
      'https://www.gstatic.com/firebasejs/ui/',
      '/firebase-ui-auth-rtl.css',
    ]),
    ws = ha([
      'https://www.gstatic.com/firebasejs/ui/',
      '/firebase-ui-auth.css',
    ]),
    ys = function (a, b, c) {
      return xs(c).then(function (d) {
        new d(b).start(a.ac(), {
          callbacks: {
            uiShown: function () {
              a.clear()
            },
          },
        })
      })
    },
    zs = new Kk(3e4, 6e4),
    xs = function (a) {
      var b = Error('Unable to load dependencies!')
      return new K(function (c, d) {
        var e = setTimeout(function () {
            d(b)
          }, zs.get()),
          f = $d(us, '6.1.1', a.replace('-', '_').toLowerCase())
        L(Gj(f))
          .then(function () {
            clearTimeout(e)
            var g = Vc.test(a) ? $d(vs, '6.1.1') : $d(ws, '6.1.1'),
              h = We('LINK')
            h.setAttribute('rel', 'stylesheet')
            h.setAttribute('type', 'text/css')
            h.setAttribute('href', tc(g).toString())
            document.head.appendChild(h)
            P('firebaseui.auth.AuthUI') ? c(P('firebaseui.auth.AuthUI')) : d(b)
          })
          .h(function () {
            clearTimeout(e)
            d(b)
          })
      })
    }
  var Cs = function (a, b) {
    this.pb = a
    a = As('apiKey', b) || ''
    a: {
      var c = As('mode', b) || ''
      for (d in Bs)
        if (Bs[d].mode.toLowerCase() == c.toLowerCase()) {
          var d = Bs[d].handler
          break a
        }
      d = null
    }
    this.v = {
      apiKey: a,
      handler: d,
      oobCode: As('oobCode', b) || '',
      continueUrl: As('continueUrl', b) || null,
      lang: As('lang', b) || 'en',
      mode: As('mode', b) || '',
      tenantId: As('tenantId', b) || null,
    }
  }
  p(Cs, js)
  Cs.prototype.start = function () {
    var a = this
    Ds(Vc.test(this.v.lang || 'en'))
    var b = new ri()
    this.render(b)
    if (hs()) ks(this, 'The page is displayed in a cross origin iframe.')
    else {
      if (this.v.handler && this.v.apiKey && this.v.oobCode && this.v.mode)
        return (
          (this.A = firebase.initializeApp(
            { apiKey: this.v.apiKey },
            this.v.apiKey
          )),
          (this.Sb = this.A.auth()),
          this.v.tenantId && (this.Sb.tenantId = this.v.tenantId),
          (this.Cc = this.v.continueUrl),
          (this.ak = new es()),
          (b = L()),
          this.Cc &&
            Bf() &&
            (b = fs(this.ak)
              .then(
                function (c) {
                  return c
                },
                function (c) {
                  if (c && c.message && 'resource-not-found' === c.message)
                    return { apiKey: a.v.apiKey }
                  throw c
                }
              )
              .then(function (c) {
                return Tm(new Bm((c && c.apiKey) || a.v.apiKey))
              })
              .then(function (c) {
                if (!lk(c, a.Cc)) throw new zl(a.Cc)
              })),
          b.then(
            function () {
              return a.v.handler(a, a.Sb, a.v.oobCode, a.v.lang, a.Cc)
            },
            function (c) {
              ks(a, c.message)
            }
          )
        )
      ks(this, 'The selected page mode is invalid.')
    }
    return L()
  }
  Cs.prototype.Ic = function () {
    return this.v.handler
  }
  Cs.prototype.cb = function () {
    return this.v.apiKey
  }
  Cs.prototype.qa = function () {
    return this.v.tenantId
  }
  var Es = function (a, b, c, d, e, f) {
      if (is(e))
        return ys(a, b, e).h(function () {
          c(a, b, d, f)
        })
      c(a, b, d, f)
      return L()
    },
    As = function (a, b) {
      b = b || window.location.href
      var c = b.search(fd)
      b: {
        var d = 0
        for (var e = a.length; 0 <= (d = b.indexOf(a, d)) && d < c; ) {
          var f = b.charCodeAt(d - 1)
          if (38 == f || 63 == f)
            if (
              ((f = b.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)
            )
              break b
          d += e + 1
        }
        d = -1
      }
      if (0 > d) a = null
      else {
        e = b.indexOf('&', d)
        if (0 > e || e > c) e = c
        d += a.length + 1
        a = decodeURIComponent(b.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' '))
      }
      return a
    },
    Gs = function (a, b) {
      a = t(a) && 1 == a.nodeType ? a : document.querySelector(String(a))
      if (null == a) throw Error('Cannot find action widget container.')
      Fs = new Cs(a, b)
      Fs.start()
    },
    Ds = function (a) {
      a
        ? wh(
            Hc(
              new pc(
                nc,
                '@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap);dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:none}dialog[open]{display:block}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}@media screen and (max-width:540px){dialog[_polyfill_modal]{top:0;width:auto;margin:1em}}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}.mdl-button{background:transparent;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;-webkit-transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored:active{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored:focus:not(:active){background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:hsla(0,0%,62%,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored:focus:not(:active){background-color:#ff4081}.mdl-button--fab.mdl-button--colored:active{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{color:#fff;background-color:#ff4081}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);box-shadow:none}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-card{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;width:330px;z-index:1;position:relative;background:#fff;border-radius:2px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__media{background-color:#ff4081;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-origin:padding-box;background-attachment:scroll;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__title{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#000;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-moz-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;line-height:normal;padding:16px 16px;-webkit-perspective-origin:165px 56px;perspective-origin:165px 56px;-webkit-transform-origin:165px 56px;transform-origin:165px 56px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;color:inherit;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:24px;font-weight:300;line-height:normal;overflow:hidden;-webkit-transform-origin:149px 48px;transform-origin:149px 48px;margin:0}.mdl-card__subtitle-text{font-size:14px;color:rgba(0,0,0,.54);margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px 16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{font-size:16px;line-height:normal;width:100%;background-color:transparent;padding:8px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-dialog{border:none;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);width:280px}.mdl-dialog__title{padding:24px 24px 0;margin:0;font-size:2.5rem}.mdl-dialog__actions{padding:8px 8px 8px 24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-moz-box-orient:horizontal;-moz-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.mdl-dialog__actions>*{margin-right:8px;height:36px}.mdl-dialog__actions>:first-child{margin-right:0}.mdl-dialog__actions--full-width{padding:0 0 8px 0}.mdl-dialog__actions--full-width>*{height:48px;-webkit-box-flex:0;-webkit-flex:0 0 100%;-moz-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;padding-right:16px;margin-right:0;text-align:right}.mdl-dialog__content{padding:20px 24px 24px 24px;color:rgba(0,0,0,.54)}.mdl-progress{display:block;position:relative;height:4px;width:500px;max-width:100%}.mdl-progress>.bar{display:block;position:absolute;top:0;bottom:0;width:0;-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}.mdl-progress>.progressbar{background-color:#3f51b5;z-index:1;left:0}.mdl-progress>.bufferbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);z-index:0;left:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);-webkit-mask:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=");mask:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.9)),to(hsla(0,0%,100%,.9))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{background-color:#3f51b5;-webkit-animation-name:indeterminate1;animation-name:indeterminate1;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-image:none;background-color:#3f51b5;-webkit-animation-name:indeterminate2;animation-name:indeterminate2;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@-webkit-keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}.mdl-shadow--2dp{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}.mdl-spinner{display:inline-block;position:relative;width:28px;height:28px}.mdl-spinner:not(.is-upgraded).is-active:after{content:"Loading..."}.mdl-spinner.is-upgraded.is-active{-webkit-animation:mdl-spinner__container-rotate 1.5682352941s linear infinite;animation:mdl-spinner__container-rotate 1.5682352941s linear infinite}@-webkit-keyframes mdl-spinner__container-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mdl-spinner__container-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.mdl-spinner__layer{position:absolute;width:100%;height:100%;opacity:0}.mdl-spinner__layer-1{border-color:#42a5f5}.mdl-spinner--single-color .mdl-spinner__layer-1{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-1{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-2{border-color:#f44336}.mdl-spinner--single-color .mdl-spinner__layer-2{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-2{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-3{border-color:#fdd835}.mdl-spinner--single-color .mdl-spinner__layer-3{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-3{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-4{border-color:#4caf50}.mdl-spinner--single-color .mdl-spinner__layer-4{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-4{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(3turn);transform:rotate(3turn)}}@keyframes mdl-spinner__fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(3turn);transform:rotate(3turn)}}@-webkit-keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@-webkit-keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}.mdl-spinner__gap-patch{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__gap-patch .mdl-spinner__circle{width:1000%;left:-450%}.mdl-spinner__circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__circle-clipper.mdl-spinner__left{float:left}.mdl-spinner__circle-clipper.mdl-spinner__right{float:right}.mdl-spinner__circle-clipper .mdl-spinner__circle{width:200%}.mdl-spinner__circle{-moz-box-sizing:border-box;box-sizing:border-box;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0;left:0}.mdl-spinner__left .mdl-spinner__circle{border-right-color:transparent!important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle{-webkit-animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__right .mdl-spinner__circle{left:-100%;border-left-color:transparent!important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle{-webkit-animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@keyframes mdl-spinner__left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes mdl-spinner__right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}@keyframes mdl-spinner__right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}.mdl-textfield{position:relative;font-size:16px;display:inline-block;-moz-box-sizing:border-box;box-sizing:border-box;width:300px;max-width:100%;margin:0;padding:20px 0}.mdl-textfield .mdl-button{position:absolute;bottom:20px}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-width:32px;width:auto;min-height:32px}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{border:none;border-bottom:1px solid rgba(0,0,0,.12);display:block;font-size:16px;font-family:Helvetica,Arial,sans-serif;margin:0;padding:4px 0;width:100%;background:none;text-align:left;color:inherit}.mdl-textfield__input[type=number]{-moz-appearance:textfield}.mdl-textfield__input[type=number]::-webkit-inner-spin-button,.mdl-textfield__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:none}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;box-shadow:none}.mdl-textfield.is-disabled .mdl-textfield__input,fieldset[disabled] .mdl-textfield .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);font-size:16px;left:0;right:0;pointer-events:none;position:absolute;display:block;top:24px;width:100%;overflow:hidden;white-space:nowrap;text-align:left}.mdl-textfield.has-placeholder .mdl-textfield__label,.mdl-textfield.is-dirty .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{-webkit-transition:none;transition:none}.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label,fieldset[disabled] .mdl-textfield .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#3f51b5;font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:#3f51b5;bottom:20px;content:"";height:2px;left:45%;position:absolute;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;position:absolute;font-size:12px;margin-top:3px;visibility:hidden;display:block}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{position:relative;margin-left:32px;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block;max-width:.1px}.mdl-textfield.is-dirty .mdl-textfield__expandable-holder,.mdl-textfield.is-focused .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}.firebaseui-container{background-color:#fff;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;color:rgba(0,0,0,.87);direction:rtl;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:visible;position:relative;text-align:right;width:100%}.firebaseui-container.mdl-card{overflow:visible}.firebaseui-card-header{padding:24px 24px 0 24px}.firebaseui-card-content,.firebaseui-card-footer{padding:0 24px}.firebaseui-card-actions{-moz-box-sizing:border-box;box-sizing:border-box;display:table;font-size:14px;padding:8px 24px 24px 24px;text-align:right;width:100%}.firebaseui-form-links{display:table-cell;vertical-align:middle;width:100%}.firebaseui-form-actions{display:table-cell;text-align:left;white-space:nowrap;width:100%}.firebaseui-subtitle,.firebaseui-title{color:rgba(0,0,0,.87);direction:rtl;font-size:20px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:right}.firebaseui-title{padding-bottom:16px}.firebaseui-subtitle{margin:16px 0}.firebaseui-text{color:rgba(0,0,0,.87);direction:rtl;font-size:16px;line-height:24px;text-align:right}.firebaseui-id-page-password-recovery-email-sent p.firebaseui-text{margin:16px 0}.firebaseui-text-emphasis{font-weight:700}.firebaseui-error{color:#dd2c00;direction:rtl;font-size:12px;line-height:16px;margin:0;text-align:right}.firebaseui-text-input-error{margin:-16px 0 16px}.firebaseui-error-wrapper{min-height:16px}.firebaseui-list-item{direction:rtl;margin:0;padding:0;text-align:right}.firebaseui-hidden{display:none}.firebaseui-relative-wrapper{position:relative}.firebaseui-label{color:rgba(0,0,0,.54);direction:rtl;font-size:16px;text-align:right}.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#757575}.firebaseui-input,.firebaseui-input-invalid{border-radius:0;color:rgba(0,0,0,.87);direction:rtl;font-size:16px;width:100%}input.firebaseui-input,input.firebaseui-input-invalid{direction:rtl;text-align:right}.firebaseui-input-invalid{border-color:#dd2c00}.firebaseui-textfield{width:100%}.firebaseui-textfield.mdl-textfield .firebaseui-input{border-color:rgba(0,0,0,.12)}.firebaseui-textfield.mdl-textfield .firebaseui-label:after{background-color:#3f51b5}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-input{border-color:#dd2c00}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-label:after{background-color:#dd2c00}.firebaseui-button{display:inline-block;height:36px;margin-right:8px;min-width:88px}.firebaseui-link{color:#4285f4;font-variant:normal;font-weight:400;text-decoration:none}.firebaseui-link:hover{text-decoration:underline}.firebaseui-indent{margin-right:1em}.firebaseui-tos{color:#757575;direction:rtl;font-size:12px;line-height:16px;margin-bottom:24px;margin-top:0;text-align:right}.firebaseui-provider-sign-in-footer>.firebaseui-tos{text-align:center}.firebaseui-tos-list{list-style:none;text-align:left}.firebaseui-inline-list-item{display:inline-block;margin-right:5px;margin-left:5px}.firebaseui-page-provider-sign-in,.firebaseui-page-select-tenant{background:inherit}.firebaseui-idp-list,.firebaseui-tenant-list{list-style:none;margin:1em 0;padding:0}.firebaseui-idp-button,.firebaseui-tenant-button{direction:rtl;font-weight:500;height:auto;line-height:normal;max-width:220px;min-height:40px;padding:8px 16px;text-align:right;width:100%}.firebaseui-idp-list>.firebaseui-list-item,.firebaseui-tenant-list>.firebaseui-list-item{margin-bottom:15px;text-align:center}.firebaseui-idp-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-idp-icon{border:none;display:inline-block;height:18px;vertical-align:middle;width:18px}.firebaseui-idp-favicon{border:none;display:inline-block;height:14px;margin-left:5px;vertical-align:middle;width:14px}.firebaseui-idp-text{color:#fff;display:table-cell;font-size:14px;padding-right:16px;text-transform:none;vertical-align:middle}.firebaseui-idp-text.firebaseui-idp-text-long{display:table-cell}.firebaseui-idp-text.firebaseui-idp-text-short{display:none}@media (max-width:268px){.firebaseui-idp-text.firebaseui-idp-text-long{display:none}.firebaseui-idp-text.firebaseui-idp-text-short{display:table-cell}}@media (max-width:320px){.firebaseui-recaptcha-container>div>div{transform:scale(.9);-webkit-transform:scale(.9);transform-origin:100% 0;-webkit-transform-origin:100% 0}}.firebaseui-idp-google>.firebaseui-idp-text{color:#757575}[data-provider-id="yahoo.com"]>.firebaseui-idp-icon-wrapper>.firebaseui-idp-icon{height:22px;width:22px}.firebaseui-info-bar{background-color:#f9edbe;border:1px solid #f0c36d;box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);right:10%;padding:8px 16px;position:absolute;left:10%;text-align:center;top:0}.firebaseui-info-bar-message{font-size:12px;margin:0}.firebaseui-dialog{-moz-box-sizing:border-box;box-sizing:border-box;color:rgba(0,0,0,.87);font:16px Roboto,arial,sans-serif;height:auto;max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;padding:24px;text-align:right}.firebaseui-dialog-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-dialog-icon{float:right;height:40px;margin-left:24px;width:40px}.firebaseui-progress-dialog-message{display:table-cell;font-size:16px;font-weight:400;min-height:40px;vertical-align:middle}.firebaseui-progress-dialog-loading-icon{height:28px;margin:6px 6px 6px 30px;width:28px}.firebaseui-icon-done{background-image:url(https://www.gstatic.com/images/icons/material/system/2x/done_googgreen_36dp.png);background-position:50%;background-repeat:no-repeat;background-size:36px 36px}.firebaseui-phone-number{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.firebaseui-country-selector{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_grey600_18dp.png);background-position:0;background-repeat:no-repeat;background-size:18px auto;border-radius:0;border-bottom:1px solid rgba(0,0,0,.12);color:rgba(0,0,0,.87);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:16px;font-weight:400;height:auto;line-height:normal;margin:20px 0 20px 24px;padding:4px 0 4px 20px;width:90px}.firebaseui-country-selector-flag{display:inline-block;margin-left:1ex}.firebaseui-flag{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/flags_sprite_2x.png);background-size:100% auto;-webkit-filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.firebaseui-list-box-dialog{max-height:90%;overflow:auto;padding:8px 0 0 0}.firebaseui-list-box-actions{padding-bottom:8px}.firebaseui-list-box-icon-wrapper{display:table-cell;padding-left:24px;vertical-align:top}.firebaseui-list-box-label-wrapper{display:table-cell;vertical-align:top}.firebaseui-list-box-dialog-button{color:rgba(0,0,0,.87);direction:rtl;font-size:16px;font-weight:400;height:auto;line-height:normal;min-height:48px;padding:14px 24px;text-align:right;text-transform:none;width:100%}.firebaseui-phone-number-error{margin-right:114px}.mdl-progress.firebaseui-busy-indicator{height:2px;right:0;position:absolute;top:55px;width:100%}.mdl-spinner.firebaseui-busy-indicator{direction:ltr;height:56px;right:0;margin:auto;position:absolute;left:0;top:30%;width:56px}.firebaseui-callback-indicator-container .firebaseui-busy-indicator{top:0}.firebaseui-callback-indicator-container{height:120px}.firebaseui-new-password-component{display:inline-block;position:relative;width:100%}.firebaseui-input-floating-button{background-position:50%;background-repeat:no-repeat;display:block;height:24px;position:absolute;left:0;top:20px;width:24px}.firebaseui-input-toggle-on{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png)}.firebaseui-input-toggle-off{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png)}.firebaseui-input-toggle-focus{opacity:.87}.firebaseui-input-toggle-blur{opacity:.38}.firebaseui-recaptcha-wrapper{display:table;margin:0 auto;padding-bottom:8px}.firebaseui-recaptcha-container{display:table-cell}.firebaseui-recaptcha-error-wrapper{caption-side:bottom;display:table-caption}.firebaseui-change-phone-number-link{display:block}.firebaseui-resend-container{direction:rtl;margin:20px 0;text-align:center}.firebaseui-id-resend-countdown{color:rgba(0,0,0,.38)}.firebaseui-id-page-phone-sign-in-start .firebaseui-form-actions div{float:right}@media (max-width:480px){.firebaseui-container{box-shadow:none;max-width:none;width:100%}.firebaseui-card-header{border-bottom:1px solid #e0e0e0;margin-bottom:16px;padding:16px 24px 0 24px}.firebaseui-title{padding-bottom:16px}.firebaseui-card-actions{padding-left:24px}.firebaseui-busy-indicator{top:0}}.mdl-textfield__label{font-weight:400;margin-bottom:0}.firebaseui-id-page-blank,.firebaseui-id-page-spinner{background:inherit;height:64px}.firebaseui-email-sent{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/success_status.png);background-position:50%;background-repeat:no-repeat;background-size:64px 64px;height:64px;margin-top:16px;text-align:center}.firebaseui-text-justify{text-align:justify}.firebaseui-flag-KY{background-position:right 0 top 0}.firebaseui-flag-AC{background-position:right 0 top -14px}.firebaseui-flag-AE{background-position:right 0 top -28px}.firebaseui-flag-AF{background-position:right 0 top -42px}.firebaseui-flag-AG{background-position:right 0 top -56px}.firebaseui-flag-AI{background-position:right 0 top -70px}.firebaseui-flag-AL{background-position:right 0 top -84px}.firebaseui-flag-AM{background-position:right 0 top -98px}.firebaseui-flag-AO{background-position:right 0 top -112px}.firebaseui-flag-AQ{background-position:right 0 top -126px}.firebaseui-flag-AR{background-position:right 0 top -140px}.firebaseui-flag-AS{background-position:right 0 top -154px}.firebaseui-flag-AT{background-position:right 0 top -168px}.firebaseui-flag-AU{background-position:right 0 top -182px}.firebaseui-flag-AW{background-position:right 0 top -196px}.firebaseui-flag-AX{background-position:right 0 top -210px}.firebaseui-flag-AZ{background-position:right 0 top -224px}.firebaseui-flag-BA{background-position:right 0 top -238px}.firebaseui-flag-BB{background-position:right 0 top -252px}.firebaseui-flag-BD{background-position:right 0 top -266px}.firebaseui-flag-BE{background-position:right 0 top -280px}.firebaseui-flag-BF{background-position:right 0 top -294px}.firebaseui-flag-BG{background-position:right 0 top -308px}.firebaseui-flag-BH{background-position:right 0 top -322px}.firebaseui-flag-BI{background-position:right 0 top -336px}.firebaseui-flag-BJ{background-position:right 0 top -350px}.firebaseui-flag-BL{background-position:right 0 top -364px}.firebaseui-flag-BM{background-position:right 0 top -378px}.firebaseui-flag-BN{background-position:right 0 top -392px}.firebaseui-flag-BO{background-position:right 0 top -406px}.firebaseui-flag-BQ{background-position:right 0 top -420px}.firebaseui-flag-BR{background-position:right 0 top -434px}.firebaseui-flag-BS{background-position:right 0 top -448px}.firebaseui-flag-BT{background-position:right 0 top -462px}.firebaseui-flag-BV{background-position:right 0 top -476px}.firebaseui-flag-BW{background-position:right 0 top -490px}.firebaseui-flag-BY{background-position:right 0 top -504px}.firebaseui-flag-BZ{background-position:right 0 top -518px}.firebaseui-flag-CA{background-position:right 0 top -532px}.firebaseui-flag-CC{background-position:right 0 top -546px}.firebaseui-flag-CD{background-position:right 0 top -560px}.firebaseui-flag-CF{background-position:right 0 top -574px}.firebaseui-flag-CG{background-position:right 0 top -588px}.firebaseui-flag-CH{background-position:right 0 top -602px}.firebaseui-flag-CI{background-position:right 0 top -616px}.firebaseui-flag-CK{background-position:right 0 top -630px}.firebaseui-flag-CL{background-position:right 0 top -644px}.firebaseui-flag-CM{background-position:right 0 top -658px}.firebaseui-flag-CN{background-position:right 0 top -672px}.firebaseui-flag-CO{background-position:right 0 top -686px}.firebaseui-flag-CP{background-position:right 0 top -700px}.firebaseui-flag-CR{background-position:right 0 top -714px}.firebaseui-flag-CU{background-position:right 0 top -728px}.firebaseui-flag-CV{background-position:right 0 top -742px}.firebaseui-flag-CW{background-position:right 0 top -756px}.firebaseui-flag-CX{background-position:right 0 top -770px}.firebaseui-flag-CY{background-position:right 0 top -784px}.firebaseui-flag-CZ{background-position:right 0 top -798px}.firebaseui-flag-DE{background-position:right 0 top -812px}.firebaseui-flag-DG{background-position:right 0 top -826px}.firebaseui-flag-DJ{background-position:right 0 top -840px}.firebaseui-flag-DK{background-position:right 0 top -854px}.firebaseui-flag-DM{background-position:right 0 top -868px}.firebaseui-flag-DO{background-position:right 0 top -882px}.firebaseui-flag-DZ{background-position:right 0 top -896px}.firebaseui-flag-EA{background-position:right 0 top -910px}.firebaseui-flag-EC{background-position:right 0 top -924px}.firebaseui-flag-EE{background-position:right 0 top -938px}.firebaseui-flag-EG{background-position:right 0 top -952px}.firebaseui-flag-EH{background-position:right 0 top -966px}.firebaseui-flag-ER{background-position:right 0 top -980px}.firebaseui-flag-ES{background-position:right 0 top -994px}.firebaseui-flag-ET{background-position:right 0 top -1008px}.firebaseui-flag-EU{background-position:right 0 top -1022px}.firebaseui-flag-FI{background-position:right 0 top -1036px}.firebaseui-flag-FJ{background-position:right 0 top -1050px}.firebaseui-flag-FK{background-position:right 0 top -1064px}.firebaseui-flag-FM{background-position:right 0 top -1078px}.firebaseui-flag-FO{background-position:right 0 top -1092px}.firebaseui-flag-FR{background-position:right 0 top -1106px}.firebaseui-flag-GA{background-position:right 0 top -1120px}.firebaseui-flag-GB{background-position:right 0 top -1134px}.firebaseui-flag-GD{background-position:right 0 top -1148px}.firebaseui-flag-GE{background-position:right 0 top -1162px}.firebaseui-flag-GF{background-position:right 0 top -1176px}.firebaseui-flag-GG{background-position:right 0 top -1190px}.firebaseui-flag-GH{background-position:right 0 top -1204px}.firebaseui-flag-GI{background-position:right 0 top -1218px}.firebaseui-flag-GL{background-position:right 0 top -1232px}.firebaseui-flag-GM{background-position:right 0 top -1246px}.firebaseui-flag-GN{background-position:right 0 top -1260px}.firebaseui-flag-GP{background-position:right 0 top -1274px}.firebaseui-flag-GQ{background-position:right 0 top -1288px}.firebaseui-flag-GR{background-position:right 0 top -1302px}.firebaseui-flag-GS{background-position:right 0 top -1316px}.firebaseui-flag-GT{background-position:right 0 top -1330px}.firebaseui-flag-GU{background-position:right 0 top -1344px}.firebaseui-flag-GW{background-position:right 0 top -1358px}.firebaseui-flag-GY{background-position:right 0 top -1372px}.firebaseui-flag-HK{background-position:right 0 top -1386px}.firebaseui-flag-HM{background-position:right 0 top -1400px}.firebaseui-flag-HN{background-position:right 0 top -1414px}.firebaseui-flag-HR{background-position:right 0 top -1428px}.firebaseui-flag-HT{background-position:right 0 top -1442px}.firebaseui-flag-HU{background-position:right 0 top -1456px}.firebaseui-flag-IC{background-position:right 0 top -1470px}.firebaseui-flag-ID{background-position:right 0 top -1484px}.firebaseui-flag-IE{background-position:right 0 top -1498px}.firebaseui-flag-IL{background-position:right 0 top -1512px}.firebaseui-flag-IM{background-position:right 0 top -1526px}.firebaseui-flag-IN{background-position:right 0 top -1540px}.firebaseui-flag-IO{background-position:right 0 top -1554px}.firebaseui-flag-IQ{background-position:right 0 top -1568px}.firebaseui-flag-IR{background-position:right 0 top -1582px}.firebaseui-flag-IS{background-position:right 0 top -1596px}.firebaseui-flag-IT{background-position:right 0 top -1610px}.firebaseui-flag-JE{background-position:right 0 top -1624px}.firebaseui-flag-JM{background-position:right 0 top -1638px}.firebaseui-flag-JO{background-position:right 0 top -1652px}.firebaseui-flag-JP{background-position:right 0 top -1666px}.firebaseui-flag-KE{background-position:right 0 top -1680px}.firebaseui-flag-KG{background-position:right 0 top -1694px}.firebaseui-flag-KH{background-position:right 0 top -1708px}.firebaseui-flag-KI{background-position:right 0 top -1722px}.firebaseui-flag-KM{background-position:right 0 top -1736px}.firebaseui-flag-KN{background-position:right 0 top -1750px}.firebaseui-flag-KP{background-position:right 0 top -1764px}.firebaseui-flag-KR{background-position:right 0 top -1778px}.firebaseui-flag-KW{background-position:right 0 top -1792px}.firebaseui-flag-AD{background-position:right 0 top -1806px}.firebaseui-flag-KZ{background-position:right 0 top -1820px}.firebaseui-flag-LA{background-position:right 0 top -1834px}.firebaseui-flag-LB{background-position:right 0 top -1848px}.firebaseui-flag-LC{background-position:right 0 top -1862px}.firebaseui-flag-LI{background-position:right 0 top -1876px}.firebaseui-flag-LK{background-position:right 0 top -1890px}.firebaseui-flag-LR{background-position:right 0 top -1904px}.firebaseui-flag-LS{background-position:right 0 top -1918px}.firebaseui-flag-LT{background-position:right 0 top -1932px}.firebaseui-flag-LU{background-position:right 0 top -1946px}.firebaseui-flag-LV{background-position:right 0 top -1960px}.firebaseui-flag-LY{background-position:right 0 top -1974px}.firebaseui-flag-MA{background-position:right 0 top -1988px}.firebaseui-flag-MC{background-position:right 0 top -2002px}.firebaseui-flag-MD{background-position:right 0 top -2016px}.firebaseui-flag-ME{background-position:right 0 top -2030px}.firebaseui-flag-MF{background-position:right 0 top -2044px}.firebaseui-flag-MG{background-position:right 0 top -2058px}.firebaseui-flag-MH{background-position:right 0 top -2072px}.firebaseui-flag-MK{background-position:right 0 top -2086px}.firebaseui-flag-ML{background-position:right 0 top -2100px}.firebaseui-flag-MM{background-position:right 0 top -2114px}.firebaseui-flag-MN{background-position:right 0 top -2128px}.firebaseui-flag-MO{background-position:right 0 top -2142px}.firebaseui-flag-MP{background-position:right 0 top -2156px}.firebaseui-flag-MQ{background-position:right 0 top -2170px}.firebaseui-flag-MR{background-position:right 0 top -2184px}.firebaseui-flag-MS{background-position:right 0 top -2198px}.firebaseui-flag-MT{background-position:right 0 top -2212px}.firebaseui-flag-MU{background-position:right 0 top -2226px}.firebaseui-flag-MV{background-position:right 0 top -2240px}.firebaseui-flag-MW{background-position:right 0 top -2254px}.firebaseui-flag-MX{background-position:right 0 top -2268px}.firebaseui-flag-MY{background-position:right 0 top -2282px}.firebaseui-flag-MZ{background-position:right 0 top -2296px}.firebaseui-flag-NA{background-position:right 0 top -2310px}.firebaseui-flag-NC{background-position:right 0 top -2324px}.firebaseui-flag-NE{background-position:right 0 top -2338px}.firebaseui-flag-NF{background-position:right 0 top -2352px}.firebaseui-flag-NG{background-position:right 0 top -2366px}.firebaseui-flag-NI{background-position:right 0 top -2380px}.firebaseui-flag-NL{background-position:right 0 top -2394px}.firebaseui-flag-NO{background-position:right 0 top -2408px}.firebaseui-flag-NP{background-position:right 0 top -2422px}.firebaseui-flag-NR{background-position:right 0 top -2436px}.firebaseui-flag-NU{background-position:right 0 top -2450px}.firebaseui-flag-NZ{background-position:right 0 top -2464px}.firebaseui-flag-OM{background-position:right 0 top -2478px}.firebaseui-flag-PA{background-position:right 0 top -2492px}.firebaseui-flag-PE{background-position:right 0 top -2506px}.firebaseui-flag-PF{background-position:right 0 top -2520px}.firebaseui-flag-PG{background-position:right 0 top -2534px}.firebaseui-flag-PH{background-position:right 0 top -2548px}.firebaseui-flag-PK{background-position:right 0 top -2562px}.firebaseui-flag-PL{background-position:right 0 top -2576px}.firebaseui-flag-PM{background-position:right 0 top -2590px}.firebaseui-flag-PN{background-position:right 0 top -2604px}.firebaseui-flag-PR{background-position:right 0 top -2618px}.firebaseui-flag-PS{background-position:right 0 top -2632px}.firebaseui-flag-PT{background-position:right 0 top -2646px}.firebaseui-flag-PW{background-position:right 0 top -2660px}.firebaseui-flag-PY{background-position:right 0 top -2674px}.firebaseui-flag-QA{background-position:right 0 top -2688px}.firebaseui-flag-RE{background-position:right 0 top -2702px}.firebaseui-flag-RO{background-position:right 0 top -2716px}.firebaseui-flag-RS{background-position:right 0 top -2730px}.firebaseui-flag-RU{background-position:right 0 top -2744px}.firebaseui-flag-RW{background-position:right 0 top -2758px}.firebaseui-flag-SA{background-position:right 0 top -2772px}.firebaseui-flag-SB{background-position:right 0 top -2786px}.firebaseui-flag-SC{background-position:right 0 top -2800px}.firebaseui-flag-SD{background-position:right 0 top -2814px}.firebaseui-flag-SE{background-position:right 0 top -2828px}.firebaseui-flag-SG{background-position:right 0 top -2842px}.firebaseui-flag-SH{background-position:right 0 top -2856px}.firebaseui-flag-SI{background-position:right 0 top -2870px}.firebaseui-flag-SJ{background-position:right 0 top -2884px}.firebaseui-flag-SK{background-position:right 0 top -2898px}.firebaseui-flag-SL{background-position:right 0 top -2912px}.firebaseui-flag-SM{background-position:right 0 top -2926px}.firebaseui-flag-SN{background-position:right 0 top -2940px}.firebaseui-flag-SO{background-position:right 0 top -2954px}.firebaseui-flag-SR{background-position:right 0 top -2968px}.firebaseui-flag-SS{background-position:right 0 top -2982px}.firebaseui-flag-ST{background-position:right 0 top -2996px}.firebaseui-flag-SV{background-position:right 0 top -3010px}.firebaseui-flag-SX{background-position:right 0 top -3024px}.firebaseui-flag-SY{background-position:right 0 top -3038px}.firebaseui-flag-SZ{background-position:right 0 top -3052px}.firebaseui-flag-TA{background-position:right 0 top -3066px}.firebaseui-flag-TC{background-position:right 0 top -3080px}.firebaseui-flag-TD{background-position:right 0 top -3094px}.firebaseui-flag-TF{background-position:right 0 top -3108px}.firebaseui-flag-TG{background-position:right 0 top -3122px}.firebaseui-flag-TH{background-position:right 0 top -3136px}.firebaseui-flag-TJ{background-position:right 0 top -3150px}.firebaseui-flag-TK{background-position:right 0 top -3164px}.firebaseui-flag-TL{background-position:right 0 top -3178px}.firebaseui-flag-TM{background-position:right 0 top -3192px}.firebaseui-flag-TN{background-position:right 0 top -3206px}.firebaseui-flag-TO{background-position:right 0 top -3220px}.firebaseui-flag-TR{background-position:right 0 top -3234px}.firebaseui-flag-TT{background-position:right 0 top -3248px}.firebaseui-flag-TV{background-position:right 0 top -3262px}.firebaseui-flag-TW{background-position:right 0 top -3276px}.firebaseui-flag-TZ{background-position:right 0 top -3290px}.firebaseui-flag-UA{background-position:right 0 top -3304px}.firebaseui-flag-UG{background-position:right 0 top -3318px}.firebaseui-flag-UM{background-position:right 0 top -3332px}.firebaseui-flag-UN{background-position:right 0 top -3346px}.firebaseui-flag-US{background-position:right 0 top -3360px}.firebaseui-flag-UY{background-position:right 0 top -3374px}.firebaseui-flag-UZ{background-position:right 0 top -3388px}.firebaseui-flag-VA{background-position:right 0 top -3402px}.firebaseui-flag-VC{background-position:right 0 top -3416px}.firebaseui-flag-VE{background-position:right 0 top -3430px}.firebaseui-flag-VG{background-position:right 0 top -3444px}.firebaseui-flag-VI{background-position:right 0 top -3458px}.firebaseui-flag-VN{background-position:right 0 top -3472px}.firebaseui-flag-VU{background-position:right 0 top -3486px}.firebaseui-flag-WF{background-position:right 0 top -3500px}.firebaseui-flag-WS{background-position:right 0 top -3514px}.firebaseui-flag-XK{background-position:right 0 top -3528px}.firebaseui-flag-YE{background-position:right 0 top -3542px}.firebaseui-flag-YT{background-position:right 0 top -3556px}.firebaseui-flag-ZA{background-position:right 0 top -3570px}.firebaseui-flag-ZM{background-position:right 0 top -3584px}.firebaseui-flag-ZW{background-position:right 0 top -3598px}'
              )
            )
          )
        : wh(
            Hc(
              new pc(
                nc,
                '@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap);dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:none}dialog[open]{display:block}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}@media screen and (max-width:540px){dialog[_polyfill_modal]{top:0;width:auto;margin:1em}}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}.mdl-button{background:transparent;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;-webkit-transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored:active{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored:focus:not(:active){background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:hsla(0,0%,62%,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored:focus:not(:active){background-color:#ff4081}.mdl-button--fab.mdl-button--colored:active{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{color:#fff;background-color:#ff4081}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);box-shadow:none}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-card{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;width:330px;z-index:1;position:relative;background:#fff;border-radius:2px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__media{background-color:#ff4081;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-origin:padding-box;background-attachment:scroll;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__title{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#000;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-moz-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;line-height:normal;padding:16px 16px;-webkit-perspective-origin:165px 56px;perspective-origin:165px 56px;-webkit-transform-origin:165px 56px;transform-origin:165px 56px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;color:inherit;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:24px;font-weight:300;line-height:normal;overflow:hidden;-webkit-transform-origin:149px 48px;transform-origin:149px 48px;margin:0}.mdl-card__subtitle-text{font-size:14px;color:rgba(0,0,0,.54);margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px 16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{font-size:16px;line-height:normal;width:100%;background-color:transparent;padding:8px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-dialog{border:none;box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2);width:280px}.mdl-dialog__title{padding:24px 24px 0;margin:0;font-size:2.5rem}.mdl-dialog__actions{padding:8px 8px 8px 24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-moz-box-orient:horizontal;-moz-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.mdl-dialog__actions>*{margin-right:8px;height:36px}.mdl-dialog__actions>:first-child{margin-right:0}.mdl-dialog__actions--full-width{padding:0 0 8px 0}.mdl-dialog__actions--full-width>*{height:48px;-webkit-box-flex:0;-webkit-flex:0 0 100%;-moz-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;padding-right:16px;margin-right:0;text-align:right}.mdl-dialog__content{padding:20px 24px 24px 24px;color:rgba(0,0,0,.54)}.mdl-progress{display:block;position:relative;height:4px;width:500px;max-width:100%}.mdl-progress>.bar{display:block;position:absolute;top:0;bottom:0;width:0;-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}.mdl-progress>.progressbar{background-color:#3f51b5;z-index:1;left:0}.mdl-progress>.bufferbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);z-index:0;left:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);-webkit-mask:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=");mask:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.9)),to(hsla(0,0%,100%,.9))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{background-color:#3f51b5;-webkit-animation-name:indeterminate1;animation-name:indeterminate1;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-image:none;background-color:#3f51b5;-webkit-animation-name:indeterminate2;animation-name:indeterminate2;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@-webkit-keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}.mdl-shadow--2dp{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-shadow--3dp{box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)}.mdl-shadow--4dp{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.mdl-shadow--6dp{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.mdl-shadow--8dp{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.mdl-shadow--16dp{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.mdl-shadow--24dp{box-shadow:0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)}.mdl-spinner{display:inline-block;position:relative;width:28px;height:28px}.mdl-spinner:not(.is-upgraded).is-active:after{content:"Loading..."}.mdl-spinner.is-upgraded.is-active{-webkit-animation:mdl-spinner__container-rotate 1.5682352941s linear infinite;animation:mdl-spinner__container-rotate 1.5682352941s linear infinite}@-webkit-keyframes mdl-spinner__container-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mdl-spinner__container-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.mdl-spinner__layer{position:absolute;width:100%;height:100%;opacity:0}.mdl-spinner__layer-1{border-color:#42a5f5}.mdl-spinner--single-color .mdl-spinner__layer-1{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-1{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-2{border-color:#f44336}.mdl-spinner--single-color .mdl-spinner__layer-2{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-2{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-3{border-color:#fdd835}.mdl-spinner--single-color .mdl-spinner__layer-3{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-3{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__layer-4{border-color:#4caf50}.mdl-spinner--single-color .mdl-spinner__layer-4{border-color:#3f51b5}.mdl-spinner.is-active .mdl-spinner__layer-4{-webkit-animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(3turn);transform:rotate(3turn)}}@keyframes mdl-spinner__fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(3turn);transform:rotate(3turn)}}@-webkit-keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdl-spinner__layer-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@-webkit-keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@keyframes mdl-spinner__layer-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@keyframes mdl-spinner__layer-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}}@-webkit-keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdl-spinner__layer-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}.mdl-spinner__gap-patch{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__gap-patch .mdl-spinner__circle{width:1000%;left:-450%}.mdl-spinner__circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.mdl-spinner__circle-clipper.mdl-spinner__left{float:left}.mdl-spinner__circle-clipper.mdl-spinner__right{float:right}.mdl-spinner__circle-clipper .mdl-spinner__circle{width:200%}.mdl-spinner__circle{-moz-box-sizing:border-box;box-sizing:border-box;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0;left:0}.mdl-spinner__left .mdl-spinner__circle{border-right-color:transparent!important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle{-webkit-animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdl-spinner__right .mdl-spinner__circle{left:-100%;border-left-color:transparent!important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle{-webkit-animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:mdl-spinner__right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes mdl-spinner__left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@keyframes mdl-spinner__left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes mdl-spinner__right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}@keyframes mdl-spinner__right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}.mdl-textfield{position:relative;font-size:16px;display:inline-block;-moz-box-sizing:border-box;box-sizing:border-box;width:300px;max-width:100%;margin:0;padding:20px 0}.mdl-textfield .mdl-button{position:absolute;bottom:20px}.mdl-textfield--align-right{text-align:right}.mdl-textfield--full-width{width:100%}.mdl-textfield--expandable{min-width:32px;width:auto;min-height:32px}.mdl-textfield--expandable .mdl-button--icon{top:16px}.mdl-textfield__input{border:none;border-bottom:1px solid rgba(0,0,0,.12);display:block;font-size:16px;font-family:Helvetica,Arial,sans-serif;margin:0;padding:4px 0;width:100%;background:none;text-align:left;color:inherit}.mdl-textfield__input[type=number]{-moz-appearance:textfield}.mdl-textfield__input[type=number]::-webkit-inner-spin-button,.mdl-textfield__input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.mdl-textfield.is-focused .mdl-textfield__input{outline:none}.mdl-textfield.is-invalid .mdl-textfield__input{border-color:#d50000;box-shadow:none}.mdl-textfield.is-disabled .mdl-textfield__input,fieldset[disabled] .mdl-textfield .mdl-textfield__input{background-color:transparent;border-bottom:1px dotted rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-textfield textarea.mdl-textfield__input{display:block}.mdl-textfield__label{bottom:0;color:rgba(0,0,0,.26);font-size:16px;left:0;right:0;pointer-events:none;position:absolute;display:block;top:24px;width:100%;overflow:hidden;white-space:nowrap;text-align:left}.mdl-textfield.has-placeholder .mdl-textfield__label,.mdl-textfield.is-dirty .mdl-textfield__label{visibility:hidden}.mdl-textfield--floating-label .mdl-textfield__label{-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label{-webkit-transition:none;transition:none}.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label,fieldset[disabled] .mdl-textfield .mdl-textfield__label{color:rgba(0,0,0,.26)}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#3f51b5;font-size:12px;top:4px;visibility:visible}.mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label{top:-16px}.mdl-textfield--floating-label.is-invalid .mdl-textfield__label{color:#d50000;font-size:12px}.mdl-textfield__label:after{background-color:#3f51b5;bottom:20px;content:"";height:2px;left:45%;position:absolute;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;width:10px}.mdl-textfield.is-focused .mdl-textfield__label:after{left:0;visibility:visible;width:100%}.mdl-textfield.is-invalid .mdl-textfield__label:after{background-color:#d50000}.mdl-textfield__error{color:#d50000;position:absolute;font-size:12px;margin-top:3px;visibility:hidden;display:block}.mdl-textfield.is-invalid .mdl-textfield__error{visibility:visible}.mdl-textfield__expandable-holder{position:relative;margin-left:32px;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);display:inline-block;max-width:.1px}.mdl-textfield.is-dirty .mdl-textfield__expandable-holder,.mdl-textfield.is-focused .mdl-textfield__expandable-holder{max-width:600px}.mdl-textfield__expandable-holder .mdl-textfield__label:after{bottom:0}.firebaseui-container{background-color:#fff;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;color:rgba(0,0,0,.87);direction:ltr;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:visible;position:relative;text-align:left;width:100%}.firebaseui-container.mdl-card{overflow:visible}.firebaseui-card-header{padding:24px 24px 0 24px}.firebaseui-card-content,.firebaseui-card-footer{padding:0 24px}.firebaseui-card-actions{-moz-box-sizing:border-box;box-sizing:border-box;display:table;font-size:14px;padding:8px 24px 24px 24px;text-align:left;width:100%}.firebaseui-form-links{display:table-cell;vertical-align:middle;width:100%}.firebaseui-form-actions{display:table-cell;text-align:right;white-space:nowrap;width:100%}.firebaseui-subtitle,.firebaseui-title{color:rgba(0,0,0,.87);direction:ltr;font-size:20px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:left}.firebaseui-title{padding-bottom:16px}.firebaseui-subtitle{margin:16px 0}.firebaseui-text{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;line-height:24px;text-align:left}.firebaseui-id-page-password-recovery-email-sent p.firebaseui-text{margin:16px 0}.firebaseui-text-emphasis{font-weight:700}.firebaseui-error{color:#dd2c00;direction:ltr;font-size:12px;line-height:16px;margin:0;text-align:left}.firebaseui-text-input-error{margin:-16px 0 16px}.firebaseui-error-wrapper{min-height:16px}.firebaseui-list-item{direction:ltr;margin:0;padding:0;text-align:left}.firebaseui-hidden{display:none}.firebaseui-relative-wrapper{position:relative}.firebaseui-label{color:rgba(0,0,0,.54);direction:ltr;font-size:16px;text-align:left}.mdl-textfield--floating-label.is-dirty .mdl-textfield__label,.mdl-textfield--floating-label.is-focused .mdl-textfield__label{color:#757575}.firebaseui-input,.firebaseui-input-invalid{border-radius:0;color:rgba(0,0,0,.87);direction:ltr;font-size:16px;width:100%}input.firebaseui-input,input.firebaseui-input-invalid{direction:ltr;text-align:left}.firebaseui-input-invalid{border-color:#dd2c00}.firebaseui-textfield{width:100%}.firebaseui-textfield.mdl-textfield .firebaseui-input{border-color:rgba(0,0,0,.12)}.firebaseui-textfield.mdl-textfield .firebaseui-label:after{background-color:#3f51b5}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-input{border-color:#dd2c00}.firebaseui-textfield-invalid.mdl-textfield .firebaseui-label:after{background-color:#dd2c00}.firebaseui-button{display:inline-block;height:36px;margin-left:8px;min-width:88px}.firebaseui-link{color:#4285f4;font-variant:normal;font-weight:400;text-decoration:none}.firebaseui-link:hover{text-decoration:underline}.firebaseui-indent{margin-left:1em}.firebaseui-tos{color:#757575;direction:ltr;font-size:12px;line-height:16px;margin-bottom:24px;margin-top:0;text-align:left}.firebaseui-provider-sign-in-footer>.firebaseui-tos{text-align:center}.firebaseui-tos-list{list-style:none;text-align:right}.firebaseui-inline-list-item{display:inline-block;margin-left:5px;margin-right:5px}.firebaseui-page-provider-sign-in,.firebaseui-page-select-tenant{background:inherit}.firebaseui-idp-list,.firebaseui-tenant-list{list-style:none;margin:1em 0;padding:0}.firebaseui-idp-button,.firebaseui-tenant-button{direction:ltr;font-weight:500;height:auto;line-height:normal;max-width:220px;min-height:40px;padding:8px 16px;text-align:left;width:100%}.firebaseui-idp-list>.firebaseui-list-item,.firebaseui-tenant-list>.firebaseui-list-item{margin-bottom:15px;text-align:center}.firebaseui-idp-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-idp-icon{border:none;display:inline-block;height:18px;vertical-align:middle;width:18px}.firebaseui-idp-favicon{border:none;display:inline-block;height:14px;margin-right:5px;vertical-align:middle;width:14px}.firebaseui-idp-text{color:#fff;display:table-cell;font-size:14px;padding-left:16px;text-transform:none;vertical-align:middle}.firebaseui-idp-text.firebaseui-idp-text-long{display:table-cell}.firebaseui-idp-text.firebaseui-idp-text-short{display:none}@media (max-width:268px){.firebaseui-idp-text.firebaseui-idp-text-long{display:none}.firebaseui-idp-text.firebaseui-idp-text-short{display:table-cell}}@media (max-width:320px){.firebaseui-recaptcha-container>div>div{transform:scale(.9);-webkit-transform:scale(.9);transform-origin:0 0;-webkit-transform-origin:0 0}}.firebaseui-idp-google>.firebaseui-idp-text{color:#757575}[data-provider-id="yahoo.com"]>.firebaseui-idp-icon-wrapper>.firebaseui-idp-icon{height:22px;width:22px}.firebaseui-info-bar{background-color:#f9edbe;border:1px solid #f0c36d;box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);left:10%;padding:8px 16px;position:absolute;right:10%;text-align:center;top:0}.firebaseui-info-bar-message{font-size:12px;margin:0}.firebaseui-dialog{-moz-box-sizing:border-box;box-sizing:border-box;color:rgba(0,0,0,.87);font:16px Roboto,arial,sans-serif;height:auto;max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;padding:24px;text-align:left}.firebaseui-dialog-icon-wrapper{display:table-cell;vertical-align:middle}.firebaseui-dialog-icon{float:left;height:40px;margin-right:24px;width:40px}.firebaseui-progress-dialog-message{display:table-cell;font-size:16px;font-weight:400;min-height:40px;vertical-align:middle}.firebaseui-progress-dialog-loading-icon{height:28px;margin:6px 30px 6px 6px;width:28px}.firebaseui-icon-done{background-image:url(https://www.gstatic.com/images/icons/material/system/2x/done_googgreen_36dp.png);background-position:50%;background-repeat:no-repeat;background-size:36px 36px}.firebaseui-phone-number{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.firebaseui-country-selector{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_grey600_18dp.png);background-position:100%;background-repeat:no-repeat;background-size:18px auto;border-radius:0;border-bottom:1px solid rgba(0,0,0,.12);color:rgba(0,0,0,.87);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:16px;font-weight:400;height:auto;line-height:normal;margin:20px 24px 20px 0;padding:4px 20px 4px 0;width:90px}.firebaseui-country-selector-flag{display:inline-block;margin-right:1ex}.firebaseui-flag{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/flags_sprite_2x.png);background-size:100% auto;-webkit-filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));filter:drop-shadow(1px 1px 1px rgba(0,0,0,.54));height:14px;width:24px}.firebaseui-list-box-dialog{max-height:90%;overflow:auto;padding:8px 0 0 0}.firebaseui-list-box-actions{padding-bottom:8px}.firebaseui-list-box-icon-wrapper{display:table-cell;padding-right:24px;vertical-align:top}.firebaseui-list-box-label-wrapper{display:table-cell;vertical-align:top}.firebaseui-list-box-dialog-button{color:rgba(0,0,0,.87);direction:ltr;font-size:16px;font-weight:400;height:auto;line-height:normal;min-height:48px;padding:14px 24px;text-align:left;text-transform:none;width:100%}.firebaseui-phone-number-error{margin-left:114px}.mdl-progress.firebaseui-busy-indicator{height:2px;left:0;position:absolute;top:55px;width:100%}.mdl-spinner.firebaseui-busy-indicator{direction:ltr;height:56px;left:0;margin:auto;position:absolute;right:0;top:30%;width:56px}.firebaseui-callback-indicator-container .firebaseui-busy-indicator{top:0}.firebaseui-callback-indicator-container{height:120px}.firebaseui-new-password-component{display:inline-block;position:relative;width:100%}.firebaseui-input-floating-button{background-position:50%;background-repeat:no-repeat;display:block;height:24px;position:absolute;right:0;top:20px;width:24px}.firebaseui-input-toggle-on{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png)}.firebaseui-input-toggle-off{background-image:url(https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png)}.firebaseui-input-toggle-focus{opacity:.87}.firebaseui-input-toggle-blur{opacity:.38}.firebaseui-recaptcha-wrapper{display:table;margin:0 auto;padding-bottom:8px}.firebaseui-recaptcha-container{display:table-cell}.firebaseui-recaptcha-error-wrapper{caption-side:bottom;display:table-caption}.firebaseui-change-phone-number-link{display:block}.firebaseui-resend-container{direction:ltr;margin:20px 0;text-align:center}.firebaseui-id-resend-countdown{color:rgba(0,0,0,.38)}.firebaseui-id-page-phone-sign-in-start .firebaseui-form-actions div{float:left}@media (max-width:480px){.firebaseui-container{box-shadow:none;max-width:none;width:100%}.firebaseui-card-header{border-bottom:1px solid #e0e0e0;margin-bottom:16px;padding:16px 24px 0 24px}.firebaseui-title{padding-bottom:16px}.firebaseui-card-actions{padding-right:24px}.firebaseui-busy-indicator{top:0}}.mdl-textfield__label{font-weight:400;margin-bottom:0}.firebaseui-id-page-blank,.firebaseui-id-page-spinner{background:inherit;height:64px}.firebaseui-email-sent{background-image:url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/success_status.png);background-position:50%;background-repeat:no-repeat;background-size:64px 64px;height:64px;margin-top:16px;text-align:center}.firebaseui-text-justify{text-align:justify}.firebaseui-flag-KY{background-position:0 0}.firebaseui-flag-AC{background-position:0 -14px}.firebaseui-flag-AE{background-position:0 -28px}.firebaseui-flag-AF{background-position:0 -42px}.firebaseui-flag-AG{background-position:0 -56px}.firebaseui-flag-AI{background-position:0 -70px}.firebaseui-flag-AL{background-position:0 -84px}.firebaseui-flag-AM{background-position:0 -98px}.firebaseui-flag-AO{background-position:0 -112px}.firebaseui-flag-AQ{background-position:0 -126px}.firebaseui-flag-AR{background-position:0 -140px}.firebaseui-flag-AS{background-position:0 -154px}.firebaseui-flag-AT{background-position:0 -168px}.firebaseui-flag-AU{background-position:0 -182px}.firebaseui-flag-AW{background-position:0 -196px}.firebaseui-flag-AX{background-position:0 -210px}.firebaseui-flag-AZ{background-position:0 -224px}.firebaseui-flag-BA{background-position:0 -238px}.firebaseui-flag-BB{background-position:0 -252px}.firebaseui-flag-BD{background-position:0 -266px}.firebaseui-flag-BE{background-position:0 -280px}.firebaseui-flag-BF{background-position:0 -294px}.firebaseui-flag-BG{background-position:0 -308px}.firebaseui-flag-BH{background-position:0 -322px}.firebaseui-flag-BI{background-position:0 -336px}.firebaseui-flag-BJ{background-position:0 -350px}.firebaseui-flag-BL{background-position:0 -364px}.firebaseui-flag-BM{background-position:0 -378px}.firebaseui-flag-BN{background-position:0 -392px}.firebaseui-flag-BO{background-position:0 -406px}.firebaseui-flag-BQ{background-position:0 -420px}.firebaseui-flag-BR{background-position:0 -434px}.firebaseui-flag-BS{background-position:0 -448px}.firebaseui-flag-BT{background-position:0 -462px}.firebaseui-flag-BV{background-position:0 -476px}.firebaseui-flag-BW{background-position:0 -490px}.firebaseui-flag-BY{background-position:0 -504px}.firebaseui-flag-BZ{background-position:0 -518px}.firebaseui-flag-CA{background-position:0 -532px}.firebaseui-flag-CC{background-position:0 -546px}.firebaseui-flag-CD{background-position:0 -560px}.firebaseui-flag-CF{background-position:0 -574px}.firebaseui-flag-CG{background-position:0 -588px}.firebaseui-flag-CH{background-position:0 -602px}.firebaseui-flag-CI{background-position:0 -616px}.firebaseui-flag-CK{background-position:0 -630px}.firebaseui-flag-CL{background-position:0 -644px}.firebaseui-flag-CM{background-position:0 -658px}.firebaseui-flag-CN{background-position:0 -672px}.firebaseui-flag-CO{background-position:0 -686px}.firebaseui-flag-CP{background-position:0 -700px}.firebaseui-flag-CR{background-position:0 -714px}.firebaseui-flag-CU{background-position:0 -728px}.firebaseui-flag-CV{background-position:0 -742px}.firebaseui-flag-CW{background-position:0 -756px}.firebaseui-flag-CX{background-position:0 -770px}.firebaseui-flag-CY{background-position:0 -784px}.firebaseui-flag-CZ{background-position:0 -798px}.firebaseui-flag-DE{background-position:0 -812px}.firebaseui-flag-DG{background-position:0 -826px}.firebaseui-flag-DJ{background-position:0 -840px}.firebaseui-flag-DK{background-position:0 -854px}.firebaseui-flag-DM{background-position:0 -868px}.firebaseui-flag-DO{background-position:0 -882px}.firebaseui-flag-DZ{background-position:0 -896px}.firebaseui-flag-EA{background-position:0 -910px}.firebaseui-flag-EC{background-position:0 -924px}.firebaseui-flag-EE{background-position:0 -938px}.firebaseui-flag-EG{background-position:0 -952px}.firebaseui-flag-EH{background-position:0 -966px}.firebaseui-flag-ER{background-position:0 -980px}.firebaseui-flag-ES{background-position:0 -994px}.firebaseui-flag-ET{background-position:0 -1008px}.firebaseui-flag-EU{background-position:0 -1022px}.firebaseui-flag-FI{background-position:0 -1036px}.firebaseui-flag-FJ{background-position:0 -1050px}.firebaseui-flag-FK{background-position:0 -1064px}.firebaseui-flag-FM{background-position:0 -1078px}.firebaseui-flag-FO{background-position:0 -1092px}.firebaseui-flag-FR{background-position:0 -1106px}.firebaseui-flag-GA{background-position:0 -1120px}.firebaseui-flag-GB{background-position:0 -1134px}.firebaseui-flag-GD{background-position:0 -1148px}.firebaseui-flag-GE{background-position:0 -1162px}.firebaseui-flag-GF{background-position:0 -1176px}.firebaseui-flag-GG{background-position:0 -1190px}.firebaseui-flag-GH{background-position:0 -1204px}.firebaseui-flag-GI{background-position:0 -1218px}.firebaseui-flag-GL{background-position:0 -1232px}.firebaseui-flag-GM{background-position:0 -1246px}.firebaseui-flag-GN{background-position:0 -1260px}.firebaseui-flag-GP{background-position:0 -1274px}.firebaseui-flag-GQ{background-position:0 -1288px}.firebaseui-flag-GR{background-position:0 -1302px}.firebaseui-flag-GS{background-position:0 -1316px}.firebaseui-flag-GT{background-position:0 -1330px}.firebaseui-flag-GU{background-position:0 -1344px}.firebaseui-flag-GW{background-position:0 -1358px}.firebaseui-flag-GY{background-position:0 -1372px}.firebaseui-flag-HK{background-position:0 -1386px}.firebaseui-flag-HM{background-position:0 -1400px}.firebaseui-flag-HN{background-position:0 -1414px}.firebaseui-flag-HR{background-position:0 -1428px}.firebaseui-flag-HT{background-position:0 -1442px}.firebaseui-flag-HU{background-position:0 -1456px}.firebaseui-flag-IC{background-position:0 -1470px}.firebaseui-flag-ID{background-position:0 -1484px}.firebaseui-flag-IE{background-position:0 -1498px}.firebaseui-flag-IL{background-position:0 -1512px}.firebaseui-flag-IM{background-position:0 -1526px}.firebaseui-flag-IN{background-position:0 -1540px}.firebaseui-flag-IO{background-position:0 -1554px}.firebaseui-flag-IQ{background-position:0 -1568px}.firebaseui-flag-IR{background-position:0 -1582px}.firebaseui-flag-IS{background-position:0 -1596px}.firebaseui-flag-IT{background-position:0 -1610px}.firebaseui-flag-JE{background-position:0 -1624px}.firebaseui-flag-JM{background-position:0 -1638px}.firebaseui-flag-JO{background-position:0 -1652px}.firebaseui-flag-JP{background-position:0 -1666px}.firebaseui-flag-KE{background-position:0 -1680px}.firebaseui-flag-KG{background-position:0 -1694px}.firebaseui-flag-KH{background-position:0 -1708px}.firebaseui-flag-KI{background-position:0 -1722px}.firebaseui-flag-KM{background-position:0 -1736px}.firebaseui-flag-KN{background-position:0 -1750px}.firebaseui-flag-KP{background-position:0 -1764px}.firebaseui-flag-KR{background-position:0 -1778px}.firebaseui-flag-KW{background-position:0 -1792px}.firebaseui-flag-AD{background-position:0 -1806px}.firebaseui-flag-KZ{background-position:0 -1820px}.firebaseui-flag-LA{background-position:0 -1834px}.firebaseui-flag-LB{background-position:0 -1848px}.firebaseui-flag-LC{background-position:0 -1862px}.firebaseui-flag-LI{background-position:0 -1876px}.firebaseui-flag-LK{background-position:0 -1890px}.firebaseui-flag-LR{background-position:0 -1904px}.firebaseui-flag-LS{background-position:0 -1918px}.firebaseui-flag-LT{background-position:0 -1932px}.firebaseui-flag-LU{background-position:0 -1946px}.firebaseui-flag-LV{background-position:0 -1960px}.firebaseui-flag-LY{background-position:0 -1974px}.firebaseui-flag-MA{background-position:0 -1988px}.firebaseui-flag-MC{background-position:0 -2002px}.firebaseui-flag-MD{background-position:0 -2016px}.firebaseui-flag-ME{background-position:0 -2030px}.firebaseui-flag-MF{background-position:0 -2044px}.firebaseui-flag-MG{background-position:0 -2058px}.firebaseui-flag-MH{background-position:0 -2072px}.firebaseui-flag-MK{background-position:0 -2086px}.firebaseui-flag-ML{background-position:0 -2100px}.firebaseui-flag-MM{background-position:0 -2114px}.firebaseui-flag-MN{background-position:0 -2128px}.firebaseui-flag-MO{background-position:0 -2142px}.firebaseui-flag-MP{background-position:0 -2156px}.firebaseui-flag-MQ{background-position:0 -2170px}.firebaseui-flag-MR{background-position:0 -2184px}.firebaseui-flag-MS{background-position:0 -2198px}.firebaseui-flag-MT{background-position:0 -2212px}.firebaseui-flag-MU{background-position:0 -2226px}.firebaseui-flag-MV{background-position:0 -2240px}.firebaseui-flag-MW{background-position:0 -2254px}.firebaseui-flag-MX{background-position:0 -2268px}.firebaseui-flag-MY{background-position:0 -2282px}.firebaseui-flag-MZ{background-position:0 -2296px}.firebaseui-flag-NA{background-position:0 -2310px}.firebaseui-flag-NC{background-position:0 -2324px}.firebaseui-flag-NE{background-position:0 -2338px}.firebaseui-flag-NF{background-position:0 -2352px}.firebaseui-flag-NG{background-position:0 -2366px}.firebaseui-flag-NI{background-position:0 -2380px}.firebaseui-flag-NL{background-position:0 -2394px}.firebaseui-flag-NO{background-position:0 -2408px}.firebaseui-flag-NP{background-position:0 -2422px}.firebaseui-flag-NR{background-position:0 -2436px}.firebaseui-flag-NU{background-position:0 -2450px}.firebaseui-flag-NZ{background-position:0 -2464px}.firebaseui-flag-OM{background-position:0 -2478px}.firebaseui-flag-PA{background-position:0 -2492px}.firebaseui-flag-PE{background-position:0 -2506px}.firebaseui-flag-PF{background-position:0 -2520px}.firebaseui-flag-PG{background-position:0 -2534px}.firebaseui-flag-PH{background-position:0 -2548px}.firebaseui-flag-PK{background-position:0 -2562px}.firebaseui-flag-PL{background-position:0 -2576px}.firebaseui-flag-PM{background-position:0 -2590px}.firebaseui-flag-PN{background-position:0 -2604px}.firebaseui-flag-PR{background-position:0 -2618px}.firebaseui-flag-PS{background-position:0 -2632px}.firebaseui-flag-PT{background-position:0 -2646px}.firebaseui-flag-PW{background-position:0 -2660px}.firebaseui-flag-PY{background-position:0 -2674px}.firebaseui-flag-QA{background-position:0 -2688px}.firebaseui-flag-RE{background-position:0 -2702px}.firebaseui-flag-RO{background-position:0 -2716px}.firebaseui-flag-RS{background-position:0 -2730px}.firebaseui-flag-RU{background-position:0 -2744px}.firebaseui-flag-RW{background-position:0 -2758px}.firebaseui-flag-SA{background-position:0 -2772px}.firebaseui-flag-SB{background-position:0 -2786px}.firebaseui-flag-SC{background-position:0 -2800px}.firebaseui-flag-SD{background-position:0 -2814px}.firebaseui-flag-SE{background-position:0 -2828px}.firebaseui-flag-SG{background-position:0 -2842px}.firebaseui-flag-SH{background-position:0 -2856px}.firebaseui-flag-SI{background-position:0 -2870px}.firebaseui-flag-SJ{background-position:0 -2884px}.firebaseui-flag-SK{background-position:0 -2898px}.firebaseui-flag-SL{background-position:0 -2912px}.firebaseui-flag-SM{background-position:0 -2926px}.firebaseui-flag-SN{background-position:0 -2940px}.firebaseui-flag-SO{background-position:0 -2954px}.firebaseui-flag-SR{background-position:0 -2968px}.firebaseui-flag-SS{background-position:0 -2982px}.firebaseui-flag-ST{background-position:0 -2996px}.firebaseui-flag-SV{background-position:0 -3010px}.firebaseui-flag-SX{background-position:0 -3024px}.firebaseui-flag-SY{background-position:0 -3038px}.firebaseui-flag-SZ{background-position:0 -3052px}.firebaseui-flag-TA{background-position:0 -3066px}.firebaseui-flag-TC{background-position:0 -3080px}.firebaseui-flag-TD{background-position:0 -3094px}.firebaseui-flag-TF{background-position:0 -3108px}.firebaseui-flag-TG{background-position:0 -3122px}.firebaseui-flag-TH{background-position:0 -3136px}.firebaseui-flag-TJ{background-position:0 -3150px}.firebaseui-flag-TK{background-position:0 -3164px}.firebaseui-flag-TL{background-position:0 -3178px}.firebaseui-flag-TM{background-position:0 -3192px}.firebaseui-flag-TN{background-position:0 -3206px}.firebaseui-flag-TO{background-position:0 -3220px}.firebaseui-flag-TR{background-position:0 -3234px}.firebaseui-flag-TT{background-position:0 -3248px}.firebaseui-flag-TV{background-position:0 -3262px}.firebaseui-flag-TW{background-position:0 -3276px}.firebaseui-flag-TZ{background-position:0 -3290px}.firebaseui-flag-UA{background-position:0 -3304px}.firebaseui-flag-UG{background-position:0 -3318px}.firebaseui-flag-UM{background-position:0 -3332px}.firebaseui-flag-UN{background-position:0 -3346px}.firebaseui-flag-US{background-position:0 -3360px}.firebaseui-flag-UY{background-position:0 -3374px}.firebaseui-flag-UZ{background-position:0 -3388px}.firebaseui-flag-VA{background-position:0 -3402px}.firebaseui-flag-VC{background-position:0 -3416px}.firebaseui-flag-VE{background-position:0 -3430px}.firebaseui-flag-VG{background-position:0 -3444px}.firebaseui-flag-VI{background-position:0 -3458px}.firebaseui-flag-VN{background-position:0 -3472px}.firebaseui-flag-VU{background-position:0 -3486px}.firebaseui-flag-WF{background-position:0 -3500px}.firebaseui-flag-WS{background-position:0 -3514px}.firebaseui-flag-XK{background-position:0 -3528px}.firebaseui-flag-YE{background-position:0 -3542px}.firebaseui-flag-YT{background-position:0 -3556px}.firebaseui-flag-ZA{background-position:0 -3570px}.firebaseui-flag-ZM{background-position:0 -3584px}.firebaseui-flag-ZW{background-position:0 -3598px}'
              )
            )
          )
    },
    Bs = {
      Cm: {
        mode: 'resetPassword',
        handler: function (a, b, c, d, e) {
          return Es(a, b, ns, c, d, e)
        },
      },
      Dm: {
        mode: 'recoverEmail',
        handler: function (a, b, c, d) {
          return Es(a, b, ls, c, d)
        },
      },
      VERIFY_EMAIL: {
        mode: 'verifyEmail',
        handler: function (a, b, c, d, e) {
          return Es(a, b, rs, c, d, e)
        },
      },
      Em: {
        mode: 'signIn',
        handler: function (a, b, c, d, e) {
          if (e) {
            var f = a.ac()
            ;(f =
              f &&
              (void 0 !== f.firstElementChild
                ? f.firstElementChild
                : bf(f.firstChild, !0))) &&
              document &&
              document.body &&
              ((document.body.style.margin = '0px'),
              (f.style['max-width'] = '100%'),
              (f.style['box-shadow'] = 'none'))
            f = E(e)
            if (
              (!f.ga.match(/\.app\.goo\.gl$/) &&
                !f.ga.match(/\.page\.link$/)) ||
              !D(f, 'link') ||
              ('http' != f.ma && 'https' != f.ma)
            )
              try {
                var g = {
                  apiKey: b.app.options.apiKey,
                  oobCode: c,
                  mode: 'signIn',
                }
                d && (g.lang = d)
                b.tenantId && (g.tenantId = b.tenantId)
                var h = gd(e, g)
                gs(h)
              } catch (l) {
                ks(
                  a,
                  'No API key provided or the contine URL is not a valid URL.'
                )
              }
            else
              ks(
                a,
                '"canHandleCodeInApp" must be "true" for email link sign-in. The user is expected to complete sign-in in the intended application.'
              )
          } else ks(a, 'Continue URL is required for email sign-in!')
          return L()
        },
      },
      REVERT_SECOND_FACTOR_ADDITION: {
        mode: 'revertSecondFactorAddition',
        handler: function (a, b, c, d) {
          return Es(a, b, ss, c, d)
        },
      },
      VERIFY_AND_CHANGE_EMAIL: {
        mode: 'verifyAndChangeEmail',
        handler: function (a, b, c, d, e) {
          return Es(a, b, qs, c, d, e)
        },
      },
    },
    Fs = null
  xa('fireauth.oob.OobHandler.initialize', function (a, b) {
    'complete' == q.document.readyState
      ? Gs(a, b)
      : cg(window, 'load', function () {
          Gs(a, b)
        })
  }) /*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  var Hs = {
    Fj: function () {},
    Gj: function () {},
    Hj: function () {},
    zh: function () {},
    lj: function () {},
    register: function () {},
    ai: function () {},
  }
  Hs = (function () {
    function a(n, r) {
      for (var u = 0; u < l.length; u++)
        if (l[u].className === n)
          return 'undefined' !== typeof r && (l[u] = r), l[u]
      return !1
    }
    function b(n) {
      n = n.getAttribute('data-upgraded')
      return null === n ? [''] : n.split(',')
    }
    function c(n, r) {
      return -1 !== b(n).indexOf(r)
    }
    function d(n, r, u) {
      if ('CustomEvent' in window && 'function' === typeof window.CustomEvent)
        return new CustomEvent(n, { bubbles: r, cancelable: u })
      var C = document.createEvent('Events')
      C.initEvent(n, r, u)
      return C
    }
    function e(n, r) {
      if ('undefined' === typeof n && 'undefined' === typeof r)
        for (n = 0; n < l.length; n++) e(l[n].className, l[n].Bb)
      else {
        if ('undefined' === typeof r) {
          var u = a(n)
          u && (r = u.Bb)
        }
        r = document.querySelectorAll('.' + r)
        for (u = 0; u < r.length; u++) f(r[u], n)
      }
    }
    function f(n, r) {
      if (!('object' === typeof n && n instanceof Element))
        throw Error('Invalid argument provided to upgrade MDL element.')
      var u = d('mdl-componentupgrading', !0, !0)
      n.dispatchEvent(u)
      if (!u.defaultPrevented) {
        u = b(n)
        var C = []
        if (r) c(n, r) || C.push(a(r))
        else {
          var oa = n.classList
          l.forEach(function (vf) {
            oa.contains(vf.Bb) &&
              -1 === C.indexOf(vf) &&
              !c(n, vf.className) &&
              C.push(vf)
          })
        }
        r = 0
        for (var Kb = C.length, Da; r < Kb; r++) {
          if ((Da = C[r])) {
            u.push(Da.className)
            n.setAttribute('data-upgraded', u.join(','))
            var Ni = new Da.Zj(n)
            Ni.mdlComponentConfigInternal_ = Da
            m.push(Ni)
            for (var Oi = 0, ct = Da.fg.length; Oi < ct; Oi++) Da.fg[Oi](n)
            Da.Pf && (n[Da.className] = Ni)
          } else
            throw Error(
              'Unable to find a registered component for the given class.'
            )
          Da = d('mdl-componentupgraded', !0, !1)
          n.dispatchEvent(Da)
        }
      }
    }
    function g(n) {
      Array.isArray(n) ||
        (n = n instanceof Element ? [n] : Array.prototype.slice.call(n))
      for (var r = 0, u = n.length, C; r < u; r++)
        (C = n[r]),
          C instanceof HTMLElement &&
            (f(C), 0 < C.children.length && g(C.children))
    }
    function h(n) {
      if (n) {
        m.splice(m.indexOf(n), 1)
        var r = n.i.getAttribute('data-upgraded').split(',')
        r.splice(r.indexOf(n.mdlComponentConfigInternal_.ig), 1)
        n.i.setAttribute('data-upgraded', r.join(','))
        r = d('mdl-componentdowngraded', !0, !1)
        n.i.dispatchEvent(r)
      }
    }
    var l = [],
      m = []
    return {
      Fj: e,
      Gj: f,
      Hj: g,
      zh: function () {
        for (var n = 0; n < l.length; n++) e(l[n].className)
      },
      lj: function (n, r) {
        ;(n = a(n)) && n.fg.push(r)
      },
      register: function (n) {
        var r = !0
        if ('undefined' !== typeof n.Pf || 'undefined' !== typeof n.widget)
          r = n.Pf || n.widget
        var u = {
          Zj: n.constructor || n.constructor,
          className: n.ig || n.classAsString,
          Bb: n.Bb || n.cssClass,
          Pf: r,
          fg: [],
        }
        l.forEach(function (C) {
          if (C.Bb === u.Bb)
            throw Error(
              'The provided cssClass has already been registered: ' + C.Bb
            )
          if (C.className === u.className)
            throw Error('The provided className has already been registered')
        })
        if (
          n.constructor.prototype.hasOwnProperty('mdlComponentConfigInternal_')
        )
          throw Error(
            'MDL component classes must not have mdlComponentConfigInternal_ defined as a property.'
          )
        a(n.ig, u) || l.push(u)
      },
      ai: function (n) {
        var r = function (C) {
          m.filter(function (oa) {
            return oa.i === C
          }).forEach(h)
        }
        if (n instanceof Array || n instanceof NodeList)
          for (var u = 0; u < n.length; u++) r(n[u])
        else if (n instanceof Node) r(n)
        else throw Error('Invalid argument provided to downgrade MDL nodes.')
      },
    }
  })()
  Hs.upgradeDom = Hs.Fj
  Hs.upgradeElement = Hs.Gj
  Hs.upgradeElements = Hs.Hj
  Hs.upgradeAllRegistered = Hs.zh
  Hs.registerUpgradedCallback = Hs.lj
  Hs.register = Hs.register
  Hs.downgradeElements = Hs.ai
  window.componentHandler = Hs
  window.addEventListener('load', function () {
    'classList' in document.createElement('div') &&
      'querySelector' in document &&
      'addEventListener' in window &&
      Array.prototype.forEach &&
      (document.documentElement.classList.add('mdl-js'), Hs.zh())
  })
  ;(function () {
    var a = function (b) {
      this.i = b
      this.init()
    }
    window.MaterialProgress = a
    a.prototype.Qj = { Rj: 'mdl-progress__indeterminate' }
    a.prototype.Ql = function (b) {
      this.i.classList.contains(this.Qj.Rj) || (this.ij.style.width = b + '%')
    }
    a.prototype.setProgress = a.prototype.Ql
    a.prototype.Pl = function (b) {
      this.Ih.style.width = b + '%'
      this.Fh.style.width = 100 - b + '%'
    }
    a.prototype.setBuffer = a.prototype.Pl
    a.prototype.init = function () {
      if (this.i) {
        var b = document.createElement('div')
        b.className = 'progressbar bar bar1'
        this.i.appendChild(b)
        this.ij = b
        b = document.createElement('div')
        b.className = 'bufferbar bar bar2'
        this.i.appendChild(b)
        this.Ih = b
        b = document.createElement('div')
        b.className = 'auxbar bar bar3'
        this.i.appendChild(b)
        this.Fh = b
        this.ij.style.width = '0%'
        this.Ih.style.width = '100%'
        this.Fh.style.width = '0%'
        this.i.classList.add('is-upgraded')
      }
    }
    Hs.register({
      constructor: a,
      ig: 'MaterialProgress',
      Bb: 'mdl-js-progress',
      Pf: !0,
    })
  })()
  var Is = {
      '244437093285883777': {
        ar: '\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u0623\u0643\u0651\u062f \u0645\u0646 \u0623\u0646\u0643 \u0644\u0633\u062a \u0628\u0631\u0646\u0627\u0645\u062c \u0631\u0648\u0628\u0648\u062a...',
        ar_xb:
          "\u200f\u202eVerifying\u202c\u200f \u200f\u202eyou\u202c\u200f'\u200f\u202ere\u202c\u200f \u200f\u202enot\u202c\u200f \u200f\u202ea\u202c\u200f \u200f\u202erobot\u202c\u200f...",
        bg: '\u041f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430 \u0441\u0435, \u0447\u0435 \u043d\u0435 \u0441\u0442\u0435 \u0440\u043e\u0431\u043e\u0442\u2026',
        ca: "S'est\u00e0 comprovant que no siguis un robot...",
        cs: 'Ov\u011b\u0159ujeme, zda nejste robot\u2026',
        da: 'Bekr\u00e6fter, at du ikke er en robot\u2026',
        de: 'Best\u00e4tigen Sie bitte, dass Sie kein Roboter sind.',
        el: '\u0395\u03c0\u03b1\u03bb\u03ae\u03b8\u03b5\u03c5\u03c3\u03b7 \u03cc\u03c4\u03b9 \u03b4\u03b5\u03bd \u03b5\u03af\u03c3\u03c4\u03b5 \u03c1\u03bf\u03bc\u03c0\u03cc\u03c4\u2026',
        en: "Verifying you're not a robot...",
        en_gb: "Verifying you're not a robot...",
        en_xa:
          "[V\u00e9\u0155\u00ee\u0192\u00fd\u00ee\u00f1\u011d \u00fd\u00f6\u00fb'\u0155\u00e9 \u00f1\u00f6\u0163 \u00e5 \u0155\u00f6\u0431\u00f6\u0163... one two three four five six seven]",
        es: 'Estamos comprobando que no eres un robot...',
        es_419: 'Estamos verificando que no eres un robot\u2026',
        fa: '\u062f\u0631\u062d\u0627\u0644 \u062a\u0623\u06cc\u06cc\u062f \u0627\u06cc\u0646\u06a9\u0647 \u0634\u0645\u0627 \u0631\u0628\u0627\u062a \u0646\u06cc\u0633\u062a\u06cc\u062f\u2026',
        fi: 'Tarkistamme, ettet ole robotti\u2026',
        fil: 'Vine-verify na hindi ka robot...',
        fr: "Nous v\u00e9rifions que vous n'\u00eates pas un robot\u2026",
        hi: '\u0906\u092a \u0930\u094b\u092c\u094b\u091f \u0928\u0939\u0940\u0902 \u0939\u0948\u0902 \u0907\u0938\u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0940 \u091c\u093e \u0930\u0939\u0940 \u0939\u0948...',
        hr: 'Potvr\u0111ujemo da niste robot...',
        hu: 'Annak ellen\u0151rz\u00e9se, hogy \u00d6n nem robot...',
        id: 'Memverifikasi bahwa Anda bukan robot...',
        it: 'Stiamo verificando che non sei un robot\u2026',
        iw: '\u05de\u05d5\u05d5\u05d3\u05d0 \u05e9\u05d0\u05d9\u05e0\u05da \u05e8\u05d5\u05d1\u05d5\u05d8...',
        ja: '\u30ed\u30dc\u30c3\u30c8\u306b\u3088\u308b\u64cd\u4f5c\u3067\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u3044\u307e\u3059...',
        ko: '\ub85c\ubd07\uc774 \uc544\ub2cc \uc2e4\uc81c \uc0ac\uc6a9\uc790\uc784\uc744 \ud655\uc778 \uc911...',
        lt: 'Tikrinama, ar nesate robotas...',
        lv: 'Notiek verifik\u0101cija, lai p\u0101rliecin\u0101tos, ka neesat robots...',
        nl: 'Verifi\u00ebren of u geen robot bent...',
        no: 'Bekrefter at du ikke er en robot ...',
        pl: 'Potwierd\u017a, \u017ce nie jeste\u015b robotem.',
        pt: 'Verificando se voc\u00ea n\u00e3o \u00e9 um rob\u00f4...',
        pt_pt: 'A verificar se \u00e9 um rob\u00f4...',
        ro: 'Se verific\u0103 dac\u0103 sunte\u021bi un robot...',
        ru: '\u041d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u0440\u043e\u0431\u043e\u0442...',
        sk: 'Overuje sa, \u017ee nie ste robot...',
        sl: 'Preverjamo, da niste robot ...',
        sr: '\u041f\u043e\u0442\u0432\u0440\u0452\u0443\u0458\u0435\u043c\u043e \u0434\u0430 \u043d\u0438\u0441\u0442\u0435 \u0440\u043e\u0431\u043e\u0442\u2026',
        sv: 'Verifierar att du inte \u00e4r en robot \u2026',
        th: '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e2b\u0e38\u0e48\u0e19\u0e22\u0e19\u0e15\u0e4c...',
        tr: 'Robot olmad\u0131\u011f\u0131n\u0131z do\u011frulan\u0131yor...',
        uk: '\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454\u043c\u043e, \u0447\u0438 \u0432\u0438 \u043d\u0435 \u0440\u043e\u0431\u043e\u0442\u2026',
        vi: '\u0110ang x\u00e1c minh b\u1ea1n kh\u00f4ng ph\u1ea3i l\u00e0 r\u00f4 b\u1ed1t...',
        zh_cn:
          '\u6b63\u5728\u9a8c\u8bc1\u60a8\u662f\u5426\u4e3a\u673a\u5668\u4eba\u2026',
        zh_tw:
          '\u6b63\u5728\u9a57\u8b49\u60a8\u662f\u5426\u70ba\u81ea\u52d5\u7a0b\u5f0f...',
      },
    },
    Js = null,
    Ks = 'ar ar_xb iw fa ps sd so tk ug ur he yi syc ks ku'.split(' '),
    Ls = function (a, b) {
      if (!Js) {
        Js = {}
        for (var c in Is) Js[Is[c].en] = c
      }
      b = b.replace('-', '_').toLowerCase()
      return 'undefined' !== typeof Js[a] &&
        ((c = Js[a]), 'undefined' !== typeof Is[c][b])
        ? Is[c][b]
        : a
    }
  var Ms = function (a, b) {
    this.Gf = a
    this.Ff = b
    this.i = null
  }
  Ms.prototype.render = function (a) {
    this.i = lf(this.Gf, this.Ff)
    Ze(a, this.i)
    this.pe()
  }
  Ms.prototype.pe = function () {}
  Ms.prototype.te = function () {}
  Ms.prototype.oa = function () {
    this.i && (this.te(), af(this.i), (this.i = null))
  }
  var Ns = function () {
    Ms.call(this, of)
  }
  p(Ns, Ms)
  Ns.prototype.pe = function () {
    var a = Pe('progressBar')
    window.componentHandler &&
      window.componentHandler.upgradeElement &&
      window.componentHandler.upgradeElement(a)
  }
  Ns.prototype.te = function () {
    var a = Pe('progressBar')
    window.componentHandler &&
      window.componentHandler.downgradeElements &&
      window.componentHandler.downgradeElements(a)
  }
  var Os = function (a, b) {
    Ms.call(this, pf, { appName: a })
    this.jf = b
    this.ob = null
  }
  p(Os, Ms)
  Os.prototype.pe = function () {
    var a = Pe('continue'),
      b = this
    this.ob = I(a, 'click', function () {
      b.jf()
    })
  }
  Os.prototype.te = function () {
    this.ob && (kg(this.ob), (this.ob = null))
  }
  var Ps = function (a) {
    Ms.call(this, qf, { errorMessage: a })
  }
  p(Ps, Ms)
  var Qs = function (a, b) {
    Ms.call(this, rf, {})
    this.jf = a || null
    this.Nc = b || null
    this.ob = null
  }
  p(Qs, Ms)
  Qs.prototype.pe = function () {
    var a = Pe('verify'),
      b = this
    this.jf &&
      (this.ob = I(a, 'click', function () {
        b.jf()
      }))
    a = Pe('app-verification-progress-bar')
    window.componentHandler &&
      window.componentHandler.upgradeElement &&
      window.componentHandler.upgradeElement(a)
    if ((a = Pe('status-container-label')) && this.Nc) {
      var c = Ls(hf(a), this.Nc)
      df(a, c)
      rb(Ks, this.Nc.replace('-', '_').toLowerCase()) && If(a, 'firebase-rtl')
    }
  }
  var Rs = function () {
    var a = Pe('status-container')
    If(a, 'firebase-hidden')
  }
  Qs.prototype.te = function () {
    this.ob && (kg(this.ob), (this.ob = null))
    var a = Pe('app-verification-progress-bar')
    window.componentHandler &&
      window.componentHandler.downgradeElements &&
      window.componentHandler.downgradeElements(a)
  }
  var Ss = function (a) {
      this.dh = We('DIV', { id: 'progressBarContainer' })
      var b = this
      this.Nb = new Cp()
      this.uri = E(a)
      this.apiKey = D(this.uri, 'apiKey') || null
      this.appName = D(this.uri, 'appName') || ''
      this.authType = D(this.uri, 'authType') || null
      this.Wb = D(this.uri, 'eventId') || null
      this.Da = D(this.uri, 'redirectUrl') || null
      this.kf = D(this.uri, 'v') || null
      this.Kl = (a = D(this.uri, 'scopes')) ? a.split(',') : []
      this.Be = {}
      this.sessionId = D(this.uri, 'sessionId') || null
      this.Vf = D(this.uri, 'appDisplayName') || null
      this.ab = D(this.uri, 'apn') || null
      this.Gb = D(this.uri, 'ibi') || null
      this.De = D(this.uri, 'eid') || null
      this.clientId = D(this.uri, 'clientId') || null
      this.Cb = D(this.uri, 'appId') || null
      ;(this.Ch = new qd(this.uri.Hc).get('fac') || null) &&
        console.log('App Check token found.')
      this.zi = D(this.uri, 'hl') || null
      this.qc = D(this.uri, 'sha1Cert') || null
      this.publicKey = D(this.uri, 'publicKey') || null
      this.If = D(this.uri, 'tid') || null
      a = Hk(D(this.uri, 'customParameters') || '{}')
      this.Be = 'object' == typeof a ? a || {} : {}
      this.providerId = D(this.uri, 'providerId') || null
      this.qf =
        'string' === typeof q.POST_BODY &&
        '{{POST_BODY}}' != q.POST_BODY &&
        0 != q.POST_BODY.length
          ? q.POST_BODY
          : null
      this.providerId && (this.Be = Gk(this.Be, fl(this.providerId)))
      this.xd = (a = D(this.uri, 'fw')) ? a.split(',') : []
      this.mode = 'oauth'
      this.nc = null
      this.Yi = this.Rg = nk().then(function () {
        document.body.appendChild(b.dh)
        b.nc = new Ns()
        b.nc.render(b.dh)
      })
      this.ib = null
    },
    Ts = {},
    Us = { ag: ['facebook.com'] },
    Vs = {},
    Ws = { ag: ['facebook.com', 'apple.com'] },
    Xs = {},
    Ys = function (a) {
      if (a.Da)
        try {
          return nd(od(md(E(a.Da), ''), ''), '').toString()
        } catch (b) {}
      else {
        if (a.ab)
          return 'file://asset/www/index.html?apn=' + encodeURIComponent(a.ab)
        if (a.Gb)
          return 'file://asset/www/index.html?ibi=' + encodeURIComponent(a.Gb)
      }
      return null
    },
    Zs = function (a, b) {
      return D(a, b)
    },
    $s = function (a) {
      if (!a.apiKey) throw (Nk('No API key available'), new R('bad-request'))
      a.ib = new Bm(a.apiKey, Vj(a.De), yk('Handler', '2.20.3', a.xd), a.Ch)
      a.ib.M = a.If
    },
    bt = function (a) {
      at(a)
      a.Rg.then(function () {
        a.nc = new Ns()
        a.nc.render(a.dh)
      })
    },
    at = function (a) {
      a.Yi && a.Yi.cancel()
      a.nc && (a.nc.oa(), (a.nc = null))
    }
  Ss.prototype.Lc = function () {
    return this.apiKey ? this.apiKey + ':' + (this.appName || '') : null
  }
  Ss.prototype.handleError = function (a) {
    var b = this
    if (
      a instanceof R &&
      ('auth/unauthorized-domain' === a.code || 'auth/bad-request' === a.code)
    )
      return nk().then(function () {
        at(b)
        new Ps(a.message).render(document.body)
      })
    var c = new jl(this.authType || 'unknown', this.Wb, null, null, a)
    return dt(this, c)
  }
  var et = function (a, b, c, d) {
      b = new jl(a.authType, a.Wb, b, c, null, d, a.If)
      return dt(a, b)
    },
    dt = function (a, b) {
      var c = a.Lc(),
        d = !1,
        e = L()
      ik() && !a.Da && (e = mh(500))
      return e
        .then(function () {
          if ((a.ab || a.Gb) && a.ib)
            return (
              (d = !0),
              ft(
                a.ib,
                b,
                a.ab,
                a.Gb,
                a.clientId,
                a.qc,
                a.Vf,
                a.Wb,
                a.Cb,
                a.publicKey
              )
            )
          if ('verifyApp' === a.authType && b.ha)
            return (d = !0), gt(b.getError())
          if (c) {
            var f = a.Nb
            return b.getType().match(/Redirect$/)
              ? f.s.set(Bp, b.o(), c)
              : ht(f, c, b)
          }
        })
        .then(function () {
          return a.Nb.s.remove(Ep)
        })
        .then(function () {
          if (c) return a.Nb.s.remove(Dp, c)
        })
        .Ob(function () {
          d
            ? at(a)
            : /redirect/i.test(a.authType || '')
              ? (at(a), Qk(), bk(a.Da))
              : a.kf && Dk() && !sk()
                ? a.apiKey
                  ? setTimeout(function () {
                      at(a)
                      gk()
                    }, 15e3)
                  : (at(a), gk())
                : (at(a), gk())
        })
    },
    ft = function (a, b, c, d, e, f, g, h, l, m) {
      return L()
        .then(function () {
          if ('verifyApp' === b.getType() && d) {
            if (!e && !l) throw new R('invalid-app-id')
            it(null, b, c, d, e, f, g, h, l, m)
          } else
            return 'verifyApp' === b.getType() && c
              ? it(null, b, c, d, e, f, g, h, l, m)
              : c
                ? Wm(a, c, f).then(function () {
                    var n = null
                    n = f
                      ? L('playservices.app.goo.gl')
                      : S(a, Gn, { returnDynamicLink: !0 })
                    return n.then(function (r) {
                      it(r, b, c, d, e, f, g, h, l, m)
                    })
                  })
                : (e ? Xm(a, e) : l ? Ym(a, l) : Vm(a, d)).then(function () {
                    it(null, b, c, d, e, f, g, h, l, m)
                  })
        })
        .h(function (n) {
          return gt(n)
        })
    },
    gt = function (a) {
      var b =
        !a ||
        ('auth/dynamic-link-not-activated' != a.code &&
          'auth/invalid-app-id' != a.code &&
          'auth/invalid-oauth-client-id' != a.code &&
          'auth/invalid-api-key' != a.code &&
          'auth/internal-error' != a.code &&
          'auth/invalid-cert-hash' != a.code)
          ? (G['fireauth.oauthhelper.ui.soy.temporaryErrorMessage']
              ? G['fireauth.oauthhelper.ui.soy.temporaryErrorMessage'](
                  void 0,
                  void 0
                )
              : 'An error occurred. Please try again later.'
            ).toString()
          : a.message
      return nk().then(function () {
        new Ps(b).render(document.body)
      })
    },
    it = function (a, b, c, d, e, f, g, h, l, m) {
      m = m ? 'android_non_gmscore' : c ? 'android' : 'ios'
      var n = c ? c : d,
        r = null
      f
        ? ((r = jt(b, c, h, m)), (n = 'com.google.android.gms'))
        : (e || l) && d && 'verifyApp' !== b.getType() && !b.ha
          ? ((r =
              window.location.protocol +
              '//' +
              window.location.host +
              '/__/auth/callback?authType=' +
              encodeURIComponent(b.getType()) +
              '&link=' +
              encodeURIComponent(b.kb)),
            h && (r += '&eventId=' + h))
          : b.ha
            ? ((r =
                window.location.protocol +
                '//' +
                window.location.host +
                '/__/auth/callback?firebaseError=' +
                encodeURIComponent(Ek(b.getError().o())) +
                '&authType=' +
                encodeURIComponent(b.getType())),
              h && (r += '&eventId=' + h))
            : (r = b.kb.replace('/handler', '/callback'))
      a = new ul(a, m, n, window.location.host, r, e, l)
      'android' == m
        ? (vl(a, g), bk(a.toString(!f)))
        : bk(a.toString(), void 0, !0)
      setTimeout(function () {
        ak(null)
      }, 4e3)
    },
    jt = function (a, b, c, d) {
      if ('android_non_gmscore' === d) {
        d = a.kb
        var e =
          window.location.protocol +
          '//' +
          window.location.host +
          '/__/auth/handler'
        b =
          'intent://firebase.auth/#Intent;scheme=' +
          ('verifyApp' === a.getType() ? 'recaptcha' : 'genericidp') +
          ';package=' +
          b +
          ';S.authType=' +
          a.getType() +
          ';'
        c && (b += 'S.eventId=' + c + ';')
        a.ha
          ? (b +=
              'S.firebaseError=' +
              encodeURIComponent(Ek(a.getError().o())) +
              ';')
          : ((b += 'S.link=' + encodeURIComponent(d) + ';'),
            (b += 'B.encryptionEnabled=false;'))
        b += 'S.browser_fallback_url=' + encodeURIComponent(e) + ';'
        a = b + 'end;'
      } else
        (d = xd(
          'https',
          'fir-auth-gms.firebaseapp.com',
          null,
          '/',
          null,
          null
        )),
          B(d, 'authType', a.getType()),
          B(d, 'cpn', b),
          c && B(d, 'eventId', c),
          a.ha
            ? B(d, 'firebaseError', Ek(a.getError().o()))
            : B(d, 'link', a.kb),
          (a = d.toString())
      return a
    },
    ht = function (a, b, c) {
      var d = (q.window && q.window.opener) || null
      if (Cf() && d && /popup/i.test(c.getType() || '')) {
        for (var e = [], f = b.split(':'), g = 0; g < d.frames.length; g++) {
          var h = d.frames[g]
          try {
            var l = E(h.location.href)
            f[0] === D(l, 'apiKey') &&
              f[1] === D(l, 'appName') &&
              e.push(new to(new ro(h, h.location.origin)))
          } catch (n) {}
        }
        if (0 === e.length) return Gp(a, b, c)
        var m = []
        e.forEach(function (n) {
          var r = !1
          m.push(
            uo(
              n,
              'sendAuthEvent',
              { storageKey: b, authEvent: c.o() },
              2e4
            ).then(function (u) {
              for (var C = 0; C < u.length; C++)
                u[C].fulfilled && u[C].value && (r = u[C].value)
              if (!r) throw Error('Unable to send the auth event')
            })
          )
        })
        return ah(m)
          .h(function () {
            return Gp(a, b, c)
          })
          .then(function () {
            e.forEach(function (n) {
              n.close()
            })
          })
      }
      return Gp(a, b, c)
    }
  var kt = function (a) {
    this.Ph = !1
    this.pb = We('DIV')
    if ('verifyApp' !== Zs(E(a), 'authType')) throw Error('Invalid mode!')
    this.fb = { size: 'invisible', type: 'image', tabindex: 0, theme: 'light' }
    Ss.call(this, a)
    this.re = new Qs(null, this.zi)
    this.hg = this.Qb = null
    this.mode = 'verifyApp'
  }
  w(kt, Ss)
  kt.prototype.start = function () {
    var a = this
    return this.qb()
      .then(function () {
        return lt(a)
      })
      .h(function (b) {
        a.Qb && a.Qb.clear()
        bt(a)
        a.re && a.re.oa()
        return b instanceof R
          ? a.handleError(b)
          : a.handleError(new R('internal-error'))
      })
  }
  kt.prototype.qb = function () {
    var a = this
    return L()
      .then(function () {
        if (
          !(
            (a.apiKey && a.Gb && (a.clientId || a.Cb)) ||
            (a.apiKey && a.ab && a.qc && a.publicKey)
          )
        ) {
          if (!a.apiKey) throw new R('invalid-api-key')
          if (!a.clientId && !a.Cb) throw new R('invalid-app-id')
          throw new R('internal-error')
        }
      })
      .then(function () {
        $s(a)
        if (a.clientId) return Xm(a.ib, a.clientId)
        if (a.Cb) return Ym(a.ib, a.Cb)
        if (a.ab && a.qc) return Wm(a.ib, a.ab, a.qc)
        throw new R('internal-error')
      })
  }
  var lt = function (a) {
    var b, c
    return a.Rg.then(function () {
      c = function () {
        var d = cf()
        d && d.style.width && (d.style.width = '')
      }
      a.Ph || ((a.Ph = !0), document.body.appendChild(a.pb))
      at(a)
      a.re.render(a.pb)
      b = Pe('verify')
      a.Qb = new no(
        a.apiKey,
        b,
        a.fb,
        function () {
          return a.zi
        },
        a.kf,
        Vj(a.De)
      )
      return a.Qb.render()
    })
      .then(function () {
        b.click()
        return mh(2500)
      })
      .then(function () {
        c()
        Rs()
        a.hg = setInterval(function () {
          cf().style.visibility &&
            'hidden' === cf().style.visibility &&
            b.click()
        }, 1e3)
        q.window.addEventListener('orientationchange', c)
        q.window.addEventListener('resize', c)
        return a.Qb.verify()
      })
      .then(function (d) {
        bt(a)
        clearInterval(a.hg)
        q.window.removeEventListener('orientationchange', c)
        q.window.removeEventListener('resize', c)
        a.Qb.clear()
        a.Qb = null
        d =
          window.location.protocol +
          '//' +
          window.location.host +
          '/__/auth/callback?authType=' +
          encodeURIComponent(a.mode) +
          '&recaptchaToken=' +
          encodeURIComponent(d)
        a.Wb && (d += '&eventId=' + encodeURIComponent(a.Wb))
        a.re.oa()
        return et(a, d, 'blank')
      })
      .h(function (d) {
        clearInterval(a.hg)
        q.window.removeEventListener('orientationchange', c)
        q.window.removeEventListener('resize', c)
        throw d
      })
  }
  var mt = function (a) {
    this.ae = []
    Ss.call(this, a)
  }
  w(mt, Ss)
  var nt = function (a) {
    var b = (q.window && q.window.opener) || null
    if (!a.Da && b && /popup/i.test(a.authType || '')) {
      for (var c = 0; c < b.frames.length; c++) {
        var d = b.frames[c]
        try {
          var e = E(d.location.href)
          a.apiKey === D(e, 'apiKey') &&
            a.appName === D(e, 'appName') &&
            a.ae.push(new to(new ro(d, d.location.origin)))
        } catch (f) {}
      }
      b = []
      for (c = 0; c < a.ae.length; c++)
        b.push(
          uo(a.ae[c], 'getParentOrigin', null, 2e4).then(function (f) {
            for (var g = 0; g < f.length; g++)
              f[g].fulfilled && f[g].value && (a.Da = f[g].value)
            if (!a.Da) throw Error('Unable to determine origin')
          })
        )
      return ah(b)
        .h(function () {})
        .then(function () {
          for (var f = 0; f < a.ae.length; f++) a.ae[f].close()
        })
    }
    return L()
  }
  mt.prototype.start = function () {
    var a = this
    return this.qb()
      .then(function () {
        return ot(a, a.providerId, a.Be, a.Kl, a.sessionId)
      })
      .h(function (b) {
        return b instanceof R
          ? a.handleError(b)
          : a.handleError(new R('internal-error'))
      })
  }
  mt.prototype.qb = function () {
    var a = this
    return L().then(function () {
      $s(a)
      if (a.apiKey && a.authType && a.providerId) {
        var b = new ll(
            a.apiKey,
            a.appName,
            a.authType,
            a.Wb,
            a.Da,
            a.kf,
            a.Vf,
            a.ab,
            a.Gb,
            a.De,
            a.xd,
            a.clientId,
            a.qc,
            a.If,
            a.providerId,
            a.Cb,
            a.publicKey
          ),
          c = new es(),
          d = a.providerId,
          e = function (h, l) {
            var m = new Bm(h)
            return Tm(m).then(
              function (n) {
                var r = lk(n, l)
                return r
                  ? L(r)
                  : Pm(m, d, l + '#webwidgetstarter', {}, null, null).then(
                      function () {
                        return L(r)
                      },
                      function () {
                        return L(r)
                      }
                    )
              },
              function (n) {
                return L(n)
              }
            )
          },
          f = function (h, l) {
            return Um(l).then(
              function (m) {
                return L(!h || m === h)
              },
              function () {
                return L(!1)
              }
            )
          },
          g = function (h, l, m) {
            return fs(c).then(
              function (n) {
                return n.apiKey === h
                  ? L(!0)
                  : e(n.apiKey, l).then(function (r) {
                      return r instanceof Error
                        ? f(n.messagingSenderId, m).then(
                            function (u) {
                              return u
                                ? L(u)
                                : Pm(
                                    m,
                                    d,
                                    l + '#webwidgetstarter_projectNumber',
                                    {},
                                    null,
                                    null
                                  ).then(
                                    function () {
                                      return L(u)
                                    },
                                    function () {
                                      return L(u)
                                    }
                                  )
                            },
                            function () {
                              return L(!1)
                            }
                          )
                        : L(r)
                    })
              },
              function () {
                return L(!0)
              }
            )
          }
        return (
          a.Da
            ? Tm(a.ib)
                .h(function () {
                  Nk('Unable to verify that the app domain is authorized')
                  throw new R('bad-request')
                })
                .then(function (h) {
                  if (!lk(h, a.Da))
                    throw (
                      (Nk('App domain is unauthorized'), new R('bad-request'))
                    )
                  return g(a.apiKey, a.Da, a.ib).then(
                    function (l) {
                      if (l) return L(l)
                      Nk(
                        'App domain is unauthorized in the Firebase Hosting project.'
                      )
                      if (!Ef()) return L(!0)
                      throw new zl(a.Da)
                    },
                    function (l) {
                      if (!Ef()) return L(!0)
                      throw l
                    }
                  )
                })
                .h(function (h) {
                  throw h
                })
            : L()
        ).then(function () {
          var h = a.ab
            ? a.qc
              ? Us
              : Vs
            : a.Gb
              ? a.clientId || a.Cb
                ? Ws
                : Xs
              : Ts
          if (h.ag && h.ag.includes(a.providerId))
            throw new R(
              'operation-not-supported-in-this-environment',
              'This web-based operation for the ' +
                a.providerId +
                " provider is not supported in this environment. Please use the identity provider's native SDK instead."
            )
          return a.Nb.s.set(Ep, b.o())
        })
      }
      Nk('Request is missing required data')
      throw new R('bad-request')
    })
  }
  var ot = function (a, b, c, d, e) {
      var f,
        g = nd(od(E(a.uri.toString()), ''), '').toString(),
        h = null
      return Pm(a.ib, b, g, c, d, e)
        .then(function (l) {
          f = l
          return nt(a)
        })
        .then(function () {
          var l = E(f.authUri),
            m = Ys(a),
            n
          ;(n =
            (n = q.window) && n.innerWidth && n.innerHeight
              ? {
                  width: parseFloat(n.innerWidth),
                  height: parseFloat(n.innerHeight),
                }
              : null) &&
            800 > n.width &&
            'facebook.com' == b &&
            !a.Da &&
            B(l, 'display', 'popup')
          m && B(l, 'context_uri', m)
          h = l.toString()
          l = a.Nb
          m = a.Lc()
          return l.s.set(Dp, f.sessionId, m)
        })
        .then(function () {
          return pt(a)
        })
        .then(function () {
          at(a)
          var l = Zj()
          bk(h)
          Af() &&
            'Safari' === dk(Xj()) &&
            setTimeout(function () {
              l === Zj() &&
                new Os(null, function () {
                  a.handleError(new R('user-cancelled'))
                }).render(document.body)
            }, 1e3)
        })
    },
    pt = function (a) {
      if (!Df()) return L()
      var b = 0
      return new K(function (c, d) {
        var e = function () {
          10 <= b++
            ? (Nk('Unable to save initial state.'),
              d(
                new R(
                  'bad-request',
                  'Unable to save initial state. This may happen if browser sessionStorage is inaccessible.'
                )
              ))
            : Fp(a.Nb).then(function (f) {
                f ? c() : setTimeout(e, 1)
              })
        }
        e()
      })
    }
  var qt = function (a) {
    Ss.call(this, a)
  }
  p(qt, Ss)
  qt.prototype.start = function () {
    var a = this
    return this.qb()
      .then(function () {
        return rt(a)
      })
      .h(function (b) {
        return b instanceof R
          ? a.handleError(b)
          : a.handleError(new R('internal-error'))
      })
  }
  qt.prototype.qb = function () {
    var a = this
    return Fp(this.Nb).then(function (b) {
      if (!b)
        throw (
          (Nk('Unable to process request due to missing initial state.'),
          new R(
            'bad-request',
            'Unable to process request due to missing initial state. This may happen if browser sessionStorage is inaccessible or accidentally cleared. Some specific scenarios are - 1) Using IDP-Initiated SAML SSO. 2) Using signInWithRedirect in a storage-partitioned browser environment.'
          ))
        )
      var c = b && b.cb(),
        d = b && b.getType()
      if (!c) throw new R('invalid-api-key')
      if (!d) throw new R('internal-error')
      a.apiKey = b.cb()
      a.De = b.bi
      a.xd = b.Z
      $s(a)
      a.appName = b.D
      a.authType = b.getType()
      a.Wb = b.X
      a.Da = b.dd
      a.kf = b.bb
      a.Vf = b.mg
      a.ab = b.xc
      a.Gb = b.Fd
      a.clientId = b.Tb
      a.qc = b.vj
      a.If = b.qa()
      a.providerId = b.ad
      a.Cb = b.Xb
      a.publicKey = b.jj
    })
  }
  var st = function (a, b) {
      if (a.qf && 'apple.com' === a.providerId) {
        b = E(b)
        var c = Tk(a.qf)
        a.qf = null
        for (var d in c) c.hasOwnProperty(d) && B(b, d, c[d])
        return b.toString()
      }
      return b
    },
    rt = function (a) {
      var b = st(a, a.uri.toString()),
        c = a.Lc()
      return a.Nb.Kc(c).then(function (d) {
        if (!d) throw new R('internal-error')
        return et(a, b, d, a.qf)
      })
    }
  var tt = null
  function ut(a) {
    vt()
    nk().then(function () {
      var b = new Os(a.appName, function () {
        b.oa()
        bk(a.toString())
        setTimeout(function () {
          ak(null)
        }, 4e3)
      })
      b.render(document.body)
    })
  }
  function wt(a) {
    var b = a
    try {
      var c = il(Hk(a))
      c && c.message && (b = c.message)
    } catch (d) {}
    vt()
    nk().then(function () {
      new Ps(b).render(document.body)
    })
  }
  function vt() {
    var a = Hc(
      new pc(
        nc,
        '.mdl-card{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;width:330px;z-index:1;position:relative;background:#fff;border-radius:2px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__media{background-color:#ff4081;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-origin:padding-box;background-attachment:scroll;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__title{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#000;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-moz-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;line-height:normal;padding:16px 16px;-webkit-perspective-origin:165px 56px;perspective-origin:165px 56px;-webkit-transform-origin:165px 56px;transform-origin:165px 56px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;color:inherit;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:24px;font-weight:300;line-height:normal;overflow:hidden;-webkit-transform-origin:149px 48px;transform-origin:149px 48px;margin:0}.mdl-card__subtitle-text{font-size:14px;color:rgba(0,0,0,.54);margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px 16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{font-size:16px;line-height:normal;width:100%;background-color:transparent;padding:8px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-button{background:transparent;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;-webkit-transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored:active{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored:focus:not(:active){background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:hsla(0,0%,62%,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored:focus:not(:active){background-color:#ff4081}.mdl-button--fab.mdl-button--colored:active{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{color:#fff;background-color:#ff4081}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);box-shadow:none}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-progress{display:block;position:relative;height:4px;width:500px;max-width:100%}.mdl-progress>.bar{display:block;position:absolute;top:0;bottom:0;width:0;-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}.mdl-progress>.progressbar{background-color:#3f51b5;z-index:1;left:0}.mdl-progress>.bufferbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);z-index:0;left:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);-webkit-mask:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=");mask:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.9)),to(hsla(0,0%,100%,.9))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{background-color:#3f51b5;-webkit-animation-name:indeterminate1;animation-name:indeterminate1;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-image:none;background-color:#3f51b5;-webkit-animation-name:indeterminate2;animation-name:indeterminate2;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@-webkit-keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}body{margin:0}.firebase-container{background-color:#fff;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;color:rgba(0,0,0,.87);direction:ltr;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:hidden;padding-top:8px;position:relative;width:100%}.firebase-progress-bar{height:5px;left:0;position:absolute;top:0;width:100%}.firebase-hidden-button{height:1px;visibility:hidden;width:1px}.firebase-container#app-verification-screen{top:100px}.firebase-title{color:rgba(0,0,0,.87);direction:ltr;font-size:24px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:center}.firebase-middle-progress-bar{height:5px;margin-left:auto;margin-right:auto;top:20px;width:250px}.firebase-hidden{display:none}.firebase-rtl{direction:rtl;text-align:right}@media (max-width:520px){.firebase-container{box-shadow:none;max-width:none;width:100%}}'
      )
    )
    wh(a)
  }
  xa('fireauth.oauthhelper.widget.initialize', function () {
    var a = Zj()
    switch (
      D(E(a), 'blank')
        ? 'blank'
        : 'verifyApp' === Zs(E(a), 'authType')
          ? 'verifyApp'
          : wl(a)
            ? 'dynamicLink'
            : D(E(a), 'firebaseError')
              ? 'error'
              : Zs(E(a), 'apiKey')
                ? 'starter'
                : 'finisher'
    ) {
      case 'blank':
        ak(null)
        return
      case 'dynamicLink':
        a = wl(a)
        ut(a)
        return
      case 'error':
        a = D(E(a), 'firebaseError') || null
        wt(a)
        return
      case 'starter':
        tt = new mt(a)
        break
      case 'finisher':
        tt = new qt(a)
        break
      case 'verifyApp':
        tt = new kt(a)
    }
    vt()
    tt.start()
  })
}).call(this)
