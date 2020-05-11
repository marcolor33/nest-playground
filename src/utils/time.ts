import * as moment from 'moment-timezone'

interface MomentConfig {
    timeZone: string
    config: any
}

const defaultMomentConfig = {
} as MomentConfig


const defaultDateTimeFormat = moment.ISO_8601

class MomentHelper {
    dateTimeFormat: string

    timeZone: string
    momentConfig: {}

    momentInstance: any

    constructor(
        language = 'en',
        config: moment.LocaleSpecification = defaultMomentConfig,
        datetimeFormat:string  = defaultDateTimeFormat
    ) {
        // todo : save all stuff
        // this.momentInstance = moment.updateLocale(language, config)
    }

    // using ISO 8601

    toString(dateTimeFormat: string = defaultDateTimeFormat) {
        return moment()
            .tz(this.timeZone)
            .format(dateTimeFormat || this.dateTimeFormat)
    }

    parseString(datetimeString: string, dateTimeFormat: string = defaultDateTimeFormat) {
        return moment(datetimeString)
            .tz(this.timeZone)
            .format(dateTimeFormat || this.dateTimeFormat)
    }

    getInstance(input?:any) {
        const instance = moment(input)
        return instance
    }
}




export {
    MomentConfig,
    defaultMomentConfig,
    defaultDateTimeFormat,
    MomentHelper
}
