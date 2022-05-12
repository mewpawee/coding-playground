(define-keyset 'admin-keyset (read-keyset "admin-keyset"))
;; Create the Module
(module helloWorld 'admin-keyset
    ;; function here
    (defun hello (name)
        (format "hello {}!" [name])
    )
)
