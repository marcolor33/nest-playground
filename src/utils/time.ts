import * as moment from 'moment-timezone'

export interface MomentConfig {
    timeZone: string
    config: any
}

const defaultMomentConfig = {} as MomentConfig

export default class MomentHelper {
    dateTimeFormat: string

    timeZone: string
    momentConfig: {}

    momentInstance: any

    constructor(
        language = 'en',
        config: moment.LocaleSpecification,
        datetimeFormat = 'YYYY-MM-DD HH:mm:ss'
    ) {
        // todo : save all stuff
        this.momentInstance = moment.updateLocale(language, config)

        const dumb = [
            {
                dumb: '',
            },
        ]

        const dumb2 = []
        const dum3 = {}
    }

    toString(dateTimeFormat?: string) {
        return moment()
            .tz(this.timeZone)
            .format(dateTimeFormat || this.dateTimeFormat)
    }

    parseString(datetimeString: string, dateTimeFormat?: string) {
        return moment(datetimeString)
            .tz(this.timeZone)
            .format(dateTimeFormat || this.dateTimeFormat)
    }

    dumb() {
        const instance = moment()
        return instance
    }
}
