import path = require('path')
import * as ts from 'typescript'


async function compile(codeString : string, transpileOptions : ts.TranspileOptions) {

    const externalRoot = 'C:\\Users\\Marco\\project\\nest-playground\\dist'

    // transpileOptions = {
    //     compilerOptions: {
    //         module: ts.ModuleKind.CommonJS,
    //         declaration: true,
    //         removeComments: true,
    //         emitDecoratorMetadata: true,
    //         experimentalDecorators: true,
    //         target: ts.ScriptTarget.ES2020,
    //         sourceMap: true,
    //         baseUrl: externalRoot,
    //         incremental: true,
    //         sourceRoot : externalRoot
    //     } as ts.CompilerOptions,
    //     exclude: [
    //         'node_modules', 
    //         'dist',
    //         'external'
    //     ]
    // } as ts.TranspileOptions
      

    // const result = ts.transpileModule(codeString, {
    //     compilerOptions: {
    //         module: ts.ModuleKind.CommonJS,
    //         sourceRoot
    //     }
    // })

    const result = ts.transpileModule(codeString,transpileOptions)

    console.log(JSON.stringify(result))

    return result.outputText
}

async function dynamicRun(codeString : string) {

    console.log('1')

    const externalRoot = 'C:\\Users\\Marco\\project\\nest-playground\\dist'

    console.log(externalRoot)

    const transpileOptions = {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2020,
            baseUrl: externalRoot,
            paths : {
                '*': ['*', 'dist/*']
            }
        } as ts.CompilerOptions
    } as ts.TranspileOptions





    const jsCodeString = await compile(codeString,transpileOptions)
    const resultModule = eval(jsCodeString)
    return resultModule

}

export {
    compile,
    dynamicRun
}