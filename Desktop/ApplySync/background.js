var background = (function () {
  "use strict";
  var fa, ha;
  function xa(a) {
    return a == null || typeof a == "function" ? { main: a } : a;
  }
  const ka = [
      "Bachelor's",
      "Master's",
      "MBA",
      "PhD",
      "PharmD",
      "Associate's",
      "High School",
      "GED",
      "Other",
    ],
    Ta = [
      "Afrikaans",
      "Akan",
      "Albanian",
      "Amharic",
      "Arabic",
      "Armenian",
      "Assamese",
      "Azerbaijani",
      "Basque",
      "Belarusian",
      "Bengali",
      "Bhojpuri",
      "Bosnian",
      "Bulgarian",
      "Burmese",
      "Cantonese",
      "Catalan",
      "Cebuano",
      "Chinese",
      "Croatian",
      "Czech",
      "Danish",
      "Dari",
      "Dutch",
      "Dzongkha",
      "English",
      "Estonian",
      "Farsi",
      "Finnish",
      "French",
      "Gaelic",
      "Galician",
      "Georgian",
      "German",
      "Greek",
      "Gujarati",
      "Haitian",
      "Hakka",
      "Hausa",
      "Hebrew",
      "Hiligaynon",
      "Hindi",
      "Hmong",
      "Hungarian",
      "Icelandic",
      "Igbo",
      "Ilokano",
      "Indonesian",
      "Irish",
      "Italian",
      "Japanese",
      "Kannada",
      "Kazakh",
      "Khmer",
      "Kirundi",
      "Konkani",
      "Korean",
      "Kurdish",
      "Kyrgyz",
      "Lao",
      "Latin",
      "Latvian",
      "Lithuanian",
      "Macedonian",
      "Maithili",
      "Malagasy",
      "Malay",
      "Malay/Indonesian",
      "Malayalam",
      "Maltese",
      "Mandarin",
      "Marathi",
      "Marwari",
      "Min Nan",
      "Mongolian",
      "Nepali",
      "Norwegian",
      "Oriya",
      "Pashto",
      "Persian",
      "Polish",
      "Portuguese",
      "Punjabi",
      "Quechua",
      "Romanian",
      "Russian",
      "Serbian",
      "Serbo-Croatian",
      "Shona",
      "Sindhi",
      "Sinhala",
      "Slovak",
      "Slovene",
      "Somali",
      "Spanish",
      "Sundanese",
      "Swahili",
      "Swedish",
      "Tagalog",
      "Tagalog-Filipino",
      "Tajik",
      "Tamil",
      "Telugu",
      "Thai",
      "Tibetan",
      "Turkish",
      "Turkmen",
      "Uighur",
      "Ukrainian",
      "Urdu",
      "Uzbek",
      "Vietnamese",
      "Xhosa",
      "Yoruba",
      "Zulu",
    ],
    Sa = [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Full Professional Proficiency",
      "Native",
    ],
    Ea = ["Male", "Female", "Non-Binary", "I choose not to disclose"],
    Ca = [
      "American Indian or Alaska Native",
      "Asian",
      "Black or African American",
      "Hispanic or Latino",
      "Native Hawaiian or Other Pacific Islander",
      "White",
      "I choose not to disclose",
    ],
    Na = [
      "Afghanistan",
      "Åland Islands",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bonaire, Sint Eustatius, and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Colombia",
      "Comoros",
      "Congo",
      "Congo, Democratic Republic of the",
      "Cook Islands",
      "Costa Rica",
      "Côte d'Ivoire",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czechia",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See (Vatican City State)",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea, Democratic People's Republic of",
      "Korea, Republic of",
      "Kosovo",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia, Federated States of",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands",
      "North Macedonia",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn Islands",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "Saint Barthelemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "State of Palestine",
      "Sudan",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Türkiye",
      "Turkmenistan",
      "Turks and Caicos Islands",
      "Tuvalu",
      "U. S. Virgin Islands",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States Minor Outlying Islands",
      "United States of America",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ];
  var I;
  (function (a) {
    a.assertEqual = (n) => n;
    function e(n) {}
    a.assertIs = e;
    function t(n) {
      throw new Error();
    }
    (a.assertNever = t),
      (a.arrayToEnum = (n) => {
        const s = {};
        for (const l of n) s[l] = l;
        return s;
      }),
      (a.getValidEnumValues = (n) => {
        const s = a.objectKeys(n).filter((d) => typeof n[n[d]] != "number"),
          l = {};
        for (const d of s) l[d] = n[d];
        return a.objectValues(l);
      }),
      (a.objectValues = (n) =>
        a.objectKeys(n).map(function (s) {
          return n[s];
        })),
      (a.objectKeys =
        typeof Object.keys == "function"
          ? (n) => Object.keys(n)
          : (n) => {
              const s = [];
              for (const l in n)
                Object.prototype.hasOwnProperty.call(n, l) && s.push(l);
              return s;
            }),
      (a.find = (n, s) => {
        for (const l of n) if (s(l)) return l;
      }),
      (a.isInteger =
        typeof Number.isInteger == "function"
          ? (n) => Number.isInteger(n)
          : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n);
    function r(n, s = " | ") {
      return n.map((l) => (typeof l == "string" ? `'${l}'` : l)).join(s);
    }
    (a.joinValues = r),
      (a.jsonStringifyReplacer = (n, s) =>
        typeof s == "bigint" ? s.toString() : s);
  })(I || (I = {}));
  var Et;
  (function (a) {
    a.mergeShapes = (e, t) => ({ ...e, ...t });
  })(Et || (Et = {}));
  const v = I.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set",
    ]),
    fe = (a) => {
      switch (typeof a) {
        case "undefined":
          return v.undefined;
        case "string":
          return v.string;
        case "number":
          return isNaN(a) ? v.nan : v.number;
        case "boolean":
          return v.boolean;
        case "function":
          return v.function;
        case "bigint":
          return v.bigint;
        case "symbol":
          return v.symbol;
        case "object":
          return Array.isArray(a)
            ? v.array
            : a === null
            ? v.null
            : a.then &&
              typeof a.then == "function" &&
              a.catch &&
              typeof a.catch == "function"
            ? v.promise
            : typeof Map < "u" && a instanceof Map
            ? v.map
            : typeof Set < "u" && a instanceof Set
            ? v.set
            : typeof Date < "u" && a instanceof Date
            ? v.date
            : v.object;
        default:
          return v.unknown;
      }
    },
    h = I.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite",
    ]),
    Ra = (a) => JSON.stringify(a, null, 2).replace(/"([^"]+)":/g, "$1:");
  class G extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      super(),
        (this.issues = []),
        (this.addIssue = (r) => {
          this.issues = [...this.issues, r];
        }),
        (this.addIssues = (r = []) => {
          this.issues = [...this.issues, ...r];
        });
      const t = new.target.prototype;
      Object.setPrototypeOf
        ? Object.setPrototypeOf(this, t)
        : (this.__proto__ = t),
        (this.name = "ZodError"),
        (this.issues = e);
    }
    format(e) {
      const t =
          e ||
          function (s) {
            return s.message;
          },
        r = { _errors: [] },
        n = (s) => {
          for (const l of s.issues)
            if (l.code === "invalid_union") l.unionErrors.map(n);
            else if (l.code === "invalid_return_type") n(l.returnTypeError);
            else if (l.code === "invalid_arguments") n(l.argumentsError);
            else if (l.path.length === 0) r._errors.push(t(l));
            else {
              let d = r,
                c = 0;
              for (; c < l.path.length; ) {
                const i = l.path[c];
                c === l.path.length - 1
                  ? ((d[i] = d[i] || { _errors: [] }), d[i]._errors.push(t(l)))
                  : (d[i] = d[i] || { _errors: [] }),
                  (d = d[i]),
                  c++;
              }
            }
        };
      return n(this), r;
    }
    static assert(e) {
      if (!(e instanceof G)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, I.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (t) => t.message) {
      const t = {},
        r = [];
      for (const n of this.issues)
        n.path.length > 0
          ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n)))
          : r.push(e(n));
      return { formErrors: r, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  G.create = (a) => new G(a);
  const Ze = (a, e) => {
    let t;
    switch (a.code) {
      case h.invalid_type:
        a.received === v.undefined
          ? (t = "Required")
          : (t = `Expected ${a.expected}, received ${a.received}`);
        break;
      case h.invalid_literal:
        t = `Invalid literal value, expected ${JSON.stringify(
          a.expected,
          I.jsonStringifyReplacer
        )}`;
        break;
      case h.unrecognized_keys:
        t = `Unrecognized key(s) in object: ${I.joinValues(a.keys, ", ")}`;
        break;
      case h.invalid_union:
        t = "Invalid input";
        break;
      case h.invalid_union_discriminator:
        t = `Invalid discriminator value. Expected ${I.joinValues(a.options)}`;
        break;
      case h.invalid_enum_value:
        t = `Invalid enum value. Expected ${I.joinValues(
          a.options
        )}, received '${a.received}'`;
        break;
      case h.invalid_arguments:
        t = "Invalid function arguments";
        break;
      case h.invalid_return_type:
        t = "Invalid function return type";
        break;
      case h.invalid_date:
        t = "Invalid date";
        break;
      case h.invalid_string:
        typeof a.validation == "object"
          ? "includes" in a.validation
            ? ((t = `Invalid input: must include "${a.validation.includes}"`),
              typeof a.validation.position == "number" &&
                (t = `${t} at one or more positions greater than or equal to ${a.validation.position}`))
            : "startsWith" in a.validation
            ? (t = `Invalid input: must start with "${a.validation.startsWith}"`)
            : "endsWith" in a.validation
            ? (t = `Invalid input: must end with "${a.validation.endsWith}"`)
            : I.assertNever(a.validation)
          : a.validation !== "regex"
          ? (t = `Invalid ${a.validation}`)
          : (t = "Invalid");
        break;
      case h.too_small:
        a.type === "array"
          ? (t = `Array must contain ${
              a.exact ? "exactly" : a.inclusive ? "at least" : "more than"
            } ${a.minimum} element(s)`)
          : a.type === "string"
          ? (t = `String must contain ${
              a.exact ? "exactly" : a.inclusive ? "at least" : "over"
            } ${a.minimum} character(s)`)
          : a.type === "number"
          ? (t = `Number must be ${
              a.exact
                ? "exactly equal to "
                : a.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${a.minimum}`)
          : a.type === "date"
          ? (t = `Date must be ${
              a.exact
                ? "exactly equal to "
                : a.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${new Date(Number(a.minimum))}`)
          : (t = "Invalid input");
        break;
      case h.too_big:
        a.type === "array"
          ? (t = `Array must contain ${
              a.exact ? "exactly" : a.inclusive ? "at most" : "less than"
            } ${a.maximum} element(s)`)
          : a.type === "string"
          ? (t = `String must contain ${
              a.exact ? "exactly" : a.inclusive ? "at most" : "under"
            } ${a.maximum} character(s)`)
          : a.type === "number"
          ? (t = `Number must be ${
              a.exact
                ? "exactly"
                : a.inclusive
                ? "less than or equal to"
                : "less than"
            } ${a.maximum}`)
          : a.type === "bigint"
          ? (t = `BigInt must be ${
              a.exact
                ? "exactly"
                : a.inclusive
                ? "less than or equal to"
                : "less than"
            } ${a.maximum}`)
          : a.type === "date"
          ? (t = `Date must be ${
              a.exact
                ? "exactly"
                : a.inclusive
                ? "smaller than or equal to"
                : "smaller than"
            } ${new Date(Number(a.maximum))}`)
          : (t = "Invalid input");
        break;
      case h.custom:
        t = "Invalid input";
        break;
      case h.invalid_intersection_types:
        t = "Intersection results could not be merged";
        break;
      case h.not_multiple_of:
        t = `Number must be a multiple of ${a.multipleOf}`;
        break;
      case h.not_finite:
        t = "Number must be finite";
        break;
      default:
        (t = e.defaultError), I.assertNever(a);
    }
    return { message: t };
  };
  let Ut = Ze;
  function Aa(a) {
    Ut = a;
  }
  function pt() {
    return Ut;
  }
  const mt = (a) => {
      const { data: e, path: t, errorMaps: r, issueData: n } = a,
        s = [...t, ...(n.path || [])],
        l = { ...n, path: s };
      if (n.message !== void 0) return { ...n, path: s, message: n.message };
      let d = "";
      const c = r
        .filter((i) => !!i)
        .slice()
        .reverse();
      for (const i of c) d = i(l, { data: e, defaultError: d }).message;
      return { ...n, path: s, message: d };
    },
    Oa = [];
  function y(a, e) {
    const t = pt(),
      r = mt({
        issueData: e,
        data: a.data,
        path: a.path,
        errorMaps: [
          a.common.contextualErrorMap,
          a.schemaErrorMap,
          t,
          t === Ze ? void 0 : Ze,
        ].filter((n) => !!n),
      });
    a.common.issues.push(r);
  }
  class U {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(e, t) {
      const r = [];
      for (const n of t) {
        if (n.status === "aborted") return T;
        n.status === "dirty" && e.dirty(), r.push(n.value);
      }
      return { status: e.value, value: r };
    }
    static async mergeObjectAsync(e, t) {
      const r = [];
      for (const n of t) {
        const s = await n.key,
          l = await n.value;
        r.push({ key: s, value: l });
      }
      return U.mergeObjectSync(e, r);
    }
    static mergeObjectSync(e, t) {
      const r = {};
      for (const n of t) {
        const { key: s, value: l } = n;
        if (s.status === "aborted" || l.status === "aborted") return T;
        s.status === "dirty" && e.dirty(),
          l.status === "dirty" && e.dirty(),
          s.value !== "__proto__" &&
            (typeof l.value < "u" || n.alwaysSet) &&
            (r[s.value] = l.value);
      }
      return { status: e.value, value: r };
    }
  }
  const T = Object.freeze({ status: "aborted" }),
    De = (a) => ({ status: "dirty", value: a }),
    H = (a) => ({ status: "valid", value: a }),
    Ct = (a) => a.status === "aborted",
    Nt = (a) => a.status === "dirty",
    Se = (a) => a.status === "valid",
    qe = (a) => typeof Promise < "u" && a instanceof Promise;
  function gt(a, e, t, r) {
    if (typeof e == "function" ? a !== e || !0 : !e.has(a))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return e.get(a);
  }
  function Vt(a, e, t, r, n) {
    if (typeof e == "function" ? a !== e || !0 : !e.has(a))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return e.set(a, t), t;
  }
  typeof SuppressedError == "function" && SuppressedError;
  var w;
  (function (a) {
    (a.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
      (a.toString = (e) =>
        typeof e == "string" ? e : e == null ? void 0 : e.message);
  })(w || (w = {}));
  var We, Ke;
  class le {
    constructor(e, t, r, n) {
      (this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = r),
        (this._key = n);
    }
    get path() {
      return (
        this._cachedPath.length ||
          (this._key instanceof Array
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  }
  const Ht = (a, e) => {
    if (Se(e)) return { success: !0, data: e.value };
    if (!a.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        const t = new G(a.common.issues);
        return (this._error = t), this._error;
      },
    };
  };
  function E(a) {
    if (!a) return {};
    const {
      errorMap: e,
      invalid_type_error: t,
      required_error: r,
      description: n,
    } = a;
    if (e && (t || r))
      throw new Error(
        `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
      );
    return e
      ? { errorMap: e, description: n }
      : {
          errorMap: (l, d) => {
            var c, i;
            const { message: p } = a;
            return l.code === "invalid_enum_value"
              ? { message: p ?? d.defaultError }
              : typeof d.data > "u"
              ? {
                  message:
                    (c = p ?? r) !== null && c !== void 0 ? c : d.defaultError,
                }
              : l.code !== "invalid_type"
              ? { message: d.defaultError }
              : {
                  message:
                    (i = p ?? t) !== null && i !== void 0 ? i : d.defaultError,
                };
          },
          description: n,
        };
  }
  class R {
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return fe(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: fe(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new U(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: fe(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      const t = this._parse(e);
      if (qe(t)) throw new Error("Synchronous parse encountered promise.");
      return t;
    }
    _parseAsync(e) {
      const t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      const r = this.safeParse(e, t);
      if (r.success) return r.data;
      throw r.error;
    }
    safeParse(e, t) {
      var r;
      const n = {
          common: {
            issues: [],
            async:
              (r = t == null ? void 0 : t.async) !== null && r !== void 0
                ? r
                : !1,
            contextualErrorMap: t == null ? void 0 : t.errorMap,
          },
          path: (t == null ? void 0 : t.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: fe(e),
        },
        s = this._parseSync({ data: e, path: n.path, parent: n });
      return Ht(n, s);
    }
    "~validate"(e) {
      var t, r;
      const n = {
        common: { issues: [], async: !!this["~standard"].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: fe(e),
      };
      if (!this["~standard"].async)
        try {
          const s = this._parseSync({ data: e, path: [], parent: n });
          return Se(s) ? { value: s.value } : { issues: n.common.issues };
        } catch (s) {
          !(
            (r =
              (t = s == null ? void 0 : s.message) === null || t === void 0
                ? void 0
                : t.toLowerCase()) === null || r === void 0
          ) &&
            r.includes("encountered") &&
            (this["~standard"].async = !0),
            (n.common = { issues: [], async: !0 });
        }
      return this._parseAsync({ data: e, path: [], parent: n }).then((s) =>
        Se(s) ? { value: s.value } : { issues: n.common.issues }
      );
    }
    async parseAsync(e, t) {
      const r = await this.safeParseAsync(e, t);
      if (r.success) return r.data;
      throw r.error;
    }
    async safeParseAsync(e, t) {
      const r = {
          common: {
            issues: [],
            contextualErrorMap: t == null ? void 0 : t.errorMap,
            async: !0,
          },
          path: (t == null ? void 0 : t.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: fe(e),
        },
        n = this._parse({ data: e, path: r.path, parent: r }),
        s = await (qe(n) ? n : Promise.resolve(n));
      return Ht(r, s);
    }
    refine(e, t) {
      const r = (n) =>
        typeof t == "string" || typeof t > "u"
          ? { message: t }
          : typeof t == "function"
          ? t(n)
          : t;
      return this._refinement((n, s) => {
        const l = e(n),
          d = () => s.addIssue({ code: h.custom, ...r(n) });
        return typeof Promise < "u" && l instanceof Promise
          ? l.then((c) => (c ? !0 : (d(), !1)))
          : l
          ? !0
          : (d(), !1);
      });
    }
    refinement(e, t) {
      return this._refinement((r, n) =>
        e(r) ? !0 : (n.addIssue(typeof t == "function" ? t(r, n) : t), !1)
      );
    }
    _refinement(e) {
      return new te({
        schema: this,
        typeName: k.ZodEffects,
        effect: { type: "refinement", refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    constructor(e) {
      (this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (t) => this["~validate"](t),
        });
    }
    optional() {
      return ce.create(this, this._def);
    }
    nullable() {
      return _e.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ee.create(this);
    }
    promise() {
      return ze.create(this, this._def);
    }
    or(e) {
      return et.create([this, e], this._def);
    }
    and(e) {
      return tt.create(this, e, this._def);
    }
    transform(e) {
      return new te({
        ...E(this._def),
        schema: this,
        typeName: k.ZodEffects,
        effect: { type: "transform", transform: e },
      });
    }
    default(e) {
      const t = typeof e == "function" ? e : () => e;
      return new it({
        ...E(this._def),
        innerType: this,
        defaultValue: t,
        typeName: k.ZodDefault,
      });
    }
    brand() {
      return new Ot({ typeName: k.ZodBranded, type: this, ...E(this._def) });
    }
    catch(e) {
      const t = typeof e == "function" ? e : () => e;
      return new ot({
        ...E(this._def),
        innerType: this,
        catchValue: t,
        typeName: k.ZodCatch,
      });
    }
    describe(e) {
      const t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return lt.create(this, e);
    }
    readonly() {
      return dt.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  const Ia = /^c[^\s-]{8,}$/i,
    Ma = /^[0-9a-z]+$/,
    ja = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
    Pa =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    Za = /^[a-z0-9_-]{21}$/i,
    Da = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
    La =
      /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    $a =
      /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    Ba = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  let Rt;
  const za =
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    Ua =
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    Va =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    Ha =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    Fa = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    Ya =
      /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    Ft =
      "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    Ga = new RegExp(`^${Ft}$`);
  function Yt(a) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return (
      a.precision
        ? (e = `${e}\\.\\d{${a.precision}}`)
        : a.precision == null && (e = `${e}(\\.\\d+)?`),
      e
    );
  }
  function qa(a) {
    return new RegExp(`^${Yt(a)}$`);
  }
  function Gt(a) {
    let e = `${Ft}T${Yt(a)}`;
    const t = [];
    return (
      t.push(a.local ? "Z?" : "Z"),
      a.offset && t.push("([+-]\\d{2}:?\\d{2})"),
      (e = `${e}(${t.join("|")})`),
      new RegExp(`^${e}$`)
    );
  }
  function Wa(a, e) {
    return !!(
      ((e === "v4" || !e) && za.test(a)) ||
      ((e === "v6" || !e) && Va.test(a))
    );
  }
  function Ka(a, e) {
    if (!Da.test(a)) return !1;
    try {
      const [t] = a.split("."),
        r = t
          .replace(/-/g, "+")
          .replace(/_/g, "/")
          .padEnd(t.length + ((4 - (t.length % 4)) % 4), "="),
        n = JSON.parse(atob(r));
      return !(
        typeof n != "object" ||
        n === null ||
        !n.typ ||
        !n.alg ||
        (e && n.alg !== e)
      );
    } catch {
      return !1;
    }
  }
  function Ja(a, e) {
    return !!(
      ((e === "v4" || !e) && Ua.test(a)) ||
      ((e === "v6" || !e) && Ha.test(a))
    );
  }
  class Q extends R {
    _parse(e) {
      if (
        (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== v.string)
      ) {
        const s = this._getOrReturnCtx(e);
        return (
          y(s, {
            code: h.invalid_type,
            expected: v.string,
            received: s.parsedType,
          }),
          T
        );
      }
      const r = new U();
      let n;
      for (const s of this._def.checks)
        if (s.kind === "min")
          e.data.length < s.value &&
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              code: h.too_small,
              minimum: s.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: s.message,
            }),
            r.dirty());
        else if (s.kind === "max")
          e.data.length > s.value &&
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              code: h.too_big,
              maximum: s.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: s.message,
            }),
            r.dirty());
        else if (s.kind === "length") {
          const l = e.data.length > s.value,
            d = e.data.length < s.value;
          (l || d) &&
            ((n = this._getOrReturnCtx(e, n)),
            l
              ? y(n, {
                  code: h.too_big,
                  maximum: s.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: s.message,
                })
              : d &&
                y(n, {
                  code: h.too_small,
                  minimum: s.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: s.message,
                }),
            r.dirty());
        } else if (s.kind === "email")
          $a.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              validation: "email",
              code: h.invalid_string,
              message: s.message,
            }),
            r.dirty());
        else if (s.kind === "emoji")
          Rt || (Rt = new RegExp(Ba, "u")),
            Rt.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                validation: "emoji",
                code: h.invalid_string,
                message: s.message,
              }),
              r.dirty());
        else if (s.kind === "uuid")
          Pa.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              validation: "uuid",
              code: h.invalid_string,
              message: s.message,
            }),
            r.dirty());
        else if (s.kind === "nanoid")
          Za.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              validation: "nanoid",
              code: h.invalid_string,
              message: s.message,
            }),
            r.dirty());
        else if (s.kind === "cuid")
          Ia.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              validation: "cuid",
              code: h.invalid_string,
              message: s.message,
            }),
            r.dirty());
        else if (s.kind === "cuid2")
          Ma.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              validation: "cuid2",
              code: h.invalid_string,
              message: s.message,
            }),
            r.dirty());
        else if (s.kind === "ulid")
          ja.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              validation: "ulid",
              code: h.invalid_string,
              message: s.message,
            }),
            r.dirty());
        else if (s.kind === "url")
          try {
            new URL(e.data);
          } catch {
            (n = this._getOrReturnCtx(e, n)),
              y(n, {
                validation: "url",
                code: h.invalid_string,
                message: s.message,
              }),
              r.dirty();
          }
        else
          s.kind === "regex"
            ? ((s.regex.lastIndex = 0),
              s.regex.test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)),
                y(n, {
                  validation: "regex",
                  code: h.invalid_string,
                  message: s.message,
                }),
                r.dirty()))
            : s.kind === "trim"
            ? (e.data = e.data.trim())
            : s.kind === "includes"
            ? e.data.includes(s.value, s.position) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                code: h.invalid_string,
                validation: { includes: s.value, position: s.position },
                message: s.message,
              }),
              r.dirty())
            : s.kind === "toLowerCase"
            ? (e.data = e.data.toLowerCase())
            : s.kind === "toUpperCase"
            ? (e.data = e.data.toUpperCase())
            : s.kind === "startsWith"
            ? e.data.startsWith(s.value) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                code: h.invalid_string,
                validation: { startsWith: s.value },
                message: s.message,
              }),
              r.dirty())
            : s.kind === "endsWith"
            ? e.data.endsWith(s.value) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                code: h.invalid_string,
                validation: { endsWith: s.value },
                message: s.message,
              }),
              r.dirty())
            : s.kind === "datetime"
            ? Gt(s).test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                code: h.invalid_string,
                validation: "datetime",
                message: s.message,
              }),
              r.dirty())
            : s.kind === "date"
            ? Ga.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                code: h.invalid_string,
                validation: "date",
                message: s.message,
              }),
              r.dirty())
            : s.kind === "time"
            ? qa(s).test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                code: h.invalid_string,
                validation: "time",
                message: s.message,
              }),
              r.dirty())
            : s.kind === "duration"
            ? La.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                validation: "duration",
                code: h.invalid_string,
                message: s.message,
              }),
              r.dirty())
            : s.kind === "ip"
            ? Wa(e.data, s.version) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                validation: "ip",
                code: h.invalid_string,
                message: s.message,
              }),
              r.dirty())
            : s.kind === "jwt"
            ? Ka(e.data, s.alg) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                validation: "jwt",
                code: h.invalid_string,
                message: s.message,
              }),
              r.dirty())
            : s.kind === "cidr"
            ? Ja(e.data, s.version) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                validation: "cidr",
                code: h.invalid_string,
                message: s.message,
              }),
              r.dirty())
            : s.kind === "base64"
            ? Fa.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                validation: "base64",
                code: h.invalid_string,
                message: s.message,
              }),
              r.dirty())
            : s.kind === "base64url"
            ? Ya.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              y(n, {
                validation: "base64url",
                code: h.invalid_string,
                message: s.message,
              }),
              r.dirty())
            : I.assertNever(s);
      return { status: r.value, value: e.data };
    }
    _regex(e, t, r) {
      return this.refinement((n) => e.test(n), {
        validation: t,
        code: h.invalid_string,
        ...w.errToObj(r),
      });
    }
    _addCheck(e) {
      return new Q({ ...this._def, checks: [...this._def.checks, e] });
    }
    email(e) {
      return this._addCheck({ kind: "email", ...w.errToObj(e) });
    }
    url(e) {
      return this._addCheck({ kind: "url", ...w.errToObj(e) });
    }
    emoji(e) {
      return this._addCheck({ kind: "emoji", ...w.errToObj(e) });
    }
    uuid(e) {
      return this._addCheck({ kind: "uuid", ...w.errToObj(e) });
    }
    nanoid(e) {
      return this._addCheck({ kind: "nanoid", ...w.errToObj(e) });
    }
    cuid(e) {
      return this._addCheck({ kind: "cuid", ...w.errToObj(e) });
    }
    cuid2(e) {
      return this._addCheck({ kind: "cuid2", ...w.errToObj(e) });
    }
    ulid(e) {
      return this._addCheck({ kind: "ulid", ...w.errToObj(e) });
    }
    base64(e) {
      return this._addCheck({ kind: "base64", ...w.errToObj(e) });
    }
    base64url(e) {
      return this._addCheck({ kind: "base64url", ...w.errToObj(e) });
    }
    jwt(e) {
      return this._addCheck({ kind: "jwt", ...w.errToObj(e) });
    }
    ip(e) {
      return this._addCheck({ kind: "ip", ...w.errToObj(e) });
    }
    cidr(e) {
      return this._addCheck({ kind: "cidr", ...w.errToObj(e) });
    }
    datetime(e) {
      var t, r;
      return typeof e == "string"
        ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e,
          })
        : this._addCheck({
            kind: "datetime",
            precision:
              typeof (e == null ? void 0 : e.precision) > "u"
                ? null
                : e == null
                ? void 0
                : e.precision,
            offset:
              (t = e == null ? void 0 : e.offset) !== null && t !== void 0
                ? t
                : !1,
            local:
              (r = e == null ? void 0 : e.local) !== null && r !== void 0
                ? r
                : !1,
            ...w.errToObj(e == null ? void 0 : e.message),
          });
    }
    date(e) {
      return this._addCheck({ kind: "date", message: e });
    }
    time(e) {
      return typeof e == "string"
        ? this._addCheck({ kind: "time", precision: null, message: e })
        : this._addCheck({
            kind: "time",
            precision:
              typeof (e == null ? void 0 : e.precision) > "u"
                ? null
                : e == null
                ? void 0
                : e.precision,
            ...w.errToObj(e == null ? void 0 : e.message),
          });
    }
    duration(e) {
      return this._addCheck({ kind: "duration", ...w.errToObj(e) });
    }
    regex(e, t) {
      return this._addCheck({ kind: "regex", regex: e, ...w.errToObj(t) });
    }
    includes(e, t) {
      return this._addCheck({
        kind: "includes",
        value: e,
        position: t == null ? void 0 : t.position,
        ...w.errToObj(t == null ? void 0 : t.message),
      });
    }
    startsWith(e, t) {
      return this._addCheck({ kind: "startsWith", value: e, ...w.errToObj(t) });
    }
    endsWith(e, t) {
      return this._addCheck({ kind: "endsWith", value: e, ...w.errToObj(t) });
    }
    min(e, t) {
      return this._addCheck({ kind: "min", value: e, ...w.errToObj(t) });
    }
    max(e, t) {
      return this._addCheck({ kind: "max", value: e, ...w.errToObj(t) });
    }
    length(e, t) {
      return this._addCheck({ kind: "length", value: e, ...w.errToObj(t) });
    }
    nonempty(e) {
      return this.min(1, w.errToObj(e));
    }
    trim() {
      return new Q({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }],
      });
    }
    toLowerCase() {
      return new Q({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }],
      });
    }
    toUpperCase() {
      return new Q({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }],
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((e) => e.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((e) => e.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((e) => e.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((e) => e.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((e) => e.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((e) => e.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((e) => e.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((e) => e.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((e) => e.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((e) => e.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((e) => e.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((e) => e.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((e) => e.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((e) => e.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((e) => e.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((e) => e.kind === "base64url");
    }
    get minLength() {
      let e = null;
      for (const t of this._def.checks)
        t.kind === "min" && (e === null || t.value > e) && (e = t.value);
      return e;
    }
    get maxLength() {
      let e = null;
      for (const t of this._def.checks)
        t.kind === "max" && (e === null || t.value < e) && (e = t.value);
      return e;
    }
  }
  Q.create = (a) => {
    var e;
    return new Q({
      checks: [],
      typeName: k.ZodString,
      coerce:
        (e = a == null ? void 0 : a.coerce) !== null && e !== void 0 ? e : !1,
      ...E(a),
    });
  };
  function Xa(a, e) {
    const t = (a.toString().split(".")[1] || "").length,
      r = (e.toString().split(".")[1] || "").length,
      n = t > r ? t : r,
      s = parseInt(a.toFixed(n).replace(".", "")),
      l = parseInt(e.toFixed(n).replace(".", ""));
    return (s % l) / Math.pow(10, n);
  }
  class ge extends R {
    constructor() {
      super(...arguments),
        (this.min = this.gte),
        (this.max = this.lte),
        (this.step = this.multipleOf);
    }
    _parse(e) {
      if (
        (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== v.number)
      ) {
        const s = this._getOrReturnCtx(e);
        return (
          y(s, {
            code: h.invalid_type,
            expected: v.number,
            received: s.parsedType,
          }),
          T
        );
      }
      let r;
      const n = new U();
      for (const s of this._def.checks)
        s.kind === "int"
          ? I.isInteger(e.data) ||
            ((r = this._getOrReturnCtx(e, r)),
            y(r, {
              code: h.invalid_type,
              expected: "integer",
              received: "float",
              message: s.message,
            }),
            n.dirty())
          : s.kind === "min"
          ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
            ((r = this._getOrReturnCtx(e, r)),
            y(r, {
              code: h.too_small,
              minimum: s.value,
              type: "number",
              inclusive: s.inclusive,
              exact: !1,
              message: s.message,
            }),
            n.dirty())
          : s.kind === "max"
          ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
            ((r = this._getOrReturnCtx(e, r)),
            y(r, {
              code: h.too_big,
              maximum: s.value,
              type: "number",
              inclusive: s.inclusive,
              exact: !1,
              message: s.message,
            }),
            n.dirty())
          : s.kind === "multipleOf"
          ? Xa(e.data, s.value) !== 0 &&
            ((r = this._getOrReturnCtx(e, r)),
            y(r, {
              code: h.not_multiple_of,
              multipleOf: s.value,
              message: s.message,
            }),
            n.dirty())
          : s.kind === "finite"
          ? Number.isFinite(e.data) ||
            ((r = this._getOrReturnCtx(e, r)),
            y(r, { code: h.not_finite, message: s.message }),
            n.dirty())
          : I.assertNever(s);
      return { status: n.value, value: e.data };
    }
    gte(e, t) {
      return this.setLimit("min", e, !0, w.toString(t));
    }
    gt(e, t) {
      return this.setLimit("min", e, !1, w.toString(t));
    }
    lte(e, t) {
      return this.setLimit("max", e, !0, w.toString(t));
    }
    lt(e, t) {
      return this.setLimit("max", e, !1, w.toString(t));
    }
    setLimit(e, t, r, n) {
      return new ge({
        ...this._def,
        checks: [
          ...this._def.checks,
          { kind: e, value: t, inclusive: r, message: w.toString(n) },
        ],
      });
    }
    _addCheck(e) {
      return new ge({ ...this._def, checks: [...this._def.checks, e] });
    }
    int(e) {
      return this._addCheck({ kind: "int", message: w.toString(e) });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !1,
        message: w.toString(e),
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !1,
        message: w.toString(e),
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !0,
        message: w.toString(e),
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !0,
        message: w.toString(e),
      });
    }
    multipleOf(e, t) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: w.toString(t),
      });
    }
    finite(e) {
      return this._addCheck({ kind: "finite", message: w.toString(e) });
    }
    safe(e) {
      return this._addCheck({
        kind: "min",
        inclusive: !0,
        value: Number.MIN_SAFE_INTEGER,
        message: w.toString(e),
      })._addCheck({
        kind: "max",
        inclusive: !0,
        value: Number.MAX_SAFE_INTEGER,
        message: w.toString(e),
      });
    }
    get minValue() {
      let e = null;
      for (const t of this._def.checks)
        t.kind === "min" && (e === null || t.value > e) && (e = t.value);
      return e;
    }
    get maxValue() {
      let e = null;
      for (const t of this._def.checks)
        t.kind === "max" && (e === null || t.value < e) && (e = t.value);
      return e;
    }
    get isInt() {
      return !!this._def.checks.find(
        (e) =>
          e.kind === "int" || (e.kind === "multipleOf" && I.isInteger(e.value))
      );
    }
    get isFinite() {
      let e = null,
        t = null;
      for (const r of this._def.checks) {
        if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
          return !0;
        r.kind === "min"
          ? (t === null || r.value > t) && (t = r.value)
          : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      }
      return Number.isFinite(t) && Number.isFinite(e);
    }
  }
  ge.create = (a) =>
    new ge({
      checks: [],
      typeName: k.ZodNumber,
      coerce: (a == null ? void 0 : a.coerce) || !1,
      ...E(a),
    });
  class ye extends R {
    constructor() {
      super(...arguments), (this.min = this.gte), (this.max = this.lte);
    }
    _parse(e) {
      if (this._def.coerce)
        try {
          e.data = BigInt(e.data);
        } catch {
          return this._getInvalidInput(e);
        }
      if (this._getType(e) !== v.bigint) return this._getInvalidInput(e);
      let r;
      const n = new U();
      for (const s of this._def.checks)
        s.kind === "min"
          ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
            ((r = this._getOrReturnCtx(e, r)),
            y(r, {
              code: h.too_small,
              type: "bigint",
              minimum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            n.dirty())
          : s.kind === "max"
          ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
            ((r = this._getOrReturnCtx(e, r)),
            y(r, {
              code: h.too_big,
              type: "bigint",
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            n.dirty())
          : s.kind === "multipleOf"
          ? e.data % s.value !== BigInt(0) &&
            ((r = this._getOrReturnCtx(e, r)),
            y(r, {
              code: h.not_multiple_of,
              multipleOf: s.value,
              message: s.message,
            }),
            n.dirty())
          : I.assertNever(s);
      return { status: n.value, value: e.data };
    }
    _getInvalidInput(e) {
      const t = this._getOrReturnCtx(e);
      return (
        y(t, {
          code: h.invalid_type,
          expected: v.bigint,
          received: t.parsedType,
        }),
        T
      );
    }
    gte(e, t) {
      return this.setLimit("min", e, !0, w.toString(t));
    }
    gt(e, t) {
      return this.setLimit("min", e, !1, w.toString(t));
    }
    lte(e, t) {
      return this.setLimit("max", e, !0, w.toString(t));
    }
    lt(e, t) {
      return this.setLimit("max", e, !1, w.toString(t));
    }
    setLimit(e, t, r, n) {
      return new ye({
        ...this._def,
        checks: [
          ...this._def.checks,
          { kind: e, value: t, inclusive: r, message: w.toString(n) },
        ],
      });
    }
    _addCheck(e) {
      return new ye({ ...this._def, checks: [...this._def.checks, e] });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !1,
        message: w.toString(e),
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !1,
        message: w.toString(e),
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !0,
        message: w.toString(e),
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !0,
        message: w.toString(e),
      });
    }
    multipleOf(e, t) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: w.toString(t),
      });
    }
    get minValue() {
      let e = null;
      for (const t of this._def.checks)
        t.kind === "min" && (e === null || t.value > e) && (e = t.value);
      return e;
    }
    get maxValue() {
      let e = null;
      for (const t of this._def.checks)
        t.kind === "max" && (e === null || t.value < e) && (e = t.value);
      return e;
    }
  }
  ye.create = (a) => {
    var e;
    return new ye({
      checks: [],
      typeName: k.ZodBigInt,
      coerce:
        (e = a == null ? void 0 : a.coerce) !== null && e !== void 0 ? e : !1,
      ...E(a),
    });
  };
  class Je extends R {
    _parse(e) {
      if (
        (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== v.boolean)
      ) {
        const r = this._getOrReturnCtx(e);
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.boolean,
            received: r.parsedType,
          }),
          T
        );
      }
      return H(e.data);
    }
  }
  Je.create = (a) =>
    new Je({
      typeName: k.ZodBoolean,
      coerce: (a == null ? void 0 : a.coerce) || !1,
      ...E(a),
    });
  class Ee extends R {
    _parse(e) {
      if (
        (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== v.date)
      ) {
        const s = this._getOrReturnCtx(e);
        return (
          y(s, {
            code: h.invalid_type,
            expected: v.date,
            received: s.parsedType,
          }),
          T
        );
      }
      if (isNaN(e.data.getTime())) {
        const s = this._getOrReturnCtx(e);
        return y(s, { code: h.invalid_date }), T;
      }
      const r = new U();
      let n;
      for (const s of this._def.checks)
        s.kind === "min"
          ? e.data.getTime() < s.value &&
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              code: h.too_small,
              message: s.message,
              inclusive: !0,
              exact: !1,
              minimum: s.value,
              type: "date",
            }),
            r.dirty())
          : s.kind === "max"
          ? e.data.getTime() > s.value &&
            ((n = this._getOrReturnCtx(e, n)),
            y(n, {
              code: h.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: "date",
            }),
            r.dirty())
          : I.assertNever(s);
      return { status: r.value, value: new Date(e.data.getTime()) };
    }
    _addCheck(e) {
      return new Ee({ ...this._def, checks: [...this._def.checks, e] });
    }
    min(e, t) {
      return this._addCheck({
        kind: "min",
        value: e.getTime(),
        message: w.toString(t),
      });
    }
    max(e, t) {
      return this._addCheck({
        kind: "max",
        value: e.getTime(),
        message: w.toString(t),
      });
    }
    get minDate() {
      let e = null;
      for (const t of this._def.checks)
        t.kind === "min" && (e === null || t.value > e) && (e = t.value);
      return e != null ? new Date(e) : null;
    }
    get maxDate() {
      let e = null;
      for (const t of this._def.checks)
        t.kind === "max" && (e === null || t.value < e) && (e = t.value);
      return e != null ? new Date(e) : null;
    }
  }
  Ee.create = (a) =>
    new Ee({
      checks: [],
      coerce: (a == null ? void 0 : a.coerce) || !1,
      typeName: k.ZodDate,
      ...E(a),
    });
  class yt extends R {
    _parse(e) {
      if (this._getType(e) !== v.symbol) {
        const r = this._getOrReturnCtx(e);
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.symbol,
            received: r.parsedType,
          }),
          T
        );
      }
      return H(e.data);
    }
  }
  yt.create = (a) => new yt({ typeName: k.ZodSymbol, ...E(a) });
  class Xe extends R {
    _parse(e) {
      if (this._getType(e) !== v.undefined) {
        const r = this._getOrReturnCtx(e);
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.undefined,
            received: r.parsedType,
          }),
          T
        );
      }
      return H(e.data);
    }
  }
  Xe.create = (a) => new Xe({ typeName: k.ZodUndefined, ...E(a) });
  class Qe extends R {
    _parse(e) {
      if (this._getType(e) !== v.null) {
        const r = this._getOrReturnCtx(e);
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.null,
            received: r.parsedType,
          }),
          T
        );
      }
      return H(e.data);
    }
  }
  Qe.create = (a) => new Qe({ typeName: k.ZodNull, ...E(a) });
  class Le extends R {
    constructor() {
      super(...arguments), (this._any = !0);
    }
    _parse(e) {
      return H(e.data);
    }
  }
  Le.create = (a) => new Le({ typeName: k.ZodAny, ...E(a) });
  class Ce extends R {
    constructor() {
      super(...arguments), (this._unknown = !0);
    }
    _parse(e) {
      return H(e.data);
    }
  }
  Ce.create = (a) => new Ce({ typeName: k.ZodUnknown, ...E(a) });
  class he extends R {
    _parse(e) {
      const t = this._getOrReturnCtx(e);
      return (
        y(t, {
          code: h.invalid_type,
          expected: v.never,
          received: t.parsedType,
        }),
        T
      );
    }
  }
  he.create = (a) => new he({ typeName: k.ZodNever, ...E(a) });
  class vt extends R {
    _parse(e) {
      if (this._getType(e) !== v.undefined) {
        const r = this._getOrReturnCtx(e);
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.void,
            received: r.parsedType,
          }),
          T
        );
      }
      return H(e.data);
    }
  }
  vt.create = (a) => new vt({ typeName: k.ZodVoid, ...E(a) });
  class ee extends R {
    _parse(e) {
      const { ctx: t, status: r } = this._processInputParams(e),
        n = this._def;
      if (t.parsedType !== v.array)
        return (
          y(t, {
            code: h.invalid_type,
            expected: v.array,
            received: t.parsedType,
          }),
          T
        );
      if (n.exactLength !== null) {
        const l = t.data.length > n.exactLength.value,
          d = t.data.length < n.exactLength.value;
        (l || d) &&
          (y(t, {
            code: l ? h.too_big : h.too_small,
            minimum: d ? n.exactLength.value : void 0,
            maximum: l ? n.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: n.exactLength.message,
          }),
          r.dirty());
      }
      if (
        (n.minLength !== null &&
          t.data.length < n.minLength.value &&
          (y(t, {
            code: h.too_small,
            minimum: n.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: n.minLength.message,
          }),
          r.dirty()),
        n.maxLength !== null &&
          t.data.length > n.maxLength.value &&
          (y(t, {
            code: h.too_big,
            maximum: n.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: n.maxLength.message,
          }),
          r.dirty()),
        t.common.async)
      )
        return Promise.all(
          [...t.data].map((l, d) => n.type._parseAsync(new le(t, l, t.path, d)))
        ).then((l) => U.mergeArray(r, l));
      const s = [...t.data].map((l, d) =>
        n.type._parseSync(new le(t, l, t.path, d))
      );
      return U.mergeArray(r, s);
    }
    get element() {
      return this._def.type;
    }
    min(e, t) {
      return new ee({
        ...this._def,
        minLength: { value: e, message: w.toString(t) },
      });
    }
    max(e, t) {
      return new ee({
        ...this._def,
        maxLength: { value: e, message: w.toString(t) },
      });
    }
    length(e, t) {
      return new ee({
        ...this._def,
        exactLength: { value: e, message: w.toString(t) },
      });
    }
    nonempty(e) {
      return this.min(1, e);
    }
  }
  ee.create = (a, e) =>
    new ee({
      type: a,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: k.ZodArray,
      ...E(e),
    });
  function $e(a) {
    if (a instanceof $) {
      const e = {};
      for (const t in a.shape) {
        const r = a.shape[t];
        e[t] = ce.create($e(r));
      }
      return new $({ ...a._def, shape: () => e });
    } else
      return a instanceof ee
        ? new ee({ ...a._def, type: $e(a.element) })
        : a instanceof ce
        ? ce.create($e(a.unwrap()))
        : a instanceof _e
        ? _e.create($e(a.unwrap()))
        : a instanceof de
        ? de.create(a.items.map((e) => $e(e)))
        : a;
  }
  class $ extends R {
    constructor() {
      super(...arguments),
        (this._cached = null),
        (this.nonstrict = this.passthrough),
        (this.augment = this.extend);
    }
    _getCached() {
      if (this._cached !== null) return this._cached;
      const e = this._def.shape(),
        t = I.objectKeys(e);
      return (this._cached = { shape: e, keys: t });
    }
    _parse(e) {
      if (this._getType(e) !== v.object) {
        const i = this._getOrReturnCtx(e);
        return (
          y(i, {
            code: h.invalid_type,
            expected: v.object,
            received: i.parsedType,
          }),
          T
        );
      }
      const { status: r, ctx: n } = this._processInputParams(e),
        { shape: s, keys: l } = this._getCached(),
        d = [];
      if (
        !(this._def.catchall instanceof he && this._def.unknownKeys === "strip")
      )
        for (const i in n.data) l.includes(i) || d.push(i);
      const c = [];
      for (const i of l) {
        const p = s[i],
          M = n.data[i];
        c.push({
          key: { status: "valid", value: i },
          value: p._parse(new le(n, M, n.path, i)),
          alwaysSet: i in n.data,
        });
      }
      if (this._def.catchall instanceof he) {
        const i = this._def.unknownKeys;
        if (i === "passthrough")
          for (const p of d)
            c.push({
              key: { status: "valid", value: p },
              value: { status: "valid", value: n.data[p] },
            });
        else if (i === "strict")
          d.length > 0 &&
            (y(n, { code: h.unrecognized_keys, keys: d }), r.dirty());
        else if (i !== "strip")
          throw new Error(
            "Internal ZodObject error: invalid unknownKeys value."
          );
      } else {
        const i = this._def.catchall;
        for (const p of d) {
          const M = n.data[p];
          c.push({
            key: { status: "valid", value: p },
            value: i._parse(new le(n, M, n.path, p)),
            alwaysSet: p in n.data,
          });
        }
      }
      return n.common.async
        ? Promise.resolve()
            .then(async () => {
              const i = [];
              for (const p of c) {
                const M = await p.key,
                  q = await p.value;
                i.push({ key: M, value: q, alwaysSet: p.alwaysSet });
              }
              return i;
            })
            .then((i) => U.mergeObjectSync(r, i))
        : U.mergeObjectSync(r, c);
    }
    get shape() {
      return this._def.shape();
    }
    strict(e) {
      return (
        w.errToObj,
        new $({
          ...this._def,
          unknownKeys: "strict",
          ...(e !== void 0
            ? {
                errorMap: (t, r) => {
                  var n, s, l, d;
                  const c =
                    (l =
                      (s = (n = this._def).errorMap) === null || s === void 0
                        ? void 0
                        : s.call(n, t, r).message) !== null && l !== void 0
                      ? l
                      : r.defaultError;
                  return t.code === "unrecognized_keys"
                    ? {
                        message:
                          (d = w.errToObj(e).message) !== null && d !== void 0
                            ? d
                            : c,
                      }
                    : { message: c };
                },
              }
            : {}),
        })
      );
    }
    strip() {
      return new $({ ...this._def, unknownKeys: "strip" });
    }
    passthrough() {
      return new $({ ...this._def, unknownKeys: "passthrough" });
    }
    extend(e) {
      return new $({
        ...this._def,
        shape: () => ({ ...this._def.shape(), ...e }),
      });
    }
    merge(e) {
      return new $({
        unknownKeys: e._def.unknownKeys,
        catchall: e._def.catchall,
        shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
        typeName: k.ZodObject,
      });
    }
    setKey(e, t) {
      return this.augment({ [e]: t });
    }
    catchall(e) {
      return new $({ ...this._def, catchall: e });
    }
    pick(e) {
      const t = {};
      return (
        I.objectKeys(e).forEach((r) => {
          e[r] && this.shape[r] && (t[r] = this.shape[r]);
        }),
        new $({ ...this._def, shape: () => t })
      );
    }
    omit(e) {
      const t = {};
      return (
        I.objectKeys(this.shape).forEach((r) => {
          e[r] || (t[r] = this.shape[r]);
        }),
        new $({ ...this._def, shape: () => t })
      );
    }
    deepPartial() {
      return $e(this);
    }
    partial(e) {
      const t = {};
      return (
        I.objectKeys(this.shape).forEach((r) => {
          const n = this.shape[r];
          e && !e[r] ? (t[r] = n) : (t[r] = n.optional());
        }),
        new $({ ...this._def, shape: () => t })
      );
    }
    required(e) {
      const t = {};
      return (
        I.objectKeys(this.shape).forEach((r) => {
          if (e && !e[r]) t[r] = this.shape[r];
          else {
            let s = this.shape[r];
            for (; s instanceof ce; ) s = s._def.innerType;
            t[r] = s;
          }
        }),
        new $({ ...this._def, shape: () => t })
      );
    }
    keyof() {
      return qt(I.objectKeys(this.shape));
    }
  }
  ($.create = (a, e) =>
    new $({
      shape: () => a,
      unknownKeys: "strip",
      catchall: he.create(),
      typeName: k.ZodObject,
      ...E(e),
    })),
    ($.strictCreate = (a, e) =>
      new $({
        shape: () => a,
        unknownKeys: "strict",
        catchall: he.create(),
        typeName: k.ZodObject,
        ...E(e),
      })),
    ($.lazycreate = (a, e) =>
      new $({
        shape: a,
        unknownKeys: "strip",
        catchall: he.create(),
        typeName: k.ZodObject,
        ...E(e),
      }));
  class et extends R {
    _parse(e) {
      const { ctx: t } = this._processInputParams(e),
        r = this._def.options;
      function n(s) {
        for (const d of s) if (d.result.status === "valid") return d.result;
        for (const d of s)
          if (d.result.status === "dirty")
            return t.common.issues.push(...d.ctx.common.issues), d.result;
        const l = s.map((d) => new G(d.ctx.common.issues));
        return y(t, { code: h.invalid_union, unionErrors: l }), T;
      }
      if (t.common.async)
        return Promise.all(
          r.map(async (s) => {
            const l = {
              ...t,
              common: { ...t.common, issues: [] },
              parent: null,
            };
            return {
              result: await s._parseAsync({
                data: t.data,
                path: t.path,
                parent: l,
              }),
              ctx: l,
            };
          })
        ).then(n);
      {
        let s;
        const l = [];
        for (const c of r) {
          const i = { ...t, common: { ...t.common, issues: [] }, parent: null },
            p = c._parseSync({ data: t.data, path: t.path, parent: i });
          if (p.status === "valid") return p;
          p.status === "dirty" && !s && (s = { result: p, ctx: i }),
            i.common.issues.length && l.push(i.common.issues);
        }
        if (s) return t.common.issues.push(...s.ctx.common.issues), s.result;
        const d = l.map((c) => new G(c));
        return y(t, { code: h.invalid_union, unionErrors: d }), T;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  et.create = (a, e) => new et({ options: a, typeName: k.ZodUnion, ...E(e) });
  const pe = (a) =>
    a instanceof rt
      ? pe(a.schema)
      : a instanceof te
      ? pe(a.innerType())
      : a instanceof nt
      ? [a.value]
      : a instanceof ve
      ? a.options
      : a instanceof st
      ? I.objectValues(a.enum)
      : a instanceof it
      ? pe(a._def.innerType)
      : a instanceof Xe
      ? [void 0]
      : a instanceof Qe
      ? [null]
      : a instanceof ce
      ? [void 0, ...pe(a.unwrap())]
      : a instanceof _e
      ? [null, ...pe(a.unwrap())]
      : a instanceof Ot || a instanceof dt
      ? pe(a.unwrap())
      : a instanceof ot
      ? pe(a._def.innerType)
      : [];
  class _t extends R {
    _parse(e) {
      const { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== v.object)
        return (
          y(t, {
            code: h.invalid_type,
            expected: v.object,
            received: t.parsedType,
          }),
          T
        );
      const r = this.discriminator,
        n = t.data[r],
        s = this.optionsMap.get(n);
      return s
        ? t.common.async
          ? s._parseAsync({ data: t.data, path: t.path, parent: t })
          : s._parseSync({ data: t.data, path: t.path, parent: t })
        : (y(t, {
            code: h.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r],
          }),
          T);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, t, r) {
      const n = new Map();
      for (const s of t) {
        const l = pe(s.shape[e]);
        if (!l.length)
          throw new Error(
            `A discriminator value for key \`${e}\` could not be extracted from all schema options`
          );
        for (const d of l) {
          if (n.has(d))
            throw new Error(
              `Discriminator property ${String(e)} has duplicate value ${String(
                d
              )}`
            );
          n.set(d, s);
        }
      }
      return new _t({
        typeName: k.ZodDiscriminatedUnion,
        discriminator: e,
        options: t,
        optionsMap: n,
        ...E(r),
      });
    }
  }
  function At(a, e) {
    const t = fe(a),
      r = fe(e);
    if (a === e) return { valid: !0, data: a };
    if (t === v.object && r === v.object) {
      const n = I.objectKeys(e),
        s = I.objectKeys(a).filter((d) => n.indexOf(d) !== -1),
        l = { ...a, ...e };
      for (const d of s) {
        const c = At(a[d], e[d]);
        if (!c.valid) return { valid: !1 };
        l[d] = c.data;
      }
      return { valid: !0, data: l };
    } else if (t === v.array && r === v.array) {
      if (a.length !== e.length) return { valid: !1 };
      const n = [];
      for (let s = 0; s < a.length; s++) {
        const l = a[s],
          d = e[s],
          c = At(l, d);
        if (!c.valid) return { valid: !1 };
        n.push(c.data);
      }
      return { valid: !0, data: n };
    } else
      return t === v.date && r === v.date && +a == +e
        ? { valid: !0, data: a }
        : { valid: !1 };
  }
  class tt extends R {
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e),
        n = (s, l) => {
          if (Ct(s) || Ct(l)) return T;
          const d = At(s.value, l.value);
          return d.valid
            ? ((Nt(s) || Nt(l)) && t.dirty(),
              { status: t.value, value: d.data })
            : (y(r, { code: h.invalid_intersection_types }), T);
        };
      return r.common.async
        ? Promise.all([
            this._def.left._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
            this._def.right._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
          ]).then(([s, l]) => n(s, l))
        : n(
            this._def.left._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
            this._def.right._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            })
          );
    }
  }
  tt.create = (a, e, t) =>
    new tt({ left: a, right: e, typeName: k.ZodIntersection, ...E(t) });
  class de extends R {
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== v.array)
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.array,
            received: r.parsedType,
          }),
          T
        );
      if (r.data.length < this._def.items.length)
        return (
          y(r, {
            code: h.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array",
          }),
          T
        );
      !this._def.rest &&
        r.data.length > this._def.items.length &&
        (y(r, {
          code: h.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        t.dirty());
      const s = [...r.data]
        .map((l, d) => {
          const c = this._def.items[d] || this._def.rest;
          return c ? c._parse(new le(r, l, r.path, d)) : null;
        })
        .filter((l) => !!l);
      return r.common.async
        ? Promise.all(s).then((l) => U.mergeArray(t, l))
        : U.mergeArray(t, s);
    }
    get items() {
      return this._def.items;
    }
    rest(e) {
      return new de({ ...this._def, rest: e });
    }
  }
  de.create = (a, e) => {
    if (!Array.isArray(a))
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new de({ items: a, typeName: k.ZodTuple, rest: null, ...E(e) });
  };
  class at extends R {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== v.object)
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.object,
            received: r.parsedType,
          }),
          T
        );
      const n = [],
        s = this._def.keyType,
        l = this._def.valueType;
      for (const d in r.data)
        n.push({
          key: s._parse(new le(r, d, r.path, d)),
          value: l._parse(new le(r, r.data[d], r.path, d)),
          alwaysSet: d in r.data,
        });
      return r.common.async
        ? U.mergeObjectAsync(t, n)
        : U.mergeObjectSync(t, n);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, t, r) {
      return t instanceof R
        ? new at({ keyType: e, valueType: t, typeName: k.ZodRecord, ...E(r) })
        : new at({
            keyType: Q.create(),
            valueType: e,
            typeName: k.ZodRecord,
            ...E(t),
          });
    }
  }
  class bt extends R {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== v.map)
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.map,
            received: r.parsedType,
          }),
          T
        );
      const n = this._def.keyType,
        s = this._def.valueType,
        l = [...r.data.entries()].map(([d, c], i) => ({
          key: n._parse(new le(r, d, r.path, [i, "key"])),
          value: s._parse(new le(r, c, r.path, [i, "value"])),
        }));
      if (r.common.async) {
        const d = new Map();
        return Promise.resolve().then(async () => {
          for (const c of l) {
            const i = await c.key,
              p = await c.value;
            if (i.status === "aborted" || p.status === "aborted") return T;
            (i.status === "dirty" || p.status === "dirty") && t.dirty(),
              d.set(i.value, p.value);
          }
          return { status: t.value, value: d };
        });
      } else {
        const d = new Map();
        for (const c of l) {
          const i = c.key,
            p = c.value;
          if (i.status === "aborted" || p.status === "aborted") return T;
          (i.status === "dirty" || p.status === "dirty") && t.dirty(),
            d.set(i.value, p.value);
        }
        return { status: t.value, value: d };
      }
    }
  }
  bt.create = (a, e, t) =>
    new bt({ valueType: e, keyType: a, typeName: k.ZodMap, ...E(t) });
  class Ne extends R {
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== v.set)
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.set,
            received: r.parsedType,
          }),
          T
        );
      const n = this._def;
      n.minSize !== null &&
        r.data.size < n.minSize.value &&
        (y(r, {
          code: h.too_small,
          minimum: n.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: n.minSize.message,
        }),
        t.dirty()),
        n.maxSize !== null &&
          r.data.size > n.maxSize.value &&
          (y(r, {
            code: h.too_big,
            maximum: n.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: n.maxSize.message,
          }),
          t.dirty());
      const s = this._def.valueType;
      function l(c) {
        const i = new Set();
        for (const p of c) {
          if (p.status === "aborted") return T;
          p.status === "dirty" && t.dirty(), i.add(p.value);
        }
        return { status: t.value, value: i };
      }
      const d = [...r.data.values()].map((c, i) =>
        s._parse(new le(r, c, r.path, i))
      );
      return r.common.async ? Promise.all(d).then((c) => l(c)) : l(d);
    }
    min(e, t) {
      return new Ne({
        ...this._def,
        minSize: { value: e, message: w.toString(t) },
      });
    }
    max(e, t) {
      return new Ne({
        ...this._def,
        maxSize: { value: e, message: w.toString(t) },
      });
    }
    size(e, t) {
      return this.min(e, t).max(e, t);
    }
    nonempty(e) {
      return this.min(1, e);
    }
  }
  Ne.create = (a, e) =>
    new Ne({
      valueType: a,
      minSize: null,
      maxSize: null,
      typeName: k.ZodSet,
      ...E(e),
    });
  class Be extends R {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(e) {
      const { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== v.function)
        return (
          y(t, {
            code: h.invalid_type,
            expected: v.function,
            received: t.parsedType,
          }),
          T
        );
      function r(d, c) {
        return mt({
          data: d,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            pt(),
            Ze,
          ].filter((i) => !!i),
          issueData: { code: h.invalid_arguments, argumentsError: c },
        });
      }
      function n(d, c) {
        return mt({
          data: d,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            pt(),
            Ze,
          ].filter((i) => !!i),
          issueData: { code: h.invalid_return_type, returnTypeError: c },
        });
      }
      const s = { errorMap: t.common.contextualErrorMap },
        l = t.data;
      if (this._def.returns instanceof ze) {
        const d = this;
        return H(async function (...c) {
          const i = new G([]),
            p = await d._def.args.parseAsync(c, s).catch((u) => {
              throw (i.addIssue(r(c, u)), i);
            }),
            M = await Reflect.apply(l, this, p);
          return await d._def.returns._def.type.parseAsync(M, s).catch((u) => {
            throw (i.addIssue(n(M, u)), i);
          });
        });
      } else {
        const d = this;
        return H(function (...c) {
          const i = d._def.args.safeParse(c, s);
          if (!i.success) throw new G([r(c, i.error)]);
          const p = Reflect.apply(l, this, i.data),
            M = d._def.returns.safeParse(p, s);
          if (!M.success) throw new G([n(p, M.error)]);
          return M.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new Be({ ...this._def, args: de.create(e).rest(Ce.create()) });
    }
    returns(e) {
      return new Be({ ...this._def, returns: e });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, t, r) {
      return new Be({
        args: e || de.create([]).rest(Ce.create()),
        returns: t || Ce.create(),
        typeName: k.ZodFunction,
        ...E(r),
      });
    }
  }
  class rt extends R {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      const { ctx: t } = this._processInputParams(e);
      return this._def
        .getter()
        ._parse({ data: t.data, path: t.path, parent: t });
    }
  }
  rt.create = (a, e) => new rt({ getter: a, typeName: k.ZodLazy, ...E(e) });
  class nt extends R {
    _parse(e) {
      if (e.data !== this._def.value) {
        const t = this._getOrReturnCtx(e);
        return (
          y(t, {
            received: t.data,
            code: h.invalid_literal,
            expected: this._def.value,
          }),
          T
        );
      }
      return { status: "valid", value: e.data };
    }
    get value() {
      return this._def.value;
    }
  }
  nt.create = (a, e) => new nt({ value: a, typeName: k.ZodLiteral, ...E(e) });
  function qt(a, e) {
    return new ve({ values: a, typeName: k.ZodEnum, ...E(e) });
  }
  class ve extends R {
    constructor() {
      super(...arguments), We.set(this, void 0);
    }
    _parse(e) {
      if (typeof e.data != "string") {
        const t = this._getOrReturnCtx(e),
          r = this._def.values;
        return (
          y(t, {
            expected: I.joinValues(r),
            received: t.parsedType,
            code: h.invalid_type,
          }),
          T
        );
      }
      if (
        (gt(this, We) || Vt(this, We, new Set(this._def.values)),
        !gt(this, We).has(e.data))
      ) {
        const t = this._getOrReturnCtx(e),
          r = this._def.values;
        return (
          y(t, { received: t.data, code: h.invalid_enum_value, options: r }), T
        );
      }
      return H(e.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const e = {};
      for (const t of this._def.values) e[t] = t;
      return e;
    }
    get Values() {
      const e = {};
      for (const t of this._def.values) e[t] = t;
      return e;
    }
    get Enum() {
      const e = {};
      for (const t of this._def.values) e[t] = t;
      return e;
    }
    extract(e, t = this._def) {
      return ve.create(e, { ...this._def, ...t });
    }
    exclude(e, t = this._def) {
      return ve.create(
        this.options.filter((r) => !e.includes(r)),
        { ...this._def, ...t }
      );
    }
  }
  (We = new WeakMap()), (ve.create = qt);
  class st extends R {
    constructor() {
      super(...arguments), Ke.set(this, void 0);
    }
    _parse(e) {
      const t = I.getValidEnumValues(this._def.values),
        r = this._getOrReturnCtx(e);
      if (r.parsedType !== v.string && r.parsedType !== v.number) {
        const n = I.objectValues(t);
        return (
          y(r, {
            expected: I.joinValues(n),
            received: r.parsedType,
            code: h.invalid_type,
          }),
          T
        );
      }
      if (
        (gt(this, Ke) ||
          Vt(this, Ke, new Set(I.getValidEnumValues(this._def.values))),
        !gt(this, Ke).has(e.data))
      ) {
        const n = I.objectValues(t);
        return (
          y(r, { received: r.data, code: h.invalid_enum_value, options: n }), T
        );
      }
      return H(e.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  (Ke = new WeakMap()),
    (st.create = (a, e) =>
      new st({ values: a, typeName: k.ZodNativeEnum, ...E(e) }));
  class ze extends R {
    unwrap() {
      return this._def.type;
    }
    _parse(e) {
      const { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== v.promise && t.common.async === !1)
        return (
          y(t, {
            code: h.invalid_type,
            expected: v.promise,
            received: t.parsedType,
          }),
          T
        );
      const r = t.parsedType === v.promise ? t.data : Promise.resolve(t.data);
      return H(
        r.then((n) =>
          this._def.type.parseAsync(n, {
            path: t.path,
            errorMap: t.common.contextualErrorMap,
          })
        )
      );
    }
  }
  ze.create = (a, e) => new ze({ type: a, typeName: k.ZodPromise, ...E(e) });
  class te extends R {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === k.ZodEffects
        ? this._def.schema.sourceType()
        : this._def.schema;
    }
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e),
        n = this._def.effect || null,
        s = {
          addIssue: (l) => {
            y(r, l), l.fatal ? t.abort() : t.dirty();
          },
          get path() {
            return r.path;
          },
        };
      if (((s.addIssue = s.addIssue.bind(s)), n.type === "preprocess")) {
        const l = n.transform(r.data, s);
        if (r.common.async)
          return Promise.resolve(l).then(async (d) => {
            if (t.value === "aborted") return T;
            const c = await this._def.schema._parseAsync({
              data: d,
              path: r.path,
              parent: r,
            });
            return c.status === "aborted"
              ? T
              : c.status === "dirty" || t.value === "dirty"
              ? De(c.value)
              : c;
          });
        {
          if (t.value === "aborted") return T;
          const d = this._def.schema._parseSync({
            data: l,
            path: r.path,
            parent: r,
          });
          return d.status === "aborted"
            ? T
            : d.status === "dirty" || t.value === "dirty"
            ? De(d.value)
            : d;
        }
      }
      if (n.type === "refinement") {
        const l = (d) => {
          const c = n.refinement(d, s);
          if (r.common.async) return Promise.resolve(c);
          if (c instanceof Promise)
            throw new Error(
              "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
            );
          return d;
        };
        if (r.common.async === !1) {
          const d = this._def.schema._parseSync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          return d.status === "aborted"
            ? T
            : (d.status === "dirty" && t.dirty(),
              l(d.value),
              { status: t.value, value: d.value });
        } else
          return this._def.schema
            ._parseAsync({ data: r.data, path: r.path, parent: r })
            .then((d) =>
              d.status === "aborted"
                ? T
                : (d.status === "dirty" && t.dirty(),
                  l(d.value).then(() => ({ status: t.value, value: d.value })))
            );
      }
      if (n.type === "transform")
        if (r.common.async === !1) {
          const l = this._def.schema._parseSync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          if (!Se(l)) return l;
          const d = n.transform(l.value, s);
          if (d instanceof Promise)
            throw new Error(
              "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
            );
          return { status: t.value, value: d };
        } else
          return this._def.schema
            ._parseAsync({ data: r.data, path: r.path, parent: r })
            .then((l) =>
              Se(l)
                ? Promise.resolve(n.transform(l.value, s)).then((d) => ({
                    status: t.value,
                    value: d,
                  }))
                : l
            );
      I.assertNever(n);
    }
  }
  (te.create = (a, e, t) =>
    new te({ schema: a, typeName: k.ZodEffects, effect: e, ...E(t) })),
    (te.createWithPreprocess = (a, e, t) =>
      new te({
        schema: e,
        effect: { type: "preprocess", transform: a },
        typeName: k.ZodEffects,
        ...E(t),
      }));
  class ce extends R {
    _parse(e) {
      return this._getType(e) === v.undefined
        ? H(void 0)
        : this._def.innerType._parse(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ce.create = (a, e) =>
    new ce({ innerType: a, typeName: k.ZodOptional, ...E(e) });
  class _e extends R {
    _parse(e) {
      return this._getType(e) === v.null
        ? H(null)
        : this._def.innerType._parse(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  _e.create = (a, e) =>
    new _e({ innerType: a, typeName: k.ZodNullable, ...E(e) });
  class it extends R {
    _parse(e) {
      const { ctx: t } = this._processInputParams(e);
      let r = t.data;
      return (
        t.parsedType === v.undefined && (r = this._def.defaultValue()),
        this._def.innerType._parse({ data: r, path: t.path, parent: t })
      );
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  it.create = (a, e) =>
    new it({
      innerType: a,
      typeName: k.ZodDefault,
      defaultValue:
        typeof e.default == "function" ? e.default : () => e.default,
      ...E(e),
    });
  class ot extends R {
    _parse(e) {
      const { ctx: t } = this._processInputParams(e),
        r = { ...t, common: { ...t.common, issues: [] } },
        n = this._def.innerType._parse({
          data: r.data,
          path: r.path,
          parent: { ...r },
        });
      return qe(n)
        ? n.then((s) => ({
            status: "valid",
            value:
              s.status === "valid"
                ? s.value
                : this._def.catchValue({
                    get error() {
                      return new G(r.common.issues);
                    },
                    input: r.data,
                  }),
          }))
        : {
            status: "valid",
            value:
              n.status === "valid"
                ? n.value
                : this._def.catchValue({
                    get error() {
                      return new G(r.common.issues);
                    },
                    input: r.data,
                  }),
          };
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  ot.create = (a, e) =>
    new ot({
      innerType: a,
      typeName: k.ZodCatch,
      catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
      ...E(e),
    });
  class wt extends R {
    _parse(e) {
      if (this._getType(e) !== v.nan) {
        const r = this._getOrReturnCtx(e);
        return (
          y(r, {
            code: h.invalid_type,
            expected: v.nan,
            received: r.parsedType,
          }),
          T
        );
      }
      return { status: "valid", value: e.data };
    }
  }
  wt.create = (a) => new wt({ typeName: k.ZodNaN, ...E(a) });
  const Qa = Symbol("zod_brand");
  class Ot extends R {
    _parse(e) {
      const { ctx: t } = this._processInputParams(e),
        r = t.data;
      return this._def.type._parse({ data: r, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  }
  class lt extends R {
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e);
      if (r.common.async)
        return (async () => {
          const s = await this._def.in._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          return s.status === "aborted"
            ? T
            : s.status === "dirty"
            ? (t.dirty(), De(s.value))
            : this._def.out._parseAsync({
                data: s.value,
                path: r.path,
                parent: r,
              });
        })();
      {
        const n = this._def.in._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return n.status === "aborted"
          ? T
          : n.status === "dirty"
          ? (t.dirty(), { status: "dirty", value: n.value })
          : this._def.out._parseSync({
              data: n.value,
              path: r.path,
              parent: r,
            });
      }
    }
    static create(e, t) {
      return new lt({ in: e, out: t, typeName: k.ZodPipeline });
    }
  }
  class dt extends R {
    _parse(e) {
      const t = this._def.innerType._parse(e),
        r = (n) => (Se(n) && (n.value = Object.freeze(n.value)), n);
      return qe(t) ? t.then((n) => r(n)) : r(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  dt.create = (a, e) =>
    new dt({ innerType: a, typeName: k.ZodReadonly, ...E(e) });
  function Wt(a, e) {
    const t =
      typeof a == "function" ? a(e) : typeof a == "string" ? { message: a } : a;
    return typeof t == "string" ? { message: t } : t;
  }
  function Kt(a, e = {}, t) {
    return a
      ? Le.create().superRefine((r, n) => {
          var s, l;
          const d = a(r);
          if (d instanceof Promise)
            return d.then((c) => {
              var i, p;
              if (!c) {
                const M = Wt(e, r),
                  q =
                    (p = (i = M.fatal) !== null && i !== void 0 ? i : t) !==
                      null && p !== void 0
                      ? p
                      : !0;
                n.addIssue({ code: "custom", ...M, fatal: q });
              }
            });
          if (!d) {
            const c = Wt(e, r),
              i =
                (l = (s = c.fatal) !== null && s !== void 0 ? s : t) !== null &&
                l !== void 0
                  ? l
                  : !0;
            n.addIssue({ code: "custom", ...c, fatal: i });
          }
        })
      : Le.create();
  }
  const er = { object: $.lazycreate };
  var k;
  (function (a) {
    (a.ZodString = "ZodString"),
      (a.ZodNumber = "ZodNumber"),
      (a.ZodNaN = "ZodNaN"),
      (a.ZodBigInt = "ZodBigInt"),
      (a.ZodBoolean = "ZodBoolean"),
      (a.ZodDate = "ZodDate"),
      (a.ZodSymbol = "ZodSymbol"),
      (a.ZodUndefined = "ZodUndefined"),
      (a.ZodNull = "ZodNull"),
      (a.ZodAny = "ZodAny"),
      (a.ZodUnknown = "ZodUnknown"),
      (a.ZodNever = "ZodNever"),
      (a.ZodVoid = "ZodVoid"),
      (a.ZodArray = "ZodArray"),
      (a.ZodObject = "ZodObject"),
      (a.ZodUnion = "ZodUnion"),
      (a.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
      (a.ZodIntersection = "ZodIntersection"),
      (a.ZodTuple = "ZodTuple"),
      (a.ZodRecord = "ZodRecord"),
      (a.ZodMap = "ZodMap"),
      (a.ZodSet = "ZodSet"),
      (a.ZodFunction = "ZodFunction"),
      (a.ZodLazy = "ZodLazy"),
      (a.ZodLiteral = "ZodLiteral"),
      (a.ZodEnum = "ZodEnum"),
      (a.ZodEffects = "ZodEffects"),
      (a.ZodNativeEnum = "ZodNativeEnum"),
      (a.ZodOptional = "ZodOptional"),
      (a.ZodNullable = "ZodNullable"),
      (a.ZodDefault = "ZodDefault"),
      (a.ZodCatch = "ZodCatch"),
      (a.ZodPromise = "ZodPromise"),
      (a.ZodBranded = "ZodBranded"),
      (a.ZodPipeline = "ZodPipeline"),
      (a.ZodReadonly = "ZodReadonly");
  })(k || (k = {}));
  const tr = (a, e = { message: `Input not instance of ${a.name}` }) =>
      Kt((t) => t instanceof a, e),
    Jt = Q.create,
    Xt = ge.create,
    ar = wt.create,
    rr = ye.create,
    Qt = Je.create,
    nr = Ee.create,
    sr = yt.create,
    ir = Xe.create,
    or = Qe.create,
    lr = Le.create,
    dr = Ce.create,
    cr = he.create,
    ur = vt.create,
    fr = ee.create,
    hr = $.create,
    pr = $.strictCreate,
    mr = et.create,
    gr = _t.create,
    yr = tt.create,
    vr = de.create,
    _r = at.create,
    br = bt.create,
    wr = Ne.create,
    xr = Be.create,
    kr = rt.create,
    Tr = nt.create,
    Sr = ve.create,
    Er = st.create,
    Cr = ze.create,
    ea = te.create,
    Nr = ce.create,
    Rr = _e.create,
    Ar = te.createWithPreprocess,
    Or = lt.create;
  var f = Object.freeze({
    __proto__: null,
    defaultErrorMap: Ze,
    setErrorMap: Aa,
    getErrorMap: pt,
    makeIssue: mt,
    EMPTY_PATH: Oa,
    addIssueToContext: y,
    ParseStatus: U,
    INVALID: T,
    DIRTY: De,
    OK: H,
    isAborted: Ct,
    isDirty: Nt,
    isValid: Se,
    isAsync: qe,
    get util() {
      return I;
    },
    get objectUtil() {
      return Et;
    },
    ZodParsedType: v,
    getParsedType: fe,
    ZodType: R,
    datetimeRegex: Gt,
    ZodString: Q,
    ZodNumber: ge,
    ZodBigInt: ye,
    ZodBoolean: Je,
    ZodDate: Ee,
    ZodSymbol: yt,
    ZodUndefined: Xe,
    ZodNull: Qe,
    ZodAny: Le,
    ZodUnknown: Ce,
    ZodNever: he,
    ZodVoid: vt,
    ZodArray: ee,
    ZodObject: $,
    ZodUnion: et,
    ZodDiscriminatedUnion: _t,
    ZodIntersection: tt,
    ZodTuple: de,
    ZodRecord: at,
    ZodMap: bt,
    ZodSet: Ne,
    ZodFunction: Be,
    ZodLazy: rt,
    ZodLiteral: nt,
    ZodEnum: ve,
    ZodNativeEnum: st,
    ZodPromise: ze,
    ZodEffects: te,
    ZodTransformer: te,
    ZodOptional: ce,
    ZodNullable: _e,
    ZodDefault: it,
    ZodCatch: ot,
    ZodNaN: wt,
    BRAND: Qa,
    ZodBranded: Ot,
    ZodPipeline: lt,
    ZodReadonly: dt,
    custom: Kt,
    Schema: R,
    ZodSchema: R,
    late: er,
    get ZodFirstPartyTypeKind() {
      return k;
    },
    coerce: {
      string: (a) => Q.create({ ...a, coerce: !0 }),
      number: (a) => ge.create({ ...a, coerce: !0 }),
      boolean: (a) => Je.create({ ...a, coerce: !0 }),
      bigint: (a) => ye.create({ ...a, coerce: !0 }),
      date: (a) => Ee.create({ ...a, coerce: !0 }),
    },
    any: lr,
    array: fr,
    bigint: rr,
    boolean: Qt,
    date: nr,
    discriminatedUnion: gr,
    effect: ea,
    enum: Sr,
    function: xr,
    instanceof: tr,
    intersection: yr,
    lazy: kr,
    literal: Tr,
    map: br,
    nan: ar,
    nativeEnum: Er,
    never: cr,
    null: or,
    nullable: Rr,
    number: Xt,
    object: hr,
    oboolean: () => Qt().optional(),
    onumber: () => Xt().optional(),
    optional: Nr,
    ostring: () => Jt().optional(),
    pipeline: Or,
    preprocess: Ar,
    promise: Cr,
    record: _r,
    set: wr,
    strictObject: pr,
    string: Jt,
    symbol: sr,
    transformer: ea,
    tuple: vr,
    undefined: ir,
    union: mr,
    unknown: dr,
    void: ur,
    NEVER: T,
    ZodIssueCode: h,
    quotelessJson: Ra,
    ZodError: G,
  });
  const Ir = f.object({
      language: f.enum(["", ...Ta]),
      fluent: f.boolean(),
      proficiency: f.enum(["", ...Sa]),
    }),
    Mr = f.object({
      school: f.string(),
      degree: f.enum(["", ...ka]),
      fieldOfStudy: f.string(),
      startDate: f.string().optional(),
      currentlyAttending: f.boolean(),
      endDate: f.string().optional(),
      gpa: f.string().optional(),
    }),
    jr = f.object({
      jobTitle: f.string(),
      company: f.string(),
      location: f.string(),
      startDate: f.string(),
      currentlyWorkHere: f.boolean(),
      endDate: f.string().optional(),
      description: f.string(),
    }),
    Pr = f.object({
      line1: f.string(),
      line2: f.string().optional(),
      city: f.string(),
      state: f.string(),
      postalCode: f.string(),
      country: f.enum(["", ...Na]),
    }),
    Zr = f.object({
      phoneDeviceType: f.string(),
      phoneCountryCode: f.string(),
      phoneNumber: f.string(),
      email: f.string(),
    }),
    Dr = f.object({
      prefix: f.string().optional(),
      firstName: f.string(),
      middleName: f.string().optional(),
      lastName: f.string(),
      suffix: f.string().optional(),
      preferredName: f.boolean(),
      preferredFirstName: f.string().optional(),
      preferredMiddleName: f.string().optional(),
      preferredLastName: f.string().optional(),
    }),
    Lr = f.object({
      websites: f.array(f.string()),
      github: f.string().optional(),
      linkedin: f.string().optional(),
      twitter: f.string().optional(),
      personal: f.string().optional(),
    }),
    $r = f.object({
      resumeBase64: f.string(),
      fileName: f.string(),
      fileSize: f.number(),
      dateUploaded: f.string(),
    }),
    Br = f.object({
      eligibilityUS: f
        .union([f.boolean(), f.literal("undisclosed")])
        .optional(),
      sponsorship: f.union([f.boolean(), f.literal("undisclosed")]).optional(),
      disability: f.union([f.boolean(), f.literal("undisclosed")]).optional(),
      veteran: f.union([f.boolean(), f.literal("undisclosed")]).optional(),
      age: f.union([f.number(), f.literal("undisclosed")]).optional(),
      gender: f.enum(["", ...Ea]),
      ethnicity: f.enum(["", ...Ca]),
    }),
    zr = f.object({
      keywords: f
        .string()
        .trim()
        .toLowerCase()
        .min(1, "Keyword cannot be empty.")
        .transform((a) => a.replace(/[^\w\s]/g, ""))
        .array()
        .min(1),
      ignore: f.string().array().optional(),
      key: f.string(),
      appearances: f.coerce.number(),
      response: f.string().trim().min(1, "Response cannot be empty."),
      fromAutofill: f.boolean().default(!1),
      question: f.string().optional(),
    }),
    Ur = f.object({
      profileName: f.string().optional(),
      nameData: Dr,
      addressData: Pr,
      contactData: Zr,
      jobData: f.array(jr),
      educationData: f.array(Mr),
      languageData: f.array(Ir),
      resumeData: $r,
      websiteData: Lr,
      employmentData: Br,
      skillsData: f.array(f.string()).max(25).optional(),
      savedResponses: f.array(zr).optional(),
    });
  async function ta() {
    return new Promise((a, e) => {
      chrome.storage.local.get(["profile"], (t) => {
        try {
          a(Ur.parse(t.profile));
        } catch (r) {
          console.error("Error parsing profile:", r), e(r);
        }
      });
    });
  }
  const It = f.enum([
      "applied",
      "screen",
      "interview",
      "offer",
      "rejected",
      "archived",
    ]),
    Vr = f.object({
      jobTitle: f.string(),
      jobLink: f.string(),
      companyLink: f.string(),
      date: f.string(),
      status: It.default("applied"),
      profileName: f.string().optional(),
    }),
    Mt = f.array(Vr);
  f.array(It)
    .refine((a) => new Set(a).size === a.length)
    .refine((a) => Object.values(It.enum).every((e) => a.includes(e)));
  async function Hr() {
    return new Promise((a) => {
      chrome.storage.local.get(["appliedList"], (e) => {
        try {
          a(Mt.parse(e.appliedList));
        } catch (t) {
          console.error(t), a([]);
        }
      });
    });
  }
  async function aa(a, e, t) {
    const r = await Hr(),
      n = await ta(),
      s = new Date().toString();
    r.some(
      (d) =>
        d.jobTitle === a &&
        d.jobLink === e &&
        d.companyLink === t &&
        d.date.slice(0, 15) === s.slice(0, 15) &&
        d.profileName === (n == null ? void 0 : n.profileName)
    ) ||
      (r.unshift({
        jobTitle: a,
        jobLink: e,
        companyLink: t,
        date: new Date().toString(),
        status: "applied",
        profileName: n == null ? void 0 : n.profileName,
      }),
      await chrome.storage.local.set({ appliedList: r }));
  }
  function ra(a) {
    return a &&
      a.__esModule &&
      Object.prototype.hasOwnProperty.call(a, "default")
      ? a.default
      : a;
  }
  var jt = { exports: {} },
    N = {};
  var na;
  function Fr() {
    if (na) return N;
    na = 1;
    var a = Symbol.for("react.transitional.element"),
      e = Symbol.for("react.portal"),
      t = Symbol.for("react.fragment"),
      r = Symbol.for("react.strict_mode"),
      n = Symbol.for("react.profiler"),
      s = Symbol.for("react.consumer"),
      l = Symbol.for("react.context"),
      d = Symbol.for("react.forward_ref"),
      c = Symbol.for("react.suspense"),
      i = Symbol.for("react.memo"),
      p = Symbol.for("react.lazy"),
      M = Symbol.iterator;
    function q(o) {
      return o === null || typeof o != "object"
        ? null
        : ((o = (M && o[M]) || o["@@iterator"]),
          typeof o == "function" ? o : null);
    }
    var u = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Ue = Object.assign,
      D = {};
    function z(o, m, _) {
      (this.props = o),
        (this.context = m),
        (this.refs = D),
        (this.updater = _ || u);
    }
    (z.prototype.isReactComponent = {}),
      (z.prototype.setState = function (o, m) {
        if (typeof o != "object" && typeof o != "function" && o != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, o, m, "setState");
      }),
      (z.prototype.forceUpdate = function (o) {
        this.updater.enqueueForceUpdate(this, o, "forceUpdate");
      });
    function Re() {}
    Re.prototype = z.prototype;
    function ue(o, m, _) {
      (this.props = o),
        (this.context = m),
        (this.refs = D),
        (this.updater = _ || u);
    }
    var K = (ue.prototype = new Re());
    (K.constructor = ue), Ue(K, z.prototype), (K.isPureReactComponent = !0);
    var Ve = Array.isArray,
      P = { H: null, A: null, T: null, S: null },
      Y = Object.prototype.hasOwnProperty;
    function me(o, m, _, b, x, O) {
      return (
        (_ = O.ref),
        { $$typeof: a, type: o, key: m, ref: _ !== void 0 ? _ : null, props: O }
      );
    }
    function He(o, m) {
      return me(o.type, m, void 0, void 0, void 0, o.props);
    }
    function be(o) {
      return typeof o == "object" && o !== null && o.$$typeof === a;
    }
    function ut(o) {
      var m = { "=": "=0", ":": "=2" };
      return (
        "$" +
        o.replace(/[=:]/g, function (_) {
          return m[_];
        })
      );
    }
    var Ae = /\/+/g;
    function W(o, m) {
      return typeof o == "object" && o !== null && o.key != null
        ? ut("" + o.key)
        : m.toString(36);
    }
    function Oe() {}
    function we(o) {
      switch (o.status) {
        case "fulfilled":
          return o.value;
        case "rejected":
          throw o.reason;
        default:
          switch (
            (typeof o.status == "string"
              ? o.then(Oe, Oe)
              : ((o.status = "pending"),
                o.then(
                  function (m) {
                    o.status === "pending" &&
                      ((o.status = "fulfilled"), (o.value = m));
                  },
                  function (m) {
                    o.status === "pending" &&
                      ((o.status = "rejected"), (o.reason = m));
                  }
                )),
            o.status)
          ) {
            case "fulfilled":
              return o.value;
            case "rejected":
              throw o.reason;
          }
      }
      throw o;
    }
    function re(o, m, _, b, x) {
      var O = typeof o;
      (O === "undefined" || O === "boolean") && (o = null);
      var C = !1;
      if (o === null) C = !0;
      else
        switch (O) {
          case "bigint":
          case "string":
          case "number":
            C = !0;
            break;
          case "object":
            switch (o.$$typeof) {
              case a:
              case e:
                C = !0;
                break;
              case p:
                return (C = o._init), re(C(o._payload), m, _, b, x);
            }
        }
      if (C)
        return (
          (x = x(o)),
          (C = b === "" ? "." + W(o, 0) : b),
          Ve(x)
            ? ((_ = ""),
              C != null && (_ = C.replace(Ae, "$&/") + "/"),
              re(x, m, _, "", function (Me) {
                return Me;
              }))
            : x != null &&
              (be(x) &&
                (x = He(
                  x,
                  _ +
                    (x.key == null || (o && o.key === x.key)
                      ? ""
                      : ("" + x.key).replace(Ae, "$&/") + "/") +
                    C
                )),
              m.push(x)),
          1
        );
      C = 0;
      var j = b === "" ? "." : b + ":";
      if (Ve(o))
        for (var B = 0; B < o.length; B++)
          (b = o[B]), (O = j + W(b, B)), (C += re(b, m, _, O, x));
      else if (((B = q(o)), typeof B == "function"))
        for (o = B.call(o), B = 0; !(b = o.next()).done; )
          (b = b.value), (O = j + W(b, B++)), (C += re(b, m, _, O, x));
      else if (O === "object") {
        if (typeof o.then == "function") return re(we(o), m, _, b, x);
        throw (
          ((m = String(o)),
          Error(
            "Objects are not valid as a React child (found: " +
              (m === "[object Object]"
                ? "object with keys {" + Object.keys(o).join(", ") + "}"
                : m) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      }
      return C;
    }
    function J(o, m, _) {
      if (o == null) return o;
      var b = [],
        x = 0;
      return (
        re(o, b, "", "", function (O) {
          return m.call(_, O, x++);
        }),
        b
      );
    }
    function ne(o) {
      if (o._status === -1) {
        var m = o._result;
        (m = m()),
          m.then(
            function (_) {
              (o._status === 0 || o._status === -1) &&
                ((o._status = 1), (o._result = _));
            },
            function (_) {
              (o._status === 0 || o._status === -1) &&
                ((o._status = 2), (o._result = _));
            }
          ),
          o._status === -1 && ((o._status = 0), (o._result = m));
      }
      if (o._status === 1) return o._result.default;
      throw o._result;
    }
    var Ie =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var m = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(m)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          };
    function A() {}
    return (
      (N.Children = {
        map: J,
        forEach: function (o, m, _) {
          J(
            o,
            function () {
              m.apply(this, arguments);
            },
            _
          );
        },
        count: function (o) {
          var m = 0;
          return (
            J(o, function () {
              m++;
            }),
            m
          );
        },
        toArray: function (o) {
          return (
            J(o, function (m) {
              return m;
            }) || []
          );
        },
        only: function (o) {
          if (!be(o))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return o;
        },
      }),
      (N.Component = z),
      (N.Fragment = t),
      (N.Profiler = n),
      (N.PureComponent = ue),
      (N.StrictMode = r),
      (N.Suspense = c),
      (N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
      (N.act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (N.cache = function (o) {
        return function () {
          return o.apply(null, arguments);
        };
      }),
      (N.cloneElement = function (o, m, _) {
        if (o == null)
          throw Error(
            "The argument must be a React element, but you passed " + o + "."
          );
        var b = Ue({}, o.props),
          x = o.key,
          O = void 0;
        if (m != null)
          for (C in (m.ref !== void 0 && (O = void 0),
          m.key !== void 0 && (x = "" + m.key),
          m))
            !Y.call(m, C) ||
              C === "key" ||
              C === "__self" ||
              C === "__source" ||
              (C === "ref" && m.ref === void 0) ||
              (b[C] = m[C]);
        var C = arguments.length - 2;
        if (C === 1) b.children = _;
        else if (1 < C) {
          for (var j = Array(C), B = 0; B < C; B++) j[B] = arguments[B + 2];
          b.children = j;
        }
        return me(o.type, x, void 0, void 0, O, b);
      }),
      (N.createContext = function (o) {
        return (
          (o = {
            $$typeof: l,
            _currentValue: o,
            _currentValue2: o,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (o.Provider = o),
          (o.Consumer = { $$typeof: s, _context: o }),
          o
        );
      }),
      (N.createElement = function (o, m, _) {
        var b,
          x = {},
          O = null;
        if (m != null)
          for (b in (m.key !== void 0 && (O = "" + m.key), m))
            Y.call(m, b) &&
              b !== "key" &&
              b !== "__self" &&
              b !== "__source" &&
              (x[b] = m[b]);
        var C = arguments.length - 2;
        if (C === 1) x.children = _;
        else if (1 < C) {
          for (var j = Array(C), B = 0; B < C; B++) j[B] = arguments[B + 2];
          x.children = j;
        }
        if (o && o.defaultProps)
          for (b in ((C = o.defaultProps), C)) x[b] === void 0 && (x[b] = C[b]);
        return me(o, O, void 0, void 0, null, x);
      }),
      (N.createRef = function () {
        return { current: null };
      }),
      (N.forwardRef = function (o) {
        return { $$typeof: d, render: o };
      }),
      (N.isValidElement = be),
      (N.lazy = function (o) {
        return {
          $$typeof: p,
          _payload: { _status: -1, _result: o },
          _init: ne,
        };
      }),
      (N.memo = function (o, m) {
        return { $$typeof: i, type: o, compare: m === void 0 ? null : m };
      }),
      (N.startTransition = function (o) {
        var m = P.T,
          _ = {};
        P.T = _;
        try {
          var b = o(),
            x = P.S;
          x !== null && x(_, b),
            typeof b == "object" &&
              b !== null &&
              typeof b.then == "function" &&
              b.then(A, Ie);
        } catch (O) {
          Ie(O);
        } finally {
          P.T = m;
        }
      }),
      (N.unstable_useCacheRefresh = function () {
        return P.H.useCacheRefresh();
      }),
      (N.use = function (o) {
        return P.H.use(o);
      }),
      (N.useActionState = function (o, m, _) {
        return P.H.useActionState(o, m, _);
      }),
      (N.useCallback = function (o, m) {
        return P.H.useCallback(o, m);
      }),
      (N.useContext = function (o) {
        return P.H.useContext(o);
      }),
      (N.useDebugValue = function () {}),
      (N.useDeferredValue = function (o, m) {
        return P.H.useDeferredValue(o, m);
      }),
      (N.useEffect = function (o, m) {
        return P.H.useEffect(o, m);
      }),
      (N.useId = function () {
        return P.H.useId();
      }),
      (N.useImperativeHandle = function (o, m, _) {
        return P.H.useImperativeHandle(o, m, _);
      }),
      (N.useInsertionEffect = function (o, m) {
        return P.H.useInsertionEffect(o, m);
      }),
      (N.useLayoutEffect = function (o, m) {
        return P.H.useLayoutEffect(o, m);
      }),
      (N.useMemo = function (o, m) {
        return P.H.useMemo(o, m);
      }),
      (N.useOptimistic = function (o, m) {
        return P.H.useOptimistic(o, m);
      }),
      (N.useReducer = function (o, m, _) {
        return P.H.useReducer(o, m, _);
      }),
      (N.useRef = function (o) {
        return P.H.useRef(o);
      }),
      (N.useState = function (o) {
        return P.H.useState(o);
      }),
      (N.useSyncExternalStore = function (o, m, _) {
        return P.H.useSyncExternalStore(o, m, _);
      }),
      (N.useTransition = function () {
        return P.H.useTransition();
      }),
      (N.version = "19.0.0"),
      N
    );
  }
  var sa;
  function ia() {
    return sa || ((sa = 1), (jt.exports = Fr())), jt.exports;
  }
  var ct = ia();
  const g = ra(ct);
  var Pt = { exports: {} },
    V = {};
  var oa;
  function Yr() {
    if (oa) return V;
    oa = 1;
    var a = ia();
    function e(c) {
      var i = "https://react.dev/errors/" + c;
      if (1 < arguments.length) {
        i += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var p = 2; p < arguments.length; p++)
          i += "&args[]=" + encodeURIComponent(arguments[p]);
      }
      return (
        "Minified React error #" +
        c +
        "; visit " +
        i +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function t() {}
    var r = {
        d: {
          f: t,
          r: function () {
            throw Error(e(522));
          },
          D: t,
          C: t,
          L: t,
          m: t,
          X: t,
          S: t,
          M: t,
        },
        p: 0,
        findDOMNode: null,
      },
      n = Symbol.for("react.portal");
    function s(c, i, p) {
      var M =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: n,
        key: M == null ? null : "" + M,
        children: c,
        containerInfo: i,
        implementation: p,
      };
    }
    var l = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(c, i) {
      if (c === "font") return "";
      if (typeof i == "string") return i === "use-credentials" ? i : "";
    }
    return (
      (V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
      (V.createPortal = function (c, i) {
        var p =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!i || (i.nodeType !== 1 && i.nodeType !== 9 && i.nodeType !== 11))
          throw Error(e(299));
        return s(c, i, null, p);
      }),
      (V.flushSync = function (c) {
        var i = l.T,
          p = r.p;
        try {
          if (((l.T = null), (r.p = 2), c)) return c();
        } finally {
          (l.T = i), (r.p = p), r.d.f();
        }
      }),
      (V.preconnect = function (c, i) {
        typeof c == "string" &&
          (i
            ? ((i = i.crossOrigin),
              (i =
                typeof i == "string"
                  ? i === "use-credentials"
                    ? i
                    : ""
                  : void 0))
            : (i = null),
          r.d.C(c, i));
      }),
      (V.prefetchDNS = function (c) {
        typeof c == "string" && r.d.D(c);
      }),
      (V.preinit = function (c, i) {
        if (typeof c == "string" && i && typeof i.as == "string") {
          var p = i.as,
            M = d(p, i.crossOrigin),
            q = typeof i.integrity == "string" ? i.integrity : void 0,
            u = typeof i.fetchPriority == "string" ? i.fetchPriority : void 0;
          p === "style"
            ? r.d.S(
                c,
                typeof i.precedence == "string" ? i.precedence : void 0,
                { crossOrigin: M, integrity: q, fetchPriority: u }
              )
            : p === "script" &&
              r.d.X(c, {
                crossOrigin: M,
                integrity: q,
                fetchPriority: u,
                nonce: typeof i.nonce == "string" ? i.nonce : void 0,
              });
        }
      }),
      (V.preinitModule = function (c, i) {
        if (typeof c == "string")
          if (typeof i == "object" && i !== null) {
            if (i.as == null || i.as === "script") {
              var p = d(i.as, i.crossOrigin);
              r.d.M(c, {
                crossOrigin: p,
                integrity:
                  typeof i.integrity == "string" ? i.integrity : void 0,
                nonce: typeof i.nonce == "string" ? i.nonce : void 0,
              });
            }
          } else i == null && r.d.M(c);
      }),
      (V.preload = function (c, i) {
        if (
          typeof c == "string" &&
          typeof i == "object" &&
          i !== null &&
          typeof i.as == "string"
        ) {
          var p = i.as,
            M = d(p, i.crossOrigin);
          r.d.L(c, p, {
            crossOrigin: M,
            integrity: typeof i.integrity == "string" ? i.integrity : void 0,
            nonce: typeof i.nonce == "string" ? i.nonce : void 0,
            type: typeof i.type == "string" ? i.type : void 0,
            fetchPriority:
              typeof i.fetchPriority == "string" ? i.fetchPriority : void 0,
            referrerPolicy:
              typeof i.referrerPolicy == "string" ? i.referrerPolicy : void 0,
            imageSrcSet:
              typeof i.imageSrcSet == "string" ? i.imageSrcSet : void 0,
            imageSizes: typeof i.imageSizes == "string" ? i.imageSizes : void 0,
            media: typeof i.media == "string" ? i.media : void 0,
          });
        }
      }),
      (V.preloadModule = function (c, i) {
        if (typeof c == "string")
          if (i) {
            var p = d(i.as, i.crossOrigin);
            r.d.m(c, {
              as: typeof i.as == "string" && i.as !== "script" ? i.as : void 0,
              crossOrigin: p,
              integrity: typeof i.integrity == "string" ? i.integrity : void 0,
            });
          } else r.d.m(c);
      }),
      (V.requestFormReset = function (c) {
        r.d.r(c);
      }),
      (V.unstable_batchedUpdates = function (c, i) {
        return c(i);
      }),
      (V.useFormState = function (c, i, p) {
        return l.H.useFormState(c, i, p);
      }),
      (V.useFormStatus = function () {
        return l.H.useHostTransitionStatus();
      }),
      (V.version = "19.0.0"),
      V
    );
  }
  var la;
  function Gr() {
    if (la) return Pt.exports;
    la = 1;
    function a() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
        } catch (e) {
          console.error(e);
        }
    }
    return a(), (Pt.exports = Yr()), Pt.exports;
  }
  var qr = Gr();
  const Wr = ra(qr);
  var Kr = (a) => {
      switch (a) {
        case "success":
          return Qr;
        case "info":
          return tn;
        case "warning":
          return en;
        case "error":
          return an;
        default:
          return null;
      }
    },
    Jr = Array(12).fill(0),
    Xr = ({ visible: a, className: e }) =>
      g.createElement(
        "div",
        {
          className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
          "data-visible": a,
        },
        g.createElement(
          "div",
          { className: "sonner-spinner" },
          Jr.map((t, r) =>
            g.createElement("div", {
              className: "sonner-loading-bar",
              key: `spinner-bar-${r}`,
            })
          )
        )
      ),
    Qr = g.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      g.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd",
      })
    ),
    en = g.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      g.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd",
      })
    ),
    tn = g.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      g.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd",
      })
    ),
    an = g.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20",
      },
      g.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd",
      })
    ),
    rn = g.createElement(
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
      g.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      g.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ),
    nn = () => {
      let [a, e] = g.useState(document.hidden);
      return (
        g.useEffect(() => {
          let t = () => {
            e(document.hidden);
          };
          return (
            document.addEventListener("visibilitychange", t),
            () => window.removeEventListener("visibilitychange", t)
          );
        }, []),
        a
      );
    },
    Zt = 1,
    sn = class {
      constructor() {
        (this.subscribe = (a) => (
          this.subscribers.push(a),
          () => {
            let e = this.subscribers.indexOf(a);
            this.subscribers.splice(e, 1);
          }
        )),
          (this.publish = (a) => {
            this.subscribers.forEach((e) => e(a));
          }),
          (this.addToast = (a) => {
            this.publish(a), (this.toasts = [...this.toasts, a]);
          }),
          (this.create = (a) => {
            var e;
            let { message: t, ...r } = a,
              n =
                typeof (a == null ? void 0 : a.id) == "number" ||
                ((e = a.id) == null ? void 0 : e.length) > 0
                  ? a.id
                  : Zt++,
              s = this.toasts.find((d) => d.id === n),
              l = a.dismissible === void 0 ? !0 : a.dismissible;
            return (
              this.dismissedToasts.has(n) && this.dismissedToasts.delete(n),
              s
                ? (this.toasts = this.toasts.map((d) =>
                    d.id === n
                      ? (this.publish({ ...d, ...a, id: n, title: t }),
                        { ...d, ...a, id: n, dismissible: l, title: t })
                      : d
                  ))
                : this.addToast({ title: t, ...r, dismissible: l, id: n }),
              n
            );
          }),
          (this.dismiss = (a) => (
            this.dismissedToasts.add(a),
            a ||
              this.toasts.forEach((e) => {
                this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
              }),
            this.subscribers.forEach((e) => e({ id: a, dismiss: !0 })),
            a
          )),
          (this.message = (a, e) => this.create({ ...e, message: a })),
          (this.error = (a, e) =>
            this.create({ ...e, message: a, type: "error" })),
          (this.success = (a, e) =>
            this.create({ ...e, type: "success", message: a })),
          (this.info = (a, e) =>
            this.create({ ...e, type: "info", message: a })),
          (this.warning = (a, e) =>
            this.create({ ...e, type: "warning", message: a })),
          (this.loading = (a, e) =>
            this.create({ ...e, type: "loading", message: a })),
          (this.promise = (a, e) => {
            if (!e) return;
            let t;
            e.loading !== void 0 &&
              (t = this.create({
                ...e,
                promise: a,
                type: "loading",
                message: e.loading,
                description:
                  typeof e.description != "function" ? e.description : void 0,
              }));
            let r = a instanceof Promise ? a : a(),
              n = t !== void 0,
              s,
              l = r
                .then(async (c) => {
                  if (((s = ["resolve", c]), g.isValidElement(c)))
                    (n = !1),
                      this.create({ id: t, type: "default", message: c });
                  else if (ln(c) && !c.ok) {
                    n = !1;
                    let i =
                        typeof e.error == "function"
                          ? await e.error(`HTTP error! status: ${c.status}`)
                          : e.error,
                      p =
                        typeof e.description == "function"
                          ? await e.description(
                              `HTTP error! status: ${c.status}`
                            )
                          : e.description;
                    this.create({
                      id: t,
                      type: "error",
                      message: i,
                      description: p,
                    });
                  } else if (e.success !== void 0) {
                    n = !1;
                    let i =
                        typeof e.success == "function"
                          ? await e.success(c)
                          : e.success,
                      p =
                        typeof e.description == "function"
                          ? await e.description(c)
                          : e.description;
                    this.create({
                      id: t,
                      type: "success",
                      message: i,
                      description: p,
                    });
                  }
                })
                .catch(async (c) => {
                  if (((s = ["reject", c]), e.error !== void 0)) {
                    n = !1;
                    let i =
                        typeof e.error == "function"
                          ? await e.error(c)
                          : e.error,
                      p =
                        typeof e.description == "function"
                          ? await e.description(c)
                          : e.description;
                    this.create({
                      id: t,
                      type: "error",
                      message: i,
                      description: p,
                    });
                  }
                })
                .finally(() => {
                  var c;
                  n && (this.dismiss(t), (t = void 0)),
                    (c = e.finally) == null || c.call(e);
                }),
              d = () =>
                new Promise((c, i) =>
                  l.then(() => (s[0] === "reject" ? i(s[1]) : c(s[1]))).catch(i)
                );
            return typeof t != "string" && typeof t != "number"
              ? { unwrap: d }
              : Object.assign(t, { unwrap: d });
          }),
          (this.custom = (a, e) => {
            let t = (e == null ? void 0 : e.id) || Zt++;
            return this.create({ jsx: a(t), id: t, ...e }), t;
          }),
          (this.getActiveToasts = () =>
            this.toasts.filter((a) => !this.dismissedToasts.has(a.id))),
          (this.subscribers = []),
          (this.toasts = []),
          (this.dismissedToasts = new Set());
      }
    },
    F = new sn(),
    on = (a, e) => {
      let t = (e == null ? void 0 : e.id) || Zt++;
      return F.addToast({ title: a, ...e, id: t }), t;
    },
    ln = (a) =>
      a &&
      typeof a == "object" &&
      "ok" in a &&
      typeof a.ok == "boolean" &&
      "status" in a &&
      typeof a.status == "number",
    dn = on,
    cn = () => F.toasts,
    un = () => F.getActiveToasts();
  Object.assign(
    dn,
    {
      success: F.success,
      info: F.info,
      warning: F.warning,
      error: F.error,
      custom: F.custom,
      message: F.message,
      promise: F.promise,
      dismiss: F.dismiss,
      loading: F.loading,
    },
    { getHistory: cn, getToasts: un }
  );
  function fn(a, { insertAt: e } = {}) {
    if (typeof document > "u") return;
    let t = document.head || document.getElementsByTagName("head")[0],
      r = document.createElement("style");
    (r.type = "text/css"),
      e === "top" && t.firstChild
        ? t.insertBefore(r, t.firstChild)
        : t.appendChild(r),
      r.styleSheet
        ? (r.styleSheet.cssText = a)
        : r.appendChild(document.createTextNode(a));
  }
  fn(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  function xt(a) {
    return a.label !== void 0;
  }
  var hn = 3,
    pn = "32px",
    mn = "16px",
    da = 4e3,
    gn = 356,
    yn = 14,
    vn = 20,
    _n = 200;
  function ae(...a) {
    return a.filter(Boolean).join(" ");
  }
  function bn(a) {
    let [e, t] = a.split("-"),
      r = [];
    return e && r.push(e), t && r.push(t), r;
  }
  var wn = (a) => {
    var e, t, r, n, s, l, d, c, i, p, M;
    let {
        invert: q,
        toast: u,
        unstyled: Ue,
        interacting: D,
        setHeights: z,
        visibleToasts: Re,
        heights: ue,
        index: K,
        toasts: Ve,
        expanded: P,
        removeToast: Y,
        defaultRichColors: me,
        closeButton: He,
        style: be,
        cancelButtonStyle: ut,
        actionButtonStyle: Ae,
        className: W = "",
        descriptionClassName: Oe = "",
        duration: we,
        position: re,
        gap: J,
        loadingIcon: ne,
        expandByDefault: Ie,
        classNames: A,
        icons: o,
        closeButtonAriaLabel: m = "Close toast",
        pauseWhenPageIsHidden: _,
      } = a,
      [b, x] = g.useState(null),
      [O, C] = g.useState(null),
      [j, B] = g.useState(!1),
      [Me, Tt] = g.useState(!1),
      [ft, Lt] = g.useState(!1),
      [pa, Nn] = g.useState(!1),
      [Rn, ma] = g.useState(!1),
      [An, $t] = g.useState(0),
      [On, ga] = g.useState(0),
      ht = g.useRef(u.duration || we || da),
      ya = g.useRef(null),
      je = g.useRef(null),
      In = K === 0,
      Mn = K + 1 <= Re,
      X = u.type,
      Fe = u.dismissible !== !1,
      jn = u.className || "",
      Pn = u.descriptionClassName || "",
      St = g.useMemo(
        () => ue.findIndex((S) => S.toastId === u.id) || 0,
        [ue, u.id]
      ),
      Zn = g.useMemo(() => {
        var S;
        return (S = u.closeButton) != null ? S : He;
      }, [u.closeButton, He]),
      va = g.useMemo(() => u.duration || we || da, [u.duration, we]),
      Bt = g.useRef(0),
      Ye = g.useRef(0),
      _a = g.useRef(0),
      Ge = g.useRef(null),
      [Dn, Ln] = re.split("-"),
      ba = g.useMemo(
        () => ue.reduce((S, Z, L) => (L >= St ? S : S + Z.height), 0),
        [ue, St]
      ),
      wa = nn(),
      $n = u.invert || q,
      zt = X === "loading";
    (Ye.current = g.useMemo(() => St * J + ba, [St, ba])),
      g.useEffect(() => {
        ht.current = va;
      }, [va]),
      g.useEffect(() => {
        B(!0);
      }, []),
      g.useEffect(() => {
        let S = je.current;
        if (S) {
          let Z = S.getBoundingClientRect().height;
          return (
            ga(Z),
            z((L) => [
              { toastId: u.id, height: Z, position: u.position },
              ...L,
            ]),
            () => z((L) => L.filter((se) => se.toastId !== u.id))
          );
        }
      }, [z, u.id]),
      g.useLayoutEffect(() => {
        if (!j) return;
        let S = je.current,
          Z = S.style.height;
        S.style.height = "auto";
        let L = S.getBoundingClientRect().height;
        (S.style.height = Z),
          ga(L),
          z((se) =>
            se.find((ie) => ie.toastId === u.id)
              ? se.map((ie) =>
                  ie.toastId === u.id ? { ...ie, height: L } : ie
                )
              : [{ toastId: u.id, height: L, position: u.position }, ...se]
          );
      }, [j, u.title, u.description, z, u.id]);
    let xe = g.useCallback(() => {
      Tt(!0),
        $t(Ye.current),
        z((S) => S.filter((Z) => Z.toastId !== u.id)),
        setTimeout(() => {
          Y(u);
        }, _n);
    }, [u, Y, z, Ye]);
    g.useEffect(() => {
      if (
        (u.promise && X === "loading") ||
        u.duration === 1 / 0 ||
        u.type === "loading"
      )
        return;
      let S;
      return (
        P || D || (_ && wa)
          ? (() => {
              if (_a.current < Bt.current) {
                let Z = new Date().getTime() - Bt.current;
                ht.current = ht.current - Z;
              }
              _a.current = new Date().getTime();
            })()
          : ht.current !== 1 / 0 &&
            ((Bt.current = new Date().getTime()),
            (S = setTimeout(() => {
              var Z;
              (Z = u.onAutoClose) == null || Z.call(u, u), xe();
            }, ht.current))),
        () => clearTimeout(S)
      );
    }, [P, D, u, X, _, wa, xe]),
      g.useEffect(() => {
        u.delete && xe();
      }, [xe, u.delete]);
    function Bn() {
      var S, Z, L;
      return o != null && o.loading
        ? g.createElement(
            "div",
            {
              className: ae(
                A == null ? void 0 : A.loader,
                (S = u == null ? void 0 : u.classNames) == null
                  ? void 0
                  : S.loader,
                "sonner-loader"
              ),
              "data-visible": X === "loading",
            },
            o.loading
          )
        : ne
        ? g.createElement(
            "div",
            {
              className: ae(
                A == null ? void 0 : A.loader,
                (Z = u == null ? void 0 : u.classNames) == null
                  ? void 0
                  : Z.loader,
                "sonner-loader"
              ),
              "data-visible": X === "loading",
            },
            ne
          )
        : g.createElement(Xr, {
            className: ae(
              A == null ? void 0 : A.loader,
              (L = u == null ? void 0 : u.classNames) == null
                ? void 0
                : L.loader
            ),
            visible: X === "loading",
          });
    }
    return g.createElement(
      "li",
      {
        tabIndex: 0,
        ref: je,
        className: ae(
          W,
          jn,
          A == null ? void 0 : A.toast,
          (e = u == null ? void 0 : u.classNames) == null ? void 0 : e.toast,
          A == null ? void 0 : A.default,
          A == null ? void 0 : A[X],
          (t = u == null ? void 0 : u.classNames) == null ? void 0 : t[X]
        ),
        "data-sonner-toast": "",
        "data-rich-colors": (r = u.richColors) != null ? r : me,
        "data-styled": !(u.jsx || u.unstyled || Ue),
        "data-mounted": j,
        "data-promise": !!u.promise,
        "data-swiped": Rn,
        "data-removed": Me,
        "data-visible": Mn,
        "data-y-position": Dn,
        "data-x-position": Ln,
        "data-index": K,
        "data-front": In,
        "data-swiping": ft,
        "data-dismissible": Fe,
        "data-type": X,
        "data-invert": $n,
        "data-swipe-out": pa,
        "data-swipe-direction": O,
        "data-expanded": !!(P || (Ie && j)),
        style: {
          "--index": K,
          "--toasts-before": K,
          "--z-index": Ve.length - K,
          "--offset": `${Me ? An : Ye.current}px`,
          "--initial-height": Ie ? "auto" : `${On}px`,
          ...be,
          ...u.style,
        },
        onDragEnd: () => {
          Lt(!1), x(null), (Ge.current = null);
        },
        onPointerDown: (S) => {
          zt ||
            !Fe ||
            ((ya.current = new Date()),
            $t(Ye.current),
            S.target.setPointerCapture(S.pointerId),
            S.target.tagName !== "BUTTON" &&
              (Lt(!0), (Ge.current = { x: S.clientX, y: S.clientY })));
        },
        onPointerUp: () => {
          var S, Z, L, se;
          if (pa || !Fe) return;
          Ge.current = null;
          let ie = Number(
              ((S = je.current) == null
                ? void 0
                : S.style
                    .getPropertyValue("--swipe-amount-x")
                    .replace("px", "")) || 0
            ),
            ke = Number(
              ((Z = je.current) == null
                ? void 0
                : Z.style
                    .getPropertyValue("--swipe-amount-y")
                    .replace("px", "")) || 0
            ),
            Pe =
              new Date().getTime() -
              ((L = ya.current) == null ? void 0 : L.getTime()),
            oe = b === "x" ? ie : ke,
            Te = Math.abs(oe) / Pe;
          if (Math.abs(oe) >= vn || Te > 0.11) {
            $t(Ye.current),
              (se = u.onDismiss) == null || se.call(u, u),
              C(
                b === "x" ? (ie > 0 ? "right" : "left") : ke > 0 ? "down" : "up"
              ),
              xe(),
              Nn(!0),
              ma(!1);
            return;
          }
          Lt(!1), x(null);
        },
        onPointerMove: (S) => {
          var Z, L, se, ie;
          if (
            !Ge.current ||
            !Fe ||
            ((Z = window.getSelection()) == null
              ? void 0
              : Z.toString().length) > 0
          )
            return;
          let ke = S.clientY - Ge.current.y,
            Pe = S.clientX - Ge.current.x,
            oe = (L = a.swipeDirections) != null ? L : bn(re);
          !b &&
            (Math.abs(Pe) > 1 || Math.abs(ke) > 1) &&
            x(Math.abs(Pe) > Math.abs(ke) ? "x" : "y");
          let Te = { x: 0, y: 0 };
          b === "y"
            ? (oe.includes("top") || oe.includes("bottom")) &&
              ((oe.includes("top") && ke < 0) ||
                (oe.includes("bottom") && ke > 0)) &&
              (Te.y = ke)
            : b === "x" &&
              (oe.includes("left") || oe.includes("right")) &&
              ((oe.includes("left") && Pe < 0) ||
                (oe.includes("right") && Pe > 0)) &&
              (Te.x = Pe),
            (Math.abs(Te.x) > 0 || Math.abs(Te.y) > 0) && ma(!0),
            (se = je.current) == null ||
              se.style.setProperty("--swipe-amount-x", `${Te.x}px`),
            (ie = je.current) == null ||
              ie.style.setProperty("--swipe-amount-y", `${Te.y}px`);
        },
      },
      Zn && !u.jsx
        ? g.createElement(
            "button",
            {
              "aria-label": m,
              "data-disabled": zt,
              "data-close-button": !0,
              onClick:
                zt || !Fe
                  ? () => {}
                  : () => {
                      var S;
                      xe(), (S = u.onDismiss) == null || S.call(u, u);
                    },
              className: ae(
                A == null ? void 0 : A.closeButton,
                (n = u == null ? void 0 : u.classNames) == null
                  ? void 0
                  : n.closeButton
              ),
            },
            (s = o == null ? void 0 : o.close) != null ? s : rn
          )
        : null,
      u.jsx || ct.isValidElement(u.title)
        ? u.jsx
          ? u.jsx
          : typeof u.title == "function"
          ? u.title()
          : u.title
        : g.createElement(
            g.Fragment,
            null,
            X || u.icon || u.promise
              ? g.createElement(
                  "div",
                  {
                    "data-icon": "",
                    className: ae(
                      A == null ? void 0 : A.icon,
                      (l = u == null ? void 0 : u.classNames) == null
                        ? void 0
                        : l.icon
                    ),
                  },
                  u.promise || (u.type === "loading" && !u.icon)
                    ? u.icon || Bn()
                    : null,
                  u.type !== "loading"
                    ? u.icon || (o == null ? void 0 : o[X]) || Kr(X)
                    : null
                )
              : null,
            g.createElement(
              "div",
              {
                "data-content": "",
                className: ae(
                  A == null ? void 0 : A.content,
                  (d = u == null ? void 0 : u.classNames) == null
                    ? void 0
                    : d.content
                ),
              },
              g.createElement(
                "div",
                {
                  "data-title": "",
                  className: ae(
                    A == null ? void 0 : A.title,
                    (c = u == null ? void 0 : u.classNames) == null
                      ? void 0
                      : c.title
                  ),
                },
                typeof u.title == "function" ? u.title() : u.title
              ),
              u.description
                ? g.createElement(
                    "div",
                    {
                      "data-description": "",
                      className: ae(
                        Oe,
                        Pn,
                        A == null ? void 0 : A.description,
                        (i = u == null ? void 0 : u.classNames) == null
                          ? void 0
                          : i.description
                      ),
                    },
                    typeof u.description == "function"
                      ? u.description()
                      : u.description
                  )
                : null
            ),
            ct.isValidElement(u.cancel)
              ? u.cancel
              : u.cancel && xt(u.cancel)
              ? g.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: u.cancelButtonStyle || ut,
                    onClick: (S) => {
                      var Z, L;
                      xt(u.cancel) &&
                        Fe &&
                        ((L = (Z = u.cancel).onClick) == null || L.call(Z, S),
                        xe());
                    },
                    className: ae(
                      A == null ? void 0 : A.cancelButton,
                      (p = u == null ? void 0 : u.classNames) == null
                        ? void 0
                        : p.cancelButton
                    ),
                  },
                  u.cancel.label
                )
              : null,
            ct.isValidElement(u.action)
              ? u.action
              : u.action && xt(u.action)
              ? g.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: u.actionButtonStyle || Ae,
                    onClick: (S) => {
                      var Z, L;
                      xt(u.action) &&
                        ((L = (Z = u.action).onClick) == null || L.call(Z, S),
                        !S.defaultPrevented && xe());
                    },
                    className: ae(
                      A == null ? void 0 : A.actionButton,
                      (M = u == null ? void 0 : u.classNames) == null
                        ? void 0
                        : M.actionButton
                    ),
                  },
                  u.action.label
                )
              : null
          )
    );
  };
  function ca() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let a = document.documentElement.getAttribute("dir");
    return a === "auto" || !a
      ? window.getComputedStyle(document.documentElement).direction
      : a;
  }
  function xn(a, e) {
    let t = {};
    return (
      [a, e].forEach((r, n) => {
        let s = n === 1,
          l = s ? "--mobile-offset" : "--offset",
          d = s ? mn : pn;
        function c(i) {
          ["top", "right", "bottom", "left"].forEach((p) => {
            t[`${l}-${p}`] = typeof i == "number" ? `${i}px` : i;
          });
        }
        typeof r == "number" || typeof r == "string"
          ? c(r)
          : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((i) => {
              r[i] === void 0
                ? (t[`${l}-${i}`] = d)
                : (t[`${l}-${i}`] =
                    typeof r[i] == "number" ? `${r[i]}px` : r[i]);
            })
          : c(d);
      }),
      t
    );
  }
  ct.forwardRef(function (a, e) {
    let {
        invert: t,
        position: r = "bottom-right",
        hotkey: n = ["altKey", "KeyT"],
        expand: s,
        closeButton: l,
        className: d,
        offset: c,
        mobileOffset: i,
        theme: p = "light",
        richColors: M,
        duration: q,
        style: u,
        visibleToasts: Ue = hn,
        toastOptions: D,
        dir: z = ca(),
        gap: Re = yn,
        loadingIcon: ue,
        icons: K,
        containerAriaLabel: Ve = "Notifications",
        pauseWhenPageIsHidden: P,
      } = a,
      [Y, me] = g.useState([]),
      He = g.useMemo(
        () =>
          Array.from(
            new Set(
              [r].concat(Y.filter((_) => _.position).map((_) => _.position))
            )
          ),
        [Y, r]
      ),
      [be, ut] = g.useState([]),
      [Ae, W] = g.useState(!1),
      [Oe, we] = g.useState(!1),
      [re, J] = g.useState(
        p !== "system"
          ? p
          : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      ),
      ne = g.useRef(null),
      Ie = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      A = g.useRef(null),
      o = g.useRef(!1),
      m = g.useCallback((_) => {
        me((b) => {
          var x;
          return (
            ((x = b.find((O) => O.id === _.id)) != null && x.delete) ||
              F.dismiss(_.id),
            b.filter(({ id: O }) => O !== _.id)
          );
        });
      }, []);
    return (
      g.useEffect(
        () =>
          F.subscribe((_) => {
            if (_.dismiss) {
              me((b) =>
                b.map((x) => (x.id === _.id ? { ...x, delete: !0 } : x))
              );
              return;
            }
            setTimeout(() => {
              Wr.flushSync(() => {
                me((b) => {
                  let x = b.findIndex((O) => O.id === _.id);
                  return x !== -1
                    ? [...b.slice(0, x), { ...b[x], ..._ }, ...b.slice(x + 1)]
                    : [_, ...b];
                });
              });
            });
          }),
        []
      ),
      g.useEffect(() => {
        if (p !== "system") {
          J(p);
          return;
        }
        if (
          (p === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? J("dark")
              : J("light")),
          typeof window > "u")
        )
          return;
        let _ = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          _.addEventListener("change", ({ matches: b }) => {
            J(b ? "dark" : "light");
          });
        } catch {
          _.addListener(({ matches: x }) => {
            try {
              J(x ? "dark" : "light");
            } catch (O) {
              console.error(O);
            }
          });
        }
      }, [p]),
      g.useEffect(() => {
        Y.length <= 1 && W(!1);
      }, [Y]),
      g.useEffect(() => {
        let _ = (b) => {
          var x, O;
          n.every((C) => b[C] || b.code === C) &&
            (W(!0), (x = ne.current) == null || x.focus()),
            b.code === "Escape" &&
              (document.activeElement === ne.current ||
                ((O = ne.current) != null &&
                  O.contains(document.activeElement))) &&
              W(!1);
        };
        return (
          document.addEventListener("keydown", _),
          () => document.removeEventListener("keydown", _)
        );
      }, [n]),
      g.useEffect(() => {
        if (ne.current)
          return () => {
            A.current &&
              (A.current.focus({ preventScroll: !0 }),
              (A.current = null),
              (o.current = !1));
          };
      }, [ne.current]),
      g.createElement(
        "section",
        {
          ref: e,
          "aria-label": `${Ve} ${Ie}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        He.map((_, b) => {
          var x;
          let [O, C] = _.split("-");
          return Y.length
            ? g.createElement(
                "ol",
                {
                  key: _,
                  dir: z === "auto" ? ca() : z,
                  tabIndex: -1,
                  ref: ne,
                  className: d,
                  "data-sonner-toaster": !0,
                  "data-theme": re,
                  "data-y-position": O,
                  "data-lifted": Ae && Y.length > 1 && !s,
                  "data-x-position": C,
                  style: {
                    "--front-toast-height": `${
                      ((x = be[0]) == null ? void 0 : x.height) || 0
                    }px`,
                    "--width": `${gn}px`,
                    "--gap": `${Re}px`,
                    ...u,
                    ...xn(c, i),
                  },
                  onBlur: (j) => {
                    o.current &&
                      !j.currentTarget.contains(j.relatedTarget) &&
                      ((o.current = !1),
                      A.current &&
                        (A.current.focus({ preventScroll: !0 }),
                        (A.current = null)));
                  },
                  onFocus: (j) => {
                    (j.target instanceof HTMLElement &&
                      j.target.dataset.dismissible === "false") ||
                      o.current ||
                      ((o.current = !0), (A.current = j.relatedTarget));
                  },
                  onMouseEnter: () => W(!0),
                  onMouseMove: () => W(!0),
                  onMouseLeave: () => {
                    Oe || W(!1);
                  },
                  onDragEnd: () => W(!1),
                  onPointerDown: (j) => {
                    (j.target instanceof HTMLElement &&
                      j.target.dataset.dismissible === "false") ||
                      we(!0);
                  },
                  onPointerUp: () => we(!1),
                },
                Y.filter(
                  (j) => (!j.position && b === 0) || j.position === _
                ).map((j, B) => {
                  var Me, Tt;
                  return g.createElement(wn, {
                    key: j.id,
                    icons: K,
                    index: B,
                    toast: j,
                    defaultRichColors: M,
                    duration:
                      (Me = D == null ? void 0 : D.duration) != null ? Me : q,
                    className: D == null ? void 0 : D.className,
                    descriptionClassName:
                      D == null ? void 0 : D.descriptionClassName,
                    invert: t,
                    visibleToasts: Ue,
                    closeButton:
                      (Tt = D == null ? void 0 : D.closeButton) != null
                        ? Tt
                        : l,
                    interacting: Oe,
                    position: _,
                    style: D == null ? void 0 : D.style,
                    unstyled: D == null ? void 0 : D.unstyled,
                    classNames: D == null ? void 0 : D.classNames,
                    cancelButtonStyle: D == null ? void 0 : D.cancelButtonStyle,
                    actionButtonStyle: D == null ? void 0 : D.actionButtonStyle,
                    removeToast: m,
                    toasts: Y.filter((ft) => ft.position == j.position),
                    heights: be.filter((ft) => ft.position == j.position),
                    setHeights: ut,
                    expandByDefault: s,
                    gap: Re,
                    loadingIcon: ue,
                    expanded: Ae,
                    pauseWhenPageIsHidden: P,
                    swipeDirections: a.swipeDirections,
                  });
                })
              )
            : null;
        })
      )
    );
  });
  async function kn(a) {
    const e = await ta(),
      t = e.savedResponses || [],
      r = {};
    for (const n of t) r[n.key] = n;
    for (const { question: n, response: s } of a) {
      if (/^(select|choose|please select|\-\-)(\s(all|one))?\.*$/i.test(s))
        continue;
      const l = Tn(n);
      if (l.length) {
        const d = l.sort().join("|"),
          c = r[d];
        if (c) {
          (c.response = s), (c.fromAutofill = !0);
          return;
        }
        const i = {
          keywords: l,
          key: d,
          appearances: l.length,
          response: s,
          fromAutofill: !0,
          question: n,
        };
        t.push(i), (r[d] = i);
      }
    }
    chrome.storage.local.set({ profile: { ...e, savedResponses: t } });
  }
  function Tn(a) {
    const e = a.match(/\b\w+\b/g),
      t = e
        ? new Set(
            e
              .map((r) => r.toLowerCase())
              .filter(
                (r) => (r.length > 1 || !isNaN(Number(r))) && !Sn.includes(r)
              )
          )
        : new Set();
    return Array.from(t);
  }
  const Sn = [
      "am",
      "an",
      "as",
      "at",
      "be",
      "by",
      "co",
      "do",
      "eg",
      "et",
      "ex",
      "go",
      "he",
      "hi",
      "ie",
      "if",
      "in",
      "is",
      "it",
      "me",
      "mr",
      "my",
      "nd",
      "of",
      "oh",
      "ok",
      "on",
      "or",
      "qv",
      "rd",
      "re",
      "so",
      "th",
      "to",
      "un",
      "up",
      "us",
      "vs",
      "we",
    ],
    ua = {
      configName: "Default",
      accountSettings: { accountEmail: "", accountPassword: "" },
      autofillSettings: {
        saveApplications: !0,
        autoClickNextPage: !1,
        autoSubmit: !1,
        saveResponses: !0,
      },
    },
    En = xa(() => {
      chrome.runtime.onInstalled.addListener(async (e) => {
        if (e.reason === chrome.runtime.OnInstalledReason.INSTALL) {
          chrome.runtime.setUninstallURL(
            "https://www.speedyapply.com/uninstall"
          );
          const t = chrome.runtime.getURL("/options.html#/edit");
          await chrome.tabs.create({ url: t }),
            chrome.storage.local.set({
              autofillEnabled: !0,
              settings: ua,
              appliedList: [],
              configList: [ua],
              dailyGoal: 10,
            });
        }
        a();
      }),
        chrome.storage.onChanged.addListener(async function (e, t) {
          if (t === "local" && e.appliedList) {
            const r = Mt.safeParse(e.appliedList.newValue),
              n = Mt.safeParse(e.appliedList.oldValue);
            if (!r.success || !n.success || r.data.length === n.data.length)
              return;
            const s = await chrome.tabs.query({
              url: [
                "*://github.com/speedyapply/2025-SWE-College-Jobs*",
                "*://github.com/speedyapply/2025-AI-College-Jobs*",
              ],
            });
            for (const l of s)
              try {
                l.id !== void 0 &&
                  (await chrome.tabs.sendMessage(l.id, {
                    action: "runAddCheckmarks",
                  }));
              } catch {
                console.log(`Error sending message to tab ${l.id}:`);
              }
          }
        }),
        chrome.runtime.onMessage.addListener((e) => {
          if (e.type === "saveResponses") {
            const t = e.data;
            kn(t);
          }
          return !0;
        });
      function a() {
        chrome.contextMenus.removeAll(() => {
          chrome.contextMenus.create({
            id: "link-save-application",
            title: "Save Link as Application",
            contexts: ["link"],
          }),
            chrome.contextMenus.create({
              id: "page-save-application",
              title: "Save Page as Application",
              contexts: ["page"],
            });
        });
      }
      chrome.contextMenus.onClicked.addListener(async (e, t) => {
        switch (e.menuItemId) {
          case "link-save-application":
            try {
              const r = e.linkUrl;
              if (!r) return;
              const l = (await (await fetch(r)).text()).match(
                  /<title.*?>(.*?)<\/title>/i
                ),
                d = l ? l[1] : "";
              await aa(d, r, "");
            } catch (r) {
              console.error("Error fetching page content:", r);
            }
            break;
          case "page-save-application":
            await aa((t == null ? void 0 : t.title) ?? "", e.pageUrl, "");
            break;
        }
      });
    });
  function Yn() {}
  ((ha = (fa = globalThis.browser) == null ? void 0 : fa.runtime) == null
    ? void 0
    : ha.id) == null
    ? globalThis.chrome
    : globalThis.browser;
  function kt(a, ...e) {}
  const Cn = {
    debug: (...a) => kt(console.debug, ...a),
    log: (...a) => kt(console.log, ...a),
    warn: (...a) => kt(console.warn, ...a),
    error: (...a) => kt(console.error, ...a),
  };
  let Dt;
  try {
    (Dt = En.main()),
      Dt instanceof Promise &&
        console.warn(
          "The background's main() function return a promise, but it must be synchronous"
        );
  } catch (a) {
    throw (Cn.error("The background crashed on startup!"), a);
  }
  return Dt;
})();
background;
