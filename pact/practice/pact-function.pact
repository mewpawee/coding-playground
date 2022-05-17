"Built in function"
"1.) at"
"(at 1 [1 2 3])"
(at 1 [1 2 3])

"2.) base64-encode base64-decode"
"(base64-encode 'Hello-encode')"
"(base64-decode word-encoded) \n"
(let* ((word-encoded (base64-encode "Hello-encode")) 
       (word-decoded (base64-decode word-encoded))
      )
(format "encoded: {} \n decoded: {}" [word-encoded word-decoded])
)

"3.) bind
