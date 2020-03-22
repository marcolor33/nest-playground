import path = require('path')
import * as ts from 'typescript'


export async function compile(codeString : string, transpileOptions : ts.TranspileOptions) {

    transpileOptions = {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS,
            declaration: true,
            removeComments: true,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            target: ts.ScriptTarget.ES2020,
            sourceMap: true,
            baseUrl: '../../src',
            incremental: true,
            sourceRoot : '../'
        } as ts.CompilerOptions,
        exclude: [
            'node_modules', 
            'dist',
            'external'
        ]
    } as ts.TranspileOptions
      

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

export async function dynamicRun(codeString : string) {

    const transpileOptions = {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS,
        } as ts.CompilerOptions
    } as ts.TranspileOptions


    const jsCodeString = await compile(codeString,transpileOptions)
    const resultModule = eval(jsCodeString)
    return resultModule

}