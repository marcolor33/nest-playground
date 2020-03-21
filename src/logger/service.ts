import { Logger, Injectable, Scope } from '@nestjs/common'
import { appendFileSync, createWriteStream, writeFileSync, openSync, existsSync } from 'fs'
import path = require('path')
import chalk = require('chalk')

import moment = require('moment')
import { isObject } from 'utils/utils'


function composeConsoleLogString(consoleType: string, message: any, context: string, trace?: string) {
    const timeColor = 'white'
    const contextColor = 'yellow'
    const messageColor = 'blue'
    const errorColor = 'red'


    const timeString = moment().toISOString(true)
    const finalMessage = isObject(message) ? JSON.stringify(message, null, 2) : message

    const timePart = `[${chalk[timeColor](`${timeString}`)}]`

    const contextPart = `${chalk[contextColor](`[ ${context} ]`)}`

    const messagePart = `${chalk[consoleType === 'error' ? errorColor : messageColor](`${finalMessage}`)}`

    let consoleLogString = `${timePart} ${contextPart} ${messagePart}`

    if (trace) {
        const errorPart = `${chalk[errorColor](`${trace}`)}`
        consoleLogString += `\n${errorPart}`
    }

    return consoleLogString


}


function composelogFileString(message: any, context: string, trace?: string) {

    const finalMessage = isObject(message) ? JSON.stringify(message, null, 2) : message

    const timeString = moment().toISOString(true)

    let logFileString = `[${timeString}] [${context}] : ${finalMessage}\n`

    if (trace) {
        logFileString += `${trace}\n`
    }
    return logFileString

}


async function appendLogFile(context: string, logFileMessage: string) {

    const logDir = 'logs'
    const logFileName = `${context}.log`
    const logFilePath = path.resolve(logDir, logFileName)

    appendFileSync(logFilePath, logFileMessage)
}

@Injectable({
    scope: Scope.TRANSIENT
})
export class MyLogger extends Logger {



    generalLog(consoleType: string, message: any, context: string, trace?: string) {

        const consoleLogString = composeConsoleLogString(consoleType, message, context, trace)

        if (consoleType === 'error') {
            console.error(consoleLogString)
        } else {
            console.log(consoleLogString)
        }

        if (process.env.NODE_ENV === 'production' || process.env.LOG_FILE === '1') {

            const logFileString = composelogFileString(message, context, trace)
            appendLogFile(context, logFileString)
        }


    }


    log(message: any, context: string = this.context) {

        const finalContext = context || this.context || 'log'
        this.generalLog('log', message, finalContext)

    }

    error(message: any, trace?: string, context?: string) {

        const finalContext = context || this.context || 'error'
        this.generalLog('error', message, finalContext, trace)

    }

    warn(message: any, context?: string) {
        super.warn(message, context)
    }

    debug(message: any, context?: string) {
        super.debug(message, context)
    }

    verbose(message: any, context?: string) {
        super.verbose(message, context)
    }
}
