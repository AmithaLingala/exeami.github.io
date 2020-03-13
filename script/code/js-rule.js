export default
{
  "name": "js",
  "match": "^(js|javascript)$",
  "kw1":["abstract", "as", "base", "bool", "break", "byte", "case", "catch",
  "char", "checked", "class", "const", "continue", "decimal", "default", "delegate",
  "do", "double", "else", "enum", "event", "explicit", "extern", "false", "finally",
  "fixed", "float", "for", "foreach", "goto", "if", "implicit", "in",
  "int",
  "interface",
  "internal",
  "is",
  "lock",
  "long",
  "namespace",
  "new",
  "null",
  "object",
  "operator",
  "out",
  "override",
  "params",
  "private",
  "protected",
  "public",
  "readonly",
  "ref",
  "return",
  "sbyte",
  "sealed",
  "short",
  "sizeof",
  "stackalloc",
  "static",
  "string",
  "struct",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "uint",
  "ulong",
  "unchecked",
  "unsafe",
  "ushort",
  "using",
  "static",
  "virtual",
  "void",
  "volatile",
  "while",
  "add",
  "alias",
  "ascending",
  "async",
  "await",
  "by",
  "descending",
  "dynamic",
  "equals",
  "from",
  "get",
  "global",
  "group",
  "into",
  "join",
  "let",
  "nameof",
  "on",
  "orderby",
  "partial",
  "remove",
  "select",
  "set",
  "unmanaged",
  "value",
  "var",
  "when",
  "where",
  "yield"],
  "kw2":["function","var"],
  "rules": [
    ["area comment","^/\\*([^*]|\\*(?!/))*\\*/$"],
    ["area comment continue","^/\\*([^*]|\\*(?!/))*\\*?$"],
    ["line comment","^//[^\\n]*$"],
    ["template string","^(`([^`$]|\\\\`|\\$\\{([^}]|`([^`]|\\\\`)*`)*\\}?|\\$([^{]|$))*`?)$",[
      [
        ["text","^([^$]|\\\\\\$|\\$[^{])*$"],
        ["template expr","^\\$\\{([^`}]|\\\\\\}|`([^`$]|\\\\`|\\$[^{]|\\$\\{[^}]*\\}?)*(`|$))*\\}?$"]
      ]
    ]],
    ["double quote","\"([^\"]|\\\\\")*\"?"],
    ["single quote","^'([^']|\\\\')'?$"],
    ["directive","^#(\\S*)$"],
    ["open paren","^\\($"],
    ["close paren","^\\)$"],
    ["open square","^\\[$"],
    ["close square","^\\]$"],
    ["open curly","^{$"],
    ["close curly","^}$"],
    ["operator","^([-<>~%^&*/+?|.,:;]|<<|>>|\\*\\*|\\|\\||&&|--|\\+\\+|[-+*|&%/]=|[!=](=?=?|>))$"],
    ["identifier","^([_A-Za-z]\\w*)$"],
    ["number","^(\\d*\\.?\\d+([eE][-+]?\\d*)?|0x\\d+)$"],
    ["whitespace","^(\\s+)$"],
    ["line continue","^\\\\\\n?$"],
    ["shebang","^(#![^\\n]*)$"]
  ]
}
