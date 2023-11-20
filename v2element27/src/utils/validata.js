export function validatorUsername(rule, value, callback) {
    if (value.length < 3 || value.length > 20) {
        callback(new Error("用户名必须是3到20位的字符内"))
    } else {
        callback()
    }
}