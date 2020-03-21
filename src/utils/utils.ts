
// most of the very common will put in here




const isEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(input).toLowerCase())
}

const isUndefined =  (input) => input && input !== null

const isObject = (input) => typeof input === 'object'

export {

    isEmail,
    isObject,
    isUndefined
}